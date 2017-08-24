// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38553){if((e38553 instanceof Error)){
var e = e38553;
return "Error: Unable to stringify";
} else {
throw e38553;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38556 = arguments.length;
switch (G__38556) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38554_SHARP_){
if(typeof p1__38554_SHARP_ === 'string'){
return p1__38554_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38554_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29609__auto__ = [];
var len__29602__auto___38559 = arguments.length;
var i__29603__auto___38560 = (0);
while(true){
if((i__29603__auto___38560 < len__29602__auto___38559)){
args__29609__auto__.push((arguments[i__29603__auto___38560]));

var G__38561 = (i__29603__auto___38560 + (1));
i__29603__auto___38560 = G__38561;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38558){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38558));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29609__auto__ = [];
var len__29602__auto___38563 = arguments.length;
var i__29603__auto___38564 = (0);
while(true){
if((i__29603__auto___38564 < len__29602__auto___38563)){
args__29609__auto__.push((arguments[i__29603__auto___38564]));

var G__38565 = (i__29603__auto___38564 + (1));
i__29603__auto___38564 = G__38565;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38562){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38562));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38566){
var map__38567 = p__38566;
var map__38567__$1 = ((((!((map__38567 == null)))?((((map__38567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38567):map__38567);
var message = cljs.core.get.call(null,map__38567__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38567__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28433__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28421__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28421__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28421__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33471__auto___38646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___38646,ch){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___38646,ch){
return (function (state_38618){
var state_val_38619 = (state_38618[(1)]);
if((state_val_38619 === (7))){
var inst_38614 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38620_38647 = state_38618__$1;
(statearr_38620_38647[(2)] = inst_38614);

(statearr_38620_38647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (1))){
var state_38618__$1 = state_38618;
var statearr_38621_38648 = state_38618__$1;
(statearr_38621_38648[(2)] = null);

(statearr_38621_38648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (4))){
var inst_38571 = (state_38618[(7)]);
var inst_38571__$1 = (state_38618[(2)]);
var state_38618__$1 = (function (){var statearr_38622 = state_38618;
(statearr_38622[(7)] = inst_38571__$1);

return statearr_38622;
})();
if(cljs.core.truth_(inst_38571__$1)){
var statearr_38623_38649 = state_38618__$1;
(statearr_38623_38649[(1)] = (5));

} else {
var statearr_38624_38650 = state_38618__$1;
(statearr_38624_38650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (15))){
var inst_38578 = (state_38618[(8)]);
var inst_38593 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38578);
var inst_38594 = cljs.core.first.call(null,inst_38593);
var inst_38595 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38594);
var inst_38596 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38595)].join('');
var inst_38597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38596);
var state_38618__$1 = state_38618;
var statearr_38625_38651 = state_38618__$1;
(statearr_38625_38651[(2)] = inst_38597);

(statearr_38625_38651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (13))){
var inst_38602 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38626_38652 = state_38618__$1;
(statearr_38626_38652[(2)] = inst_38602);

(statearr_38626_38652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (6))){
var state_38618__$1 = state_38618;
var statearr_38627_38653 = state_38618__$1;
(statearr_38627_38653[(2)] = null);

(statearr_38627_38653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (17))){
var inst_38600 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38628_38654 = state_38618__$1;
(statearr_38628_38654[(2)] = inst_38600);

(statearr_38628_38654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (3))){
var inst_38616 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38618__$1,inst_38616);
} else {
if((state_val_38619 === (12))){
var inst_38577 = (state_38618[(9)]);
var inst_38591 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38577,opts);
var state_38618__$1 = state_38618;
if(cljs.core.truth_(inst_38591)){
var statearr_38629_38655 = state_38618__$1;
(statearr_38629_38655[(1)] = (15));

} else {
var statearr_38630_38656 = state_38618__$1;
(statearr_38630_38656[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (2))){
var state_38618__$1 = state_38618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38618__$1,(4),ch);
} else {
if((state_val_38619 === (11))){
var inst_38578 = (state_38618[(8)]);
var inst_38583 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38584 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38578);
var inst_38585 = cljs.core.async.timeout.call(null,(1000));
var inst_38586 = [inst_38584,inst_38585];
var inst_38587 = (new cljs.core.PersistentVector(null,2,(5),inst_38583,inst_38586,null));
var state_38618__$1 = state_38618;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38618__$1,(14),inst_38587);
} else {
if((state_val_38619 === (9))){
var inst_38578 = (state_38618[(8)]);
var inst_38604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38605 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38578);
var inst_38606 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38605);
var inst_38607 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38606)].join('');
var inst_38608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38607);
var state_38618__$1 = (function (){var statearr_38631 = state_38618;
(statearr_38631[(10)] = inst_38604);

return statearr_38631;
})();
var statearr_38632_38657 = state_38618__$1;
(statearr_38632_38657[(2)] = inst_38608);

(statearr_38632_38657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (5))){
var inst_38571 = (state_38618[(7)]);
var inst_38573 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38574 = (new cljs.core.PersistentArrayMap(null,2,inst_38573,null));
var inst_38575 = (new cljs.core.PersistentHashSet(null,inst_38574,null));
var inst_38576 = figwheel.client.focus_msgs.call(null,inst_38575,inst_38571);
var inst_38577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38576);
var inst_38578 = cljs.core.first.call(null,inst_38576);
var inst_38579 = figwheel.client.autoload_QMARK_.call(null);
var state_38618__$1 = (function (){var statearr_38633 = state_38618;
(statearr_38633[(9)] = inst_38577);

(statearr_38633[(8)] = inst_38578);

return statearr_38633;
})();
if(cljs.core.truth_(inst_38579)){
var statearr_38634_38658 = state_38618__$1;
(statearr_38634_38658[(1)] = (8));

} else {
var statearr_38635_38659 = state_38618__$1;
(statearr_38635_38659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (14))){
var inst_38589 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38636_38660 = state_38618__$1;
(statearr_38636_38660[(2)] = inst_38589);

(statearr_38636_38660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (16))){
var state_38618__$1 = state_38618;
var statearr_38637_38661 = state_38618__$1;
(statearr_38637_38661[(2)] = null);

(statearr_38637_38661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (10))){
var inst_38610 = (state_38618[(2)]);
var state_38618__$1 = (function (){var statearr_38638 = state_38618;
(statearr_38638[(11)] = inst_38610);

return statearr_38638;
})();
var statearr_38639_38662 = state_38618__$1;
(statearr_38639_38662[(2)] = null);

(statearr_38639_38662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (8))){
var inst_38577 = (state_38618[(9)]);
var inst_38581 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38577,opts);
var state_38618__$1 = state_38618;
if(cljs.core.truth_(inst_38581)){
var statearr_38640_38663 = state_38618__$1;
(statearr_38640_38663[(1)] = (11));

} else {
var statearr_38641_38664 = state_38618__$1;
(statearr_38641_38664[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33471__auto___38646,ch))
;
return ((function (switch__33365__auto__,c__33471__auto___38646,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33366__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33366__auto____0 = (function (){
var statearr_38642 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38642[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33366__auto__);

(statearr_38642[(1)] = (1));

return statearr_38642;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33366__auto____1 = (function (state_38618){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_38618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e38643){if((e38643 instanceof Object)){
var ex__33369__auto__ = e38643;
var statearr_38644_38665 = state_38618;
(statearr_38644_38665[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38666 = state_38618;
state_38618 = G__38666;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33366__auto__ = function(state_38618){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33366__auto____1.call(this,state_38618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33366__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33366__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___38646,ch))
})();
var state__33473__auto__ = (function (){var statearr_38645 = f__33472__auto__.call(null);
(statearr_38645[(6)] = c__33471__auto___38646);

return statearr_38645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___38646,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38667_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38667_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38669 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38669){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38668){if((e38668 instanceof Error)){
var e = e38668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38669], null));
} else {
var e = e38668;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38669))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38670){
var map__38671 = p__38670;
var map__38671__$1 = ((((!((map__38671 == null)))?((((map__38671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38671):map__38671);
var opts = map__38671__$1;
var build_id = cljs.core.get.call(null,map__38671__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38671,map__38671__$1,opts,build_id){
return (function (p__38673){
var vec__38674 = p__38673;
var seq__38675 = cljs.core.seq.call(null,vec__38674);
var first__38676 = cljs.core.first.call(null,seq__38675);
var seq__38675__$1 = cljs.core.next.call(null,seq__38675);
var map__38677 = first__38676;
var map__38677__$1 = ((((!((map__38677 == null)))?((((map__38677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38677):map__38677);
var msg = map__38677__$1;
var msg_name = cljs.core.get.call(null,map__38677__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38675__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38674,seq__38675,first__38676,seq__38675__$1,map__38677,map__38677__$1,msg,msg_name,_,map__38671,map__38671__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38674,seq__38675,first__38676,seq__38675__$1,map__38677,map__38677__$1,msg,msg_name,_,map__38671,map__38671__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38671,map__38671__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38679){
var vec__38680 = p__38679;
var seq__38681 = cljs.core.seq.call(null,vec__38680);
var first__38682 = cljs.core.first.call(null,seq__38681);
var seq__38681__$1 = cljs.core.next.call(null,seq__38681);
var map__38683 = first__38682;
var map__38683__$1 = ((((!((map__38683 == null)))?((((map__38683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38683):map__38683);
var msg = map__38683__$1;
var msg_name = cljs.core.get.call(null,map__38683__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38681__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38685){
var map__38686 = p__38685;
var map__38686__$1 = ((((!((map__38686 == null)))?((((map__38686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38686):map__38686);
var on_compile_warning = cljs.core.get.call(null,map__38686__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38686__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38686,map__38686__$1,on_compile_warning,on_compile_fail){
return (function (p__38688){
var vec__38689 = p__38688;
var seq__38690 = cljs.core.seq.call(null,vec__38689);
var first__38691 = cljs.core.first.call(null,seq__38690);
var seq__38690__$1 = cljs.core.next.call(null,seq__38690);
var map__38692 = first__38691;
var map__38692__$1 = ((((!((map__38692 == null)))?((((map__38692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38692):map__38692);
var msg = map__38692__$1;
var msg_name = cljs.core.get.call(null,map__38692__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38690__$1;
var pred__38694 = cljs.core._EQ_;
var expr__38695 = msg_name;
if(cljs.core.truth_(pred__38694.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38695))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38694.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38695))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38686,map__38686__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__,msg_hist,msg_names,msg){
return (function (state_38784){
var state_val_38785 = (state_38784[(1)]);
if((state_val_38785 === (7))){
var inst_38704 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38704)){
var statearr_38786_38833 = state_38784__$1;
(statearr_38786_38833[(1)] = (8));

} else {
var statearr_38787_38834 = state_38784__$1;
(statearr_38787_38834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (20))){
var inst_38778 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38788_38835 = state_38784__$1;
(statearr_38788_38835[(2)] = inst_38778);

(statearr_38788_38835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (27))){
var inst_38774 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38789_38836 = state_38784__$1;
(statearr_38789_38836[(2)] = inst_38774);

(statearr_38789_38836[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (1))){
var inst_38697 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38697)){
var statearr_38790_38837 = state_38784__$1;
(statearr_38790_38837[(1)] = (2));

} else {
var statearr_38791_38838 = state_38784__$1;
(statearr_38791_38838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (24))){
var inst_38776 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38792_38839 = state_38784__$1;
(statearr_38792_38839[(2)] = inst_38776);

(statearr_38792_38839[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (4))){
var inst_38782 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38784__$1,inst_38782);
} else {
if((state_val_38785 === (15))){
var inst_38780 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38793_38840 = state_38784__$1;
(statearr_38793_38840[(2)] = inst_38780);

(statearr_38793_38840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (21))){
var inst_38733 = (state_38784[(2)]);
var inst_38734 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38735 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38734);
var state_38784__$1 = (function (){var statearr_38794 = state_38784;
(statearr_38794[(7)] = inst_38733);

return statearr_38794;
})();
var statearr_38795_38841 = state_38784__$1;
(statearr_38795_38841[(2)] = inst_38735);

(statearr_38795_38841[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (31))){
var inst_38763 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38763)){
var statearr_38796_38842 = state_38784__$1;
(statearr_38796_38842[(1)] = (34));

} else {
var statearr_38797_38843 = state_38784__$1;
(statearr_38797_38843[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (32))){
var inst_38772 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38798_38844 = state_38784__$1;
(statearr_38798_38844[(2)] = inst_38772);

(statearr_38798_38844[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (33))){
var inst_38759 = (state_38784[(2)]);
var inst_38760 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38761 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38760);
var state_38784__$1 = (function (){var statearr_38799 = state_38784;
(statearr_38799[(8)] = inst_38759);

return statearr_38799;
})();
var statearr_38800_38845 = state_38784__$1;
(statearr_38800_38845[(2)] = inst_38761);

(statearr_38800_38845[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (13))){
var inst_38718 = figwheel.client.heads_up.clear.call(null);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(16),inst_38718);
} else {
if((state_val_38785 === (22))){
var inst_38739 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38740 = figwheel.client.heads_up.append_warning_message.call(null,inst_38739);
var state_38784__$1 = state_38784;
var statearr_38801_38846 = state_38784__$1;
(statearr_38801_38846[(2)] = inst_38740);

(statearr_38801_38846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (36))){
var inst_38770 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38802_38847 = state_38784__$1;
(statearr_38802_38847[(2)] = inst_38770);

(statearr_38802_38847[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (29))){
var inst_38750 = (state_38784[(2)]);
var inst_38751 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38752 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38751);
var state_38784__$1 = (function (){var statearr_38803 = state_38784;
(statearr_38803[(9)] = inst_38750);

return statearr_38803;
})();
var statearr_38804_38848 = state_38784__$1;
(statearr_38804_38848[(2)] = inst_38752);

(statearr_38804_38848[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (6))){
var inst_38699 = (state_38784[(10)]);
var state_38784__$1 = state_38784;
var statearr_38805_38849 = state_38784__$1;
(statearr_38805_38849[(2)] = inst_38699);

(statearr_38805_38849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (28))){
var inst_38746 = (state_38784[(2)]);
var inst_38747 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38748 = figwheel.client.heads_up.display_warning.call(null,inst_38747);
var state_38784__$1 = (function (){var statearr_38806 = state_38784;
(statearr_38806[(11)] = inst_38746);

return statearr_38806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(29),inst_38748);
} else {
if((state_val_38785 === (25))){
var inst_38744 = figwheel.client.heads_up.clear.call(null);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(28),inst_38744);
} else {
if((state_val_38785 === (34))){
var inst_38765 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(37),inst_38765);
} else {
if((state_val_38785 === (17))){
var inst_38724 = (state_38784[(2)]);
var inst_38725 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38726 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38725);
var state_38784__$1 = (function (){var statearr_38807 = state_38784;
(statearr_38807[(12)] = inst_38724);

return statearr_38807;
})();
var statearr_38808_38850 = state_38784__$1;
(statearr_38808_38850[(2)] = inst_38726);

(statearr_38808_38850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (3))){
var inst_38716 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38716)){
var statearr_38809_38851 = state_38784__$1;
(statearr_38809_38851[(1)] = (13));

} else {
var statearr_38810_38852 = state_38784__$1;
(statearr_38810_38852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (12))){
var inst_38712 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38811_38853 = state_38784__$1;
(statearr_38811_38853[(2)] = inst_38712);

(statearr_38811_38853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (2))){
var inst_38699 = (state_38784[(10)]);
var inst_38699__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38784__$1 = (function (){var statearr_38812 = state_38784;
(statearr_38812[(10)] = inst_38699__$1);

return statearr_38812;
})();
if(cljs.core.truth_(inst_38699__$1)){
var statearr_38813_38854 = state_38784__$1;
(statearr_38813_38854[(1)] = (5));

} else {
var statearr_38814_38855 = state_38784__$1;
(statearr_38814_38855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (23))){
var inst_38742 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38742)){
var statearr_38815_38856 = state_38784__$1;
(statearr_38815_38856[(1)] = (25));

} else {
var statearr_38816_38857 = state_38784__$1;
(statearr_38816_38857[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (35))){
var state_38784__$1 = state_38784;
var statearr_38817_38858 = state_38784__$1;
(statearr_38817_38858[(2)] = null);

(statearr_38817_38858[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (19))){
var inst_38737 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38737)){
var statearr_38818_38859 = state_38784__$1;
(statearr_38818_38859[(1)] = (22));

} else {
var statearr_38819_38860 = state_38784__$1;
(statearr_38819_38860[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (11))){
var inst_38708 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38820_38861 = state_38784__$1;
(statearr_38820_38861[(2)] = inst_38708);

(statearr_38820_38861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (9))){
var inst_38710 = figwheel.client.heads_up.clear.call(null);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(12),inst_38710);
} else {
if((state_val_38785 === (5))){
var inst_38701 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38784__$1 = state_38784;
var statearr_38821_38862 = state_38784__$1;
(statearr_38821_38862[(2)] = inst_38701);

(statearr_38821_38862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (14))){
var inst_38728 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38728)){
var statearr_38822_38863 = state_38784__$1;
(statearr_38822_38863[(1)] = (18));

} else {
var statearr_38823_38864 = state_38784__$1;
(statearr_38823_38864[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (26))){
var inst_38754 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38784__$1 = state_38784;
if(cljs.core.truth_(inst_38754)){
var statearr_38824_38865 = state_38784__$1;
(statearr_38824_38865[(1)] = (30));

} else {
var statearr_38825_38866 = state_38784__$1;
(statearr_38825_38866[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (16))){
var inst_38720 = (state_38784[(2)]);
var inst_38721 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38722 = figwheel.client.heads_up.display_exception.call(null,inst_38721);
var state_38784__$1 = (function (){var statearr_38826 = state_38784;
(statearr_38826[(13)] = inst_38720);

return statearr_38826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(17),inst_38722);
} else {
if((state_val_38785 === (30))){
var inst_38756 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38757 = figwheel.client.heads_up.display_warning.call(null,inst_38756);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(33),inst_38757);
} else {
if((state_val_38785 === (10))){
var inst_38714 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38827_38867 = state_38784__$1;
(statearr_38827_38867[(2)] = inst_38714);

(statearr_38827_38867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (18))){
var inst_38730 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38731 = figwheel.client.heads_up.display_exception.call(null,inst_38730);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(21),inst_38731);
} else {
if((state_val_38785 === (37))){
var inst_38767 = (state_38784[(2)]);
var state_38784__$1 = state_38784;
var statearr_38828_38868 = state_38784__$1;
(statearr_38828_38868[(2)] = inst_38767);

(statearr_38828_38868[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38785 === (8))){
var inst_38706 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38784__$1 = state_38784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38784__$1,(11),inst_38706);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33471__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33365__auto__,c__33471__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto____0 = (function (){
var statearr_38829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38829[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto__);

(statearr_38829[(1)] = (1));

return statearr_38829;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto____1 = (function (state_38784){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_38784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e38830){if((e38830 instanceof Object)){
var ex__33369__auto__ = e38830;
var statearr_38831_38869 = state_38784;
(statearr_38831_38869[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38870 = state_38784;
state_38784 = G__38870;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto__ = function(state_38784){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto____1.call(this,state_38784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__,msg_hist,msg_names,msg))
})();
var state__33473__auto__ = (function (){var statearr_38832 = f__33472__auto__.call(null);
(statearr_38832[(6)] = c__33471__auto__);

return statearr_38832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,msg_hist,msg_names,msg))
);

return c__33471__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33471__auto___38899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___38899,ch){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___38899,ch){
return (function (state_38885){
var state_val_38886 = (state_38885[(1)]);
if((state_val_38886 === (1))){
var state_38885__$1 = state_38885;
var statearr_38887_38900 = state_38885__$1;
(statearr_38887_38900[(2)] = null);

(statearr_38887_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38886 === (2))){
var state_38885__$1 = state_38885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38885__$1,(4),ch);
} else {
if((state_val_38886 === (3))){
var inst_38883 = (state_38885[(2)]);
var state_38885__$1 = state_38885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38885__$1,inst_38883);
} else {
if((state_val_38886 === (4))){
var inst_38873 = (state_38885[(7)]);
var inst_38873__$1 = (state_38885[(2)]);
var state_38885__$1 = (function (){var statearr_38888 = state_38885;
(statearr_38888[(7)] = inst_38873__$1);

return statearr_38888;
})();
if(cljs.core.truth_(inst_38873__$1)){
var statearr_38889_38901 = state_38885__$1;
(statearr_38889_38901[(1)] = (5));

} else {
var statearr_38890_38902 = state_38885__$1;
(statearr_38890_38902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38886 === (5))){
var inst_38873 = (state_38885[(7)]);
var inst_38875 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38873);
var state_38885__$1 = state_38885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38885__$1,(8),inst_38875);
} else {
if((state_val_38886 === (6))){
var state_38885__$1 = state_38885;
var statearr_38891_38903 = state_38885__$1;
(statearr_38891_38903[(2)] = null);

(statearr_38891_38903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38886 === (7))){
var inst_38881 = (state_38885[(2)]);
var state_38885__$1 = state_38885;
var statearr_38892_38904 = state_38885__$1;
(statearr_38892_38904[(2)] = inst_38881);

(statearr_38892_38904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38886 === (8))){
var inst_38877 = (state_38885[(2)]);
var state_38885__$1 = (function (){var statearr_38893 = state_38885;
(statearr_38893[(8)] = inst_38877);

return statearr_38893;
})();
var statearr_38894_38905 = state_38885__$1;
(statearr_38894_38905[(2)] = null);

(statearr_38894_38905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33471__auto___38899,ch))
;
return ((function (switch__33365__auto__,c__33471__auto___38899,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33366__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33366__auto____0 = (function (){
var statearr_38895 = [null,null,null,null,null,null,null,null,null];
(statearr_38895[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33366__auto__);

(statearr_38895[(1)] = (1));

return statearr_38895;
});
var figwheel$client$heads_up_plugin_$_state_machine__33366__auto____1 = (function (state_38885){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_38885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e38896){if((e38896 instanceof Object)){
var ex__33369__auto__ = e38896;
var statearr_38897_38906 = state_38885;
(statearr_38897_38906[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38907 = state_38885;
state_38885 = G__38907;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33366__auto__ = function(state_38885){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33366__auto____1.call(this,state_38885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33366__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33366__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___38899,ch))
})();
var state__33473__auto__ = (function (){var statearr_38898 = f__33472__auto__.call(null);
(statearr_38898[(6)] = c__33471__auto___38899);

return statearr_38898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___38899,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__){
return (function (state_38913){
var state_val_38914 = (state_38913[(1)]);
if((state_val_38914 === (1))){
var inst_38908 = cljs.core.async.timeout.call(null,(3000));
var state_38913__$1 = state_38913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38913__$1,(2),inst_38908);
} else {
if((state_val_38914 === (2))){
var inst_38910 = (state_38913[(2)]);
var inst_38911 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38913__$1 = (function (){var statearr_38915 = state_38913;
(statearr_38915[(7)] = inst_38910);

return statearr_38915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38913__$1,inst_38911);
} else {
return null;
}
}
});})(c__33471__auto__))
;
return ((function (switch__33365__auto__,c__33471__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33366__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33366__auto____0 = (function (){
var statearr_38916 = [null,null,null,null,null,null,null,null];
(statearr_38916[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33366__auto__);

(statearr_38916[(1)] = (1));

return statearr_38916;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33366__auto____1 = (function (state_38913){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_38913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e38917){if((e38917 instanceof Object)){
var ex__33369__auto__ = e38917;
var statearr_38918_38920 = state_38913;
(statearr_38918_38920[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38921 = state_38913;
state_38913 = G__38921;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33366__auto__ = function(state_38913){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33366__auto____1.call(this,state_38913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33366__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33366__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_38919 = f__33472__auto__.call(null);
(statearr_38919[(6)] = c__33471__auto__);

return statearr_38919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38928){
var state_val_38929 = (state_38928[(1)]);
if((state_val_38929 === (1))){
var inst_38922 = cljs.core.async.timeout.call(null,(2000));
var state_38928__$1 = state_38928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38928__$1,(2),inst_38922);
} else {
if((state_val_38929 === (2))){
var inst_38924 = (state_38928[(2)]);
var inst_38925 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38926 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38925);
var state_38928__$1 = (function (){var statearr_38930 = state_38928;
(statearr_38930[(7)] = inst_38924);

return statearr_38930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38928__$1,inst_38926);
} else {
return null;
}
}
});})(c__33471__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33365__auto__,c__33471__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto____0 = (function (){
var statearr_38931 = [null,null,null,null,null,null,null,null];
(statearr_38931[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto__);

(statearr_38931[(1)] = (1));

return statearr_38931;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto____1 = (function (state_38928){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_38928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e38932){if((e38932 instanceof Object)){
var ex__33369__auto__ = e38932;
var statearr_38933_38935 = state_38928;
(statearr_38933_38935[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38936 = state_38928;
state_38928 = G__38936;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto__ = function(state_38928){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto____1.call(this,state_38928);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33473__auto__ = (function (){var statearr_38934 = f__33472__auto__.call(null);
(statearr_38934[(6)] = c__33471__auto__);

return statearr_38934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,figwheel_version,temp__4657__auto__))
);

return c__33471__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38937){
var map__38938 = p__38937;
var map__38938__$1 = ((((!((map__38938 == null)))?((((map__38938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38938):map__38938);
var file = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38940 = "";
var G__38940__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38940),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38940);
var G__38940__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38940__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38940__$1);
if(cljs.core.truth_((function (){var and__28421__auto__ = line;
if(cljs.core.truth_(and__28421__auto__)){
return column;
} else {
return and__28421__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38940__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38940__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38941){
var map__38942 = p__38941;
var map__38942__$1 = ((((!((map__38942 == null)))?((((map__38942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38942):map__38942);
var ed = map__38942__$1;
var formatted_exception = cljs.core.get.call(null,map__38942__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38942__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38942__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38944_38948 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38945_38949 = null;
var count__38946_38950 = (0);
var i__38947_38951 = (0);
while(true){
if((i__38947_38951 < count__38946_38950)){
var msg_38952 = cljs.core._nth.call(null,chunk__38945_38949,i__38947_38951);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38952);

var G__38953 = seq__38944_38948;
var G__38954 = chunk__38945_38949;
var G__38955 = count__38946_38950;
var G__38956 = (i__38947_38951 + (1));
seq__38944_38948 = G__38953;
chunk__38945_38949 = G__38954;
count__38946_38950 = G__38955;
i__38947_38951 = G__38956;
continue;
} else {
var temp__4657__auto___38957 = cljs.core.seq.call(null,seq__38944_38948);
if(temp__4657__auto___38957){
var seq__38944_38958__$1 = temp__4657__auto___38957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38944_38958__$1)){
var c__29272__auto___38959 = cljs.core.chunk_first.call(null,seq__38944_38958__$1);
var G__38960 = cljs.core.chunk_rest.call(null,seq__38944_38958__$1);
var G__38961 = c__29272__auto___38959;
var G__38962 = cljs.core.count.call(null,c__29272__auto___38959);
var G__38963 = (0);
seq__38944_38948 = G__38960;
chunk__38945_38949 = G__38961;
count__38946_38950 = G__38962;
i__38947_38951 = G__38963;
continue;
} else {
var msg_38964 = cljs.core.first.call(null,seq__38944_38958__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38964);

var G__38965 = cljs.core.next.call(null,seq__38944_38958__$1);
var G__38966 = null;
var G__38967 = (0);
var G__38968 = (0);
seq__38944_38948 = G__38965;
chunk__38945_38949 = G__38966;
count__38946_38950 = G__38967;
i__38947_38951 = G__38968;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38969){
var map__38970 = p__38969;
var map__38970__$1 = ((((!((map__38970 == null)))?((((map__38970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38970):map__38970);
var w = map__38970__$1;
var message = cljs.core.get.call(null,map__38970__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\config\\js\\newui\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\config\\js\\newui\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28421__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28421__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28421__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38972 = cljs.core.seq.call(null,plugins);
var chunk__38973 = null;
var count__38974 = (0);
var i__38975 = (0);
while(true){
if((i__38975 < count__38974)){
var vec__38976 = cljs.core._nth.call(null,chunk__38973,i__38975);
var k = cljs.core.nth.call(null,vec__38976,(0),null);
var plugin = cljs.core.nth.call(null,vec__38976,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38982 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38972,chunk__38973,count__38974,i__38975,pl_38982,vec__38976,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38982.call(null,msg_hist);
});})(seq__38972,chunk__38973,count__38974,i__38975,pl_38982,vec__38976,k,plugin))
);
} else {
}

var G__38983 = seq__38972;
var G__38984 = chunk__38973;
var G__38985 = count__38974;
var G__38986 = (i__38975 + (1));
seq__38972 = G__38983;
chunk__38973 = G__38984;
count__38974 = G__38985;
i__38975 = G__38986;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38972);
if(temp__4657__auto__){
var seq__38972__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38972__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__38972__$1);
var G__38987 = cljs.core.chunk_rest.call(null,seq__38972__$1);
var G__38988 = c__29272__auto__;
var G__38989 = cljs.core.count.call(null,c__29272__auto__);
var G__38990 = (0);
seq__38972 = G__38987;
chunk__38973 = G__38988;
count__38974 = G__38989;
i__38975 = G__38990;
continue;
} else {
var vec__38979 = cljs.core.first.call(null,seq__38972__$1);
var k = cljs.core.nth.call(null,vec__38979,(0),null);
var plugin = cljs.core.nth.call(null,vec__38979,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38991 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38972,chunk__38973,count__38974,i__38975,pl_38991,vec__38979,k,plugin,seq__38972__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38991.call(null,msg_hist);
});})(seq__38972,chunk__38973,count__38974,i__38975,pl_38991,vec__38979,k,plugin,seq__38972__$1,temp__4657__auto__))
);
} else {
}

var G__38992 = cljs.core.next.call(null,seq__38972__$1);
var G__38993 = null;
var G__38994 = (0);
var G__38995 = (0);
seq__38972 = G__38992;
chunk__38973 = G__38993;
count__38974 = G__38994;
i__38975 = G__38995;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38997 = arguments.length;
switch (G__38997) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38998_39003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38999_39004 = null;
var count__39000_39005 = (0);
var i__39001_39006 = (0);
while(true){
if((i__39001_39006 < count__39000_39005)){
var msg_39007 = cljs.core._nth.call(null,chunk__38999_39004,i__39001_39006);
figwheel.client.socket.handle_incoming_message.call(null,msg_39007);

var G__39008 = seq__38998_39003;
var G__39009 = chunk__38999_39004;
var G__39010 = count__39000_39005;
var G__39011 = (i__39001_39006 + (1));
seq__38998_39003 = G__39008;
chunk__38999_39004 = G__39009;
count__39000_39005 = G__39010;
i__39001_39006 = G__39011;
continue;
} else {
var temp__4657__auto___39012 = cljs.core.seq.call(null,seq__38998_39003);
if(temp__4657__auto___39012){
var seq__38998_39013__$1 = temp__4657__auto___39012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38998_39013__$1)){
var c__29272__auto___39014 = cljs.core.chunk_first.call(null,seq__38998_39013__$1);
var G__39015 = cljs.core.chunk_rest.call(null,seq__38998_39013__$1);
var G__39016 = c__29272__auto___39014;
var G__39017 = cljs.core.count.call(null,c__29272__auto___39014);
var G__39018 = (0);
seq__38998_39003 = G__39015;
chunk__38999_39004 = G__39016;
count__39000_39005 = G__39017;
i__39001_39006 = G__39018;
continue;
} else {
var msg_39019 = cljs.core.first.call(null,seq__38998_39013__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39019);

var G__39020 = cljs.core.next.call(null,seq__38998_39013__$1);
var G__39021 = null;
var G__39022 = (0);
var G__39023 = (0);
seq__38998_39003 = G__39020;
chunk__38999_39004 = G__39021;
count__39000_39005 = G__39022;
i__39001_39006 = G__39023;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29609__auto__ = [];
var len__29602__auto___39028 = arguments.length;
var i__29603__auto___39029 = (0);
while(true){
if((i__29603__auto___39029 < len__29602__auto___39028)){
args__29609__auto__.push((arguments[i__29603__auto___39029]));

var G__39030 = (i__29603__auto___39029 + (1));
i__29603__auto___39029 = G__39030;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39025){
var map__39026 = p__39025;
var map__39026__$1 = ((((!((map__39026 == null)))?((((map__39026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39026):map__39026);
var opts = map__39026__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39024){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39024));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39031){if((e39031 instanceof Error)){
var e = e39031;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39031;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39032){
var map__39033 = p__39032;
var map__39033__$1 = ((((!((map__39033 == null)))?((((map__39033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39033):map__39033);
var msg_name = cljs.core.get.call(null,map__39033__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503580042853
