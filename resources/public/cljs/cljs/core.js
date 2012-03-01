goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3079 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3079))
{return or__3548__auto____3079;
} else
{var or__3548__auto____3080 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3080))
{return or__3548__auto____3080;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__3144 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3081 = this$;

if(cljs.core.truth_(and__3546__auto____3081))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3081;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3082 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3082))
{return or__3548__auto____3082;
} else
{var or__3548__auto____3083 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3083))
{return or__3548__auto____3083;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3145 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3084 = this$;

if(cljs.core.truth_(and__3546__auto____3084))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3084;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3085 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3085))
{return or__3548__auto____3085;
} else
{var or__3548__auto____3086 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3086))
{return or__3548__auto____3086;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3146 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3087 = this$;

if(cljs.core.truth_(and__3546__auto____3087))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3087;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3088 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3088))
{return or__3548__auto____3088;
} else
{var or__3548__auto____3089 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3089))
{return or__3548__auto____3089;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3147 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3090 = this$;

if(cljs.core.truth_(and__3546__auto____3090))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3090;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3091 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3091))
{return or__3548__auto____3091;
} else
{var or__3548__auto____3092 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3092))
{return or__3548__auto____3092;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3148 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3093 = this$;

if(cljs.core.truth_(and__3546__auto____3093))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3093;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3094 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3094))
{return or__3548__auto____3094;
} else
{var or__3548__auto____3095 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3095))
{return or__3548__auto____3095;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3149 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3096 = this$;

if(cljs.core.truth_(and__3546__auto____3096))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3096;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3097 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3097))
{return or__3548__auto____3097;
} else
{var or__3548__auto____3098 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3098))
{return or__3548__auto____3098;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3150 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3099 = this$;

if(cljs.core.truth_(and__3546__auto____3099))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3099;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3100 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3100))
{return or__3548__auto____3100;
} else
{var or__3548__auto____3101 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3101))
{return or__3548__auto____3101;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3151 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3102 = this$;

if(cljs.core.truth_(and__3546__auto____3102))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3102;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3103 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3103))
{return or__3548__auto____3103;
} else
{var or__3548__auto____3104 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3104))
{return or__3548__auto____3104;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3152 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3105 = this$;

if(cljs.core.truth_(and__3546__auto____3105))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3105;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3106 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3106))
{return or__3548__auto____3106;
} else
{var or__3548__auto____3107 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3107))
{return or__3548__auto____3107;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3153 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3108 = this$;

if(cljs.core.truth_(and__3546__auto____3108))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3108;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3109 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3109))
{return or__3548__auto____3109;
} else
{var or__3548__auto____3110 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3110))
{return or__3548__auto____3110;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3154 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3111 = this$;

if(cljs.core.truth_(and__3546__auto____3111))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3111;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3112 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3112))
{return or__3548__auto____3112;
} else
{var or__3548__auto____3113 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3113))
{return or__3548__auto____3113;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3155 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3114 = this$;

if(cljs.core.truth_(and__3546__auto____3114))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3114;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3115 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3115))
{return or__3548__auto____3115;
} else
{var or__3548__auto____3116 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3116))
{return or__3548__auto____3116;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3156 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3117 = this$;

if(cljs.core.truth_(and__3546__auto____3117))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3117;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3118 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{var or__3548__auto____3119 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3119))
{return or__3548__auto____3119;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3157 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3120 = this$;

if(cljs.core.truth_(and__3546__auto____3120))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3120;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3121 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{var or__3548__auto____3122 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3122))
{return or__3548__auto____3122;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3158 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3123 = this$;

if(cljs.core.truth_(and__3546__auto____3123))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3123;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3124 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{var or__3548__auto____3125 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3125))
{return or__3548__auto____3125;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3159 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3126 = this$;

if(cljs.core.truth_(and__3546__auto____3126))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3126;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3127 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{var or__3548__auto____3128 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3128))
{return or__3548__auto____3128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3160 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3129 = this$;

if(cljs.core.truth_(and__3546__auto____3129))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3129;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3130 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
} else
{var or__3548__auto____3131 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3131))
{return or__3548__auto____3131;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3161 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3132 = this$;

if(cljs.core.truth_(and__3546__auto____3132))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3132;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3133 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{var or__3548__auto____3134 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3162 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3135 = this$;

if(cljs.core.truth_(and__3546__auto____3135))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3135;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3136 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{var or__3548__auto____3137 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3163 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3138 = this$;

if(cljs.core.truth_(and__3546__auto____3138))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3138;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3139 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{var or__3548__auto____3140 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3164 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3141 = this$;

if(cljs.core.truth_(and__3546__auto____3141))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3141;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3142 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{var or__3548__auto____3143 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__3144.call(this,this$);
case  2 :
return _invoke__3145.call(this,this$,a);
case  3 :
return _invoke__3146.call(this,this$,a,b);
case  4 :
return _invoke__3147.call(this,this$,a,b,c);
case  5 :
return _invoke__3148.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3149.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3150.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3151.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3152.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3153.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3154.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3155.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3156.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3157.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3158.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3159.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3160.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3161.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3162.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3163.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3164.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3166 = coll;

if(cljs.core.truth_(and__3546__auto____3166))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3166;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3167 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3167))
{return or__3548__auto____3167;
} else
{var or__3548__auto____3168 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3169 = coll;

if(cljs.core.truth_(and__3546__auto____3169))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3169;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3170 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{var or__3548__auto____3171 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3172 = coll;

if(cljs.core.truth_(and__3546__auto____3172))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3172;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3173 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{var or__3548__auto____3174 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3181 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3175 = coll;

if(cljs.core.truth_(and__3546__auto____3175))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3175;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3176 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{var or__3548__auto____3177 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3182 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3178 = coll;

if(cljs.core.truth_(and__3546__auto____3178))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3178;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3179 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{var or__3548__auto____3180 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3181.call(this,coll,n);
case  3 :
return _nth__3182.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3184 = coll;

if(cljs.core.truth_(and__3546__auto____3184))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3184;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3185 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{var or__3548__auto____3186 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3187 = coll;

if(cljs.core.truth_(and__3546__auto____3187))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3187;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3188 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{var or__3548__auto____3189 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3196 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3190 = o;

if(cljs.core.truth_(and__3546__auto____3190))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3190;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3191 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{var or__3548__auto____3192 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3197 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3193 = o;

if(cljs.core.truth_(and__3546__auto____3193))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3193;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3194 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{var or__3548__auto____3195 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3196.call(this,o,k);
case  3 :
return _lookup__3197.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3199 = coll;

if(cljs.core.truth_(and__3546__auto____3199))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3199;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3200 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{var or__3548__auto____3201 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3202 = coll;

if(cljs.core.truth_(and__3546__auto____3202))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3202;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3203 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{var or__3548__auto____3204 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3205 = coll;

if(cljs.core.truth_(and__3546__auto____3205))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3205;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3206 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{var or__3548__auto____3207 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3208 = coll;

if(cljs.core.truth_(and__3546__auto____3208))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3208;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3209 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3211 = coll;

if(cljs.core.truth_(and__3546__auto____3211))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3211;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3212 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{var or__3548__auto____3213 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3214 = coll;

if(cljs.core.truth_(and__3546__auto____3214))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3214;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3215 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{var or__3548__auto____3216 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3217 = coll;

if(cljs.core.truth_(and__3546__auto____3217))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3217;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3218 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{var or__3548__auto____3219 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3220 = o;

if(cljs.core.truth_(and__3546__auto____3220))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3220;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3221 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3221))
{return or__3548__auto____3221;
} else
{var or__3548__auto____3222 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3222))
{return or__3548__auto____3222;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3223 = o;

if(cljs.core.truth_(and__3546__auto____3223))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3223;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3224 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3224))
{return or__3548__auto____3224;
} else
{var or__3548__auto____3225 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3225))
{return or__3548__auto____3225;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3226 = o;

if(cljs.core.truth_(and__3546__auto____3226))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3226;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3227 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3227))
{return or__3548__auto____3227;
} else
{var or__3548__auto____3228 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3229 = o;

if(cljs.core.truth_(and__3546__auto____3229))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3229;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3230 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3230))
{return or__3548__auto____3230;
} else
{var or__3548__auto____3231 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3238 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3232 = coll;

if(cljs.core.truth_(and__3546__auto____3232))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3232;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3233 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3233))
{return or__3548__auto____3233;
} else
{var or__3548__auto____3234 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3239 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3235 = coll;

if(cljs.core.truth_(and__3546__auto____3235))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3235;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3236 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3236))
{return or__3548__auto____3236;
} else
{var or__3548__auto____3237 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3237))
{return or__3548__auto____3237;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3238.call(this,coll,f);
case  3 :
return _reduce__3239.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3241 = o;

if(cljs.core.truth_(and__3546__auto____3241))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3241;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3242 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3242))
{return or__3548__auto____3242;
} else
{var or__3548__auto____3243 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3243))
{return or__3548__auto____3243;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3244 = o;

if(cljs.core.truth_(and__3546__auto____3244))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3244;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3245 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3245))
{return or__3548__auto____3245;
} else
{var or__3548__auto____3246 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3246))
{return or__3548__auto____3246;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3247 = o;

if(cljs.core.truth_(and__3546__auto____3247))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3247;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3248 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3248))
{return or__3548__auto____3248;
} else
{var or__3548__auto____3249 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3249))
{return or__3548__auto____3249;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3250 = o;

if(cljs.core.truth_(and__3546__auto____3250))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3250;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3251 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3251))
{return or__3548__auto____3251;
} else
{var or__3548__auto____3252 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3252))
{return or__3548__auto____3252;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3253 = d;

if(cljs.core.truth_(and__3546__auto____3253))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3253;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3254 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3254))
{return or__3548__auto____3254;
} else
{var or__3548__auto____3255 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3255))
{return or__3548__auto____3255;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3256 = this$;

if(cljs.core.truth_(and__3546__auto____3256))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3256;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3257 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3257))
{return or__3548__auto____3257;
} else
{var or__3548__auto____3258 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3258))
{return or__3548__auto____3258;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3259 = this$;

if(cljs.core.truth_(and__3546__auto____3259))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3259;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3260 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3260))
{return or__3548__auto____3260;
} else
{var or__3548__auto____3261 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3261))
{return or__3548__auto____3261;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3262 = this$;

if(cljs.core.truth_(and__3546__auto____3262))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3262;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3263 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3263))
{return or__3548__auto____3263;
} else
{var or__3548__auto____3264 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3264))
{return or__3548__auto____3264;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3265 = null;
var G__3265__3266 = (function (o,k){
return null;
});
var G__3265__3267 = (function (o,k,not_found){
return not_found;
});
G__3265 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3265__3266.call(this,o,k);
case  3 :
return G__3265__3267.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3265;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3269 = null;
var G__3269__3270 = (function (_,f){
return f.call(null);
});
var G__3269__3271 = (function (_,f,start){
return start;
});
G__3269 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3269__3270.call(this,_,f);
case  3 :
return G__3269__3271.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3269;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3273 = null;
var G__3273__3274 = (function (_,n){
return null;
});
var G__3273__3275 = (function (_,n,not_found){
return not_found;
});
G__3273 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3273__3274.call(this,_,n);
case  3 :
return G__3273__3275.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3273;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3283 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3277 = cljs.core._nth.call(null,cicoll,0);
var n__3278 = 1;

while(true){
if(cljs.core.truth_((n__3278 < cljs.core._count.call(null,cicoll))))
{{
var G__3287 = f.call(null,val__3277,cljs.core._nth.call(null,cicoll,n__3278));
var G__3288 = (n__3278 + 1);
val__3277 = G__3287;
n__3278 = G__3288;
continue;
}
} else
{return val__3277;
}
break;
}
}
});
var ci_reduce__3284 = (function (cicoll,f,val){
var val__3279 = val;
var n__3280 = 0;

while(true){
if(cljs.core.truth_((n__3280 < cljs.core._count.call(null,cicoll))))
{{
var G__3289 = f.call(null,val__3279,cljs.core._nth.call(null,cicoll,n__3280));
var G__3290 = (n__3280 + 1);
val__3279 = G__3289;
n__3280 = G__3290;
continue;
}
} else
{return val__3279;
}
break;
}
});
var ci_reduce__3285 = (function (cicoll,f,val,idx){
var val__3281 = val;
var n__3282 = idx;

while(true){
if(cljs.core.truth_((n__3282 < cljs.core._count.call(null,cicoll))))
{{
var G__3291 = f.call(null,val__3281,cljs.core._nth.call(null,cicoll,n__3282));
var G__3292 = (n__3282 + 1);
val__3281 = G__3291;
n__3282 = G__3292;
continue;
}
} else
{return val__3281;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3283.call(this,cicoll,f);
case  3 :
return ci_reduce__3284.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3285.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3293 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3306 = null;
var G__3306__3307 = (function (_,f){
var this__3294 = this;
return cljs.core.ci_reduce.call(null,this__3294.a,f,(this__3294.a[this__3294.i]),(this__3294.i + 1));
});
var G__3306__3308 = (function (_,f,start){
var this__3295 = this;
return cljs.core.ci_reduce.call(null,this__3295.a,f,start,this__3295.i);
});
G__3306 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3306__3307.call(this,_,f);
case  3 :
return G__3306__3308.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3306;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3296 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3297 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3310 = null;
var G__3310__3311 = (function (coll,n){
var this__3298 = this;
var i__3299 = (n + this__3298.i);

if(cljs.core.truth_((i__3299 < this__3298.a.length)))
{return (this__3298.a[i__3299]);
} else
{return null;
}
});
var G__3310__3312 = (function (coll,n,not_found){
var this__3300 = this;
var i__3301 = (n + this__3300.i);

if(cljs.core.truth_((i__3301 < this__3300.a.length)))
{return (this__3300.a[i__3301]);
} else
{return not_found;
}
});
G__3310 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3310__3311.call(this,coll,n);
case  3 :
return G__3310__3312.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3310;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3302 = this;
return (this__3302.a.length - this__3302.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3303 = this;
return (this__3303.a[this__3303.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3304 = this;
if(cljs.core.truth_(((this__3304.i + 1) < this__3304.a.length)))
{return (new cljs.core.IndexedSeq(this__3304.a,(this__3304.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3305 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3314 = null;
var G__3314__3315 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3314__3316 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3314 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3314__3315.call(this,array,f);
case  3 :
return G__3314__3316.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3314;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3318 = null;
var G__3318__3319 = (function (array,k){
return (array[k]);
});
var G__3318__3320 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3318 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3318__3319.call(this,array,k);
case  3 :
return G__3318__3320.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3318;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3322 = null;
var G__3322__3323 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3322__3324 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3322 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3322__3323.call(this,array,n);
case  3 :
return G__3322__3324.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3322;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3326))
{var s__3327 = temp__3698__auto____3326;

return cljs.core._first.call(null,s__3327);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3328 = cljs.core.next.call(null,s);
s = G__3328;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3329 = cljs.core.seq.call(null,x);
var n__3330 = 0;

while(true){
if(cljs.core.truth_(s__3329))
{{
var G__3331 = cljs.core.next.call(null,s__3329);
var G__3332 = (n__3330 + 1);
s__3329 = G__3331;
n__3330 = G__3332;
continue;
}
} else
{return n__3330;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3333 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3334 = (function() { 
var G__3336__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3337 = conj.call(null,coll,x);
var G__3338 = cljs.core.first.call(null,xs);
var G__3339 = cljs.core.next.call(null,xs);
coll = G__3337;
x = G__3338;
xs = G__3339;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3336 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3336__delegate.call(this, coll, x, xs);
};
G__3336.cljs$lang$maxFixedArity = 2;
G__3336.cljs$lang$applyTo = (function (arglist__3340){
var coll = cljs.core.first(arglist__3340);
var x = cljs.core.first(cljs.core.next(arglist__3340));
var xs = cljs.core.rest(cljs.core.next(arglist__3340));
return G__3336__delegate.call(this, coll, x, xs);
});
return G__3336;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3333.call(this,coll,x);
default:
return conj__3334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3334.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3341 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3342 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3341.call(this,coll,n);
case  3 :
return nth__3342.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3344 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3345 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3344.call(this,o,k);
case  3 :
return get__3345.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3348 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3349 = (function() { 
var G__3351__delegate = function (coll,k,v,kvs){
while(true){
var ret__3347 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3352 = ret__3347;
var G__3353 = cljs.core.first.call(null,kvs);
var G__3354 = cljs.core.second.call(null,kvs);
var G__3355 = cljs.core.nnext.call(null,kvs);
coll = G__3352;
k = G__3353;
v = G__3354;
kvs = G__3355;
continue;
}
} else
{return ret__3347;
}
break;
}
};
var G__3351 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3351__delegate.call(this, coll, k, v, kvs);
};
G__3351.cljs$lang$maxFixedArity = 3;
G__3351.cljs$lang$applyTo = (function (arglist__3356){
var coll = cljs.core.first(arglist__3356);
var k = cljs.core.first(cljs.core.next(arglist__3356));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3356)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3356)));
return G__3351__delegate.call(this, coll, k, v, kvs);
});
return G__3351;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3348.call(this,coll,k,v);
default:
return assoc__3349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3349.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3358 = (function (coll){
return coll;
});
var dissoc__3359 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3360 = (function() { 
var G__3362__delegate = function (coll,k,ks){
while(true){
var ret__3357 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3363 = ret__3357;
var G__3364 = cljs.core.first.call(null,ks);
var G__3365 = cljs.core.next.call(null,ks);
coll = G__3363;
k = G__3364;
ks = G__3365;
continue;
}
} else
{return ret__3357;
}
break;
}
};
var G__3362 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3362__delegate.call(this, coll, k, ks);
};
G__3362.cljs$lang$maxFixedArity = 2;
G__3362.cljs$lang$applyTo = (function (arglist__3366){
var coll = cljs.core.first(arglist__3366);
var k = cljs.core.first(cljs.core.next(arglist__3366));
var ks = cljs.core.rest(cljs.core.next(arglist__3366));
return G__3362__delegate.call(this, coll, k, ks);
});
return G__3362;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3358.call(this,coll);
case  2 :
return dissoc__3359.call(this,coll,k);
default:
return dissoc__3360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3360.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__450__auto____3367 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3368 = x__450__auto____3367;

if(cljs.core.truth_(and__3546__auto____3368))
{var and__3546__auto____3369 = x__450__auto____3367.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3369))
{return cljs.core.not.call(null,x__450__auto____3367.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3369;
}
} else
{return and__3546__auto____3368;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____3367);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3371 = (function (coll){
return coll;
});
var disj__3372 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3373 = (function() { 
var G__3375__delegate = function (coll,k,ks){
while(true){
var ret__3370 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3376 = ret__3370;
var G__3377 = cljs.core.first.call(null,ks);
var G__3378 = cljs.core.next.call(null,ks);
coll = G__3376;
k = G__3377;
ks = G__3378;
continue;
}
} else
{return ret__3370;
}
break;
}
};
var G__3375 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3375__delegate.call(this, coll, k, ks);
};
G__3375.cljs$lang$maxFixedArity = 2;
G__3375.cljs$lang$applyTo = (function (arglist__3379){
var coll = cljs.core.first(arglist__3379);
var k = cljs.core.first(cljs.core.next(arglist__3379));
var ks = cljs.core.rest(cljs.core.next(arglist__3379));
return G__3375__delegate.call(this, coll, k, ks);
});
return G__3375;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3371.call(this,coll);
case  2 :
return disj__3372.call(this,coll,k);
default:
return disj__3373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3373.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3380 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3381 = x__450__auto____3380;

if(cljs.core.truth_(and__3546__auto____3381))
{var and__3546__auto____3382 = x__450__auto____3380.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3382))
{return cljs.core.not.call(null,x__450__auto____3380.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3382;
}
} else
{return and__3546__auto____3381;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____3380);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3383 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3384 = x__450__auto____3383;

if(cljs.core.truth_(and__3546__auto____3384))
{var and__3546__auto____3385 = x__450__auto____3383.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3385))
{return cljs.core.not.call(null,x__450__auto____3383.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3385;
}
} else
{return and__3546__auto____3384;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____3383);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____3386 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3387 = x__450__auto____3386;

if(cljs.core.truth_(and__3546__auto____3387))
{var and__3546__auto____3388 = x__450__auto____3386.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3388))
{return cljs.core.not.call(null,x__450__auto____3386.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3388;
}
} else
{return and__3546__auto____3387;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____3386);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____3389 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3390 = x__450__auto____3389;

if(cljs.core.truth_(and__3546__auto____3390))
{var and__3546__auto____3391 = x__450__auto____3389.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3391))
{return cljs.core.not.call(null,x__450__auto____3389.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3391;
}
} else
{return and__3546__auto____3390;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____3389);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____3392 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3393 = x__450__auto____3392;

if(cljs.core.truth_(and__3546__auto____3393))
{var and__3546__auto____3394 = x__450__auto____3392.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3394))
{return cljs.core.not.call(null,x__450__auto____3392.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3394;
}
} else
{return and__3546__auto____3393;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____3392);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____3395 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3396 = x__450__auto____3395;

