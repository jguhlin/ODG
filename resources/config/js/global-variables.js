/**
  * @jsx React.DOM
  */

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


var GlobalVariables = React.createClass({
	getInitialState: function() {
		return {db_name: "", 
				db_path: "", 
				fpkm_minimum: "", 
				pearson_correlation_absolute_cutoff: "",
				mirbase_hairpins: "",
				ENZYME: "",
				GO: "",
				PO: "",
				MI: ""
			};
	},
	changeVal: function(x, y) {
		var obj = {};
		obj[x] = y;
		this.setState(obj, function() {
			global_config = this.state;
			console.log(global_config);
		});
	},
	componentDidMount: function() {
		$.getJSON(this.props.source, function(a) {
			var d = a.global;
			this.setState({
				db_name: d.db_name,
				db_path: d.db_path,
				fpkm_minimum: d.fpkm_minimum,
				pearson_correlation_absolute_cutoff: d.pearson_correlation_absolute_cutoff,
				mirbase_hairpins: d.mirbase_hairpins,
				ENZYME: d.ENZYME,
				GO: d.GO,
				PO: d.PO,
				MI: d.MI
			}, function() { global_config = this.state; });
		}.bind(this));
		$('input').tooltip()
	},
	render: function() {
	  return (
			  <div className="container">
			  	<FormGroup id="db_name" label="Database Name" tooltip="Name of the Database" value={this.state.db_name} onChange={this.changeVal} />
			  	<FormGroup id="db_path" label="Database Path" tooltip="Path to save the database. May be relative." value={this.state.db_path} onChange={this.changeVal} />
			  	<FormGroup id="fpkm_minimum" label="Minimum FPKM" tooltip="Minimum FPKM to be included in database" value={this.state.fpkm_minimum} onChange={this.changeVal} />
			  	<FormGroup id="pearson_correlation_absolute_cutoff" 
			  				label="Pearson Cutoff" 
			  				tooltip="Absolute Value of Pearson Correlation Cutoff to Include in the Database"
			  				value={this.state.pearson_correlation_absolute_cutoff}
			  				onChange={this.changeVal}
			  	/>
			  	<FormGroup id="mirbase_hairpins" 
	  				label="miRBase Hairpins" 
	  				tooltip="Location of miRBase Hairpins file (usually called hairpins.fa)"
	  				onChange={this.changeVal}
	  				value={this.state.mirbase_hairpins} />
			  	<FormGroup id="ENZYME" 
	  				label="ENZYME dat file" 
	  				tooltip="Location of ExPASY enzyme.dat file"
	  				onChange={this.changeVal}
	  				value={this.state.ENZYME} />
			  	<FormGroup id="GO" 
	  				label="Gene Ontology" 
	  				tooltip="Location of Gene Ontology file, usually: gene_ontology_ext.obo"
	  				onChange={this.changeVal}
	  				value={this.state.GO} />
			  	<FormGroup id="PO" 
	  				label="Plant Ontology" 
	  				tooltip="Location of Plant Ontology file, usually: plant_ontology.obo"
	  				onChange={this.changeVal}
	  				value={this.state.PO} />
			  	<FormGroup id="MI" 
	  				label="Molecular Interaction Ontology" 
	  				tooltip="Location of Molecular Interaction Ontology file, usually: psi_mi25.obo"
	  				onChange={this.changeVal}
	  				value={this.state.MI} />
			  	</div>
		    );
  }
});