(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5c9e490","chunk-2d0d6ef4","chunk-2c9e909e"],{"04ae":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-search-dialog"},[s("el-dialog",{attrs:{visible:e.isShowSearch,width:"300px","destroy-on-close":"",modal:!1,fullscreen:"","show-close":!1},on:{"update:visible":function(t){e.isShowSearch=t}}},[s("el-autocomplete",{ref:"layoutMenuAutocompleteRef",attrs:{"fetch-suggestions":e.menuSearch,placeholder:e.$t("message.user.searchPlaceholder"),"prefix-icon":"el-icon-search"},on:{select:e.onHandleSelect,blur:e.onSearchBlur},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[s("div",[s("i",{staticClass:"mr10",class:n.meta.icon}),e._v(e._s(e.$t(n.meta.title)))])]}}]),model:{value:e.menuQuery,callback:function(t){e.menuQuery=t},expression:"menuQuery"}})],1)],1)},i=[],o=(s("14d9"),{name:"layoutBreadcrumbSearch",data(){return{isShowSearch:!1,menuQuery:"",tagsViewList:[]}},methods:{openSearch(){this.menuQuery="",this.isShowSearch=!0,this.initTageView(),this.$nextTick(()=>{this.$refs.layoutMenuAutocompleteRef.focus()})},closeSearch(){setTimeout(()=>{this.isShowSearch=!1},150)},menuSearch(e,t){let s=e?this.tagsViewList.filter(this.createFilter(e)):this.tagsViewList;t(s)},createFilter(e){return t=>t.path.toLowerCase().indexOf(e.toLowerCase())>-1||t.meta.title.toLowerCase().indexOf(e.toLowerCase())>-1||this.$t(t.meta.title).toLowerCase().indexOf(e.toLowerCase())>-1},initTageView(){if(this.tagsViewList.length>0)return!1;this.$store.state.tagsViewRoutes.tagsViewRoutes.map(e=>{e.meta.isHide||this.tagsViewList.push({...e})})},onHandleSelect(e){let{path:t,redirect:s}=e;e.meta.isLink&&!e.meta.isIframe?window.open(e.meta.isLink):s?this.$router.push(s):this.$router.push(t),this.closeSearch()},onSearchBlur(){this.closeSearch()}}}),r=o,a=(s("4b65"),s("2877")),l=Object(a["a"])(r,n,i,!1,null,"5d6574f9",null);t["default"]=l.exports},1123:function(e,t,s){},"4b65":function(e,t,s){"use strict";s("ebbb")},7555:function(e,t,s){"use strict";s.r(t),s.d(t,"useLoginApi",(function(){return i}));var n=s("b775");function i(){return{signIn:e=>Object(n["default"])({url:"/token/login",method:"post",params:e}),signOut:()=>Object(n["default"])({url:"/token/logout",method:"post"})}}},"93bf":function(e,t,s){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},s=e.exports,n=function(){for(var e,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,i=s.length,o={};n<i;n++)if(e=s[n],e&&e[1]in t){for(n=0;n<e.length;n++)o[s[0][n]]=e[n];return o}return!1}(),i={change:n.fullscreenchange,error:n.fullscreenerror},o={request:function(e,s){return new Promise(function(i,o){var r=function(){this.off("change",r),i()}.bind(this);this.on("change",r),e=e||t.documentElement;var a=e[n.requestFullscreen](s);a instanceof Promise&&a.then(r).catch(o)}.bind(this))},exit:function(){return new Promise(function(e,s){if(this.isFullscreen){var i=function(){this.off("change",i),e()}.bind(this);this.on("change",i);var o=t[n.exitFullscreen]();o instanceof Promise&&o.then(i).catch(s)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,s){var n=i[e];n&&t.addEventListener(n,s,!1)},off:function(e,s){var n=i[e];n&&t.removeEventListener(n,s,!1)},raw:n};n?(Object.defineProperties(o,{isFullscreen:{get:function(){return Boolean(t[n.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[n.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[n.fullscreenEnabled])}}}),s?e.exports=o:window.screenfull=o):s?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}})()},bcc6:function(e,t,s){"use strict";s("1123")},d585:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"layout-navbars-breadcrumb-user",style:{flex:e.layoutUserFlexNum}},[s("el-dropdown",{attrs:{"show-timeout":70,"hide-timeout":50,trigger:"click"},on:{command:e.onComponentSizeChange},scopedSlots:e._u([{key:"dropdown",fn:function(){return[s("el-dropdown-menu",[s("el-dropdown-item",{attrs:{command:"",disabled:""===e.disabledSize}},[e._v(e._s(e.$t("message.user.dropdownDefault")))]),s("el-dropdown-item",{attrs:{command:"medium",disabled:"medium"===e.disabledSize}},[e._v(e._s(e.$t("message.user.dropdownMedium")))]),s("el-dropdown-item",{attrs:{command:"small",disabled:"small"===e.disabledSize}},[e._v(e._s(e.$t("message.user.dropdownSmall")))]),s("el-dropdown-item",{attrs:{command:"mini",disabled:"mini"===e.disabledSize}},[e._v(e._s(e.$t("message.user.dropdownMini")))])],1)]},proxy:!0}])},[s("div",{staticClass:"layout-navbars-breadcrumb-user-icon"},[s("i",{staticClass:"iconfont icon-ziti",attrs:{title:e.$t("message.user.title0")}})])]),s("el-dropdown",{attrs:{"show-timeout":70,"hide-timeout":50,trigger:"click"},on:{command:e.onLanguageChange}},[s("div",{staticClass:"layout-navbars-breadcrumb-user-icon"},[s("i",{staticClass:"iconfont",class:"en"===e.disabledI18n?"icon-fuhao-yingwen":"icon-fuhao-zhongwen",attrs:{title:e.$t("message.user.title1")}})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"zh-cn",disabled:"zh-cn"===e.disabledI18n}},[e._v("简体中文")]),s("el-dropdown-item",{attrs:{command:"en",disabled:"en"===e.disabledI18n}},[e._v("English")]),s("el-dropdown-item",{attrs:{command:"zh-tw",disabled:"zh-tw"===e.disabledI18n}},[e._v("繁體中文")])],1)],1),s("div",{staticClass:"layout-navbars-breadcrumb-user-icon",on:{click:e.onSearchClick}},[s("i",{staticClass:"el-icon-search",attrs:{title:e.$t("message.user.title2")}})]),s("div",{staticClass:"layout-navbars-breadcrumb-user-icon",on:{click:e.onLayoutSetingClick}},[s("i",{staticClass:"icon-skin iconfont",attrs:{title:e.$t("message.user.title3")}})]),s("div",{staticClass:"layout-navbars-breadcrumb-user-icon mr10",on:{click:e.onScreenfullClick}},[s("i",{staticClass:"iconfont",class:e.isScreenfull?"icon-tuichuquanping":"icon-fullscreen",attrs:{title:e.isScreenfull?e.$t("message.user.title6"):e.$t("message.user.title5")}})]),s("el-dropdown",{attrs:{"show-timeout":70,"hide-timeout":50},on:{command:e.onDropdownCommand}},[s("span",{staticClass:"layout-navbars-breadcrumb-user-link"},[s("img",{staticClass:"layout-navbars-breadcrumb-user-link-photo mr5",attrs:{src:e.getUserInfos.photo}}),e._v(" "+e._s(""===e.getUserInfos.userName?"test":e.getUserInfos.userName)+" "),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"/home"}},[e._v(e._s(e.$t("message.user.dropdown1")))]),s("el-dropdown-item",{attrs:{divided:"",command:"logOut"}},[e._v(e._s(e.$t("message.user.dropdown5")))])],1)],1),s("Search",{ref:"searchRef"})],1)},i=[],o=(s("14d9"),s("93bf")),r=s.n(o),a=s("5d2d"),l=s("04ae"),c=s("7555"),u=(s("5c96"),{name:"layoutBreadcrumbUser",components:{Search:l["default"]},data(){return{isScreenfull:!1,isShowUserNewsPopover:!1,disabledI18n:"zh-cn",disabledSize:""}},computed:{getUserInfos(){return this.$store.state.userInfos.userInfos},layoutUserFlexNum(){let{layout:e,isClassicSplitMenu:t}=this.$store.state.themeConfig.themeConfig,s="";return s="defaults"===e||"classic"===e&&!t||"columns"===e?1:null,s}},mounted(){a["Local"].get("themeConfigPrev")&&(this.initI18n(),this.initComponentSize())},methods:{onSearchClick(){this.$refs.searchRef.openSearch()},onLayoutSetingClick(){this.bus.$emit("openSetingsDrawer")},onScreenfullClick(){if(!r.a.isEnabled)return this.$message.warning("暂不不支持全屏"),!1;r.a.toggle(),r.a.on("change",()=>{r.a.isFullscreen?this.isScreenfull=!0:this.isScreenfull=!1}),this.bus.$emit("updateElScrollBar")},onComponentSizeChange(e){a["Local"].remove("themeConfigPrev"),this.$store.state.themeConfig.themeConfig.globalComponentSize=e,a["Local"].set("themeConfigPrev",this.$store.state.themeConfig.themeConfig),this.$ELEMENT.size=e,this.initComponentSize(),window.location.reload()},onLanguageChange(e){a["Local"].remove("themeConfigPrev"),this.$store.state.themeConfig.themeConfig.globalI18n=e,a["Local"].set("themeConfigPrev",this.$store.state.themeConfig.themeConfig),this.$i18n.locale=e,this.initI18n()},initI18n(){switch(a["Local"].get("themeConfigPrev").globalI18n){case"zh-cn":this.disabledI18n="zh-cn";break;case"en":this.disabledI18n="en";break;case"zh-tw":this.disabledI18n="zh-tw";break}},initComponentSize(){switch(a["Local"].get("themeConfigPrev").globalComponentSize){case"":this.disabledSize="";break;case"medium":this.disabledSize="medium";break;case"small":this.disabledSize="small";break;case"mini":this.disabledSize="mini";break}},onDropdownCommand(e){"logOut"===e?this.$msgbox({closeOnClickModal:!1,closeOnPressEscape:!1,title:this.$t("message.user.logOutTitle"),message:this.$t("message.user.logOutMessage"),showCancelButton:!0,confirmButtonText:this.$t("message.user.logOutConfirm"),cancelButtonText:this.$t("message.user.logOutCancel"),beforeClose:(e,t,s)=>{"confirm"===e?(t.confirmButtonLoading=!0,t.confirmButtonText=this.$t("message.user.logOutExit"),this.userLogout(),s(),t.confirmButtonLoading=!1):s()}}).then(()=>{}).catch(()=>{}):this.$router.push(e)},userLogout(){Object(c["useLoginApi"])().signOut().then(e=>{a["Session"].clear(),window.location.reload()}).catch(()=>{})}}}),d=u,m=(s("bcc6"),s("2877")),h=Object(m["a"])(d,n,i,!1,null,"cfc24be6",null);t["default"]=h.exports},ebbb:function(e,t,s){}}]);