// Compiled by ClojureScript 0.0-2985 {}
goog.provide('rum');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
var last_id_12872 = cljs.core.volatile_BANG_.call(null,(0));
rum.next_id = ((function (last_id_12872){
return (function next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_12872,(cljs.core._deref.call(null,last_id_12872) + (1)));
});})(last_id_12872))
;
rum.state = (function state(comp){
return (comp.props[":rum/state"]);
});
rum.id = (function id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.state.call(null,comp)));
});
rum.fns = (function fns(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
/**
 * @param {...*} var_args
 */
rum.call_all = (function() { 
var call_all__delegate = function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
};
var call_all = function (state,fns,var_args){
var args = null;
if (arguments.length > 2) {
var G__12873__i = 0, G__12873__a = new Array(arguments.length -  2);
while (G__12873__i < G__12873__a.length) {G__12873__a[G__12873__i] = arguments[G__12873__i + 2]; ++G__12873__i;}
  args = new cljs.core.IndexedSeq(G__12873__a,0);
} 
return call_all__delegate.call(this,state,fns,args);};
call_all.cljs$lang$maxFixedArity = 2;
call_all.cljs$lang$applyTo = (function (arglist__12874){
var state = cljs.core.first(arglist__12874);
arglist__12874 = cljs.core.next(arglist__12874);
var fns = cljs.core.first(arglist__12874);
var args = cljs.core.rest(arglist__12874);
return call_all__delegate(state,fns,args);
});
call_all.cljs$core$IFn$_invoke$arity$variadic = call_all__delegate;
return call_all;
})()
;
rum.build_class = (function build_class(classes,display_name){
var init = rum.fns.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.fns.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.fns.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.fns.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.fns.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.fns.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.fns.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__12876_SHARP_,p2__12875_SHARP_){
return p2__12875_SHARP_.call(null,p1__12876_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.fns.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.fns.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.fns.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.call_all.call(null,(props[":rum/state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
return React.createClass({"componentDidUpdate": ((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "displayName": display_name, "componentWillUnmount": ((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (p1__12878_SHARP_,p2__12877_SHARP_){
return p2__12877_SHARP_.call(null,old_state,p1__12878_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
,next_state,transfer_state);
return (next_props[":rum/state"] = cljs.core.volatile_BANG_.call(null,next_state__$1));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_.call(null,should_update))?cljs.core.constantly.call(null,true):((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_props[":rum/state"]));
var or__3926__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (p1__12879_SHARP_){
return p1__12879_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
,should_update);
if(cljs.core.truth_(or__3926__auto__)){
return or__3926__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var state = rum.state.call(null,this$);
var vec__12881 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__12881,(0),null);
var next_state = cljs.core.nth.call(null,vec__12881,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "componentWillUpdate": ((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var new_state = (next_props[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.next_id.call(null)], null),props__GT_state.call(null,props));
return (props[":rum/state"] = cljs.core.volatile_BANG_.call(null,state));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "componentDidMount": ((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "componentWillMount": ((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
)});
});
rum.schedule = (function (){var and__3914__auto__ = typeof window !== 'undefined';
if(and__3914__auto__){
var or__3926__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3926__auto__)){
return or__3926__auto__;
} else {
var or__3926__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3926__auto____$1)){
return or__3926__auto____$1;
} else {
var or__3926__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3926__auto____$2)){
return or__3926__auto____$2;
} else {
var or__3926__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__3926__auto____$3)){
return or__3926__auto____$3;
} else {
return ((function (or__3926__auto____$3,or__3926__auto____$2,or__3926__auto____$1,or__3926__auto__,and__3914__auto__){
return (function (p1__12882_SHARP_){
return setTimeout(p1__12882_SHARP_,(16));
});
;})(or__3926__auto____$3,or__3926__auto____$2,or__3926__auto____$1,or__3926__auto__,and__3914__auto__))
}
}
}
}
} else {
return and__3914__auto__;
}
})();
rum.compare_by = (function compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.empty_queue = cljs.core.sorted_set_by.call(null,rum.compare_by.call(null,rum.id));
rum.render_queue = cljs.core.volatile_BANG_.call(null,rum.empty_queue);
rum.render = (function render(){
var queue = cljs.core.deref.call(null,rum.render_queue);
cljs.core.vreset_BANG_.call(null,rum.render_queue,rum.empty_queue);

var seq__12889 = cljs.core.seq.call(null,queue);
var chunk__12891 = null;
var count__12892 = (0);
var i__12893 = (0);
while(true){
if((i__12893 < count__12892)){
var comp = cljs.core._nth.call(null,chunk__12891,i__12893);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__12895 = seq__12889;
var G__12896 = chunk__12891;
var G__12897 = count__12892;
var G__12898 = (i__12893 + (1));
seq__12889 = G__12895;
chunk__12891 = G__12896;
count__12892 = G__12897;
i__12893 = G__12898;
continue;
} else {
var G__12899 = seq__12889;
var G__12900 = chunk__12891;
var G__12901 = count__12892;
var G__12902 = (i__12893 + (1));
seq__12889 = G__12899;
chunk__12891 = G__12900;
count__12892 = G__12901;
i__12893 = G__12902;
continue;
}
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__12889);
if(temp__4406__auto__){
var seq__12889__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12889__$1)){
var c__4713__auto__ = cljs.core.chunk_first.call(null,seq__12889__$1);
var G__12903 = cljs.core.chunk_rest.call(null,seq__12889__$1);
var G__12904 = c__4713__auto__;
var G__12905 = cljs.core.count.call(null,c__4713__auto__);
var G__12906 = (0);
seq__12889 = G__12903;
chunk__12891 = G__12904;
count__12892 = G__12905;
i__12893 = G__12906;
continue;
} else {
var comp = cljs.core.first.call(null,seq__12889__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__12907 = cljs.core.next.call(null,seq__12889__$1);
var G__12908 = null;
var G__12909 = (0);
var G__12910 = (0);
seq__12889 = G__12907;
chunk__12891 = G__12908;
count__12892 = G__12909;
i__12893 = G__12910;
continue;
} else {
var G__12911 = cljs.core.next.call(null,seq__12889__$1);
var G__12912 = null;
var G__12913 = (0);
var G__12914 = (0);
seq__12889 = G__12911;
chunk__12891 = G__12912;
count__12892 = G__12913;
i__12893 = G__12914;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.request_render = (function request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.render_queue))){
rum.schedule.call(null,rum.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.render_queue),component));
});
rum.mount = (function mount(component,node){
return React.render(component,node);
});
rum.render__GT_mixin = (function render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.render_state__GT_mixin = (function render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.args__GT_state = (function args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
/**
 * @param {...*} var_args
 */
rum.element = (function() { 
var element__delegate = function (class$,state,p__12915){
var vec__12917 = p__12915;
var props = cljs.core.nth.call(null,vec__12917,(0),null);
var props__$1 = (function (){var or__3926__auto__ = props;
if(cljs.core.truth_(or__3926__auto__)){
return or__3926__auto__;
} else {
return {};
}
})();
(props__$1[":rum/state"] = state);

return React.createElement(class$,props__$1);
};
var element = function (class$,state,var_args){
var p__12915 = null;
if (arguments.length > 2) {
var G__12918__i = 0, G__12918__a = new Array(arguments.length -  2);
while (G__12918__i < G__12918__a.length) {G__12918__a[G__12918__i] = arguments[G__12918__i + 2]; ++G__12918__i;}
  p__12915 = new cljs.core.IndexedSeq(G__12918__a,0);
} 
return element__delegate.call(this,class$,state,p__12915);};
element.cljs$lang$maxFixedArity = 2;
element.cljs$lang$applyTo = (function (arglist__12919){
var class$ = cljs.core.first(arglist__12919);
arglist__12919 = cljs.core.next(arglist__12919);
var state = cljs.core.first(arglist__12919);
var p__12915 = cljs.core.rest(arglist__12919);
return element__delegate(class$,state,p__12915);
});
element.cljs$core$IFn$_invoke$arity$variadic = element__delegate;
return element;
})()
;
rum.ctor__GT_class = (function ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 * @param {...*} var_args
 */
rum.local = (function() { 
var local__delegate = function (initial,p__12920){
var vec__12922 = p__12920;
var key = cljs.core.nth.call(null,vec__12922,(0),null);
var key__$1 = (function (){var or__3926__auto__ = key;
if(cljs.core.truth_(or__3926__auto__)){
return or__3926__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__12922,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__12922,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__12922,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__12922,key){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,component);
});})(local_state,component,key__$1,vec__12922,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__12922,key))
], null);
};
var local = function (initial,var_args){
var p__12920 = null;
if (arguments.length > 1) {
var G__12923__i = 0, G__12923__a = new Array(arguments.length -  1);
while (G__12923__i < G__12923__a.length) {G__12923__a[G__12923__i] = arguments[G__12923__i + 1]; ++G__12923__i;}
  p__12920 = new cljs.core.IndexedSeq(G__12923__a,0);
} 
return local__delegate.call(this,initial,p__12920);};
local.cljs$lang$maxFixedArity = 1;
local.cljs$lang$applyTo = (function (arglist__12924){
var initial = cljs.core.first(arglist__12924);
var p__12920 = cljs.core.rest(arglist__12924);
return local__delegate(initial,p__12920);
});
local.cljs$core$IFn$_invoke$arity$variadic = local__delegate;
return local;
})()
;
rum.reactive_key = (function reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_12925 = rum._STAR_reactions_STAR_;
rum._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__12926 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__12926,(0),null);
var next_state = cljs.core.nth.call(null,vec__12926,(1),null);
var new_reactions = cljs.core.deref.call(null,rum._STAR_reactions_STAR_);
var key = rum.reactive_key.call(null,state);
var seq__12927_12939 = cljs.core.seq.call(null,old_reactions);
var chunk__12928_12940 = null;
var count__12929_12941 = (0);
var i__12930_12942 = (0);
while(true){
if((i__12930_12942 < count__12929_12941)){
var ref_12943 = cljs.core._nth.call(null,chunk__12928_12940,i__12930_12942);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_12943)){
} else {
cljs.core.remove_watch.call(null,ref_12943,key);
}

var G__12944 = seq__12927_12939;
var G__12945 = chunk__12928_12940;
var G__12946 = count__12929_12941;
var G__12947 = (i__12930_12942 + (1));
seq__12927_12939 = G__12944;
chunk__12928_12940 = G__12945;
count__12929_12941 = G__12946;
i__12930_12942 = G__12947;
continue;
} else {
var temp__4406__auto___12948 = cljs.core.seq.call(null,seq__12927_12939);
if(temp__4406__auto___12948){
var seq__12927_12949__$1 = temp__4406__auto___12948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12927_12949__$1)){
var c__4713__auto___12950 = cljs.core.chunk_first.call(null,seq__12927_12949__$1);
var G__12951 = cljs.core.chunk_rest.call(null,seq__12927_12949__$1);
var G__12952 = c__4713__auto___12950;
var G__12953 = cljs.core.count.call(null,c__4713__auto___12950);
var G__12954 = (0);
seq__12927_12939 = G__12951;
chunk__12928_12940 = G__12952;
count__12929_12941 = G__12953;
i__12930_12942 = G__12954;
continue;
} else {
var ref_12955 = cljs.core.first.call(null,seq__12927_12949__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_12955)){
} else {
cljs.core.remove_watch.call(null,ref_12955,key);
}

var G__12956 = cljs.core.next.call(null,seq__12927_12949__$1);
var G__12957 = null;
var G__12958 = (0);
var G__12959 = (0);
seq__12927_12939 = G__12956;
chunk__12928_12940 = G__12957;
count__12929_12941 = G__12958;
i__12930_12942 = G__12959;
continue;
}
} else {
}
}
break;
}

