var current_layout = {};

var grid_layout_options = {
	    name: 'grid',

	    fit: true, // whether to fit the viewport to the graph
	    padding: 30, // padding used on fit
	    rows: undefined, // force num of rows in the grid
	    columns: undefined, // force num of cols in the grid
	    position: function( node ){}, // returns { row, col } for element
	    ready: undefined, // callback on layoutready
	    stop: undefined // callback on layoutstop
	};

var circle_layout_options = {
	    name: 'circle',

	    fit: true, // whether to fit the viewport to the graph
	    ready: undefined, // callback on layoutready
	    stop: undefined, // callback on layoutstop
	    rStepSize: 10, // the step size for increasing the radius if the nodes don't fit on screen
	    padding: 30, // the padding on fit
	    startAngle: 3/2 * Math.PI, // the position of the first node
	    counterclockwise: false // whether the layout should go counterclockwise (true) or clockwise (false)
	};

var concentric_layout_options = {
	    name: 'concentric',

	    fit: true, // whether to fit the viewport to the graph
	    ready: undefined, // callback on layoutready
	    stop: undefined, // callback on layoutstop
	    padding: 30, // the padding on fit
	    startAngle: 3/2 * Math.PI, // the position of the first node
	    counterclockwise: false, // whether the layout should go counterclockwise (true) or clockwise (false)
	    minNodeSpacing: 175, // min spacing between outside of nodes (used for radius adjustment)
	    height: undefined, // height of layout area (overrides container height)
	    width: undefined, // width of layout area (overrides container width)
	    concentric: function(){ // returns numeric value for each node, placing higher nodes in levels towards the centre
	      return this.degree();
	    },
	    levelWidth: function(nodes){ // the variation of concentric values in each level
	      return nodes.maxDegree() / 4;
	    }
	};

var cose_layout_options = {
	    name: 'cose',
	    // Called on `layoutready`
	    ready               : function() {},
	    // Called on `layoutstop`
	    stop                : function() {},
	    // Number of iterations between consecutive screen positions update (0 -> only updated on the end)
	    refresh             : 1,
	    // Whether to fit the network view after when done
	    fit                 : true, 
	    // Padding on fit
	    padding             : 30, 
	    // Whether to randomize node positions on the beginning
	    randomize           : false,
	    // Whether to use the JS console to print debug messages
	    debug               : false,
	    // Node repulsion (non overlapping) multiplier
	    nodeRepulsion       : 10000,
	    // Node repulsion (overlapping) multiplier
	    nodeOverlap         : 1000,
	    // Ideal edge (non nested) length
	    idealEdgeLength     : 1000,
	    // Divisor to compute edge forces
	    edgeElasticity      : 50, // Previous 10
	    // Nesting factor (multiplier) to compute ideal edge length for nested edges
	    nestingFactor       : 6, 
	    // Gravity force (constant)
	    gravity             : 10, // Previous 200 
	    // Maximum number of iterations to perform
	    numIter             : 100,
	    // Initial temperature (maximum node displacement)
	    initialTemp         : 200,
	    // Cooling factor (how the temperature is reduced between consecutive iterations
	    coolingFactor       : 0.95, 
	    // Lower temperature threshold (below this point the layout will end)
	    minTemp             : 1
	};

var arbor_layout_options = {
			    name: 'arbor',

			    liveUpdate: true, // whether to show the layout as it's running
			    ready: undefined, // callback on layoutready 
			    stop: function() {},
			    maxSimulationTime: 30000, // max length in ms to run the layout
			    fit: true, // reset viewport to fit default simulationBounds
			    padding: [ 30, 30, 30, 30 ], // top, right, bottom, left
			    simulationBounds: undefined, // [x1, y1, x2, y2]; [0, 0, width, height] by default
			    ungrabifyWhileSimulating: true, // so you can't drag nodes during layout

			    // forces used by arbor (use arbor default on undefined)
			    repulsion: 300,
			    stiffness: undefined,
			    friction: undefined,
			    gravity: true,
			    fps: undefined,
			    precision: 0.8,

			    // static numbers or functions that dynamically return what these
			    // values should be for each element
			    nodeMass: undefined, 
			    edgeLength: 0.5,

			    stepSize: 1, // size of timestep in simulation

			    // function that returns true if the system is stable to indicate
			    // that the layout can be stopped
			    stableEnergy: function( energy ){
			      var e = energy; 
			      // return (e.max <= 0.5) || (e.mean <= 0.3);
			      //return (e.max <= 7) || (e.mean <= 0.3);
			      return (e.max <= 0.5) || (e.mean <= 0.3);
			    }
};

var cola_layout_options = {
		  name: "cola",
		  
		  animate: true, // whether to show the layout as it's running
		  refresh: 1, // number of ticks per frame; higher is faster but more jerky
		  maxSimulationTime: 4000, // max length in ms to run the layout
		  ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
		  fit: true, // on every layout reposition of nodes, fit the viewport
		  padding: 30, // padding around the simulation
		  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }

		  // layout event callbacks
		  ready: function(){}, // on layoutready
		  stop: function(){}, // on layoutstop

		  // positioning options
		  randomize: false, // use random node positions at beginning of layout
		  avoidOverlap: true, // if true, prevents overlap of node bounding boxes
		  handleDisconnected: true, // if true, avoids disconnected components from overlapping
		  nodeSpacing: function( node ){ return 10; }, // extra spacing around nodes
		  flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
		  alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }

		  // different methods of specifying edge length
		  // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
		  edgeLength: undefined, // sets edge length directly in simulation
		  edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
		  edgeJaccardLength: undefined, // jaccard edge length in simulation

		  // iterations of cola algorithm; uses default values on undefined
		  unconstrIter: undefined, // unconstrained initial layout iterations
		  userConstIter: undefined, // initial layout iterations with user-specified constraints
		  allConstIter: undefined, // initial layout iterations with all constraints including non-overlap

		  // infinite layout options
		  infinite: false // overrides all other options for a forces-all-the-time mode
		};