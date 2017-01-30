var dbg = "";

var loading = <div className="loading">
				<img src="img/gears.svg" />
			  </div>;

var ListInput = React.createClass({
	getInitialState: function() {
		return {value: this.props.value};
	},
	handleChange: function(event) {
	    this.setState({value: event.target.value});
		if (this.props.onChange) {
			this.props.onChange(this.props.id, event.target.value);
		}
	},
	componentWillReceiveProps: function(p) {
		this.setState({value: p.value});
	},
	render: function() {
		return (
			<div className="row form-group">
				<div className="col-md-2">
					<label htmlFor={this.props.id}>{this.props.label}</label>
				</div>
				<div className="col-md-4">
					<textarea 
							className="form-control" 
							id={this.props.id} 
							data-toggle="tooltip" 
							data-placement="top"
							onChange={this.handleChange}
							title={this.props.tooltip} 
							value={this.state.value}
					        rows="12"
					/>
				</div>
			</div>
		)}
});

var FormGroup = React.createClass({
	getInitialState: function() {
		return {value: this.props.value};
	},
	handleChange: function(event) {
	    this.setState({value: event.target.value});
		if (this.props.onChange) {
			this.props.onChange(this.props.id, event.target.value);
		}
	},
	componentWillReceiveProps: function(p) {
		console.log("componentWillReceiveProps called: " + p);
		this.setState({value: p.value});
	},
	render: function() {
		return (
			<div className="row form-group">
				<div className="col-md-2">
					<label htmlFor={this.props.id}>{this.props.label}</label>
				</div>
				<div className="col-md-4">
					<input type="text" 
							className="form-control" 
							id={this.props.id} 
							data-toggle="tooltip" 
							data-placement="top"
							onChange={this.handleChange}
							title={this.props.tooltip} 
							value={this.state.value}
					/>
				</div>
			</div>
		)}
});

var OnOff = React.createClass({
	getInitialState: function() {
		return {value: this.props.value};
	},
	handleChange: function(event) {
		var cur = this.state.value;
	    this.setState({value: !cur});
		if (this.props.onChange) {
			this.props.onChange(this.props.id, !cur);
		}
	},
	componentWillReceiveProps: function(p) {
		this.setState({value: p.value});
	},
	render: function() {
		return (
					<div className="checkbox"
						data-toggle="tooltip" 
						data-placement="top"
						title={this.props.tooltip}>
					
						<label htmlFor={this.props.id}>
							<input type="checkbox" 
								id={this.props.id} 
								onChange={this.handleChange}
								checked={this.state.value}
								value={this.state.value}
							/>
							{this.props.label}</label>
						</div>
		)}
});


var QueryPane = React.createClass({
	getInitialState: function() {
		return {single_gene: "", 
				single_bp: "", 
				query_list: ""
			};
	},
	changeVal: function(x, y) {
		var obj = {};
		obj[x] = y;
		this.setState(obj);
	},
	handleClick: function(e) {
		performQuerySearch();
	},
	componentDidMount: function() {
		$("query_tab_content").tab();
		
		$.when(
				$.getJSON("/get-species") 
			).done(	
				function(genomes, data) {
					this.setState({ 
						data: data[0],
						genomes: genomes[0].genomes
					});
					_.delay(function() { $("#loading").hide(); }, 5000);
		}.bind(this));

		$('input').tooltip()
	},
	render: function() {
	  return (
			  <div className="container">
			  	<ul className="nav nav-tabs" role="tablist">
			  		<li role="presentation" className="active"><a href="#query_query" id="query_query_tab" role="tab" data-toggle="tab">Query</a></li>
			  	</ul>
			  	
			  	<div className="tab-content col-md-12" id="query_tab_content">
  			  		<div role="tabpanel" className="tab-pane container form-group active" id="query_query">
  			  			<ListInput id="query_list" label="Query List" tooltip="Search for a list of gene identifiers or chr:bp locations (Ex: chr5:29281 contig243:10232 scaffold_092:143323)" value={this.state.query} onChange={this.changeVal} />
  			  			<div className="col-md-6">
  			  				<select id="query_type" className="selectpicker span2" 
  			  					data-live-search="true" 
			  					data-style="btn-info"
			  					title="Select a Query Type"></select>
			  				<select id="query_species" className="selectpicker span2" data-live-search="true" data-style="btn-info" title="Choose a Species"></select>
			  				<button onClick={this.handleClick} type="button" id="btn_query" className="btn btn-primary">Run Query</button>
			  			</div>
			  		</div>
			  	</div>
			  </div>
		    );
  }
});

