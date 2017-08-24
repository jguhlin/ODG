// Compiled by ClojureScript 1.9.908 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33091(s__33092){
return (new cljs.core.LazySeq(null,(function (){
var s__33092__$1 = s__33092;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33092__$1);
if(temp__4657__auto__){
var s__33092__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33092__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33092__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33094 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33093 = (0);
while(true){
if((i__33093 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33093);
cljs.core.chunk_append.call(null,b__33094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__33107 = (i__33093 + (1));
i__33093 = G__33107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33094),keybind$core$iter__33091.call(null,cljs.core.chunk_rest.call(null,s__33092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33094),null);
}
} else {
var i = cljs.core.first.call(null,s__33092__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__33091.call(null,cljs.core.rest.call(null,s__33092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33095(s__33096){
return (new cljs.core.LazySeq(null,(function (){
var s__33096__$1 = s__33096;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33096__$1);
if(temp__4657__auto__){
var s__33096__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33096__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33096__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33098 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33097 = (0);
while(true){
if((i__33097 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33097);
cljs.core.chunk_append.call(null,b__33098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__33108 = (i__33097 + (1));
i__33097 = G__33108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33098),keybind$core$iter__33095.call(null,cljs.core.chunk_rest.call(null,s__33096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33098),null);
}
} else {
var i = cljs.core.first.call(null,s__33096__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__33095.call(null,cljs.core.rest.call(null,s__33096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33099(s__33100){
return (new cljs.core.LazySeq(null,(function (){
var s__33100__$1 = s__33100;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33100__$1);
if(temp__4657__auto__){
var s__33100__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33100__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33100__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33102 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33101 = (0);
while(true){
if((i__33101 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33101);
cljs.core.chunk_append.call(null,b__33102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__33109 = (i__33101 + (1));
i__33101 = G__33109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33102),keybind$core$iter__33099.call(null,cljs.core.chunk_rest.call(null,s__33100__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33102),null);
}
} else {
var i = cljs.core.first.call(null,s__33100__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__33099.call(null,cljs.core.rest.call(null,s__33100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33103(s__33104){
return (new cljs.core.LazySeq(null,(function (){
var s__33104__$1 = s__33104;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33104__$1);
if(temp__4657__auto__){
var s__33104__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33104__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33104__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33106 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33105 = (0);
while(true){
if((i__33105 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33105);
cljs.core.chunk_append.call(null,b__33106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__33110 = (i__33105 + (1));
i__33105 = G__33110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33106),keybind$core$iter__33103.call(null,cljs.core.chunk_rest.call(null,s__33104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33106),null);
}
} else {
var i = cljs.core.first.call(null,s__33104__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__33103.call(null,cljs.core.rest.call(null,s__33104__$2)));
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
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33111(s__33112){
return (new cljs.core.LazySeq(null,(function (){
var s__33112__$1 = s__33112;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33112__$1);
if(temp__4657__auto__){
var s__33112__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33112__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33112__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33114 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33113 = (0);
while(true){
if((i__33113 < size__29240__auto__)){
var vec__33115 = cljs.core._nth.call(null,c__29239__auto__,i__33113);
var k = cljs.core.nth.call(null,vec__33115,(0),null);
var v = cljs.core.nth.call(null,vec__33115,(1),null);
cljs.core.chunk_append.call(null,b__33114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__33121 = (i__33113 + (1));
i__33113 = G__33121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33114),keybind$core$iter__33111.call(null,cljs.core.chunk_rest.call(null,s__33112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33114),null);
}
} else {
var vec__33118 = cljs.core.first.call(null,s__33112__$2);
var k = cljs.core.nth.call(null,vec__33118,(0),null);
var v = cljs.core.nth.call(null,vec__33118,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__33111.call(null,cljs.core.rest.call(null,s__33112__$2)));
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
return (function keybind$core$parse_chord_$_iter__33122(s__33123){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__33123__$1 = s__33123;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33123__$1);
if(temp__4657__auto__){
var s__33123__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33123__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33123__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33125 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33124 = (0);
while(true){
if((i__33124 < size__29240__auto__)){
var mod = cljs.core._nth.call(null,c__29239__auto__,i__33124);
cljs.core.chunk_append.call(null,b__33125,((cljs.core.not.call(null,cljs.core.get.call(null,keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.MODS,mod),true], null)));

var G__33126 = (i__33124 + (1));
i__33124 = G__33126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33125),keybind$core$parse_chord_$_iter__33122.call(null,cljs.core.chunk_rest.call(null,s__33123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33125),null);
}
} else {
var mod = cljs.core.first.call(null,s__33123__$2);
return cljs.core.cons.call(null,((cljs.core.not.call(null,cljs.core.get.call(null,keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.MODS,mod),true], null)),keybind$core$parse_chord_$_iter__33122.call(null,cljs.core.rest.call(null,s__33123__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$e__GT_chord_$_iter__33127(s__33128){
return (new cljs.core.LazySeq(null,(function (){
var s__33128__$1 = s__33128;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33128__$1);
if(temp__4657__auto__){
var s__33128__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33128__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33128__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33130 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33129 = (0);
while(true){
if((i__33129 < size__29240__auto__)){
var vec__33131 = cljs.core._nth.call(null,c__29239__auto__,i__33129);
var key = cljs.core.nth.call(null,vec__33131,(0),null);
var attr = cljs.core.nth.call(null,vec__33131,(1),null);
cljs.core.chunk_append.call(null,b__33130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__33137 = (i__33129 + (1));
i__33129 = G__33137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33130),keybind$core$e__GT_chord_$_iter__33127.call(null,cljs.core.chunk_rest.call(null,s__33128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33130),null);
}
} else {
var vec__33134 = cljs.core.first.call(null,s__33128__$2);
var key = cljs.core.nth.call(null,vec__33134,(0),null);
var attr = cljs.core.nth.call(null,vec__33134,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__33127.call(null,cljs.core.rest.call(null,s__33128__$2)));
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
var seq__33138_33148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__33139_33149 = null;
var count__33140_33150 = (0);
var i__33141_33151 = (0);
while(true){
if((i__33141_33151 < count__33140_33150)){
var vec__33142_33152 = cljs.core._nth.call(null,chunk__33139_33149,i__33141_33151);
var __33153 = cljs.core.nth.call(null,vec__33142_33152,(0),null);
var handler_33154 = cljs.core.nth.call(null,vec__33142_33152,(1),null);
handler_33154.call(null,e,sequence);

var G__33155 = seq__33138_33148;
var G__33156 = chunk__33139_33149;
var G__33157 = count__33140_33150;
var G__33158 = (i__33141_33151 + (1));
seq__33138_33148 = G__33155;
chunk__33139_33149 = G__33156;
count__33140_33150 = G__33157;
i__33141_33151 = G__33158;
continue;
} else {
var temp__4657__auto___33159 = cljs.core.seq.call(null,seq__33138_33148);
if(temp__4657__auto___33159){
var seq__33138_33160__$1 = temp__4657__auto___33159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33138_33160__$1)){
var c__29272__auto___33161 = cljs.core.chunk_first.call(null,seq__33138_33160__$1);
var G__33162 = cljs.core.chunk_rest.call(null,seq__33138_33160__$1);
var G__33163 = c__29272__auto___33161;
var G__33164 = cljs.core.count.call(null,c__29272__auto___33161);
var G__33165 = (0);
seq__33138_33148 = G__33162;
chunk__33139_33149 = G__33163;
count__33140_33150 = G__33164;
i__33141_33151 = G__33165;
continue;
} else {
var vec__33145_33166 = cljs.core.first.call(null,seq__33138_33160__$1);
var __33167 = cljs.core.nth.call(null,vec__33145_33166,(0),null);
var handler_33168 = cljs.core.nth.call(null,vec__33145_33166,(1),null);
handler_33168.call(null,e,sequence);

var G__33169 = cljs.core.next.call(null,seq__33138_33160__$1);
var G__33170 = null;
var G__33171 = (0);
var G__33172 = (0);
seq__33138_33148 = G__33169;
chunk__33139_33149 = G__33170;
count__33140_33150 = G__33171;
i__33141_33151 = G__33172;
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

//# sourceMappingURL=core.js.map?rel=1503577465958
