(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a1e5358"],{"2b6f":function(t,e,o){"use strict";o("baca")},baca:function(t,e,o){},f833:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"system-menu-container layout-pd"},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{staticClass:"system-menu-search mb15"},[o("el-input",{staticStyle:{"max-width":"180px"},attrs:{size:"default",placeholder:"请输入菜单名称"}}),o("el-button",{staticClass:"ml10",attrs:{size:"default",type:"primary"},on:{click:t.fetchData}},[o("el-icon",[o("ele-Search")],1),t._v(" 查询 ")],1),o("el-button",{staticClass:"ml10",attrs:{size:"default",type:"success"},on:{click:function(e){return t.onOpenAddOrEdit()}}},[o("el-icon",[o("ele-FolderAdd")],1),t._v(" 新增菜单 ")],1)],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.state.tableData.loading,expression:"state.tableData.loading"}],staticStyle:{width:"100%"},attrs:{data:t.state.tableData.data,"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}}},[o("el-table-column",{attrs:{label:"菜单名称","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"ml10"},[t._v(t._s(t.$t(e.row.meta.title)))])]}}])}),o("el-table-column",{attrs:{prop:"path",label:"路由路径","show-overflow-tooltip":""}}),o("el-table-column",{attrs:{label:"组件路径","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.component))])]}}])}),o("el-table-column",{attrs:{label:"排序","show-overflow-tooltip":"",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.orderSort)+" ")]}}])}),o("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":"",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"small",text:"",type:"primary"},on:{click:function(e){return t.onOpenAddOrEdit("add")}}},[t._v("新增")]),o("el-button",{attrs:{size:"small",text:"",type:"primary"},on:{click:function(o){return t.onOpenAddOrEdit("edit",e.row)}}},[t._v("修改 ")]),o("el-button",{attrs:{size:"small",text:"",type:"primary"},on:{click:function(o){return t.onRowDel(e.row)}}},[t._v("删除")])]}}])})],1)],1),o("el-dialog",{attrs:{title:t.state.dialog.title,visible:t.state.dialog.isShowDialog,width:"769px"},on:{"update:visible":function(e){return t.$set(t.state.dialog,"isShowDialog",e)}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{attrs:{size:"default"},on:{click:t.onCancel}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary",loading:t.state.submitBtn.loading,size:"default"},on:{click:t.onSubmit}},[t._v(t._s(t.state.dialog.submitTxt))])],1)]},proxy:!0}])},[o("el-form",{ref:"menuDialogFormRef",attrs:{model:t.state.ruleForm,size:"default","label-width":"80px"}},[o("el-row",{attrs:{gutter:35}},[o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[o("el-form-item",{attrs:{label:"上级菜单"}},[o("el-cascader",{staticClass:"w100",attrs:{options:t.state.menuData,props:{value:"menuId",label:"title"},placeholder:"请选择上级菜单",clearable:""},on:{change:t.selectMenuChange},model:{value:t.state.menuSelectData,callback:function(e){t.$set(t.state,"menuSelectData",e)},expression:"state.menuSelectData"}})],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"菜单名称"}},[o("el-input",{attrs:{placeholder:"格式：message.router.xxx",clearable:""},model:{value:t.state.ruleForm.meta.title,callback:function(e){t.$set(t.state.ruleForm.meta,"title",e)},expression:"state.ruleForm.meta.title"}})],1)],1),[o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"路由名称"}},[o("el-input",{attrs:{placeholder:"路由中的 name 值",clearable:""},model:{value:t.state.ruleForm.name,callback:function(e){t.$set(t.state.ruleForm,"name",e)},expression:"state.ruleForm.name"}})],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"路由路径"}},[o("el-input",{attrs:{placeholder:"路由中的 path 值",clearable:""},model:{value:t.state.ruleForm.path,callback:function(e){t.$set(t.state.ruleForm,"path",e)},expression:"state.ruleForm.path"}})],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"重定向"}},[o("el-input",{attrs:{placeholder:"请输入路由重定向",clearable:""},model:{value:t.state.ruleForm.redirect,callback:function(e){t.$set(t.state.ruleForm,"redirect",e)},expression:"state.ruleForm.redirect"}})],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"菜单图标"}},[o("el-popover",{attrs:{placement:"bottom",width:"450",trigger:"click"},on:{show:t.popoverShow}},[o("span",{attrs:{slot:"reference"},slot:"reference"},[o("el-input",{attrs:{"suffix-icon":"data-icon",placeholder:"请输入菜单图标"},model:{value:t.state.ruleForm.meta.icon,callback:function(e){t.$set(t.state.ruleForm.meta,"icon",e)},expression:"state.ruleForm.meta.icon"}},[o("template",{slot:"append"},[o("i",{class:t.state.ruleForm.meta.icon})])],2)],1),o("div",{staticClass:"iconList"},[o("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.iconList,(function(e,n){return o("el-tab-pane",{key:e.label,attrs:{name:"name"+n,label:e.label}},t._l(e.list,(function(e){return o("i",{key:e,class:e,staticStyle:{"font-size":"20px"},on:{click:function(o){return t.setIcon(e)}}})})),0)})),1)],1)])],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"组件路径"}},[o("el-input",{attrs:{placeholder:"组件路径",clearable:""},model:{value:t.state.ruleForm.component,callback:function(e){t.$set(t.state.ruleForm,"component",e)},expression:"state.ruleForm.component"}})],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[o("el-form-item",{attrs:{label:"链接地址"}},[o("el-input",{attrs:{placeholder:"外链/内嵌时链接地址（http:xxx.com）",clearable:"",disabled:!t.state.ruleForm.isLink},model:{value:t.state.ruleForm.meta.isLink,callback:function(e){t.$set(t.state.ruleForm.meta,"isLink",e)},expression:"state.ruleForm.meta.isLink"}})],1)],1)],o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"菜单排序"}},[o("el-input-number",{staticClass:"w100",attrs:{"controls-position":"right",placeholder:"请输入排序"},model:{value:t.state.ruleForm.orderSort,callback:function(e){t.$set(t.state.ruleForm,"orderSort",e)},expression:"state.ruleForm.orderSort"}})],1)],1),[o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"是否隐藏"}},[o("el-radio-group",{model:{value:t.state.ruleForm.meta.isHide,callback:function(e){t.$set(t.state.ruleForm.meta,"isHide",e)},expression:"state.ruleForm.meta.isHide"}},[o("el-radio",{attrs:{label:!0}},[t._v("隐藏")]),o("el-radio",{attrs:{label:!1}},[t._v("不隐藏")])],1)],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"页面缓存"}},[o("el-radio-group",{model:{value:t.state.ruleForm.meta.isKeepAlive,callback:function(e){t.$set(t.state.ruleForm.meta,"isKeepAlive",e)},expression:"state.ruleForm.meta.isKeepAlive"}},[o("el-radio",{attrs:{label:!0}},[t._v("缓存")]),o("el-radio",{attrs:{label:!1}},[t._v("不缓存")])],1)],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"是否固定"}},[o("el-radio-group",{model:{value:t.state.ruleForm.meta.isAffix,callback:function(e){t.$set(t.state.ruleForm.meta,"isAffix",e)},expression:"state.ruleForm.meta.isAffix"}},[o("el-radio",{attrs:{label:!0}},[t._v("固定")]),o("el-radio",{attrs:{label:!1}},[t._v("不固定")])],1)],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"是否外链"}},[o("el-radio-group",{attrs:{disabled:t.state.ruleForm.meta.isIframe},model:{value:t.state.ruleForm.isLink,callback:function(e){t.$set(t.state.ruleForm,"isLink",e)},expression:"state.ruleForm.isLink"}},[o("el-radio",{attrs:{label:!0}},[t._v("是")]),o("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1),o("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[o("el-form-item",{attrs:{label:"是否内嵌"}},[o("el-radio-group",{on:{change:t.onSelectIframeChange},model:{value:t.state.ruleForm.meta.isIframe,callback:function(e){t.$set(t.state.ruleForm.meta,"isIframe",e)},expression:"state.ruleForm.meta.isIframe"}},[o("el-radio",{attrs:{label:!0}},[t._v("是")]),o("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1)],1)]],2)],1)],1)],1)},i=[],a=o("2342"),l=o("5c96"),s={name:"menuList",data(){return{state:{tableData:{data:[],total:0,loading:!1,param:{current:1,limit:10,keyword:""}},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""},ruleForm:{parentId:"",menuType:"menu",name:"",component:"",isLink:!1,orderSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""}},menuData:[],menuSelectData:[],submitBtn:{loading:!1,type:""}},activeName:"0",iconList:[{label:"通用图标",id:"first",list:["iconfont iconicon_roundadd","iconfont iconicon_compile","iconfont iconicon_glass","iconfont iconicon_roundclose","iconfont iconicon_roundreduce","iconfont iconicon_delete","iconfont iconicon_shakehands","iconfont iconicon_task_done","iconfont iconicon_voipphone","iconfont iconicon_safety","iconfont iconicon_work","iconfont iconicon_study","iconfont iconicon_task","iconfont iconicon_subordinate","iconfont iconicon_star","iconfont iconicon_setting","iconfont iconicon_sms","iconfont iconicon_share","iconfont iconicon_secret","iconfont iconicon_scan_namecard","iconfont iconicon_principal","iconfont iconicon_group","iconfont iconicon_send","iconfont iconicon_scan","iconfont iconicon_search","iconfont iconicon_refresh","iconfont iconicon_savememo","iconfont iconicon_QRcode","iconfont iconicon_im_keyboard","iconfont iconicon_redpacket","iconfont iconicon_photo","iconfont iconicon_qq","iconfont iconicon_wechat","iconfont iconicon_phone","iconfont iconicon_namecard","iconfont iconicon_notice","iconfont iconicon_next_arrow","iconfont iconicon_left","iconfont iconicon_more","iconfont iconicon_details","iconfont iconicon_message","iconfont iconicon_mobilephone","iconfont iconicon_im_voice","iconfont iconicon_GPS","iconfont iconicon_ding","iconfont iconicon_exchange","iconfont iconicon_cspace","iconfont iconicon_doc","iconfont iconicon_dispose","iconfont iconicon_discovery","iconfont iconicon_community_line","iconfont iconicon_cloud_history","iconfont iconicon_coinpurse_line","iconfont iconicon_airplay","iconfont iconicon_at","iconfont iconicon_addressbook","iconfont iconicon_boss","iconfont iconicon_addperson","iconfont iconicon_affiliations_li","iconfont iconicon_addmessage","iconfont iconicon_addresslist","iconfont iconicon_add"]},{label:"系统图标",id:"second",list:["iconfont icon-zhongyingwen","iconfont icon-caidan","iconfont icon-rizhi1","iconfont icon-zhuti","iconfont icon-suoping","iconfont icon-bug","iconfont icon-qq1","iconfont icon-weixin1","iconfont icon-shouji","iconfont icon-mima","iconfont icon-yonghu","iconfont icon-yanzhengma","iconfont icon-canshu","iconfont icon-dongtai","iconfont icon-iconset0265","iconfont icon-shujuzhanshi2","iconfont icon-tuichuquanping","iconfont icon-rizhi","iconfont icon-cuowutishitubiao","iconfont icon-debug","iconfont icon-iconset0216","iconfont icon-quanxian","iconfont icon-shuaxin","iconfont icon-bofangqi-suoping","iconfont icon-quanping","iconfont icon-navicon","iconfont icon-biaodan","iconfont icon-liuliangyunpingtaitubiao08","iconfont icon-caidanguanli","iconfont icon-cuowu","iconfont icon-wxbgongju","iconfont icon-tuichu","iconfont icon-daohanglanmoshi02","iconfont icon-changyonglogo27","iconfont icon-biaoge","iconfont icon-baidu1","iconfont icon-tubiao","iconfont icon-souhu","iconfont icon-msnui-360","iconfont icon-iframe","iconfont icon-huanyingye"]}]}},methods:{selectMenuChange(t){console.log(t),this.menuSelectData=t,this.state.ruleForm.parentId=t[t.length-1]},popoverShow(){this.$nextTick(()=>{this.activeName="0"})},setIcon(t){this.state.ruleForm.meta.icon=t},getTreeData(t){if(t){for(var e=0;e<t.length;e++)t[e].children&&t[e].children.length<1?t[e].children=void 0:this.getTreeData(t[e].children);return t}},fetchData(){this.state.tableData.loading=!0,Object(a["useMenuApi"])().list(this.state.tableData.param).then(t=>{this.state.tableData.data=t.data,this.state.menuData=this.getTreeData(t.data),this.state.tableData.loading=!1})},onOpenAddOrEdit(t,e){"edit"===t?(this.state.ruleForm=e,this.state.dialog.title="修改菜单",this.state.dialog.submitTxt="修 改",this.state.menuSelectData=[],this.state.menuSelectData=this.findMenuIds(e.menuId,this.state.menuData)):(this.state.ruleForm={parentId:"",menuType:"menu",name:"",component:"",isLink:!1,orderSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""}},this.state.dialog.title="新增菜单",this.state.dialog.submitTxt="新 增"),this.state.submitBtn.type=t,this.state.dialog.isShowDialog=!0},findMenuIds(t,e){let o=[],n=[],i=0;function a(e,l){for(let s=0;s<e.length;s++){if(i=l,o[l]=e[s].menuId,e[s].menuId===t){n=o.slice(0,l+1);break}e[s].children&&(i++,a(e[s].children,i))}return n}return a(e,i)},onRowDel(t){l["MessageBox"].confirm(`此操作将永久删除名称：“${t.title}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{this.deleteInfo(t)}).catch(()=>{})},onSelectIframeChange(){this.state.ruleForm.meta.isIframe?this.state.state.ruleForm.isLink=!0:this.state.state.ruleForm.isLink=!1},handleSizeChange(t){this.state.tableData.data=[],this.state.tableData.param.limit=t,this.fetchData()},handleCurrentChange(t){this.state.tableData.data=[],this.state.tableData.param.current=t,this.fetchData()},closeDialog(){this.state.dialog.isShowDialog=!1},onCancel(){this.closeDialog()},onSubmit(){this.state.submitBtn.loading=!0,"edit"===this.state.submitBtn.type?Object(a["useMenuApi"])().update(this.state.ruleForm).then(t=>{this.state.submitBtn.loading=!1,this.closeDialog(),this.fetchData()}).catch(()=>{this.state.submitBtn.loading=!1}):Object(a["useMenuApi"])().save(this.state.ruleForm).then(t=>{this.state.submitBtn.loading=!1,this.closeDialog(),this.fetchData()}).catch(()=>{this.state.submitBtn.loading=!1})},deleteInfo(t){let e={menuId:t.menuId};Object(a["useMenuApi"])().delete(e).then(t=>{l["Message"].success("删除成功"),this.fetchData()}).catch(()=>{this.fetchData()})}},computed:{},created(){},mounted(){this.fetchData()}},c=s,r=(o("2b6f"),o("2877")),m=Object(r["a"])(c,n,i,!1,null,"32b1f154",null);e["default"]=m.exports}}]);