var DisplaySettings = React.createClass({
	getInitialState: function() {
		
		var initial = {
				"goterms": true,
				"expression": true,
				"pathways": true,
				"blastp": false,
				"blastp_top": true,
				"blastp_good": false,
				"inferred_goterms": true,
				"inferred_pathways": true
		};

		config = initial;
		
		return initial;
	},
	changeVal: function(x, y) {
		var obj = {};
		obj[x] = y;
		this.setState(obj, function() { config = this.state; });
	},
	
	// 					<!-- <OnOff id="expression" label="Expression" tooltip="Toggle Expressed nodes and relationships on or off" value={this.state.expression} onChange={this.changeVal} /> -->
	
	render: function() {
		return (
		<div className="container">
	    	<h2><i>Visualization Settings</i></h2>
			<div className="row form-group">
				<div className="col-md-2">
					<h4>Nodes</h4>
					<OnOff id="goterms" label="Gene Ontology(GO) Terms" tooltip="Toggle Gene Ontology nodes on or off" value={this.state.goterms} onChange={this.changeVal} />
					<OnOff id="inferred_goterms" label="Inferred GO Terms" tooltip="Toggle Inferred (via BlastP orthologs) Gene Ontology nodes on or off" value={this.state.inferred_goterms} onChange={this.changeVal} />
					<OnOff id="pathways" label="Pathways" tooltip="Toggle Pathway nodes and relationships on or off" value={this.state.pathways} onChange={this.changeVal} />
					<OnOff id="inferred_pathways" label="Inferred Pathways" tooltip="Toggle Inferred (via BlastP orthologs) Pathway nodes and relationships on or off" value={this.state.inferred_pathways} onChange={this.changeVal} />
				</div>
				<div className="col-md-2">
					<h4>BLAST+ Relationships</h4>
					<OnOff id="blastp_top" label="BlastP Top Hit" tooltip="Toggle Top BlastP Hit relationships on or off" value={this.state.blastp_top} onChange={this.changeVal} />
					<OnOff id="blastp_good" label="BlastP Good Hit" tooltip="Toggle Good BlastP Hit relationships on or off" value={this.state.blastp_good} onChange={this.changeVal} />
					<OnOff id="blastp" label="BlastP Hits" tooltip="Toggle BlastP relationships on or off" value={this.state.blastp} onChange={this.changeVal} />
				</div>
				<div className="col-md-2">
				</div>
			</div>
	    </div>
	)}});

var GoTermsRow = React.createClass({
	getInitialState: function() {
		return(this.props.data);
	},
	componentsWillReceiveProps: function(p) {
		this.setState(data);
	},
	handleClick: function(e) {
		details_query.setLoading();
		$.getJSON("/node/" + this.state["node"], function(data) {
			console.dir(this.state);
			details_query.loadData(data);
		});
	},
	render: function() {
		var d = this.state;
		
		var bsr = parseFloat(d.bsr).toFixed(2);
		var pctid = parseFloat(d.pct_identity).toFixed(2);
		var evalue = parseFloat(d.evalue).toPrecision(4);
		
		return(
				<tr key={d.node} onClick={this.handleClick} data-id={d.node}>
				<td>{d.id}</td>
				<td>{d.name}</td>
				<td>{d.def}</td>
				</tr>);
	}
});

