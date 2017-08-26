// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x33691_33692 = value;
x33691_33692.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x33694_33695 = value;
x33694_33695.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x33697_33698 = value;
x33697_33698.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28421__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28421__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28421__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__29609__auto__ = [];
var len__29602__auto___33705 = arguments.length;
var i__29603__auto___33706 = (0);
while(true){
if((i__29603__auto___33706 < len__29602__auto___33705)){
args__29609__auto__.push((arguments[i__29603__auto___33706]));

var G__33707 = (i__29603__auto___33706 + (1));
i__29603__auto___33706 = G__33707;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__33701_33708 = cljs.core.seq.call(null,items);
var chunk__33702_33709 = null;
var count__33703_33710 = (0);
var i__33704_33711 = (0);
while(true){
if((i__33704_33711 < count__33703_33710)){
var item_33712 = cljs.core._nth.call(null,chunk__33702_33709,i__33704_33711);
if(!((item_33712 == null))){
if(cljs.core.coll_QMARK_.call(null,item_33712)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_33712)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_33712));
}
} else {
}

var G__33713 = seq__33701_33708;
var G__33714 = chunk__33702_33709;
var G__33715 = count__33703_33710;
var G__33716 = (i__33704_33711 + (1));
seq__33701_33708 = G__33713;
chunk__33702_33709 = G__33714;
count__33703_33710 = G__33715;
i__33704_33711 = G__33716;
continue;
} else {
var temp__4657__auto___33717 = cljs.core.seq.call(null,seq__33701_33708);
if(temp__4657__auto___33717){
var seq__33701_33718__$1 = temp__4657__auto___33717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33701_33718__$1)){
var c__29272__auto___33719 = cljs.core.chunk_first.call(null,seq__33701_33718__$1);
var G__33720 = cljs.core.chunk_rest.call(null,seq__33701_33718__$1);
var G__33721 = c__29272__auto___33719;
var G__33722 = cljs.core.count.call(null,c__29272__auto___33719);
var G__33723 = (0);
seq__33701_33708 = G__33720;
chunk__33702_33709 = G__33721;
count__33703_33710 = G__33722;
i__33704_33711 = G__33723;
continue;
} else {
var item_33724 = cljs.core.first.call(null,seq__33701_33718__$1);
if(!((item_33724 == null))){
if(cljs.core.coll_QMARK_.call(null,item_33724)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_33724)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_33724));
}
} else {
}

var G__33725 = cljs.core.next.call(null,seq__33701_33718__$1);
var G__33726 = null;
var G__33727 = (0);
var G__33728 = (0);
seq__33701_33708 = G__33725;
chunk__33702_33709 = G__33726;
count__33703_33710 = G__33727;
i__33704_33711 = G__33728;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq33700){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33700));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___33736 = arguments.length;
var i__29603__auto___33737 = (0);
while(true){
if((i__29603__auto___33737 < len__29602__auto___33736)){
args__29609__auto__.push((arguments[i__29603__auto___33737]));

var G__33738 = (i__29603__auto___33737 + (1));
i__29603__auto___33737 = G__33738;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((2) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29610__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__33732_33739 = cljs.core.seq.call(null,children);
var chunk__33733_33740 = null;
var count__33734_33741 = (0);
var i__33735_33742 = (0);
while(true){
if((i__33735_33742 < count__33734_33741)){
var child_33743 = cljs.core._nth.call(null,chunk__33733_33740,i__33735_33742);
if(!((child_33743 == null))){
if(cljs.core.coll_QMARK_.call(null,child_33743)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_33743))));
} else {
var temp__4655__auto___33744 = devtools.formatters.helpers.pref.call(null,child_33743);
if(cljs.core.truth_(temp__4655__auto___33744)){
var child_value_33745 = temp__4655__auto___33744;
template.push(child_value_33745);
} else {
}
}
} else {
}

var G__33746 = seq__33732_33739;
var G__33747 = chunk__33733_33740;
var G__33748 = count__33734_33741;
var G__33749 = (i__33735_33742 + (1));
seq__33732_33739 = G__33746;
chunk__33733_33740 = G__33747;
count__33734_33741 = G__33748;
i__33735_33742 = G__33749;
continue;
} else {
var temp__4657__auto___33750 = cljs.core.seq.call(null,seq__33732_33739);
if(temp__4657__auto___33750){
var seq__33732_33751__$1 = temp__4657__auto___33750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33732_33751__$1)){
var c__29272__auto___33752 = cljs.core.chunk_first.call(null,seq__33732_33751__$1);
var G__33753 = cljs.core.chunk_rest.call(null,seq__33732_33751__$1);
var G__33754 = c__29272__auto___33752;
var G__33755 = cljs.core.count.call(null,c__29272__auto___33752);
var G__33756 = (0);
seq__33732_33739 = G__33753;
chunk__33733_33740 = G__33754;
count__33734_33741 = G__33755;
i__33735_33742 = G__33756;
continue;
} else {
var child_33757 = cljs.core.first.call(null,seq__33732_33751__$1);
if(!((child_33757 == null))){
if(cljs.core.coll_QMARK_.call(null,child_33757)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_33757))));
} else {
var temp__4655__auto___33758 = devtools.formatters.helpers.pref.call(null,child_33757);
if(cljs.core.truth_(temp__4655__auto___33758)){
var child_value_33759 = temp__4655__auto___33758;
template.push(child_value_33759);
} else {
}
}
} else {
}

