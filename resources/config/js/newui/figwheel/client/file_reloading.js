// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28433__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28433__auto__){
return or__28433__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28433__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
var or__28433__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28433__auto____$1)){
return or__28433__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39775_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39775_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39776 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39777 = null;
var count__39778 = (0);
var i__39779 = (0);
while(true){
if((i__39779 < count__39778)){
var n = cljs.core._nth.call(null,chunk__39777,i__39779);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39780 = seq__39776;
var G__39781 = chunk__39777;
var G__39782 = count__39778;
var G__39783 = (i__39779 + (1));
seq__39776 = G__39780;
chunk__39777 = G__39781;
count__39778 = G__39782;
i__39779 = G__39783;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39776);
if(temp__4657__auto__){
var seq__39776__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39776__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__39776__$1);
var G__39784 = cljs.core.chunk_rest.call(null,seq__39776__$1);
var G__39785 = c__29272__auto__;
var G__39786 = cljs.core.count.call(null,c__29272__auto__);
var G__39787 = (0);
seq__39776 = G__39784;
chunk__39777 = G__39785;
count__39778 = G__39786;
i__39779 = G__39787;
continue;
} else {
var n = cljs.core.first.call(null,seq__39776__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39788 = cljs.core.next.call(null,seq__39776__$1);
var G__39789 = null;
var G__39790 = (0);
var G__39791 = (0);
seq__39776 = G__39788;
chunk__39777 = G__39789;
count__39778 = G__39790;
i__39779 = G__39791;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39801_39809 = cljs.core.seq.call(null,deps);
var chunk__39802_39810 = null;
var count__39803_39811 = (0);
var i__39804_39812 = (0);
while(true){
if((i__39804_39812 < count__39803_39811)){
var dep_39813 = cljs.core._nth.call(null,chunk__39802_39810,i__39804_39812);
topo_sort_helper_STAR_.call(null,dep_39813,(depth + (1)),state);

var G__39814 = seq__39801_39809;
var G__39815 = chunk__39802_39810;
var G__39816 = count__39803_39811;
var G__39817 = (i__39804_39812 + (1));
seq__39801_39809 = G__39814;
chunk__39802_39810 = G__39815;
count__39803_39811 = G__39816;
i__39804_39812 = G__39817;
continue;
} else {
var temp__4657__auto___39818 = cljs.core.seq.call(null,seq__39801_39809);
if(temp__4657__auto___39818){
var seq__39801_39819__$1 = temp__4657__auto___39818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39801_39819__$1)){
var c__29272__auto___39820 = cljs.core.chunk_first.call(null,seq__39801_39819__$1);
var G__39821 = cljs.core.chunk_rest.call(null,seq__39801_39819__$1);
var G__39822 = c__29272__auto___39820;
var G__39823 = cljs.core.count.call(null,c__29272__auto___39820);
var G__39824 = (0);
seq__39801_39809 = G__39821;
chunk__39802_39810 = G__39822;
count__39803_39811 = G__39823;
i__39804_39812 = G__39824;
continue;
} else {
var dep_39825 = cljs.core.first.call(null,seq__39801_39819__$1);
topo_sort_helper_STAR_.call(null,dep_39825,(depth + (1)),state);

var G__39826 = cljs.core.next.call(null,seq__39801_39819__$1);
var G__39827 = null;
var G__39828 = (0);
var G__39829 = (0);
seq__39801_39809 = G__39826;
chunk__39802_39810 = G__39827;
count__39803_39811 = G__39828;
i__39804_39812 = G__39829;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39805){
var vec__39806 = p__39805;
var seq__39807 = cljs.core.seq.call(null,vec__39806);
var first__39808 = cljs.core.first.call(null,seq__39807);
var seq__39807__$1 = cljs.core.next.call(null,seq__39807);
var x = first__39808;
var xs = seq__39807__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39806,seq__39807,first__39808,seq__39807__$1,x,xs,get_deps__$1){
return (function (p1__39792_SHARP_){
return clojure.set.difference.call(null,p1__39792_SHARP_,x);
});})(vec__39806,seq__39807,first__39808,seq__39807__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39830 = cljs.core.seq.call(null,provides);
var chunk__39831 = null;
var count__39832 = (0);
var i__39833 = (0);
while(true){
if((i__39833 < count__39832)){
var prov = cljs.core._nth.call(null,chunk__39831,i__39833);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39834_39842 = cljs.core.seq.call(null,requires);
var chunk__39835_39843 = null;
var count__39836_39844 = (0);
var i__39837_39845 = (0);
while(true){
if((i__39837_39845 < count__39836_39844)){
var req_39846 = cljs.core._nth.call(null,chunk__39835_39843,i__39837_39845);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39846,prov);

var G__39847 = seq__39834_39842;
var G__39848 = chunk__39835_39843;
var G__39849 = count__39836_39844;
var G__39850 = (i__39837_39845 + (1));
seq__39834_39842 = G__39847;
chunk__39835_39843 = G__39848;
count__39836_39844 = G__39849;
i__39837_39845 = G__39850;
continue;
} else {
var temp__4657__auto___39851 = cljs.core.seq.call(null,seq__39834_39842);
if(temp__4657__auto___39851){
var seq__39834_39852__$1 = temp__4657__auto___39851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39834_39852__$1)){
var c__29272__auto___39853 = cljs.core.chunk_first.call(null,seq__39834_39852__$1);
var G__39854 = cljs.core.chunk_rest.call(null,seq__39834_39852__$1);
var G__39855 = c__29272__auto___39853;
var G__39856 = cljs.core.count.call(null,c__29272__auto___39853);
var G__39857 = (0);
seq__39834_39842 = G__39854;
chunk__39835_39843 = G__39855;
count__39836_39844 = G__39856;
i__39837_39845 = G__39857;
continue;
} else {
var req_39858 = cljs.core.first.call(null,seq__39834_39852__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39858,prov);

var G__39859 = cljs.core.next.call(null,seq__39834_39852__$1);
var G__39860 = null;
var G__39861 = (0);
var G__39862 = (0);
seq__39834_39842 = G__39859;
chunk__39835_39843 = G__39860;
count__39836_39844 = G__39861;
i__39837_39845 = G__39862;
continue;
}
} else {
}
}
break;
}

var G__39863 = seq__39830;
var G__39864 = chunk__39831;
var G__39865 = count__39832;
var G__39866 = (i__39833 + (1));
seq__39830 = G__39863;
chunk__39831 = G__39864;
count__39832 = G__39865;
i__39833 = G__39866;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39830);
if(temp__4657__auto__){
var seq__39830__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39830__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__39830__$1);
var G__39867 = cljs.core.chunk_rest.call(null,seq__39830__$1);
var G__39868 = c__29272__auto__;
var G__39869 = cljs.core.count.call(null,c__29272__auto__);
var G__39870 = (0);
seq__39830 = G__39867;
chunk__39831 = G__39868;
count__39832 = G__39869;
i__39833 = G__39870;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39830__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39838_39871 = cljs.core.seq.call(null,requires);
var chunk__39839_39872 = null;
var count__39840_39873 = (0);
var i__39841_39874 = (0);
while(true){
if((i__39841_39874 < count__39840_39873)){
var req_39875 = cljs.core._nth.call(null,chunk__39839_39872,i__39841_39874);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39875,prov);

var G__39876 = seq__39838_39871;
var G__39877 = chunk__39839_39872;
var G__39878 = count__39840_39873;
var G__39879 = (i__39841_39874 + (1));
seq__39838_39871 = G__39876;
chunk__39839_39872 = G__39877;
count__39840_39873 = G__39878;
i__39841_39874 = G__39879;
continue;
} else {
var temp__4657__auto___39880__$1 = cljs.core.seq.call(null,seq__39838_39871);
if(temp__4657__auto___39880__$1){
var seq__39838_39881__$1 = temp__4657__auto___39880__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39838_39881__$1)){
var c__29272__auto___39882 = cljs.core.chunk_first.call(null,seq__39838_39881__$1);
var G__39883 = cljs.core.chunk_rest.call(null,seq__39838_39881__$1);
var G__39884 = c__29272__auto___39882;
var G__39885 = cljs.core.count.call(null,c__29272__auto___39882);
var G__39886 = (0);
seq__39838_39871 = G__39883;
chunk__39839_39872 = G__39884;
count__39840_39873 = G__39885;
i__39841_39874 = G__39886;
continue;
} else {
var req_39887 = cljs.core.first.call(null,seq__39838_39881__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39887,prov);

var G__39888 = cljs.core.next.call(null,seq__39838_39881__$1);
var G__39889 = null;
var G__39890 = (0);
var G__39891 = (0);
seq__39838_39871 = G__39888;
chunk__39839_39872 = G__39889;
count__39840_39873 = G__39890;
i__39841_39874 = G__39891;
continue;
}
} else {
}
}
break;
}

