(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4yNf":function(i,o,t){"use strict";var n=t("I+eb"),s=t("4zBA"),e=t("HYAF"),r=t("WSbT"),a=t("V37c"),p=s("".slice),c=Math.max,d=Math.min;n({target:"String",proto:!0,forced:!"".substr||"b"!=="ab".substr(-1)},{substr:function(i,o){var t,n,s=a(e(this)),l=s.length,u=r(i);return u===1/0&&(u=0),u<0&&(u=c(l+u,0)),(t=void 0===o?l:r(o))<=0||t===1/0||u>=(n=d(u+t,l))?"":p(s,u,n)}})},D9m0:function(i,o,t){"use strict";t("S4Vr");var n=t("Kw5r"),s=t("2fdy"),e=t("gNKD");const r=["sm","md","lg","xl"],a=["start","end","center"];function p(i,o){return r.reduce((t,n)=>(t[i+Object(e.E)(n)]=o(),t),{})}const c=i=>[...a,"baseline","stretch"].includes(i),d=p("align",()=>({type:String,default:null,validator:c})),l=i=>[...a,"space-between","space-around"].includes(i),u=p("justify",()=>({type:String,default:null,validator:l})),v=i=>[...a,"space-between","space-around","stretch"].includes(i),y=p("alignContent",()=>({type:String,default:null,validator:v})),h={align:Object.keys(d),justify:Object.keys(u),alignContent:Object.keys(y)},f={align:"align",justify:"justify",alignContent:"align-content"};function k(i,o,t){let n=f[i];if(null!=t){if(o){n+="-"+o.replace(i,"")}return n+="-"+t,n.toLowerCase()}}const g=new Map;o.a=n.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:l},...u,alignContent:{type:String,default:null,validator:v},...y},render(i,{props:o,data:t,children:n}){let e="";for(const i in o)e+=String(o[i]);let r=g.get(e);if(!r){let i;for(i in r=[],h)h[i].forEach(t=>{const n=o[t],s=k(i,t,n);s&&r.push(s)});r.push({"no-gutters":o.noGutters,"row--dense":o.dense,["align-"+o.align]:o.align,["justify-"+o.justify]:o.justify,["align-content-"+o.alignContent]:o.alignContent}),g.set(e,r)}return i(o.tag,Object(s.a)(t,{staticClass:"row",class:r}),n)}})},IPaF:function(i,o,t){},JVjO:function(i,o,t){"use strict";t("eFPg")},Junv:function(i,o,t){"use strict";var n=t("I+eb"),s=t("4zBA"),e=t("6LWA"),r=s([].reverse),a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return e(this)&&(this.length=this.length),r(this)}})},S4Vr:function(i,o,t){},Yq0q:function(i,o,t){"use strict";t("S4Vr");var n=t("Kw5r"),s=t("2fdy"),e=t("gNKD");const r=["sm","md","lg","xl"],a=r.reduce((i,o)=>(i[o]={type:[Boolean,String,Number],default:!1},i),{}),p=r.reduce((i,o)=>(i["offset"+Object(e.E)(o)]={type:[String,Number],default:null},i),{}),c=r.reduce((i,o)=>(i["order"+Object(e.E)(o)]={type:[String,Number],default:null},i),{}),d={col:Object.keys(a),offset:Object.keys(p),order:Object.keys(c)};function l(i,o,t){let n=i;if(null!=t&&!1!==t){if(o){n+="-"+o.replace(i,"")}return"col"!==i||""!==t&&!0!==t?(n+="-"+t,n.toLowerCase()):n.toLowerCase()}}const u=new Map;o.a=n.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...p,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:i=>["auto","start","end","center","baseline","stretch"].includes(i)},tag:{type:String,default:"div"}},render(i,{props:o,data:t,children:n,parent:e}){let r="";for(const i in o)r+=String(o[i]);let a=u.get(r);if(!a){let i;for(i in a=[],d)d[i].forEach(t=>{const n=o[t],s=l(i,t,n);s&&a.push(s)});const t=a.some(i=>i.startsWith("col-"));a.push({col:!t||!o.cols,["col-"+o.cols]:o.cols,["offset-"+o.offset]:o.offset,["order-"+o.order]:o.order,["align-self-"+o.alignSelf]:o.alignSelf}),u.set(r,a)}return i(o.tag,Object(s.a)(t,{class:a}),n)}})},bLk3:function(i){i.exports=JSON.parse('[{"track":"Martinsville Speedway","date":"October 30, 2022","picks":[{"cousin":"Ryan","driver":"Hamlin","points":0,"position":6},{"cousin":"Nathan","driver":"Bell","points":75,"position":1},{"cousin":"Wyatt","driver":"Blaney","points":25,"position":3},{"cousin":"Tyler","driver":"Elliott","points":0,"position":11},{"cousin":"Jesse","driver":"Chastain","points":0,"position":5},{"cousin":"Jared","driver":"Larson","points":40,"position":2}]},{"track":"Homestead-Miami Speedway","date":"October 23, 2022","picks":[{"cousin":"Ryan","driver":"Bell","points":0,"position":11},{"cousin":"Nathan","driver":"Harvick","points":25,"position":8},{"cousin":"Wyatt","driver":"Hamlin","points":40,"position":7},{"cousin":"Tyler","driver":"Larson","points":75,"position":1},{"cousin":"Jesse","driver":"Elliott","points":0,"position":14},{"cousin":"Jared","driver":"Reddick","points":10,"position":35}]},{"track":"Las Vegas Motor Speedway","date":"October 16, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":13},{"cousin":"Nathan","driver":"Bell","points":0,"position":34},{"cousin":"Wyatt","driver":"Chastain","points":40,"position":2},{"cousin":"Tyler","driver":"Logano","points":75,"position":1},{"cousin":"Jesse","driver":"Blaney","points":0,"position":28},{"cousin":"Jared","driver":"Reddick","points":25,"position":6}]},{"track":"Circuit of the Americas","date":"October 9, 2022","picks":[{"cousin":"Ryan","driver":"Reddick","points":25,"position":5},{"cousin":"Nathan","driver":"Bell","points":75,"position":1},{"cousin":"Wyatt","driver":"Allmendinger","points":40,"position":3},{"cousin":"Tyler","driver":"Elliott","points":0,"position":22},{"cousin":"Jesse","driver":"Larson","points":0,"position":35},{"cousin":"Jared","driver":"Byron","points":0,"position":17}]},{"track":"Talladega Superspeedway","date":"October 2, 2022","picks":[{"cousin":"Ryan","driver":"Bell","points":25,"position":17},{"cousin":"Nathan","driver":"Kyle Busch","points":0,"position":20},{"cousin":"Wyatt","driver":"Blaney","points":60,"position":2},{"cousin":"Tyler","driver":"Logano","points":0,"position":27},{"cousin":"Jesse","driver":"Hamlin","points":40,"position":5},{"cousin":"Jared","driver":"Reddick","points":0,"position":28}]},{"track":"Texas Motor Speedway","date":"September 25, 2022","picks":[{"cousin":"Ryan","driver":"Bell","points":0,"position":34},{"cousin":"Nathan","driver":"Kyle Busch","points":10,"position":36},{"cousin":"Wyatt","driver":"Larson","points":40,"position":9},{"cousin":"Tyler","driver":"Logano","points":60,"position":2},{"cousin":"Jesse","driver":"Elliott","points":0,"position":32},{"cousin":"Jared","driver":"Harvick","points":25,"position":19}]},{"track":"Bristol Motor Speedway","date":"September 17, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":27},{"cousin":"Nathan","driver":"Kyle Busch","points":0,"position":34},{"cousin":"Wyatt","driver":"Harvick","points":25,"position":10},{"cousin":"Tyler","driver":"Blaney","points":0,"position":30},{"cousin":"Jesse","driver":"Larson","points":60,"position":5},{"cousin":"Jared","driver":"Hamlin","points":40,"position":9}]},{"track":"Kansas Speedway","date":"September 11, 2022","picks":[{"cousin":"Ryan","driver":"Larson","points":25,"position":8},{"cousin":"Nathan","driver":"Kyle Busch","points":0,"position":26},{"cousin":"Wyatt","driver":"Logano","points":0,"position":17},{"cousin":"Tyler","driver":"Hamlin","points":60,"position":2},{"cousin":"Jesse","driver":"Bell","points":40,"position":3},{"cousin":"Jared","driver":"Reddick","points":10,"position":35}]},{"track":"Darlington Raceway","date":"September 5, 2022","picks":[{"cousin":"Ryan","driver":"Larson","points":0,"position":12},{"cousin":"Nathan","driver":"Harvick","points":0,"position":33},{"cousin":"Wyatt","driver":"Reddick","points":40,"position":3},{"cousin":"Tyler","driver":"Hamlin","points":60,"position":2},{"cousin":"Jesse","driver":"Byron","points":0,"position":8},{"cousin":"Jared","driver":"Logano","points":25,"position":4}]},{"track":"Daytona International Speedway","date":"August 27, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":25,"position":15},{"cousin":"Nathan","driver":"Harvick","points":0,"position":20},{"cousin":"Wyatt","driver":"Wallace","points":60,"position":11},{"cousin":"Tyler","driver":"Logano","points":40,"position":12},{"cousin":"Jesse","driver":"Larson","points":10,"position":37},{"cousin":"Jared","driver":"Hamlin","points":0,"position":25}]},{"track":"The Glen","date":"August 21, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":22},{"cousin":"Nathan","driver":"Larson","points":75,"position":1},{"cousin":"Wyatt","driver":"Kyle Busch","points":0,"position":32},{"cousin":"Tyler","driver":"Elliott","points":40,"position":4},{"cousin":"Jesse","driver":"Hamlin","points":0,"position":20},{"cousin":"Jared","driver":"Reddick","points":25,"position":7}]},{"track":"Richmond Raceway VA","date":"August 15, 2022","picks":[{"cousin":"Ryan","driver":"Hamlin","points":60,"position":4},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":15},{"cousin":"Wyatt","driver":"Truex","points":25,"position":7},{"cousin":"Tyler","driver":"Logano","points":40,"position":6},{"cousin":"Jesse","driver":"Chastain","points":0,"position":18},{"cousin":"Jared","driver":"Larson","points":0,"position":14}]},{"track":"Indianapolis Motor Speedway","date":"August 7, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":40,"position":4},{"cousin":"Nathan","driver":"Bell","points":0,"position":26},{"cousin":"Wyatt","driver":"Kyle Busch","points":10,"position":36},{"cousin":"Tyler","driver":"Hamlin","points":60,"position":3},{"cousin":"Jesse","driver":"Elliott","points":0,"position":11},{"cousin":"Jared","driver":"Larson","points":25,"position":7}]},{"track":"Indianapolis Motor Speedway","date":"July 31, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":40,"position":6},{"cousin":"Nathan","driver":"Bell","points":25,"position":12},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":16},{"cousin":"Tyler","driver":"Suarez","points":0,"position":28},{"cousin":"Jesse","driver":"Blaney","points":0,"position":26},{"cousin":"Jared","driver":"Reddick","points":75,"position":1}]},{"track":"Pocono Raceway","date":"July 24, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":10,"position":33},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":14},{"cousin":"Wyatt","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Tyler","driver":"Hamlin","points":75,"position":1},{"cousin":"Jesse","driver":"Larson","points":0,"position":5},{"cousin":"Jared","driver":"Elliott","points":25,"position":3}]},{"track":"NHMS","date":"July 17, 2022","picks":[{"cousin":"Ryan","driver":"Kyle Busch","points":0,"position":12},{"cousin":"Nathan","driver":"Kurt Busch","points":25,"position":10},{"cousin":"Wyatt","driver":"Byron","points":0,"position":11},{"cousin":"Tyler","driver":"Blaney","points":0,"position":18},{"cousin":"Jesse","driver":"Hamlin","points":40,"position":6},{"cousin":"Jared","driver":"Truex","points":60,"position":4}]},{"track":"Atlanta Motor Speedway","date":"July 10, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":30},{"cousin":"Nathan","driver":"Elliott","points":75,"position":1},{"cousin":"Wyatt","driver":"Chastain","points":40,"position":2},{"cousin":"Tyler","driver":"Blaney","points":25,"position":5},{"cousin":"Jesse","driver":"Larson","points":0,"position":13},{"cousin":"Jared","driver":"Bowman","points":0,"position":32}]},{"track":"Road America","date":"July 3, 2022","picks":[{"cousin":"Ryan","driver":"Cindric","points":0,"position":7},{"cousin":"Nathan","driver":"Bell","points":0,"position":18},{"cousin":"Wyatt","driver":"Briscoe","points":0,"position":14},{"cousin":"Tyler","driver":"Larson","points":25,"position":3},{"cousin":"Jesse","driver":"Elliott","points":40,"position":2},{"cousin":"Jared","driver":"Reddick","points":75,"position":1}]},{"track":"Nashville Superspeedway","date":"June 16, 2022","picks":[{"cousin":"Ryan","driver":"Elliott","points":75,"position":1},{"cousin":"Nathan","driver":"Logano","points":0,"position":9},{"cousin":"Wyatt","driver":"Chastain","points":0,"position":5},{"cousin":"Tyler","driver":"Larson","points":25,"position":4},{"cousin":"Jesse","driver":"Blaney","points":40,"position":3},{"cousin":"Jared","driver":"Hamlin","points":0,"position":6}]},{"track":"Sonoma Raceway","date":"June 12, 2022","picks":[{"cousin":"Ryan","driver":"Kurt Busch","points":0,"position":18},{"cousin":"Nathan","driver":"Hamlin","points":0,"position":31},{"cousin":"Wyatt","driver":"Chastain","points":60,"position":7},{"cousin":"Tyler","driver":"Elliott","points":40,"position":8},{"cousin":"Jesse","driver":"Larson","points":25,"position":15},{"cousin":"Jared","driver":"Truex","points":0,"position":26}]},{"track":"Gateway Motorsports Park","date":"June 5, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":75,"position":1},{"cousin":"Nathan","driver":"Bell","points":0,"position":9},{"cousin":"Wyatt","driver":"Blaney","points":25,"position":4},{"cousin":"Tyler","driver":"Elliott","points":0,"position":21},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Jared","driver":"Larson","points":0,"position":12}]},{"track":"Charlotte Motor Speedway","date":"May 29, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":12},{"cousin":"Nathan","driver":"Wallace","points":0,"position":28},{"cousin":"Wyatt","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Tyler","driver":"Kurt Busch","points":0,"position":31},{"cousin":"Jesse","driver":"Hamlin","points":75,"position":1},{"cousin":"Jared","driver":"Elliott","points":0,"position":33}]},{"track":"Texas Motor Speedway","date":"May 23, 2022","picks":[{"cousin":"Ryan","driver":"Larson","points":10,"position":24},{"cousin":"Nathan","driver":"Bell","points":60,"position":10},{"cousin":"Wyatt","driver":"Byron","points":40,"position":11},{"cousin":"Tyler","driver":"Kurt Busch","points":25,"position":13},{"cousin":"Jesse","driver":"Elliott","points":10,"position":23},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":21}]},{"track":"Kansas Speedway","date":"May 15, 2022","picks":[{"cousin":"Ryan","driver":"Bowman","points":0,"position":9},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":14},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":29},{"cousin":"Tyler","driver":"Bell","points":25,"position":5},{"cousin":"Jesse","driver":"Larson","points":60,"position":2},{"cousin":"Jared","driver":"Kyle Busch","points":40,"position":3}]},{"track":"Darlington Raceway","date":"May 8, 2022","picks":[{"cousin":"Ryan","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":34},{"cousin":"Wyatt","driver":"Logano","points":75,"position":1},{"cousin":"Tyler","driver":"Larson","points":10,"position":36},{"cousin":"Jesse","driver":"Bell","points":40,"position":6},{"cousin":"Jared","driver":"Truex","points":25,"position":24}]},{"track":"Dover International Speedway","date":"May 1, 2022","picks":[{"cousin":"Ryan","driver":"Elliott","points":75,"position":1},{"cousin":"Nathan","driver":"Kyle Busch","points":25,"position":7},{"cousin":"Wyatt","driver":"Harvick","points":0,"position":9},{"cousin":"Tyler","driver":"Larson","points":40,"position":6},{"cousin":"Jesse","driver":"Blaney","points":0,"position":26},{"cousin":"Jared","driver":"Hamlin","points":0,"position":21}]},{"track":"Talladega Superspeedway","date":"April 24, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":32},{"cousin":"Nathan","driver":"Bell","points":0,"position":22},{"cousin":"Wyatt","driver":"Blaney","points":60,"position":11},{"cousin":"Tyler","driver":"Wallace","points":25,"position":17},{"cousin":"Jesse","driver":"Keselowski","points":0,"position":23},{"cousin":"Jared","driver":"Byron","points":40,"position":15}]},{"track":"Bristol Motor Speedway","date":"April 17, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":11},{"cousin":"Wyatt","driver":"Bell","points":0,"position":7},{"cousin":"Tyler","driver":"Bowman","points":25,"position":6},{"cousin":"Jesse","driver":"Elliott","points":0,"position":8},{"cousin":"Jared","driver":"Larson","points":40,"position":4}]},{"track":"Richmond Raceway VA","date":"April 3, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":60,"position":3},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":13},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":7},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":9},{"cousin":"Jesse","driver":"Larson","points":25,"position":5},{"cousin":"Jared","driver":"Truex","points":40,"position":4}]},{"track":"Circuit of the Americas","date":"March 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":7},{"cousin":"Nathan","driver":"Allmendinger","points":0,"position":33},{"cousin":"Wyatt","driver":"Larson","points":0,"position":29},{"cousin":"Tyler","driver":"Logano","points":0,"position":31},{"cousin":"Jesse","driver":"Elliott","points":60,"position":4},{"cousin":"Jared","driver":"Blaney","points":40,"position":6}]},{"track":"Atlanta Motor Speedway","date":"March 20, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":25,"position":9},{"cousin":"Nathan","driver":"Elliott","points":60,"position":6},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":17},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Jesse","driver":"Truex","points":40,"position":8},{"cousin":"Jared","driver":"Larson","points":0,"position":30}]},{"track":"Phoenix Raceway","date":"March 13, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":18},{"cousin":"Nathan","driver":"Bell","points":0,"position":26},{"cousin":"Wyatt","driver":"Logano","points":40,"position":8},{"cousin":"Tyler","driver":"Blaney","points":60,"position":4},{"cousin":"Jesse","driver":"Larson","points":0,"position":34},{"cousin":"Jared","driver":"Hamlin","points":25,"position":13}]},{"track":"Las Vegas Motor Speedway","date":"March 6, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":14},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Larson","points":60,"position":2},{"cousin":"Tyler","driver":"Elliott","points":25,"position":9},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":4},{"cousin":"Jared","driver":"Hamlin","points":0,"position":32}]},{"track":"Auto Club Speedway","date":"Feb 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":13},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":27},{"cousin":"Wyatt","driver":"Cindric","points":40,"position":12},{"cousin":"Tyler","driver":"Blaney","points":0,"position":18},{"cousin":"Jesse","driver":"Larson","points":75,"position":1},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":14}]},{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":60,"position":4},{"cousin":"Nathan","driver":"Kyle Busch","points":40,"position":6},{"cousin":"Wyatt","driver":"Keselowski","points":25,"position":9},{"cousin":"Tyler","driver":"Elliott","points":0,"position":10},{"cousin":"Jesse","driver":"Logano","points":0,"position":21},{"cousin":"Jared","driver":"Larson","points":0,"position":32}]}]')},eFPg:function(i,o,t){},fbCW:function(i,o,t){"use strict";var n=t("I+eb"),s=t("tycR").find,e=t("RNIs"),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(i){return s(this,i,arguments.length>1?arguments[1]:void 0)}}),e("find")},pSOK:function(i,o,t){"use strict";t("IPaF"),t("S4Vr");var n=t("Kw5r");var s,e=t("2fdy");o.a=(s="container",n.a.extend({name:"v-"+s,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(i,{props:o,data:t,children:n}){t.staticClass=`${s} ${t.staticClass||""}`.trim();const{attrs:e}=t;if(e){t.attrs={};const i=Object.keys(e).filter(i=>{if("slot"===i)return!1;const o=e[i];return i.startsWith("data-")?(t.attrs[i]=o,!1):o||"string"==typeof o});i.length&&(t.staticClass+=" "+i.join(" "))}return o.id&&(t.domProps=t.domProps||{},t.domProps.id=o.id),i(o.tag,t,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(i,{props:o,data:t,children:n}){let s;const{attrs:r}=t;return r&&(t.attrs={},s=Object.keys(r).filter(i=>{if("slot"===i)return!1;const o=r[i];return i.startsWith("data-")?(t.attrs[i]=o,!1):o||"string"==typeof o})),o.id&&(t.domProps=t.domProps||{},t.domProps.id=o.id),i(o.tag,Object(e.a)(t,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(s||[])}),n)}})},zUcG:function(i,o,t){"use strict";t.r(o);t("4yNf"),t("2B1R"),t("fbCW"),t("07d7"),t("Junv"),t("tkto"),t("QWBl"),t("FZtP"),t("ma9I");var n=t("bLk3"),s={metaInfo:{title:"Stats"},data:function(){var i="ryan",o=i[0].toUpperCase()+i.substr(1),t=n[0],s={options:{title:{text:"Points Earned"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"points",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},e={options:{title:{text:"Driver Picks"},tooltip:{theme:"dark"},plotOptions:{bar:{horizontal:!0}},chart:{id:"picks",toolbar:{show:!1},foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},r={options:{title:{text:"Finish Position"},tooltip:{theme:"dark"},chart:{toolbar:{show:!1},id:"position",foreColor:"#fff"},dataLabels:{position:"bottom"},legend:{position:"top"},xaxis:{type:"category"}},series:[]},a=t.picks.map((function(i){var o=i.cousin;return{name:o,icon:"mdi-link",link:"https://geek.github.io/2022/"+o.toLowerCase()}})),p={},c=[],d=n.map((function(o){var t=o.picks.find((function(o){return o.cousin.toLowerCase()===i}))||{};return p[t.driver]=p[t.driver]+1||1,c.push({x:o.date,y:t.points}),r.series.push({x:o.date,y:t.position}),{track:o.track,driver:t.driver,points:t.points||0,position:t.position,date:o.date}}));s.series=c.reverse(),r.series=r.series.reverse();var l=[];Object.keys(p).forEach((function(i){"undefined"!==i&&l.push({x:i,y:p[i]})})),e.series=[{data:l}],s.series=[{data:s.series}],r.series=[{data:r.series}];return{cousin:o,cousins:a=[{name:"Home",link:"https://geek.github.io",icon:"mdi-home"}].concat(a),points:s,position:r,driverFrequency:p,df:e,headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Position",value:"position"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:d,drawer:null}},methods:{getColor:function(i){return i>60?"red":i>50?"orange":i>30?"green":i>20?"purple":"brown"}}},e=(t("JVjO"),t("KHd+")),r=t("ZUTo"),a=t.n(r),p=t("dJbz"),c=t("QNyc"),d=t("W8H5"),l=t("zCDB"),u=t("Yq0q"),v=t("pSOK"),y=t("j+oE"),h=t("Ey0z"),f=t("iGBT"),k=t("2hOt"),g=t("XSMC"),m=t("NMP6"),w=t("9sRW"),B=t("93RO"),J=t("D9m0"),b=t("Kn9U"),L=Object(e.a)(s,(function(){var i=this,o=i.$createElement,t=i._self._c||o;return t("v-app",[t("v-navigation-drawer",{attrs:{app:""},model:{value:i.drawer,callback:function(o){i.drawer=o},expression:"drawer"}},[t("v-list",{attrs:{dense:"",nav:""}},i._l(i.cousins,(function(o){return t("v-list-item",{key:o.name,attrs:{href:o.link,link:""}},[t("v-list-item-icon",[t("v-icon",[i._v("\n            "+i._s(o.icon)+"\n          ")])],1),t("v-list-item-content",[t("v-list-item-title",[i._v(i._s(o.name))])],1)],1)})),1)],1),t("v-app-bar",{attrs:{app:""}},[t("v-app-bar-nav-icon",{on:{click:function(o){i.drawer=!i.drawer}}}),t("v-toolbar-title",[i._v(i._s(i.cousin)+" -- Stats ")])],1),t("v-main",[t("v-container",{staticClass:"pl-0 ml-2 mt-5 mr-0 pr-0"},[t("ClientOnly",[t("v-row",{staticClass:"hidden-sm-and-down"},[t("v-col",[t("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.points.options,series:i.points.series}})],1),t("v-col",[t("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:i.df.options,series:i.df.series}})],1)],1),t("v-row",{staticClass:"hidden-sm-and-down"},[t("v-col",[t("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.position.options,series:i.position.series}})],1),t("v-col")],1),t("v-row",{staticClass:"hidden-md-and-up"},[t("v-col",[t("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.points.options,series:i.points.series}})],1)],1),t("v-row",{staticClass:"hidden-md-and-up"},[t("v-col",[t("apexchart",{attrs:{width:"100%",type:"bar",height:"400px",options:i.df.options,series:i.df.series}})],1)],1),t("v-row",{staticClass:"hidden-md-and-up"},[t("v-col",[t("apexchart",{attrs:{width:"100%",type:"line",height:"400px",options:i.position.options,series:i.position.series}})],1)],1)],1),t("v-row",[t("v-col",[t("v-data-table",{staticClass:"elevation-1",attrs:{headers:i.headers,items:i.items},scopedSlots:i._u([{key:"item.points",fn:function(o){var n=o.item;return[t("v-chip",{attrs:{color:i.getColor(n.points),dark:""}},[i._v("\n                "+i._s(n.points)+"\n              ")])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);o.default=L.exports;a()(L,{VApp:p.a,VAppBar:c.a,VAppBarNavIcon:d.a,VChip:l.a,VCol:u.a,VContainer:v.a,VDataTable:y.a,VIcon:h.a,VList:f.a,VListItem:k.a,VListItemContent:g.a,VListItemIcon:m.a,VListItemTitle:g.b,VMain:w.a,VNavigationDrawer:B.a,VRow:J.a,VToolbarTitle:b.a})}}]);