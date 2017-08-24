// Compiled by ClojureScript 1.9.908 {}
goog.provide('odg.config.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('markdown.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('odg.config.ajax');
goog.require('odg.config.handlers');
goog.require('keybind.core');
goog.require('odg.config.subscriptions');
goog.require('devtools.core');
goog.require('goog.History');
odg.config.core.nav_link = (function odg$config$core$nav_link(uri,title,page,collapsed_QMARK_){
var selected_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project-box","new-project-box",-1666578833)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,cljs.core.deref.call(null,selected_page)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_page){
return (function (){
return cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true);
});})(selected_page))
], null),title], null)], null);
});
odg.config.core.navbar = (function odg$config$core$navbar(){
var with_let34851 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let34851","with-let34851",-1037180490));
var temp__4661__auto___34853 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___34853 == null)){
} else {
var c__33506__auto___34854 = temp__4661__auto___34853;
if((with_let34851.generation === c__33506__auto___34854.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let34851.generation = c__33506__auto___34854.ratomGeneration;
}


var init34852 = (with_let34851.length === (0));
var collapsed_QMARK_ = ((init34852)?(with_let34851[(0)] = reagent.core.atom.call(null,false)):(with_let34851[(0)]));
var res__33507__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light.bg-primary.navbar-toggleable-md","nav.navbar.navbar-light.bg-primary.navbar-toggleable-md",1442706085),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init34852,collapsed_QMARK_,with_let34851){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);
});})(init34852,collapsed_QMARK_,with_let34851))
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-collapse.navbar-toggleable-xs","div.collapse.navbar-collapse.navbar-toggleable-xs",-300325004),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"ODG"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [odg.config.core.nav_link,"#/","Genomes",new cljs.core.Keyword(null,"projects","projects",-364845983),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [odg.config.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543),collapsed_QMARK_], null)], null)], null)], null);

return res__33507__auto__;
});
odg.config.core.about_page = (function odg$config$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"/img/warning_clojure.png"].join('')], null)], null)], null)], null)], null);
});
odg.config.core.pages = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"projects","projects",-364845983),new cljs.core.Var(function(){return odg.config.core.about_page;},new cljs.core.Symbol("odg.config.core","about-page","odg.config.core/about-page",-429795528,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"odg.config.core","odg.config.core",-1591712857,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src\\cljs\\config\\core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(odg.config.core.about_page)?odg.config.core.about_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return odg.config.core.about_page;},new cljs.core.Symbol("odg.config.core","about-page","odg.config.core/about-page",-429795528,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"odg.config.core","odg.config.core",-1591712857,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src\\cljs\\config\\core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(odg.config.core.about_page)?odg.config.core.about_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"project","project",1124394579),new cljs.core.Var(function(){return odg.config.core.about_page;},new cljs.core.Symbol("odg.config.core","about-page","odg.config.core/about-page",-429795528,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"odg.config.core","odg.config.core",-1591712857,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src\\cljs\\config\\core.cljs",17,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(odg.config.core.about_page)?odg.config.core.about_page.cljs$lang$test:null)]))], null);
odg.config.core.page = (function odg$config$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odg.config.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [odg.config.core.pages.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null))))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__34023__auto___34860 = (function (params__34024__auto__){
if(cljs.core.map_QMARK_.call(null,params__34024__auto__)){
var map__34855 = params__34024__auto__;
var map__34855__$1 = ((((!((map__34855 == null)))?((((map__34855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34855):map__34855);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"projects","projects",-364845983)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34024__auto__)){
var vec__34857 = params__34024__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"projects","projects",-364845983)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__34023__auto___34860);

var action__34023__auto___34866 = (function (params__34024__auto__){
if(cljs.core.map_QMARK_.call(null,params__34024__auto__)){
var map__34861 = params__34024__auto__;
var map__34861__$1 = ((((!((map__34861 == null)))?((((map__34861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34861):map__34861);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__34024__auto__)){
var vec__34863 = params__34024__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"about","about",1423892543)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__34023__auto___34866);

odg.config.core.hook_browser_navigation_BANG_ = (function odg$config$core$hook_browser_navigation_BANG_(){
var G__34867 = (new goog.History());
goog.events.listen(G__34867,goog.history.EventType.NAVIGATE,((function (G__34867){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__34867))
);

G__34867.setEnabled(true);

return G__34867;
});
odg.config.core.fetch_docs_BANG_ = (function odg$config$core$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__34868_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-docs","set-docs",405672054),p1__34868_SHARP_], null));
})], null));
});
odg.config.core.mount_components = (function odg$config$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return odg.config.core.page;},new cljs.core.Symbol("odg.config.core","page","odg.config.core/page",204050245,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"odg.config.core","odg.config.core",-1591712857,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src\\cljs\\config\\core.cljs",11,1,52,52,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(odg.config.core.page)?odg.config.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
odg.config.core.mount_keybindings = (function odg$config$core$mount_keybindings(){
return keybind.core.bind_BANG_.call(null,"alt-n",new cljs.core.Keyword(null,"newproject","newproject",1967925804),(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-project-box","new-project-box",-1666578833),true], null));

return document.getElementById("new-project-box").focus();
}));
});
odg.config.core.init_BANG_ = (function odg$config$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

odg.config.ajax.load_interceptors_BANG_.call(null);

odg.config.core.hook_browser_navigation_BANG_.call(null);

odg.config.core.mount_keybindings.call(null);

return odg.config.core.mount_components.call(null);
});
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.install_BANG_.call(null);
odg.config.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1503582241642
