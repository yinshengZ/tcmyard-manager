(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e14730e8"],{"22ce":function(e,t,i){"use strict";i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return r}));var n=i("b775");function o(){return Object(n["a"])({url:"/service",method:"get"})}function c(e){return Object(n["a"])({url:"/service/"+e,method:"get"})}function a(e){return Object(n["a"])({url:"/service",method:"post",data:e})}function r(e,t){return Object(n["a"])({url:"/service/"+t,method:"put",data:e})}},"351c":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("add-income-type-form"),i("income-types-table"),i("add-income-form",{attrs:{user_id:e.user_id}})],1)},o=[],c=i("5530"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-card",[i("el-form",{attrs:{model:e.income_type_details,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"Income Type"}},[i("el-input",{model:{value:e.income_type_details.income_type,callback:function(t){e.$set(e.income_type_details,"income_type",t)},expression:"income_type_details.income_type"}})],1)],1),i("el-button",{attrs:{type:"primary"},on:{click:e.add_income_type}},[e._v("Submit")])],1)],1)},r=[],s=i("b775");function l(e){return Object(s["a"])({url:"/income/service",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/income_type",method:"post",data:e})}function d(){return Object(s["a"])({url:"/income_type",method:"get"})}function m(e){return Object(s["a"])({url:"/income_type/"+e,method:"get"})}function _(e,t){return Object(s["a"])({url:"/income_type/"+t,method:"put",data:e})}function p(e){return Object(s["a"])({url:"/income_type/"+e,method:"delete"})}var f={data:function(){return{income_type_details:{}}},methods:{add_income_type:function(){var e=this;u(this.income_type_details).then((function(t){e.$notify({title:"Notification",type:"success",message:t.message})})).catch((function(t){e.$notify({title:"Error",type:"error",message:t.response.data.errors})}))}}},y=f,h=i("2877"),b=Object(h["a"])(y,a,r,!1,null,null,null),v=b.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-card",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.income_types}},[i("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(n.id))])]}}])}),i("el-table-column",{attrs:{label:"Income Type",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(n.income_type))])]}}])}),i("el-table-column",{attrs:{label:"Created At",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(e.convert_date(n.created_at)))])]}}])}),i("el-table-column",{attrs:{label:"Operations",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.show_update_form(n.id)}}},[e._v("Update")]),i("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.delete_income_type(n.id)}}},[e._v("Delete")])]}}])})],1),i("el-dialog",{attrs:{title:"Update Income Type: ",visible:e.update_income_type_form_loaded,"before-close":e.get_all_income_types},on:{"update:visible":function(t){e.update_income_type_form_loaded=t}}},[i("update-income-type-form",{key:e.key,attrs:{income_type_id:e.income_type_id}})],1)],1)],1)},k=[],O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{attrs:{model:e.income_type_details,"label-width":"180"}},[i("el-form-item",{attrs:{label:"Income Type"}},[i("el-input",{model:{value:e.income_type_details.income_type,callback:function(t){e.$set(e.income_type_details,"income_type",t)},expression:"income_type_details.income_type"}})],1)],1),i("el-button",{attrs:{type:"primary"},on:{click:e.update_income_type}},[e._v(" Update ")])],1)},j=[],x={props:["income_type_id"],data:function(){return{income_type_details:[]}},created:function(){this.get_income_type_detail()},mounted:function(){},methods:{get_income_type_detail:function(){var e=this;m(this.income_type_id).then((function(t){e.income_type_details=t}))},update_income_type:function(){_(this.income_type_details,this.income_type_id).then((function(e){console.log(e)}))}}},w=x,$=Object(h["a"])(w,O,j,!1,null,"4d38f458",null),S=$.exports,q={components:{UpdateIncomeTypeForm:S},data:function(){return{income_types:[],income_type_id:"",update_income_type_form_loaded:!1,key:0}},created:function(){this.get_all_income_types()},mounted:function(){},methods:{get_all_income_types:function(){var e=this;d().then((function(t){e.income_types=t,e.update_income_type_form_loaded=!1}))},show_update_form:function(e){this.income_type_id=e,this.key+=1,this.update_income_type_form_loaded=!0},delete_income_type:function(e){var t=this;confirm("Do you really want to delete this income type?")&&p(e).then((function(e){t.get_all_income_types(),t.$notify({title:"Notification",type:"success",message:e})}))},convert_date:function(e){e=new Date(e).toLocaleDateString("en-gb");return e}}},D=q,I=Object(h["a"])(D,g,k,!1,null,"3781a3ca",null),T=I.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-card",[i("el-button-group",[i("el-button",{attrs:{type:"primary"}},[i("svg-icon",{attrs:{"icon-class":"plant"}}),e._v("Herbs ")],1),i("el-button",{attrs:{type:"primary"}},[i("svg-icon",{attrs:{"icon-class":"service"}}),e._v("Services ")],1),i("el-button",{attrs:{type:"primary"}},[i("svg-icon",{attrs:{"icon-class":"retail"}}),e._v("Retail ")],1)],1),i("el-card",[i("add-services-form",{attrs:{user_id:e.user_id}})],1),i("el-card",[i("add-retails-form")],1)],1)],1)},A=[],F=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{attrs:{model:e.income_details,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"Service"}},[i("el-select",{attrs:{placeholder:"services..."},on:{change:e.calculate_sum},model:{value:e.income_details.service_id,callback:function(t){e.$set(e.income_details,"service_id",t)},expression:"income_details.service_id"}},e._l(e.services,(function(t){return i("el-option",{key:t.id,attrs:{label:t.service_title+"     (£ "+t.unit_price+")",value:t.id}},[i("span",{staticStyle:{float:"left"}},[e._v(e._s(t.service_title))]),i("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s("£"+t.unit_price))])])})),1)],1),i("el-form-item",{attrs:{label:"Quantity"}},[i("el-input-number",{attrs:{step:1,min:1},on:{change:e.calculate_sum},model:{value:e.income_details.quantity,callback:function(t){e.$set(e.income_details,"quantity",t)},expression:"income_details.quantity"}})],1),i("el-form-item",{attrs:{label:"Discount"}},[i("el-input-number",{attrs:{step:1,min:0,max:100},on:{change:e.calculate_sum},model:{value:e.income_details.discount,callback:function(t){e.$set(e.income_details,"discount",t)},expression:"income_details.discount"}})],1),i("el-form-item",{attrs:{label:"Payment Method"}},[i("el-select",{model:{value:e.income_details.income_type_id,callback:function(t){e.$set(e.income_details,"income_type_id",t)},expression:"income_details.income_type_id"}},e._l(e.income_types,(function(e){return i("el-option",{key:e.id,attrs:{label:e.income_type,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"Description"}},[i("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.income_details.description,callback:function(t){e.$set(e.income_details,"description",t)},expression:"income_details.description"}})],1),i("el-form-item",{attrs:{label:"Sum total"}},[i("span",[e._v(e._s("£ "+e.sum_total))])]),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.add_service_income}},[e._v("Submit")])],1)],1)],1)},P=[],U=(i("b0c0"),i("22ce")),z=i("2f62"),N={data:function(){return{services:[],income_details:{discount:0,quantity:1,description:"",service_id:"",user_id:"",amount:"",income_type_id:""},user:{},income_types:[],unit_price:0,sum_total:0}},computed:Object(c["a"])({},Object(z["b"])(["name","introduction","token","avatar","roles","id"])),created:function(){this.get_all_services(),this.get_income_types(),this.get_user()},methods:{get_all_services:function(){var e=this;Object(U["b"])().then((function(t){e.services=t}))},get_income_types:function(){var e=this;d().then((function(t){e.income_types=t}))},get_user:function(){this.user={name:this.name,introduction:this.introduction,token:this.token,avatar:this.avatar,roles:this.roles,id:this.id}},calculate_sum:function(){var e=this;Object(U["c"])(this.income_details.service_id).then((function(t){e.unit_price=t.unit_price,e.sum_total=e.unit_price*e.income_details.quantity*(1-e.income_details.discount/100)}))},add_service_income:function(){var e=this;this.income_details.user_id=this.user.id,this.income_details.amount=this.sum_total,l(this.income_details).then((function(t){e.$notify({title:"Notification",type:"success",message:t})}))}}},J=N,M=Object(h["a"])(J,F,P,!1,null,"01809785",null),Q=M.exports,R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{attrs:{model:e.income_details,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"Product"}},[i("el-select",{attrs:{placeholder:"products...."},on:{change:e.calculate_sum},model:{value:e.income_details.inventory_id,callback:function(t){e.$set(e.income_details,"inventory_id",t)},expression:"income_details.inventory_id"}},e._l(e.products,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name+" / "+e.eng_name,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"Quantity"}},[i("el-input-number",{attrs:{step:1,min:1},on:{change:e.calculate_sum},model:{value:e.income_details.quantity,callback:function(t){e.$set(e.income_details,"quantity",t)},expression:"income_details.quantity"}})],1),i("el-form-item",{attrs:{label:"Discount"}},[i("el-input-number",{attrs:{step:1,min:0,max:100},on:{change:e.calculate_sum},model:{value:e.income_details.discount,callback:function(t){e.$set(e.income_details,"discount",t)},expression:"income_details.discount"}})],1),i("el-form-item",{attrs:{label:"Payment Method"}},[i("el-select",{model:{value:e.income_details.income_type_id,callback:function(t){e.$set(e.income_details,"income_type_id",t)},expression:"income_details.income_type_id"}},e._l(e.income_types,(function(e){return i("el-option",{key:e.id,attrs:{label:e.income_type,value:e.id}})})),1)],1),i("el-form-item",{attrs:{label:"Description"}},[i("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.income_details.description,callback:function(t){e.$set(e.income_details,"description",t)},expression:"income_details.description"}})],1),i("el-form-item",{attrs:{label:"Sum Total"}},[i("span",[e._v(e._s("£ "+e.sum_total))])]),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.add_retail_income}},[e._v("Submit")])],1)],1)],1)},C=[],H=i("f3a3"),L={data:function(){return{income_details:{},sum_total:"",income_types:[],products:[],unit_price:"",user:{}}},computed:Object(c["a"])({},Object(z["b"])(["name","introduction","token","avatar","roles","id"])),created:function(){this.get_income_types(),this.get_all_retail(),this.get_user()},methods:{get_income_types:function(){var e=this;d().then((function(t){e.income_types=t}))},get_user:function(){this.user={name:this.name,introduction:this.introduction,token:this.token,avatar:this.avatar,roles:this.roles,id:this.id}},get_all_retail:function(){var e=this;Object(H["getProducts"])().then((function(t){e.products=t}))},calculate_sum:function(){var e=this;Object(H["h"])(this.income_details.inventory_id).then((function(t){e.unit_price=t.unit_price,e.sum_total=e.unit_price*e.income_details.quantity*(1-e.income_details.discount/100)}))},add_retail_income:function(){this.income_details.user_id=this.user.id,this.income_details.amount=this.sum_total}}},B=L,G=Object(h["a"])(B,R,C,!1,null,"7d314a2b",null),K=G.exports,V={props:["patient_id","user_id"],components:{AddServicesForm:Q,AddRetailsForm:K},data:function(){return{patient_id:""}},methods:{}},W=V,X=(i("ff03"),Object(h["a"])(W,E,A,!1,null,"0bcdfd32",null)),Y=X.exports,Z={components:{AddIncomeTypeForm:v,IncomeTypesTable:T,AddIncomeForm:Y},data:function(){return{user_id:this.id}},computed:Object(c["a"])({},Object(z["b"])(["id"]))},ee=Z,te=Object(h["a"])(ee,n,o,!1,null,"360ca75a",null);t["default"]=te.exports},6795:function(e,t,i){},f3a3:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return c})),i.d(t,"h",(function(){return a})),i.d(t,"e",(function(){return r})),i.d(t,"g",(function(){return s})),i.d(t,"f",(function(){return l})),i.d(t,"i",(function(){return u}));var n=i("b775");function o(e){return Object(n["a"])({url:"/inventory",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/inventory/"+e,method:"delete"})}function a(e){return Object(n["a"])({url:"/inventory/"+e,method:"get"})}function r(){return Object(n["a"])({url:"/inventory/herb",method:"get"})}function s(){return Object(n["a"])({url:"/inventory/retail",method:"get"})}function l(){return Object(n["a"])({url:"/inventory/other",method:"get"})}function u(e,t){return Object(n["a"])({url:"/inventory/"+t,method:"put",data:e})}},ff03:function(e,t,i){"use strict";i("6795")}}]);