var GoTermsTable = React.createClass({
	getInitialState: function() {
		return({data: this.props.data});
	},
	componentWillReceiveProps: function(p) {
		this.setState({data: p.data});
	},
	render: function() {
		
		if (this.props.loading == true) {
			return(loading);
		}
		
		var rows = this.state.data.map(function(d) {
			return(
					<GoTermsRow key={d.node} data={d} />
			);
		});
		
		if (rows.length == 0) {
			rows = <tr><td>No Results</td></tr>;
		}
		
		return(<table className="table table-hover detail-table ">
					<tbody>
						{rows}
					</tbody>
				</table>
		);
	}
});

// Used for describing relationships and digging deeper into them
var RelationshipsRow = React.createClass({
	getInitialState: function() {
		return({data: this.props.data});
	},
	componentsWillReceiveProps: function(p) {
		this.setState(data);
	},
	handleClick: function(e) {
		/*$.getJSON("/node/" + this.state["node"], function(data) {
			console.dir(this.state);
			details_query.loadData(data);
		}); */
	},
	render: function() {
		var d = this.state.data;
		
		if (this.props.ordinal == 1) {
			var k = "tr" + d[0] + d[1] + d[2];
			
			var labels = reduceLabels(d[2]);
			
			var row =
				<tr key={k} onClick={this.handleClick}>
					<td>{d[0]}</td>
					<td>{d[1]}</td>
					<td>{labels}</td>
				</tr>;
		}
		
		return(row);
	}
});

var RelationshipsTable = React.createClass({
	getInitialState: function() {
		return({data: this.props.data, ordinal: 1});
	},
	componentWillReceiveProps: function(p) {
		this.setState({data: p.data});
	},
	render: function() {
		
		if (this.props.loading == true) {
			return(loading);
		}
		
		var data = this.state.data;
		var ordinal = this.state.ordinal;
		
		console.log("---------");
		console.dir(data);
		console.dir(this);
		
		if (typeof data === 'undefined') {
			data = [];
		}
		
		var rows = [];
		
		var header = <thead>
						<tr className="header">
							<td>Count</td>
							<td>Relationship</td>
							<td>Labels</td>
						</tr>
					</thead>;
		
		rows = _.map(data, function(d) {
			var k = "" + d[0] + d[1] + d[2] + d[3] + d[4] + d[5] + d[6] + d[7] + d[8] + d[9];
			return(
					<RelationshipsRow key={k} data={d} ordinal={ordinal} />   
					);
		});
		
		if (rows.length == 0) {
			rows = <tr><td>No Results</td></tr>;
		}
		
		return(<table className="table table-hover condensed-table detail-table ">
					{header}
					<tbody>
						{rows}
					</tbody>
				</table>
		);
	}
});

var BlastHitRow = React.createClass({
	getInitialState: function() {
		return(this.props.data);
	},
	componentsWillReceiveProps: function(p) {
		this.setState(data);
	},
	handleClick: function(e) {
		details_query.setLoading();
		$.getJSON("/node/" + this.state["hit"], function(data) {
			console.dir(data);
			details_query.loadData(data);
		});
	},
	render: function() {
		var d = this.state;
		
		var bsr = parseFloat(d.bsr).toFixed(2);
		var pctid = parseFloat(d.pct_identity).toFixed(2);
		var evalue = parseFloat(d.evalue).toPrecision(4);
		
		return(
				<tr key={d.key} onClick={this.handleClick} data-id={d.hit}>
				<td>{d.id}</td>
				<td>{d.species} {d.version}</td>
				<td>{bsr}</td>
				<td>{pctid}</td>
				<td>{evalue}</td>
				</tr>);
	}
});

var BlastHitTable = React.createClass({
	getInitialState: function() {
		return({data: this.props.data});
	},
	componentWillReceiveProps: function(p) {
		this.setState({data: p.data});
	},
	render: function() {
		
		if (this.props.loading == true) {
			return(loading);
		}
		
		var sorted = _.sortBy(this.state.data, function(a) { return a.bsr; }).reverse();
		
		var rows = sorted.map(function(d) { return <BlastHitRow key={d.key} data={d} />; } );
		
		return(<table className="table table-responsive table-striped table-hover table-condensed">
					<thead>
						<tr>
							<th>ID</th>
							<th>Species</th>
							<th>BSR</th>
							<th>% ID</th>
							<th>E-Value</th>
						</tr>
					</thead>
					<tbody className="scrollable-tbody">
						{rows}
					</tbody>
				</table>
		);
	}
})

