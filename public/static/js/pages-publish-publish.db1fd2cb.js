(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-publish-publish"],{"099e":function(t,i,e){"use strict";e.r(i);var a=e("6e6c"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},6478:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top-xs"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-black"},[t._v("做单步骤")])],1)],1),t.stepList?e("v-uni-view",{staticClass:"padding padding-top-xs bg-white solid-bottom"},t._l(t.stepList,function(i,a){return e("v-uni-view",{key:a,staticClass:"margin-top"},[e("v-uni-view",{staticClass:"cu-tag round bg-blue margin-right-xs"},[t._v(t._s(a+1))]),e("v-uni-text",[t._v(t._s(i.remark))]),e("v-uni-view",{staticClass:"grid margin-top-xs text-center col-2 padding-xs"},t._l(i.imgList,function(i,a){return e("v-uni-view",{key:a,staticClass:"text-center padding-xs solid margin-top-xs solid-bottom margin-bottom-xs"},[e("v-uni-image",{attrs:{src:i,mode:"widthFix","data-url":i},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ViewImage.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"cu-tag badge bg-orange",staticStyle:{padding:"10px"}},[t._v("示例图")])],1)}),1),e("v-uni-view",{staticClass:"flex align-center justify-between solid-bottom padding-bottom-sm"},[e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.stepList.length>1,expression:"stepList.length>1"}],staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.moveImg("up",a)}}},[t._v("上移")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.stepList.length>1,expression:"stepList.length>1"}],staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.moveImg("down",a)}}},[t._v("下移")]),e("v-uni-button",{staticClass:"cu-btn bg-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delStepImg(a)}}},[t._v("删除")])],1)],1)}),1):t._e(),e("v-uni-view",{staticClass:"cu-bar bg-white "},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-black"},[t._v("添加步骤")])],1),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.modalName=!0}}},[e("v-uni-button",{staticClass:"cu-btn sm cuIcon line-blue"},[e("v-uni-text",{staticClass:"cuIcon-add"})],1)],1)],1),e("v-uni-view",{staticClass:"cu-modal",class:t.modalName?"show":""},[e("v-uni-view",{staticClass:"cu-dialog"},[e("v-uni-view",[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top-xs"},[e("v-uni-view",{staticClass:"action"}),e("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.modalName=!1}}},[e("v-uni-text",{staticClass:"cuIcon cuIcon-close"})],1)],1),e("v-uni-view",{staticClass:"solid-bottom"},[e("v-uni-view",{staticClass:"padding bg-white"},[e("v-uni-textarea",{staticStyle:{background:"#F7F7F7",padding:"15upx","text-align":"left",width:"82vw"},attrs:{maxlength:"-1",placeholder:"步骤说明",value:""},model:{value:t.remark,callback:function(i){t.remark=i},expression:"remark"}})],1)],1),e("v-uni-form",{staticClass:"solid-bottom upload"},[e("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[e("v-uni-view",{staticClass:"action"},[t._v("示例图")]),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.imgList.length)+"/1")])],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"grid col-3 grid-square flex-sub"},[t._l(t.imgList,function(i,a){return e("v-uni-view",{key:a,staticClass:"bg-img",attrs:{"data-url":t.imgList[a]},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ViewImage.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:t.imgList[a],mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":a},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.DelImg.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)}),t.imgList.length<1?e("v-uni-view",{staticClass:"solids",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.ChooseImage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1)],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addStep.apply(void 0,arguments)}}},[e("v-uni-button",{staticClass:"cu-btn bg-blue"},[t._v("添加步骤")])],1)],1)],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"6e6c":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("87d1")),s=a(e("bb75")),c={components:{cuCheckbox:n.default,cuStep:s.default},mounted:function(){this.getCate()},computed:{},data:function(){return{cateIndex:0,cateObj:{},cateArr:[],finishTimeIndex:0,finishTimeArr:["不限","1小时","3小时","1天","3天","一周"],auditTimeIndex:0,auditTimeArr:["1小时","3小时","1天","3天","一周"],device:"",deviceList:[{name:"全部",value:"",checked:!0},{name:"安卓",value:"android",checked:!1},{name:"苹果",value:"iphone",checked:!1},{name:"H5",value:"h5",checked:!1}],title:"",explain:"",price:"",number:"",stepList:[]}},methods:{getCate:function(){uni.request({url:this.api.get_cate,success:this.callBackCate,fail:this.fun.fail})},cateChange:function(t){this.cateIndex=t.detail.value,console.log(this.cateIndex)},finishTimeChange:function(t){this.finishTimeIndex=t.detail.value,console.log(this.finishTimeIndex)},auditTimeChange:function(t){this.auditTimeIndex=t.detail.value,console.log(this.auditTimeIndex)},callBackCate:function(t){var i=t.data;t.data.error<0?uni.showToast({title:t.data.msg}):(this.cateObj=i.data,this.cateArr=this.fun.objectToArray(i.data))},deviceChange:function(t){this.device=t},stepChange:function(t){this.stepList=t},save:function(){var t={cate:this.cateObj[this.cateIndex].cid,device:this.device,title:this.title,explain:this.explain,finish_time:this.finishTimeArr[this.finishTimeIndex],audit_time:this.auditTimeArr[this.auditTimeIndex],price:this.price,number:this.number,step:this.stepList},i=this.fun.getUser();uni.request({url:this.api.task_save,method:"POST",header:{token:i[2]},data:t,success:this.callbackTask,fail:function(t){console.log(t)}})},callbackTask:function(t){t.data;t.data.error<0?uni.showToast({title:t.data.msg,icon:"none"}):(uni.showToast({title:"发布成功",icon:"none"}),this.initUi(),this.fun.navTo("../launch/launch"))},initUi:function(){this.cateIndex=0,this.cateObj={},this.cateArr=[],this.finishTimeIndex=0,this.finishTimeArr=["不限","1小时","3小时","1天","3天","一周"],this.auditTimeIndex=0,this.auditTimeArr=["1小时","3小时","1天","3天","一周"],this.device="",this.deviceList=[{name:"全部",value:"",checked:!0},{name:"安卓",value:"android",checked:!1},{name:"苹果",value:"iphone",checked:!1},{name:"H5",value:"h5",checked:!1}],this.title="",this.explain="",this.price="",this.number="",this.stepList=[]}},watch:{device:function(t,i){}}};i.default=c},"777a":function(t,i,e){var a=e("d848");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0abdc353",a,!0,{sourceMap:!1,shadowMode:!1})},"7e79":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{checkboxIndex:0,checkboxList:this.checkbox}},model:{prop:"checkboxIndex",event:"checkboxChange"},props:{title:{type:String,default:""},checkbox:{type:Array,default:function(){return[]}}},onLoad:function(){this.checkboxList[0].checked=!0},methods:{CheckboxChange:function(t){var i=t.currentTarget.dataset.index;this.checkboxList[this.checkboxIndex].checked=!1,this.checkboxIndex=i,this.checkboxList[i].checked=!0,this.$emit("checkboxChange",this.checkboxList[i].value)}}};i.default=a},8400:function(t,i,e){"use strict";e.r(i);var a=e("8afe"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},"875d":function(t,i,e){"use strict";e.r(i);var a=e("d528"),n=e("099e");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);var c=e("2877"),u=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"38b3f310",null);i["default"]=u.exports},"87d1":function(t,i,e){"use strict";e.r(i);var a=e("eb12"),n=e("f322");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);var c=e("2877"),u=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"1f127aff",null);i["default"]=u.exports},"8afe":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{modalName:!1,remark:"",imgList:[],stepList:[]}},methods:{addStep:function(t){this.modalName=!1,this.stepList.push({remark:this.remark,imgList:this.imgList}),this.imgList=[],this.remark=[],this.$emit("stepChange",this.stepList)},ViewImage:function(t){uni.previewImage({urls:this.imgList,current:t.currentTarget.dataset.url})},DelImg:function(t){this.imgList.splice(t.currentTarget.dataset.index,1)},ChooseImage:function(){var t=this;uni.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(i){0!=t.imgList.length?t.imgList=t.imgList.concat(i.tempFilePaths):t.uploadFile(i.tempFilePaths)}})},uploadFile:function(t){var i=this;uni.uploadFile({url:this.api.upload,filePath:t[0],name:"file",formData:{},success:function(t){var e=JSON.parse(t.data),a=e.data;console.log(a),i.imgList=[a]}})},moveImg:function(t,i){var e=this.stepList.length;if(e<=1)return!1;if(0==i&&"up"==t)return!1;if(i==e-1&&"down"==t)return!1;var a=this.stepList,n={};"up"==t?(n=a[i-1],a[i-1]=a[i]):(n=a[i+1],a[i+1]=a[i]),a[i]=n,this.stepList=[],this.stepList=a,this.$emit("stepChange",this.stepList)},delStepImg:function(t){this.stepList.splice(t,1),this.$emit("stepChange",this.stepList)},editStepImg:function(t){this.modalName=!0,this.imgList=this.stepList[t].imgList,this.remark=this.stepList[t].remark}}};i.default=a},"9a10":function(t,i,e){"use strict";var a=e("777a"),n=e.n(a);n.a},bb75:function(t,i,e){"use strict";e.r(i);var a=e("6478"),n=e("8400");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("9a10");var c=e("2877"),u=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"2da348e2",null);i["default"]=u.exports},d528:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!1}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("发布任务")])],2),e("v-uni-form",[e("v-uni-view",{staticClass:"cu-form-group solid-bottom"},[e("v-uni-view",{staticClass:"title text-black"},[t._v("类型")]),e("v-uni-picker",{attrs:{value:t.cateIndex,range:t.cateArr},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.cateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.cateIndex>-1?t.cateArr[t.cateIndex]:"请选择类型"))])],1)],1),e("cu-checkbox",{attrs:{title:"支持设备",checkbox:t.deviceList},on:{checkboxChange:function(i){arguments[0]=i=t.$handleEvent(i),t.deviceChange.apply(void 0,arguments)}},model:{value:t.device,callback:function(i){t.device=i},expression:"device"}}),e("v-uni-view",{staticClass:"cu-form-group solid-bottom margin-top-xs"},[e("v-uni-view",{staticClass:"title text-black"},[t._v("项目名称")]),e("v-uni-input",{attrs:{placeholder:"必须真实项目名称",name:"input"},model:{value:t.title,callback:function(i){t.title=i},expression:"title"}})],1),e("v-uni-view",{},[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-black"},[t._v("任务说明")])],1)],1),e("v-uni-view",{staticClass:"padding  bg-white"},[e("v-uni-textarea",{staticStyle:{background:"#F7F7F7",padding:"15upx",width:"90vw"},attrs:{maxlength:"-1",placeholder:"任务说明",value:""},model:{value:t.explain,callback:function(i){t.explain=i},expression:"explain"}})],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title text-black"},[t._v("接单限时")]),e("v-uni-picker",{attrs:{value:t.finishTimeIndex,range:t.finishTimeArr},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.finishTimeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.finishTimeIndex>-1?t.finishTimeArr[t.finishTimeIndex]:"请选择类型"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title text-black"},[t._v("审核时间")]),e("v-uni-picker",{attrs:{value:t.auditTimeIndex,range:t.auditTimeArr},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.auditTimeChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.auditTimeIndex>-1?t.auditTimeArr[t.auditTimeIndex]:"请选择类型"))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group solid-bottom margin-top-xs"},[e("v-uni-view",{staticClass:"title text-black"},[t._v("悬赏单价")]),e("v-uni-input",{attrs:{placeholder:"最低0.1元",name:"input"},model:{value:t.price,callback:function(i){t.price=i},expression:"price"}})],1),e("v-uni-view",{staticClass:"cu-form-group solid-bottom"},[e("v-uni-view",{staticClass:"title text-black"},[t._v("悬赏数量")]),e("v-uni-input",{attrs:{placeholder:"最少10单",name:"input"},model:{value:t.number,callback:function(i){t.number=i},expression:"number"}})],1),e("v-uni-view",{staticClass:"cu-form-group solid-bottom"},[e("v-uni-view",{staticClass:"title text-grey"},[t._v("服务费、成交额12%")]),e("v-uni-view",{staticClass:"text-grey cuIcon-info"},[t._v("降低服务费")])],1),e("cu-step",{on:{stepChange:function(i){arguments[0]=i=t.$handleEvent(i),t.stepChange.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"padding flex flex-direction",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.save.apply(void 0,arguments)}}},[e("v-uni-button",{staticClass:"cu-btn bg-blue"},[t._v("发布")])],1)],1),e("v-uni-view",{staticClass:"page-footer"})],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},d848:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".upload .bg-img>uni-image[data-v-2da348e2]{position:absolute;left:%?0?%}",""])},eb12:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"text-black"},[t._v(t._s(t.title))])],1)],1),e("v-uni-view",{staticClass:"padding  bg-white"},t._l(t.checkboxList,function(i,a){return e("v-uni-button",{key:a,staticClass:"cu-btn light margin-right-xs",class:i.checked?"line-blue":"line-grey",attrs:{index:a,"data-index":a},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),arguments[0]=i=t.$handleEvent(i),t.CheckboxChange.apply(void 0,arguments)}}},[t._v(t._s(i.name))])}),1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},f322:function(t,i,e){"use strict";e.r(i);var a=e("7e79"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a}}]);