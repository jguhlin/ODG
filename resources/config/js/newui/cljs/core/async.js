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
var G__33517 = arguments.length;
switch (G__33517) {
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
if(typeof cljs.core.async.t_cljs$core$async33518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33518 = (function (f,blockable,meta33519){
this.f = f;
this.blockable = blockable;
this.meta33519 = meta33519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33520,meta33519__$1){
var self__ = this;
var _33520__$1 = this;
return (new cljs.core.async.t_cljs$core$async33518(self__.f,self__.blockable,meta33519__$1));
});

cljs.core.async.t_cljs$core$async33518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33520){
var self__ = this;
var _33520__$1 = this;
return self__.meta33519;
});

cljs.core.async.t_cljs$core$async33518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33519","meta33519",544413985,null)], null);
});

cljs.core.async.t_cljs$core$async33518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33518";

cljs.core.async.t_cljs$core$async33518.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async33518");
});

cljs.core.async.__GT_t_cljs$core$async33518 = (function cljs$core$async$__GT_t_cljs$core$async33518(f__$1,blockable__$1,meta33519){
return (new cljs.core.async.t_cljs$core$async33518(f__$1,blockable__$1,meta33519));
});

}

return (new cljs.core.async.t_cljs$core$async33518(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33524 = arguments.length;
switch (G__33524) {
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
var G__33527 = arguments.length;
switch (G__33527) {
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
var G__33530 = arguments.length;
switch (G__33530) {
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
var val_33532 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33532);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33532,ret){
return (function (){
return fn1.call(null,val_33532);
});})(val_33532,ret))
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
var G__33534 = arguments.length;
switch (G__33534) {
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
var n__29378__auto___33536 = n;
var x_33537 = (0);
while(true){
if((x_33537 < n__29378__auto___33536)){
(a[x_33537] = (0));

var G__33538 = (x_33537 + (1));
x_33537 = G__33538;
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

var G__33539 = (i + (1));
i = G__33539;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33540 = (function (flag,meta33541){
this.flag = flag;
this.meta33541 = meta33541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33542,meta33541__$1){
var self__ = this;
var _33542__$1 = this;
return (new cljs.core.async.t_cljs$core$async33540(self__.flag,meta33541__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33542){
var self__ = this;
var _33542__$1 = this;
return self__.meta33541;
});})(flag))
;

cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33540.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33541","meta33541",-1478113748,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33540";

cljs.core.async.t_cljs$core$async33540.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async33540");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33540 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33540(flag__$1,meta33541){
return (new cljs.core.async.t_cljs$core$async33540(flag__$1,meta33541));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33540(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33543 = (function (flag,cb,meta33544){
this.flag = flag;
this.cb = cb;
this.meta33544 = meta33544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33545,meta33544__$1){
var self__ = this;
var _33545__$1 = this;
return (new cljs.core.async.t_cljs$core$async33543(self__.flag,self__.cb,meta33544__$1));
});

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33545){
var self__ = this;
var _33545__$1 = this;
return self__.meta33544;
});

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33544","meta33544",-1716153553,null)], null);
});

cljs.core.async.t_cljs$core$async33543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33543";

cljs.core.async.t_cljs$core$async33543.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async33543");
});

cljs.core.async.__GT_t_cljs$core$async33543 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33543(flag__$1,cb__$1,meta33544){
return (new cljs.core.async.t_cljs$core$async33543(flag__$1,cb__$1,meta33544));
});

}

