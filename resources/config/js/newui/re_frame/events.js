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
var make_chain = (function (p1__32854_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__32854_SHARP_));
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

var temp__4657__auto___32855 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___32855)){
var not_i_32856 = temp__4657__auto___32855;
if(cljs.core.fn_QMARK_.call(null,not_i_32856)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_32856);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_32856);
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
var _STAR_handling_STAR_32857 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_32858 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32802__auto___32871 = re_frame.interop.now.call(null);
var duration__32803__auto___32872 = (end__32802__auto___32871 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__32859_32873 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__32860_32874 = null;
var count__32861_32875 = (0);
var i__32862_32876 = (0);
while(true){
if((i__32862_32876 < count__32861_32875)){
var vec__32863_32877 = cljs.core._nth.call(null,chunk__32860_32874,i__32862_32876);
var k__32804__auto___32878 = cljs.core.nth.call(null,vec__32863_32877,(0),null);
var cb__32805__auto___32879 = cljs.core.nth.call(null,vec__32863_32877,(1),null);
try{cb__32805__auto___32879.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32803__auto___32872,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32866){if((e32866 instanceof java.lang.Exception)){
var e__32806__auto___32880 = e32866;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32804__auto___32878,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32806__auto___32880);
} else {
throw e32866;

}
}
var G__32881 = seq__32859_32873;
var G__32882 = chunk__32860_32874;
var G__32883 = count__32861_32875;
var G__32884 = (i__32862_32876 + (1));
seq__32859_32873 = G__32881;
chunk__32860_32874 = G__32882;
count__32861_32875 = G__32883;
i__32862_32876 = G__32884;
continue;
} else {
var temp__4657__auto___32885 = cljs.core.seq.call(null,seq__32859_32873);
if(temp__4657__auto___32885){
var seq__32859_32886__$1 = temp__4657__auto___32885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32859_32886__$1)){
var c__29272__auto___32887 = cljs.core.chunk_first.call(null,seq__32859_32886__$1);
var G__32888 = cljs.core.chunk_rest.call(null,seq__32859_32886__$1);
var G__32889 = c__29272__auto___32887;
var G__32890 = cljs.core.count.call(null,c__29272__auto___32887);
var G__32891 = (0);
seq__32859_32873 = G__32888;
chunk__32860_32874 = G__32889;
count__32861_32875 = G__32890;
i__32862_32876 = G__32891;
continue;
} else {
var vec__32867_32892 = cljs.core.first.call(null,seq__32859_32886__$1);
var k__32804__auto___32893 = cljs.core.nth.call(null,vec__32867_32892,(0),null);
var cb__32805__auto___32894 = cljs.core.nth.call(null,vec__32867_32892,(1),null);
try{cb__32805__auto___32894.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32803__auto___32872,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e32870){if((e32870 instanceof java.lang.Exception)){
var e__32806__auto___32895 = e32870;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__32804__auto___32893,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__32806__auto___32895);
} else {
throw e32870;

}
}
var G__32896 = cljs.core.next.call(null,seq__32859_32886__$1);
var G__32897 = null;
var G__32898 = (0);
var G__32899 = (0);
seq__32859_32873 = G__32896;
chunk__32860_32874 = G__32897;
count__32861_32875 = G__32898;
i__32862_32876 = G__32899;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_32858;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_32857;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1503577465524
