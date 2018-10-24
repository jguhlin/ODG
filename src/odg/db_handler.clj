(ns odg.db-handler
  (:require
    [taoensso.timbre :as timbre]
    [clojure.core.async :as async :refer all]
    [clojure.core.reducers :as r]

    [criterium.core :as cc])

  (:import
    (org.neo4j.graphdb NotFoundException
                       NotInTransactionException
                       RelationshipType
                       DynamicLabel
                       Label)
    (org.neo4j.unsafe.batchinsert
      BatchInserter
      BatchInserters
      BatchInserterIndexProvider
      BatchInserterIndex)
    (org.neo4j.index.lucene.unsafe.batchinsert
      LuceneBatchInserterIndexProvider)))

(set! *warn-on-reflection* true)


(require '[taoensso.timbre :as timbre
           :refer (trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy logged-future with-log-level with-logging-config
                   sometimes)])
(require '[taoensso.timbre.profiling :as profiling
           :refer (pspy pspy* profile defnp p p*)])

(defonce db (atom nil))

(defn dbquote-and-escape
  [x]
  (str "\""
       (org.apache.lucene.queryparser.classic.QueryParser/escape x)
       "\""))

(defn dbquote
  [x]
  (org.apache.lucene.queryparser.classic.QueryParser/escape x))