if(cljs.core.truth_(and__3546__auto____3396))
{var and__3546__auto____3397 = x__450__auto____3395.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3397))
{return cljs.core.not.call(null,x__450__auto____3395.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3397;
}
} else
{return and__3546__auto____3396;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____3395);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____3398 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3399 = x__450__auto____3398;

if(cljs.core.truth_(and__3546__auto____3399))
{var and__3546__auto____3400 = x__450__auto____3398.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3400))
{return cljs.core.not.call(null,x__450__auto____3398.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3400;
}
} else
{return and__3546__auto____3399;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____3398);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3401 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3401.push(key);
}));
return keys__3401;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__450__auto____3402 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3403 = x__450__auto____3402;

if(cljs.core.truth_(and__3546__auto____3403))
{var and__3546__auto____3404 = x__450__auto____3402.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3404))
{return cljs.core.not.call(null,x__450__auto____3402.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3404;
}
} else
{return and__3546__auto____3403;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____3402);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3405 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3405))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3406 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3406))
{return or__3548__auto____3406;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3405;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3407 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3407))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3407;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3408 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3408))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3408;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3409 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3409))
{return (n == n.toFixed());
} else
{return and__3546__auto____3409;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3410 = coll;

if(cljs.core.truth_(and__3546__auto____3410))
{var and__3546__auto____3411 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3411))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3411;
}
} else
{return and__3546__auto____3410;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3416 = (function (x){
return true;
});
var distinct_QMARK___3417 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3418 = (function() { 
var G__3420__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3412 = cljs.core.set([y,x]);
var xs__3413 = more;

while(true){
var x__3414 = cljs.core.first.call(null,xs__3413);
var etc__3415 = cljs.core.next.call(null,xs__3413);

if(cljs.core.truth_(xs__3413))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3412,x__3414)))
{return false;
} else
{{
var G__3421 = cljs.core.conj.call(null,s__3412,x__3414);
var G__3422 = etc__3415;
s__3412 = G__3421;
xs__3413 = G__3422;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3420 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3420__delegate.call(this, x, y, more);
};
G__3420.cljs$lang$maxFixedArity = 2;
G__3420.cljs$lang$applyTo = (function (arglist__3423){
var x = cljs.core.first(arglist__3423);
var y = cljs.core.first(cljs.core.next(arglist__3423));
var more = cljs.core.rest(cljs.core.next(arglist__3423));
return G__3420__delegate.call(this, x, y, more);
});
return G__3420;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3416.call(this,x);
case  2 :
return distinct_QMARK___3417.call(this,x,y);
default:
return distinct_QMARK___3418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3418.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3424 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3424)))
{return r__3424;
} else
{if(cljs.core.truth_(r__3424))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3426 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3427 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3425 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3425,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3425);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3426.call(this,comp);
case  2 :
return sort__3427.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3429 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3430 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3429.call(this,keyfn,comp);
case  3 :
return sort_by__3430.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3432 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3433 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3432.call(this,f,val);
case  3 :
return reduce__3433.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3439 = (function (f,coll){
var temp__3695__auto____3435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3435))
{var s__3436 = temp__3695__auto____3435;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3436),cljs.core.next.call(null,s__3436));
} else
{return f.call(null);
}
});
var seq_reduce__3440 = (function (f,val,coll){
var val__3437 = val;
var coll__3438 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3438))
{{
var G__3442 = f.call(null,val__3437,cljs.core.first.call(null,coll__3438));
var G__3443 = cljs.core.next.call(null,coll__3438);
val__3437 = G__3442;
coll__3438 = G__3443;
continue;
}
} else
{return val__3437;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3439.call(this,f,val);
case  3 :
return seq_reduce__3440.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3444 = null;
var G__3444__3445 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3444__3446 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3444 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3444__3445.call(this,coll,f);
case  3 :
return G__3444__3446.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3444;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3448 = (function (){
return 0;
});
var _PLUS___3449 = (function (x){
return x;
});
var _PLUS___3450 = (function (x,y){
return (x + y);
});
var _PLUS___3451 = (function() { 
var G__3453__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3453 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3453__delegate.call(this, x, y, more);
};
G__3453.cljs$lang$maxFixedArity = 2;
G__3453.cljs$lang$applyTo = (function (arglist__3454){
var x = cljs.core.first(arglist__3454);
var y = cljs.core.first(cljs.core.next(arglist__3454));
var more = cljs.core.rest(cljs.core.next(arglist__3454));
return G__3453__delegate.call(this, x, y, more);
});
return G__3453;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3448.call(this);
case  1 :
return _PLUS___3449.call(this,x);
case  2 :
return _PLUS___3450.call(this,x,y);
default:
return _PLUS___3451.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3451.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3455 = (function (x){
return (- x);
});
var ___3456 = (function (x,y){
return (x - y);
});
var ___3457 = (function() { 
var G__3459__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3459 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3459__delegate.call(this, x, y, more);
};
G__3459.cljs$lang$maxFixedArity = 2;
G__3459.cljs$lang$applyTo = (function (arglist__3460){
var x = cljs.core.first(arglist__3460);
var y = cljs.core.first(cljs.core.next(arglist__3460));
var more = cljs.core.rest(cljs.core.next(arglist__3460));
return G__3459__delegate.call(this, x, y, more);
});
return G__3459;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3455.call(this,x);
case  2 :
return ___3456.call(this,x,y);
default:
return ___3457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3457.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3461 = (function (){
return 1;
});
var _STAR___3462 = (function (x){
return x;
});
var _STAR___3463 = (function (x,y){
return (x * y);
});
var _STAR___3464 = (function() { 
var G__3466__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3466 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3466__delegate.call(this, x, y, more);
};
G__3466.cljs$lang$maxFixedArity = 2;
G__3466.cljs$lang$applyTo = (function (arglist__3467){
var x = cljs.core.first(arglist__3467);
var y = cljs.core.first(cljs.core.next(arglist__3467));
var more = cljs.core.rest(cljs.core.next(arglist__3467));
return G__3466__delegate.call(this, x, y, more);
});
return G__3466;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3461.call(this);
case  1 :
return _STAR___3462.call(this,x);
case  2 :
return _STAR___3463.call(this,x,y);
default:
return _STAR___3464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3464.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3468 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3469 = (function (x,y){
return (x / y);
});
var _SLASH___3470 = (function() { 
var G__3472__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3472 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3472__delegate.call(this, x, y, more);
};
G__3472.cljs$lang$maxFixedArity = 2;
G__3472.cljs$lang$applyTo = (function (arglist__3473){
var x = cljs.core.first(arglist__3473);
var y = cljs.core.first(cljs.core.next(arglist__3473));
var more = cljs.core.rest(cljs.core.next(arglist__3473));
return G__3472__delegate.call(this, x, y, more);
});
return G__3472;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3468.call(this,x);
case  2 :
return _SLASH___3469.call(this,x,y);
default:
return _SLASH___3470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3470.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3474 = (function (x){
return true;
});
var _LT___3475 = (function (x,y){
return (x < y);
});
var _LT___3476 = (function() { 
var G__3478__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3479 = y;
var G__3480 = cljs.core.first.call(null,more);
var G__3481 = cljs.core.next.call(null,more);
x = G__3479;
y = G__3480;
more = G__3481;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3478 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3478__delegate.call(this, x, y, more);
};
G__3478.cljs$lang$maxFixedArity = 2;
G__3478.cljs$lang$applyTo = (function (arglist__3482){
var x = cljs.core.first(arglist__3482);
var y = cljs.core.first(cljs.core.next(arglist__3482));
var more = cljs.core.rest(cljs.core.next(arglist__3482));
return G__3478__delegate.call(this, x, y, more);
});
return G__3478;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3474.call(this,x);
case  2 :
return _LT___3475.call(this,x,y);
default:
return _LT___3476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3476.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3483 = (function (x){
return true;
});
var _LT__EQ___3484 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3485 = (function() { 
var G__3487__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3488 = y;
var G__3489 = cljs.core.first.call(null,more);
var G__3490 = cljs.core.next.call(null,more);
x = G__3488;
y = G__3489;
more = G__3490;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3487 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3487__delegate.call(this, x, y, more);
};
G__3487.cljs$lang$maxFixedArity = 2;
G__3487.cljs$lang$applyTo = (function (arglist__3491){
var x = cljs.core.first(arglist__3491);
var y = cljs.core.first(cljs.core.next(arglist__3491));
var more = cljs.core.rest(cljs.core.next(arglist__3491));
return G__3487__delegate.call(this, x, y, more);
});
return G__3487;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3483.call(this,x);
case  2 :
return _LT__EQ___3484.call(this,x,y);
default:
return _LT__EQ___3485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3485.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3492 = (function (x){
return true;
});
var _GT___3493 = (function (x,y){
return (x > y);
});
var _GT___3494 = (function() { 
var G__3496__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3497 = y;
var G__3498 = cljs.core.first.call(null,more);
var G__3499 = cljs.core.next.call(null,more);
x = G__3497;
y = G__3498;
more = G__3499;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3496 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3496__delegate.call(this, x, y, more);
};
G__3496.cljs$lang$maxFixedArity = 2;
G__3496.cljs$lang$applyTo = (function (arglist__3500){
var x = cljs.core.first(arglist__3500);
var y = cljs.core.first(cljs.core.next(arglist__3500));
var more = cljs.core.rest(cljs.core.next(arglist__3500));
return G__3496__delegate.call(this, x, y, more);
});
return G__3496;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3492.call(this,x);
case  2 :
return _GT___3493.call(this,x,y);
default:
return _GT___3494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3494.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3501 = (function (x){
return true;
});
var _GT__EQ___3502 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3503 = (function() { 
var G__3505__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3506 = y;
var G__3507 = cljs.core.first.call(null,more);
var G__3508 = cljs.core.next.call(null,more);
x = G__3506;
y = G__3507;
more = G__3508;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3505 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3505__delegate.call(this, x, y, more);
};
G__3505.cljs$lang$maxFixedArity = 2;
G__3505.cljs$lang$applyTo = (function (arglist__3509){
var x = cljs.core.first(arglist__3509);
var y = cljs.core.first(cljs.core.next(arglist__3509));
var more = cljs.core.rest(cljs.core.next(arglist__3509));
return G__3505__delegate.call(this, x, y, more);
});
return G__3505;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3501.call(this,x);
case  2 :
return _GT__EQ___3502.call(this,x,y);
default:
return _GT__EQ___3503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3503.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3510 = (function (x){
return x;
});
var max__3511 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3512 = (function() { 
var G__3514__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3514 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3514__delegate.call(this, x, y, more);
};
G__3514.cljs$lang$maxFixedArity = 2;
G__3514.cljs$lang$applyTo = (function (arglist__3515){
var x = cljs.core.first(arglist__3515);
var y = cljs.core.first(cljs.core.next(arglist__3515));
var more = cljs.core.rest(cljs.core.next(arglist__3515));
return G__3514__delegate.call(this, x, y, more);
});
return G__3514;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3510.call(this,x);
case  2 :
return max__3511.call(this,x,y);
default:
return max__3512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3512.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3516 = (function (x){
return x;
});
var min__3517 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3518 = (function() { 
var G__3520__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3520 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3520__delegate.call(this, x, y, more);
};
G__3520.cljs$lang$maxFixedArity = 2;
G__3520.cljs$lang$applyTo = (function (arglist__3521){
var x = cljs.core.first(arglist__3521);
var y = cljs.core.first(cljs.core.next(arglist__3521));
var more = cljs.core.rest(cljs.core.next(arglist__3521));
return G__3520__delegate.call(this, x, y, more);
});
return G__3520;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3516.call(this,x);
case  2 :
return min__3517.call(this,x,y);
default:
return min__3518.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3518.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3522 = (n % d);

return cljs.core.fix.call(null,((n - rem__3522) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3523 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3523));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3524 = (function (){
return Math.random.call(null);
});
var rand__3525 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3524.call(this);
case  1 :
return rand__3525.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3527 = (function (x){
return true;
});
var _EQ__EQ___3528 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3529 = (function() { 
var G__3531__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3532 = y;
var G__3533 = cljs.core.first.call(null,more);
var G__3534 = cljs.core.next.call(null,more);
x = G__3532;
y = G__3533;
more = G__3534;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3531 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3531__delegate.call(this, x, y, more);
};
G__3531.cljs$lang$maxFixedArity = 2;
G__3531.cljs$lang$applyTo = (function (arglist__3535){
var x = cljs.core.first(arglist__3535);
var y = cljs.core.first(cljs.core.next(arglist__3535));
var more = cljs.core.rest(cljs.core.next(arglist__3535));
return G__3531__delegate.call(this, x, y, more);
});
return G__3531;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3527.call(this,x);
case  2 :
return _EQ__EQ___3528.call(this,x,y);
default:
return _EQ__EQ___3529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3529.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3536 = n;
var xs__3537 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3538 = xs__3537;

if(cljs.core.truth_(and__3546__auto____3538))
{return (n__3536 > 0);
} else
{return and__3546__auto____3538;
}
})()))
{{
var G__3539 = (n__3536 - 1);
var G__3540 = cljs.core.next.call(null,xs__3537);
n__3536 = G__3539;
xs__3537 = G__3540;
continue;
}
} else
{return xs__3537;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3545 = null;
var G__3545__3546 = (function (coll,n){
var temp__3695__auto____3541 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3541))
{var xs__3542 = temp__3695__auto____3541;

return cljs.core.first.call(null,xs__3542);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3545__3547 = (function (coll,n,not_found){
var temp__3695__auto____3543 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3543))
{var xs__3544 = temp__3695__auto____3543;

return cljs.core.first.call(null,xs__3544);
} else
{return not_found;
}
});
G__3545 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3545__3546.call(this,coll,n);
case  3 :
return G__3545__3547.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3545;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3549 = (function (){
return "";
});
var str_STAR___3550 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3551 = (function() { 
var G__3553__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3554 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3555 = cljs.core.next.call(null,more);
sb = G__3554;
more = G__3555;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3553 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3553__delegate.call(this, x, ys);
};
G__3553.cljs$lang$maxFixedArity = 1;
G__3553.cljs$lang$applyTo = (function (arglist__3556){
var x = cljs.core.first(arglist__3556);
var ys = cljs.core.rest(arglist__3556);
return G__3553__delegate.call(this, x, ys);
});
return G__3553;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3549.call(this);
case  1 :
return str_STAR___3550.call(this,x);
default:
return str_STAR___3551.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3551.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3557 = (function (){
return "";
});
var str__3558 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3559 = (function() { 
var G__3561__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3561 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3561__delegate.call(this, x, ys);
};
G__3561.cljs$lang$maxFixedArity = 1;
G__3561.cljs$lang$applyTo = (function (arglist__3562){
var x = cljs.core.first(arglist__3562);
var ys = cljs.core.rest(arglist__3562);
return G__3561__delegate.call(this, x, ys);
});
return G__3561;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3557.call(this);
case  1 :
return str__3558.call(this,x);
default:
return str__3559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3559.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3563 = (function (s,start){
return s.substring(start);
});
var subs__3564 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3563.call(this,s,start);
case  3 :
return subs__3564.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3566 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__3567 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3566.call(this,ns);
case  2 :
return symbol__3567.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3569 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__3570 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3569.call(this,ns);
case  2 :
return keyword__3570.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3572 = cljs.core.seq.call(null,x);
var ys__3573 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3572 === null)))
{return (ys__3573 === null);
} else
{if(cljs.core.truth_((ys__3573 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3572),cljs.core.first.call(null,ys__3573))))
{{
var G__3574 = cljs.core.next.call(null,xs__3572);
var G__3575 = cljs.core.next.call(null,ys__3573);
xs__3572 = G__3574;
ys__3573 = G__3575;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3576_SHARP_,p2__3577_SHARP_){
return cljs.core.hash_combine.call(null,p1__3576_SHARP_,cljs.core.hash.call(null,p2__3577_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3578__3579 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3578__3579))
{var G__3581__3583 = cljs.core.first.call(null,G__3578__3579);
var vec__3582__3584 = G__3581__3583;
var key_name__3585 = cljs.core.nth.call(null,vec__3582__3584,0,null);
var f__3586 = cljs.core.nth.call(null,vec__3582__3584,1,null);
var G__3578__3587 = G__3578__3579;

var G__3581__3588 = G__3581__3583;
var G__3578__3589 = G__3578__3587;

while(true){
var vec__3590__3591 = G__3581__3588;
var key_name__3592 = cljs.core.nth.call(null,vec__3590__3591,0,null);
var f__3593 = cljs.core.nth.call(null,vec__3590__3591,1,null);
var G__3578__3594 = G__3578__3589;

var str_name__3595 = cljs.core.name.call(null,key_name__3592);

obj[str_name__3595] = f__3593;
var temp__3698__auto____3596 = cljs.core.next.call(null,G__3578__3594);

if(cljs.core.truth_(temp__3698__auto____3596))
{var G__3578__3597 = temp__3698__auto____3596;

{
var G__3598 = cljs.core.first.call(null,G__3578__3597);
var G__3599 = G__3578__3597;
G__3581__3588 = G__3598;
G__3578__3589 = G__3599;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3600 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3601 = this;
return (new cljs.core.List(this__3601.meta,o,coll,(this__3601.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3602 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3603 = this;
return this__3603.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3604 = this;
return this__3604.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3605 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3606 = this;
return this__3606.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3607 = this;
return this__3607.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3608 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3609 = this;
return (new cljs.core.List(meta,this__3609.first,this__3609.rest,this__3609.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3610 = this;
return this__3610.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3611 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3612 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3613 = this;
return (new cljs.core.List(this__3613.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3614 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3615 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3616 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3617 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3618 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3619 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3620 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3621 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3622 = this;
return this__3622.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3623 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3624){
var items = cljs.core.seq( arglist__3624 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3625 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3626 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3627 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3628 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3628.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3629 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3630 = this;
return this__3630.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3631 = this;
if(cljs.core.truth_((this__3631.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3631.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3632 = this;
return this__3632.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3633 = this;
return (new cljs.core.Cons(meta,this__3633.first,this__3633.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3634 = null;
var G__3634__3635 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3634__3636 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3634 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3634__3635.call(this,string,f);
case  3 :
return G__3634__3636.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3634;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3638 = null;
var G__3638__3639 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3638__3640 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3638 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3638__3639.call(this,string,k);
case  3 :
return G__3638__3640.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3638;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3642 = null;
var G__3642__3643 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3642__3644 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3642 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3642__3643.call(this,string,n);
case  3 :
return G__3642__3644.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3642;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3652 = null;
var G__3652__3653 = (function (tsym3646,coll){
var tsym3646__3648 = this;

var this$__3649 = tsym3646__3648;

return cljs.core.get.call(null,coll,this$__3649.toString());
});
var G__3652__3654 = (function (tsym3647,coll,not_found){
var tsym3647__3650 = this;

var this$__3651 = tsym3647__3650;

return cljs.core.get.call(null,coll,this$__3651.toString(),not_found);
});
G__3652 = function(tsym3647,coll,not_found){
switch(arguments.length){
case  2 :
return G__3652__3653.call(this,tsym3647,coll);
case  3 :
return G__3652__3654.call(this,tsym3647,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3652;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3656 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3656;
} else
{lazy_seq.x = x__3656.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3657 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3659 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3660 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3660.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3661 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3662 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3663 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3664 = this;
return this__3664.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3665 = this;
return (new cljs.core.LazySeq(meta,this__3665.realized,this__3665.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3666 = cljs.core.array.call(null);

var s__3667 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3667)))
{ary__3666.push(cljs.core.first.call(null,s__3667));
{
var G__3668 = cljs.core.next.call(null,s__3667);
s__3667 = G__3668;
continue;
}
} else
{return ary__3666;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3669 = s;
var i__3670 = n;
var sum__3671 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3672 = (i__3670 > 0);

if(cljs.core.truth_(and__3546__auto____3672))
{return cljs.core.seq.call(null,s__3669);
} else
{return and__3546__auto____3672;
}
})()))
{{
var G__3673 = cljs.core.next.call(null,s__3669);
var G__3674 = (i__3670 - 1);
var G__3675 = (sum__3671 + 1);
s__3669 = G__3673;
i__3670 = G__3674;
sum__3671 = G__3675;
continue;
}
} else
{return sum__3671;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3679 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3680 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3681 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3676 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3676))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3676),concat.call(null,cljs.core.rest.call(null,s__3676),y));
} else
{return y;
}
})));
});
var concat__3682 = (function() { 
var G__3684__delegate = function (x,y,zs){
var cat__3678 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3677 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3677))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3677),cat.call(null,cljs.core.rest.call(null,xys__3677),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3678.call(null,concat.call(null,x,y),zs);
};
var G__3684 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3684__delegate.call(this, x, y, zs);
};
G__3684.cljs$lang$maxFixedArity = 2;
G__3684.cljs$lang$applyTo = (function (arglist__3685){
var x = cljs.core.first(arglist__3685);
var y = cljs.core.first(cljs.core.next(arglist__3685));
var zs = cljs.core.rest(cljs.core.next(arglist__3685));
return G__3684__delegate.call(this, x, y, zs);
});
return G__3684;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3679.call(this);
case  1 :
return concat__3680.call(this,x);
case  2 :
return concat__3681.call(this,x,y);
default:
return concat__3682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3682.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3686 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3687 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3688 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3689 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3690 = (function() { 
var G__3692__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3692 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3692__delegate.call(this, a, b, c, d, more);
};
G__3692.cljs$lang$maxFixedArity = 4;
G__3692.cljs$lang$applyTo = (function (arglist__3693){
var a = cljs.core.first(arglist__3693);
var b = cljs.core.first(cljs.core.next(arglist__3693));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3693)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3693))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3693))));
return G__3692__delegate.call(this, a, b, c, d, more);
});
return G__3692;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3686.call(this,a);
case  2 :
return list_STAR___3687.call(this,a,b);
case  3 :
return list_STAR___3688.call(this,a,b,c);
case  4 :
return list_STAR___3689.call(this,a,b,c,d);
default:
return list_STAR___3690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3690.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3703 = (function (f,args){
var fixed_arity__3694 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3694 + 1)) <= fixed_arity__3694)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3704 = (function (f,x,args){
var arglist__3695 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3696 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3695,fixed_arity__3696) <= fixed_arity__3696)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3695));
} else
{return f.cljs$lang$applyTo(arglist__3695);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3695));
}
});
var apply__3705 = (function (f,x,y,args){
var arglist__3697 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3698 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3697,fixed_arity__3698) <= fixed_arity__3698)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3697));
} else
{return f.cljs$lang$applyTo(arglist__3697);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3697));
}
});
var apply__3706 = (function (f,x,y,z,args){
var arglist__3699 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3700 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3699,fixed_arity__3700) <= fixed_arity__3700)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3699));
} else
{return f.cljs$lang$applyTo(arglist__3699);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3699));
}
});
var apply__3707 = (function() { 
var G__3709__delegate = function (f,a,b,c,d,args){
var arglist__3701 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3702 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3701,fixed_arity__3702) <= fixed_arity__3702)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3701));
} else
{return f.cljs$lang$applyTo(arglist__3701);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3701));
}
};
var G__3709 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3709__delegate.call(this, f, a, b, c, d, args);
};
G__3709.cljs$lang$maxFixedArity = 5;
G__3709.cljs$lang$applyTo = (function (arglist__3710){
var f = cljs.core.first(arglist__3710);
var a = cljs.core.first(cljs.core.next(arglist__3710));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3710)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3710))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3710)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3710)))));
return G__3709__delegate.call(this, f, a, b, c, d, args);
});
return G__3709;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3703.call(this,f,a);
case  3 :
return apply__3704.call(this,f,a,b);
case  4 :
return apply__3705.call(this,f,a,b,c);
case  5 :
return apply__3706.call(this,f,a,b,c,d);
default:
return apply__3707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3707.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3711){
var obj = cljs.core.first(arglist__3711);
var f = cljs.core.first(cljs.core.next(arglist__3711));
var args = cljs.core.rest(cljs.core.next(arglist__3711));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3712 = (function (x){
return false;
});
var not_EQ___3713 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3714 = (function() { 
var G__3716__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3716 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3716__delegate.call(this, x, y, more);
};
G__3716.cljs$lang$maxFixedArity = 2;
G__3716.cljs$lang$applyTo = (function (arglist__3717){
var x = cljs.core.first(arglist__3717);
var y = cljs.core.first(cljs.core.next(arglist__3717));
var more = cljs.core.rest(cljs.core.next(arglist__3717));
return G__3716__delegate.call(this, x, y, more);
});
return G__3716;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3712.call(this,x);
case  2 :
return not_EQ___3713.call(this,x,y);
default:
return not_EQ___3714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3714.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3718 = pred;
var G__3719 = cljs.core.next.call(null,coll);
pred = G__3718;
coll = G__3719;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3720 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3720))
{return or__3548__auto____3720;
} else
{{
var G__3721 = pred;
var G__3722 = cljs.core.next.call(null,coll);
pred = G__3721;
coll = G__3722;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3723 = null;
var G__3723__3724 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3723__3725 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3723__3726 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3723__3727 = (function() { 
var G__3729__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3729 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3729__delegate.call(this, x, y, zs);
};
G__3729.cljs$lang$maxFixedArity = 2;
G__3729.cljs$lang$applyTo = (function (arglist__3730){
var x = cljs.core.first(arglist__3730);
var y = cljs.core.first(cljs.core.next(arglist__3730));
var zs = cljs.core.rest(cljs.core.next(arglist__3730));
return G__3729__delegate.call(this, x, y, zs);
});
return G__3729;
})()
;
G__3723 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3723__3724.call(this);
case  1 :
return G__3723__3725.call(this,x);
case  2 :
return G__3723__3726.call(this,x,y);
default:
return G__3723__3727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3723.cljs$lang$maxFixedArity = 2;
G__3723.cljs$lang$applyTo = G__3723__3727.cljs$lang$applyTo;
return G__3723;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3731__delegate = function (args){
return x;
};
var G__3731 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3731__delegate.call(this, args);
};
G__3731.cljs$lang$maxFixedArity = 0;
G__3731.cljs$lang$applyTo = (function (arglist__3732){
var args = cljs.core.seq( arglist__3732 );;
return G__3731__delegate.call(this, args);
});
return G__3731;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3736 = (function (){
return cljs.core.identity;
});
var comp__3737 = (function (f){
return f;
});
var comp__3738 = (function (f,g){
return (function() {
var G__3742 = null;
var G__3742__3743 = (function (){
return f.call(null,g.call(null));
});
var G__3742__3744 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3742__3745 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3742__3746 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3742__3747 = (function() { 
var G__3749__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3749 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3749__delegate.call(this, x, y, z, args);
};
G__3749.cljs$lang$maxFixedArity = 3;
G__3749.cljs$lang$applyTo = (function (arglist__3750){
var x = cljs.core.first(arglist__3750);
var y = cljs.core.first(cljs.core.next(arglist__3750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3750)));
return G__3749__delegate.call(this, x, y, z, args);
});
return G__3749;
})()
;
G__3742 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3742__3743.call(this);
case  1 :
return G__3742__3744.call(this,x);
case  2 :
return G__3742__3745.call(this,x,y);
case  3 :
return G__3742__3746.call(this,x,y,z);
default:
return G__3742__3747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3742.cljs$lang$maxFixedArity = 3;
G__3742.cljs$lang$applyTo = G__3742__3747.cljs$lang$applyTo;
return G__3742;
})()
});
var comp__3739 = (function (f,g,h){
return (function() {
var G__3751 = null;
var G__3751__3752 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3751__3753 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3751__3754 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3751__3755 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3751__3756 = (function() { 
var G__3758__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3758 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3758__delegate.call(this, x, y, z, args);
};
G__3758.cljs$lang$maxFixedArity = 3;
G__3758.cljs$lang$applyTo = (function (arglist__3759){
var x = cljs.core.first(arglist__3759);
var y = cljs.core.first(cljs.core.next(arglist__3759));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3759)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3759)));
return G__3758__delegate.call(this, x, y, z, args);
});
return G__3758;
})()
;
G__3751 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3751__3752.call(this);
case  1 :
return G__3751__3753.call(this,x);
case  2 :
return G__3751__3754.call(this,x,y);
case  3 :
return G__3751__3755.call(this,x,y,z);
default:
return G__3751__3756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3751.cljs$lang$maxFixedArity = 3;
G__3751.cljs$lang$applyTo = G__3751__3756.cljs$lang$applyTo;
return G__3751;
})()
});
var comp__3740 = (function() { 
var G__3760__delegate = function (f1,f2,f3,fs){
var fs__3733 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3761__delegate = function (args){
var ret__3734 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3733),args);
var fs__3735 = cljs.core.next.call(null,fs__3733);

while(true){
if(cljs.core.truth_(fs__3735))
{{
var G__3762 = cljs.core.first.call(null,fs__3735).call(null,ret__3734);
var G__3763 = cljs.core.next.call(null,fs__3735);
ret__3734 = G__3762;
fs__3735 = G__3763;
continue;
}
} else
{return ret__3734;
}
break;
}
};
var G__3761 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3761__delegate.call(this, args);
};
G__3761.cljs$lang$maxFixedArity = 0;
G__3761.cljs$lang$applyTo = (function (arglist__3764){
var args = cljs.core.seq( arglist__3764 );;
return G__3761__delegate.call(this, args);
});
return G__3761;
})()
;
};
var G__3760 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3760__delegate.call(this, f1, f2, f3, fs);
};
G__3760.cljs$lang$maxFixedArity = 3;
G__3760.cljs$lang$applyTo = (function (arglist__3765){
var f1 = cljs.core.first(arglist__3765);
var f2 = cljs.core.first(cljs.core.next(arglist__3765));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3765)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3765)));
return G__3760__delegate.call(this, f1, f2, f3, fs);
});
return G__3760;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3736.call(this);
case  1 :
return comp__3737.call(this,f1);
case  2 :
return comp__3738.call(this,f1,f2);
case  3 :
return comp__3739.call(this,f1,f2,f3);
default:
return comp__3740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3740.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3766 = (function (f,arg1){
return (function() { 
var G__3771__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3771 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3771__delegate.call(this, args);
};
G__3771.cljs$lang$maxFixedArity = 0;
G__3771.cljs$lang$applyTo = (function (arglist__3772){
var args = cljs.core.seq( arglist__3772 );;
return G__3771__delegate.call(this, args);
});
return G__3771;
})()
;
});
var partial__3767 = (function (f,arg1,arg2){
return (function() { 
var G__3773__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3773 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3773__delegate.call(this, args);
};
G__3773.cljs$lang$maxFixedArity = 0;
G__3773.cljs$lang$applyTo = (function (arglist__3774){
var args = cljs.core.seq( arglist__3774 );;
return G__3773__delegate.call(this, args);
});
return G__3773;
})()
;
});
var partial__3768 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3775__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3775 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3775__delegate.call(this, args);
};
G__3775.cljs$lang$maxFixedArity = 0;
G__3775.cljs$lang$applyTo = (function (arglist__3776){
var args = cljs.core.seq( arglist__3776 );;
return G__3775__delegate.call(this, args);
});
return G__3775;
})()
;
});
var partial__3769 = (function() { 
var G__3777__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3778__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3778 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3778__delegate.call(this, args);
};
G__3778.cljs$lang$maxFixedArity = 0;
G__3778.cljs$lang$applyTo = (function (arglist__3779){
var args = cljs.core.seq( arglist__3779 );;
return G__3778__delegate.call(this, args);
});
return G__3778;
})()
;
};
var G__3777 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3777__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3777.cljs$lang$maxFixedArity = 4;
G__3777.cljs$lang$applyTo = (function (arglist__3780){
var f = cljs.core.first(arglist__3780);
var arg1 = cljs.core.first(cljs.core.next(arglist__3780));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3780)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3780))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3780))));
return G__3777__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3777;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3766.call(this,f,arg1);
case  3 :
return partial__3767.call(this,f,arg1,arg2);
case  4 :
return partial__3768.call(this,f,arg1,arg2,arg3);
default:
return partial__3769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3769.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3781 = (function (f,x){
return (function() {
var G__3785 = null;
var G__3785__3786 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3785__3787 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3785__3788 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3785__3789 = (function() { 
var G__3791__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3791 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3791__delegate.call(this, a, b, c, ds);
};
G__3791.cljs$lang$maxFixedArity = 3;
G__3791.cljs$lang$applyTo = (function (arglist__3792){
var a = cljs.core.first(arglist__3792);
var b = cljs.core.first(cljs.core.next(arglist__3792));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3792)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3792)));
return G__3791__delegate.call(this, a, b, c, ds);
});
return G__3791;
})()
;
G__3785 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3785__3786.call(this,a);
case  2 :
return G__3785__3787.call(this,a,b);
case  3 :
return G__3785__3788.call(this,a,b,c);
default:
return G__3785__3789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3785.cljs$lang$maxFixedArity = 3;
G__3785.cljs$lang$applyTo = G__3785__3789.cljs$lang$applyTo;
return G__3785;
})()
});
var fnil__3782 = (function (f,x,y){
return (function() {
var G__3793 = null;
var G__3793__3794 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3793__3795 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3793__3796 = (function() { 
var G__3798__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3798 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3798__delegate.call(this, a, b, c, ds);
};
G__3798.cljs$lang$maxFixedArity = 3;
G__3798.cljs$lang$applyTo = (function (arglist__3799){
var a = cljs.core.first(arglist__3799);
var b = cljs.core.first(cljs.core.next(arglist__3799));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3799)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3799)));
return G__3798__delegate.call(this, a, b, c, ds);
});
return G__3798;
})()
;
G__3793 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3793__3794.call(this,a,b);
case  3 :
return G__3793__3795.call(this,a,b,c);
default:
return G__3793__3796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3793.cljs$lang$maxFixedArity = 3;
G__3793.cljs$lang$applyTo = G__3793__3796.cljs$lang$applyTo;
return G__3793;
})()
});
var fnil__3783 = (function (f,x,y,z){
return (function() {
var G__3800 = null;
var G__3800__3801 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3800__3802 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3800__3803 = (function() { 
var G__3805__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3805 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3805__delegate.call(this, a, b, c, ds);
};
G__3805.cljs$lang$maxFixedArity = 3;
G__3805.cljs$lang$applyTo = (function (arglist__3806){
var a = cljs.core.first(arglist__3806);
var b = cljs.core.first(cljs.core.next(arglist__3806));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3806)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3806)));
return G__3805__delegate.call(this, a, b, c, ds);
});
return G__3805;
})()
;
G__3800 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3800__3801.call(this,a,b);
case  3 :
return G__3800__3802.call(this,a,b,c);
default:
return G__3800__3803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3800.cljs$lang$maxFixedArity = 3;
G__3800.cljs$lang$applyTo = G__3800__3803.cljs$lang$applyTo;
return G__3800;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3781.call(this,f,x);
case  3 :
return fnil__3782.call(this,f,x,y);
case  4 :
return fnil__3783.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3809 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3807 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3807))
{var s__3808 = temp__3698__auto____3807;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3808)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3808)));
} else
{return null;
}
})));
});

