(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4yNf":function(t,i,o){"use strict";var n=o("I+eb"),e=o("4zBA"),s=o("HYAF"),r=o("WSbT"),a=o("V37c"),p=e("".slice),c=Math.max,l=Math.min;n({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(t,i){var o,n,e=a(s(this)),d=e.length,u=r(t);return u===1/0&&(u=0),u<0&&(u=c(d+u,0)),(o=void 0===i?d:r(i))<=0||o===1/0||u>=(n=l(u+o,d))?"":p(e,u,n)}})},"9zBN":function(t,i,o){},D9m0:function(t,i,o){"use strict";o("S4Vr");var n=o("Kw5r"),e=o("2fdy"),s=o("gNKD");const r=["sm","md","lg","xl"],a=["start","end","center"];function p(t,i){return r.reduce((o,n)=>(o[t+Object(s.E)(n)]=i(),o),{})}const c=t=>[...a,"baseline","stretch"].includes(t),l=p("align",()=>({type:String,default:null,validator:c})),d=t=>[...a,"space-between","space-around"].includes(t),u=p("justify",()=>({type:String,default:null,validator:d})),v=t=>[...a,"space-between","space-around","stretch"].includes(t),f=p("alignContent",()=>({type:String,default:null,validator:v})),y={align:Object.keys(l),justify:Object.keys(u),alignContent:Object.keys(f)},h={align:"align",justify:"justify",alignContent:"align-content"};function g(t,i,o){let n=h[t];if(null!=o){if(i){n+="-"+i.replace(t,"")}return n+="-"+o,n.toLowerCase()}}const m=new Map;i.a=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...l,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:v},...f},render(t,{props:i,data:o,children:n}){let s="";for(const t in i)s+=String(i[t]);let r=m.get(s);if(!r){let t;for(t in r=[],y)y[t].forEach(o=>{const n=i[o],e=g(t,o,n);e&&r.push(e)});r.push({"no-gutters":i.noGutters,"row--dense":i.dense,["align-"+i.align]:i.align,["justify-"+i.justify]:i.justify,["align-content-"+i.alignContent]:i.alignContent}),m.set(s,r)}return t(i.tag,Object(e.a)(o,{staticClass:"row",class:r}),n)}})},IPaF:function(t,i,o){},Junv:function(t,i,o){"use strict";var n=o("I+eb"),e=o("4zBA"),s=o("6LWA"),r=e([].reverse),a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r(this)}})},S4Vr:function(t,i,o){},Yq0q:function(t,i,o){"use strict";o("S4Vr");var n=o("Kw5r"),e=o("2fdy"),s=o("gNKD");const r=["sm","md","lg","xl"],a=r.reduce((t,i)=>(t[i]={type:[Boolean,String,Number],default:!1},t),{}),p=r.reduce((t,i)=>(t["offset"+Object(s.E)(i)]={type:[String,Number],default:null},t),{}),c=r.reduce((t,i)=>(t["order"+Object(s.E)(i)]={type:[String,Number],default:null},t),{}),l={col:Object.keys(a),offset:Object.keys(p),order:Object.keys(c)};function d(t,i,o){let n=t;if(null!=o&&!1!==o){if(i){n+="-"+i.replace(t,"")}return"col"!==t||""!==o&&!0!==o?(n+="-"+o,n.toLowerCase()):n.toLowerCase()}}const u=new Map;i.a=n.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...p,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:i,data:o,children:n,parent:s}){let r="";for(const t in i)r+=String(i[t]);let a=u.get(r);if(!a){let t;for(t in a=[],l)l[t].forEach(o=>{const n=i[o],e=d(t,o,n);e&&a.push(e)});const o=a.some(t=>t.startsWith("col-"));a.push({col:!o||!i.cols,["col-"+i.cols]:i.cols,["offset-"+i.offset]:i.offset,["order-"+i.order]:i.order,["align-self-"+i.alignSelf]:i.alignSelf}),u.set(r,a)}return t(i.tag,Object(e.a)(o,{class:a}),n)}})},csAv:function(t,i,o){"use strict";o("9zBN")},fbCW:function(t,i,o){"use strict";var n=o("I+eb"),e=o("tycR").find,s=o("RNIs"),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},pSOK:function(t,i,o){"use strict";o("IPaF"),o("S4Vr");var n=o("Kw5r");var e,s=o("2fdy");i.a=(e="container",n.a.extend({name:"v-"+e,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:i,data:o,children:n}){o.staticClass=`${e} ${o.staticClass||""}`.trim();const{attrs:s}=o;if(s){o.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const i=s[t];return t.startsWith("data-")?(o.attrs[t]=i,!1):i||"string"==typeof i});t.length&&(o.staticClass+=" "+t.join(" "))}return i.id&&(o.domProps=o.domProps||{},o.domProps.id=i.id),t(i.tag,o,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:i,data:o,children:n}){let e;const{attrs:r}=o;return r&&(o.attrs={},e=Object.keys(r).filter(t=>{if("slot"===t)return!1;const i=r[t];return t.startsWith("data-")?(o.attrs[t]=i,!1):i||"string"==typeof i})),i.id&&(o.domProps=o.domProps||{},o.domProps.id=i.id),t(i.tag,Object(s.a)(o,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(e||[])}),n)}})},qznB:function(t,i,o){"use strict";o.r(i);o("4yNf"),o("2B1R"),o("fbCW"),o("07d7"),o("Junv"),o("tkto"),o("QWBl"),o("FZtP"),o("ma9I");var n=o("u1VZ"),e={metaInfo:{title:"Stats"},data:function(){var t="ryan",i=t[0].toUpperCase()+t.substr(1),o=n[0],e={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},s={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",toolbar:{show:!1},foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},r={options:{title:{text:"Finish Position"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"position",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a=o.picks.map((function(t){var i=t.cousin;return{name:i,icon:"mdi-link",link:"https://geek.github.io/nascar/"+i.toLowerCase()}})),p={},c=[],l=n.map((function(i){var o=i.picks.find((function(i){return i.cousin.toLowerCase()===t}))||{};return p[o.driver]=p[o.driver]+1||1,c.push({x:i.date,y:o.points}),r.series.push({x:i.date,y:o.position}),{track:i.track,driver:o.driver,points:o.points||0,position:o.position,date:i.date}}));e.series=c.reverse(),r.series=r.series.reverse();var d=[];Object.keys(p).forEach((function(t){"undefined"!==t&&d.push({x:t,y:p[t]})})),s.series=[{data:d}],e.series=[{data:e.series}],r.series=[{data:r.series}];return{cousin:i,cousins:a=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-home"}].concat(a),points:e,position:r,driverFrequency:p,df:s,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:l,drawer:null}},methods:{getColor:function(t){return t>60?"red":t>50?"orange":t>30?"green":t>20?"purple":"brown"}}},s=(o("csAv"),o("KHd+")),r=o("ZUTo"),a=o.n(r),p=o("dJbz"),c=o("QNyc"),l=o("W8H5"),d=o("zCDB"),u=o("Yq0q"),v=o("pSOK"),f=o("j+oE"),y=o("Ey0z"),h=o("iGBT"),g=o("2hOt"),m=o("XSMC"),k=o("NMP6"),b=o("9sRW"),w=o("93RO"),S=o("D9m0"),x=o("Kn9U"),B=Object(s.a)(e,(function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("v-app",[o("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[o("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(i){return o("v-list-item",{key:i.name,attrs:{href:i.link,link:""}},[o("v-list-item-icon",[o("v-icon",[t._v("\n            "+t._s(i.icon)+"\n          ")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(i.name))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{app:""}},[o("v-app-bar-nav-icon",{on:{click:function(i){t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v(t._s(t.cousin)+" -- Stats ")])],1),o("v-main",[o("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[o("ClientOnly",[o("v-row",{staticClass:"hidden-sm-and-down"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1),o("v-col",[o("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),o("v-row",{staticClass:"hidden-sm-and-down"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1),o("v-col")],1),o("v-row",{staticClass:"hidden-md-and-up"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.points.options,series:t.points.series}})],1)],1),o("v-row",{staticClass:"hidden-md-and-up"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:t.df.options,series:t.df.series}})],1)],1),o("v-row",{staticClass:"hidden-md-and-up"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:t.position.options,series:t.position.series}})],1)],1)],1),o("v-row",[o("v-col",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.points",fn:function(i){var n=i.item;return[o("v-chip",{attrs:{color:t.getColor(n.points),dark:""}},[t._v("\n                "+t._s(n.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);i.default=B.exports;a()(B,{VApp:p.a,VAppBar:c.a,VAppBarNavIcon:l.a,VChip:d.a,VCol:u.a,VContainer:v.a,VDataTable:f.a,VIcon:y.a,VList:h.a,VListItem:g.a,VListItemContent:m.a,VListItemIcon:k.a,VListItemTitle:m.b,VMain:b.a,VNavigationDrawer:w.a,VRow:S.a,VToolbarTitle:x.a})},u1VZ:function(t){t.exports=JSON.parse('[{"track":"Kansas Speedway","date":"May 15, 2022","picks":[{"cousin":"Ryan","driver":"Bowman","points":0,"position":9},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":14},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":29},{"cousin":"Tyler","driver":"Bell","points":25,"position":5},{"cousin":"Jesse","driver":"Larson","points":60,"position":2},{"cousin":"Jared","driver":"Kyle Busch","points":40,"position":3}]},{"track":"Darlington Raceway","date":"May 8, 2022","picks":[{"cousin":"Ryan","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":34},{"cousin":"Wyatt","driver":"Logano","points":75,"position":1},{"cousin":"Tyler","driver":"Larson","points":10,"position":36},{"cousin":"Jesse","driver":"Bell","points":40,"position":6},{"cousin":"Jared","driver":"Truex","points":25,"position":24}]},{"track":"Dover International Speedway","date":"May 1, 2022","picks":[{"cousin":"Ryan","driver":"Elliott","points":75,"position":1},{"cousin":"Nathan","driver":"Kyle Busch","points":25,"position":7},{"cousin":"Wyatt","driver":"Harvick","points":0,"position":9},{"cousin":"Tyler","driver":"Larson","points":40,"position":6},{"cousin":"Jesse","driver":"Blaney","points":0,"position":26},{"cousin":"Jared","driver":"Hamlin","points":0,"position":21}]},{"track":"Talladega Superspeedway","date":"April 24, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":32},{"cousin":"Nathan","driver":"Bell","points":0,"position":22},{"cousin":"Wyatt","driver":"Blaney","points":60,"position":11},{"cousin":"Tyler","driver":"Wallace","points":25,"position":17},{"cousin":"Jesse","driver":"Keselowski","points":0,"position":23},{"cousin":"Jared","driver":"Byron","points":40,"position":15}]},{"track":"Bristol Motor Speedway","date":"April 17, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":11},{"cousin":"Wyatt","driver":"Bell","points":0,"position":7},{"cousin":"Tyler","driver":"Bowman","points":25,"position":6},{"cousin":"Jesse","driver":"Elliott","points":0,"position":8},{"cousin":"Jared","driver":"Larson","points":40,"position":4}]},{"track":"Richmond Raceway VA","date":"April 3, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":60,"position":3},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":13},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":7},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":9},{"cousin":"Jesse","driver":"Larson","points":25,"position":5},{"cousin":"Jared","driver":"Truex","points":40,"position":4}]},{"track":"Circuit of the Americas","date":"March 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":7},{"cousin":"Nathan","driver":"Allmendinger","points":0,"position":33},{"cousin":"Wyatt","driver":"Larson","points":0,"position":29},{"cousin":"Tyler","driver":"Logano","points":0,"position":31},{"cousin":"Jesse","driver":"Elliott","points":60,"position":4},{"cousin":"Jared","driver":"Blaney","points":40,"position":6}]},{"track":"Atlanta Motor Speedway","date":"March 20, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":25,"position":9},{"cousin":"Nathan","driver":"Elliott","points":60,"position":6},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":17},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Jesse","driver":"Truex","points":40,"position":8},{"cousin":"Jared","driver":"Larson","points":0,"position":30}]},{"track":"Phoenix Raceway","date":"March 13, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":18},{"cousin":"Nathan","driver":"Bell","points":0,"position":26},{"cousin":"Wyatt","driver":"Logano","points":40,"position":8},{"cousin":"Tyler","driver":"Blaney","points":60,"position":4},{"cousin":"Jesse","driver":"Larson","points":0,"position":34},{"cousin":"Jared","driver":"Hamlin","points":25,"position":13}]},{"track":"Las Vegas Motor Speedway","date":"March 6, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":14},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Larson","points":60,"position":2},{"cousin":"Tyler","driver":"Elliott","points":25,"position":9},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":4},{"cousin":"Jared","driver":"Hamlin","points":0,"position":32}]},{"track":"Auto Club Speedway","date":"Feb 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":13},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":27},{"cousin":"Wyatt","driver":"Cindric","points":40,"position":12},{"cousin":"Tyler","driver":"Blaney","points":0,"position":18},{"cousin":"Jesse","driver":"Larson","points":75,"position":1},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":14}]},{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":60,"position":4},{"cousin":"Nathan","driver":"Kyle Busch","points":40,"position":6},{"cousin":"Wyatt","driver":"Keselowski","points":25,"position":9},{"cousin":"Tyler","driver":"Elliott","points":0,"position":10},{"cousin":"Jesse","driver":"Logano","points":0,"position":21},{"cousin":"Jared","driver":"Larson","points":0,"position":32}]}]')}}]);