(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-invite-invite"],{"22e1":function(t,i,a){"use strict";a.r(i);var n=a("5ddf"),e=a("9b4c");for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);a("e9de");var o=a("2877"),l=Object(o["a"])(e["default"],n["a"],n["b"],!1,null,"661640f8",null);i["default"]=l.exports},"3cbb":function(t,i,a){var n=a("a9eb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("e3cb82ce",n,!0,{sourceMap:!1,shadowMode:!1})},"5ddf":function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("template",{attrs:{slot:"content"},slot:"content"},[t._v("邀请用户")])],2),a("v-uni-view",{},[a("v-uni-image",{staticStyle:{width:"100vw"},attrs:{src:"../../static/activity/shitu_02.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"bg-invite padding-lg"},[a("v-uni-view",{staticClass:"invite-box bg-white radius"},[a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-green"}),a("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("我的邀请码")])],1)],1),a("v-uni-view",{staticClass:"cu-form-group padding-sm padding-tb-xs"},[a("v-uni-textarea",{staticStyle:{background:"#F7F7F7",padding:"15upx"},attrs:{value:t.urlLink}})],1),a("v-uni-view",{staticClass:"padding solid-top flex flex-wrap justify-between align-center bg-white"},[a("v-uni-button",{staticClass:"cu-btn bg-blue shadow",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.paste.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-copy margin-right-xs"}),t._v("复制邀请码")],1),a("v-uni-button",{staticClass:"cu-btn bg-blue shadow",attrs:{"data-target":"Image"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-qrcode margin-right-xs"}),t._v("显示二维码")],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"Image"==t.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"bg-img"},[a("v-uni-image",{attrs:{src:"../../static/qrcode.png",mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.saveFile.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action margin-0 flex-sub  solid-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[t._v("我知道了")])],1)],1)],1),a("v-uni-view",{staticClass:"invite-info margin-top margin-left margin-right padding solid-top flex justify-between align-center bg-white"},[a("v-uni-view",{staticClass:"flex align-center solid-right"},[a("v-uni-image",{staticClass:"margin-right-xs",attrs:{src:"../../static/icon/yaoqinghaoyou.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"flex align-center"},[a("v-uni-text",[t._v("累计邀请")]),a("v-uni-text",[a("v-uni-text",{staticClass:"text-bold margin-right-xs"},[t._v("0")]),t._v("人")],1)],1)],1),a("v-uni-view",{staticClass:"flex align-center solid-left"},[a("v-uni-image",{staticClass:"margin-right-xs",attrs:{src:"../../static/icon/money.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"flex align-center"},[a("v-uni-text",[t._v("累计奖励")]),a("v-uni-text",[a("v-uni-text",{staticClass:"text-bold margin-right-xs"},[t._v("0")]),t._v("元")],1)],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom solid-top margin-left margin-right"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-green"}),a("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("邀请说明")])],1)],1),a("v-uni-view",{staticClass:"padding bg-white explain-content margin-bottom-lg margin-left margin-right shadow"},[a("v-uni-view",{staticClass:"text-left padding"},[t._v("1.尊享徒弟任务收入分红3%")]),a("v-uni-view",{staticClass:"text-left padding"},[t._v("2.尊享徒孙任务收入分红2%")]),a("v-uni-view",{staticClass:"text-left padding"},[t._v("3.可做20元以内任务")]),a("v-uni-view",{staticClass:"text-left padding"},[t._v("4.升级Vip可获得更多福利奖励")])],1)],1)},e=[];a.d(i,"a",function(){return n}),a.d(i,"b",function(){return e})},"925d":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{qrcode:!1,modalName:null,urlLink:"http://app.zhuanyazhuan.cn/appdown/index.aspx?uid=133"}},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},saveFile:function(){uni.downloadFile({url:"https://www.fb0b1a26523c33400f66f.jpg",success:function(t){200===t.statusCode&&uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"none"})},fail:function(){uni.showToast({title:"保存失败，请稍后重试",icon:"none"})}})}})},paste:function(){uni.setClipboardData({data:this.urlLink})}}};i.default=n},"9b4c":function(t,i,a){"use strict";a.r(i);var n=a("925d"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);i["default"]=e.a},a9eb:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".bg-invite[data-v-661640f8]{position:relative;width:100vw}.invite-box[data-v-661640f8]{min-width:89.2vw;min-height:%?200?%;position:absolute;top:%?-180?%}\n/* invite-info */.invite-info[data-v-661640f8]{margin-top:%?200?%;border-radius:%?50?% %?50?% 0 0}.invite-info>uni-view[data-v-661640f8]{\r\n\t/* width: 50%; */}.invite-info>uni-view>uni-image[data-v-661640f8]{width:%?70?%}.invite-info>uni-view>uni-view[data-v-661640f8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}\n/* explain-content */.explain-content[data-v-661640f8]{border-radius:0 0 %?50?% %?50?%}",""])},e9de:function(t,i,a){"use strict";var n=a("3cbb"),e=a.n(n);e.a}}]);