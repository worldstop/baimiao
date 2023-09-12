(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d246fc74"],{"17f8":function(t,e,a){"use strict";a("e842")},"3a8f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"news"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.openDialog()}}},[t._v("新增")]),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"Id",label:"序号",width:"180"}}),e("el-table-column",{attrs:{prop:"Title",label:"新闻标题",width:"180"}}),e("el-table-column",{attrs:{prop:"Img",label:"图片"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("img",{staticStyle:{width:"100%"},attrs:{src:t.imgserver+a.row.Img,alt:""}})]}}])}),e("el-table-column",{attrs:{prop:"Content",label:"新闻内容"},scopedSlots:t._u([{key:"default",fn:function(a){return[a.row.Content.length>100?e("p",[t._v(t._s(a.row.Content.substring(0,100))+" ...")]):e("p",[t._v(t._s(a.row.Content))])]}}])}),e("el-table-column",{attrs:{prop:"Type",label:"新闻类别"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(1==e.row.Type?"公司新闻":"行业动态"))]}}])}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){return t.handleEdit(a.$index,a.row)}}}),e("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(a.$index,a.row)}}})]}}])})],1),e("el-dialog",{attrs:{title:"新闻编辑",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.formData}},[e("el-form-item",{attrs:{label:"新闻名称","label-width":t.formLabelWidth}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.Title,callback:function(e){t.$set(t.formData,"Title",e)},expression:"formData.Title"}})],1),e("el-form-item",{attrs:{label:"新闻图片","label-width":t.formLabelWidth}},[e("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://shkjgw.shkjem.com/api/UpLoad/UploadImage",headers:t.headers,"show-file-list":!1,"on-success":t.handleSuccess}},[t.formData.Img?e("img",{staticClass:"avatar",attrs:{src:t.imgserver+t.formData.Img}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e("el-form-item",{attrs:{label:"新闻内容","label-width":t.formLabelWidth}},[e("el-input",{attrs:{type:"textarea",rows:10,autocomplete:"off"},model:{value:t.formData.Content,callback:function(e){t.$set(t.formData,"Content",e)},expression:"formData.Content"}})],1),e("el-form-item",{attrs:{label:"新闻类别","label-width":t.formLabelWidth}},[e("el-radio",{attrs:{label:1},model:{value:t.formData.Type,callback:function(e){t.$set(t.formData,"Type",e)},expression:"formData.Type"}},[t._v("公司新闻")]),e("el-radio",{attrs:{label:2},model:{value:t.formData.Type,callback:function(e){t.$set(t.formData,"Type",e)},expression:"formData.Type"}},[t._v("行业动态")])],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCreateOrModify()}}},[t._v("确 定")])],1)],1)],1)},i=[],n={name:"loginNews",data:function(){return{options:{},headers:{},tableData:[],formData:{Id:0,Title:"",Img:"",Type:1,Content:"",CreateTime:new Date},dialogFormVisible:!1,formLabelWidth:"120px",loading:!0}},mounted:function(){var t="Browser "+sessionStorage.getItem("token");this.options={headers:{Authorization:t}},this.headers={Authorization:t},this.loadData()},methods:{handleSuccess:function(t,e,a){window.console.log(t,e,a),this.formData.Img=t},loadData:function(){var t=this;this.loading=!0,this.$http.get("News/GetNewsAll?type=0&num=10").then((function(e){t.tableData=e.data,t.loading=!1})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))},openDialog:function(){this.formData.Id=0,this.formData.Title="",this.formData.Img="",this.formData.Type=1,this.formData.Content="",this.formData.CreateTime=new Date,this.dialogFormVisible=!0},handleCreateOrModify:function(){var t=this;this.formData.Id?(this.loading=!0,this.$http.post("News/ModifiedNews",this.formData,this.options).then((function(e){t.loading=!1,window.console.log(e),t.$message({message:"修改成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})}))):(this.loading=!0,this.$http.post("News/CreateNews",this.formData,this.options).then((function(e){window.console.log(e),t.loading=!1,t.$message({message:"创建成功！",type:"success"}),t.dialogFormVisible=!1,t.loadData()})).catch((function(e){t.$message({message:"网络或程序异常！"+e,type:"error"})})))},handleEdit:function(t,e){window.console.log(t,e),this.formData=e,this.dialogFormVisible=!0},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.loading=!0,a.$http.post("News/DeleteNews?id=".concat(e.Id),null,a.options).then((function(t){a.loading=!1,window.console.log(t),a.$message({message:"删除成功！",type:"success"}),a.loadData()})).catch((function(t){a.$message({message:"网络或程序异常！"+t,type:"error"})}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))}}},l=n,s=(a("17f8"),a("be6a")),r=Object(s["a"])(l,o,i,!1,null,"3bbe6323",null);e["default"]=r.exports},e842:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d246fc74.ad9ce7f1.js.map