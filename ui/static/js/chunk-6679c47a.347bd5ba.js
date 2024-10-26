(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6679c47a","chunk-2d0df2b7","chunk-2d237701"],{8988:function(t,e,a){"use strict";a.r(e),a.d(e,"roleListApi",(function(){return l}));var s=a("b775");function l(){return{list:t=>Object(s["default"])({url:"/sys/role/list",method:"get",params:t}),add:t=>Object(s["default"])({url:"/sys/role/save",method:"post",data:t}),update:t=>Object(s["default"])({url:"/sys/role/update",method:"post",data:t}),delete:t=>Object(s["default"])({url:"/sys/role/delete",method:"post",data:t}),select:()=>Object(s["default"])({url:"/sys/role/select",method:"get"})}}},e382:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"system-user-container layout-padding"},[a("el-card",{staticClass:"layout-padding-auto",attrs:{shadow:"hover"}},[a("div",{staticClass:"system-user-search mb15"},[a("el-input",{staticStyle:{"max-width":"180px"},attrs:{size:"default",placeholder:"请输入用户名称"},model:{value:t.state.tableData.param.keyword,callback:function(e){t.$set(t.state.tableData.param,"keyword",e)},expression:"state.tableData.param.keyword"}}),a("el-button",{staticClass:"ml10",attrs:{size:"default",type:"primary"},on:{click:function(e){return t.fetchData()}}},[a("el-icon",[a("ele-Search")],1),t._v(" 查询 ")],1),a("el-button",{staticClass:"ml10",attrs:{size:"default",type:"success"},on:{click:function(e){return t.onOpenAddOrEdit("add")}}},[a("el-icon",[a("ele-FolderAdd")],1),t._v(" 新增用户 ")],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.state.tableData.loading,expression:"state.tableData.loading"}],staticStyle:{width:"100%"},attrs:{data:t.state.tableData.data}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"userId",label:"用户ID","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"用户名","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机号","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"用户状态","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("el-tag",{attrs:{type:"success"}},[t._v("启用")]):a("el-tag",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{disabled:"admin"===e.row.username,size:"small",text:"",type:"primary"},on:{click:function(a){return t.onOpenAddOrEdit("edit",e.row)}}},[t._v("修改 ")]),a("el-button",{attrs:{disabled:"admin"===e.row.username,size:"small",text:"",type:"primary"},on:{click:function(a){return t.onRowDel(e.row)}}},[t._v("删除 ")])]}}])})],1),a("el-pagination",{staticClass:"mt15",attrs:{"pager-count":5,"page-sizes":[10,20,30],"current-page":t.state.tableData.param.current,background:"","page-size":t.state.tableData.param.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.state.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:t.state.dialog.title,visible:t.state.dialog.isShowDialog,width:"769px"},on:{"update:visible":function(e){return t.$set(t.state.dialog,"isShowDialog",e)}}},[a("div",[a("el-form",{ref:"userDialogFormRef",attrs:{model:t.state.ruleForm,size:"default","label-width":"90px"}},[a("el-row",{attrs:{gutter:35}},[a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"账户名称"}},[a("el-input",{attrs:{placeholder:"请输入账户名称",clearable:""},model:{value:t.state.ruleForm.username,callback:function(e){t.$set(t.state.ruleForm,"username",e)},expression:"state.ruleForm.username"}})],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"账户密码"}},[a("el-input",{attrs:{placeholder:"请输入",type:"password",clearable:""},model:{value:t.state.ruleForm.password,callback:function(e){t.$set(t.state.ruleForm,"password",e)},expression:"state.ruleForm.password"}})],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.state.ruleForm.mobile,callback:function(e){t.$set(t.state.ruleForm,"mobile",e)},expression:"state.ruleForm.mobile"}})],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"邮箱"}},[a("el-input",{attrs:{placeholder:"请输入",clearable:""},model:{value:t.state.ruleForm.email,callback:function(e){t.$set(t.state.ruleForm,"email",e)},expression:"state.ruleForm.email"}})],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"用户状态"}},[a("el-radio-group",{model:{value:t.state.ruleForm.status,callback:function(e){t.$set(t.state.ruleForm,"status",e)},expression:"state.ruleForm.status"}},[a("el-radio-button",{attrs:{label:0}},[t._v("禁用")]),a("el-radio-button",{attrs:{label:1}},[t._v("正常")])],1)],1)],1),a("el-col",{staticClass:"mb20",attrs:{xs:24,sm:12,md:12,lg:12,xl:12}},[a("el-form-item",{attrs:{label:"选择角色"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.state.ruleForm.roleIdList,callback:function(e){t.$set(t.state.ruleForm,"roleIdList",e)},expression:"state.ruleForm.roleIdList"}},t._l(t.state.roleListData,(function(t){return a("el-option",{key:t.roleId,attrs:{label:t.roleName,value:t.roleId}})})),1)],1)],1)],1)],1),[a("span",{staticClass:"dialog-footer"},[a("el-button",{attrs:{size:"default"},on:{click:t.onCancel}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",loading:t.state.submitBtn.loading,size:"default"},on:{click:t.onSubmit}},[t._v(t._s(t.state.dialog.submitTxt))])],1)]],2)])],1)},l=[],o=a("fab2"),r=a("8988"),i=a("5c96"),n={name:"user",data(){return{state:{roleListData:[],tableData:{data:[],total:0,loading:!1,param:{current:1,limit:10,keyword:""}},dialog:{isShowDialog:!1,type:"",title:"",submitTxt:""},ruleForm:{userId:"",username:"",mobile:"",email:"",password:"",status:1,roleIdList:[]},submitBtn:{loading:!1,type:""}}}},methods:{initRoleData(){Object(r["roleListApi"])().select().then(t=>{this.state.roleListData=t.data})},fetchData(){this.state.tableData.loading=!0,Object(o["useListApi"])().list(this.state.tableData.param).then(t=>{this.state.tableData.data=t.data.records,this.state.tableData.total=t.data.total,this.state.tableData.loading=!1})},onOpenAddOrEdit(t,e){"edit"===t?(this.state.submitBtn.type="edit",this.state.ruleForm=e,this.state.dialog.title="修改用户",this.state.dialog.submitTxt="修 改"):(this.state.ruleForm={userId:"",username:"",mobile:"",email:"",password:"",status:1},this.state.submitBtn.type="add",this.state.dialog.title="新增用户",this.state.dialog.submitTxt="新 增"),this.state.dialog.isShowDialog=!0},onRowDel(t){i["MessageBox"].confirm(`此操作将永久删除账户名称：“${t.username}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(()=>{this.deleteInfo(t)}).catch(()=>{})},deleteInfo(t){Object(o["useListApi"])().delete(t).then(t=>{i["Message"].success("删除成功"),this.fetchData()}).catch(()=>{this.fetchData()})},handleSizeChange(t){this.state.tableData.data=[],this.state.tableData.param.limit=t,this.fetchData()},handleCurrentChange(t){this.state.tableData.data=[],this.state.tableData.param.current=t,this.fetchData()},closeDialog(){this.state.dialog.isShowDialog=!1},onCancel(){this.closeDialog()},onSubmit(){this.state.submitBtn.loading=!0,"edit"===this.state.submitBtn.type?Object(o["useListApi"])().update(this.state.ruleForm).then(t=>{this.state.submitBtn.loading=!1,this.closeDialog(),this.fetchData()}).catch(()=>{this.state.submitBtn.loading=!1}):Object(o["useListApi"])().add(this.state.ruleForm).then(t=>{this.state.submitBtn.loading=!1,this.closeDialog(),this.fetchData()}).catch(()=>{this.state.submitBtn.loading=!1})}},computed:{},created(){},mounted(){this.fetchData(),this.initRoleData()}},u=n,d=a("2877"),c=Object(d["a"])(u,s,l,!1,null,"6c548d26",null);e["default"]=c.exports},fab2:function(t,e,a){"use strict";a.r(e),a.d(e,"useListApi",(function(){return l}));var s=a("b775");function l(){return{list:t=>Object(s["default"])({url:"/sys/user/list",method:"get",params:t}),add:t=>Object(s["default"])({url:"/sys/user/save",method:"post",data:t}),update:t=>Object(s["default"])({url:"/sys/user/update",method:"post",data:t}),delete:t=>Object(s["default"])({url:"/sys/user/delete",method:"post",data:t})}}}}]);