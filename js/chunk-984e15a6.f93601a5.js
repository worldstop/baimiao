(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-984e15a6"],{"0309":function(t,e,a){},"0b5e":function(t,e,a){"use strict";a("0309")},"608d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Team"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增数据")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData}},[e("el-table-column",{attrs:{prop:"Id",label:"序号",width:"180"}}),e("el-table-column",{attrs:{prop:"Img",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{staticStyle:{width:"100%"},attrs:{src:t.imgserver+a.row.Img,alt:""}})]}}])}),e("el-table-column",{attrs:{prop:"Remark",label:"备注"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.handleEdit(a.$index,a.row)}}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(a.$index,a.row)}}})]}}])})],1),e("el-dialog",{attrs:{title:"团队风采编辑",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.formData}},[e("el-form-item",{attrs:{label:"风采图片","label-width":t.formLabelWidth}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://shkjgw.shkjem.com/api/UpLoad/UploadImage",headers:t.headers,"show-file-list":!1,"on-success":t.handleSuccess}},[t.formData.Img?e("img",{staticClass:"avatar",attrs:{src:t.imgserver+t.formData.Img}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",{attrs:{label:"备注","label-width":t.formLabelWidth}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Remark,callback:function(e){t.$set(t.formData,"Remark",e)},expression:"formData.Remark"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},i=[],n={data:function(){return{loading:!0,dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],formData:{Id:0,Img:"",Remark:"",CreateTime:new Date},options:{},headers:{}}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.headers={Authorization:t},this.loadData()},methods:{handleSuccess:function(t,e,a){window.console.log(t,e,a),this.formData.Img=t},loadData:function(){var t=this;this.loading=!0,this.$http.get("Team/GetTeamAll").then((function(e){window.console.log(e),t.tableData=e.data,t.loading=!1})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))},openDialog:function(){this.formData.Id=0,this.formData.Img="",this.formData.Remark="",this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){var t=this;window.console.log(this.formData),this.formData.Id?(this.loading=!0,this.$http.post("Team/ModifiedTeam",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"修改成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))):(this.loading=!0,this.$http.post("Team/CreateTeam",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"创建成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})))},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var a=this;window.console.log(t,e),this.$confirm("此操作将永久此条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.loading=!0,a.$http.post("Team/DeleteTeam?id=".concat(e.Id),null,a.options).then((function(t){a.loading=!1,window.console.log(t),a.$message({message:"删除成功！",type:"success"}),a.loadData()})).catch((function(t){a.$message({message:"网络或程序异常！"+t,type:"error"})}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},dateFormat:function(t){var e=new Date(t.CreateTime);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},s=n,l=(a("0b5e"),a("be6a")),r=Object(l["a"])(s,o,i,!1,null,"0bf77590",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-984e15a6.f93601a5.js.map