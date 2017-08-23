// Compiled by ClojureScript 1.9.908 {}
goog.provide('keybind.core');
goog.require('cljs.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33065(s__33066){
return (new cljs.core.LazySeq(null,(function (){
var s__33066__$1 = s__33066;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33066__$1);
if(temp__4657__auto__){
var s__33066__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33066__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33066__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33068 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33067 = (0);
while(true){
if((i__33067 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33067);
cljs.core.chunk_append.call(null,b__33068,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__33081 = (i__33067 + (1));
i__33067 = G__33081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33068),keybind$core$iter__33065.call(null,cljs.core.chunk_rest.call(null,s__33066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33068),null);
}
} else {
var i = cljs.core.first.call(null,s__33066__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__33065.call(null,cljs.core.rest.call(null,s__33066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33069(s__33070){
return (new cljs.core.LazySeq(null,(function (){
var s__33070__$1 = s__33070;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33070__$1);
if(temp__4657__auto__){
var s__33070__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33070__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33070__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33072 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33071 = (0);
while(true){
if((i__33071 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33071);
cljs.core.chunk_append.call(null,b__33072,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__33082 = (i__33071 + (1));
i__33071 = G__33082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33072),keybind$core$iter__33069.call(null,cljs.core.chunk_rest.call(null,s__33070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33072),null);
}
} else {
var i = cljs.core.first.call(null,s__33070__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),keybind$core$iter__33069.call(null,cljs.core.rest.call(null,s__33070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33073(s__33074){
return (new cljs.core.LazySeq(null,(function (){
var s__33074__$1 = s__33074;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33074__$1);
if(temp__4657__auto__){
var s__33074__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33074__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33074__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33076 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33075 = (0);
while(true){
if((i__33075 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33075);
cljs.core.chunk_append.call(null,b__33076,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__33083 = (i__33075 + (1));
i__33075 = G__33083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33076),keybind$core$iter__33073.call(null,cljs.core.chunk_rest.call(null,s__33074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33076),null);
}
} else {
var i = cljs.core.first.call(null,s__33074__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__33073.call(null,cljs.core.rest.call(null,s__33074__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29241__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33077(s__33078){
return (new cljs.core.LazySeq(null,(function (){
var s__33078__$1 = s__33078;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33078__$1);
if(temp__4657__auto__){
var s__33078__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33078__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33078__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33080 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33079 = (0);
while(true){
if((i__33079 < size__29240__auto__)){
var i = cljs.core._nth.call(null,c__29239__auto__,i__33079);
cljs.core.chunk_append.call(null,b__33080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__33084 = (i__33079 + (1));
i__33079 = G__33084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33080),keybind$core$iter__33077.call(null,cljs.core.chunk_rest.call(null,s__33078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33080),null);
}
} else {
var i = cljs.core.first.call(null,s__33078__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__33077.call(null,cljs.core.rest.call(null,s__33078__$2)));
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
keybind.core.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$iter__33085(s__33086){
return (new cljs.core.LazySeq(null,(function (){
var s__33086__$1 = s__33086;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33086__$1);
if(temp__4657__auto__){
var s__33086__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33086__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33086__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33088 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33087 = (0);
while(true){
if((i__33087 < size__29240__auto__)){
var vec__33089 = cljs.core._nth.call(null,c__29239__auto__,i__33087);
var k = cljs.core.nth.call(null,vec__33089,(0),null);
var v = cljs.core.nth.call(null,vec__33089,(1),null);
cljs.core.chunk_append.call(null,b__33088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__33095 = (i__33087 + (1));
i__33087 = G__33095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33088),keybind$core$iter__33085.call(null,cljs.core.chunk_rest.call(null,s__33086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33088),null);
}
} else {
var vec__33092 = cljs.core.first.call(null,s__33086__$2);
var k = cljs.core.nth.call(null,vec__33092,(0),null);
var v = cljs.core.nth.call(null,vec__33092,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__33085.call(null,cljs.core.rest.call(null,s__33086__$2)));
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
return (function keybind$core$parse_chord_$_iter__33096(s__33097){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__33097__$1 = s__33097;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33097__$1);
if(temp__4657__auto__){
var s__33097__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33097__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33097__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33099 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33098 = (0);
while(true){
if((i__33098 < size__29240__auto__)){
var mod = cljs.core._nth.call(null,c__29239__auto__,i__33098);
cljs.core.chunk_append.call(null,b__33099,((cljs.core.not.call(null,cljs.core.get.call(null,keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.MODS,mod),true], null)));

var G__33100 = (i__33098 + (1));
i__33098 = G__33100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33099),keybind$core$parse_chord_$_iter__33096.call(null,cljs.core.chunk_rest.call(null,s__33097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33099),null);
}
} else {
var mod = cljs.core.first.call(null,s__33097__$2);
return cljs.core.cons.call(null,((cljs.core.not.call(null,cljs.core.get.call(null,keybind.core.MODS,mod)))?(function(){throw (new Error(["Unknown modified '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')))})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,keybind.core.MODS,mod),true], null)),keybind$core$parse_chord_$_iter__33096.call(null,cljs.core.rest.call(null,s__33097__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29241__auto__ = (function keybind$core$e__GT_chord_$_iter__33101(s__33102){
return (new cljs.core.LazySeq(null,(function (){
var s__33102__$1 = s__33102;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33102__$1);
if(temp__4657__auto__){
var s__33102__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33102__$2)){
var c__29239__auto__ = cljs.core.chunk_first.call(null,s__33102__$2);
var size__29240__auto__ = cljs.core.count.call(null,c__29239__auto__);
var b__33104 = cljs.core.chunk_buffer.call(null,size__29240__auto__);
if((function (){var i__33103 = (0);
while(true){
if((i__33103 < size__29240__auto__)){
var vec__33105 = cljs.core._nth.call(null,c__29239__auto__,i__33103);
var key = cljs.core.nth.call(null,vec__33105,(0),null);
var attr = cljs.core.nth.call(null,vec__33105,(1),null);
cljs.core.chunk_append.call(null,b__33104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__33111 = (i__33103 + (1));
i__33103 = G__33111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33104),keybind$core$e__GT_chord_$_iter__33101.call(null,cljs.core.chunk_rest.call(null,s__33102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33104),null);
}
} else {
var vec__33108 = cljs.core.first.call(null,s__33102__$2);
var key = cljs.core.nth.call(null,vec__33108,(0),null);
var attr = cljs.core.nth.call(null,vec__33108,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__33101.call(null,cljs.core.rest.call(null,s__33102__$2)));
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
var seq__33112_33122 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__33113_33123 = null;
var count__33114_33124 = (0);
var i__33115_33125 = (0);
while(true){
if((i__33115_33125 < count__33114_33124)){
var vec__33116_33126 = cljs.core._nth.call(null,chunk__33113_33123,i__33115_33125);
var __33127 = cljs.core.nth.call(null,vec__33116_33126,(0),null);
var handler_33128 = cljs.core.nth.call(null,vec__33116_33126,(1),null);
handler_33128.call(null,e,sequence);

var G__33129 = seq__33112_33122;
var G__33130 = chunk__33113_33123;
var G__33131 = count__33114_33124;
var G__33132 = (i__33115_33125 + (1));
seq__33112_33122 = G__33129;
chunk__33113_33123 = G__33130;
count__33114_33124 = G__33131;
i__33115_33125 = G__33132;
continue;
} else {
var temp__4657__auto___33133 = cljs.core.seq.call(null,seq__33112_33122);
if(temp__4657__auto___33133){
var seq__33112_33134__$1 = temp__4657__auto___33133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33112_33134__$1)){
var c__29272__auto___33135 = cljs.core.chunk_first.call(null,seq__33112_33134__$1);
var G__33136 = cljs.core.chunk_rest.call(null,seq__33112_33134__$1);
var G__33137 = c__29272__auto___33135;
var G__33138 = cljs.core.count.call(null,c__29272__auto___33135);
var G__33139 = (0);
seq__33112_33122 = G__33136;
chunk__33113_33123 = G__33137;
count__33114_33124 = G__33138;
i__33115_33125 = G__33139;
continue;
} else {
var vec__33119_33140 = cljs.core.first.call(null,seq__33112_33134__$1);
var __33141 = cljs.core.nth.call(null,vec__33119_33140,(0),null);
var handler_33142 = cljs.core.nth.call(null,vec__33119_33140,(1),null);
handler_33142.call(null,e,sequence);

var G__33143 = cljs.core.next.call(null,seq__33112_33134__$1);
var G__33144 = null;
var G__33145 = (0);
var G__33146 = (0);
seq__33112_33122 = G__33143;
chunk__33113_33123 = G__33144;
count__33114_33124 = G__33145;
i__33115_33125 = G__33146;
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

//# sourceMappingURL=core.js.map?rel=1503499633197