var seq__12931_12960 = cljs.core.seq.call(null,new_reactions);
var chunk__12932_12961 = null;
var count__12933_12962 = (0);
var i__12934_12963 = (0);
while(true){
if((i__12934_12963 < count__12933_12962)){
var ref_12964 = cljs.core._nth.call(null,chunk__12932_12961,i__12934_12963);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_12964)){
} else {
cljs.core.add_watch.call(null,ref_12964,key,((function (seq__12931_12960,chunk__12932_12961,count__12933_12962,i__12934_12963,ref_12964,comp,old_reactions,vec__12926,dom,next_state,new_reactions,key,_STAR_reactions_STAR_12925){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,comp);
});})(seq__12931_12960,chunk__12932_12961,count__12933_12962,i__12934_12963,ref_12964,comp,old_reactions,vec__12926,dom,next_state,new_reactions,key,_STAR_reactions_STAR_12925))
);
}

var G__12965 = seq__12931_12960;
var G__12966 = chunk__12932_12961;
var G__12967 = count__12933_12962;
var G__12968 = (i__12934_12963 + (1));
seq__12931_12960 = G__12965;
chunk__12932_12961 = G__12966;
count__12933_12962 = G__12967;
i__12934_12963 = G__12968;
continue;
} else {
var temp__4406__auto___12969 = cljs.core.seq.call(null,seq__12931_12960);
if(temp__4406__auto___12969){
var seq__12931_12970__$1 = temp__4406__auto___12969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12931_12970__$1)){
var c__4713__auto___12971 = cljs.core.chunk_first.call(null,seq__12931_12970__$1);
var G__12972 = cljs.core.chunk_rest.call(null,seq__12931_12970__$1);
var G__12973 = c__4713__auto___12971;
var G__12974 = cljs.core.count.call(null,c__4713__auto___12971);
var G__12975 = (0);
seq__12931_12960 = G__12972;
chunk__12932_12961 = G__12973;
count__12933_12962 = G__12974;
i__12934_12963 = G__12975;
continue;
} else {
var ref_12976 = cljs.core.first.call(null,seq__12931_12970__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_12976)){
} else {
cljs.core.add_watch.call(null,ref_12976,key,((function (seq__12931_12960,chunk__12932_12961,count__12933_12962,i__12934_12963,ref_12976,seq__12931_12970__$1,temp__4406__auto___12969,comp,old_reactions,vec__12926,dom,next_state,new_reactions,key,_STAR_reactions_STAR_12925){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,comp);
});})(seq__12931_12960,chunk__12932_12961,count__12933_12962,i__12934_12963,ref_12976,seq__12931_12970__$1,temp__4406__auto___12969,comp,old_reactions,vec__12926,dom,next_state,new_reactions,key,_STAR_reactions_STAR_12925))
);
}

