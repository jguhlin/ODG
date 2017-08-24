// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30683__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30684__i = 0, G__30684__a = new Array(arguments.length -  0);
while (G__30684__i < G__30684__a.length) {G__30684__a[G__30684__i] = arguments[G__30684__i + 0]; ++G__30684__i;}
  args = new cljs.core.IndexedSeq(G__30684__a,0,null);
} 
return G__30683__delegate.call(this,args);};
G__30683.cljs$lang$maxFixedArity = 0;
G__30683.cljs$lang$applyTo = (function (arglist__30685){
var args = cljs.core.seq(arglist__30685);
return G__30683__delegate(args);
});
G__30683.cljs$core$IFn$_invoke$arity$variadic = G__30683__delegate;
return G__30683;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30686__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30687__i = 0, G__30687__a = new Array(arguments.length -  0);
while (G__30687__i < G__30687__a.length) {G__30687__a[G__30687__i] = arguments[G__30687__i + 0]; ++G__30687__i;}
  args = new cljs.core.IndexedSeq(G__30687__a,0,null);
} 
return G__30686__delegate.call(this,args);};
G__30686.cljs$lang$maxFixedArity = 0;
G__30686.cljs$lang$applyTo = (function (arglist__30688){
var args = cljs.core.seq(arglist__30688);
return G__30686__delegate(args);
});
G__30686.cljs$core$IFn$_invoke$arity$variadic = G__30686__delegate;
return G__30686;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1503577461404
