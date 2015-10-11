// Compiled by ClojureScript 0.0-2985 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.async.DeferredList');
goog.require('goog.Uri');
goog.require('clojure.string');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__6585_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6585_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){
var sheets = document.styleSheets;
var seq__6590 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6591 = null;
var count__6592 = (0);
var i__6593 = (0);
while(true){
if((i__6593 < count__6592)){
var s = cljs.core._nth.call(null,chunk__6591,i__6593);
var temp__4406__auto___6594 = (sheets[s]);
if(cljs.core.truth_(temp__4406__auto___6594)){
var sheet_6595 = temp__4406__auto___6594;
var temp__4406__auto___6596__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6595.href,changed);
if(cljs.core.truth_(temp__4406__auto___6596__$1)){
var href_uri_6597 = temp__4406__auto___6596__$1;
sheet_6595.ownerNode.href = href_uri_6597.makeUnique().toString();
} else {
}
} else {
}

var G__6598 = seq__6590;
var G__6599 = chunk__6591;
var G__6600 = count__6592;
var G__6601 = (i__6593 + (1));
seq__6590 = G__6598;
chunk__6591 = G__6599;
count__6592 = G__6600;
i__6593 = G__6601;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__6590);
if(temp__4406__auto__){
var seq__6590__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6590__$1)){
var c__4713__auto__ = cljs.core.chunk_first.call(null,seq__6590__$1);
var G__6602 = cljs.core.chunk_rest.call(null,seq__6590__$1);
var G__6603 = c__4713__auto__;
var G__6604 = cljs.core.count.call(null,c__4713__auto__);
var G__6605 = (0);
seq__6590 = G__6602;
chunk__6591 = G__6603;
count__6592 = G__6604;
i__6593 = G__6605;
continue;
} else {
var s = cljs.core.first.call(null,seq__6590__$1);
var temp__4406__auto___6606__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4406__auto___6606__$1)){
var sheet_6607 = temp__4406__auto___6606__$1;
var temp__4406__auto___6608__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6607.href,changed);
if(cljs.core.truth_(temp__4406__auto___6608__$2)){
var href_uri_6609 = temp__4406__auto___6608__$2;
sheet_6607.ownerNode.href = href_uri_6609.makeUnique().toString();
} else {
}
} else {
}

