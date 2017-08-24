// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38265){
var map__38266 = p__38265;
var map__38266__$1 = ((((!((map__38266 == null)))?((((map__38266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38266):map__38266);
var m = map__38266__$1;
var n = cljs.core.get.call(null,map__38266__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38268_38290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38269_38291 = null;
var count__38270_38292 = (0);
var i__38271_38293 = (0);
while(true){
if((i__38271_38293 < count__38270_38292)){
var f_38294 = cljs.core._nth.call(null,chunk__38269_38291,i__38271_38293);
cljs.core.println.call(null,"  ",f_38294);

var G__38295 = seq__38268_38290;
var G__38296 = chunk__38269_38291;
var G__38297 = count__38270_38292;
var G__38298 = (i__38271_38293 + (1));
seq__38268_38290 = G__38295;
chunk__38269_38291 = G__38296;
count__38270_38292 = G__38297;
i__38271_38293 = G__38298;
continue;
} else {
var temp__4657__auto___38299 = cljs.core.seq.call(null,seq__38268_38290);
if(temp__4657__auto___38299){
var seq__38268_38300__$1 = temp__4657__auto___38299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38268_38300__$1)){
var c__29272__auto___38301 = cljs.core.chunk_first.call(null,seq__38268_38300__$1);
var G__38302 = cljs.core.chunk_rest.call(null,seq__38268_38300__$1);
var G__38303 = c__29272__auto___38301;
var G__38304 = cljs.core.count.call(null,c__29272__auto___38301);
var G__38305 = (0);
seq__38268_38290 = G__38302;
chunk__38269_38291 = G__38303;
count__38270_38292 = G__38304;
i__38271_38293 = G__38305;
continue;
} else {
var f_38306 = cljs.core.first.call(null,seq__38268_38300__$1);
cljs.core.println.call(null,"  ",f_38306);

var G__38307 = cljs.core.next.call(null,seq__38268_38300__$1);
var G__38308 = null;
var G__38309 = (0);
var G__38310 = (0);
seq__38268_38290 = G__38307;
chunk__38269_38291 = G__38308;
count__38270_38292 = G__38309;
i__38271_38293 = G__38310;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38311 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28433__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38311);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38311)))?cljs.core.second.call(null,arglists_38311):arglists_38311));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38272_38312 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38273_38313 = null;
var count__38274_38314 = (0);
var i__38275_38315 = (0);
while(true){
if((i__38275_38315 < count__38274_38314)){
var vec__38276_38316 = cljs.core._nth.call(null,chunk__38273_38313,i__38275_38315);
var name_38317 = cljs.core.nth.call(null,vec__38276_38316,(0),null);
var map__38279_38318 = cljs.core.nth.call(null,vec__38276_38316,(1),null);
var map__38279_38319__$1 = ((((!((map__38279_38318 == null)))?((((map__38279_38318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38279_38318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38279_38318):map__38279_38318);
var doc_38320 = cljs.core.get.call(null,map__38279_38319__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38321 = cljs.core.get.call(null,map__38279_38319__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38317);

cljs.core.println.call(null," ",arglists_38321);

if(cljs.core.truth_(doc_38320)){
cljs.core.println.call(null," ",doc_38320);
} else {
}

var G__38322 = seq__38272_38312;
var G__38323 = chunk__38273_38313;
var G__38324 = count__38274_38314;
var G__38325 = (i__38275_38315 + (1));
seq__38272_38312 = G__38322;
chunk__38273_38313 = G__38323;
count__38274_38314 = G__38324;
i__38275_38315 = G__38325;
continue;
} else {
var temp__4657__auto___38326 = cljs.core.seq.call(null,seq__38272_38312);
if(temp__4657__auto___38326){
var seq__38272_38327__$1 = temp__4657__auto___38326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38272_38327__$1)){
var c__29272__auto___38328 = cljs.core.chunk_first.call(null,seq__38272_38327__$1);
var G__38329 = cljs.core.chunk_rest.call(null,seq__38272_38327__$1);
var G__38330 = c__29272__auto___38328;
var G__38331 = cljs.core.count.call(null,c__29272__auto___38328);
var G__38332 = (0);
seq__38272_38312 = G__38329;
chunk__38273_38313 = G__38330;
count__38274_38314 = G__38331;
i__38275_38315 = G__38332;
continue;
} else {
var vec__38281_38333 = cljs.core.first.call(null,seq__38272_38327__$1);
var name_38334 = cljs.core.nth.call(null,vec__38281_38333,(0),null);
var map__38284_38335 = cljs.core.nth.call(null,vec__38281_38333,(1),null);
var map__38284_38336__$1 = ((((!((map__38284_38335 == null)))?((((map__38284_38335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38284_38335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38284_38335):map__38284_38335);
var doc_38337 = cljs.core.get.call(null,map__38284_38336__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38338 = cljs.core.get.call(null,map__38284_38336__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38334);

cljs.core.println.call(null," ",arglists_38338);

if(cljs.core.truth_(doc_38337)){
cljs.core.println.call(null," ",doc_38337);
} else {
}

var G__38339 = cljs.core.next.call(null,seq__38272_38327__$1);
var G__38340 = null;
var G__38341 = (0);
var G__38342 = (0);
seq__38272_38312 = G__38339;
chunk__38273_38313 = G__38340;
count__38274_38314 = G__38341;
i__38275_38315 = G__38342;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38286 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38287 = null;
var count__38288 = (0);
var i__38289 = (0);
while(true){
if((i__38289 < count__38288)){
var role = cljs.core._nth.call(null,chunk__38287,i__38289);
var temp__4657__auto___38343__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38343__$1)){
var spec_38344 = temp__4657__auto___38343__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38344));
} else {
}

var G__38345 = seq__38286;
var G__38346 = chunk__38287;
var G__38347 = count__38288;
var G__38348 = (i__38289 + (1));
seq__38286 = G__38345;
chunk__38287 = G__38346;
count__38288 = G__38347;
i__38289 = G__38348;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38286);
if(temp__4657__auto____$1){
var seq__38286__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38286__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__38286__$1);
var G__38349 = cljs.core.chunk_rest.call(null,seq__38286__$1);
var G__38350 = c__29272__auto__;
var G__38351 = cljs.core.count.call(null,c__29272__auto__);
var G__38352 = (0);
seq__38286 = G__38349;
chunk__38287 = G__38350;
count__38288 = G__38351;
i__38289 = G__38352;
continue;
} else {
var role = cljs.core.first.call(null,seq__38286__$1);
var temp__4657__auto___38353__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38353__$2)){
var spec_38354 = temp__4657__auto___38353__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38354));
} else {
}

var G__38355 = cljs.core.next.call(null,seq__38286__$1);
var G__38356 = null;
var G__38357 = (0);
var G__38358 = (0);
seq__38286 = G__38355;
chunk__38287 = G__38356;
count__38288 = G__38357;
i__38289 = G__38358;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1503580042460
