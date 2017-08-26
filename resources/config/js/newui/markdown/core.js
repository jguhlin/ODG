// Compiled by ClojureScript 1.9.908 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__35136){
var map__35137 = p__35136;
var map__35137__$1 = ((((!((map__35137 == null)))?((((map__35137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35137):map__35137);
var replacement_transformers = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__35137__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__35137,map__35137__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_35139 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__35140 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR_35139,map__35137,map__35137__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__35143,transformer){
var vec__35144 = p__35143;
var text = cljs.core.nth.call(null,vec__35144,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__35144,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR_35139,map__35137,map__35137__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__28433__auto__ = replacement_transformers;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__35140,(0),null);
var new_state = cljs.core.nth.call(null,vec__35140,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_35139;
}});
;})(map__35137,map__35137__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__29609__auto__ = [];
var len__29602__auto___35149 = arguments.length;
var i__29603__auto___35150 = (0);
while(true){
if((i__29603__auto___35150 < len__29602__auto___35149)){
args__29609__auto__.push((arguments[i__29603__auto___35150]));

var G__35151 = (i__29603__auto___35150 + (1));
i__29603__auto___35150 = G__35151;
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

markdown.core.format.cljs$lang$applyTo = (function (seq35147){
var G__35148 = cljs.core.first.call(null,seq35147);
var seq35147__$1 = cljs.core.next.call(null,seq35147);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__35148,seq35147__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__35152_35156 = cljs.core.seq.call(null,lines);
var chunk__35153_35157 = null;
var count__35154_35158 = (0);
var i__35155_35159 = (0);
while(true){
if((i__35155_35159 < count__35154_35158)){
var line_35160 = cljs.core._nth.call(null,chunk__35153_35157,i__35155_35159);
markdown.links.parse_reference_link.call(null,line_35160,references);

var G__35161 = seq__35152_35156;
var G__35162 = chunk__35153_35157;
var G__35163 = count__35154_35158;
var G__35164 = (i__35155_35159 + (1));
seq__35152_35156 = G__35161;
chunk__35153_35157 = G__35162;
count__35154_35158 = G__35163;
i__35155_35159 = G__35164;
continue;
} else {
var temp__4657__auto___35165 = cljs.core.seq.call(null,seq__35152_35156);
if(temp__4657__auto___35165){
var seq__35152_35166__$1 = temp__4657__auto___35165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35152_35166__$1)){
var c__29272__auto___35167 = cljs.core.chunk_first.call(null,seq__35152_35166__$1);
var G__35168 = cljs.core.chunk_rest.call(null,seq__35152_35166__$1);
var G__35169 = c__29272__auto___35167;
var G__35170 = cljs.core.count.call(null,c__29272__auto___35167);
var G__35171 = (0);
seq__35152_35156 = G__35168;
chunk__35153_35157 = G__35169;
count__35154_35158 = G__35170;
i__35155_35159 = G__35171;
continue;
} else {
var line_35172 = cljs.core.first.call(null,seq__35152_35166__$1);
markdown.links.parse_reference_link.call(null,line_35172,references);

var G__35173 = cljs.core.next.call(null,seq__35152_35166__$1);
var G__35174 = null;
var G__35175 = (0);
var G__35176 = (0);
seq__35152_35156 = G__35173;
chunk__35153_35157 = G__35174;
count__35154_35158 = G__35175;
i__35155_35159 = G__35176;
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
var seq__35177_35181 = cljs.core.seq.call(null,lines);
var chunk__35178_35182 = null;
var count__35179_35183 = (0);
var i__35180_35184 = (0);
while(true){
if((i__35180_35184 < count__35179_35183)){
var line_35185 = cljs.core._nth.call(null,chunk__35178_35182,i__35180_35184);
markdown.links.parse_footnote_link.call(null,line_35185,footnotes);

var G__35186 = seq__35177_35181;
var G__35187 = chunk__35178_35182;
var G__35188 = count__35179_35183;
var G__35189 = (i__35180_35184 + (1));
seq__35177_35181 = G__35186;
chunk__35178_35182 = G__35187;
count__35179_35183 = G__35188;
i__35180_35184 = G__35189;
continue;
} else {
var temp__4657__auto___35190 = cljs.core.seq.call(null,seq__35177_35181);
if(temp__4657__auto___35190){
var seq__35177_35191__$1 = temp__4657__auto___35190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35177_35191__$1)){
var c__29272__auto___35192 = cljs.core.chunk_first.call(null,seq__35177_35191__$1);
var G__35193 = cljs.core.chunk_rest.call(null,seq__35177_35191__$1);
var G__35194 = c__29272__auto___35192;
var G__35195 = cljs.core.count.call(null,c__29272__auto___35192);
var G__35196 = (0);
seq__35177_35181 = G__35193;
chunk__35178_35182 = G__35194;
count__35179_35183 = G__35195;
i__35180_35184 = G__35196;
continue;
} else {
var line_35197 = cljs.core.first.call(null,seq__35177_35191__$1);
markdown.links.parse_footnote_link.call(null,line_35197,footnotes);

var G__35198 = cljs.core.next.call(null,seq__35177_35191__$1);
var G__35199 = null;
var G__35200 = (0);
var G__35201 = (0);
seq__35177_35181 = G__35198;
chunk__35178_35182 = G__35199;
count__35179_35183 = G__35200;
i__35180_35184 = G__35201;
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
var vec__35203 = cljs.core.split_with.call(null,(function (p1__35202_SHARP_){
return cljs.core.not_empty.call(null,p1__35202_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__35203,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__35203,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_35206 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_35207 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_35206,_STAR_formatter_STAR_35207){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_35206,_STAR_formatter_STAR_35207))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__35208 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__35208,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__35208,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__35214_35221 = lines__$1;
var vec__35215_35222 = G__35214_35221;
var seq__35216_35223 = cljs.core.seq.call(null,vec__35215_35222);
var first__35217_35224 = cljs.core.first.call(null,seq__35216_35223);
var seq__35216_35225__$1 = cljs.core.next.call(null,seq__35216_35223);
var line_35226 = first__35217_35224;
var more_35227 = seq__35216_35225__$1;
var state_35228 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__35214_35229__$1 = G__35214_35221;
var state_35230__$1 = state_35228;
while(true){
var vec__35218_35231 = G__35214_35229__$1;
var seq__35219_35232 = cljs.core.seq.call(null,vec__35218_35231);
var first__35220_35233 = cljs.core.first.call(null,seq__35219_35232);
var seq__35219_35234__$1 = cljs.core.next.call(null,seq__35219_35232);
var line_35235__$1 = first__35220_35233;
var more_35236__$1 = seq__35219_35234__$1;
var state_35237__$2 = state_35230__$1;
var line_35238__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_35237__$2))?"":line_35235__$1);
var state_35239__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_35237__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_35237__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_35237__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_35237__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_35237__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_35236__$1))){
var G__35240 = more_35236__$1;
var G__35241 = cljs.core.assoc.call(null,transformer.call(null,html,line_35238__$2,cljs.core.first.call(null,more_35236__$1),cljs.core.dissoc.call(null,state_35239__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_35238__$2));
G__35214_35229__$1 = G__35240;
state_35230__$1 = G__35241;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_35239__$3))),line_35238__$2,"",cljs.core.assoc.call(null,state_35239__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_35207;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_35206;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__29609__auto__ = [];
var len__29602__auto___35244 = arguments.length;
var i__29603__auto___35245 = (0);
while(true){
if((i__29603__auto___35245 < len__29602__auto___35244)){
args__29609__auto__.push((arguments[i__29603__auto___35245]));

var G__35246 = (i__29603__auto___35245 + (1));
i__29603__auto___35245 = G__35246;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq35242){
var G__35243 = cljs.core.first.call(null,seq35242);
var seq35242__$1 = cljs.core.next.call(null,seq35242);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__35243,seq35242__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__29609__auto__ = [];
var len__29602__auto___35249 = arguments.length;
var i__29603__auto___35250 = (0);
while(true){
if((i__29603__auto___35250 < len__29602__auto___35249)){
args__29609__auto__.push((arguments[i__29603__auto___35250]));

var G__35251 = (i__29603__auto___35250 + (1));
i__29603__auto___35250 = G__35251;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq35247){
var G__35248 = cljs.core.first.call(null,seq35247);
var seq35247__$1 = cljs.core.next.call(null,seq35247);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__35248,seq35247__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__29609__auto__ = [];
var len__29602__auto___35253 = arguments.length;
var i__29603__auto___35254 = (0);
while(true){
if((i__29603__auto___35254 < len__29602__auto___35253)){
args__29609__auto__.push((arguments[i__29603__auto___35254]));

var G__35255 = (i__29603__auto___35254 + (1));
i__29603__auto___35254 = G__35255;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq35252){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35252));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__29609__auto__ = [];
var len__29602__auto___35257 = arguments.length;
var i__29603__auto___35258 = (0);
while(true){
if((i__29603__auto___35258 < len__29602__auto___35257)){
args__29609__auto__.push((arguments[i__29603__auto___35258]));

var G__35259 = (i__29603__auto___35258 + (1));
i__29603__auto___35258 = G__35259;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq35256){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35256));
});


//# sourceMappingURL=core.js.map?rel=1503758423123
