(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2Zix":function(i,o,t){var n=t("NC/Y");i.exports=/MSIE|Trident/.test(n)},BNF5:function(i,o,t){var n=t("NC/Y").match(/firefox\/(\d+)/i);i.exports=!!n&&+n[1]},ToJy:function(i,o,t){"use strict";var n=t("I+eb"),s=t("4zBA"),r=t("We1y"),e=t("ewvW"),a=t("B/qT"),p=t("V37c"),c=t("0Dky"),u=t("rdv8"),v=t("pkCn"),d=t("BNF5"),l=t("2Zix"),y=t("LQDL"),h=t("USzg"),k=[],f=s(k.sort),m=s(k.push),B=c((function(){k.sort(void 0)})),g=c((function(){k.sort(null)})),w=v("sort"),J=!c((function(){if(y)return y<70;if(!(d&&d>3)){if(l)return!0;if(h)return h<603;var i,o,t,n,s="";for(i=65;i<76;i++){switch(o=String.fromCharCode(i),i){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)k.push({k:o+n,v:t})}for(k.sort((function(i,o){return o.v-i.v})),n=0;n<k.length;n++)o=k[n].k.charAt(0),s.charAt(s.length-1)!==o&&(s+=o);return"DGBEFHACIJK"!==s}}));n({target:"Array",proto:!0,forced:B||!g||!w||!J},{sort:function(i){void 0!==i&&r(i);var o=e(this);if(J)return void 0===i?f(o):f(o,i);var t,n,s=[],c=a(o);for(n=0;n<c;n++)n in o&&m(s,o[n]);for(u(s,function(i){return function(o,t){return void 0===t?-1:void 0===o?1:void 0!==i?+i(o,t)||0:p(o)>p(t)?1:-1}}(i)),t=s.length,n=0;n<t;)o[n]=s[n++];for(;n<c;)delete o[n++];return o}})},USzg:function(i,o,t){var n=t("NC/Y").match(/AppleWebKit\/(\d+)\./);i.exports=!!n&&+n[1]},aK7f:function(i,o,t){},gEGz:function(i,o,t){"use strict";t("aK7f")},iyQ6:function(i,o,t){"use strict";t.r(o);t("2B1R"),t("QWBl"),t("07d7"),t("FZtP"),t("tkto"),t("ma9I"),t("ToJy");var n=t("u1VZ"),s={metaInfo:{title:"Nascar Pool"},data:function(){var i={},o=n[0],t=[],s=o.picks.map((function(i){var s=i.cousin,r=0,e=0;return n.forEach((function(i){i.picks.forEach((function(i){i.cousin==s&&(r+=i.points,e+=i.position,e/=2)}))})),t.push({cousin:s,total:r,average:Math.round(e),points:i.points,current_pick:i.driver,track:o.track,date:o.date}),{name:s,icon:"mdi-link",link:"https://geek.github.io/nascar/"+s.toLowerCase()}}));n.forEach((function(o){o.picks.forEach((function(o){i[o.driver]=i[o.driver]||0,i[o.driver]+=o.points}))})),console.log(i);for(var r={driver:"",points:0},e=0,a=Object.keys(i);e<a.length;e++){var p=a[e],c=i[p];c>r.points&&(r.points=c,r.driver=p)}s=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-link"}].concat(s);var u=t.sort((function(i,o){return i.total>o.total?-1:i.total<o.total?1:0}));return{cousins:s,topDriver:r,driverPoints:i,headers:[{text:"Cousin",align:"start",value:"cousin"},{text:"Cumulative Points",value:"total"},{text:"Average Finish",value:"average"},{text:"Race Points",value:"points"},{text:"Last Driver",value:"current_pick"},{text:"Last Track",value:"track"}],items:t,itemsSorted:u,drawer:null}},methods:{getColor:function(i){return i>800?"red":i>400?"orange":i>200?"green":i>100?"purple":"brown"}}},r=(t("gEGz"),t("KHd+")),e=t("ZUTo"),a=t.n(e),p=t("dJbz"),c=t("QNyc"),u=t("W8H5"),v=t("zCDB"),d=t("j+oE"),l=t("zn5u"),y=t("Ey0z"),h=t("iGBT"),k=t("2hOt"),f=t("XSMC"),m=t("NMP6"),B=t("9sRW"),g=t("93RO"),w=t("Kn9U"),J=Object(r.a)(s,(function(){var i=this,o=i.$createElement,t=i._self._c||o;return t("v-app",[t("v-navigation-drawer",{attrs:{app:""},model:{value:i.drawer,callback:function(o){i.drawer=o},expression:"drawer"}},[t("v-list",{attrs:{dense:"",nav:""}},i._l(i.cousins,(function(o){return t("v-list-item",{key:o.name,attrs:{href:o.link,link:""}},[t("v-list-item-icon",[t("v-icon",[i._v("\n            "+i._s(o.icon)+"\n          ")])],1),t("v-list-item-content",[t("v-list-item-title",[i._v(i._s(o.name))])],1)],1)})),1)],1),t("v-app-bar",{attrs:{app:""}},[t("v-app-bar-nav-icon",{on:{click:function(o){i.drawer=!i.drawer}}}),t("v-toolbar-title",[i._v("Nascar Racing Pool")])],1),t("v-main",[t("v-data-table",{staticClass:"elevation-1",attrs:{headers:i.headers,items:i.items},scopedSlots:i._u([{key:"item.total",fn:function(o){var n=o.item;return[t("v-chip",{attrs:{color:i.getColor(n.total),dark:""}},[i._v("\n          "+i._s(n.total)+"\n        ")])]}},{key:"item.cousin",fn:function(o){var n=o.item;return[t("g-link",{attrs:{to:n.cousin.toLowerCase()}},[i._v(i._s(n.cousin))])]}}])}),t("v-divider"),t("v-list",i._l(i.itemsSorted,(function(o){return t("v-list-item",{key:o.cousin},[t("v-list-item-content",[t("v-list-item-title",[i._v(i._s(o.cousin)+" - "+i._s(o.total))])],1)],1)})),1),t("v-divider"),i._v("\n    Points from drivers:\n    "),t("v-list",i._l(i.driverPoints,(function(o,n){return t("v-list-item",{key:o},[t("v-list-item-content",[t("v-list-item-title",[i._v(i._s(n)+" - "+i._s(o))])],1)],1)})),1),t("p",[i._v("Top Driver: "+i._s(i.topDriver.driver))]),t("p",[i._v("Points: "+i._s(i.topDriver.points))]),t("p"),t("h4",[i._v("Rules")]),t("p",[t("ol",[t("li",[i._v("Pick driver who gets official first - 75 points")]),t("li",[i._v("Pick driver who gets higher than other picks - 60 points")]),t("li",[i._v("2nd - 40 points")]),t("li",[i._v("3rd - 25 points")]),t("li",[i._v("Driver is in last 2 positions - 10 points")])])]),t("p")],1)],1)}),[],!1,null,null,null);o.default=J.exports;a()(J,{VApp:p.a,VAppBar:c.a,VAppBarNavIcon:u.a,VChip:v.a,VDataTable:d.a,VDivider:l.a,VIcon:y.a,VList:h.a,VListItem:k.a,VListItemContent:f.a,VListItemIcon:m.a,VListItemTitle:f.b,VMain:B.a,VNavigationDrawer:g.a,VToolbarTitle:w.a})},rdv8:function(i,o,t){var n=t("Ta7t"),s=Math.floor,r=function(i,o){var t=i.length,p=s(t/2);return t<8?e(i,o):a(i,r(n(i,0,p),o),r(n(i,p),o),o)},e=function(i,o){for(var t,n,s=i.length,r=1;r<s;){for(n=r,t=i[r];n&&o(i[n-1],t)>0;)i[n]=i[--n];n!==r++&&(i[n]=t)}return i},a=function(i,o,t,n){for(var s=o.length,r=t.length,e=0,a=0;e<s||a<r;)i[e+a]=e<s&&a<r?n(o[e],t[a])<=0?o[e++]:t[a++]:e<s?o[e++]:t[a++];return i};i.exports=r},u1VZ:function(i){i.exports=JSON.parse('[{"track":"Sonoma Raceway","date":"June 12, 2022","picks":[{"cousin":"Ryan","driver":"Kurt Busch","points":0,"position":18},{"cousin":"Nathan","driver":"Hamlin","points":0,"position":31},{"cousin":"Wyatt","driver":"Chastain","points":60,"position":7},{"cousin":"Tyler","driver":"Elliott","points":40,"position":8},{"cousin":"Jesse","driver":"Larson","points":25,"position":15},{"cousin":"Jared","driver":"Truex","points":0,"position":26}]},{"track":"Gateway Motorsports Park","date":"June 5, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":75,"position":1},{"cousin":"Nathan","driver":"Bell","points":0,"position":9},{"cousin":"Wyatt","driver":"Blaney","points":25,"position":4},{"cousin":"Tyler","driver":"Elliott","points":0,"position":21},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Jared","driver":"Larson","points":0,"position":12}]},{"track":"Charlotte Motor Speedway","date":"May 29, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":12},{"cousin":"Nathan","driver":"Wallace","points":0,"position":28},{"cousin":"Wyatt","driver":"Kyle Busch","points":40,"position":2},{"cousin":"Tyler","driver":"Kurt Busch","points":0,"position":31},{"cousin":"Jesse","driver":"Hamlin","points":75,"position":1},{"cousin":"Jared","driver":"Elliott","points":0,"position":33}]},{"track":"Texas Motor Speedway","date":"May 23, 2022","picks":[{"cousin":"Ryan","driver":"Larson","points":10,"position":24},{"cousin":"Nathan","driver":"Bell","points":60,"position":10},{"cousin":"Wyatt","driver":"Byron","points":40,"position":11},{"cousin":"Tyler","driver":"Kurt Busch","points":25,"position":13},{"cousin":"Jesse","driver":"Elliott","points":10,"position":23},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":21}]},{"track":"Kansas Speedway","date":"May 15, 2022","picks":[{"cousin":"Ryan","driver":"Bowman","points":0,"position":9},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":14},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":29},{"cousin":"Tyler","driver":"Bell","points":25,"position":5},{"cousin":"Jesse","driver":"Larson","points":60,"position":2},{"cousin":"Jared","driver":"Kyle Busch","points":40,"position":3}]},{"track":"Darlington Raceway","date":"May 8, 2022","picks":[{"cousin":"Ryan","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":34},{"cousin":"Wyatt","driver":"Logano","points":75,"position":1},{"cousin":"Tyler","driver":"Larson","points":10,"position":36},{"cousin":"Jesse","driver":"Bell","points":40,"position":6},{"cousin":"Jared","driver":"Truex","points":25,"position":24}]},{"track":"Dover International Speedway","date":"May 1, 2022","picks":[{"cousin":"Ryan","driver":"Elliott","points":75,"position":1},{"cousin":"Nathan","driver":"Kyle Busch","points":25,"position":7},{"cousin":"Wyatt","driver":"Harvick","points":0,"position":9},{"cousin":"Tyler","driver":"Larson","points":40,"position":6},{"cousin":"Jesse","driver":"Blaney","points":0,"position":26},{"cousin":"Jared","driver":"Hamlin","points":0,"position":21}]},{"track":"Talladega Superspeedway","date":"April 24, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":32},{"cousin":"Nathan","driver":"Bell","points":0,"position":22},{"cousin":"Wyatt","driver":"Blaney","points":60,"position":11},{"cousin":"Tyler","driver":"Wallace","points":25,"position":17},{"cousin":"Jesse","driver":"Keselowski","points":0,"position":23},{"cousin":"Jared","driver":"Byron","points":40,"position":15}]},{"track":"Bristol Motor Speedway","date":"April 17, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":11},{"cousin":"Wyatt","driver":"Bell","points":0,"position":7},{"cousin":"Tyler","driver":"Bowman","points":25,"position":6},{"cousin":"Jesse","driver":"Elliott","points":0,"position":8},{"cousin":"Jared","driver":"Larson","points":40,"position":4}]},{"track":"Richmond Raceway VA","date":"April 3, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":60,"position":3},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":13},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":7},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":9},{"cousin":"Jesse","driver":"Larson","points":25,"position":5},{"cousin":"Jared","driver":"Truex","points":40,"position":4}]},{"track":"Circuit of the Americas","date":"March 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":7},{"cousin":"Nathan","driver":"Allmendinger","points":0,"position":33},{"cousin":"Wyatt","driver":"Larson","points":0,"position":29},{"cousin":"Tyler","driver":"Logano","points":0,"position":31},{"cousin":"Jesse","driver":"Elliott","points":60,"position":4},{"cousin":"Jared","driver":"Blaney","points":40,"position":6}]},{"track":"Atlanta Motor Speedway","date":"March 20, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":25,"position":9},{"cousin":"Nathan","driver":"Elliott","points":60,"position":6},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":17},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Jesse","driver":"Truex","points":40,"position":8},{"cousin":"Jared","driver":"Larson","points":0,"position":30}]},{"track":"Phoenix Raceway","date":"March 13, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":18},{"cousin":"Nathan","driver":"Bell","points":0,"position":26},{"cousin":"Wyatt","driver":"Logano","points":40,"position":8},{"cousin":"Tyler","driver":"Blaney","points":60,"position":4},{"cousin":"Jesse","driver":"Larson","points":0,"position":34},{"cousin":"Jared","driver":"Hamlin","points":25,"position":13}]},{"track":"Las Vegas Motor Speedway","date":"March 6, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":14},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Larson","points":60,"position":2},{"cousin":"Tyler","driver":"Elliott","points":25,"position":9},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":4},{"cousin":"Jared","driver":"Hamlin","points":0,"position":32}]},{"track":"Auto Club Speedway","date":"Feb 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":13},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":27},{"cousin":"Wyatt","driver":"Cindric","points":40,"position":12},{"cousin":"Tyler","driver":"Blaney","points":0,"position":18},{"cousin":"Jesse","driver":"Larson","points":75,"position":1},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":14}]},{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":60,"position":4},{"cousin":"Nathan","driver":"Kyle Busch","points":40,"position":6},{"cousin":"Wyatt","driver":"Keselowski","points":25,"position":9},{"cousin":"Tyler","driver":"Elliott","points":0,"position":10},{"cousin":"Jesse","driver":"Logano","points":0,"position":21},{"cousin":"Jared","driver":"Larson","points":0,"position":32}]}]')}}]);