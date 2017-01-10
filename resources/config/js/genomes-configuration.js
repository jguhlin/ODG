/**
  * @jsx React.DOM
  */

var GenomesConfiguration = React.createClass({
	getInitialState: function() {
		return {genomes: [], data: []};
	},
	componentDidMount: function() {
		$.when(
				$.getJSON(this.props.config), 
				$.getJSON(this.props.data)
			).done(
				function(genomes, data) {
					this.setState({ 
						data: data[0],
						genomes: genomes[0].genomes
					});
					_.delay(function() { $("#loading").hide(); }, 5000);
		}.bind(this));
		
	},
	doGenome: function(g) {
		return <div>
					<GenomeConfiguration config={g} data={this.state.data[g.root]}/>
				</div>;
	},
	render: function() {
	  return (
			  <div>
			  {_.map(this.state.genomes, this.doGenome)}
			  </div>
		    );
		}
});
		
var GenomeConfiguration = React.createClass({
		getInitialState: function() {
			return {name: "",
					abbreviation: "",
					description: "",
					mirbase_prefix: "",
					tags: "",
					taxid: "",
					version: "",
					key: "",
					assembly: []
				};
		},
		changeVal: function(x, y) {
			var obj = {};
			obj[x] = y;
			this.setState(obj, function() {
				genomes_config[this.state.key] = this.state;
			});
		},
		selectChange: function(x) {
			var obj = {};
			this.changeVal(x.target.id, _.map(x.target.selectedOptions, function(z) { return z.label }));
		},
		componentDidMount: function() {
			var g = this.props.config;
			this.setState({
				name: g.name,
				abbreviation: g.abbreviation,
				description: g.description,
				mirbase_prefix: g["mirbase_prefix"],
				tags: g.tags,
				taxid: g.taxid,
				version: g.version,
				key: g.key,
				assembly: g.assembly,
				annotation: g.annotation,
				expression_gtf: g.expression_gtf,
				interproscan: g.interproscan,
				expression_fpkm_tracking: g.expression_fpkm_tracking,
				pathway: g.pathway,
				proteome: g.proteome,
				root: g.root,
				ontological_associations: g.ontological_associations,
				anchor_blast_results: g.anchor_blast_results
			}, function() {
				// $(this.getDOMNode()).find(".selectpicker").selectpicker('val', ).change(this.selectChange);
				_.each($(this.getDOMNode()).find(".selectpicker"), function(x) {
					$(x).selectpicker().change(this.selectChange);
					$(x).selectpicker('val', this.state[x.id]);
					$(x).selectpicker('render');
				}.bind(this));
				genomes_config[this.state.key] = this.state; 
			});
			
			$('input').tooltip()
		},
		changeName: function(e) {
			this.setState({ name: e });
		},
		createOption: function(i) {
			return <option value={i}>{i}</option>
		},
		render: function() {
		  return (
				  <div className="container">
				    <h2><i>{this.state.name} {this.state.version}</i></h2>
				    <i>Location: {this.state.root}</i><br />
				  	<FormGroup id="name" label="Name" tooltip="Species Name" value={this.state.name} onChange={this.changeVal} />
				  	<FormGroup id="version" label="Version" tooltip="Genome Version" value={this.state.version} onChange={this.changeVal} />
				  	<FormGroup id="abbreviation" label="Species Abbreviation" tooltip="Species Abbreviation, usually 2 or 3 letters" value={this.state.abbreviation} onChange={this.changeVal} />
				  	<FormGroup id="description" label="Description" tooltip="Species Description" value={this.state.description} onChange={this.changeVal} />
				  	<FormGroup id="mirbase_prefix" label="miRBase Prefix" tooltip="Prefix in miRBase" value={this.state.mirbase_prefix}  onChange={this.changeVal} />
				  	<FormGroup id="tags" label="Tags" tooltip="Space separated list of Tags" value={this.state.tags} onChange={this.changeVal} />
				  	<FormGroup id="taxid" label="Taxonomy ID" tooltip="NCBI Taxonomy ID" value={this.state.taxid} onChange={this.changeVal} />

				  	<div className="row form-group">
				  		<div className="col-md-3">
				  			<label>Assembly (FASTA/GFF3):</label>
				  		</div>
				  		<div className="col-md-3">
				  			<select id="assembly" className="selectpicker" multiple>
				  				{_.map(this.props.data, this.createOption)}
				  			</select>
				  		</div>
				  	</div>
				  	
				  	<div className="row form-group">
			  			<div className="col-md-3">
			  				<label>Annotation (GFF3):</label>
			  			</div>
			  			<div className="col-md-3">
			  				<select id="annotation" className="selectpicker" multiple>
			  					{_.map(this.props.data, this.createOption)}
			  				</select>
			  			</div>
			  		</div>
			  		
			  		<div className="row form-group">
		  				<div className="col-md-3">
		  					<label>Proteome:</label>
		  				</div>
		  				<div className="col-md-3">
		  					<select id="proteome" className="selectpicker" multiple>
		  						{_.map(this.props.data, this.createOption)}
		  					</select>
		  				</div>
		  			</div>
		  			
			  		<div className="row form-group">
	  					<div className="col-md-3">
	  						<label>InterProScan TSV Results:</label>
	  					</div>
	  					<div className="col-md-3">
	  						<select id="interproscan" className="selectpicker" multiple>
	  							{_.map(this.props.data, this.createOption)}
	  						</select>
	  					</div>
	  				</div>


			  		<div className="row form-group">
		  				<div className="col-md-3">
		  					<label>Expression GTF: (merged.gtf from Cufflinks):</label>
		  				</div>
		  				<div className="col-md-3">
		  					<select id="expression_gtf" className="selectpicker" multiple>
		  						{_.map(this.props.data, this.createOption)}
		  					</select>
		  				</div>
		  			</div>
		  			
			  		<div className="row form-group">
	  					<div className="col-md-3">
	  						<label>Expression genes.fpkm_tracking:</label>
	  					</div>
	  					<div className="col-md-3">
	  						<select id="expression_fpkm_tracking" className="selectpicker" multiple>
	  							{_.map(this.props.data, this.createOption)}
	  						</select>
	  					</div>
	  				</div>

			  		<div className="row form-group">
	  					<div className="col-md-3">
	  						<label>BLAST Results to Anchor <br />(-outfmt "6 std qlen slen"):</label>
	  					</div>
	  					<div className="col-md-3">
	  						<select id="anchor_blast_results" className="selectpicker" multiple>
	  							{_.map(this.props.data, this.createOption)}
	  						</select>
	  					</div>
	  				</div>

			  		<div className="row form-group">
  						<div className="col-md-3">
  							<label>Pathways (From PlantCyc):</label>
  						</div>
  						<div className="col-md-3">
  							<select id="pathway" className="selectpicker" multiple>
  								{_.map(this.props.data, this.createOption)}
  							</select>
  						</div>
  					</div>

			  		<div className="row form-group">
						<div className="col-md-3">
							<label>Ontological Associations:</label>
						</div>
						<div className="col-md-3">
							<select id="ontological_associations" className="selectpicker" multiple>
								{_.map(this.props.data, this.createOption)}
							</select>
						</div>
					</div>

			  	</div>
			    );
	  }
});