var GeneDetail = React.createClass({
	getInitialState: function() { 
		return (
				$.extend({goterms: [], id: "", blastp: [], describe_relationships: [], loaded: false},
				this.props.data));
	},
	componentWillReceiveProps: function(p) {
		this.setState(p.data, function() {
			$.when(
					$.getJSON("/node/goterms/" + this.state.node), 
					$.getJSON("/node/expression/" + this.state.node),
					$.getJSON("/node/blastp/" + this.state.node),
					$.getJSON("/node/describe/relationships/1/" + this.state.node)
				).done(
						function(goterms, expression, blastp, describe_relationships) {
							console.log("--------------------Describe");
							console.dir(describe_relationships);
							this.setState(
									{
										loaded: true,
										goterms: goterms[0],
										expression: expression[0],
										blastp: blastp[0],
										describe_relationships: describe_relationships[0]
									});
							console.dir(this.state);
						}.bind(this));
		});
	},
	componentDidMount: function() {
		$.when(
				$.getJSON("/node/goterms/" + this.state.node), 
				$.getJSON("/node/expression/" + this.state.node),
				$.getJSON("/node/blastp/" + this.state.node),
				$.getJSON("/node/describe/relationships/1/" + this.state.node)
			).done(
					function(goterms, expression, blastp, describe_relationships) {
						console.log("--------------------Describe");
						console.dir(describe_relationships);
						this.setState(
								{
									loaded: true,
									goterms: goterms[0],
									expression: expression[0],
									blastp: blastp[0],
									describe_relationships: describe_relationships[0]
								});
						console.dir(this.state);
					}.bind(this));
	},
	render: function() {
		
		var note = decodeURIComponent(this.state.note);
		
		var loaded = this.state.loaded;
		
		if (loaded == true) {
			var rows = loading;
		}
		
		var rows = _.map(this.state.properties,
				(function(v,k) { 
					if (k == "_length") { k = "length"; }
					var key = "l" + v + k + v + k;
					return (<tr key={key}>
					<td><strong>{k}</strong></td>
					<td>{v}</td>
					</tr>)}));

		// <li><a href="#genedetail_expression" data-toggle="tab">Expression</a></li>
		
		return (
			<div>
				<ul className="nav nav-tabs" role="tablist">
				  <li className="active"><a href="#genedetail_gene" data-toggle="tab">Gene</a></li>
				  <li><a href="#genedetail_goterms" data-toggle="tab">GO Terms</a></li>
				  <li><a href="#genedetail_blastp_hits" data-toggle="tab">BlastP Hits</a></li>
				  <li><a href="#genedetail_relationships" data-toggle="tab">Relationships</a></li>
				</ul>
				
<div className="tab-content">
	<div className="tab-pane active fade in" id="genedetail_gene">
		<table className="table table-hover detail-table">
			<tbody className="scrollable-tbody">
				{rows}
			</tbody>
		</table>
	</div>
	
	<div className="tab-pane fade" id="genedetail_goterms">
		<GoTermsTable loaded={loaded} data={this.state.goterms} />
	</div>
		
	<div className="tab-pane fade" id="genedetail_blastp_hits">
		<BlastHitTable loaded={loaded} data={this.state.blastp} />
	</div>
		
	<div className="tab-pane fade" id="genedetail_relationships">
		<RelationshipsTable loaded={loaded} data={this.state.describe_relationships} />
	</div>
</div>

</div>
		);
	}
});
		
var DetailPropertyRow = React.createClass({
			getInitialState: function() {
				return(this.props.data);
			},
			componentsWillReceiveProps: function(p) {
				this.setState(data);
			},
			handleClick: function(e) {
			},
			render: function() {
				var d = this.state;
				
				console.dir(d);
				
				return(
						<tr>
						<td>a</td>
						<td>b</td>
						</tr>);
			}
		});
		
