// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__29116__auto__ = (((value == null))?null:value);
var m__29117__auto__ = (devtools.format._header[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,value);
} else {
var m__29117__auto____$1 = (devtools.format._header["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__29116__auto__ = (((value == null))?null:value);
var m__29117__auto__ = (devtools.format._has_body[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,value);
} else {
var m__29117__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__29116__auto__ = (((value == null))?null:value);
var m__29117__auto__ = (devtools.format._body[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,value);
} else {
var m__29117__auto____$1 = (devtools.format._body["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30622 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30622["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30623 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30623["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30624 = temp__4655__auto____$2;
return (o30624["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30625 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30625["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30626 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30626["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30627 = temp__4655__auto____$2;
return (o30627["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30628 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30628["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30629 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30629["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30630 = temp__4655__auto____$2;
return (o30630["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30631 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30631["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30632 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30632["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30633 = temp__4655__auto____$2;
return (o30633["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30634 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30634["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30635 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30635["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30636 = temp__4655__auto____$2;
return (o30636["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30637 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30637["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30638 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30638["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30639 = temp__4655__auto____$2;
return (o30639["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o30640 = temp__4655__auto__;
var temp__4655__auto____$1 = (o30640["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o30641 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o30641["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o30642 = temp__4655__auto____$2;
return (o30642["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30644 = arguments.length;
var i__29603__auto___30645 = (0);
while(true){
if((i__29603__auto___30645 < len__29602__auto___30644)){
args__29609__auto__.push((arguments[i__29603__auto___30645]));

var G__30646 = (i__29603__auto___30645 + (1));
i__29603__auto___30645 = G__30646;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq30643){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30643));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30648 = arguments.length;
var i__29603__auto___30649 = (0);
while(true){
if((i__29603__auto___30649 < len__29602__auto___30648)){
args__29609__auto__.push((arguments[i__29603__auto___30649]));

var G__30650 = (i__29603__auto___30649 + (1));
i__29603__auto___30649 = G__30650;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq30647){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30647));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30652 = arguments.length;
var i__29603__auto___30653 = (0);
while(true){
if((i__29603__auto___30653 < len__29602__auto___30652)){
args__29609__auto__.push((arguments[i__29603__auto___30653]));

var G__30654 = (i__29603__auto___30653 + (1));
i__29603__auto___30653 = G__30654;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq30651){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30651));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30656 = arguments.length;
var i__29603__auto___30657 = (0);
while(true){
if((i__29603__auto___30657 < len__29602__auto___30656)){
args__29609__auto__.push((arguments[i__29603__auto___30657]));

var G__30658 = (i__29603__auto___30657 + (1));
i__29603__auto___30657 = G__30658;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq30655){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30655));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30660 = arguments.length;
var i__29603__auto___30661 = (0);
while(true){
if((i__29603__auto___30661 < len__29602__auto___30660)){
args__29609__auto__.push((arguments[i__29603__auto___30661]));

var G__30662 = (i__29603__auto___30661 + (1));
i__29603__auto___30661 = G__30662;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq30659){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30659));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30664 = arguments.length;
var i__29603__auto___30665 = (0);
while(true){
if((i__29603__auto___30665 < len__29602__auto___30664)){
args__29609__auto__.push((arguments[i__29603__auto___30665]));

var G__30666 = (i__29603__auto___30665 + (1));
i__29603__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq30663){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30663));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30668 = arguments.length;
var i__29603__auto___30669 = (0);
while(true){
if((i__29603__auto___30669 < len__29602__auto___30668)){
args__29609__auto__.push((arguments[i__29603__auto___30669]));

var G__30670 = (i__29603__auto___30669 + (1));
i__29603__auto___30669 = G__30670;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq30667){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30667));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30678 = arguments.length;
var i__29603__auto___30679 = (0);
while(true){
if((i__29603__auto___30679 < len__29602__auto___30678)){
args__29609__auto__.push((arguments[i__29603__auto___30679]));

var G__30680 = (i__29603__auto___30679 + (1));
i__29603__auto___30679 = G__30680;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30674){
var vec__30675 = p__30674;
var state_override = cljs.core.nth.call(null,vec__30675,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__30675,state_override){
return (function (p1__30671_SHARP_){
return cljs.core.merge.call(null,p1__30671_SHARP_,state_override);
});})(vec__30675,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq30672){
var G__30673 = cljs.core.first.call(null,seq30672);
var seq30672__$1 = cljs.core.next.call(null,seq30672);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__30673,seq30672__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30682 = arguments.length;
var i__29603__auto___30683 = (0);
while(true){
if((i__29603__auto___30683 < len__29602__auto___30682)){
args__29609__auto__.push((arguments[i__29603__auto___30683]));

var G__30684 = (i__29603__auto___30683 + (1));
i__29603__auto___30683 = G__30684;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq30681){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30681));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___30687 = arguments.length;
var i__29603__auto___30688 = (0);
while(true){
if((i__29603__auto___30688 < len__29602__auto___30687)){
args__29609__auto__.push((arguments[i__29603__auto___30688]));

var G__30689 = (i__29603__auto___30688 + (1));
i__29603__auto___30688 = G__30689;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq30685){
var G__30686 = cljs.core.first.call(null,seq30685);
var seq30685__$1 = cljs.core.next.call(null,seq30685);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__30686,seq30685__$1);
});


//# sourceMappingURL=format.js.map?rel=1503582236669
