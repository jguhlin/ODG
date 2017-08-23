// Compiled by ClojureScript 1.9.908 {}
goog.provide('projh.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
projh.ajax.local_uri_QMARK_ = (function projh$ajax$local_uri_QMARK_(p__33058){
var map__33059 = p__33058;
var map__33059__$1 = ((((!((map__33059 == null)))?((((map__33059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33059):map__33059);
var uri = cljs.core.get.call(null,map__33059__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
projh.ajax.default_headers = (function projh$ajax$default_headers(request){
if(cljs.core.truth_(projh.ajax.local_uri_QMARK_.call(null,request))){
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__33061_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33061_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__33062_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__33062_SHARP_);
}));
} else {
return request;
}
});
projh.ajax.load_interceptors_BANG_ = (function projh$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),projh.ajax.default_headers], null)));
});

//# sourceMappingURL=ajax.js.map?rel=1503499633127
