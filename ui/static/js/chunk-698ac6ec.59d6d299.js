(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-698ac6ec","chunk-2d0aa786"],{"0f3e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-scrollbar layout-link-container"},[n("div",{staticClass:"layout-view-bg-white flex layout-view-link"},[n("div",{staticClass:"layout-link-warp"},[n("i",{staticClass:"layout-link-icon iconfont icon-xingqiu"}),n("div",{staticClass:"layout-link-msg"},[e._v('页面 "'+e._s(e.$t(e.meta.title))+'" 已在新窗口中打开')]),n("el-button",{staticClass:"mt30",attrs:{round:"",size:"small"},on:{click:e.onGotoFullPage}},[n("i",{staticClass:"iconfont icon-lianjie"}),n("span",[e._v("立即前往体验")])])],1)])])},u=[],i=n("10c4"),a={name:"layoutLinkView",props:{meta:{type:Object,default:()=>{}}},methods:{onGotoFullPage(){const{origin:e,pathname:t}=window.location;Object(i["verifyUrl"])(this.meta.isLink)?window.open(this.meta.isLink):window.open(`${e}${t}#${this.meta.isLink}`)}}},c=a,d=(n("2838"),n("2877")),o=Object(d["a"])(c,r,u,!1,null,"444cfd7e",null);t["default"]=o.exports},"10c4":function(e,t,n){"use strict";function r(e){let t=e.replace(/(^\s*)|(\s*$)/g,"");return t=t.replace(/[^\d]/g,""),t=t.replace(/^0/g,""),t=t.replace(/^[1-9]\d\d{1,3}$/,"100"),t}function u(e){let t=i(e);return t=t.replace(/^[1-9]\d\d{1,3}$/,"100"),t=t.replace(/^100\.$/,"100"),t}function i(e){let t=e.replace(/(^\s*)|(\s*$)/g,"");return t=t.replace(/[^\d.]/g,""),t=t.replace(/^0{2}$/g,"0"),t=t.replace(/^\./g,""),t=t.replace(".","$#$").replace(/\./g,"").replace("$#$","."),t=t.replace(/^(\\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),t}function a(e){let t=e.replace(/(^\s*)|(\s*$)/g,"");return t=t.replace(/[\\.]*/g,""),t=t.replace(/(^0[\d]*)$/g,"0"),t=t.replace(/^0\d$/g,"0"),t=t.replace(/[^\d]/g,""),t}function c(e){let t=e.replace(/[\u4e00-\u9fa5\s]+/g,"");return t=t.replace(/(^\s*)|(\s*$)/g,""),t}function d(e){let t=e.replace(/[a-zA-Z]+/g,"");return t=t.replace(/(^\s*)|(\s*$)/g,""),t}function o(e){let t=e.replace(/(^\s*)|(\s*$)/g,"");return t}function f(e){let t=i(e);return t=t.toString().split("."),t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t=t.join("."),t}function s(e,t="",n="red"){let r=t.replace(new RegExp(e,"gi"),`<span style='color: ${n}'>${e}</span>`);return r}function l(e,t="仟佰拾亿仟佰拾万仟佰拾元角分",n=""){e+="00";let r=e.indexOf(".");r>=0&&(e=e.substring(0,r)+e.substr(r+1,2)),t=t.substr(t.length-e.length);for(let u=0;u<e.length;u++)n+="零壹贰叁肆伍陆柒捌玖".substr(e.substr(u,1),1)+t.substr(u,1);return n=n.replace(/零角零分$/,"整").replace(/零[仟佰拾]/g,"零").replace(/零{2,}/g,"零").replace(/零([亿|万])/g,"$1").replace(/零+元/,"元").replace(/亿零{0,3}万/,"亿").replace(/^元/,"零元"),n}function $(e){return!!/^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(e)}function p(e){return!!/\d{3}-\d{8}|\d{4}-\d{7}/.test(e)}function g(e){return!!/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(e)}function v(e){return!!/^[a-zA-Z]\w{5,15}$/.test(e)}function y(e){return!!/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\d!@#$%^&\\.*]+$)[a-zA-Z\d!@#$%^&\\.*]{6,16}$/.test(e)}function z(e){let t="";return/^(?:\d+|[a-zA-Z]+|[!@#$%^&\\.*]+){6,16}$/.test(e)&&(t="弱"),/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\\.*]+$)[a-zA-Z\d!@#$%^&\\.*]{6,16}$/.test(e)&&(t="中"),/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\\.*]+$)(?![\d!@#$%^&\\.*]+$)[a-zA-Z\d!@#$%^&\\.*]{6,16}$/.test(e)&&(t="强"),t}function A(e){return!!/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e)}function m(e){return!!/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function w(e){return!!/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(e)}function b(e){return!!/^[\u4e00-\u9fa5]{1,6}(·[\u4e00-\u9fa5]{1,6}){0,2}$/.test(e)}function h(e){return!!/^[1-9][0-9]{5}$/.test(e)}function P(e){return!!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)}function Z(e){return!!/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(e)}n.r(t),n.d(t,"verifyNumberPercentage",(function(){return r})),n.d(t,"verifyNumberPercentageFloat",(function(){return u})),n.d(t,"verifyNumberIntegerAndFloat",(function(){return i})),n.d(t,"verifiyNumberInteger",(function(){return a})),n.d(t,"verifyCnAndSpace",(function(){return c})),n.d(t,"verifyEnAndSpace",(function(){return d})),n.d(t,"verifyAndSpace",(function(){return o})),n.d(t,"verifyNumberComma",(function(){return f})),n.d(t,"verifyTextColor",(function(){return s})),n.d(t,"verifyNumberCnUppercase",(function(){return l})),n.d(t,"verifyPhone",(function(){return $})),n.d(t,"verifyTelPhone",(function(){return p})),n.d(t,"verifyAccount",(function(){return g})),n.d(t,"verifyPassword",(function(){return v})),n.d(t,"verifyPasswordPowerful",(function(){return y})),n.d(t,"verifyPasswordStrength",(function(){return z})),n.d(t,"verifyIPAddress",(function(){return A})),n.d(t,"verifyEmail",(function(){return m})),n.d(t,"verifyIdCard",(function(){return w})),n.d(t,"verifyFullName",(function(){return b})),n.d(t,"verifyPostalCode",(function(){return h})),n.d(t,"verifyUrl",(function(){return P})),n.d(t,"verifyCarNum",(function(){return Z}))},2838:function(e,t,n){"use strict";n("7aeb")},"7aeb":function(e,t,n){}}]);