return (new cljs.core.async.t_cljs$core$async33543(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33546_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33546_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33547_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33547_SHARP_,port], null));
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
var G__33548 = (i + (1));
i = G__33548;
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
var len__29602__auto___33554 = arguments.length;
var i__29603__auto___33555 = (0);
while(true){
if((i__29603__auto___33555 < len__29602__auto___33554)){
args__29609__auto__.push((arguments[i__29603__auto___33555]));

var G__33556 = (i__29603__auto___33555 + (1));
i__29603__auto___33555 = G__33556;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((1) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29610__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33551){
var map__33552 = p__33551;
var map__33552__$1 = ((((!((map__33552 == null)))?((((map__33552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33552):map__33552);
var opts = map__33552__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33549){
var G__33550 = cljs.core.first.call(null,seq33549);
var seq33549__$1 = cljs.core.next.call(null,seq33549);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33550,seq33549__$1);
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
var G__33558 = arguments.length;
switch (G__33558) {
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
var c__33471__auto___33604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___33604){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___33604){
return (function (state_33582){
var state_val_33583 = (state_33582[(1)]);
if((state_val_33583 === (7))){
var inst_33578 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33584_33605 = state_33582__$1;
(statearr_33584_33605[(2)] = inst_33578);

(statearr_33584_33605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (1))){
var state_33582__$1 = state_33582;
var statearr_33585_33606 = state_33582__$1;
(statearr_33585_33606[(2)] = null);

(statearr_33585_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (4))){
var inst_33561 = (state_33582[(7)]);
var inst_33561__$1 = (state_33582[(2)]);
var inst_33562 = (inst_33561__$1 == null);
var state_33582__$1 = (function (){var statearr_33586 = state_33582;
(statearr_33586[(7)] = inst_33561__$1);

return statearr_33586;
})();
if(cljs.core.truth_(inst_33562)){
var statearr_33587_33607 = state_33582__$1;
(statearr_33587_33607[(1)] = (5));

} else {
var statearr_33588_33608 = state_33582__$1;
(statearr_33588_33608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (13))){
var state_33582__$1 = state_33582;
var statearr_33589_33609 = state_33582__$1;
(statearr_33589_33609[(2)] = null);

(statearr_33589_33609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (6))){
var inst_33561 = (state_33582[(7)]);
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33582__$1,(11),to,inst_33561);
} else {
if((state_val_33583 === (3))){
var inst_33580 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33582__$1,inst_33580);
} else {
if((state_val_33583 === (12))){
var state_33582__$1 = state_33582;
var statearr_33590_33610 = state_33582__$1;
(statearr_33590_33610[(2)] = null);

(statearr_33590_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (2))){
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33582__$1,(4),from);
} else {
if((state_val_33583 === (11))){
var inst_33571 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
if(cljs.core.truth_(inst_33571)){
var statearr_33591_33611 = state_33582__$1;
(statearr_33591_33611[(1)] = (12));

} else {
var statearr_33592_33612 = state_33582__$1;
(statearr_33592_33612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (9))){
var state_33582__$1 = state_33582;
var statearr_33593_33613 = state_33582__$1;
(statearr_33593_33613[(2)] = null);

(statearr_33593_33613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (5))){
var state_33582__$1 = state_33582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33594_33614 = state_33582__$1;
(statearr_33594_33614[(1)] = (8));

} else {
var statearr_33595_33615 = state_33582__$1;
(statearr_33595_33615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (14))){
var inst_33576 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33596_33616 = state_33582__$1;
(statearr_33596_33616[(2)] = inst_33576);

(statearr_33596_33616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (10))){
var inst_33568 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33597_33617 = state_33582__$1;
(statearr_33597_33617[(2)] = inst_33568);

(statearr_33597_33617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (8))){
var inst_33565 = cljs.core.async.close_BANG_.call(null,to);
var state_33582__$1 = state_33582;
var statearr_33598_33618 = state_33582__$1;
(statearr_33598_33618[(2)] = inst_33565);

(statearr_33598_33618[(1)] = (10));


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
});})(c__33471__auto___33604))
;
return ((function (switch__33365__auto__,c__33471__auto___33604){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_33599 = [null,null,null,null,null,null,null,null];
(statearr_33599[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_33599[(1)] = (1));

return statearr_33599;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_33582){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33600){if((e33600 instanceof Object)){
var ex__33369__auto__ = e33600;
var statearr_33601_33619 = state_33582;
(statearr_33601_33619[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33620 = state_33582;
state_33582 = G__33620;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_33582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_33582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___33604))
})();
var state__33473__auto__ = (function (){var statearr_33602 = f__33472__auto__.call(null);
(statearr_33602[(6)] = c__33471__auto___33604);

return statearr_33602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___33604))
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
return (function (p__33621){
var vec__33622 = p__33621;
var v = cljs.core.nth.call(null,vec__33622,(0),null);
var p = cljs.core.nth.call(null,vec__33622,(1),null);
var job = vec__33622;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33471__auto___33793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___33793,res,vec__33622,v,p,job,jobs,results){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___33793,res,vec__33622,v,p,job,jobs,results){
return (function (state_33629){
var state_val_33630 = (state_33629[(1)]);
if((state_val_33630 === (1))){
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33629__$1,(2),res,v);
} else {
if((state_val_33630 === (2))){
var inst_33626 = (state_33629[(2)]);
var inst_33627 = cljs.core.async.close_BANG_.call(null,res);
var state_33629__$1 = (function (){var statearr_33631 = state_33629;
(statearr_33631[(7)] = inst_33626);

return statearr_33631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33629__$1,inst_33627);
} else {
return null;
}
}
});})(c__33471__auto___33793,res,vec__33622,v,p,job,jobs,results))
;
return ((function (switch__33365__auto__,c__33471__auto___33793,res,vec__33622,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0 = (function (){
var statearr_33632 = [null,null,null,null,null,null,null,null];
(statearr_33632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__);

(statearr_33632[(1)] = (1));

return statearr_33632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1 = (function (state_33629){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33633){if((e33633 instanceof Object)){
var ex__33369__auto__ = e33633;
var statearr_33634_33794 = state_33629;
(statearr_33634_33794[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33795 = state_33629;
state_33629 = G__33795;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = function(state_33629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1.call(this,state_33629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___33793,res,vec__33622,v,p,job,jobs,results))
})();
var state__33473__auto__ = (function (){var statearr_33635 = f__33472__auto__.call(null);
(statearr_33635[(6)] = c__33471__auto___33793);

return statearr_33635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___33793,res,vec__33622,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33636){
var vec__33637 = p__33636;
var v = cljs.core.nth.call(null,vec__33637,(0),null);
var p = cljs.core.nth.call(null,vec__33637,(1),null);
var job = vec__33637;
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
var n__29378__auto___33796 = n;
var __33797 = (0);
while(true){
if((__33797 < n__29378__auto___33796)){
var G__33640_33798 = type;
var G__33640_33799__$1 = (((G__33640_33798 instanceof cljs.core.Keyword))?G__33640_33798.fqn:null);
switch (G__33640_33799__$1) {
case "compute":
var c__33471__auto___33801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33797,c__33471__auto___33801,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (__33797,c__33471__auto___33801,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async){
return (function (state_33653){
var state_val_33654 = (state_33653[(1)]);
if((state_val_33654 === (1))){
var state_33653__$1 = state_33653;
var statearr_33655_33802 = state_33653__$1;
(statearr_33655_33802[(2)] = null);

(statearr_33655_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (2))){
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33653__$1,(4),jobs);
} else {
if((state_val_33654 === (3))){
var inst_33651 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33653__$1,inst_33651);
} else {
if((state_val_33654 === (4))){
var inst_33643 = (state_33653[(2)]);
var inst_33644 = process.call(null,inst_33643);
var state_33653__$1 = state_33653;
if(cljs.core.truth_(inst_33644)){
var statearr_33656_33803 = state_33653__$1;
(statearr_33656_33803[(1)] = (5));

} else {
var statearr_33657_33804 = state_33653__$1;
(statearr_33657_33804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (5))){
var state_33653__$1 = state_33653;
var statearr_33658_33805 = state_33653__$1;
(statearr_33658_33805[(2)] = null);

(statearr_33658_33805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (6))){
var state_33653__$1 = state_33653;
var statearr_33659_33806 = state_33653__$1;
(statearr_33659_33806[(2)] = null);

(statearr_33659_33806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33654 === (7))){
var inst_33649 = (state_33653[(2)]);
var state_33653__$1 = state_33653;
var statearr_33660_33807 = state_33653__$1;
(statearr_33660_33807[(2)] = inst_33649);

(statearr_33660_33807[(1)] = (3));


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
});})(__33797,c__33471__auto___33801,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async))
;
return ((function (__33797,switch__33365__auto__,c__33471__auto___33801,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0 = (function (){
var statearr_33661 = [null,null,null,null,null,null,null];
(statearr_33661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__);

(statearr_33661[(1)] = (1));

return statearr_33661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1 = (function (state_33653){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33662){if((e33662 instanceof Object)){
var ex__33369__auto__ = e33662;
var statearr_33663_33808 = state_33653;
(statearr_33663_33808[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33809 = state_33653;
state_33653 = G__33809;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = function(state_33653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1.call(this,state_33653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__;
})()
;})(__33797,switch__33365__auto__,c__33471__auto___33801,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async))
})();
var state__33473__auto__ = (function (){var statearr_33664 = f__33472__auto__.call(null);
(statearr_33664[(6)] = c__33471__auto___33801);

return statearr_33664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(__33797,c__33471__auto___33801,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async))
);


break;
case "async":
var c__33471__auto___33810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33797,c__33471__auto___33810,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (__33797,c__33471__auto___33810,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async){
return (function (state_33677){
var state_val_33678 = (state_33677[(1)]);
if((state_val_33678 === (1))){
var state_33677__$1 = state_33677;
var statearr_33679_33811 = state_33677__$1;
(statearr_33679_33811[(2)] = null);

(statearr_33679_33811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (2))){
var state_33677__$1 = state_33677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33677__$1,(4),jobs);
} else {
if((state_val_33678 === (3))){
var inst_33675 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33677__$1,inst_33675);
} else {
if((state_val_33678 === (4))){
var inst_33667 = (state_33677[(2)]);
var inst_33668 = async.call(null,inst_33667);
var state_33677__$1 = state_33677;
if(cljs.core.truth_(inst_33668)){
var statearr_33680_33812 = state_33677__$1;
(statearr_33680_33812[(1)] = (5));

} else {
var statearr_33681_33813 = state_33677__$1;
(statearr_33681_33813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (5))){
var state_33677__$1 = state_33677;
var statearr_33682_33814 = state_33677__$1;
(statearr_33682_33814[(2)] = null);

(statearr_33682_33814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (6))){
var state_33677__$1 = state_33677;
var statearr_33683_33815 = state_33677__$1;
(statearr_33683_33815[(2)] = null);

(statearr_33683_33815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33678 === (7))){
var inst_33673 = (state_33677[(2)]);
var state_33677__$1 = state_33677;
var statearr_33684_33816 = state_33677__$1;
(statearr_33684_33816[(2)] = inst_33673);

(statearr_33684_33816[(1)] = (3));


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
});})(__33797,c__33471__auto___33810,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async))
;
return ((function (__33797,switch__33365__auto__,c__33471__auto___33810,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0 = (function (){
var statearr_33685 = [null,null,null,null,null,null,null];
(statearr_33685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__);

(statearr_33685[(1)] = (1));

return statearr_33685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1 = (function (state_33677){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33686){if((e33686 instanceof Object)){
var ex__33369__auto__ = e33686;
var statearr_33687_33817 = state_33677;
(statearr_33687_33817[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33818 = state_33677;
state_33677 = G__33818;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = function(state_33677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1.call(this,state_33677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__;
})()
;})(__33797,switch__33365__auto__,c__33471__auto___33810,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async))
})();
var state__33473__auto__ = (function (){var statearr_33688 = f__33472__auto__.call(null);
(statearr_33688[(6)] = c__33471__auto___33810);

return statearr_33688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(__33797,c__33471__auto___33810,G__33640_33798,G__33640_33799__$1,n__29378__auto___33796,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33640_33799__$1)].join('')));

}

var G__33819 = (__33797 + (1));
__33797 = G__33819;
continue;
} else {
}
break;
}

var c__33471__auto___33820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___33820,jobs,results,process,async){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___33820,jobs,results,process,async){
return (function (state_33710){
var state_val_33711 = (state_33710[(1)]);
if((state_val_33711 === (1))){
var state_33710__$1 = state_33710;
var statearr_33712_33821 = state_33710__$1;
(statearr_33712_33821[(2)] = null);

(statearr_33712_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (2))){
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(4),from);
} else {
if((state_val_33711 === (3))){
var inst_33708 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33710__$1,inst_33708);
} else {
if((state_val_33711 === (4))){
var inst_33691 = (state_33710[(7)]);
var inst_33691__$1 = (state_33710[(2)]);
var inst_33692 = (inst_33691__$1 == null);
var state_33710__$1 = (function (){var statearr_33713 = state_33710;
(statearr_33713[(7)] = inst_33691__$1);

return statearr_33713;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33714_33822 = state_33710__$1;
(statearr_33714_33822[(1)] = (5));

} else {
var statearr_33715_33823 = state_33710__$1;
(statearr_33715_33823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (5))){
var inst_33694 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33710__$1 = state_33710;
var statearr_33716_33824 = state_33710__$1;
(statearr_33716_33824[(2)] = inst_33694);

(statearr_33716_33824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (6))){
var inst_33691 = (state_33710[(7)]);
var inst_33696 = (state_33710[(8)]);
var inst_33696__$1 = cljs.core.async.chan.call(null,(1));
var inst_33697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33698 = [inst_33691,inst_33696__$1];
var inst_33699 = (new cljs.core.PersistentVector(null,2,(5),inst_33697,inst_33698,null));
var state_33710__$1 = (function (){var statearr_33717 = state_33710;
(statearr_33717[(8)] = inst_33696__$1);

return statearr_33717;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33710__$1,(8),jobs,inst_33699);
} else {
if((state_val_33711 === (7))){
var inst_33706 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33718_33825 = state_33710__$1;
(statearr_33718_33825[(2)] = inst_33706);

(statearr_33718_33825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (8))){
var inst_33696 = (state_33710[(8)]);
var inst_33701 = (state_33710[(2)]);
var state_33710__$1 = (function (){var statearr_33719 = state_33710;
(statearr_33719[(9)] = inst_33701);

return statearr_33719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33710__$1,(9),results,inst_33696);
} else {
if((state_val_33711 === (9))){
var inst_33703 = (state_33710[(2)]);
var state_33710__$1 = (function (){var statearr_33720 = state_33710;
(statearr_33720[(10)] = inst_33703);

return statearr_33720;
})();
var statearr_33721_33826 = state_33710__$1;
(statearr_33721_33826[(2)] = null);

(statearr_33721_33826[(1)] = (2));


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
});})(c__33471__auto___33820,jobs,results,process,async))
;
return ((function (switch__33365__auto__,c__33471__auto___33820,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0 = (function (){
var statearr_33722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__);

(statearr_33722[(1)] = (1));

return statearr_33722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1 = (function (state_33710){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33723){if((e33723 instanceof Object)){
var ex__33369__auto__ = e33723;
var statearr_33724_33827 = state_33710;
(statearr_33724_33827[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33828 = state_33710;
state_33710 = G__33828;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = function(state_33710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1.call(this,state_33710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___33820,jobs,results,process,async))
})();
var state__33473__auto__ = (function (){var statearr_33725 = f__33472__auto__.call(null);
(statearr_33725[(6)] = c__33471__auto___33820);

return statearr_33725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___33820,jobs,results,process,async))
);


var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,jobs,results,process,async){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__,jobs,results,process,async){
return (function (state_33763){
var state_val_33764 = (state_33763[(1)]);
if((state_val_33764 === (7))){
var inst_33759 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33765_33829 = state_33763__$1;
(statearr_33765_33829[(2)] = inst_33759);

(statearr_33765_33829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (20))){
var state_33763__$1 = state_33763;
var statearr_33766_33830 = state_33763__$1;
(statearr_33766_33830[(2)] = null);

(statearr_33766_33830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (1))){
var state_33763__$1 = state_33763;
var statearr_33767_33831 = state_33763__$1;
(statearr_33767_33831[(2)] = null);

(statearr_33767_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (4))){
var inst_33728 = (state_33763[(7)]);
var inst_33728__$1 = (state_33763[(2)]);
var inst_33729 = (inst_33728__$1 == null);
var state_33763__$1 = (function (){var statearr_33768 = state_33763;
(statearr_33768[(7)] = inst_33728__$1);

return statearr_33768;
})();
if(cljs.core.truth_(inst_33729)){
var statearr_33769_33832 = state_33763__$1;
(statearr_33769_33832[(1)] = (5));

} else {
var statearr_33770_33833 = state_33763__$1;
(statearr_33770_33833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (15))){
var inst_33741 = (state_33763[(8)]);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33763__$1,(18),to,inst_33741);
} else {
if((state_val_33764 === (21))){
var inst_33754 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33771_33834 = state_33763__$1;
(statearr_33771_33834[(2)] = inst_33754);

(statearr_33771_33834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (13))){
var inst_33756 = (state_33763[(2)]);
var state_33763__$1 = (function (){var statearr_33772 = state_33763;
(statearr_33772[(9)] = inst_33756);

return statearr_33772;
})();
var statearr_33773_33835 = state_33763__$1;
(statearr_33773_33835[(2)] = null);

(statearr_33773_33835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (6))){
var inst_33728 = (state_33763[(7)]);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(11),inst_33728);
} else {
if((state_val_33764 === (17))){
var inst_33749 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
if(cljs.core.truth_(inst_33749)){
var statearr_33774_33836 = state_33763__$1;
(statearr_33774_33836[(1)] = (19));

} else {
var statearr_33775_33837 = state_33763__$1;
(statearr_33775_33837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (3))){
var inst_33761 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33763__$1,inst_33761);
} else {
if((state_val_33764 === (12))){
var inst_33738 = (state_33763[(10)]);
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(14),inst_33738);
} else {
if((state_val_33764 === (2))){
var state_33763__$1 = state_33763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,(4),results);
} else {
if((state_val_33764 === (19))){
var state_33763__$1 = state_33763;
var statearr_33776_33838 = state_33763__$1;
(statearr_33776_33838[(2)] = null);

(statearr_33776_33838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (11))){
var inst_33738 = (state_33763[(2)]);
var state_33763__$1 = (function (){var statearr_33777 = state_33763;
(statearr_33777[(10)] = inst_33738);

return statearr_33777;
})();
var statearr_33778_33839 = state_33763__$1;
(statearr_33778_33839[(2)] = null);

(statearr_33778_33839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (9))){
var state_33763__$1 = state_33763;
var statearr_33779_33840 = state_33763__$1;
(statearr_33779_33840[(2)] = null);

(statearr_33779_33840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (5))){
var state_33763__$1 = state_33763;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33780_33841 = state_33763__$1;
(statearr_33780_33841[(1)] = (8));

} else {
var statearr_33781_33842 = state_33763__$1;
(statearr_33781_33842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (14))){
var inst_33743 = (state_33763[(11)]);
var inst_33741 = (state_33763[(8)]);
var inst_33741__$1 = (state_33763[(2)]);
var inst_33742 = (inst_33741__$1 == null);
var inst_33743__$1 = cljs.core.not.call(null,inst_33742);
var state_33763__$1 = (function (){var statearr_33782 = state_33763;
(statearr_33782[(11)] = inst_33743__$1);

(statearr_33782[(8)] = inst_33741__$1);

return statearr_33782;
})();
if(inst_33743__$1){
var statearr_33783_33843 = state_33763__$1;
(statearr_33783_33843[(1)] = (15));

} else {
var statearr_33784_33844 = state_33763__$1;
(statearr_33784_33844[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (16))){
var inst_33743 = (state_33763[(11)]);
var state_33763__$1 = state_33763;
var statearr_33785_33845 = state_33763__$1;
(statearr_33785_33845[(2)] = inst_33743);

(statearr_33785_33845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (10))){
var inst_33735 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33786_33846 = state_33763__$1;
(statearr_33786_33846[(2)] = inst_33735);

(statearr_33786_33846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (18))){
var inst_33746 = (state_33763[(2)]);
var state_33763__$1 = state_33763;
var statearr_33787_33847 = state_33763__$1;
(statearr_33787_33847[(2)] = inst_33746);

(statearr_33787_33847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33764 === (8))){
var inst_33732 = cljs.core.async.close_BANG_.call(null,to);
var state_33763__$1 = state_33763;
var statearr_33788_33848 = state_33763__$1;
(statearr_33788_33848[(2)] = inst_33732);

(statearr_33788_33848[(1)] = (10));


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
});})(c__33471__auto__,jobs,results,process,async))
;
return ((function (switch__33365__auto__,c__33471__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0 = (function (){
var statearr_33789 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__);

(statearr_33789[(1)] = (1));

return statearr_33789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1 = (function (state_33763){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33790){if((e33790 instanceof Object)){
var ex__33369__auto__ = e33790;
var statearr_33791_33849 = state_33763;
(statearr_33791_33849[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33850 = state_33763;
state_33763 = G__33850;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__ = function(state_33763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1.call(this,state_33763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33366__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__,jobs,results,process,async))
})();
var state__33473__auto__ = (function (){var statearr_33792 = f__33472__auto__.call(null);
(statearr_33792[(6)] = c__33471__auto__);

return statearr_33792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,jobs,results,process,async))
);

return c__33471__auto__;
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
var G__33852 = arguments.length;
switch (G__33852) {
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
var G__33855 = arguments.length;
switch (G__33855) {
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
var G__33858 = arguments.length;
switch (G__33858) {
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
var c__33471__auto___33907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___33907,tc,fc){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___33907,tc,fc){
return (function (state_33884){
var state_val_33885 = (state_33884[(1)]);
if((state_val_33885 === (7))){
var inst_33880 = (state_33884[(2)]);
var state_33884__$1 = state_33884;
var statearr_33886_33908 = state_33884__$1;
(statearr_33886_33908[(2)] = inst_33880);

(statearr_33886_33908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (1))){
var state_33884__$1 = state_33884;
var statearr_33887_33909 = state_33884__$1;
(statearr_33887_33909[(2)] = null);

(statearr_33887_33909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (4))){
var inst_33861 = (state_33884[(7)]);
var inst_33861__$1 = (state_33884[(2)]);
var inst_33862 = (inst_33861__$1 == null);
var state_33884__$1 = (function (){var statearr_33888 = state_33884;
(statearr_33888[(7)] = inst_33861__$1);

return statearr_33888;
})();
if(cljs.core.truth_(inst_33862)){
var statearr_33889_33910 = state_33884__$1;
(statearr_33889_33910[(1)] = (5));

} else {
var statearr_33890_33911 = state_33884__$1;
(statearr_33890_33911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (13))){
var state_33884__$1 = state_33884;
var statearr_33891_33912 = state_33884__$1;
(statearr_33891_33912[(2)] = null);

(statearr_33891_33912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (6))){
var inst_33861 = (state_33884[(7)]);
var inst_33867 = p.call(null,inst_33861);
var state_33884__$1 = state_33884;
if(cljs.core.truth_(inst_33867)){
var statearr_33892_33913 = state_33884__$1;
(statearr_33892_33913[(1)] = (9));

} else {
var statearr_33893_33914 = state_33884__$1;
(statearr_33893_33914[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (3))){
var inst_33882 = (state_33884[(2)]);
var state_33884__$1 = state_33884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33884__$1,inst_33882);
} else {
if((state_val_33885 === (12))){
var state_33884__$1 = state_33884;
var statearr_33894_33915 = state_33884__$1;
(statearr_33894_33915[(2)] = null);

(statearr_33894_33915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (2))){
var state_33884__$1 = state_33884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33884__$1,(4),ch);
} else {
if((state_val_33885 === (11))){
var inst_33861 = (state_33884[(7)]);
var inst_33871 = (state_33884[(2)]);
var state_33884__$1 = state_33884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33884__$1,(8),inst_33871,inst_33861);
} else {
if((state_val_33885 === (9))){
var state_33884__$1 = state_33884;
var statearr_33895_33916 = state_33884__$1;
(statearr_33895_33916[(2)] = tc);

(statearr_33895_33916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (5))){
var inst_33864 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33865 = cljs.core.async.close_BANG_.call(null,fc);
var state_33884__$1 = (function (){var statearr_33896 = state_33884;
(statearr_33896[(8)] = inst_33864);

return statearr_33896;
})();
var statearr_33897_33917 = state_33884__$1;
(statearr_33897_33917[(2)] = inst_33865);

(statearr_33897_33917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (14))){
var inst_33878 = (state_33884[(2)]);
var state_33884__$1 = state_33884;
var statearr_33898_33918 = state_33884__$1;
(statearr_33898_33918[(2)] = inst_33878);

(statearr_33898_33918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (10))){
var state_33884__$1 = state_33884;
var statearr_33899_33919 = state_33884__$1;
(statearr_33899_33919[(2)] = fc);

(statearr_33899_33919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33885 === (8))){
var inst_33873 = (state_33884[(2)]);
var state_33884__$1 = state_33884;
if(cljs.core.truth_(inst_33873)){
var statearr_33900_33920 = state_33884__$1;
(statearr_33900_33920[(1)] = (12));

} else {
var statearr_33901_33921 = state_33884__$1;
(statearr_33901_33921[(1)] = (13));

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
});})(c__33471__auto___33907,tc,fc))
;
return ((function (switch__33365__auto__,c__33471__auto___33907,tc,fc){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_33902 = [null,null,null,null,null,null,null,null,null];
(statearr_33902[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_33902[(1)] = (1));

return statearr_33902;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_33884){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33903){if((e33903 instanceof Object)){
var ex__33369__auto__ = e33903;
var statearr_33904_33922 = state_33884;
(statearr_33904_33922[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33923 = state_33884;
state_33884 = G__33923;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_33884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_33884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___33907,tc,fc))
})();
var state__33473__auto__ = (function (){var statearr_33905 = f__33472__auto__.call(null);
(statearr_33905[(6)] = c__33471__auto___33907);

return statearr_33905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___33907,tc,fc))
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
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__){
return (function (state_33944){
var state_val_33945 = (state_33944[(1)]);
if((state_val_33945 === (7))){
var inst_33940 = (state_33944[(2)]);
var state_33944__$1 = state_33944;
var statearr_33946_33964 = state_33944__$1;
(statearr_33946_33964[(2)] = inst_33940);

(statearr_33946_33964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (1))){
var inst_33924 = init;
var state_33944__$1 = (function (){var statearr_33947 = state_33944;
(statearr_33947[(7)] = inst_33924);

return statearr_33947;
})();
var statearr_33948_33965 = state_33944__$1;
(statearr_33948_33965[(2)] = null);

(statearr_33948_33965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (4))){
var inst_33927 = (state_33944[(8)]);
var inst_33927__$1 = (state_33944[(2)]);
var inst_33928 = (inst_33927__$1 == null);
var state_33944__$1 = (function (){var statearr_33949 = state_33944;
(statearr_33949[(8)] = inst_33927__$1);

return statearr_33949;
})();
if(cljs.core.truth_(inst_33928)){
var statearr_33950_33966 = state_33944__$1;
(statearr_33950_33966[(1)] = (5));

} else {
var statearr_33951_33967 = state_33944__$1;
(statearr_33951_33967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (6))){
var inst_33931 = (state_33944[(9)]);
var inst_33924 = (state_33944[(7)]);
var inst_33927 = (state_33944[(8)]);
var inst_33931__$1 = f.call(null,inst_33924,inst_33927);
var inst_33932 = cljs.core.reduced_QMARK_.call(null,inst_33931__$1);
var state_33944__$1 = (function (){var statearr_33952 = state_33944;
(statearr_33952[(9)] = inst_33931__$1);

return statearr_33952;
})();
if(inst_33932){
var statearr_33953_33968 = state_33944__$1;
(statearr_33953_33968[(1)] = (8));

} else {
var statearr_33954_33969 = state_33944__$1;
(statearr_33954_33969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (3))){
var inst_33942 = (state_33944[(2)]);
var state_33944__$1 = state_33944;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33944__$1,inst_33942);
} else {
if((state_val_33945 === (2))){
var state_33944__$1 = state_33944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33944__$1,(4),ch);
} else {
if((state_val_33945 === (9))){
var inst_33931 = (state_33944[(9)]);
var inst_33924 = inst_33931;
var state_33944__$1 = (function (){var statearr_33955 = state_33944;
(statearr_33955[(7)] = inst_33924);

return statearr_33955;
})();
var statearr_33956_33970 = state_33944__$1;
(statearr_33956_33970[(2)] = null);

(statearr_33956_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (5))){
var inst_33924 = (state_33944[(7)]);
var state_33944__$1 = state_33944;
var statearr_33957_33971 = state_33944__$1;
(statearr_33957_33971[(2)] = inst_33924);

(statearr_33957_33971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (10))){
var inst_33938 = (state_33944[(2)]);
var state_33944__$1 = state_33944;
var statearr_33958_33972 = state_33944__$1;
(statearr_33958_33972[(2)] = inst_33938);

(statearr_33958_33972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33945 === (8))){
var inst_33931 = (state_33944[(9)]);
var inst_33934 = cljs.core.deref.call(null,inst_33931);
var state_33944__$1 = state_33944;
var statearr_33959_33973 = state_33944__$1;
(statearr_33959_33973[(2)] = inst_33934);

(statearr_33959_33973[(1)] = (10));


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
});})(c__33471__auto__))
;
return ((function (switch__33365__auto__,c__33471__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33366__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33366__auto____0 = (function (){
var statearr_33960 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33960[(0)] = cljs$core$async$reduce_$_state_machine__33366__auto__);

(statearr_33960[(1)] = (1));

return statearr_33960;
});
var cljs$core$async$reduce_$_state_machine__33366__auto____1 = (function (state_33944){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33961){if((e33961 instanceof Object)){
var ex__33369__auto__ = e33961;
var statearr_33962_33974 = state_33944;
(statearr_33962_33974[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33975 = state_33944;
state_33944 = G__33975;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33366__auto__ = function(state_33944){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33366__auto____1.call(this,state_33944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33366__auto____0;
cljs$core$async$reduce_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33366__auto____1;
return cljs$core$async$reduce_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_33963 = f__33472__auto__.call(null);
(statearr_33963[(6)] = c__33471__auto__);

return statearr_33963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__,f__$1){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__,f__$1){
return (function (state_33981){
var state_val_33982 = (state_33981[(1)]);
if((state_val_33982 === (1))){
var inst_33976 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33981__$1 = state_33981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33981__$1,(2),inst_33976);
} else {
if((state_val_33982 === (2))){
var inst_33978 = (state_33981[(2)]);
var inst_33979 = f__$1.call(null,inst_33978);
var state_33981__$1 = state_33981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33981__$1,inst_33979);
} else {
return null;
}
}
});})(c__33471__auto__,f__$1))
;
return ((function (switch__33365__auto__,c__33471__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33366__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33366__auto____0 = (function (){
var statearr_33983 = [null,null,null,null,null,null,null];
(statearr_33983[(0)] = cljs$core$async$transduce_$_state_machine__33366__auto__);

(statearr_33983[(1)] = (1));

return statearr_33983;
});
var cljs$core$async$transduce_$_state_machine__33366__auto____1 = (function (state_33981){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_33981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e33984){if((e33984 instanceof Object)){
var ex__33369__auto__ = e33984;
var statearr_33985_33987 = state_33981;
(statearr_33985_33987[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33988 = state_33981;
state_33981 = G__33988;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33366__auto__ = function(state_33981){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33366__auto____1.call(this,state_33981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33366__auto____0;
cljs$core$async$transduce_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33366__auto____1;
return cljs$core$async$transduce_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__,f__$1))
})();
var state__33473__auto__ = (function (){var statearr_33986 = f__33472__auto__.call(null);
(statearr_33986[(6)] = c__33471__auto__);

return statearr_33986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__,f__$1))
);

return c__33471__auto__;
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
var G__33990 = arguments.length;
switch (G__33990) {
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
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__){
return (function (state_34015){
var state_val_34016 = (state_34015[(1)]);
if((state_val_34016 === (7))){
var inst_33997 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
var statearr_34017_34038 = state_34015__$1;
(statearr_34017_34038[(2)] = inst_33997);

(statearr_34017_34038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (1))){
var inst_33991 = cljs.core.seq.call(null,coll);
var inst_33992 = inst_33991;
var state_34015__$1 = (function (){var statearr_34018 = state_34015;
(statearr_34018[(7)] = inst_33992);

return statearr_34018;
})();
var statearr_34019_34039 = state_34015__$1;
(statearr_34019_34039[(2)] = null);

(statearr_34019_34039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (4))){
var inst_33992 = (state_34015[(7)]);
var inst_33995 = cljs.core.first.call(null,inst_33992);
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34015__$1,(7),ch,inst_33995);
} else {
if((state_val_34016 === (13))){
var inst_34009 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
var statearr_34020_34040 = state_34015__$1;
(statearr_34020_34040[(2)] = inst_34009);

(statearr_34020_34040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (6))){
var inst_34000 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
if(cljs.core.truth_(inst_34000)){
var statearr_34021_34041 = state_34015__$1;
(statearr_34021_34041[(1)] = (8));

} else {
var statearr_34022_34042 = state_34015__$1;
(statearr_34022_34042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (3))){
var inst_34013 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34015__$1,inst_34013);
} else {
if((state_val_34016 === (12))){
var state_34015__$1 = state_34015;
var statearr_34023_34043 = state_34015__$1;
(statearr_34023_34043[(2)] = null);

(statearr_34023_34043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (2))){
var inst_33992 = (state_34015[(7)]);
var state_34015__$1 = state_34015;
if(cljs.core.truth_(inst_33992)){
var statearr_34024_34044 = state_34015__$1;
(statearr_34024_34044[(1)] = (4));

} else {
var statearr_34025_34045 = state_34015__$1;
(statearr_34025_34045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (11))){
var inst_34006 = cljs.core.async.close_BANG_.call(null,ch);
var state_34015__$1 = state_34015;
var statearr_34026_34046 = state_34015__$1;
(statearr_34026_34046[(2)] = inst_34006);

(statearr_34026_34046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (9))){
var state_34015__$1 = state_34015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34027_34047 = state_34015__$1;
(statearr_34027_34047[(1)] = (11));

} else {
var statearr_34028_34048 = state_34015__$1;
(statearr_34028_34048[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (5))){
var inst_33992 = (state_34015[(7)]);
var state_34015__$1 = state_34015;
var statearr_34029_34049 = state_34015__$1;
(statearr_34029_34049[(2)] = inst_33992);

(statearr_34029_34049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (10))){
var inst_34011 = (state_34015[(2)]);
var state_34015__$1 = state_34015;
var statearr_34030_34050 = state_34015__$1;
(statearr_34030_34050[(2)] = inst_34011);

(statearr_34030_34050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34016 === (8))){
var inst_33992 = (state_34015[(7)]);
var inst_34002 = cljs.core.next.call(null,inst_33992);
var inst_33992__$1 = inst_34002;
var state_34015__$1 = (function (){var statearr_34031 = state_34015;
(statearr_34031[(7)] = inst_33992__$1);

return statearr_34031;
})();
var statearr_34032_34051 = state_34015__$1;
(statearr_34032_34051[(2)] = null);

(statearr_34032_34051[(1)] = (2));


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
});})(c__33471__auto__))
;
return ((function (switch__33365__auto__,c__33471__auto__){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_34033 = [null,null,null,null,null,null,null,null];
(statearr_34033[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_34033[(1)] = (1));

return statearr_34033;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_34015){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34034){if((e34034 instanceof Object)){
var ex__33369__auto__ = e34034;
var statearr_34035_34052 = state_34015;
(statearr_34035_34052[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34053 = state_34015;
state_34015 = G__34053;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_34015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_34015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_34036 = f__33472__auto__.call(null);
(statearr_34036[(6)] = c__33471__auto__);

return statearr_34036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34054 = (function (ch,cs,meta34055){
this.ch = ch;
this.cs = cs;
this.meta34055 = meta34055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34056,meta34055__$1){
var self__ = this;
var _34056__$1 = this;
return (new cljs.core.async.t_cljs$core$async34054(self__.ch,self__.cs,meta34055__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34056){
var self__ = this;
var _34056__$1 = this;
return self__.meta34055;
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34055","meta34055",-1181964345,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34054";

cljs.core.async.t_cljs$core$async34054.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34054");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34054 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34054(ch__$1,cs__$1,meta34055){
return (new cljs.core.async.t_cljs$core$async34054(ch__$1,cs__$1,meta34055));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34054(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33471__auto___34276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34276,cs,m,dchan,dctr,done){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34276,cs,m,dchan,dctr,done){
return (function (state_34191){
var state_val_34192 = (state_34191[(1)]);
if((state_val_34192 === (7))){
var inst_34187 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34193_34277 = state_34191__$1;
(statearr_34193_34277[(2)] = inst_34187);

(statearr_34193_34277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (20))){
var inst_34090 = (state_34191[(7)]);
var inst_34102 = cljs.core.first.call(null,inst_34090);
var inst_34103 = cljs.core.nth.call(null,inst_34102,(0),null);
var inst_34104 = cljs.core.nth.call(null,inst_34102,(1),null);
var state_34191__$1 = (function (){var statearr_34194 = state_34191;
(statearr_34194[(8)] = inst_34103);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34104)){
var statearr_34195_34278 = state_34191__$1;
(statearr_34195_34278[(1)] = (22));

} else {
var statearr_34196_34279 = state_34191__$1;
(statearr_34196_34279[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (27))){
var inst_34059 = (state_34191[(9)]);
var inst_34132 = (state_34191[(10)]);
var inst_34139 = (state_34191[(11)]);
var inst_34134 = (state_34191[(12)]);
var inst_34139__$1 = cljs.core._nth.call(null,inst_34132,inst_34134);
var inst_34140 = cljs.core.async.put_BANG_.call(null,inst_34139__$1,inst_34059,done);
var state_34191__$1 = (function (){var statearr_34197 = state_34191;
(statearr_34197[(11)] = inst_34139__$1);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34140)){
var statearr_34198_34280 = state_34191__$1;
(statearr_34198_34280[(1)] = (30));

} else {
var statearr_34199_34281 = state_34191__$1;
(statearr_34199_34281[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (1))){
var state_34191__$1 = state_34191;
var statearr_34200_34282 = state_34191__$1;
(statearr_34200_34282[(2)] = null);

(statearr_34200_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (24))){
var inst_34090 = (state_34191[(7)]);
var inst_34109 = (state_34191[(2)]);
var inst_34110 = cljs.core.next.call(null,inst_34090);
var inst_34068 = inst_34110;
var inst_34069 = null;
var inst_34070 = (0);
var inst_34071 = (0);
var state_34191__$1 = (function (){var statearr_34201 = state_34191;
(statearr_34201[(13)] = inst_34068);

(statearr_34201[(14)] = inst_34071);

(statearr_34201[(15)] = inst_34109);

(statearr_34201[(16)] = inst_34069);

(statearr_34201[(17)] = inst_34070);

return statearr_34201;
})();
var statearr_34202_34283 = state_34191__$1;
(statearr_34202_34283[(2)] = null);

(statearr_34202_34283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (39))){
var state_34191__$1 = state_34191;
var statearr_34206_34284 = state_34191__$1;
(statearr_34206_34284[(2)] = null);

(statearr_34206_34284[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (4))){
var inst_34059 = (state_34191[(9)]);
var inst_34059__$1 = (state_34191[(2)]);
var inst_34060 = (inst_34059__$1 == null);
var state_34191__$1 = (function (){var statearr_34207 = state_34191;
(statearr_34207[(9)] = inst_34059__$1);

return statearr_34207;
})();
if(cljs.core.truth_(inst_34060)){
var statearr_34208_34285 = state_34191__$1;
(statearr_34208_34285[(1)] = (5));

} else {
var statearr_34209_34286 = state_34191__$1;
(statearr_34209_34286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (15))){
var inst_34068 = (state_34191[(13)]);
var inst_34071 = (state_34191[(14)]);
var inst_34069 = (state_34191[(16)]);
var inst_34070 = (state_34191[(17)]);
var inst_34086 = (state_34191[(2)]);
var inst_34087 = (inst_34071 + (1));
var tmp34203 = inst_34068;
var tmp34204 = inst_34069;
var tmp34205 = inst_34070;
var inst_34068__$1 = tmp34203;
var inst_34069__$1 = tmp34204;
var inst_34070__$1 = tmp34205;
var inst_34071__$1 = inst_34087;
var state_34191__$1 = (function (){var statearr_34210 = state_34191;
(statearr_34210[(13)] = inst_34068__$1);

(statearr_34210[(14)] = inst_34071__$1);

(statearr_34210[(18)] = inst_34086);

(statearr_34210[(16)] = inst_34069__$1);

(statearr_34210[(17)] = inst_34070__$1);

return statearr_34210;
})();
var statearr_34211_34287 = state_34191__$1;
(statearr_34211_34287[(2)] = null);

(statearr_34211_34287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (21))){
var inst_34113 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34215_34288 = state_34191__$1;
(statearr_34215_34288[(2)] = inst_34113);

(statearr_34215_34288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (31))){
var inst_34139 = (state_34191[(11)]);
var inst_34143 = done.call(null,null);
var inst_34144 = cljs.core.async.untap_STAR_.call(null,m,inst_34139);
var state_34191__$1 = (function (){var statearr_34216 = state_34191;
(statearr_34216[(19)] = inst_34143);

return statearr_34216;
})();
var statearr_34217_34289 = state_34191__$1;
(statearr_34217_34289[(2)] = inst_34144);

(statearr_34217_34289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (32))){
var inst_34132 = (state_34191[(10)]);
var inst_34134 = (state_34191[(12)]);
var inst_34131 = (state_34191[(20)]);
var inst_34133 = (state_34191[(21)]);
var inst_34146 = (state_34191[(2)]);
var inst_34147 = (inst_34134 + (1));
var tmp34212 = inst_34132;
var tmp34213 = inst_34131;
var tmp34214 = inst_34133;
var inst_34131__$1 = tmp34213;
var inst_34132__$1 = tmp34212;
var inst_34133__$1 = tmp34214;
var inst_34134__$1 = inst_34147;
var state_34191__$1 = (function (){var statearr_34218 = state_34191;
(statearr_34218[(10)] = inst_34132__$1);

(statearr_34218[(22)] = inst_34146);

(statearr_34218[(12)] = inst_34134__$1);

(statearr_34218[(20)] = inst_34131__$1);

(statearr_34218[(21)] = inst_34133__$1);

return statearr_34218;
})();
var statearr_34219_34290 = state_34191__$1;
(statearr_34219_34290[(2)] = null);

(statearr_34219_34290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (40))){
var inst_34159 = (state_34191[(23)]);
var inst_34163 = done.call(null,null);
var inst_34164 = cljs.core.async.untap_STAR_.call(null,m,inst_34159);
var state_34191__$1 = (function (){var statearr_34220 = state_34191;
(statearr_34220[(24)] = inst_34163);

return statearr_34220;
})();
var statearr_34221_34291 = state_34191__$1;
(statearr_34221_34291[(2)] = inst_34164);

(statearr_34221_34291[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (33))){
var inst_34150 = (state_34191[(25)]);
var inst_34152 = cljs.core.chunked_seq_QMARK_.call(null,inst_34150);
var state_34191__$1 = state_34191;
if(inst_34152){
var statearr_34222_34292 = state_34191__$1;
(statearr_34222_34292[(1)] = (36));

} else {
var statearr_34223_34293 = state_34191__$1;
(statearr_34223_34293[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (13))){
var inst_34080 = (state_34191[(26)]);
var inst_34083 = cljs.core.async.close_BANG_.call(null,inst_34080);
var state_34191__$1 = state_34191;
var statearr_34224_34294 = state_34191__$1;
(statearr_34224_34294[(2)] = inst_34083);

(statearr_34224_34294[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (22))){
var inst_34103 = (state_34191[(8)]);
var inst_34106 = cljs.core.async.close_BANG_.call(null,inst_34103);
var state_34191__$1 = state_34191;
var statearr_34225_34295 = state_34191__$1;
(statearr_34225_34295[(2)] = inst_34106);

(statearr_34225_34295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (36))){
var inst_34150 = (state_34191[(25)]);
var inst_34154 = cljs.core.chunk_first.call(null,inst_34150);
var inst_34155 = cljs.core.chunk_rest.call(null,inst_34150);
var inst_34156 = cljs.core.count.call(null,inst_34154);
var inst_34131 = inst_34155;
var inst_34132 = inst_34154;
var inst_34133 = inst_34156;
var inst_34134 = (0);
var state_34191__$1 = (function (){var statearr_34226 = state_34191;
(statearr_34226[(10)] = inst_34132);

(statearr_34226[(12)] = inst_34134);

(statearr_34226[(20)] = inst_34131);

(statearr_34226[(21)] = inst_34133);

return statearr_34226;
})();
var statearr_34227_34296 = state_34191__$1;
(statearr_34227_34296[(2)] = null);

(statearr_34227_34296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (41))){
var inst_34150 = (state_34191[(25)]);
var inst_34166 = (state_34191[(2)]);
var inst_34167 = cljs.core.next.call(null,inst_34150);
var inst_34131 = inst_34167;
var inst_34132 = null;
var inst_34133 = (0);
var inst_34134 = (0);
var state_34191__$1 = (function (){var statearr_34228 = state_34191;
(statearr_34228[(27)] = inst_34166);

(statearr_34228[(10)] = inst_34132);

(statearr_34228[(12)] = inst_34134);

(statearr_34228[(20)] = inst_34131);

(statearr_34228[(21)] = inst_34133);

return statearr_34228;
})();
var statearr_34229_34297 = state_34191__$1;
(statearr_34229_34297[(2)] = null);

(statearr_34229_34297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (43))){
var state_34191__$1 = state_34191;
var statearr_34230_34298 = state_34191__$1;
(statearr_34230_34298[(2)] = null);

(statearr_34230_34298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (29))){
var inst_34175 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34231_34299 = state_34191__$1;
(statearr_34231_34299[(2)] = inst_34175);

(statearr_34231_34299[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (44))){
var inst_34184 = (state_34191[(2)]);
var state_34191__$1 = (function (){var statearr_34232 = state_34191;
(statearr_34232[(28)] = inst_34184);

return statearr_34232;
})();
var statearr_34233_34300 = state_34191__$1;
(statearr_34233_34300[(2)] = null);

(statearr_34233_34300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (6))){
var inst_34123 = (state_34191[(29)]);
var inst_34122 = cljs.core.deref.call(null,cs);
var inst_34123__$1 = cljs.core.keys.call(null,inst_34122);
var inst_34124 = cljs.core.count.call(null,inst_34123__$1);
var inst_34125 = cljs.core.reset_BANG_.call(null,dctr,inst_34124);
var inst_34130 = cljs.core.seq.call(null,inst_34123__$1);
var inst_34131 = inst_34130;
var inst_34132 = null;
var inst_34133 = (0);
var inst_34134 = (0);
var state_34191__$1 = (function (){var statearr_34234 = state_34191;
(statearr_34234[(10)] = inst_34132);

(statearr_34234[(29)] = inst_34123__$1);

(statearr_34234[(12)] = inst_34134);

(statearr_34234[(20)] = inst_34131);

(statearr_34234[(21)] = inst_34133);

(statearr_34234[(30)] = inst_34125);

return statearr_34234;
})();
var statearr_34235_34301 = state_34191__$1;
(statearr_34235_34301[(2)] = null);

(statearr_34235_34301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (28))){
var inst_34131 = (state_34191[(20)]);
var inst_34150 = (state_34191[(25)]);
var inst_34150__$1 = cljs.core.seq.call(null,inst_34131);
var state_34191__$1 = (function (){var statearr_34236 = state_34191;
(statearr_34236[(25)] = inst_34150__$1);

return statearr_34236;
})();
if(inst_34150__$1){
var statearr_34237_34302 = state_34191__$1;
(statearr_34237_34302[(1)] = (33));

} else {
var statearr_34238_34303 = state_34191__$1;
(statearr_34238_34303[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (25))){
var inst_34134 = (state_34191[(12)]);
var inst_34133 = (state_34191[(21)]);
var inst_34136 = (inst_34134 < inst_34133);
var inst_34137 = inst_34136;
var state_34191__$1 = state_34191;
if(cljs.core.truth_(inst_34137)){
var statearr_34239_34304 = state_34191__$1;
(statearr_34239_34304[(1)] = (27));

} else {
var statearr_34240_34305 = state_34191__$1;
(statearr_34240_34305[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (34))){
var state_34191__$1 = state_34191;
var statearr_34241_34306 = state_34191__$1;
(statearr_34241_34306[(2)] = null);

(statearr_34241_34306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (17))){
var state_34191__$1 = state_34191;
var statearr_34242_34307 = state_34191__$1;
(statearr_34242_34307[(2)] = null);

(statearr_34242_34307[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (3))){
var inst_34189 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34191__$1,inst_34189);
} else {
if((state_val_34192 === (12))){
var inst_34118 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34243_34308 = state_34191__$1;
(statearr_34243_34308[(2)] = inst_34118);

(statearr_34243_34308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (2))){
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34191__$1,(4),ch);
} else {
if((state_val_34192 === (23))){
var state_34191__$1 = state_34191;
var statearr_34244_34309 = state_34191__$1;
(statearr_34244_34309[(2)] = null);

(statearr_34244_34309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (35))){
var inst_34173 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34245_34310 = state_34191__$1;
(statearr_34245_34310[(2)] = inst_34173);

(statearr_34245_34310[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (19))){
var inst_34090 = (state_34191[(7)]);
var inst_34094 = cljs.core.chunk_first.call(null,inst_34090);
var inst_34095 = cljs.core.chunk_rest.call(null,inst_34090);
var inst_34096 = cljs.core.count.call(null,inst_34094);
var inst_34068 = inst_34095;
var inst_34069 = inst_34094;
var inst_34070 = inst_34096;
var inst_34071 = (0);
var state_34191__$1 = (function (){var statearr_34246 = state_34191;
(statearr_34246[(13)] = inst_34068);

(statearr_34246[(14)] = inst_34071);

(statearr_34246[(16)] = inst_34069);

(statearr_34246[(17)] = inst_34070);

return statearr_34246;
})();
var statearr_34247_34311 = state_34191__$1;
(statearr_34247_34311[(2)] = null);

(statearr_34247_34311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (11))){
var inst_34068 = (state_34191[(13)]);
var inst_34090 = (state_34191[(7)]);
var inst_34090__$1 = cljs.core.seq.call(null,inst_34068);
var state_34191__$1 = (function (){var statearr_34248 = state_34191;
(statearr_34248[(7)] = inst_34090__$1);

return statearr_34248;
})();
if(inst_34090__$1){
var statearr_34249_34312 = state_34191__$1;
(statearr_34249_34312[(1)] = (16));

} else {
var statearr_34250_34313 = state_34191__$1;
(statearr_34250_34313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (9))){
var inst_34120 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34251_34314 = state_34191__$1;
(statearr_34251_34314[(2)] = inst_34120);

(statearr_34251_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (5))){
var inst_34066 = cljs.core.deref.call(null,cs);
var inst_34067 = cljs.core.seq.call(null,inst_34066);
var inst_34068 = inst_34067;
var inst_34069 = null;
var inst_34070 = (0);
var inst_34071 = (0);
var state_34191__$1 = (function (){var statearr_34252 = state_34191;
(statearr_34252[(13)] = inst_34068);

(statearr_34252[(14)] = inst_34071);

(statearr_34252[(16)] = inst_34069);

(statearr_34252[(17)] = inst_34070);

return statearr_34252;
})();
var statearr_34253_34315 = state_34191__$1;
(statearr_34253_34315[(2)] = null);

(statearr_34253_34315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (14))){
var state_34191__$1 = state_34191;
var statearr_34254_34316 = state_34191__$1;
(statearr_34254_34316[(2)] = null);

(statearr_34254_34316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (45))){
var inst_34181 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34255_34317 = state_34191__$1;
(statearr_34255_34317[(2)] = inst_34181);

(statearr_34255_34317[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (26))){
var inst_34123 = (state_34191[(29)]);
var inst_34177 = (state_34191[(2)]);
var inst_34178 = cljs.core.seq.call(null,inst_34123);
var state_34191__$1 = (function (){var statearr_34256 = state_34191;
(statearr_34256[(31)] = inst_34177);

return statearr_34256;
})();
if(inst_34178){
var statearr_34257_34318 = state_34191__$1;
(statearr_34257_34318[(1)] = (42));

} else {
var statearr_34258_34319 = state_34191__$1;
(statearr_34258_34319[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (16))){
var inst_34090 = (state_34191[(7)]);
var inst_34092 = cljs.core.chunked_seq_QMARK_.call(null,inst_34090);
var state_34191__$1 = state_34191;
if(inst_34092){
var statearr_34259_34320 = state_34191__$1;
(statearr_34259_34320[(1)] = (19));

} else {
var statearr_34260_34321 = state_34191__$1;
(statearr_34260_34321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (38))){
var inst_34170 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34261_34322 = state_34191__$1;
(statearr_34261_34322[(2)] = inst_34170);

(statearr_34261_34322[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (30))){
var state_34191__$1 = state_34191;
var statearr_34262_34323 = state_34191__$1;
(statearr_34262_34323[(2)] = null);

(statearr_34262_34323[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (10))){
var inst_34071 = (state_34191[(14)]);
var inst_34069 = (state_34191[(16)]);
var inst_34079 = cljs.core._nth.call(null,inst_34069,inst_34071);
var inst_34080 = cljs.core.nth.call(null,inst_34079,(0),null);
var inst_34081 = cljs.core.nth.call(null,inst_34079,(1),null);
var state_34191__$1 = (function (){var statearr_34263 = state_34191;
(statearr_34263[(26)] = inst_34080);

return statearr_34263;
})();
if(cljs.core.truth_(inst_34081)){
var statearr_34264_34324 = state_34191__$1;
(statearr_34264_34324[(1)] = (13));

} else {
var statearr_34265_34325 = state_34191__$1;
(statearr_34265_34325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (18))){
var inst_34116 = (state_34191[(2)]);
var state_34191__$1 = state_34191;
var statearr_34266_34326 = state_34191__$1;
(statearr_34266_34326[(2)] = inst_34116);

(statearr_34266_34326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (42))){
var state_34191__$1 = state_34191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34191__$1,(45),dchan);
} else {
if((state_val_34192 === (37))){
var inst_34059 = (state_34191[(9)]);
var inst_34159 = (state_34191[(23)]);
var inst_34150 = (state_34191[(25)]);
var inst_34159__$1 = cljs.core.first.call(null,inst_34150);
var inst_34160 = cljs.core.async.put_BANG_.call(null,inst_34159__$1,inst_34059,done);
var state_34191__$1 = (function (){var statearr_34267 = state_34191;
(statearr_34267[(23)] = inst_34159__$1);

return statearr_34267;
})();
if(cljs.core.truth_(inst_34160)){
var statearr_34268_34327 = state_34191__$1;
(statearr_34268_34327[(1)] = (39));

} else {
var statearr_34269_34328 = state_34191__$1;
(statearr_34269_34328[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34192 === (8))){
var inst_34071 = (state_34191[(14)]);
var inst_34070 = (state_34191[(17)]);
var inst_34073 = (inst_34071 < inst_34070);
var inst_34074 = inst_34073;
var state_34191__$1 = state_34191;
if(cljs.core.truth_(inst_34074)){
var statearr_34270_34329 = state_34191__$1;
(statearr_34270_34329[(1)] = (10));

} else {
var statearr_34271_34330 = state_34191__$1;
(statearr_34271_34330[(1)] = (11));

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
});})(c__33471__auto___34276,cs,m,dchan,dctr,done))
;
return ((function (switch__33365__auto__,c__33471__auto___34276,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33366__auto__ = null;
var cljs$core$async$mult_$_state_machine__33366__auto____0 = (function (){
var statearr_34272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34272[(0)] = cljs$core$async$mult_$_state_machine__33366__auto__);

(statearr_34272[(1)] = (1));

return statearr_34272;
});
var cljs$core$async$mult_$_state_machine__33366__auto____1 = (function (state_34191){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34273){if((e34273 instanceof Object)){
var ex__33369__auto__ = e34273;
var statearr_34274_34331 = state_34191;
(statearr_34274_34331[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34332 = state_34191;
state_34191 = G__34332;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33366__auto__ = function(state_34191){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33366__auto____1.call(this,state_34191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33366__auto____0;
cljs$core$async$mult_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33366__auto____1;
return cljs$core$async$mult_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34276,cs,m,dchan,dctr,done))
})();
var state__33473__auto__ = (function (){var statearr_34275 = f__33472__auto__.call(null);
(statearr_34275[(6)] = c__33471__auto___34276);

return statearr_34275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34276,cs,m,dchan,dctr,done))
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
var G__34334 = arguments.length;
switch (G__34334) {
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
var len__29602__auto___34346 = arguments.length;
var i__29603__auto___34347 = (0);
while(true){
if((i__29603__auto___34347 < len__29602__auto___34346)){
args__29609__auto__.push((arguments[i__29603__auto___34347]));

var G__34348 = (i__29603__auto___34347 + (1));
i__29603__auto___34347 = G__34348;
continue;
} else {
}
break;
}

var argseq__29610__auto__ = ((((3) < args__29609__auto__.length))?(new cljs.core.IndexedSeq(args__29609__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29610__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34340){
var map__34341 = p__34340;
var map__34341__$1 = ((((!((map__34341 == null)))?((((map__34341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34341):map__34341);
var opts = map__34341__$1;
var statearr_34343_34349 = state;
(statearr_34343_34349[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34341,map__34341__$1,opts){
return (function (val){
var statearr_34344_34350 = state;
(statearr_34344_34350[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34341,map__34341__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34345_34351 = state;
(statearr_34345_34351[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34336){
var G__34337 = cljs.core.first.call(null,seq34336);
var seq34336__$1 = cljs.core.next.call(null,seq34336);
var G__34338 = cljs.core.first.call(null,seq34336__$1);
var seq34336__$2 = cljs.core.next.call(null,seq34336__$1);
var G__34339 = cljs.core.first.call(null,seq34336__$2);
var seq34336__$3 = cljs.core.next.call(null,seq34336__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34337,G__34338,G__34339,seq34336__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34352 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34353){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34353 = meta34353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34354,meta34353__$1){
var self__ = this;
var _34354__$1 = this;
return (new cljs.core.async.t_cljs$core$async34352(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34353__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34354){
var self__ = this;
var _34354__$1 = this;
return self__.meta34353;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34352.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34353","meta34353",-42975121,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34352";

cljs.core.async.t_cljs$core$async34352.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34352");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34352 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34352(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34353){
return (new cljs.core.async.t_cljs$core$async34352(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34353));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34352(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33471__auto___34516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34516,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34516,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34456){
var state_val_34457 = (state_34456[(1)]);
if((state_val_34457 === (7))){
var inst_34371 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34458_34517 = state_34456__$1;
(statearr_34458_34517[(2)] = inst_34371);

(statearr_34458_34517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (20))){
var inst_34383 = (state_34456[(7)]);
var state_34456__$1 = state_34456;
var statearr_34459_34518 = state_34456__$1;
(statearr_34459_34518[(2)] = inst_34383);

(statearr_34459_34518[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (27))){
var state_34456__$1 = state_34456;
var statearr_34460_34519 = state_34456__$1;
(statearr_34460_34519[(2)] = null);

(statearr_34460_34519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (1))){
var inst_34358 = (state_34456[(8)]);
var inst_34358__$1 = calc_state.call(null);
var inst_34360 = (inst_34358__$1 == null);
var inst_34361 = cljs.core.not.call(null,inst_34360);
var state_34456__$1 = (function (){var statearr_34461 = state_34456;
(statearr_34461[(8)] = inst_34358__$1);

return statearr_34461;
})();
if(inst_34361){
var statearr_34462_34520 = state_34456__$1;
(statearr_34462_34520[(1)] = (2));

} else {
var statearr_34463_34521 = state_34456__$1;
(statearr_34463_34521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (24))){
var inst_34407 = (state_34456[(9)]);
var inst_34430 = (state_34456[(10)]);
var inst_34416 = (state_34456[(11)]);
var inst_34430__$1 = inst_34407.call(null,inst_34416);
var state_34456__$1 = (function (){var statearr_34464 = state_34456;
(statearr_34464[(10)] = inst_34430__$1);

return statearr_34464;
})();
if(cljs.core.truth_(inst_34430__$1)){
var statearr_34465_34522 = state_34456__$1;
(statearr_34465_34522[(1)] = (29));

} else {
var statearr_34466_34523 = state_34456__$1;
(statearr_34466_34523[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (4))){
var inst_34374 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34374)){
var statearr_34467_34524 = state_34456__$1;
(statearr_34467_34524[(1)] = (8));

} else {
var statearr_34468_34525 = state_34456__$1;
(statearr_34468_34525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (15))){
var inst_34401 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34401)){
var statearr_34469_34526 = state_34456__$1;
(statearr_34469_34526[(1)] = (19));

} else {
var statearr_34470_34527 = state_34456__$1;
(statearr_34470_34527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (21))){
var inst_34406 = (state_34456[(12)]);
var inst_34406__$1 = (state_34456[(2)]);
var inst_34407 = cljs.core.get.call(null,inst_34406__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34408 = cljs.core.get.call(null,inst_34406__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34409 = cljs.core.get.call(null,inst_34406__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34456__$1 = (function (){var statearr_34471 = state_34456;
(statearr_34471[(9)] = inst_34407);

(statearr_34471[(13)] = inst_34408);

(statearr_34471[(12)] = inst_34406__$1);

return statearr_34471;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34456__$1,(22),inst_34409);
} else {
if((state_val_34457 === (31))){
var inst_34438 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34438)){
var statearr_34472_34528 = state_34456__$1;
(statearr_34472_34528[(1)] = (32));

} else {
var statearr_34473_34529 = state_34456__$1;
(statearr_34473_34529[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (32))){
var inst_34415 = (state_34456[(14)]);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34456__$1,(35),out,inst_34415);
} else {
if((state_val_34457 === (33))){
var inst_34406 = (state_34456[(12)]);
var inst_34383 = inst_34406;
var state_34456__$1 = (function (){var statearr_34474 = state_34456;
(statearr_34474[(7)] = inst_34383);

return statearr_34474;
})();
var statearr_34475_34530 = state_34456__$1;
(statearr_34475_34530[(2)] = null);

(statearr_34475_34530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (13))){
var inst_34383 = (state_34456[(7)]);
var inst_34390 = inst_34383.cljs$lang$protocol_mask$partition0$;
var inst_34391 = (inst_34390 & (64));
var inst_34392 = inst_34383.cljs$core$ISeq$;
var inst_34393 = (cljs.core.PROTOCOL_SENTINEL === inst_34392);
var inst_34394 = (inst_34391) || (inst_34393);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34394)){
var statearr_34476_34531 = state_34456__$1;
(statearr_34476_34531[(1)] = (16));

} else {
var statearr_34477_34532 = state_34456__$1;
(statearr_34477_34532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (22))){
var inst_34416 = (state_34456[(11)]);
var inst_34415 = (state_34456[(14)]);
var inst_34414 = (state_34456[(2)]);
var inst_34415__$1 = cljs.core.nth.call(null,inst_34414,(0),null);
var inst_34416__$1 = cljs.core.nth.call(null,inst_34414,(1),null);
var inst_34417 = (inst_34415__$1 == null);
var inst_34418 = cljs.core._EQ_.call(null,inst_34416__$1,change);
var inst_34419 = (inst_34417) || (inst_34418);
var state_34456__$1 = (function (){var statearr_34478 = state_34456;
(statearr_34478[(11)] = inst_34416__$1);

(statearr_34478[(14)] = inst_34415__$1);

return statearr_34478;
})();
if(cljs.core.truth_(inst_34419)){
var statearr_34479_34533 = state_34456__$1;
(statearr_34479_34533[(1)] = (23));

} else {
var statearr_34480_34534 = state_34456__$1;
(statearr_34480_34534[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (36))){
var inst_34406 = (state_34456[(12)]);
var inst_34383 = inst_34406;
var state_34456__$1 = (function (){var statearr_34481 = state_34456;
(statearr_34481[(7)] = inst_34383);

return statearr_34481;
})();
var statearr_34482_34535 = state_34456__$1;
(statearr_34482_34535[(2)] = null);

(statearr_34482_34535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (29))){
var inst_34430 = (state_34456[(10)]);
var state_34456__$1 = state_34456;
var statearr_34483_34536 = state_34456__$1;
(statearr_34483_34536[(2)] = inst_34430);

(statearr_34483_34536[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (6))){
var state_34456__$1 = state_34456;
var statearr_34484_34537 = state_34456__$1;
(statearr_34484_34537[(2)] = false);

(statearr_34484_34537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (28))){
var inst_34426 = (state_34456[(2)]);
var inst_34427 = calc_state.call(null);
var inst_34383 = inst_34427;
var state_34456__$1 = (function (){var statearr_34485 = state_34456;
(statearr_34485[(7)] = inst_34383);

(statearr_34485[(15)] = inst_34426);

return statearr_34485;
})();
var statearr_34486_34538 = state_34456__$1;
(statearr_34486_34538[(2)] = null);

(statearr_34486_34538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (25))){
var inst_34452 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34487_34539 = state_34456__$1;
(statearr_34487_34539[(2)] = inst_34452);

(statearr_34487_34539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (34))){
var inst_34450 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34488_34540 = state_34456__$1;
(statearr_34488_34540[(2)] = inst_34450);

(statearr_34488_34540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (17))){
var state_34456__$1 = state_34456;
var statearr_34489_34541 = state_34456__$1;
(statearr_34489_34541[(2)] = false);

(statearr_34489_34541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (3))){
var state_34456__$1 = state_34456;
var statearr_34490_34542 = state_34456__$1;
(statearr_34490_34542[(2)] = false);

(statearr_34490_34542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (12))){
var inst_34454 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34456__$1,inst_34454);
} else {
if((state_val_34457 === (2))){
var inst_34358 = (state_34456[(8)]);
var inst_34363 = inst_34358.cljs$lang$protocol_mask$partition0$;
var inst_34364 = (inst_34363 & (64));
var inst_34365 = inst_34358.cljs$core$ISeq$;
var inst_34366 = (cljs.core.PROTOCOL_SENTINEL === inst_34365);
var inst_34367 = (inst_34364) || (inst_34366);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34367)){
var statearr_34491_34543 = state_34456__$1;
(statearr_34491_34543[(1)] = (5));

} else {
var statearr_34492_34544 = state_34456__$1;
(statearr_34492_34544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (23))){
var inst_34415 = (state_34456[(14)]);
var inst_34421 = (inst_34415 == null);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34421)){
var statearr_34493_34545 = state_34456__$1;
(statearr_34493_34545[(1)] = (26));

} else {
var statearr_34494_34546 = state_34456__$1;
(statearr_34494_34546[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (35))){
var inst_34441 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
if(cljs.core.truth_(inst_34441)){
var statearr_34495_34547 = state_34456__$1;
(statearr_34495_34547[(1)] = (36));

} else {
var statearr_34496_34548 = state_34456__$1;
(statearr_34496_34548[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (19))){
var inst_34383 = (state_34456[(7)]);
var inst_34403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34383);
var state_34456__$1 = state_34456;
var statearr_34497_34549 = state_34456__$1;
(statearr_34497_34549[(2)] = inst_34403);

(statearr_34497_34549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (11))){
var inst_34383 = (state_34456[(7)]);
var inst_34387 = (inst_34383 == null);
var inst_34388 = cljs.core.not.call(null,inst_34387);
var state_34456__$1 = state_34456;
if(inst_34388){
var statearr_34498_34550 = state_34456__$1;
(statearr_34498_34550[(1)] = (13));

} else {
var statearr_34499_34551 = state_34456__$1;
(statearr_34499_34551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (9))){
var inst_34358 = (state_34456[(8)]);
var state_34456__$1 = state_34456;
var statearr_34500_34552 = state_34456__$1;
(statearr_34500_34552[(2)] = inst_34358);

(statearr_34500_34552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (5))){
var state_34456__$1 = state_34456;
var statearr_34501_34553 = state_34456__$1;
(statearr_34501_34553[(2)] = true);

(statearr_34501_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (14))){
var state_34456__$1 = state_34456;
var statearr_34502_34554 = state_34456__$1;
(statearr_34502_34554[(2)] = false);

(statearr_34502_34554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (26))){
var inst_34416 = (state_34456[(11)]);
var inst_34423 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34416);
var state_34456__$1 = state_34456;
var statearr_34503_34555 = state_34456__$1;
(statearr_34503_34555[(2)] = inst_34423);

(statearr_34503_34555[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (16))){
var state_34456__$1 = state_34456;
var statearr_34504_34556 = state_34456__$1;
(statearr_34504_34556[(2)] = true);

(statearr_34504_34556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (38))){
var inst_34446 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34505_34557 = state_34456__$1;
(statearr_34505_34557[(2)] = inst_34446);

(statearr_34505_34557[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (30))){
var inst_34407 = (state_34456[(9)]);
var inst_34408 = (state_34456[(13)]);
var inst_34416 = (state_34456[(11)]);
var inst_34433 = cljs.core.empty_QMARK_.call(null,inst_34407);
var inst_34434 = inst_34408.call(null,inst_34416);
var inst_34435 = cljs.core.not.call(null,inst_34434);
var inst_34436 = (inst_34433) && (inst_34435);
var state_34456__$1 = state_34456;
var statearr_34506_34558 = state_34456__$1;
(statearr_34506_34558[(2)] = inst_34436);

(statearr_34506_34558[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (10))){
var inst_34358 = (state_34456[(8)]);
var inst_34379 = (state_34456[(2)]);
var inst_34380 = cljs.core.get.call(null,inst_34379,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34381 = cljs.core.get.call(null,inst_34379,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34382 = cljs.core.get.call(null,inst_34379,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34383 = inst_34358;
var state_34456__$1 = (function (){var statearr_34507 = state_34456;
(statearr_34507[(16)] = inst_34380);

(statearr_34507[(17)] = inst_34381);

(statearr_34507[(7)] = inst_34383);

(statearr_34507[(18)] = inst_34382);

return statearr_34507;
})();
var statearr_34508_34559 = state_34456__$1;
(statearr_34508_34559[(2)] = null);

(statearr_34508_34559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (18))){
var inst_34398 = (state_34456[(2)]);
var state_34456__$1 = state_34456;
var statearr_34509_34560 = state_34456__$1;
(statearr_34509_34560[(2)] = inst_34398);

(statearr_34509_34560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (37))){
var state_34456__$1 = state_34456;
var statearr_34510_34561 = state_34456__$1;
(statearr_34510_34561[(2)] = null);

(statearr_34510_34561[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34457 === (8))){
var inst_34358 = (state_34456[(8)]);
var inst_34376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34358);
var state_34456__$1 = state_34456;
var statearr_34511_34562 = state_34456__$1;
(statearr_34511_34562[(2)] = inst_34376);

(statearr_34511_34562[(1)] = (10));


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
});})(c__33471__auto___34516,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33365__auto__,c__33471__auto___34516,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33366__auto__ = null;
var cljs$core$async$mix_$_state_machine__33366__auto____0 = (function (){
var statearr_34512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34512[(0)] = cljs$core$async$mix_$_state_machine__33366__auto__);

(statearr_34512[(1)] = (1));

return statearr_34512;
});
var cljs$core$async$mix_$_state_machine__33366__auto____1 = (function (state_34456){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34513){if((e34513 instanceof Object)){
var ex__33369__auto__ = e34513;
var statearr_34514_34563 = state_34456;
(statearr_34514_34563[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34564 = state_34456;
state_34456 = G__34564;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33366__auto__ = function(state_34456){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33366__auto____1.call(this,state_34456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33366__auto____0;
cljs$core$async$mix_$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33366__auto____1;
return cljs$core$async$mix_$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34516,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33473__auto__ = (function (){var statearr_34515 = f__33472__auto__.call(null);
(statearr_34515[(6)] = c__33471__auto___34516);

return statearr_34515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34516,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34566 = arguments.length;
switch (G__34566) {
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
var G__34570 = arguments.length;
switch (G__34570) {
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
return (function (p1__34568_SHARP_){
if(cljs.core.truth_(p1__34568_SHARP_.call(null,topic))){
return p1__34568_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34568_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28433__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34571 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34572){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34572 = meta34572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34573,meta34572__$1){
var self__ = this;
var _34573__$1 = this;
return (new cljs.core.async.t_cljs$core$async34571(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34572__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34573){
var self__ = this;
var _34573__$1 = this;
return self__.meta34572;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34572","meta34572",-681920889,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34571";

cljs.core.async.t_cljs$core$async34571.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34571");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34571 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34571(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34572){
return (new cljs.core.async.t_cljs$core$async34571(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34572));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34571(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33471__auto___34691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34691,mults,ensure_mult,p){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34691,mults,ensure_mult,p){
return (function (state_34645){
var state_val_34646 = (state_34645[(1)]);
if((state_val_34646 === (7))){
var inst_34641 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34647_34692 = state_34645__$1;
(statearr_34647_34692[(2)] = inst_34641);

(statearr_34647_34692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (20))){
var state_34645__$1 = state_34645;
var statearr_34648_34693 = state_34645__$1;
(statearr_34648_34693[(2)] = null);

(statearr_34648_34693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (1))){
var state_34645__$1 = state_34645;
var statearr_34649_34694 = state_34645__$1;
(statearr_34649_34694[(2)] = null);

(statearr_34649_34694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (24))){
var inst_34624 = (state_34645[(7)]);
var inst_34633 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34624);
var state_34645__$1 = state_34645;
var statearr_34650_34695 = state_34645__$1;
(statearr_34650_34695[(2)] = inst_34633);

(statearr_34650_34695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (4))){
var inst_34576 = (state_34645[(8)]);
var inst_34576__$1 = (state_34645[(2)]);
var inst_34577 = (inst_34576__$1 == null);
var state_34645__$1 = (function (){var statearr_34651 = state_34645;
(statearr_34651[(8)] = inst_34576__$1);

return statearr_34651;
})();
if(cljs.core.truth_(inst_34577)){
var statearr_34652_34696 = state_34645__$1;
(statearr_34652_34696[(1)] = (5));

} else {
var statearr_34653_34697 = state_34645__$1;
(statearr_34653_34697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (15))){
var inst_34618 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34654_34698 = state_34645__$1;
(statearr_34654_34698[(2)] = inst_34618);

(statearr_34654_34698[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (21))){
var inst_34638 = (state_34645[(2)]);
var state_34645__$1 = (function (){var statearr_34655 = state_34645;
(statearr_34655[(9)] = inst_34638);

return statearr_34655;
})();
var statearr_34656_34699 = state_34645__$1;
(statearr_34656_34699[(2)] = null);

(statearr_34656_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (13))){
var inst_34600 = (state_34645[(10)]);
var inst_34602 = cljs.core.chunked_seq_QMARK_.call(null,inst_34600);
var state_34645__$1 = state_34645;
if(inst_34602){
var statearr_34657_34700 = state_34645__$1;
(statearr_34657_34700[(1)] = (16));

} else {
var statearr_34658_34701 = state_34645__$1;
(statearr_34658_34701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (22))){
var inst_34630 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34630)){
var statearr_34659_34702 = state_34645__$1;
(statearr_34659_34702[(1)] = (23));

} else {
var statearr_34660_34703 = state_34645__$1;
(statearr_34660_34703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (6))){
var inst_34624 = (state_34645[(7)]);
var inst_34576 = (state_34645[(8)]);
var inst_34626 = (state_34645[(11)]);
var inst_34624__$1 = topic_fn.call(null,inst_34576);
var inst_34625 = cljs.core.deref.call(null,mults);
var inst_34626__$1 = cljs.core.get.call(null,inst_34625,inst_34624__$1);
var state_34645__$1 = (function (){var statearr_34661 = state_34645;
(statearr_34661[(7)] = inst_34624__$1);

(statearr_34661[(11)] = inst_34626__$1);

return statearr_34661;
})();
if(cljs.core.truth_(inst_34626__$1)){
var statearr_34662_34704 = state_34645__$1;
(statearr_34662_34704[(1)] = (19));

} else {
var statearr_34663_34705 = state_34645__$1;
(statearr_34663_34705[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (25))){
var inst_34635 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34664_34706 = state_34645__$1;
(statearr_34664_34706[(2)] = inst_34635);

(statearr_34664_34706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (17))){
var inst_34600 = (state_34645[(10)]);
var inst_34609 = cljs.core.first.call(null,inst_34600);
var inst_34610 = cljs.core.async.muxch_STAR_.call(null,inst_34609);
var inst_34611 = cljs.core.async.close_BANG_.call(null,inst_34610);
var inst_34612 = cljs.core.next.call(null,inst_34600);
var inst_34586 = inst_34612;
var inst_34587 = null;
var inst_34588 = (0);
var inst_34589 = (0);
var state_34645__$1 = (function (){var statearr_34665 = state_34645;
(statearr_34665[(12)] = inst_34588);

(statearr_34665[(13)] = inst_34589);

(statearr_34665[(14)] = inst_34586);

(statearr_34665[(15)] = inst_34611);

(statearr_34665[(16)] = inst_34587);

return statearr_34665;
})();
var statearr_34666_34707 = state_34645__$1;
(statearr_34666_34707[(2)] = null);

(statearr_34666_34707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (3))){
var inst_34643 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34645__$1,inst_34643);
} else {
if((state_val_34646 === (12))){
var inst_34620 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34667_34708 = state_34645__$1;
(statearr_34667_34708[(2)] = inst_34620);

(statearr_34667_34708[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (2))){
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34645__$1,(4),ch);
} else {
if((state_val_34646 === (23))){
var state_34645__$1 = state_34645;
var statearr_34668_34709 = state_34645__$1;
(statearr_34668_34709[(2)] = null);

(statearr_34668_34709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (19))){
var inst_34576 = (state_34645[(8)]);
var inst_34626 = (state_34645[(11)]);
var inst_34628 = cljs.core.async.muxch_STAR_.call(null,inst_34626);
var state_34645__$1 = state_34645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34645__$1,(22),inst_34628,inst_34576);
} else {
if((state_val_34646 === (11))){
var inst_34586 = (state_34645[(14)]);
var inst_34600 = (state_34645[(10)]);
var inst_34600__$1 = cljs.core.seq.call(null,inst_34586);
var state_34645__$1 = (function (){var statearr_34669 = state_34645;
(statearr_34669[(10)] = inst_34600__$1);

return statearr_34669;
})();
if(inst_34600__$1){
var statearr_34670_34710 = state_34645__$1;
(statearr_34670_34710[(1)] = (13));

} else {
var statearr_34671_34711 = state_34645__$1;
(statearr_34671_34711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (9))){
var inst_34622 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34672_34712 = state_34645__$1;
(statearr_34672_34712[(2)] = inst_34622);

(statearr_34672_34712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (5))){
var inst_34583 = cljs.core.deref.call(null,mults);
var inst_34584 = cljs.core.vals.call(null,inst_34583);
var inst_34585 = cljs.core.seq.call(null,inst_34584);
var inst_34586 = inst_34585;
var inst_34587 = null;
var inst_34588 = (0);
var inst_34589 = (0);
var state_34645__$1 = (function (){var statearr_34673 = state_34645;
(statearr_34673[(12)] = inst_34588);

(statearr_34673[(13)] = inst_34589);

(statearr_34673[(14)] = inst_34586);

(statearr_34673[(16)] = inst_34587);

return statearr_34673;
})();
var statearr_34674_34713 = state_34645__$1;
(statearr_34674_34713[(2)] = null);

(statearr_34674_34713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (14))){
var state_34645__$1 = state_34645;
var statearr_34678_34714 = state_34645__$1;
(statearr_34678_34714[(2)] = null);

(statearr_34678_34714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (16))){
var inst_34600 = (state_34645[(10)]);
var inst_34604 = cljs.core.chunk_first.call(null,inst_34600);
var inst_34605 = cljs.core.chunk_rest.call(null,inst_34600);
var inst_34606 = cljs.core.count.call(null,inst_34604);
var inst_34586 = inst_34605;
var inst_34587 = inst_34604;
var inst_34588 = inst_34606;
var inst_34589 = (0);
var state_34645__$1 = (function (){var statearr_34679 = state_34645;
(statearr_34679[(12)] = inst_34588);

(statearr_34679[(13)] = inst_34589);

(statearr_34679[(14)] = inst_34586);

(statearr_34679[(16)] = inst_34587);

return statearr_34679;
})();
var statearr_34680_34715 = state_34645__$1;
(statearr_34680_34715[(2)] = null);

(statearr_34680_34715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (10))){
var inst_34588 = (state_34645[(12)]);
var inst_34589 = (state_34645[(13)]);
var inst_34586 = (state_34645[(14)]);
var inst_34587 = (state_34645[(16)]);
var inst_34594 = cljs.core._nth.call(null,inst_34587,inst_34589);
var inst_34595 = cljs.core.async.muxch_STAR_.call(null,inst_34594);
var inst_34596 = cljs.core.async.close_BANG_.call(null,inst_34595);
var inst_34597 = (inst_34589 + (1));
var tmp34675 = inst_34588;
var tmp34676 = inst_34586;
var tmp34677 = inst_34587;
var inst_34586__$1 = tmp34676;
var inst_34587__$1 = tmp34677;
var inst_34588__$1 = tmp34675;
var inst_34589__$1 = inst_34597;
var state_34645__$1 = (function (){var statearr_34681 = state_34645;
(statearr_34681[(12)] = inst_34588__$1);

(statearr_34681[(13)] = inst_34589__$1);

(statearr_34681[(14)] = inst_34586__$1);

(statearr_34681[(17)] = inst_34596);

(statearr_34681[(16)] = inst_34587__$1);

return statearr_34681;
})();
var statearr_34682_34716 = state_34645__$1;
(statearr_34682_34716[(2)] = null);

(statearr_34682_34716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (18))){
var inst_34615 = (state_34645[(2)]);
var state_34645__$1 = state_34645;
var statearr_34683_34717 = state_34645__$1;
(statearr_34683_34717[(2)] = inst_34615);

(statearr_34683_34717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34646 === (8))){
var inst_34588 = (state_34645[(12)]);
var inst_34589 = (state_34645[(13)]);
var inst_34591 = (inst_34589 < inst_34588);
var inst_34592 = inst_34591;
var state_34645__$1 = state_34645;
if(cljs.core.truth_(inst_34592)){
var statearr_34684_34718 = state_34645__$1;
(statearr_34684_34718[(1)] = (10));

} else {
var statearr_34685_34719 = state_34645__$1;
(statearr_34685_34719[(1)] = (11));

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
});})(c__33471__auto___34691,mults,ensure_mult,p))
;
return ((function (switch__33365__auto__,c__33471__auto___34691,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_34686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34686[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_34686[(1)] = (1));

return statearr_34686;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_34645){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34687){if((e34687 instanceof Object)){
var ex__33369__auto__ = e34687;
var statearr_34688_34720 = state_34645;
(statearr_34688_34720[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34721 = state_34645;
state_34645 = G__34721;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_34645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_34645);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34691,mults,ensure_mult,p))
})();
var state__33473__auto__ = (function (){var statearr_34689 = f__33472__auto__.call(null);
(statearr_34689[(6)] = c__33471__auto___34691);

return statearr_34689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34691,mults,ensure_mult,p))
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
var G__34723 = arguments.length;
switch (G__34723) {
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
var G__34726 = arguments.length;
switch (G__34726) {
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
var G__34729 = arguments.length;
switch (G__34729) {
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
var c__33471__auto___34796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34768){
var state_val_34769 = (state_34768[(1)]);
if((state_val_34769 === (7))){
var state_34768__$1 = state_34768;
var statearr_34770_34797 = state_34768__$1;
(statearr_34770_34797[(2)] = null);

(statearr_34770_34797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (1))){
var state_34768__$1 = state_34768;
var statearr_34771_34798 = state_34768__$1;
(statearr_34771_34798[(2)] = null);

(statearr_34771_34798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (4))){
var inst_34732 = (state_34768[(7)]);
var inst_34734 = (inst_34732 < cnt);
var state_34768__$1 = state_34768;
if(cljs.core.truth_(inst_34734)){
var statearr_34772_34799 = state_34768__$1;
(statearr_34772_34799[(1)] = (6));

} else {
var statearr_34773_34800 = state_34768__$1;
(statearr_34773_34800[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (15))){
var inst_34764 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
var statearr_34774_34801 = state_34768__$1;
(statearr_34774_34801[(2)] = inst_34764);

(statearr_34774_34801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (13))){
var inst_34757 = cljs.core.async.close_BANG_.call(null,out);
var state_34768__$1 = state_34768;
var statearr_34775_34802 = state_34768__$1;
(statearr_34775_34802[(2)] = inst_34757);

(statearr_34775_34802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (6))){
var state_34768__$1 = state_34768;
var statearr_34776_34803 = state_34768__$1;
(statearr_34776_34803[(2)] = null);

(statearr_34776_34803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (3))){
var inst_34766 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34768__$1,inst_34766);
} else {
if((state_val_34769 === (12))){
var inst_34754 = (state_34768[(8)]);
var inst_34754__$1 = (state_34768[(2)]);
var inst_34755 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34754__$1);
var state_34768__$1 = (function (){var statearr_34777 = state_34768;
(statearr_34777[(8)] = inst_34754__$1);

return statearr_34777;
})();
if(cljs.core.truth_(inst_34755)){
var statearr_34778_34804 = state_34768__$1;
(statearr_34778_34804[(1)] = (13));

} else {
var statearr_34779_34805 = state_34768__$1;
(statearr_34779_34805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (2))){
var inst_34731 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34732 = (0);
var state_34768__$1 = (function (){var statearr_34780 = state_34768;
(statearr_34780[(9)] = inst_34731);

(statearr_34780[(7)] = inst_34732);

return statearr_34780;
})();
var statearr_34781_34806 = state_34768__$1;
(statearr_34781_34806[(2)] = null);

(statearr_34781_34806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (11))){
var inst_34732 = (state_34768[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34768,(10),Object,null,(9));
var inst_34741 = chs__$1.call(null,inst_34732);
var inst_34742 = done.call(null,inst_34732);
var inst_34743 = cljs.core.async.take_BANG_.call(null,inst_34741,inst_34742);
var state_34768__$1 = state_34768;
var statearr_34782_34807 = state_34768__$1;
(statearr_34782_34807[(2)] = inst_34743);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34768__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (9))){
var inst_34732 = (state_34768[(7)]);
var inst_34745 = (state_34768[(2)]);
var inst_34746 = (inst_34732 + (1));
var inst_34732__$1 = inst_34746;
var state_34768__$1 = (function (){var statearr_34783 = state_34768;
(statearr_34783[(7)] = inst_34732__$1);

(statearr_34783[(10)] = inst_34745);

return statearr_34783;
})();
var statearr_34784_34808 = state_34768__$1;
(statearr_34784_34808[(2)] = null);

(statearr_34784_34808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (5))){
var inst_34752 = (state_34768[(2)]);
var state_34768__$1 = (function (){var statearr_34785 = state_34768;
(statearr_34785[(11)] = inst_34752);

return statearr_34785;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34768__$1,(12),dchan);
} else {
if((state_val_34769 === (14))){
var inst_34754 = (state_34768[(8)]);
var inst_34759 = cljs.core.apply.call(null,f,inst_34754);
var state_34768__$1 = state_34768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34768__$1,(16),out,inst_34759);
} else {
if((state_val_34769 === (16))){
var inst_34761 = (state_34768[(2)]);
var state_34768__$1 = (function (){var statearr_34786 = state_34768;
(statearr_34786[(12)] = inst_34761);

return statearr_34786;
})();
var statearr_34787_34809 = state_34768__$1;
(statearr_34787_34809[(2)] = null);

(statearr_34787_34809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (10))){
var inst_34736 = (state_34768[(2)]);
var inst_34737 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34768__$1 = (function (){var statearr_34788 = state_34768;
(statearr_34788[(13)] = inst_34736);

return statearr_34788;
})();
var statearr_34789_34810 = state_34768__$1;
(statearr_34789_34810[(2)] = inst_34737);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34768__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34769 === (8))){
var inst_34750 = (state_34768[(2)]);
var state_34768__$1 = state_34768;
var statearr_34790_34811 = state_34768__$1;
(statearr_34790_34811[(2)] = inst_34750);

(statearr_34790_34811[(1)] = (5));


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
});})(c__33471__auto___34796,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33365__auto__,c__33471__auto___34796,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_34791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34791[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_34791[(1)] = (1));

return statearr_34791;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_34768){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34792){if((e34792 instanceof Object)){
var ex__33369__auto__ = e34792;
var statearr_34793_34812 = state_34768;
(statearr_34793_34812[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34813 = state_34768;
state_34768 = G__34813;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_34768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_34768);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34796,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33473__auto__ = (function (){var statearr_34794 = f__33472__auto__.call(null);
(statearr_34794[(6)] = c__33471__auto___34796);

return statearr_34794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34796,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34816 = arguments.length;
switch (G__34816) {
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
var c__33471__auto___34870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34870,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34870,out){
return (function (state_34848){
var state_val_34849 = (state_34848[(1)]);
if((state_val_34849 === (7))){
var inst_34828 = (state_34848[(7)]);
var inst_34827 = (state_34848[(8)]);
var inst_34827__$1 = (state_34848[(2)]);
var inst_34828__$1 = cljs.core.nth.call(null,inst_34827__$1,(0),null);
var inst_34829 = cljs.core.nth.call(null,inst_34827__$1,(1),null);
var inst_34830 = (inst_34828__$1 == null);
var state_34848__$1 = (function (){var statearr_34850 = state_34848;
(statearr_34850[(9)] = inst_34829);

(statearr_34850[(7)] = inst_34828__$1);

(statearr_34850[(8)] = inst_34827__$1);

return statearr_34850;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34851_34871 = state_34848__$1;
(statearr_34851_34871[(1)] = (8));

} else {
var statearr_34852_34872 = state_34848__$1;
(statearr_34852_34872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (1))){
var inst_34817 = cljs.core.vec.call(null,chs);
var inst_34818 = inst_34817;
var state_34848__$1 = (function (){var statearr_34853 = state_34848;
(statearr_34853[(10)] = inst_34818);

return statearr_34853;
})();
var statearr_34854_34873 = state_34848__$1;
(statearr_34854_34873[(2)] = null);

(statearr_34854_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (4))){
var inst_34818 = (state_34848[(10)]);
var state_34848__$1 = state_34848;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34848__$1,(7),inst_34818);
} else {
if((state_val_34849 === (6))){
var inst_34844 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34855_34874 = state_34848__$1;
(statearr_34855_34874[(2)] = inst_34844);

(statearr_34855_34874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (3))){
var inst_34846 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34848__$1,inst_34846);
} else {
if((state_val_34849 === (2))){
var inst_34818 = (state_34848[(10)]);
var inst_34820 = cljs.core.count.call(null,inst_34818);
var inst_34821 = (inst_34820 > (0));
var state_34848__$1 = state_34848;
if(cljs.core.truth_(inst_34821)){
var statearr_34857_34875 = state_34848__$1;
(statearr_34857_34875[(1)] = (4));

} else {
var statearr_34858_34876 = state_34848__$1;
(statearr_34858_34876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (11))){
var inst_34818 = (state_34848[(10)]);
var inst_34837 = (state_34848[(2)]);
var tmp34856 = inst_34818;
var inst_34818__$1 = tmp34856;
var state_34848__$1 = (function (){var statearr_34859 = state_34848;
(statearr_34859[(11)] = inst_34837);

(statearr_34859[(10)] = inst_34818__$1);

return statearr_34859;
})();
var statearr_34860_34877 = state_34848__$1;
(statearr_34860_34877[(2)] = null);

(statearr_34860_34877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (9))){
var inst_34828 = (state_34848[(7)]);
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34848__$1,(11),out,inst_34828);
} else {
if((state_val_34849 === (5))){
var inst_34842 = cljs.core.async.close_BANG_.call(null,out);
var state_34848__$1 = state_34848;
var statearr_34861_34878 = state_34848__$1;
(statearr_34861_34878[(2)] = inst_34842);

(statearr_34861_34878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (10))){
var inst_34840 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34862_34879 = state_34848__$1;
(statearr_34862_34879[(2)] = inst_34840);

(statearr_34862_34879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (8))){
var inst_34829 = (state_34848[(9)]);
var inst_34828 = (state_34848[(7)]);
var inst_34818 = (state_34848[(10)]);
var inst_34827 = (state_34848[(8)]);
var inst_34832 = (function (){var cs = inst_34818;
var vec__34823 = inst_34827;
var v = inst_34828;
var c = inst_34829;
return ((function (cs,vec__34823,v,c,inst_34829,inst_34828,inst_34818,inst_34827,state_val_34849,c__33471__auto___34870,out){
return (function (p1__34814_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34814_SHARP_);
});
;})(cs,vec__34823,v,c,inst_34829,inst_34828,inst_34818,inst_34827,state_val_34849,c__33471__auto___34870,out))
})();
var inst_34833 = cljs.core.filterv.call(null,inst_34832,inst_34818);
var inst_34818__$1 = inst_34833;
var state_34848__$1 = (function (){var statearr_34863 = state_34848;
(statearr_34863[(10)] = inst_34818__$1);

return statearr_34863;
})();
var statearr_34864_34880 = state_34848__$1;
(statearr_34864_34880[(2)] = null);

(statearr_34864_34880[(1)] = (2));


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
});})(c__33471__auto___34870,out))
;
return ((function (switch__33365__auto__,c__33471__auto___34870,out){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_34865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34865[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_34865[(1)] = (1));

return statearr_34865;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_34848){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34866){if((e34866 instanceof Object)){
var ex__33369__auto__ = e34866;
var statearr_34867_34881 = state_34848;
(statearr_34867_34881[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34882 = state_34848;
state_34848 = G__34882;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_34848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_34848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34870,out))
})();
var state__33473__auto__ = (function (){var statearr_34868 = f__33472__auto__.call(null);
(statearr_34868[(6)] = c__33471__auto___34870);

return statearr_34868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34870,out))
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
var G__34884 = arguments.length;
switch (G__34884) {
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
var c__33471__auto___34929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34929,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34929,out){
return (function (state_34908){
var state_val_34909 = (state_34908[(1)]);
if((state_val_34909 === (7))){
var inst_34890 = (state_34908[(7)]);
var inst_34890__$1 = (state_34908[(2)]);
var inst_34891 = (inst_34890__$1 == null);
var inst_34892 = cljs.core.not.call(null,inst_34891);
var state_34908__$1 = (function (){var statearr_34910 = state_34908;
(statearr_34910[(7)] = inst_34890__$1);

return statearr_34910;
})();
if(inst_34892){
var statearr_34911_34930 = state_34908__$1;
(statearr_34911_34930[(1)] = (8));

} else {
var statearr_34912_34931 = state_34908__$1;
(statearr_34912_34931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (1))){
var inst_34885 = (0);
var state_34908__$1 = (function (){var statearr_34913 = state_34908;
(statearr_34913[(8)] = inst_34885);

return statearr_34913;
})();
var statearr_34914_34932 = state_34908__$1;
(statearr_34914_34932[(2)] = null);

(statearr_34914_34932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (4))){
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34908__$1,(7),ch);
} else {
if((state_val_34909 === (6))){
var inst_34903 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34915_34933 = state_34908__$1;
(statearr_34915_34933[(2)] = inst_34903);

(statearr_34915_34933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (3))){
var inst_34905 = (state_34908[(2)]);
var inst_34906 = cljs.core.async.close_BANG_.call(null,out);
var state_34908__$1 = (function (){var statearr_34916 = state_34908;
(statearr_34916[(9)] = inst_34905);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34908__$1,inst_34906);
} else {
if((state_val_34909 === (2))){
var inst_34885 = (state_34908[(8)]);
var inst_34887 = (inst_34885 < n);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34887)){
var statearr_34917_34934 = state_34908__$1;
(statearr_34917_34934[(1)] = (4));

} else {
var statearr_34918_34935 = state_34908__$1;
(statearr_34918_34935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (11))){
var inst_34885 = (state_34908[(8)]);
var inst_34895 = (state_34908[(2)]);
var inst_34896 = (inst_34885 + (1));
var inst_34885__$1 = inst_34896;
var state_34908__$1 = (function (){var statearr_34919 = state_34908;
(statearr_34919[(8)] = inst_34885__$1);

(statearr_34919[(10)] = inst_34895);

return statearr_34919;
})();
var statearr_34920_34936 = state_34908__$1;
(statearr_34920_34936[(2)] = null);

(statearr_34920_34936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (9))){
var state_34908__$1 = state_34908;
var statearr_34921_34937 = state_34908__$1;
(statearr_34921_34937[(2)] = null);

(statearr_34921_34937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (5))){
var state_34908__$1 = state_34908;
var statearr_34922_34938 = state_34908__$1;
(statearr_34922_34938[(2)] = null);

(statearr_34922_34938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (10))){
var inst_34900 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34923_34939 = state_34908__$1;
(statearr_34923_34939[(2)] = inst_34900);

(statearr_34923_34939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (8))){
var inst_34890 = (state_34908[(7)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34908__$1,(11),out,inst_34890);
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
});})(c__33471__auto___34929,out))
;
return ((function (switch__33365__auto__,c__33471__auto___34929,out){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_34924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34924[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_34924[(1)] = (1));

return statearr_34924;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_34908){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34925){if((e34925 instanceof Object)){
var ex__33369__auto__ = e34925;
var statearr_34926_34940 = state_34908;
(statearr_34926_34940[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_34908;
state_34908 = G__34941;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_34908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_34908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34929,out))
})();
var state__33473__auto__ = (function (){var statearr_34927 = f__33472__auto__.call(null);
(statearr_34927[(6)] = c__33471__auto___34929);

return statearr_34927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34929,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34943 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34943 = (function (f,ch,meta34944){
this.f = f;
this.ch = ch;
this.meta34944 = meta34944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34945,meta34944__$1){
var self__ = this;
var _34945__$1 = this;
return (new cljs.core.async.t_cljs$core$async34943(self__.f,self__.ch,meta34944__$1));
});

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34945){
var self__ = this;
var _34945__$1 = this;
return self__.meta34944;
});

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34946 = (function (f,ch,meta34944,_,fn1,meta34947){
this.f = f;
this.ch = ch;
this.meta34944 = meta34944;
this._ = _;
this.fn1 = fn1;
this.meta34947 = meta34947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34948,meta34947__$1){
var self__ = this;
var _34948__$1 = this;
return (new cljs.core.async.t_cljs$core$async34946(self__.f,self__.ch,self__.meta34944,self__._,self__.fn1,meta34947__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34948){
var self__ = this;
var _34948__$1 = this;
return self__.meta34947;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34942_SHARP_){
return f1.call(null,(((p1__34942_SHARP_ == null))?null:self__.f.call(null,p1__34942_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34946.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34944","meta34944",239524243,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34943","cljs.core.async/t_cljs$core$async34943",-1730881081,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34947","meta34947",-1854940840,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34946";

cljs.core.async.t_cljs$core$async34946.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34946");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34946 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34946(f__$1,ch__$1,meta34944__$1,___$2,fn1__$1,meta34947){
return (new cljs.core.async.t_cljs$core$async34946(f__$1,ch__$1,meta34944__$1,___$2,fn1__$1,meta34947));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34946(self__.f,self__.ch,self__.meta34944,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34943.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34944","meta34944",239524243,null)], null);
});

cljs.core.async.t_cljs$core$async34943.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34943";

cljs.core.async.t_cljs$core$async34943.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34943");
});

cljs.core.async.__GT_t_cljs$core$async34943 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34943(f__$1,ch__$1,meta34944){
return (new cljs.core.async.t_cljs$core$async34943(f__$1,ch__$1,meta34944));
});

}

return (new cljs.core.async.t_cljs$core$async34943(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34949 = (function (f,ch,meta34950){
this.f = f;
this.ch = ch;
this.meta34950 = meta34950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34951,meta34950__$1){
var self__ = this;
var _34951__$1 = this;
return (new cljs.core.async.t_cljs$core$async34949(self__.f,self__.ch,meta34950__$1));
});

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34951){
var self__ = this;
var _34951__$1 = this;
return self__.meta34950;
});

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34950","meta34950",-1853448433,null)], null);
});

cljs.core.async.t_cljs$core$async34949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34949";

cljs.core.async.t_cljs$core$async34949.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34949");
});

cljs.core.async.__GT_t_cljs$core$async34949 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34949(f__$1,ch__$1,meta34950){
return (new cljs.core.async.t_cljs$core$async34949(f__$1,ch__$1,meta34950));
});

}

return (new cljs.core.async.t_cljs$core$async34949(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34952 = (function (p,ch,meta34953){
this.p = p;
this.ch = ch;
this.meta34953 = meta34953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34954,meta34953__$1){
var self__ = this;
var _34954__$1 = this;
return (new cljs.core.async.t_cljs$core$async34952(self__.p,self__.ch,meta34953__$1));
});

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34954){
var self__ = this;
var _34954__$1 = this;
return self__.meta34953;
});

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34953","meta34953",1075510156,null)], null);
});

cljs.core.async.t_cljs$core$async34952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34952";

cljs.core.async.t_cljs$core$async34952.cljs$lang$ctorPrWriter = (function (this__29058__auto__,writer__29059__auto__,opt__29060__auto__){
return cljs.core._write.call(null,writer__29059__auto__,"cljs.core.async/t_cljs$core$async34952");
});

cljs.core.async.__GT_t_cljs$core$async34952 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34952(p__$1,ch__$1,meta34953){
return (new cljs.core.async.t_cljs$core$async34952(p__$1,ch__$1,meta34953));
});

}

return (new cljs.core.async.t_cljs$core$async34952(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34956 = arguments.length;
switch (G__34956) {
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
var c__33471__auto___34996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___34996,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___34996,out){
return (function (state_34977){
var state_val_34978 = (state_34977[(1)]);
if((state_val_34978 === (7))){
var inst_34973 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34979_34997 = state_34977__$1;
(statearr_34979_34997[(2)] = inst_34973);

(statearr_34979_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (1))){
var state_34977__$1 = state_34977;
var statearr_34980_34998 = state_34977__$1;
(statearr_34980_34998[(2)] = null);

(statearr_34980_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (4))){
var inst_34959 = (state_34977[(7)]);
var inst_34959__$1 = (state_34977[(2)]);
var inst_34960 = (inst_34959__$1 == null);
var state_34977__$1 = (function (){var statearr_34981 = state_34977;
(statearr_34981[(7)] = inst_34959__$1);

return statearr_34981;
})();
if(cljs.core.truth_(inst_34960)){
var statearr_34982_34999 = state_34977__$1;
(statearr_34982_34999[(1)] = (5));

} else {
var statearr_34983_35000 = state_34977__$1;
(statearr_34983_35000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (6))){
var inst_34959 = (state_34977[(7)]);
var inst_34964 = p.call(null,inst_34959);
var state_34977__$1 = state_34977;
if(cljs.core.truth_(inst_34964)){
var statearr_34984_35001 = state_34977__$1;
(statearr_34984_35001[(1)] = (8));

} else {
var statearr_34985_35002 = state_34977__$1;
(statearr_34985_35002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (3))){
var inst_34975 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34977__$1,inst_34975);
} else {
if((state_val_34978 === (2))){
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34977__$1,(4),ch);
} else {
if((state_val_34978 === (11))){
var inst_34967 = (state_34977[(2)]);
var state_34977__$1 = state_34977;
var statearr_34986_35003 = state_34977__$1;
(statearr_34986_35003[(2)] = inst_34967);

(statearr_34986_35003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (9))){
var state_34977__$1 = state_34977;
var statearr_34987_35004 = state_34977__$1;
(statearr_34987_35004[(2)] = null);

(statearr_34987_35004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (5))){
var inst_34962 = cljs.core.async.close_BANG_.call(null,out);
var state_34977__$1 = state_34977;
var statearr_34988_35005 = state_34977__$1;
(statearr_34988_35005[(2)] = inst_34962);

(statearr_34988_35005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (10))){
var inst_34970 = (state_34977[(2)]);
var state_34977__$1 = (function (){var statearr_34989 = state_34977;
(statearr_34989[(8)] = inst_34970);

return statearr_34989;
})();
var statearr_34990_35006 = state_34977__$1;
(statearr_34990_35006[(2)] = null);

(statearr_34990_35006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34978 === (8))){
var inst_34959 = (state_34977[(7)]);
var state_34977__$1 = state_34977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34977__$1,(11),out,inst_34959);
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
});})(c__33471__auto___34996,out))
;
return ((function (switch__33365__auto__,c__33471__auto___34996,out){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_34991 = [null,null,null,null,null,null,null,null,null];
(statearr_34991[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_34991[(1)] = (1));

return statearr_34991;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_34977){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_34977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e34992){if((e34992 instanceof Object)){
var ex__33369__auto__ = e34992;
var statearr_34993_35007 = state_34977;
(statearr_34993_35007[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35008 = state_34977;
state_34977 = G__35008;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_34977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_34977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___34996,out))
})();
var state__33473__auto__ = (function (){var statearr_34994 = f__33472__auto__.call(null);
(statearr_34994[(6)] = c__33471__auto___34996);

return statearr_34994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___34996,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35010 = arguments.length;
switch (G__35010) {
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
var c__33471__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto__){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto__){
return (function (state_35073){
var state_val_35074 = (state_35073[(1)]);
if((state_val_35074 === (7))){
var inst_35069 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35075_35113 = state_35073__$1;
(statearr_35075_35113[(2)] = inst_35069);

(statearr_35075_35113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (20))){
var inst_35039 = (state_35073[(7)]);
var inst_35050 = (state_35073[(2)]);
var inst_35051 = cljs.core.next.call(null,inst_35039);
var inst_35025 = inst_35051;
var inst_35026 = null;
var inst_35027 = (0);
var inst_35028 = (0);
var state_35073__$1 = (function (){var statearr_35076 = state_35073;
(statearr_35076[(8)] = inst_35026);

(statearr_35076[(9)] = inst_35027);

(statearr_35076[(10)] = inst_35050);

(statearr_35076[(11)] = inst_35025);

(statearr_35076[(12)] = inst_35028);

return statearr_35076;
})();
var statearr_35077_35114 = state_35073__$1;
(statearr_35077_35114[(2)] = null);

(statearr_35077_35114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (1))){
var state_35073__$1 = state_35073;
var statearr_35078_35115 = state_35073__$1;
(statearr_35078_35115[(2)] = null);

(statearr_35078_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (4))){
var inst_35014 = (state_35073[(13)]);
var inst_35014__$1 = (state_35073[(2)]);
var inst_35015 = (inst_35014__$1 == null);
var state_35073__$1 = (function (){var statearr_35079 = state_35073;
(statearr_35079[(13)] = inst_35014__$1);

return statearr_35079;
})();
if(cljs.core.truth_(inst_35015)){
var statearr_35080_35116 = state_35073__$1;
(statearr_35080_35116[(1)] = (5));

} else {
var statearr_35081_35117 = state_35073__$1;
(statearr_35081_35117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (15))){
var state_35073__$1 = state_35073;
var statearr_35085_35118 = state_35073__$1;
(statearr_35085_35118[(2)] = null);

(statearr_35085_35118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (21))){
var state_35073__$1 = state_35073;
var statearr_35086_35119 = state_35073__$1;
(statearr_35086_35119[(2)] = null);

(statearr_35086_35119[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (13))){
var inst_35026 = (state_35073[(8)]);
var inst_35027 = (state_35073[(9)]);
var inst_35025 = (state_35073[(11)]);
var inst_35028 = (state_35073[(12)]);
var inst_35035 = (state_35073[(2)]);
var inst_35036 = (inst_35028 + (1));
var tmp35082 = inst_35026;
var tmp35083 = inst_35027;
var tmp35084 = inst_35025;
var inst_35025__$1 = tmp35084;
var inst_35026__$1 = tmp35082;
var inst_35027__$1 = tmp35083;
var inst_35028__$1 = inst_35036;
var state_35073__$1 = (function (){var statearr_35087 = state_35073;
(statearr_35087[(8)] = inst_35026__$1);

(statearr_35087[(9)] = inst_35027__$1);

(statearr_35087[(14)] = inst_35035);

(statearr_35087[(11)] = inst_35025__$1);

(statearr_35087[(12)] = inst_35028__$1);

return statearr_35087;
})();
var statearr_35088_35120 = state_35073__$1;
(statearr_35088_35120[(2)] = null);

(statearr_35088_35120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (22))){
var state_35073__$1 = state_35073;
var statearr_35089_35121 = state_35073__$1;
(statearr_35089_35121[(2)] = null);

(statearr_35089_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (6))){
var inst_35014 = (state_35073[(13)]);
var inst_35023 = f.call(null,inst_35014);
var inst_35024 = cljs.core.seq.call(null,inst_35023);
var inst_35025 = inst_35024;
var inst_35026 = null;
var inst_35027 = (0);
var inst_35028 = (0);
var state_35073__$1 = (function (){var statearr_35090 = state_35073;
(statearr_35090[(8)] = inst_35026);

(statearr_35090[(9)] = inst_35027);

(statearr_35090[(11)] = inst_35025);

(statearr_35090[(12)] = inst_35028);

return statearr_35090;
})();
var statearr_35091_35122 = state_35073__$1;
(statearr_35091_35122[(2)] = null);

(statearr_35091_35122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (17))){
var inst_35039 = (state_35073[(7)]);
var inst_35043 = cljs.core.chunk_first.call(null,inst_35039);
var inst_35044 = cljs.core.chunk_rest.call(null,inst_35039);
var inst_35045 = cljs.core.count.call(null,inst_35043);
var inst_35025 = inst_35044;
var inst_35026 = inst_35043;
var inst_35027 = inst_35045;
var inst_35028 = (0);
var state_35073__$1 = (function (){var statearr_35092 = state_35073;
(statearr_35092[(8)] = inst_35026);

(statearr_35092[(9)] = inst_35027);

(statearr_35092[(11)] = inst_35025);

(statearr_35092[(12)] = inst_35028);

return statearr_35092;
})();
var statearr_35093_35123 = state_35073__$1;
(statearr_35093_35123[(2)] = null);

(statearr_35093_35123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (3))){
var inst_35071 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35073__$1,inst_35071);
} else {
if((state_val_35074 === (12))){
var inst_35059 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35094_35124 = state_35073__$1;
(statearr_35094_35124[(2)] = inst_35059);

(statearr_35094_35124[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (2))){
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35073__$1,(4),in$);
} else {
if((state_val_35074 === (23))){
var inst_35067 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35095_35125 = state_35073__$1;
(statearr_35095_35125[(2)] = inst_35067);

(statearr_35095_35125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (19))){
var inst_35054 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35096_35126 = state_35073__$1;
(statearr_35096_35126[(2)] = inst_35054);

(statearr_35096_35126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (11))){
var inst_35039 = (state_35073[(7)]);
var inst_35025 = (state_35073[(11)]);
var inst_35039__$1 = cljs.core.seq.call(null,inst_35025);
var state_35073__$1 = (function (){var statearr_35097 = state_35073;
(statearr_35097[(7)] = inst_35039__$1);

return statearr_35097;
})();
if(inst_35039__$1){
var statearr_35098_35127 = state_35073__$1;
(statearr_35098_35127[(1)] = (14));

} else {
var statearr_35099_35128 = state_35073__$1;
(statearr_35099_35128[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (9))){
var inst_35061 = (state_35073[(2)]);
var inst_35062 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35073__$1 = (function (){var statearr_35100 = state_35073;
(statearr_35100[(15)] = inst_35061);

return statearr_35100;
})();
if(cljs.core.truth_(inst_35062)){
var statearr_35101_35129 = state_35073__$1;
(statearr_35101_35129[(1)] = (21));

} else {
var statearr_35102_35130 = state_35073__$1;
(statearr_35102_35130[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (5))){
var inst_35017 = cljs.core.async.close_BANG_.call(null,out);
var state_35073__$1 = state_35073;
var statearr_35103_35131 = state_35073__$1;
(statearr_35103_35131[(2)] = inst_35017);

(statearr_35103_35131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (14))){
var inst_35039 = (state_35073[(7)]);
var inst_35041 = cljs.core.chunked_seq_QMARK_.call(null,inst_35039);
var state_35073__$1 = state_35073;
if(inst_35041){
var statearr_35104_35132 = state_35073__$1;
(statearr_35104_35132[(1)] = (17));

} else {
var statearr_35105_35133 = state_35073__$1;
(statearr_35105_35133[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (16))){
var inst_35057 = (state_35073[(2)]);
var state_35073__$1 = state_35073;
var statearr_35106_35134 = state_35073__$1;
(statearr_35106_35134[(2)] = inst_35057);

(statearr_35106_35134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35074 === (10))){
var inst_35026 = (state_35073[(8)]);
var inst_35028 = (state_35073[(12)]);
var inst_35033 = cljs.core._nth.call(null,inst_35026,inst_35028);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35073__$1,(13),out,inst_35033);
} else {
if((state_val_35074 === (18))){
var inst_35039 = (state_35073[(7)]);
var inst_35048 = cljs.core.first.call(null,inst_35039);
var state_35073__$1 = state_35073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35073__$1,(20),out,inst_35048);
} else {
if((state_val_35074 === (8))){
var inst_35027 = (state_35073[(9)]);
var inst_35028 = (state_35073[(12)]);
var inst_35030 = (inst_35028 < inst_35027);
var inst_35031 = inst_35030;
var state_35073__$1 = state_35073;
if(cljs.core.truth_(inst_35031)){
var statearr_35107_35135 = state_35073__$1;
(statearr_35107_35135[(1)] = (10));

} else {
var statearr_35108_35136 = state_35073__$1;
(statearr_35108_35136[(1)] = (11));

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
});})(c__33471__auto__))
;
return ((function (switch__33365__auto__,c__33471__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33366__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33366__auto____0 = (function (){
var statearr_35109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35109[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33366__auto__);

(statearr_35109[(1)] = (1));

return statearr_35109;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33366__auto____1 = (function (state_35073){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_35073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e35110){if((e35110 instanceof Object)){
var ex__33369__auto__ = e35110;
var statearr_35111_35137 = state_35073;
(statearr_35111_35137[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35138 = state_35073;
state_35073 = G__35138;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33366__auto__ = function(state_35073){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33366__auto____1.call(this,state_35073);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33366__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33366__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto__))
})();
var state__33473__auto__ = (function (){var statearr_35112 = f__33472__auto__.call(null);
(statearr_35112[(6)] = c__33471__auto__);

return statearr_35112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto__))
);

return c__33471__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35140 = arguments.length;
switch (G__35140) {
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
var G__35143 = arguments.length;
switch (G__35143) {
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
var G__35146 = arguments.length;
switch (G__35146) {
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
var c__33471__auto___35193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___35193,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___35193,out){
return (function (state_35170){
var state_val_35171 = (state_35170[(1)]);
if((state_val_35171 === (7))){
var inst_35165 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35172_35194 = state_35170__$1;
(statearr_35172_35194[(2)] = inst_35165);

(statearr_35172_35194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (1))){
var inst_35147 = null;
var state_35170__$1 = (function (){var statearr_35173 = state_35170;
(statearr_35173[(7)] = inst_35147);

return statearr_35173;
})();
var statearr_35174_35195 = state_35170__$1;
(statearr_35174_35195[(2)] = null);

(statearr_35174_35195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (4))){
var inst_35150 = (state_35170[(8)]);
var inst_35150__$1 = (state_35170[(2)]);
var inst_35151 = (inst_35150__$1 == null);
var inst_35152 = cljs.core.not.call(null,inst_35151);
var state_35170__$1 = (function (){var statearr_35175 = state_35170;
(statearr_35175[(8)] = inst_35150__$1);

return statearr_35175;
})();
if(inst_35152){
var statearr_35176_35196 = state_35170__$1;
(statearr_35176_35196[(1)] = (5));

} else {
var statearr_35177_35197 = state_35170__$1;
(statearr_35177_35197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (6))){
var state_35170__$1 = state_35170;
var statearr_35178_35198 = state_35170__$1;
(statearr_35178_35198[(2)] = null);

(statearr_35178_35198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (3))){
var inst_35167 = (state_35170[(2)]);
var inst_35168 = cljs.core.async.close_BANG_.call(null,out);
var state_35170__$1 = (function (){var statearr_35179 = state_35170;
(statearr_35179[(9)] = inst_35167);

return statearr_35179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35170__$1,inst_35168);
} else {
if((state_val_35171 === (2))){
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35170__$1,(4),ch);
} else {
if((state_val_35171 === (11))){
var inst_35150 = (state_35170[(8)]);
var inst_35159 = (state_35170[(2)]);
var inst_35147 = inst_35150;
var state_35170__$1 = (function (){var statearr_35180 = state_35170;
(statearr_35180[(10)] = inst_35159);

(statearr_35180[(7)] = inst_35147);

return statearr_35180;
})();
var statearr_35181_35199 = state_35170__$1;
(statearr_35181_35199[(2)] = null);

(statearr_35181_35199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (9))){
var inst_35150 = (state_35170[(8)]);
var state_35170__$1 = state_35170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35170__$1,(11),out,inst_35150);
} else {
if((state_val_35171 === (5))){
var inst_35147 = (state_35170[(7)]);
var inst_35150 = (state_35170[(8)]);
var inst_35154 = cljs.core._EQ_.call(null,inst_35150,inst_35147);
var state_35170__$1 = state_35170;
if(inst_35154){
var statearr_35183_35200 = state_35170__$1;
(statearr_35183_35200[(1)] = (8));

} else {
var statearr_35184_35201 = state_35170__$1;
(statearr_35184_35201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (10))){
var inst_35162 = (state_35170[(2)]);
var state_35170__$1 = state_35170;
var statearr_35185_35202 = state_35170__$1;
(statearr_35185_35202[(2)] = inst_35162);

(statearr_35185_35202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35171 === (8))){
var inst_35147 = (state_35170[(7)]);
var tmp35182 = inst_35147;
var inst_35147__$1 = tmp35182;
var state_35170__$1 = (function (){var statearr_35186 = state_35170;
(statearr_35186[(7)] = inst_35147__$1);

return statearr_35186;
})();
var statearr_35187_35203 = state_35170__$1;
(statearr_35187_35203[(2)] = null);

(statearr_35187_35203[(1)] = (2));


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
});})(c__33471__auto___35193,out))
;
return ((function (switch__33365__auto__,c__33471__auto___35193,out){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_35188 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35188[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_35188[(1)] = (1));

return statearr_35188;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_35170){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_35170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e35189){if((e35189 instanceof Object)){
var ex__33369__auto__ = e35189;
var statearr_35190_35204 = state_35170;
(statearr_35190_35204[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35205 = state_35170;
state_35170 = G__35205;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_35170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_35170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___35193,out))
})();
var state__33473__auto__ = (function (){var statearr_35191 = f__33472__auto__.call(null);
(statearr_35191[(6)] = c__33471__auto___35193);

return statearr_35191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___35193,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35207 = arguments.length;
switch (G__35207) {
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
var c__33471__auto___35273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___35273,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___35273,out){
return (function (state_35245){
var state_val_35246 = (state_35245[(1)]);
if((state_val_35246 === (7))){
var inst_35241 = (state_35245[(2)]);
var state_35245__$1 = state_35245;
var statearr_35247_35274 = state_35245__$1;
(statearr_35247_35274[(2)] = inst_35241);

(statearr_35247_35274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (1))){
var inst_35208 = (new Array(n));
var inst_35209 = inst_35208;
var inst_35210 = (0);
var state_35245__$1 = (function (){var statearr_35248 = state_35245;
(statearr_35248[(7)] = inst_35210);

(statearr_35248[(8)] = inst_35209);

return statearr_35248;
})();
var statearr_35249_35275 = state_35245__$1;
(statearr_35249_35275[(2)] = null);

(statearr_35249_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (4))){
var inst_35213 = (state_35245[(9)]);
var inst_35213__$1 = (state_35245[(2)]);
var inst_35214 = (inst_35213__$1 == null);
var inst_35215 = cljs.core.not.call(null,inst_35214);
var state_35245__$1 = (function (){var statearr_35250 = state_35245;
(statearr_35250[(9)] = inst_35213__$1);

return statearr_35250;
})();
if(inst_35215){
var statearr_35251_35276 = state_35245__$1;
(statearr_35251_35276[(1)] = (5));

} else {
var statearr_35252_35277 = state_35245__$1;
(statearr_35252_35277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (15))){
var inst_35235 = (state_35245[(2)]);
var state_35245__$1 = state_35245;
var statearr_35253_35278 = state_35245__$1;
(statearr_35253_35278[(2)] = inst_35235);

(statearr_35253_35278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (13))){
var state_35245__$1 = state_35245;
var statearr_35254_35279 = state_35245__$1;
(statearr_35254_35279[(2)] = null);

(statearr_35254_35279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (6))){
var inst_35210 = (state_35245[(7)]);
var inst_35231 = (inst_35210 > (0));
var state_35245__$1 = state_35245;
if(cljs.core.truth_(inst_35231)){
var statearr_35255_35280 = state_35245__$1;
(statearr_35255_35280[(1)] = (12));

} else {
var statearr_35256_35281 = state_35245__$1;
(statearr_35256_35281[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (3))){
var inst_35243 = (state_35245[(2)]);
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35245__$1,inst_35243);
} else {
if((state_val_35246 === (12))){
var inst_35209 = (state_35245[(8)]);
var inst_35233 = cljs.core.vec.call(null,inst_35209);
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35245__$1,(15),out,inst_35233);
} else {
if((state_val_35246 === (2))){
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35245__$1,(4),ch);
} else {
if((state_val_35246 === (11))){
var inst_35225 = (state_35245[(2)]);
var inst_35226 = (new Array(n));
var inst_35209 = inst_35226;
var inst_35210 = (0);
var state_35245__$1 = (function (){var statearr_35257 = state_35245;
(statearr_35257[(7)] = inst_35210);

(statearr_35257[(8)] = inst_35209);

(statearr_35257[(10)] = inst_35225);

return statearr_35257;
})();
var statearr_35258_35282 = state_35245__$1;
(statearr_35258_35282[(2)] = null);

(statearr_35258_35282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (9))){
var inst_35209 = (state_35245[(8)]);
var inst_35223 = cljs.core.vec.call(null,inst_35209);
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35245__$1,(11),out,inst_35223);
} else {
if((state_val_35246 === (5))){
var inst_35210 = (state_35245[(7)]);
var inst_35213 = (state_35245[(9)]);
var inst_35218 = (state_35245[(11)]);
var inst_35209 = (state_35245[(8)]);
var inst_35217 = (inst_35209[inst_35210] = inst_35213);
var inst_35218__$1 = (inst_35210 + (1));
var inst_35219 = (inst_35218__$1 < n);
var state_35245__$1 = (function (){var statearr_35259 = state_35245;
(statearr_35259[(12)] = inst_35217);

(statearr_35259[(11)] = inst_35218__$1);

return statearr_35259;
})();
if(cljs.core.truth_(inst_35219)){
var statearr_35260_35283 = state_35245__$1;
(statearr_35260_35283[(1)] = (8));

} else {
var statearr_35261_35284 = state_35245__$1;
(statearr_35261_35284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (14))){
var inst_35238 = (state_35245[(2)]);
var inst_35239 = cljs.core.async.close_BANG_.call(null,out);
var state_35245__$1 = (function (){var statearr_35263 = state_35245;
(statearr_35263[(13)] = inst_35238);

return statearr_35263;
})();
var statearr_35264_35285 = state_35245__$1;
(statearr_35264_35285[(2)] = inst_35239);

(statearr_35264_35285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (10))){
var inst_35229 = (state_35245[(2)]);
var state_35245__$1 = state_35245;
var statearr_35265_35286 = state_35245__$1;
(statearr_35265_35286[(2)] = inst_35229);

(statearr_35265_35286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35246 === (8))){
var inst_35218 = (state_35245[(11)]);
var inst_35209 = (state_35245[(8)]);
var tmp35262 = inst_35209;
var inst_35209__$1 = tmp35262;
var inst_35210 = inst_35218;
var state_35245__$1 = (function (){var statearr_35266 = state_35245;
(statearr_35266[(7)] = inst_35210);

(statearr_35266[(8)] = inst_35209__$1);

return statearr_35266;
})();
var statearr_35267_35287 = state_35245__$1;
(statearr_35267_35287[(2)] = null);

(statearr_35267_35287[(1)] = (2));


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
});})(c__33471__auto___35273,out))
;
return ((function (switch__33365__auto__,c__33471__auto___35273,out){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_35268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35268[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_35268[(1)] = (1));

return statearr_35268;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_35245){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_35245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e35269){if((e35269 instanceof Object)){
var ex__33369__auto__ = e35269;
var statearr_35270_35288 = state_35245;
(statearr_35270_35288[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35289 = state_35245;
state_35245 = G__35289;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_35245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_35245);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___35273,out))
})();
var state__33473__auto__ = (function (){var statearr_35271 = f__33472__auto__.call(null);
(statearr_35271[(6)] = c__33471__auto___35273);

return statearr_35271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___35273,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35291 = arguments.length;
switch (G__35291) {
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
var c__33471__auto___35361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33471__auto___35361,out){
return (function (){
var f__33472__auto__ = (function (){var switch__33365__auto__ = ((function (c__33471__auto___35361,out){
return (function (state_35333){
var state_val_35334 = (state_35333[(1)]);
if((state_val_35334 === (7))){
var inst_35329 = (state_35333[(2)]);
var state_35333__$1 = state_35333;
var statearr_35335_35362 = state_35333__$1;
(statearr_35335_35362[(2)] = inst_35329);

(statearr_35335_35362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (1))){
var inst_35292 = [];
var inst_35293 = inst_35292;
var inst_35294 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35333__$1 = (function (){var statearr_35336 = state_35333;
(statearr_35336[(7)] = inst_35293);

(statearr_35336[(8)] = inst_35294);

return statearr_35336;
})();
var statearr_35337_35363 = state_35333__$1;
(statearr_35337_35363[(2)] = null);

(statearr_35337_35363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (4))){
var inst_35297 = (state_35333[(9)]);
var inst_35297__$1 = (state_35333[(2)]);
var inst_35298 = (inst_35297__$1 == null);
var inst_35299 = cljs.core.not.call(null,inst_35298);
var state_35333__$1 = (function (){var statearr_35338 = state_35333;
(statearr_35338[(9)] = inst_35297__$1);

return statearr_35338;
})();
if(inst_35299){
var statearr_35339_35364 = state_35333__$1;
(statearr_35339_35364[(1)] = (5));

} else {
var statearr_35340_35365 = state_35333__$1;
(statearr_35340_35365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (15))){
var inst_35323 = (state_35333[(2)]);
var state_35333__$1 = state_35333;
var statearr_35341_35366 = state_35333__$1;
(statearr_35341_35366[(2)] = inst_35323);

(statearr_35341_35366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (13))){
var state_35333__$1 = state_35333;
var statearr_35342_35367 = state_35333__$1;
(statearr_35342_35367[(2)] = null);

(statearr_35342_35367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (6))){
var inst_35293 = (state_35333[(7)]);
var inst_35318 = inst_35293.length;
var inst_35319 = (inst_35318 > (0));
var state_35333__$1 = state_35333;
if(cljs.core.truth_(inst_35319)){
var statearr_35343_35368 = state_35333__$1;
(statearr_35343_35368[(1)] = (12));

} else {
var statearr_35344_35369 = state_35333__$1;
(statearr_35344_35369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (3))){
var inst_35331 = (state_35333[(2)]);
var state_35333__$1 = state_35333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35333__$1,inst_35331);
} else {
if((state_val_35334 === (12))){
var inst_35293 = (state_35333[(7)]);
var inst_35321 = cljs.core.vec.call(null,inst_35293);
var state_35333__$1 = state_35333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35333__$1,(15),out,inst_35321);
} else {
if((state_val_35334 === (2))){
var state_35333__$1 = state_35333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35333__$1,(4),ch);
} else {
if((state_val_35334 === (11))){
var inst_35301 = (state_35333[(10)]);
var inst_35297 = (state_35333[(9)]);
var inst_35311 = (state_35333[(2)]);
var inst_35312 = [];
var inst_35313 = inst_35312.push(inst_35297);
var inst_35293 = inst_35312;
var inst_35294 = inst_35301;
var state_35333__$1 = (function (){var statearr_35345 = state_35333;
(statearr_35345[(11)] = inst_35313);

(statearr_35345[(7)] = inst_35293);

(statearr_35345[(12)] = inst_35311);

(statearr_35345[(8)] = inst_35294);

return statearr_35345;
})();
var statearr_35346_35370 = state_35333__$1;
(statearr_35346_35370[(2)] = null);

(statearr_35346_35370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (9))){
var inst_35293 = (state_35333[(7)]);
var inst_35309 = cljs.core.vec.call(null,inst_35293);
var state_35333__$1 = state_35333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35333__$1,(11),out,inst_35309);
} else {
if((state_val_35334 === (5))){
var inst_35301 = (state_35333[(10)]);
var inst_35297 = (state_35333[(9)]);
var inst_35294 = (state_35333[(8)]);
var inst_35301__$1 = f.call(null,inst_35297);
var inst_35302 = cljs.core._EQ_.call(null,inst_35301__$1,inst_35294);
var inst_35303 = cljs.core.keyword_identical_QMARK_.call(null,inst_35294,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35304 = (inst_35302) || (inst_35303);
var state_35333__$1 = (function (){var statearr_35347 = state_35333;
(statearr_35347[(10)] = inst_35301__$1);

return statearr_35347;
})();
if(cljs.core.truth_(inst_35304)){
var statearr_35348_35371 = state_35333__$1;
(statearr_35348_35371[(1)] = (8));

} else {
var statearr_35349_35372 = state_35333__$1;
(statearr_35349_35372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (14))){
var inst_35326 = (state_35333[(2)]);
var inst_35327 = cljs.core.async.close_BANG_.call(null,out);
var state_35333__$1 = (function (){var statearr_35351 = state_35333;
(statearr_35351[(13)] = inst_35326);

return statearr_35351;
})();
var statearr_35352_35373 = state_35333__$1;
(statearr_35352_35373[(2)] = inst_35327);

(statearr_35352_35373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (10))){
var inst_35316 = (state_35333[(2)]);
var state_35333__$1 = state_35333;
var statearr_35353_35374 = state_35333__$1;
(statearr_35353_35374[(2)] = inst_35316);

(statearr_35353_35374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35334 === (8))){
var inst_35293 = (state_35333[(7)]);
var inst_35301 = (state_35333[(10)]);
var inst_35297 = (state_35333[(9)]);
var inst_35306 = inst_35293.push(inst_35297);
var tmp35350 = inst_35293;
var inst_35293__$1 = tmp35350;
var inst_35294 = inst_35301;
var state_35333__$1 = (function (){var statearr_35354 = state_35333;
(statearr_35354[(7)] = inst_35293__$1);

(statearr_35354[(14)] = inst_35306);

(statearr_35354[(8)] = inst_35294);

return statearr_35354;
})();
var statearr_35355_35375 = state_35333__$1;
(statearr_35355_35375[(2)] = null);

(statearr_35355_35375[(1)] = (2));


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
});})(c__33471__auto___35361,out))
;
return ((function (switch__33365__auto__,c__33471__auto___35361,out){
return (function() {
var cljs$core$async$state_machine__33366__auto__ = null;
var cljs$core$async$state_machine__33366__auto____0 = (function (){
var statearr_35356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35356[(0)] = cljs$core$async$state_machine__33366__auto__);

(statearr_35356[(1)] = (1));

return statearr_35356;
});
var cljs$core$async$state_machine__33366__auto____1 = (function (state_35333){
while(true){
var ret_value__33367__auto__ = (function (){try{while(true){
var result__33368__auto__ = switch__33365__auto__.call(null,state_35333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33368__auto__;
}
break;
}
}catch (e35357){if((e35357 instanceof Object)){
var ex__33369__auto__ = e35357;
var statearr_35358_35376 = state_35333;
(statearr_35358_35376[(5)] = ex__33369__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33367__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_35333;
state_35333 = G__35377;
continue;
} else {
return ret_value__33367__auto__;
}
break;
}
});
cljs$core$async$state_machine__33366__auto__ = function(state_35333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33366__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33366__auto____1.call(this,state_35333);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33366__auto____0;
cljs$core$async$state_machine__33366__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33366__auto____1;
return cljs$core$async$state_machine__33366__auto__;
})()
;})(switch__33365__auto__,c__33471__auto___35361,out))
})();
var state__33473__auto__ = (function (){var statearr_35359 = f__33472__auto__.call(null);
(statearr_35359[(6)] = c__33471__auto___35361);

return statearr_35359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33473__auto__);
});})(c__33471__auto___35361,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503580039485