var G__6610 = cljs.core.next.call(null,seq__6590__$1);
var G__6611 = null;
var G__6612 = (0);
var G__6613 = (0);
seq__6590 = G__6610;
chunk__6591 = G__6611;
count__6592 = G__6612;
i__6593 = G__6613;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){
var images = document.images;
var seq__6618 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6619 = null;
var count__6620 = (0);
var i__6621 = (0);
while(true){
if((i__6621 < count__6620)){
var s = cljs.core._nth.call(null,chunk__6619,i__6621);
var temp__4406__auto___6622 = (images[s]);
if(cljs.core.truth_(temp__4406__auto___6622)){
var image_6623 = temp__4406__auto___6622;
var temp__4406__auto___6624__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6623.src,changed);
if(cljs.core.truth_(temp__4406__auto___6624__$1)){
var href_uri_6625 = temp__4406__auto___6624__$1;
image_6623.src = href_uri_6625.makeUnique().toString();
} else {
}
} else {
}

var G__6626 = seq__6618;
var G__6627 = chunk__6619;
var G__6628 = count__6620;
var G__6629 = (i__6621 + (1));
seq__6618 = G__6626;
chunk__6619 = G__6627;
count__6620 = G__6628;
i__6621 = G__6629;
continue;
} else {
var temp__4406__auto__ = cljs.core.seq.call(null,seq__6618);
if(temp__4406__auto__){
var seq__6618__$1 = temp__4406__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6618__$1)){
var c__4713__auto__ = cljs.core.chunk_first.call(null,seq__6618__$1);
var G__6630 = cljs.core.chunk_rest.call(null,seq__6618__$1);
var G__6631 = c__4713__auto__;
var G__6632 = cljs.core.count.call(null,c__4713__auto__);
var G__6633 = (0);
seq__6618 = G__6630;
chunk__6619 = G__6631;
count__6620 = G__6632;
i__6621 = G__6633;
continue;
} else {
var s = cljs.core.first.call(null,seq__6618__$1);
var temp__4406__auto___6634__$1 = (images[s]);
if(cljs.core.truth_(temp__4406__auto___6634__$1)){
var image_6635 = temp__4406__auto___6634__$1;
var temp__4406__auto___6636__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6635.src,changed);
if(cljs.core.truth_(temp__4406__auto___6636__$2)){
var href_uri_6637 = temp__4406__auto___6636__$2;
image_6635.src = href_uri_6637.makeUnique().toString();
} else {
}
} else {
}

var G__6638 = cljs.core.next.call(null,seq__6618__$1);
var G__6639 = null;
var G__6640 = (0);
var G__6641 = (0);
seq__6618 = G__6638;
chunk__6619 = G__6639;
count__6620 = G__6640;
i__6621 = G__6641;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__6644){
var map__6646 = p__6644;
var map__6646__$1 = ((cljs.core.seq_QMARK_.call(null,map__6646))?cljs.core.apply.call(null,cljs.core.hash_map,map__6646):map__6646);
var on_jsload = cljs.core.get.call(null,map__6646__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6646,map__6646__$1,on_jsload){
return (function (p1__6642_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6642_SHARP_,".js");
});})(map__6646,map__6646__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6646,map__6646__$1,on_jsload){
return (function (p1__6643_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6643_SHARP_).makeUnique());
});})(js_files,map__6646,map__6646__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6646,map__6646__$1,on_jsload){
return (function() { 
var G__6647__delegate = function (_){
return on_jsload.call(null);
};
var G__6647 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6648__i = 0, G__6648__a = new Array(arguments.length -  0);
while (G__6648__i < G__6648__a.length) {G__6648__a[G__6648__i] = arguments[G__6648__i + 0]; ++G__6648__i;}
  _ = new cljs.core.IndexedSeq(G__6648__a,0);
} 
return G__6647__delegate.call(this,_);};
G__6647.cljs$lang$maxFixedArity = 0;
G__6647.cljs$lang$applyTo = (function (arglist__6649){
var _ = cljs.core.seq(arglist__6649);
return G__6647__delegate(_);
});
G__6647.cljs$core$IFn$_invoke$arity$variadic = G__6647__delegate;
return G__6647;
})()
;})(js_files,map__6646,map__6646__$1,on_jsload))
,((function (js_files,map__6646,map__6646__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6646,map__6646__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6654_6658 = cljs.core.seq.call(null,things_to_log);
var chunk__6655_6659 = null;
var count__6656_6660 = (0);
var i__6657_6661 = (0);
while(true){
if((i__6657_6661 < count__6656_6660)){
var t_6662 = cljs.core._nth.call(null,chunk__6655_6659,i__6657_6661);
console.log(t_6662);

var G__6663 = seq__6654_6658;
var G__6664 = chunk__6655_6659;
var G__6665 = count__6656_6660;
var G__6666 = (i__6657_6661 + (1));
seq__6654_6658 = G__6663;
chunk__6655_6659 = G__6664;
count__6656_6660 = G__6665;
i__6657_6661 = G__6666;
continue;
} else {
var temp__4406__auto___6667 = cljs.core.seq.call(null,seq__6654_6658);
if(temp__4406__auto___6667){
var seq__6654_6668__$1 = temp__4406__auto___6667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6654_6668__$1)){
var c__4713__auto___6669 = cljs.core.chunk_first.call(null,seq__6654_6668__$1);
var G__6670 = cljs.core.chunk_rest.call(null,seq__6654_6668__$1);
var G__6671 = c__4713__auto___6669;
var G__6672 = cljs.core.count.call(null,c__4713__auto___6669);
var G__6673 = (0);
seq__6654_6658 = G__6670;
chunk__6655_6659 = G__6671;
count__6656_6660 = G__6672;
i__6657_6661 = G__6673;
continue;
} else {
var t_6674 = cljs.core.first.call(null,seq__6654_6668__$1);
console.log(t_6674);

var G__6675 = cljs.core.next.call(null,seq__6654_6668__$1);
var G__6676 = null;
var G__6677 = (0);
var G__6678 = (0);
seq__6654_6658 = G__6675;
chunk__6655_6659 = G__6676;
count__6656_6660 = G__6677;
i__6657_6661 = G__6678;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6680 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6680,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6680);

adzerk.boot_reload.reload.reload_css.call(null,G__6680);

adzerk.boot_reload.reload.reload_img.call(null,G__6680);

return G__6680;
});

//# sourceMappingURL=reload.js.map