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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36843_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36843_SHARP_));
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
var seq__36844 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36845 = null;
var count__36846 = (0);
var i__36847 = (0);
while(true){
if((i__36847 < count__36846)){
var n = cljs.core._nth.call(null,chunk__36845,i__36847);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36848 = seq__36844;
var G__36849 = chunk__36845;
var G__36850 = count__36846;
var G__36851 = (i__36847 + (1));
seq__36844 = G__36848;
chunk__36845 = G__36849;
count__36846 = G__36850;
i__36847 = G__36851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36844);
if(temp__4657__auto__){
var seq__36844__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36844__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__36844__$1);
var G__36852 = cljs.core.chunk_rest.call(null,seq__36844__$1);
var G__36853 = c__29272__auto__;
var G__36854 = cljs.core.count.call(null,c__29272__auto__);
var G__36855 = (0);
seq__36844 = G__36852;
chunk__36845 = G__36853;
count__36846 = G__36854;
i__36847 = G__36855;
continue;
} else {
var n = cljs.core.first.call(null,seq__36844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36856 = cljs.core.next.call(null,seq__36844__$1);
var G__36857 = null;
var G__36858 = (0);
var G__36859 = (0);
seq__36844 = G__36856;
chunk__36845 = G__36857;
count__36846 = G__36858;
i__36847 = G__36859;
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

var seq__36869_36877 = cljs.core.seq.call(null,deps);
var chunk__36870_36878 = null;
var count__36871_36879 = (0);
var i__36872_36880 = (0);
while(true){
if((i__36872_36880 < count__36871_36879)){
var dep_36881 = cljs.core._nth.call(null,chunk__36870_36878,i__36872_36880);
topo_sort_helper_STAR_.call(null,dep_36881,(depth + (1)),state);

var G__36882 = seq__36869_36877;
var G__36883 = chunk__36870_36878;
var G__36884 = count__36871_36879;
var G__36885 = (i__36872_36880 + (1));
seq__36869_36877 = G__36882;
chunk__36870_36878 = G__36883;
count__36871_36879 = G__36884;
i__36872_36880 = G__36885;
continue;
} else {
var temp__4657__auto___36886 = cljs.core.seq.call(null,seq__36869_36877);
if(temp__4657__auto___36886){
var seq__36869_36887__$1 = temp__4657__auto___36886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36869_36887__$1)){
var c__29272__auto___36888 = cljs.core.chunk_first.call(null,seq__36869_36887__$1);
var G__36889 = cljs.core.chunk_rest.call(null,seq__36869_36887__$1);
var G__36890 = c__29272__auto___36888;
var G__36891 = cljs.core.count.call(null,c__29272__auto___36888);
var G__36892 = (0);
seq__36869_36877 = G__36889;
chunk__36870_36878 = G__36890;
count__36871_36879 = G__36891;
i__36872_36880 = G__36892;
continue;
} else {
var dep_36893 = cljs.core.first.call(null,seq__36869_36887__$1);
topo_sort_helper_STAR_.call(null,dep_36893,(depth + (1)),state);

var G__36894 = cljs.core.next.call(null,seq__36869_36887__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36869_36877 = G__36894;
chunk__36870_36878 = G__36895;
count__36871_36879 = G__36896;
i__36872_36880 = G__36897;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36873){
var vec__36874 = p__36873;
var seq__36875 = cljs.core.seq.call(null,vec__36874);
var first__36876 = cljs.core.first.call(null,seq__36875);
var seq__36875__$1 = cljs.core.next.call(null,seq__36875);
var x = first__36876;
var xs = seq__36875__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36874,seq__36875,first__36876,seq__36875__$1,x,xs,get_deps__$1){
return (function (p1__36860_SHARP_){
return clojure.set.difference.call(null,p1__36860_SHARP_,x);
});})(vec__36874,seq__36875,first__36876,seq__36875__$1,x,xs,get_deps__$1))
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
var seq__36898 = cljs.core.seq.call(null,provides);
var chunk__36899 = null;
var count__36900 = (0);
var i__36901 = (0);
while(true){
if((i__36901 < count__36900)){
var prov = cljs.core._nth.call(null,chunk__36899,i__36901);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36902_36910 = cljs.core.seq.call(null,requires);
var chunk__36903_36911 = null;
var count__36904_36912 = (0);
var i__36905_36913 = (0);
while(true){
if((i__36905_36913 < count__36904_36912)){
var req_36914 = cljs.core._nth.call(null,chunk__36903_36911,i__36905_36913);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36914,prov);

var G__36915 = seq__36902_36910;
var G__36916 = chunk__36903_36911;
var G__36917 = count__36904_36912;
var G__36918 = (i__36905_36913 + (1));
seq__36902_36910 = G__36915;
chunk__36903_36911 = G__36916;
count__36904_36912 = G__36917;
i__36905_36913 = G__36918;
continue;
} else {
var temp__4657__auto___36919 = cljs.core.seq.call(null,seq__36902_36910);
if(temp__4657__auto___36919){
var seq__36902_36920__$1 = temp__4657__auto___36919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36902_36920__$1)){
var c__29272__auto___36921 = cljs.core.chunk_first.call(null,seq__36902_36920__$1);
var G__36922 = cljs.core.chunk_rest.call(null,seq__36902_36920__$1);
var G__36923 = c__29272__auto___36921;
var G__36924 = cljs.core.count.call(null,c__29272__auto___36921);
var G__36925 = (0);
seq__36902_36910 = G__36922;
chunk__36903_36911 = G__36923;
count__36904_36912 = G__36924;
i__36905_36913 = G__36925;
continue;
} else {
var req_36926 = cljs.core.first.call(null,seq__36902_36920__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36926,prov);

var G__36927 = cljs.core.next.call(null,seq__36902_36920__$1);
var G__36928 = null;
var G__36929 = (0);
var G__36930 = (0);
seq__36902_36910 = G__36927;
chunk__36903_36911 = G__36928;
count__36904_36912 = G__36929;
i__36905_36913 = G__36930;
continue;
}
} else {
}
}
break;
}

var G__36931 = seq__36898;
var G__36932 = chunk__36899;
var G__36933 = count__36900;
var G__36934 = (i__36901 + (1));
seq__36898 = G__36931;
chunk__36899 = G__36932;
count__36900 = G__36933;
i__36901 = G__36934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36898);
if(temp__4657__auto__){
var seq__36898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36898__$1)){
var c__29272__auto__ = cljs.core.chunk_first.call(null,seq__36898__$1);
var G__36935 = cljs.core.chunk_rest.call(null,seq__36898__$1);
var G__36936 = c__29272__auto__;
var G__36937 = cljs.core.count.call(null,c__29272__auto__);
var G__36938 = (0);
seq__36898 = G__36935;
chunk__36899 = G__36936;
count__36900 = G__36937;
i__36901 = G__36938;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36898__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36906_36939 = cljs.core.seq.call(null,requires);
var chunk__36907_36940 = null;
var count__36908_36941 = (0);
var i__36909_36942 = (0);
while(true){
if((i__36909_36942 < count__36908_36941)){
var req_36943 = cljs.core._nth.call(null,chunk__36907_36940,i__36909_36942);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36943,prov);

var G__36944 = seq__36906_36939;
var G__36945 = chunk__36907_36940;
var G__36946 = count__36908_36941;
var G__36947 = (i__36909_36942 + (1));
seq__36906_36939 = G__36944;
chunk__36907_36940 = G__36945;
count__36908_36941 = G__36946;
i__36909_36942 = G__36947;
continue;
} else {
var temp__4657__auto___36948__$1 = cljs.core.seq.call(null,seq__36906_36939);
if(temp__4657__auto___36948__$1){
var seq__36906_36949__$1 = temp__4657__auto___36948__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36906_36949__$1)){
var c__29272__auto___36950 = cljs.core.chunk_first.call(null,seq__36906_36949__$1);
var G__36951 = cljs.core.chunk_rest.call(null,seq__36906_36949__$1);
var G__36952 = c__29272__auto___36950;
var G__36953 = cljs.core.count.call(null,c__29272__auto___36950);
var G__36954 = (0);
seq__36906_36939 = G__36951;
chunk__36907_36940 = G__36952;
count__36908_36941 = G__36953;
i__36909_36942 = G__36954;
continue;
} else {
var req_36955 = cljs.core.first.call(null,seq__36906_36949__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36955,prov);

var G__36956 = cljs.core.next.call(null,seq__36906_36949__$1);
var G__36957 = null;
var G__36958 = (0);
var G__36959 = (0);
seq__36906_36939 = G__36956;
chunk__36907_36940 = G__36957;
count__36908_36941 = G__36958;
i__36909_36942 = G__36959;
continue;
}
} else {
}
}
break;
}

