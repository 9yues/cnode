webpackJsonp([1,2],Array(28).concat([function(t,e,n){n(67);var a=n(3)(n(105),n(61),"data-v-45efe8b2",null);t.exports=a.exports},function(t,e,n){n(66);var a=n(3)(n(108),n(60),"data-v-40b60466",null);t.exports=a.exports},,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){var e=setInterval(function(){var n=document.documentElement.scrollTop||document.body.scrollTop,a=(t-n)/8;a=a>0?Math.ceil(a):Math.floor(a),document.documentElement.scrollTop=document.body.scrollTop=a+n,0===a&&clearInterval(e)},500/60)}n.d(e,"a",function(){return a})},,function(t,e,n){n(68);var a=n(3)(n(103),n(62),null,null);t.exports=a.exports},function(t,e,n){n(65);var a=n(3)(n(104),n(59),null,null);t.exports=a.exports},function(t,e,n){n(64);var a=n(3)(n(106),n(58),"data-v-1c46780e",null);t.exports=a.exports},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,function(t,e,n){n(63);var a=n(3)(n(107),n(57),"data-v-1544588e",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[t.menu?n("div",{staticClass:"mask animated",class:{fadeIn:t.menu},on:{click:t.setMenu}}):t._e(),t._v(" "),t.menu?n("div",{staticClass:"menu-body animated",class:{fadeInLeft:t.menu}},[t._m(0),t._v(" "),n("div",{staticClass:"nav"},[n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"},on:{click:function(e){t.menuHanlder("all")}}},[n("i",{staticClass:"iconfont icon-icon"}),n("span",[t._v("全部")])]),t._v(" "),n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"},on:{click:function(e){t.menuHanlder("good")}}},[n("i",{staticClass:"iconfont icon-zansel"}),n("span",[t._v("精华")])]),t._v(" "),n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"},on:{click:function(e){t.menuHanlder("share")}}},[n("i",{staticClass:"iconfont icon-fenxiang"}),n("span",[t._v("分享")])]),t._v(" "),n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"},on:{click:function(e){t.menuHanlder("ask")}}},[n("i",{staticClass:"iconfont icon-wenda"}),n("span",[t._v("问答")])]),t._v(" "),n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"},on:{click:function(e){t.menuHanlder("job")}}},[n("i",{staticClass:"iconfont icon-zhaopin"}),n("span",[t._v("招聘")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"login",attrs:{href:"javascript:;"}},[n("i",{staticClass:"iconfont icon-jiantou-copy-copy"}),t._v(" "),n("span",[t._v("登录")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"}},[n("i",{staticClass:"iconfont icon-wenda"}),n("span",[t._v("消息")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-link",attrs:{href:"javascript:;"}},[n("i",{staticClass:"iconfont icon-guanyu"}),n("span",[t._v("关于")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Headers",[n("a",{staticClass:"header-left",attrs:{href:"javascript:;"},on:{click:t.clickMenu},slot:"icon1"},[n("i",{staticClass:"iconfont icon-caidan01"})]),t._v(" "),n("b",{slot:"text"},[t._v(t._s(t.headerName))]),t._v(" "),n("a",{staticClass:"header-right",attrs:{href:"javascript:;"},slot:"icon2"},[n("i",{staticClass:"iconfont icon-zhifeiji"})])]),t._v(" "),n("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded},on:{"top-status-change":t.handleTopChange,"bottom-status-change":t.handleTopChange}},[n("transition-group",{staticClass:"home-ul",attrs:{tag:"ul","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceInUp"}},t._l(t.cnodeList,function(e){return n("li",{key:e,staticClass:"home-item"},[n("router-link",{staticClass:"home-link",attrs:{to:"/detail/"+e.id}},[n("h3",{staticClass:"title"},[e.top?n("span",{staticClass:"tag"},[t._v("置顶")]):e.good?n("span",{staticClass:"tag"},[t._v("精华")]):"share"==e.tab?n("span",{staticClass:"tag gray"},[t._v("分享")]):"ask"==e.tab?n("span",{staticClass:"tag gray"},[t._v("问答")]):"job"==e.tab?n("span",{staticClass:"tag gray"},[t._v("招聘")]):t._e(),t._v(" "),n("b",{staticClass:"txt"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content-img"},[n("img",{attrs:{src:e.author.avatar_url,alt:""}})]),t._v(" "),n("div",{staticClass:"content-txt"},[n("p",[n("span",{staticClass:"fr"},[n("i",{staticClass:"green"},[t._v(t._s(e.reply_count))]),t._v("/"+t._s(e.visit_count))]),n("span",{staticClass:"name"},[t._v(t._s(e.author.loginname))])]),t._v(" "),n("p",{staticClass:"text-right"},[t._v(t._s(t._f("getDateDiff")(e.last_reply_at)))])])])])],1)}))],1),t._v(" "),n("v-menu",{attrs:{menu:t.isShowMenu},on:{transferMenu:t.getMenu,childMenuClick:t.getMenuList}}),t._v(" "),n("keep-alive",[n("router-view")],1),t._v(" "),n("Returntop")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail"},[n("Headers",[n("router-link",{staticClass:"header-left",attrs:{to:"/home"},slot:"icon1"},[n("i",{staticClass:"iconfont icon-jiantou"})]),t._v(" "),n("b",{slot:"text"},[t._v("详情")])],1),t._v(" "),n("div",{staticClass:"detail-body"},[n("div",{staticClass:"detail-head"},[n("h2",{staticClass:"title"},[t._v(t._s(t.detailList.title))]),t._v(" "),n("div",{staticClass:"avatar"},[n("span",{staticClass:"time"},[t._v(t._s(t._f("getDateDiff")(t.detailList.last_reply_at)))]),t._v(" "),n("img",{staticClass:"user-img",attrs:{src:t.avatar_url,alt:""}}),t._v(" "),n("span",{staticClass:"user-name"},[t._v(t._s(t.loginname))])])]),t._v(" "),n("div",{staticClass:"detail-content"},[n("div",{domProps:{innerHTML:t._s(t.detailList.content)}})]),t._v(" "),n("div",{staticClass:"detail-comments-length"},[t._v("\n      "+t._s(t.commentsCountLength)+"回复\n    ")]),t._v(" "),n("div",{staticClass:"detail-comments"},[n("ul",t._l(t.commentsList,function(e,a){return n("li",{staticClass:"comments-item"},[n("div",{staticClass:"avatar"},[n("span",{staticClass:"time"},[t._v(t._s(t._f("getDateDiff")(e.create_at)))]),t._v(" "),n("span",{staticClass:"good"},[n("i",{staticClass:"iconfont icon-zansel"}),t._v(t._s(e.ups.length))]),t._v(" "),n("span",{staticClass:"name"},[n("img",{attrs:{src:e.author.avatar_url,alt:""}}),t._v(t._s(e.author.loginname)+" "),n("b",[t._v(t._s(a+1)+"楼")])])]),t._v(" "),n("div",{staticClass:"desc",domProps:{innerHTML:t._s(e.content)}})])})),t._v(" "),t.commentsDataLoadStatus?n("div",{staticClass:"none-more"},[t._v("\n        ~已经没有更多评论了~\n      ")]):t._e()])]),t._v(" "),n("Returntop")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isTop?n("div",{staticClass:"return-top",on:{click:t.returnTop}},[n("i",{staticClass:"iconfont icon-jiantou-copy-copy"})]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headers"},[n("header",{staticClass:"header"},[t._t("icon1"),t._v(" "),t._t("text"),t._v(" "),t._t("icon2")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":"animated fadeInRight","leave-active-class":""}},[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(30),s=(n.n(a),n(28)),i=n.n(s),o=n(29),c=n.n(o),r="https://cnodejs.org/api/v1/";e.default={name:"detail",data:function(){return{detailList:{},loginname:"",avatar_url:"",page:0,commentsCountLength:0,commentsDataLoadStatus:!1,commentsEmpty:!0,commentsStatus:!0,commentsPage:0,commentsCount:10,commentsList:[]}},mounted:function(){this.getData()},beforeRouteEnter:function(t,e,n){n(function(t){window.addEventListener("scroll",t.scrollBottom,!1)})},beforeRouteLeave:function(t,e,n){this.reductionDefault(),window.removeEventListener("scroll",this.scrollBottom,!1),n()},watch:{$route:"getData"},methods:{getData:function(){var t=this,e=this.$route.params.id;void 0!==e&&(a.Indicator.open(),this.ajax(r+"topic/"+e,function(e){t.detailList=e.body.data,t.loginname=t.detailList.author.loginname,t.avatar_url=t.detailList.author.avatar_url,t.getCommentsData(t.commentsPage,t.commentsCount,function(){t.commentsCountLength=t.detailList.replies.length,a.Indicator.close()})}))},scrollBottom:function(t){var e=this,n=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||document.body.clientHeight,s=document.documentElement.scrollHeight||document.body.scrollHeight;this.commentsDataLoadStatus||n+a>=s&&this.commentsStatus&&(this.page++,this.commentsStatus=!1,this.commentsPage=this.page*this.commentsCount,this.getCommentsData(this.commentsPage,this.commentsCount,function(){e.commentsStatus=!0}))},getCommentsData:function(t,e,n){e+=t,e>this.detailList.replies.length&&(e=this.detailList.replies.length,this.commentsDataLoadStatus=!0);for(var a=t;a<e;a++)if(this.commentsEmpty)this.commentsList.push(this.detailList.replies[a]);else{var s=this.commentsList.concat(this.detailList.replies[a]);this.commentsList=s}this.commentsEmpty=!1,n&&n()},reductionDefault:function(){this.commentsEmpty=!0,this.loginname="",this.avatar_url="",this.commentsCountLength=0,this.page=0,this.commentsPage=0,this.commentsCount=10,this.commentsDataLoadStatus=!1,this.detailList=[],this.commentsList=[]},ajax:function(t,e){this.$http.get(t).then(function(t){200===t.status&&e&&e(t)},function(t){console.log(t)})}},components:{Headers:i.a,Returntop:c.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"headers",data:function(){return{}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(42),s=n(30),i=(n.n(s),n(28)),o=n.n(i),c=n(56),r=n.n(c),l=n(29),u=n.n(l),d="https://cnodejs.org/api/v1/";e.default={name:"home",data:function(){return{cnodeList:[],allLoaded:!1,recordScrollPosition:0,headerName:"全部",tab:"all",page:1,isEmpty:!0,mdrender:!1,isShowMenu:!1}},mounted:function(){s.Indicator.open(),this.ajax(d+"topics?page="+this.page+"&mdrender="+this.mdrender+"&tab="+this.tab,function(){s.Indicator.close()})},beforeRouteEnter:function(t,e,n){n(function(t){document.documentElement.scrollTop=document.body.scrollTop=t.recordScrollPosition})},beforeRouteLeave:function(t,e,n){this.recordScrollPosition=document.documentElement.scrollTop||document.body.scrollTop,n()},methods:{clickMenu:function(){this.isShowMenu=!this.isShowMenu,document.body.addEventListener("touchmove",this.prevent,!1)},prevent:function(t){t.preventDefault()},getMenu:function(t){this.isShowMenu=t,document.body.removeEventListener("touchmove",this.prevent,!1)},getMenuList:function(t){if(t){switch(t){case"all":this.headerName="全部";break;case"good":this.headerName="精华";break;case"share":this.headerName="分享";break;case"ask":this.headerName="问答";break;case"job":this.headerName="招聘";break;default:this.headerName="全部"}this.tab=t,this.getMenu(),this.reductionDefault(),n.i(a.a)(0),s.Indicator.open(),this.ajax(d+"topics?page="+this.page+"&mdrender="+this.mdrender+"&tab="+this.tab,function(){s.Indicator.close()})}},loadTop:function(){var t=this;this.reductionDefault(),this.ajax(d+"topics?page="+this.page+"&mdrender="+this.mdrender+"&tab="+this.tab,function(){t.$refs.loadmore.onTopLoaded()})},loadBottom:function(){var t=this;this.page++,this.ajax(d+"topics?page="+this.page+"&mdrender="+this.mdrender+"&tab="+this.tab,function(){t.$refs.loadmore.onBottomLoaded()})},handleTopChange:function(t){"loading"==t?s.Indicator.open():"pull"==t&&s.Indicator.close()},reductionDefault:function(){this.page=1,this.limit=10,this.cnodeList=[]},ajax:function(t,e){var n=this;this.$http.get(t).then(function(t){200===t.status&&(n.isEmpty?(n.cnodeList=t.body.data,n.isEmpty=!1):n.cnodeList=n.cnodeList.concat(t.body.data),e&&e(t))},function(t){console.log(t)})}},components:{mtLoadmore:s.Loadmore,Headers:o.a,vMenu:r.a,Returntop:u.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(102),s=n.n(a);e.default={name:"menu",data:function(){return{menuData:["最新","精华","分享","问答","招聘","消息","关于"]}},methods:{setMenu:function(){this.$emit("transferMenu",!1)},menuHanlder:function(t){t&&(t="object"==("undefined"==typeof t?"undefined":s()(t))?"":t,this.$emit("childMenuClick",t))}},props:["menu"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(42);e.default={name:"return-top",data:function(){return{isTop:!1}},mounted:function(){var t=this;window.addEventListener("scroll",function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>300?t.isTop=!0:t.isTop=!1},!1)},methods:{returnTop:function(){n.i(a.a)(0)}}}},function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(27),s=n.n(a),i=n(51),o=n.n(i),c=n(43),r=n.n(c),l=n(44),u=n.n(l),d=n(46),m=n.n(d),h=n(45),v=n.n(h),f=n(48),p=(n.n(f),n(50)),_=(n.n(p),n(47)),g=(n.n(_),n(49));n.n(g);s.a.use(o.a),s.a.use(r.a);var C=[{path:"/",component:m.a},{path:"/home",name:"home",component:m.a},{path:"/detail/:id",name:"detail",component:v.a}],b=new o.a({mode:"history",routes:C,scrollBehavior:function(t,e,n){return{x:0,y:0}}});s.a.filter("getDateDiff",function(t){if(t){var e="",n=6e4,a=60*n,s=24*a,i=30*s,o=12*i,c=(new Date).getTime(),r=new Date(t).getTime(),l=c-r;if(!(l<0)){var u=l/n,d=l/a,m=l/s,h=l/i,v=l/o;return e=v>=1?Math.round(v)+"年前":h>=1?Math.round(h)+"个月前":m>=1?Math.round(m)+"天前":d>=1?Math.round(d)+"个小时前":u>=1?Math.round(u)+"分钟前":"刚刚"}}}),new s.a({el:"#app",router:b,render:function(t){return t(u.a)}})}]),[111]);
//# sourceMappingURL=app.a9a31f00656944c14d24.js.map