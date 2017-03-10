var cy;
var server_config = new Object();

// Global components
var details;
var query_results_list;
var details_query;
var home_page_stats;

var config = {};

var db = {}; // Local data that has been loaded, includes element object used in cy (to facilitate removal / events / etc)

var debug_object;

// Utility fn's
var reduceLabels = function(labels_up) {
	var labels_sorted = _.sortBy(labels_up, length);
	return(_.reduce(labels_sorted.reverse(), 
			function(memo, val) { 
				if (memo.indexOf(val) !== -1) { 
					return memo; 
				} else { 
					return memo + ", " + val 
				}
			}
	));
}

var output = function(data) {
	console.log(data);
}

var performSearch = function(evt) {
	var species = $('#species').val();
	var query = $('#search_query').val();
	
	if (_.isEmpty(species)) {
		$('#species').selectpicker('setStyle', 'btn-info', 'remove');
		$('#species').selectpicker('setStyle', 'btn-danger', 'add');
	} else {
		$('#species').selectpicker('setStyle', 'btn-info', 'add');
		$('#species').selectpicker('setStyle', 'btn-danger', 'remove');
		
		$("#graph2").html(query);
	
		$.ajax({type: "POST",
				url: "/search", 
				data: {"species": species, "query": query},
				dataType: "json"})
				.done(function (data) {
					
					console.dir(data);
					
					$('a[href="#query_results"]').tab('show');
					
					query_results_list.loadData(data);
					_.each(data, function(v, e) {
				// 	console.dir(v);
				// 	addNodeToGraph(v.node,v.id,2);
					});
			
			//updateGraph();
			// cy.resize();

				});
	}

	return false;
}

var performQuerySearch = function(evt) {
	var query_type = $('#query_type').val();
	var query_species = $('#query_species').val();
	var query = $('#query_list').val();

	if (_.isEmpty(query_type)) {
		$('#query_type').selectpicker('setStyle', 'btn-info', 'remove');
		$('#query_type').selectpicker('setStyle', 'btn-danger', 'add');
	} else {
		$('#query_type').selectpicker('setStyle', 'btn-info', 'add');
		$('#query_type').selectpicker('setStyle', 'btn-danger', 'remove');

		$.ajax({type: "POST",
			url: "/query", 
			data: {"type": query_type, 
				"species": query_species, 
				"query": query},
			dataType: "json"})
		.done(function (data) {
			console.dir(data);
			query_results_list.loadData(data);
			_.each(data, function(v, e) {
			});
		});
		
	}
	
	return false;
}


var onSelected = function ($e, datum) {
	console.log(datum);
	fetchNode(datum.node);
	// addNodeToGraph(datum);
}

var initSearchBox = function() {
	var species = $("#species").val();
	
	var searchbox = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  remote: {
			  url: '/autocomplete/' + species + '/%QUERY',
			  replace: function(url, query) {
				  			return("/autocomplete/" + $('#species').val() + '/' + query);
			  			}
		  	}

		});
	
	searchbox.initialize();
	
	$("#search_query").typeahead({minLength: 3}, {
		displayKey: 'id',
		source: searchbox.ttAdapter()
	})
	.on('typeahead:autocompleted', onSelected)
	.on('typeahead:selected', onSelected);
	
}

var processConfig = function(data) {
	server_config = data;
	
	$('#species')
		.append($('<OPTION>', { value:"main-ft" }).text("All"));
	
	$.each(server_config["species"], function(k,v) {
		$('#species')
			.append($('<OPTION>', { value:v }).text(v));
	});
	$('#species').selectpicker('refresh');
	
	initSearchBox();
	$('#species').change(function() { $("#search_query").val(""); });
	
	$.each(server_config["query-types"], function(k,v) {
		$('#query_type')
			.append($('<OPTION>', { value:v }).text(v));
	});
	$('#query_type').selectpicker('refresh');
	

	$.each(server_config["species"], function(k,v) {
		$('#query_species')
			.append($('<OPTION>', { value:v }).text(v));
		});
	$('#query_species').change(function() { $("#search_query").val(""); });
	$('#query_species').append($('<OPTION>', { value:"main-ft" }).text("All"));
	$('#query_species').selectpicker('refresh');



}

var startup = function() {
	// React.renderComponent(<QueryPage />, document.getElementById('query'));
	
	// initGraph();
	
	// current_layout = arbor_layout_options;
	
	$.getJSON("/server-config", processConfig);
	$('#btn_search').click(performSearch);
	
	$('#btn_layout').click(function() { current_layout = arbor_layout_options; cy.layout(current_layout); });
	$('#btn_cola').click(function() { current_layout = cola_layout_options; cy.layout(current_layout); });
	$('#btn_circle').click(function() { current_layout = circle_layout_options; cy.layout(current_layout); });
	$('#btn_grid').click(function() { current_layout = grid_layout_options; cy.layout(current_layout); });
	$('#btn_cose').click(function() { current_layout = cose_layout_options; cy.layout(current_layout); });
	$('#btn_concentric').click(function() { current_layout = concentric_layout_options; cy.layout(current_layout); });
	
	$( "#search_form" ).submit(function( event ) {
	  event.preventDefault();
	});
	
	ReactDOM.render(<DisplaySettings />, 
			document.getElementById('settings'));
	
	//details = React.renderComponent(<DetailPanel />, 
//			document.getElementById('details'));
	
	details_query = ReactDOM.render(React.createElement(DetailPanel, {}), 
			document.getElementById('query_results_details'));
	
	ReactDOM.render(React.createElement(QueryPane, {}), 
			document.getElementById('query_pane'));

	query_results_list = ReactDOM.render(React.createElement(QueryResultsTable, {}), 
			document.getElementById('query_results_list'));
	
	home_page_stats = ReactDOM.render(React.createElement(HomePageStats, {}),
			document.getElementById('home'));
	
}

$(document).ready(startup);