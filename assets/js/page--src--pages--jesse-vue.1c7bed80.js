(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4yNf":function(i,t,o){"use strict";var n=o("I+eb"),s=o("4zBA"),e=o("HYAF"),r=o("WSbT"),a=o("V37c"),p=s("".slice),c=Math.max,l=Math.min;n({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(i,t){var o,n,s=a(e(this)),d=s.length,u=r(i);return u===1/0&&(u=0),u<0&&(u=c(d+u,0)),(o=void 0===t?d:r(t))<=0||o===1/0||u>=(n=l(u+o,d))?"":p(s,u,n)}})},"8LYh":function(i,t,o){"use strict";o.r(t);o("4yNf"),o("2B1R"),o("fbCW"),o("07d7"),o("Junv"),o("tkto"),o("QWBl"),o("FZtP"),o("ma9I");var n=o("u1VZ"),s={metaInfo:{title:"Stats"},data:function(){var i="jesse",t=i[0].toUpperCase()+i.substr(1),o=n[0],s={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},e={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",toolbar:{show:!1},foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},r={options:{title:{text:"Finish Position"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"position",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a=o.picks.map((function(i){var t=i.cousin;return{name:t,icon:"mdi-link",link:"https://geek.github.io/nascar/"+t.toLowerCase()}})),p={},c=[],l=n.map((function(t){var o=t.picks.find((function(t){return t.cousin.toLowerCase()===i}))||{};return p[o.driver]=p[o.driver]+1||1,c.push({x:t.date,y:o.points}),r.series.push({x:t.date,y:o.position}),{track:t.track,driver:o.driver,points:o.points||0,position:o.position,date:t.date}}));s.series=c.reverse(),r.series=r.series.reverse();var d=[];Object.keys(p).forEach((function(i){"undefined"!==i&&d.push({x:i,y:p[i]})})),e.series=[{data:d}],s.series=[{data:s.series}],r.series=[{data:r.series}];return{cousin:t,cousins:a=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-home"}].concat(a),points:s,position:r,driverFrequency:p,df:e,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:l,drawer:null}},methods:{getColor:function(i){return i>60?"red":i>50?"orange":i>30?"green":i>20?"purple":"brown"}}},e=(o("HgUM"),o("KHd+")),r=o("ZUTo"),a=o.n(r),p=o("dJbz"),c=o("QNyc"),l=o("W8H5"),d=o("zCDB"),u=o("Yq0q"),v=o("pSOK"),y=o("j+oE"),f=o("Ey0z"),h=o("iGBT"),g=o("2hOt"),m=o("XSMC"),k=o("NMP6"),w=o("9sRW"),b=o("93RO"),B=o("D9m0"),S=o("Kn9U"),x=Object(e.a)(s,(function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("v-app",[o("v-navigation-drawer",{attrs:{app:""},model:{value:i.drawer,callback:function(t){i.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{dense:"",nav:""}},i._l(i.cousins,(function(t){return o("v-list-item",{key:t.name,attrs:{href:t.link,link:""}},[o("v-list-item-icon",[o("v-icon",[i._v("\n            "+i._s(t.icon)+"\n          ")])],1),o("v-list-item-content",[o("v-list-item-title",[i._v(i._s(t.name))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{app:""}},[o("v-app-bar-nav-icon",{on:{click:function(t){i.drawer=!i.drawer}}}),o("v-toolbar-title",[i._v(i._s(i.cousin)+" -- Stats ")])],1),o("v-main",[o("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[o("ClientOnly",[o("v-row",{staticClass:"hidden-sm-and-down"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.points.options,series:i.points.series}})],1),o("v-col",[o("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:i.df.options,series:i.df.series}})],1)],1),o("v-row",{staticClass:"hidden-sm-and-down"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.position.options,series:i.position.series}})],1),o("v-col")],1),o("v-row",{staticClass:"hidden-md-and-up"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.points.options,series:i.points.series}})],1)],1),o("v-row",{staticClass:"hidden-md-and-up"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:i.df.options,series:i.df.series}})],1)],1),o("v-row",{staticClass:"hidden-md-and-up"},[o("v-col",[o("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.position.options,series:i.position.series}})],1)],1)],1),o("v-row",[o("v-col",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:i.headers,items:i.items},scopedSlots:i._u([{key:"item.points",fn:function(t){var n=t.item;return[o("v-chip",{attrs:{color:i.getColor(n.points),dark:""}},[i._v("\n                "+i._s(n.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=x.exports;a()(x,{VApp:p.a,VAppBar:c.a,VAppBarNavIcon:l.a,VChip:d.a,VCol:u.a,VContainer:v.a,VDataTable:y.a,VIcon:f.a,VList:h.a,VListItem:g.a,VListItemContent:m.a,VListItemIcon:k.a,VListItemTitle:m.b,VMain:w.a,VNavigationDrawer:b.a,VRow:B.a,VToolbarTitle:S.a})},D9m0:function(i,t,o){"use strict";o("S4Vr");var n=o("Kw5r"),s=o("2fdy"),e=o("gNKD");const r=["sm","md","lg","xl"],a=["start","end","center"];function p(i,t){return r.reduce((o,n)=>(o[i+Object(e.E)(n)]=t(),o),{})}const c=i=>[...a,"baseline","stretch"].includes(i),l=p("align",()=>({type:String,default:null,validator:c})),d=i=>[...a,"space-between","space-around"].includes(i),u=p("justify",()=>({type:String,default:null,validator:d})),v=i=>[...a,"space-between","space-around","stretch"].includes(i),y=p("alignContent",()=>({type:String,default:null,validator:v})),f={align:Object.keys(l),justify:Object.keys(u),alignContent:Object.keys(y)},h={align:"align",justify:"justify",alignContent:"align-content"};function g(i,t,o){let n=h[i];if(null!=o){if(t){n+="-"+t.replace(i,"")}return n+="-"+o,n.toLowerCase()}}const m=new Map;t.a=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...l,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:v},...y},render(i,{props:t,data:o,children:n}){let e="";for(const i in t)e+=String(t[i]);let r=m.get(e);if(!r){let i;for(i in r=[],f)f[i].forEach(o=>{const n=t[o],s=g(i,o,n);s&&r.push(s)});r.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),m.set(e,r)}return i(t.tag,Object(s.a)(o,{staticClass:"row",class:r}),n)}})},HgUM:function(i,t,o){"use strict";o("iQyG")},IPaF:function(i,t,o){},Junv:function(i,t,o){"use strict";var n=o("I+eb"),s=o("4zBA"),e=o("6LWA"),r=s([].reverse),a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return e(this)&&(this.length=this.length),r(this)}})},S4Vr:function(i,t,o){},Yq0q:function(i,t,o){"use strict";o("S4Vr");var n=o("Kw5r"),s=o("2fdy"),e=o("gNKD");const r=["sm","md","lg","xl"],a=r.reduce((i,t)=>(i[t]={type:[Boolean,String,Number],default:!1},i),{}),p=r.reduce((i,t)=>(i["offset"+Object(e.E)(t)]={type:[String,Number],default:null},i),{}),c=r.reduce((i,t)=>(i["order"+Object(e.E)(t)]={type:[String,Number],default:null},i),{}),l={col:Object.keys(a),offset:Object.keys(p),order:Object.keys(c)};function d(i,t,o){let n=i;if(null!=o&&!1!==o){if(t){n+="-"+t.replace(i,"")}return"col"!==i||""!==o&&!0!==o?(n+="-"+o,n.toLowerCase()):n.toLowerCase()}}const u=new Map;t.a=n.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...p,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:i=>["auto","start","end","center","baseline","stretch"].includes(i)},tag:{type:String,default:"div"}},render(i,{props:t,data:o,children:n,parent:e}){let r="";for(const i in t)r+=String(t[i]);let a=u.get(r);if(!a){let i;for(i in a=[],l)l[i].forEach(o=>{const n=t[o],s=d(i,o,n);s&&a.push(s)});const o=a.some(i=>i.startsWith("col-"));a.push({col:!o||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),u.set(r,a)}return i(t.tag,Object(s.a)(o,{class:a}),n)}})},fbCW:function(i,t,o){"use strict";var n=o("I+eb"),s=o("tycR").find,e=o("RNIs"),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(i){return s(this,i,arguments.length>1?arguments[1]:void 0)}}),e("find")},iQyG:function(i,t,o){},pSOK:function(i,t,o){"use strict";o("IPaF"),o("S4Vr");var n=o("Kw5r");var s,e=o("2fdy");t.a=(s="container",n.a.extend({name:"v-"+s,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(i,{props:t,data:o,children:n}){o.staticClass=`${s} ${o.staticClass||""}`.trim();const{attrs:e}=o;if(e){o.attrs={};const i=Object.keys(e).filter(i=>{if("slot"===i)return!1;const t=e[i];return i.startsWith("data-")?(o.attrs[i]=t,!1):t||"string"==typeof t});i.length&&(o.staticClass+=" "+i.join(" "))}return t.id&&(o.domProps=o.domProps||{},o.domProps.id=t.id),i(t.tag,o,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(i,{props:t,data:o,children:n}){let s;const{attrs:r}=o;return r&&(o.attrs={},s=Object.keys(r).filter(i=>{if("slot"===i)return!1;const t=r[i];return i.startsWith("data-")?(o.attrs[i]=t,!1):t||"string"==typeof t})),t.id&&(o.domProps=o.domProps||{},o.domProps.id=t.id),i(t.tag,Object(e.a)(o,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(s||[])}),n)}})},u1VZ:function(i){i.exports=JSON.parse('[{"track":"Sonoma Raceway","date":"June 12, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":75,"position":1},{"cousin":"Nathan","driver":"Bell","points":0,"position":9},{"cousin":"Wyatt","driver":"Blaney","points":25,"position":4},{"cousin":"Tyler","driver":"Elliott","points":0,"position":21},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Jared","driver":"Larson","points":0,"position":12}]},{"track":"Gateway Motorsports Park","date":"June 5, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":75,"position":1},{"cousin":"Nathan","driver":"Bell","points":0,"position":9},{"cousin":"Wyatt","driver":"Blaney","points":25,"position":4},{"cousin":"Tyler","driver":"Elliott","points":0,"position":21},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Jared","driver":"Larson","points":0,"position":12}]},{"track":"Charlotte Motor Speedway","date":"May 29, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":12},{"cousin":"Nathan","driver":"Wallace","points":0,"position":28},{"cousin":"Wyatt","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Tyler","driver":"Kurt Busch","points":0,"position":31},{"cousin":"Jesse","driver":"Hamlin","points":75,"position":1},{"cousin":"Jared","driver":"Elliott","points":0,"position":33}]},{"track":"Texas Motor Speedway","date":"May 23, 2022","picks":[{"cousin":"Ryan","driver":"Larson","points":10,"position":24},{"cousin":"Nathan","driver":"Bell","points":60,"position":10},{"cousin":"Wyatt","driver":"Byron","points":40,"position":11},{"cousin":"Tyler","driver":"Kurt Busch","points":25,"position":13},{"cousin":"Jesse","driver":"Elliott","points":10,"position":23},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":21}]},{"track":"Kansas Speedway","date":"May 15, 2022","picks":[{"cousin":"Ryan","driver":"Bowman","points":0,"position":9},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":14},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":29},{"cousin":"Tyler","driver":"Bell","points":25,"position":5},{"cousin":"Jesse","driver":"Larson","points":60,"position":2},{"cousin":"Jared","driver":"Kyle Busch","points":40,"position":3}]},{"track":"Darlington Raceway","date":"May 8, 2022","picks":[{"cousin":"Ryan","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":34},{"cousin":"Wyatt","driver":"Logano","points":75,"position":1},{"cousin":"Tyler","driver":"Larson","points":10,"position":36},{"cousin":"Jesse","driver":"Bell","points":40,"position":6},{"cousin":"Jared","driver":"Truex","points":25,"position":24}]},{"track":"Dover International Speedway","date":"May 1, 2022","picks":[{"cousin":"Ryan","driver":"Elliott","points":75,"position":1},{"cousin":"Nathan","driver":"Kyle Busch","points":25,"position":7},{"cousin":"Wyatt","driver":"Harvick","points":0,"position":9},{"cousin":"Tyler","driver":"Larson","points":40,"position":6},{"cousin":"Jesse","driver":"Blaney","points":0,"position":26},{"cousin":"Jared","driver":"Hamlin","points":0,"position":21}]},{"track":"Talladega Superspeedway","date":"April 24, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":32},{"cousin":"Nathan","driver":"Bell","points":0,"position":22},{"cousin":"Wyatt","driver":"Blaney","points":60,"position":11},{"cousin":"Tyler","driver":"Wallace","points":25,"position":17},{"cousin":"Jesse","driver":"Keselowski","points":0,"position":23},{"cousin":"Jared","driver":"Byron","points":40,"position":15}]},{"track":"Bristol Motor Speedway","date":"April 17, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":11},{"cousin":"Wyatt","driver":"Bell","points":0,"position":7},{"cousin":"Tyler","driver":"Bowman","points":25,"position":6},{"cousin":"Jesse","driver":"Elliott","points":0,"position":8},{"cousin":"Jared","driver":"Larson","points":40,"position":4}]},{"track":"Richmond Raceway VA","date":"April 3, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":60,"position":3},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":13},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":7},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":9},{"cousin":"Jesse","driver":"Larson","points":25,"position":5},{"cousin":"Jared","driver":"Truex","points":40,"position":4}]},{"track":"Circuit of the Americas","date":"March 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":7},{"cousin":"Nathan","driver":"Allmendinger","points":0,"position":33},{"cousin":"Wyatt","driver":"Larson","points":0,"position":29},{"cousin":"Tyler","driver":"Logano","points":0,"position":31},{"cousin":"Jesse","driver":"Elliott","points":60,"position":4},{"cousin":"Jared","driver":"Blaney","points":40,"position":6}]},{"track":"Atlanta Motor Speedway","date":"March 20, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":25,"position":9},{"cousin":"Nathan","driver":"Elliott","points":60,"position":6},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":17},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Jesse","driver":"Truex","points":40,"position":8},{"cousin":"Jared","driver":"Larson","points":0,"position":30}]},{"track":"Phoenix Raceway","date":"March 13, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":18},{"cousin":"Nathan","driver":"Bell","points":0,"position":26},{"cousin":"Wyatt","driver":"Logano","points":40,"position":8},{"cousin":"Tyler","driver":"Blaney","points":60,"position":4},{"cousin":"Jesse","driver":"Larson","points":0,"position":34},{"cousin":"Jared","driver":"Hamlin","points":25,"position":13}]},{"track":"Las Vegas Motor Speedway","date":"March 6, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":14},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Larson","points":60,"position":2},{"cousin":"Tyler","driver":"Elliott","points":25,"position":9},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":4},{"cousin":"Jared","driver":"Hamlin","points":0,"position":32}]},{"track":"Auto Club Speedway","date":"Feb 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":13},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":27},{"cousin":"Wyatt","driver":"Cindric","points":40,"position":12},{"cousin":"Tyler","driver":"Blaney","points":0,"position":18},{"cousin":"Jesse","driver":"Larson","points":75,"position":1},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":14}]},{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":60,"position":4},{"cousin":"Nathan","driver":"Kyle Busch","points":40,"position":6},{"cousin":"Wyatt","driver":"Keselowski","points":25,"position":9},{"cousin":"Tyler","driver":"Elliott","points":0,"position":10},{"cousin":"Jesse","driver":"Logano","points":0,"position":21},{"cousin":"Jared","driver":"Larson","points":0,"position":32}]}]')}}]);