var G__36960 = cljs.core.next.call(null,seq__36898__$1);
var G__36961 = null;
var G__36962 = (0);
var G__36963 = (0);
seq__36898 = G__36960;
chunk__36899 = G__36961;
count__36900 = G__36962;
i__36901 = G__36963;
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
var seq__36964_36968 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36965_36969 = null;
var count__36966_36970 = (0);
var i__36967_36971 = (0);
while(true){
if((i__36967_36971 < count__36966_36970)){
var ns_36972 = cljs.core._nth.call(null,chunk__36965_36969,i__36967_36971);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36972);

var G__36973 = seq__36964_36968;
var G__36974 = chunk__36965_36969;
var G__36975 = count__36966_36970;
var G__36976 = (i__36967_36971 + (1));
seq__36964_36968 = G__36973;
chunk__36965_36969 = G__36974;
count__36966_36970 = G__36975;
i__36967_36971 = G__36976;
continue;
} else {
var temp__4657__auto___36977 = cljs.core.seq.call(null,seq__36964_36968);
if(temp__4657__auto___36977){
var seq__36964_36978__$1 = temp__4657__auto___36977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36964_36978__$1)){
var c__29272__auto___36979 = cljs.core.chunk_first.call(null,seq__36964_36978__$1);
var G__36980 = cljs.core.chunk_rest.call(null,seq__36964_36978__$1);
var G__36981 = c__29272__auto___36979;
var G__36982 = cljs.core.count.call(null,c__29272__auto___36979);
var G__36983 = (0);
seq__36964_36968 = G__36980;
chunk__36965_36969 = G__36981;
count__36966_36970 = G__36982;
i__36967_36971 = G__36983;
continue;
} else {
var ns_36984 = cljs.core.first.call(null,seq__36964_36978__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36984);

var G__36985 = cljs.core.next.call(null,seq__36964_36978__$1);
var G__36986 = null;
var G__36987 = (0);
var G__36988 = (0);
seq__36964_36968 = G__36985;
chunk__36965_36969 = G__36986;
count__36966_36970 = G__36987;
i__36967_36971 = G__36988;
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
var G__36989__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36989 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36990__i = 0, G__36990__a = new Array(arguments.length -  0);
while (G__36990__i < G__36990__a.length) {G__36990__a[G__36990__i] = arguments[G__36990__i + 0]; ++G__36990__i;}
  args = new cljs.core.IndexedSeq(G__36990__a,0,null);
} 
return G__36989__delegate.call(this,args);};
G__36989.cljs$lang$maxFixedArity = 0;
G__36989.cljs$lang$applyTo = (function (arglist__36991){
var args = cljs.core.seq(arglist__36991);
return G__36989__delegate(args);
});
G__36989.cljs$core$IFn$_invoke$arity$variadic = G__36989__delegate;
return G__36989;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36992_SHARP_,p2__36993_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36992_SHARP_)].join('')),p2__36993_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36994_SHARP_,p2__36995_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36994_SHARP_)].join(''),p2__36995_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36996 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36996.addCallback(((function (G__36996){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36996))
);

G__36996.addErrback(((function (G__36996){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36996))
);

return G__36996;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36997 = cljs.core._EQ_;
var expr__36998 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36997.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36998))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36997,expr__36998){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36997,expr__36998))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36997,expr__36998){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37000){if((e37000 instanceof Error)){
var e = e37000;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37000;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36997,expr__36998))
} else {
if(cljs.core.truth_(pred__36997.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36998))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36997.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36998))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36997.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36998))){
return ((function (pred__36997,expr__36998){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37001){if((e37001 instanceof Error)){
var e = e37001;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37001;

}
}})());
});
;})(pred__36997,expr__36998))
} else {
return ((function (pred__36997,expr__36998){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36997,expr__36998))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37002,callback){
var map__37003 = p__37002;
var map__37003__$1 = ((((!((map__37003 == null)))?((((map__37003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37003):map__37003);
var file_msg = map__37003__$1;
var request_url = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37003,map__37003__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37003,map__37003__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__){
return (function (state_37027){
var state_val_37028 = (state_37027[(1)]);
if((state_val_37028 === (7))){
var inst_37023 = (state_37027[(2)]);
var state_37027__$1 = state_37027;
var statearr_37029_37046 = state_37027__$1;
(statearr_37029_37046[(2)] = inst_37023);

(statearr_37029_37046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (1))){
var state_37027__$1 = state_37027;
var statearr_37030_37047 = state_37027__$1;
(statearr_37030_37047[(2)] = null);

(statearr_37030_37047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (4))){
var inst_37007 = (state_37027[(7)]);
var inst_37007__$1 = (state_37027[(2)]);
var state_37027__$1 = (function (){var statearr_37031 = state_37027;
(statearr_37031[(7)] = inst_37007__$1);

return statearr_37031;
})();
if(cljs.core.truth_(inst_37007__$1)){
var statearr_37032_37048 = state_37027__$1;
(statearr_37032_37048[(1)] = (5));

} else {
var statearr_37033_37049 = state_37027__$1;
(statearr_37033_37049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (6))){
var state_37027__$1 = state_37027;
var statearr_37034_37050 = state_37027__$1;
(statearr_37034_37050[(2)] = null);

(statearr_37034_37050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (3))){
var inst_37025 = (state_37027[(2)]);
var state_37027__$1 = state_37027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37027__$1,inst_37025);
} else {
if((state_val_37028 === (2))){
var state_37027__$1 = state_37027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37027__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37028 === (11))){
var inst_37019 = (state_37027[(2)]);
var state_37027__$1 = (function (){var statearr_37035 = state_37027;
(statearr_37035[(8)] = inst_37019);

return statearr_37035;
})();
var statearr_37036_37051 = state_37027__$1;
(statearr_37036_37051[(2)] = null);

(statearr_37036_37051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (9))){
var inst_37011 = (state_37027[(9)]);
var inst_37013 = (state_37027[(10)]);
var inst_37015 = inst_37013.call(null,inst_37011);
var state_37027__$1 = state_37027;
var statearr_37037_37052 = state_37027__$1;
(statearr_37037_37052[(2)] = inst_37015);

(statearr_37037_37052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (5))){
var inst_37007 = (state_37027[(7)]);
var inst_37009 = figwheel.client.file_reloading.blocking_load.call(null,inst_37007);
var state_37027__$1 = state_37027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37027__$1,(8),inst_37009);
} else {
if((state_val_37028 === (10))){
var inst_37011 = (state_37027[(9)]);
var inst_37017 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37011);
var state_37027__$1 = state_37027;
var statearr_37038_37053 = state_37027__$1;
(statearr_37038_37053[(2)] = inst_37017);

(statearr_37038_37053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37028 === (8))){
var inst_37013 = (state_37027[(10)]);
var inst_37007 = (state_37027[(7)]);
var inst_37011 = (state_37027[(2)]);
var inst_37012 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37013__$1 = cljs.core.get.call(null,inst_37012,inst_37007);
var state_37027__$1 = (function (){var statearr_37039 = state_37027;
(statearr_37039[(9)] = inst_37011);

(statearr_37039[(10)] = inst_37013__$1);

return statearr_37039;
})();
if(cljs.core.truth_(inst_37013__$1)){
var statearr_37040_37054 = state_37027__$1;
(statearr_37040_37054[(1)] = (9));

} else {
var statearr_37041_37055 = state_37027__$1;
(statearr_37041_37055[(1)] = (10));

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
});})(c__33471__auto__))
;
return ((function (switch__33365__auto__,c__33471__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33366__auto__ = null;
var figwheel$client$file_reloading$state_machine__33366__auto____0 = (function (){
var statearr_37042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37042[(0)] = figwheel$client$file_reloading$state_machine__33366__auto__);

(statearr_37042[(1)] = (1));

return statearr_37042;
});
var figwheel$client$file_reloading$state_machine__33366__auto____1 = (function (state_37027){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_37027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e37043){if((e37043 instanceof Object)){
var ex__33369__auto__ = e37043;
var statearr_37044_37056 = state_37027;
(statearr_37044_37056[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37057 = state_37027;
state_37027 = G__37057;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33366__auto__ = function(state_37027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33366__auto____1.call(this,state_37027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33366__auto____0;
figwheel$client$file_reloading$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33366__auto____1;
return figwheel$client$file_reloading$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_37045 = f__33472__auto__.call(null);
(statearr_37045[(6)] = c__33471__auto__);

return statearr_37045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37058,callback){
var map__37059 = p__37058;
var map__37059__$1 = ((((!((map__37059 == null)))?((((map__37059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37059):map__37059);
var file_msg = map__37059__$1;
var namespace = cljs.core.get.call(null,map__37059__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37059,map__37059__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37059,map__37059__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37061){
var map__37062 = p__37061;
var map__37062__$1 = ((((!((map__37062 == null)))?((((map__37062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37062):map__37062);
var file_msg = map__37062__$1;
var namespace = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37064){
var map__37065 = p__37064;
var map__37065__$1 = ((((!((map__37065 == null)))?((((map__37065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37065):map__37065);
var file_msg = map__37065__$1;
var namespace = cljs.core.get.call(null,map__37065__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37067,callback){
var map__37068 = p__37067;
var map__37068__$1 = ((((!((map__37068 == null)))?((((map__37068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37068):map__37068);
var file_msg = map__37068__$1;
var request_url = cljs.core.get.call(null,map__37068__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33471__auto___37118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___37118,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___37118,out){
return (function (state_37103){
var state_val_37104 = (state_37103[(1)]);
if((state_val_37104 === (1))){
var inst_37077 = cljs.core.seq.call(null,files);
var inst_37078 = cljs.core.first.call(null,inst_37077);
var inst_37079 = cljs.core.next.call(null,inst_37077);
var inst_37080 = files;
var state_37103__$1 = (function (){var statearr_37105 = state_37103;
(statearr_37105[(7)] = inst_37078);

(statearr_37105[(8)] = inst_37080);

(statearr_37105[(9)] = inst_37079);

return statearr_37105;
})();
var statearr_37106_37119 = state_37103__$1;
(statearr_37106_37119[(2)] = null);

(statearr_37106_37119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (2))){
var inst_37086 = (state_37103[(10)]);
var inst_37080 = (state_37103[(8)]);
var inst_37085 = cljs.core.seq.call(null,inst_37080);
var inst_37086__$1 = cljs.core.first.call(null,inst_37085);
var inst_37087 = cljs.core.next.call(null,inst_37085);
var inst_37088 = (inst_37086__$1 == null);
var inst_37089 = cljs.core.not.call(null,inst_37088);
var state_37103__$1 = (function (){var statearr_37107 = state_37103;
(statearr_37107[(10)] = inst_37086__$1);

(statearr_37107[(11)] = inst_37087);

return statearr_37107;
})();
if(inst_37089){
var statearr_37108_37120 = state_37103__$1;
(statearr_37108_37120[(1)] = (4));

} else {
var statearr_37109_37121 = state_37103__$1;
(statearr_37109_37121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (3))){
var inst_37101 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37103__$1,inst_37101);
} else {
if((state_val_37104 === (4))){
var inst_37086 = (state_37103[(10)]);
var inst_37091 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37086);
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37103__$1,(7),inst_37091);
} else {
if((state_val_37104 === (5))){
var inst_37097 = cljs.core.async.close_BANG_.call(null,out);
var state_37103__$1 = state_37103;
var statearr_37110_37122 = state_37103__$1;
(statearr_37110_37122[(2)] = inst_37097);

(statearr_37110_37122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (6))){
var inst_37099 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37111_37123 = state_37103__$1;
(statearr_37111_37123[(2)] = inst_37099);

(statearr_37111_37123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (7))){
var inst_37087 = (state_37103[(11)]);
var inst_37093 = (state_37103[(2)]);
var inst_37094 = cljs.core.async.put_BANG_.call(null,out,inst_37093);
var inst_37080 = inst_37087;
var state_37103__$1 = (function (){var statearr_37112 = state_37103;
(statearr_37112[(12)] = inst_37094);

(statearr_37112[(8)] = inst_37080);

return statearr_37112;
})();
var statearr_37113_37124 = state_37103__$1;
(statearr_37113_37124[(2)] = null);

(statearr_37113_37124[(1)] = (2));


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
});})(c__33471__auto___37118,out))
;
return ((function (switch__33365__auto__,c__33471__auto___37118,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto____0 = (function (){
var statearr_37114 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37114[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto__);

(statearr_37114[(1)] = (1));

return statearr_37114;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto____1 = (function (state_37103){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_37103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e37115){if((e37115 instanceof Object)){
var ex__33369__auto__ = e37115;
var statearr_37116_37125 = state_37103;
(statearr_37116_37125[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37126 = state_37103;
state_37103 = G__37126;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto__ = function(state_37103){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto____1.call(this,state_37103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___37118,out))
})();
var state__33473__auto__ = (function (){var statearr_37117 = f__33472__auto__.call(null);
(statearr_37117[(6)] = c__33471__auto___37118);

return statearr_37117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___37118,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37127,opts){
var map__37128 = p__37127;
var map__37128__$1 = ((((!((map__37128 == null)))?((((map__37128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37128):map__37128);
var eval_body = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e37130){var e = e37130;
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
return (function (p1__37131_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37131_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37132){
var vec__37133 = p__37132;
var k = cljs.core.nth.call(null,vec__37133,(0),null);
var v = cljs.core.nth.call(null,vec__37133,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37136){
var vec__37137 = p__37136;
var k = cljs.core.nth.call(null,vec__37137,(0),null);
var v = cljs.core.nth.call(null,vec__37137,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37143,p__37144){
var map__37145 = p__37143;
var map__37145__$1 = ((((!((map__37145 == null)))?((((map__37145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37145):map__37145);
var opts = map__37145__$1;
var before_jsload = cljs.core.get.call(null,map__37145__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37145__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37145__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37146 = p__37144;
var map__37146__$1 = ((((!((map__37146 == null)))?((((map__37146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37146):map__37146);
var msg = map__37146__$1;
var files = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37146__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37300){
var state_val_37301 = (state_37300[(1)]);
if((state_val_37301 === (7))){
var inst_37160 = (state_37300[(7)]);
var inst_37162 = (state_37300[(8)]);
var inst_37163 = (state_37300[(9)]);
var inst_37161 = (state_37300[(10)]);
var inst_37168 = cljs.core._nth.call(null,inst_37161,inst_37163);
var inst_37169 = figwheel.client.file_reloading.eval_body.call(null,inst_37168,opts);
var inst_37170 = (inst_37163 + (1));
var tmp37302 = inst_37160;
var tmp37303 = inst_37162;
var tmp37304 = inst_37161;
var inst_37160__$1 = tmp37302;
var inst_37161__$1 = tmp37304;
var inst_37162__$1 = tmp37303;
var inst_37163__$1 = inst_37170;
var state_37300__$1 = (function (){var statearr_37305 = state_37300;
(statearr_37305[(7)] = inst_37160__$1);

(statearr_37305[(11)] = inst_37169);

(statearr_37305[(8)] = inst_37162__$1);

(statearr_37305[(9)] = inst_37163__$1);

(statearr_37305[(10)] = inst_37161__$1);

return statearr_37305;
})();
var statearr_37306_37389 = state_37300__$1;
(statearr_37306_37389[(2)] = null);

(statearr_37306_37389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (20))){
var inst_37203 = (state_37300[(12)]);
var inst_37211 = figwheel.client.file_reloading.sort_files.call(null,inst_37203);
var state_37300__$1 = state_37300;
var statearr_37307_37390 = state_37300__$1;
(statearr_37307_37390[(2)] = inst_37211);

(statearr_37307_37390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (27))){
var state_37300__$1 = state_37300;
var statearr_37308_37391 = state_37300__$1;
(statearr_37308_37391[(2)] = null);

(statearr_37308_37391[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (1))){
var inst_37152 = (state_37300[(13)]);
var inst_37149 = before_jsload.call(null,files);
var inst_37150 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37151 = (function (){return ((function (inst_37152,inst_37149,inst_37150,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37140_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37140_SHARP_);
});
;})(inst_37152,inst_37149,inst_37150,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37152__$1 = cljs.core.filter.call(null,inst_37151,files);
var inst_37153 = cljs.core.not_empty.call(null,inst_37152__$1);
var state_37300__$1 = (function (){var statearr_37309 = state_37300;
(statearr_37309[(13)] = inst_37152__$1);

(statearr_37309[(14)] = inst_37150);

(statearr_37309[(15)] = inst_37149);

return statearr_37309;
})();
if(cljs.core.truth_(inst_37153)){
var statearr_37310_37392 = state_37300__$1;
(statearr_37310_37392[(1)] = (2));

} else {
var statearr_37311_37393 = state_37300__$1;
(statearr_37311_37393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (24))){
var state_37300__$1 = state_37300;
var statearr_37312_37394 = state_37300__$1;
(statearr_37312_37394[(2)] = null);

(statearr_37312_37394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (39))){
var inst_37253 = (state_37300[(16)]);
var state_37300__$1 = state_37300;
var statearr_37313_37395 = state_37300__$1;
(statearr_37313_37395[(2)] = inst_37253);

(statearr_37313_37395[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (46))){
var inst_37295 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
var statearr_37314_37396 = state_37300__$1;
(statearr_37314_37396[(2)] = inst_37295);

(statearr_37314_37396[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (4))){
var inst_37197 = (state_37300[(2)]);
var inst_37198 = cljs.core.List.EMPTY;
var inst_37199 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37198);
var inst_37200 = (function (){return ((function (inst_37197,inst_37198,inst_37199,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37141_SHARP_){
var and__28421__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37141_SHARP_);
if(cljs.core.truth_(and__28421__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37141_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37141_SHARP_)));
} else {
return and__28421__auto__;
}
});
;})(inst_37197,inst_37198,inst_37199,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37201 = cljs.core.filter.call(null,inst_37200,files);
var inst_37202 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37203 = cljs.core.concat.call(null,inst_37201,inst_37202);
var state_37300__$1 = (function (){var statearr_37315 = state_37300;
(statearr_37315[(12)] = inst_37203);

(statearr_37315[(17)] = inst_37197);

(statearr_37315[(18)] = inst_37199);

return statearr_37315;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37316_37397 = state_37300__$1;
(statearr_37316_37397[(1)] = (16));

} else {
var statearr_37317_37398 = state_37300__$1;
(statearr_37317_37398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (15))){
var inst_37187 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
var statearr_37318_37399 = state_37300__$1;
(statearr_37318_37399[(2)] = inst_37187);

(statearr_37318_37399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (21))){
var inst_37213 = (state_37300[(19)]);
var inst_37213__$1 = (state_37300[(2)]);
var inst_37214 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37213__$1);
var state_37300__$1 = (function (){var statearr_37319 = state_37300;
(statearr_37319[(19)] = inst_37213__$1);

return statearr_37319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37300__$1,(22),inst_37214);
} else {
if((state_val_37301 === (31))){
var inst_37298 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37300__$1,inst_37298);
} else {
if((state_val_37301 === (32))){
var inst_37253 = (state_37300[(16)]);
var inst_37258 = inst_37253.cljs$lang$protocol_mask$partition0$;
var inst_37259 = (inst_37258 & (64));
var inst_37260 = inst_37253.cljs$core$ISeq$;
var inst_37261 = (cljs.core.PROTOCOL_SENTINEL === inst_37260);
var inst_37262 = (inst_37259) || (inst_37261);
var state_37300__$1 = state_37300;
if(cljs.core.truth_(inst_37262)){
var statearr_37320_37400 = state_37300__$1;
(statearr_37320_37400[(1)] = (35));

} else {
var statearr_37321_37401 = state_37300__$1;
(statearr_37321_37401[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (40))){
var inst_37275 = (state_37300[(20)]);
var inst_37274 = (state_37300[(2)]);
var inst_37275__$1 = cljs.core.get.call(null,inst_37274,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37276 = cljs.core.get.call(null,inst_37274,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37277 = cljs.core.not_empty.call(null,inst_37275__$1);
var state_37300__$1 = (function (){var statearr_37322 = state_37300;
(statearr_37322[(21)] = inst_37276);

(statearr_37322[(20)] = inst_37275__$1);

return statearr_37322;
})();
if(cljs.core.truth_(inst_37277)){
var statearr_37323_37402 = state_37300__$1;
(statearr_37323_37402[(1)] = (41));

} else {
var statearr_37324_37403 = state_37300__$1;
(statearr_37324_37403[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (33))){
var state_37300__$1 = state_37300;
var statearr_37325_37404 = state_37300__$1;
(statearr_37325_37404[(2)] = false);

(statearr_37325_37404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (13))){
var inst_37173 = (state_37300[(22)]);
var inst_37177 = cljs.core.chunk_first.call(null,inst_37173);
var inst_37178 = cljs.core.chunk_rest.call(null,inst_37173);
var inst_37179 = cljs.core.count.call(null,inst_37177);
var inst_37160 = inst_37178;
var inst_37161 = inst_37177;
var inst_37162 = inst_37179;
var inst_37163 = (0);
var state_37300__$1 = (function (){var statearr_37326 = state_37300;
(statearr_37326[(7)] = inst_37160);

(statearr_37326[(8)] = inst_37162);

(statearr_37326[(9)] = inst_37163);

(statearr_37326[(10)] = inst_37161);

return statearr_37326;
})();
var statearr_37327_37405 = state_37300__$1;
(statearr_37327_37405[(2)] = null);

(statearr_37327_37405[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (22))){
var inst_37217 = (state_37300[(23)]);
var inst_37221 = (state_37300[(24)]);
var inst_37216 = (state_37300[(25)]);
var inst_37213 = (state_37300[(19)]);
var inst_37216__$1 = (state_37300[(2)]);
var inst_37217__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37216__$1);
var inst_37218 = (function (){var all_files = inst_37213;
var res_SINGLEQUOTE_ = inst_37216__$1;
var res = inst_37217__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37217,inst_37221,inst_37216,inst_37213,inst_37216__$1,inst_37217__$1,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37142_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37142_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37217,inst_37221,inst_37216,inst_37213,inst_37216__$1,inst_37217__$1,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37219 = cljs.core.filter.call(null,inst_37218,inst_37216__$1);
var inst_37220 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37221__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37220);
var inst_37222 = cljs.core.not_empty.call(null,inst_37221__$1);
var state_37300__$1 = (function (){var statearr_37328 = state_37300;
(statearr_37328[(23)] = inst_37217__$1);

(statearr_37328[(26)] = inst_37219);

(statearr_37328[(24)] = inst_37221__$1);

(statearr_37328[(25)] = inst_37216__$1);

return statearr_37328;
})();
if(cljs.core.truth_(inst_37222)){
var statearr_37329_37406 = state_37300__$1;
(statearr_37329_37406[(1)] = (23));

} else {
var statearr_37330_37407 = state_37300__$1;
(statearr_37330_37407[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (36))){
var state_37300__$1 = state_37300;
var statearr_37331_37408 = state_37300__$1;
(statearr_37331_37408[(2)] = false);

(statearr_37331_37408[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (41))){
var inst_37275 = (state_37300[(20)]);
var inst_37279 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37280 = cljs.core.map.call(null,inst_37279,inst_37275);
var inst_37281 = cljs.core.pr_str.call(null,inst_37280);
var inst_37282 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37281)].join('');
var inst_37283 = figwheel.client.utils.log.call(null,inst_37282);
var state_37300__$1 = state_37300;
var statearr_37332_37409 = state_37300__$1;
(statearr_37332_37409[(2)] = inst_37283);

(statearr_37332_37409[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (43))){
var inst_37276 = (state_37300[(21)]);
var inst_37286 = (state_37300[(2)]);
var inst_37287 = cljs.core.not_empty.call(null,inst_37276);
var state_37300__$1 = (function (){var statearr_37333 = state_37300;
(statearr_37333[(27)] = inst_37286);

return statearr_37333;
})();
if(cljs.core.truth_(inst_37287)){
var statearr_37334_37410 = state_37300__$1;
(statearr_37334_37410[(1)] = (44));

} else {
var statearr_37335_37411 = state_37300__$1;
(statearr_37335_37411[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (29))){
var inst_37217 = (state_37300[(23)]);
var inst_37219 = (state_37300[(26)]);
var inst_37221 = (state_37300[(24)]);
var inst_37216 = (state_37300[(25)]);
var inst_37253 = (state_37300[(16)]);
var inst_37213 = (state_37300[(19)]);
var inst_37249 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37252 = (function (){var all_files = inst_37213;
var res_SINGLEQUOTE_ = inst_37216;
var res = inst_37217;
var files_not_loaded = inst_37219;
var dependencies_that_loaded = inst_37221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37253,inst_37213,inst_37249,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37251){
var map__37336 = p__37251;
var map__37336__$1 = ((((!((map__37336 == null)))?((((map__37336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37336):map__37336);
var namespace = cljs.core.get.call(null,map__37336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37253,inst_37213,inst_37249,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37253__$1 = cljs.core.group_by.call(null,inst_37252,inst_37219);
var inst_37255 = (inst_37253__$1 == null);
var inst_37256 = cljs.core.not.call(null,inst_37255);
var state_37300__$1 = (function (){var statearr_37338 = state_37300;
(statearr_37338[(28)] = inst_37249);

(statearr_37338[(16)] = inst_37253__$1);

return statearr_37338;
})();
if(inst_37256){
var statearr_37339_37412 = state_37300__$1;
(statearr_37339_37412[(1)] = (32));

} else {
var statearr_37340_37413 = state_37300__$1;
(statearr_37340_37413[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (44))){
var inst_37276 = (state_37300[(21)]);
var inst_37289 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37276);
var inst_37290 = cljs.core.pr_str.call(null,inst_37289);
var inst_37291 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37290)].join('');
var inst_37292 = figwheel.client.utils.log.call(null,inst_37291);
var state_37300__$1 = state_37300;
var statearr_37341_37414 = state_37300__$1;
(statearr_37341_37414[(2)] = inst_37292);

(statearr_37341_37414[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (6))){
var inst_37194 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
var statearr_37342_37415 = state_37300__$1;
(statearr_37342_37415[(2)] = inst_37194);

(statearr_37342_37415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (28))){
var inst_37219 = (state_37300[(26)]);
var inst_37246 = (state_37300[(2)]);
var inst_37247 = cljs.core.not_empty.call(null,inst_37219);
var state_37300__$1 = (function (){var statearr_37343 = state_37300;
(statearr_37343[(29)] = inst_37246);

return statearr_37343;
})();
if(cljs.core.truth_(inst_37247)){
var statearr_37344_37416 = state_37300__$1;
(statearr_37344_37416[(1)] = (29));

} else {
var statearr_37345_37417 = state_37300__$1;
(statearr_37345_37417[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (25))){
var inst_37217 = (state_37300[(23)]);
var inst_37233 = (state_37300[(2)]);
var inst_37234 = cljs.core.not_empty.call(null,inst_37217);
var state_37300__$1 = (function (){var statearr_37346 = state_37300;
(statearr_37346[(30)] = inst_37233);

return statearr_37346;
})();
if(cljs.core.truth_(inst_37234)){
var statearr_37347_37418 = state_37300__$1;
(statearr_37347_37418[(1)] = (26));

} else {
var statearr_37348_37419 = state_37300__$1;
(statearr_37348_37419[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (34))){
var inst_37269 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
if(cljs.core.truth_(inst_37269)){
var statearr_37349_37420 = state_37300__$1;
(statearr_37349_37420[(1)] = (38));

} else {
var statearr_37350_37421 = state_37300__$1;
(statearr_37350_37421[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (17))){
var state_37300__$1 = state_37300;
var statearr_37351_37422 = state_37300__$1;
(statearr_37351_37422[(2)] = recompile_dependents);

(statearr_37351_37422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (3))){
var state_37300__$1 = state_37300;
var statearr_37352_37423 = state_37300__$1;
(statearr_37352_37423[(2)] = null);

(statearr_37352_37423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (12))){
var inst_37190 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
var statearr_37353_37424 = state_37300__$1;
(statearr_37353_37424[(2)] = inst_37190);

(statearr_37353_37424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (2))){
var inst_37152 = (state_37300[(13)]);
var inst_37159 = cljs.core.seq.call(null,inst_37152);
var inst_37160 = inst_37159;
var inst_37161 = null;
var inst_37162 = (0);
var inst_37163 = (0);
var state_37300__$1 = (function (){var statearr_37354 = state_37300;
(statearr_37354[(7)] = inst_37160);

(statearr_37354[(8)] = inst_37162);

(statearr_37354[(9)] = inst_37163);

(statearr_37354[(10)] = inst_37161);

return statearr_37354;
})();
var statearr_37355_37425 = state_37300__$1;
(statearr_37355_37425[(2)] = null);

(statearr_37355_37425[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (23))){
var inst_37217 = (state_37300[(23)]);
var inst_37219 = (state_37300[(26)]);
var inst_37221 = (state_37300[(24)]);
var inst_37216 = (state_37300[(25)]);
var inst_37213 = (state_37300[(19)]);
var inst_37224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37226 = (function (){var all_files = inst_37213;
var res_SINGLEQUOTE_ = inst_37216;
var res = inst_37217;
var files_not_loaded = inst_37219;
var dependencies_that_loaded = inst_37221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37213,inst_37224,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37225){
var map__37356 = p__37225;
var map__37356__$1 = ((((!((map__37356 == null)))?((((map__37356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37356):map__37356);
var request_url = cljs.core.get.call(null,map__37356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37213,inst_37224,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37227 = cljs.core.reverse.call(null,inst_37221);
var inst_37228 = cljs.core.map.call(null,inst_37226,inst_37227);
var inst_37229 = cljs.core.pr_str.call(null,inst_37228);
var inst_37230 = figwheel.client.utils.log.call(null,inst_37229);
var state_37300__$1 = (function (){var statearr_37358 = state_37300;
(statearr_37358[(31)] = inst_37224);

return statearr_37358;
})();
var statearr_37359_37426 = state_37300__$1;
(statearr_37359_37426[(2)] = inst_37230);

(statearr_37359_37426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (35))){
var state_37300__$1 = state_37300;
var statearr_37360_37427 = state_37300__$1;
(statearr_37360_37427[(2)] = true);

(statearr_37360_37427[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (19))){
var inst_37203 = (state_37300[(12)]);
var inst_37209 = figwheel.client.file_reloading.expand_files.call(null,inst_37203);
var state_37300__$1 = state_37300;
var statearr_37361_37428 = state_37300__$1;
(statearr_37361_37428[(2)] = inst_37209);

(statearr_37361_37428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (11))){
var state_37300__$1 = state_37300;
var statearr_37362_37429 = state_37300__$1;
(statearr_37362_37429[(2)] = null);

(statearr_37362_37429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (9))){
var inst_37192 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
var statearr_37363_37430 = state_37300__$1;
(statearr_37363_37430[(2)] = inst_37192);

(statearr_37363_37430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (5))){
var inst_37162 = (state_37300[(8)]);
var inst_37163 = (state_37300[(9)]);
var inst_37165 = (inst_37163 < inst_37162);
var inst_37166 = inst_37165;
var state_37300__$1 = state_37300;
if(cljs.core.truth_(inst_37166)){
var statearr_37364_37431 = state_37300__$1;
(statearr_37364_37431[(1)] = (7));

} else {
var statearr_37365_37432 = state_37300__$1;
(statearr_37365_37432[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (14))){
var inst_37173 = (state_37300[(22)]);
var inst_37182 = cljs.core.first.call(null,inst_37173);
var inst_37183 = figwheel.client.file_reloading.eval_body.call(null,inst_37182,opts);
var inst_37184 = cljs.core.next.call(null,inst_37173);
var inst_37160 = inst_37184;
var inst_37161 = null;
var inst_37162 = (0);
var inst_37163 = (0);
var state_37300__$1 = (function (){var statearr_37366 = state_37300;
(statearr_37366[(7)] = inst_37160);

(statearr_37366[(32)] = inst_37183);

(statearr_37366[(8)] = inst_37162);

(statearr_37366[(9)] = inst_37163);

(statearr_37366[(10)] = inst_37161);

return statearr_37366;
})();
var statearr_37367_37433 = state_37300__$1;
(statearr_37367_37433[(2)] = null);

(statearr_37367_37433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (45))){
var state_37300__$1 = state_37300;
var statearr_37368_37434 = state_37300__$1;
(statearr_37368_37434[(2)] = null);

(statearr_37368_37434[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (26))){
var inst_37217 = (state_37300[(23)]);
var inst_37219 = (state_37300[(26)]);
var inst_37221 = (state_37300[(24)]);
var inst_37216 = (state_37300[(25)]);
var inst_37213 = (state_37300[(19)]);
var inst_37236 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37238 = (function (){var all_files = inst_37213;
var res_SINGLEQUOTE_ = inst_37216;
var res = inst_37217;
var files_not_loaded = inst_37219;
var dependencies_that_loaded = inst_37221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37213,inst_37236,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37237){
var map__37369 = p__37237;
var map__37369__$1 = ((((!((map__37369 == null)))?((((map__37369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37369):map__37369);
var namespace = cljs.core.get.call(null,map__37369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37213,inst_37236,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37239 = cljs.core.map.call(null,inst_37238,inst_37217);
var inst_37240 = cljs.core.pr_str.call(null,inst_37239);
var inst_37241 = figwheel.client.utils.log.call(null,inst_37240);
var inst_37242 = (function (){var all_files = inst_37213;
var res_SINGLEQUOTE_ = inst_37216;
var res = inst_37217;
var files_not_loaded = inst_37219;
var dependencies_that_loaded = inst_37221;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37213,inst_37236,inst_37238,inst_37239,inst_37240,inst_37241,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37217,inst_37219,inst_37221,inst_37216,inst_37213,inst_37236,inst_37238,inst_37239,inst_37240,inst_37241,state_val_37301,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37243 = setTimeout(inst_37242,(10));
var state_37300__$1 = (function (){var statearr_37371 = state_37300;
(statearr_37371[(33)] = inst_37236);

(statearr_37371[(34)] = inst_37241);

return statearr_37371;
})();
var statearr_37372_37435 = state_37300__$1;
(statearr_37372_37435[(2)] = inst_37243);

(statearr_37372_37435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (16))){
var state_37300__$1 = state_37300;
var statearr_37373_37436 = state_37300__$1;
(statearr_37373_37436[(2)] = reload_dependents);

(statearr_37373_37436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (38))){
var inst_37253 = (state_37300[(16)]);
var inst_37271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37253);
var state_37300__$1 = state_37300;
var statearr_37374_37437 = state_37300__$1;
(statearr_37374_37437[(2)] = inst_37271);

(statearr_37374_37437[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (30))){
var state_37300__$1 = state_37300;
var statearr_37375_37438 = state_37300__$1;
(statearr_37375_37438[(2)] = null);

(statearr_37375_37438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (10))){
var inst_37173 = (state_37300[(22)]);
var inst_37175 = cljs.core.chunked_seq_QMARK_.call(null,inst_37173);
var state_37300__$1 = state_37300;
if(inst_37175){
var statearr_37376_37439 = state_37300__$1;
(statearr_37376_37439[(1)] = (13));

} else {
var statearr_37377_37440 = state_37300__$1;
(statearr_37377_37440[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (18))){
var inst_37207 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
if(cljs.core.truth_(inst_37207)){
var statearr_37378_37441 = state_37300__$1;
(statearr_37378_37441[(1)] = (19));

} else {
var statearr_37379_37442 = state_37300__$1;
(statearr_37379_37442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (42))){
var state_37300__$1 = state_37300;
var statearr_37380_37443 = state_37300__$1;
(statearr_37380_37443[(2)] = null);

(statearr_37380_37443[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (37))){
var inst_37266 = (state_37300[(2)]);
var state_37300__$1 = state_37300;
var statearr_37381_37444 = state_37300__$1;
(statearr_37381_37444[(2)] = inst_37266);

(statearr_37381_37444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37301 === (8))){
var inst_37173 = (state_37300[(22)]);
var inst_37160 = (state_37300[(7)]);
var inst_37173__$1 = cljs.core.seq.call(null,inst_37160);
var state_37300__$1 = (function (){var statearr_37382 = state_37300;
(statearr_37382[(22)] = inst_37173__$1);

return statearr_37382;
})();
if(inst_37173__$1){
var statearr_37383_37445 = state_37300__$1;
(statearr_37383_37445[(1)] = (10));

} else {
var statearr_37384_37446 = state_37300__$1;
(statearr_37384_37446[(1)] = (11));

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
});})(c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33365__auto__,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto____0 = (function (){
var statearr_37385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37385[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto__);

(statearr_37385[(1)] = (1));

return statearr_37385;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto____1 = (function (state_37300){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_37300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e37386){if((e37386 instanceof Object)){
var ex__33369__auto__ = e37386;
var statearr_37387_37447 = state_37300;
(statearr_37387_37447[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37448 = state_37300;
state_37300 = G__37448;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto__ = function(state_37300){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto____1.call(this,state_37300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33473__auto__ = (function (){var statearr_37388 = f__33472__auto__.call(null);
(statearr_37388[(6)] = c__33471__auto__);

return statearr_37388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,map__37145,map__37145__$1,opts,before_jsload,on_jsload,reload_dependents,map__37146,map__37146__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33471__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37451,link){
var map__37452 = p__37451;
var map__37452__$1 = ((((!((map__37452 == null)))?((((map__37452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37452):map__37452);
var file = cljs.core.get.call(null,map__37452__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37452,map__37452__$1,file){
return (function (p1__37449_SHARP_,p2__37450_SHARP_){
if(cljs.core._EQ_.call(null,p1__37449_SHARP_,p2__37450_SHARP_)){
return p1__37449_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37452,map__37452__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37455){
var map__37456 = p__37455;
var map__37456__$1 = ((((!((map__37456 == null)))?((((map__37456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37456):map__37456);
var match_length = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37456__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37454_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37454_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37458_SHARP_,p2__37459_SHARP_){
return cljs.core.assoc.call(null,p1__37458_SHARP_,cljs.core.get.call(null,p2__37459_SHARP_,key),p2__37459_SHARP_);
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
var loaded_f_datas_37460 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37460);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37460);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37461,p__37462){
var map__37463 = p__37461;
var map__37463__$1 = ((((!((map__37463 == null)))?((((map__37463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37463):map__37463);
var on_cssload = cljs.core.get.call(null,map__37463__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37464 = p__37462;
var map__37464__$1 = ((((!((map__37464 == null)))?((((map__37464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37464):map__37464);
var files_msg = map__37464__$1;
var files = cljs.core.get.call(null,map__37464__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1503580041488