return mapi__3809.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3810 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3810))
{var s__3811 = temp__3698__auto____3810;

var x__3812 = f.call(null,cljs.core.first.call(null,s__3811));

if(cljs.core.truth_((x__3812 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3811));
} else
{return cljs.core.cons.call(null,x__3812,keep.call(null,f,cljs.core.rest.call(null,s__3811)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3822 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3819 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3819))
{var s__3820 = temp__3698__auto____3819;

var x__3821 = f.call(null,idx,cljs.core.first.call(null,s__3820));

if(cljs.core.truth_((x__3821 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3820));
} else
{return cljs.core.cons.call(null,x__3821,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3820)));
}
} else
{return null;
}
})));
});

return keepi__3822.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3867 = (function (p){
return (function() {
var ep1 = null;
var ep1__3872 = (function (){
return true;
});
var ep1__3873 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3874 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3829 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3829))
{return p.call(null,y);
} else
{return and__3546__auto____3829;
}
})());
});
var ep1__3875 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3830 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3830))
{var and__3546__auto____3831 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3831))
{return p.call(null,z);
} else
{return and__3546__auto____3831;
}
} else
{return and__3546__auto____3830;
}
})());
});
var ep1__3876 = (function() { 
var G__3878__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3832 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3832))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3832;
}
})());
};
var G__3878 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3878__delegate.call(this, x, y, z, args);
};
G__3878.cljs$lang$maxFixedArity = 3;
G__3878.cljs$lang$applyTo = (function (arglist__3879){
var x = cljs.core.first(arglist__3879);
var y = cljs.core.first(cljs.core.next(arglist__3879));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3879)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3879)));
return G__3878__delegate.call(this, x, y, z, args);
});
return G__3878;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3872.call(this);
case  1 :
return ep1__3873.call(this,x);
case  2 :
return ep1__3874.call(this,x,y);
case  3 :
return ep1__3875.call(this,x,y,z);
default:
return ep1__3876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3876.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3868 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3880 = (function (){
return true;
});
var ep2__3881 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3833 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3833))
{return p2.call(null,x);
} else
{return and__3546__auto____3833;
}
})());
});
var ep2__3882 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3834 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3834))
{var and__3546__auto____3835 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3835))
{var and__3546__auto____3836 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3836))
{return p2.call(null,y);
} else
{return and__3546__auto____3836;
}
} else
{return and__3546__auto____3835;
}
} else
{return and__3546__auto____3834;
}
})());
});
var ep2__3883 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3837 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3837))
{var and__3546__auto____3838 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3838))
{var and__3546__auto____3839 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3839))
{var and__3546__auto____3840 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3840))
{var and__3546__auto____3841 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3841))
{return p2.call(null,z);
} else
{return and__3546__auto____3841;
}
} else
{return and__3546__auto____3840;
}
} else
{return and__3546__auto____3839;
}
} else
{return and__3546__auto____3838;
}
} else
{return and__3546__auto____3837;
}
})());
});
var ep2__3884 = (function() { 
var G__3886__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3842 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3842))
{return cljs.core.every_QMARK_.call(null,(function (p1__3813_SHARP_){
var and__3546__auto____3843 = p1.call(null,p1__3813_SHARP_);

if(cljs.core.truth_(and__3546__auto____3843))
{return p2.call(null,p1__3813_SHARP_);
} else
{return and__3546__auto____3843;
}
}),args);
} else
{return and__3546__auto____3842;
}
})());
};
var G__3886 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3886__delegate.call(this, x, y, z, args);
};
G__3886.cljs$lang$maxFixedArity = 3;
G__3886.cljs$lang$applyTo = (function (arglist__3887){
var x = cljs.core.first(arglist__3887);
var y = cljs.core.first(cljs.core.next(arglist__3887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3887)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3887)));
return G__3886__delegate.call(this, x, y, z, args);
});
return G__3886;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3880.call(this);
case  1 :
return ep2__3881.call(this,x);
case  2 :
return ep2__3882.call(this,x,y);
case  3 :
return ep2__3883.call(this,x,y,z);
default:
return ep2__3884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3884.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3869 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3888 = (function (){
return true;
});
var ep3__3889 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3844 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3844))
{var and__3546__auto____3845 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3845))
{return p3.call(null,x);
} else
{return and__3546__auto____3845;
}
} else
{return and__3546__auto____3844;
}
})());
});
var ep3__3890 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3846 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3846))
{var and__3546__auto____3847 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3847))
{var and__3546__auto____3848 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3848))
{var and__3546__auto____3849 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3849))
{var and__3546__auto____3850 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3850))
{return p3.call(null,y);
} else
{return and__3546__auto____3850;
}
} else
{return and__3546__auto____3849;
}
} else
{return and__3546__auto____3848;
}
} else
{return and__3546__auto____3847;
}
} else
{return and__3546__auto____3846;
}
})());
});
var ep3__3891 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3851 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3851))
{var and__3546__auto____3852 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3852))
{var and__3546__auto____3853 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3853))
{var and__3546__auto____3854 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3854))
{var and__3546__auto____3855 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3855))
{var and__3546__auto____3856 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3856))
{var and__3546__auto____3857 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3857))
{var and__3546__auto____3858 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3858))
{return p3.call(null,z);
} else
{return and__3546__auto____3858;
}
} else
{return and__3546__auto____3857;
}
} else
{return and__3546__auto____3856;
}
} else
{return and__3546__auto____3855;
}
} else
{return and__3546__auto____3854;
}
} else
{return and__3546__auto____3853;
}
} else
{return and__3546__auto____3852;
}
} else
{return and__3546__auto____3851;
}
})());
});
var ep3__3892 = (function() { 
var G__3894__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3859 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3859))
{return cljs.core.every_QMARK_.call(null,(function (p1__3814_SHARP_){
var and__3546__auto____3860 = p1.call(null,p1__3814_SHARP_);

if(cljs.core.truth_(and__3546__auto____3860))
{var and__3546__auto____3861 = p2.call(null,p1__3814_SHARP_);

if(cljs.core.truth_(and__3546__auto____3861))
{return p3.call(null,p1__3814_SHARP_);
} else
{return and__3546__auto____3861;
}
} else
{return and__3546__auto____3860;
}
}),args);
} else
{return and__3546__auto____3859;
}
})());
};
var G__3894 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3894__delegate.call(this, x, y, z, args);
};
G__3894.cljs$lang$maxFixedArity = 3;
G__3894.cljs$lang$applyTo = (function (arglist__3895){
var x = cljs.core.first(arglist__3895);
var y = cljs.core.first(cljs.core.next(arglist__3895));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3895)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3895)));
return G__3894__delegate.call(this, x, y, z, args);
});
return G__3894;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3888.call(this);
case  1 :
return ep3__3889.call(this,x);
case  2 :
return ep3__3890.call(this,x,y);
case  3 :
return ep3__3891.call(this,x,y,z);
default:
return ep3__3892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3892.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3870 = (function() { 
var G__3896__delegate = function (p1,p2,p3,ps){
var ps__3862 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3897 = (function (){
return true;
});
var epn__3898 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3815_SHARP_){
return p1__3815_SHARP_.call(null,x);
}),ps__3862);
});
var epn__3899 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3816_SHARP_){
var and__3546__auto____3863 = p1__3816_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3863))
{return p1__3816_SHARP_.call(null,y);
} else
{return and__3546__auto____3863;
}
}),ps__3862);
});
var epn__3900 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3817_SHARP_){
var and__3546__auto____3864 = p1__3817_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3864))
{var and__3546__auto____3865 = p1__3817_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3865))
{return p1__3817_SHARP_.call(null,z);
} else
{return and__3546__auto____3865;
}
} else
{return and__3546__auto____3864;
}
}),ps__3862);
});
var epn__3901 = (function() { 
var G__3903__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3866 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3866))
{return cljs.core.every_QMARK_.call(null,(function (p1__3818_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3818_SHARP_,args);
}),ps__3862);
} else
{return and__3546__auto____3866;
}
})());
};
var G__3903 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3903__delegate.call(this, x, y, z, args);
};
G__3903.cljs$lang$maxFixedArity = 3;
G__3903.cljs$lang$applyTo = (function (arglist__3904){
var x = cljs.core.first(arglist__3904);
var y = cljs.core.first(cljs.core.next(arglist__3904));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3904)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3904)));
return G__3903__delegate.call(this, x, y, z, args);
});
return G__3903;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3897.call(this);
case  1 :
return epn__3898.call(this,x);
case  2 :
return epn__3899.call(this,x,y);
case  3 :
return epn__3900.call(this,x,y,z);
default:
return epn__3901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3901.cljs$lang$applyTo;
return epn;
})()
};
var G__3896 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3896__delegate.call(this, p1, p2, p3, ps);
};
G__3896.cljs$lang$maxFixedArity = 3;
G__3896.cljs$lang$applyTo = (function (arglist__3905){
var p1 = cljs.core.first(arglist__3905);
var p2 = cljs.core.first(cljs.core.next(arglist__3905));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3905)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3905)));
return G__3896__delegate.call(this, p1, p2, p3, ps);
});
return G__3896;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3867.call(this,p1);
case  2 :
return every_pred__3868.call(this,p1,p2);
case  3 :
return every_pred__3869.call(this,p1,p2,p3);
default:
return every_pred__3870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3870.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3945 = (function (p){
return (function() {
var sp1 = null;
var sp1__3950 = (function (){
return null;
});
var sp1__3951 = (function (x){
return p.call(null,x);
});
var sp1__3952 = (function (x,y){
var or__3548__auto____3907 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3907))
{return or__3548__auto____3907;
} else
{return p.call(null,y);
}
});
var sp1__3953 = (function (x,y,z){
var or__3548__auto____3908 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3908))
{return or__3548__auto____3908;
} else
{var or__3548__auto____3909 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3909))
{return or__3548__auto____3909;
} else
{return p.call(null,z);
}
}
});
var sp1__3954 = (function() { 
var G__3956__delegate = function (x,y,z,args){
var or__3548__auto____3910 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3910))
{return or__3548__auto____3910;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3956 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3956__delegate.call(this, x, y, z, args);
};
G__3956.cljs$lang$maxFixedArity = 3;
G__3956.cljs$lang$applyTo = (function (arglist__3957){
var x = cljs.core.first(arglist__3957);
var y = cljs.core.first(cljs.core.next(arglist__3957));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3957)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3957)));
return G__3956__delegate.call(this, x, y, z, args);
});
return G__3956;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3950.call(this);
case  1 :
return sp1__3951.call(this,x);
case  2 :
return sp1__3952.call(this,x,y);
case  3 :
return sp1__3953.call(this,x,y,z);
default:
return sp1__3954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3954.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3946 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3958 = (function (){
return null;
});
var sp2__3959 = (function (x){
var or__3548__auto____3911 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3911))
{return or__3548__auto____3911;
} else
{return p2.call(null,x);
}
});
var sp2__3960 = (function (x,y){
var or__3548__auto____3912 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3912))
{return or__3548__auto____3912;
} else
{var or__3548__auto____3913 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3913))
{return or__3548__auto____3913;
} else
{var or__3548__auto____3914 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3914))
{return or__3548__auto____3914;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3961 = (function (x,y,z){
var or__3548__auto____3915 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3915))
{return or__3548__auto____3915;
} else
{var or__3548__auto____3916 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3916))
{return or__3548__auto____3916;
} else
{var or__3548__auto____3917 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3917))
{return or__3548__auto____3917;
} else
{var or__3548__auto____3918 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3918))
{return or__3548__auto____3918;
} else
{var or__3548__auto____3919 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3919))
{return or__3548__auto____3919;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3962 = (function() { 
var G__3964__delegate = function (x,y,z,args){
var or__3548__auto____3920 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3920))
{return or__3548__auto____3920;
} else
{return cljs.core.some.call(null,(function (p1__3823_SHARP_){
var or__3548__auto____3921 = p1.call(null,p1__3823_SHARP_);

if(cljs.core.truth_(or__3548__auto____3921))
{return or__3548__auto____3921;
} else
{return p2.call(null,p1__3823_SHARP_);
}
}),args);
}
};
var G__3964 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3964__delegate.call(this, x, y, z, args);
};
G__3964.cljs$lang$maxFixedArity = 3;
G__3964.cljs$lang$applyTo = (function (arglist__3965){
var x = cljs.core.first(arglist__3965);
var y = cljs.core.first(cljs.core.next(arglist__3965));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3965)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3965)));
return G__3964__delegate.call(this, x, y, z, args);
});
return G__3964;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3958.call(this);
case  1 :
return sp2__3959.call(this,x);
case  2 :
return sp2__3960.call(this,x,y);
case  3 :
return sp2__3961.call(this,x,y,z);
default:
return sp2__3962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3962.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3947 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3966 = (function (){
return null;
});
var sp3__3967 = (function (x){
var or__3548__auto____3922 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3922))
{return or__3548__auto____3922;
} else
{var or__3548__auto____3923 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{return p3.call(null,x);
}
}
});
var sp3__3968 = (function (x,y){
var or__3548__auto____3924 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3924))
{return or__3548__auto____3924;
} else
{var or__3548__auto____3925 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3925))
{return or__3548__auto____3925;
} else
{var or__3548__auto____3926 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3926))
{return or__3548__auto____3926;
} else
{var or__3548__auto____3927 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3927))
{return or__3548__auto____3927;
} else
{var or__3548__auto____3928 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3928))
{return or__3548__auto____3928;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3969 = (function (x,y,z){
var or__3548__auto____3929 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{var or__3548__auto____3930 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3930))
{return or__3548__auto____3930;
} else
{var or__3548__auto____3931 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3931))
{return or__3548__auto____3931;
} else
{var or__3548__auto____3932 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3932))
{return or__3548__auto____3932;
} else
{var or__3548__auto____3933 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{var or__3548__auto____3934 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3934))
{return or__3548__auto____3934;
} else
{var or__3548__auto____3935 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{var or__3548__auto____3936 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3970 = (function() { 
var G__3972__delegate = function (x,y,z,args){
var or__3548__auto____3937 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3937))
{return or__3548__auto____3937;
} else
{return cljs.core.some.call(null,(function (p1__3824_SHARP_){
var or__3548__auto____3938 = p1.call(null,p1__3824_SHARP_);

if(cljs.core.truth_(or__3548__auto____3938))
{return or__3548__auto____3938;
} else
{var or__3548__auto____3939 = p2.call(null,p1__3824_SHARP_);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{return p3.call(null,p1__3824_SHARP_);
}
}
}),args);
}
};
var G__3972 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3972__delegate.call(this, x, y, z, args);
};
G__3972.cljs$lang$maxFixedArity = 3;
G__3972.cljs$lang$applyTo = (function (arglist__3973){
var x = cljs.core.first(arglist__3973);
var y = cljs.core.first(cljs.core.next(arglist__3973));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3973)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3973)));
return G__3972__delegate.call(this, x, y, z, args);
});
return G__3972;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3966.call(this);
case  1 :
return sp3__3967.call(this,x);
case  2 :
return sp3__3968.call(this,x,y);
case  3 :
return sp3__3969.call(this,x,y,z);
default:
return sp3__3970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3970.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3948 = (function() { 
var G__3974__delegate = function (p1,p2,p3,ps){
var ps__3940 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3975 = (function (){
return null;
});
var spn__3976 = (function (x){
return cljs.core.some.call(null,(function (p1__3825_SHARP_){
return p1__3825_SHARP_.call(null,x);
}),ps__3940);
});
var spn__3977 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3826_SHARP_){
var or__3548__auto____3941 = p1__3826_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3941))
{return or__3548__auto____3941;
} else
{return p1__3826_SHARP_.call(null,y);
}
}),ps__3940);
});
var spn__3978 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3827_SHARP_){
var or__3548__auto____3942 = p1__3827_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3942))
{return or__3548__auto____3942;
} else
{var or__3548__auto____3943 = p1__3827_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3943))
{return or__3548__auto____3943;
} else
{return p1__3827_SHARP_.call(null,z);
}
}
}),ps__3940);
});
var spn__3979 = (function() { 
var G__3981__delegate = function (x,y,z,args){
var or__3548__auto____3944 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3944))
{return or__3548__auto____3944;
} else
{return cljs.core.some.call(null,(function (p1__3828_SHARP_){
return cljs.core.some.call(null,p1__3828_SHARP_,args);
}),ps__3940);
}
};
var G__3981 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3981__delegate.call(this, x, y, z, args);
};
G__3981.cljs$lang$maxFixedArity = 3;
G__3981.cljs$lang$applyTo = (function (arglist__3982){
var x = cljs.core.first(arglist__3982);
var y = cljs.core.first(cljs.core.next(arglist__3982));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3982)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3982)));
return G__3981__delegate.call(this, x, y, z, args);
});
return G__3981;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3975.call(this);
case  1 :
return spn__3976.call(this,x);
case  2 :
return spn__3977.call(this,x,y);
case  3 :
return spn__3978.call(this,x,y,z);
default:
return spn__3979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3979.cljs$lang$applyTo;
return spn;
})()
};
var G__3974 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3974__delegate.call(this, p1, p2, p3, ps);
};
G__3974.cljs$lang$maxFixedArity = 3;
G__3974.cljs$lang$applyTo = (function (arglist__3983){
var p1 = cljs.core.first(arglist__3983);
var p2 = cljs.core.first(cljs.core.next(arglist__3983));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3983)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3983)));
return G__3974__delegate.call(this, p1, p2, p3, ps);
});
return G__3974;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3945.call(this,p1);
case  2 :
return some_fn__3946.call(this,p1,p2);
case  3 :
return some_fn__3947.call(this,p1,p2,p3);
default:
return some_fn__3948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3948.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3996 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3984 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3984))
{var s__3985 = temp__3698__auto____3984;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3985)),map.call(null,f,cljs.core.rest.call(null,s__3985)));
} else
{return null;
}
})));
});
var map__3997 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3986 = cljs.core.seq.call(null,c1);
var s2__3987 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3988 = s1__3986;

