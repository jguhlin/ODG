/**
  * @jsx React.DOM
  */

var genomes_config = new Object();
var global_config = new Object();

var isNew = function(d) {
	
	React.renderComponent(<GenomesConfiguration config="/config" data="/data" />, 
			document.getElementById('genomes'));
	
	if (d) {
		$("#new-configuration").show();
	}

/*	if (d) {
		$("#new-configuration").show();
		React.renderComponent(<GenomesConfiguration config="/best-guess" data="/data" />, 
				document.getElementById('genomes'));
	} else {
		React.renderComponent(<GenomesConfiguration config="/config" data="/data" />, 
				document.getElementById('genomes'));
	} */

}

var output = function(data) {
	console.log(data);
}

var startup = function() {
	React.renderComponent(<GlobalVariables source="/config" />, 
			document.getElementById('global_variables'));
	
	$.getJSON("/isnew", isNew);
	
	// $.getJSON("/config", readConfig);
	// $.getJSON("/data", output);
	// $.getJSON("/species", output);
	
}

$(document).ready(startup);

/* 
 * UI Helper functions
 */

var save = function() {
	$("#savingModal").modal();
	$.post("/save", {"data": JSON.stringify({"genomes": genomes_config, "global": global_config})})
		.done(function() { _.delay(function() { $("#savingModal").modal('hide'); }, 2000)})
		.fail(function() { 
			alert("There was an error saving your configuration");
			$("#savingModal").modal('hide');
		});
}

var save_and_quit = function() {
	$("#savingModal").modal();
	$.post("/save", {"data": JSON.stringify({"genomes": genomes_config, "global": global_config})})
		.done(function() { _.delay(function() { $("#savingModal").modal('hide'); }, 2000)})
		.fail(function() { 
			alert("There was an error saving your configuration");
			$("#savingModal").modal('hide');
		});
}

$('#save').click(save);
$('#save_and_quit').click(save_and_quit);