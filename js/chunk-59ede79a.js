(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59ede79a"],{1276:function(t,i,e){"use strict";var n=e("2ba4"),r=e("c65b"),s=e("e330"),o=e("d784"),a=e("44e7"),l=e("825a"),c=e("1d80"),u=e("4840"),h=e("8aa5"),d=e("50c4"),p=e("577e"),f=e("dc4a"),g=e("4dae"),v=e("14c3"),m=e("9263"),x=e("9f7f"),w=e("d039"),b=x.UNSUPPORTED_Y,_=4294967295,S=Math.min,$=[].push,y=s(/./.exec),k=s($),R=s("".slice),C=!w((function(){var t=/(?:)/,i=t.exec;t.exec=function(){return i.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));o("split",(function(t,i,e){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var s=p(c(this)),o=void 0===e?_:e>>>0;if(0===o)return[];if(void 0===t)return[s];if(!a(t))return r(i,s,t,o);var l,u,h,d=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,x=new RegExp(t.source,f+"g");while(l=r(m,x,s)){if(u=x.lastIndex,u>v&&(k(d,R(s,v,l.index)),l.length>1&&l.index<s.length&&n($,d,g(l,1)),h=l[0].length,v=u,d.length>=o))break;x.lastIndex===l.index&&x.lastIndex++}return v===s.length?!h&&y(x,"")||k(d,""):k(d,R(s,v)),d.length>o?g(d,0,o):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:r(i,this,t,e)}:i,[function(i,e){var n=c(this),o=void 0==i?void 0:f(i,t);return o?r(o,i,n,e):r(s,p(n),i,e)},function(t,n){var r=l(this),o=p(t),a=e(s,r,o,n,s!==i);if(a.done)return a.value;var c=u(r,RegExp),f=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(b?"g":"y"),m=new c(b?"^(?:"+r.source+")":r,g),x=void 0===n?_:n>>>0;if(0===x)return[];if(0===o.length)return null===v(m,o)?[o]:[];var w=0,$=0,y=[];while($<o.length){m.lastIndex=b?0:$;var C,A=v(m,b?R(o,$):o);if(null===A||(C=S(d(m.lastIndex+(b?$:0)),o.length))===w)$=h(o,$,f);else{if(k(y,R(o,w,$)),y.length===x)return y;for(var E=1;E<=A.length-1;E++)if(k(y,A[E]),y.length===x)return y;$=w=C}}return k(y,R(o,w)),y}]}),!C,b)},"25f0":function(t,i,e){"use strict";var n=e("e330"),r=e("5e77").PROPER,s=e("6eeb"),o=e("825a"),a=e("3a9b"),l=e("577e"),c=e("d039"),u=e("ad6d"),h="toString",d=RegExp.prototype,p=d[h],f=n(u),g=c((function(){return"/a/b"!=p.call({source:"a",flags:"b"})})),v=r&&p.name!=h;(g||v)&&s(RegExp.prototype,h,(function(){var t=o(this),i=l(t.source),e=t.flags,n=l(void 0===e&&a(d,t)&&!("flags"in d)?f(t):e);return"/"+i+"/"+n}),{unsafe:!0})},"2b67":function(t,i,e){"use strict";e("4ce2")},"44e7":function(t,i,e){var n=e("861d"),r=e("c6b6"),s=e("b622"),o=s("match");t.exports=function(t){var i;return n(t)&&(void 0!==(i=t[o])?!!i:"RegExp"==r(t))}},"4ce2":function(t,i,e){},"4dae":function(t,i,e){var n=e("da84"),r=e("23cb"),s=e("07fa"),o=e("8418"),a=n.Array,l=Math.max;t.exports=function(t,i,e){for(var n=s(t),c=r(i,n),u=r(void 0===e?n:e,n),h=a(l(u-c,0)),d=0;c<u;c++,d++)o(h,d,t[c]);return h.length=d,h}},f820:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"about"},[n("img",{staticClass:"hero-cover",attrs:{src:"https://game.gtimg.cn/images/lol/act/img/guidetop/guide"+t.$route.params.id+"000.jpg"}}),t.ischa?n("div",{staticClass:"card",staticStyle:{position:"fixed","z-index":"9",left:"8px",top:"218px",margin:"0",height:"340px",width:"272px"}},[n("div",{staticClass:"photo"},[n("img",{staticStyle:{"object-fit":"cover","object-position":"center top"},attrs:{src:"https://game.gtimg.cn/images/lol/act/img/skinloading/"+t.$route.params.id+"000.jpg"}})]),n("h2",[t._v("英雄详细")]),n("p",[t._v(" 胜率: "+t._s(t.winrate(t.champion.list[this.$route.params.id][this.$route.params.lane].lanewinrate))+" ")]),n("p",{staticStyle:{color:"#f44336","font-size":"16px"}},[t._v(" Ban率: "+t._s(t.winrate(t.champion.list[this.$route.params.id].banrate))+" ")]),n("p",[t._v(" 登场率: "+t._s(t.winrate(t.champion.list[this.$route.params.id][this.$route.params.lane].lanshowrate))+" ")]),n("a",{staticStyle:{top:"300px",position:"absolute"},attrs:{href:"#"}},[t._v(t._s(t.heroName(t.$route.params.id)))])]):t._e(),n("div",{attrs:{id:"lis"}},[n("div",{attrs:{id:"fenlei"}},[n("div",{on:{click:function(i){return t.pushshow("Home")}}},[n("img",{attrs:{src:e("6879")}}),n("td",[n("svg",{staticStyle:{width:"20px","vertical-align":"middle",fill:"currentColor",overflow:"hidden","margin-top":"-3px"},attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2352"}},[n("path",{attrs:{d:"M854 724.7c-4 84-73.5 151.2-158.3 151.2H321.4c-84.8 0-154.3-67.1-158.3-151.2h-0.1V301.3h0.2c4-84.1 73.5-151.3 158.3-151.3h388.8l-53.6 57.7H321.5c-55.6 0-100.9 45.4-100.9 101.1V717c0 55.7 45.3 101.1 100.9 101.1h374.2c55.6 0 145.1-45.4 145.1-101.1v-20.9l-29.5-0.6 29.5-101-29.5-118.8 42.9-56.8v305.8h-0.2z m7-498.6M328.2 150.1H702.5c84.8 0 154.3 67.1 158.3 151.2h0.2v423.3h-0.2c-4 84.1-73.5 151.2-158.3 151.2H313.7l53.6-57.7h335.3c55.6 0 100.8-45.4 100.8-101.1V309c0-55.8-45.3-101.1-100.8-101.1H328.2M163 800M469.1 590.8L298.8 419.3l170.3-172.8V335c35.5 0 256.1 1.8 256.1 217.9 0 116.3-82.9 211.5-190 226.7 66.7-14.3 116.9-76 116.9-150.1 0-141.4-131.4-142.6-182.9-142.6v103.9h-0.1z","p-id":"2353"}})]),t._v(" 返回 ")])]),n("div",{on:{click:function(i){t.pushshow("Equipment",{id:t.$route.params.id,lane:t.$route.params.lane}),t.flid(1)}}},[n("img",{attrs:{src:e("6879")}}),n("td",{style:"Equipment"==t.$route.name?"color: #FFC107;":""},[t._v(" 装备/技能 ")])]),n("div",{on:{click:function(i){t.pushshow("Rune",{id:t.$route.params.id,lane:t.$route.params.lane,type:0}),t.flid(2)}}},[n("img",{attrs:{src:e("6879")}}),n("td",{style:"Rune"==t.$route.name?"color: #FFC107;":""},[t._v(" 天赋符文 ")])]),n("div",{on:{click:function(i){t.pushshow("Skin",{id:t.$route.params.id,lane:t.$route.params.lane}),t.flid(3)}}},[n("img",{attrs:{src:e("6879")}}),n("td",{style:"Skin"==t.$route.name?"color: #FFC107;":""},[t._v(" 英雄皮肤 ")])])]),t.isfenlei?n("div",{staticStyle:{position:"relative",top:"32px"},attrs:{id:"fenlei"}},t._l(t.flei,(function(i,r){return n("div",{key:r,on:{click:function(e){return t.flid2(r,i)}}},[n("img",{attrs:{src:e("6879")}}),n("td",{style:t.thisflid2==r?"color: #FFC107;":""},["mid"==i?[t._v(" 中单 ")]:"bottom"==i?[t._v(" ADC ")]:"support"==i?[t._v(" 辅助 ")]:"jungle"==i?[t._v(" 打野 ")]:"top"==i?[t._v(" 上单 ")]:t._e()],2)])})),0):t._e(),n("ul",{staticClass:"ullis",style:t.isfenlei?"":"margin-top: 62px;"},[t.isRouterAlive?n("router-view"):t._e()],1)])])},r=[],s=(e("b0c0"),e("d3b7"),e("25f0"),e("99af"),e("ac1f"),e("1276"),{data:function(){return{thisflid:1,champion:[],ischa:!1,isfenlei:!0,hero:[],flei:[],thisflid2:0,isRouterAlive:!0}},watch:{$route:{handler:function(){var t=this;"Skin"==this.$route.name?this.isfenlei=!1:this.isfenlei=!0,this.getHeroListPosition(this.$route.params.id,(function(i){var e=[];for(var n in i)e.push(n);t.flei=e}))},deep:!0}},methods:{flid:function(t){this.thisflid=t},flid2:function(t,i){this.thisflid2=t,this.pushshow(this.$route.name,{id:this.$route.params.id,lane:i}),this.reloadAll()},heroName:function(t){for(var i=0;i<this.hero.length;i++)if(t==this.hero[i].heroId)return this.hero[i].name},reloadAll:function(){var t=this;this.isRouterAlive=!1,this.$nextTick((function(){t.isRouterAlive=!0}))},winrate:function(t){return 1==t.toString().length?"0.0".concat(t.toString(),"%"):2==t.toString().length?"0.".concat(t.toString().split("")[0]).concat(t.toString().split("")[1],"%"):3==t.toString().length?"".concat(t.toString().split("")[0],".").concat(t.toString().split("")[1]).concat(t.toString().split("")[2],"%"):4==t.toString().length?"".concat(t.toString().split("")[0]).concat(t.toString().split("")[1],".").concat(t.toString().split("")[2]).concat(t.toString().split("")[3],"%"):void 0}},mounted:function(){var t=this;"Skin"==this.$route.name?this.isfenlei=!1:this.isfenlei=!0,this.getHeroListPosition(this.$route.params.id,(function(i){var e=[];for(var n in i)e.push(n);t.flei=e})),this.axios.get("https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js").then((function(i){t.hero=i.data.hero})),this.loadJS("https://lol.qq.com/act/lbp/common/guides/guideschampion_rank.js?ts=".concat(Date.now()/6e5>>0),(function(){t.champion=window["CHAMPION_RANK"],t.ischa=!0}))}}),o=s,a=(e("2b67"),e("2877")),l=Object(a["a"])(o,n,r,!1,null,"193e8da0",null);i["default"]=l.exports}}]);