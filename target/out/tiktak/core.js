// Compiled by ClojureScript 0.0-2985 {}
goog.provide('tiktak.core');
goog.require('cljs.core');
goog.require('rum');
cljs.core.enable_console_print_BANG_.call(null);
tiktak.core.h1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hola Spirograph",new cljs.core.Keyword(null,"c","c",-1763192079),"#009999",new cljs.core.Keyword(null,"pad","pad",-36734541),(20),new cljs.core.Keyword(null,"t-a","t-a",-236163714),"center"], null);
tiktak.core.p1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Las siguientes imagenes...",new cljs.core.Keyword(null,"t-a","t-a",-236163714),"center"], null);
tiktak.core.i1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),"/images/spiro.gif",new cljs.core.Keyword(null,"alt","alt",-3214426),"imagen de spiro",new cljs.core.Keyword(null,"w","w",354169001),(400),new cljs.core.Keyword(null,"h","h",1109658740),(400),new cljs.core.Keyword(null,"t-a","t-a",-236163714),"center"], null);
tiktak.core.p2 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"han sido creadas con Clojure",new cljs.core.Keyword(null,"t-a","t-a",-236163714),"center"], null);
var render_fn__6319__auto___14598 = (function (h){
return React.createElement("h1",{"style": {"color": new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(h), "padding": new cljs.core.Keyword(null,"pad","pad",-36734541).cljs$core$IFn$_invoke$arity$1(h), "textAlign": new cljs.core.Keyword(null,"t-a","t-a",-236163714).cljs$core$IFn$_invoke$arity$1(h)}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(h)));
});
var render_mixin__6320__auto___14599 = rum.render__GT_mixin.call(null,render_fn__6319__auto___14598);
var class__6321__auto___14600 = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6320__auto___14599], null),null),"render-h");
var ctor__6322__auto___14601 = ((function (render_fn__6319__auto___14598,render_mixin__6320__auto___14599,class__6321__auto___14600){
return (function() { 
var G__14602__delegate = function (args__6323__auto__){
var state__6324__auto__ = rum.args__GT_state.call(null,args__6323__auto__);
return rum.element.call(null,class__6321__auto___14600,state__6324__auto__,null);
};
var G__14602 = function (var_args){
var args__6323__auto__ = null;
if (arguments.length > 0) {
var G__14603__i = 0, G__14603__a = new Array(arguments.length -  0);
while (G__14603__i < G__14603__a.length) {G__14603__a[G__14603__i] = arguments[G__14603__i + 0]; ++G__14603__i;}
  args__6323__auto__ = new cljs.core.IndexedSeq(G__14603__a,0);
} 
return G__14602__delegate.call(this,args__6323__auto__);};
G__14602.cljs$lang$maxFixedArity = 0;
G__14602.cljs$lang$applyTo = (function (arglist__14604){
var args__6323__auto__ = cljs.core.seq(arglist__14604);
return G__14602__delegate(args__6323__auto__);
});
G__14602.cljs$core$IFn$_invoke$arity$variadic = G__14602__delegate;
return G__14602;
})()
;})(render_fn__6319__auto___14598,render_mixin__6320__auto___14599,class__6321__auto___14600))
;
tiktak.core.render_h = cljs.core.with_meta.call(null,ctor__6322__auto___14601,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6321__auto___14600], null));
var render_fn__6319__auto___14605 = (function (p){
return React.createElement("p",{"style": {"color": new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(p), "padding": new cljs.core.Keyword(null,"pad","pad",-36734541).cljs$core$IFn$_invoke$arity$1(p), "textAlign": new cljs.core.Keyword(null,"t-a","t-a",-236163714).cljs$core$IFn$_invoke$arity$1(p)}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(p)));
});
var render_mixin__6320__auto___14606 = rum.render__GT_mixin.call(null,render_fn__6319__auto___14605);
var class__6321__auto___14607 = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6320__auto___14606], null),null),"render-p");
var ctor__6322__auto___14608 = ((function (render_fn__6319__auto___14605,render_mixin__6320__auto___14606,class__6321__auto___14607){
return (function() { 
var G__14609__delegate = function (args__6323__auto__){
var state__6324__auto__ = rum.args__GT_state.call(null,args__6323__auto__);
return rum.element.call(null,class__6321__auto___14607,state__6324__auto__,null);
};
var G__14609 = function (var_args){
var args__6323__auto__ = null;
if (arguments.length > 0) {
var G__14610__i = 0, G__14610__a = new Array(arguments.length -  0);
while (G__14610__i < G__14610__a.length) {G__14610__a[G__14610__i] = arguments[G__14610__i + 0]; ++G__14610__i;}
  args__6323__auto__ = new cljs.core.IndexedSeq(G__14610__a,0);
} 
return G__14609__delegate.call(this,args__6323__auto__);};
G__14609.cljs$lang$maxFixedArity = 0;
G__14609.cljs$lang$applyTo = (function (arglist__14611){
var args__6323__auto__ = cljs.core.seq(arglist__14611);
return G__14609__delegate(args__6323__auto__);
});
G__14609.cljs$core$IFn$_invoke$arity$variadic = G__14609__delegate;
return G__14609;
})()
;})(render_fn__6319__auto___14605,render_mixin__6320__auto___14606,class__6321__auto___14607))
;
tiktak.core.render_p = cljs.core.with_meta.call(null,ctor__6322__auto___14608,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6321__auto___14607], null));
var render_fn__6319__auto___14612 = (function (i){
return React.createElement("p",{"style": {"textAlign": new cljs.core.Keyword(null,"t-a","t-a",-236163714).cljs$core$IFn$_invoke$arity$1(i)}},React.createElement("img",{"src": new cljs.core.Keyword(null,"image-src","image-src",1152914289).cljs$core$IFn$_invoke$arity$1(i), "alt": new cljs.core.Keyword(null,"alt","alt",-3214426).cljs$core$IFn$_invoke$arity$1(i), "style": {"with": (400), "height": (400)}}));
});
var render_mixin__6320__auto___14613 = rum.render__GT_mixin.call(null,render_fn__6319__auto___14612);
var class__6321__auto___14614 = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6320__auto___14613], null),null),"render-i");
var ctor__6322__auto___14615 = ((function (render_fn__6319__auto___14612,render_mixin__6320__auto___14613,class__6321__auto___14614){
return (function() { 
var G__14616__delegate = function (args__6323__auto__){
var state__6324__auto__ = rum.args__GT_state.call(null,args__6323__auto__);
return rum.element.call(null,class__6321__auto___14614,state__6324__auto__,null);
};
var G__14616 = function (var_args){
var args__6323__auto__ = null;
if (arguments.length > 0) {
var G__14617__i = 0, G__14617__a = new Array(arguments.length -  0);
while (G__14617__i < G__14617__a.length) {G__14617__a[G__14617__i] = arguments[G__14617__i + 0]; ++G__14617__i;}
  args__6323__auto__ = new cljs.core.IndexedSeq(G__14617__a,0);
} 
return G__14616__delegate.call(this,args__6323__auto__);};
G__14616.cljs$lang$maxFixedArity = 0;
G__14616.cljs$lang$applyTo = (function (arglist__14618){
var args__6323__auto__ = cljs.core.seq(arglist__14618);
return G__14616__delegate(args__6323__auto__);
});
G__14616.cljs$core$IFn$_invoke$arity$variadic = G__14616__delegate;
return G__14616;
})()
;})(render_fn__6319__auto___14612,render_mixin__6320__auto___14613,class__6321__auto___14614))
;
tiktak.core.render_i = cljs.core.with_meta.call(null,ctor__6322__auto___14615,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__6321__auto___14614], null));
rum.mount.call(null,tiktak.core.render_h.call(null,tiktak.core.h1),document.getElementById("titulo"));
rum.mount.call(null,tiktak.core.render_p.call(null,tiktak.core.p1),document.getElementById("parrafo1"));
rum.mount.call(null,tiktak.core.render_p.call(null,tiktak.core.p2),document.getElementById("parrafo2"));
rum.mount.call(null,tiktak.core.render_i.call(null,tiktak.core.i1),document.getElementById("imagenes"));

//# sourceMappingURL=core.js.map