var RelationshipRow = React.createClass({
	getInitialState: function() {
		console.log("RelationshipRow this.props.data");
		console.dir(this.props.data);
		return(this.props.data);
	},
	componentsWillReceiveProps: function(p) {
		this.setState(data);
	},
	handleClick: function(e) {
		details_query.setLoading();
		$.getJSON("/node/" + this.props.data.other, function(data) {
			details_query.loadData(data);
		});
	},
	render: function() {
		var d = this.state;
		
		var id;
		id = _.find(
				_.pick(d.other_node, "id", "name", "def"),
				_.identity);
		
		if (!id) { id = "No ID determined" };
		
		var definition;
		definition = _.find(
						_.pick(d.other_node, 
								"def", 
								"definition", 
								"name", 
								"description",
							"type"),
							_.identity);
		
		if (!definition) { definition = "" };
		   
		var definition;
		   
		var key = "".concat(d.other_id).concat("_").concat(d.type);
		
		return(
				<tr key={key} onClick={this.handleClick} data-id={d}>
				 <td><strong>{d.type}</strong></td>
				 <td>{id}</td>
				 <td>{definition}</td>
			   </tr>);
	}
});

var DefaultDetail = React.createClass({
			getInitialState: function() {
				console.log("this.props.data");
				console.dir(this.props.data);
				return (
						_.extend({relationships: [], 
									id: "", 
									node: "", 
									properties: {}},
								this.props.data));
			},
			componentWillReceiveProps: function(p) {
				this.setState(p.data, function() {
/*					$.when(
							$.getJSON("/node/goterms/" + this.state.node), 
							$.getJSON("/node/expression/" + this.state.node),
							$.getJSON("/node/blastp/" + this.state.node)
						).done(
								function(goterms, expression, blastp) {
									this.setState({goterms: goterms[0], blastp: blastp[0]})
								}.bind(this)); */
				});
			},
			componentDidMount: function() {
				/*$.when(
						$.getJSON("/node/goterms/" + this.state.node), 
						$.getJSON("/node/expression/" + this.state.node),
						$.getJSON("/node/blastp/" + this.state.node)
					).done(
							function(goterms, expression, blastp) {
								this.setState(
										{
											goterms: goterms[0],
											blastp: blastp[0]
										});
							}.bind(this)); */
			},
			render: function() {
				
				// <RelationshipsTable data={this.state.relationships} />
			   
			   if (!_.isArray(this.state.properties) && _.isNumber(this.state.properties['length'])) {
				   this.state.properties['_length'] = this.state.properties['length'];
				   delete(this.state.properties['length']);
			   }

			   var rows = _.map(this.state.properties,
					   (function(v,k) { 
						   if (k == "_length") { k = "length"; }
						   return (<tr>
								 <td><strong>{k}</strong></td>
								 <td>{v}</td>
							   </tr>)}));
			   
			   var relationship_rows = _.map(this.state.relationships,
					   function(v,k,l) {
				          var key = k.toString().concat("_").concat(v.type);           
				          return <RelationshipRow key={key} data={l[k]} />;
				          } );
				
				return (
					<div>
						<ul className="nav nav-tabs" role="tablist" data-tabs="tabs">
						  <li className="active"><a href="#dd_details" data-toggle="tab">Details</a></li>
						  <li><a href="#dd_relationships" data-toggle="tab">Relationships</a></li>
						</ul>
						
		<div className="tab-content">
			<div className="tab-pane active fade in" id="dd_details">
				<table className="table table-hover detail-table">
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
			
			<div className="tab-pane fade" id="dd_relationships">
				<table className="table table-striped table-bordered table-hover detail-table">
					<tbody>
						{relationship_rows}
					</tbody>
				</table>
			</div>
		</div>

		</div>
				);
			}
		});

