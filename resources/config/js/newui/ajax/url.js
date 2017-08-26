// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.url');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
ajax.url.key_encode = (function ajax$url$key_encode(key){
if((key instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,key);
} else {
return key;
}
});
ajax.url.value_encode = encodeURIComponent;
ajax.url.key_value_pair_to_str = (function ajax$url$key_value_pair_to_str(p__34291){
var vec__34292 = p__34291;
var k = cljs.core.nth.call(null,vec__34292,(0),null);
var v = cljs.core.nth.call(null,vec__34292,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.key_encode.call(null,k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.value_encode.call(null,v))].join('');
});
ajax.url.vec_key_transform_fn = (function ajax$url$vec_key_transform_fn(var_args){
var G__34296 = arguments.length;
switch (G__34296) {
case 3:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$3 = (function (vec_key_encode,k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec_key_encode.call(null,k),v], null);
});

ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$2 = (function (vec_key_encode,k){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec_key_encode.call(null,k),v], null);
});
});

ajax.url.vec_key_transform_fn.cljs$core$IFn$_invoke$arity$1 = (function (vec_key_encode){
return (function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec_key_encode.call(null,k),v], null);
});
});

ajax.url.vec_key_transform_fn.cljs$lang$maxFixedArity = 3;

ajax.url.to_vec_key_transform = (function ajax$url$to_vec_key_transform(vec_strategy){
var vec_key_encode = (function (){var G__34298 = (function (){var or__28433__auto__ = vec_strategy;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return new cljs.core.Keyword(null,"java","java",1958249105);
}
})();
var G__34298__$1 = (((G__34298 instanceof cljs.core.Keyword))?G__34298.fqn:null);
switch (G__34298__$1) {
case "java":
return ((function (G__34298,G__34298__$1){
return (function (k){
return null;
});
;})(G__34298,G__34298__$1))

break;
case "rails":
return ((function (G__34298,G__34298__$1){
return (function (k){
return "";
});
;})(G__34298,G__34298__$1))

break;
case "indexed":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34298__$1)].join('')));

}
})();
return ajax.url.vec_key_transform_fn.call(null,vec_key_encode);
});
ajax.url.param_to_key_value_pairs = (function ajax$url$param_to_key_value_pairs(var_args){
var G__34301 = arguments.length;
switch (G__34301) {
case 3:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$3 = (function (vec_key_transform,prefix,p__34302){
var vec__34303 = p__34302;
var key = cljs.core.nth.call(null,vec__34303,(0),null);
var value = cljs.core.nth.call(null,vec__34303,(1),null);

var k1 = ajax.url.key_encode.call(null,key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.call(null,vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name.call(null,value)], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.map_indexed.call(null,vec_key_transform,cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});

ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$2 = (function (vec_key_transform,prefix){
return (function (p__34306){
var vec__34307 = p__34306;
var key = cljs.core.nth.call(null,vec__34307,(0),null);
var value = cljs.core.nth.call(null,vec__34307,(1),null);

var k1 = ajax.url.key_encode.call(null,key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.call(null,vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name.call(null,value)], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.map_indexed.call(null,vec_key_transform,cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});
});

ajax.url.param_to_key_value_pairs.cljs$core$IFn$_invoke$arity$1 = (function (vec_key_transform){
return (function (prefix,p__34310){
var vec__34311 = p__34310;
var key = cljs.core.nth.call(null,vec__34311,(0),null);
var value = cljs.core.nth.call(null,vec__34311,(1),null);

var k1 = ajax.url.key_encode.call(null,key);
var new_key = (cljs.core.truth_(prefix)?(cljs.core.truth_(key)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),"]"].join(''):prefix):k1);
var recurse = ajax.url.param_to_key_value_pairs.call(null,vec_key_transform,new_key);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,cljs.core.name.call(null,value)], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,recurse,cljs.core.map_indexed.call(null,vec_key_transform,cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
}
});
});

ajax.url.param_to_key_value_pairs.cljs$lang$maxFixedArity = 3;

ajax.url.params_to_str = (function ajax$url$params_to_str(var_args){
var G__34316 = arguments.length;
switch (G__34316) {
case 2:
return ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2 = (function (vec_strategy,params){

return clojure.string.join.call(null,"&",cljs.core.map.call(null,ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.call(null,ajax.url.to_vec_key_transform.call(null,vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
});

ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$1 = (function (vec_strategy){
return (function (params){

return clojure.string.join.call(null,"&",cljs.core.map.call(null,ajax.url.key_value_pair_to_str,ajax.url.param_to_key_value_pairs.call(null,ajax.url.to_vec_key_transform.call(null,vec_strategy),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,params], null))));
});
});

ajax.url.params_to_str.cljs$lang$maxFixedArity = 2;

/**
 * The request format for simple POST and GET.
 */
ajax.url.url_request_format = (function ajax$url$url_request_format(var_args){
var G__34319 = arguments.length;
switch (G__34319) {
case 0:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.url.url_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.url.url_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__34320){
var map__34321 = p__34320;
var map__34321__$1 = ((((!((map__34321 == null)))?((((map__34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34321):map__34321);
var vec_strategy = cljs.core.get.call(null,map__34321__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.util.to_utf8_writer.call(null,ajax.url.params_to_str.call(null,vec_strategy)),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded; charset=utf-8"], null);
});

ajax.url.url_request_format.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=url.js.map?rel=1503758421125
