(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4yNf":function(t,e,n){"use strict";var i=n("I+eb"),r=n("4zBA"),o=n("HYAF"),a=n("WSbT"),s=n("V37c"),l=r("".slice),c=Math.max,u=Math.min;i({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,e){var n,i,r=s(o(this)),d=r.length,p=a(t);return p===1/0&&(p=0),p<0&&(p=c(d+p,0)),(n=void 0===e?d:a(e))<=0||n===1/0||p>=(i=u(p+n,d))?"":l(r,p,i)}})},D9m0:function(t,e,n){"use strict";n("S4Vr");var i=n("Kw5r"),r=n("2fdy"),o=n("gNKD");const a=["sm","md","lg","xl"],s=["start","end","center"];function l(t,e){return a.reduce((n,i)=>(n[t+Object(o.E)(i)]=e(),n),{})}const c=t=>[...s,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),d=t=>[...s,"space-between","space-around"].includes(t),p=l("justify",()=>({type:String,default:null,validator:d})),f=t=>[...s,"space-between","space-around","stretch"].includes(t),v=l("alignContent",()=>({type:String,default:null,validator:f})),g={align:Object.keys(u),justify:Object.keys(p),alignContent:Object.keys(v)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){let i=y[t];if(null!=n){if(e){i+="-"+e.replace(t,"")}return i+="-"+n,i.toLowerCase()}}const m=new Map;e.a=i.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...p,alignContent:{type:String,default:null,validator:f},...v},render(t,{props:e,data:n,children:i}){let o="";for(const t in e)o+=String(e[t]);let a=m.get(o);if(!a){let t;for(t in a=[],g)g[t].forEach(n=>{const i=e[n],r=b(t,n,i);r&&a.push(r)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),m.set(o,a)}return t(e.tag,Object(r.a)(n,{staticClass:"row",class:a}),i)}})},IPaF:function(t,e,n){},Kc7u:function(t,e,n){"use strict";n("Ltgt")},Ltgt:function(t,e,n){},S4Vr:function(t,e,n){},Yq0q:function(t,e,n){"use strict";n("S4Vr");var i=n("Kw5r"),r=n("2fdy"),o=n("gNKD");const a=["sm","md","lg","xl"],s=a.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),l=a.reduce((t,e)=>(t["offset"+Object(o.E)(e)]={type:[String,Number],default:null},t),{}),c=a.reduce((t,e)=>(t["order"+Object(o.E)(e)]={type:[String,Number],default:null},t),{}),u={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){i+="-"+e.replace(t,"")}return"col"!==t||""!==n&&!0!==n?(i+="-"+n,i.toLowerCase()):i.toLowerCase()}}const p=new Map;e.a=i.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:o}){let a="";for(const t in e)a+=String(e[t]);let s=p.get(a);if(!s){let t;for(t in s=[],u)u[t].forEach(n=>{const i=e[n],r=d(t,n,i);r&&s.push(r)});const n=s.some(t=>t.startsWith("col-"));s.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),p.set(a,s)}return t(e.tag,Object(r.a)(n,{class:s}),i)}})},fbCW:function(t,e,n){"use strict";var i=n("I+eb"),r=n("tycR").find,o=n("RNIs"),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},iQlQ:function(t,e,n){"use strict";n.r(e);n("4yNf"),n("2B1R"),n("fbCW"),n("07d7"),n("tkto"),n("QWBl"),n("FZtP"),n("ma9I");var i=n("u1VZ"),r={metaInfo:{title:"Stats"},data:function(){var t="tyler",e=t[0].toUpperCase()+t.substr(1),n=i[0],r={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},o={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a=n.picks.map((function(t){var e=t.cousin;return{name:e,icon:"mdi-link",link:"https://geek.github.io/nascar/"+e}})),s={},l=i.map((function(e){var n=e.picks.find((function(e){return e.cousin.toLowerCase()===t}))||{};return s[n.driver]=s[n.driver]+1||1,r.series.push({x:e.date,y:n.points}),{track:e.track,driver:n.driver,points:n.points||0,position:n.position,date:e.date}})),c=[];Object.keys(s).forEach((function(t){"undefined"!==t&&c.push({x:t,y:s[t]})})),o.series=[{data:c}],r.series=[{data:r.series}];return{cousin:e,cousins:a=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-home"}].concat(a),points:r,driverFrequency:s,df:o,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:l,drawer:null}},methods:{getColor:function(t){return t>60?"red":t>50?"orange":t>30?"yellow":t>20?"purple":"brown"}}},o=(n("Kc7u"),n("KHd+")),a=n("ZUTo"),s=n.n(a),l=n("dJbz"),c=n("QNyc"),u=n("W8H5"),d=n("zCDB"),p=n("Yq0q"),f=n("pSOK"),v=n("j+oE"),g=n("Ey0z"),y=n("iGBT"),b=n("2hOt"),m=n("XSMC"),h=n("NMP6"),k=n("9sRW"),w=n("93RO"),S=n("D9m0"),C=n("Kn9U"),j=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(e){return n("v-list-item",{key:e.name,attrs:{href:e.link,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("\n            "+t._s(e.icon)+"\n          ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v(t._s(t.cousin)+" -- Stats ")])],1),n("v-main",[n("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[n("ClientOnly",[n("v-row",[n("v-col",[n("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1),n("v-col",[n("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1)],1),n("v-row",[n("v-col",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.points",fn:function(e){var i=e.item;return[n("v-chip",{attrs:{color:t.getColor(i.points),dark:""}},[t._v("\n                "+t._s(i.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=j.exports;s()(j,{VApp:l.a,VAppBar:c.a,VAppBarNavIcon:u.a,VChip:d.a,VCol:p.a,VContainer:f.a,VDataTable:v.a,VIcon:g.a,VList:y.a,VListItem:b.a,VListItemContent:m.a,VListItemIcon:h.a,VListItemTitle:m.b,VMain:k.a,VNavigationDrawer:w.a,VRow:S.a,VToolbarTitle:C.a})},pSOK:function(t,e,n){"use strict";n("IPaF"),n("S4Vr");var i=n("Kw5r");var r,o=n("2fdy");e.a=(r="container",i.a.extend({name:"v-"+r,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i}){n.staticClass=`${r} ${n.staticClass||""}`.trim();const{attrs:o}=n;if(o){n.attrs={};const t=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(n.staticClass+=" "+t.join(" "))}return e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,n,i)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:a}=n;return a&&(n.attrs={},r=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"==typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(o.a)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},tkto:function(t,e,n){var i=n("I+eb"),r=n("ewvW"),o=n("33Wh");i({target:"Object",stat:!0,forced:n("0Dky")((function(){o(1)}))},{keys:function(t){return o(r(t))}})},u1VZ:function(t){t.exports=JSON.parse('[{"track":"Auto Club 400","date":"Feb 27, 2022","picks":[{"cousin":"Wyatt","driver":"Larson","points":75,"position":1},{"cousin":"Ryan","driver":"Kyle Busch","points":25,"position":2},{"cousin":"Tyler","driver":"Keselowski","points":0,"position":17},{"cousin":"Jared","driver":"Larson","points":75,"position":1},{"cousin":"Jesse","driver":"Larson","points":75,"position":1},{"cousin":"Nathan","driver":"Larson","points":75,"position":1}]},{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Wyatt","driver":"Larson","points":65,"position":1},{"cousin":"Ryan","driver":"Blaney","points":25,"position":2},{"cousin":"Tyler","driver":"Keselowski","points":0,"position":17}]}]')}}]);