/* Interface / event handling fn's */

var db = {};
var alt_ids = {}; // Mostly for mRNA short-circuiting

var handleClick = function(evt) {
	details.loadData(db[evt.cyTarget.id()]);
	
	var node = evt.cyTarget; 
    var neighborhood = node.neighborhood().add(node);
    cy.elements().addClass('faded');
    neighborhood.removeClass('faded');
}


/* Changing the graph fn's */

var _addNodeToGraph = function(id, label, weight, type) {
	console.log("Adding node: " + id + " " + label + " " + weight);
	return (cy.add({
			group: "nodes",
			data: {id: '' + id,
				label: label,
				type: type,
				weight: weight },
				position: {x: 15, y:20 }}));
}

var addEdgeToGraph = function(source, target, label) {

	// Because we hide mRNA Nodes (as well as exons/CDS) provide an alternative ID to map relationships to
	if (alt_ids[source]) {
		source = alt_ids[source];
	}
	
	if (alt_ids[target]) {
		target = alt_ids[target];
	}
	
	// If this is a BLAST match sort the source, target IDs so that multiple rels won't be created for both-way matches
	// The CSS also provides for removing arrows so that it is an undirected edge
	if (label.match(/BLAST/)) {
		var st = [source, target];
		st.sort();
		source = st[0];
		target = st[1];
	}

	// No loops
	if (source != target) {
		cy.add({
			group: "edges",
			data: { id: '' + source + target,
					source: '' + source,
					target: '' + target,
					label: label,
					type: label
			}});
	}
}

var fetchNode = function(n) {
	$.getJSON("/node/" + n, function(data) {
		addNodeToGraph(data);
	});
}

var createRelationships = function(rels) {
	// Uniq to speed up the results...
	// Connect any existing relationships
	_.each(_.uniq(rels), function(r) {
		if ((db[r.start] || alt_ids[r.start])
			&&
			(db[r.end] || alt_ids[r.end])) {
			addEdgeToGraph(r.start, r.end, r.type);
		}});
}

var addNodeToGraph = function(n) {
	
	db[n.node] = n;
	var mrna = false;
	
	switch(n.type) {
	case "gene":
		db[n.node]["mRNA"] = [];
		
	case "mRNA":
		var x = _addNodeToGraph(n.node, n.id, 4, "gene");
		db[n.node]["cy_element"] = x;
		
		$.when(
				$.getJSON("/node/goterms/" + n.node, function(data) {
					_.each(data, function(v) {
						if (!db[v.node]) {
							console.dir(v);
							y = _addNodeToGraph(v.node, v.name, 2, "goterm");
							db[v.node] = v;
							db[v.node]["cy_element"] = y;
						}
						addEdgeToGraph(n.node,v.node, "GO Term");
					})}),
				$.getJSON("/node/expression/" + n.node, function(data) {
					_.each(data, function(v) {
						if (!db[v.node]) {
							console.dir(v);
							y = _addNodeToGraph(v.node, v.name, 2, "expression_condition");
							db[v.node] = v;
							db[v.node]["cy_element"] = y;
						}
						addEdgeToGraph(n.node,v.node, "Expressed");
						
					})})
		).done(function(x) {
			var mrnas = _.where(n.relationships, {"type": "PARENT_OF"});
			_.each(mrnas, function(mrna) {
				$.getJSON("/node/" + mrna.other, function(data) {
					db[n.node]["mRNA"].push(data);
					alt_ids[data.node] = n.node;
					createRelationships(data.relationships);
				});
			_.defer(updateGraph); 
		})});
		break;
	}
		
	createRelationships(n.relationships);
	
	return(db[n.node]["cy_element"]);
}

var updateGraph = function() {
	cy.layout( current_layout );
	cy.elements().removeClass('faded');
};


/* Graph initialization */

var initGraph = function() {
	cy = cytoscape(
		options = { container: document.getElementById("graph"),
					minZoom: 0.5,
					maxZoom: 2,
					ready: function(){ console.log('ready'); },
					zoom: 1,	
					minZoom: 1e-50,
					maxZoom: 1e50,
					zoomingEnabled: true,
					userZoomingEnabled: true,
					pan: { x: 0, y: 0 },
					panningEnabled: true,
					userPanningEnabled: true,
					autoungrabifyNodes: false,
					hideEdgesOnViewport: false,
					hideLabelsOnViewport: false,
					textureOnViewport: true,
					style: [
					        {
					          selector: 'node',
					          css: {
					        	  'font-size': 12,
					              'content': 'data(label)',
					              'text-valign': 'center',
					              'color': 'white',
					              'text-outline-width': 2,
					              'text-outline-color': '#888',
					              'min-zoomed-font-size': 8
					          }
					        },

					        {
					          selector: ':selected',
					          css: {
					            'background-color': '#000',
					            'line-color': '#000',
					            'target-arrow-color': '#000',
					            'text-outline-color': '#000'
					          }
					        },

					        {
					          selector: 'edge',
					          css: {
					            'width': 2,
					            'target-arrow-shape': 'triangle',
					            'content': 'data(label)',
					            'font-size': 8,
					            'text-valign': 'center',
					            'color': 'white',
					            'text-outline-width': 2,
					            'text-outline-color': '#888',
					            'min-zoomed-font-size': 6
					          }
					        },
					        
					        {
						          selector: 'edge',
						          css: {
						            'width': 2,
						            'target-arrow-shape': 'triangle',
						            'content': 'data(label)',
						            'font-size': 8,
						            'text-valign': 'center',
						            'color': 'white',
						            'text-outline-width': 2,
						            'text-outline-color': '#888',
						            'min-zoomed-font-size': 8
						          }
						        },
					        
					        
					        {
					        	selector: '[type *= "BLAST"]',
					        	css: {
					        		'source-arrow-shape': 'none',
					        		'target-arrow-shape': 'none'
					        	}
					        },
					        
					        {
					        	selector: '[type = "goterm"]',
					        	css: {
					        		"font-size": 10,
					        		"content": 'data(label)',
					        		"text-valign": 'top',
					        		"width": 15,
					        		"height": 15,
					        		"background-color": "green"
					        	}
					        },
					        
					        {
					        	selector: '[type = "expression_condition"]',
					        	css: {
					        		"font-size": 10,
					        		"content": 'data(label)',
					        		"text-valign": 'top',
					        		"width": 30,
					        		"height": 30,
					        		"background-color": "blue",
					        		"color": "black",
					        		'text-outline-width': 0
					        		
					        	}
					        },
					        {
					        	selector: '.faded',
					        	css: {
					        		'opacity': 0.75,
					        		'text-opacity': 0.45
					        	}
					        }
					        
					        
					      ],
		});

	cy.on("click", "node", {}, handleClick);
	
	cy.resize();
	
}
