// Compiled by ClojureScript 0.0-2985 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_13282 = null;
if(cljs.core.truth_((function (){var and__3914__auto__ = repl_conn_13282;
if(cljs.core.truth_(and__3914__auto__)){
return !(weasel.repl.alive_QMARK_.call(null));
} else {
return and__3914__auto__;
}
})())){
weasel.repl.connect.call(null,null);
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map