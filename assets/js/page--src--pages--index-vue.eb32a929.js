(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2Zix":function(t,i,n){var e=n("NC/Y");t.exports=/MSIE|Trident/.test(e)},BNF5:function(t,i,n){var e=n("NC/Y").match(/firefox\/(\d+)/i);t.exports=!!e&&+e[1]},ToJy:function(t,i,n){"use strict";var e=n("I+eb"),r=n("4zBA"),o=n("We1y"),a=n("ewvW"),s=n("B/qT"),c=n("V37c"),u=n("0Dky"),l=n("rdv8"),v=n("pkCn"),p=n("BNF5"),f=n("2Zix"),d=n("LQDL"),h=n("USzg"),k=[],m=r(k.sort),g=r(k.push),_=u((function(){k.sort(void 0)})),w=u((function(){k.sort(null)})),b=v("sort"),y=!u((function(){if(d)return d<70;if(!(p&&p>3)){if(f)return!0;if(h)return h<603;var t,i,n,e,r="";for(t=65;t<76;t++){switch(i=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)k.push({k:i+e,v:n})}for(k.sort((function(t,i){return i.v-t.v})),e=0;e<k.length;e++)i=k[e].k.charAt(0),r.charAt(r.length-1)!==i&&(r+=i);return"DGBEFHACIJK"!==r}}));e({target:"Array",proto:!0,forced:_||!w||!b||!y},{sort:function(t){void 0!==t&&o(t);var i=a(this);if(y)return void 0===t?m(i):m(i,t);var n,e,r=[],u=s(i);for(e=0;e<u;e++)e in i&&g(r,i[e]);for(l(r,function(t){return function(i,n){return void 0===n?-1:void 0===i?1:void 0!==t?+t(i,n)||0:c(i)>c(n)?1:-1}}(t)),n=r.length,e=0;e<n;)i[e]=r[e++];for(;e<u;)delete i[e++];return i}})},USzg:function(t,i,n){var e=n("NC/Y").match(/AppleWebKit\/(\d+)\./);t.exports=!!e&&+e[1]},aK7f:function(t,i,n){},gEGz:function(t,i,n){"use strict";n("aK7f")},iyQ6:function(t,i,n){"use strict";n.r(i);n("2B1R"),n("QWBl"),n("07d7"),n("FZtP"),n("ma9I"),n("ToJy");var e=n("u1VZ"),r={metaInfo:{title:"Nascar Pool"},data:function(){var t=e[0],i=[],n=t.picks.map((function(n){var r=n.cousin,o=0;return e.forEach((function(t){t.picks.forEach((function(t){t.cousin==r&&(o+=t.points)}))})),i.push({cousin:r,total:o,points:n.points,current_pick:n.driver,track:t.track,date:t.date}),{name:r,icon:"mdi-link",link:"https://geek.github.io/nascar/"+r.toLowerCase()}}));return{cousins:n=[{name:"Home",link:"https://geek.github.io/nascar",icon:"mdi-link"}].concat(n),headers:[{text:"Cousin",align:"start",value:"cousin"},{text:"Cumulative Points",value:"total"},{text:"Race Points",value:"points"},{text:"Driver",value:"current_pick"},{text:"Track",value:"track"},{text:"Date",value:"date"}],items:i.sort((function(t,i){return t.total>i.total})),drawer:null}},methods:{getColor:function(t){return t>800?"red":t>400?"orange":t>200?"yellow":t>100?"purple":"brown"}}},o=(n("gEGz"),n("KHd+")),a=n("ZUTo"),s=n.n(a),c=n("dJbz"),u=n("QNyc"),l=n("W8H5"),v=n("zCDB"),p=n("j+oE"),f=n("zn5u"),d=n("Ey0z"),h=n("iGBT"),k=n("2hOt"),m=n("XSMC"),g=n("NMP6"),_=n("9sRW"),w=n("93RO"),b=n("Kn9U"),y=Object(o.a)(r,(function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-app",[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(i){return n("v-list-item",{key:i.name,attrs:{href:i.link,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("\n            "+t._s(i.icon)+"\n          ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(i.name))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(i){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Nascar Racing Pool")])],1),n("v-main",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.total",fn:function(i){var e=i.item;return[n("v-chip",{attrs:{color:t.getColor(e.total),dark:""}},[t._v("\n          "+t._s(e.total)+"\n        ")])]}},{key:"item.cousin",fn:function(i){var e=i.item;return[n("g-link",{attrs:{to:e.cousin.toLowerCase()}},[t._v(t._s(e.cousin))])]}}])}),n("v-divider"),n("v-list",t._l(t.items,(function(i){return n("v-list-item",{key:i.cousin},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(i.cousin)+" - "+t._s(i.total))])],1)],1)})),1),n("v-divider"),n("p",{staticClass:"pa-5"}),n("h4",[t._v("Rules")]),n("p",[n("ol",[n("li",[t._v("Pick driver who gets official first - 75 points")]),n("li",[t._v("Pick driver who gets higher than other picks - 60 points")]),n("li",[t._v("2nd - 40 points")]),n("li",[t._v("3rd - 25 points")]),n("li",[t._v("Driver is in last 2 positions - 10 points")])])]),n("p")],1)],1)}),[],!1,null,null,null);i.default=y.exports;s()(y,{VApp:c.a,VAppBar:u.a,VAppBarNavIcon:l.a,VChip:v.a,VDataTable:p.a,VDivider:f.a,VIcon:d.a,VList:h.a,VListItem:k.a,VListItemContent:m.a,VListItemIcon:g.a,VListItemTitle:m.b,VMain:_.a,VNavigationDrawer:w.a,VToolbarTitle:b.a})},rdv8:function(t,i,n){var e=n("Ta7t"),r=Math.floor,o=function(t,i){var n=t.length,c=r(n/2);return n<8?a(t,i):s(t,o(e(t,0,c),i),o(e(t,c),i),i)},a=function(t,i){for(var n,e,r=t.length,o=1;o<r;){for(e=o,n=t[o];e&&i(t[e-1],n)>0;)t[e]=t[--e];e!==o++&&(t[e]=n)}return t},s=function(t,i,n,e){for(var r=i.length,o=n.length,a=0,s=0;a<r||s<o;)t[a+s]=a<r&&s<o?e(i[a],n[s])<=0?i[a++]:n[s++]:a<r?i[a++]:n[s++];return t};t.exports=o},u1VZ:function(t){t.exports=JSON.parse('[{"track":"Daytona 500","date":"Feb 20, 2022","picks":[{"cousin":"Ryan","driver":"Blaney","points":60,"position":4},{"cousin":"Nathan","driver":"Kyle Busch","points":40,"position":6},{"cousin":"Wyatt","driver":"Keselowski","points":25,"position":9},{"cousin":"Tyler","driver":"Elliott","points":0,"position":10},{"cousin":"Jesse","driver":"Logano","points":0,"position":21},{"cousin":"Jared","driver":"Larson","points":0,"position":32}]}]')}}]);