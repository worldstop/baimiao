(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4edc99c7"],{"3d48":function(t,s,a){},"54c3":function(t,s,a){t.exports=a.p+"img/bgtop.ed43ac53.jpg"},"58cf":function(t,s,a){"use strict";a("3d48")},"84af":function(t,s,a){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"banner"},[s("div",{staticClass:"mm"}),t._m(0),s("div",{staticClass:"banner-title"},[s("p",[t._v(t._s(t.title))])])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"banner-img"},[s("img",{attrs:{src:a("54c3")}})])}],n={name:"Banner",props:{title:{type:String,default:""},img:{type:String,default:"../assets/img/bgtop.jpg"}}},c=n,o=(a("58cf"),a("be6a")),r=Object(o["a"])(c,i,e,!1,null,"8f80614c",null);s["a"]=r.exports},9004:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"case"},[s("banner",{attrs:{img:"../assets/img/bgtop.jpg"}}),s("div",{staticClass:"case-product"},[s("div",{staticClass:"case-product-content"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgserver+t.caseIdList.Img,expression:"imgserver+caseIdList.Img"}],attrs:{alt:""}}),s("p",{staticClass:"product-title"},[t._v(t._s(t.caseIdList.Title))]),s("p",{staticClass:"product-time"},[t._v(t._s(t.caseIdList.CreateTime))]),s("p",{staticClass:"product-content"},[t._v(t._s(t.caseIdList.Content))])])])],1)},e=[],n=a("84af"),c={components:{Banner:n["a"]},data:function(){return{pid:0,caseIdList:{}}},created:function(){this.pid=this.$route.params.id,window.console.log(this.pid)},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this;this.$http.get("Cases/GetCasesById/".concat(this.pid)).then((function(s){t.caseIdList=s.data,window.console.log(t.caseIdList)})).catch((function(t){window.console.log(t)}))}}},o=c,r=(a("d364"),a("be6a")),d=Object(r["a"])(o,i,e,!1,null,"809d5696",null);s["default"]=d.exports},d364:function(t,s,a){"use strict";a("ea15")},ea15:function(t,s,a){}}]);
//# sourceMappingURL=chunk-4edc99c7.1d0e78ac.js.map