(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-intro-intro"],{"3ad6":function(t,e,i){"use strict";i.r(e);var n=i("83cd"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"3bf4":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("cu-custom",{staticClass:"nav-bar",attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("编辑资料")])],2),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("头像")]),i("v-uni-view",{staticClass:"cu-avatar radius bg-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadFace.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.user_info.face,mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"cu-list menu solid-top margin-top-sm"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("ID")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.user_info.phone))]),i("v-uni-text",{staticClass:"text-grey text-sm margin-left"})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("昵称")])],1),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fun.navTo("../nickname/nickname")}}},[i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.user_info.nickname))]),i("v-uni-text",{staticClass:"text-grey text-sm cuIcon-right margin-left"})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("性别")])],1),i("v-uni-view",{staticClass:"action flex justify-center align-center"},[i("v-uni-view",{staticClass:"text-grey"},[i("v-uni-picker",{staticClass:"picker",attrs:{value:t.sex_index,range:t.sex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindSexChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==t.user_info.sex,expression:"user_info.sex==0"}]},[t._v("保密")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==t.user_info.sex,expression:"user_info.sex==1"}]},[t._v("男")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==t.user_info.sex,expression:"user_info.sex==2"}]},[t._v("女")])],1)],1)],1),i("v-uni-text",{staticClass:"text-grey text-sm cuIcon-right margin-left"})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("生日")])],1),i("v-uni-view",{staticClass:"action flex justify-center align-center"},[i("v-uni-view",{staticClass:"text-grey"},[i("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.user_info.birthday))])],1)],1),i("v-uni-text",{staticClass:"text-grey text-sm cuIcon-right margin-left"})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("邮箱")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.user_info.email))]),i("v-uni-text",{staticClass:"text-grey text-sm cuIcon-right margin-left"})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("手机号")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey"},[t._v(t._s(t.user_info.phone))]),i("v-uni-text",{staticClass:"text-grey text-sm cuIcon-right margin-left"})],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text-black"},[t._v("居住地")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-grey",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.popup_bottom()}}},[t._v(t._s(t.user_info.province?t.user_info.province:"北京市")+"-"+t._s(t.user_info.city?t.user_info.city:"朝阳区"))]),i("v-uni-text",{staticClass:"text-grey text-sm cuIcon-right margin-left"})],1)],1),i("linkAddress",{ref:"linkAddress",attrs:{height:t.height},on:{confirmCallback:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmCallback()}}})],1),i("v-uni-view",{staticClass:"padding flex justify-center align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fun.quitLogin()}}},[i("v-uni-button",{staticClass:"cu-btn bg-blue padding-lr-lg"},[t._v("退 出")])],1)],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"640b":function(t,e,i){"use strict";i.r(e);var n=i("99a8"),s=i("ed43");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("d02a");var o=i("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"d948c4dc",null);e["default"]=r.exports},"6de9":function(t,e,i){"use strict";i.r(e);var n=i("3bf4"),s=i("3ad6");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("a057");var o=i("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"29ddea71",null);e["default"]=r.exports},"796f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"",""])},"83cd":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("640b")),a={components:{linkAddress:s.default},data:function(){var t=this.getDate({format:!0});return{loginRes:!1,user_info:{},sex:["保密","男","女"],sex_index:0,index:0,date:t,address:"",height:"500px"}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(){this.loginRes=this.checkLogin("../my/my",1),this.loginRes&&this.getUserInfo()},onShow:function(){this.getUserInfo()},methods:{ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},getUserInfo:function(){uni.request({url:this.api.user_info,header:{token:this.loginRes[2]},success:this.callback,fail:function(t){console.log(t)}})},callback:function(t){var e=t.data;if(t.data.error<0)uni.showToast({title:t.data.msg});else{if(null==e.data)return void this.fun.quitLogin();this.user_info=e.data}},uploadFace:function(){var t=this,e=this.fun.getUser();uni.chooseImage({success:function(i){var n=i.tempFilePaths;uni.uploadFile({url:t.api.change_face,filePath:n[0],method:"POST",header:{token:e[2]},name:"file",success:function(e){var i=JSON.parse(e.data),n=i.data;t.user_info.face=n,uni.setStorageSync("SFACE",n)}})}})},bindSexChange:function(t){this.sex_index=t.target.value;var e={sex:this.sex_index};this.changeInfo(e)},bindDateChange:function(t){this.date=t.target.value,this.user_info.birthday=this.date;var e={birthday:this.date};this.changeInfo(e)},getDate:function(t){var e=new Date,i=e.getFullYear(),n=e.getMonth()+1,s=e.getDate();return"start"===t?i-=60:"end"===t&&(i-=0),n=n>9?n:"0"+n,s=s>9?s:"0"+s,"".concat(i,"-").concat(n,"-").concat(s)},changeInfo:function(t){var e=this.fun.getUser();uni.request({url:this.api.change_info,header:{token:e[2]},method:"POST",data:t,success:this.callbackInfo,fail:this.fun.fail})},callbackInfo:function(t){var e=t.data;t.data.error<0?uni.showToast({title:t.data.msg,icon:"none"}):console.log(e.data)},popup_bottom:function(){this.height="550rpx",this.show_popup()},show_popup:function(){this.$refs.linkAddress.show()},confirmCallback:function(){var t=this.$store.state.user_address;this.address=t.province+t.city+t.district;var e={province:t.province,city:t.city,district:t.district};this.user_info.province=t.province,this.user_info.city=t.city,this.changeInfo(e)}}};e.default=a},"867d":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("9e33")),a={data:function(){return{newActive:"",newTransition:!0,linkAddress_area:[{current:null,info:[],clickfun:"province_txt_click"},{current:null,info:[],clickfun:"city_txt_click"},{current:null,info:[],clickfun:"district_txt_click"}],submission:{province:"",city:"",county:"",town:""},user_address:{province:"",city:"",district:""},selected_address:""}},props:{active:{type:Boolean,default:!1},height:{type:[String],default:"100%"},maskShow:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},callback:{type:Function,default:function(){}}},computed:{popuplayoutClass:function(){var t="";return this.newActive&&(t+="popup-layout-active"),t+=" popup-layout-bottom",t},popupContentClass:function(){var t="";return this.newTransition&&"none"!==this.transition&&(t+="popup-layout-transition-slider"),t}},methods:{show:function(){var t=this;this.submission={province:"",city:"",county:"",town:""},s.default.get_linkAddress(this,"province",this.submission,function(e){t.submission.province="1"}),this.newActive=!0;var e=this;setTimeout(function(){e.newTransition=!1},50)},close:function(t){var e=t||!0;if(e){this.newTransition=!0;var i=this;setTimeout(function(){i.newActive=!1},300)}},choosefun:function(t,e){this[t](e)},province_txt_click:function(t){var e;this.linkAddress_area[2].info=[],this.linkAddress_area[1].current=null,this.linkAddress_area[2].current=null;for(var i=0;i<this.linkAddress_area[0].info.length;i++)if(this.linkAddress_area[0].info[i].id===t){this.linkAddress_area[0].current=i,e=this.linkAddress_area[0].info[i].name;break}this.user_address={province:e,city:"",district:""},this.submission={province:"",city:"",county:"",town:""},this.submission.province=t,this.selected_address=this.user_address.province,s.default.get_linkAddress(this,"city",this.submission,function(t){})},city_txt_click:function(t){var e;this.linkAddress_area[2].current=null;for(var i=0;i<this.linkAddress_area[1].info.length;i++)if(this.linkAddress_area[1].info[i].id===t){this.linkAddress_area[1].current=i,e=this.linkAddress_area[1].info[i].name;break}this.user_address.city=e,this.user_address.district="",this.submission.city=t,this.selected_address=this.user_address.province+"-"+this.user_address.city,s.default.get_linkAddress(this,"district",this.submission,function(t){})},district_txt_click:function(t){for(var e,i=0;i<this.linkAddress_area[2].info.length;i++)if(this.linkAddress_area[2].info[i].id===t){this.linkAddress_area[2].current=i,e=this.linkAddress_area[2].info[i].name;break}this.user_address.district=e,this.selected_address=this.user_address.province+"-"+this.user_address.city+"-"+this.user_address.district},btn_cancel:function(){this.close(),this.submission={province:"",city:"",county:"",town:""},this.linkAddress_area[1].info=[],this.linkAddress_area[2].info=[],this.linkAddress_area[0].current=null,this.linkAddress_area[1].current=null,this.linkAddress_area[2].current=null,this.selected_address=""},btn_confirm:function(){this.close(),console.log(this.user_address),this.$store.commit("commit_address",this.user_address),this.$emit("confirmCallback")}}};e.default=a},8823:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */popup-layout-wrap[data-v-d948c4dc]{position:absolute}.popup-layout-wrap[data-v-d948c4dc]{position:fixed;z-index:998;left:0;right:0;top:0;bottom:0;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:none}.popup-layout-wrap.popup-layout-active[data-v-d948c4dc]{display:-webkit-box;display:-webkit-flex;display:flex}.popup-layout-wrap.popup-layout-bottom[data-v-d948c4dc]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.popup-layout-wrap.popup-layout-bottom .popup-layout-transition-slider[data-v-d948c4dc]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.popup-layout-wrap .popup-layout-content[data-v-d948c4dc]{background-color:#fff;z-index:2;height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1);opacity:1;-webkit-transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;transition:opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out,opacity .3s ease-in-out;transition:transform .3s ease-in-out,opacity .3s ease-in-out,-webkit-transform .3s ease-in-out}.popup-layout-wrap .popup-layout-content.popup-layout-transition-fade[data-v-d948c4dc]{-webkit-transform:translateZ(0) scale(.3);transform:translateZ(0) scale(.3);opacity:0}.popup-layout-wrap .popup-layout-mask[data-v-d948c4dc]{position:absolute;-webkit-transition:all 1s;transition:all 1s;z-index:1;left:0;right:0;top:0;bottom:0;height:100%;width:100%;background-color:rgba(0,0,0,.6)}\n/***省市区选择器***/.link-address-wrap[data-v-d948c4dc]{height:100%;width:100%;background:#fff}.link-address-wrap .link-adress-content[data-v-d948c4dc]{margin:8px 10px 10px 10px}.link-address-wrap .link-adress-content .head-wrap[data-v-d948c4dc]{padding-bottom:5px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative}.link-address-wrap .link-adress-content .head-wrap .cancel[data-v-d948c4dc]{color:#999}.link-address-wrap .link-adress-content .head-wrap .confirm[data-v-d948c4dc]{position:absolute;right:0}.link-address-wrap .link-adress-content .head-selected[data-v-d948c4dc]{text-align:center;color:#ccc;font-size:14px}.link-address-wrap .link-adress-content .operation-wrap .operation-container[data-v-d948c4dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.link-address-wrap .link-adress-content .operation-wrap .operation-container .operation-content[data-v-d948c4dc]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:33.333%}.link-address-wrap .link-adress-content .operation-wrap .operation-container .operation-content .province[data-v-d948c4dc]{height:%?420?%;font-size:14px}.link-address-wrap .link-adress-content .operation-wrap .operation-container .operation-content .province .province-txt[data-v-d948c4dc]{margin:18px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link-address-wrap .link-adress-content .operation-wrap .operation-container .operation-content .province .province-txt-click[data-v-d948c4dc]{margin:18px 12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:red;font-size:16px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.link-address-wrap .link-adress-content .operation-wrap .operation-container .operation-content .province .province-txt-click .pic[data-v-d948c4dc]{padding-left:%?15?%;width:%?30?%;height:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;margin:auto 0}.link-address-wrap .link-adress-content .operation-wrap .operation-container .operation-content .province .province-txt-click .pic uni-image[data-v-d948c4dc]{width:100%;height:auto}',""])},"959d":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("795b")),a=n(i("d225")),o=n(i("b0b4")),r=function(){function t(){(0,a.default)(this,t)}return(0,o.default)(t,[{key:"http",value:function(t,e,i){var n="http://admin.farmereasy.com";return new s.default(function(s,a){uni.request({url:"".concat(n).concat(t),data:e,method:i,success:function(t){s(t)},fail:function(t){s(0)}})})}}]),t}();e.default=r},"988d":function(t,e,i){var n=i("796f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("56673f2c",n,!0,{sourceMap:!1,shadowMode:!1})},"99a8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"popup-layout-wrap text-sm",class:t.popuplayoutClass},[i("v-uni-view",{staticClass:"popup-layout-content",class:t.popupContentClass,style:[{height:t.height}]},[i("v-uni-view",{staticClass:"link-address-wrap"},[i("v-uni-view",{staticClass:"link-adress-content"},[i("v-uni-view",{staticClass:"head-wrap"},[i("v-uni-text",{staticClass:"cancel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btn_cancel.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-text",{staticClass:"confirm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btn_confirm.apply(void 0,arguments)}}},[t._v("确认")])],1),i("v-uni-view",{staticClass:"head-selected"},[i("v-uni-text",{staticClass:"selected-txt"},[t._v("已选择:"+t._s(t.selected_address))])],1),i("v-uni-view",{staticClass:"operation-wrap"},[i("v-uni-view",{staticClass:"operation-container"},t._l(t.linkAddress_area,function(e,n){return i("v-uni-view",{staticClass:"operation-content"},[i("v-uni-scroll-view",{staticClass:"province",attrs:{"scroll-y":"true","show-scrollbar":"false"}},t._l(e.info,function(n,s){return i("v-uni-view",{class:[s==e.current?"province-txt-click":"province-txt"],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.choosefun(e.clickfun,n.id)}},model:{value:n.id,callback:function(e){t.$set(n,"id",e)},expression:"items.id"}},[t._v(t._s(n.name)),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:s===e.current,expression:"index===base_items.current"}],staticClass:"pic"},[i("v-uni-image",{attrs:{src:"../../static/xuan-linkAddress/yes.png"}})],1)],1)}),1)],1)}),1)],1)],1)],1)],1),t.maskShow?i("v-uni-view",{staticClass:"popup-layout-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close(t.maskClick)}}}):t._e()],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"9dc9":function(t,e,i){var n=i("8823");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("21b53107",n,!0,{sourceMap:!1,shadowMode:!1})},"9e33":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("da41")),a={get_linkAddress:function(t,e,i,n){s.default.get_linkAddress_api(i).then(function(i){var s=i.data.data;console.log(s),1==i.data.code&&("province"===e&&(console.log("province"),t.linkAddress_area[0].info=s,n(!0)),"city"===e&&(console.log("city"),t.linkAddress_area[1].info=s,n(!0)),"district"===e&&(console.log("district"),t.linkAddress_area[2].info=s,n(!0)))})}};e.default=a},a057:function(t,e,i){"use strict";var n=i("988d"),s=i.n(n);s.a},d02a:function(t,e,i){"use strict";var n=i("9dc9"),s=i.n(n);s.a},da41:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("959d")),a=new s.default,o={get_linkAddress_api:function(t){return console.log(t),a.http("/api/address/area",t,"GET")}};e.default=o},ed43:function(t,e,i){"use strict";i.r(e);var n=i("867d"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a}}]);