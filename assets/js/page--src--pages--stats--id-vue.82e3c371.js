(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{LmVR:function(t,n,a){"use strict";a.r(n);a("2B1R"),a("fbCW"),a("07d7"),a("ma9I");var i=a("u1VZ"),e={metaInfo:{title:"Stats"},data:function(){var t=this.$route.params.id,n=i[0].picks.map((function(t){var n=t.cousin;return{name:n,icon:"mdi-link",link:"https://geek.github.io/nascar/stats/"+n}})),a=i.map((function(n){var a=n.picks.find((function(n){return n.cousin===t}))||{};return{track:n.track,driver:a.driver,points:a.points}}));console.log(i),console.log(t);return{cousins:n=[{name:"home",link:"/",icon:"mdi-link"}].concat(n),headers:[{text:"Race Points",value:"points"},{text:"Driver",value:"driver"},{text:"Track",value:"track"}],items:a,drawer:null}},methods:{getColor:function(t){return t>60?"red":t>50?"orange":t>30?"yellow":t>20?"purple":"brown"}}},r=(a("aKMr"),a("KHd+")),o=a("ZUTo"),s=a.n(o),c=a("dJbz"),l=a("QNyc"),u=a("W8H5"),p=a("zCDB"),v=a("j+oE"),d=a("Ey0z"),f=a("iGBT"),m=a("2hOt"),k=a("XSMC"),b=a("NMP6"),h=a("9sRW"),w=a("93RO"),V=a("Kn9U"),y=Object(r.a)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},t._l(t.cousins,(function(n){return a("v-list-item",{key:n.name,attrs:{href:n.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("\n            "+t._s(n.icon)+"\n          ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(n.name))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(n){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Nascar Racing "+t._s(t.$route.params.cousin)+" ")])],1),a("v-main",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"item.points",fn:function(n){var i=n.item;return[a("v-chip",{attrs:{color:t.getColor(i.points),dark:""}},[t._v("\n          "+t._s(i.points)+"\n        ")])]}}])})],1)],1)}),[],!1,null,null,null);n.default=y.exports;s()(y,{VApp:c.a,VAppBar:l.a,VAppBarNavIcon:u.a,VChip:p.a,VDataTable:v.a,VIcon:d.a,VList:f.a,VListItem:m.a,VListItemContent:k.a,VListItemIcon:b.a,VListItemTitle:k.b,VMain:h.a,VNavigationDrawer:w.a,VToolbarTitle:V.a})},aKMr:function(t,n,a){"use strict";a("b0xp")},b0xp:function(t,n,a){},fbCW:function(t,n,a){"use strict";var i=a("I+eb"),e=a("tycR").find,r=a("RNIs"),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),r("find")},u1VZ:function(t){t.exports=JSON.parse('[{"track":"Daytona 500","picks":[{"cousin":"Wyatt","driver":"Kyle Larson","points":65},{"cousin":"Ryan","driver":"Kyle Busch","points":25},{"cousin":"Tyler","driver":"Keselowski","points":0}]}]')}}]);