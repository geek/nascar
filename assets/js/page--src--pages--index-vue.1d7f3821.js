(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2Zix":function(t,i,n){var r=n("NC/Y");t.exports=/MSIE|Trident/.test(r)},"3fBX":function(t){t.exports=JSON.parse('[{"track":"Martinsville Speedway","date":"October 30, 2022","picks":[{"cousin":"Sarah","driver":"Hamlin","points":0,"position":1},{"cousin":"Ryan","driver":"Logano","points":0,"position":1},{"cousin":"Nathan","driver":"Harvick","points":0,"position":1},{"cousin":"Wyatt","driver":"Elliott","points":0,"position":3},{"cousin":"Tyler","driver":"Blaney","points":0,"position":1},{"cousin":"Jesse","driver":"Larson","points":0,"position":1},{"cousin":"Jared","driver":"Bowman","points":0,"position":1}]}]')},BNF5:function(t,i,n){var r=n("NC/Y").match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},IYbh:function(t,i,n){"use strict";(function(t){n("2B1R"),n("QWBl"),n("07d7"),n("FZtP"),n("tkto"),n("ma9I"),n("ToJy");var r=n("3fBX");i.a={metaInfo:{title:"Nascar Pool"},data:function(){var i={},n=r[0],e=[],o=n.picks.map((function(i){var o=i.cousin,a=0,s=0;return r.forEach((function(t){t.picks.forEach((function(t){t.cousin==o&&(a+=t.points,s+=t.position)}))})),e.push({cousin:o,total:a,average:Math.round(s/r.length),points:i.points,current_pick:i.driver,track:n.track,date:n.date}),{name:o,icon:"mdi-link",link:t.env.GRIDSOME_BASE_URL+"/"+o.toLowerCase()}}));r.forEach((function(t){t.picks.forEach((function(t){i[t.driver]=i[t.driver]||0,i[t.driver]+=t.points}))})),console.log(i);for(var a={driver:"",points:0},s=0,c=Object.keys(i);s<c.length;s++){var v=c[s],l=i[v];l>a.points&&(a.points=l,a.driver=v)}o=[{name:"Home",link:t.env.GRIDSOME_BASE_URL,icon:"mdi-link"}].concat(o),o=[{name:"2022 Results",link:t.env.GRIDSOME_BASE_URL+"/2022",icon:"mdi-link"}].concat(o);var u=e.sort((function(t,i){return t.total>i.total?-1:t.total<i.total?1:0}));return{cousins:o,topDriver:a,driverPoints:i,headers:[{text:"Cousin",align:"start",value:"cousin"},{text:"Cumulative Points",value:"total"},{text:"Average Finish",value:"average"},{text:"Race Points",value:"points"},{text:"Last Driver",value:"current_pick"},{text:"Last Track",value:"track"}],items:e,itemsSorted:u,drawer:null}},methods:{getColor:function(t){return t>800?"red":t>400?"orange":t>200?"green":t>100?"purple":"brown"}}}}).call(this,n("8oxB"))},ToJy:function(t,i,n){"use strict";var r=n("I+eb"),e=n("4zBA"),o=n("We1y"),a=n("ewvW"),s=n("B/qT"),c=n("V37c"),v=n("0Dky"),l=n("rdv8"),u=n("pkCn"),p=n("BNF5"),d=n("2Zix"),f=n("LQDL"),h=n("USzg"),m=[],k=e(m.sort),_=e(m.push),g=v((function(){m.sort(void 0)})),w=v((function(){m.sort(null)})),b=u("sort"),y=!v((function(){if(f)return f<70;if(!(p&&p>3)){if(d)return!0;if(h)return h<603;var t,i,n,r,e="";for(t=65;t<76;t++){switch(i=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)m.push({k:i+r,v:n})}for(m.sort((function(t,i){return i.v-t.v})),r=0;r<m.length;r++)i=m[r].k.charAt(0),e.charAt(e.length-1)!==i&&(e+=i);return"DGBEFHACIJK"!==e}}));r({target:"Array",proto:!0,forced:g||!w||!b||!y},{sort:function(t){void 0!==t&&o(t);var i=a(this);if(y)return void 0===t?k(i):k(i,t);var n,r,e=[],v=s(i);for(r=0;r<v;r++)r in i&&_(e,i[r]);for(l(e,function(t){return function(i,n){return void 0===n?-1:void 0===i?1:void 0!==t?+t(i,n)||0:c(i)>c(n)?1:-1}}(t)),n=e.length,r=0;r<n;)i[r]=e[r++];for(;r<v;)delete i[r++];return i}})},USzg:function(t,i,n){var r=n("NC/Y").match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},aK7f:function(t,i,n){},gEGz:function(t,i,n){"use strict";n("aK7f")},iyQ6:function(t,i,n){"use strict";n.r(i);var r=n("IYbh").a,e=(n("gEGz"),n("KHd+")),o=n("ZUTo"),a=n.n(o),s=n("dJbz"),c=n("QNyc"),v=n("W8H5"),l=n("zCDB"),u=n("j+oE"),p=n("zn5u"),d=n("Ey0z"),f=n("iGBT"),h=n("2hOt"),m=n("XSMC"),k=n("NMP6"),_=n("9sRW"),g=n("93RO"),w=n("Kn9U"),b=Object(e.a)(r,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(i){return n("v-list-item",{key:i.name,attrs:{href:i.link,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("\n            "+t._s(i.icon)+"\n          ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(i.name))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(i){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Nascar Racing Pool")])],1),n("v-main",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.total",fn:function(i){var r=i.item;return[n("v-chip",{attrs:{color:t.getColor(r.total),dark:""}},[t._v("\n          "+t._s(r.total)+"\n        ")])]}},{key:"item.cousin",fn:function(i){var r=i.item;return[n("g-link",{attrs:{to:r.cousin.toLowerCase()}},[t._v(t._s(r.cousin))])]}}])}),n("v-divider"),n("v-list",t._l(t.itemsSorted,(function(i){return n("v-list-item",{key:i.cousin},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(i.cousin)+" - "+t._s(i.total))])],1)],1)})),1),n("v-divider"),t._v("\n    Points from drivers:\n    "),n("v-list",t._l(t.driverPoints,(function(i,r){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(r)+" - "+t._s(i))])],1)],1)})),1),n("p",[t._v("Top Driver: "+t._s(t.topDriver.driver))]),n("p",[t._v("Points: "+t._s(t.topDriver.points))]),n("p"),n("h4",[t._v("Rules")]),n("p",[n("ol",[n("li",[t._v("Pick driver who gets official first - 75 points")]),n("li",[t._v("Pick driver who gets higher than other picks - 60 points")]),n("li",[t._v("2nd - 40 points")]),n("li",[t._v("3rd - 25 points")]),n("li",[t._v("Driver is in last 2 positions - 10 points")])])]),n("p")],1)],1)}),[],!1,null,null,null);i.default=b.exports;a()(b,{VApp:s.a,VAppBar:c.a,VAppBarNavIcon:v.a,VChip:l.a,VDataTable:u.a,VDivider:p.a,VIcon:d.a,VList:f.a,VListItem:h.a,VListItemContent:m.a,VListItemIcon:k.a,VListItemTitle:m.b,VMain:_.a,VNavigationDrawer:g.a,VToolbarTitle:w.a})},rdv8:function(t,i,n){var r=n("Ta7t"),e=Math.floor,o=function(t,i){var n=t.length,c=e(n/2);return n<8?a(t,i):s(t,o(r(t,0,c),i),o(r(t,c),i),i)},a=function(t,i){for(var n,r,e=t.length,o=1;o<e;){for(r=o,n=t[o];r&&i(t[r-1],n)>0;)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},s=function(t,i,n,r){for(var e=i.length,o=n.length,a=0,s=0;a<e||s<o;)t[a+s]=a<e&&s<o?r(i[a],n[s])<=0?i[a++]:n[s++]:a<e?i[a++]:n[s++];return t};t.exports=o}}]);