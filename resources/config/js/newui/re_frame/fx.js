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
var seq__35779 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35780 = null;
var count__35781 = (0);
var i__35782 = (0);
while(true){
if((i__35782 < count__35781)){
var vec__35783 = cljs.core._nth.call(null,chunk__35780,i__35782);
var effect_key = cljs.core.nth.call(null,vec__35783,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35783,(1),null);
var temp__4655__auto___35789 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35789)){
var effect_fn_35790 = temp__4655__auto___35789;
effect_fn_35790.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__35791 = seq__35779;
var G__35792 = chunk__35780;
var G__35793 = count__35781;
var G__35794 = (i__35782 + (1));
seq__35779 = G__35791;
chunk__35780 = G__35792;
count__35781 = G__35793;
i__35782 = G__35794;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35779);
if(temp__4657__auto__){
var seq__35779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35779__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__35779__$1);
var G__35795 = cljs.core.chunk_rest.call(null,seq__35779__$1);
var G__35796 = c__29272__auto__;
var G__35797 = cljs.core.count.call(null,c__29272__auto__);
var G__35798 = (0);
seq__35779 = G__35795;
chunk__35780 = G__35796;
count__35781 = G__35797;
i__35782 = G__35798;
continue;
} else {
var vec__35786 = cljs.core.first.call(null,seq__35779__$1);
var effect_key = cljs.core.nth.call(null,vec__35786,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35786,(1),null);
var temp__4655__auto___35799 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35799)){
var effect_fn_35800 = temp__4655__auto___35799;
effect_fn_35800.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__35801 = cljs.core.next.call(null,seq__35779__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35779 = G__35801;
chunk__35780 = G__35802;
count__35781 = G__35803;
i__35782 = G__35804;
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
var seq__35805 = cljs.core.seq.call(null,value);
var chunk__35806 = null;
var count__35807 = (0);
var i__35808 = (0);
while(true){
if((i__35808 < count__35807)){
var map__35809 = cljs.core._nth.call(null,chunk__35806,i__35808);
var map__35809__$1 = ((((!((map__35809 == null)))?((((map__35809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35809):map__35809);
var effect = map__35809__$1;
var ms = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35809__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35805,chunk__35806,count__35807,i__35808,map__35809,map__35809__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35805,chunk__35806,count__35807,i__35808,map__35809,map__35809__$1,effect,ms,dispatch))
,ms);
}

var G__35813 = seq__35805;
var G__35814 = chunk__35806;
var G__35815 = count__35807;
var G__35816 = (i__35808 + (1));
seq__35805 = G__35813;
chunk__35806 = G__35814;
count__35807 = G__35815;
i__35808 = G__35816;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35805);
if(temp__4657__auto__){
var seq__35805__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35805__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__35805__$1);
var G__35817 = cljs.core.chunk_rest.call(null,seq__35805__$1);
var G__35818 = c__29272__auto__;
var G__35819 = cljs.core.count.call(null,c__29272__auto__);
var G__35820 = (0);
seq__35805 = G__35817;
chunk__35806 = G__35818;
count__35807 = G__35819;
i__35808 = G__35820;
continue;
} else {
var map__35811 = cljs.core.first.call(null,seq__35805__$1);
var map__35811__$1 = ((((!((map__35811 == null)))?((((map__35811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35811):map__35811);
var effect = map__35811__$1;
var ms = cljs.core.get.call(null,map__35811__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35811__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35805,chunk__35806,count__35807,i__35808,map__35811,map__35811__$1,effect,ms,dispatch,seq__35805__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35805,chunk__35806,count__35807,i__35808,map__35811,map__35811__$1,effect,ms,dispatch,seq__35805__$1,temp__4657__auto__))
,ms);
}

var G__35821 = cljs.core.next.call(null,seq__35805__$1);
var G__35822 = null;
var G__35823 = (0);
var G__35824 = (0);
seq__35805 = G__35821;
chunk__35806 = G__35822;
count__35807 = G__35823;
i__35808 = G__35824;
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
var seq__35825 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__35826 = null;
var count__35827 = (0);
var i__35828 = (0);
while(true){
if((i__35828 < count__35827)){
var event = cljs.core._nth.call(null,chunk__35826,i__35828);
re_frame.router.dispatch.call(null,event);

var G__35829 = seq__35825;
var G__35830 = chunk__35826;
var G__35831 = count__35827;
var G__35832 = (i__35828 + (1));
seq__35825 = G__35829;
chunk__35826 = G__35830;
count__35827 = G__35831;
i__35828 = G__35832;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35825);
if(temp__4657__auto__){
var seq__35825__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35825__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__35825__$1);
var G__35833 = cljs.core.chunk_rest.call(null,seq__35825__$1);
var G__35834 = c__29272__auto__;
var G__35835 = cljs.core.count.call(null,c__29272__auto__);
var G__35836 = (0);
seq__35825 = G__35833;
chunk__35826 = G__35834;
count__35827 = G__35835;
i__35828 = G__35836;
continue;
} else {
var event = cljs.core.first.call(null,seq__35825__$1);
re_frame.router.dispatch.call(null,event);

var G__35837 = cljs.core.next.call(null,seq__35825__$1);
var G__35838 = null;
var G__35839 = (0);
var G__35840 = (0);
seq__35825 = G__35837;
chunk__35826 = G__35838;
count__35827 = G__35839;
i__35828 = G__35840;
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
var seq__35841 = cljs.core.seq.call(null,value);
var chunk__35842 = null;
var count__35843 = (0);
var i__35844 = (0);
while(true){
if((i__35844 < count__35843)){
var event = cljs.core._nth.call(null,chunk__35842,i__35844);
clear_event.call(null,event);

var G__35845 = seq__35841;
var G__35846 = chunk__35842;
var G__35847 = count__35843;
var G__35848 = (i__35844 + (1));
seq__35841 = G__35845;
chunk__35842 = G__35846;
count__35843 = G__35847;
i__35844 = G__35848;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35841);
if(temp__4657__auto__){
var seq__35841__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35841__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__35841__$1);
var G__35849 = cljs.core.chunk_rest.call(null,seq__35841__$1);
var G__35850 = c__29272__auto__;
var G__35851 = cljs.core.count.call(null,c__29272__auto__);
var G__35852 = (0);
seq__35841 = G__35849;
chunk__35842 = G__35850;
count__35843 = G__35851;
i__35844 = G__35852;
continue;
} else {
var event = cljs.core.first.call(null,seq__35841__$1);
clear_event.call(null,event);

var G__35853 = cljs.core.next.call(null,seq__35841__$1);
var G__35854 = null;
var G__35855 = (0);
var G__35856 = (0);
seq__35841 = G__35853;
chunk__35842 = G__35854;
count__35843 = G__35855;
i__35844 = G__35856;
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

//# sourceMappingURL=fx.js.map?rel=1503758424203