if(cljs.core.truth_(and__3546__auto____3988))
{return s2__3987;
} else
{return and__3546__auto____3988;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3986),cljs.core.first.call(null,s2__3987)),map.call(null,f,cljs.core.rest.call(null,s1__3986),cljs.core.rest.call(null,s2__3987)));
} else
{return null;
}
})));
});
var map__3998 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3989 = cljs.core.seq.call(null,c1);
var s2__3990 = cljs.core.seq.call(null,c2);
var s3__3991 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3992 = s1__3989;

if(cljs.core.truth_(and__3546__auto____3992))
{var and__3546__auto____3993 = s2__3990;

if(cljs.core.truth_(and__3546__auto____3993))
{return s3__3991;
} else
{return and__3546__auto____3993;
}
} else
{return and__3546__auto____3992;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3989),cljs.core.first.call(null,s2__3990),cljs.core.first.call(null,s3__3991)),map.call(null,f,cljs.core.rest.call(null,s1__3989),cljs.core.rest.call(null,s2__3990),cljs.core.rest.call(null,s3__3991)));
} else
{return null;
}
})));
});
var map__3999 = (function() { 
var G__4001__delegate = function (f,c1,c2,c3,colls){
var step__3995 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3994 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3994)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3994),step.call(null,map.call(null,cljs.core.rest,ss__3994)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3906_SHARP_){
return cljs.core.apply.call(null,f,p1__3906_SHARP_);
}),step__3995.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4001 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4001__delegate.call(this, f, c1, c2, c3, colls);
};
G__4001.cljs$lang$maxFixedArity = 4;
G__4001.cljs$lang$applyTo = (function (arglist__4002){
var f = cljs.core.first(arglist__4002);
var c1 = cljs.core.first(cljs.core.next(arglist__4002));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4002)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4002))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4002))));
return G__4001__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4001;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3996.call(this,f,c1);
case  3 :
return map__3997.call(this,f,c1,c2);
case  4 :
return map__3998.call(this,f,c1,c2,c3);
default:
return map__3999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3999.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____4003 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4003))
{var s__4004 = temp__3698__auto____4003;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4004),take.call(null,(n - 1),cljs.core.rest.call(null,s__4004)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__4007 = (function (n,coll){
while(true){
var s__4005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4006 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4006))
{return s__4005;
} else
{return and__3546__auto____4006;
}
})()))
{{
var G__4008 = (n - 1);
var G__4009 = cljs.core.rest.call(null,s__4005);
n = G__4008;
coll = G__4009;
continue;
}
} else
{return s__4005;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4007.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4010 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4011 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4010.call(this,n);
case  2 :
return drop_last__4011.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4013 = cljs.core.seq.call(null,coll);
var lead__4014 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4014))
{{
var G__4015 = cljs.core.next.call(null,s__4013);
var G__4016 = cljs.core.next.call(null,lead__4014);
s__4013 = G__4015;
lead__4014 = G__4016;
continue;
}
} else
{return s__4013;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4019 = (function (pred,coll){
while(true){
var s__4017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4018 = s__4017;

if(cljs.core.truth_(and__3546__auto____4018))
{return pred.call(null,cljs.core.first.call(null,s__4017));
} else
{return and__3546__auto____4018;
}
})()))
{{
var G__4020 = pred;
var G__4021 = cljs.core.rest.call(null,s__4017);
pred = G__4020;
coll = G__4021;
continue;
}
} else
{return s__4017;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4019.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4022 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4022))
{var s__4023 = temp__3698__auto____4022;

return cljs.core.concat.call(null,s__4023,cycle.call(null,s__4023));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4024 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4025 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4024.call(this,n);
case  2 :
return repeat__4025.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__4027 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4028 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4027.call(this,n);
case  2 :
return repeatedly__4028.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__4034 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4030 = cljs.core.seq.call(null,c1);
var s2__4031 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4032 = s1__4030;

if(cljs.core.truth_(and__3546__auto____4032))
{return s2__4031;
} else
{return and__3546__auto____4032;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4030),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4031),interleave.call(null,cljs.core.rest.call(null,s1__4030),cljs.core.rest.call(null,s2__4031))));
} else
{return null;
}
})));
});
var interleave__4035 = (function() { 
var G__4037__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4033 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4033)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4033),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4033)));
} else
{return null;
}
})));
};
var G__4037 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4037__delegate.call(this, c1, c2, colls);
};
G__4037.cljs$lang$maxFixedArity = 2;
G__4037.cljs$lang$applyTo = (function (arglist__4038){
var c1 = cljs.core.first(arglist__4038);
var c2 = cljs.core.first(cljs.core.next(arglist__4038));
var colls = cljs.core.rest(cljs.core.next(arglist__4038));
return G__4037__delegate.call(this, c1, c2, colls);
});
return G__4037;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4034.call(this,c1,c2);
default:
return interleave__4035.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4035.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__4041 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4039 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4039))
{var coll__4040 = temp__3695__auto____4039;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4040),cat.call(null,cljs.core.rest.call(null,coll__4040),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4041.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4042 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4043 = (function() { 
var G__4045__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4045 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4045__delegate.call(this, f, coll, colls);
};
G__4045.cljs$lang$maxFixedArity = 2;
G__4045.cljs$lang$applyTo = (function (arglist__4046){
var f = cljs.core.first(arglist__4046);
var coll = cljs.core.first(cljs.core.next(arglist__4046));
var colls = cljs.core.rest(cljs.core.next(arglist__4046));
return G__4045__delegate.call(this, f, coll, colls);
});
return G__4045;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4042.call(this,f,coll);
default:
return mapcat__4043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4043.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4047 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4047))
{var s__4048 = temp__3698__auto____4047;

var f__4049 = cljs.core.first.call(null,s__4048);
var r__4050 = cljs.core.rest.call(null,s__4048);

if(cljs.core.truth_(pred.call(null,f__4049)))
{return cljs.core.cons.call(null,f__4049,filter.call(null,pred,r__4050));
} else
{return filter.call(null,pred,r__4050);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__4052 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4052.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4051_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4051_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__4059 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4060 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4053 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4053))
{var s__4054 = temp__3698__auto____4053;

var p__4055 = cljs.core.take.call(null,n,s__4054);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4055))))
{return cljs.core.cons.call(null,p__4055,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4054)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4061 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4056))
{var s__4057 = temp__3698__auto____4056;

var p__4058 = cljs.core.take.call(null,n,s__4057);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4058))))
{return cljs.core.cons.call(null,p__4058,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4057)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4058,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4059.call(this,n,step);
case  3 :
return partition__4060.call(this,n,step,pad);
case  4 :
return partition__4061.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__4067 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4068 = (function (m,ks,not_found){
var sentinel__4063 = cljs.core.lookup_sentinel;
var m__4064 = m;
var ks__4065 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4065))
{var m__4066 = cljs.core.get.call(null,m__4064,cljs.core.first.call(null,ks__4065),sentinel__4063);

if(cljs.core.truth_((sentinel__4063 === m__4066)))
{return not_found;
} else
{{
var G__4070 = sentinel__4063;
var G__4071 = m__4066;
var G__4072 = cljs.core.next.call(null,ks__4065);
sentinel__4063 = G__4070;
m__4064 = G__4071;
ks__4065 = G__4072;
continue;
}
}
} else
{return m__4064;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4067.call(this,m,ks);
case  3 :
return get_in__4068.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4073,v){
var vec__4074__4075 = p__4073;
var k__4076 = cljs.core.nth.call(null,vec__4074__4075,0,null);
var ks__4077 = cljs.core.nthnext.call(null,vec__4074__4075,1);

if(cljs.core.truth_(ks__4077))
{return cljs.core.assoc.call(null,m,k__4076,assoc_in.call(null,cljs.core.get.call(null,m,k__4076),ks__4077,v));
} else
{return cljs.core.assoc.call(null,m,k__4076,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4078,f,args){
var vec__4079__4080 = p__4078;
var k__4081 = cljs.core.nth.call(null,vec__4079__4080,0,null);
var ks__4082 = cljs.core.nthnext.call(null,vec__4079__4080,1);

if(cljs.core.truth_(ks__4082))
{return cljs.core.assoc.call(null,m,k__4081,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4081),ks__4082,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4081,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4081),args));
}
};
var update_in = function (m,p__4078,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4078, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4083){
var m = cljs.core.first(arglist__4083);
var p__4078 = cljs.core.first(cljs.core.next(arglist__4083));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4083)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4083)));
return update_in__delegate.call(this, m, p__4078, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4084 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4117 = null;
var G__4117__4118 = (function (coll,k){
var this__4085 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4117__4119 = (function (coll,k,not_found){
var this__4086 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4117 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4117__4118.call(this,coll,k);
case  3 :
return G__4117__4119.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4117;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4087 = this;
var new_array__4088 = cljs.core.aclone.call(null,this__4087.array);

(new_array__4088[k] = v);
return (new cljs.core.Vector(this__4087.meta,new_array__4088));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4121 = null;
var G__4121__4122 = (function (tsym4089,k){
var this__4091 = this;
var tsym4089__4092 = this;

var coll__4093 = tsym4089__4092;

return cljs.core._lookup.call(null,coll__4093,k);
});
var G__4121__4123 = (function (tsym4090,k,not_found){
var this__4094 = this;
var tsym4090__4095 = this;

var coll__4096 = tsym4090__4095;

return cljs.core._lookup.call(null,coll__4096,k,not_found);
});
G__4121 = function(tsym4090,k,not_found){
switch(arguments.length){
case  2 :
return G__4121__4122.call(this,tsym4090,k);
case  3 :
return G__4121__4123.call(this,tsym4090,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4121;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4097 = this;
var new_array__4098 = cljs.core.aclone.call(null,this__4097.array);

new_array__4098.push(o);
return (new cljs.core.Vector(this__4097.meta,new_array__4098));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4125 = null;
var G__4125__4126 = (function (v,f){
var this__4099 = this;
return cljs.core.ci_reduce.call(null,this__4099.array,f);
});
var G__4125__4127 = (function (v,f,start){
var this__4100 = this;
return cljs.core.ci_reduce.call(null,this__4100.array,f,start);
});
G__4125 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4125__4126.call(this,v,f);
case  3 :
return G__4125__4127.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4125;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4101 = this;
if(cljs.core.truth_((this__4101.array.length > 0)))
{var vector_seq__4102 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4101.array.length)))
{return cljs.core.cons.call(null,(this__4101.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4102.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4103 = this;
return this__4103.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4104 = this;
var count__4105 = this__4104.array.length;

if(cljs.core.truth_((count__4105 > 0)))
{return (this__4104.array[(count__4105 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4106 = this;
if(cljs.core.truth_((this__4106.array.length > 0)))
{var new_array__4107 = cljs.core.aclone.call(null,this__4106.array);

new_array__4107.pop();
return (new cljs.core.Vector(this__4106.meta,new_array__4107));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4108 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4109 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4110 = this;
return (new cljs.core.Vector(meta,this__4110.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4111 = this;
return this__4111.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4129 = null;
var G__4129__4130 = (function (coll,n){
var this__4112 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4113 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4113))
{return (n < this__4112.array.length);
} else
{return and__3546__auto____4113;
}
})()))
{return (this__4112.array[n]);
} else
{return null;
}
});
var G__4129__4131 = (function (coll,n,not_found){
var this__4114 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4115 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4115))
{return (n < this__4114.array.length);
} else
{return and__3546__auto____4115;
}
})()))
{return (this__4114.array[n]);
} else
{return not_found;
}
});
G__4129 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4129__4130.call(this,coll,n);
case  3 :
return G__4129__4131.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4129;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4116 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4116.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4133){
var args = cljs.core.seq( arglist__4133 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4134 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4162 = null;
var G__4162__4163 = (function (coll,k){
var this__4135 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4162__4164 = (function (coll,k,not_found){
var this__4136 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4162 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4162__4163.call(this,coll,k);
case  3 :
return G__4162__4164.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4162;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4137 = this;
var v_pos__4138 = (this__4137.start + key);

return (new cljs.core.Subvec(this__4137.meta,cljs.core._assoc.call(null,this__4137.v,v_pos__4138,val),this__4137.start,((this__4137.end > (v_pos__4138 + 1)) ? this__4137.end : (v_pos__4138 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4166 = null;
var G__4166__4167 = (function (tsym4139,k){
var this__4141 = this;
var tsym4139__4142 = this;

var coll__4143 = tsym4139__4142;

return cljs.core._lookup.call(null,coll__4143,k);
});
var G__4166__4168 = (function (tsym4140,k,not_found){
var this__4144 = this;
var tsym4140__4145 = this;

var coll__4146 = tsym4140__4145;

return cljs.core._lookup.call(null,coll__4146,k,not_found);
});
G__4166 = function(tsym4140,k,not_found){
switch(arguments.length){
case  2 :
return G__4166__4167.call(this,tsym4140,k);
case  3 :
return G__4166__4168.call(this,tsym4140,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4166;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4147 = this;
return (new cljs.core.Subvec(this__4147.meta,cljs.core._assoc_n.call(null,this__4147.v,this__4147.end,o),this__4147.start,(this__4147.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4170 = null;
var G__4170__4171 = (function (coll,f){
var this__4148 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4170__4172 = (function (coll,f,start){
var this__4149 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4170 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4170__4171.call(this,coll,f);
case  3 :
return G__4170__4172.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4170;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4150 = this;
var subvec_seq__4151 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4150.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4150.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4151.call(null,this__4150.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4152 = this;
return (this__4152.end - this__4152.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4153 = this;
return cljs.core._nth.call(null,this__4153.v,(this__4153.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4154 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4154.start,this__4154.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4154.meta,this__4154.v,this__4154.start,(this__4154.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4155 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4156 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4157 = this;
return (new cljs.core.Subvec(meta,this__4157.v,this__4157.start,this__4157.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4158 = this;
return this__4158.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4174 = null;
var G__4174__4175 = (function (coll,n){
var this__4159 = this;
return cljs.core._nth.call(null,this__4159.v,(this__4159.start + n));
});
var G__4174__4176 = (function (coll,n,not_found){
var this__4160 = this;
return cljs.core._nth.call(null,this__4160.v,(this__4160.start + n),not_found);
});
G__4174 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4174__4175.call(this,coll,n);
case  3 :
return G__4174__4176.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4174;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4161 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4161.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__4178 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4179 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4178.call(this,v,start);
case  3 :
return subvec__4179.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4181 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4182 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4183 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4184 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4184.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4185 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4186 = this;
return cljs.core._first.call(null,this__4186.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4187 = this;
var temp__3695__auto____4188 = cljs.core.next.call(null,this__4187.front);

if(cljs.core.truth_(temp__3695__auto____4188))
{var f1__4189 = temp__3695__auto____4188;

return (new cljs.core.PersistentQueueSeq(this__4187.meta,f1__4189,this__4187.rear));
} else
{if(cljs.core.truth_((this__4187.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4187.meta,this__4187.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4190 = this;
return this__4190.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4191 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4191.front,this__4191.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4192 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4193 = this;
if(cljs.core.truth_(this__4193.front))
{return (new cljs.core.PersistentQueue(this__4193.meta,(this__4193.count + 1),this__4193.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4194 = this__4193.rear;

if(cljs.core.truth_(or__3548__auto____4194))
{return or__3548__auto____4194;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4193.meta,(this__4193.count + 1),cljs.core.conj.call(null,this__4193.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4195 = this;
var rear__4196 = cljs.core.seq.call(null,this__4195.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4197 = this__4195.front;

if(cljs.core.truth_(or__3548__auto____4197))
{return or__3548__auto____4197;
} else
{return rear__4196;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4195.front,cljs.core.seq.call(null,rear__4196)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4198 = this;
return this__4198.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4199 = this;
return cljs.core._first.call(null,this__4199.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4200 = this;
if(cljs.core.truth_(this__4200.front))
{var temp__3695__auto____4201 = cljs.core.next.call(null,this__4200.front);

if(cljs.core.truth_(temp__3695__auto____4201))
{var f1__4202 = temp__3695__auto____4201;

return (new cljs.core.PersistentQueue(this__4200.meta,(this__4200.count - 1),f1__4202,this__4200.rear));
} else
{return (new cljs.core.PersistentQueue(this__4200.meta,(this__4200.count - 1),cljs.core.seq.call(null,this__4200.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4203 = this;
return cljs.core.first.call(null,this__4203.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4204 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4205 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4206 = this;
return (new cljs.core.PersistentQueue(meta,this__4206.count,this__4206.front,this__4206.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4207 = this;
return this__4207.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4208 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4209 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4210 = array.length;

var i__4211 = 0;

while(true){
if(cljs.core.truth_((i__4211 < len__4210)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4211]))))
{return i__4211;
} else
{{
var G__4212 = (i__4211 + incr);
i__4211 = G__4212;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4214 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4215 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4213 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4213))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4213;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4214.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4215.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4218 = cljs.core.hash.call(null,a);
var b__4219 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4218 < b__4219)))
{return -1;
} else
{if(cljs.core.truth_((a__4218 > b__4219)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4220 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4247 = null;
var G__4247__4248 = (function (coll,k){
var this__4221 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4247__4249 = (function (coll,k,not_found){
var this__4222 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4222.strobj,(this__4222.strobj[k]),not_found);
});
G__4247 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4247__4248.call(this,coll,k);
case  3 :
return G__4247__4249.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4247;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4223 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4224 = goog.object.clone.call(null,this__4223.strobj);
var overwrite_QMARK___4225 = new_strobj__4224.hasOwnProperty(k);

(new_strobj__4224[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4225))
{return (new cljs.core.ObjMap(this__4223.meta,this__4223.keys,new_strobj__4224));
} else
{var new_keys__4226 = cljs.core.aclone.call(null,this__4223.keys);

new_keys__4226.push(k);
return (new cljs.core.ObjMap(this__4223.meta,new_keys__4226,new_strobj__4224));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4223.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4227 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4227.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4251 = null;
var G__4251__4252 = (function (tsym4228,k){
var this__4230 = this;
var tsym4228__4231 = this;

var coll__4232 = tsym4228__4231;

return cljs.core._lookup.call(null,coll__4232,k);
});
var G__4251__4253 = (function (tsym4229,k,not_found){
var this__4233 = this;
var tsym4229__4234 = this;

var coll__4235 = tsym4229__4234;

return cljs.core._lookup.call(null,coll__4235,k,not_found);
});
G__4251 = function(tsym4229,k,not_found){
switch(arguments.length){
case  2 :
return G__4251__4252.call(this,tsym4229,k);
case  3 :
return G__4251__4253.call(this,tsym4229,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4251;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4236 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4237 = this;
if(cljs.core.truth_((this__4237.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4217_SHARP_){
return cljs.core.vector.call(null,p1__4217_SHARP_,(this__4237.strobj[p1__4217_SHARP_]));
}),this__4237.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4238 = this;
return this__4238.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4239 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4240 = this;
return (new cljs.core.ObjMap(meta,this__4240.keys,this__4240.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4241 = this;
return this__4241.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4242 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4242.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4243 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4244 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4244))
{return this__4243.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4244;
}
})()))
{var new_keys__4245 = cljs.core.aclone.call(null,this__4243.keys);
var new_strobj__4246 = goog.object.clone.call(null,this__4243.strobj);

new_keys__4245.splice(cljs.core.scan_array.call(null,1,k,new_keys__4245),1);
cljs.core.js_delete.call(null,new_strobj__4246,k);
return (new cljs.core.ObjMap(this__4243.meta,new_keys__4245,new_strobj__4246));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4256 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4294 = null;
var G__4294__4295 = (function (coll,k){
var this__4257 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4294__4296 = (function (coll,k,not_found){
var this__4258 = this;
var bucket__4259 = (this__4258.hashobj[cljs.core.hash.call(null,k)]);
var i__4260 = (cljs.core.truth_(bucket__4259)?cljs.core.scan_array.call(null,2,k,bucket__4259):null);

if(cljs.core.truth_(i__4260))
{return (bucket__4259[(i__4260 + 1)]);
} else
{return not_found;
}
});
G__4294 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4294__4295.call(this,coll,k);
case  3 :
return G__4294__4296.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4294;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4261 = this;
var h__4262 = cljs.core.hash.call(null,k);
var bucket__4263 = (this__4261.hashobj[h__4262]);

if(cljs.core.truth_(bucket__4263))
{var new_bucket__4264 = cljs.core.aclone.call(null,bucket__4263);
var new_hashobj__4265 = goog.object.clone.call(null,this__4261.hashobj);

(new_hashobj__4265[h__4262] = new_bucket__4264);
var temp__3695__auto____4266 = cljs.core.scan_array.call(null,2,k,new_bucket__4264);

if(cljs.core.truth_(temp__3695__auto____4266))
{var i__4267 = temp__3695__auto____4266;

(new_bucket__4264[(i__4267 + 1)] = v);
return (new cljs.core.HashMap(this__4261.meta,this__4261.count,new_hashobj__4265));
} else
{new_bucket__4264.push(k,v);
return (new cljs.core.HashMap(this__4261.meta,(this__4261.count + 1),new_hashobj__4265));
}
} else
{var new_hashobj__4268 = goog.object.clone.call(null,this__4261.hashobj);

(new_hashobj__4268[h__4262] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4261.meta,(this__4261.count + 1),new_hashobj__4268));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4269 = this;
var bucket__4270 = (this__4269.hashobj[cljs.core.hash.call(null,k)]);
var i__4271 = (cljs.core.truth_(bucket__4270)?cljs.core.scan_array.call(null,2,k,bucket__4270):null);

if(cljs.core.truth_(i__4271))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4298 = null;
var G__4298__4299 = (function (tsym4272,k){
var this__4274 = this;
var tsym4272__4275 = this;

var coll__4276 = tsym4272__4275;

return cljs.core._lookup.call(null,coll__4276,k);
});
var G__4298__4300 = (function (tsym4273,k,not_found){
var this__4277 = this;
var tsym4273__4278 = this;

var coll__4279 = tsym4273__4278;

return cljs.core._lookup.call(null,coll__4279,k,not_found);
});
G__4298 = function(tsym4273,k,not_found){
switch(arguments.length){
case  2 :
return G__4298__4299.call(this,tsym4273,k);
case  3 :
return G__4298__4300.call(this,tsym4273,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4298;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4280 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4281 = this;
if(cljs.core.truth_((this__4281.count > 0)))
{var hashes__4282 = cljs.core.js_keys.call(null,this__4281.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4255_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4281.hashobj[p1__4255_SHARP_])));
}),hashes__4282);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4283 = this;
return this__4283.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4284 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4285 = this;
return (new cljs.core.HashMap(meta,this__4285.count,this__4285.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4286 = this;
return this__4286.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4287 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4287.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4288 = this;
var h__4289 = cljs.core.hash.call(null,k);
var bucket__4290 = (this__4288.hashobj[h__4289]);
var i__4291 = (cljs.core.truth_(bucket__4290)?cljs.core.scan_array.call(null,2,k,bucket__4290):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4291)))
{return coll;
} else
{var new_hashobj__4292 = goog.object.clone.call(null,this__4288.hashobj);

if(cljs.core.truth_((3 > bucket__4290.length)))
{cljs.core.js_delete.call(null,new_hashobj__4292,h__4289);
} else
{var new_bucket__4293 = cljs.core.aclone.call(null,bucket__4290);

new_bucket__4293.splice(i__4291,2);
(new_hashobj__4292[h__4289] = new_bucket__4293);
}
return (new cljs.core.HashMap(this__4288.meta,(this__4288.count - 1),new_hashobj__4292));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4302 = ks.length;

var i__4303 = 0;
var out__4304 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4303 < len__4302)))
{{
var G__4305 = (i__4303 + 1);
var G__4306 = cljs.core.assoc.call(null,out__4304,(ks[i__4303]),(vs[i__4303]));
i__4303 = G__4305;
out__4304 = G__4306;
continue;
}
} else
{return out__4304;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4307 = cljs.core.seq.call(null,keyvals);
var out__4308 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4307))
{{
var G__4309 = cljs.core.nnext.call(null,in$__4307);
var G__4310 = cljs.core.assoc.call(null,out__4308,cljs.core.first.call(null,in$__4307),cljs.core.second.call(null,in$__4307));
in$__4307 = G__4309;
out__4308 = G__4310;
continue;
}
} else
{return out__4308;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4311){
var keyvals = cljs.core.seq( arglist__4311 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4312_SHARP_,p2__4313_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4314 = p1__4312_SHARP_;

if(cljs.core.truth_(or__3548__auto____4314))
{return or__3548__auto____4314;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4313_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4315){
var maps = cljs.core.seq( arglist__4315 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4318 = (function (m,e){
var k__4316 = cljs.core.first.call(null,e);
var v__4317 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4316)))
{return cljs.core.assoc.call(null,m,k__4316,f.call(null,cljs.core.get.call(null,m,k__4316),v__4317));
} else
{return cljs.core.assoc.call(null,m,k__4316,v__4317);
}
});
var merge2__4320 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4318,(function (){var or__3548__auto____4319 = m1;

if(cljs.core.truth_(or__3548__auto____4319))
{return or__3548__auto____4319;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4320,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4321){
var f = cljs.core.first(arglist__4321);
var maps = cljs.core.rest(arglist__4321);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4323 = cljs.core.ObjMap.fromObject([],{});
var keys__4324 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4324))
{var key__4325 = cljs.core.first.call(null,keys__4324);
var entry__4326 = cljs.core.get.call(null,map,key__4325,"\uFDD0'user/not-found");

{
var G__4327 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4326,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4323,key__4325,entry__4326):ret__4323);
var G__4328 = cljs.core.next.call(null,keys__4324);
ret__4323 = G__4327;
keys__4324 = G__4328;
continue;
}
} else
{return ret__4323;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4329 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4350 = null;
var G__4350__4351 = (function (coll,v){
var this__4330 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4350__4352 = (function (coll,v,not_found){
var this__4331 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4331.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4350 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4350__4351.call(this,coll,v);
case  3 :
return G__4350__4352.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4350;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4354 = null;
var G__4354__4355 = (function (tsym4332,k){
var this__4334 = this;
var tsym4332__4335 = this;

var coll__4336 = tsym4332__4335;

return cljs.core._lookup.call(null,coll__4336,k);
});
var G__4354__4356 = (function (tsym4333,k,not_found){
var this__4337 = this;
var tsym4333__4338 = this;

var coll__4339 = tsym4333__4338;

return cljs.core._lookup.call(null,coll__4339,k,not_found);
});
G__4354 = function(tsym4333,k,not_found){
switch(arguments.length){
case  2 :
return G__4354__4355.call(this,tsym4333,k);
case  3 :
return G__4354__4356.call(this,tsym4333,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4354;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4340 = this;
return (new cljs.core.Set(this__4340.meta,cljs.core.assoc.call(null,this__4340.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4341 = this;
return cljs.core.keys.call(null,this__4341.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4342 = this;
return (new cljs.core.Set(this__4342.meta,cljs.core.dissoc.call(null,this__4342.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4343 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4344 = this;
var and__3546__auto____4345 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4345))
{var and__3546__auto____4346 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4346))
{return cljs.core.every_QMARK_.call(null,(function (p1__4322_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4322_SHARP_);
}),other);
} else
{return and__3546__auto____4346;
}
} else
{return and__3546__auto____4345;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4347 = this;
return (new cljs.core.Set(meta,this__4347.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4348 = this;
return this__4348.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4349 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4349.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4359 = cljs.core.seq.call(null,coll);
var out__4360 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4359))))
{{
var G__4361 = cljs.core.rest.call(null,in$__4359);
var G__4362 = cljs.core.conj.call(null,out__4360,cljs.core.first.call(null,in$__4359));
in$__4359 = G__4361;
out__4360 = G__4362;
continue;
}
} else
{return out__4360;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4363 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4364 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4364))
{var e__4365 = temp__3695__auto____4364;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4365));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4363,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4358_SHARP_){
var temp__3695__auto____4366 = cljs.core.find.call(null,smap,p1__4358_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4366))
{var e__4367 = temp__3695__auto____4366;

return cljs.core.second.call(null,e__4367);
} else
{return p1__4358_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4375 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4368,seen){
while(true){
var vec__4369__4370 = p__4368;
var f__4371 = cljs.core.nth.call(null,vec__4369__4370,0,null);
var xs__4372 = vec__4369__4370;

var temp__3698__auto____4373 = cljs.core.seq.call(null,xs__4372);

if(cljs.core.truth_(temp__3698__auto____4373))
{var s__4374 = temp__3698__auto____4373;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4371)))
{{
var G__4376 = cljs.core.rest.call(null,s__4374);
var G__4377 = seen;
p__4368 = G__4376;
seen = G__4377;
continue;
}
} else
{return cljs.core.cons.call(null,f__4371,step.call(null,cljs.core.rest.call(null,s__4374),cljs.core.conj.call(null,seen,f__4371)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4375.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4378 = cljs.core.Vector.fromArray([]);
var s__4379 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4379)))
{{
var G__4380 = cljs.core.conj.call(null,ret__4378,cljs.core.first.call(null,s__4379));
var G__4381 = cljs.core.next.call(null,s__4379);
ret__4378 = G__4380;
s__4379 = G__4381;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4378);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4382 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4382))
{return or__3548__auto____4382;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4383 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__4383 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4383 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4384 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4384))
{return or__3548__auto____4384;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4385 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__4385 > -1)))
{return cljs.core.subs.call(null,x,2,i__4385);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4388 = cljs.core.ObjMap.fromObject([],{});
var ks__4389 = cljs.core.seq.call(null,keys);
var vs__4390 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4391 = ks__4389;

if(cljs.core.truth_(and__3546__auto____4391))
{return vs__4390;
} else
{return and__3546__auto____4391;
}
})()))
{{
var G__4392 = cljs.core.assoc.call(null,map__4388,cljs.core.first.call(null,ks__4389),cljs.core.first.call(null,vs__4390));
var G__4393 = cljs.core.next.call(null,ks__4389);
var G__4394 = cljs.core.next.call(null,vs__4390);
map__4388 = G__4392;
ks__4389 = G__4393;
vs__4390 = G__4394;
continue;
}
} else
{return map__4388;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4397 = (function (k,x){
return x;
});
var max_key__4398 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4399 = (function() { 
var G__4401__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4386_SHARP_,p2__4387_SHARP_){
return max_key.call(null,k,p1__4386_SHARP_,p2__4387_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4401 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4401__delegate.call(this, k, x, y, more);
};
G__4401.cljs$lang$maxFixedArity = 3;
G__4401.cljs$lang$applyTo = (function (arglist__4402){
var k = cljs.core.first(arglist__4402);
var x = cljs.core.first(cljs.core.next(arglist__4402));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4402)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4402)));
return G__4401__delegate.call(this, k, x, y, more);
});
return G__4401;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4397.call(this,k,x);
case  3 :
return max_key__4398.call(this,k,x,y);
default:
return max_key__4399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4399.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4403 = (function (k,x){
return x;
});
var min_key__4404 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4405 = (function() { 
var G__4407__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4395_SHARP_,p2__4396_SHARP_){
return min_key.call(null,k,p1__4395_SHARP_,p2__4396_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4407 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4407__delegate.call(this, k, x, y, more);
};
G__4407.cljs$lang$maxFixedArity = 3;
G__4407.cljs$lang$applyTo = (function (arglist__4408){
var k = cljs.core.first(arglist__4408);
var x = cljs.core.first(cljs.core.next(arglist__4408));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4408)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4408)));
return G__4407__delegate.call(this, k, x, y, more);
});
return G__4407;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4403.call(this,k,x);
case  3 :
return min_key__4404.call(this,k,x,y);
default:
return min_key__4405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4405.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4411 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4412 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4409 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4409))
{var s__4410 = temp__3698__auto____4409;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4410),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4410)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4411.call(this,n,step);
case  3 :
return partition_all__4412.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4414 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4414))
{var s__4415 = temp__3698__auto____4414;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4415))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4415),take_while.call(null,pred,cljs.core.rest.call(null,s__4415)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4416 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4417 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4433 = null;
var G__4433__4434 = (function (rng,f){
var this__4418 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4433__4435 = (function (rng,f,s){
var this__4419 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4433 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4433__4434.call(this,rng,f);
case  3 :
return G__4433__4435.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4433;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4420 = this;
var comp__4421 = (cljs.core.truth_((this__4420.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4421.call(null,this__4420.start,this__4420.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4422 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4422.end - this__4422.start) / this__4422.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4423 = this;
return this__4423.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4424 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4424.meta,(this__4424.start + this__4424.step),this__4424.end,this__4424.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4425 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4426 = this;
return (new cljs.core.Range(meta,this__4426.start,this__4426.end,this__4426.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4427 = this;
return this__4427.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4437 = null;
var G__4437__4438 = (function (rng,n){
var this__4428 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4428.start + (n * this__4428.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4429 = (this__4428.start > this__4428.end);

if(cljs.core.truth_(and__3546__auto____4429))
{return cljs.core._EQ_.call(null,this__4428.step,0);
} else
{return and__3546__auto____4429;
}
})()))
{return this__4428.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4437__4439 = (function (rng,n,not_found){
var this__4430 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4430.start + (n * this__4430.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4431 = (this__4430.start > this__4430.end);

if(cljs.core.truth_(and__3546__auto____4431))
{return cljs.core._EQ_.call(null,this__4430.step,0);
} else
{return and__3546__auto____4431;
}
})()))
{return this__4430.start;
} else
{return not_found;
}
}
});
G__4437 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4437__4438.call(this,rng,n);
case  3 :
return G__4437__4439.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4437;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4432 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4432.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4441 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4442 = (function (end){
return range.call(null,0,end,1);
});
var range__4443 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4444 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4441.call(this);
case  1 :
return range__4442.call(this,start);
case  2 :
return range__4443.call(this,start,end);
case  3 :
return range__4444.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4446 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4446))
{var s__4447 = temp__3698__auto____4446;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4447),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4447)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4449 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4449))
{var s__4450 = temp__3698__auto____4449;

var fst__4451 = cljs.core.first.call(null,s__4450);
var fv__4452 = f.call(null,fst__4451);
var run__4453 = cljs.core.cons.call(null,fst__4451,cljs.core.take_while.call(null,(function (p1__4448_SHARP_){
return cljs.core._EQ_.call(null,fv__4452,f.call(null,p1__4448_SHARP_));
}),cljs.core.next.call(null,s__4450)));

return cljs.core.cons.call(null,run__4453,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4453),s__4450))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4468 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4464 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4464))
{var s__4465 = temp__3695__auto____4464;

return reductions.call(null,f,cljs.core.first.call(null,s__4465),cljs.core.rest.call(null,s__4465));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4469 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4466 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4466))
{var s__4467 = temp__3698__auto____4466;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4467)),cljs.core.rest.call(null,s__4467));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4468.call(this,f,init);
case  3 :
return reductions__4469.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4472 = (function (f){
return (function() {
var G__4477 = null;
var G__4477__4478 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4477__4479 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4477__4480 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4477__4481 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4477__4482 = (function() { 
var G__4484__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4484 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4484__delegate.call(this, x, y, z, args);
};
G__4484.cljs$lang$maxFixedArity = 3;
G__4484.cljs$lang$applyTo = (function (arglist__4485){
var x = cljs.core.first(arglist__4485);
var y = cljs.core.first(cljs.core.next(arglist__4485));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4485)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4485)));
return G__4484__delegate.call(this, x, y, z, args);
});
return G__4484;
})()
;
G__4477 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4477__4478.call(this);
case  1 :
return G__4477__4479.call(this,x);
case  2 :
return G__4477__4480.call(this,x,y);
case  3 :
return G__4477__4481.call(this,x,y,z);
default:
return G__4477__4482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4477.cljs$lang$maxFixedArity = 3;
G__4477.cljs$lang$applyTo = G__4477__4482.cljs$lang$applyTo;
return G__4477;
})()
});
var juxt__4473 = (function (f,g){
return (function() {
var G__4486 = null;
var G__4486__4487 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4486__4488 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4486__4489 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4486__4490 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4486__4491 = (function() { 
var G__4493__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4493 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4493__delegate.call(this, x, y, z, args);
};
G__4493.cljs$lang$maxFixedArity = 3;
G__4493.cljs$lang$applyTo = (function (arglist__4494){
var x = cljs.core.first(arglist__4494);
var y = cljs.core.first(cljs.core.next(arglist__4494));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4494)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4494)));
return G__4493__delegate.call(this, x, y, z, args);
});
return G__4493;
})()
;
G__4486 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4486__4487.call(this);
case  1 :
return G__4486__4488.call(this,x);
case  2 :
return G__4486__4489.call(this,x,y);
case  3 :
return G__4486__4490.call(this,x,y,z);
default:
return G__4486__4491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4486.cljs$lang$maxFixedArity = 3;
G__4486.cljs$lang$applyTo = G__4486__4491.cljs$lang$applyTo;
return G__4486;
})()
});
var juxt__4474 = (function (f,g,h){
return (function() {
var G__4495 = null;
var G__4495__4496 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4495__4497 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4495__4498 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4495__4499 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4495__4500 = (function() { 
var G__4502__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4502 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4502__delegate.call(this, x, y, z, args);
};
G__4502.cljs$lang$maxFixedArity = 3;
G__4502.cljs$lang$applyTo = (function (arglist__4503){
var x = cljs.core.first(arglist__4503);
var y = cljs.core.first(cljs.core.next(arglist__4503));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4503)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4503)));
return G__4502__delegate.call(this, x, y, z, args);
});
return G__4502;
})()
;
G__4495 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4495__4496.call(this);
case  1 :
return G__4495__4497.call(this,x);
case  2 :
return G__4495__4498.call(this,x,y);
case  3 :
return G__4495__4499.call(this,x,y,z);
default:
return G__4495__4500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4495.cljs$lang$maxFixedArity = 3;
G__4495.cljs$lang$applyTo = G__4495__4500.cljs$lang$applyTo;
return G__4495;
})()
});
var juxt__4475 = (function() { 
var G__4504__delegate = function (f,g,h,fs){
var fs__4471 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4505 = null;
var G__4505__4506 = (function (){
return cljs.core.reduce.call(null,(function (p1__4454_SHARP_,p2__4455_SHARP_){
return cljs.core.conj.call(null,p1__4454_SHARP_,p2__4455_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4471);
});
var G__4505__4507 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4456_SHARP_,p2__4457_SHARP_){
return cljs.core.conj.call(null,p1__4456_SHARP_,p2__4457_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4471);
});
var G__4505__4508 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4458_SHARP_,p2__4459_SHARP_){
return cljs.core.conj.call(null,p1__4458_SHARP_,p2__4459_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4471);
});
var G__4505__4509 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4460_SHARP_,p2__4461_SHARP_){
return cljs.core.conj.call(null,p1__4460_SHARP_,p2__4461_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4471);
});
var G__4505__4510 = (function() { 
var G__4512__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4462_SHARP_,p2__4463_SHARP_){
return cljs.core.conj.call(null,p1__4462_SHARP_,cljs.core.apply.call(null,p2__4463_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4471);
};
var G__4512 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4512__delegate.call(this, x, y, z, args);
};
G__4512.cljs$lang$maxFixedArity = 3;
G__4512.cljs$lang$applyTo = (function (arglist__4513){
var x = cljs.core.first(arglist__4513);
var y = cljs.core.first(cljs.core.next(arglist__4513));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4513)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4513)));
return G__4512__delegate.call(this, x, y, z, args);
});
return G__4512;
})()
;
G__4505 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4505__4506.call(this);
case  1 :
return G__4505__4507.call(this,x);
case  2 :
return G__4505__4508.call(this,x,y);
case  3 :
return G__4505__4509.call(this,x,y,z);
default:
return G__4505__4510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4505.cljs$lang$maxFixedArity = 3;
G__4505.cljs$lang$applyTo = G__4505__4510.cljs$lang$applyTo;
return G__4505;
})()
};
var G__4504 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4504__delegate.call(this, f, g, h, fs);
};
G__4504.cljs$lang$maxFixedArity = 3;
G__4504.cljs$lang$applyTo = (function (arglist__4514){
var f = cljs.core.first(arglist__4514);
var g = cljs.core.first(cljs.core.next(arglist__4514));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4514)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4514)));
return G__4504__delegate.call(this, f, g, h, fs);
});
return G__4504;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4472.call(this,f);
case  2 :
return juxt__4473.call(this,f,g);
case  3 :
return juxt__4474.call(this,f,g,h);
default:
return juxt__4475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4475.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4516 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4519 = cljs.core.next.call(null,coll);
coll = G__4519;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4517 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4515 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4515))
{return (n > 0);
} else
{return and__3546__auto____4515;
}
})()))
{{
var G__4520 = (n - 1);
var G__4521 = cljs.core.next.call(null,coll);
n = G__4520;
coll = G__4521;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4516.call(this,n);
case  2 :
return dorun__4517.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4522 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4523 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4522.call(this,n);
case  2 :
return doall__4523.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4525 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4525),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4525),1)))
{return cljs.core.first.call(null,matches__4525);
} else
{return cljs.core.vec.call(null,matches__4525);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4526 = re.exec(s);

if(cljs.core.truth_((matches__4526 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4526),1)))
{return cljs.core.first.call(null,matches__4526);
} else
{return cljs.core.vec.call(null,matches__4526);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4527 = cljs.core.re_find.call(null,re,s);
var match_idx__4528 = s.search(re);
var match_str__4529 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4527))?cljs.core.first.call(null,match_data__4527):match_data__4527);
var post_match__4530 = cljs.core.subs.call(null,s,(match_idx__4528 + cljs.core.count.call(null,match_str__4529)));

