webpackJsonp([0],{1322:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table"},[r("div",{staticClass:"crumbs"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",[r("span",{staticClass:"purchase ventorImg"}),t._v("采购订单入库")])],1)],1),t._v(" "),r("div",[r("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleClick},model:{value:t.activeName2,callback:function(e){t.activeName2=e},expression:"activeName2"}},[r("el-tab-pane",{attrs:{label:"采购入库",name:"purchase"}},[r("div",{staticClass:"handle-box"},[r("el-select",{attrs:{placeholder:"请选择采购订单状态"},on:{change:function(e){t.getData("purchase")}},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.typeArr,function(t){return r("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),t._v(" "),r("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入入库单号或关联采购订单号搜索"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.search("purchase")}}},[t._v("搜索")]),t._v(" "),r("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"plus"},on:{click:t.addPurchaseOrder}},[t._v("新增")])],1),t._v(" "),r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[r("el-table-column",{attrs:{prop:"number",label:"入库单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"orderNumber",label:"关联采购订单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"relatedOrderNumber",formatter:t.formatterRelatedOrderNumber,label:"关联生产订单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"verifier",label:"入库人"}}),t._v(" "),r("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(r){t.queryDetail(e.$index,t.tableData)}}},[t._v("详情")]),t._v(" "),"save"==t.tableData[e.$index].type?r("el-button",{attrs:{size:"small",icon:"edit"},on:{click:function(r){t.handleEdit(e.$index,t.tableData)}}},[t._v("编辑")]):t._e()]}}])})],1),t._v(" "),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{layout:"total,prev, pager, next,jumper",total:t.total_size},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:"客供入库",name:"customer_provide"}},[r("div",{staticClass:"handle-box"},[r("el-select",{attrs:{placeholder:"请选择客供订单状态"},on:{change:function(e){t.getData("customer_provide")}},model:{value:t.status1,callback:function(e){t.status1=e},expression:"status1"}},t._l(t.typeArr1,function(t){return r("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),t._v(" "),r("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入入库单号搜索"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.search("customer_provide")}}},[t._v("搜索")]),t._v(" "),t._e()],1),t._v(" "),r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[t._e(),t._v(" "),t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"number",label:"入库单号"}}),t._v(" "),t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"qualityNumber",formatter:t.formatterQualityId,label:"质检单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"relatedOrderNumber",label:"关联订单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"incomingMaterialNumber",label:"来料单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"batchNumber",label:"入库批次号"}}),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(r){t.queryDetail(e.$index,t.tableData)}}},[t._v("详情")]),t._v(" "),"save"==t.tableData[e.$index].type?r("el-button",{attrs:{size:"small",icon:"edit"},on:{click:function(r){t.handleEdit(e.$index,t.tableData)}}},[t._v("编辑")]):t._e()]}}])})],1),t._v(" "),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{layout:"total,prev, pager, next,jumper",total:t.total_size},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:"质检入库",name:"quality_enter"}},[r("div",{staticClass:"handle-box"},[r("el-select",{attrs:{placeholder:"请选择采购订单状态"},on:{change:function(e){t.getData("quality_enter")}},model:{value:t.status2,callback:function(e){t.status2=e},expression:"status2"}},t._l(t.typeArr2,function(t){return r("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})})),t._v(" "),r("el-input",{staticClass:"handle-input",attrs:{placeholder:"请输入入库单号或关联采购订单号搜索"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.search("quality_enter")}}},[t._v("搜索")]),t._v(" "),r("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"plus"},on:{click:t.addPurchaseOrder}},[t._v("新增")])],1),t._v(" "),r("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[t._e(),t._v(" "),t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"number",label:"入库单号"}}),t._v(" "),t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"qualityNumber",formatter:t.formatterQualityId,label:"质检单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"relatedOrderNumber",label:"关联订单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"incomingMaterialNumber",label:"来料单号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"batchNumber",label:"入库批次号"}}),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),r("el-table-column",{attrs:{prop:"remark",label:"备注"}}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(r){t.queryDetail(e.$index,t.tableData)}}},[t._v("详情")]),t._v(" "),"save"==t.tableData[e.$index].type?r("el-button",{attrs:{size:"small",icon:"edit"},on:{click:function(r){t.handleEdit(e.$index,t.tableData)}}},[t._v("编辑")]):t._e()]}}])})],1),t._v(" "),r("div",{staticClass:"pagination"},[r("el-pagination",{attrs:{layout:"total,prev, pager, next,jumper",total:t.total_size},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)],1),t._v(" "),r("el-dialog",{attrs:{title:"采购订单入库详情",size:"large",visible:t.dialogTableVisible},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.orderDetailTableData}},[r("el-table-column",{attrs:{prop:"productNumber",label:"物料编号"}}),t._v(" "),r("el-table-column",{attrs:{prop:"repertoryName",label:"仓库名称"}}),t._v(" "),r("el-table-column",{attrs:{prop:"regionName",label:"库位名称"}}),t._v(" "),r("el-table-column",{attrs:{prop:"barCode",label:"二维码"}}),t._v(" "),r("el-table-column",{attrs:{prop:"planQuantity",label:"计划采购数量"}}),t._v(" "),r("el-table-column",{attrs:{prop:"storageTime",formatter:t.formatterStockInDate,label:"入库时间"}}),t._v(" "),r("el-table-column",{attrs:{prop:"specification",label:"物料规格"}}),t._v(" "),r("el-table-column",{attrs:{prop:"arrivalQuantity",label:"入库数量"}}),t._v(" "),r("el-table-column",{attrs:{prop:"repertoryQuantity",label:"已入库数量"}}),t._v(" "),r("el-table-column",{attrs:{property:"inspectionQuantity",label:"质检数量"}}),t._v(" "),r("el-table-column",{attrs:{property:"unqualifiedQuantity",label:"不合格数量"}}),t._v(" "),r("el-table-column",{attrs:{property:"defectiveRate",label:"不良率"}}),t._v(" "),r("el-table-column",{attrs:{property:"productQualityStatus",formatter:t.productQualityStatusStr,label:"物料质检状态"}})],1)],1)],1)},staticRenderFns:[]}},1392:function(t,e,r){var n=r(973);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(196)("5a70dafa",n,!0)},212:function(t,e,r){r(1392);var n=r(199)(r(815),r(1322),"data-v-3850937e",null);t.exports=n.exports},574:function(t,e,r){"use strict";function n(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=a(e),this.reject=a(r)}var a=r(198);t.exports.f=function(t){return new n(t)}},575:function(t,e,r){t.exports={default:r(593),__esModule:!0}},576:function(t,e,r){var n=r(136),a=r(49)("toStringTag"),o="Arguments"==n(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=i(e=Object(t),a))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},577:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},578:function(t,e,r){var n=r(64),a=r(66),o=r(574);t.exports=function(t,e){if(n(t),a(e)&&e.constructor===t)return e;var r=o.f(t);return(0,r.resolve)(e),r.promise}},579:function(t,e,r){var n=r(64),a=r(198),o=r(49)("species");t.exports=function(t,e){var r,i=n(t).constructor;return void 0===i||void 0==(r=n(i)[o])?e:a(r)}},580:function(t,e,r){var n,a,o,i=r(197),s=r(595),c=r(207),l=r(137),u=r(33),f=u.process,d=u.setImmediate,p=u.clearImmediate,m=u.MessageChannel,v=u.Dispatch,h=0,y={},b=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},g=function(t){b.call(t.data)};d&&p||(d=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return y[++h]=function(){s("function"==typeof t?t:Function(t),e)},n(h),h},p=function(t){delete y[t]},"process"==r(136)(f)?n=function(t){f.nextTick(i(b,t,1))}:v&&v.now?n=function(t){v.now(i(b,t,1))}:m?(a=new m,o=a.port2,a.port1.onmessage=g,n=i(o.postMessage,o,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(n=function(t){u.postMessage(t+"","*")},u.addEventListener("message",g,!1)):n="onreadystatechange"in l("script")?function(t){c.appendChild(l("script")).onreadystatechange=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(i(b,t,1),0)}),t.exports={set:d,clear:p}},581:function(t,e,r){"use strict";var n=String.prototype.replace,a=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,a,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},582:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,a=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},e.merge=function(t,r,a){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(a.plainObjects||a.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var o=t;return Array.isArray(t)&&!Array.isArray(r)&&(o=e.arrayToObject(t,a)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,o){n.call(t,o)?t[o]&&"object"==typeof t[o]?t[o]=e.merge(t[o],r,a):t.push(r):t[o]=r}),t):Object.keys(r).reduce(function(t,o){var i=r[o];return n.call(t,o)?t[o]=e.merge(t[o],i,a):t[o]=i,t},o)},e.assign=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var o=e.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=e.charAt(n):o<128?r+=a[o]:o<2048?r+=a[192|o>>6]+a[128|63&o]:o<55296||o>=57344?r+=a[224|o>>12]+a[128|o>>6&63]+a[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&e.charCodeAt(n)),r+=a[240|o>>18]+a[128|o>>12&63]+a[128|o>>6&63]+a[128|63&o])}return r},e.compact=function(t,r){if("object"!=typeof t||null===t)return t;var n=r||[],a=n.indexOf(t);if(-1!==a)return n[a];if(n.push(t),Array.isArray(t)){for(var o=[],i=0;i<t.length;++i)t[i]&&"object"==typeof t[i]?o.push(e.compact(t[i],n)):void 0!==t[i]&&o.push(t[i]);return o}return Object.keys(t).forEach(function(r){t[r]=e.compact(t[r],n)}),t},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},583:function(t,e,r){"use strict";function n(t){var e=new m.a({router:v.a});if(t&&(200===t.status||304===t.status||400===t.status)){if(null==t||void 0==t)return;var r=t.data;return 10002==r.code?(e.$alert("您的账号在其它的地方登入，请重新登入!","警告",{confirmButtonText:"确定",callback:function(t){"poto"===sessionStorage.getItem("access-type")?(sessionStorage.clear(),window.location.href="http://test.ceway.com.cn:7070/portal/#/login"):e.$router.push("/login")}}),t.data):10005==r.code?(e.$alert("您的账号在其它的地方登入，请重新登入!","警告",{confirmButtonText:"确定",callback:function(t){"poto"===sessionStorage.getItem("access-type")?(sessionStorage.clear(),window.location.href="http://test.ceway.com.cn:7070/portal/#/login"):e.$router.push("/login")}}),t.data):t.data}return{code:-404,msg:"系统异常，请稍后再试",data:null}}function a(t){return 500===t.status&&alert(t.msg),t.data&&!t.data.success&&alert(t.data.error_msg),t}var o=r(592),i=r.n(o),s=r(575),c=r.n(s),l=r(205),u=r.n(l),f=r(600),d=r.n(f),p=r(21),m=r.n(p),v=r(206),h=r(203);u.a.defaults.timeout=15e3,u.a.defaults.headers.get["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",u.a.defaults.baseURL="http://imcloud.ceway.com.cn:8080/gateway/",u.a.interceptors.request.use(function(t){if(t.data instanceof FormData)return t;if(0==t.headers.UseFormData)return t;var e={encData:"",encKey:""};return t.data&&(e.encData=c()(t.data),e.encKey="",t.data=e),t.headers.Authorization=sessionStorage.getItem("access-authorization"),"post"===t.method&&(t.data=d.a.stringify(t.data)),"get"===t.method&&t.data&&(t.url+="?"+d.a.stringify(t.data)),t},function(t){return i.a.reject(t)}),u.a.interceptors.response.use(function(t){return t},function(t){return i.a.resolve(t.response)}),e.a={axiosPost:function(t,e){return new i.a(function(r,o){u.a.post(t,e,h.a).then(function(t){r(n(t))},function(t){o(a(t))}).catch(function(t){o(a(t))})})},axiosPostNoHeader:function(t,e){return new i.a(function(r,o){u.a.post(t,e).then(function(t){r(n(t))},function(t){o(a(t))}).catch(function(t){o(a(t))})})},axiosGet:function(t,e){return new i.a(function(r,n){h.a.data=e,u.a.get(t,h.a).then(function(t){r(t.data)},function(t){n(t)}).catch(function(t){n(t)})})},axiosUpload:function(t,e){return new i.a(function(r,o){u()({method:"post",url:t,data:e,headers:{"Content-Type":"multipart/form-data",Authorization:sessionStorage.getItem("access-authorization")}}).then(function(t){r(n(t))},function(t){o(a(t))}).catch(function(t){o(a(t))})})},axiosPosts:function(t,e){return new i.a(function(r,o){u()({method:"post",url:t,data:e,headers:{UseFormData:!1,"Content-Type":"application/x-www-form-urlencoded; charset=utf-8",Authorization:sessionStorage.getItem("access-authorization")}}).then(function(t){r(n(t))},function(t){o(a(t))}).catch(function(t){o(a(t))})})}}},584:function(t,e,r){var n=r(576),a=r(49)("iterator"),o=r(89);t.exports=r(63).getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[n(t)]}},585:function(t,e,r){var n=r(197),a=r(589),o=r(588),i=r(64),s=r(202),c=r(584),l={},u={},e=t.exports=function(t,e,r,f,d){var p,m,v,h,y=d?function(){return t}:c(t),b=n(r,f,e?2:1),g=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(p=s(t.length);p>g;g++)if((h=e?b(i(m=t[g])[0],m[1]):b(t[g]))===l||h===u)return h}else for(v=y.call(t);!(m=v.next()).done;)if((h=a(v,b,m.value,e))===l||h===u)return h};e.BREAK=l,e.RETURN=u},586:function(t,e){t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},587:function(t,e,r){var n=r(52);t.exports=function(t,e,r){for(var a in e)r&&t[a]?t[a]=e[a]:n(t,a,e[a]);return t}},588:function(t,e,r){var n=r(89),a=r(49)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[a]===t)}},589:function(t,e,r){var n=r(64);t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},590:function(t,e,r){var n=r(49)("iterator"),a=!1;try{var o=[7][n]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var r=!1;try{var o=[7],i=o[n]();i.next=function(){return{done:r=!0}},o[n]=function(){return i},t(o)}catch(t){}return r}},591:function(t,e,r){"use strict";var n=r(33),a=r(63),o=r(50),i=r(51),s=r(49)("species");t.exports=function(t){var e="function"==typeof a[t]?a[t]:n[t];i&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},592:function(t,e,r){t.exports={default:r(594),__esModule:!0}},593:function(t,e,r){var n=r(63),a=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},594:function(t,e,r){r(204),r(200),r(201),r(597),r(598),r(599),t.exports=r(63).Promise},595:function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},596:function(t,e,r){var n=r(33),a=r(580).set,o=n.MutationObserver||n.WebKitMutationObserver,i=n.process,s=n.Promise,c="process"==r(136)(i);t.exports=function(){var t,e,r,l=function(){var n,a;for(c&&(n=i.domain)&&n.exit();t;){a=t.fn,t=t.next;try{a()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){i.nextTick(l)};else if(o){var u=!0,f=document.createTextNode("");new o(l).observe(f,{characterData:!0}),r=function(){f.data=u=!u}}else if(s&&s.resolve){var d=s.resolve();r=function(){d.then(l)}}else r=function(){a.call(n,l)};return function(n){var a={fn:n,next:void 0};e&&(e.next=a),t||(t=a,r()),e=a}}},597:function(t,e,r){"use strict";var n,a,o,i,s=r(91),c=r(33),l=r(197),u=r(576),f=r(88),d=r(66),p=r(198),m=r(586),v=r(585),h=r(579),y=r(580).set,b=r(596)(),g=r(574),_=r(577),w=r(578),x=c.TypeError,P=c.process,D=c.Promise,O="process"==u(P),N=function(){},j=a=g.f,C=!!function(){try{var t=D.resolve(1),e=(t.constructor={})[r(49)("species")]=function(t){t(N,N)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(N)instanceof e}catch(t){}}(),k=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var r=t._c;b(function(){for(var n=t._v,a=1==t._s,o=0;r.length>o;)!function(e){var r,o,i=a?e.ok:e.fail,s=e.resolve,c=e.reject,l=e.domain;try{i?(a||(2==t._h&&I(t),t._h=1),!0===i?r=n:(l&&l.enter(),r=i(n),l&&l.exit()),r===e.promise?c(x("Promise-chain cycle")):(o=k(r))?o.call(r,s,c):s(r)):c(n)}catch(t){c(t)}}(r[o++]);t._c=[],t._n=!1,e&&!t._h&&T(t)})}},T=function(t){y.call(c,function(){var e,r,n,a=t._v,o=S(t);if(o&&(e=_(function(){O?P.emit("unhandledRejection",a,t):(r=c.onunhandledrejection)?r({promise:t,reason:a}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",a)}),t._h=O||S(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},S=function(t){if(1==t._h)return!1;for(var e,r=t._a||t._c,n=0;r.length>n;)if(e=r[n++],e.fail||!S(e.promise))return!1;return!0},I=function(t){y.call(c,function(){var e;O?P.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},$=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},R=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw x("Promise can't be resolved itself");(e=k(t))?b(function(){var n={_w:r,_d:!1};try{e.call(t,l(R,n,1),l($,n,1))}catch(t){$.call(n,t)}}):(r._v=t,r._s=1,A(r,!1))}catch(t){$.call({_w:r,_d:!1},t)}}};C||(D=function(t){m(this,D,"Promise","_h"),p(t),n.call(this);try{t(l(R,this,1),l($,this,1))}catch(t){$.call(this,t)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=r(587)(D.prototype,{then:function(t,e){var r=j(h(this,D));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=O?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&A(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n;this.promise=t,this.resolve=l(R,t,1),this.reject=l($,t,1)},g.f=j=function(t){return t===D||t===i?new o(t):a(t)}),f(f.G+f.W+f.F*!C,{Promise:D}),r(90)(D,"Promise"),r(591)("Promise"),i=r(63).Promise,f(f.S+f.F*!C,"Promise",{reject:function(t){var e=j(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!C),"Promise",{resolve:function(t){return w(s&&this===i?D:this,t)}}),f(f.S+f.F*!(C&&r(590)(function(t){D.all(t).catch(N)})),"Promise",{all:function(t){var e=this,r=j(e),n=r.resolve,a=r.reject,o=_(function(){var r=[],o=0,i=1;v(t,!1,function(t){var s=o++,c=!1;r.push(void 0),i++,e.resolve(t).then(function(t){c||(c=!0,r[s]=t,--i||n(r))},a)}),--i||n(r)});return o.e&&a(o.v),r.promise},race:function(t){var e=this,r=j(e),n=r.reject,a=_(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return a.e&&n(a.v),r.promise}})},598:function(t,e,r){"use strict";var n=r(88),a=r(63),o=r(33),i=r(579),s=r(578);n(n.P+n.R,"Promise",{finally:function(t){var e=i(this,a.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return s(e,t()).then(function(){return r})}:t,r?function(r){return s(e,t()).then(function(){throw r})}:t)}})},599:function(t,e,r){"use strict";var n=r(88),a=r(574),o=r(577);n(n.S,"Promise",{try:function(t){var e=a.f(this),r=o(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},600:function(t,e,r){"use strict";var n=r(602),a=r(601),o=r(581);t.exports={formats:o,parse:a,stringify:n}},601:function(t,e,r){"use strict";var n=r(582),a=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(t,e){for(var r={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,s=n.split(e.delimiter,i),c=0;c<s.length;++c){var l,u,f=s[c],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(l=e.decoder(f,o.decoder),u=e.strictNullHandling?null:""):(l=e.decoder(f.slice(0,p),o.decoder),u=e.decoder(f.slice(p+1),o.decoder)),a.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r},s=function(t,e,r){if(!t.length)return e;var n,a=t.shift();if("[]"===a)n=[],n=n.concat(s(t,e,r));else{n=r.plainObjects?Object.create(null):{};var o="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,i=parseInt(o,10);!isNaN(i)&&a!==o&&String(i)===o&&i>=0&&r.parseArrays&&i<=r.arrayLimit?(n=[],n[i]=s(t,e,r)):n[o]=s(t,e,r)}return n},c=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,c=o.exec(n),l=c?n.slice(0,c.index):n,u=[];if(l){if(!r.plainObjects&&a.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}for(var f=0;null!==(c=i.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&a.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+n.slice(c.index)+"]"),s(u,e,r)}};t.exports=function(t,e){var r=e?n.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var a="string"==typeof t?i(t,r):t,s=r.plainObjects?Object.create(null):{},l=Object.keys(a),u=0;u<l.length;++u){var f=l[u],d=c(f,a[f],r);s=n.merge(s,d,r)}return n.compact(s)}},602:function(t,e,r){"use strict";var n=r(582),a=r(581),o={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},i=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return i.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,a,o,i,c,l,u,f,d,p,m){var v=e;if("function"==typeof l)v=l(r,v);else if(v instanceof Date)v=d(v);else if(null===v){if(o)return c&&!m?c(r,s.encoder):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||n.isBuffer(v)){if(c){return[p(m?r:c(r,s.encoder))+"="+p(c(v,s.encoder))]}return[p(r)+"="+p(String(v))]}var h=[];if(void 0===v)return h;var y;if(Array.isArray(l))y=l;else{var b=Object.keys(v);y=u?b.sort(u):b}for(var g=0;g<y.length;++g){var _=y[g];i&&null===v[_]||(h=Array.isArray(v)?h.concat(t(v[_],a(r,_),a,o,i,c,l,u,f,d,p,m)):h.concat(t(v[_],r+(f?"."+_:"["+_+"]"),a,o,i,c,l,u,f,d,p,m)))}return h};t.exports=function(t,e){var r=t,i=e?n.assign({},e):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===i.delimiter?s.delimiter:i.delimiter,u="boolean"==typeof i.strictNullHandling?i.strictNullHandling:s.strictNullHandling,f="boolean"==typeof i.skipNulls?i.skipNulls:s.skipNulls,d="boolean"==typeof i.encode?i.encode:s.encode,p="function"==typeof i.encoder?i.encoder:s.encoder,m="function"==typeof i.sort?i.sort:null,v=void 0!==i.allowDots&&i.allowDots,h="function"==typeof i.serializeDate?i.serializeDate:s.serializeDate,y="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:s.encodeValuesOnly;if(void 0===i.format)i.format=a.default;else if(!Object.prototype.hasOwnProperty.call(a.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,g,_=a.formatters[i.format];"function"==typeof i.filter?(g=i.filter,r=g("",r)):Array.isArray(i.filter)&&(g=i.filter,b=g);var w=[];if("object"!=typeof r||null===r)return"";var x;x=i.arrayFormat in o?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var P=o[x];b||(b=Object.keys(r)),m&&b.sort(m);for(var D=0;D<b.length;++D){var O=b[D];f&&null===r[O]||(w=w.concat(c(r[O],O,P,u,f,d?p:null,g,m,v,h,_,y)))}var N=w.join(l),j=!0===i.addQueryPrefix?"?":"";return N.length>0?j+N:""}},604:function(t,e,r){"use strict";e.a={formatDateTime:function(t){if(void 0==t)return"";var e=new Date(t),r=e.getFullYear(),n=e.getMonth()+1;n=n<10?"0"+n:n;var a=e.getDate();a=a<10?"0"+a:a;var o=e.getHours();o=o<10?"0"+o:o;var i=e.getMinutes(),s=e.getSeconds();return i=i<10?"0"+i:i,s=s<10?"0"+s:s,r+"-"+n+"-"+a+" "+o+":"+i+":"+s},utf16to8:function(t){var e,r,n,a;for(e="",n=t.length,r=0;r<n;r++)a=t.charCodeAt(r),a>=1&&a<=127?e+=t.charAt(r):a>2047?(e+=String.fromCharCode(224|a>>12&15),e+=String.fromCharCode(128|a>>6&63),e+=String.fromCharCode(128|a>>0&63)):(e+=String.fromCharCode(192|a>>6&31),e+=String.fromCharCode(128|a>>0&63));return e}}},625:function(t,e,r){"use strict";r.d(e,"q",function(){return a}),r.d(e,"g",function(){return o}),r.d(e,"f",function(){return i}),r.d(e,"a",function(){return s}),r.d(e,"b",function(){return c}),r.d(e,"c",function(){return l}),r.d(e,"h",function(){return u}),r.d(e,"e",function(){return f}),r.d(e,"r",function(){return d}),r.d(e,"k",function(){return p}),r.d(e,"l",function(){return m}),r.d(e,"i",function(){return v}),r.d(e,"j",function(){return h}),r.d(e,"m",function(){return y}),r.d(e,"d",function(){return b}),r.d(e,"n",function(){return g}),r.d(e,"o",function(){return _}),r.d(e,"p",function(){return w});var n=r(583),a=function(t){return n.a.axiosPost("/wms-warehousing/order/findPurchaseEnterList.api",t)},o=function(t){return n.a.axiosPost("/wms-warehousing/order/findPurchaseOrderDetailById.api",t)},i=function(t){return n.a.axiosPost("/wms-warehousing/order/findAddPurchaseOrderInfoListByGateWayId.api",t)},s=function(t){return n.a.axiosPost("/wms-warehousing/order/findPurcahseOrderByCode.api",t)},c=function(t){return n.a.axiosPost("/wms-warehousing/order/findRepertoryIdAndNameList.api",t)},l=function(t){return n.a.axiosPost("/wms-warehousing/order/findRepertoryRegionIdAndNameList.api",t)},u=function(t){return n.a.axiosPost("/wms-warehousing/order/addPurchaseOrder.api",t)},f=function(t){return n.a.axiosPost("/wms-warehousing/order/editPurchaseOrder.api",t)},d=function(t){return n.a.axiosPost("/wms-warehousing/order/deletePurchaseOrderById.api",t)},p=function(t){return n.a.axiosPost("/wms-warehousing/order/findRepertoryQuality.api",t)},m=function(t){return n.a.axiosPost("/wms-warehousing/order/findRepertoryQualityDetail.api",t)},v=function(t){return n.a.axiosPost("/wms-warehousing/order/findProductInfo.api",t)},h=function(t){return n.a.axiosPost("/wms-warehousing/order/findProductByProductCode.api",t)},y=function(t){return n.a.axiosPost("/wms-warehousing/order/findCustomerInfo.api",t)},b=function(t){return n.a.axiosPost("wms-management/common/findSequenceIdByCode.api",t)},g=function(t){return n.a.axiosPost("wms-management/transitBox/findBarCodeListByKeyWords.api",t)},_=function(t){return n.a.axiosPost("wms-management/transitBox/checkIfNeedInint.api",t)},w=function(t){return n.a.axiosPost("wms-management/initializeBox/delBoxLastRecordInformation.api",t)}},815:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(625),a=r(604);e.default={data:function(){return{tableData:[],select_word:"",cur_page:1,total_size:0,loading:!0,dialogTableVisible:!1,formData:{stockInDate:"",number:"",orderNumber:"",relatedOrderNumber:"",regionName:"",remark:"",repertoryName:"",supplierName:"",totalAmountIncludingTax:"",verifier:"",statusName:"",wayName:"",customerName:"",customerAddress:""},orderDetailTableData:[],status:"",status1:"",status2:"",typeArr:[{name:"全部",value:""},{name:"已入库采购订单",value:"submit"},{name:"待入库采购订单",value:"save"}],typeArr1:[{name:"全部",value:""},{name:"已入库客供订单",value:"submit"},{name:"待入库客供订单",value:"save"}],typeArr2:[{name:"全部",value:""},{name:"已入库客供订单",value:"submit"},{name:"待入库客供订单",value:"save"}],activeName2:"purchase",isCustomerProvide:!0}},created:function(){var t=this;""==t.$route.params.chooseType||void 0==t.$route.params.chooseType?(console.log(t.$route.params.chooseType,1111),t.getData("purchase")):(t.activeName2=t.$route.params.chooseType,t.getData(t.activeName2))},methods:{handleClick:function(t,e){this.activeName2=t.name,this.getData(this.activeName2)},getData:function(t){console.log(t,"选择");var e=this,a="";"purchase"==t?(a=e.status,console.log(a,11)):"customer_provide"==t?(a=e.status1,console.log(a,22)):"quality_enter"==t&&(a=e.status2,console.log(a,33));var o={currentPage:e.cur_page,keyWords:e.select_word,type:a,chooseType:t};r.i(n.q)(o).then(function(t){var r=t.code,n=(t.msg,t.data);200==r?(e.tableData=n.list,e.total_size=n.page.totalRecord):14e3==r?(e.tableData=[],e.total_size=0):500==r?e.$message.error("系统异常!"):400==r&&e.$message.warning("参数不合法!")})},search:function(t){this.getData(t)},addPurchaseOrder:function(){this.$router.push({name:"addPurchaseOrder"})},handleEdit:function(t,e){this.$router.push({name:"editPurchaseOrder",query:{purchaseOrderId:e[t].id,chooseType:e[t].chooseType}})},queryDetail:function(t,e){var a=this;a.dialogTableVisible=!0,"customer_provide"==e[t].chooseType&&(a.isCustomerProvide=!1);var o={id:e[t].id};r.i(n.g)(o).then(function(t){var e=t.code,r=(t.msg,t.data);200==e?(a.formData=r,console.log(a.formData),a.orderDetailTableData=r.productVoList):500==e?a.$message.error("系统异常!"):400==e?a.$message.warning("参数不合法!"):14e3==e&&a.$message.warning("无数据!")})},handleDelete:function(t,e){var a=this,o={id:e[t].id},i=this;i.$confirm("你确定要删除该条订单吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.i(n.r)(o).then(function(t){var e=t.code;t.msg,t.data;200==e?(i.$message.success("删除成功"),i.getData()):500==e?i.$message.error("系统异常!"):400==e&&i.$message.warning("参数不合法!")})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleCurrentChange:function(t){this.cur_page=t,"purchase"==this.activeName2?this.getData("purchase"):"customer_provide"==this.activeName2?this.getData("customer_provide"):"quality_enter"==this.activeName2&&this.getData("quality_enter")},formatterStockInDate:function(t,e,r){return void 0==t.storageTime?"":a.a.formatDateTime(t.storageTime)},handleMoney:function(t,e,r){return"￥"+t.totalAmountIncludingTax},formatterText:function(t,e,r){return 1==t.outAnInvoice?"是":0==t.outAnInvoice?"否":void 0},productQualityStatusStr:function(t,e,r){return"not_quality"==t.productQualityStatus?"未质检":"has_quality"==t.productQualityStatus?"已质检":"part_quality"==t.productQualityStatus?"部分质检":void 0},formatterQualityId:function(t,e,r){return""==t.qualityId||void 0==t.qualityId?"无":t.qualityId},formatterRelatedOrderNumber:function(t,e,r){return""==t.relatedOrderNumber||void 0==t.relatedOrderNumber?"无":t.relatedOrderNumber}}}},973:function(t,e,r){e=t.exports=r(65)(void 0),e.push([t.i,".handle-box[data-v-3850937e]{margin-bottom:20px}.el-form-item[data-v-3850937e]{float:left;width:50%}.el-col-5[data-v-3850937e]{width:340px}.el-table .cell[data-v-3850937e],.el-table th>div[data-v-3850937e]{padding:0!important;text-align:center;box-sizing:border-box;text-overflow:ellipsis}.handle-input[data-v-3850937e]{width:300px;display:inline-block}",""])}});