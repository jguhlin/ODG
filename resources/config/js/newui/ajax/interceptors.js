// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29073__auto__,k__29074__auto__){
var self__ = this;
var this__29073__auto____$1 = this;
return this__29073__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29074__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29075__auto__,k34343,else__29076__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
var G__34347 = k34343;
var G__34347__$1 = (((G__34347 instanceof cljs.core.Keyword))?G__34347.fqn:null);
switch (G__34347__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34343,else__29076__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__34348,opts){
var self__ = this;
var map__34349 = p__34348;
var map__34349__$1 = ((((!((map__34349 == null)))?((((map__34349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34349):map__34349);
var request__$1 = cljs.core.get.call(null,map__34349__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__34351 = this;
var map__34351__$1 = ((((!((map__34351 == null)))?((((map__34351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34351):map__34351);
var request__$2 = cljs.core.get.call(null,map__34351__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__34353,xhrio){
var self__ = this;
var map__34354 = p__34353;
var map__34354__$1 = ((((!((map__34354 == null)))?((((map__34354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34354):map__34354);
var response__$1 = cljs.core.get.call(null,map__34354__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__34356 = this;
var map__34356__$1 = ((((!((map__34356 == null)))?((((map__34356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34356):map__34356);
var response__$2 = cljs.core.get.call(null,map__34356__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29087__auto__,writer__29088__auto__,opts__29089__auto__){
var self__ = this;
var this__29087__auto____$1 = this;
var pr_pair__29090__auto__ = ((function (this__29087__auto____$1){
return (function (keyval__29091__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,cljs.core.pr_writer,""," ","",opts__29089__auto__,keyval__29091__auto__);
});})(this__29087__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,pr_pair__29090__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__29089__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34342){
var self__ = this;
var G__34342__$1 = this;
return (new cljs.core.RecordIter((0),G__34342__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29071__auto__){
var self__ = this;
var this__29071__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29068__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29077__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29069__auto__){
var self__ = this;
var this__29069__auto____$1 = this;
var h__28887__auto__ = self__.__hash;
if(!((h__28887__auto__ == null))){
return h__28887__auto__;
} else {
var h__28887__auto____$1 = ((function (h__28887__auto__,this__29069__auto____$1){
return (function (coll__29070__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__29070__auto__));
});})(h__28887__auto__,this__29069__auto____$1))
.call(null,this__29069__auto____$1);
self__.__hash = h__28887__auto____$1;

return h__28887__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34344,other34345){
var self__ = this;
var this34344__$1 = this;
return (!((other34345 == null))) && ((this34344__$1.constructor === other34345.constructor)) && (cljs.core._EQ_.call(null,this34344__$1.name,other34345.name)) && (cljs.core._EQ_.call(null,this34344__$1.request,other34345.request)) && (cljs.core._EQ_.call(null,this34344__$1.response,other34345.response)) && (cljs.core._EQ_.call(null,this34344__$1.__extmap,other34345.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29082__auto__,k__29083__auto__){
var self__ = this;
var this__29082__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__29083__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29082__auto____$1),self__.__meta),k__29083__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29083__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29080__auto__,k__29081__auto__,G__34342){
var self__ = this;
var this__29080__auto____$1 = this;
var pred__34358 = cljs.core.keyword_identical_QMARK_;
var expr__34359 = k__29081__auto__;
if(cljs.core.truth_(pred__34358.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__34359))){
return (new ajax.interceptors.StandardInterceptor(G__34342,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34358.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__34359))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__34342,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34358.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__34359))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__34342,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29081__auto__,G__34342),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29085__auto__){
var self__ = this;
var this__29085__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29072__auto__,G__34342){
var self__ = this;
var this__29072__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__34342,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29078__auto__,entry__29079__auto__){
var self__ = this;
var this__29078__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29079__auto__)){
return this__29078__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29079__auto__,(0)),cljs.core._nth.call(null,entry__29079__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29078__auto____$1,entry__29079__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__29109__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__29109__auto__,writer__29110__auto__){
return cljs.core._write.call(null,writer__29110__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__34346){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__34346),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__34346),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__34346),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__34346,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__34362,xhrio){
var map__34363 = p__34362;
var map__34363__$1 = ((((!((map__34363 == null)))?((((map__34363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34363):map__34363);
var description = cljs.core.get.call(null,map__34363__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__29609__auto__ = [];
var len__29602__auto___34369 = arguments.length;
var i__29603__auto___34370 = (0);
while(true){
if((i__29603__auto___34370 < len__29602__auto___34369)){
args__29609__auto__.push((arguments[i__29603__auto___34370]));

var G__34371 = (i__29603__auto___34370 + (1));
i__29603__auto___34370 = G__34371;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((3) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29610__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq34365){
var G__34366 = cljs.core.first.call(null,seq34365);
var seq34365__$1 = cljs.core.next.call(null,seq34365);
var G__34367 = cljs.core.first.call(null,seq34365__$1);
var seq34365__$2 = cljs.core.next.call(null,seq34365__$1);
var G__34368 = cljs.core.first.call(null,seq34365__$2);
var seq34365__$3 = cljs.core.next.call(null,seq34365__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__34366,G__34367,G__34368,seq34365__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29073__auto__,k__29074__auto__){
var self__ = this;
var this__29073__auto____$1 = this;
return this__29073__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29074__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29075__auto__,k34374,else__29076__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
var G__34378 = k34374;
var G__34378__$1 = (((G__34378 instanceof cljs.core.Keyword))?G__34378.fqn:null);
switch (G__34378__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34374,else__29076__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__34379,request){
var self__ = this;
var map__34380 = p__34379;
var map__34380__$1 = ((((!((map__34380 == null)))?((((map__34380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34380):map__34380);
var content_type__$1 = cljs.core.get.call(null,map__34380__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__34382 = this;
var map__34382__$1 = ((((!((map__34382 == null)))?((((map__34382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34382):map__34382);
var content_type__$2 = cljs.core.get.call(null,map__34382__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__34382,map__34382__$1,content_type__$2,map__34380,map__34380__$1,content_type__$1){
return (function (p1__34372_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__28433__auto__ = p1__34372_SHARP_;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__34382,map__34382__$1,content_type__$2,map__34380,map__34380__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__34384,xhrio){
var self__ = this;
var map__34385 = p__34384;
var map__34385__$1 = ((((!((map__34385 == null)))?((((map__34385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34385):map__34385);
var format = map__34385__$1;
var read__$1 = cljs.core.get.call(null,map__34385__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__34387 = this;
var map__34387__$1 = ((((!((map__34387 == null)))?((((map__34387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34387):map__34387);
var format__$1 = map__34387__$1;
var read__$2 = cljs.core.get.call(null,map__34387__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__34390 = status;
switch (G__34390) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e34391){if((e34391 instanceof Object)){
var e = e34391;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e34391;

}
}
}
}catch (e34389){if((e34389 instanceof Object)){
var e = e34389;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e34389;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29087__auto__,writer__29088__auto__,opts__29089__auto__){
var self__ = this;
var this__29087__auto____$1 = this;
var pr_pair__29090__auto__ = ((function (this__29087__auto____$1){
return (function (keyval__29091__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,cljs.core.pr_writer,""," ","",opts__29089__auto__,keyval__29091__auto__);
});})(this__29087__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,pr_pair__29090__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__29089__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34373){
var self__ = this;
var G__34373__$1 = this;
return (new cljs.core.RecordIter((0),G__34373__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29071__auto__){
var self__ = this;
var this__29071__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29068__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29077__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29069__auto__){
var self__ = this;
var this__29069__auto____$1 = this;
var h__28887__auto__ = self__.__hash;
if(!((h__28887__auto__ == null))){
return h__28887__auto__;
} else {
var h__28887__auto____$1 = ((function (h__28887__auto__,this__29069__auto____$1){
return (function (coll__29070__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__29070__auto__));
});})(h__28887__auto__,this__29069__auto____$1))
.call(null,this__29069__auto____$1);
self__.__hash = h__28887__auto____$1;

return h__28887__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34375,other34376){
var self__ = this;
var this34375__$1 = this;
return (!((other34376 == null))) && ((this34375__$1.constructor === other34376.constructor)) && (cljs.core._EQ_.call(null,this34375__$1.read,other34376.read)) && (cljs.core._EQ_.call(null,this34375__$1.description,other34376.description)) && (cljs.core._EQ_.call(null,this34375__$1.content_type,other34376.content_type)) && (cljs.core._EQ_.call(null,this34375__$1.__extmap,other34376.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29082__auto__,k__29083__auto__){
var self__ = this;
var this__29082__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__29083__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29082__auto____$1),self__.__meta),k__29083__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29083__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29080__auto__,k__29081__auto__,G__34373){
var self__ = this;
var this__29080__auto____$1 = this;
var pred__34392 = cljs.core.keyword_identical_QMARK_;
var expr__34393 = k__29081__auto__;
if(cljs.core.truth_(pred__34392.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__34393))){
return (new ajax.interceptors.ResponseFormat(G__34373,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34392.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__34393))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__34373,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34392.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__34393))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__34373,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29081__auto__,G__34373),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29085__auto__){
var self__ = this;
var this__29085__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29072__auto__,G__34373){
var self__ = this;
var this__29072__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__34373,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29078__auto__,entry__29079__auto__){
var self__ = this;
var this__29078__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29079__auto__)){
return this__29078__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29079__auto__,(0)),cljs.core._nth.call(null,entry__29079__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29078__auto____$1,entry__29079__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__29109__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__29109__auto__,writer__29110__auto__){
return cljs.core._write.call(null,writer__29110__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__34377){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__34377),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__34377),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__34377),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__34377,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29073__auto__,k__29074__auto__){
var self__ = this;
var this__29073__auto____$1 = this;
return this__29073__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29074__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29075__auto__,k34398,else__29076__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
var G__34402 = k34398;
switch (G__34402) {
default:
return cljs.core.get.call(null,self__.__extmap,k34398,else__29076__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__34403){
var self__ = this;
var map__34404 = p__34403;
var map__34404__$1 = ((((!((map__34404 == null)))?((((map__34404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34404):map__34404);
var request = map__34404__$1;
var uri = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__34406 = ajax.interceptors.get_request_format.call(null,format);
var map__34406__$1 = ((((!((map__34406 == null)))?((((map__34406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34406):map__34406);
var write = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__28433__auto__ = headers;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29087__auto__,writer__29088__auto__,opts__29089__auto__){
var self__ = this;
var this__29087__auto____$1 = this;
var pr_pair__29090__auto__ = ((function (this__29087__auto____$1){
return (function (keyval__29091__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,cljs.core.pr_writer,""," ","",opts__29089__auto__,keyval__29091__auto__);
});})(this__29087__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,pr_pair__29090__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__29089__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34397){
var self__ = this;
var G__34397__$1 = this;
return (new cljs.core.RecordIter((0),G__34397__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29071__auto__){
var self__ = this;
var this__29071__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29068__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29077__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29069__auto__){
var self__ = this;
var this__29069__auto____$1 = this;
var h__28887__auto__ = self__.__hash;
if(!((h__28887__auto__ == null))){
return h__28887__auto__;
} else {
var h__28887__auto____$1 = ((function (h__28887__auto__,this__29069__auto____$1){
return (function (coll__29070__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__29070__auto__));
});})(h__28887__auto__,this__29069__auto____$1))
.call(null,this__29069__auto____$1);
self__.__hash = h__28887__auto____$1;

return h__28887__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34399,other34400){
var self__ = this;
var this34399__$1 = this;
return (!((other34400 == null))) && ((this34399__$1.constructor === other34400.constructor)) && (cljs.core._EQ_.call(null,this34399__$1.__extmap,other34400.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29082__auto__,k__29083__auto__){
var self__ = this;
var this__29082__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__29083__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29082__auto____$1),self__.__meta),k__29083__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29083__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29080__auto__,k__29081__auto__,G__34397){
var self__ = this;
var this__29080__auto____$1 = this;
var pred__34408 = cljs.core.keyword_identical_QMARK_;
var expr__34409 = k__29081__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29081__auto__,G__34397),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29085__auto__){
var self__ = this;
var this__29085__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29072__auto__,G__34397){
var self__ = this;
var this__29072__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__34397,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29078__auto__,entry__29079__auto__){
var self__ = this;
var this__29078__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29079__auto__)){
return this__29078__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29079__auto__,(0)),cljs.core._nth.call(null,entry__29079__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29078__auto____$1,entry__29079__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__29109__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__29109__auto__,writer__29110__auto__){
return cljs.core._write.call(null,writer__29110__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__34401){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__34401)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__34413 = arguments.length;
switch (G__34413) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__34414,uri){
var map__34415 = p__34414;
var map__34415__$1 = ((((!((map__34415 == null)))?((((map__34415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34415):map__34415);
var vec_strategy = cljs.core.get.call(null,map__34415__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__34415__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__34417){
var map__34418 = p__34417;
var map__34418__$1 = ((((!((map__34418 == null)))?((((map__34418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34418):map__34418);
var vec_strategy = cljs.core.get.call(null,map__34418__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__34418__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__34418,map__34418__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__34418,map__34418__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29073__auto__,k__29074__auto__){
var self__ = this;
var this__29073__auto____$1 = this;
return this__29073__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29074__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29075__auto__,k34422,else__29076__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
var G__34426 = k34422;
switch (G__34426) {
default:
return cljs.core.get.call(null,self__.__extmap,k34422,else__29076__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__34427){
var self__ = this;
var map__34428 = p__34427;
var map__34428__$1 = ((((!((map__34428 == null)))?((((map__34428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34428):map__34428);
var request = map__34428__$1;
var method = cljs.core.get.call(null,map__34428__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29087__auto__,writer__29088__auto__,opts__29089__auto__){
var self__ = this;
var this__29087__auto____$1 = this;
var pr_pair__29090__auto__ = ((function (this__29087__auto____$1){
return (function (keyval__29091__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,cljs.core.pr_writer,""," ","",opts__29089__auto__,keyval__29091__auto__);
});})(this__29087__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,pr_pair__29090__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__29089__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34421){
var self__ = this;
var G__34421__$1 = this;
return (new cljs.core.RecordIter((0),G__34421__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29071__auto__){
var self__ = this;
var this__29071__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29068__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29077__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29069__auto__){
var self__ = this;
var this__29069__auto____$1 = this;
var h__28887__auto__ = self__.__hash;
if(!((h__28887__auto__ == null))){
return h__28887__auto__;
} else {
var h__28887__auto____$1 = ((function (h__28887__auto__,this__29069__auto____$1){
return (function (coll__29070__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__29070__auto__));
});})(h__28887__auto__,this__29069__auto____$1))
.call(null,this__29069__auto____$1);
self__.__hash = h__28887__auto____$1;

return h__28887__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34423,other34424){
var self__ = this;
var this34423__$1 = this;
return (!((other34424 == null))) && ((this34423__$1.constructor === other34424.constructor)) && (cljs.core._EQ_.call(null,this34423__$1.__extmap,other34424.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29082__auto__,k__29083__auto__){
var self__ = this;
var this__29082__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__29083__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29082__auto____$1),self__.__meta),k__29083__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29083__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29080__auto__,k__29081__auto__,G__34421){
var self__ = this;
var this__29080__auto____$1 = this;
var pred__34430 = cljs.core.keyword_identical_QMARK_;
var expr__34431 = k__29081__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29081__auto__,G__34421),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29085__auto__){
var self__ = this;
var this__29085__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29072__auto__,G__34421){
var self__ = this;
var this__29072__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__34421,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29078__auto__,entry__29079__auto__){
var self__ = this;
var this__29078__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29079__auto__)){
return this__29078__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29079__auto__,(0)),cljs.core._nth.call(null,entry__29079__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29078__auto____$1,entry__29079__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__29109__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__29109__auto__,writer__29110__auto__){
return cljs.core._write.call(null,writer__29110__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__34425){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__34425)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29073__auto__,k__29074__auto__){
var self__ = this;
var this__29073__auto____$1 = this;
return this__29073__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29074__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29075__auto__,k34435,else__29076__auto__){
var self__ = this;
var this__29075__auto____$1 = this;
var G__34439 = k34435;
switch (G__34439) {
default:
return cljs.core.get.call(null,self__.__extmap,k34435,else__29076__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__34440){
var self__ = this;
var map__34441 = p__34440;
var map__34441__$1 = ((((!((map__34441 == null)))?((((map__34441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34441):map__34441);
var request = map__34441__$1;
var body = cljs.core.get.call(null,map__34441__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29087__auto__,writer__29088__auto__,opts__29089__auto__){
var self__ = this;
var this__29087__auto____$1 = this;
var pr_pair__29090__auto__ = ((function (this__29087__auto____$1){
return (function (keyval__29091__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,cljs.core.pr_writer,""," ","",opts__29089__auto__,keyval__29091__auto__);
});})(this__29087__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29088__auto__,pr_pair__29090__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__29089__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34434){
var self__ = this;
var G__34434__$1 = this;
return (new cljs.core.RecordIter((0),G__34434__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29071__auto__){
var self__ = this;
var this__29071__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29068__auto__){
var self__ = this;
var this__29068__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29077__auto__){
var self__ = this;
var this__29077__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29069__auto__){
var self__ = this;
var this__29069__auto____$1 = this;
var h__28887__auto__ = self__.__hash;
if(!((h__28887__auto__ == null))){
return h__28887__auto__;
} else {
var h__28887__auto____$1 = ((function (h__28887__auto__,this__29069__auto____$1){
return (function (coll__29070__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__29070__auto__));
});})(h__28887__auto__,this__29069__auto____$1))
.call(null,this__29069__auto____$1);
self__.__hash = h__28887__auto____$1;

return h__28887__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34436,other34437){
var self__ = this;
var this34436__$1 = this;
return (!((other34437 == null))) && ((this34436__$1.constructor === other34437.constructor)) && (cljs.core._EQ_.call(null,this34436__$1.__extmap,other34437.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29082__auto__,k__29083__auto__){
var self__ = this;
var this__29082__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__29083__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29082__auto____$1),self__.__meta),k__29083__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29083__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29080__auto__,k__29081__auto__,G__34434){
var self__ = this;
var this__29080__auto____$1 = this;
var pred__34443 = cljs.core.keyword_identical_QMARK_;
var expr__34444 = k__29081__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29081__auto__,G__34434),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29085__auto__){
var self__ = this;
var this__29085__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29072__auto__,G__34434){
var self__ = this;
var this__29072__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__34434,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29078__auto__,entry__29079__auto__){
var self__ = this;
var this__29078__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29079__auto__)){
return this__29078__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29079__auto__,(0)),cljs.core._nth.call(null,entry__29079__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29078__auto____$1,entry__29079__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__29109__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__29109__auto__,writer__29110__auto__){
return cljs.core._write.call(null,writer__29110__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__34438){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__34438)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__34447){
var map__34448 = p__34447;
var map__34448__$1 = ((((!((map__34448 == null)))?((((map__34448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34448):map__34448);
var opts = map__34448__$1;
var response_format = cljs.core.get.call(null,map__34448__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1503758421331
