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
var seq__33355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__33356 = null;
var count__33357 = (0);
var i__33358 = (0);
while(true){
if((i__33358 < count__33357)){
var vec__33359 = cljs.core._nth.call(null,chunk__33356,i__33358);
var effect_key = cljs.core.nth.call(null,vec__33359,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33359,(1),null);
var temp__4655__auto___33365 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___33365)){
var effect_fn_33366 = temp__4655__auto___33365;
effect_fn_33366.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33367 = seq__33355;
var G__33368 = chunk__33356;
var G__33369 = count__33357;
var G__33370 = (i__33358 + (1));
seq__33355 = G__33367;
chunk__33356 = G__33368;
count__33357 = G__33369;
i__33358 = G__33370;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33355);
if(temp__4657__auto__){
var seq__33355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33355__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33355__$1);
var G__33371 = cljs.core.chunk_rest.call(null,seq__33355__$1);
var G__33372 = c__29272__auto__;
var G__33373 = cljs.core.count.call(null,c__29272__auto__);
var G__33374 = (0);
seq__33355 = G__33371;
chunk__33356 = G__33372;
count__33357 = G__33373;
i__33358 = G__33374;
continue;
} else {
var vec__33362 = cljs.core.first.call(null,seq__33355__$1);
var effect_key = cljs.core.nth.call(null,vec__33362,(0),null);
var effect_value = cljs.core.nth.call(null,vec__33362,(1),null);
var temp__4655__auto___33375 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___33375)){
var effect_fn_33376 = temp__4655__auto___33375;
effect_fn_33376.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__33377 = cljs.core.next.call(null,seq__33355__$1);
var G__33378 = null;
var G__33379 = (0);
var G__33380 = (0);
seq__33355 = G__33377;
chunk__33356 = G__33378;
count__33357 = G__33379;
i__33358 = G__33380;
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
var seq__33381 = cljs.core.seq.call(null,value);
var chunk__33382 = null;
var count__33383 = (0);
var i__33384 = (0);
while(true){
if((i__33384 < count__33383)){
var map__33385 = cljs.core._nth.call(null,chunk__33382,i__33384);
var map__33385__$1 = ((((!((map__33385 == null)))?((((map__33385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33385):map__33385);
var effect = map__33385__$1;
var ms = cljs.core.get.call(null,map__33385__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33385__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33381,chunk__33382,count__33383,i__33384,map__33385,map__33385__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33381,chunk__33382,count__33383,i__33384,map__33385,map__33385__$1,effect,ms,dispatch))
,ms);
}

var G__33389 = seq__33381;
var G__33390 = chunk__33382;
var G__33391 = count__33383;
var G__33392 = (i__33384 + (1));
seq__33381 = G__33389;
chunk__33382 = G__33390;
count__33383 = G__33391;
i__33384 = G__33392;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33381);
if(temp__4657__auto__){
var seq__33381__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33381__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33381__$1);
var G__33393 = cljs.core.chunk_rest.call(null,seq__33381__$1);
var G__33394 = c__29272__auto__;
var G__33395 = cljs.core.count.call(null,c__29272__auto__);
var G__33396 = (0);
seq__33381 = G__33393;
chunk__33382 = G__33394;
count__33383 = G__33395;
i__33384 = G__33396;
continue;
} else {
var map__33387 = cljs.core.first.call(null,seq__33381__$1);
var map__33387__$1 = ((((!((map__33387 == null)))?((((map__33387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33387):map__33387);
var effect = map__33387__$1;
var ms = cljs.core.get.call(null,map__33387__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__33387__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__33381,chunk__33382,count__33383,i__33384,map__33387,map__33387__$1,effect,ms,dispatch,seq__33381__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__33381,chunk__33382,count__33383,i__33384,map__33387,map__33387__$1,effect,ms,dispatch,seq__33381__$1,temp__4657__auto__))
,ms);
}

var G__33397 = cljs.core.next.call(null,seq__33381__$1);
var G__33398 = null;
var G__33399 = (0);
var G__33400 = (0);
seq__33381 = G__33397;
chunk__33382 = G__33398;
count__33383 = G__33399;
i__33384 = G__33400;
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
var seq__33401 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__33402 = null;
var count__33403 = (0);
var i__33404 = (0);
while(true){
if((i__33404 < count__33403)){
var event = cljs.core._nth.call(null,chunk__33402,i__33404);
re_frame.router.dispatch.call(null,event);

var G__33405 = seq__33401;
var G__33406 = chunk__33402;
var G__33407 = count__33403;
var G__33408 = (i__33404 + (1));
seq__33401 = G__33405;
chunk__33402 = G__33406;
count__33403 = G__33407;
i__33404 = G__33408;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33401);
if(temp__4657__auto__){
var seq__33401__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33401__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33401__$1);
var G__33409 = cljs.core.chunk_rest.call(null,seq__33401__$1);
var G__33410 = c__29272__auto__;
var G__33411 = cljs.core.count.call(null,c__29272__auto__);
var G__33412 = (0);
seq__33401 = G__33409;
chunk__33402 = G__33410;
count__33403 = G__33411;
i__33404 = G__33412;
continue;
} else {
var event = cljs.core.first.call(null,seq__33401__$1);
re_frame.router.dispatch.call(null,event);

var G__33413 = cljs.core.next.call(null,seq__33401__$1);
var G__33414 = null;
var G__33415 = (0);
var G__33416 = (0);
seq__33401 = G__33413;
chunk__33402 = G__33414;
count__33403 = G__33415;
i__33404 = G__33416;
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
var seq__33417 = cljs.core.seq.call(null,value);
var chunk__33418 = null;
var count__33419 = (0);
var i__33420 = (0);
while(true){
if((i__33420 < count__33419)){
var event = cljs.core._nth.call(null,chunk__33418,i__33420);
clear_event.call(null,event);

var G__33421 = seq__33417;
var G__33422 = chunk__33418;
var G__33423 = count__33419;
var G__33424 = (i__33420 + (1));
seq__33417 = G__33421;
chunk__33418 = G__33422;
count__33419 = G__33423;
i__33420 = G__33424;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33417);
if(temp__4657__auto__){
var seq__33417__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33417__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__33417__$1);
var G__33425 = cljs.core.chunk_rest.call(null,seq__33417__$1);
var G__33426 = c__29272__auto__;
var G__33427 = cljs.core.count.call(null,c__29272__auto__);
var G__33428 = (0);
seq__33417 = G__33425;
chunk__33418 = G__33426;
count__33419 = G__33427;
i__33420 = G__33428;
continue;
} else {
var event = cljs.core.first.call(null,seq__33417__$1);
clear_event.call(null,event);

var G__33429 = cljs.core.next.call(null,seq__33417__$1);
var G__33430 = null;
var G__33431 = (0);
var G__33432 = (0);
seq__33417 = G__33429;
chunk__33418 = G__33430;
count__33419 = G__33431;
i__33420 = G__33432;
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

//# sourceMappingURL=fx.js.map?rel=1503499633478
