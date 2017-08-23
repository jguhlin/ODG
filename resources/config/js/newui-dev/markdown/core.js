// Compiled by ClojureScript 1.9.908 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__32495){
var map__32496 = p__32495;
var map__32496__$1 = ((((!((map__32496 == null)))?((((map__32496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32496):map__32496);
var replacement_transformers = cljs.core.get.call(null,map__32496__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__32496__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__32496__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__32496,map__32496__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_32498 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__32499 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_32498,map__32496,map__32496__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__32502,transformer){
var vec__32503 = p__32502;
var text = cljs.core.nth.call(null,vec__32503,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__32503,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_32498,map__32496,map__32496__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__28433__auto__ = replacement_transformers;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__32499,(0),null);
var new_state = cljs.core.nth.call(null,vec__32499,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_32498;
}});
;})(map__32496,map__32496__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32508 = arguments.length;
var i__29603__auto___32509 = (0);
while(true){
if((i__29603__auto___32509 < len__29602__auto___32508)){
args__29609__auto__.push((arguments[i__29603__auto___32509]));

var G__32510 = (i__29603__auto___32509 + (1));
i__29603__auto___32509 = G__32510;
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

markdown.core.format.cljs$lang$applyTo = (function (seq32506){
var G__32507 = cljs.core.first.call(null,seq32506);
var seq32506__$1 = cljs.core.next.call(null,seq32506);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__32507,seq32506__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__32511_32515 = cljs.core.seq.call(null,lines);
var chunk__32512_32516 = null;
var count__32513_32517 = (0);
var i__32514_32518 = (0);
while(true){
if((i__32514_32518 < count__32513_32517)){
var line_32519 = cljs.core._nth.call(null,chunk__32512_32516,i__32514_32518);
markdown.links.parse_reference_link.call(null,line_32519,references);

var G__32520 = seq__32511_32515;
var G__32521 = chunk__32512_32516;
var G__32522 = count__32513_32517;
var G__32523 = (i__32514_32518 + (1));
seq__32511_32515 = G__32520;
chunk__32512_32516 = G__32521;
count__32513_32517 = G__32522;
i__32514_32518 = G__32523;
continue;
} else {
var temp__4657__auto___32524 = cljs.core.seq.call(null,seq__32511_32515);
if(temp__4657__auto___32524){
var seq__32511_32525__$1 = temp__4657__auto___32524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32511_32525__$1)){
var c__29272__auto___32526 = cljs.core.chunk_first.call(null,seq__32511_32525__$1);
var G__32527 = cljs.core.chunk_rest.call(null,seq__32511_32525__$1);
var G__32528 = c__29272__auto___32526;
var G__32529 = cljs.core.count.call(null,c__29272__auto___32526);
var G__32530 = (0);
seq__32511_32515 = G__32527;
chunk__32512_32516 = G__32528;
count__32513_32517 = G__32529;
i__32514_32518 = G__32530;
continue;
} else {
var line_32531 = cljs.core.first.call(null,seq__32511_32525__$1);
markdown.links.parse_reference_link.call(null,line_32531,references);

var G__32532 = cljs.core.next.call(null,seq__32511_32525__$1);
var G__32533 = null;
var G__32534 = (0);
var G__32535 = (0);
seq__32511_32515 = G__32532;
chunk__32512_32516 = G__32533;
count__32513_32517 = G__32534;
i__32514_32518 = G__32535;
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
var seq__32536_32540 = cljs.core.seq.call(null,lines);
var chunk__32537_32541 = null;
var count__32538_32542 = (0);
var i__32539_32543 = (0);
while(true){
if((i__32539_32543 < count__32538_32542)){
var line_32544 = cljs.core._nth.call(null,chunk__32537_32541,i__32539_32543);
markdown.links.parse_footnote_link.call(null,line_32544,footnotes);

var G__32545 = seq__32536_32540;
var G__32546 = chunk__32537_32541;
var G__32547 = count__32538_32542;
var G__32548 = (i__32539_32543 + (1));
seq__32536_32540 = G__32545;
chunk__32537_32541 = G__32546;
count__32538_32542 = G__32547;
i__32539_32543 = G__32548;
continue;
} else {
var temp__4657__auto___32549 = cljs.core.seq.call(null,seq__32536_32540);
if(temp__4657__auto___32549){
var seq__32536_32550__$1 = temp__4657__auto___32549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32536_32550__$1)){
var c__29272__auto___32551 = cljs.core.chunk_first.call(null,seq__32536_32550__$1);
var G__32552 = cljs.core.chunk_rest.call(null,seq__32536_32550__$1);
var G__32553 = c__29272__auto___32551;
var G__32554 = cljs.core.count.call(null,c__29272__auto___32551);
var G__32555 = (0);
seq__32536_32540 = G__32552;
chunk__32537_32541 = G__32553;
count__32538_32542 = G__32554;
i__32539_32543 = G__32555;
continue;
} else {
var line_32556 = cljs.core.first.call(null,seq__32536_32550__$1);
markdown.links.parse_footnote_link.call(null,line_32556,footnotes);

var G__32557 = cljs.core.next.call(null,seq__32536_32550__$1);
var G__32558 = null;
var G__32559 = (0);
var G__32560 = (0);
seq__32536_32540 = G__32557;
chunk__32537_32541 = G__32558;
count__32538_32542 = G__32559;
i__32539_32543 = G__32560;
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
var vec__32562 = cljs.core.split_with.call(null,(function (p1__32561_SHARP_){
return cljs.core.not_empty.call(null,p1__32561_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__32562,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__32562,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_32565 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_32566 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_32565,_STAR_formatter_STAR_32566){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_32565,_STAR_formatter_STAR_32566))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__32567 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__32567,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__32567,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__32573_32580 = lines__$1;
var vec__32574_32581 = G__32573_32580;
var seq__32575_32582 = cljs.core.seq.call(null,vec__32574_32581);
var first__32576_32583 = cljs.core.first.call(null,seq__32575_32582);
var seq__32575_32584__$1 = cljs.core.next.call(null,seq__32575_32582);
var line_32585 = first__32576_32583;
var more_32586 = seq__32575_32584__$1;
var state_32587 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__32573_32588__$1 = G__32573_32580;
var state_32589__$1 = state_32587;
while(true){
var vec__32577_32590 = G__32573_32588__$1;
var seq__32578_32591 = cljs.core.seq.call(null,vec__32577_32590);
var first__32579_32592 = cljs.core.first.call(null,seq__32578_32591);
var seq__32578_32593__$1 = cljs.core.next.call(null,seq__32578_32591);
var line_32594__$1 = first__32579_32592;
var more_32595__$1 = seq__32578_32593__$1;
var state_32596__$2 = state_32589__$1;
var line_32597__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_32596__$2))?"":line_32594__$1);
var state_32598__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_32596__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_32596__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_32596__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_32596__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_32596__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_32595__$1))){
var G__32599 = more_32595__$1;
var G__32600 = cljs.core.assoc.call(null,transformer.call(null,html,line_32597__$2,cljs.core.first.call(null,more_32595__$1),cljs.core.dissoc.call(null,state_32598__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_32597__$2));
G__32573_32588__$1 = G__32599;
state_32589__$1 = G__32600;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_32598__$3))),line_32597__$2,"",cljs.core.assoc.call(null,state_32598__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_32566;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_32565;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32603 = arguments.length;
var i__29603__auto___32604 = (0);
while(true){
if((i__29603__auto___32604 < len__29602__auto___32603)){
args__29609__auto__.push((arguments[i__29603__auto___32604]));

var G__32605 = (i__29603__auto___32604 + (1));
i__29603__auto___32604 = G__32605;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq32601){
var G__32602 = cljs.core.first.call(null,seq32601);
var seq32601__$1 = cljs.core.next.call(null,seq32601);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__32602,seq32601__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32608 = arguments.length;
var i__29603__auto___32609 = (0);
while(true){
if((i__29603__auto___32609 < len__29602__auto___32608)){
args__29609__auto__.push((arguments[i__29603__auto___32609]));

var G__32610 = (i__29603__auto___32609 + (1));
i__29603__auto___32609 = G__32610;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq32606){
var G__32607 = cljs.core.first.call(null,seq32606);
var seq32606__$1 = cljs.core.next.call(null,seq32606);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__32607,seq32606__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32612 = arguments.length;
var i__29603__auto___32613 = (0);
while(true){
if((i__29603__auto___32613 < len__29602__auto___32612)){
args__29609__auto__.push((arguments[i__29603__auto___32613]));

var G__32614 = (i__29603__auto___32613 + (1));
i__29603__auto___32613 = G__32614;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq32611){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32611));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__29609__auto__ = [];
var len__29602__auto___32616 = arguments.length;
var i__29603__auto___32617 = (0);
while(true){
if((i__29603__auto___32617 < len__29602__auto___32616)){
args__29609__auto__.push((arguments[i__29603__auto___32617]));

var G__32618 = (i__29603__auto___32617 + (1));
i__29603__auto___32617 = G__32618;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq32615){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32615));
});


//# sourceMappingURL=core.js.map?rel=1503499632392
