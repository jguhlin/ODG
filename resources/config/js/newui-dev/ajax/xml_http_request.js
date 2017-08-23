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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31564,handler){
var map__31565 = p__31564;
var map__31565__$1 = ((((!((map__31565 == null)))?((((map__31565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31565):map__31565);
var uri = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31565__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31565,map__31565__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31563_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31563_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31565,map__31565__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31577 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31577)){
var response_type_31578 = temp__4657__auto___31577;
this$__$1.responseType = cljs.core.name.call(null,response_type_31578);
} else {
}

var seq__31567_31579 = cljs.core.seq.call(null,headers);
var chunk__31568_31580 = null;
var count__31569_31581 = (0);
var i__31570_31582 = (0);
while(true){
if((i__31570_31582 < count__31569_31581)){
var vec__31571_31583 = cljs.core._nth.call(null,chunk__31568_31580,i__31570_31582);
var k_31584 = cljs.core.nth.call(null,vec__31571_31583,(0),null);
var v_31585 = cljs.core.nth.call(null,vec__31571_31583,(1),null);
this$__$1.setRequestHeader(k_31584,v_31585);

var G__31586 = seq__31567_31579;
var G__31587 = chunk__31568_31580;
var G__31588 = count__31569_31581;
var G__31589 = (i__31570_31582 + (1));
seq__31567_31579 = G__31586;
chunk__31568_31580 = G__31587;
count__31569_31581 = G__31588;
i__31570_31582 = G__31589;
continue;
} else {
var temp__4657__auto___31590 = cljs.core.seq.call(null,seq__31567_31579);
if(temp__4657__auto___31590){
var seq__31567_31591__$1 = temp__4657__auto___31590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31567_31591__$1)){
var c__29272__auto___31592 = cljs.core.chunk_first.call(null,seq__31567_31591__$1);
var G__31593 = cljs.core.chunk_rest.call(null,seq__31567_31591__$1);
var G__31594 = c__29272__auto___31592;
var G__31595 = cljs.core.count.call(null,c__29272__auto___31592);
var G__31596 = (0);
seq__31567_31579 = G__31593;
chunk__31568_31580 = G__31594;
count__31569_31581 = G__31595;
i__31570_31582 = G__31596;
continue;
} else {
var vec__31574_31597 = cljs.core.first.call(null,seq__31567_31591__$1);
var k_31598 = cljs.core.nth.call(null,vec__31574_31597,(0),null);
var v_31599 = cljs.core.nth.call(null,vec__31574_31597,(1),null);
this$__$1.setRequestHeader(k_31598,v_31599);

var G__31600 = cljs.core.next.call(null,seq__31567_31591__$1);
var G__31601 = null;
var G__31602 = (0);
var G__31603 = (0);
seq__31567_31579 = G__31600;
chunk__31568_31580 = G__31601;
count__31569_31581 = G__31602;
i__31570_31582 = G__31603;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1503499630955
