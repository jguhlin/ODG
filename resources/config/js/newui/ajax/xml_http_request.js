// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31880,handler){
var map__31881 = p__31880;
var map__31881__$1 = ((((!((map__31881 == null)))?((((map__31881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31881):map__31881);
var uri = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31881,map__31881__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31879_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31879_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31881,map__31881__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31893 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31893)){
var response_type_31894 = temp__4657__auto___31893;
this$__$1.responseType = cljs.core.name.call(null,response_type_31894);
} else {
}

var seq__31883_31895 = cljs.core.seq.call(null,headers);
var chunk__31884_31896 = null;
var count__31885_31897 = (0);
var i__31886_31898 = (0);
while(true){
if((i__31886_31898 < count__31885_31897)){
var vec__31887_31899 = cljs.core._nth.call(null,chunk__31884_31896,i__31886_31898);
var k_31900 = cljs.core.nth.call(null,vec__31887_31899,(0),null);
var v_31901 = cljs.core.nth.call(null,vec__31887_31899,(1),null);
this$__$1.setRequestHeader(k_31900,v_31901);

var G__31902 = seq__31883_31895;
var G__31903 = chunk__31884_31896;
var G__31904 = count__31885_31897;
var G__31905 = (i__31886_31898 + (1));
seq__31883_31895 = G__31902;
chunk__31884_31896 = G__31903;
count__31885_31897 = G__31904;
i__31886_31898 = G__31905;
continue;
} else {
var temp__4657__auto___31906 = cljs.core.seq.call(null,seq__31883_31895);
if(temp__4657__auto___31906){
var seq__31883_31907__$1 = temp__4657__auto___31906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31883_31907__$1)){
var c__29272__auto___31908 = cljs.core.chunk_first.call(null,seq__31883_31907__$1);
var G__31909 = cljs.core.chunk_rest.call(null,seq__31883_31907__$1);
var G__31910 = c__29272__auto___31908;
var G__31911 = cljs.core.count.call(null,c__29272__auto___31908);
var G__31912 = (0);
seq__31883_31895 = G__31909;
chunk__31884_31896 = G__31910;
count__31885_31897 = G__31911;
i__31886_31898 = G__31912;
continue;
} else {
var vec__31890_31913 = cljs.core.first.call(null,seq__31883_31907__$1);
var k_31914 = cljs.core.nth.call(null,vec__31890_31913,(0),null);
var v_31915 = cljs.core.nth.call(null,vec__31890_31913,(1),null);
this$__$1.setRequestHeader(k_31914,v_31915);

var G__31916 = cljs.core.next.call(null,seq__31883_31907__$1);
var G__31917 = null;
var G__31918 = (0);
var G__31919 = (0);
seq__31883_31895 = G__31916;
chunk__31884_31896 = G__31917;
count__31885_31897 = G__31918;
i__31886_31898 = G__31919;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28433__auto__ = body;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1503577463834
