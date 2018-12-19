(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,a){"use strict";var i=a(3);a.n(i).a},3:function(t,e,a){},37:function(t,e,a){"use strict";var i=a(4);a.n(i).a},38:function(t,e,a){"use strict";var i=a(5);a.n(i).a},39:function(t,e,a){"use strict";var i=a(6);a.n(i).a},4:function(t,e,a){},40:function(t,e,a){"use strict";var i=a(7);a.n(i).a},42:function(t,e,a){"use strict";a.r(e);var i=a(2);var n=function(t,e,a){var i,n,o,s,l,r={top:0,right:0,bottom:0,left:0};return n=e,"[object Object]"===Object.prototype.toString.call(n)?(a=e,e=null):a||(a={}),Object.assign(r,a),(i=e?e.getBoundingClientRect():{top:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight,left:0}).top-=r.top,i.right+=r.right,i.bottom+=r.bottom,i.left-=r.left,o=t.getBoundingClientRect(),s=i,(l={}).top=Math.max(o.top,s.top),l.bottom=Math.min(o.bottom,s.bottom),l.left=Math.max(o.left,s.left),l.right=Math.min(o.right,s.right),l.bottom>=l.top&&l.right>=l.left};var o={name:"vue-lazy-waterfall",data:function(){return{maxHeight:0,isFinished:!1,beginIndex:0,showItems:[],loadings:0,isEnd:!1}},props:{items:{type:Array,required:!0},colNum:{type:Number,default:5},width:{type:Number,default:function(){return window.innerWidth}},itemWidth:{type:Number,default:function(){return parseInt(this.width/this.colNum)}},load:Function,createLazyLoader:Function,diff:{type:Object,default:function(){return{bottom:window.innerHeight||document.documentElement.clientHeight}}}},watch:{items:function(){this.renderView()}},mounted:function(){this.renderView(),this.$on("preloaded",this.preloadedHandler),this.createLazyloadCallback()},beforeDestroy:function(){this.unbindEvents()},methods:{renderView:function(){this.isEnd||this.calcItemsStyle()},scrollHandler:function(){!this.isEnd&&n(this.$refs.loadRef,this.diff)&&this.$emit("load")},createLazyloadCallback:function(){var t,e,a;this.createLazyLoader?this.createLazyLoader(this.$refs.loadRef):(this.lazyScrollHandler=(t=this.scrollHandler,e=(e=50)||50,function(){var i=+new Date;(!a||i-a>=e)&&(a=i,t())}),window.addEventListener("scroll",this.lazyScrollHandler.bind(this)))},preloadedHandler:function(t){for(var e=this.colNum,a=0;a<t.length;++a){var i=t[a];i._index>=e&&this.updateItemStyle(i)}!this.isEnd&&this.lazyScrollHandler&&this.lazyScrollHandler()},unbindEvents:function(){this.lazyScrollHandler&&window.removeEventListener("scroll",this.lazyScrollHandler)},end:function(){var t=this;this.loadings?this.$once("finished",function(){t.isFinished=!0}):this.isFinished=!0,this.isEnd=!0,this.unbindEvents()},calcItemsStyle:function(){var t=this,e=t.beginIndex,a=t.items,i=a.length-e,n=[];if(a.length){this.loadings++;for(var o=function(e){return function(a){a&&(e.$event=a,t.$emit("image-".concat(a.type),e)),0===(i-=1)&&(t.showItems=t.showItems.concat(n),t.loadings--,t.$nextTick(function(){t.$emit("preloaded",n)}),0===t.loadings&&t.$emit("finished"),t.$emit("done",n))}},s=e;s<a.length;s++){var l=a[s],r=new Image;l._index=s,l.src?(r.onload=o(l),r.onerror=o(l),r.src=l.src):o(l),t.calcItemStyle(l,s),n.push(l)}t.beginIndex=t.items.length}},updateItemStyle:function(t,e){var a=(e=void 0===e?t._index:e)-this.colNum;if(a>=0){var i=this.$refs["$el_".concat(a)][0],n=this.$refs["$el_".concat(e)][0],o=parseInt(i.style.top)+i.offsetHeight;t._style.top="".concat(o,"px"),n.style.top="".concat(o,"px"),this.maxHeight=Math.max(this.maxHeight,o+n.offsetHeight)}},calcItemStyle:function(t,e){var a=e%this.colNum*this.itemWidth;t._style={width:this.itemWidth+"px",left:"".concat(a,"px"),top:"".concat(0,"px")}},clickItemHandler:function(t,e,a){this.$emit("click",{value:t,index:e,$event:a})}}},s=(a(17),a(1)),l=Object(s.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-lazy-waterfall-wrap",style:{width:t.width+"px"}},[a("ul",{ref:"listRef",staticClass:"vue-lazy-waterfall-list",style:{"padding-top":t.maxHeight+"px"}},[t._l(t.showItems,function(e,i){return a("li",{key:i,ref:"$el_"+i,refInFor:!0,staticClass:"vue-lazy-waterfall-item",style:e._style,on:{click:function(a){t.clickItemHandler(e,i,a)}}},[t._t("default",null,{item:e})],2)}),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:!1===t.isFinished,expression:"isFinished===false"}],ref:"loadRef",staticClass:"loading-placeholder"},[t._t("loading")],2)],2),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFinished,expression:"isFinished"}],staticClass:"vue-lazy-waterfall-end"},[t._t("endToBottom")],2)])},[],!1,null,"6aa57495",null);l.options.__file="index.vue";var r=l.exports,c=a(9),d=a.n(c),h={name:"app",data:()=>({}),components:{vueLazyWaterfall:r},methods:{backToTopHandler(){window.scrollTo(0,0)}}},u=(a(37),Object(s.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view"),this._v(" "),e("div",{staticClass:"back-top",on:{click:this.backToTopHandler}},[this._v("back to top")]),this._v(" "),e("div",{staticStyle:{height:"3000px","background-color":"#00C075"}})],1)},[],!1,null,null,null));u.options.__file="App.vue";var m=u.exports,f=a(10),p={name:"app",data:()=>({items:[],group:0,width:990}),components:{vueLazyWaterfall:r},methods:{loadData(){d.a.get("./static/mock/data.json?group="+this.group).then(t=>{this.group++,this.group>20?this.$refs.waterfall.end():(t.data.sort(()=>Math.random()-.5),this.items=this.items.concat(t.data))})},clickFn({value:t,index:e,$event:a}){},imageLoad({$event:t}){}},created(){this.loadData()}},v=(a(38),Object(s.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vueLazyWaterfall",{ref:"waterfall",staticClass:"waterfall-wrap",attrs:{items:t.items,width:t.width,diff:{bottom:2e3}},on:{load:t.loadData,"image-load":t.imageLoad,"image-error":t.imageLoad,click:t.clickFn},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return a("div",{staticClass:"pin-item"},[a("img",{attrs:{src:i.src,alt:""}}),t._v("\n      "+t._s(i.textContent)+"\n    ")])}}])},[a("div",{staticClass:"loading-spinner",attrs:{slot:"loading"},slot:"loading"}),t._v(" "),a("div",{staticClass:"end-tip",attrs:{slot:"endToBottom"},slot:"endToBottom"},[t._v("end...")])])],1)},[],!1,null,null,null));v.options.__file="basic-app.vue";var g=v.exports,w=a(16),y=a.n(w),_={name:"waterfall-lazy-app",data:()=>({items:[],page:0}),components:{vueLazyWaterfall:r},methods:{loadData(){return this.mockPageData().then(t=>{this.items=this.items.concat(t),this.page++,20===this.page&&this.$refs.waterfall.end()})},mockPageData(){for(var t=[],e=0;e<20;e++){let e=parseInt(100*Math.random())+300,a=parseInt(100*Math.random())+300;t.push({src:`https://picsum.photos/${e}/${a}/?random`,info:+new Date})}return Promise.resolve(t)},createLazyLoader(t){const e=this,a=y()(t,{load:function(){e.loadData()},loaded(){e.$refs.waterfall.$on("preloaded",()=>{console.log("load next"),t.dataset.loaded=!1,a.observe(t)})},rootMargin:"500px",threshold:1});a.observe()}}},b=(a(39),Object(s.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("vueLazyWaterfall",{ref:"waterfall",attrs:{items:t.items,width:1190,createLazyLoader:t.createLazyLoader},on:{load:t.loadData},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[a("div",{staticClass:"pin-item"},[a("img",{attrs:{src:i.src,alt:""}}),t._v(" "),a("p",[t._v(t._s(i.info))])])]}}])},[a("div",{staticClass:"loading-spinner",attrs:{slot:"loading"},slot:"loading"}),t._v(" "),a("template",{slot:"endToBottom"},[a("div",{staticClass:"end-tip"},[t._v("it is end...")])])],2)],1)},[],!1,null,null,null));b.options.__file="lazy-app.vue";var x=b.exports,$={name:"image-list-page",data:()=>({imgsArr:[],group:0}),components:{VueLazyWaterfall:r},mounted(){},methods:{getData(){this.mockPageData().then(t=>{this.imgsArr=this.imgsArr.concat(t),this.group++,5===this.group&&this.$refs.waterfall.end()})},mockPageData(){for(var t=[],e=0;e<20;e++){let e=parseInt(100*Math.random())+300,a=parseInt(100*Math.random())+300;t.push({src:`https://picsum.photos/${e}/${a}/?random`,info:+new Date})}return Promise.resolve(t)},clickImgHandler(){console.log(arguments)}},created(){this.getData()}},z=(a(40),Object(s.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"freelog-alpha-images-list"},[e("VueLazyWaterfall",{ref:"waterfall",attrs:{items:this.imgsArr,width:1190},on:{load:this.getData},scopedSlots:this._u([{key:"default",fn:function(t){var a=t.item;return e("div",{staticClass:"pin-image-item"},[e("img",{attrs:{src:a.src,alt:""}})])}}])},[e("div",{staticClass:"loading-spinner",attrs:{slot:"loading"},slot:"loading"}),this._v(" "),e("div",{staticClass:"end-tip",attrs:{slot:"endToBottom"},slot:"endToBottom"},[this._v("END")])])],1)},[],!1,null,null,null));z.options.__file="demo-1.vue";var k=z.exports;i.a.use(f.a);var L=new f.a({routes:[{path:"/",component:g},{path:"/lazy",component:x},{path:"/demo",component:k}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:L,template:"<App/>",components:{App:m}})},5:function(t,e,a){},6:function(t,e,a){},7:function(t,e,a){}},[[42,1,2]]]);