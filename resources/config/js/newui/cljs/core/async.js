// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37752 = arguments.length;
switch (G__37752) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37753 = (function (f,blockable,meta37754){
this.f = f;
this.blockable = blockable;
this.meta37754 = meta37754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37755,meta37754__$1){
var self__ = this;
var _37755__$1 = this;
return (new cljs.core.async.t_cljs$core$async37753(self__.f,self__.blockable,meta37754__$1));
});

cljs.core.async.t_cljs$core$async37753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37755){
var self__ = this;
var _37755__$1 = this;
return self__.meta37754;
});

cljs.core.async.t_cljs$core$async37753.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37754","meta37754",661715830,null)], null);
});

cljs.core.async.t_cljs$core$async37753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37753";

cljs.core.async.t_cljs$core$async37753.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async37753");
});

cljs.core.async.__GT_t_cljs$core$async37753 = (function cljs$core$async$__GT_t_cljs$core$async37753(f__$1,blockable__$1,meta37754){
return (new cljs.core.async.t_cljs$core$async37753(f__$1,blockable__$1,meta37754));
});

}

return (new cljs.core.async.t_cljs$core$async37753(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37759 = arguments.length;
switch (G__37759) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37762 = arguments.length;
switch (G__37762) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37765 = arguments.length;
switch (G__37765) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37767 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37767);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37767,ret){
return (function (){
return fn1.call(null,val_37767);
});})(val_37767,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37769 = arguments.length;
switch (G__37769) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29378__auto___37771 = n;
var x_37772 = (0);
while(true){
if((x_37772 < n__29378__auto___37771)){
(a[x_37772] = (0));

var G__37773 = (x_37772 + (1));
x_37772 = G__37773;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37774 = (i + (1));
i = G__37774;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37775 = (function (flag,meta37776){
this.flag = flag;
this.meta37776 = meta37776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37777,meta37776__$1){
var self__ = this;
var _37777__$1 = this;
return (new cljs.core.async.t_cljs$core$async37775(self__.flag,meta37776__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37777){
var self__ = this;
var _37777__$1 = this;
return self__.meta37776;
});})(flag))
;

cljs.core.async.t_cljs$core$async37775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37775.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37776","meta37776",-350155058,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37775";

cljs.core.async.t_cljs$core$async37775.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async37775");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37775 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37775(flag__$1,meta37776){
return (new cljs.core.async.t_cljs$core$async37775(flag__$1,meta37776));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37778 = (function (flag,cb,meta37779){
this.flag = flag;
this.cb = cb;
this.meta37779 = meta37779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37780,meta37779__$1){
var self__ = this;
var _37780__$1 = this;
return (new cljs.core.async.t_cljs$core$async37778(self__.flag,self__.cb,meta37779__$1));
});

cljs.core.async.t_cljs$core$async37778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37780){
var self__ = this;
var _37780__$1 = this;
return self__.meta37779;
});

cljs.core.async.t_cljs$core$async37778.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37778.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37778.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37778.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37779","meta37779",-2072690147,null)], null);
});

cljs.core.async.t_cljs$core$async37778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37778";

cljs.core.async.t_cljs$core$async37778.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async37778");
});

cljs.core.async.__GT_t_cljs$core$async37778 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37778(flag__$1,cb__$1,meta37779){
return (new cljs.core.async.t_cljs$core$async37778(flag__$1,cb__$1,meta37779));
});

}

