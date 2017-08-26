// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__35470_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__35470_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___35471 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___35471)){
var not_i_35472 = temp__4657__auto___35471;
if(cljs.core.fn_QMARK_.call(null,not_i_35472)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_35472);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_35472);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_35473 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_35474 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__35418__auto___35487 = re_frame.interop.now.call(null);
var duration__35419__auto___35488 = (end__35418__auto___35487 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__35475_35489 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__35476_35490 = null;
var count__35477_35491 = (0);
var i__35478_35492 = (0);
while(true){
if((i__35478_35492 < count__35477_35491)){
var vec__35479_35493 = cljs.core._nth.call(null,chunk__35476_35490,i__35478_35492);
var k__35420__auto___35494 = cljs.core.nth.call(null,vec__35479_35493,(0),null);
var cb__35421__auto___35495 = cljs.core.nth.call(null,vec__35479_35493,(1),null);
try{cb__35421__auto___35495.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35419__auto___35488,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e35482){if((e35482 instanceof java.lang.Exception)){
var e__35422__auto___35496 = e35482;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__35420__auto___35494,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__35422__auto___35496);
} else {
throw e35482;

}
}
var G__35497 = seq__35475_35489;
var G__35498 = chunk__35476_35490;
var G__35499 = count__35477_35491;
var G__35500 = (i__35478_35492 + (1));
seq__35475_35489 = G__35497;
chunk__35476_35490 = G__35498;
count__35477_35491 = G__35499;
i__35478_35492 = G__35500;
continue;
} else {
var temp__4657__auto___35501 = cljs.core.seq.call(null,seq__35475_35489);
if(temp__4657__auto___35501){
var seq__35475_35502__$1 = temp__4657__auto___35501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35475_35502__$1)){
var c__29272__auto___35503 = cljs.core.chunk_first.call(null,seq__35475_35502__$1);
var G__35504 = cljs.core.chunk_rest.call(null,seq__35475_35502__$1);
var G__35505 = c__29272__auto___35503;
var G__35506 = cljs.core.count.call(null,c__29272__auto___35503);
var G__35507 = (0);
seq__35475_35489 = G__35504;
chunk__35476_35490 = G__35505;
count__35477_35491 = G__35506;
i__35478_35492 = G__35507;
continue;
} else {
var vec__35483_35508 = cljs.core.first.call(null,seq__35475_35502__$1);
var k__35420__auto___35509 = cljs.core.nth.call(null,vec__35483_35508,(0),null);
var cb__35421__auto___35510 = cljs.core.nth.call(null,vec__35483_35508,(1),null);
try{cb__35421__auto___35510.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35419__auto___35488,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e35486){if((e35486 instanceof java.lang.Exception)){
var e__35422__auto___35511 = e35486;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__35420__auto___35509,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__35422__auto___35511);
} else {
throw e35486;

}
}
var G__35512 = cljs.core.next.call(null,seq__35475_35502__$1);
var G__35513 = null;
var G__35514 = (0);
var G__35515 = (0);
seq__35475_35489 = G__35512;
chunk__35476_35490 = G__35513;
count__35477_35491 = G__35514;
i__35478_35492 = G__35515;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_35474;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_35473;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1503758423566