var G__33760 = cljs.core.next.call(null,seq__33732_33751__$1);
var G__33761 = null;
var G__33762 = (0);
var G__33763 = (0);
seq__33732_33739 = G__33760;
chunk__33733_33740 = G__33761;
count__33734_33741 = G__33762;
i__33735_33742 = G__33763;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq33729){
var G__33730 = cljs.core.first.call(null,seq33729);
var seq33729__$1 = cljs.core.next.call(null,seq33729);
var G__33731 = cljs.core.first.call(null,seq33729__$1);
var seq33729__$2 = cljs.core.next.call(null,seq33729__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__33730,G__33731,seq33729__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29609__auto__ = [];
var len__29602__auto___33766 = arguments.length;
var i__29603__auto___33767 = (0);
while(true){
if((i__29603__auto___33767 < len__29602__auto___33766)){
args__29609__auto__.push((arguments[i__29603__auto___33767]));

var G__33768 = (i__29603__auto___33767 + (1));
i__29603__auto___33767 = G__33768;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq33764){
var G__33765 = cljs.core.first.call(null,seq33764);
var seq33764__$1 = cljs.core.next.call(null,seq33764);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33765,seq33764__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29609__auto__ = [];
var len__29602__auto___33771 = arguments.length;
var i__29603__auto___33772 = (0);
while(true){
if((i__29603__auto___33772 < len__29602__auto___33771)){
args__29609__auto__.push((arguments[i__29603__auto___33772]));

var G__33773 = (i__29603__auto___33772 + (1));
i__29603__auto___33772 = G__33773;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq33769){
var G__33770 = cljs.core.first.call(null,seq33769);
var seq33769__$1 = cljs.core.next.call(null,seq33769);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33770,seq33769__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__33775 = arguments.length;
switch (G__33775) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj33777 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28433__auto__ = start_index;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return (0);
}
})()};
return obj33777;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__29609__auto__ = [];
var len__29602__auto___33785 = arguments.length;
var i__29603__auto___33786 = (0);
while(true){
if((i__29603__auto___33786 < len__29602__auto___33785)){
args__29609__auto__.push((arguments[i__29603__auto___33786]));

var G__33787 = (i__29603__auto___33786 + (1));
i__29603__auto___33786 = G__33787;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__33781){
var vec__33782 = p__33781;
var state_override_fn = cljs.core.nth.call(null,vec__33782,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq33779){
var G__33780 = cljs.core.first.call(null,seq33779);
var seq33779__$1 = cljs.core.next.call(null,seq33779);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__33780,seq33779__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_33788 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_33788;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__33789 = name;
switch (G__33789) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__33791 = tag;
var html_tag = cljs.core.nth.call(null,vec__33791,(0),null);
var style = cljs.core.nth.call(null,vec__33791,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_33794 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_33794;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_33795 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_33796 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_33796;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_33795;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__33797 = initial_value;
var G__33798 = value.call(null);
initial_value = G__33797;
value = G__33798;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__33799 = initial_value;
var G__33800 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__33799;
value = G__33800;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__33801 = initial_value;
var G__33802 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__33801;
value = G__33802;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1503758420115
