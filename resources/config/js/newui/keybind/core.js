// Compiled by ClojureScript 1.9.908 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__36226(s__36227){
return (new cljs.core.LazySeq(null,(function (){
var s__36227__$1 = s__36227;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36227__$1);
if(temp__4657__auto__){
var s__36227__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36227__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36227__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36229 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36228 = (0);
while(true){
if((i__36228 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__36228);
cljs.core.chunk_append.call(null,b__36229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__36242 = (i__36228 + (1));
i__36228 = G__36242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36229),keybind$core$iter__36226.call(null,cljs.core.chunk_rest.call(null,s__36227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36229),null);
}
} else {
var i = cljs.core.first.call(null,s__36227__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__36226.call(null,cljs.core.rest.call(null,s__36227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__36230(s__36231){
return (new cljs.core.LazySeq(null,(function (){
var s__36231__$1 = s__36231;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36231__$1);
if(temp__4657__auto__){
var s__36231__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36231__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36231__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36233 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36232 = (0);
while(true){
if((i__36232 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__36232);
cljs.core.chunk_append.call(null,b__36233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__36243 = (i__36232 + (1));
i__36232 = G__36243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36233),keybind$core$iter__36230.call(null,cljs.core.chunk_rest.call(null,s__36231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36233),null);
}
} else {
var i = cljs.core.first.call(null,s__36231__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__36230.call(null,cljs.core.rest.call(null,s__36231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__36234(s__36235){
return (new cljs.core.LazySeq(null,(function (){
var s__36235__$1 = s__36235;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36235__$1);
if(temp__4657__auto__){
var s__36235__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36235__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36235__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36237 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36236 = (0);
while(true){
if((i__36236 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__36236);
cljs.core.chunk_append.call(null,b__36237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__36244 = (i__36236 + (1));
i__36236 = G__36244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36237),keybind$core$iter__36234.call(null,cljs.core.chunk_rest.call(null,s__36235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36237),null);
}
} else {
var i = cljs.core.first.call(null,s__36235__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__36234.call(null,cljs.core.rest.call(null,s__36235__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__36238(s__36239){
return (new cljs.core.LazySeq(null,(function (){
var s__36239__$1 = s__36239;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36239__$1);
if(temp__4657__auto__){
var s__36239__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36239__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36239__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36241 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36240 = (0);
while(true){
if((i__36240 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__36240);
cljs.core.chunk_append.call(null,b__36241,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__36245 = (i__36240 + (1));
i__36240 = G__36245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36241),keybind$core$iter__36238.call(null,cljs.core.chunk_rest.call(null,s__36239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36241),null);
}
} else {
var i = cljs.core.first.call(null,s__36239__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__36238.call(null,cljs.core.rest.call(null,s__36239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(65),(91)));
})()));
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__36246(s__36247){
return (new cljs.core.LazySeq(null,(function (){
var s__36247__$1 = s__36247;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36247__$1);
if(temp__4657__auto__){
var s__36247__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36247__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36247__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36249 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36248 = (0);
while(true){
if((i__36248 < size__29240__auto__)){
var vec__36250 = cljs.core._nth.call(null,c__29239__auto__,i__36248);
var k = cljs.core.nth.call(null,vec__36250,(0),null);
var v = cljs.core.nth.call(null,vec__36250,(1),null);
cljs.core.chunk_append.call(null,b__36249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__36256 = (i__36248 + (1));
i__36248 = G__36256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36249),keybind$core$iter__36246.call(null,cljs.core.chunk_rest.call(null,s__36247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36249),null);
}
} else {
var vec__36253 = cljs.core.first.call(null,s__36247__$2);
var k = cljs.core.nth.call(null,vec__36253,(0),null);
var v = cljs.core.nth.call(null,vec__36253,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__36246.call(null,cljs.core.rest.call(null,s__36247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,keybind.core.KEYS);
})());
if(typeof keybind.core.BINDINGS !== 'undefined'){
} else {
keybind.core.BINDINGS = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof keybind.core.PRESSED !== 'undefined'){
} else {
keybind.core.PRESSED = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof keybind.core.ENABLED_QMARK_ !== 'undefined'){
} else {
keybind.core.ENABLED_QMARK_ = cljs.core.atom.call(null,true);
}
keybind.core.parse_chord = (function keybind$core$parse_chord(keystring){
var bits = keystring.split(/-(?!$)/);
var button = cljs.core.nth.call(null,bits,(cljs.core.count.call(null,bits) - (1)));
var code = cljs.core.get.call(null,keybind.core.KEYS,button);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.into.call(null,cljs.core.assoc.call(null,keybind.core.DEFCHORD,new cljs.core.Keyword(null,"code","code",1586293142),code),(function (){var iter__29241__auto__ = ((function (bits,button,code){
return (function keybind$core$parse_chord_$_iter__36257(s__36258){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__36258__$1 = s__36258;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36258__$1);
if(temp__4657__auto__){
var s__36258__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36258__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36258__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36260 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36259 = (0);
while(true){
if((i__36259 < size__29240__auto__)){
var mod = cljs.core._nth.call(null,c__29239__auto__,i__36259);
cljs.core.chunk_append.call(null,b__36260,((cljs.core.not.call(null,cljs.core.get.call(null,keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.MODS,mod),true], null)));

var G__36261 = (i__36259 + (1));
i__36259 = G__36261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36260),keybind$core$parse_chord_$_iter__36257.call(null,cljs.core.chunk_rest.call(null,s__36258__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36260),null);
}
} else {
var mod = cljs.core.first.call(null,s__36258__$2);
return cljs.core.cons.call(null,((cljs.core.not.call(null,cljs.core.get.call(null,keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.MODS,mod),true], null)),keybind$core$parse_chord_$_iter__36257.call(null,cljs.core.rest.call(null,s__36258__$2)));
}
} else {
return null;
}
break;
}
});})(bits,button,code))
,null,null));
});})(bits,button,code))
;
return iter__29241__auto__.call(null,cljs.core.drop_last.call(null,bits));
})());
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.call(null,keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$e__GT_chord_$_iter__36262(s__36263){
return (new cljs.core.LazySeq(null,(function (){
var s__36263__$1 = s__36263;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36263__$1);
if(temp__4657__auto__){
var s__36263__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36263__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__36263__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__36265 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__36264 = (0);
while(true){
if((i__36264 < size__29240__auto__)){
var vec__36266 = cljs.core._nth.call(null,c__29239__auto__,i__36264);
var key = cljs.core.nth.call(null,vec__36266,(0),null);
var attr = cljs.core.nth.call(null,vec__36266,(1),null);
cljs.core.chunk_append.call(null,b__36265,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__36272 = (i__36264 + (1));
i__36264 = G__36272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36265),keybind$core$e__GT_chord_$_iter__36262.call(null,cljs.core.chunk_rest.call(null,s__36263__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36265),null);
}
} else {
var vec__36269 = cljs.core.first.call(null,s__36263__$2);
var key = cljs.core.nth.call(null,vec__36269,(0),null);
var attr = cljs.core.nth.call(null,vec__36269,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__36262.call(null,cljs.core.rest.call(null,s__36263__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,keybind.core.KEYATTRS);
})());
});
keybind.core.reset_sequence_BANG_ = (function keybind$core$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.call(null,keybind.core.PRESSED,cljs.core.empty);
});
keybind.core.dispatch = (function keybind$core$dispatch(e,bindings){
var chord = keybind.core.e__GT_chord.call(null,e);
var sequence = cljs.core.conj.call(null,cljs.core.deref.call(null,keybind.core.PRESSED),chord);
var inner = cljs.core.get_in.call(null,bindings,sequence);
var handlers = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not.call(null,inner)){
return keybind.core.reset_sequence_BANG_.call(null);
} else {
if(cljs.core.truth_(handlers)){
var seq__36273_36283 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__36274_36284 = null;
var count__36275_36285 = (0);
var i__36276_36286 = (0);
while(true){
if((i__36276_36286 < count__36275_36285)){
var vec__36277_36287 = cljs.core._nth.call(null,chunk__36274_36284,i__36276_36286);
var __36288 = cljs.core.nth.call(null,vec__36277_36287,(0),null);
var handler_36289 = cljs.core.nth.call(null,vec__36277_36287,(1),null);
handler_36289.call(null,e,sequence);

var G__36290 = seq__36273_36283;
var G__36291 = chunk__36274_36284;
var G__36292 = count__36275_36285;
var G__36293 = (i__36276_36286 + (1));
seq__36273_36283 = G__36290;
chunk__36274_36284 = G__36291;
count__36275_36285 = G__36292;
i__36276_36286 = G__36293;
continue;
} else {
var temp__4657__auto___36294 = cljs.core.seq.call(null,seq__36273_36283);
if(temp__4657__auto___36294){
var seq__36273_36295__$1 = temp__4657__auto___36294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36273_36295__$1)){
var c__29272__auto___36296 = cljs.core.chunk_first.call(null,seq__36273_36295__$1);
var G__36297 = cljs.core.chunk_rest.call(null,seq__36273_36295__$1);
var G__36298 = c__29272__auto___36296;
var G__36299 = cljs.core.count.call(null,c__29272__auto___36296);
var G__36300 = (0);
seq__36273_36283 = G__36297;
chunk__36274_36284 = G__36298;
count__36275_36285 = G__36299;
i__36276_36286 = G__36300;
continue;
} else {
var vec__36280_36301 = cljs.core.first.call(null,seq__36273_36295__$1);
var __36302 = cljs.core.nth.call(null,vec__36280_36301,(0),null);
var handler_36303 = cljs.core.nth.call(null,vec__36280_36301,(1),null);
handler_36303.call(null,e,sequence);

var G__36304 = cljs.core.next.call(null,seq__36273_36295__$1);
var G__36305 = null;
var G__36306 = (0);
var G__36307 = (0);
seq__36273_36283 = G__36304;
chunk__36274_36284 = G__36305;
count__36275_36285 = G__36306;
i__36276_36286 = G__36307;
continue;
}
} else {
}
}
break;
}

return keybind.core.reset_sequence_BANG_.call(null);
} else {
return cljs.core.reset_BANG_.call(null,keybind.core.PRESSED,sequence);

}
}
});
keybind.core.bind = (function keybind$core$bind(bindings,spec,key,cb){

var parsed = keybind.core.parse.call(null,spec);
return cljs.core.assoc_in.call(null,bindings,cljs.core.conj.call(null,parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781),key),cb);
});
keybind.core.unbind = (function keybind$core$unbind(bindings,spec,key){

var parsed = keybind.core.parse.call(null,spec);
return cljs.core.update_in.call(null,bindings,cljs.core.conj.call(null,parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781)),cljs.core.dissoc,key);
});
keybind.core.bind_BANG_ = (function keybind$core$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.call(null,keybind.core.BINDINGS,keybind.core.bind,spec,key,cb);
});
keybind.core.unbind_BANG_ = (function keybind$core$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.call(null,keybind.core.BINDINGS,keybind.core.unbind,spec,key);
});
keybind.core.unbind_all_BANG_ = (function keybind$core$unbind_all_BANG_(){

keybind.core.reset_sequence_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,keybind.core.BINDINGS,cljs.core.empty);
});
keybind.core.disable_BANG_ = (function keybind$core$disable_BANG_(){

return cljs.core.reset_BANG_.call(null,keybind.core.ENABLED_QMARK_,false);
});
keybind.core.enable_BANG_ = (function keybind$core$enable_BANG_(){

return cljs.core.reset_BANG_.call(null,keybind.core.ENABLED_QMARK_,true);
});
keybind.core.dispatcher_BANG_ = (function keybind$core$dispatcher_BANG_(bindings){

return (function (e){
if(cljs.core.truth_((function (){var and__28421__auto__ = cljs.core.deref.call(null,keybind.core.ENABLED_QMARK_);
if(cljs.core.truth_(and__28421__auto__)){
return cljs.core.get.call(null,keybind.core.KNOWN_KEYS,e.keyCode);
} else {
return and__28421__auto__;
}
})())){
return keybind.core.dispatch.call(null,e,cljs.core.deref.call(null,bindings));
} else {
return null;
}
});
});
if(typeof keybind.core.bind_keypress_listener !== 'undefined'){
} else {
keybind.core.bind_keypress_listener = addEventListener("keydown",keybind.core.dispatcher_BANG_.call(null,keybind.core.BINDINGS),false);
}

//# sourceMappingURL=core.js.map?rel=1503758424730
