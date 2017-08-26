// Compiled by ClojureScript 1.9.908 {}
goog.provide('odg.config.handlers');
goog.require('cljs.core');
goog.require('odg.config.db');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return odg.config.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__36668){
var vec__36669 = p__36668;
var _ = cljs.core.nth.call(null,vec__36669,(0),null);
var page = cljs.core.nth.call(null,vec__36669,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"page","page",849072397),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-docs","set-docs",405672054),(function (db,p__36672){
var vec__36673 = p__36672;
var _ = cljs.core.nth.call(null,vec__36673,(0),null);
var docs = cljs.core.nth.call(null,vec__36673,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"docs","docs",-1974280502),docs);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-projects","set-projects",-386408395),(function (db,p__36676){
var vec__36677 = p__36676;
var _ = cljs.core.nth.call(null,vec__36677,(0),null);
var projects = cljs.core.nth.call(null,vec__36677,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"projects","projects",-364845983),projects);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-project","set-project",-248408103),(function (db,p__36680){
var vec__36681 = p__36680;
var _ = cljs.core.nth.call(null,vec__36681,(0),null);
var project = cljs.core.nth.call(null,vec__36681,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"project","project",1124394579),project);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"new-project-box","new-project-box",-1666578833),(function (db,p__36684){
var vec__36685 = p__36684;
var _ = cljs.core.nth.call(null,vec__36685,(0),null);
var new_project_box = cljs.core.nth.call(null,vec__36685,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-project-box","new-project-box",-1666578833),new_project_box);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-project-data","set-project-data",304617166),(function (db,p__36688){
var vec__36689 = p__36688;
var _ = cljs.core.nth.call(null,vec__36689,(0),null);
var project_data = cljs.core.nth.call(null,vec__36689,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"project-data","project-data",-1812708430),project_data);
}));

//# sourceMappingURL=handlers.js.map?rel=1503758425434
