(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3fBX":function(t){t.exports=JSON.parse('[{"track":"Circuit of the Americas","date":"March 26, 2023","picks":[{"cousin":"Sarah","driver":"Harvick","points":0,"position":13},{"cousin":"Ryan","driver":"Cindric","points":0,"position":6},{"cousin":"Nathan","driver":"Bell","points":0,"position":31},{"cousin":"Wyatt","driver":"Reddick","points":75,"position":1},{"cousin":"Tyler","driver":"Larson","points":0,"position":14},{"cousin":"Jesse","driver":"Byron","points":25,"position":5},{"cousin":"Jared","driver":"Kyle Busch","points":40,"position":2}]},{"track":"Atlanta Motor Speedway","date":"March 19, 2023","picks":[{"cousin":"Sarah","driver":"Logano","points":75,"position":1},{"cousin":"Ryan","driver":"Chastain","points":0,"position":13},{"cousin":"Nathan","driver":"Byron","points":0,"position":32},{"cousin":"Wyatt","driver":"Blaney","points":25,"position":7},{"cousin":"Tyler","driver":"Larson","points":0,"position":31},{"cousin":"Jesse","driver":"Hamlin","points":40,"position":6},{"cousin":"Jared","driver":"Harvick","points":0,"position":33}]},{"track":"Phoenix Raceway","date":"March 12, 2023","picks":[{"cousin":"Sarah","driver":"Kyle Busch","points":0,"position":8},{"cousin":"Ryan","driver":"Byron","points":75,"position":1},{"cousin":"Nathan","driver":"Bell","points":25,"position":6},{"cousin":"Wyatt","driver":"Larson","points":40,"position":4},{"cousin":"Tyler","driver":"Logano","points":0,"position":11},{"cousin":"Jesse","driver":"Chastain","points":0,"position":24},{"cousin":"Jared","driver":"Hamlin","points":0,"position":23}]},{"track":"Las Vegas Motor Speedway","date":"March 5, 2023","picks":[{"cousin":"Sarah","driver":"Kyle Busch","points":0,"position":14},{"cousin":"Ryan","driver":"Byron","points":75,"position":1},{"cousin":"Nathan","driver":"Harvick","points":25,"position":9},{"cousin":"Wyatt","driver":"Larson","points":40,"position":2},{"cousin":"Tyler","driver":"Hamlin","points":0,"position":11},{"cousin":"Jesse","driver":"Blaney","points":0,"position":13},{"cousin":"Jared","driver":"Logano","points":10,"position":36}]},{"track":"Auto Club Speedway","date":"February 26, 2023","picks":[{"cousin":"Sarah","driver":"Larson","points":0,"position":29},{"cousin":"Ryan","driver":"Truex","points":0,"position":11},{"cousin":"Nathan","driver":"Logano","points":0,"position":10},{"cousin":"Wyatt","driver":"Suárez","points":40,"position":4},{"cousin":"Tyler","driver":"Hamlin","points":25,"position":6},{"cousin":"Jesse","driver":"Kyle Busch","points":75,"position":1},{"cousin":"Jared","driver":"Bell","points":0,"position":32}]},{"track":"Daytona International Speedway","date":"February 19, 2023","picks":[{"cousin":"Sarah","driver":"Hamlin","points":0,"position":17},{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":38},{"cousin":"Tyler","driver":"Blaney","points":25,"position":8},{"cousin":"Jesse","driver":"Larson","points":0,"position":18},{"cousin":"Jared","driver":"Bowman","points":40,"position":5}]}]')},"3sU5":function(t,i,e){"use strict";e.r(i);e("4yNf"),e("2B1R"),e("fbCW"),e("07d7"),e("Junv"),e("tkto"),e("QWBl"),e("FZtP"),e("ma9I");var n=e("3fBX"),o={metaInfo:{title:"Stats"},data:function(){var t="nathan",i=t[0].toUpperCase()+t.substr(1),e=n[0],o={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},s={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",toolbar:{show:!1},foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},r={options:{title:{text:"Finish Position"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"position",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a=e.picks.map((function(t){var i=t.cousin;return{name:i,icon:"mdi-link",link:"https://geek.github.io/nascar/"+i.toLowerCase()}})),c={},p=[],l=n.map((function(i){var e=i.picks.find((function(i){return i.cousin.toLowerCase()===t}))||{};return c[e.driver]=c[e.driver]+1||1,p.push({x:i.date,y:e.points}),r.series.push({x:i.date,y:e.position}),{track:i.track,driver:e.driver,points:e.points||0,position:e.position,date:i.date}}));o.series=p.reverse(),r.series=r.series.reverse();var d=[];Object.keys(c).forEach((function(t){"undefined"!==t&&d.push({x:t,y:c[t]})})),s.series=[{data:d}],o.series=[{data:o.series}],r.series=[{data:r.series}];return{cousin:i,cousins:a=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-home"}].concat(a),points:o,position:r,driverFrequency:c,df:s,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:l,drawer:null}},methods:{getColor:function(t){return t>60?"red":t>50?"orange":t>30?"green":t>20?"purple":"brown"}}},s=(e("yJ4i"),e("KHd+")),r=e("ZUTo"),a=e.n(r),c=e("dJbz"),p=e("QNyc"),l=e("W8H5"),d=e("zCDB"),u=e("Yq0q"),f=e("pSOK"),v=e("j+oE"),h=e("Ey0z"),y=e("iGBT"),g=e("2hOt"),m=e("XSMC"),b=e("NMP6"),w=e("9sRW"),k=e("93RO"),S=e("D9m0"),C=e("Kn9U"),x=Object(s.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-app",[e("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(i){return e("v-list-item",{key:i.name,attrs:{href:i.link,link:""}},[e("v-list-item-icon",[e("v-icon",[t._v("\n            "+t._s(i.icon)+"\n          ")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(i.name))])],1)],1)})),1)],1),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{on:{click:function(i){t.drawer=!t.drawer}}}),e("v-toolbar-title",[t._v(t._s(t.cousin)+" -- Stats ")])],1),e("v-main",[e("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[e("ClientOnly",[e("v-row",{staticClass:"hidden-sm-and-down"},[e("v-col",[e("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1),e("v-col",[e("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),e("v-row",{staticClass:"hidden-sm-and-down"},[e("v-col",[e("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1),e("v-col")],1),e("v-row",{staticClass:"hidden-md-and-up"},[e("v-col",[e("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1)],1),e("v-row",{staticClass:"hidden-md-and-up"},[e("v-col",[e("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),e("v-row",{staticClass:"hidden-md-and-up"},[e("v-col",[e("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1)],1)],1),e("v-row",[e("v-col",[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.points",fn:function(i){var n=i.item;return[e("v-chip",{attrs:{color:t.getColor(n.points),dark:""}},[t._v("\n                "+t._s(n.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);i.default=x.exports;a()(x,{VApp:c.a,VAppBar:p.a,VAppBarNavIcon:l.a,VChip:d.a,VCol:u.a,VContainer:f.a,VDataTable:v.a,VIcon:h.a,VList:y.a,VListItem:g.a,VListItemContent:m.a,VListItemIcon:b.a,VListItemTitle:m.b,VMain:w.a,VNavigationDrawer:k.a,VRow:S.a,VToolbarTitle:C.a})},"4yNf":function(t,i,e){"use strict";var n=e("I+eb"),o=e("4zBA"),s=e("HYAF"),r=e("WSbT"),a=e("V37c"),c=o("".slice),p=Math.max,l=Math.min;n({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,i){var e,n,o=a(s(this)),d=o.length,u=r(t);return u===1/0&&(u=0),u<0&&(u=p(d+u,0)),(e=void 0===i?d:r(i))<=0||e===1/0||u>=(n=l(u+e,d))?"":c(o,u,n)}})},D9m0:function(t,i,e){"use strict";e("S4Vr");var n=e("Kw5r"),o=e("2fdy"),s=e("gNKD");const r=["sm","md","lg","xl"],a=["start","end","center"];function c(t,i){return r.reduce((e,n)=>(e[t+Object(s.E)(n)]=i(),e),{})}const p=t=>[...a,"baseline","stretch"].includes(t),l=c("align",()=>({type:String,default:null,validator:p})),d=t=>[...a,"space-between","space-around"].includes(t),u=c("justify",()=>({type:String,default:null,validator:d})),f=t=>[...a,"space-between","space-around","stretch"].includes(t),v=c("alignContent",()=>({type:String,default:null,validator:f})),h={align:Object.keys(l),justify:Object.keys(u),alignContent:Object.keys(v)},y={align:"align",justify:"justify",alignContent:"align-content"};function g(t,i,e){let n=y[t];if(null!=e){if(i){n+="-"+i.replace(t,"")}return n+="-"+e,n.toLowerCase()}}const m=new Map;i.a=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p},...l,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:f},...v},render(t,{props:i,data:e,children:n}){let s="";for(const t in i)s+=String(i[t]);let r=m.get(s);if(!r){let t;for(t in r=[],h)h[t].forEach(e=>{const n=i[e],o=g(t,e,n);o&&r.push(o)});r.push({"no-gutters":i.noGutters,"row--dense":i.dense,["align-"+i.align]:i.align,["justify-"+i.justify]:i.justify,["align-content-"+i.alignContent]:i.alignContent}),m.set(s,r)}return t(i.tag,Object(o.a)(e,{staticClass:"row",class:r}),n)}})},IPaF:function(t,i,e){},Junv:function(t,i,e){"use strict";var n=e("I+eb"),o=e("4zBA"),s=e("6LWA"),r=o([].reverse),a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r(this)}})},S4Vr:function(t,i,e){},Yq0q:function(t,i,e){"use strict";e("S4Vr");var n=e("Kw5r"),o=e("2fdy"),s=e("gNKD");const r=["sm","md","lg","xl"],a=r.reduce((t,i)=>(t[i]={type:[Boolean,String,Number],default:!1},t),{}),c=r.reduce((t,i)=>(t["offset"+Object(s.E)(i)]={type:[String,Number],default:null},t),{}),p=r.reduce((t,i)=>(t["order"+Object(s.E)(i)]={type:[String,Number],default:null},t),{}),l={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(p)};function d(t,i,e){let n=t;if(null!=e&&!1!==e){if(i){n+="-"+i.replace(t,"")}return"col"!==t||""!==e&&!0!==e?(n+="-"+e,n.toLowerCase()):n.toLowerCase()}}const u=new Map;i.a=n.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...p,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:i,data:e,children:n,parent:s}){let r="";for(const t in i)r+=String(i[t]);let a=u.get(r);if(!a){let t;for(t in a=[],l)l[t].forEach(e=>{const n=i[e],o=d(t,e,n);o&&a.push(o)});const e=a.some(t=>t.startsWith("col-"));a.push({col:!e||!i.cols,["col-"+i.cols]:i.cols,["offset-"+i.offset]:i.offset,["order-"+i.order]:i.order,["align-self-"+i.alignSelf]:i.alignSelf}),u.set(r,a)}return t(i.tag,Object(o.a)(e,{class:a}),n)}})},fbCW:function(t,i,e){"use strict";var n=e("I+eb"),o=e("tycR").find,s=e("RNIs"),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},ncFr:function(t,i,e){},pSOK:function(t,i,e){"use strict";e("IPaF"),e("S4Vr");var n=e("Kw5r");var o,s=e("2fdy");i.a=(o="container",n.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:i,data:e,children:n}){e.staticClass=`${o} ${e.staticClass||""}`.trim();const{attrs:s}=e;if(s){e.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const i=s[t];return t.startsWith("data-")?(e.attrs[t]=i,!1):i||"string"==typeof i});t.length&&(e.staticClass+=" "+t.join(" "))}return i.id&&(e.domProps=e.domProps||{},e.domProps.id=i.id),t(i.tag,e,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:i,data:e,children:n}){let o;const{attrs:r}=e;return r&&(e.attrs={},o=Object.keys(r).filter(t=>{if("slot"===t)return!1;const i=r[t];return t.startsWith("data-")?(e.attrs[t]=i,!1):i||"string"==typeof i})),i.id&&(e.domProps=e.domProps||{},e.domProps.id=i.id),t(i.tag,Object(s.a)(e,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(o||[])}),n)}})},yJ4i:function(t,i,e){"use strict";e("ncFr")}}]);