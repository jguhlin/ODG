// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__33381 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33382 = null;
var count__33383 = (0);
var i__33384 = (0);
while(true){
if((i__33384 < count__33383)){
var vec__33385 = cljs.core._nth.call(null,chunk__33382,i__33384);
var effect_key = cljs.core.nth.call(null,vec__33385,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33385,(1),null);
var temp__4655__auto___33391 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___33391)){
var effect_fn_33392 = temp__4655__auto___33391;
effect_fn_33392.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33393 = seq__33381;
var G__33394 = chunk__33382;
var G__33395 = count__33383;
var G__33396 = (i__33384 + (1));
seq__33381 = G__33393;
chunk__33382 = G__33394;
count__33383 = G__33395;
i__33384 = G__33396;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33381);
if(temp__4657__auto__){
var seq__33381__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33381__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33381__$1);
var G__33397 = cljs.core.chunk_rest.call(null,seq__33381__$1);
var G__33398 = c__29272__auto__;
var G__33399 = cljs.core.count.call(null,c__29272__auto__);
var G__33400 = (0);
seq__33381 = G__33397;
chunk__33382 = G__33398;
count__33383 = G__33399;
i__33384 = G__33400;
continue;
} else {
var vec__33388 = cljs.core.first.call(null,seq__33381__$1);
var effect_key = cljs.core.nth.call(null,vec__33388,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33388,(1),null);
var temp__4655__auto___33401 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___33401)){
var effect_fn_33402 = temp__4655__auto___33401;
effect_fn_33402.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33403 = cljs.core.next.call(null,seq__33381__$1);
var G__33404 = null;
var G__33405 = (0);
var G__33406 = (0);
seq__33381 = G__33403;
chunk__33382 = G__33404;
count__33383 = G__33405;
i__33384 = G__33406;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__33407 = cljs.core.seq.call(null,value);
var chunk__33408 = null;
var count__33409 = (0);
var i__33410 = (0);
while(true){
if((i__33410 < count__33409)){
var map__33411 = cljs.core._nth.call(null,chunk__33408,i__33410);
var map__33411__$1 = ((((!((map__33411 == null)))?((((map__33411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33411):map__33411);
var effect = map__33411__$1;
var ms = cljs.core.get.call(null,map__33411__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33411__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33407,chunk__33408,count__33409,i__33410,map__33411,map__33411__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33407,chunk__33408,count__33409,i__33410,map__33411,map__33411__$1,effect,ms,dispatch))
,ms);
}

var G__33415 = seq__33407;
var G__33416 = chunk__33408;
var G__33417 = count__33409;
var G__33418 = (i__33410 + (1));
seq__33407 = G__33415;
chunk__33408 = G__33416;
count__33409 = G__33417;
i__33410 = G__33418;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33407);
if(temp__4657__auto__){
var seq__33407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33407__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33407__$1);
var G__33419 = cljs.core.chunk_rest.call(null,seq__33407__$1);
var G__33420 = c__29272__auto__;
var G__33421 = cljs.core.count.call(null,c__29272__auto__);
var G__33422 = (0);
seq__33407 = G__33419;
chunk__33408 = G__33420;
count__33409 = G__33421;
i__33410 = G__33422;
continue;
} else {
var map__33413 = cljs.core.first.call(null,seq__33407__$1);
var map__33413__$1 = ((((!((map__33413 == null)))?((((map__33413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33413):map__33413);
var effect = map__33413__$1;
var ms = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33413__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33407,chunk__33408,count__33409,i__33410,map__33413,map__33413__$1,effect,ms,dispatch,seq__33407__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33407,chunk__33408,count__33409,i__33410,map__33413,map__33413__$1,effect,ms,dispatch,seq__33407__$1,temp__4657__auto__))
,ms);
}

var G__33423 = cljs.core.next.call(null,seq__33407__$1);
var G__33424 = null;
var G__33425 = (0);
var G__33426 = (0);
seq__33407 = G__33423;
chunk__33408 = G__33424;
count__33409 = G__33425;
i__33410 = G__33426;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__33427 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33428 = null;
var count__33429 = (0);
var i__33430 = (0);
while(true){
if((i__33430 < count__33429)){
var event = cljs.core._nth.call(null,chunk__33428,i__33430);
re_frame.router.dispatch.call(null,event);

var G__33431 = seq__33427;
var G__33432 = chunk__33428;
var G__33433 = count__33429;
var G__33434 = (i__33430 + (1));
seq__33427 = G__33431;
chunk__33428 = G__33432;
count__33429 = G__33433;
i__33430 = G__33434;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33427);
if(temp__4657__auto__){
var seq__33427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33427__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33427__$1);
var G__33435 = cljs.core.chunk_rest.call(null,seq__33427__$1);
var G__33436 = c__29272__auto__;
var G__33437 = cljs.core.count.call(null,c__29272__auto__);
var G__33438 = (0);
seq__33427 = G__33435;
chunk__33428 = G__33436;
count__33429 = G__33437;
i__33430 = G__33438;
continue;
} else {
var event = cljs.core.first.call(null,seq__33427__$1);
re_frame.router.dispatch.call(null,event);

var G__33439 = cljs.core.next.call(null,seq__33427__$1);
var G__33440 = null;
var G__33441 = (0);
var G__33442 = (0);
seq__33427 = G__33439;
chunk__33428 = G__33440;
count__33429 = G__33441;
i__33430 = G__33442;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__33443 = cljs.core.seq.call(null,value);
var chunk__33444 = null;
var count__33445 = (0);
var i__33446 = (0);
while(true){
if((i__33446 < count__33445)){
var event = cljs.core._nth.call(null,chunk__33444,i__33446);
clear_event.call(null,event);

var G__33447 = seq__33443;
var G__33448 = chunk__33444;
var G__33449 = count__33445;
var G__33450 = (i__33446 + (1));
seq__33443 = G__33447;
chunk__33444 = G__33448;
count__33445 = G__33449;
i__33446 = G__33450;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33443);
if(temp__4657__auto__){
var seq__33443__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33443__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33443__$1);
var G__33451 = cljs.core.chunk_rest.call(null,seq__33443__$1);
var G__33452 = c__29272__auto__;
var G__33453 = cljs.core.count.call(null,c__29272__auto__);
var G__33454 = (0);
seq__33443 = G__33451;
chunk__33444 = G__33452;
count__33445 = G__33453;
i__33446 = G__33454;
continue;
} else {
var event = cljs.core.first.call(null,seq__33443__$1);
clear_event.call(null,event);

var G__33455 = cljs.core.next.call(null,seq__33443__$1);
var G__33456 = null;
var G__33457 = (0);
var G__33458 = (0);
seq__33443 = G__33455;
chunk__33444 = G__33456;
count__33445 = G__33457;
i__33446 = G__33458;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1503577466260
