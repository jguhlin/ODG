// Compiled by ClojureScript 1.9.908 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__32528){
var map__32529 = p__32528;
var map__32529__$1 = ((((!((map__32529 == null)))?((((map__32529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32529):map__32529);
var replacement_transformers = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__32529__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__32529,map__32529__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_32531 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__32532 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_32531,map__32529,map__32529__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__32535,transformer){
var vec__32536 = p__32535;
var text = cljs.core.nth.call(null,vec__32536,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__32536,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_32531,map__32529,map__32529__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__28433__auto__ = replacement_transformers;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__32532,(0),null);
var new_state = cljs.core.nth.call(null,vec__32532,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_32531;
}});
;})(map__32529,map__32529__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32541 = arguments.length;
var i__29603__auto___32542 = (0);
while(true){
if((i__29603__auto___32542 < len__29602__auto___32541)){
args__29609__auto__.push((arguments[i__29603__auto___32542]));

var G__32543 = (i__29603__auto___32542 + (1));
i__29603__auto___32542 = G__32543;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq32539){
var G__32540 = cljs.core.first.call(null,seq32539);
var seq32539__$1 = cljs.core.next.call(null,seq32539);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__32540,seq32539__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__32544_32548 = cljs.core.seq.call(null,lines);
var chunk__32545_32549 = null;
var count__32546_32550 = (0);
var i__32547_32551 = (0);
while(true){
if((i__32547_32551 < count__32546_32550)){
var line_32552 = cljs.core._nth.call(null,chunk__32545_32549,i__32547_32551);
markdown.links.parse_reference_link.call(null,line_32552,references);

var G__32553 = seq__32544_32548;
var G__32554 = chunk__32545_32549;
var G__32555 = count__32546_32550;
var G__32556 = (i__32547_32551 + (1));
seq__32544_32548 = G__32553;
chunk__32545_32549 = G__32554;
count__32546_32550 = G__32555;
i__32547_32551 = G__32556;
continue;
} else {
var temp__4657__auto___32557 = cljs.core.seq.call(null,seq__32544_32548);
if(temp__4657__auto___32557){
var seq__32544_32558__$1 = temp__4657__auto___32557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32544_32558__$1)){
var c__29272__auto___32559 = cljs.core.chunk_first.call(null,seq__32544_32558__$1);
var G__32560 = cljs.core.chunk_rest.call(null,seq__32544_32558__$1);
var G__32561 = c__29272__auto___32559;
var G__32562 = cljs.core.count.call(null,c__29272__auto___32559);
var G__32563 = (0);
seq__32544_32548 = G__32560;
chunk__32545_32549 = G__32561;
count__32546_32550 = G__32562;
i__32547_32551 = G__32563;
continue;
} else {
var line_32564 = cljs.core.first.call(null,seq__32544_32558__$1);
markdown.links.parse_reference_link.call(null,line_32564,references);

var G__32565 = cljs.core.next.call(null,seq__32544_32558__$1);
var G__32566 = null;
var G__32567 = (0);
var G__32568 = (0);
seq__32544_32548 = G__32565;
chunk__32545_32549 = G__32566;
count__32546_32550 = G__32567;
i__32547_32551 = G__32568;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__32569_32573 = cljs.core.seq.call(null,lines);
var chunk__32570_32574 = null;
var count__32571_32575 = (0);
var i__32572_32576 = (0);
while(true){
if((i__32572_32576 < count__32571_32575)){
var line_32577 = cljs.core._nth.call(null,chunk__32570_32574,i__32572_32576);
markdown.links.parse_footnote_link.call(null,line_32577,footnotes);

var G__32578 = seq__32569_32573;
var G__32579 = chunk__32570_32574;
var G__32580 = count__32571_32575;
var G__32581 = (i__32572_32576 + (1));
seq__32569_32573 = G__32578;
chunk__32570_32574 = G__32579;
count__32571_32575 = G__32580;
i__32572_32576 = G__32581;
continue;
} else {
var temp__4657__auto___32582 = cljs.core.seq.call(null,seq__32569_32573);
if(temp__4657__auto___32582){
var seq__32569_32583__$1 = temp__4657__auto___32582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32569_32583__$1)){
var c__29272__auto___32584 = cljs.core.chunk_first.call(null,seq__32569_32583__$1);
var G__32585 = cljs.core.chunk_rest.call(null,seq__32569_32583__$1);
var G__32586 = c__29272__auto___32584;
var G__32587 = cljs.core.count.call(null,c__29272__auto___32584);
var G__32588 = (0);
seq__32569_32573 = G__32585;
chunk__32570_32574 = G__32586;
count__32571_32575 = G__32587;
i__32572_32576 = G__32588;
continue;
} else {
var line_32589 = cljs.core.first.call(null,seq__32569_32583__$1);
markdown.links.parse_footnote_link.call(null,line_32589,footnotes);

var G__32590 = cljs.core.next.call(null,seq__32569_32583__$1);
var G__32591 = null;
var G__32592 = (0);
var G__32593 = (0);
seq__32569_32573 = G__32590;
chunk__32570_32574 = G__32591;
count__32571_32575 = G__32592;
i__32572_32576 = G__32593;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__32595 = cljs.core.split_with.call(null,(function (p1__32594_SHARP_){
return cljs.core.not_empty.call(null,p1__32594_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__32595,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__32595,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_32598 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_32599 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_32598,_STAR_formatter_STAR_32599){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_32598,_STAR_formatter_STAR_32599))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__32600 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__32600,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__32600,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__32606_32613 = lines__$1;
var vec__32607_32614 = G__32606_32613;
var seq__32608_32615 = cljs.core.seq.call(null,vec__32607_32614);
var first__32609_32616 = cljs.core.first.call(null,seq__32608_32615);
var seq__32608_32617__$1 = cljs.core.next.call(null,seq__32608_32615);
var line_32618 = first__32609_32616;
var more_32619 = seq__32608_32617__$1;
var state_32620 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__32606_32621__$1 = G__32606_32613;
var state_32622__$1 = state_32620;
while(true){
var vec__32610_32623 = G__32606_32621__$1;
var seq__32611_32624 = cljs.core.seq.call(null,vec__32610_32623);
var first__32612_32625 = cljs.core.first.call(null,seq__32611_32624);
var seq__32611_32626__$1 = cljs.core.next.call(null,seq__32611_32624);
var line_32627__$1 = first__32612_32625;
var more_32628__$1 = seq__32611_32626__$1;
var state_32629__$2 = state_32622__$1;
var line_32630__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_32629__$2))?"":line_32627__$1);
var state_32631__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_32629__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_32629__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_32629__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_32629__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_32629__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_32628__$1))){
var G__32632 = more_32628__$1;
var G__32633 = cljs.core.assoc.call(null,transformer.call(null,html,line_32630__$2,cljs.core.first.call(null,more_32628__$1),cljs.core.dissoc.call(null,state_32631__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_32630__$2));
G__32606_32621__$1 = G__32632;
state_32622__$1 = G__32633;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_32631__$3))),line_32630__$2,"",cljs.core.assoc.call(null,state_32631__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_32599;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_32598;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32636 = arguments.length;
var i__29603__auto___32637 = (0);
while(true){
if((i__29603__auto___32637 < len__29602__auto___32636)){
args__29609__auto__.push((arguments[i__29603__auto___32637]));

var G__32638 = (i__29603__auto___32637 + (1));
i__29603__auto___32637 = G__32638;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq32634){
var G__32635 = cljs.core.first.call(null,seq32634);
var seq32634__$1 = cljs.core.next.call(null,seq32634);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__32635,seq32634__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32641 = arguments.length;
var i__29603__auto___32642 = (0);
while(true){
if((i__29603__auto___32642 < len__29602__auto___32641)){
args__29609__auto__.push((arguments[i__29603__auto___32642]));

var G__32643 = (i__29603__auto___32642 + (1));
i__29603__auto___32642 = G__32643;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq32639){
var G__32640 = cljs.core.first.call(null,seq32639);
var seq32639__$1 = cljs.core.next.call(null,seq32639);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__32640,seq32639__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32645 = arguments.length;
var i__29603__auto___32646 = (0);
while(true){
if((i__29603__auto___32646 < len__29602__auto___32645)){
args__29609__auto__.push((arguments[i__29603__auto___32646]));

var G__32647 = (i__29603__auto___32646 + (1));
i__29603__auto___32646 = G__32647;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq32644){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32644));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32649 = arguments.length;
var i__29603__auto___32650 = (0);
while(true){
if((i__29603__auto___32650 < len__29602__auto___32649)){
args__29609__auto__.push((arguments[i__29603__auto___32650]));

var G__32651 = (i__29603__auto___32650 + (1));
i__29603__auto___32650 = G__32651;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((0) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__29610__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq32648){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32648));
});


//# sourceMappingURL=core.js.map?rel=1503577465218
