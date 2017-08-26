// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41197){
var map__41198 = p__41197;
var map__41198__$1 = ((((!((map__41198 == null)))?((((map__41198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41198):map__41198);
var m = map__41198__$1;
var n = cljs.core.get.call(null,map__41198__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41200_41222 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41201_41223 = null;
var count__41202_41224 = (0);
var i__41203_41225 = (0);
while(true){
if((i__41203_41225 < count__41202_41224)){
var f_41226 = cljs.core._nth.call(null,chunk__41201_41223,i__41203_41225);
cljs.core.println.call(null,"  ",f_41226);

var G__41227 = seq__41200_41222;
var G__41228 = chunk__41201_41223;
var G__41229 = count__41202_41224;
var G__41230 = (i__41203_41225 + (1));
seq__41200_41222 = G__41227;
chunk__41201_41223 = G__41228;
count__41202_41224 = G__41229;
i__41203_41225 = G__41230;
continue;
} else {
var temp__4657__auto___41231 = cljs.core.seq.call(null,seq__41200_41222);
if(temp__4657__auto___41231){
var seq__41200_41232__$1 = temp__4657__auto___41231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41200_41232__$1)){
var c__29272__auto___41233 = cljs.core.chunk_first.call(null,seq__41200_41232__$1);
var G__41234 = cljs.core.chunk_rest.call(null,seq__41200_41232__$1);
var G__41235 = c__29272__auto___41233;
var G__41236 = cljs.core.count.call(null,c__29272__auto___41233);
var G__41237 = (0);
seq__41200_41222 = G__41234;
chunk__41201_41223 = G__41235;
count__41202_41224 = G__41236;
i__41203_41225 = G__41237;
continue;
} else {
var f_41238 = cljs.core.first.call(null,seq__41200_41232__$1);
cljs.core.println.call(null,"  ",f_41238);

var G__41239 = cljs.core.next.call(null,seq__41200_41232__$1);
var G__41240 = null;
var G__41241 = (0);
var G__41242 = (0);
seq__41200_41222 = G__41239;
chunk__41201_41223 = G__41240;
count__41202_41224 = G__41241;
i__41203_41225 = G__41242;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41243 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28433__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41243);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41243)))?cljs.core.second.call(null,arglists_41243):arglists_41243));
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
var seq__41204_41244 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41205_41245 = null;
var count__41206_41246 = (0);
var i__41207_41247 = (0);
while(true){
if((i__41207_41247 < count__41206_41246)){
var vec__41208_41248 = cljs.core._nth.call(null,chunk__41205_41245,i__41207_41247);
var name_41249 = cljs.core.nth.call(null,vec__41208_41248,(0),null);
var map__41211_41250 = cljs.core.nth.call(null,vec__41208_41248,(1),null);
var map__41211_41251__$1 = ((((!((map__41211_41250 == null)))?((((map__41211_41250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41211_41250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41211_41250):map__41211_41250);
var doc_41252 = cljs.core.get.call(null,map__41211_41251__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41253 = cljs.core.get.call(null,map__41211_41251__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41249);

cljs.core.println.call(null," ",arglists_41253);

if(cljs.core.truth_(doc_41252)){
cljs.core.println.call(null," ",doc_41252);
} else {
}

var G__41254 = seq__41204_41244;
var G__41255 = chunk__41205_41245;
var G__41256 = count__41206_41246;
var G__41257 = (i__41207_41247 + (1));
seq__41204_41244 = G__41254;
chunk__41205_41245 = G__41255;
count__41206_41246 = G__41256;
i__41207_41247 = G__41257;
continue;
} else {
var temp__4657__auto___41258 = cljs.core.seq.call(null,seq__41204_41244);
if(temp__4657__auto___41258){
var seq__41204_41259__$1 = temp__4657__auto___41258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41204_41259__$1)){
var c__29272__auto___41260 = cljs.core.chunk_first.call(null,seq__41204_41259__$1);
var G__41261 = cljs.core.chunk_rest.call(null,seq__41204_41259__$1);
var G__41262 = c__29272__auto___41260;
var G__41263 = cljs.core.count.call(null,c__29272__auto___41260);
var G__41264 = (0);
seq__41204_41244 = G__41261;
chunk__41205_41245 = G__41262;
count__41206_41246 = G__41263;
i__41207_41247 = G__41264;
continue;
} else {
var vec__41213_41265 = cljs.core.first.call(null,seq__41204_41259__$1);
var name_41266 = cljs.core.nth.call(null,vec__41213_41265,(0),null);
var map__41216_41267 = cljs.core.nth.call(null,vec__41213_41265,(1),null);
var map__41216_41268__$1 = ((((!((map__41216_41267 == null)))?((((map__41216_41267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41216_41267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41216_41267):map__41216_41267);
var doc_41269 = cljs.core.get.call(null,map__41216_41268__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41270 = cljs.core.get.call(null,map__41216_41268__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41266);

cljs.core.println.call(null," ",arglists_41270);

if(cljs.core.truth_(doc_41269)){
cljs.core.println.call(null," ",doc_41269);
} else {
}

var G__41271 = cljs.core.next.call(null,seq__41204_41259__$1);
var G__41272 = null;
var G__41273 = (0);
var G__41274 = (0);
seq__41204_41244 = G__41271;
chunk__41205_41245 = G__41272;
count__41206_41246 = G__41273;
i__41207_41247 = G__41274;
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

var seq__41218 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41219 = null;
var count__41220 = (0);
var i__41221 = (0);
while(true){
if((i__41221 < count__41220)){
var role = cljs.core._nth.call(null,chunk__41219,i__41221);
var temp__4657__auto___41275__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41275__$1)){
var spec_41276 = temp__4657__auto___41275__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41276));
} else {
}

var G__41277 = seq__41218;
var G__41278 = chunk__41219;
var G__41279 = count__41220;
var G__41280 = (i__41221 + (1));
seq__41218 = G__41277;
chunk__41219 = G__41278;
count__41220 = G__41279;
i__41221 = G__41280;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41218);
if(temp__4657__auto____$1){
var seq__41218__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41218__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__41218__$1);
var G__41281 = cljs.core.chunk_rest.call(null,seq__41218__$1);
var G__41282 = c__29272__auto__;
var G__41283 = cljs.core.count.call(null,c__29272__auto__);
var G__41284 = (0);
seq__41218 = G__41281;
chunk__41219 = G__41282;
count__41220 = G__41283;
i__41221 = G__41284;
continue;
} else {
var role = cljs.core.first.call(null,seq__41218__$1);
var temp__4657__auto___41285__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41285__$2)){
var spec_41286 = temp__4657__auto___41285__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41286));
} else {
}

var G__41287 = cljs.core.next.call(null,seq__41218__$1);
var G__41288 = null;
var G__41289 = (0);
var G__41290 = (0);
seq__41218 = G__41287;
chunk__41219 = G__41288;
count__41220 = G__41289;
i__41221 = G__41290;
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

//# sourceMappingURL=repl.js.map?rel=1503758428696