var G__12977 = cljs.core.next.call(null,seq__12931_12970__$1);
var G__12978 = null;
var G__12979 = (0);
var G__12980 = (0);
seq__12931_12960 = G__12977;
chunk__12932_12961 = G__12978;
count__12933_12962 = G__12979;
i__12934_12963 = G__12980;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum._STAR_reactions_STAR_ = _STAR_reactions_STAR_12925;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_12981 = rum.reactive_key.call(null,state);
var seq__12935_12982 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__12936_12983 = null;
var count__12937_12984 = (0);
var i__12938_12985 = (0);
while(true){
if((i__12938_12985 < count__12937_12984)){
var ref_12986 = cljs.core._nth.call(null,chunk__12936_12983,i__12938_12985);
cljs.core.remove_watch.call(null,ref_12986,key_12981);

var G__12987 = seq__12935_12982;
var G__12988 = chunk__12936_12983;
var G__12989 = count__12937_12984;
var G__12990 = (i__12938_12985 + (1));
seq__12935_12982 = G__12987;
chunk__12936_12983 = G__12988;
count__12937_12984 = G__12989;
i__12938_12985 = G__12990;
continue;
} else {
var temp__4406__auto___12991 = cljs.core.seq.call(null,seq__12935_12982);
if(temp__4406__auto___12991){
var seq__12935_12992__$1 = temp__4406__auto___12991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12935_12992__$1)){
var c__4713__auto___12993 = cljs.core.chunk_first.call(null,seq__12935_12992__$1);
var G__12994 = cljs.core.chunk_rest.call(null,seq__12935_12992__$1);
var G__12995 = c__4713__auto___12993;
var G__12996 = cljs.core.count.call(null,c__4713__auto___12993);
var G__12997 = (0);
seq__12935_12982 = G__12994;
chunk__12936_12983 = G__12995;
count__12937_12984 = G__12996;
i__12938_12985 = G__12997;
continue;
} else {
var ref_12998 = cljs.core.first.call(null,seq__12935_12992__$1);
cljs.core.remove_watch.call(null,ref_12998,key_12981);

var G__12999 = cljs.core.next.call(null,seq__12935_12992__$1);
var G__13000 = null;
var G__13001 = (0);
var G__13002 = (0);
seq__12935_12982 = G__12999;
chunk__12936_12983 = G__13000;
count__12937_12984 = G__13001;
i__12938_12985 = G__13002;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.react = (function react(ref){
cljs.core._vreset_BANG_.call(null,rum._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
*/
rum.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
rum.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.LensCursor.cljs$lang$type = true;

rum.LensCursor.cljs$lang$ctorStr = "rum/LensCursor";

rum.LensCursor.cljs$lang$ctorPrWriter = (function (this__4513__auto__,writer__4514__auto__,opt__4515__auto__){
return cljs.core._write.call(null,writer__4514__auto__,"rum/LensCursor");
});

rum.__GT_LensCursor = (function __GT_LensCursor(parent,getter,setter){
return (new rum.LensCursor(parent,getter,setter));
});

rum.cursor = (function cursor(ref,path){
var getter = (function (p1__13003_SHARP_){
return cljs.core.get_in.call(null,p1__13003_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__13004_SHARP_,p2__13005_SHARP_){
return cljs.core.assoc_in.call(null,p1__13004_SHARP_,path,p2__13005_SHARP_);
});})(getter))
;
if((ref instanceof rum.LensCursor)){
return (new rum.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.LensCursor(ref,getter,setter));
}
});
rum.deref_args = (function deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__13006_SHARP_){
if((function (){var G__13008 = p1__13006_SHARP_;
if(G__13008){
var bit__4607__auto__ = (G__13008.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4607__auto__) || (G__13008.cljs$core$IDeref$)){
return true;
} else {
if((!G__13008.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13008);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__13008);
}
})()){
return cljs.core.deref.call(null,p1__13006_SHARP_);
} else {
return p1__13006_SHARP_;
}
}),xs);
});
rum.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__13009 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__13009,(0),null);
var next_state = cljs.core.nth.call(null,vec__13009,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.cursored_key = (function cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__13010_13026 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__13012_13027 = null;
var count__13013_13028 = (0);
var i__13014_13029 = (0);
while(true){
if((i__13014_13029 < count__13013_13028)){
var arg_13030 = cljs.core._nth.call(null,chunk__13012_13027,i__13014_13029);
if((function (){var G__13016 = arg_13030;
if(G__13016){
var bit__4607__auto__ = (G__13016.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4607__auto__) || (G__13016.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13016.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13016);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13016);
}
})()){
cljs.core.add_watch.call(null,arg_13030,rum.cursored_key.call(null,state),((function (seq__13010_13026,chunk__13012_13027,count__13013_13028,i__13014_13029,arg_13030){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__13010_13026,chunk__13012_13027,count__13013_13028,i__13014_13029,arg_13030))
);

var G__13031 = seq__13010_13026;
var G__13032 = chunk__13012_13027;
var G__13033 = count__13013_13028;
var G__13034 = (i__13014_13029 + (1));
seq__13010_13026 = G__13031;
chunk__13012_13027 = G__13032;
count__13013_13028 = G__13033;
i__13014_13029 = G__13034;
continue;
} else {
var G__13035 = seq__13010_13026;
var G__13036 = chunk__13012_13027;
var G__13037 = count__13013_13028;
var G__13038 = (i__13014_13029 + (1));
seq__13010_13026 = G__13035;
chunk__13012_13027 = G__13036;
count__13013_13028 = G__13037;
i__13014_13029 = G__13038;
continue;
}
} else {
var temp__4406__auto___13039 = cljs.core.seq.call(null,seq__13010_13026);
if(temp__4406__auto___13039){
var seq__13010_13040__$1 = temp__4406__auto___13039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13010_13040__$1)){
var c__4713__auto___13041 = cljs.core.chunk_first.call(null,seq__13010_13040__$1);
var G__13042 = cljs.core.chunk_rest.call(null,seq__13010_13040__$1);
var G__13043 = c__4713__auto___13041;
var G__13044 = cljs.core.count.call(null,c__4713__auto___13041);
var G__13045 = (0);
seq__13010_13026 = G__13042;
chunk__13012_13027 = G__13043;
count__13013_13028 = G__13044;
i__13014_13029 = G__13045;
continue;
} else {
var arg_13046 = cljs.core.first.call(null,seq__13010_13040__$1);
if((function (){var G__13017 = arg_13046;
if(G__13017){
var bit__4607__auto__ = (G__13017.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4607__auto__) || (G__13017.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13017.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13017);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13017);
}
})()){
cljs.core.add_watch.call(null,arg_13046,rum.cursored_key.call(null,state),((function (seq__13010_13026,chunk__13012_13027,count__13013_13028,i__13014_13029,arg_13046,seq__13010_13040__$1,temp__4406__auto___13039){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__13010_13026,chunk__13012_13027,count__13013_13028,i__13014_13029,arg_13046,seq__13010_13040__$1,temp__4406__auto___13039))
);

var G__13047 = cljs.core.next.call(null,seq__13010_13040__$1);
var G__13048 = null;
var G__13049 = (0);
var G__13050 = (0);
seq__13010_13026 = G__13047;
chunk__13012_13027 = G__13048;
count__13013_13028 = G__13049;
i__13014_13029 = G__13050;
continue;
} else {
var G__13051 = cljs.core.next.call(null,seq__13010_13040__$1);
var G__13052 = null;
var G__13053 = (0);
var G__13054 = (0);
seq__13010_13026 = G__13051;
chunk__13012_13027 = G__13052;
count__13013_13028 = G__13053;
i__13014_13029 = G__13054;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__13018_13055 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__13020_13056 = null;
var count__13021_13057 = (0);
var i__13022_13058 = (0);
while(true){
if((i__13022_13058 < count__13021_13057)){
var arg_13059 = cljs.core._nth.call(null,chunk__13020_13056,i__13022_13058);
if((function (){var G__13024 = arg_13059;
if(G__13024){
var bit__4607__auto__ = (G__13024.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4607__auto__) || (G__13024.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13024.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13024);
}
})()){
cljs.core.remove_watch.call(null,arg_13059,rum.cursored_key.call(null,state));

var G__13060 = seq__13018_13055;
var G__13061 = chunk__13020_13056;
var G__13062 = count__13021_13057;
var G__13063 = (i__13022_13058 + (1));
seq__13018_13055 = G__13060;
chunk__13020_13056 = G__13061;
count__13021_13057 = G__13062;
i__13022_13058 = G__13063;
continue;
} else {
var G__13064 = seq__13018_13055;
var G__13065 = chunk__13020_13056;
var G__13066 = count__13021_13057;
var G__13067 = (i__13022_13058 + (1));
seq__13018_13055 = G__13064;
chunk__13020_13056 = G__13065;
count__13021_13057 = G__13066;
i__13022_13058 = G__13067;
continue;
}
} else {
var temp__4406__auto___13068 = cljs.core.seq.call(null,seq__13018_13055);
if(temp__4406__auto___13068){
var seq__13018_13069__$1 = temp__4406__auto___13068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13018_13069__$1)){
var c__4713__auto___13070 = cljs.core.chunk_first.call(null,seq__13018_13069__$1);
var G__13071 = cljs.core.chunk_rest.call(null,seq__13018_13069__$1);
var G__13072 = c__4713__auto___13070;
var G__13073 = cljs.core.count.call(null,c__4713__auto___13070);
var G__13074 = (0);
seq__13018_13055 = G__13071;
chunk__13020_13056 = G__13072;
count__13021_13057 = G__13073;
i__13022_13058 = G__13074;
continue;
} else {
var arg_13075 = cljs.core.first.call(null,seq__13018_13069__$1);
if((function (){var G__13025 = arg_13075;
if(G__13025){
var bit__4607__auto__ = (G__13025.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4607__auto__) || (G__13025.cljs$core$IWatchable$)){
return true;
} else {
if((!G__13025.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13025);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__13025);
}
})()){
cljs.core.remove_watch.call(null,arg_13075,rum.cursored_key.call(null,state));

var G__13076 = cljs.core.next.call(null,seq__13018_13069__$1);
var G__13077 = null;
var G__13078 = (0);
var G__13079 = (0);
seq__13018_13055 = G__13076;
chunk__13020_13056 = G__13077;
count__13021_13057 = G__13078;
i__13022_13058 = G__13079;
continue;
} else {
var G__13080 = cljs.core.next.call(null,seq__13018_13069__$1);
var G__13081 = null;
var G__13082 = (0);
var G__13083 = (0);
seq__13018_13055 = G__13080;
chunk__13020_13056 = G__13081;
count__13021_13057 = G__13082;
i__13022_13058 = G__13083;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=rum.js.map