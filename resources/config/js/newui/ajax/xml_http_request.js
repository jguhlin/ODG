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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__34479,handler){
var map__34480 = p__34479;
var map__34480__$1 = ((((!((map__34480 == null)))?((((map__34480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34480):map__34480);
var uri = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__34480__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__34480,map__34480__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__34478_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__34478_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__34480,map__34480__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___34492 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___34492)){
var response_type_34493 = temp__4657__auto___34492;
this$__$1.responseType = cljs.core.name.call(null,response_type_34493);
} else {
}

var seq__34482_34494 = cljs.core.seq.call(null,headers);
var chunk__34483_34495 = null;
var count__34484_34496 = (0);
var i__34485_34497 = (0);
while(true){
if((i__34485_34497 < count__34484_34496)){
var vec__34486_34498 = cljs.core._nth.call(null,chunk__34483_34495,i__34485_34497);
var k_34499 = cljs.core.nth.call(null,vec__34486_34498,(0),null);
var v_34500 = cljs.core.nth.call(null,vec__34486_34498,(1),null);
this$__$1.setRequestHeader(k_34499,v_34500);

var G__34501 = seq__34482_34494;
var G__34502 = chunk__34483_34495;
var G__34503 = count__34484_34496;
var G__34504 = (i__34485_34497 + (1));
seq__34482_34494 = G__34501;
chunk__34483_34495 = G__34502;
count__34484_34496 = G__34503;
i__34485_34497 = G__34504;
continue;
} else {
var temp__4657__auto___34505 = cljs.core.seq.call(null,seq__34482_34494);
if(temp__4657__auto___34505){
var seq__34482_34506__$1 = temp__4657__auto___34505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34482_34506__$1)){
var c__29272__auto___34507 = cljs.core.chunk_first.call(null,seq__34482_34506__$1);
var G__34508 = cljs.core.chunk_rest.call(null,seq__34482_34506__$1);
var G__34509 = c__29272__auto___34507;
var G__34510 = cljs.core.count.call(null,c__29272__auto___34507);
var G__34511 = (0);
seq__34482_34494 = G__34508;
chunk__34483_34495 = G__34509;
count__34484_34496 = G__34510;
i__34485_34497 = G__34511;
continue;
} else {
var vec__34489_34512 = cljs.core.first.call(null,seq__34482_34506__$1);
var k_34513 = cljs.core.nth.call(null,vec__34489_34512,(0),null);
var v_34514 = cljs.core.nth.call(null,vec__34489_34512,(1),null);
this$__$1.setRequestHeader(k_34513,v_34514);

var G__34515 = cljs.core.next.call(null,seq__34482_34506__$1);
var G__34516 = null;
var G__34517 = (0);
var G__34518 = (0);
seq__34482_34494 = G__34515;
chunk__34483_34495 = G__34516;
count__34484_34496 = G__34517;
i__34485_34497 = G__34518;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1503758421471
