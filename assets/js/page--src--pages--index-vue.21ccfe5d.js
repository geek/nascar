(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2Zix":function(i,t,o){var n=o("NC/Y");i.exports=/MSIE|Trident/.test(n)},BNF5:function(i,t,o){var n=o("NC/Y").match(/firefox\/(\d+)/i);i.exports=!!n&&+n[1]},ToJy:function(i,t,o){"use strict";var n=o("I+eb"),r=o("4zBA"),s=o("We1y"),e=o("ewvW"),a=o("B/qT"),c=o("V37c"),p=o("0Dky"),u=o("rdv8"),v=o("pkCn"),l=o("BNF5"),d=o("2Zix"),f=o("LQDL"),h=o("USzg"),y=[],k=r(y.sort),m=r(y.push),g=p((function(){y.sort(void 0)})),w=p((function(){y.sort(null)})),_=v("sort"),B=!p((function(){if(f)return f<70;if(!(l&&l>3)){if(d)return!0;if(h)return h<603;var i,t,o,n,r="";for(i=65;i<76;i++){switch(t=String.fromCharCode(i),i){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(n=0;n<47;n++)y.push({k:t+n,v:o})}for(y.sort((function(i,t){return t.v-i.v})),n=0;n<y.length;n++)t=y[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));n({target:"Array",proto:!0,forced:g||!w||!_||!B},{sort:function(i){void 0!==i&&s(i);var t=e(this);if(B)return void 0===i?k(t):k(t,i);var o,n,r=[],p=a(t);for(n=0;n<p;n++)n in t&&m(r,t[n]);for(u(r,function(i){return function(t,o){return void 0===o?-1:void 0===t?1:void 0!==i?+i(t,o)||0:c(t)>c(o)?1:-1}}(i)),o=r.length,n=0;n<o;)t[n]=r[n++];for(;n<p;)delete t[n++];return t}})},USzg:function(i,t,o){var n=o("NC/Y").match(/AppleWebKit\/(\d+)\./);i.exports=!!n&&+n[1]},aK7f:function(i,t,o){},gEGz:function(i,t,o){"use strict";o("aK7f")},iyQ6:function(i,t,o){"use strict";o.r(t);o("2B1R"),o("QWBl"),o("07d7"),o("FZtP"),o("tkto"),o("ma9I"),o("ToJy");var n=o("u1VZ"),r={metaInfo:{title:"Nascar Pool"},data:function(){var i={},t=n[0],o=[],r=t.picks.map((function(i){var r=i.cousin,s=0,e=0;return n.forEach((function(i){i.picks.forEach((function(i){i.cousin==r&&(s+=i.points,e+=i.position,e/=2)}))})),o.push({cousin:r,total:s,average:Math.round(e),points:i.points,current_pick:i.driver,track:t.track,date:t.date}),{name:r,icon:"mdi-link",link:"https://geek.github.io/nascar/"+r.toLowerCase()}}));n.forEach((function(t){t.picks.forEach((function(t){i[t.driver]=i[t.driver]||0,i[t.driver]+=t.points}))})),console.log(i);for(var s={driver:"",points:0},e=0,a=Object.keys(i);e<a.length;e++){var c=a[e],p=i[c];p>s.points&&(s.points=p,s.driver=c)}r=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-link"}].concat(r);var u=o.sort((function(i,t){return i.total>t.total?-1:i.total<t.total?1:0}));return{cousins:r,topDriver:s,driverPoints:i,headers:[{text:"Cousin",align:"start",value:"cousin"},{text:"Cumulative Points",value:"total"},{text:"Average Finish",value:"average"},{text:"Race Points",value:"points"},{text:"Last Driver",value:"current_pick"},{text:"Last Track",value:"track"}],items:o,itemsSorted:u,drawer:null}},methods:{getColor:function(i){return i>800?"red":i>400?"orange":i>200?"green":i>100?"purple":"brown"}}},s=(o("gEGz"),o("KHd+")),e=o("ZUTo"),a=o.n(e),c=o("dJbz"),p=o("QNyc"),u=o("W8H5"),v=o("zCDB"),l=o("j+oE"),d=o("zn5u"),f=o("Ey0z"),h=o("iGBT"),y=o("2hOt"),k=o("XSMC"),m=o("NMP6"),g=o("9sRW"),w=o("93RO"),_=o("Kn9U"),B=Object(s.a)(r,(function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("v-app",[o("v-navigation-drawer",{attrs:{app:""},model:{value:i.drawer,callback:function(t){i.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{dense:"",nav:""}},i._l(i.cousins,(function(t){return o("v-list-item",{key:t.name,attrs:{href:t.link,link:""}},[o("v-list-item-icon",[o("v-icon",[i._v("\n            "+i._s(t.icon)+"\n          ")])],1),o("v-list-item-content",[o("v-list-item-title",[i._v(i._s(t.name))])],1)],1)})),1)],1),o("v-app-bar",{attrs:{app:""}},[o("v-app-bar-nav-icon",{on:{click:function(t){i.drawer=!i.drawer}}}),o("v-toolbar-title",[i._v("Nascar Racing Pool")])],1),o("v-main",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:i.headers,items:i.items},scopedSlots:i._u([{key:"item.total",fn:function(t){var n=t.item;return[o("v-chip",{attrs:{color:i.getColor(n.total),dark:""}},[i._v("\n          "+i._s(n.total)+"\n        ")])]}},{key:"item.cousin",fn:function(t){var n=t.item;return[o("g-link",{attrs:{to:n.cousin.toLowerCase()}},[i._v(i._s(n.cousin))])]}}])}),o("v-divider"),o("v-list",i._l(i.itemsSorted,(function(t){return o("v-list-item",{key:t.cousin},[o("v-list-item-content",[o("v-list-item-title",[i._v(i._s(t.cousin)+" - "+i._s(t.total))])],1)],1)})),1),o("v-divider"),i._v("\n    Points from drivers:\n    "),o("v-list",i._l(i.driverPoints,(function(t,n){return o("v-list-item",{key:t},[o("v-list-item-content",[o("v-list-item-title",[i._v(i._s(n)+" - "+i._s(t))])],1)],1)})),1),o("p",[i._v("Top Driver: "+i._s(i.topDriver.driver))]),o("p",[i._v("Points: "+i._s(i.topDriver.points))]),o("p"),o("h4",[i._v("Rules")]),o("p",[o("ol",[o("li",[i._v("Pick driver who gets official first - 75 points")]),o("li",[i._v("Pick driver who gets higher than other picks - 60 points")]),o("li",[i._v("2nd - 40 points")]),o("li",[i._v("3rd - 25 points")]),o("li",[i._v("Driver is in last 2 positions - 10 points")])])]),o("p")],1)],1)}),[],!1,null,null,null);t.default=B.exports;a()(B,{VApp:c.a,VAppBar:p.a,VAppBarNavIcon:u.a,VChip:v.a,VDataTable:l.a,VDivider:d.a,VIcon:f.a,VList:h.a,VListItem:y.a,VListItemContent:k.a,VListItemIcon:m.a,VListItemTitle:k.b,VMain:g.a,VNavigationDrawer:w.a,VToolbarTitle:_.a})},rdv8:function(i,t,o){var n=o("Ta7t"),r=Math.floor,s=function(i,t){var o=i.length,c=r(o/2);return o<8?e(i,t):a(i,s(n(i,0,c),t),s(n(i,c),t),t)},e=function(i,t){for(var o,n,r=i.length,s=1;s<r;){for(n=s,o=i[s];n&&t(i[n-1],o)>0;)i[n]=i[--n];n!==s++&&(i[n]=o)}return i},a=function(i,t,o,n){for(var r=t.length,s=o.length,e=0,a=0;e<r||a<s;)i[e+a]=e<r&&a<s?n(t[e],o[a])<=0?t[e++]:o[a++]:e<r?t[e++]:o[a++];return i};i.exports=s},u1VZ:function(i){i.exports=JSON.parse('[{"track":"Talladega Superspeedway","date":"April 24, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":32},{"cousin":"Nathan","driver":"Bell","points":0,"position":22},{"cousin":"Wyatt","driver":"Blaney","points":60,"position":11},{"cousin":"Tyler","driver":"Wallace","points":25,"position":17},{"cousin":"Jesse","driver":"Keselowski","points":0,"position":23},{"cousin":"Jared","driver":"Byron","points":40,"position":15}]},{"track":"Bristol Motor Speedway","date":"April 17, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":60,"position":2},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":11},{"cousin":"Wyatt","driver":"Bell","points":0,"position":7},{"cousin":"Tyler","driver":"Bowman","points":25,"position":6},{"cousin":"Jesse","driver":"Elliott","points":0,"position":8},{"cousin":"Jared","driver":"Larson","points":40,"position":4}]},{"track":"Richmond Raceway VA","date":"April 3, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":60,"position":3},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":13},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":7},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":9},{"cousin":"Jesse","driver":"Larson","points":25,"position":5},{"cousin":"Jared","driver":"Truex","points":40,"position":4}]},{"track":"Circuit of the Americas","date":"March 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":7},{"cousin":"Nathan","driver":"Allmendinger","points":0,"position":33},{"cousin":"Wyatt","driver":"Larson","points":0,"position":29},{"cousin":"Tyler","driver":"Logano","points":0,"position":31},{"cousin":"Jesse","driver":"Elliott","points":60,"position":4},{"cousin":"Jared","driver":"Blaney","points":40,"position":6}]},{"track":"Atlanta Motor Speedway","date":"March 20, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":25,"position":9},{"cousin":"Nathan","driver":"Elliott","points":60,"position":6},{"cousin":"Wyatt","driver":"Blaney","points":0,"position":17},{"cousin":"Tyler","driver":"Kyle Busch","points":0,"position":33},{"cousin":"Jesse","driver":"Truex","points":40,"position":8},{"cousin":"Jared","driver":"Larson","points":0,"position":30}]},{"track":"Phoenix Raceway","date":"March 13, 2022","picks":[{"cousin":"Ryan","driver":"Byron","points":0,"position":18},{"cousin":"Nathan","driver":"Bell","points":0,"position":26},{"cousin":"Wyatt","driver":"Logano","points":40,"position":8},{"cousin":"Tyler","driver":"Blaney","points":60,"position":4},{"cousin":"Jesse","driver":"Larson","points":0,"position":34},{"cousin":"Jared","driver":"Hamlin","points":25,"position":13}]},{"track":"Las Vegas Motor Speedway","date":"March 6, 2022","picks":[{"cousin":"Ryan","driver":"Logano","points":0,"position":14},{"cousin":"Nathan","driver":"Harvick","points":0,"position":12},{"cousin":"Wyatt","driver":"Larson","points":60,"position":2},{"cousin":"Tyler","driver":"Elliott","points":25,"position":9},{"cousin":"Jesse","driver":"Kyle Busch","points":40,"position":4},{"cousin":"Jared","driver":"Hamlin","points":0,"position":32}]},{"track":"Auto Club Speedway","date":"Feb 27, 2022","picks":[{"cousin":"Ryan","driver":"Truex","points":25,"position":13},{"cousin":"Nathan","driver":"Keselowski","points":0,"position":27},{"cousin":"Wyatt","driver":"Cindric","points":40,"position":12},{"cousin":"Tyler","driver":"Blaney","points":0,"position":18},{"cousin":"Jesse","driver":"Larson","points":75,"position":1},{"cousin":"Jared","driver":"Kyle Busch","points":0,"position":14}]},{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":60,"position":4},{"cousin":"Nathan","driver":"Kyle Busch","points":40,"position":6},{"cousin":"Wyatt","driver":"Keselowski","points":25,"position":9},{"cousin":"Tyler","driver":"Elliott","points":0,"position":10},{"cousin":"Jesse","driver":"Logano","points":0,"position":21},{"cousin":"Jared","driver":"Larson","points":0,"position":32}]}]')}}]);