var DetailPanel = React.createClass({
	getInitialState: function() { 
		return { 
			"id": false,
			"labels": [],
			"properties": [],
			"loading": true,
			"iprterms": []
		} 
	},
	loadData: function(d) {
		d["loading"] = false;
		this.setState(d);
	},
	setLoading: function() {
		this.setState({"id": false, "labels": [], "iprterms": [], "properties": [], "loading": true});
	},
	render: function() {
		
		var type = '';
		if (this.state.type) {
			type = '(' + this.state.type + ')';
		}
		
		var detail = '';

		var labels_up = this.state.labels.sort().reverse();
		var labels = reduceLabels(labels_up);

		
		switch(this.state.type) {
			case 'gene':
			case 'CDS':
			case 'Protein':
				var detail = <GeneDetail loading={this.state.loading} data={this.state} />;
			break;
			
			default:
				var detail = <DefaultDetail loading={this.state.loading} data={this.state} />;
				console.dir(this.state);
				break;
		}
		
		if (this.state.loading == true) {
			return(loading);
		}
		
		var iprterms = '';
		
		if (this.state.iprterms.length > 0) {
			var iprterms_label = reduceLabels(this.state.iprterms);
			var iprterms = <h4><span className="info">IPR Terms:</span> {iprterms_label}</h4>;
		}
		
		return (
		<div>
	    	<h2>{this.state.id} {type}</h2>
	    	<h4>{labels}</h4>
	    	{iprterms}
	    	{detail}
	    </div>
	)}});

var QueryResultsRow = React.createClass({
	getInitialState: function() {
		return(this.props.data);
	},
	componentsWillReceiveProps: function(p) {
		this.setState(data);
		
	},
	handleClick: function(e) {

		//this.setState({active: true});
		this.props.setActive(this.props.data.node);
		details_query.setLoading();
		$.getJSON("/node/" + this.props.data.node, function(data) {
			details_query.loadData(data);
		});
	},
	render: function() {
		var d = this.state;
		
		var labels_up = d.labels.sort().reverse();
		var labels = reduceLabels(labels_up);
		
		var note = d.note;
		var gene = d.gene;
		
		var display_value = labels;
		var tooltip = d.species + " " + d.version; // Default tooltip
		
		if (!_.isEmpty(gene)) {
			display_value = gene;
			tooltip = labels;
		}
		
		if (!_.isEmpty(note)) {
			display_value = note;
			tooltip = labels;
		}
		
		var classes = "scrollable-row";
		
		if (this.state.active) {
			classes = classes + " success";
		}

		return(
				<tr key={d.node} className={classes} data-toggle="tooltip" data-placement="bottom" title={tooltip} onClick={this.handleClick} data-id={d.node}>
				<td>{d.id}</td>
				<td>{display_value}</td>
				</tr>);
	}
})

var QueryResultsTable = React.createClass({
	getInitialState: function() {
		return({data: this.props.data});
	},
	loadData: function(d) {
		this.setState({data: d});
	},
	componentWillReceiveProps: function(p) {
		this.setState({data: p.data});
	},
	setActive: function(a) {
		console.log("highlight: " + a);
		this.setState({highlight: a});
	},
	render: function() {
		
		_.delay(function() {
			$(function () {
				$('[data-toggle="tooltip"]').tooltip()})}, 
			2000); // Delay enabling tooltips for 2 seconds
		
		var sorted = _.sortBy(this.state.data, function(a) { return a.id; });
		
		var rows = sorted.map(function(d) {
				var highlight = "";
				console.log(d.node + " " + this.state.highlight);
				if (d.node == this.state.highlight) {
					d.active = true;
				} else {
					d.active = false;
				}
				
				return <QueryResultsRow setActive={this.setActive} key={d.node} data={d} />;
			}.bind(this) );

		dbg = rows;
		console.log("first row");
		console.dir(rows[0]);
		
		return(<table className="table table-hover table-condensed">
					<thead>
						<tr>
							<th>ID</th>
							<th>Type</th>
						</tr>
					</thead>
							
					<tbody>
						{rows}
					</tbody>
				</table>
		);
	}
})
