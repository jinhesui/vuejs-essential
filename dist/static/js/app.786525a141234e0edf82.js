webpackJsonp([13],{"7eqT":function(t,e){},LCpf:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"post",function(){return pt}),n.d(a,"like",function(){return gt}),n.d(a,"comment",function(){return yt});var r={};n.d(r,"computedArticles",function(){return wt}),n.d(r,"getArticlesByUid",function(){return _t}),n.d(r,"getArticlesByFilter",function(){return kt}),n.d(r,"getArticlesByKeyword",function(){return Ct});var s=n("Gu7T"),i=n.n(s),o=n("7+uW"),l=n("Dd8w"),c=n.n(l),u=n("NYxO"),d={name:"TheEntry",computed:c()({},Object(u.b)(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[n("i",{staticClass:"fa fa-plus text-md"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/articles/create"}},[n("i",{staticClass:"fa fa-paint-brush text-md"}),t._v("\n            创作文章\n          ")])],1)])]),t._v(" "),n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),t._v(" "),n("span",{staticClass:"caret"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[t.user?n("li",[n("router-link",{attrs:{to:"/"+t.user.name}},[n("i",{staticClass:"fa fa-list-ul text-md i-middle"}),t._v("\n            个人专栏\n          ")])],1):t._e(),t._v(" "),n("li",[n("router-link",{attrs:{to:"/users/1/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("\n            编辑资料\n          ")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-nav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 登 录\n    ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册\n    ")])],1)])},staticRenderFns:[]};var f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-form navbar-left hidden-sm"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.value,expression:"value",modifiers:{trim:!0}}],staticClass:"form-control search-input mac-style",attrs:{type:"text",placeholder:"搜索"},domProps:{value:t.value},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:function(e){e.target.composing||(t.value=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])])},staticRenderFns:[]};var h={name:"TheHeader",components:{TheEntry:n("VU/8")(d,v,!1,function(t){n("kfT2")},"data-v-394cb209",null).exports,SearchInput:n("VU/8")({name:"SearchInput",data:function(){return{value:""}},computed:{searchValue:{get:function(){return this.$store.state.searchValue},set:function(t){this.value=t}}},methods:{search:function(){var t=this.value;""!==t&&this.$router.push({name:"Search",query:{q:t}})},updateSearchValue:function(){this.$store.commit("UPDATE_SEARCH_VALUE",this.value)}}},f,!1,function(t){n("v8eC")},"data-v-686d79b5",null).exports},data:function(){return{logo:{src:this.uploadsUrl+"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])],1),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(a)}}},[t._v(t._s(e))])])})),t._v(" "),n("div",{staticClass:"navbar-right"},[n("SearchInput"),t._v(" "),n("TheEntry")],1)])])])},staticRenderFns:[]};function p(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=n.style;if(void 0===e)a.display="none";else{var r=t.getBoundingClientRect(),s=window.getComputedStyle(t,null),i=parseInt(s.getPropertyValue("padding-right"))||0,o=parseInt(s.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=r.left-n.offsetWidth/2+(t.offsetWidth-i)/2+"px",a.top=r.top-n.offsetHeight+o+"px",a.display="block",a.visibility="visible"}}var g={bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],r=function(n){"mouseenter"===n.type?p(t,e.value):p()};a.forEach(function(e){t.addEventListener(e,r,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,r,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}},y={name:"TheFooter",directives:{title:g},data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:jinhesui@163.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/1648283277/profile?topnav=1&wvr=6"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">Designed by\n          <span style="color: #e27575;font-size: 14px;">❤</span>\n          <a href="https://github.com/jinhesui"target="_blank"style="color:inherit">jinhesui</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])})),t._v(" "),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}))]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}))])])])])])])},staticRenderFns:[]};var j={name:"App",components:{TheHeader:n("VU/8")(h,m,!1,function(t){n("7eqT")},"data-v-443b32b3",null).exports,TheFooter:n("VU/8")(y,b,!1,function(t){n("b6ta")},"data-v-2f05f131",null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var _=n("VU/8")(j,w,!1,function(t){n("gas+")},null,null).exports,k=n("/ocq"),C=[{path:"/auth/register",name:"Register",component:function(){return n.e(5).then(n.bind(null,"0jH9"))}},{path:"/",name:"Home",component:function(){return n.e(1).then(n.bind(null,"j7e0"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e(4).then(n.bind(null,"3Jfp"))}},{path:"/users/1/edit",component:function(){return n.e(6).then(n.bind(null,"56Zq"))},children:[{path:"",name:"EditProfile",component:function(){return n.e(8).then(n.bind(null,"Plmk"))},meta:{auth:!0}},{path:"/users/1/edit_avatar",name:"EditAvatar",component:function(){return n.e(11).then(n.bind(null,"o8vE"))},meta:{auth:!0}},{path:"/users/1/edit_password",name:"EditPassword",component:function(){return n.e(9).then(n.bind(null,"6m7U"))},meta:{auth:!0}}]},{path:"/articles/create",name:"Create",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}},{path:"/articles/:articleId/edit",name:"Edit",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}},{path:"/search",name:"Search",component:function(){return n.e(7).then(n.bind(null,"G7FF"))}},{path:"/:user",component:function(){return n.e(10).then(n.bind(null,"4jfe"))},children:[{path:"",name:"Column",component:function(){return n.e(3).then(n.bind(null,"zln+"))}},{path:"/articles/:articleId/content",name:"Content",component:function(){return n.e(2).then(n.bind(null,"nYJE"))}}]},{path:"/",name:"Home",alias:"/topics",component:function(){return n.e(1).then(n.bind(null,"j7e0"))}}];o.a.use(k.a);var x=new k.a({mode:"history",linkExactActiveClass:"active",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}},routes:C});x.beforeEach(function(t,e,n){var a=x.app,r=a.$options.store,s=r.state.auth,i=t.params.articleId,o=r.state.user&&r.state.user.name,l=t.params.user;a.$message.hide(),s&&-1!==t.path.indexOf("/auth/")||!s&&t.meta.auth||i&&!r.getters.getArticleById(i)||l&&l!==o&&!r.getters.getArticlesByUid(null,l).length?n("/"):n()}),x.afterEach(function(t,e){var n=x.app,a=(n.$options.store,t.params.showMsg);a&&("string"==typeof a?n.$message.show(a):n.$message.show("操作成功"))});var I=x,A=n("W3Iv"),E=n.n(A),U=n("BO1k"),P=n.n(U),S=n("d7EF"),T=n.n(S),N=n("pFYg"),z=n.n(N);function L(t,e,n){n=n&&"object"===(void 0===n?"undefined":z()(n))?n:{};var a="string"==typeof t.value?t.value.trim():"",r=n,s=r.title,i=void 0===s?"该项":s,o=r.error,l="";if(e.required&&""===a)l=i+"不能为空";else if(n.target){var c=document.querySelector(n.target);(c?c.value:null)!==a&&(l="输入的"+i+"不匹配")}else if(n.regex)try{n.regex.test(a)||(l=i+"格式不正确")}catch(t){}l?F(t,void 0===o?l:o):F(t)}function F(t,e){var n=t.parentElement,a=function(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(a),n=e.querySelector(".help-block")}return n}(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}var O={validator:{bind:function(t,e,n){var a=e.value,r=e.arg,s=e.modifiers,i=-1!==["change","blur","input"].indexOf(r)?r:"change",o=function(){F(t)},l=function(){L(t,s,a)};t.addEventListener("input",o,!1),t.addEventListener(i,l,!1),t.destroy=function(){t.removeEventListener("input",o,!1),t.removeEventListener(i,l,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,r=e.modifiers,s=t.closest("[data-validator-form]"),i=s?s.querySelector("[type=submit]"):null;if(i){var o=function(){L(t,r,a),s.querySelectorAll(".has-error").length?i.canSubmit=!1:i.canSubmit=!0};i.addEventListener("click",o,!1),t.destroySubmitBtn=function(){i.removeEventListener("click",o,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},dropdown:{bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},r=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",r,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",r,!1),t.destroy=null}},unbind:function(t){t.destroy()}},title:g},R=!0,q=!1,B=void 0;try{for(var D,V=P()(E()(O));!(R=(D=V.next()).done);R=!0){var H=D.value,$=T()(H,2),M=$[0],W=$[1];o.a.directive(M,W)}}catch(t){q=!0,B=t}finally{try{!R&&V.return&&V.return()}finally{if(q)throw B}}var J={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var G=n("VU/8")(J,X,!1,function(t){n("o7Wd")},"data-v-40d28626",null).exports,K={name:"Modal",props:{show:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("update:show",!1)}},watch:{show:function(t){var e=document.body.classList;t?e.add("modal-open"):e.remove("modal-open")}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal",staticStyle:{display:"block"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",on:{click:t.close}},[t._v("×")]),t._v(" "),n("h4",{staticClass:"modal-title"},[t._t("title")],2)]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop fade in",on:{click:t.close}})])],1)},staticRenderFns:[]};var Y=n("VU/8")(K,Q,!1,function(t){n("PmNL")},"data-v-453a45e4",null).exports,Z={name:"Pagination",props:{currentPage:{type:Number,default:1},total:{type:Number,required:!0},pageSize:{type:Number,default:10,validator:function(t){return t>0}},onPageChange:{type:Function,default:function(){}}},data:function(){return{internalCurrentPage:1}},computed:{totalPage:function(){return Math.ceil(this.total/this.pageSize)}},watch:{currentPage:{immediate:!0,handler:function(t){this.internalCurrentPage=t}}},methods:{changePage:function(t){t===this.internalCurrentPage||t<1||t>this.totalPage||this.onPageChange(t)}}},tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalPage>1?n("ul",{staticClass:"pagination"},[n("li",{class:{disabled:1===t.internalCurrentPage}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.changePage(t.internalCurrentPage-1)}}},[t._v("«")])]),t._v(" "),t._l(t.totalPage,function(e){return n("li",{class:{active:t.internalCurrentPage===e}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){t.changePage(e)}}},[t._v(t._s(e))])])}),t._v(" "),n("li",{class:{disabled:t.internalCurrentPage===t.totalPage}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.changePage(t.internalCurrentPage+1)}}},[t._v("»")])])],2):t._e()},staticRenderFns:[]};var et=n("VU/8")(Z,tt,!1,function(t){n("a2Fe")},"data-v-9c481bd8",null).exports,nt={name:"Slider",props:{slides:{type:Array,default:function(){return[]}},autoplay:{type:Boolean,default:!0},delay:{type:Number,default:3e3}},data:function(){return{currentIndex:0,show:!0}},computed:{currentSlide:function(){return this.slides[this.currentIndex]},nextIndex:function(){return this.currentIndex===this.slides.length-1?0:this.currentIndex+1}},mounted:function(){this.autoplay&&this.play()},methods:{play:function(){var t=this;this.autoplay&&(this.interval=setInterval(function(){t.playTo(t.nextIndex)},this.delay))},stop:function(){this.interval&&clearInterval(this.interval)},playTo:function(t){var e=this;this.currentIndex!==t&&(this.show=!1,setTimeout(function(){e.currentIndex=t,e.show=!0},0))}}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.slides.length?n("div",{staticClass:"carousel slide",on:{mouseover:t.stop,mouseout:t.play}},[n("div",{staticClass:"carousel-inner"},[n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft"}},[t.show?n("div",{key:"current"},[t._t("default",null,{currentSlide:t.currentSlide})],2):n("div",{key:"next",staticClass:"item next"},[t._t("default",null,{currentSlide:t.currentSlide})],2)])],1),t._v(" "),n("div",{staticClass:"carousel-indicators"},t._l(t.slides.length,function(e){return n("li",{class:{active:e-1===t.currentIndex},on:{click:function(n){t.playTo(e-1)}}})}))]):t._e()},staticRenderFns:[]};var rt=n("VU/8")(nt,at,!1,function(t){n("LCpf")},"data-v-3048b218",null).exports,st={Message:G,Modal:Y,Pagination:et,Slider:rt},it=!0,ot=!1,lt=void 0;try{for(var ct,ut=P()(E()(st));!(it=(ct=ut.next()).done);it=!0){var dt=ct.value,vt=T()(dt,2),ft=vt[0],ht=vt[1];o.a.component(ft,ht)}}catch(t){ot=!0,lt=t}finally{try{!it&&ut.return&&ut.return()}finally{if(ot)throw lt}}var mt=n("ssT3"),pt=function(t,e){var n=t.commit,a=t.state,r=e.article,s=e.articleId,i=a.articles;if(Array.isArray(i)||(i=[]),r){var o=r.title,l=r.content,c=new Date;if(void 0===s){var u=i[i.length-1];s=u?parseInt(u.articleId)+1:i.length+1,i.push({uid:1,articleId:s,title:o,content:l,date:c})}else{var d=!0,v=!1,f=void 0;try{for(var h,m=P()(i);!(d=(h=m.next()).done);d=!0){var p=h.value;if(parseInt(p.articleId)===parseInt(s)){p.title=o,p.content=l;break}}}catch(t){v=!0,f=t}finally{try{!d&&m.return&&m.return()}finally{if(v)throw f}}}n("UPDATE_ARTICLES",i),I.push({name:"Content",params:{articleId:s,showMsg:!0}})}else{var g=!0,y=!1,b=void 0;try{for(var j,w=P()(i);!(g=(j=w.next()).done);g=!0){var _=j.value;if(parseInt(_.articleId)===parseInt(s)){i.splice(i.indexOf(_),1);break}}}catch(t){y=!0,b=t}finally{try{!g&&w.return&&w.return()}finally{if(y)throw b}}n("UPDATE_ARTICLES",i),I.push({name:"Home",params:{showMsg:!0}})}},gt=function(t,e){var n=t.commit,a=t.state,r=e.articleId,s=e.isAdd,i=a.articles,o=[];Array.isArray(i)||(i=[]);var l=!0,c=!1,u=void 0;try{for(var d,v=P()(i);!(l=(d=v.next()).done);l=!0){var f=d.value;if(parseInt(f.articleId)===parseInt(r)){if(o=Array.isArray(f.likeUsers)?f.likeUsers:o,s){o.some(function(t){return 1===parseInt(t.uid)})||o.push({uid:1})}else{var h=!0,m=!1,p=void 0;try{for(var g,y=P()(o);!(h=(g=y.next()).done);h=!0){var b=g.value;if(1===parseInt(b.uid)){o.splice(o.indexOf(b),1);break}}}catch(t){m=!0,p=t}finally{try{!h&&y.return&&y.return()}finally{if(m)throw p}}}f.likeUsers=o;break}}}catch(t){c=!0,u=t}finally{try{!l&&v.return&&v.return()}finally{if(c)throw u}}return n("UPDATE_ARTICLES",i),o},yt=function(t,e){var n=t.commit,a=t.state,r=e.articleId,s=e.comment,i=e.commentId,o=a.articles,l=[];Array.isArray(o)||(o=[]);var c=!0,u=!1,d=void 0;try{for(var v,f=P()(o);!(c=(v=f.next()).done);c=!0){var h=v.value;if(parseInt(h.articleId)===parseInt(r)){if(l=Array.isArray(h.comments)?h.comments:l,s){var m=s.uid,p=void 0===m?1:m,g=s.content,y=new Date;if(void 0===i){var b=l[l.length-1];i=b?parseInt(b.commentId)+1:l.length+1,l.push({uid:p,commentId:i,content:g,date:y})}else{var j=!0,w=!1,_=void 0;try{for(var k,C=P()(l);!(j=(k=C.next()).done);j=!0){var x=k.value;if(parseInt(x.commentId)===parseInt(i)){x.content=g;break}}}catch(t){w=!0,_=t}finally{try{!j&&C.return&&C.return()}finally{if(w)throw _}}}}else{var I=!0,A=!1,E=void 0;try{for(var U,S=P()(l);!(I=(U=S.next()).done);I=!0){var T=U.value;if(parseInt(T.commentId)===parseInt(i)){l.splice(l.indexOf(T),1);break}}}catch(t){A=!0,E=t}finally{try{!I&&S.return&&S.return()}finally{if(A)throw E}}}h.comments=l;break}}}catch(t){u=!0,d=t}finally{try{!c&&f.return&&f.return()}finally{if(u)throw d}}return n("UPDATE_ARTICLES",o),l},bt=n("mvHQ"),jt=n.n(bt),wt=function(t){var e=t.articles,n=[],a=function(e){var n=t.user&&t.user.name,a=t.user&&t.user.avatar;e?(this.uname=n,this.uavatar=a):this.uavatar="https://api.adorable.io/avatars/200/"+this.uname};return Array.isArray(e)&&(n=JSON.parse(jt()(e))).forEach(function(t){var e=t.comments,n=t.likeUsers;1===t.uid?a.call(t,!0):a.call(t),Array.isArray(e)&&e.forEach(function(t){1===t.uid?a.call(t,!0):a.call(t)}),Array.isArray(n)&&n.forEach(function(t){1===t.uid?a.call(t,!0):a.call(t)})}),n},_t=function(t,e){return function(t,n){var a=e.computedArticles;if(Array.isArray(a)){if(n){var r=!0,s=!1,i=void 0;try{for(var o,l=P()(a);!(r=(o=l.next()).done);r=!0){var c=o.value;if(c.uname===n){t=c.uid;break}}}catch(t){s=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(s)throw i}}}a=a.filter(function(e){return parseInt(t)===parseInt(e.uid)})}else a=[];return a}},kt=function(t,e){return function(t){var n=e.computedArticles,a=[];if(Array.isArray(n))switch(a=n.map(function(t){return c()({},t)}),t){case"excellent":a=e.getArticlesByUid(1);break;case"vote":a.sort(function(t,e){var n=Array.isArray(t.likeUsers)?t.likeUsers:[];return(Array.isArray(e.likeUsers)?e.likeUsers:[]).length-n.length});break;case"recent":a.reverse();break;case"noreply":a.sort(function(t,e){var n=Array.isArray(t.comments)?t.comments:[],a=Array.isArray(e.comments)?e.comments:[];return n.length-a.length});break;default:a.sort(function(t,e){var n=Array.isArray(t.comments)?t.comments:[],a=Array.isArray(e.comments)?e.comments:[],r=n.length,s=a.length;return r>0?s>0?new Date(a[s-1].date)-new Date(n[r-1].date):-1:1})}return a}},Ct=function(t,e){return function(n,a){var r=e.computedArticles,s=[];switch(Array.isArray(r)&&r.forEach(function(e){var a=e.articleId,r=e.title,i=e.content,o=new RegExp("("+n+")","gi");if(-1!==r.indexOf(n)||-1!==i.indexOf(n)){var l=t.origin+"/articles/"+a+"/content";r=r.replace(o,'<span class="highlight">$1</span>'),i=i.substr(0,100).replace(o,'<span class="highlight">$1</span>'),s.push(c()({},e,{url:l,title:r,content:i}))}}),a){case"vote":s.sort(function(t,e){var n=Array.isArray(t.likeUsers)?t.likeUsers:[];return(Array.isArray(e.likeUsers)?e.likeUsers:[]).length-n.length});break;default:s.sort(function(t,e){return t.title.indexOf(n)<e.title.indexOf(n)})}return s}};o.a.use(u.a);var xt={user:mt.a.getItem("user"),auth:mt.a.getItem("auth"),articles:mt.a.getItem("articles"),searchValue:"",origin:-1!==location.origin.indexOf("github.io")?location.origin+"/vuejs-essential/dist":location.origin},It={UPDATE_USER:function(t,e){t.user=e,mt.a.setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,mt.a.setItem("auth",e)},UPDATE_ARTICLES:function(t,e){t.articles=e,mt.a.setItem("articles",e)},UPDATE_SEARCH_VALUE:function(t,e){t.searchValue=e}},At=c()({login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),I.push("/")},logout:function(t){(0,t.commit)("UPDATE_AUTH",!1),I.push({name:"Home",params:{logout:!0}})},updateUser:function(t,e){var n=t.state,a=t.commit,r=n.user;r&&"object"===(void 0===r?"undefined":z()(r))&&(e=c()({},r,e)),a("UPDATE_USER",e)}},a),Et=c()({getArticleById:function(t,e){return function(t){var n=e.computedArticles;return Array.isArray(n)&&(n=n.filter(function(e){return parseInt(t)===parseInt(e.articleId)})).length?n[0]:null}}},r),Ut=new u.a.Store({state:xt,getters:Et,mutations:It,actions:At}),Pt=n("e7x4"),St=n.n(Pt),Tt={install:function(t){St.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=St.a,t.prototype.$swal=St.a}},Nt={install:function(t){var e=new(t.extend(G)),n=e.$mount().$el;t.nextTick(function(){document.querySelector("#main-container").prepend(n)}),e.$on("update:show",function(t){e.show=t});var a={show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e.msg=n,e.type=a,e.show=!1,t.nextTick(function(){e.show=!0})},hide:function(){t.nextTick(function(){e.show=!1})}};t.prototype.$message=a}},zt=n("PJh5"),Lt=n.n(zt);Lt.a.locale("zh-cn");o.a.filter("moment",function(t){var e=t;if(Lt()(e).isValid()){for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var s=a.shift();if("string"==typeof s)switch(s){case"from":t=Lt()(e).from();var i=a.shift();i&&"object"===(void 0===i?"undefined":z()(i))&&(t=Lt()(e).startOf(i.startOf).from());break;default:t=Lt()(e).format(s)}}return t});var Ft=n("lHA8"),Ot=n.n(Ft),Rt=n("zNUS"),qt=n.n(Rt),Bt=qt.a.Random,Dt=mt.a.getItem("articles"),Vt=mt.a.getItem("user"),Ht=Vt?Vt.name:void 0,$t=1;Array.isArray(Dt)&&Dt.length&&($t=parseInt(Dt[Dt.length-1].articleId)+1);function Mt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.floor(Math.random()*e+1),a=[].concat(i()(Array(n))).map(function(){return t[Math.floor(Math.random()*t.length)]});return[].concat(i()(new Ot.a(a)))}qt.a.mock("/users/active","get",function(){var t,e=[],n=[];Ut.getters.computedArticles.map(function(t){var n=Array.isArray(t.comments)?t.comments:[];e=[].concat(i()(e),i()(n))}),t=e.reduce(function(t,e){return t[e.uname]=t[e.uname]||{},t[e.uname].avatar=e.uavatar,t[e.uname].num=++t[e.uname].num||1,t},{});var a=!0,r=!1,s=void 0;try{for(var o,l=P()(E()(t));!(a=(o=l.next()).done);a=!0){var c=o.value,u=T()(c,2),d=u[0],v=u[1];n.push({name:d,avatar:v.avatar,num:v.num})}}catch(t){r=!0,s=t}finally{try{!a&&l.return&&l.return()}finally{if(r)throw s}}return n.sort(function(t,e){return e.num-t.num}),n=n.slice(0,8)}),qt.a.mock("/articles/hot","post",function(t){var e=Ut.getters.getArticlesByFilter("noreply").reverse().filter(function(t){return new Date-new Date(t.date)<6048e5}),n=void 0;if(t.body)try{n=JSON.parse(t.body).num}catch(t){}return e=e.slice(0,n||10)});var Wt=n("mtWM"),Jt=n.n(Wt);o.a.prototype.$axios=Jt.a,o.a.use(Tt),o.a.use(Nt),o.a.config.productionTip=!1;var Xt;Xt=mt.a.getItem("articles"),Xt=Array.isArray(Xt)?Xt.filter(function(t){return 1===parseInt(t.uid)}):[],Ut.commit("UPDATE_ARTICLES",[].concat(i()(Xt),i()(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=[Ht,"topics"],n=[],a=[];return t=t>60?60:t,[].concat(i()(Array(t))).forEach(function(t,r){for(var s=Bt.first();-1!==a.indexOf(s)||-1!==e.indexOf(s);)s=Bt.first();a.push(s),n.push({uid:r+2,articleId:$t+r,title:Bt.ctitle(10,20),content:Bt.cparagraph(3,5),date:new Date,likeUsers:[],comments:[],uname:s})}),n.forEach(function(t,e){var a=[],r=[],s=Mt(n);s.forEach(function(t,e){a.push({uid:t.uid,uname:t.uname})}),(s=Mt(n)).forEach(function(t,e){r.push({uid:t.uid,commentId:e+1,content:Bt.csentence(5,10),date:t.date,uname:t.uname})}),t.likeUsers=a,t.comments=r}),n}(60))));new o.a({el:"#app",router:I,store:Ut,components:{App:_},template:"<App/>"})},PmNL:function(t,e){},a2Fe:function(t,e){},b6ta:function(t,e){},"gas+":function(t,e){},kfT2:function(t,e){},o7Wd:function(t,e){},ssT3:function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a),s=localStorage;e.a={setItem:function(t,e){s.setItem(t,r()(e))},getItem:function(t){try{return JSON.parse(s.getItem(t))}catch(t){return null}},removeItem:function(t){s.removeItem(t)}}},uslO:function(t,e,n){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return n(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="uslO"},v8eC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.786525a141234e0edf82.js.map