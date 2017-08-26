// Compiled by ClojureScript 1.9.908 {}
goog.provide('odg.config.ajax');
goog.require('cljs.core');
goog.require('ajax.core');
odg.config.ajax.local_uri_QMARK_ = (function odg$config$ajax$local_uri_QMARK_(p__36310){
var map__36311 = p__36310;
var map__36311__$1 = ((((!((map__36311 == null)))?((((map__36311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36311):map__36311);
var uri = cljs.core.get.call(null,map__36311__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^\w+?:\/\//,uri));
});
odg.config.ajax.default_headers = (function odg$config$ajax$default_headers(request){
if(cljs.core.truth_(odg.config.ajax.local_uri_QMARK_.call(null,request))){
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__36313_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36313_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__36314_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__36314_SHARP_);
}));
} else {
return request;
}
});
odg.config.ajax.load_interceptors_BANG_ = (function odg$config$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),odg.config.ajax.default_headers], null)));
});

//# sourceMappingURL=ajax.js.map?rel=1503758424775
