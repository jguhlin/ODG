// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_config_dev');
goog.require('cljs.core');
goog.require('odg.config.core');
goog.require('odg.config.startup');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39833__delegate = function (x){
if(cljs.core.truth_(odg.config.core.mount_components)){
return cljs.core.apply.call(null,odg.config.core.mount_components,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'odg.config.core/mount-components' is missing");
}
};
var G__39833 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39834__i = 0, G__39834__a = new Array(arguments.length -  0);
while (G__39834__i < G__39834__a.length) {G__39834__a[G__39834__i] = arguments[G__39834__i + 0]; ++G__39834__i;}
  x = new cljs.core.IndexedSeq(G__39834__a,0,null);
} 
return G__39833__delegate.call(this,x);};
G__39833.cljs$lang$maxFixedArity = 0;
G__39833.cljs$lang$applyTo = (function (arglist__39835){
var x = cljs.core.seq(arglist__39835);
return G__39833__delegate(x);
});
G__39833.cljs$core$IFn$_invoke$arity$variadic = G__39833__delegate;
return G__39833;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"config-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_config_dev.js.map?rel=1503762735817