if(cljs.core.truth_(match_data__4527))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4527,re_seq.call(null,re,post_match__4530));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4532__4533 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4534 = cljs.core.nth.call(null,vec__4532__4533,0,null);
var flags__4535 = cljs.core.nth.call(null,vec__4532__4533,1,null);
var pattern__4536 = cljs.core.nth.call(null,vec__4532__4533,2,null);

return (new RegExp(pattern__4536,flags__4535));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4531_SHARP_){
return print_one.call(null,p1__4531_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4537 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4537))
{var and__3546__auto____4541 = (function (){var x__450__auto____4538 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4539 = x__450__auto____4538;

if(cljs.core.truth_(and__3546__auto____4539))
{var and__3546__auto____4540 = x__450__auto____4538.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4540))
{return cljs.core.not.call(null,x__450__auto____4538.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4540;
}
} else
{return and__3546__auto____4539;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____4538);
}
})();

if(cljs.core.truth_(and__3546__auto____4541))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4541;
}
} else
{return and__3546__auto____4537;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____4542 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4543 = x__450__auto____4542;

if(cljs.core.truth_(and__3546__auto____4543))
{var and__3546__auto____4544 = x__450__auto____4542.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4544))
{return cljs.core.not.call(null,x__450__auto____4542.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4544;
}
} else
{return and__3546__auto____4543;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____4542);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__4545 = cljs.core.first.call(null,objs);
var sb__4546 = (new goog.string.StringBuffer());

