// Compiled by ClojureScript 0.0-2985 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__13088__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__13087 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__13087,(0),null);
var body = cljs.core.nthnext.call(null,vec__13087,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__13088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13089__i = 0, G__13089__a = new Array(arguments.length -  0);
while (G__13089__i < G__13089__a.length) {G__13089__a[G__13089__i] = arguments[G__13089__i + 0]; ++G__13089__i;}
  args = new cljs.core.IndexedSeq(G__13089__a,0);
} 
return G__13088__delegate.call(this,args);};
G__13088.cljs$lang$maxFixedArity = 0;
G__13088.cljs$lang$applyTo = (function (arglist__13090){
var args = cljs.core.seq(arglist__13090);
return G__13088__delegate(args);
});
G__13088.cljs$core$IFn$_invoke$arity$variadic = G__13088__delegate;
return G__13088;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4682__auto__ = (function iter__13095(s__13096){
return (new cljs.core.LazySeq(null,(function (){
var s__13096__$1 = s__13096;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__13096__$1);
if(temp__4406__auto__){
var s__13096__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13096__$2)){
var c__4680__auto__ = cljs.core.chunk_first.call(null,s__13096__$2);
var size__4681__auto__ = cljs.core.count.call(null,c__4680__auto__);
var b__13098 = cljs.core.chunk_buffer.call(null,size__4681__auto__);
if((function (){var i__13097 = (0);
while(true){
if((i__13097 < size__4681__auto__)){
var args = cljs.core._nth.call(null,c__4680__auto__,i__13097);
cljs.core.chunk_append.call(null,b__13098,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__13099 = (i__13097 + (1));
i__13097 = G__13099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13098),iter__13095.call(null,cljs.core.chunk_rest.call(null,s__13096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13098),null);
}
} else {
var args = cljs.core.first.call(null,s__13096__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__13095.call(null,cljs.core.rest.call(null,s__13096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4682__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 * @param {...*} var_args
 */
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4682__auto__ = (function iter__13104(s__13105){
return (new cljs.core.LazySeq(null,(function (){
var s__13105__$1 = s__13105;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__13105__$1);
if(temp__4406__auto__){
var s__13105__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13105__$2)){
var c__4680__auto__ = cljs.core.chunk_first.call(null,s__13105__$2);
var size__4681__auto__ = cljs.core.count.call(null,c__4680__auto__);
var b__13107 = cljs.core.chunk_buffer.call(null,size__4681__auto__);
if((function (){var i__13106 = (0);
while(true){
if((i__13106 < size__4681__auto__)){
var style = cljs.core._nth.call(null,c__4680__auto__,i__13106);
cljs.core.chunk_append.call(null,b__13107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__13108 = (i__13106 + (1));
i__13106 = G__13108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13107),iter__13104.call(null,cljs.core.chunk_rest.call(null,s__13105__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13107),null);
}
} else {
var style = cljs.core.first.call(null,s__13105__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__13104.call(null,cljs.core.rest.call(null,s__13105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4682__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__13109__i = 0, G__13109__a = new Array(arguments.length -  0);
while (G__13109__i < G__13109__a.length) {G__13109__a[G__13109__i] = arguments[G__13109__i + 0]; ++G__13109__i;}
  styles = new cljs.core.IndexedSeq(G__13109__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__13110){
var styles = cljs.core.seq(arglist__13110);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 * @param {...*} var_args
 */
sablono.core.link_to13111 = (function() { 
var link_to13111__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to13111 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__13112__i = 0, G__13112__a = new Array(arguments.length -  1);
while (G__13112__i < G__13112__a.length) {G__13112__a[G__13112__i] = arguments[G__13112__i + 1]; ++G__13112__i;}
  content = new cljs.core.IndexedSeq(G__13112__a,0);
} 
return link_to13111__delegate.call(this,url,content);};
link_to13111.cljs$lang$maxFixedArity = 1;
link_to13111.cljs$lang$applyTo = (function (arglist__13113){
var url = cljs.core.first(arglist__13113);
var content = cljs.core.rest(arglist__13113);
return link_to13111__delegate(url,content);
});
link_to13111.cljs$core$IFn$_invoke$arity$variadic = link_to13111__delegate;
return link_to13111;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13111);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 * @param {...*} var_args
 */
sablono.core.mail_to13114 = (function() { 
var mail_to13114__delegate = function (e_mail,p__13115){
var vec__13117 = p__13115;
var content = cljs.core.nth.call(null,vec__13117,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3926__auto__ = content;
if(cljs.core.truth_(or__3926__auto__)){
return or__3926__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to13114 = function (e_mail,var_args){
var p__13115 = null;
if (arguments.length > 1) {
var G__13118__i = 0, G__13118__a = new Array(arguments.length -  1);
while (G__13118__i < G__13118__a.length) {G__13118__a[G__13118__i] = arguments[G__13118__i + 1]; ++G__13118__i;}
  p__13115 = new cljs.core.IndexedSeq(G__13118__a,0);
} 
return mail_to13114__delegate.call(this,e_mail,p__13115);};
mail_to13114.cljs$lang$maxFixedArity = 1;
mail_to13114.cljs$lang$applyTo = (function (arglist__13119){
var e_mail = cljs.core.first(arglist__13119);
var p__13115 = cljs.core.rest(arglist__13119);
return mail_to13114__delegate(e_mail,p__13115);
});
mail_to13114.cljs$core$IFn$_invoke$arity$variadic = mail_to13114__delegate;
return mail_to13114;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13114);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13120 = (function unordered_list13120(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4682__auto__ = (function iter__13125(s__13126){
return (new cljs.core.LazySeq(null,(function (){
var s__13126__$1 = s__13126;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__13126__$1);
if(temp__4406__auto__){
var s__13126__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13126__$2)){
var c__4680__auto__ = cljs.core.chunk_first.call(null,s__13126__$2);
var size__4681__auto__ = cljs.core.count.call(null,c__4680__auto__);
var b__13128 = cljs.core.chunk_buffer.call(null,size__4681__auto__);
if((function (){var i__13127 = (0);
while(true){
if((i__13127 < size__4681__auto__)){
var x = cljs.core._nth.call(null,c__4680__auto__,i__13127);
cljs.core.chunk_append.call(null,b__13128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13129 = (i__13127 + (1));
i__13127 = G__13129;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13128),iter__13125.call(null,cljs.core.chunk_rest.call(null,s__13126__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13128),null);
}
} else {
var x = cljs.core.first.call(null,s__13126__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__13125.call(null,cljs.core.rest.call(null,s__13126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4682__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13120);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13130 = (function ordered_list13130(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4682__auto__ = (function iter__13135(s__13136){
return (new cljs.core.LazySeq(null,(function (){
var s__13136__$1 = s__13136;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__13136__$1);
if(temp__4406__auto__){
var s__13136__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13136__$2)){
var c__4680__auto__ = cljs.core.chunk_first.call(null,s__13136__$2);
var size__4681__auto__ = cljs.core.count.call(null,c__4680__auto__);
var b__13138 = cljs.core.chunk_buffer.call(null,size__4681__auto__);
if((function (){var i__13137 = (0);
while(true){
if((i__13137 < size__4681__auto__)){
var x = cljs.core._nth.call(null,c__4680__auto__,i__13137);
cljs.core.chunk_append.call(null,b__13138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13139 = (i__13137 + (1));
i__13137 = G__13139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13138),iter__13135.call(null,cljs.core.chunk_rest.call(null,s__13136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13138),null);
}
} else {
var x = cljs.core.first.call(null,s__13136__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__13135.call(null,cljs.core.rest.call(null,s__13136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4682__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13130);
/**
 * Create an image element.
 */
sablono.core.image13140 = (function() {
var image13140 = null;
var image13140__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image13140__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image13140 = function(src,alt){
switch(arguments.length){
case 1:
return image13140__1.call(this,src);
case 2:
return image13140__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image13140.cljs$core$IFn$_invoke$arity$1 = image13140__1;
image13140.cljs$core$IFn$_invoke$arity$2 = image13140__2;
return image13140;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13140);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__13141_SHARP_,p2__13142_SHARP_){
return [cljs.core.str(p1__13141_SHARP_),cljs.core.str("["),cljs.core.str(p2__13142_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__13143_SHARP_,p2__13144_SHARP_){
return [cljs.core.str(p1__13143_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13144_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13145 = (function() {
var color_field13145 = null;
var color_field13145__1 = (function (name__6138__auto__){
return color_field13145.call(null,name__6138__auto__,null);
});
var color_field13145__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6138__auto__,value__6139__auto__);
});
color_field13145 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return color_field13145__1.call(this,name__6138__auto__);
case 2:
return color_field13145__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field13145.cljs$core$IFn$_invoke$arity$1 = color_field13145__1;
color_field13145.cljs$core$IFn$_invoke$arity$2 = color_field13145__2;
return color_field13145;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13145);

/**
 * Creates a date input field.
 */
sablono.core.date_field13146 = (function() {
var date_field13146 = null;
var date_field13146__1 = (function (name__6138__auto__){
return date_field13146.call(null,name__6138__auto__,null);
});
var date_field13146__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6138__auto__,value__6139__auto__);
});
date_field13146 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return date_field13146__1.call(this,name__6138__auto__);
case 2:
return date_field13146__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field13146.cljs$core$IFn$_invoke$arity$1 = date_field13146__1;
date_field13146.cljs$core$IFn$_invoke$arity$2 = date_field13146__2;
return date_field13146;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13146);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13147 = (function() {
var datetime_field13147 = null;
var datetime_field13147__1 = (function (name__6138__auto__){
return datetime_field13147.call(null,name__6138__auto__,null);
});
var datetime_field13147__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6138__auto__,value__6139__auto__);
});
datetime_field13147 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return datetime_field13147__1.call(this,name__6138__auto__);
case 2:
return datetime_field13147__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field13147.cljs$core$IFn$_invoke$arity$1 = datetime_field13147__1;
datetime_field13147.cljs$core$IFn$_invoke$arity$2 = datetime_field13147__2;
return datetime_field13147;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13147);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13148 = (function() {
var datetime_local_field13148 = null;
var datetime_local_field13148__1 = (function (name__6138__auto__){
return datetime_local_field13148.call(null,name__6138__auto__,null);
});
var datetime_local_field13148__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6138__auto__,value__6139__auto__);
});
datetime_local_field13148 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return datetime_local_field13148__1.call(this,name__6138__auto__);
case 2:
return datetime_local_field13148__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field13148.cljs$core$IFn$_invoke$arity$1 = datetime_local_field13148__1;
datetime_local_field13148.cljs$core$IFn$_invoke$arity$2 = datetime_local_field13148__2;
return datetime_local_field13148;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13148);

/**
 * Creates a email input field.
 */
sablono.core.email_field13149 = (function() {
var email_field13149 = null;
var email_field13149__1 = (function (name__6138__auto__){
return email_field13149.call(null,name__6138__auto__,null);
});
var email_field13149__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6138__auto__,value__6139__auto__);
});
email_field13149 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return email_field13149__1.call(this,name__6138__auto__);
case 2:
return email_field13149__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field13149.cljs$core$IFn$_invoke$arity$1 = email_field13149__1;
email_field13149.cljs$core$IFn$_invoke$arity$2 = email_field13149__2;
return email_field13149;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13149);

/**
 * Creates a file input field.
 */
sablono.core.file_field13150 = (function() {
var file_field13150 = null;
var file_field13150__1 = (function (name__6138__auto__){
return file_field13150.call(null,name__6138__auto__,null);
});
var file_field13150__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6138__auto__,value__6139__auto__);
});
file_field13150 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return file_field13150__1.call(this,name__6138__auto__);
case 2:
return file_field13150__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field13150.cljs$core$IFn$_invoke$arity$1 = file_field13150__1;
file_field13150.cljs$core$IFn$_invoke$arity$2 = file_field13150__2;
return file_field13150;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13150);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13151 = (function() {
var hidden_field13151 = null;
var hidden_field13151__1 = (function (name__6138__auto__){
return hidden_field13151.call(null,name__6138__auto__,null);
});
var hidden_field13151__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6138__auto__,value__6139__auto__);
});
hidden_field13151 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return hidden_field13151__1.call(this,name__6138__auto__);
case 2:
return hidden_field13151__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field13151.cljs$core$IFn$_invoke$arity$1 = hidden_field13151__1;
hidden_field13151.cljs$core$IFn$_invoke$arity$2 = hidden_field13151__2;
return hidden_field13151;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13151);

/**
 * Creates a month input field.
 */
sablono.core.month_field13152 = (function() {
var month_field13152 = null;
var month_field13152__1 = (function (name__6138__auto__){
return month_field13152.call(null,name__6138__auto__,null);
});
var month_field13152__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6138__auto__,value__6139__auto__);
});
month_field13152 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return month_field13152__1.call(this,name__6138__auto__);
case 2:
return month_field13152__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field13152.cljs$core$IFn$_invoke$arity$1 = month_field13152__1;
month_field13152.cljs$core$IFn$_invoke$arity$2 = month_field13152__2;
return month_field13152;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13152);

/**
 * Creates a number input field.
 */
sablono.core.number_field13153 = (function() {
var number_field13153 = null;
var number_field13153__1 = (function (name__6138__auto__){
return number_field13153.call(null,name__6138__auto__,null);
});
var number_field13153__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6138__auto__,value__6139__auto__);
});
number_field13153 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return number_field13153__1.call(this,name__6138__auto__);
case 2:
return number_field13153__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field13153.cljs$core$IFn$_invoke$arity$1 = number_field13153__1;
number_field13153.cljs$core$IFn$_invoke$arity$2 = number_field13153__2;
return number_field13153;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13153);

/**
 * Creates a password input field.
 */
sablono.core.password_field13154 = (function() {
var password_field13154 = null;
var password_field13154__1 = (function (name__6138__auto__){
return password_field13154.call(null,name__6138__auto__,null);
});
var password_field13154__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6138__auto__,value__6139__auto__);
});
password_field13154 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return password_field13154__1.call(this,name__6138__auto__);
case 2:
return password_field13154__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field13154.cljs$core$IFn$_invoke$arity$1 = password_field13154__1;
password_field13154.cljs$core$IFn$_invoke$arity$2 = password_field13154__2;
return password_field13154;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13154);

/**
 * Creates a range input field.
 */
sablono.core.range_field13155 = (function() {
var range_field13155 = null;
var range_field13155__1 = (function (name__6138__auto__){
return range_field13155.call(null,name__6138__auto__,null);
});
var range_field13155__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6138__auto__,value__6139__auto__);
});
range_field13155 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return range_field13155__1.call(this,name__6138__auto__);
case 2:
return range_field13155__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field13155.cljs$core$IFn$_invoke$arity$1 = range_field13155__1;
range_field13155.cljs$core$IFn$_invoke$arity$2 = range_field13155__2;
return range_field13155;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13155);

/**
 * Creates a search input field.
 */
sablono.core.search_field13156 = (function() {
var search_field13156 = null;
var search_field13156__1 = (function (name__6138__auto__){
return search_field13156.call(null,name__6138__auto__,null);
});
var search_field13156__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6138__auto__,value__6139__auto__);
});
search_field13156 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return search_field13156__1.call(this,name__6138__auto__);
case 2:
return search_field13156__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field13156.cljs$core$IFn$_invoke$arity$1 = search_field13156__1;
search_field13156.cljs$core$IFn$_invoke$arity$2 = search_field13156__2;
return search_field13156;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13156);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13157 = (function() {
var tel_field13157 = null;
var tel_field13157__1 = (function (name__6138__auto__){
return tel_field13157.call(null,name__6138__auto__,null);
});
var tel_field13157__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6138__auto__,value__6139__auto__);
});
tel_field13157 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return tel_field13157__1.call(this,name__6138__auto__);
case 2:
return tel_field13157__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field13157.cljs$core$IFn$_invoke$arity$1 = tel_field13157__1;
tel_field13157.cljs$core$IFn$_invoke$arity$2 = tel_field13157__2;
return tel_field13157;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13157);

/**
 * Creates a text input field.
 */
sablono.core.text_field13158 = (function() {
var text_field13158 = null;
var text_field13158__1 = (function (name__6138__auto__){
return text_field13158.call(null,name__6138__auto__,null);
});
var text_field13158__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6138__auto__,value__6139__auto__);
});
text_field13158 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return text_field13158__1.call(this,name__6138__auto__);
case 2:
return text_field13158__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field13158.cljs$core$IFn$_invoke$arity$1 = text_field13158__1;
text_field13158.cljs$core$IFn$_invoke$arity$2 = text_field13158__2;
return text_field13158;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13158);

/**
 * Creates a time input field.
 */
sablono.core.time_field13159 = (function() {
var time_field13159 = null;
var time_field13159__1 = (function (name__6138__auto__){
return time_field13159.call(null,name__6138__auto__,null);
});
var time_field13159__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6138__auto__,value__6139__auto__);
});
time_field13159 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return time_field13159__1.call(this,name__6138__auto__);
case 2:
return time_field13159__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field13159.cljs$core$IFn$_invoke$arity$1 = time_field13159__1;
time_field13159.cljs$core$IFn$_invoke$arity$2 = time_field13159__2;
return time_field13159;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13159);

/**
 * Creates a url input field.
 */
sablono.core.url_field13160 = (function() {
var url_field13160 = null;
var url_field13160__1 = (function (name__6138__auto__){
return url_field13160.call(null,name__6138__auto__,null);
});
var url_field13160__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6138__auto__,value__6139__auto__);
});
url_field13160 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return url_field13160__1.call(this,name__6138__auto__);
case 2:
return url_field13160__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field13160.cljs$core$IFn$_invoke$arity$1 = url_field13160__1;
url_field13160.cljs$core$IFn$_invoke$arity$2 = url_field13160__2;
return url_field13160;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13160);

/**
 * Creates a week input field.
 */
sablono.core.week_field13161 = (function() {
var week_field13161 = null;
var week_field13161__1 = (function (name__6138__auto__){
return week_field13161.call(null,name__6138__auto__,null);
});
var week_field13161__2 = (function (name__6138__auto__,value__6139__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6138__auto__,value__6139__auto__);
});
week_field13161 = function(name__6138__auto__,value__6139__auto__){
switch(arguments.length){
case 1:
return week_field13161__1.call(this,name__6138__auto__);
case 2:
return week_field13161__2.call(this,name__6138__auto__,value__6139__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field13161.cljs$core$IFn$_invoke$arity$1 = week_field13161__1;
week_field13161.cljs$core$IFn$_invoke$arity$2 = week_field13161__2;
return week_field13161;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13161);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13162 = (function() {
var check_box13162 = null;
var check_box13162__1 = (function (name){
return check_box13162.call(null,name,null);
});
var check_box13162__2 = (function (name,checked_QMARK_){
return check_box13162.call(null,name,checked_QMARK_,"true");
});
var check_box13162__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box13162 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box13162__1.call(this,name);
case 2:
return check_box13162__2.call(this,name,checked_QMARK_);
case 3:
return check_box13162__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box13162.cljs$core$IFn$_invoke$arity$1 = check_box13162__1;
check_box13162.cljs$core$IFn$_invoke$arity$2 = check_box13162__2;
check_box13162.cljs$core$IFn$_invoke$arity$3 = check_box13162__3;
return check_box13162;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13162);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13163 = (function() {
var radio_button13163 = null;
var radio_button13163__1 = (function (group){
return radio_button13163.call(null,group,null);
});
var radio_button13163__2 = (function (group,checked_QMARK_){
return radio_button13163.call(null,group,checked_QMARK_,"true");
});
var radio_button13163__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button13163 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button13163__1.call(this,group);
case 2:
return radio_button13163__2.call(this,group,checked_QMARK_);
case 3:
return radio_button13163__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button13163.cljs$core$IFn$_invoke$arity$1 = radio_button13163__1;
radio_button13163.cljs$core$IFn$_invoke$arity$2 = radio_button13163__2;
radio_button13163.cljs$core$IFn$_invoke$arity$3 = radio_button13163__3;
return radio_button13163;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13163);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13164 = (function() {
var select_options13164 = null;
var select_options13164__1 = (function (coll){
return select_options13164.call(null,coll,null);
});
var select_options13164__2 = (function (coll,selected){
var iter__4682__auto__ = (function iter__13173(s__13174){
return (new cljs.core.LazySeq(null,(function (){
var s__13174__$1 = s__13174;
while(true){
var temp__4406__auto__ = cljs.core.seq.call(null,s__13174__$1);
if(temp__4406__auto__){
var s__13174__$2 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13174__$2)){
var c__4680__auto__ = cljs.core.chunk_first.call(null,s__13174__$2);
var size__4681__auto__ = cljs.core.count.call(null,c__4680__auto__);
var b__13176 = cljs.core.chunk_buffer.call(null,size__4681__auto__);
if((function (){var i__13175 = (0);
while(true){
if((i__13175 < size__4681__auto__)){
var x = cljs.core._nth.call(null,c__4680__auto__,i__13175);
cljs.core.chunk_append.call(null,b__13176,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13179 = x;
var text = cljs.core.nth.call(null,vec__13179,(0),null);
var val = cljs.core.nth.call(null,vec__13179,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13179,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options13164.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__13181 = (i__13175 + (1));
i__13175 = G__13181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13176),iter__13173.call(null,cljs.core.chunk_rest.call(null,s__13174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13176),null);
}
} else {
var x = cljs.core.first.call(null,s__13174__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13180 = x;
var text = cljs.core.nth.call(null,vec__13180,(0),null);
var val = cljs.core.nth.call(null,vec__13180,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13180,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options13164.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__13173.call(null,cljs.core.rest.call(null,s__13174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4682__auto__.call(null,coll);
});
select_options13164 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options13164__1.call(this,coll);
case 2:
return select_options13164__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options13164.cljs$core$IFn$_invoke$arity$1 = select_options13164__1;
select_options13164.cljs$core$IFn$_invoke$arity$2 = select_options13164__2;
return select_options13164;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13164);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13182 = (function() {
var drop_down13182 = null;
var drop_down13182__2 = (function (name,options){
return drop_down13182.call(null,name,options,null);
});
var drop_down13182__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down13182 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down13182__2.call(this,name,options);
case 3:
return drop_down13182__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down13182.cljs$core$IFn$_invoke$arity$2 = drop_down13182__2;
drop_down13182.cljs$core$IFn$_invoke$arity$3 = drop_down13182__3;
return drop_down13182;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13182);
/**
 * Creates a text area element.
 */
sablono.core.text_area13183 = (function() {
var text_area13183 = null;
var text_area13183__1 = (function (name){
return text_area13183.call(null,name,null);
});
var text_area13183__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area13183 = function(name,value){
switch(arguments.length){
case 1:
return text_area13183__1.call(this,name);
case 2:
return text_area13183__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area13183.cljs$core$IFn$_invoke$arity$1 = text_area13183__1;
text_area13183.cljs$core$IFn$_invoke$arity$2 = text_area13183__2;
return text_area13183;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13183);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13184 = (function label13184(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13184);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13185 = (function submit_button13185(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13185);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13186 = (function reset_button13186(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13186);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 * @param {...*} var_args
 */
sablono.core.form_to13187 = (function() { 
var form_to13187__delegate = function (p__13188,body){
var vec__13190 = p__13188;
var method = cljs.core.nth.call(null,vec__13190,(0),null);
var action = cljs.core.nth.call(null,vec__13190,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to13187 = function (p__13188,var_args){
var body = null;
if (arguments.length > 1) {
var G__13191__i = 0, G__13191__a = new Array(arguments.length -  1);
while (G__13191__i < G__13191__a.length) {G__13191__a[G__13191__i] = arguments[G__13191__i + 1]; ++G__13191__i;}
  body = new cljs.core.IndexedSeq(G__13191__a,0);
} 
return form_to13187__delegate.call(this,p__13188,body);};
form_to13187.cljs$lang$maxFixedArity = 1;
form_to13187.cljs$lang$applyTo = (function (arglist__13192){
var p__13188 = cljs.core.first(arglist__13192);
var body = cljs.core.rest(arglist__13192);
return form_to13187__delegate(p__13188,body);
});
form_to13187.cljs$core$IFn$_invoke$arity$variadic = form_to13187__delegate;
return form_to13187;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13187);

//# sourceMappingURL=core.js.map