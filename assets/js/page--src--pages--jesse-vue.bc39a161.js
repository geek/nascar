(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3fBX":function(t){t.exports=JSON.parse('[{"track":"Martinsville Speedway","date":"October 30, 2022","picks":[{"cousin":"Sarah","driver":"Hamlin","points":0,"position":1},{"cousin":"Ryan","driver":"Logano","points":0,"position":1},{"cousin":"Nathan","driver":"Harvick","points":0,"position":1},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":3},{"cousin":"Tyler","driver":"Blaney","points":0,"position":1},{"cousin":"Jesse","driver":"Larson","points":0,"position":1},{"cousin":"Jared","driver":"Bowman","points":0,"position":1}]}]')},"4yNf":function(t,e,i){"use strict";var n=i("I+eb"),o=i("4zBA"),r=i("HYAF"),s=i("WSbT"),a=i("V37c"),l=o("".slice),c=Math.max,d=Math.min;n({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var i,n,o=a(r(this)),p=o.length,u=s(t);return u===1/0&&(u=0),u<0&&(u=c(p+u,0)),(i=void 0===e?p:s(e))<=0||i===1/0||u>=(n=d(u+i,p))?"":l(o,u,n)}})},"8LYh":function(t,e,i){"use strict";i.r(e);var n=i("Td0b").a,o=(i("HgUM"),i("KHd+")),r=i("ZUTo"),s=i.n(r),a=i("dJbz"),l=i("QNyc"),c=i("W8H5"),d=i("zCDB"),p=i("Yq0q"),u=i("pSOK"),f=i("j+oE"),v=i("Ey0z"),g=i("iGBT"),h=i("2hOt"),y=i("XSMC"),m=i("NMP6"),b=i("9sRW"),w=i("93RO"),S=i("D9m0"),x=i("Kn9U"),C=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(e){return i("v-list-item",{key:e.name,attrs:{href:e.link,link:""}},[i("v-list-item-icon",[i("v-icon",[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),i("v-toolbar-title",[t._v(t._s(t.cousin)+" -- Stats ")])],1),i("v-main",[i("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[i("ClientOnly",[i("v-row",{staticClass:"hidden-sm-and-down"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1),i("v-col",[i("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),i("v-row",{staticClass:"hidden-sm-and-down"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1),i("v-col")],1),i("v-row",{staticClass:"hidden-md-and-up"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1)],1),i("v-row",{staticClass:"hidden-md-and-up"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),i("v-row",{staticClass:"hidden-md-and-up"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1)],1)],1),i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.points",fn:function(e){var n=e.item;return[i("v-chip",{attrs:{color:t.getColor(n.points),dark:""}},[t._v("\n                "+t._s(n.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=C.exports;s()(C,{VApp:a.a,VAppBar:l.a,VAppBarNavIcon:c.a,VChip:d.a,VCol:p.a,VContainer:u.a,VDataTable:f.a,VIcon:v.a,VList:g.a,VListItem:h.a,VListItemContent:y.a,VListItemIcon:m.a,VListItemTitle:y.b,VMain:b.a,VNavigationDrawer:w.a,VRow:S.a,VToolbarTitle:x.a})},D9m0:function(t,e,i){"use strict";i("S4Vr");var n=i("Kw5r"),o=i("2fdy"),r=i("gNKD");const s=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return s.reduce((i,n)=>(i[t+Object(r.E)(n)]=e(),i),{})}const c=t=>[...a,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),p=t=>[...a,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:p})),f=t=>[...a,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:f})),g={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(v)},h={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let n=h[t];if(null!=i){if(e){n+="-"+e.replace(t,"")}return n+="-"+i,n.toLowerCase()}}const m=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:p},...u,alignContent:{type:String,default:null,validator:f},...v},render(t,{props:e,data:i,children:n}){let r="";for(const t in e)r+=String(e[t]);let s=m.get(r);if(!s){let t;for(t in s=[],g)g[t].forEach(i=>{const n=e[i],o=y(t,i,n);o&&s.push(o)});s.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),m.set(r,s)}return t(e.tag,Object(o.a)(i,{staticClass:"row",class:s}),n)}})},HgUM:function(t,e,i){"use strict";i("iQyG")},IPaF:function(t,e,i){},Junv:function(t,e,i){"use strict";var n=i("I+eb"),o=i("4zBA"),r=i("6LWA"),s=o([].reverse),a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return r(this)&&(this.length=this.length),s(this)}})},S4Vr:function(t,e,i){},Td0b:function(t,e,i){"use strict";(function(t){i("4yNf"),i("2B1R"),i("fbCW"),i("07d7"),i("Junv"),i("tkto"),i("QWBl"),i("FZtP"),i("ma9I");var n=i("3fBX");e.a={metaInfo:{title:"Stats"},data:function(){var e="jesse",i=e[0].toUpperCase()+e.substr(1),o=n[0],r={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},s={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",toolbar:{show:!1},foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a={options:{title:{text:"Finish Position"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"position",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},l=o.picks.map((function(e){var i=e.cousin;return{name:i,icon:"mdi-link",link:t.env.GRIDSOME_BASE_URL+"/"+i.toLowerCase()}})),c={},d=[],p=n.map((function(t){var i=t.picks.find((function(t){return t.cousin.toLowerCase()===e}))||{};return c[i.driver]=c[i.driver]+1||1,d.push({x:t.date,y:i.points}),a.series.push({x:t.date,y:i.position}),{track:t.track,driver:i.driver,points:i.points||0,position:i.position,date:t.date}}));r.series=d.reverse(),a.series=a.series.reverse();var u=[];return Object.keys(c).forEach((function(t){"undefined"!==t&&u.push({x:t,y:c[t]})})),s.series=[{data:u}],r.series=[{data:r.series}],a.series=[{data:a.series}],{cousin:i,cousins:l=[{name:"Home",link:t.env.GRIDSOME_BASE_URL,icon:"mdi-home"}].concat(l),points:r,position:a,driverFrequency:c,df:s,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:p,drawer:null}},methods:{getColor:function(t){return t>60?"red":t>50?"orange":t>30?"green":t>20?"purple":"brown"}}}}).call(this,i("8oxB"))},Yq0q:function(t,e,i){"use strict";i("S4Vr");var n=i("Kw5r"),o=i("2fdy"),r=i("gNKD");const s=["sm","md","lg","xl"],a=s.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),l=s.reduce((t,e)=>(t["offset"+Object(r.E)(e)]={type:[String,Number],default:null},t),{}),c=s.reduce((t,e)=>(t["order"+Object(r.E)(e)]={type:[String,Number],default:null},t),{}),d={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function p(t,e,i){let n=t;if(null!=i&&!1!==i){if(e){n+="-"+e.replace(t,"")}return"col"!==t||""!==i&&!0!==i?(n+="-"+i,n.toLowerCase()):n.toLowerCase()}}const u=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n,parent:r}){let s="";for(const t in e)s+=String(e[t]);let a=u.get(s);if(!a){let t;for(t in a=[],d)d[t].forEach(i=>{const n=e[i],o=p(t,i,n);o&&a.push(o)});const i=a.some(t=>t.startsWith("col-"));a.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(s,a)}return t(e.tag,Object(o.a)(i,{class:a}),n)}})},fbCW:function(t,e,i){"use strict";var n=i("I+eb"),o=i("tycR").find,r=i("RNIs"),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},iQyG:function(t,e,i){},pSOK:function(t,e,i){"use strict";i("IPaF"),i("S4Vr");var n=i("Kw5r");var o,r=i("2fdy");e.a=(o="container",n.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n}){i.staticClass=`${o} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,i,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:n}){let o;const{attrs:s}=i;return s&&(i.attrs={},o=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"==typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(r.a)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),n)}})}}]);