var G__4547__4548 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4547__4548))
{var obj__4549 = cljs.core.first.call(null,G__4547__4548);
var G__4547__4550 = G__4547__4548;

while(true){
if(cljs.core.truth_((obj__4549 === first_obj__4545)))
{} else
{sb__4546.append(" ");
}
var G__4551__4552 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4549,opts));

if(cljs.core.truth_(G__4551__4552))
{var string__4553 = cljs.core.first.call(null,G__4551__4552);
var G__4551__4554 = G__4551__4552;

while(true){
sb__4546.append(string__4553);
var temp__3698__auto____4555 = cljs.core.next.call(null,G__4551__4554);

if(cljs.core.truth_(temp__3698__auto____4555))
{var G__4551__4556 = temp__3698__auto____4555;

{
var G__4559 = cljs.core.first.call(null,G__4551__4556);
var G__4560 = G__4551__4556;
string__4553 = G__4559;
G__4551__4554 = G__4560;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4557 = cljs.core.next.call(null,G__4547__4550);

if(cljs.core.truth_(temp__3698__auto____4557))
{var G__4547__4558 = temp__3698__auto____4557;

{
var G__4561 = cljs.core.first.call(null,G__4547__4558);
var G__4562 = G__4547__4558;
obj__4549 = G__4561;
G__4547__4550 = G__4562;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4546);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4563 = cljs.core.first.call(null,objs);

var G__4564__4565 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4564__4565))
{var obj__4566 = cljs.core.first.call(null,G__4564__4565);
var G__4564__4567 = G__4564__4565;

while(true){
if(cljs.core.truth_((obj__4566 === first_obj__4563)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4568__4569 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4566,opts));

if(cljs.core.truth_(G__4568__4569))
{var string__4570 = cljs.core.first.call(null,G__4568__4569);
var G__4568__4571 = G__4568__4569;

while(true){
cljs.core.string_print.call(null,string__4570);
var temp__3698__auto____4572 = cljs.core.next.call(null,G__4568__4571);

if(cljs.core.truth_(temp__3698__auto____4572))
{var G__4568__4573 = temp__3698__auto____4572;

{
var G__4576 = cljs.core.first.call(null,G__4568__4573);
var G__4577 = G__4568__4573;
string__4570 = G__4576;
G__4568__4571 = G__4577;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4574 = cljs.core.next.call(null,G__4564__4567);

if(cljs.core.truth_(temp__3698__auto____4574))
{var G__4564__4575 = temp__3698__auto____4574;

{
var G__4578 = cljs.core.first.call(null,G__4564__4575);
var G__4579 = G__4564__4575;
obj__4566 = G__4578;
G__4564__4567 = G__4579;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4580){
var objs = cljs.core.seq( arglist__4580 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4581){
var objs = cljs.core.seq( arglist__4581 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4582){
var objs = cljs.core.seq( arglist__4582 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4583){
var objs = cljs.core.seq( arglist__4583 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4584){
var objs = cljs.core.seq( arglist__4584 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4585 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4585,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4586 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4586))
{var nspc__4587 = temp__3698__auto____4586;

return cljs.core.str.call(null,nspc__4587,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4588 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4588))
{var nspc__4589 = temp__3698__auto____4588;

return cljs.core.str.call(null,nspc__4589,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4590 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4590,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4591 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4592 = this;
var G__4593__4594 = cljs.core.seq.call(null,this__4592.watches);

if(cljs.core.truth_(G__4593__4594))
{var G__4596__4598 = cljs.core.first.call(null,G__4593__4594);
var vec__4597__4599 = G__4596__4598;
var key__4600 = cljs.core.nth.call(null,vec__4597__4599,0,null);
var f__4601 = cljs.core.nth.call(null,vec__4597__4599,1,null);
var G__4593__4602 = G__4593__4594;

var G__4596__4603 = G__4596__4598;
var G__4593__4604 = G__4593__4602;

while(true){
var vec__4605__4606 = G__4596__4603;
var key__4607 = cljs.core.nth.call(null,vec__4605__4606,0,null);
var f__4608 = cljs.core.nth.call(null,vec__4605__4606,1,null);
var G__4593__4609 = G__4593__4604;

f__4608.call(null,key__4607,this$,oldval,newval);
var temp__3698__auto____4610 = cljs.core.next.call(null,G__4593__4609);

if(cljs.core.truth_(temp__3698__auto____4610))
{var G__4593__4611 = temp__3698__auto____4610;

{
var G__4618 = cljs.core.first.call(null,G__4593__4611);
var G__4619 = G__4593__4611;
G__4596__4603 = G__4618;
G__4593__4604 = G__4619;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4612 = this;
return this$.watches = cljs.core.assoc.call(null,this__4612.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4613 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4613.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4614 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4614.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4615 = this;
return this__4615.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4616 = this;
return this__4616.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4617 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4626 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4627 = (function() { 
var G__4629__delegate = function (x,p__4620){
var map__4621__4622 = p__4620;
var map__4621__4623 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4621__4622))?cljs.core.apply.call(null,cljs.core.hash_map,map__4621__4622):map__4621__4622);
var validator__4624 = cljs.core.get.call(null,map__4621__4623,"\uFDD0'validator");
var meta__4625 = cljs.core.get.call(null,map__4621__4623,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4625,validator__4624,null));
};
var G__4629 = function (x,var_args){
var p__4620 = null;
if (goog.isDef(var_args)) {
  p__4620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4629__delegate.call(this, x, p__4620);
};
G__4629.cljs$lang$maxFixedArity = 1;
G__4629.cljs$lang$applyTo = (function (arglist__4630){
var x = cljs.core.first(arglist__4630);
var p__4620 = cljs.core.rest(arglist__4630);
return G__4629__delegate.call(this, x, p__4620);
});
return G__4629;
})()
;
atom = function(x,var_args){
var p__4620 = var_args;
switch(arguments.length){
case  1 :
return atom__4626.call(this,x);
default:
return atom__4627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4627.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4631 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4631))
{var validate__4632 = temp__3698__auto____4631;

if(cljs.core.truth_(validate__4632.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__4633 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4633,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4634 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4635 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4636 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4637 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4638 = (function() { 
var G__4640__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4640 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4640__delegate.call(this, a, f, x, y, z, more);
};
G__4640.cljs$lang$maxFixedArity = 5;
G__4640.cljs$lang$applyTo = (function (arglist__4641){
var a = cljs.core.first(arglist__4641);
var f = cljs.core.first(cljs.core.next(arglist__4641));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4641)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4641))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4641)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4641)))));
return G__4640__delegate.call(this, a, f, x, y, z, more);
});
return G__4640;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4634.call(this,a,f);
case  3 :
return swap_BANG___4635.call(this,a,f,x);
case  4 :
return swap_BANG___4636.call(this,a,f,x,y);
case  5 :
return swap_BANG___4637.call(this,a,f,x,y,z);
default:
return swap_BANG___4638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4638.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4642){
var iref = cljs.core.first(arglist__4642);
var f = cljs.core.first(cljs.core.next(arglist__4642));
var args = cljs.core.rest(cljs.core.next(arglist__4642));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4643 = (function (){
return gensym.call(null,"G__");
});
var gensym__4644 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4643.call(this);
case  1 :
return gensym__4644.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4646 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__4646.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4647 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4647.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4647.state,this__4647.f);
}
return cljs.core.deref.call(null,this__4647.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__4648){
var body = cljs.core.seq( arglist__4648 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4649__4650 = options;
var map__4649__4651 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4649__4650))?cljs.core.apply.call(null,cljs.core.hash_map,map__4649__4650):map__4649__4650);
var keywordize_keys__4652 = cljs.core.get.call(null,map__4649__4651,"\uFDD0'keywordize-keys");
var keyfn__4653 = (cljs.core.truth_(keywordize_keys__4652)?cljs.core.keyword:cljs.core.str);
var f__4659 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____4658 = (function iter__4654(s__4655){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4655__4656 = s__4655;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4655__4656)))
{var k__4657 = cljs.core.first.call(null,s__4655__4656);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4653.call(null,k__4657),thisfn.call(null,(x[k__4657]))]),iter__4654.call(null,cljs.core.rest.call(null,s__4655__4656)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____4658.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4659.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4660){
var x = cljs.core.first(arglist__4660);
var options = cljs.core.rest(arglist__4660);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4661 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4665__delegate = function (args){
var temp__3695__auto____4662 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4661),args);

if(cljs.core.truth_(temp__3695__auto____4662))
{var v__4663 = temp__3695__auto____4662;

return v__4663;
} else
{var ret__4664 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4661,cljs.core.assoc,args,ret__4664);
return ret__4664;
}
};
var G__4665 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4665__delegate.call(this, args);
};
G__4665.cljs$lang$maxFixedArity = 0;
G__4665.cljs$lang$applyTo = (function (arglist__4666){
var args = cljs.core.seq( arglist__4666 );;
return G__4665__delegate.call(this, args);
});
return G__4665;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4668 = (function (f){
while(true){
var ret__4667 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4667)))
{{
var G__4671 = ret__4667;
f = G__4671;
continue;
}
} else
{return ret__4667;
}
break;
}
});
var trampoline__4669 = (function() { 
var G__4672__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4672 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4672__delegate.call(this, f, args);
};
G__4672.cljs$lang$maxFixedArity = 1;
G__4672.cljs$lang$applyTo = (function (arglist__4673){
var f = cljs.core.first(arglist__4673);
var args = cljs.core.rest(arglist__4673);
return G__4672__delegate.call(this, f, args);
});
return G__4672;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4668.call(this,f);
default:
return trampoline__4669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4669.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4674 = (function (){
return rand.call(null,1);
});
var rand__4675 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4674.call(this);
case  1 :
return rand__4675.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4677 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4677,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4677,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4686 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4687 = (function (h,child,parent){
var or__3548__auto____4678 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4678))
{return or__3548__auto____4678;
} else
{var or__3548__auto____4679 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4679))
{return or__3548__auto____4679;
} else
{var and__3546__auto____4680 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4680))
{var and__3546__auto____4681 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4681))
{var and__3546__auto____4682 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4682))
{var ret__4683 = true;
var i__4684 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4685 = cljs.core.not.call(null,ret__4683);

if(cljs.core.truth_(or__3548__auto____4685))
{return or__3548__auto____4685;
} else
{return cljs.core._EQ_.call(null,i__4684,cljs.core.count.call(null,parent));
}
})()))
{return ret__4683;
} else
{{
var G__4689 = isa_QMARK_.call(null,h,child.call(null,i__4684),parent.call(null,i__4684));
var G__4690 = (i__4684 + 1);
ret__4683 = G__4689;
i__4684 = G__4690;
continue;
}
}
break;
}
} else
{return and__3546__auto____4682;
}
} else
{return and__3546__auto____4681;
}
} else
{return and__3546__auto____4680;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4686.call(this,h,child);
case  3 :
return isa_QMARK___4687.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4691 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4692 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4691.call(this,h);
case  2 :
return parents__4692.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4694 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4695 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4694.call(this,h);
case  2 :
return ancestors__4695.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4697 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4698 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4697.call(this,h);
case  2 :
return descendants__4698.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4708 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4709 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__4703 = "\uFDD0'parents".call(null,h);
var td__4704 = "\uFDD0'descendants".call(null,h);
var ta__4705 = "\uFDD0'ancestors".call(null,h);
var tf__4706 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4707 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4703.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4705.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4705.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4703,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4706.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4704,parent,ta__4705),"\uFDD0'descendants":tf__4706.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4705,tag,td__4704)});
})());