return (new cljs.core.async.t_cljs$core$async37778(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37781_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37781_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37782_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37782_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28433__auto__ = wport;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37783 = (i + (1));
i = G__37783;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28433__auto__ = ret;
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28421__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28421__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28421__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29609__auto__ = [];
var len__29602__auto___37789 = arguments.length;
var i__29603__auto___37790 = (0);
while(true){
if((i__29603__auto___37790 < len__29602__auto___37789)){
args__29609__auto__.push((arguments[i__29603__auto___37790]));

var G__37791 = (i__29603__auto___37790 + (1));
i__29603__auto___37790 = G__37791;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37786){
var map__37787 = p__37786;
var map__37787__$1 = ((((!((map__37787 == null)))?((((map__37787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37787):map__37787);
var opts = map__37787__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37784){
var G__37785 = cljs.core.first.call(null,seq37784);
var seq37784__$1 = cljs.core.next.call(null,seq37784);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37785,seq37784__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37793 = arguments.length;
switch (G__37793) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37706__auto___37839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___37839){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___37839){
return (function (state_37817){
var state_val_37818 = (state_37817[(1)]);
if((state_val_37818 === (7))){
var inst_37813 = (state_37817[(2)]);
var state_37817__$1 = state_37817;
var statearr_37819_37840 = state_37817__$1;
(statearr_37819_37840[(2)] = inst_37813);

(statearr_37819_37840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (1))){
var state_37817__$1 = state_37817;
var statearr_37820_37841 = state_37817__$1;
(statearr_37820_37841[(2)] = null);

(statearr_37820_37841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (4))){
var inst_37796 = (state_37817[(7)]);
var inst_37796__$1 = (state_37817[(2)]);
var inst_37797 = (inst_37796__$1 == null);
var state_37817__$1 = (function (){var statearr_37821 = state_37817;
(statearr_37821[(7)] = inst_37796__$1);

return statearr_37821;
})();
if(cljs.core.truth_(inst_37797)){
var statearr_37822_37842 = state_37817__$1;
(statearr_37822_37842[(1)] = (5));

} else {
var statearr_37823_37843 = state_37817__$1;
(statearr_37823_37843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (13))){
var state_37817__$1 = state_37817;
var statearr_37824_37844 = state_37817__$1;
(statearr_37824_37844[(2)] = null);

(statearr_37824_37844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (6))){
var inst_37796 = (state_37817[(7)]);
var state_37817__$1 = state_37817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37817__$1,(11),to,inst_37796);
} else {
if((state_val_37818 === (3))){
var inst_37815 = (state_37817[(2)]);
var state_37817__$1 = state_37817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37817__$1,inst_37815);
} else {
if((state_val_37818 === (12))){
var state_37817__$1 = state_37817;
var statearr_37825_37845 = state_37817__$1;
(statearr_37825_37845[(2)] = null);

(statearr_37825_37845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (2))){
var state_37817__$1 = state_37817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37817__$1,(4),from);
} else {
if((state_val_37818 === (11))){
var inst_37806 = (state_37817[(2)]);
var state_37817__$1 = state_37817;
if(cljs.core.truth_(inst_37806)){
var statearr_37826_37846 = state_37817__$1;
(statearr_37826_37846[(1)] = (12));

} else {
var statearr_37827_37847 = state_37817__$1;
(statearr_37827_37847[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (9))){
var state_37817__$1 = state_37817;
var statearr_37828_37848 = state_37817__$1;
(statearr_37828_37848[(2)] = null);

(statearr_37828_37848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (5))){
var state_37817__$1 = state_37817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37829_37849 = state_37817__$1;
(statearr_37829_37849[(1)] = (8));

} else {
var statearr_37830_37850 = state_37817__$1;
(statearr_37830_37850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (14))){
var inst_37811 = (state_37817[(2)]);
var state_37817__$1 = state_37817;
var statearr_37831_37851 = state_37817__$1;
(statearr_37831_37851[(2)] = inst_37811);

(statearr_37831_37851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (10))){
var inst_37803 = (state_37817[(2)]);
var state_37817__$1 = state_37817;
var statearr_37832_37852 = state_37817__$1;
(statearr_37832_37852[(2)] = inst_37803);

(statearr_37832_37852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37818 === (8))){
var inst_37800 = cljs.core.async.close_BANG_.call(null,to);
var state_37817__$1 = state_37817;
var statearr_37833_37853 = state_37817__$1;
(statearr_37833_37853[(2)] = inst_37800);

(statearr_37833_37853[(1)] = (10));


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
});})(c__37706__auto___37839))
;
return ((function (switch__37618__auto__,c__37706__auto___37839){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_37834 = [null,null,null,null,null,null,null,null];
(statearr_37834[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_37834[(1)] = (1));

return statearr_37834;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_37817){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_37817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e37835){if((e37835 instanceof Object)){
var ex__37622__auto__ = e37835;
var statearr_37836_37854 = state_37817;
(statearr_37836_37854[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_37817;
state_37817 = G__37855;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_37817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_37817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___37839))
})();
var state__37708__auto__ = (function (){var statearr_37837 = f__37707__auto__.call(null);
(statearr_37837[(6)] = c__37706__auto___37839);

return statearr_37837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___37839))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37856){
var vec__37857 = p__37856;
var v = cljs.core.nth.call(null,vec__37857,(0),null);
var p = cljs.core.nth.call(null,vec__37857,(1),null);
var job = vec__37857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37706__auto___38028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___38028,res,vec__37857,v,p,job,jobs,results){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___38028,res,vec__37857,v,p,job,jobs,results){
return (function (state_37864){
var state_val_37865 = (state_37864[(1)]);
if((state_val_37865 === (1))){
var state_37864__$1 = state_37864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37864__$1,(2),res,v);
} else {
if((state_val_37865 === (2))){
var inst_37861 = (state_37864[(2)]);
var inst_37862 = cljs.core.async.close_BANG_.call(null,res);
var state_37864__$1 = (function (){var statearr_37866 = state_37864;
(statearr_37866[(7)] = inst_37861);

return statearr_37866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37864__$1,inst_37862);
} else {
return null;
}
}
});})(c__37706__auto___38028,res,vec__37857,v,p,job,jobs,results))
;
return ((function (switch__37618__auto__,c__37706__auto___38028,res,vec__37857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0 = (function (){
var statearr_37867 = [null,null,null,null,null,null,null,null];
(statearr_37867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__);

(statearr_37867[(1)] = (1));

return statearr_37867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1 = (function (state_37864){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_37864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e37868){if((e37868 instanceof Object)){
var ex__37622__auto__ = e37868;
var statearr_37869_38029 = state_37864;
(statearr_37869_38029[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38030 = state_37864;
state_37864 = G__38030;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = function(state_37864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1.call(this,state_37864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___38028,res,vec__37857,v,p,job,jobs,results))
})();
var state__37708__auto__ = (function (){var statearr_37870 = f__37707__auto__.call(null);
(statearr_37870[(6)] = c__37706__auto___38028);

return statearr_37870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___38028,res,vec__37857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37871){
var vec__37872 = p__37871;
var v = cljs.core.nth.call(null,vec__37872,(0),null);
var p = cljs.core.nth.call(null,vec__37872,(1),null);
var job = vec__37872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29378__auto___38031 = n;
var __38032 = (0);
while(true){
if((__38032 < n__29378__auto___38031)){
var G__37875_38033 = type;
var G__37875_38034__$1 = (((G__37875_38033 instanceof cljs.core.Keyword))?G__37875_38033.fqn:null);
switch (G__37875_38034__$1) {
case "compute":
var c__37706__auto___38036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38032,c__37706__auto___38036,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (__38032,c__37706__auto___38036,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async){
return (function (state_37888){
var state_val_37889 = (state_37888[(1)]);
if((state_val_37889 === (1))){
var state_37888__$1 = state_37888;
var statearr_37890_38037 = state_37888__$1;
(statearr_37890_38037[(2)] = null);

(statearr_37890_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (2))){
var state_37888__$1 = state_37888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37888__$1,(4),jobs);
} else {
if((state_val_37889 === (3))){
var inst_37886 = (state_37888[(2)]);
var state_37888__$1 = state_37888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37888__$1,inst_37886);
} else {
if((state_val_37889 === (4))){
var inst_37878 = (state_37888[(2)]);
var inst_37879 = process.call(null,inst_37878);
var state_37888__$1 = state_37888;
if(cljs.core.truth_(inst_37879)){
var statearr_37891_38038 = state_37888__$1;
(statearr_37891_38038[(1)] = (5));

} else {
var statearr_37892_38039 = state_37888__$1;
(statearr_37892_38039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (5))){
var state_37888__$1 = state_37888;
var statearr_37893_38040 = state_37888__$1;
(statearr_37893_38040[(2)] = null);

(statearr_37893_38040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (6))){
var state_37888__$1 = state_37888;
var statearr_37894_38041 = state_37888__$1;
(statearr_37894_38041[(2)] = null);

(statearr_37894_38041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (7))){
var inst_37884 = (state_37888[(2)]);
var state_37888__$1 = state_37888;
var statearr_37895_38042 = state_37888__$1;
(statearr_37895_38042[(2)] = inst_37884);

(statearr_37895_38042[(1)] = (3));


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
});})(__38032,c__37706__auto___38036,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async))
;
return ((function (__38032,switch__37618__auto__,c__37706__auto___38036,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0 = (function (){
var statearr_37896 = [null,null,null,null,null,null,null];
(statearr_37896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__);

(statearr_37896[(1)] = (1));

return statearr_37896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1 = (function (state_37888){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_37888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e37897){if((e37897 instanceof Object)){
var ex__37622__auto__ = e37897;
var statearr_37898_38043 = state_37888;
(statearr_37898_38043[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38044 = state_37888;
state_37888 = G__38044;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = function(state_37888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1.call(this,state_37888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__;
})()
;})(__38032,switch__37618__auto__,c__37706__auto___38036,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async))
})();
var state__37708__auto__ = (function (){var statearr_37899 = f__37707__auto__.call(null);
(statearr_37899[(6)] = c__37706__auto___38036);

return statearr_37899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(__38032,c__37706__auto___38036,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async))
);


break;
case "async":
var c__37706__auto___38045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38032,c__37706__auto___38045,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (__38032,c__37706__auto___38045,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async){
return (function (state_37912){
var state_val_37913 = (state_37912[(1)]);
if((state_val_37913 === (1))){
var state_37912__$1 = state_37912;
var statearr_37914_38046 = state_37912__$1;
(statearr_37914_38046[(2)] = null);

(statearr_37914_38046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37913 === (2))){
var state_37912__$1 = state_37912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37912__$1,(4),jobs);
} else {
if((state_val_37913 === (3))){
var inst_37910 = (state_37912[(2)]);
var state_37912__$1 = state_37912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37912__$1,inst_37910);
} else {
if((state_val_37913 === (4))){
var inst_37902 = (state_37912[(2)]);
var inst_37903 = async.call(null,inst_37902);
var state_37912__$1 = state_37912;
if(cljs.core.truth_(inst_37903)){
var statearr_37915_38047 = state_37912__$1;
(statearr_37915_38047[(1)] = (5));

} else {
var statearr_37916_38048 = state_37912__$1;
(statearr_37916_38048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37913 === (5))){
var state_37912__$1 = state_37912;
var statearr_37917_38049 = state_37912__$1;
(statearr_37917_38049[(2)] = null);

(statearr_37917_38049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37913 === (6))){
var state_37912__$1 = state_37912;
var statearr_37918_38050 = state_37912__$1;
(statearr_37918_38050[(2)] = null);

(statearr_37918_38050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37913 === (7))){
var inst_37908 = (state_37912[(2)]);
var state_37912__$1 = state_37912;
var statearr_37919_38051 = state_37912__$1;
(statearr_37919_38051[(2)] = inst_37908);

(statearr_37919_38051[(1)] = (3));


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
});})(__38032,c__37706__auto___38045,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async))
;
return ((function (__38032,switch__37618__auto__,c__37706__auto___38045,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0 = (function (){
var statearr_37920 = [null,null,null,null,null,null,null];
(statearr_37920[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__);

(statearr_37920[(1)] = (1));

return statearr_37920;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1 = (function (state_37912){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_37912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e37921){if((e37921 instanceof Object)){
var ex__37622__auto__ = e37921;
var statearr_37922_38052 = state_37912;
(statearr_37922_38052[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38053 = state_37912;
state_37912 = G__38053;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = function(state_37912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1.call(this,state_37912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__;
})()
;})(__38032,switch__37618__auto__,c__37706__auto___38045,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async))
})();
var state__37708__auto__ = (function (){var statearr_37923 = f__37707__auto__.call(null);
(statearr_37923[(6)] = c__37706__auto___38045);

return statearr_37923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(__38032,c__37706__auto___38045,G__37875_38033,G__37875_38034__$1,n__29378__auto___38031,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37875_38034__$1)].join('')));

}

var G__38054 = (__38032 + (1));
__38032 = G__38054;
continue;
} else {
}
break;
}

var c__37706__auto___38055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___38055,jobs,results,process,async){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___38055,jobs,results,process,async){
return (function (state_37945){
var state_val_37946 = (state_37945[(1)]);
if((state_val_37946 === (1))){
var state_37945__$1 = state_37945;
var statearr_37947_38056 = state_37945__$1;
(statearr_37947_38056[(2)] = null);

(statearr_37947_38056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37946 === (2))){
var state_37945__$1 = state_37945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37945__$1,(4),from);
} else {
if((state_val_37946 === (3))){
var inst_37943 = (state_37945[(2)]);
var state_37945__$1 = state_37945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37945__$1,inst_37943);
} else {
if((state_val_37946 === (4))){
var inst_37926 = (state_37945[(7)]);
var inst_37926__$1 = (state_37945[(2)]);
var inst_37927 = (inst_37926__$1 == null);
var state_37945__$1 = (function (){var statearr_37948 = state_37945;
(statearr_37948[(7)] = inst_37926__$1);

return statearr_37948;
})();
if(cljs.core.truth_(inst_37927)){
var statearr_37949_38057 = state_37945__$1;
(statearr_37949_38057[(1)] = (5));

} else {
var statearr_37950_38058 = state_37945__$1;
(statearr_37950_38058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37946 === (5))){
var inst_37929 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37945__$1 = state_37945;
var statearr_37951_38059 = state_37945__$1;
(statearr_37951_38059[(2)] = inst_37929);

(statearr_37951_38059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37946 === (6))){
var inst_37931 = (state_37945[(8)]);
var inst_37926 = (state_37945[(7)]);
var inst_37931__$1 = cljs.core.async.chan.call(null,(1));
var inst_37932 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37933 = [inst_37926,inst_37931__$1];
var inst_37934 = (new cljs.core.PersistentVector(null,2,(5),inst_37932,inst_37933,null));
var state_37945__$1 = (function (){var statearr_37952 = state_37945;
(statearr_37952[(8)] = inst_37931__$1);

return statearr_37952;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37945__$1,(8),jobs,inst_37934);
} else {
if((state_val_37946 === (7))){
var inst_37941 = (state_37945[(2)]);
var state_37945__$1 = state_37945;
var statearr_37953_38060 = state_37945__$1;
(statearr_37953_38060[(2)] = inst_37941);

(statearr_37953_38060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37946 === (8))){
var inst_37931 = (state_37945[(8)]);
var inst_37936 = (state_37945[(2)]);
var state_37945__$1 = (function (){var statearr_37954 = state_37945;
(statearr_37954[(9)] = inst_37936);

return statearr_37954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37945__$1,(9),results,inst_37931);
} else {
if((state_val_37946 === (9))){
var inst_37938 = (state_37945[(2)]);
var state_37945__$1 = (function (){var statearr_37955 = state_37945;
(statearr_37955[(10)] = inst_37938);

return statearr_37955;
})();
var statearr_37956_38061 = state_37945__$1;
(statearr_37956_38061[(2)] = null);

(statearr_37956_38061[(1)] = (2));


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
});})(c__37706__auto___38055,jobs,results,process,async))
;
return ((function (switch__37618__auto__,c__37706__auto___38055,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0 = (function (){
var statearr_37957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__);

(statearr_37957[(1)] = (1));

return statearr_37957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1 = (function (state_37945){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_37945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e37958){if((e37958 instanceof Object)){
var ex__37622__auto__ = e37958;
var statearr_37959_38062 = state_37945;
(statearr_37959_38062[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38063 = state_37945;
state_37945 = G__38063;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = function(state_37945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1.call(this,state_37945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___38055,jobs,results,process,async))
})();
var state__37708__auto__ = (function (){var statearr_37960 = f__37707__auto__.call(null);
(statearr_37960[(6)] = c__37706__auto___38055);

return statearr_37960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___38055,jobs,results,process,async))
);


var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__,jobs,results,process,async){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__,jobs,results,process,async){
return (function (state_37998){
var state_val_37999 = (state_37998[(1)]);
if((state_val_37999 === (7))){
var inst_37994 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
var statearr_38000_38064 = state_37998__$1;
(statearr_38000_38064[(2)] = inst_37994);

(statearr_38000_38064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (20))){
var state_37998__$1 = state_37998;
var statearr_38001_38065 = state_37998__$1;
(statearr_38001_38065[(2)] = null);

(statearr_38001_38065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (1))){
var state_37998__$1 = state_37998;
var statearr_38002_38066 = state_37998__$1;
(statearr_38002_38066[(2)] = null);

(statearr_38002_38066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (4))){
var inst_37963 = (state_37998[(7)]);
var inst_37963__$1 = (state_37998[(2)]);
var inst_37964 = (inst_37963__$1 == null);
var state_37998__$1 = (function (){var statearr_38003 = state_37998;
(statearr_38003[(7)] = inst_37963__$1);

return statearr_38003;
})();
if(cljs.core.truth_(inst_37964)){
var statearr_38004_38067 = state_37998__$1;
(statearr_38004_38067[(1)] = (5));

} else {
var statearr_38005_38068 = state_37998__$1;
(statearr_38005_38068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (15))){
var inst_37976 = (state_37998[(8)]);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37998__$1,(18),to,inst_37976);
} else {
if((state_val_37999 === (21))){
var inst_37989 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
var statearr_38006_38069 = state_37998__$1;
(statearr_38006_38069[(2)] = inst_37989);

(statearr_38006_38069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (13))){
var inst_37991 = (state_37998[(2)]);
var state_37998__$1 = (function (){var statearr_38007 = state_37998;
(statearr_38007[(9)] = inst_37991);

return statearr_38007;
})();
var statearr_38008_38070 = state_37998__$1;
(statearr_38008_38070[(2)] = null);

(statearr_38008_38070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (6))){
var inst_37963 = (state_37998[(7)]);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37998__$1,(11),inst_37963);
} else {
if((state_val_37999 === (17))){
var inst_37984 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
if(cljs.core.truth_(inst_37984)){
var statearr_38009_38071 = state_37998__$1;
(statearr_38009_38071[(1)] = (19));

} else {
var statearr_38010_38072 = state_37998__$1;
(statearr_38010_38072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (3))){
var inst_37996 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37998__$1,inst_37996);
} else {
if((state_val_37999 === (12))){
var inst_37973 = (state_37998[(10)]);
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37998__$1,(14),inst_37973);
} else {
if((state_val_37999 === (2))){
var state_37998__$1 = state_37998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37998__$1,(4),results);
} else {
if((state_val_37999 === (19))){
var state_37998__$1 = state_37998;
var statearr_38011_38073 = state_37998__$1;
(statearr_38011_38073[(2)] = null);

(statearr_38011_38073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (11))){
var inst_37973 = (state_37998[(2)]);
var state_37998__$1 = (function (){var statearr_38012 = state_37998;
(statearr_38012[(10)] = inst_37973);

return statearr_38012;
})();
var statearr_38013_38074 = state_37998__$1;
(statearr_38013_38074[(2)] = null);

(statearr_38013_38074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (9))){
var state_37998__$1 = state_37998;
var statearr_38014_38075 = state_37998__$1;
(statearr_38014_38075[(2)] = null);

(statearr_38014_38075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (5))){
var state_37998__$1 = state_37998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38015_38076 = state_37998__$1;
(statearr_38015_38076[(1)] = (8));

} else {
var statearr_38016_38077 = state_37998__$1;
(statearr_38016_38077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (14))){
var inst_37978 = (state_37998[(11)]);
var inst_37976 = (state_37998[(8)]);
var inst_37976__$1 = (state_37998[(2)]);
var inst_37977 = (inst_37976__$1 == null);
var inst_37978__$1 = cljs.core.not.call(null,inst_37977);
var state_37998__$1 = (function (){var statearr_38017 = state_37998;
(statearr_38017[(11)] = inst_37978__$1);

(statearr_38017[(8)] = inst_37976__$1);

return statearr_38017;
})();
if(inst_37978__$1){
var statearr_38018_38078 = state_37998__$1;
(statearr_38018_38078[(1)] = (15));

} else {
var statearr_38019_38079 = state_37998__$1;
(statearr_38019_38079[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (16))){
var inst_37978 = (state_37998[(11)]);
var state_37998__$1 = state_37998;
var statearr_38020_38080 = state_37998__$1;
(statearr_38020_38080[(2)] = inst_37978);

(statearr_38020_38080[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (10))){
var inst_37970 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
var statearr_38021_38081 = state_37998__$1;
(statearr_38021_38081[(2)] = inst_37970);

(statearr_38021_38081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (18))){
var inst_37981 = (state_37998[(2)]);
var state_37998__$1 = state_37998;
var statearr_38022_38082 = state_37998__$1;
(statearr_38022_38082[(2)] = inst_37981);

(statearr_38022_38082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37999 === (8))){
var inst_37967 = cljs.core.async.close_BANG_.call(null,to);
var state_37998__$1 = state_37998;
var statearr_38023_38083 = state_37998__$1;
(statearr_38023_38083[(2)] = inst_37967);

(statearr_38023_38083[(1)] = (10));


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
});})(c__37706__auto__,jobs,results,process,async))
;
return ((function (switch__37618__auto__,c__37706__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0 = (function (){
var statearr_38024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__);

(statearr_38024[(1)] = (1));

return statearr_38024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1 = (function (state_37998){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_37998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38025){if((e38025 instanceof Object)){
var ex__37622__auto__ = e38025;
var statearr_38026_38084 = state_37998;
(statearr_38026_38084[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38085 = state_37998;
state_37998 = G__38085;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__ = function(state_37998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1.call(this,state_37998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__,jobs,results,process,async))
})();
var state__37708__auto__ = (function (){var statearr_38027 = f__37707__auto__.call(null);
(statearr_38027[(6)] = c__37706__auto__);

return statearr_38027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__,jobs,results,process,async))
);

return c__37706__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38087 = arguments.length;
switch (G__38087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38090 = arguments.length;
switch (G__38090) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38093 = arguments.length;
switch (G__38093) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37706__auto___38142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___38142,tc,fc){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___38142,tc,fc){
return (function (state_38119){
var state_val_38120 = (state_38119[(1)]);
if((state_val_38120 === (7))){
var inst_38115 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38121_38143 = state_38119__$1;
(statearr_38121_38143[(2)] = inst_38115);

(statearr_38121_38143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (1))){
var state_38119__$1 = state_38119;
var statearr_38122_38144 = state_38119__$1;
(statearr_38122_38144[(2)] = null);

(statearr_38122_38144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (4))){
var inst_38096 = (state_38119[(7)]);
var inst_38096__$1 = (state_38119[(2)]);
var inst_38097 = (inst_38096__$1 == null);
var state_38119__$1 = (function (){var statearr_38123 = state_38119;
(statearr_38123[(7)] = inst_38096__$1);

return statearr_38123;
})();
if(cljs.core.truth_(inst_38097)){
var statearr_38124_38145 = state_38119__$1;
(statearr_38124_38145[(1)] = (5));

} else {
var statearr_38125_38146 = state_38119__$1;
(statearr_38125_38146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (13))){
var state_38119__$1 = state_38119;
var statearr_38126_38147 = state_38119__$1;
(statearr_38126_38147[(2)] = null);

(statearr_38126_38147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (6))){
var inst_38096 = (state_38119[(7)]);
var inst_38102 = p.call(null,inst_38096);
var state_38119__$1 = state_38119;
if(cljs.core.truth_(inst_38102)){
var statearr_38127_38148 = state_38119__$1;
(statearr_38127_38148[(1)] = (9));

} else {
var statearr_38128_38149 = state_38119__$1;
(statearr_38128_38149[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (3))){
var inst_38117 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38119__$1,inst_38117);
} else {
if((state_val_38120 === (12))){
var state_38119__$1 = state_38119;
var statearr_38129_38150 = state_38119__$1;
(statearr_38129_38150[(2)] = null);

(statearr_38129_38150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (2))){
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38119__$1,(4),ch);
} else {
if((state_val_38120 === (11))){
var inst_38096 = (state_38119[(7)]);
var inst_38106 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38119__$1,(8),inst_38106,inst_38096);
} else {
if((state_val_38120 === (9))){
var state_38119__$1 = state_38119;
var statearr_38130_38151 = state_38119__$1;
(statearr_38130_38151[(2)] = tc);

(statearr_38130_38151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (5))){
var inst_38099 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38100 = cljs.core.async.close_BANG_.call(null,fc);
var state_38119__$1 = (function (){var statearr_38131 = state_38119;
(statearr_38131[(8)] = inst_38099);

return statearr_38131;
})();
var statearr_38132_38152 = state_38119__$1;
(statearr_38132_38152[(2)] = inst_38100);

(statearr_38132_38152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (14))){
var inst_38113 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
var statearr_38133_38153 = state_38119__$1;
(statearr_38133_38153[(2)] = inst_38113);

(statearr_38133_38153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (10))){
var state_38119__$1 = state_38119;
var statearr_38134_38154 = state_38119__$1;
(statearr_38134_38154[(2)] = fc);

(statearr_38134_38154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38120 === (8))){
var inst_38108 = (state_38119[(2)]);
var state_38119__$1 = state_38119;
if(cljs.core.truth_(inst_38108)){
var statearr_38135_38155 = state_38119__$1;
(statearr_38135_38155[(1)] = (12));

} else {
var statearr_38136_38156 = state_38119__$1;
(statearr_38136_38156[(1)] = (13));

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
});})(c__37706__auto___38142,tc,fc))
;
return ((function (switch__37618__auto__,c__37706__auto___38142,tc,fc){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_38137 = [null,null,null,null,null,null,null,null,null];
(statearr_38137[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_38137[(1)] = (1));

return statearr_38137;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_38119){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38138){if((e38138 instanceof Object)){
var ex__37622__auto__ = e38138;
var statearr_38139_38157 = state_38119;
(statearr_38139_38157[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38158 = state_38119;
state_38119 = G__38158;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_38119){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_38119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___38142,tc,fc))
})();
var state__37708__auto__ = (function (){var statearr_38140 = f__37707__auto__.call(null);
(statearr_38140[(6)] = c__37706__auto___38142);

return statearr_38140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___38142,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__){
return (function (state_38179){
var state_val_38180 = (state_38179[(1)]);
if((state_val_38180 === (7))){
var inst_38175 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38181_38199 = state_38179__$1;
(statearr_38181_38199[(2)] = inst_38175);

(statearr_38181_38199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (1))){
var inst_38159 = init;
var state_38179__$1 = (function (){var statearr_38182 = state_38179;
(statearr_38182[(7)] = inst_38159);

return statearr_38182;
})();
var statearr_38183_38200 = state_38179__$1;
(statearr_38183_38200[(2)] = null);

(statearr_38183_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (4))){
var inst_38162 = (state_38179[(8)]);
var inst_38162__$1 = (state_38179[(2)]);
var inst_38163 = (inst_38162__$1 == null);
var state_38179__$1 = (function (){var statearr_38184 = state_38179;
(statearr_38184[(8)] = inst_38162__$1);

return statearr_38184;
})();
if(cljs.core.truth_(inst_38163)){
var statearr_38185_38201 = state_38179__$1;
(statearr_38185_38201[(1)] = (5));

} else {
var statearr_38186_38202 = state_38179__$1;
(statearr_38186_38202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (6))){
var inst_38159 = (state_38179[(7)]);
var inst_38162 = (state_38179[(8)]);
var inst_38166 = (state_38179[(9)]);
var inst_38166__$1 = f.call(null,inst_38159,inst_38162);
var inst_38167 = cljs.core.reduced_QMARK_.call(null,inst_38166__$1);
var state_38179__$1 = (function (){var statearr_38187 = state_38179;
(statearr_38187[(9)] = inst_38166__$1);

return statearr_38187;
})();
if(inst_38167){
var statearr_38188_38203 = state_38179__$1;
(statearr_38188_38203[(1)] = (8));

} else {
var statearr_38189_38204 = state_38179__$1;
(statearr_38189_38204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (3))){
var inst_38177 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38179__$1,inst_38177);
} else {
if((state_val_38180 === (2))){
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38179__$1,(4),ch);
} else {
if((state_val_38180 === (9))){
var inst_38166 = (state_38179[(9)]);
var inst_38159 = inst_38166;
var state_38179__$1 = (function (){var statearr_38190 = state_38179;
(statearr_38190[(7)] = inst_38159);

return statearr_38190;
})();
var statearr_38191_38205 = state_38179__$1;
(statearr_38191_38205[(2)] = null);

(statearr_38191_38205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (5))){
var inst_38159 = (state_38179[(7)]);
var state_38179__$1 = state_38179;
var statearr_38192_38206 = state_38179__$1;
(statearr_38192_38206[(2)] = inst_38159);

(statearr_38192_38206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (10))){
var inst_38173 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38193_38207 = state_38179__$1;
(statearr_38193_38207[(2)] = inst_38173);

(statearr_38193_38207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (8))){
var inst_38166 = (state_38179[(9)]);
var inst_38169 = cljs.core.deref.call(null,inst_38166);
var state_38179__$1 = state_38179;
var statearr_38194_38208 = state_38179__$1;
(statearr_38194_38208[(2)] = inst_38169);

(statearr_38194_38208[(1)] = (10));


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
});})(c__37706__auto__))
;
return ((function (switch__37618__auto__,c__37706__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37619__auto____0 = (function (){
var statearr_38195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38195[(0)] = cljs$core$async$reduce_$_state_machine__37619__auto__);

(statearr_38195[(1)] = (1));

return statearr_38195;
});
var cljs$core$async$reduce_$_state_machine__37619__auto____1 = (function (state_38179){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38196){if((e38196 instanceof Object)){
var ex__37622__auto__ = e38196;
var statearr_38197_38209 = state_38179;
(statearr_38197_38209[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38210 = state_38179;
state_38179 = G__38210;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37619__auto__ = function(state_38179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37619__auto____1.call(this,state_38179);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37619__auto____0;
cljs$core$async$reduce_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37619__auto____1;
return cljs$core$async$reduce_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__))
})();
var state__37708__auto__ = (function (){var statearr_38198 = f__37707__auto__.call(null);
(statearr_38198[(6)] = c__37706__auto__);

return statearr_38198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__))
);

return c__37706__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__,f__$1){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__,f__$1){
return (function (state_38216){
var state_val_38217 = (state_38216[(1)]);
if((state_val_38217 === (1))){
var inst_38211 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38216__$1 = state_38216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38216__$1,(2),inst_38211);
} else {
if((state_val_38217 === (2))){
var inst_38213 = (state_38216[(2)]);
var inst_38214 = f__$1.call(null,inst_38213);
var state_38216__$1 = state_38216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38216__$1,inst_38214);
} else {
return null;
}
}
});})(c__37706__auto__,f__$1))
;
return ((function (switch__37618__auto__,c__37706__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37619__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37619__auto____0 = (function (){
var statearr_38218 = [null,null,null,null,null,null,null];
(statearr_38218[(0)] = cljs$core$async$transduce_$_state_machine__37619__auto__);

(statearr_38218[(1)] = (1));

return statearr_38218;
});
var cljs$core$async$transduce_$_state_machine__37619__auto____1 = (function (state_38216){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38219){if((e38219 instanceof Object)){
var ex__37622__auto__ = e38219;
var statearr_38220_38222 = state_38216;
(statearr_38220_38222[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38223 = state_38216;
state_38216 = G__38223;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37619__auto__ = function(state_38216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37619__auto____1.call(this,state_38216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37619__auto____0;
cljs$core$async$transduce_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37619__auto____1;
return cljs$core$async$transduce_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__,f__$1))
})();
var state__37708__auto__ = (function (){var statearr_38221 = f__37707__auto__.call(null);
(statearr_38221[(6)] = c__37706__auto__);

return statearr_38221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__,f__$1))
);

return c__37706__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38225 = arguments.length;
switch (G__38225) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__){
return (function (state_38250){
var state_val_38251 = (state_38250[(1)]);
if((state_val_38251 === (7))){
var inst_38232 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38252_38273 = state_38250__$1;
(statearr_38252_38273[(2)] = inst_38232);

(statearr_38252_38273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (1))){
var inst_38226 = cljs.core.seq.call(null,coll);
var inst_38227 = inst_38226;
var state_38250__$1 = (function (){var statearr_38253 = state_38250;
(statearr_38253[(7)] = inst_38227);

return statearr_38253;
})();
var statearr_38254_38274 = state_38250__$1;
(statearr_38254_38274[(2)] = null);

(statearr_38254_38274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (4))){
var inst_38227 = (state_38250[(7)]);
var inst_38230 = cljs.core.first.call(null,inst_38227);
var state_38250__$1 = state_38250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38250__$1,(7),ch,inst_38230);
} else {
if((state_val_38251 === (13))){
var inst_38244 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38255_38275 = state_38250__$1;
(statearr_38255_38275[(2)] = inst_38244);

(statearr_38255_38275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (6))){
var inst_38235 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
if(cljs.core.truth_(inst_38235)){
var statearr_38256_38276 = state_38250__$1;
(statearr_38256_38276[(1)] = (8));

} else {
var statearr_38257_38277 = state_38250__$1;
(statearr_38257_38277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (3))){
var inst_38248 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38250__$1,inst_38248);
} else {
if((state_val_38251 === (12))){
var state_38250__$1 = state_38250;
var statearr_38258_38278 = state_38250__$1;
(statearr_38258_38278[(2)] = null);

(statearr_38258_38278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (2))){
var inst_38227 = (state_38250[(7)]);
var state_38250__$1 = state_38250;
if(cljs.core.truth_(inst_38227)){
var statearr_38259_38279 = state_38250__$1;
(statearr_38259_38279[(1)] = (4));

} else {
var statearr_38260_38280 = state_38250__$1;
(statearr_38260_38280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (11))){
var inst_38241 = cljs.core.async.close_BANG_.call(null,ch);
var state_38250__$1 = state_38250;
var statearr_38261_38281 = state_38250__$1;
(statearr_38261_38281[(2)] = inst_38241);

(statearr_38261_38281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (9))){
var state_38250__$1 = state_38250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38262_38282 = state_38250__$1;
(statearr_38262_38282[(1)] = (11));

} else {
var statearr_38263_38283 = state_38250__$1;
(statearr_38263_38283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (5))){
var inst_38227 = (state_38250[(7)]);
var state_38250__$1 = state_38250;
var statearr_38264_38284 = state_38250__$1;
(statearr_38264_38284[(2)] = inst_38227);

(statearr_38264_38284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (10))){
var inst_38246 = (state_38250[(2)]);
var state_38250__$1 = state_38250;
var statearr_38265_38285 = state_38250__$1;
(statearr_38265_38285[(2)] = inst_38246);

(statearr_38265_38285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38251 === (8))){
var inst_38227 = (state_38250[(7)]);
var inst_38237 = cljs.core.next.call(null,inst_38227);
var inst_38227__$1 = inst_38237;
var state_38250__$1 = (function (){var statearr_38266 = state_38250;
(statearr_38266[(7)] = inst_38227__$1);

return statearr_38266;
})();
var statearr_38267_38286 = state_38250__$1;
(statearr_38267_38286[(2)] = null);

(statearr_38267_38286[(1)] = (2));


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
});})(c__37706__auto__))
;
return ((function (switch__37618__auto__,c__37706__auto__){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_38268 = [null,null,null,null,null,null,null,null];
(statearr_38268[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_38268[(1)] = (1));

return statearr_38268;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_38250){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38269){if((e38269 instanceof Object)){
var ex__37622__auto__ = e38269;
var statearr_38270_38287 = state_38250;
(statearr_38270_38287[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38288 = state_38250;
state_38250 = G__38288;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_38250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_38250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__))
})();
var state__37708__auto__ = (function (){var statearr_38271 = f__37707__auto__.call(null);
(statearr_38271[(6)] = c__37706__auto__);

return statearr_38271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__))
);

return c__37706__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29116__auto__ = (((_ == null))?null:_);
var m__29117__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,_);
} else {
var m__29117__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29117__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m,ch);
} else {
var m__29117__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m);
} else {
var m__29117__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38289 = (function (ch,cs,meta38290){
this.ch = ch;
this.cs = cs;
this.meta38290 = meta38290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38291,meta38290__$1){
var self__ = this;
var _38291__$1 = this;
return (new cljs.core.async.t_cljs$core$async38289(self__.ch,self__.cs,meta38290__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38291){
var self__ = this;
var _38291__$1 = this;
return self__.meta38290;
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38290","meta38290",-1578067623,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38289";

cljs.core.async.t_cljs$core$async38289.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async38289");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38289 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38289(ch__$1,cs__$1,meta38290){
return (new cljs.core.async.t_cljs$core$async38289(ch__$1,cs__$1,meta38290));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38289(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37706__auto___38511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___38511,cs,m,dchan,dctr,done){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___38511,cs,m,dchan,dctr,done){
return (function (state_38426){
var state_val_38427 = (state_38426[(1)]);
if((state_val_38427 === (7))){
var inst_38422 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38428_38512 = state_38426__$1;
(statearr_38428_38512[(2)] = inst_38422);

(statearr_38428_38512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (20))){
var inst_38325 = (state_38426[(7)]);
var inst_38337 = cljs.core.first.call(null,inst_38325);
var inst_38338 = cljs.core.nth.call(null,inst_38337,(0),null);
var inst_38339 = cljs.core.nth.call(null,inst_38337,(1),null);
var state_38426__$1 = (function (){var statearr_38429 = state_38426;
(statearr_38429[(8)] = inst_38338);

return statearr_38429;
})();
if(cljs.core.truth_(inst_38339)){
var statearr_38430_38513 = state_38426__$1;
(statearr_38430_38513[(1)] = (22));

} else {
var statearr_38431_38514 = state_38426__$1;
(statearr_38431_38514[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (27))){
var inst_38369 = (state_38426[(9)]);
var inst_38367 = (state_38426[(10)]);
var inst_38294 = (state_38426[(11)]);
var inst_38374 = (state_38426[(12)]);
var inst_38374__$1 = cljs.core._nth.call(null,inst_38367,inst_38369);
var inst_38375 = cljs.core.async.put_BANG_.call(null,inst_38374__$1,inst_38294,done);
var state_38426__$1 = (function (){var statearr_38432 = state_38426;
(statearr_38432[(12)] = inst_38374__$1);

return statearr_38432;
})();
if(cljs.core.truth_(inst_38375)){
var statearr_38433_38515 = state_38426__$1;
(statearr_38433_38515[(1)] = (30));

} else {
var statearr_38434_38516 = state_38426__$1;
(statearr_38434_38516[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (1))){
var state_38426__$1 = state_38426;
var statearr_38435_38517 = state_38426__$1;
(statearr_38435_38517[(2)] = null);

(statearr_38435_38517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (24))){
var inst_38325 = (state_38426[(7)]);
var inst_38344 = (state_38426[(2)]);
var inst_38345 = cljs.core.next.call(null,inst_38325);
var inst_38303 = inst_38345;
var inst_38304 = null;
var inst_38305 = (0);
var inst_38306 = (0);
var state_38426__$1 = (function (){var statearr_38436 = state_38426;
(statearr_38436[(13)] = inst_38304);

(statearr_38436[(14)] = inst_38303);

(statearr_38436[(15)] = inst_38305);

(statearr_38436[(16)] = inst_38344);

(statearr_38436[(17)] = inst_38306);

return statearr_38436;
})();
var statearr_38437_38518 = state_38426__$1;
(statearr_38437_38518[(2)] = null);

(statearr_38437_38518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (39))){
var state_38426__$1 = state_38426;
var statearr_38441_38519 = state_38426__$1;
(statearr_38441_38519[(2)] = null);

(statearr_38441_38519[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (4))){
var inst_38294 = (state_38426[(11)]);
var inst_38294__$1 = (state_38426[(2)]);
var inst_38295 = (inst_38294__$1 == null);
var state_38426__$1 = (function (){var statearr_38442 = state_38426;
(statearr_38442[(11)] = inst_38294__$1);

return statearr_38442;
})();
if(cljs.core.truth_(inst_38295)){
var statearr_38443_38520 = state_38426__$1;
(statearr_38443_38520[(1)] = (5));

} else {
var statearr_38444_38521 = state_38426__$1;
(statearr_38444_38521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (15))){
var inst_38304 = (state_38426[(13)]);
var inst_38303 = (state_38426[(14)]);
var inst_38305 = (state_38426[(15)]);
var inst_38306 = (state_38426[(17)]);
var inst_38321 = (state_38426[(2)]);
var inst_38322 = (inst_38306 + (1));
var tmp38438 = inst_38304;
var tmp38439 = inst_38303;
var tmp38440 = inst_38305;
var inst_38303__$1 = tmp38439;
var inst_38304__$1 = tmp38438;
var inst_38305__$1 = tmp38440;
var inst_38306__$1 = inst_38322;
var state_38426__$1 = (function (){var statearr_38445 = state_38426;
(statearr_38445[(13)] = inst_38304__$1);

(statearr_38445[(14)] = inst_38303__$1);

(statearr_38445[(15)] = inst_38305__$1);

(statearr_38445[(17)] = inst_38306__$1);

(statearr_38445[(18)] = inst_38321);

return statearr_38445;
})();
var statearr_38446_38522 = state_38426__$1;
(statearr_38446_38522[(2)] = null);

(statearr_38446_38522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (21))){
var inst_38348 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38450_38523 = state_38426__$1;
(statearr_38450_38523[(2)] = inst_38348);

(statearr_38450_38523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (31))){
var inst_38374 = (state_38426[(12)]);
var inst_38378 = done.call(null,null);
var inst_38379 = cljs.core.async.untap_STAR_.call(null,m,inst_38374);
var state_38426__$1 = (function (){var statearr_38451 = state_38426;
(statearr_38451[(19)] = inst_38378);

return statearr_38451;
})();
var statearr_38452_38524 = state_38426__$1;
(statearr_38452_38524[(2)] = inst_38379);

(statearr_38452_38524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (32))){
var inst_38368 = (state_38426[(20)]);
var inst_38369 = (state_38426[(9)]);
var inst_38367 = (state_38426[(10)]);
var inst_38366 = (state_38426[(21)]);
var inst_38381 = (state_38426[(2)]);
var inst_38382 = (inst_38369 + (1));
var tmp38447 = inst_38368;
var tmp38448 = inst_38367;
var tmp38449 = inst_38366;
var inst_38366__$1 = tmp38449;
var inst_38367__$1 = tmp38448;
var inst_38368__$1 = tmp38447;
var inst_38369__$1 = inst_38382;
var state_38426__$1 = (function (){var statearr_38453 = state_38426;
(statearr_38453[(20)] = inst_38368__$1);

(statearr_38453[(9)] = inst_38369__$1);

(statearr_38453[(10)] = inst_38367__$1);

(statearr_38453[(22)] = inst_38381);

(statearr_38453[(21)] = inst_38366__$1);

return statearr_38453;
})();
var statearr_38454_38525 = state_38426__$1;
(statearr_38454_38525[(2)] = null);

(statearr_38454_38525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (40))){
var inst_38394 = (state_38426[(23)]);
var inst_38398 = done.call(null,null);
var inst_38399 = cljs.core.async.untap_STAR_.call(null,m,inst_38394);
var state_38426__$1 = (function (){var statearr_38455 = state_38426;
(statearr_38455[(24)] = inst_38398);

return statearr_38455;
})();
var statearr_38456_38526 = state_38426__$1;
(statearr_38456_38526[(2)] = inst_38399);

(statearr_38456_38526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (33))){
var inst_38385 = (state_38426[(25)]);
var inst_38387 = cljs.core.chunked_seq_QMARK_.call(null,inst_38385);
var state_38426__$1 = state_38426;
if(inst_38387){
var statearr_38457_38527 = state_38426__$1;
(statearr_38457_38527[(1)] = (36));

} else {
var statearr_38458_38528 = state_38426__$1;
(statearr_38458_38528[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (13))){
var inst_38315 = (state_38426[(26)]);
var inst_38318 = cljs.core.async.close_BANG_.call(null,inst_38315);
var state_38426__$1 = state_38426;
var statearr_38459_38529 = state_38426__$1;
(statearr_38459_38529[(2)] = inst_38318);

(statearr_38459_38529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (22))){
var inst_38338 = (state_38426[(8)]);
var inst_38341 = cljs.core.async.close_BANG_.call(null,inst_38338);
var state_38426__$1 = state_38426;
var statearr_38460_38530 = state_38426__$1;
(statearr_38460_38530[(2)] = inst_38341);

(statearr_38460_38530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (36))){
var inst_38385 = (state_38426[(25)]);
var inst_38389 = cljs.core.chunk_first.call(null,inst_38385);
var inst_38390 = cljs.core.chunk_rest.call(null,inst_38385);
var inst_38391 = cljs.core.count.call(null,inst_38389);
var inst_38366 = inst_38390;
var inst_38367 = inst_38389;
var inst_38368 = inst_38391;
var inst_38369 = (0);
var state_38426__$1 = (function (){var statearr_38461 = state_38426;
(statearr_38461[(20)] = inst_38368);

(statearr_38461[(9)] = inst_38369);

(statearr_38461[(10)] = inst_38367);

(statearr_38461[(21)] = inst_38366);

return statearr_38461;
})();
var statearr_38462_38531 = state_38426__$1;
(statearr_38462_38531[(2)] = null);

(statearr_38462_38531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (41))){
var inst_38385 = (state_38426[(25)]);
var inst_38401 = (state_38426[(2)]);
var inst_38402 = cljs.core.next.call(null,inst_38385);
var inst_38366 = inst_38402;
var inst_38367 = null;
var inst_38368 = (0);
var inst_38369 = (0);
var state_38426__$1 = (function (){var statearr_38463 = state_38426;
(statearr_38463[(20)] = inst_38368);

(statearr_38463[(9)] = inst_38369);

(statearr_38463[(10)] = inst_38367);

(statearr_38463[(27)] = inst_38401);

(statearr_38463[(21)] = inst_38366);

return statearr_38463;
})();
var statearr_38464_38532 = state_38426__$1;
(statearr_38464_38532[(2)] = null);

(statearr_38464_38532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (43))){
var state_38426__$1 = state_38426;
var statearr_38465_38533 = state_38426__$1;
(statearr_38465_38533[(2)] = null);

(statearr_38465_38533[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (29))){
var inst_38410 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38466_38534 = state_38426__$1;
(statearr_38466_38534[(2)] = inst_38410);

(statearr_38466_38534[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (44))){
var inst_38419 = (state_38426[(2)]);
var state_38426__$1 = (function (){var statearr_38467 = state_38426;
(statearr_38467[(28)] = inst_38419);

return statearr_38467;
})();
var statearr_38468_38535 = state_38426__$1;
(statearr_38468_38535[(2)] = null);

(statearr_38468_38535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (6))){
var inst_38358 = (state_38426[(29)]);
var inst_38357 = cljs.core.deref.call(null,cs);
var inst_38358__$1 = cljs.core.keys.call(null,inst_38357);
var inst_38359 = cljs.core.count.call(null,inst_38358__$1);
var inst_38360 = cljs.core.reset_BANG_.call(null,dctr,inst_38359);
var inst_38365 = cljs.core.seq.call(null,inst_38358__$1);
var inst_38366 = inst_38365;
var inst_38367 = null;
var inst_38368 = (0);
var inst_38369 = (0);
var state_38426__$1 = (function (){var statearr_38469 = state_38426;
(statearr_38469[(29)] = inst_38358__$1);

(statearr_38469[(20)] = inst_38368);

(statearr_38469[(9)] = inst_38369);

(statearr_38469[(10)] = inst_38367);

(statearr_38469[(21)] = inst_38366);

(statearr_38469[(30)] = inst_38360);

return statearr_38469;
})();
var statearr_38470_38536 = state_38426__$1;
(statearr_38470_38536[(2)] = null);

(statearr_38470_38536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (28))){
var inst_38385 = (state_38426[(25)]);
var inst_38366 = (state_38426[(21)]);
var inst_38385__$1 = cljs.core.seq.call(null,inst_38366);
var state_38426__$1 = (function (){var statearr_38471 = state_38426;
(statearr_38471[(25)] = inst_38385__$1);

return statearr_38471;
})();
if(inst_38385__$1){
var statearr_38472_38537 = state_38426__$1;
(statearr_38472_38537[(1)] = (33));

} else {
var statearr_38473_38538 = state_38426__$1;
(statearr_38473_38538[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (25))){
var inst_38368 = (state_38426[(20)]);
var inst_38369 = (state_38426[(9)]);
var inst_38371 = (inst_38369 < inst_38368);
var inst_38372 = inst_38371;
var state_38426__$1 = state_38426;
if(cljs.core.truth_(inst_38372)){
var statearr_38474_38539 = state_38426__$1;
(statearr_38474_38539[(1)] = (27));

} else {
var statearr_38475_38540 = state_38426__$1;
(statearr_38475_38540[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (34))){
var state_38426__$1 = state_38426;
var statearr_38476_38541 = state_38426__$1;
(statearr_38476_38541[(2)] = null);

(statearr_38476_38541[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (17))){
var state_38426__$1 = state_38426;
var statearr_38477_38542 = state_38426__$1;
(statearr_38477_38542[(2)] = null);

(statearr_38477_38542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (3))){
var inst_38424 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38426__$1,inst_38424);
} else {
if((state_val_38427 === (12))){
var inst_38353 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38478_38543 = state_38426__$1;
(statearr_38478_38543[(2)] = inst_38353);

(statearr_38478_38543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (2))){
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38426__$1,(4),ch);
} else {
if((state_val_38427 === (23))){
var state_38426__$1 = state_38426;
var statearr_38479_38544 = state_38426__$1;
(statearr_38479_38544[(2)] = null);

(statearr_38479_38544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (35))){
var inst_38408 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38480_38545 = state_38426__$1;
(statearr_38480_38545[(2)] = inst_38408);

(statearr_38480_38545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (19))){
var inst_38325 = (state_38426[(7)]);
var inst_38329 = cljs.core.chunk_first.call(null,inst_38325);
var inst_38330 = cljs.core.chunk_rest.call(null,inst_38325);
var inst_38331 = cljs.core.count.call(null,inst_38329);
var inst_38303 = inst_38330;
var inst_38304 = inst_38329;
var inst_38305 = inst_38331;
var inst_38306 = (0);
var state_38426__$1 = (function (){var statearr_38481 = state_38426;
(statearr_38481[(13)] = inst_38304);

(statearr_38481[(14)] = inst_38303);

(statearr_38481[(15)] = inst_38305);

(statearr_38481[(17)] = inst_38306);

return statearr_38481;
})();
var statearr_38482_38546 = state_38426__$1;
(statearr_38482_38546[(2)] = null);

(statearr_38482_38546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (11))){
var inst_38303 = (state_38426[(14)]);
var inst_38325 = (state_38426[(7)]);
var inst_38325__$1 = cljs.core.seq.call(null,inst_38303);
var state_38426__$1 = (function (){var statearr_38483 = state_38426;
(statearr_38483[(7)] = inst_38325__$1);

return statearr_38483;
})();
if(inst_38325__$1){
var statearr_38484_38547 = state_38426__$1;
(statearr_38484_38547[(1)] = (16));

} else {
var statearr_38485_38548 = state_38426__$1;
(statearr_38485_38548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (9))){
var inst_38355 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38486_38549 = state_38426__$1;
(statearr_38486_38549[(2)] = inst_38355);

(statearr_38486_38549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (5))){
var inst_38301 = cljs.core.deref.call(null,cs);
var inst_38302 = cljs.core.seq.call(null,inst_38301);
var inst_38303 = inst_38302;
var inst_38304 = null;
var inst_38305 = (0);
var inst_38306 = (0);
var state_38426__$1 = (function (){var statearr_38487 = state_38426;
(statearr_38487[(13)] = inst_38304);

(statearr_38487[(14)] = inst_38303);

(statearr_38487[(15)] = inst_38305);

(statearr_38487[(17)] = inst_38306);

return statearr_38487;
})();
var statearr_38488_38550 = state_38426__$1;
(statearr_38488_38550[(2)] = null);

(statearr_38488_38550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (14))){
var state_38426__$1 = state_38426;
var statearr_38489_38551 = state_38426__$1;
(statearr_38489_38551[(2)] = null);

(statearr_38489_38551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (45))){
var inst_38416 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38490_38552 = state_38426__$1;
(statearr_38490_38552[(2)] = inst_38416);

(statearr_38490_38552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (26))){
var inst_38358 = (state_38426[(29)]);
var inst_38412 = (state_38426[(2)]);
var inst_38413 = cljs.core.seq.call(null,inst_38358);
var state_38426__$1 = (function (){var statearr_38491 = state_38426;
(statearr_38491[(31)] = inst_38412);

return statearr_38491;
})();
if(inst_38413){
var statearr_38492_38553 = state_38426__$1;
(statearr_38492_38553[(1)] = (42));

} else {
var statearr_38493_38554 = state_38426__$1;
(statearr_38493_38554[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (16))){
var inst_38325 = (state_38426[(7)]);
var inst_38327 = cljs.core.chunked_seq_QMARK_.call(null,inst_38325);
var state_38426__$1 = state_38426;
if(inst_38327){
var statearr_38494_38555 = state_38426__$1;
(statearr_38494_38555[(1)] = (19));

} else {
var statearr_38495_38556 = state_38426__$1;
(statearr_38495_38556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (38))){
var inst_38405 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38496_38557 = state_38426__$1;
(statearr_38496_38557[(2)] = inst_38405);

(statearr_38496_38557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (30))){
var state_38426__$1 = state_38426;
var statearr_38497_38558 = state_38426__$1;
(statearr_38497_38558[(2)] = null);

(statearr_38497_38558[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (10))){
var inst_38304 = (state_38426[(13)]);
var inst_38306 = (state_38426[(17)]);
var inst_38314 = cljs.core._nth.call(null,inst_38304,inst_38306);
var inst_38315 = cljs.core.nth.call(null,inst_38314,(0),null);
var inst_38316 = cljs.core.nth.call(null,inst_38314,(1),null);
var state_38426__$1 = (function (){var statearr_38498 = state_38426;
(statearr_38498[(26)] = inst_38315);

return statearr_38498;
})();
if(cljs.core.truth_(inst_38316)){
var statearr_38499_38559 = state_38426__$1;
(statearr_38499_38559[(1)] = (13));

} else {
var statearr_38500_38560 = state_38426__$1;
(statearr_38500_38560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (18))){
var inst_38351 = (state_38426[(2)]);
var state_38426__$1 = state_38426;
var statearr_38501_38561 = state_38426__$1;
(statearr_38501_38561[(2)] = inst_38351);

(statearr_38501_38561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (42))){
var state_38426__$1 = state_38426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38426__$1,(45),dchan);
} else {
if((state_val_38427 === (37))){
var inst_38385 = (state_38426[(25)]);
var inst_38294 = (state_38426[(11)]);
var inst_38394 = (state_38426[(23)]);
var inst_38394__$1 = cljs.core.first.call(null,inst_38385);
var inst_38395 = cljs.core.async.put_BANG_.call(null,inst_38394__$1,inst_38294,done);
var state_38426__$1 = (function (){var statearr_38502 = state_38426;
(statearr_38502[(23)] = inst_38394__$1);

return statearr_38502;
})();
if(cljs.core.truth_(inst_38395)){
var statearr_38503_38562 = state_38426__$1;
(statearr_38503_38562[(1)] = (39));

} else {
var statearr_38504_38563 = state_38426__$1;
(statearr_38504_38563[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38427 === (8))){
var inst_38305 = (state_38426[(15)]);
var inst_38306 = (state_38426[(17)]);
var inst_38308 = (inst_38306 < inst_38305);
var inst_38309 = inst_38308;
var state_38426__$1 = state_38426;
if(cljs.core.truth_(inst_38309)){
var statearr_38505_38564 = state_38426__$1;
(statearr_38505_38564[(1)] = (10));

} else {
var statearr_38506_38565 = state_38426__$1;
(statearr_38506_38565[(1)] = (11));

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
});})(c__37706__auto___38511,cs,m,dchan,dctr,done))
;
return ((function (switch__37618__auto__,c__37706__auto___38511,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37619__auto__ = null;
var cljs$core$async$mult_$_state_machine__37619__auto____0 = (function (){
var statearr_38507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38507[(0)] = cljs$core$async$mult_$_state_machine__37619__auto__);

(statearr_38507[(1)] = (1));

return statearr_38507;
});
var cljs$core$async$mult_$_state_machine__37619__auto____1 = (function (state_38426){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38508){if((e38508 instanceof Object)){
var ex__37622__auto__ = e38508;
var statearr_38509_38566 = state_38426;
(statearr_38509_38566[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38567 = state_38426;
state_38426 = G__38567;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37619__auto__ = function(state_38426){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37619__auto____1.call(this,state_38426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37619__auto____0;
cljs$core$async$mult_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37619__auto____1;
return cljs$core$async$mult_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___38511,cs,m,dchan,dctr,done))
})();
var state__37708__auto__ = (function (){var statearr_38510 = f__37707__auto__.call(null);
(statearr_38510[(6)] = c__37706__auto___38511);

return statearr_38510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___38511,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38569 = arguments.length;
switch (G__38569) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m,ch);
} else {
var m__29117__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m,ch);
} else {
var m__29117__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m);
} else {
var m__29117__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m,state_map);
} else {
var m__29117__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29116__auto__ = (((m == null))?null:m);
var m__29117__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,m,mode);
} else {
var m__29117__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29609__auto__ = [];
var len__29602__auto___38581 = arguments.length;
var i__29603__auto___38582 = (0);
while(true){
if((i__29603__auto___38582 < len__29602__auto___38581)){
args__29609__auto__.push((arguments[i__29603__auto___38582]));

var G__38583 = (i__29603__auto___38582 + (1));
i__29603__auto___38582 = G__38583;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((3) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29610__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38575){
var map__38576 = p__38575;
var map__38576__$1 = ((((!((map__38576 == null)))?((((map__38576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38576.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38576):map__38576);
var opts = map__38576__$1;
var statearr_38578_38584 = state;
(statearr_38578_38584[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38576,map__38576__$1,opts){
return (function (val){
var statearr_38579_38585 = state;
(statearr_38579_38585[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38576,map__38576__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38580_38586 = state;
(statearr_38580_38586[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38571){
var G__38572 = cljs.core.first.call(null,seq38571);
var seq38571__$1 = cljs.core.next.call(null,seq38571);
var G__38573 = cljs.core.first.call(null,seq38571__$1);
var seq38571__$2 = cljs.core.next.call(null,seq38571__$1);
var G__38574 = cljs.core.first.call(null,seq38571__$2);
var seq38571__$3 = cljs.core.next.call(null,seq38571__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38572,G__38573,G__38574,seq38571__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38587 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta38588){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta38588 = meta38588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38589,meta38588__$1){
var self__ = this;
var _38589__$1 = this;
return (new cljs.core.async.t_cljs$core$async38587(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta38588__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38589){
var self__ = this;
var _38589__$1 = this;
return self__.meta38588;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta38588","meta38588",-1746220169,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38587";

cljs.core.async.t_cljs$core$async38587.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async38587");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38587 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38587(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38588){
return (new cljs.core.async.t_cljs$core$async38587(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta38588));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38587(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37706__auto___38751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___38751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___38751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38691){
var state_val_38692 = (state_38691[(1)]);
if((state_val_38692 === (7))){
var inst_38606 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38693_38752 = state_38691__$1;
(statearr_38693_38752[(2)] = inst_38606);

(statearr_38693_38752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (20))){
var inst_38618 = (state_38691[(7)]);
var state_38691__$1 = state_38691;
var statearr_38694_38753 = state_38691__$1;
(statearr_38694_38753[(2)] = inst_38618);

(statearr_38694_38753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (27))){
var state_38691__$1 = state_38691;
var statearr_38695_38754 = state_38691__$1;
(statearr_38695_38754[(2)] = null);

(statearr_38695_38754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (1))){
var inst_38593 = (state_38691[(8)]);
var inst_38593__$1 = calc_state.call(null);
var inst_38595 = (inst_38593__$1 == null);
var inst_38596 = cljs.core.not.call(null,inst_38595);
var state_38691__$1 = (function (){var statearr_38696 = state_38691;
(statearr_38696[(8)] = inst_38593__$1);

return statearr_38696;
})();
if(inst_38596){
var statearr_38697_38755 = state_38691__$1;
(statearr_38697_38755[(1)] = (2));

} else {
var statearr_38698_38756 = state_38691__$1;
(statearr_38698_38756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (24))){
var inst_38642 = (state_38691[(9)]);
var inst_38651 = (state_38691[(10)]);
var inst_38665 = (state_38691[(11)]);
var inst_38665__$1 = inst_38642.call(null,inst_38651);
var state_38691__$1 = (function (){var statearr_38699 = state_38691;
(statearr_38699[(11)] = inst_38665__$1);

return statearr_38699;
})();
if(cljs.core.truth_(inst_38665__$1)){
var statearr_38700_38757 = state_38691__$1;
(statearr_38700_38757[(1)] = (29));

} else {
var statearr_38701_38758 = state_38691__$1;
(statearr_38701_38758[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (4))){
var inst_38609 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38609)){
var statearr_38702_38759 = state_38691__$1;
(statearr_38702_38759[(1)] = (8));

} else {
var statearr_38703_38760 = state_38691__$1;
(statearr_38703_38760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (15))){
var inst_38636 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38636)){
var statearr_38704_38761 = state_38691__$1;
(statearr_38704_38761[(1)] = (19));

} else {
var statearr_38705_38762 = state_38691__$1;
(statearr_38705_38762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (21))){
var inst_38641 = (state_38691[(12)]);
var inst_38641__$1 = (state_38691[(2)]);
var inst_38642 = cljs.core.get.call(null,inst_38641__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38643 = cljs.core.get.call(null,inst_38641__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38644 = cljs.core.get.call(null,inst_38641__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38691__$1 = (function (){var statearr_38706 = state_38691;
(statearr_38706[(9)] = inst_38642);

(statearr_38706[(12)] = inst_38641__$1);

(statearr_38706[(13)] = inst_38643);

return statearr_38706;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38691__$1,(22),inst_38644);
} else {
if((state_val_38692 === (31))){
var inst_38673 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38673)){
var statearr_38707_38763 = state_38691__$1;
(statearr_38707_38763[(1)] = (32));

} else {
var statearr_38708_38764 = state_38691__$1;
(statearr_38708_38764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (32))){
var inst_38650 = (state_38691[(14)]);
var state_38691__$1 = state_38691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38691__$1,(35),out,inst_38650);
} else {
if((state_val_38692 === (33))){
var inst_38641 = (state_38691[(12)]);
var inst_38618 = inst_38641;
var state_38691__$1 = (function (){var statearr_38709 = state_38691;
(statearr_38709[(7)] = inst_38618);

return statearr_38709;
})();
var statearr_38710_38765 = state_38691__$1;
(statearr_38710_38765[(2)] = null);

(statearr_38710_38765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (13))){
var inst_38618 = (state_38691[(7)]);
var inst_38625 = inst_38618.cljs$lang$protocol_mask$partition0$;
var inst_38626 = (inst_38625 & (64));
var inst_38627 = inst_38618.cljs$core$ISeq$;
var inst_38628 = (cljs.core.PROTOCOL_SENTINEL === inst_38627);
var inst_38629 = (inst_38626) || (inst_38628);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38629)){
var statearr_38711_38766 = state_38691__$1;
(statearr_38711_38766[(1)] = (16));

} else {
var statearr_38712_38767 = state_38691__$1;
(statearr_38712_38767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (22))){
var inst_38650 = (state_38691[(14)]);
var inst_38651 = (state_38691[(10)]);
var inst_38649 = (state_38691[(2)]);
var inst_38650__$1 = cljs.core.nth.call(null,inst_38649,(0),null);
var inst_38651__$1 = cljs.core.nth.call(null,inst_38649,(1),null);
var inst_38652 = (inst_38650__$1 == null);
var inst_38653 = cljs.core._EQ_.call(null,inst_38651__$1,change);
var inst_38654 = (inst_38652) || (inst_38653);
var state_38691__$1 = (function (){var statearr_38713 = state_38691;
(statearr_38713[(14)] = inst_38650__$1);

(statearr_38713[(10)] = inst_38651__$1);

return statearr_38713;
})();
if(cljs.core.truth_(inst_38654)){
var statearr_38714_38768 = state_38691__$1;
(statearr_38714_38768[(1)] = (23));

} else {
var statearr_38715_38769 = state_38691__$1;
(statearr_38715_38769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (36))){
var inst_38641 = (state_38691[(12)]);
var inst_38618 = inst_38641;
var state_38691__$1 = (function (){var statearr_38716 = state_38691;
(statearr_38716[(7)] = inst_38618);

return statearr_38716;
})();
var statearr_38717_38770 = state_38691__$1;
(statearr_38717_38770[(2)] = null);

(statearr_38717_38770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (29))){
var inst_38665 = (state_38691[(11)]);
var state_38691__$1 = state_38691;
var statearr_38718_38771 = state_38691__$1;
(statearr_38718_38771[(2)] = inst_38665);

(statearr_38718_38771[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (6))){
var state_38691__$1 = state_38691;
var statearr_38719_38772 = state_38691__$1;
(statearr_38719_38772[(2)] = false);

(statearr_38719_38772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (28))){
var inst_38661 = (state_38691[(2)]);
var inst_38662 = calc_state.call(null);
var inst_38618 = inst_38662;
var state_38691__$1 = (function (){var statearr_38720 = state_38691;
(statearr_38720[(7)] = inst_38618);

(statearr_38720[(15)] = inst_38661);

return statearr_38720;
})();
var statearr_38721_38773 = state_38691__$1;
(statearr_38721_38773[(2)] = null);

(statearr_38721_38773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (25))){
var inst_38687 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38722_38774 = state_38691__$1;
(statearr_38722_38774[(2)] = inst_38687);

(statearr_38722_38774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (34))){
var inst_38685 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38723_38775 = state_38691__$1;
(statearr_38723_38775[(2)] = inst_38685);

(statearr_38723_38775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (17))){
var state_38691__$1 = state_38691;
var statearr_38724_38776 = state_38691__$1;
(statearr_38724_38776[(2)] = false);

(statearr_38724_38776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (3))){
var state_38691__$1 = state_38691;
var statearr_38725_38777 = state_38691__$1;
(statearr_38725_38777[(2)] = false);

(statearr_38725_38777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (12))){
var inst_38689 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38691__$1,inst_38689);
} else {
if((state_val_38692 === (2))){
var inst_38593 = (state_38691[(8)]);
var inst_38598 = inst_38593.cljs$lang$protocol_mask$partition0$;
var inst_38599 = (inst_38598 & (64));
var inst_38600 = inst_38593.cljs$core$ISeq$;
var inst_38601 = (cljs.core.PROTOCOL_SENTINEL === inst_38600);
var inst_38602 = (inst_38599) || (inst_38601);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38602)){
var statearr_38726_38778 = state_38691__$1;
(statearr_38726_38778[(1)] = (5));

} else {
var statearr_38727_38779 = state_38691__$1;
(statearr_38727_38779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (23))){
var inst_38650 = (state_38691[(14)]);
var inst_38656 = (inst_38650 == null);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38656)){
var statearr_38728_38780 = state_38691__$1;
(statearr_38728_38780[(1)] = (26));

} else {
var statearr_38729_38781 = state_38691__$1;
(statearr_38729_38781[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (35))){
var inst_38676 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
if(cljs.core.truth_(inst_38676)){
var statearr_38730_38782 = state_38691__$1;
(statearr_38730_38782[(1)] = (36));

} else {
var statearr_38731_38783 = state_38691__$1;
(statearr_38731_38783[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (19))){
var inst_38618 = (state_38691[(7)]);
var inst_38638 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38618);
var state_38691__$1 = state_38691;
var statearr_38732_38784 = state_38691__$1;
(statearr_38732_38784[(2)] = inst_38638);

(statearr_38732_38784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (11))){
var inst_38618 = (state_38691[(7)]);
var inst_38622 = (inst_38618 == null);
var inst_38623 = cljs.core.not.call(null,inst_38622);
var state_38691__$1 = state_38691;
if(inst_38623){
var statearr_38733_38785 = state_38691__$1;
(statearr_38733_38785[(1)] = (13));

} else {
var statearr_38734_38786 = state_38691__$1;
(statearr_38734_38786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (9))){
var inst_38593 = (state_38691[(8)]);
var state_38691__$1 = state_38691;
var statearr_38735_38787 = state_38691__$1;
(statearr_38735_38787[(2)] = inst_38593);

(statearr_38735_38787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (5))){
var state_38691__$1 = state_38691;
var statearr_38736_38788 = state_38691__$1;
(statearr_38736_38788[(2)] = true);

(statearr_38736_38788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (14))){
var state_38691__$1 = state_38691;
var statearr_38737_38789 = state_38691__$1;
(statearr_38737_38789[(2)] = false);

(statearr_38737_38789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (26))){
var inst_38651 = (state_38691[(10)]);
var inst_38658 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38651);
var state_38691__$1 = state_38691;
var statearr_38738_38790 = state_38691__$1;
(statearr_38738_38790[(2)] = inst_38658);

(statearr_38738_38790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (16))){
var state_38691__$1 = state_38691;
var statearr_38739_38791 = state_38691__$1;
(statearr_38739_38791[(2)] = true);

(statearr_38739_38791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (38))){
var inst_38681 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38740_38792 = state_38691__$1;
(statearr_38740_38792[(2)] = inst_38681);

(statearr_38740_38792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (30))){
var inst_38642 = (state_38691[(9)]);
var inst_38651 = (state_38691[(10)]);
var inst_38643 = (state_38691[(13)]);
var inst_38668 = cljs.core.empty_QMARK_.call(null,inst_38642);
var inst_38669 = inst_38643.call(null,inst_38651);
var inst_38670 = cljs.core.not.call(null,inst_38669);
var inst_38671 = (inst_38668) && (inst_38670);
var state_38691__$1 = state_38691;
var statearr_38741_38793 = state_38691__$1;
(statearr_38741_38793[(2)] = inst_38671);

(statearr_38741_38793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (10))){
var inst_38593 = (state_38691[(8)]);
var inst_38614 = (state_38691[(2)]);
var inst_38615 = cljs.core.get.call(null,inst_38614,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38616 = cljs.core.get.call(null,inst_38614,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38617 = cljs.core.get.call(null,inst_38614,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38618 = inst_38593;
var state_38691__$1 = (function (){var statearr_38742 = state_38691;
(statearr_38742[(7)] = inst_38618);

(statearr_38742[(16)] = inst_38615);

(statearr_38742[(17)] = inst_38617);

(statearr_38742[(18)] = inst_38616);

return statearr_38742;
})();
var statearr_38743_38794 = state_38691__$1;
(statearr_38743_38794[(2)] = null);

(statearr_38743_38794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (18))){
var inst_38633 = (state_38691[(2)]);
var state_38691__$1 = state_38691;
var statearr_38744_38795 = state_38691__$1;
(statearr_38744_38795[(2)] = inst_38633);

(statearr_38744_38795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (37))){
var state_38691__$1 = state_38691;
var statearr_38745_38796 = state_38691__$1;
(statearr_38745_38796[(2)] = null);

(statearr_38745_38796[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38692 === (8))){
var inst_38593 = (state_38691[(8)]);
var inst_38611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38593);
var state_38691__$1 = state_38691;
var statearr_38746_38797 = state_38691__$1;
(statearr_38746_38797[(2)] = inst_38611);

(statearr_38746_38797[(1)] = (10));


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
});})(c__37706__auto___38751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37618__auto__,c__37706__auto___38751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37619__auto__ = null;
var cljs$core$async$mix_$_state_machine__37619__auto____0 = (function (){
var statearr_38747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38747[(0)] = cljs$core$async$mix_$_state_machine__37619__auto__);

(statearr_38747[(1)] = (1));

return statearr_38747;
});
var cljs$core$async$mix_$_state_machine__37619__auto____1 = (function (state_38691){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38748){if((e38748 instanceof Object)){
var ex__37622__auto__ = e38748;
var statearr_38749_38798 = state_38691;
(statearr_38749_38798[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38799 = state_38691;
state_38691 = G__38799;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37619__auto__ = function(state_38691){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37619__auto____1.call(this,state_38691);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37619__auto____0;
cljs$core$async$mix_$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37619__auto____1;
return cljs$core$async$mix_$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___38751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37708__auto__ = (function (){var statearr_38750 = f__37707__auto__.call(null);
(statearr_38750[(6)] = c__37706__auto___38751);

return statearr_38750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___38751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29116__auto__ = (((p == null))?null:p);
var m__29117__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29117__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29116__auto__ = (((p == null))?null:p);
var m__29117__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,p,v,ch);
} else {
var m__29117__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38801 = arguments.length;
switch (G__38801) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29116__auto__ = (((p == null))?null:p);
var m__29117__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,p);
} else {
var m__29117__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29116__auto__ = (((p == null))?null:p);
var m__29117__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29116__auto__)]);
if(!((m__29117__auto__ == null))){
return m__29117__auto__.call(null,p,v);
} else {
var m__29117__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29117__auto____$1 == null))){
return m__29117__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38805 = arguments.length;
switch (G__38805) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28433__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28433__auto__)){
return or__28433__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28433__auto__,mults){
return (function (p1__38803_SHARP_){
if(cljs.core.truth_(p1__38803_SHARP_.call(null,topic))){
return p1__38803_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38803_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28433__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async38806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38806 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38807){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38807 = meta38807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38808,meta38807__$1){
var self__ = this;
var _38808__$1 = this;
return (new cljs.core.async.t_cljs$core$async38806(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38807__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38808){
var self__ = this;
var _38808__$1 = this;
return self__.meta38807;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38807","meta38807",-2046664428,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38806";

cljs.core.async.t_cljs$core$async38806.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async38806");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async38806 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38807){
return (new cljs.core.async.t_cljs$core$async38806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38807));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38806(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37706__auto___38926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___38926,mults,ensure_mult,p){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___38926,mults,ensure_mult,p){
return (function (state_38880){
var state_val_38881 = (state_38880[(1)]);
if((state_val_38881 === (7))){
var inst_38876 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38882_38927 = state_38880__$1;
(statearr_38882_38927[(2)] = inst_38876);

(statearr_38882_38927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (20))){
var state_38880__$1 = state_38880;
var statearr_38883_38928 = state_38880__$1;
(statearr_38883_38928[(2)] = null);

(statearr_38883_38928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (1))){
var state_38880__$1 = state_38880;
var statearr_38884_38929 = state_38880__$1;
(statearr_38884_38929[(2)] = null);

(statearr_38884_38929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (24))){
var inst_38859 = (state_38880[(7)]);
var inst_38868 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38859);
var state_38880__$1 = state_38880;
var statearr_38885_38930 = state_38880__$1;
(statearr_38885_38930[(2)] = inst_38868);

(statearr_38885_38930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (4))){
var inst_38811 = (state_38880[(8)]);
var inst_38811__$1 = (state_38880[(2)]);
var inst_38812 = (inst_38811__$1 == null);
var state_38880__$1 = (function (){var statearr_38886 = state_38880;
(statearr_38886[(8)] = inst_38811__$1);

return statearr_38886;
})();
if(cljs.core.truth_(inst_38812)){
var statearr_38887_38931 = state_38880__$1;
(statearr_38887_38931[(1)] = (5));

} else {
var statearr_38888_38932 = state_38880__$1;
(statearr_38888_38932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (15))){
var inst_38853 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38889_38933 = state_38880__$1;
(statearr_38889_38933[(2)] = inst_38853);

(statearr_38889_38933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (21))){
var inst_38873 = (state_38880[(2)]);
var state_38880__$1 = (function (){var statearr_38890 = state_38880;
(statearr_38890[(9)] = inst_38873);

return statearr_38890;
})();
var statearr_38891_38934 = state_38880__$1;
(statearr_38891_38934[(2)] = null);

(statearr_38891_38934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (13))){
var inst_38835 = (state_38880[(10)]);
var inst_38837 = cljs.core.chunked_seq_QMARK_.call(null,inst_38835);
var state_38880__$1 = state_38880;
if(inst_38837){
var statearr_38892_38935 = state_38880__$1;
(statearr_38892_38935[(1)] = (16));

} else {
var statearr_38893_38936 = state_38880__$1;
(statearr_38893_38936[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (22))){
var inst_38865 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
if(cljs.core.truth_(inst_38865)){
var statearr_38894_38937 = state_38880__$1;
(statearr_38894_38937[(1)] = (23));

} else {
var statearr_38895_38938 = state_38880__$1;
(statearr_38895_38938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (6))){
var inst_38861 = (state_38880[(11)]);
var inst_38811 = (state_38880[(8)]);
var inst_38859 = (state_38880[(7)]);
var inst_38859__$1 = topic_fn.call(null,inst_38811);
var inst_38860 = cljs.core.deref.call(null,mults);
var inst_38861__$1 = cljs.core.get.call(null,inst_38860,inst_38859__$1);
var state_38880__$1 = (function (){var statearr_38896 = state_38880;
(statearr_38896[(11)] = inst_38861__$1);

(statearr_38896[(7)] = inst_38859__$1);

return statearr_38896;
})();
if(cljs.core.truth_(inst_38861__$1)){
var statearr_38897_38939 = state_38880__$1;
(statearr_38897_38939[(1)] = (19));

} else {
var statearr_38898_38940 = state_38880__$1;
(statearr_38898_38940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (25))){
var inst_38870 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38899_38941 = state_38880__$1;
(statearr_38899_38941[(2)] = inst_38870);

(statearr_38899_38941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (17))){
var inst_38835 = (state_38880[(10)]);
var inst_38844 = cljs.core.first.call(null,inst_38835);
var inst_38845 = cljs.core.async.muxch_STAR_.call(null,inst_38844);
var inst_38846 = cljs.core.async.close_BANG_.call(null,inst_38845);
var inst_38847 = cljs.core.next.call(null,inst_38835);
var inst_38821 = inst_38847;
var inst_38822 = null;
var inst_38823 = (0);
var inst_38824 = (0);
var state_38880__$1 = (function (){var statearr_38900 = state_38880;
(statearr_38900[(12)] = inst_38822);

(statearr_38900[(13)] = inst_38824);

(statearr_38900[(14)] = inst_38821);

(statearr_38900[(15)] = inst_38846);

(statearr_38900[(16)] = inst_38823);

return statearr_38900;
})();
var statearr_38901_38942 = state_38880__$1;
(statearr_38901_38942[(2)] = null);

(statearr_38901_38942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (3))){
var inst_38878 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38880__$1,inst_38878);
} else {
if((state_val_38881 === (12))){
var inst_38855 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38902_38943 = state_38880__$1;
(statearr_38902_38943[(2)] = inst_38855);

(statearr_38902_38943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (2))){
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38880__$1,(4),ch);
} else {
if((state_val_38881 === (23))){
var state_38880__$1 = state_38880;
var statearr_38903_38944 = state_38880__$1;
(statearr_38903_38944[(2)] = null);

(statearr_38903_38944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (19))){
var inst_38861 = (state_38880[(11)]);
var inst_38811 = (state_38880[(8)]);
var inst_38863 = cljs.core.async.muxch_STAR_.call(null,inst_38861);
var state_38880__$1 = state_38880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38880__$1,(22),inst_38863,inst_38811);
} else {
if((state_val_38881 === (11))){
var inst_38835 = (state_38880[(10)]);
var inst_38821 = (state_38880[(14)]);
var inst_38835__$1 = cljs.core.seq.call(null,inst_38821);
var state_38880__$1 = (function (){var statearr_38904 = state_38880;
(statearr_38904[(10)] = inst_38835__$1);

return statearr_38904;
})();
if(inst_38835__$1){
var statearr_38905_38945 = state_38880__$1;
(statearr_38905_38945[(1)] = (13));

} else {
var statearr_38906_38946 = state_38880__$1;
(statearr_38906_38946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (9))){
var inst_38857 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38907_38947 = state_38880__$1;
(statearr_38907_38947[(2)] = inst_38857);

(statearr_38907_38947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (5))){
var inst_38818 = cljs.core.deref.call(null,mults);
var inst_38819 = cljs.core.vals.call(null,inst_38818);
var inst_38820 = cljs.core.seq.call(null,inst_38819);
var inst_38821 = inst_38820;
var inst_38822 = null;
var inst_38823 = (0);
var inst_38824 = (0);
var state_38880__$1 = (function (){var statearr_38908 = state_38880;
(statearr_38908[(12)] = inst_38822);

(statearr_38908[(13)] = inst_38824);

(statearr_38908[(14)] = inst_38821);

(statearr_38908[(16)] = inst_38823);

return statearr_38908;
})();
var statearr_38909_38948 = state_38880__$1;
(statearr_38909_38948[(2)] = null);

(statearr_38909_38948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (14))){
var state_38880__$1 = state_38880;
var statearr_38913_38949 = state_38880__$1;
(statearr_38913_38949[(2)] = null);

(statearr_38913_38949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (16))){
var inst_38835 = (state_38880[(10)]);
var inst_38839 = cljs.core.chunk_first.call(null,inst_38835);
var inst_38840 = cljs.core.chunk_rest.call(null,inst_38835);
var inst_38841 = cljs.core.count.call(null,inst_38839);
var inst_38821 = inst_38840;
var inst_38822 = inst_38839;
var inst_38823 = inst_38841;
var inst_38824 = (0);
var state_38880__$1 = (function (){var statearr_38914 = state_38880;
(statearr_38914[(12)] = inst_38822);

(statearr_38914[(13)] = inst_38824);

(statearr_38914[(14)] = inst_38821);

(statearr_38914[(16)] = inst_38823);

return statearr_38914;
})();
var statearr_38915_38950 = state_38880__$1;
(statearr_38915_38950[(2)] = null);

(statearr_38915_38950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (10))){
var inst_38822 = (state_38880[(12)]);
var inst_38824 = (state_38880[(13)]);
var inst_38821 = (state_38880[(14)]);
var inst_38823 = (state_38880[(16)]);
var inst_38829 = cljs.core._nth.call(null,inst_38822,inst_38824);
var inst_38830 = cljs.core.async.muxch_STAR_.call(null,inst_38829);
var inst_38831 = cljs.core.async.close_BANG_.call(null,inst_38830);
var inst_38832 = (inst_38824 + (1));
var tmp38910 = inst_38822;
var tmp38911 = inst_38821;
var tmp38912 = inst_38823;
var inst_38821__$1 = tmp38911;
var inst_38822__$1 = tmp38910;
var inst_38823__$1 = tmp38912;
var inst_38824__$1 = inst_38832;
var state_38880__$1 = (function (){var statearr_38916 = state_38880;
(statearr_38916[(12)] = inst_38822__$1);

(statearr_38916[(17)] = inst_38831);

(statearr_38916[(13)] = inst_38824__$1);

(statearr_38916[(14)] = inst_38821__$1);

(statearr_38916[(16)] = inst_38823__$1);

return statearr_38916;
})();
var statearr_38917_38951 = state_38880__$1;
(statearr_38917_38951[(2)] = null);

(statearr_38917_38951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (18))){
var inst_38850 = (state_38880[(2)]);
var state_38880__$1 = state_38880;
var statearr_38918_38952 = state_38880__$1;
(statearr_38918_38952[(2)] = inst_38850);

(statearr_38918_38952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38881 === (8))){
var inst_38824 = (state_38880[(13)]);
var inst_38823 = (state_38880[(16)]);
var inst_38826 = (inst_38824 < inst_38823);
var inst_38827 = inst_38826;
var state_38880__$1 = state_38880;
if(cljs.core.truth_(inst_38827)){
var statearr_38919_38953 = state_38880__$1;
(statearr_38919_38953[(1)] = (10));

} else {
var statearr_38920_38954 = state_38880__$1;
(statearr_38920_38954[(1)] = (11));

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
});})(c__37706__auto___38926,mults,ensure_mult,p))
;
return ((function (switch__37618__auto__,c__37706__auto___38926,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_38921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38921[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_38921[(1)] = (1));

return statearr_38921;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_38880){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_38880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e38922){if((e38922 instanceof Object)){
var ex__37622__auto__ = e38922;
var statearr_38923_38955 = state_38880;
(statearr_38923_38955[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38956 = state_38880;
state_38880 = G__38956;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_38880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_38880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___38926,mults,ensure_mult,p))
})();
var state__37708__auto__ = (function (){var statearr_38924 = f__37707__auto__.call(null);
(statearr_38924[(6)] = c__37706__auto___38926);

return statearr_38924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___38926,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38958 = arguments.length;
switch (G__38958) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38961 = arguments.length;
switch (G__38961) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38964 = arguments.length;
switch (G__38964) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37706__auto___39031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39003){
var state_val_39004 = (state_39003[(1)]);
if((state_val_39004 === (7))){
var state_39003__$1 = state_39003;
var statearr_39005_39032 = state_39003__$1;
(statearr_39005_39032[(2)] = null);

(statearr_39005_39032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (1))){
var state_39003__$1 = state_39003;
var statearr_39006_39033 = state_39003__$1;
(statearr_39006_39033[(2)] = null);

(statearr_39006_39033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (4))){
var inst_38967 = (state_39003[(7)]);
var inst_38969 = (inst_38967 < cnt);
var state_39003__$1 = state_39003;
if(cljs.core.truth_(inst_38969)){
var statearr_39007_39034 = state_39003__$1;
(statearr_39007_39034[(1)] = (6));

} else {
var statearr_39008_39035 = state_39003__$1;
(statearr_39008_39035[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (15))){
var inst_38999 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39009_39036 = state_39003__$1;
(statearr_39009_39036[(2)] = inst_38999);

(statearr_39009_39036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (13))){
var inst_38992 = cljs.core.async.close_BANG_.call(null,out);
var state_39003__$1 = state_39003;
var statearr_39010_39037 = state_39003__$1;
(statearr_39010_39037[(2)] = inst_38992);

(statearr_39010_39037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (6))){
var state_39003__$1 = state_39003;
var statearr_39011_39038 = state_39003__$1;
(statearr_39011_39038[(2)] = null);

(statearr_39011_39038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (3))){
var inst_39001 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39003__$1,inst_39001);
} else {
if((state_val_39004 === (12))){
var inst_38989 = (state_39003[(8)]);
var inst_38989__$1 = (state_39003[(2)]);
var inst_38990 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38989__$1);
var state_39003__$1 = (function (){var statearr_39012 = state_39003;
(statearr_39012[(8)] = inst_38989__$1);

return statearr_39012;
})();
if(cljs.core.truth_(inst_38990)){
var statearr_39013_39039 = state_39003__$1;
(statearr_39013_39039[(1)] = (13));

} else {
var statearr_39014_39040 = state_39003__$1;
(statearr_39014_39040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (2))){
var inst_38966 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38967 = (0);
var state_39003__$1 = (function (){var statearr_39015 = state_39003;
(statearr_39015[(9)] = inst_38966);

(statearr_39015[(7)] = inst_38967);

return statearr_39015;
})();
var statearr_39016_39041 = state_39003__$1;
(statearr_39016_39041[(2)] = null);

(statearr_39016_39041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (11))){
var inst_38967 = (state_39003[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39003,(10),Object,null,(9));
var inst_38976 = chs__$1.call(null,inst_38967);
var inst_38977 = done.call(null,inst_38967);
var inst_38978 = cljs.core.async.take_BANG_.call(null,inst_38976,inst_38977);
var state_39003__$1 = state_39003;
var statearr_39017_39042 = state_39003__$1;
(statearr_39017_39042[(2)] = inst_38978);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (9))){
var inst_38967 = (state_39003[(7)]);
var inst_38980 = (state_39003[(2)]);
var inst_38981 = (inst_38967 + (1));
var inst_38967__$1 = inst_38981;
var state_39003__$1 = (function (){var statearr_39018 = state_39003;
(statearr_39018[(10)] = inst_38980);

(statearr_39018[(7)] = inst_38967__$1);

return statearr_39018;
})();
var statearr_39019_39043 = state_39003__$1;
(statearr_39019_39043[(2)] = null);

(statearr_39019_39043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (5))){
var inst_38987 = (state_39003[(2)]);
var state_39003__$1 = (function (){var statearr_39020 = state_39003;
(statearr_39020[(11)] = inst_38987);

return statearr_39020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39003__$1,(12),dchan);
} else {
if((state_val_39004 === (14))){
var inst_38989 = (state_39003[(8)]);
var inst_38994 = cljs.core.apply.call(null,f,inst_38989);
var state_39003__$1 = state_39003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39003__$1,(16),out,inst_38994);
} else {
if((state_val_39004 === (16))){
var inst_38996 = (state_39003[(2)]);
var state_39003__$1 = (function (){var statearr_39021 = state_39003;
(statearr_39021[(12)] = inst_38996);

return statearr_39021;
})();
var statearr_39022_39044 = state_39003__$1;
(statearr_39022_39044[(2)] = null);

(statearr_39022_39044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (10))){
var inst_38971 = (state_39003[(2)]);
var inst_38972 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39003__$1 = (function (){var statearr_39023 = state_39003;
(statearr_39023[(13)] = inst_38971);

return statearr_39023;
})();
var statearr_39024_39045 = state_39003__$1;
(statearr_39024_39045[(2)] = inst_38972);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39003__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (8))){
var inst_38985 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39025_39046 = state_39003__$1;
(statearr_39025_39046[(2)] = inst_38985);

(statearr_39025_39046[(1)] = (5));


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
});})(c__37706__auto___39031,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37618__auto__,c__37706__auto___39031,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39026[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39026[(1)] = (1));

return statearr_39026;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39003){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39027){if((e39027 instanceof Object)){
var ex__37622__auto__ = e39027;
var statearr_39028_39047 = state_39003;
(statearr_39028_39047[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39048 = state_39003;
state_39003 = G__39048;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39031,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37708__auto__ = (function (){var statearr_39029 = f__37707__auto__.call(null);
(statearr_39029[(6)] = c__37706__auto___39031);

return statearr_39029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39031,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39051 = arguments.length;
switch (G__39051) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37706__auto___39105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39105,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39105,out){
return (function (state_39083){
var state_val_39084 = (state_39083[(1)]);
if((state_val_39084 === (7))){
var inst_39063 = (state_39083[(7)]);
var inst_39062 = (state_39083[(8)]);
var inst_39062__$1 = (state_39083[(2)]);
var inst_39063__$1 = cljs.core.nth.call(null,inst_39062__$1,(0),null);
var inst_39064 = cljs.core.nth.call(null,inst_39062__$1,(1),null);
var inst_39065 = (inst_39063__$1 == null);
var state_39083__$1 = (function (){var statearr_39085 = state_39083;
(statearr_39085[(9)] = inst_39064);

(statearr_39085[(7)] = inst_39063__$1);

(statearr_39085[(8)] = inst_39062__$1);

return statearr_39085;
})();
if(cljs.core.truth_(inst_39065)){
var statearr_39086_39106 = state_39083__$1;
(statearr_39086_39106[(1)] = (8));

} else {
var statearr_39087_39107 = state_39083__$1;
(statearr_39087_39107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (1))){
var inst_39052 = cljs.core.vec.call(null,chs);
var inst_39053 = inst_39052;
var state_39083__$1 = (function (){var statearr_39088 = state_39083;
(statearr_39088[(10)] = inst_39053);

return statearr_39088;
})();
var statearr_39089_39108 = state_39083__$1;
(statearr_39089_39108[(2)] = null);

(statearr_39089_39108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (4))){
var inst_39053 = (state_39083[(10)]);
var state_39083__$1 = state_39083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39083__$1,(7),inst_39053);
} else {
if((state_val_39084 === (6))){
var inst_39079 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
var statearr_39090_39109 = state_39083__$1;
(statearr_39090_39109[(2)] = inst_39079);

(statearr_39090_39109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (3))){
var inst_39081 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39083__$1,inst_39081);
} else {
if((state_val_39084 === (2))){
var inst_39053 = (state_39083[(10)]);
var inst_39055 = cljs.core.count.call(null,inst_39053);
var inst_39056 = (inst_39055 > (0));
var state_39083__$1 = state_39083;
if(cljs.core.truth_(inst_39056)){
var statearr_39092_39110 = state_39083__$1;
(statearr_39092_39110[(1)] = (4));

} else {
var statearr_39093_39111 = state_39083__$1;
(statearr_39093_39111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (11))){
var inst_39053 = (state_39083[(10)]);
var inst_39072 = (state_39083[(2)]);
var tmp39091 = inst_39053;
var inst_39053__$1 = tmp39091;
var state_39083__$1 = (function (){var statearr_39094 = state_39083;
(statearr_39094[(10)] = inst_39053__$1);

(statearr_39094[(11)] = inst_39072);

return statearr_39094;
})();
var statearr_39095_39112 = state_39083__$1;
(statearr_39095_39112[(2)] = null);

(statearr_39095_39112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (9))){
var inst_39063 = (state_39083[(7)]);
var state_39083__$1 = state_39083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39083__$1,(11),out,inst_39063);
} else {
if((state_val_39084 === (5))){
var inst_39077 = cljs.core.async.close_BANG_.call(null,out);
var state_39083__$1 = state_39083;
var statearr_39096_39113 = state_39083__$1;
(statearr_39096_39113[(2)] = inst_39077);

(statearr_39096_39113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (10))){
var inst_39075 = (state_39083[(2)]);
var state_39083__$1 = state_39083;
var statearr_39097_39114 = state_39083__$1;
(statearr_39097_39114[(2)] = inst_39075);

(statearr_39097_39114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39084 === (8))){
var inst_39064 = (state_39083[(9)]);
var inst_39063 = (state_39083[(7)]);
var inst_39053 = (state_39083[(10)]);
var inst_39062 = (state_39083[(8)]);
var inst_39067 = (function (){var cs = inst_39053;
var vec__39058 = inst_39062;
var v = inst_39063;
var c = inst_39064;
return ((function (cs,vec__39058,v,c,inst_39064,inst_39063,inst_39053,inst_39062,state_val_39084,c__37706__auto___39105,out){
return (function (p1__39049_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39049_SHARP_);
});
;})(cs,vec__39058,v,c,inst_39064,inst_39063,inst_39053,inst_39062,state_val_39084,c__37706__auto___39105,out))
})();
var inst_39068 = cljs.core.filterv.call(null,inst_39067,inst_39053);
var inst_39053__$1 = inst_39068;
var state_39083__$1 = (function (){var statearr_39098 = state_39083;
(statearr_39098[(10)] = inst_39053__$1);

return statearr_39098;
})();
var statearr_39099_39115 = state_39083__$1;
(statearr_39099_39115[(2)] = null);

(statearr_39099_39115[(1)] = (2));


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
});})(c__37706__auto___39105,out))
;
return ((function (switch__37618__auto__,c__37706__auto___39105,out){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39100 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39100[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39100[(1)] = (1));

return statearr_39100;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39083){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39101){if((e39101 instanceof Object)){
var ex__37622__auto__ = e39101;
var statearr_39102_39116 = state_39083;
(statearr_39102_39116[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39117 = state_39083;
state_39083 = G__39117;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39083);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39105,out))
})();
var state__37708__auto__ = (function (){var statearr_39103 = f__37707__auto__.call(null);
(statearr_39103[(6)] = c__37706__auto___39105);

return statearr_39103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39105,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39119 = arguments.length;
switch (G__39119) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37706__auto___39164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39164,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39164,out){
return (function (state_39143){
var state_val_39144 = (state_39143[(1)]);
if((state_val_39144 === (7))){
var inst_39125 = (state_39143[(7)]);
var inst_39125__$1 = (state_39143[(2)]);
var inst_39126 = (inst_39125__$1 == null);
var inst_39127 = cljs.core.not.call(null,inst_39126);
var state_39143__$1 = (function (){var statearr_39145 = state_39143;
(statearr_39145[(7)] = inst_39125__$1);

return statearr_39145;
})();
if(inst_39127){
var statearr_39146_39165 = state_39143__$1;
(statearr_39146_39165[(1)] = (8));

} else {
var statearr_39147_39166 = state_39143__$1;
(statearr_39147_39166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (1))){
var inst_39120 = (0);
var state_39143__$1 = (function (){var statearr_39148 = state_39143;
(statearr_39148[(8)] = inst_39120);

return statearr_39148;
})();
var statearr_39149_39167 = state_39143__$1;
(statearr_39149_39167[(2)] = null);

(statearr_39149_39167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (4))){
var state_39143__$1 = state_39143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39143__$1,(7),ch);
} else {
if((state_val_39144 === (6))){
var inst_39138 = (state_39143[(2)]);
var state_39143__$1 = state_39143;
var statearr_39150_39168 = state_39143__$1;
(statearr_39150_39168[(2)] = inst_39138);

(statearr_39150_39168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (3))){
var inst_39140 = (state_39143[(2)]);
var inst_39141 = cljs.core.async.close_BANG_.call(null,out);
var state_39143__$1 = (function (){var statearr_39151 = state_39143;
(statearr_39151[(9)] = inst_39140);

return statearr_39151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39143__$1,inst_39141);
} else {
if((state_val_39144 === (2))){
var inst_39120 = (state_39143[(8)]);
var inst_39122 = (inst_39120 < n);
var state_39143__$1 = state_39143;
if(cljs.core.truth_(inst_39122)){
var statearr_39152_39169 = state_39143__$1;
(statearr_39152_39169[(1)] = (4));

} else {
var statearr_39153_39170 = state_39143__$1;
(statearr_39153_39170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (11))){
var inst_39120 = (state_39143[(8)]);
var inst_39130 = (state_39143[(2)]);
var inst_39131 = (inst_39120 + (1));
var inst_39120__$1 = inst_39131;
var state_39143__$1 = (function (){var statearr_39154 = state_39143;
(statearr_39154[(10)] = inst_39130);

(statearr_39154[(8)] = inst_39120__$1);

return statearr_39154;
})();
var statearr_39155_39171 = state_39143__$1;
(statearr_39155_39171[(2)] = null);

(statearr_39155_39171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (9))){
var state_39143__$1 = state_39143;
var statearr_39156_39172 = state_39143__$1;
(statearr_39156_39172[(2)] = null);

(statearr_39156_39172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (5))){
var state_39143__$1 = state_39143;
var statearr_39157_39173 = state_39143__$1;
(statearr_39157_39173[(2)] = null);

(statearr_39157_39173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (10))){
var inst_39135 = (state_39143[(2)]);
var state_39143__$1 = state_39143;
var statearr_39158_39174 = state_39143__$1;
(statearr_39158_39174[(2)] = inst_39135);

(statearr_39158_39174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39144 === (8))){
var inst_39125 = (state_39143[(7)]);
var state_39143__$1 = state_39143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39143__$1,(11),out,inst_39125);
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
});})(c__37706__auto___39164,out))
;
return ((function (switch__37618__auto__,c__37706__auto___39164,out){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39159 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39159[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39159[(1)] = (1));

return statearr_39159;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39143){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39160){if((e39160 instanceof Object)){
var ex__37622__auto__ = e39160;
var statearr_39161_39175 = state_39143;
(statearr_39161_39175[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39176 = state_39143;
state_39143 = G__39176;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39164,out))
})();
var state__37708__auto__ = (function (){var statearr_39162 = f__37707__auto__.call(null);
(statearr_39162[(6)] = c__37706__auto___39164);

return statearr_39162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39164,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39178 = (function (f,ch,meta39179){
this.f = f;
this.ch = ch;
this.meta39179 = meta39179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39180,meta39179__$1){
var self__ = this;
var _39180__$1 = this;
return (new cljs.core.async.t_cljs$core$async39178(self__.f,self__.ch,meta39179__$1));
});

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39180){
var self__ = this;
var _39180__$1 = this;
return self__.meta39179;
});

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39181 = (function (f,ch,meta39179,_,fn1,meta39182){
this.f = f;
this.ch = ch;
this.meta39179 = meta39179;
this._ = _;
this.fn1 = fn1;
this.meta39182 = meta39182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39183,meta39182__$1){
var self__ = this;
var _39183__$1 = this;
return (new cljs.core.async.t_cljs$core$async39181(self__.f,self__.ch,self__.meta39179,self__._,self__.fn1,meta39182__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39183){
var self__ = this;
var _39183__$1 = this;
return self__.meta39182;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39181.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39177_SHARP_){
return f1.call(null,(((p1__39177_SHARP_ == null))?null:self__.f.call(null,p1__39177_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39181.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39179","meta39179",415148122,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39178","cljs.core.async/t_cljs$core$async39178",1163996717,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39182","meta39182",-1813314161,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39181";

cljs.core.async.t_cljs$core$async39181.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async39181");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39181 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39181(f__$1,ch__$1,meta39179__$1,___$2,fn1__$1,meta39182){
return (new cljs.core.async.t_cljs$core$async39181(f__$1,ch__$1,meta39179__$1,___$2,fn1__$1,meta39182));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39181(self__.f,self__.ch,self__.meta39179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28421__auto__ = ret;
if(cljs.core.truth_(and__28421__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28421__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39179","meta39179",415148122,null)], null);
});

cljs.core.async.t_cljs$core$async39178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39178";

cljs.core.async.t_cljs$core$async39178.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async39178");
});

cljs.core.async.__GT_t_cljs$core$async39178 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39178(f__$1,ch__$1,meta39179){
return (new cljs.core.async.t_cljs$core$async39178(f__$1,ch__$1,meta39179));
});

}

return (new cljs.core.async.t_cljs$core$async39178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39184 = (function (f,ch,meta39185){
this.f = f;
this.ch = ch;
this.meta39185 = meta39185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39186,meta39185__$1){
var self__ = this;
var _39186__$1 = this;
return (new cljs.core.async.t_cljs$core$async39184(self__.f,self__.ch,meta39185__$1));
});

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39186){
var self__ = this;
var _39186__$1 = this;
return self__.meta39185;
});

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39185","meta39185",1874640171,null)], null);
});

cljs.core.async.t_cljs$core$async39184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39184";

cljs.core.async.t_cljs$core$async39184.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async39184");
});

cljs.core.async.__GT_t_cljs$core$async39184 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39184(f__$1,ch__$1,meta39185){
return (new cljs.core.async.t_cljs$core$async39184(f__$1,ch__$1,meta39185));
});

}

return (new cljs.core.async.t_cljs$core$async39184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39187 = (function (p,ch,meta39188){
this.p = p;
this.ch = ch;
this.meta39188 = meta39188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39189,meta39188__$1){
var self__ = this;
var _39189__$1 = this;
return (new cljs.core.async.t_cljs$core$async39187(self__.p,self__.ch,meta39188__$1));
});

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39189){
var self__ = this;
var _39189__$1 = this;
return self__.meta39188;
});

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39188","meta39188",-933954485,null)], null);
});

cljs.core.async.t_cljs$core$async39187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39187";

cljs.core.async.t_cljs$core$async39187.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async39187");
});

cljs.core.async.__GT_t_cljs$core$async39187 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39187(p__$1,ch__$1,meta39188){
return (new cljs.core.async.t_cljs$core$async39187(p__$1,ch__$1,meta39188));
});

}

return (new cljs.core.async.t_cljs$core$async39187(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39191 = arguments.length;
switch (G__39191) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37706__auto___39231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39231,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39231,out){
return (function (state_39212){
var state_val_39213 = (state_39212[(1)]);
if((state_val_39213 === (7))){
var inst_39208 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
var statearr_39214_39232 = state_39212__$1;
(statearr_39214_39232[(2)] = inst_39208);

(statearr_39214_39232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (1))){
var state_39212__$1 = state_39212;
var statearr_39215_39233 = state_39212__$1;
(statearr_39215_39233[(2)] = null);

(statearr_39215_39233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (4))){
var inst_39194 = (state_39212[(7)]);
var inst_39194__$1 = (state_39212[(2)]);
var inst_39195 = (inst_39194__$1 == null);
var state_39212__$1 = (function (){var statearr_39216 = state_39212;
(statearr_39216[(7)] = inst_39194__$1);

return statearr_39216;
})();
if(cljs.core.truth_(inst_39195)){
var statearr_39217_39234 = state_39212__$1;
(statearr_39217_39234[(1)] = (5));

} else {
var statearr_39218_39235 = state_39212__$1;
(statearr_39218_39235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (6))){
var inst_39194 = (state_39212[(7)]);
var inst_39199 = p.call(null,inst_39194);
var state_39212__$1 = state_39212;
if(cljs.core.truth_(inst_39199)){
var statearr_39219_39236 = state_39212__$1;
(statearr_39219_39236[(1)] = (8));

} else {
var statearr_39220_39237 = state_39212__$1;
(statearr_39220_39237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (3))){
var inst_39210 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39212__$1,inst_39210);
} else {
if((state_val_39213 === (2))){
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39212__$1,(4),ch);
} else {
if((state_val_39213 === (11))){
var inst_39202 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
var statearr_39221_39238 = state_39212__$1;
(statearr_39221_39238[(2)] = inst_39202);

(statearr_39221_39238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (9))){
var state_39212__$1 = state_39212;
var statearr_39222_39239 = state_39212__$1;
(statearr_39222_39239[(2)] = null);

(statearr_39222_39239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (5))){
var inst_39197 = cljs.core.async.close_BANG_.call(null,out);
var state_39212__$1 = state_39212;
var statearr_39223_39240 = state_39212__$1;
(statearr_39223_39240[(2)] = inst_39197);

(statearr_39223_39240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (10))){
var inst_39205 = (state_39212[(2)]);
var state_39212__$1 = (function (){var statearr_39224 = state_39212;
(statearr_39224[(8)] = inst_39205);

return statearr_39224;
})();
var statearr_39225_39241 = state_39212__$1;
(statearr_39225_39241[(2)] = null);

(statearr_39225_39241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (8))){
var inst_39194 = (state_39212[(7)]);
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39212__$1,(11),out,inst_39194);
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
});})(c__37706__auto___39231,out))
;
return ((function (switch__37618__auto__,c__37706__auto___39231,out){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39226 = [null,null,null,null,null,null,null,null,null];
(statearr_39226[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39226[(1)] = (1));

return statearr_39226;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39212){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39227){if((e39227 instanceof Object)){
var ex__37622__auto__ = e39227;
var statearr_39228_39242 = state_39212;
(statearr_39228_39242[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39243 = state_39212;
state_39212 = G__39243;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39231,out))
})();
var state__37708__auto__ = (function (){var statearr_39229 = f__37707__auto__.call(null);
(statearr_39229[(6)] = c__37706__auto___39231);

return statearr_39229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39231,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39245 = arguments.length;
switch (G__39245) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37706__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto__){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto__){
return (function (state_39308){
var state_val_39309 = (state_39308[(1)]);
if((state_val_39309 === (7))){
var inst_39304 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39310_39348 = state_39308__$1;
(statearr_39310_39348[(2)] = inst_39304);

(statearr_39310_39348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (20))){
var inst_39274 = (state_39308[(7)]);
var inst_39285 = (state_39308[(2)]);
var inst_39286 = cljs.core.next.call(null,inst_39274);
var inst_39260 = inst_39286;
var inst_39261 = null;
var inst_39262 = (0);
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39311 = state_39308;
(statearr_39311[(8)] = inst_39260);

(statearr_39311[(9)] = inst_39285);

(statearr_39311[(10)] = inst_39263);

(statearr_39311[(11)] = inst_39262);

(statearr_39311[(12)] = inst_39261);

return statearr_39311;
})();
var statearr_39312_39349 = state_39308__$1;
(statearr_39312_39349[(2)] = null);

(statearr_39312_39349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (1))){
var state_39308__$1 = state_39308;
var statearr_39313_39350 = state_39308__$1;
(statearr_39313_39350[(2)] = null);

(statearr_39313_39350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (4))){
var inst_39249 = (state_39308[(13)]);
var inst_39249__$1 = (state_39308[(2)]);
var inst_39250 = (inst_39249__$1 == null);
var state_39308__$1 = (function (){var statearr_39314 = state_39308;
(statearr_39314[(13)] = inst_39249__$1);

return statearr_39314;
})();
if(cljs.core.truth_(inst_39250)){
var statearr_39315_39351 = state_39308__$1;
(statearr_39315_39351[(1)] = (5));

} else {
var statearr_39316_39352 = state_39308__$1;
(statearr_39316_39352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (15))){
var state_39308__$1 = state_39308;
var statearr_39320_39353 = state_39308__$1;
(statearr_39320_39353[(2)] = null);

(statearr_39320_39353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (21))){
var state_39308__$1 = state_39308;
var statearr_39321_39354 = state_39308__$1;
(statearr_39321_39354[(2)] = null);

(statearr_39321_39354[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (13))){
var inst_39260 = (state_39308[(8)]);
var inst_39263 = (state_39308[(10)]);
var inst_39262 = (state_39308[(11)]);
var inst_39261 = (state_39308[(12)]);
var inst_39270 = (state_39308[(2)]);
var inst_39271 = (inst_39263 + (1));
var tmp39317 = inst_39260;
var tmp39318 = inst_39262;
var tmp39319 = inst_39261;
var inst_39260__$1 = tmp39317;
var inst_39261__$1 = tmp39319;
var inst_39262__$1 = tmp39318;
var inst_39263__$1 = inst_39271;
var state_39308__$1 = (function (){var statearr_39322 = state_39308;
(statearr_39322[(8)] = inst_39260__$1);

(statearr_39322[(14)] = inst_39270);

(statearr_39322[(10)] = inst_39263__$1);

(statearr_39322[(11)] = inst_39262__$1);

(statearr_39322[(12)] = inst_39261__$1);

return statearr_39322;
})();
var statearr_39323_39355 = state_39308__$1;
(statearr_39323_39355[(2)] = null);

(statearr_39323_39355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (22))){
var state_39308__$1 = state_39308;
var statearr_39324_39356 = state_39308__$1;
(statearr_39324_39356[(2)] = null);

(statearr_39324_39356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (6))){
var inst_39249 = (state_39308[(13)]);
var inst_39258 = f.call(null,inst_39249);
var inst_39259 = cljs.core.seq.call(null,inst_39258);
var inst_39260 = inst_39259;
var inst_39261 = null;
var inst_39262 = (0);
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39325 = state_39308;
(statearr_39325[(8)] = inst_39260);

(statearr_39325[(10)] = inst_39263);

(statearr_39325[(11)] = inst_39262);

(statearr_39325[(12)] = inst_39261);

return statearr_39325;
})();
var statearr_39326_39357 = state_39308__$1;
(statearr_39326_39357[(2)] = null);

(statearr_39326_39357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (17))){
var inst_39274 = (state_39308[(7)]);
var inst_39278 = cljs.core.chunk_first.call(null,inst_39274);
var inst_39279 = cljs.core.chunk_rest.call(null,inst_39274);
var inst_39280 = cljs.core.count.call(null,inst_39278);
var inst_39260 = inst_39279;
var inst_39261 = inst_39278;
var inst_39262 = inst_39280;
var inst_39263 = (0);
var state_39308__$1 = (function (){var statearr_39327 = state_39308;
(statearr_39327[(8)] = inst_39260);

(statearr_39327[(10)] = inst_39263);

(statearr_39327[(11)] = inst_39262);

(statearr_39327[(12)] = inst_39261);

return statearr_39327;
})();
var statearr_39328_39358 = state_39308__$1;
(statearr_39328_39358[(2)] = null);

(statearr_39328_39358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (3))){
var inst_39306 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39308__$1,inst_39306);
} else {
if((state_val_39309 === (12))){
var inst_39294 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39329_39359 = state_39308__$1;
(statearr_39329_39359[(2)] = inst_39294);

(statearr_39329_39359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (2))){
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39308__$1,(4),in$);
} else {
if((state_val_39309 === (23))){
var inst_39302 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39330_39360 = state_39308__$1;
(statearr_39330_39360[(2)] = inst_39302);

(statearr_39330_39360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (19))){
var inst_39289 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39331_39361 = state_39308__$1;
(statearr_39331_39361[(2)] = inst_39289);

(statearr_39331_39361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (11))){
var inst_39260 = (state_39308[(8)]);
var inst_39274 = (state_39308[(7)]);
var inst_39274__$1 = cljs.core.seq.call(null,inst_39260);
var state_39308__$1 = (function (){var statearr_39332 = state_39308;
(statearr_39332[(7)] = inst_39274__$1);

return statearr_39332;
})();
if(inst_39274__$1){
var statearr_39333_39362 = state_39308__$1;
(statearr_39333_39362[(1)] = (14));

} else {
var statearr_39334_39363 = state_39308__$1;
(statearr_39334_39363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (9))){
var inst_39296 = (state_39308[(2)]);
var inst_39297 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39308__$1 = (function (){var statearr_39335 = state_39308;
(statearr_39335[(15)] = inst_39296);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39297)){
var statearr_39336_39364 = state_39308__$1;
(statearr_39336_39364[(1)] = (21));

} else {
var statearr_39337_39365 = state_39308__$1;
(statearr_39337_39365[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (5))){
var inst_39252 = cljs.core.async.close_BANG_.call(null,out);
var state_39308__$1 = state_39308;
var statearr_39338_39366 = state_39308__$1;
(statearr_39338_39366[(2)] = inst_39252);

(statearr_39338_39366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (14))){
var inst_39274 = (state_39308[(7)]);
var inst_39276 = cljs.core.chunked_seq_QMARK_.call(null,inst_39274);
var state_39308__$1 = state_39308;
if(inst_39276){
var statearr_39339_39367 = state_39308__$1;
(statearr_39339_39367[(1)] = (17));

} else {
var statearr_39340_39368 = state_39308__$1;
(statearr_39340_39368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (16))){
var inst_39292 = (state_39308[(2)]);
var state_39308__$1 = state_39308;
var statearr_39341_39369 = state_39308__$1;
(statearr_39341_39369[(2)] = inst_39292);

(statearr_39341_39369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39309 === (10))){
var inst_39263 = (state_39308[(10)]);
var inst_39261 = (state_39308[(12)]);
var inst_39268 = cljs.core._nth.call(null,inst_39261,inst_39263);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39308__$1,(13),out,inst_39268);
} else {
if((state_val_39309 === (18))){
var inst_39274 = (state_39308[(7)]);
var inst_39283 = cljs.core.first.call(null,inst_39274);
var state_39308__$1 = state_39308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39308__$1,(20),out,inst_39283);
} else {
if((state_val_39309 === (8))){
var inst_39263 = (state_39308[(10)]);
var inst_39262 = (state_39308[(11)]);
var inst_39265 = (inst_39263 < inst_39262);
var inst_39266 = inst_39265;
var state_39308__$1 = state_39308;
if(cljs.core.truth_(inst_39266)){
var statearr_39342_39370 = state_39308__$1;
(statearr_39342_39370[(1)] = (10));

} else {
var statearr_39343_39371 = state_39308__$1;
(statearr_39343_39371[(1)] = (11));

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
});})(c__37706__auto__))
;
return ((function (switch__37618__auto__,c__37706__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37619__auto____0 = (function (){
var statearr_39344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39344[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37619__auto__);

(statearr_39344[(1)] = (1));

return statearr_39344;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37619__auto____1 = (function (state_39308){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39345){if((e39345 instanceof Object)){
var ex__37622__auto__ = e39345;
var statearr_39346_39372 = state_39308;
(statearr_39346_39372[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39373 = state_39308;
state_39308 = G__39373;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37619__auto__ = function(state_39308){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37619__auto____1.call(this,state_39308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto__))
})();
var state__37708__auto__ = (function (){var statearr_39347 = f__37707__auto__.call(null);
(statearr_39347[(6)] = c__37706__auto__);

return statearr_39347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto__))
);

return c__37706__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39375 = arguments.length;
switch (G__39375) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39378 = arguments.length;
switch (G__39378) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39381 = arguments.length;
switch (G__39381) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37706__auto___39428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39428,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39428,out){
return (function (state_39405){
var state_val_39406 = (state_39405[(1)]);
if((state_val_39406 === (7))){
var inst_39400 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
var statearr_39407_39429 = state_39405__$1;
(statearr_39407_39429[(2)] = inst_39400);

(statearr_39407_39429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (1))){
var inst_39382 = null;
var state_39405__$1 = (function (){var statearr_39408 = state_39405;
(statearr_39408[(7)] = inst_39382);

return statearr_39408;
})();
var statearr_39409_39430 = state_39405__$1;
(statearr_39409_39430[(2)] = null);

(statearr_39409_39430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (4))){
var inst_39385 = (state_39405[(8)]);
var inst_39385__$1 = (state_39405[(2)]);
var inst_39386 = (inst_39385__$1 == null);
var inst_39387 = cljs.core.not.call(null,inst_39386);
var state_39405__$1 = (function (){var statearr_39410 = state_39405;
(statearr_39410[(8)] = inst_39385__$1);

return statearr_39410;
})();
if(inst_39387){
var statearr_39411_39431 = state_39405__$1;
(statearr_39411_39431[(1)] = (5));

} else {
var statearr_39412_39432 = state_39405__$1;
(statearr_39412_39432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (6))){
var state_39405__$1 = state_39405;
var statearr_39413_39433 = state_39405__$1;
(statearr_39413_39433[(2)] = null);

(statearr_39413_39433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (3))){
var inst_39402 = (state_39405[(2)]);
var inst_39403 = cljs.core.async.close_BANG_.call(null,out);
var state_39405__$1 = (function (){var statearr_39414 = state_39405;
(statearr_39414[(9)] = inst_39402);

return statearr_39414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39405__$1,inst_39403);
} else {
if((state_val_39406 === (2))){
var state_39405__$1 = state_39405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39405__$1,(4),ch);
} else {
if((state_val_39406 === (11))){
var inst_39385 = (state_39405[(8)]);
var inst_39394 = (state_39405[(2)]);
var inst_39382 = inst_39385;
var state_39405__$1 = (function (){var statearr_39415 = state_39405;
(statearr_39415[(10)] = inst_39394);

(statearr_39415[(7)] = inst_39382);

return statearr_39415;
})();
var statearr_39416_39434 = state_39405__$1;
(statearr_39416_39434[(2)] = null);

(statearr_39416_39434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (9))){
var inst_39385 = (state_39405[(8)]);
var state_39405__$1 = state_39405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39405__$1,(11),out,inst_39385);
} else {
if((state_val_39406 === (5))){
var inst_39385 = (state_39405[(8)]);
var inst_39382 = (state_39405[(7)]);
var inst_39389 = cljs.core._EQ_.call(null,inst_39385,inst_39382);
var state_39405__$1 = state_39405;
if(inst_39389){
var statearr_39418_39435 = state_39405__$1;
(statearr_39418_39435[(1)] = (8));

} else {
var statearr_39419_39436 = state_39405__$1;
(statearr_39419_39436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (10))){
var inst_39397 = (state_39405[(2)]);
var state_39405__$1 = state_39405;
var statearr_39420_39437 = state_39405__$1;
(statearr_39420_39437[(2)] = inst_39397);

(statearr_39420_39437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39406 === (8))){
var inst_39382 = (state_39405[(7)]);
var tmp39417 = inst_39382;
var inst_39382__$1 = tmp39417;
var state_39405__$1 = (function (){var statearr_39421 = state_39405;
(statearr_39421[(7)] = inst_39382__$1);

return statearr_39421;
})();
var statearr_39422_39438 = state_39405__$1;
(statearr_39422_39438[(2)] = null);

(statearr_39422_39438[(1)] = (2));


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
});})(c__37706__auto___39428,out))
;
return ((function (switch__37618__auto__,c__37706__auto___39428,out){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39423[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39423[(1)] = (1));

return statearr_39423;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39405){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39424){if((e39424 instanceof Object)){
var ex__37622__auto__ = e39424;
var statearr_39425_39439 = state_39405;
(statearr_39425_39439[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39440 = state_39405;
state_39405 = G__39440;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39428,out))
})();
var state__37708__auto__ = (function (){var statearr_39426 = f__37707__auto__.call(null);
(statearr_39426[(6)] = c__37706__auto___39428);

return statearr_39426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39428,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39442 = arguments.length;
switch (G__39442) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37706__auto___39508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39508,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39508,out){
return (function (state_39480){
var state_val_39481 = (state_39480[(1)]);
if((state_val_39481 === (7))){
var inst_39476 = (state_39480[(2)]);
var state_39480__$1 = state_39480;
var statearr_39482_39509 = state_39480__$1;
(statearr_39482_39509[(2)] = inst_39476);

(statearr_39482_39509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (1))){
var inst_39443 = (new Array(n));
var inst_39444 = inst_39443;
var inst_39445 = (0);
var state_39480__$1 = (function (){var statearr_39483 = state_39480;
(statearr_39483[(7)] = inst_39444);

(statearr_39483[(8)] = inst_39445);

return statearr_39483;
})();
var statearr_39484_39510 = state_39480__$1;
(statearr_39484_39510[(2)] = null);

(statearr_39484_39510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (4))){
var inst_39448 = (state_39480[(9)]);
var inst_39448__$1 = (state_39480[(2)]);
var inst_39449 = (inst_39448__$1 == null);
var inst_39450 = cljs.core.not.call(null,inst_39449);
var state_39480__$1 = (function (){var statearr_39485 = state_39480;
(statearr_39485[(9)] = inst_39448__$1);

return statearr_39485;
})();
if(inst_39450){
var statearr_39486_39511 = state_39480__$1;
(statearr_39486_39511[(1)] = (5));

} else {
var statearr_39487_39512 = state_39480__$1;
(statearr_39487_39512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (15))){
var inst_39470 = (state_39480[(2)]);
var state_39480__$1 = state_39480;
var statearr_39488_39513 = state_39480__$1;
(statearr_39488_39513[(2)] = inst_39470);

(statearr_39488_39513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (13))){
var state_39480__$1 = state_39480;
var statearr_39489_39514 = state_39480__$1;
(statearr_39489_39514[(2)] = null);

(statearr_39489_39514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (6))){
var inst_39445 = (state_39480[(8)]);
var inst_39466 = (inst_39445 > (0));
var state_39480__$1 = state_39480;
if(cljs.core.truth_(inst_39466)){
var statearr_39490_39515 = state_39480__$1;
(statearr_39490_39515[(1)] = (12));

} else {
var statearr_39491_39516 = state_39480__$1;
(statearr_39491_39516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (3))){
var inst_39478 = (state_39480[(2)]);
var state_39480__$1 = state_39480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39480__$1,inst_39478);
} else {
if((state_val_39481 === (12))){
var inst_39444 = (state_39480[(7)]);
var inst_39468 = cljs.core.vec.call(null,inst_39444);
var state_39480__$1 = state_39480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39480__$1,(15),out,inst_39468);
} else {
if((state_val_39481 === (2))){
var state_39480__$1 = state_39480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39480__$1,(4),ch);
} else {
if((state_val_39481 === (11))){
var inst_39460 = (state_39480[(2)]);
var inst_39461 = (new Array(n));
var inst_39444 = inst_39461;
var inst_39445 = (0);
var state_39480__$1 = (function (){var statearr_39492 = state_39480;
(statearr_39492[(7)] = inst_39444);

(statearr_39492[(10)] = inst_39460);

(statearr_39492[(8)] = inst_39445);

return statearr_39492;
})();
var statearr_39493_39517 = state_39480__$1;
(statearr_39493_39517[(2)] = null);

(statearr_39493_39517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (9))){
var inst_39444 = (state_39480[(7)]);
var inst_39458 = cljs.core.vec.call(null,inst_39444);
var state_39480__$1 = state_39480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39480__$1,(11),out,inst_39458);
} else {
if((state_val_39481 === (5))){
var inst_39448 = (state_39480[(9)]);
var inst_39444 = (state_39480[(7)]);
var inst_39453 = (state_39480[(11)]);
var inst_39445 = (state_39480[(8)]);
var inst_39452 = (inst_39444[inst_39445] = inst_39448);
var inst_39453__$1 = (inst_39445 + (1));
var inst_39454 = (inst_39453__$1 < n);
var state_39480__$1 = (function (){var statearr_39494 = state_39480;
(statearr_39494[(12)] = inst_39452);

(statearr_39494[(11)] = inst_39453__$1);

return statearr_39494;
})();
if(cljs.core.truth_(inst_39454)){
var statearr_39495_39518 = state_39480__$1;
(statearr_39495_39518[(1)] = (8));

} else {
var statearr_39496_39519 = state_39480__$1;
(statearr_39496_39519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (14))){
var inst_39473 = (state_39480[(2)]);
var inst_39474 = cljs.core.async.close_BANG_.call(null,out);
var state_39480__$1 = (function (){var statearr_39498 = state_39480;
(statearr_39498[(13)] = inst_39473);

return statearr_39498;
})();
var statearr_39499_39520 = state_39480__$1;
(statearr_39499_39520[(2)] = inst_39474);

(statearr_39499_39520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (10))){
var inst_39464 = (state_39480[(2)]);
var state_39480__$1 = state_39480;
var statearr_39500_39521 = state_39480__$1;
(statearr_39500_39521[(2)] = inst_39464);

(statearr_39500_39521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39481 === (8))){
var inst_39444 = (state_39480[(7)]);
var inst_39453 = (state_39480[(11)]);
var tmp39497 = inst_39444;
var inst_39444__$1 = tmp39497;
var inst_39445 = inst_39453;
var state_39480__$1 = (function (){var statearr_39501 = state_39480;
(statearr_39501[(7)] = inst_39444__$1);

(statearr_39501[(8)] = inst_39445);

return statearr_39501;
})();
var statearr_39502_39522 = state_39480__$1;
(statearr_39502_39522[(2)] = null);

(statearr_39502_39522[(1)] = (2));


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
});})(c__37706__auto___39508,out))
;
return ((function (switch__37618__auto__,c__37706__auto___39508,out){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39503[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39503[(1)] = (1));

return statearr_39503;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39480){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39504){if((e39504 instanceof Object)){
var ex__37622__auto__ = e39504;
var statearr_39505_39523 = state_39480;
(statearr_39505_39523[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39524 = state_39480;
state_39480 = G__39524;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39508,out))
})();
var state__37708__auto__ = (function (){var statearr_39506 = f__37707__auto__.call(null);
(statearr_39506[(6)] = c__37706__auto___39508);

return statearr_39506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39508,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39526 = arguments.length;
switch (G__39526) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37706__auto___39596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37706__auto___39596,out){
return (function (){
var f__37707__auto__ = (function (){var switch__37618__auto__ = ((function (c__37706__auto___39596,out){
return (function (state_39568){
var state_val_39569 = (state_39568[(1)]);
if((state_val_39569 === (7))){
var inst_39564 = (state_39568[(2)]);
var state_39568__$1 = state_39568;
var statearr_39570_39597 = state_39568__$1;
(statearr_39570_39597[(2)] = inst_39564);

(statearr_39570_39597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (1))){
var inst_39527 = [];
var inst_39528 = inst_39527;
var inst_39529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39568__$1 = (function (){var statearr_39571 = state_39568;
(statearr_39571[(7)] = inst_39529);

(statearr_39571[(8)] = inst_39528);

return statearr_39571;
})();
var statearr_39572_39598 = state_39568__$1;
(statearr_39572_39598[(2)] = null);

(statearr_39572_39598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (4))){
var inst_39532 = (state_39568[(9)]);
var inst_39532__$1 = (state_39568[(2)]);
var inst_39533 = (inst_39532__$1 == null);
var inst_39534 = cljs.core.not.call(null,inst_39533);
var state_39568__$1 = (function (){var statearr_39573 = state_39568;
(statearr_39573[(9)] = inst_39532__$1);

return statearr_39573;
})();
if(inst_39534){
var statearr_39574_39599 = state_39568__$1;
(statearr_39574_39599[(1)] = (5));

} else {
var statearr_39575_39600 = state_39568__$1;
(statearr_39575_39600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (15))){
var inst_39558 = (state_39568[(2)]);
var state_39568__$1 = state_39568;
var statearr_39576_39601 = state_39568__$1;
(statearr_39576_39601[(2)] = inst_39558);

(statearr_39576_39601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (13))){
var state_39568__$1 = state_39568;
var statearr_39577_39602 = state_39568__$1;
(statearr_39577_39602[(2)] = null);

(statearr_39577_39602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (6))){
var inst_39528 = (state_39568[(8)]);
var inst_39553 = inst_39528.length;
var inst_39554 = (inst_39553 > (0));
var state_39568__$1 = state_39568;
if(cljs.core.truth_(inst_39554)){
var statearr_39578_39603 = state_39568__$1;
(statearr_39578_39603[(1)] = (12));

} else {
var statearr_39579_39604 = state_39568__$1;
(statearr_39579_39604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (3))){
var inst_39566 = (state_39568[(2)]);
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39568__$1,inst_39566);
} else {
if((state_val_39569 === (12))){
var inst_39528 = (state_39568[(8)]);
var inst_39556 = cljs.core.vec.call(null,inst_39528);
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39568__$1,(15),out,inst_39556);
} else {
if((state_val_39569 === (2))){
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39568__$1,(4),ch);
} else {
if((state_val_39569 === (11))){
var inst_39532 = (state_39568[(9)]);
var inst_39536 = (state_39568[(10)]);
var inst_39546 = (state_39568[(2)]);
var inst_39547 = [];
var inst_39548 = inst_39547.push(inst_39532);
var inst_39528 = inst_39547;
var inst_39529 = inst_39536;
var state_39568__$1 = (function (){var statearr_39580 = state_39568;
(statearr_39580[(11)] = inst_39548);

(statearr_39580[(12)] = inst_39546);

(statearr_39580[(7)] = inst_39529);

(statearr_39580[(8)] = inst_39528);

return statearr_39580;
})();
var statearr_39581_39605 = state_39568__$1;
(statearr_39581_39605[(2)] = null);

(statearr_39581_39605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (9))){
var inst_39528 = (state_39568[(8)]);
var inst_39544 = cljs.core.vec.call(null,inst_39528);
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39568__$1,(11),out,inst_39544);
} else {
if((state_val_39569 === (5))){
var inst_39532 = (state_39568[(9)]);
var inst_39529 = (state_39568[(7)]);
var inst_39536 = (state_39568[(10)]);
var inst_39536__$1 = f.call(null,inst_39532);
var inst_39537 = cljs.core._EQ_.call(null,inst_39536__$1,inst_39529);
var inst_39538 = cljs.core.keyword_identical_QMARK_.call(null,inst_39529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39539 = (inst_39537) || (inst_39538);
var state_39568__$1 = (function (){var statearr_39582 = state_39568;
(statearr_39582[(10)] = inst_39536__$1);

return statearr_39582;
})();
if(cljs.core.truth_(inst_39539)){
var statearr_39583_39606 = state_39568__$1;
(statearr_39583_39606[(1)] = (8));

} else {
var statearr_39584_39607 = state_39568__$1;
(statearr_39584_39607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (14))){
var inst_39561 = (state_39568[(2)]);
var inst_39562 = cljs.core.async.close_BANG_.call(null,out);
var state_39568__$1 = (function (){var statearr_39586 = state_39568;
(statearr_39586[(13)] = inst_39561);

return statearr_39586;
})();
var statearr_39587_39608 = state_39568__$1;
(statearr_39587_39608[(2)] = inst_39562);

(statearr_39587_39608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (10))){
var inst_39551 = (state_39568[(2)]);
var state_39568__$1 = state_39568;
var statearr_39588_39609 = state_39568__$1;
(statearr_39588_39609[(2)] = inst_39551);

(statearr_39588_39609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (8))){
var inst_39532 = (state_39568[(9)]);
var inst_39536 = (state_39568[(10)]);
var inst_39528 = (state_39568[(8)]);
var inst_39541 = inst_39528.push(inst_39532);
var tmp39585 = inst_39528;
var inst_39528__$1 = tmp39585;
var inst_39529 = inst_39536;
var state_39568__$1 = (function (){var statearr_39589 = state_39568;
(statearr_39589[(14)] = inst_39541);

(statearr_39589[(7)] = inst_39529);

(statearr_39589[(8)] = inst_39528__$1);

return statearr_39589;
})();
var statearr_39590_39610 = state_39568__$1;
(statearr_39590_39610[(2)] = null);

(statearr_39590_39610[(1)] = (2));


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
});})(c__37706__auto___39596,out))
;
return ((function (switch__37618__auto__,c__37706__auto___39596,out){
return (function() {
var cljs$core$async$state_machine__37619__auto__ = null;
var cljs$core$async$state_machine__37619__auto____0 = (function (){
var statearr_39591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39591[(0)] = cljs$core$async$state_machine__37619__auto__);

(statearr_39591[(1)] = (1));

return statearr_39591;
});
var cljs$core$async$state_machine__37619__auto____1 = (function (state_39568){
while(true){
var ret_value__37620__auto__ = (function (){try{while(true){
var result__37621__auto__ = switch__37618__auto__.call(null,state_39568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37621__auto__;
}
break;
}
}catch (e39592){if((e39592 instanceof Object)){
var ex__37622__auto__ = e39592;
var statearr_39593_39611 = state_39568;
(statearr_39593_39611[(5)] = ex__37622__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39612 = state_39568;
state_39568 = G__39612;
continue;
} else {
return ret_value__37620__auto__;
}
break;
}
});
cljs$core$async$state_machine__37619__auto__ = function(state_39568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37619__auto____1.call(this,state_39568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37619__auto____0;
cljs$core$async$state_machine__37619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37619__auto____1;
return cljs$core$async$state_machine__37619__auto__;
})()
;})(switch__37618__auto__,c__37706__auto___39596,out))
})();
var state__37708__auto__ = (function (){var statearr_39594 = f__37707__auto__.call(null);
(statearr_39594[(6)] = c__37706__auto___39596);

return statearr_39594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37708__auto__);
});})(c__37706__auto___39596,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503758426803
