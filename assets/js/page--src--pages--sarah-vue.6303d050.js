(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3fBX":function(t){t.exports=JSON.parse('[{"track":"Las Vegas Motor Speedway","date":"March 5, 2023","picks":[{"cousin":"Sarah","driver":"Kyle Busch","points":0,"position":14},{"cousin":"Ryan","driver":"Byron","points":75,"position":1},{"cousin":"Nathan","driver":"Harvick","points":25,"position":9},{"cousin":"Wyatt","driver":"Larson","points":40,"position":2},{"cousin":"Tyler","driver":"Hamlin","points":0,"position":11},{"cousin":"Jesse","driver":"Blaney","points":0,"position":13},{"cousin":"Jared","driver":"Logano","points":10,"position":36}]},{"track":"Auto Club Speedway","date":"February 26, 2023","picks":[{"cousin":"Sarah","driver":"Larson","points":0,"position":29},{"cousin":"Ryan","driver":"Truex","points":0,"position":11},{"cousin":"Nathan","driver":"Logano","points":0,"position":10},{"cousin":"Wyatt","driver":"Suárez","points":40,"position":4},{"cousin":"Tyler","driver":"Hamlin","points":25,"position":6},{"cousin":"Jesse","driver":"Kyle Busch","points":75,"position":1},{"cousin":"Jared","driver":"Bell","points":0,"position":32}]},{"track":"Daytona International Speedway","date":"February 19, 2023","picks":[{"cousin":"Sarah","driver":"Hamlin","points":0,"position":17},{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":38},{"cousin":"Tyler","driver":"Blaney","points":25,"position":8},{"cousin":"Jesse","driver":"Larson","points":0,"position":18},{"cousin":"Jared","driver":"Bowman","points":40,"position":5}]}]')},"4yNf":function(t,e,i){"use strict";var n=i("I+eb"),o=i("4zBA"),s=i("HYAF"),r=i("WSbT"),a=i("V37c"),l=o("".slice),c=Math.max,p=Math.min;n({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var i,n,o=a(s(this)),d=o.length,u=r(t);return u===1/0&&(u=0),u<0&&(u=c(d+u,0)),(i=void 0===e?d:r(e))<=0||i===1/0||u>=(n=p(u+i,d))?"":l(o,u,n)}})},D9m0:function(t,e,i){"use strict";i("S4Vr");var n=i("Kw5r"),o=i("2fdy"),s=i("gNKD");const r=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return r.reduce((i,n)=>(i[t+Object(s.E)(n)]=e(),i),{})}const c=t=>[...a,"baseline","stretch"].includes(t),p=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...a,"space-between","space-around"].includes(t),u=l("justify",()=>({type:String,default:null,validator:d})),f=t=>[...a,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:f})),h={align:Object.keys(p),justify:Object.keys(u),alignContent:Object.keys(v)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){let n=g[t];if(null!=i){if(e){n+="-"+e.replace(t,"")}return n+="-"+i,n.toLowerCase()}}const m=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...p,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:f},...v},render(t,{props:e,data:i,children:n}){let s="";for(const t in e)s+=String(e[t]);let r=m.get(s);if(!r){let t;for(t in r=[],h)h[t].forEach(i=>{const n=e[i],o=y(t,i,n);o&&r.push(o)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),m.set(s,r)}return t(e.tag,Object(o.a)(i,{staticClass:"row",class:r}),n)}})},IPaF:function(t,e,i){},Junv:function(t,e,i){"use strict";var n=i("I+eb"),o=i("4zBA"),s=i("6LWA"),r=o([].reverse),a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r(this)}})},MAup:function(t,e,i){"use strict";i.r(e);i("4yNf"),i("2B1R"),i("fbCW"),i("07d7"),i("Junv"),i("tkto"),i("QWBl"),i("FZtP"),i("ma9I");var n=i("3fBX"),o={metaInfo:{title:"Stats"},data:function(){var t="sarah",e=t[0].toUpperCase()+t.substr(1),i=n[0],o={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},s={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",toolbar:{show:!1},foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},r={options:{title:{text:"Finish Position"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"position",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a=i.picks.map((function(t){var e=t.cousin;return{name:e,icon:"mdi-link",link:"https://geek.github.io/nascar/"+e.toLowerCase()}})),l={},c=[],p=n.map((function(e){var i=e.picks.find((function(e){return e.cousin.toLowerCase()===t}))||{};return l[i.driver]=l[i.driver]+1||1,c.push({x:e.date,y:i.points}),r.series.push({x:e.date,y:i.position}),{track:e.track,driver:i.driver,points:i.points||0,position:i.position,date:e.date}}));o.series=c.reverse(),r.series=r.series.reverse();var d=[];Object.keys(l).forEach((function(t){"undefined"!==t&&d.push({x:t,y:l[t]})})),s.series=[{data:d}],o.series=[{data:o.series}],r.series=[{data:r.series}];return{cousin:e,cousins:a=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-home"}].concat(a),points:o,position:r,driverFrequency:l,df:s,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:p,drawer:null}},methods:{getColor:function(t){return t>60?"red":t>50?"orange":t>30?"green":t>20?"purple":"brown"}}},s=(i("TeJD"),i("KHd+")),r=i("ZUTo"),a=i.n(r),l=i("dJbz"),c=i("QNyc"),p=i("W8H5"),d=i("zCDB"),u=i("Yq0q"),f=i("pSOK"),v=i("j+oE"),h=i("Ey0z"),g=i("iGBT"),y=i("2hOt"),m=i("XSMC"),b=i("NMP6"),w=i("9sRW"),S=i("93RO"),k=i("D9m0"),x=i("Kn9U"),C=Object(s.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(e){return i("v-list-item",{key:e.name,attrs:{href:e.link,link:""}},[i("v-list-item-icon",[i("v-icon",[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),i("v-toolbar-title",[t._v(t._s(t.cousin)+" -- Stats ")])],1),i("v-main",[i("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[i("ClientOnly",[i("v-row",{staticClass:"hidden-sm-and-down"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1),i("v-col",[i("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),i("v-row",{staticClass:"hidden-sm-and-down"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1),i("v-col")],1),i("v-row",{staticClass:"hidden-md-and-up"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1)],1),i("v-row",{staticClass:"hidden-md-and-up"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),i("v-row",{staticClass:"hidden-md-and-up"},[i("v-col",[i("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1)],1)],1),i("v-row",[i("v-col",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.points",fn:function(e){var n=e.item;return[i("v-chip",{attrs:{color:t.getColor(n.points),dark:""}},[t._v("\n                "+t._s(n.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=C.exports;a()(C,{VApp:l.a,VAppBar:c.a,VAppBarNavIcon:p.a,VChip:d.a,VCol:u.a,VContainer:f.a,VDataTable:v.a,VIcon:h.a,VList:g.a,VListItem:y.a,VListItemContent:m.a,VListItemIcon:b.a,VListItemTitle:m.b,VMain:w.a,VNavigationDrawer:S.a,VRow:k.a,VToolbarTitle:x.a})},S4Vr:function(t,e,i){},THrm:function(t,e,i){},TeJD:function(t,e,i){"use strict";i("THrm")},Yq0q:function(t,e,i){"use strict";i("S4Vr");var n=i("Kw5r"),o=i("2fdy"),s=i("gNKD");const r=["sm","md","lg","xl"],a=r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),l=r.reduce((t,e)=>(t["offset"+Object(s.E)(e)]={type:[String,Number],default:null},t),{}),c=r.reduce((t,e)=>(t["order"+Object(s.E)(e)]={type:[String,Number],default:null},t),{}),p={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,i){let n=t;if(null!=i&&!1!==i){if(e){n+="-"+e.replace(t,"")}return"col"!==t||""!==i&&!0!==i?(n+="-"+i,n.toLowerCase()):n.toLowerCase()}}const u=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n,parent:s}){let r="";for(const t in e)r+=String(e[t]);let a=u.get(r);if(!a){let t;for(t in a=[],p)p[t].forEach(i=>{const n=e[i],o=d(t,i,n);o&&a.push(o)});const i=a.some(t=>t.startsWith("col-"));a.push({col:!i||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),u.set(r,a)}return t(e.tag,Object(o.a)(i,{class:a}),n)}})},fbCW:function(t,e,i){"use strict";var n=i("I+eb"),o=i("tycR").find,s=i("RNIs"),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},pSOK:function(t,e,i){"use strict";i("IPaF"),i("S4Vr");var n=i("Kw5r");var o,s=i("2fdy");e.a=(o="container",n.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n}){i.staticClass=`${o} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,i,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:n}){let o;const{attrs:r}=i;return r&&(i.attrs={},o=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"==typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s.a)(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),n)}})}}]);