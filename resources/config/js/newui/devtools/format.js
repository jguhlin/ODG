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
var o31512 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31512["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31513 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31513["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31514 = temp__4655__auto____$2;
return (o31514["make_template"]);
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
var o31515 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31515["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31516 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31516["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31517 = temp__4655__auto____$2;
return (o31517["make_group"]);
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
var o31518 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31518["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31519 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31519["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31520 = temp__4655__auto____$2;
return (o31520["make_reference"]);
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
var o31521 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31521["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31522 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31522["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31523 = temp__4655__auto____$2;
return (o31523["make_surrogate"]);
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
var o31524 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31524["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31525 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31525["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31526 = temp__4655__auto____$2;
return (o31526["render_markup"]);
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
var o31527 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31527["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31528 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31528["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31529 = temp__4655__auto____$2;
return (o31529["_LT_header_GT_"]);
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
var o31530 = temp__4655__auto__;
var temp__4655__auto____$1 = (o31530["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o31531 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o31531["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o31532 = temp__4655__auto____$2;
return (o31532["_LT_standard_body_GT_"]);
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
var len__29602__auto___31534 = arguments.length;
var i__29603__auto___31535 = (0);
while(true){
if((i__29603__auto___31535 < len__29602__auto___31534)){
args__29609__auto__.push((arguments[i__29603__auto___31535]));

var G__31536 = (i__29603__auto___31535 + (1));
i__29603__auto___31535 = G__31536;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq31533){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31533));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31538 = arguments.length;
var i__29603__auto___31539 = (0);
while(true){
if((i__29603__auto___31539 < len__29602__auto___31538)){
args__29609__auto__.push((arguments[i__29603__auto___31539]));

var G__31540 = (i__29603__auto___31539 + (1));
i__29603__auto___31539 = G__31540;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq31537){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31537));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31542 = arguments.length;
var i__29603__auto___31543 = (0);
while(true){
if((i__29603__auto___31543 < len__29602__auto___31542)){
args__29609__auto__.push((arguments[i__29603__auto___31543]));

var G__31544 = (i__29603__auto___31543 + (1));
i__29603__auto___31543 = G__31544;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq31541){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31541));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31546 = arguments.length;
var i__29603__auto___31547 = (0);
while(true){
if((i__29603__auto___31547 < len__29602__auto___31546)){
args__29609__auto__.push((arguments[i__29603__auto___31547]));

var G__31548 = (i__29603__auto___31547 + (1));
i__29603__auto___31547 = G__31548;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq31545){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31545));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31550 = arguments.length;
var i__29603__auto___31551 = (0);
while(true){
if((i__29603__auto___31551 < len__29602__auto___31550)){
args__29609__auto__.push((arguments[i__29603__auto___31551]));

var G__31552 = (i__29603__auto___31551 + (1));
i__29603__auto___31551 = G__31552;
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

devtools.format.template.cljs$lang$applyTo = (function (seq31549){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31549));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31554 = arguments.length;
var i__29603__auto___31555 = (0);
while(true){
if((i__29603__auto___31555 < len__29602__auto___31554)){
args__29609__auto__.push((arguments[i__29603__auto___31555]));

var G__31556 = (i__29603__auto___31555 + (1));
i__29603__auto___31555 = G__31556;
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

devtools.format.group.cljs$lang$applyTo = (function (seq31553){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31553));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31558 = arguments.length;
var i__29603__auto___31559 = (0);
while(true){
if((i__29603__auto___31559 < len__29602__auto___31558)){
args__29609__auto__.push((arguments[i__29603__auto___31559]));

var G__31560 = (i__29603__auto___31559 + (1));
i__29603__auto___31559 = G__31560;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq31557){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31557));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31568 = arguments.length;
var i__29603__auto___31569 = (0);
while(true){
if((i__29603__auto___31569 < len__29602__auto___31568)){
args__29609__auto__.push((arguments[i__29603__auto___31569]));

var G__31570 = (i__29603__auto___31569 + (1));
i__29603__auto___31569 = G__31570;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__31564){
var vec__31565 = p__31564;
var state_override = cljs.core.nth.call(null,vec__31565,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__31565,state_override){
return (function (p1__31561_SHARP_){
return cljs.core.merge.call(null,p1__31561_SHARP_,state_override);
});})(vec__31565,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq31562){
var G__31563 = cljs.core.first.call(null,seq31562);
var seq31562__$1 = cljs.core.next.call(null,seq31562);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__31563,seq31562__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31572 = arguments.length;
var i__29603__auto___31573 = (0);
while(true){
if((i__29603__auto___31573 < len__29602__auto___31572)){
args__29609__auto__.push((arguments[i__29603__auto___31573]));

var G__31574 = (i__29603__auto___31573 + (1));
i__29603__auto___31573 = G__31574;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq31571){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31571));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29609__auto__ = [];
var len__29602__auto___31577 = arguments.length;
var i__29603__auto___31578 = (0);
while(true){
if((i__29603__auto___31578 < len__29602__auto___31577)){
args__29609__auto__.push((arguments[i__29603__auto___31578]));

var G__31579 = (i__29603__auto___31578 + (1));
i__29603__auto___31578 = G__31579;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq31575){
var G__31576 = cljs.core.first.call(null,seq31575);
var seq31575__$1 = cljs.core.next.call(null,seq31575);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__31576,seq31575__$1);
});


//# sourceMappingURL=format.js.map?rel=1503758417748