if(cljs.core.truth_(or__3548__auto____4707))
{return or__3548__auto____4707;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4708.call(this,h,tag);
case  3 :
return derive__4709.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4715 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4716 = (function (h,tag,parent){
var parentMap__4711 = "\uFDD0'parents".call(null,h);
var childsParents__4712 = (cljs.core.truth_(parentMap__4711.call(null,tag))?cljs.core.disj.call(null,parentMap__4711.call(null,tag),parent):cljs.core.set([]));
var newParents__4713 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4712))?cljs.core.assoc.call(null,parentMap__4711,tag,childsParents__4712):cljs.core.dissoc.call(null,parentMap__4711,tag));
var deriv_seq__4714 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4700_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4700_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4700_SHARP_),cljs.core.second.call(null,p1__4700_SHARP_)));
}),cljs.core.seq.call(null,newParents__4713)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4711.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4701_SHARP_,p2__4702_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4701_SHARP_,p2__4702_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4714));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4715.call(this,h,tag);
case  3 :
return underive__4716.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4718 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4720 = (cljs.core.truth_((function (){var and__3546__auto____4719 = xprefs__4718;

if(cljs.core.truth_(and__3546__auto____4719))
{return xprefs__4718.call(null,y);
} else
{return and__3546__auto____4719;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4720))
{return or__3548__auto____4720;
} else
{var or__3548__auto____4722 = (function (){var ps__4721 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4721) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4721),prefer_table)))
{} else
{}
{
var G__4725 = cljs.core.rest.call(null,ps__4721);
ps__4721 = G__4725;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4722))
{return or__3548__auto____4722;
} else
{var or__3548__auto____4724 = (function (){var ps__4723 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4723) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4723),y,prefer_table)))
{} else
{}
{
var G__4726 = cljs.core.rest.call(null,ps__4723);
ps__4723 = G__4726;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4724))
{return or__3548__auto____4724;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4727 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4727))
{return or__3548__auto____4727;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4736 = cljs.core.reduce.call(null,(function (be,p__4728){
var vec__4729__4730 = p__4728;
var k__4731 = cljs.core.nth.call(null,vec__4729__4730,0,null);
var ___4732 = cljs.core.nth.call(null,vec__4729__4730,1,null);
var e__4733 = vec__4729__4730;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4731)))
{var be2__4735 = (cljs.core.truth_((function (){var or__3548__auto____4734 = (be === null);

if(cljs.core.truth_(or__3548__auto____4734))
{return or__3548__auto____4734;
} else
{return cljs.core.dominates.call(null,k__4731,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4733:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4735),k__4731,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4731," and ",cljs.core.first.call(null,be2__4735),", and neither is preferred")));
}
return be2__4735;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4736))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4736));
return cljs.core.second.call(null,best_entry__4736);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4737 = mf;

