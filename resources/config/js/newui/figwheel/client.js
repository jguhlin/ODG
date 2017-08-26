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
}catch (e41485){if((e41485 instanceof Error)){
var e = e41485;
return "Error: Unable to stringify";
} else {
throw e41485;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41488 = arguments.length;
switch (G__41488) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41486_SHARP_){
if(typeof p1__41486_SHARP_ === 'string'){
return p1__41486_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41486_SHARP_);
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
var len__29602__auto___41491 = arguments.length;
var i__29603__auto___41492 = (0);
while(true){
if((i__29603__auto___41492 < len__29602__auto___41491)){
args__29609__auto__.push((arguments[i__29603__auto___41492]));

var G__41493 = (i__29603__auto___41492 + (1));
i__29603__auto___41492 = G__41493;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41490){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41490));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29609__auto__ = [];
var len__29602__auto___41495 = arguments.length;
var i__29603__auto___41496 = (0);
while(true){
if((i__29603__auto___41496 < len__29602__auto___41495)){
args__29609__auto__.push((arguments[i__29603__auto___41496]));

var G__41497 = (i__29603__auto___41496 + (1));
i__29603__auto___41496 = G__41497;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41494){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41494));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41498){
var map__41499 = p__41498;
var map__41499__$1 = ((((!((map__41499 == null)))?((((map__41499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41499):map__41499);
var message = cljs.core.get.call(null,map__41499__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41499__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__37706__auto___41578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___41578,ch){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___41578,ch){
return (function (state_41550){
var state_val_41551 = (state_41550[(1)]);
if((state_val_41551 === (7))){
var inst_41546 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
var statearr_41552_41579 = state_41550__$1;
(statearr_41552_41579[(2)] = inst_41546);

(statearr_41552_41579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (1))){
var state_41550__$1 = state_41550;
var statearr_41553_41580 = state_41550__$1;
(statearr_41553_41580[(2)] = null);

(statearr_41553_41580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (4))){
var inst_41503 = (state_41550[(7)]);
var inst_41503__$1 = (state_41550[(2)]);
var state_41550__$1 = (function (){var statearr_41554 = state_41550;
(statearr_41554[(7)] = inst_41503__$1);

return statearr_41554;
})();
if(cljs.core.truth_(inst_41503__$1)){
var statearr_41555_41581 = state_41550__$1;
(statearr_41555_41581[(1)] = (5));

} else {
var statearr_41556_41582 = state_41550__$1;
(statearr_41556_41582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (15))){
var inst_41510 = (state_41550[(8)]);
var inst_41525 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41510);
var inst_41526 = cljs.core.first.call(null,inst_41525);
var inst_41527 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41526);
var inst_41528 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41527)].join('');
var inst_41529 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41528);
var state_41550__$1 = state_41550;
var statearr_41557_41583 = state_41550__$1;
(statearr_41557_41583[(2)] = inst_41529);

(statearr_41557_41583[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (13))){
var inst_41534 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
var statearr_41558_41584 = state_41550__$1;
(statearr_41558_41584[(2)] = inst_41534);

(statearr_41558_41584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (6))){
var state_41550__$1 = state_41550;
var statearr_41559_41585 = state_41550__$1;
(statearr_41559_41585[(2)] = null);

(statearr_41559_41585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (17))){
var inst_41532 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
var statearr_41560_41586 = state_41550__$1;
(statearr_41560_41586[(2)] = inst_41532);

(statearr_41560_41586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (3))){
var inst_41548 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41550__$1,inst_41548);
} else {
if((state_val_41551 === (12))){
var inst_41509 = (state_41550[(9)]);
var inst_41523 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41509,opts);
var state_41550__$1 = state_41550;
if(cljs.core.truth_(inst_41523)){
var statearr_41561_41587 = state_41550__$1;
(statearr_41561_41587[(1)] = (15));

} else {
var statearr_41562_41588 = state_41550__$1;
(statearr_41562_41588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (2))){
var state_41550__$1 = state_41550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41550__$1,(4),ch);
} else {
if((state_val_41551 === (11))){
var inst_41510 = (state_41550[(8)]);
var inst_41515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41516 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41510);
var inst_41517 = cljs.core.async.timeout.call(null,(1000));
var inst_41518 = [inst_41516,inst_41517];
var inst_41519 = (new cljs.core.PersistentVector(null,2,(5),inst_41515,inst_41518,null));
var state_41550__$1 = state_41550;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41550__$1,(14),inst_41519);
} else {
if((state_val_41551 === (9))){
var inst_41510 = (state_41550[(8)]);
var inst_41536 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41537 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41510);
var inst_41538 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41537);
var inst_41539 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41538)].join('');
var inst_41540 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41539);
var state_41550__$1 = (function (){var statearr_41563 = state_41550;
(statearr_41563[(10)] = inst_41536);

return statearr_41563;
})();
var statearr_41564_41589 = state_41550__$1;
(statearr_41564_41589[(2)] = inst_41540);

(statearr_41564_41589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (5))){
var inst_41503 = (state_41550[(7)]);
var inst_41505 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41506 = (new cljs.core.PersistentArrayMap(null,2,inst_41505,null));
var inst_41507 = (new cljs.core.PersistentHashSet(null,inst_41506,null));
var inst_41508 = figwheel.client.focus_msgs.call(null,inst_41507,inst_41503);
var inst_41509 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41508);
var inst_41510 = cljs.core.first.call(null,inst_41508);
var inst_41511 = figwheel.client.autoload_QMARK_.call(null);
var state_41550__$1 = (function (){var statearr_41565 = state_41550;
(statearr_41565[(9)] = inst_41509);

(statearr_41565[(8)] = inst_41510);

return statearr_41565;
})();
if(cljs.core.truth_(inst_41511)){
var statearr_41566_41590 = state_41550__$1;
(statearr_41566_41590[(1)] = (8));

} else {
var statearr_41567_41591 = state_41550__$1;
(statearr_41567_41591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (14))){
var inst_41521 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
var statearr_41568_41592 = state_41550__$1;
(statearr_41568_41592[(2)] = inst_41521);

(statearr_41568_41592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (16))){
var state_41550__$1 = state_41550;
var statearr_41569_41593 = state_41550__$1;
(statearr_41569_41593[(2)] = null);

(statearr_41569_41593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (10))){
var inst_41542 = (state_41550[(2)]);
var state_41550__$1 = (function (){var statearr_41570 = state_41550;
(statearr_41570[(11)] = inst_41542);

return statearr_41570;
})();
var statearr_41571_41594 = state_41550__$1;
(statearr_41571_41594[(2)] = null);

(statearr_41571_41594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (8))){
var inst_41509 = (state_41550[(9)]);
var inst_41513 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41509,opts);
var state_41550__$1 = state_41550;
if(cljs.core.truth_(inst_41513)){
var statearr_41572_41595 = state_41550__$1;
(statearr_41572_41595[(1)] = (11));

} else {
var statearr_41573_41596 = state_41550__$1;
(statearr_41573_41596[(1)] = (12));

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
});})(c__37706__auto___41578,ch))
;
return ((function (switch__37618__auto__,c__37706__auto___41578,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37619__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37619__auto____0 = (function (){
var statearr_41574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41574[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37619__auto__);

(statearr_41574[(1)] = (1));

return statearr_41574;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37619__auto____1 = (function (state_41550){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_41550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e41575){if((e41575 instanceof Object)){
var ex__37622__auto__ = e41575;
var statearr_41576_41597 = state_41550;
(statearr_41576_41597[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41598 = state_41550;
state_41550 = G__41598;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37619__auto__ = function(state_41550){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37619__auto____1.call(this,state_41550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37619__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37619__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___41578,ch))
})();
var state__37708__auto__ = (function (){var statearr_41577 = f__37707__auto__.call(null);
(statearr_41577[(6)] = c__37706__auto___41578);

return statearr_41577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___41578,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41599_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41599_SHARP_));
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
var base_path_41601 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41601){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e41600){if((e41600 instanceof Error)){
var e = e41600;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41601], null));
} else {
var e = e41600;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_41601))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41602){
var map__41603 = p__41602;
var map__41603__$1 = ((((!((map__41603 == null)))?((((map__41603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41603):map__41603);
var opts = map__41603__$1;
var build_id = cljs.core.get.call(null,map__41603__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41603,map__41603__$1,opts,build_id){
return (function (p__41605){
var vec__41606 = p__41605;
var seq__41607 = cljs.core.seq.call(null,vec__41606);
var first__41608 = cljs.core.first.call(null,seq__41607);
var seq__41607__$1 = cljs.core.next.call(null,seq__41607);
var map__41609 = first__41608;
var map__41609__$1 = ((((!((map__41609 == null)))?((((map__41609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41609):map__41609);
var msg = map__41609__$1;
var msg_name = cljs.core.get.call(null,map__41609__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41607__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41606,seq__41607,first__41608,seq__41607__$1,map__41609,map__41609__$1,msg,msg_name,_,map__41603,map__41603__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41606,seq__41607,first__41608,seq__41607__$1,map__41609,map__41609__$1,msg,msg_name,_,map__41603,map__41603__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41603,map__41603__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41611){
var vec__41612 = p__41611;
var seq__41613 = cljs.core.seq.call(null,vec__41612);
var first__41614 = cljs.core.first.call(null,seq__41613);
var seq__41613__$1 = cljs.core.next.call(null,seq__41613);
var map__41615 = first__41614;
var map__41615__$1 = ((((!((map__41615 == null)))?((((map__41615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41615):map__41615);
var msg = map__41615__$1;
var msg_name = cljs.core.get.call(null,map__41615__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41613__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41617){
var map__41618 = p__41617;
var map__41618__$1 = ((((!((map__41618 == null)))?((((map__41618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41618):map__41618);
var on_compile_warning = cljs.core.get.call(null,map__41618__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41618__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41618,map__41618__$1,on_compile_warning,on_compile_fail){
return (function (p__41620){
var vec__41621 = p__41620;
var seq__41622 = cljs.core.seq.call(null,vec__41621);
var first__41623 = cljs.core.first.call(null,seq__41622);
var seq__41622__$1 = cljs.core.next.call(null,seq__41622);
var map__41624 = first__41623;
var map__41624__$1 = ((((!((map__41624 == null)))?((((map__41624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41624):map__41624);
var msg = map__41624__$1;
var msg_name = cljs.core.get.call(null,map__41624__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41622__$1;
var pred__41626 = cljs.core._EQ_;
var expr__41627 = msg_name;
if(cljs.core.truth_(pred__41626.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41627))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41626.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41627))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41618,map__41618__$1,on_compile_warning,on_compile_fail))
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
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__,msg_hist,msg_names,msg){
return (function (state_41716){
var state_val_41717 = (state_41716[(1)]);
if((state_val_41717 === (7))){
var inst_41636 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41636)){
var statearr_41718_41765 = state_41716__$1;
(statearr_41718_41765[(1)] = (8));

} else {
var statearr_41719_41766 = state_41716__$1;
(statearr_41719_41766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (20))){
var inst_41710 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41720_41767 = state_41716__$1;
(statearr_41720_41767[(2)] = inst_41710);

(statearr_41720_41767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (27))){
var inst_41706 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41721_41768 = state_41716__$1;
(statearr_41721_41768[(2)] = inst_41706);

(statearr_41721_41768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (1))){
var inst_41629 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41629)){
var statearr_41722_41769 = state_41716__$1;
(statearr_41722_41769[(1)] = (2));

} else {
var statearr_41723_41770 = state_41716__$1;
(statearr_41723_41770[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (24))){
var inst_41708 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41724_41771 = state_41716__$1;
(statearr_41724_41771[(2)] = inst_41708);

(statearr_41724_41771[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (4))){
var inst_41714 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41716__$1,inst_41714);
} else {
if((state_val_41717 === (15))){
var inst_41712 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41725_41772 = state_41716__$1;
(statearr_41725_41772[(2)] = inst_41712);

(statearr_41725_41772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (21))){
var inst_41665 = (state_41716[(2)]);
var inst_41666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41667 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41666);
var state_41716__$1 = (function (){var statearr_41726 = state_41716;
(statearr_41726[(7)] = inst_41665);

return statearr_41726;
})();
var statearr_41727_41773 = state_41716__$1;
(statearr_41727_41773[(2)] = inst_41667);

(statearr_41727_41773[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (31))){
var inst_41695 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41695)){
var statearr_41728_41774 = state_41716__$1;
(statearr_41728_41774[(1)] = (34));

} else {
var statearr_41729_41775 = state_41716__$1;
(statearr_41729_41775[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (32))){
var inst_41704 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41730_41776 = state_41716__$1;
(statearr_41730_41776[(2)] = inst_41704);

(statearr_41730_41776[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (33))){
var inst_41691 = (state_41716[(2)]);
var inst_41692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41693 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41692);
var state_41716__$1 = (function (){var statearr_41731 = state_41716;
(statearr_41731[(8)] = inst_41691);

return statearr_41731;
})();
var statearr_41732_41777 = state_41716__$1;
(statearr_41732_41777[(2)] = inst_41693);

(statearr_41732_41777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (13))){
var inst_41650 = figwheel.client.heads_up.clear.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(16),inst_41650);
} else {
if((state_val_41717 === (22))){
var inst_41671 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41672 = figwheel.client.heads_up.append_warning_message.call(null,inst_41671);
var state_41716__$1 = state_41716;
var statearr_41733_41778 = state_41716__$1;
(statearr_41733_41778[(2)] = inst_41672);

(statearr_41733_41778[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (36))){
var inst_41702 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41734_41779 = state_41716__$1;
(statearr_41734_41779[(2)] = inst_41702);

(statearr_41734_41779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (29))){
var inst_41682 = (state_41716[(2)]);
var inst_41683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41684 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41683);
var state_41716__$1 = (function (){var statearr_41735 = state_41716;
(statearr_41735[(9)] = inst_41682);

return statearr_41735;
})();
var statearr_41736_41780 = state_41716__$1;
(statearr_41736_41780[(2)] = inst_41684);

(statearr_41736_41780[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (6))){
var inst_41631 = (state_41716[(10)]);
var state_41716__$1 = state_41716;
var statearr_41737_41781 = state_41716__$1;
(statearr_41737_41781[(2)] = inst_41631);

(statearr_41737_41781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (28))){
var inst_41678 = (state_41716[(2)]);
var inst_41679 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41680 = figwheel.client.heads_up.display_warning.call(null,inst_41679);
var state_41716__$1 = (function (){var statearr_41738 = state_41716;
(statearr_41738[(11)] = inst_41678);

return statearr_41738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(29),inst_41680);
} else {
if((state_val_41717 === (25))){
var inst_41676 = figwheel.client.heads_up.clear.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(28),inst_41676);
} else {
if((state_val_41717 === (34))){
var inst_41697 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(37),inst_41697);
} else {
if((state_val_41717 === (17))){
var inst_41656 = (state_41716[(2)]);
var inst_41657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41657);
var state_41716__$1 = (function (){var statearr_41739 = state_41716;
(statearr_41739[(12)] = inst_41656);

return statearr_41739;
})();
var statearr_41740_41782 = state_41716__$1;
(statearr_41740_41782[(2)] = inst_41658);

(statearr_41740_41782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (3))){
var inst_41648 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41648)){
var statearr_41741_41783 = state_41716__$1;
(statearr_41741_41783[(1)] = (13));

} else {
var statearr_41742_41784 = state_41716__$1;
(statearr_41742_41784[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (12))){
var inst_41644 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41743_41785 = state_41716__$1;
(statearr_41743_41785[(2)] = inst_41644);

(statearr_41743_41785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (2))){
var inst_41631 = (state_41716[(10)]);
var inst_41631__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41716__$1 = (function (){var statearr_41744 = state_41716;
(statearr_41744[(10)] = inst_41631__$1);

return statearr_41744;
})();
if(cljs.core.truth_(inst_41631__$1)){
var statearr_41745_41786 = state_41716__$1;
(statearr_41745_41786[(1)] = (5));

} else {
var statearr_41746_41787 = state_41716__$1;
(statearr_41746_41787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (23))){
var inst_41674 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41674)){
var statearr_41747_41788 = state_41716__$1;
(statearr_41747_41788[(1)] = (25));

} else {
var statearr_41748_41789 = state_41716__$1;
(statearr_41748_41789[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (35))){
var state_41716__$1 = state_41716;
var statearr_41749_41790 = state_41716__$1;
(statearr_41749_41790[(2)] = null);

(statearr_41749_41790[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (19))){
var inst_41669 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41669)){
var statearr_41750_41791 = state_41716__$1;
(statearr_41750_41791[(1)] = (22));

} else {
var statearr_41751_41792 = state_41716__$1;
(statearr_41751_41792[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (11))){
var inst_41640 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41752_41793 = state_41716__$1;
(statearr_41752_41793[(2)] = inst_41640);

(statearr_41752_41793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (9))){
var inst_41642 = figwheel.client.heads_up.clear.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(12),inst_41642);
} else {
if((state_val_41717 === (5))){
var inst_41633 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41716__$1 = state_41716;
var statearr_41753_41794 = state_41716__$1;
(statearr_41753_41794[(2)] = inst_41633);

(statearr_41753_41794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (14))){
var inst_41660 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41660)){
var statearr_41754_41795 = state_41716__$1;
(statearr_41754_41795[(1)] = (18));

} else {
var statearr_41755_41796 = state_41716__$1;
(statearr_41755_41796[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (26))){
var inst_41686 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41716__$1 = state_41716;
if(cljs.core.truth_(inst_41686)){
var statearr_41756_41797 = state_41716__$1;
(statearr_41756_41797[(1)] = (30));

} else {
var statearr_41757_41798 = state_41716__$1;
(statearr_41757_41798[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (16))){
var inst_41652 = (state_41716[(2)]);
var inst_41653 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41654 = figwheel.client.heads_up.display_exception.call(null,inst_41653);
var state_41716__$1 = (function (){var statearr_41758 = state_41716;
(statearr_41758[(13)] = inst_41652);

return statearr_41758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(17),inst_41654);
} else {
if((state_val_41717 === (30))){
var inst_41688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41689 = figwheel.client.heads_up.display_warning.call(null,inst_41688);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(33),inst_41689);
} else {
if((state_val_41717 === (10))){
var inst_41646 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41759_41799 = state_41716__$1;
(statearr_41759_41799[(2)] = inst_41646);

(statearr_41759_41799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (18))){
var inst_41662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41663 = figwheel.client.heads_up.display_exception.call(null,inst_41662);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(21),inst_41663);
} else {
if((state_val_41717 === (37))){
var inst_41699 = (state_41716[(2)]);
var state_41716__$1 = state_41716;
var statearr_41760_41800 = state_41716__$1;
(statearr_41760_41800[(2)] = inst_41699);

(statearr_41760_41800[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41717 === (8))){
var inst_41638 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41716__$1 = state_41716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41716__$1,(11),inst_41638);
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
});})(c__37706__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37618__auto__,c__37706__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto____0 = (function (){
var statearr_41761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41761[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto__);

(statearr_41761[(1)] = (1));

return statearr_41761;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto____1 = (function (state_41716){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_41716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e41762){if((e41762 instanceof Object)){
var ex__37622__auto__ = e41762;
var statearr_41763_41801 = state_41716;
(statearr_41763_41801[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41802 = state_41716;
state_41716 = G__41802;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto__ = function(state_41716){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto____1.call(this,state_41716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__,msg_hist,msg_names,msg))
})();
var state__37708__auto__ = (function (){var statearr_41764 = f__37707__auto__.call(null);
(statearr_41764[(6)] = c__37706__auto__);

return statearr_41764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__,msg_hist,msg_names,msg))
);

return c__37706__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37706__auto___41831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___41831,ch){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___41831,ch){
return (function (state_41817){
var state_val_41818 = (state_41817[(1)]);
if((state_val_41818 === (1))){
var state_41817__$1 = state_41817;
var statearr_41819_41832 = state_41817__$1;
(statearr_41819_41832[(2)] = null);

(statearr_41819_41832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (2))){
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41817__$1,(4),ch);
} else {
if((state_val_41818 === (3))){
var inst_41815 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41817__$1,inst_41815);
} else {
if((state_val_41818 === (4))){
var inst_41805 = (state_41817[(7)]);
var inst_41805__$1 = (state_41817[(2)]);
var state_41817__$1 = (function (){var statearr_41820 = state_41817;
(statearr_41820[(7)] = inst_41805__$1);

return statearr_41820;
})();
if(cljs.core.truth_(inst_41805__$1)){
var statearr_41821_41833 = state_41817__$1;
(statearr_41821_41833[(1)] = (5));

} else {
var statearr_41822_41834 = state_41817__$1;
(statearr_41822_41834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (5))){
var inst_41805 = (state_41817[(7)]);
var inst_41807 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41805);
var state_41817__$1 = state_41817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41817__$1,(8),inst_41807);
} else {
if((state_val_41818 === (6))){
var state_41817__$1 = state_41817;
var statearr_41823_41835 = state_41817__$1;
(statearr_41823_41835[(2)] = null);

(statearr_41823_41835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (7))){
var inst_41813 = (state_41817[(2)]);
var state_41817__$1 = state_41817;
var statearr_41824_41836 = state_41817__$1;
(statearr_41824_41836[(2)] = inst_41813);

(statearr_41824_41836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41818 === (8))){
var inst_41809 = (state_41817[(2)]);
var state_41817__$1 = (function (){var statearr_41825 = state_41817;
(statearr_41825[(8)] = inst_41809);

return statearr_41825;
})();
var statearr_41826_41837 = state_41817__$1;
(statearr_41826_41837[(2)] = null);

(statearr_41826_41837[(1)] = (2));


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
});})(c__37706__auto___41831,ch))
;
return ((function (switch__37618__auto__,c__37706__auto___41831,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37619__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37619__auto____0 = (function (){
var statearr_41827 = [null,null,null,null,null,null,null,null,null];
(statearr_41827[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37619__auto__);

(statearr_41827[(1)] = (1));

return statearr_41827;
});
var figwheel$client$heads_up_plugin_$_state_machine__37619__auto____1 = (function (state_41817){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_41817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e41828){if((e41828 instanceof Object)){
var ex__37622__auto__ = e41828;
var statearr_41829_41838 = state_41817;
(statearr_41829_41838[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41839 = state_41817;
state_41817 = G__41839;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37619__auto__ = function(state_41817){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37619__auto____1.call(this,state_41817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37619__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37619__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___41831,ch))
})();
var state__37708__auto__ = (function (){var statearr_41830 = f__37707__auto__.call(null);
(statearr_41830[(6)] = c__37706__auto___41831);

return statearr_41830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___41831,ch))
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
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__){
return (function (state_41845){
var state_val_41846 = (state_41845[(1)]);
if((state_val_41846 === (1))){
var inst_41840 = cljs.core.async.timeout.call(null,(3000));
var state_41845__$1 = state_41845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41845__$1,(2),inst_41840);
} else {
if((state_val_41846 === (2))){
var inst_41842 = (state_41845[(2)]);
var inst_41843 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41845__$1 = (function (){var statearr_41847 = state_41845;
(statearr_41847[(7)] = inst_41842);

return statearr_41847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41845__$1,inst_41843);
} else {
return null;
}
}
});})(c__37706__auto__))
;
return ((function (switch__37618__auto__,c__37706__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37619__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37619__auto____0 = (function (){
var statearr_41848 = [null,null,null,null,null,null,null,null];
(statearr_41848[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37619__auto__);

(statearr_41848[(1)] = (1));

return statearr_41848;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37619__auto____1 = (function (state_41845){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_41845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e41849){if((e41849 instanceof Object)){
var ex__37622__auto__ = e41849;
var statearr_41850_41852 = state_41845;
(statearr_41850_41852[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41853 = state_41845;
state_41845 = G__41853;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37619__auto__ = function(state_41845){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37619__auto____1.call(this,state_41845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37619__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37619__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__))
})();
var state__37708__auto__ = (function (){var statearr_41851 = f__37707__auto__.call(null);
(statearr_41851[(6)] = c__37706__auto__);

return statearr_41851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__))
);

return c__37706__auto__;
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
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__,figwheel_version,temp__4657__auto__){
return (function (state_41860){
var state_val_41861 = (state_41860[(1)]);
if((state_val_41861 === (1))){
var inst_41854 = cljs.core.async.timeout.call(null,(2000));
var state_41860__$1 = state_41860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41860__$1,(2),inst_41854);
} else {
if((state_val_41861 === (2))){
var inst_41856 = (state_41860[(2)]);
var inst_41857 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41858 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41857);
var state_41860__$1 = (function (){var statearr_41862 = state_41860;
(statearr_41862[(7)] = inst_41856);

return statearr_41862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41860__$1,inst_41858);
} else {
return null;
}
}
});})(c__37706__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__37618__auto__,c__37706__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto____0 = (function (){
var statearr_41863 = [null,null,null,null,null,null,null,null];
(statearr_41863[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto__);

(statearr_41863[(1)] = (1));

return statearr_41863;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto____1 = (function (state_41860){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_41860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e41864){if((e41864 instanceof Object)){
var ex__37622__auto__ = e41864;
var statearr_41865_41867 = state_41860;
(statearr_41865_41867[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41868 = state_41860;
state_41860 = G__41868;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto__ = function(state_41860){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto____1.call(this,state_41860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__,figwheel_version,temp__4657__auto__))
})();
var state__37708__auto__ = (function (){var statearr_41866 = f__37707__auto__.call(null);
(statearr_41866[(6)] = c__37706__auto__);

return statearr_41866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__,figwheel_version,temp__4657__auto__))
);

return c__37706__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41869){
var map__41870 = p__41869;
var map__41870__$1 = ((((!((map__41870 == null)))?((((map__41870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41870):map__41870);
var file = cljs.core.get.call(null,map__41870__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41870__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41870__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41872 = "";
var G__41872__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41872),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41872);
var G__41872__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41872__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41872__$1);
if(cljs.core.truth_((function (){var and__28421__auto__ = line;
if(cljs.core.truth_(and__28421__auto__)){
return column;
} else {
return and__28421__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41872__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41872__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41873){
var map__41874 = p__41873;
var map__41874__$1 = ((((!((map__41874 == null)))?((((map__41874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41874):map__41874);
var ed = map__41874__$1;
var formatted_exception = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41874__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41876_41880 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41877_41881 = null;
var count__41878_41882 = (0);
var i__41879_41883 = (0);
while(true){
if((i__41879_41883 < count__41878_41882)){
var msg_41884 = cljs.core._nth.call(null,chunk__41877_41881,i__41879_41883);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41884);

var G__41885 = seq__41876_41880;
var G__41886 = chunk__41877_41881;
var G__41887 = count__41878_41882;
var G__41888 = (i__41879_41883 + (1));
seq__41876_41880 = G__41885;
chunk__41877_41881 = G__41886;
count__41878_41882 = G__41887;
i__41879_41883 = G__41888;
continue;
} else {
var temp__4657__auto___41889 = cljs.core.seq.call(null,seq__41876_41880);
if(temp__4657__auto___41889){
var seq__41876_41890__$1 = temp__4657__auto___41889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41876_41890__$1)){
var c__29272__auto___41891 = cljs.core.chunk_first.call(null,seq__41876_41890__$1);
var G__41892 = cljs.core.chunk_rest.call(null,seq__41876_41890__$1);
var G__41893 = c__29272__auto___41891;
var G__41894 = cljs.core.count.call(null,c__29272__auto___41891);
var G__41895 = (0);
seq__41876_41880 = G__41892;
chunk__41877_41881 = G__41893;
count__41878_41882 = G__41894;
i__41879_41883 = G__41895;
continue;
} else {
var msg_41896 = cljs.core.first.call(null,seq__41876_41890__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41896);

var G__41897 = cljs.core.next.call(null,seq__41876_41890__$1);
var G__41898 = null;
var G__41899 = (0);
var G__41900 = (0);
seq__41876_41880 = G__41897;
chunk__41877_41881 = G__41898;
count__41878_41882 = G__41899;
i__41879_41883 = G__41900;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41901){
var map__41902 = p__41901;
var map__41902__$1 = ((((!((map__41902 == null)))?((((map__41902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41902):map__41902);
var w = map__41902__$1;
var message = cljs.core.get.call(null,map__41902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__41904 = cljs.core.seq.call(null,plugins);
var chunk__41905 = null;
var count__41906 = (0);
var i__41907 = (0);
while(true){
if((i__41907 < count__41906)){
var vec__41908 = cljs.core._nth.call(null,chunk__41905,i__41907);
var k = cljs.core.nth.call(null,vec__41908,(0),null);
var plugin = cljs.core.nth.call(null,vec__41908,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41914 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41904,chunk__41905,count__41906,i__41907,pl_41914,vec__41908,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41914.call(null,msg_hist);
});})(seq__41904,chunk__41905,count__41906,i__41907,pl_41914,vec__41908,k,plugin))
);
} else {
}

var G__41915 = seq__41904;
var G__41916 = chunk__41905;
var G__41917 = count__41906;
var G__41918 = (i__41907 + (1));
seq__41904 = G__41915;
chunk__41905 = G__41916;
count__41906 = G__41917;
i__41907 = G__41918;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41904);
if(temp__4657__auto__){
var seq__41904__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41904__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__41904__$1);
var G__41919 = cljs.core.chunk_rest.call(null,seq__41904__$1);
var G__41920 = c__29272__auto__;
var G__41921 = cljs.core.count.call(null,c__29272__auto__);
var G__41922 = (0);
seq__41904 = G__41919;
chunk__41905 = G__41920;
count__41906 = G__41921;
i__41907 = G__41922;
continue;
} else {
var vec__41911 = cljs.core.first.call(null,seq__41904__$1);
var k = cljs.core.nth.call(null,vec__41911,(0),null);
var plugin = cljs.core.nth.call(null,vec__41911,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41923 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41904,chunk__41905,count__41906,i__41907,pl_41923,vec__41911,k,plugin,seq__41904__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41923.call(null,msg_hist);
});})(seq__41904,chunk__41905,count__41906,i__41907,pl_41923,vec__41911,k,plugin,seq__41904__$1,temp__4657__auto__))
);
} else {
}

var G__41924 = cljs.core.next.call(null,seq__41904__$1);
var G__41925 = null;
var G__41926 = (0);
var G__41927 = (0);
seq__41904 = G__41924;
chunk__41905 = G__41925;
count__41906 = G__41926;
i__41907 = G__41927;
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
var G__41929 = arguments.length;
switch (G__41929) {
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

var seq__41930_41935 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41931_41936 = null;
var count__41932_41937 = (0);
var i__41933_41938 = (0);
while(true){
if((i__41933_41938 < count__41932_41937)){
var msg_41939 = cljs.core._nth.call(null,chunk__41931_41936,i__41933_41938);
figwheel.client.socket.handle_incoming_message.call(null,msg_41939);

var G__41940 = seq__41930_41935;
var G__41941 = chunk__41931_41936;
var G__41942 = count__41932_41937;
var G__41943 = (i__41933_41938 + (1));
seq__41930_41935 = G__41940;
chunk__41931_41936 = G__41941;
count__41932_41937 = G__41942;
i__41933_41938 = G__41943;
continue;
} else {
var temp__4657__auto___41944 = cljs.core.seq.call(null,seq__41930_41935);
if(temp__4657__auto___41944){
var seq__41930_41945__$1 = temp__4657__auto___41944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41930_41945__$1)){
var c__29272__auto___41946 = cljs.core.chunk_first.call(null,seq__41930_41945__$1);
var G__41947 = cljs.core.chunk_rest.call(null,seq__41930_41945__$1);
var G__41948 = c__29272__auto___41946;
var G__41949 = cljs.core.count.call(null,c__29272__auto___41946);
var G__41950 = (0);
seq__41930_41935 = G__41947;
chunk__41931_41936 = G__41948;
count__41932_41937 = G__41949;
i__41933_41938 = G__41950;
continue;
} else {
var msg_41951 = cljs.core.first.call(null,seq__41930_41945__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41951);

var G__41952 = cljs.core.next.call(null,seq__41930_41945__$1);
var G__41953 = null;
var G__41954 = (0);
var G__41955 = (0);
seq__41930_41935 = G__41952;
chunk__41931_41936 = G__41953;
count__41932_41937 = G__41954;
i__41933_41938 = G__41955;
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
var len__29602__auto___41960 = arguments.length;
var i__29603__auto___41961 = (0);
while(true){
if((i__29603__auto___41961 < len__29602__auto___41960)){
args__29609__auto__.push((arguments[i__29603__auto___41961]));

var G__41962 = (i__29603__auto___41961 + (1));
i__29603__auto___41961 = G__41962;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41957){
var map__41958 = p__41957;
var map__41958__$1 = ((((!((map__41958 == null)))?((((map__41958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41958):map__41958);
var opts = map__41958__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41956){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41956));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41963){if((e41963 instanceof Error)){
var e = e41963;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41963;

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
return (function (p__41964){
var map__41965 = p__41964;
var map__41965__$1 = ((((!((map__41965 == null)))?((((map__41965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41965):map__41965);
var msg_name = cljs.core.get.call(null,map__41965__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503758429163
