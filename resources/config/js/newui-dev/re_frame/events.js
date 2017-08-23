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
var make_chain = (function (p1__32821_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__32821_SHARP_));
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

var temp__4657__auto___32822 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___32822)){
var not_i_32823 = temp__4657__auto___32822;
if(cljs.core.fn_QMARK_.call(null,not_i_32823)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_32823);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_32823);
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
var _STAR_handling_STAR_32824 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_32825 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32769__auto___32838 = re_frame.interop.now.call(null);
var duration__32770__auto___32839 = (end__32769__auto___32838 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__32826_32840 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__32827_32841 = null;
var count__32828_32842 = (0);
var i__32829_32843 = (0);
while(true){
if((i__32829_32843 < count__32828_32842)){
var vec__32830_32844 = cljs.core._nth.call(null,chunk__32827_32841,i__32829_32843);
var k__32771__auto___32845 = cljs.core.nth.call(null,vec__32830_32844,(0),null);
var cb__32772__auto___32846 = cljs.core.nth.call(null,vec__32830_32844,(1),null);
try{cb__32772__auto___32846.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32770__auto___32839,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32833){if((e32833 instanceof java.lang.Exception)){
var e__32773__auto___32847 = e32833;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32771__auto___32845,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32773__auto___32847);
} else {
throw e32833;

}
}
var G__32848 = seq__32826_32840;
var G__32849 = chunk__32827_32841;
var G__32850 = count__32828_32842;
var G__32851 = (i__32829_32843 + (1));
seq__32826_32840 = G__32848;
chunk__32827_32841 = G__32849;
count__32828_32842 = G__32850;
i__32829_32843 = G__32851;
continue;
} else {
var temp__4657__auto___32852 = cljs.core.seq.call(null,seq__32826_32840);
if(temp__4657__auto___32852){
var seq__32826_32853__$1 = temp__4657__auto___32852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32826_32853__$1)){
var c__29272__auto___32854 = cljs.core.chunk_first.call(null,seq__32826_32853__$1);
var G__32855 = cljs.core.chunk_rest.call(null,seq__32826_32853__$1);
var G__32856 = c__29272__auto___32854;
var G__32857 = cljs.core.count.call(null,c__29272__auto___32854);
var G__32858 = (0);
seq__32826_32840 = G__32855;
chunk__32827_32841 = G__32856;
count__32828_32842 = G__32857;
i__32829_32843 = G__32858;
continue;
} else {
var vec__32834_32859 = cljs.core.first.call(null,seq__32826_32853__$1);
var k__32771__auto___32860 = cljs.core.nth.call(null,vec__32834_32859,(0),null);
var cb__32772__auto___32861 = cljs.core.nth.call(null,vec__32834_32859,(1),null);
try{cb__32772__auto___32861.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32770__auto___32839,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32837){if((e32837 instanceof java.lang.Exception)){
var e__32773__auto___32862 = e32837;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32771__auto___32860,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32773__auto___32862);
} else {
throw e32837;

}
}
var G__32863 = cljs.core.next.call(null,seq__32826_32853__$1);
var G__32864 = null;
var G__32865 = (0);
var G__32866 = (0);
seq__32826_32840 = G__32863;
chunk__32827_32841 = G__32864;
count__32828_32842 = G__32865;
i__32829_32843 = G__32866;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_32825;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_32824;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1503499632726