var G__39892 = cljs.core.next.call(null,seq__39830__$1);
var G__39893 = null;
var G__39894 = (0);
var G__39895 = (0);
seq__39830 = G__39892;
chunk__39831 = G__39893;
count__39832 = G__39894;
i__39833 = G__39895;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39896_39900 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39897_39901 = null;
var count__39898_39902 = (0);
var i__39899_39903 = (0);
while(true){
if((i__39899_39903 < count__39898_39902)){
var ns_39904 = cljs.core._nth.call(null,chunk__39897_39901,i__39899_39903);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39904);

var G__39905 = seq__39896_39900;
var G__39906 = chunk__39897_39901;
var G__39907 = count__39898_39902;
var G__39908 = (i__39899_39903 + (1));
seq__39896_39900 = G__39905;
chunk__39897_39901 = G__39906;
count__39898_39902 = G__39907;
i__39899_39903 = G__39908;
continue;
} else {
var temp__4657__auto___39909 = cljs.core.seq.call(null,seq__39896_39900);
if(temp__4657__auto___39909){
var seq__39896_39910__$1 = temp__4657__auto___39909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39896_39910__$1)){
var c__29272__auto___39911 = cljs.core.chunk_first.call(null,seq__39896_39910__$1);
var G__39912 = cljs.core.chunk_rest.call(null,seq__39896_39910__$1);
var G__39913 = c__29272__auto___39911;
var G__39914 = cljs.core.count.call(null,c__29272__auto___39911);
var G__39915 = (0);
seq__39896_39900 = G__39912;
chunk__39897_39901 = G__39913;
count__39898_39902 = G__39914;
i__39899_39903 = G__39915;
continue;
} else {
var ns_39916 = cljs.core.first.call(null,seq__39896_39910__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39916);

var G__39917 = cljs.core.next.call(null,seq__39896_39910__$1);
var G__39918 = null;
var G__39919 = (0);
var G__39920 = (0);
seq__39896_39900 = G__39917;
chunk__39897_39901 = G__39918;
count__39898_39902 = G__39919;
i__39899_39903 = G__39920;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28433__auto__ = goog.require__;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39921__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39922__i = 0, G__39922__a = new Array(arguments.length -  0);
while (G__39922__i < G__39922__a.length) {G__39922__a[G__39922__i] = arguments[G__39922__i + 0]; ++G__39922__i;}
  args = new cljs.core.IndexedSeq(G__39922__a,0,null);
} 
return G__39921__delegate.call(this,args);};
G__39921.cljs$lang$maxFixedArity = 0;
G__39921.cljs$lang$applyTo = (function (arglist__39923){
var args = cljs.core.seq(arglist__39923);
return G__39921__delegate(args);
});
G__39921.cljs$core$IFn$_invoke$arity$variadic = G__39921__delegate;
return G__39921;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__39924_SHARP_,p2__39925_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39924_SHARP_)].join('')),p2__39925_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__39926_SHARP_,p2__39927_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39926_SHARP_)].join(''),p2__39927_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39928 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39928.addCallback(((function (G__39928){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39928))
);

G__39928.addErrback(((function (G__39928){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39928))
);

return G__39928;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39929 = cljs.core._EQ_;
var expr__39930 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39929.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39930))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__39929,expr__39930){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__39929,expr__39930))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__39929,expr__39930){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39932){if((e39932 instanceof Error)){
var e = e39932;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39932;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__39929,expr__39930))
} else {
if(cljs.core.truth_(pred__39929.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39930))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__39929.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__39930))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__39929.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39930))){
return ((function (pred__39929,expr__39930){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39933){if((e39933 instanceof Error)){
var e = e39933;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39933;

}
}})());
});
;})(pred__39929,expr__39930))
} else {
return ((function (pred__39929,expr__39930){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39929,expr__39930))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39934,callback){
var map__39935 = p__39934;
var map__39935__$1 = ((((!((map__39935 == null)))?((((map__39935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39935):map__39935);
var file_msg = map__39935__$1;
var request_url = cljs.core.get.call(null,map__39935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39935,map__39935__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39935,map__39935__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__){
return (function (state_39959){
var state_val_39960 = (state_39959[(1)]);
if((state_val_39960 === (7))){
var inst_39955 = (state_39959[(2)]);
var state_39959__$1 = state_39959;
var statearr_39961_39978 = state_39959__$1;
(statearr_39961_39978[(2)] = inst_39955);

(statearr_39961_39978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (1))){
var state_39959__$1 = state_39959;
var statearr_39962_39979 = state_39959__$1;
(statearr_39962_39979[(2)] = null);

(statearr_39962_39979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (4))){
var inst_39939 = (state_39959[(7)]);
var inst_39939__$1 = (state_39959[(2)]);
var state_39959__$1 = (function (){var statearr_39963 = state_39959;
(statearr_39963[(7)] = inst_39939__$1);

return statearr_39963;
})();
if(cljs.core.truth_(inst_39939__$1)){
var statearr_39964_39980 = state_39959__$1;
(statearr_39964_39980[(1)] = (5));

} else {
var statearr_39965_39981 = state_39959__$1;
(statearr_39965_39981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (6))){
var state_39959__$1 = state_39959;
var statearr_39966_39982 = state_39959__$1;
(statearr_39966_39982[(2)] = null);

(statearr_39966_39982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (3))){
var inst_39957 = (state_39959[(2)]);
var state_39959__$1 = state_39959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39959__$1,inst_39957);
} else {
if((state_val_39960 === (2))){
var state_39959__$1 = state_39959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39959__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39960 === (11))){
var inst_39951 = (state_39959[(2)]);
var state_39959__$1 = (function (){var statearr_39967 = state_39959;
(statearr_39967[(8)] = inst_39951);

return statearr_39967;
})();
var statearr_39968_39983 = state_39959__$1;
(statearr_39968_39983[(2)] = null);

(statearr_39968_39983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (9))){
var inst_39945 = (state_39959[(9)]);
var inst_39943 = (state_39959[(10)]);
var inst_39947 = inst_39945.call(null,inst_39943);
var state_39959__$1 = state_39959;
var statearr_39969_39984 = state_39959__$1;
(statearr_39969_39984[(2)] = inst_39947);

(statearr_39969_39984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (5))){
var inst_39939 = (state_39959[(7)]);
var inst_39941 = figwheel.client.file_reloading.blocking_load.call(null,inst_39939);
var state_39959__$1 = state_39959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39959__$1,(8),inst_39941);
} else {
if((state_val_39960 === (10))){
var inst_39943 = (state_39959[(10)]);
var inst_39949 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39943);
var state_39959__$1 = state_39959;
var statearr_39970_39985 = state_39959__$1;
(statearr_39970_39985[(2)] = inst_39949);

(statearr_39970_39985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39960 === (8))){
var inst_39939 = (state_39959[(7)]);
var inst_39945 = (state_39959[(9)]);
var inst_39943 = (state_39959[(2)]);
var inst_39944 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39945__$1 = cljs.core.get.call(null,inst_39944,inst_39939);
var state_39959__$1 = (function (){var statearr_39971 = state_39959;
(statearr_39971[(9)] = inst_39945__$1);

(statearr_39971[(10)] = inst_39943);

return statearr_39971;
})();
if(cljs.core.truth_(inst_39945__$1)){
var statearr_39972_39986 = state_39959__$1;
(statearr_39972_39986[(1)] = (9));

} else {
var statearr_39973_39987 = state_39959__$1;
(statearr_39973_39987[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37706__auto__))
;
return ((function (switch__37618__auto__,c__37706__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37619__auto__ = null;
var figwheel$client$file_reloading$state_machine__37619__auto____0 = (function (){
var statearr_39974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39974[(0)] = figwheel$client$file_reloading$state_machine__37619__auto__);

(statearr_39974[(1)] = (1));

return statearr_39974;
});
var figwheel$client$file_reloading$state_machine__37619__auto____1 = (function (state_39959){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39975){if((e39975 instanceof Object)){
var ex__37622__auto__ = e39975;
var statearr_39976_39988 = state_39959;
(statearr_39976_39988[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39989 = state_39959;
state_39959 = G__39989;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37619__auto__ = function(state_39959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37619__auto____1.call(this,state_39959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37619__auto____0;
figwheel$client$file_reloading$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37619__auto____1;
return figwheel$client$file_reloading$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__))
})();
var state__37708__auto__ = (function (){var statearr_39977 = f__37707__auto__.call(null);
(statearr_39977[(6)] = c__37706__auto__);

return statearr_39977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__))
);

return c__37706__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39990,callback){
var map__39991 = p__39990;
var map__39991__$1 = ((((!((map__39991 == null)))?((((map__39991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39991):map__39991);
var file_msg = map__39991__$1;
var namespace = cljs.core.get.call(null,map__39991__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39991,map__39991__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39991,map__39991__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39993){
var map__39994 = p__39993;
var map__39994__$1 = ((((!((map__39994 == null)))?((((map__39994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39994):map__39994);
var file_msg = map__39994__$1;
var namespace = cljs.core.get.call(null,map__39994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39996){
var map__39997 = p__39996;
var map__39997__$1 = ((((!((map__39997 == null)))?((((map__39997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39997):map__39997);
var file_msg = map__39997__$1;
var namespace = cljs.core.get.call(null,map__39997__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28421__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28421__auto__){
var or__28433__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
var or__28433__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28433__auto____$1)){
return or__28433__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28421__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39999,callback){
var map__40000 = p__39999;
var map__40000__$1 = ((((!((map__40000 == null)))?((((map__40000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40000):map__40000);
var file_msg = map__40000__$1;
var request_url = cljs.core.get.call(null,map__40000__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40000__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37706__auto___40050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___40050,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___40050,out){
return (function (state_40035){
var state_val_40036 = (state_40035[(1)]);
if((state_val_40036 === (1))){
var inst_40009 = cljs.core.seq.call(null,files);
var inst_40010 = cljs.core.first.call(null,inst_40009);
var inst_40011 = cljs.core.next.call(null,inst_40009);
var inst_40012 = files;
var state_40035__$1 = (function (){var statearr_40037 = state_40035;
(statearr_40037[(7)] = inst_40010);

(statearr_40037[(8)] = inst_40012);

(statearr_40037[(9)] = inst_40011);

return statearr_40037;
})();
var statearr_40038_40051 = state_40035__$1;
(statearr_40038_40051[(2)] = null);

(statearr_40038_40051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (2))){
var inst_40012 = (state_40035[(8)]);
var inst_40018 = (state_40035[(10)]);
var inst_40017 = cljs.core.seq.call(null,inst_40012);
var inst_40018__$1 = cljs.core.first.call(null,inst_40017);
var inst_40019 = cljs.core.next.call(null,inst_40017);
var inst_40020 = (inst_40018__$1 == null);
var inst_40021 = cljs.core.not.call(null,inst_40020);
var state_40035__$1 = (function (){var statearr_40039 = state_40035;
(statearr_40039[(11)] = inst_40019);

(statearr_40039[(10)] = inst_40018__$1);

return statearr_40039;
})();
if(inst_40021){
var statearr_40040_40052 = state_40035__$1;
(statearr_40040_40052[(1)] = (4));

} else {
var statearr_40041_40053 = state_40035__$1;
(statearr_40041_40053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (3))){
var inst_40033 = (state_40035[(2)]);
var state_40035__$1 = state_40035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40035__$1,inst_40033);
} else {
if((state_val_40036 === (4))){
var inst_40018 = (state_40035[(10)]);
var inst_40023 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40018);
var state_40035__$1 = state_40035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40035__$1,(7),inst_40023);
} else {
if((state_val_40036 === (5))){
var inst_40029 = cljs.core.async.close_BANG_.call(null,out);
var state_40035__$1 = state_40035;
var statearr_40042_40054 = state_40035__$1;
(statearr_40042_40054[(2)] = inst_40029);

(statearr_40042_40054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (6))){
var inst_40031 = (state_40035[(2)]);
var state_40035__$1 = state_40035;
var statearr_40043_40055 = state_40035__$1;
(statearr_40043_40055[(2)] = inst_40031);

(statearr_40043_40055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40036 === (7))){
var inst_40019 = (state_40035[(11)]);
var inst_40025 = (state_40035[(2)]);
var inst_40026 = cljs.core.async.put_BANG_.call(null,out,inst_40025);
var inst_40012 = inst_40019;
var state_40035__$1 = (function (){var statearr_40044 = state_40035;
(statearr_40044[(8)] = inst_40012);

(statearr_40044[(12)] = inst_40026);

return statearr_40044;
})();
var statearr_40045_40056 = state_40035__$1;
(statearr_40045_40056[(2)] = null);

(statearr_40045_40056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37706__auto___40050,out))
;
return ((function (switch__37618__auto__,c__37706__auto___40050,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto____0 = (function (){
var statearr_40046 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40046[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto__);

(statearr_40046[(1)] = (1));

return statearr_40046;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto____1 = (function (state_40035){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_40035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e40047){if((e40047 instanceof Object)){
var ex__37622__auto__ = e40047;
var statearr_40048_40057 = state_40035;
(statearr_40048_40057[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40058 = state_40035;
state_40035 = G__40058;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto__ = function(state_40035){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto____1.call(this,state_40035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___40050,out))
})();
var state__37708__auto__ = (function (){var statearr_40049 = f__37707__auto__.call(null);
(statearr_40049[(6)] = c__37706__auto___40050);

return statearr_40049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___40050,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40059,opts){
var map__40060 = p__40059;
var map__40060__$1 = ((((!((map__40060 == null)))?((((map__40060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40060):map__40060);
var eval_body = cljs.core.get.call(null,map__40060__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28421__auto__ = eval_body;
if(cljs.core.truth_(and__28421__auto__)){
return typeof eval_body === 'string';
} else {
return and__28421__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40062){var e = e40062;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40063_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40063_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40064){
var vec__40065 = p__40064;
var k = cljs.core.nth.call(null,vec__40065,(0),null);
var v = cljs.core.nth.call(null,vec__40065,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40068){
var vec__40069 = p__40068;
var k = cljs.core.nth.call(null,vec__40069,(0),null);
var v = cljs.core.nth.call(null,vec__40069,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40075,p__40076){
var map__40077 = p__40075;
var map__40077__$1 = ((((!((map__40077 == null)))?((((map__40077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40077):map__40077);
var opts = map__40077__$1;
var before_jsload = cljs.core.get.call(null,map__40077__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40077__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40077__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40078 = p__40076;
var map__40078__$1 = ((((!((map__40078 == null)))?((((map__40078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40078):map__40078);
var msg = map__40078__$1;
var files = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40232){
var state_val_40233 = (state_40232[(1)]);
if((state_val_40233 === (7))){
var inst_40092 = (state_40232[(7)]);
var inst_40094 = (state_40232[(8)]);
var inst_40093 = (state_40232[(9)]);
var inst_40095 = (state_40232[(10)]);
var inst_40100 = cljs.core._nth.call(null,inst_40093,inst_40095);
var inst_40101 = figwheel.client.file_reloading.eval_body.call(null,inst_40100,opts);
var inst_40102 = (inst_40095 + (1));
var tmp40234 = inst_40092;
var tmp40235 = inst_40094;
var tmp40236 = inst_40093;
var inst_40092__$1 = tmp40234;
var inst_40093__$1 = tmp40236;
var inst_40094__$1 = tmp40235;
var inst_40095__$1 = inst_40102;
var state_40232__$1 = (function (){var statearr_40237 = state_40232;
(statearr_40237[(7)] = inst_40092__$1);

(statearr_40237[(8)] = inst_40094__$1);

(statearr_40237[(9)] = inst_40093__$1);

(statearr_40237[(11)] = inst_40101);

(statearr_40237[(10)] = inst_40095__$1);

return statearr_40237;
})();
var statearr_40238_40321 = state_40232__$1;
(statearr_40238_40321[(2)] = null);

(statearr_40238_40321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (20))){
var inst_40135 = (state_40232[(12)]);
var inst_40143 = figwheel.client.file_reloading.sort_files.call(null,inst_40135);
var state_40232__$1 = state_40232;
var statearr_40239_40322 = state_40232__$1;
(statearr_40239_40322[(2)] = inst_40143);

(statearr_40239_40322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (27))){
var state_40232__$1 = state_40232;
var statearr_40240_40323 = state_40232__$1;
(statearr_40240_40323[(2)] = null);

(statearr_40240_40323[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (1))){
var inst_40084 = (state_40232[(13)]);
var inst_40081 = before_jsload.call(null,files);
var inst_40082 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40083 = (function (){return ((function (inst_40084,inst_40081,inst_40082,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40072_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40072_SHARP_);
});
;})(inst_40084,inst_40081,inst_40082,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40084__$1 = cljs.core.filter.call(null,inst_40083,files);
var inst_40085 = cljs.core.not_empty.call(null,inst_40084__$1);
var state_40232__$1 = (function (){var statearr_40241 = state_40232;
(statearr_40241[(14)] = inst_40081);

(statearr_40241[(13)] = inst_40084__$1);

(statearr_40241[(15)] = inst_40082);

return statearr_40241;
})();
if(cljs.core.truth_(inst_40085)){
var statearr_40242_40324 = state_40232__$1;
(statearr_40242_40324[(1)] = (2));

} else {
var statearr_40243_40325 = state_40232__$1;
(statearr_40243_40325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (24))){
var state_40232__$1 = state_40232;
var statearr_40244_40326 = state_40232__$1;
(statearr_40244_40326[(2)] = null);

(statearr_40244_40326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (39))){
var inst_40185 = (state_40232[(16)]);
var state_40232__$1 = state_40232;
var statearr_40245_40327 = state_40232__$1;
(statearr_40245_40327[(2)] = inst_40185);

(statearr_40245_40327[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (46))){
var inst_40227 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40246_40328 = state_40232__$1;
(statearr_40246_40328[(2)] = inst_40227);

(statearr_40246_40328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (4))){
var inst_40129 = (state_40232[(2)]);
var inst_40130 = cljs.core.List.EMPTY;
var inst_40131 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40130);
var inst_40132 = (function (){return ((function (inst_40129,inst_40130,inst_40131,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40073_SHARP_){
var and__28421__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40073_SHARP_);
if(cljs.core.truth_(and__28421__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40073_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40073_SHARP_)));
} else {
return and__28421__auto__;
}
});
;})(inst_40129,inst_40130,inst_40131,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40133 = cljs.core.filter.call(null,inst_40132,files);
var inst_40134 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40135 = cljs.core.concat.call(null,inst_40133,inst_40134);
var state_40232__$1 = (function (){var statearr_40247 = state_40232;
(statearr_40247[(17)] = inst_40129);

(statearr_40247[(18)] = inst_40131);

(statearr_40247[(12)] = inst_40135);

return statearr_40247;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40248_40329 = state_40232__$1;
(statearr_40248_40329[(1)] = (16));

} else {
var statearr_40249_40330 = state_40232__$1;
(statearr_40249_40330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (15))){
var inst_40119 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40250_40331 = state_40232__$1;
(statearr_40250_40331[(2)] = inst_40119);

(statearr_40250_40331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (21))){
var inst_40145 = (state_40232[(19)]);
var inst_40145__$1 = (state_40232[(2)]);
var inst_40146 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40145__$1);
var state_40232__$1 = (function (){var statearr_40251 = state_40232;
(statearr_40251[(19)] = inst_40145__$1);

return statearr_40251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40232__$1,(22),inst_40146);
} else {
if((state_val_40233 === (31))){
var inst_40230 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40232__$1,inst_40230);
} else {
if((state_val_40233 === (32))){
var inst_40185 = (state_40232[(16)]);
var inst_40190 = inst_40185.cljs$lang$protocol_mask$partition0$;
var inst_40191 = (inst_40190 & (64));
var inst_40192 = inst_40185.cljs$core$ISeq$;
var inst_40193 = (cljs.core.PROTOCOL_SENTINEL === inst_40192);
var inst_40194 = (inst_40191) || (inst_40193);
var state_40232__$1 = state_40232;
if(cljs.core.truth_(inst_40194)){
var statearr_40252_40332 = state_40232__$1;
(statearr_40252_40332[(1)] = (35));

} else {
var statearr_40253_40333 = state_40232__$1;
(statearr_40253_40333[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (40))){
var inst_40207 = (state_40232[(20)]);
var inst_40206 = (state_40232[(2)]);
var inst_40207__$1 = cljs.core.get.call(null,inst_40206,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40208 = cljs.core.get.call(null,inst_40206,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40209 = cljs.core.not_empty.call(null,inst_40207__$1);
var state_40232__$1 = (function (){var statearr_40254 = state_40232;
(statearr_40254[(21)] = inst_40208);

(statearr_40254[(20)] = inst_40207__$1);

return statearr_40254;
})();
if(cljs.core.truth_(inst_40209)){
var statearr_40255_40334 = state_40232__$1;
(statearr_40255_40334[(1)] = (41));

} else {
var statearr_40256_40335 = state_40232__$1;
(statearr_40256_40335[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (33))){
var state_40232__$1 = state_40232;
var statearr_40257_40336 = state_40232__$1;
(statearr_40257_40336[(2)] = false);

(statearr_40257_40336[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (13))){
var inst_40105 = (state_40232[(22)]);
var inst_40109 = cljs.core.chunk_first.call(null,inst_40105);
var inst_40110 = cljs.core.chunk_rest.call(null,inst_40105);
var inst_40111 = cljs.core.count.call(null,inst_40109);
var inst_40092 = inst_40110;
var inst_40093 = inst_40109;
var inst_40094 = inst_40111;
var inst_40095 = (0);
var state_40232__$1 = (function (){var statearr_40258 = state_40232;
(statearr_40258[(7)] = inst_40092);

(statearr_40258[(8)] = inst_40094);

(statearr_40258[(9)] = inst_40093);

(statearr_40258[(10)] = inst_40095);

return statearr_40258;
})();
var statearr_40259_40337 = state_40232__$1;
(statearr_40259_40337[(2)] = null);

(statearr_40259_40337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (22))){
var inst_40149 = (state_40232[(23)]);
var inst_40148 = (state_40232[(24)]);
var inst_40153 = (state_40232[(25)]);
var inst_40145 = (state_40232[(19)]);
var inst_40148__$1 = (state_40232[(2)]);
var inst_40149__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40148__$1);
var inst_40150 = (function (){var all_files = inst_40145;
var res_SINGLEQUOTE_ = inst_40148__$1;
var res = inst_40149__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40149,inst_40148,inst_40153,inst_40145,inst_40148__$1,inst_40149__$1,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40074_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40074_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40149,inst_40148,inst_40153,inst_40145,inst_40148__$1,inst_40149__$1,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40151 = cljs.core.filter.call(null,inst_40150,inst_40148__$1);
var inst_40152 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40153__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40152);
var inst_40154 = cljs.core.not_empty.call(null,inst_40153__$1);
var state_40232__$1 = (function (){var statearr_40260 = state_40232;
(statearr_40260[(23)] = inst_40149__$1);

(statearr_40260[(26)] = inst_40151);

(statearr_40260[(24)] = inst_40148__$1);

(statearr_40260[(25)] = inst_40153__$1);

return statearr_40260;
})();
if(cljs.core.truth_(inst_40154)){
var statearr_40261_40338 = state_40232__$1;
(statearr_40261_40338[(1)] = (23));

} else {
var statearr_40262_40339 = state_40232__$1;
(statearr_40262_40339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (36))){
var state_40232__$1 = state_40232;
var statearr_40263_40340 = state_40232__$1;
(statearr_40263_40340[(2)] = false);

(statearr_40263_40340[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (41))){
var inst_40207 = (state_40232[(20)]);
var inst_40211 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40212 = cljs.core.map.call(null,inst_40211,inst_40207);
var inst_40213 = cljs.core.pr_str.call(null,inst_40212);
var inst_40214 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40213)].join('');
var inst_40215 = figwheel.client.utils.log.call(null,inst_40214);
var state_40232__$1 = state_40232;
var statearr_40264_40341 = state_40232__$1;
(statearr_40264_40341[(2)] = inst_40215);

(statearr_40264_40341[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (43))){
var inst_40208 = (state_40232[(21)]);
var inst_40218 = (state_40232[(2)]);
var inst_40219 = cljs.core.not_empty.call(null,inst_40208);
var state_40232__$1 = (function (){var statearr_40265 = state_40232;
(statearr_40265[(27)] = inst_40218);

return statearr_40265;
})();
if(cljs.core.truth_(inst_40219)){
var statearr_40266_40342 = state_40232__$1;
(statearr_40266_40342[(1)] = (44));

} else {
var statearr_40267_40343 = state_40232__$1;
(statearr_40267_40343[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (29))){
var inst_40149 = (state_40232[(23)]);
var inst_40185 = (state_40232[(16)]);
var inst_40151 = (state_40232[(26)]);
var inst_40148 = (state_40232[(24)]);
var inst_40153 = (state_40232[(25)]);
var inst_40145 = (state_40232[(19)]);
var inst_40181 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40184 = (function (){var all_files = inst_40145;
var res_SINGLEQUOTE_ = inst_40148;
var res = inst_40149;
var files_not_loaded = inst_40151;
var dependencies_that_loaded = inst_40153;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40185,inst_40151,inst_40148,inst_40153,inst_40145,inst_40181,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40183){
var map__40268 = p__40183;
var map__40268__$1 = ((((!((map__40268 == null)))?((((map__40268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40268):map__40268);
var namespace = cljs.core.get.call(null,map__40268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40185,inst_40151,inst_40148,inst_40153,inst_40145,inst_40181,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40185__$1 = cljs.core.group_by.call(null,inst_40184,inst_40151);
var inst_40187 = (inst_40185__$1 == null);
var inst_40188 = cljs.core.not.call(null,inst_40187);
var state_40232__$1 = (function (){var statearr_40270 = state_40232;
(statearr_40270[(28)] = inst_40181);

(statearr_40270[(16)] = inst_40185__$1);

return statearr_40270;
})();
if(inst_40188){
var statearr_40271_40344 = state_40232__$1;
(statearr_40271_40344[(1)] = (32));

} else {
var statearr_40272_40345 = state_40232__$1;
(statearr_40272_40345[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (44))){
var inst_40208 = (state_40232[(21)]);
var inst_40221 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40208);
var inst_40222 = cljs.core.pr_str.call(null,inst_40221);
var inst_40223 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40222)].join('');
var inst_40224 = figwheel.client.utils.log.call(null,inst_40223);
var state_40232__$1 = state_40232;
var statearr_40273_40346 = state_40232__$1;
(statearr_40273_40346[(2)] = inst_40224);

(statearr_40273_40346[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (6))){
var inst_40126 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40274_40347 = state_40232__$1;
(statearr_40274_40347[(2)] = inst_40126);

(statearr_40274_40347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (28))){
var inst_40151 = (state_40232[(26)]);
var inst_40178 = (state_40232[(2)]);
var inst_40179 = cljs.core.not_empty.call(null,inst_40151);
var state_40232__$1 = (function (){var statearr_40275 = state_40232;
(statearr_40275[(29)] = inst_40178);

return statearr_40275;
})();
if(cljs.core.truth_(inst_40179)){
var statearr_40276_40348 = state_40232__$1;
(statearr_40276_40348[(1)] = (29));

} else {
var statearr_40277_40349 = state_40232__$1;
(statearr_40277_40349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (25))){
var inst_40149 = (state_40232[(23)]);
var inst_40165 = (state_40232[(2)]);
var inst_40166 = cljs.core.not_empty.call(null,inst_40149);
var state_40232__$1 = (function (){var statearr_40278 = state_40232;
(statearr_40278[(30)] = inst_40165);

return statearr_40278;
})();
if(cljs.core.truth_(inst_40166)){
var statearr_40279_40350 = state_40232__$1;
(statearr_40279_40350[(1)] = (26));

} else {
var statearr_40280_40351 = state_40232__$1;
(statearr_40280_40351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (34))){
var inst_40201 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
if(cljs.core.truth_(inst_40201)){
var statearr_40281_40352 = state_40232__$1;
(statearr_40281_40352[(1)] = (38));

} else {
var statearr_40282_40353 = state_40232__$1;
(statearr_40282_40353[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (17))){
var state_40232__$1 = state_40232;
var statearr_40283_40354 = state_40232__$1;
(statearr_40283_40354[(2)] = recompile_dependents);

(statearr_40283_40354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (3))){
var state_40232__$1 = state_40232;
var statearr_40284_40355 = state_40232__$1;
(statearr_40284_40355[(2)] = null);

(statearr_40284_40355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (12))){
var inst_40122 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40285_40356 = state_40232__$1;
(statearr_40285_40356[(2)] = inst_40122);

(statearr_40285_40356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (2))){
var inst_40084 = (state_40232[(13)]);
var inst_40091 = cljs.core.seq.call(null,inst_40084);
var inst_40092 = inst_40091;
var inst_40093 = null;
var inst_40094 = (0);
var inst_40095 = (0);
var state_40232__$1 = (function (){var statearr_40286 = state_40232;
(statearr_40286[(7)] = inst_40092);

(statearr_40286[(8)] = inst_40094);

(statearr_40286[(9)] = inst_40093);

(statearr_40286[(10)] = inst_40095);

return statearr_40286;
})();
var statearr_40287_40357 = state_40232__$1;
(statearr_40287_40357[(2)] = null);

(statearr_40287_40357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (23))){
var inst_40149 = (state_40232[(23)]);
var inst_40151 = (state_40232[(26)]);
var inst_40148 = (state_40232[(24)]);
var inst_40153 = (state_40232[(25)]);
var inst_40145 = (state_40232[(19)]);
var inst_40156 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40158 = (function (){var all_files = inst_40145;
var res_SINGLEQUOTE_ = inst_40148;
var res = inst_40149;
var files_not_loaded = inst_40151;
var dependencies_that_loaded = inst_40153;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40151,inst_40148,inst_40153,inst_40145,inst_40156,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40157){
var map__40288 = p__40157;
var map__40288__$1 = ((((!((map__40288 == null)))?((((map__40288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40288):map__40288);
var request_url = cljs.core.get.call(null,map__40288__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40151,inst_40148,inst_40153,inst_40145,inst_40156,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40159 = cljs.core.reverse.call(null,inst_40153);
var inst_40160 = cljs.core.map.call(null,inst_40158,inst_40159);
var inst_40161 = cljs.core.pr_str.call(null,inst_40160);
var inst_40162 = figwheel.client.utils.log.call(null,inst_40161);
var state_40232__$1 = (function (){var statearr_40290 = state_40232;
(statearr_40290[(31)] = inst_40156);

return statearr_40290;
})();
var statearr_40291_40358 = state_40232__$1;
(statearr_40291_40358[(2)] = inst_40162);

(statearr_40291_40358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (35))){
var state_40232__$1 = state_40232;
var statearr_40292_40359 = state_40232__$1;
(statearr_40292_40359[(2)] = true);

(statearr_40292_40359[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (19))){
var inst_40135 = (state_40232[(12)]);
var inst_40141 = figwheel.client.file_reloading.expand_files.call(null,inst_40135);
var state_40232__$1 = state_40232;
var statearr_40293_40360 = state_40232__$1;
(statearr_40293_40360[(2)] = inst_40141);

(statearr_40293_40360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (11))){
var state_40232__$1 = state_40232;
var statearr_40294_40361 = state_40232__$1;
(statearr_40294_40361[(2)] = null);

(statearr_40294_40361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (9))){
var inst_40124 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40295_40362 = state_40232__$1;
(statearr_40295_40362[(2)] = inst_40124);

(statearr_40295_40362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (5))){
var inst_40094 = (state_40232[(8)]);
var inst_40095 = (state_40232[(10)]);
var inst_40097 = (inst_40095 < inst_40094);
var inst_40098 = inst_40097;
var state_40232__$1 = state_40232;
if(cljs.core.truth_(inst_40098)){
var statearr_40296_40363 = state_40232__$1;
(statearr_40296_40363[(1)] = (7));

} else {
var statearr_40297_40364 = state_40232__$1;
(statearr_40297_40364[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (14))){
var inst_40105 = (state_40232[(22)]);
var inst_40114 = cljs.core.first.call(null,inst_40105);
var inst_40115 = figwheel.client.file_reloading.eval_body.call(null,inst_40114,opts);
var inst_40116 = cljs.core.next.call(null,inst_40105);
var inst_40092 = inst_40116;
var inst_40093 = null;
var inst_40094 = (0);
var inst_40095 = (0);
var state_40232__$1 = (function (){var statearr_40298 = state_40232;
(statearr_40298[(7)] = inst_40092);

(statearr_40298[(8)] = inst_40094);

(statearr_40298[(9)] = inst_40093);

(statearr_40298[(32)] = inst_40115);

(statearr_40298[(10)] = inst_40095);

return statearr_40298;
})();
var statearr_40299_40365 = state_40232__$1;
(statearr_40299_40365[(2)] = null);

(statearr_40299_40365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (45))){
var state_40232__$1 = state_40232;
var statearr_40300_40366 = state_40232__$1;
(statearr_40300_40366[(2)] = null);

(statearr_40300_40366[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (26))){
var inst_40149 = (state_40232[(23)]);
var inst_40151 = (state_40232[(26)]);
var inst_40148 = (state_40232[(24)]);
var inst_40153 = (state_40232[(25)]);
var inst_40145 = (state_40232[(19)]);
var inst_40168 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40170 = (function (){var all_files = inst_40145;
var res_SINGLEQUOTE_ = inst_40148;
var res = inst_40149;
var files_not_loaded = inst_40151;
var dependencies_that_loaded = inst_40153;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40151,inst_40148,inst_40153,inst_40145,inst_40168,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40169){
var map__40301 = p__40169;
var map__40301__$1 = ((((!((map__40301 == null)))?((((map__40301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40301):map__40301);
var namespace = cljs.core.get.call(null,map__40301__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40301__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40151,inst_40148,inst_40153,inst_40145,inst_40168,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40171 = cljs.core.map.call(null,inst_40170,inst_40149);
var inst_40172 = cljs.core.pr_str.call(null,inst_40171);
var inst_40173 = figwheel.client.utils.log.call(null,inst_40172);
var inst_40174 = (function (){var all_files = inst_40145;
var res_SINGLEQUOTE_ = inst_40148;
var res = inst_40149;
var files_not_loaded = inst_40151;
var dependencies_that_loaded = inst_40153;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40151,inst_40148,inst_40153,inst_40145,inst_40168,inst_40170,inst_40171,inst_40172,inst_40173,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40149,inst_40151,inst_40148,inst_40153,inst_40145,inst_40168,inst_40170,inst_40171,inst_40172,inst_40173,state_val_40233,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40175 = setTimeout(inst_40174,(10));
var state_40232__$1 = (function (){var statearr_40303 = state_40232;
(statearr_40303[(33)] = inst_40173);

(statearr_40303[(34)] = inst_40168);

return statearr_40303;
})();
var statearr_40304_40367 = state_40232__$1;
(statearr_40304_40367[(2)] = inst_40175);

(statearr_40304_40367[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (16))){
var state_40232__$1 = state_40232;
var statearr_40305_40368 = state_40232__$1;
(statearr_40305_40368[(2)] = reload_dependents);

(statearr_40305_40368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (38))){
var inst_40185 = (state_40232[(16)]);
var inst_40203 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40185);
var state_40232__$1 = state_40232;
var statearr_40306_40369 = state_40232__$1;
(statearr_40306_40369[(2)] = inst_40203);

(statearr_40306_40369[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (30))){
var state_40232__$1 = state_40232;
var statearr_40307_40370 = state_40232__$1;
(statearr_40307_40370[(2)] = null);

(statearr_40307_40370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (10))){
var inst_40105 = (state_40232[(22)]);
var inst_40107 = cljs.core.chunked_seq_QMARK_.call(null,inst_40105);
var state_40232__$1 = state_40232;
if(inst_40107){
var statearr_40308_40371 = state_40232__$1;
(statearr_40308_40371[(1)] = (13));

} else {
var statearr_40309_40372 = state_40232__$1;
(statearr_40309_40372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (18))){
var inst_40139 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
if(cljs.core.truth_(inst_40139)){
var statearr_40310_40373 = state_40232__$1;
(statearr_40310_40373[(1)] = (19));

} else {
var statearr_40311_40374 = state_40232__$1;
(statearr_40311_40374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (42))){
var state_40232__$1 = state_40232;
var statearr_40312_40375 = state_40232__$1;
(statearr_40312_40375[(2)] = null);

(statearr_40312_40375[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (37))){
var inst_40198 = (state_40232[(2)]);
var state_40232__$1 = state_40232;
var statearr_40313_40376 = state_40232__$1;
(statearr_40313_40376[(2)] = inst_40198);

(statearr_40313_40376[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40233 === (8))){
var inst_40092 = (state_40232[(7)]);
var inst_40105 = (state_40232[(22)]);
var inst_40105__$1 = cljs.core.seq.call(null,inst_40092);
var state_40232__$1 = (function (){var statearr_40314 = state_40232;
(statearr_40314[(22)] = inst_40105__$1);

return statearr_40314;
})();
if(inst_40105__$1){
var statearr_40315_40377 = state_40232__$1;
(statearr_40315_40377[(1)] = (10));

} else {
var statearr_40316_40378 = state_40232__$1;
(statearr_40316_40378[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37618__auto__,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto____0 = (function (){
var statearr_40317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40317[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto__);

(statearr_40317[(1)] = (1));

return statearr_40317;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto____1 = (function (state_40232){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_40232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e40318){if((e40318 instanceof Object)){
var ex__37622__auto__ = e40318;
var statearr_40319_40379 = state_40232;
(statearr_40319_40379[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40380 = state_40232;
state_40232 = G__40380;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto__ = function(state_40232){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto____1.call(this,state_40232);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37708__auto__ = (function (){var statearr_40320 = f__37707__auto__.call(null);
(statearr_40320[(6)] = c__37706__auto__);

return statearr_40320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__,map__40077,map__40077__$1,opts,before_jsload,on_jsload,reload_dependents,map__40078,map__40078__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37706__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40383,link){
var map__40384 = p__40383;
var map__40384__$1 = ((((!((map__40384 == null)))?((((map__40384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40384):map__40384);
var file = cljs.core.get.call(null,map__40384__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40384,map__40384__$1,file){
return (function (p1__40381_SHARP_,p2__40382_SHARP_){
if(cljs.core._EQ_.call(null,p1__40381_SHARP_,p2__40382_SHARP_)){
return p1__40381_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40384,map__40384__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40387){
var map__40388 = p__40387;
var map__40388__$1 = ((((!((map__40388 == null)))?((((map__40388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40388):map__40388);
var match_length = cljs.core.get.call(null,map__40388__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40388__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40386_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40386_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40390_SHARP_,p2__40391_SHARP_){
return cljs.core.assoc.call(null,p1__40390_SHARP_,cljs.core.get.call(null,p2__40391_SHARP_,key),p2__40391_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_40392 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40392);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40392);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40393,p__40394){
var map__40395 = p__40393;
var map__40395__$1 = ((((!((map__40395 == null)))?((((map__40395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40395):map__40395);
var on_cssload = cljs.core.get.call(null,map__40395__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40396 = p__40394;
var map__40396__$1 = ((((!((map__40396 == null)))?((((map__40396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40396):map__40396);
var files_msg = map__40396__$1;
var files = cljs.core.get.call(null,map__40396__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1503758427438