(defmacro index-query
  [bindings & body]
  (cond
    (zero? (count bindings)) `(do ~@body)
    (symbol? (bindings 0)) `(let ~(subvec bindings 0 2)
                              (try
                                (index-query ~(subvec bindings 2) ~@body)
                                (catch Exception e#
                                  (error e#))
                                (finally
                                  (.close ~(bindings 0)))))
    :else (throw (IllegalArgumentException.
                   "index-query only allows Symbols in bindings"))))

(defn third [x]
  (nth x 2))

; Blank labels, for fast access and easy debugging
(def blank-labels (into-array org.neo4j.graphdb.Label []))
(def test-label (into-array org.neo4j.graphdb.Label [(org.neo4j.graphdb.DynamicLabel/label "Test")]))

(defn create-node
  [^org.neo4j.unsafe.batchinsert.BatchInserter db-handler
   ^java.util.Map node-properties
   node-labels]
  (try
    (.createNode db-handler node-properties node-labels)
    (catch Exception e
      (println "Caught exception: " (.getMessage e))
      (println e)
      (.printStackTrace e))))

(defn create-rel
  [^org.neo4j.unsafe.batchinsert.BatchInserter db-handler
   ^Long start
   ^Long end
   ^org.neo4j.graphdb.DynamicRelationshipType rel-type
   ^java.util.Map rel-properties]
  (try
    (.createRelationship db-handler start end rel-type rel-properties)
    (catch Exception e
      (println "Caught exception: " (.getMessage e))
      (println e)
      (.printStackTrace e)
      (println db-handler)
      (println start)
      (println end)
      (println rel-type)
      (println rel-properties)
      (System/exit 99))))


; Get node-index
(defn get-node-index
  ([^LuceneBatchInserterIndexProvider index-manager indexname]
   (let [idx (.nodeIndex index-manager indexname {"type" "exact" "to_lower_case" "true"})]
     (.flush idx)
      ; (.setCacheCapacity idx "id" 500)
     idx)))

; Get fulltext index
(defn get-fulltext-node-index
  ([^LuceneBatchInserterIndexProvider index-manager indexname]
   (let [idx (.nodeIndex index-manager indexname {"type" "fulltext" "to_lower_case" "true"})]
     idx)))

; Get index name (species + version OR :index-name)
(defn get-index-name
  [data]
  (if (:index-name data)
    (:index-name data)
    (clojure.string/lower-case
      (clojure.string/replace
        (clojure.string/join " " [(:species data) (:version data)])
        #"\s|\." "_"))))

(defn split-id [id]
  (try
    (when (string? id)
      (distinct
        (map
          clojure.string/trim
          (concat
            [id]
            (clojure.string/split id #"\|")
            (clojure.string/split id #"[\|:]")
            (clojure.string/split id #"[\s\|:]")
            (clojure.string/split id #"[\s\|:\.]")))))
    (catch Exception e
      (do
        (error e)
        (println "Error on splitting id " id)
        (println e)
        (System/exit 99)))))

; Add support for new vectors...
(defn possible-ids [current-id]
  (if (vector? current-id)
    (apply concat (map possible-ids current-id))
    (if (nil? current-id) ""
      (try
        (concat
          [current-id]
          (reverse
            (sort-by
              count
              (filter
                (fn [^String x] (>= (.length x) 4)) ; Length of 4 for unique ID's is probably a safe bet.
                (for [id (distinct
                           (concat
                             [current-id] ; Also test the ID we are given
                             (split-id current-id)
                             (map clojure.string/lower-case (split-id current-id))
                             (map clojure.string/upper-case (split-id current-id))))]
                  id)))))
        (catch Exception e
          (do
            (error e)
            (error "possible-ids run with" current-id)
            (println current-id)
            (println e)
            (.printStackTrace e)))))))

(defn get-ids
  ([node-properties]
   (filter
     identity
     (list
       (get node-properties "id")
      ; (get node-properties "name") ; Interferes with OBO import...
       (get node-properties "pacid")
       (get node-properties "geneid")
       (get node-properties "gene")
       (get node-properties "gene_id")
       (get node-properties "gene-id")
       (get node-properties "transcript_id")
       (get node-properties "transcript")
       (get node-properties "protein_id")
       (get node-properties "tss_id")
       (get node-properties "oid")
       (get node-properties "locus_tag")
       (get node-properties "note")
       (get node-properties "product") ; More suited to fulltext ID
       (get node-properties "other_name")))) ; More suited to "fulltext" ID
      ;(get node-properties "definition") ; Causes problems with IPR nodes

  ([id-fields node-properties]
   (filter
     identity
     (mapcat (fn [x] (get node-properties x)) id-fields))))

; Get existing IDs in batch import set, including some optional ID fields
; Add more fields when necessary
(defn get-ids-in-batch
  [nodes]
  (into #{}
        (flatten
          (filter
            identity
            (concat
              (map (comp get-ids first) nodes))))))

(defn get-relationship-endpoints
  [rels]
  (into #{}
        (remove
          integer?
          (concat
            (map (comp second) rels)
            (map (comp third) rels)))))

; Identify which IDs need to be searched for in the index
(defn identify-index-targets
  [data]
  (let [node-ids (into
                   #{}
                   (distinct
                     (concat
                       (get-ids-in-batch (:nodes data))
                       (get-ids-in-batch (:nodes-update-or-create data)))))
        rel-endpoints (concat
                        (get-relationship-endpoints (:rels data))
                        (get-ids-in-batch (:nodes-update data)))]

    (remove node-ids rel-endpoints)))

(defn batch-create-node
  [^org.neo4j.unsafe.batchinsert.BatchInserter db-handler
   ^java.util.Map node-properties
   node-labels]
  (try
    [(get-ids node-properties) (.createNode db-handler node-properties node-labels)]
    (catch Exception e
      (println "Caught exception: " (.getMessage e))
      (println e)
      (.printStackTrace e))))

(defn query-index
  [^BatchInserterIndex idx id]
  (first
    (filter
      identity
      (for [id (flatten (remove clojure.string/blank? (possible-ids id)))]
        (try
          (index-query
            [query (.query idx "id" (dbquote-and-escape id))]
            (let [results (set query)]
              (cond
                (= 1 (count results)) results
                (= 0 (count results)) nil
                (> 1 (count results)) results)))
          (catch Exception e (println "Got error for index query for"  id ":" (.getMessage e) " " e)))))))
; Previously an error was thrown if there was more than 1 result, but it should be handled later

; HB stands for "handle batch" for certain operations that only happen inside the batch handler

; Flush index before querying!
(defn hb-query
  [^BatchInserterIndex idx id]
  (.flush idx)
  (first
    (filter
      identity
      (try
        (for [id (flatten (remove clojure.string/blank? (possible-ids id)))]
          (index-query
            [query (.query idx "id" (dbquote-and-escape id))]
            (let [results (set query)]
              (cond
                (= 1 (count results)) (first results)
                (= 0 (count results)) nil
                (> 1 (count results)) (do
                                        (info (str "More than one node found for index search for " id))
                                        (throw (Throwable. (str "More than one node found for index search for " query)))
                                        nil)))))

        (catch Exception e
          (println "Caught exception: " (.getMessage e)))))))

(defn hb-query-ids-
  [^BatchInserterIndex idx ids]
  (.flush idx)
  (let [query (memoize (fn [id] (hb-query idx id)))]
   (into {}
         (doall
           (for [id (filter query ids)
                 :let [node-id (query id)]]
             {id node-id})))))



; Flush index before querying!
(defn hb-query-node
  [^BatchInserterIndex idx node]
  (.flush idx)
  (first
    (filter
      identity
      (for [id (distinct (flatten (map possible-ids (remove nil? (remove clojure.string/blank? (get-ids (first node)))))))]
        (index-query
          [query (.query idx "id" (dbquote-and-escape id))]
          (let [results (set query)]
            (cond
              (= 1 (count results)) (first results)
              (= 0 (count results)) nil
              (< 1 (count results)) (do
                                      (warn (str "More than one node found for index search for " id))
                                      (first results)))))))))

(defn hb-query-node-exact
  [^BatchInserterIndex idx node]
  (when (not (clojure.string/blank? (get (first node) "id")))
    (index-query
      [query (.query idx "id" (dbquote (get (first node) "id")))]
      (let [results (set query)]
        (cond
          (= 1 (count results)) (first results)
          (= 0 (count results)) nil
          (< 1 (count results)) (do
                                  (warn (str "More than one node found for index search for " (get node "id")))
                                  (first results)))))))



(defn hb-get-node-ids-
  [^BatchInserterIndex idx nodes]
  (.flush idx)
  (let [query (memoize (fn [node] (hb-query-node idx node)))]
   (into {}
         (doall
           (for [node (filter query nodes)
                 id (get-ids (first node))
                 :let [node-id (query node)]]
             {id node-id})))))


; Identify which nodes exist in the index and return two lists... Return full definition but also :node_id (somehow) if the node already exists...
(defn hb-split-existing-
  [^BatchInserterIndex idx nodes exact-ids]
  (.flush idx)
  (let [query (if exact-ids
                (memoize (fn [node] (hb-query-node-exact idx node)))
                (memoize (fn [node] (hb-query-node idx node))))]
    [(filter query nodes)
     (remove query nodes)
     (into {}
           (doall
             (for [node (filter query nodes)
                   id (get-ids (first node))
                   :let [node-id (query node)]]
               {id node-id})))]))


; (filter #(= (:id %) "MI:1290") (map first (:nodes-update-or-create psi)))

; Handle Batch ("hb") Create Nodes FN
(defn hb-create-nodes-
  [db nodes]
  (into
    {}
    (doall
      (for [[ids node-id]
            (map (fn [[x y]]
                   (batch-create-node db x y))
                 nodes)
            id ids]
        {id node-id}))))

; Fn to update nodes
(defn update-node
  [^org.neo4j.unsafe.batchinsert.BatchInserter db node-id properties labels]
  (.setNodeProperties
    db
    node-id
    (merge-with
      (fn [x y]
        (if (or
              (and (string? x) (string? y) (= (clojure.string/trim x) (clojure.string/trim y)))
              (= x y))
          x
          (clojure.string/join "\n" [x y])))
      (dissoc properties "id")
      (.getNodeProperties db node-id)))

  (.setNodeLabels
    db
    node-id
    (into-array org.neo4j.graphdb.Label
                (distinct
                  (reduce
                    into []
                    [(.getNodeLabels db node-id)
                     labels])))))

; TODO: Add support for exact-ids in other logic
(defn handle-batch
  [^org.neo4j.unsafe.batchinsert.BatchInserter db index-manager mapping data]

  (info "Handle batch entered... " (:comment data) " " (:indices data))

  (let [new-ids           (:new-ids data)
        index-targets     (:index-targets data)
        exact-ids         (:exact-ids data)

        ; Identify which nodes exist for :nodes-update-or-create
        [nodes-to-update nodes-to-create existing-nodes-map]
        (hb-split-existing-
          (get-node-index index-manager (first (:indices data)))
          (:nodes-update-or-create data)
          exact-ids)

        ; Add nodes-update here
        created-nodes-map (hb-create-nodes-
                            db
                            (distinct
                              (reduce
                                into
                                [
                                 [] ; Blank so we always get a vector in the end
                                 (:nodes data)
                                 (:nodes-create data)
                                 nodes-to-create])))

        ; Make nodes
        nodes-map         (doall
                            (merge ; Order is important here, the nodes just created should always be added last (in case they weren't part of update-or-create)
                                    existing-nodes-map
                                    (hb-get-node-ids-
                                      (get-node-index index-manager (first (:indices data)))
                                      (:nodes-update data))
                                    (hb-query-ids-
                                      (get-node-index index-manager (first (:indices data)))
                                      index-targets)
                                    created-nodes-map))]


    ; Update nodes as necessary....
    (doseq [[properties labels] (concat nodes-to-update (:nodes-update data))]
      (if-let [node-id (get nodes-map (get properties "id"))]
        (update-node
          db
          node-id
          properties
          labels)
        (do
          (println "ERROR:" (get properties "id")" not found! Update nodes")
          (println (:comment data))
          (println (count (:nodes-update data)))
          (println (count nodes-map))
          (println (get nodes-map (get properties "id")))
          (println properties)
          (println (:indices data))
          (println (keys data)))))




    ; TODO: Add updated nodes updated properties to index with .updateOrAdd
    (doseq [^BatchInserterIndex idx (map (partial get-node-index index-manager) (:indices data))]
      (doseq [[val node-id] created-nodes-map]
        (.add idx node-id {"id" val})
        (when-let [alt-ids (get mapping val)]
          (doseq [alt-id alt-ids]
            (.add idx node-id {"id" alt-id}))))
      (.flush idx))

    ; TODO: Later, add additional fields to fulltext index, especially for GO terms and similar
    (doseq [^BatchInserterIndex idx (map (partial get-fulltext-node-index index-manager) (:fulltext-indices data))]
      (doseq [[val node-id] created-nodes-map]
        (.add idx node-id {"id" val}))

        ; .add if exists
        ; note
        ; gene
        ; description
        ; gene_symbol
        ; protein_definition_header

      (.flush idx))

    (doseq [[rel-type start end properties] (:rels data)]

      (when
        (not
          (and
            (or (string? start) (integer? start) (vector? end))
            (or (string? end) (integer? end) (vector? end))))
        (println "Error with relationship")
        (println rel-type)
        (println start)
        (println end)
        (println properties)
        (System/exit 99))


      (let [start-node (cond
                         (integer? start) start
                         (string? start) (get nodes-map start)
                         (vector? start) (some
                                           (fn [x]
                                             (get nodes-map x))
                                           start))

            end-node (cond
                       (integer? end) end
                       (string? end) (get nodes-map end)
                       (vector? end) (some
                                         (fn [x]
                                           (get nodes-map x))
                                         end))]

        (when (string? end-node)
          (println "Still a string!")
          (println end-node)
          (println (get nodes-map end-node))
          (System/exit 99))

        (if (and start-node end-node)
          (create-rel ; if conditions above are true
                      db
                      start-node
                      end-node
                      rel-type
                      properties))))
;        (do ; if conditions above are false
;          (if (and (string? start) (not (get nodes-map start)))
;           (println start "not found! Start of rel"))
;          (if
;            (and (string? end) (not (get nodes-map end)))
;            (println end "not found! End of rel...  Found:"
;                     (get nodes-map end)
;                     "Found:" (get nodes-map (clojure.string/trim end))
;                     "index-targets:" (count index-targets)
;                     "nodes-map:" (count nodes-map)
;                     "nodes-map:" (class nodes-map)
;                     )))))
   1))

; Re-implementing batchdb-server as async channels

; Async server, buffer up to 10k operations
(def batchdb-server (chan 10000))

(defn -db-connect [db_path memory]
  (println "Starting Batch Database at" db_path "with" memory)
  (let [db (org.neo4j.unsafe.batchinsert.BatchInserters/BatchInserter
             (java.io.File. db_path)
             {"dbms.pagecache.memory" memory}
             "dump_configuration" "true"
             "cache_type" "soft")
        index-manager (org.neo4j.index.lucene.unsafe.batchinsert.LuceneBatchInserterIndexProvider. db)]
    (set-state! (merge @state
                  {:db db
                   :index-manager index-manager
                   :mapping {}}))))

(defn -load-mapping [mapping-file]
  (set-state!
    (merge
      @state
      {:mapping
       (into
         {}
         (with-open [rdr (clojure.java.io/reader mapping-file)]
           (doall
             (for [[main-id & alt-ids] (map (fn [x] (clojure.string/split x #"\t")) (line-seq rdr))]
               {main-id alt-ids}))))})))

; Batch DB server's main go loop
(defn execute-message
  [message]
  (case (first message)
    :connect  (apply -db-connect (rest message))
    :load-mapping (apply -load-mapping (rest message))
    ; Exclusively for debugging purposes...
    :get-db (let [dbd (:db @state)] dbd)
    :get-node-index
            (let [[index-name] (rest message)
                  index-manager (:index-manager @state)
                  idx (get-node-index index-manager index-name)]
              idx)
    ; Main place where things will happen
    :batch
      (let [[batch-package] (rest message)]
           db            (:db @state)
           index-manager (:index-manager @state)
           mapping       (:mapping @state)
       (handle-batch db index-manager mapping batch-package))

    :node (let [[^java.util.Map node-properties node-labels out] (rest message)
                 ^org.neo4j.unsafe.batchinsert.BatchInserter db (:db @state)]
             (println "DB:" db)
             (println "Props:" node-properties)
             (println "Labels:" node-labels)
             (>! out (.createNode db node-properties node-labels)))

    :rel (let [[out]] (rest message)
           (>! out "Not yet implemented"))

    :query-properties
     (let [[data out] (rest message)
           index-name (:index data)
           index-manager (:index-manager @state)
           idx (get-node-index index-manager index-name)
           ^org.neo4j.unsafe.batchinsert.BatchInserter db (:db @state)]
       (doall
         (filter
           identity
           (for [id (:query data)]
             (if-let [results (query-index idx id)]
               (let [results-fn (if (:results-fn data) (:results-fn data) identity)]
                 (>! out
                   [id
                    ((:results-fn data)
                     (.getNodeProperties
                      db
                      (if (:filter-fn data)
                        (some (fn [node-id] ((:filter-fn data)))
                          node-id
                          (.getNodeProperties db node-id
                            (map
                              (fn [x] (.name x)
                                (.getNodeLabels db node-id)
                                results))))
                        (first results))))])))))))

    :query (let [[data out] (rest message)
                  index-name (:index data)
                  index-manager (:index-manager @state)
                  idx (get-node-index index-manager index-name)
                  ^org.neo4j.unsafe.batchinsert.BatchInserter db (:db @state)]
              (.flush idx)
              (debug "Query called, using " (:index data))
              (doall
                (filter
                  identity
                  (for [id (:query data)]
                    (if-let [results (query-index idx id)]
                       ; :alt-id-fn REMOVED as it is no longer used. Left here because it could be very useful
                       ;(if (:alt-id-fn data) ; Remodel so it can support multiple outputs
                       ; Only being used in interproscan so far
                       ;(query-index idx ((:alt-id-fn data) id))))]
                       (>! out
                         [id
                          (if (:filter-fn data)
                           (first (filter (fn [node-id] ((:filter-fn data)
                                                         node-id
                                                         (.getNodeProperties db node-id)
                                                         (map (fn [x] (.name x)) (.getNodeLabels db node-id)))) results))
                           (first results))]))))))

    :node (let [[node-promise node-properties node-labels] (rest message)]
            (deliver node-promise (create-node (:db @state) node-properties node-labels))
            nil)

    ; Create rel does not return anything
    :rel (let [[start end rel-type rel-properties] (rest message)]
           (create-rel (:db @state) start end rel-type rel-properties)
           nil)

    ; Add label to node
    :add-labels-to-node
    (let [[node-id labels] (rest message)
          ^org.neo4j.unsafe.batchinsert.BatchInserter db (:db @state)]
      (.setNodeLabels
        db
        node-id
        (into-array org.neo4j.graphdb.Label
                    (distinct
                      (reduce
                        into []
                        [(.getNodeLabels db node-id)
                         labels])))))

    ; Most batch processes go here
    :batch
      (let [[batch-package] (rest message)
            db            (:db @state)
            mapping       (:mapping @state)
            index-manager (:index-manager @state)]
        (handle-batch db index-manager mapping batch-package))

    :shutdown
      (do
        (println "Shutting down")
        (println cause)
        (let [^org.neo4j.unsafe.batchinsert.BatchInserter db (:db @state)]
          ^LuceneBatchInserterIndexProvider index-manager (:index-manager @state)
            (.shutdown db)
            (.shutdown index-manager)
            (set-state! (merge @state {:db nil}))))))

(defn start-dbh-server []
  (go-loop [message <! batchdb-server]
    (when message
      (execute-message message)
      (recur (<! batchdb-server)))))

(defn connect [db_path memory]
  (reset! db nil)
  (call! @db [:connect db_path memory]))

(defn load-mapping [mapping-file]
  (call! @db [:load-mapping mapping-file]))

; Fn's for submitting jobs and parsing batch-packages
(defn- convert-map-previous
  [m]
  (doall
    (apply merge
           (for [[k v] m
                 :when (and (not= "." v) (not (nil? v)))]
             {(name k) v}))))

(defn- convert-map
  [m]
  (into
    {}
    (r/foldcat
      (r/map
        (fn convert-props
          [k v]
          {(name k) v})
        (r/filter
          (fn filter-on-values
            [k v]
            v)
          m)))))

(defn convert-nodes
  [nodes]
  (r/foldcat
    (r/map
      (fn convert-nodes
        [[n l]]
        [(convert-map n) (into-array org.neo4j.graphdb.Label l)])
      nodes)))

(defn convert-rels
  [rels]
  (r/foldcat
    (r/remove
      (fn [[rel-type start end props]]
        (or (nil? start) (nil? end)))
      (r/map
        (fn convert-rels
          [[rel-type start end properties]]
          [rel-type start end (convert-map properties)])
        rels))))

;(defn convert-nodes
;  [nodes]
;  (doall
;    (for [node nodes]
;      [(convert-map (first node)) (into-array org.neo4j.graphdb.Label (second node))])))
;
;(defn convert-rels
;  [rels]
;  (doall
;    (for [[rel-type start end properties] rels]
;      [rel-type start end (convert-map properties)])))

; add-main-idx
(defn add-main-idx
  [indices]
  (remove
    nil?
    (if ((apply hash-set indices) "main")
      indices
      (conj indices "main"))))

; add-main-ft-idx
(defn add-main-ft-idx
  [indices]
  (remove
    nil?
    (if ((apply hash-set indices) "main-ft")
      indices
      (conj indices "main-ft"))))

(defn add-labels-to-node
  [node-id labels]
  (cast!
    @db
    :add-labels-to-node
    node-id
    labels))

(defn submit-batch-job
  [batch-package]
  (info "Batch Job, Indices: " (:indices batch-package))
  (info "Batch Job, Rels: " (count (:rels batch-package)))

  (if-not (nil? @db)
    (let [new-nodes                  (future (doall (convert-nodes (distinct (:nodes batch-package)))))
          new-nodes-update-or-create (future (doall (convert-nodes (distinct (:nodes-update-or-create batch-package)))))
          new-nodes-update           (future (doall (convert-nodes (distinct (:nodes-update batch-package)))))
          new-rels                   (future (doall (convert-rels  (distinct (:rels batch-package)))))
          nodes-create               (future (doall (convert-nodes (distinct (:nodes-create batch-package)))))

          updated-package
            (-> (transient {})
              (assoc! :nodes                  @new-nodes
                      :nodes-update-or-create @new-nodes-update-or-create
                      :nodes-update           @new-nodes-update
                      :nodes-create           @nodes-create
                      :rels                   @new-rels
                      :exact-ids              (:exact-ids batch-package)
                      :comment                (:comment batch-package)
                      :indices                (add-main-idx (into [] (:indices batch-package)))
                      :fulltext-indices       (add-main-ft-idx (into [] (:fulltext-indices batch-package))))
              persistent!)]


      (cast!
        @db
        :batch
        (merge
          {:new-ids             (distinct (get-ids-in-batch (:nodes updated-package)))
           :index-targets       (identify-index-targets updated-package)}

          updated-package)))
    (println "DB not connected")))

(defn submit-batch-job-and-wait
  [batch-package]
  (if-not (nil? @db)
    (let [new-nodes                  (future (convert-nodes (distinct (:nodes batch-package))))
          new-nodes-update-or-create (future (convert-nodes (distinct (:nodes-update-or-create batch-package))))
          new-nodes-update           (future (convert-nodes (distinct (:nodes-update batch-package))))
          new-rels                   (future (convert-rels (distinct (:rels batch-package))))

          updated-package
            (-> (transient {})
              (assoc! :nodes                  @new-nodes
                      :nodes-update-or-create @new-nodes-update-or-create
                      :nodes-update           @new-nodes-update
                      :rels                   @new-rels
                      :indices                (add-main-idx (into [] (:indices batch-package)))
                      :fulltext-indices       (add-main-ft-idx (:fulltext-indices batch-package)))
              persistent!)]


      (call!
        @db
        :batch
        (merge
          {:new-ids             (distinct (get-ids-in-batch (:nodes updated-package)))
           :index-targets       (identify-index-targets updated-package)}

          updated-package)))
    (println "DB not connected")))

; Some jobs required or supply a response, and block until that response has been sent. This is the entry point for that.
(defn batch-get-data
  [batch-package]
  (if-not (nil? @db)
      (call! ; Causes this to wait until a response is available...
        @db
        (:action batch-package)
        batch-package)
    (println "DB not connected")))

(defn shutdown []
  (Thread/sleep 10000)
  (info "Batch Database Shutdown Started")
  (shutdown! @db)
  (reset! db nil)
  (info "Batch Database Shutdown Complete"))

; TODO: Index-manager actor!

 ; TODO: Create pre-processing environment
;
; {:nodes = nodes to add
;  :rels = rels to add (check if ID is in nodes or if we must hit the index, delete if not found at all)
;  :indices = indices to add these nodes and descriptions too, the first one is considered the primary index for these nodes (otherwise main index)
;  :nodes-create-if-new = add these nodes (and optional rels as 3rd parameter) if this node is not found in the first index provided (or main)
;  :nodes-update-or-create = add these nodes or merge these in with existing nodes
;  :fields-to-index = Fields that should be added to the indices (if they exist and are not null) TODO

; nodes-create-if-new ---> Not implemented yet
