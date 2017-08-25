// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_config_dev');
goog.require('cljs.core');
goog.require('odg.config.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39084__delegate = function (x){
if(cljs.core.truth_(odg.config.core.mount_components)){
return cljs.core.apply.call(null,odg.config.core.mount_components,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'odg.config.core/mount-components' is missing");
}
};
var G__39084 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39085__i = 0, G__39085__a = new Array(arguments.length -  0);
while (G__39085__i < G__39085__a.length) {G__39085__a[G__39085__i] = arguments[G__39085__i + 0]; ++G__39085__i;}
  x = new cljs.core.IndexedSeq(G__39085__a,0,null);
} 
return G__39084__delegate.call(this,x);};
G__39084.cljs$lang$maxFixedArity = 0;
G__39084.cljs$lang$applyTo = (function (arglist__39086){
var x = cljs.core.seq(arglist__39086);
return G__39084__delegate(x);
});
G__39084.cljs$core$IFn$_invoke$arity$variadic = G__39084__delegate;
return G__39084;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"config-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_config_dev.js.map?rel=1503671050038
