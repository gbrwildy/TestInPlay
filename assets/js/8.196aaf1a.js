(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{429:function(t,e,a){},472:function(t,e,a){"use strict";a(429)},506:function(t,e,a){"use strict";a.r(e);a(143),a(19),a(40);var s={props:{url:{type:String,required:!0,default:""},link:{type:Boolean,required:!1},cleanUrl:{type:Boolean,require:!1,default:!0},caption:{type:String,required:!1,default:""},maxHeight:{type:Number,required:!1}},methods:{getDisplayUrl:function(t){return this.cleanUrl?t.replace("https://","").replace("http://","").replace(/\/$/,""):t}}},r=(a(472),a(8)),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.link?"a":"div",{tag:"component",staticClass:"browser-shot",attrs:{href:t.link?t.url:"",target:"_blank",rel:"noopener"}},[a("figure",{staticClass:"browser-shot-wrapper"},[a("div",{staticClass:"browser-shot-content"},[a("div",{staticClass:"browser-top"}),t._v(" "),a("div",{staticClass:"address-bar"},[a("div",{staticClass:"address"},[t._v(t._s(t.getDisplayUrl(t.url)))])]),t._v(" "),a("div",{staticClass:"image",class:{"limit-height":t.maxHeight},style:{maxHeight:t.maxHeight?t.maxHeight+"px":null}},[t._t("default")],2)]),t._v(" "),t.caption?a("figcaption",{staticClass:"caption"},[t._v(t._s(t.caption))]):t._e()])])}),[],!1,null,null,null);e.default=i.exports}}]);