if(cljs.core.truth_(and__3546__auto____4737))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4737;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4738 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4738))
{return or__3548__auto____4738;
} else
{var or__3548__auto____4739 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4739))
{return or__3548__auto____4739;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4740 = mf;

if(cljs.core.truth_(and__3546__auto____4740))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4740;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4741 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4741))
{return or__3548__auto____4741;
} else
{var or__3548__auto____4742 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4742))
{return or__3548__auto____4742;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4743 = mf;

if(cljs.core.truth_(and__3546__auto____4743))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4743;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4744 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4744))
{return or__3548__auto____4744;
} else
{var or__3548__auto____4745 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4745))
{return or__3548__auto____4745;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4746 = mf;

if(cljs.core.truth_(and__3546__auto____4746))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4746;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4747 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4747))
{return or__3548__auto____4747;
} else
{var or__3548__auto____4748 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4748))
{return or__3548__auto____4748;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4749 = mf;

if(cljs.core.truth_(and__3546__auto____4749))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4749;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4750 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4750))
{return or__3548__auto____4750;
} else
{var or__3548__auto____4751 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4751))
{return or__3548__auto____4751;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4752 = mf;

if(cljs.core.truth_(and__3546__auto____4752))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4752;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4753 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4753))
{return or__3548__auto____4753;
} else
{var or__3548__auto____4754 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4754))
{return or__3548__auto____4754;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4755 = mf;

if(cljs.core.truth_(and__3546__auto____4755))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4755;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4756 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4756))
{return or__3548__auto____4756;
} else
{var or__3548__auto____4757 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4757))
{return or__3548__auto____4757;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4758 = mf;

if(cljs.core.truth_(and__3546__auto____4758))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4758;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4759 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4759))
{return or__3548__auto____4759;
} else
{var or__3548__auto____4760 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4760))
{return or__3548__auto____4760;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4761 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4762 = cljs.core._get_method.call(null,mf,dispatch_val__4761);

if(cljs.core.truth_(target_fn__4762))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4761)));
}
return cljs.core.apply.call(null,target_fn__4762,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4763 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4764 = this;
cljs.core.swap_BANG_.call(null,this__4764.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4764.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4764.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4764.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4765 = this;
cljs.core.swap_BANG_.call(null,this__4765.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4765.method_cache,this__4765.method_table,this__4765.cached_hierarchy,this__4765.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4766 = this;
cljs.core.swap_BANG_.call(null,this__4766.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4766.method_cache,this__4766.method_table,this__4766.cached_hierarchy,this__4766.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4767 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4767.cached_hierarchy),cljs.core.deref.call(null,this__4767.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4767.method_cache,this__4767.method_table,this__4767.cached_hierarchy,this__4767.hierarchy);
}
var temp__3695__auto____4768 = cljs.core.deref.call(null,this__4767.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4768))
{var target_fn__4769 = temp__3695__auto____4768;

return target_fn__4769;
} else
{var temp__3695__auto____4770 = cljs.core.find_and_cache_best_method.call(null,this__4767.name,dispatch_val,this__4767.hierarchy,this__4767.method_table,this__4767.prefer_table,this__4767.method_cache,this__4767.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4770))
{var target_fn__4771 = temp__3695__auto____4770;

return target_fn__4771;
} else
{return cljs.core.deref.call(null,this__4767.method_table).call(null,this__4767.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4772 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4772.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4772.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4772.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4772.method_cache,this__4772.method_table,this__4772.cached_hierarchy,this__4772.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4773 = this;
return cljs.core.deref.call(null,this__4773.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4774 = this;
return cljs.core.deref.call(null,this__4774.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4775 = this;
return cljs.core.do_dispatch.call(null,mf,this__4775.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4776__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4776 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4776__delegate.call(this, _, args);
};
G__4776.cljs$lang$maxFixedArity = 1;
G__4776.cljs$lang$applyTo = (function (arglist__4777){
var _ = cljs.core.first(arglist__4777);
var args = cljs.core.rest(arglist__4777);
return G__4776__delegate.call(this, _, args);
});
return G__4776;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
