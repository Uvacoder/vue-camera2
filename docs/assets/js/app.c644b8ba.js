(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},3826:function(t,e,n){"use strict";var a=n("9cfe"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("Home")],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"row"},[n("div",{staticClass:"two columns"},[n("span",{staticClass:"brand"},[t._v("Camera")])]),n("div",{staticClass:"one  column"},[n("button",{staticClass:"button"},[n("i",{staticClass:"settings fas fa-cog"})])]),n("div",{staticClass:"nine columns"})])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("camera")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"camera"},[n("div",{staticClass:"action-group"},[n("button",{attrs:{id:"start-stream",disabled:!t.isStartEnabled},on:{click:t.start}},[t._v("Start")]),n("button",{attrs:{id:"stop-stream",disabled:t.isStartEnabled},on:{click:t.stop}},[t._v("Stop")]),n("button",{attrs:{id:"snapshot",disabled:t.isStartEnabled},on:{click:t.snapshot}},[t._v("Snapshot")]),n("button",{attrs:{id:"download",disabled:!t.isPhoto},on:{click:t.download}},[t._v("Download")]),n("select",{staticClass:"u-full-width",attrs:{disabled:!t.isPhoto,id:"video-select"}})]),t._m(0),t._m(1),n("div",{attrs:{id:"gallery"}}),n("a",{attrs:{href:"https://github.com/rebeccapeltz/vue-camera",title:"View source for this page on GitHub",id:"viewSource"}},[t._v("\n    View\n    source on GitHub\n  ")])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("video",{attrs:{playsinline:"",autoplay:""}}),n("canvas")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"upload-form",attrs:{id:"upload-form"}},[n("input",{attrs:{type:"text",name:"cloud-name",value:"picturecloud7",placeholder:"Enter cloud name"}}),n("input",{attrs:{type:"text",name:"preset",value:"bp_test_1",placeholder:"Enter upload preset"}}),n("button",{attrs:{type:"submit"}},[t._v("Upload")])])}],u=(n("28a5"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),d=n("d225"),h=n("b0b4"),p=function(){function t(e,n,a){var i=this;Object(d["a"])(this,t),this.currentImage=null,this.cloudName=null,this.preset=null,this.defaultCloudName="picturecloud7",this.defaultPreset="bp_test_1",this.video=e,this.canvas=n,this.select=a,this.fileData=null,this.constraints=null,this.currentStream=null,this.devices=[],navigator.mediaDevices.enumerateDevices().then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.forEach(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("videoinput"!==e.kind){t.next=3;break}return t.next=3,i.devices.push(e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:console.log("populate select"),i.populateDeviceSelect();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.error("Camera init:",t)}))}return Object(h["a"])(t,[{key:"populateDeviceSelect",value:function(){this.select.innerHTML="";var t=document.createElement("option");t.label="Select Camera",this.select.appendChild(t);var e=1,n=!0,a=!1,i=void 0;try{for(var s,o=this.devices[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var r=s.value,c=document.createElement("option");c.value=r.deviceId;var l=r.label||"Camera ".concat(e++),u=document.createTextNode(l);c.appendChild(u),this.select.appendChild(c)}}catch(d){a=!0,i=d}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}this.select.label=this.devices[0].label,this.select.value=this.devices[0].deviceId,this.turnOnDevice()}},{key:"setCloudName",value:function(t){this.cloudName=t}},{key:"setPreset",value:function(t){this.preset=t}},{key:"setConstraints",value:function(){console.log("set constraints");var t={};console.log(this.select.value,this.select.label),""===this.select.value?t.facingMode="environment":t.deviceId={exact:this.select.value},this.constraints={video:t,audio:!1}}},{key:"turnOnDevice",value:function(){var t=this;console.log("camera on"),this.turnAllDevicesOff(),this.setConstraints(),navigator.mediaDevices.getUserMedia(this.constraints).then((function(e){window.stream=e,t.video.srcObject=e,t.currentStream=e})).catch((function(t){console.error(t)}))}},{key:"turnAllDevicesOff",value:function(){console.log("camera off"),this.video.pause(),this.currentStream&&(this.currentStream.getTracks().forEach((function(t){t.stop()})),this.video.srcObject=null),this.video.removeAttribute("src"),this.video.load(),this.canvas.getContext("2d").clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"snapshot",value:function(){console.log("snapshot"),this.canvas.width=this.video.videoWidth,this.canvas.height=this.video.videoHeight,this.canvas.getContext("2d").drawImage(this.video,0,0,this.canvas.width,this.canvas.height),this.fileData=this.canvas.toDataURL("image/jpeg")}},{key:"download",value:function(){if(this.fileData){console.log("download"),this.canvas.width=this.video.videoWidth,this.canvas.height=this.video.videoHeight,this.canvas.getContext("2d").drawImage(this.video,0,0,this.canvas.width,this.canvas.height);var t=document.createElement("a");t.href=this.fileData,t.textContent="photo",t.target="_blank",t.download="photo.jpeg",document.querySelector("body").append(t),t.click()}}},{key:"upload",value:function(){console.log("upload");var t="https://api.cloudinary.com/v1_1/".concat(this.cloudName,"/upload"),e=new XMLHttpRequest,n=new FormData;e.open("POST",t,!0),e.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.onreadystatechange=function(t){if(4==e.readyState&&200==e.status){var n=JSON.parse(e.responseText),a=n.secure_url,i=a.split("/");i.splice(-3,0,"w_150,c_scale");var s=new Image;s.src=i.join("/"),s.alt=n.public_id}},n.append("upload_preset",this.preset),n.append("tags","browser_upload"),n.append("file",this.fileData),e.send(n)}}]),t}(),v=function(){function t(){Object(d["a"])(this,t)}return Object(h["a"])(t,[{key:"getSingleInstance",value:function(t,e,n){return new p(t,e,n)}}]),t}(),f=new v,m={name:"Camera",data:function(){return{camera:null,isStartEnabled:!0,isPhoto:!1}},methods:{snapshot:function(){console.log("snapshot"),this.camera.snapshot(),this.isPhoto=!0},stop:function(){console.log("stop"),this.camera.turnAllDevicesOff(),this.isStartEnabled=!0,this.isPhoto=!1},start:function(){console.log("start"),this.camera.turnOnDevice(),this.isStartEnabled=!1},download:function(){console.log("downlaod"),this.camera.download()}},mounted:function(){var t=document.querySelector("video"),e=document.querySelector("canvas"),n=document.querySelector("#video-select");this.camera=f.getSingleInstance(t,e,n),this.isStartEnabled=!1}},b=m,g=(n("bfd9"),n("2877")),w=Object(g["a"])(b,c,l,!1,null,"717988d1",null),y=w.exports,_={name:"Home",props:{msg:String},components:{camera:y}},S=_,O=(n("3826"),Object(g["a"])(S,o,r,!1,null,"408737d5",null)),C=O.exports,k={name:"app",components:{Home:C}},x=k,j=(n("034f"),Object(g["a"])(x,i,s,!1,null,null,null)),E=j.exports,D=n("8c4f");a["a"].use(D["a"]);var P=new D["a"]({routes:[{path:"/",name:"home",component:C}]});a["a"].config.productionTip=!1,new a["a"]({router:P,render:function(t){return t(E)}}).$mount("#app")},"64a9":function(t,e,n){},"766e":function(t,e,n){},"9cfe":function(t,e,n){},bfd9:function(t,e,n){"use strict";var a=n("766e"),i=n.n(a);i.a}});
//# sourceMappingURL=app.c644b8ba.js.map