(function(t){function a(a){for(var i,o,s=a[0],c=a[1],p=a[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(a);while(d.length)d.shift()();return r.push.apply(r,p||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={app:0},r=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var p=0;p<s.length;p++)a(s[p]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("c21b")},"1eeb":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"column",staticStyle:{"background-color":"#bbb"}},[e("ol",t._l(t.avatarList,function(a){return e("li",{key:a.id,staticClass:"float-child",staticStyle:{"list-style-position":"inside"}},[e("div",{staticClass:"items"},[e("img",{staticClass:"image",staticStyle:{width:"6vw",height:"6vw"},attrs:{src:a.avatar,alt:"item.name",width:"70",heigth:"70"}}),e("br"),e("p",{staticClass:"text"},[t._v(t._s(a.name))])])])}))]),e("div",{staticClass:"column"}),e("div",{staticClass:"column",staticStyle:{"background-color":"#aaa"}},[e("draggable",{attrs:{list:t.users,animation:200,"ghost-class":"moving-card",group:"users",tag:"ol"}},t._l(t.users,function(a){return e("user-card",{key:a.id,attrs:{user:a},on:{upate:t.update,"on-edit":t.onEdit,"on-delete":t.onDelete}})}))],1),t._m(0)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column"},[e("h1",[t._v("Let's arrnage these items")])])}],o=(e("7f7f"),e("b76a")),s=e.n(o),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"float-child",staticStyle:{"list-style-position":"inside"}},[e("div",{staticClass:"items"},[e("img",{staticClass:"image",staticStyle:{width:"6vw",height:"6vw"},attrs:{src:t.user.avatar,alt:"user.name",width:"70",heigth:"70"}}),e("br"),e("p",{staticClass:"text"},[t._v(t._s(t.user.name))])])])},p=[],l=e("0a35"),u={components:{EditIcon:l["a"],Trash2Icon:l["b"]},props:{user:{type:Object,default:function(){return{}}}}},d=u,m=(e("c865"),e("2877")),f=Object(m["a"])(d,c,p,!1,null,null,null),h=f.exports,v={name:"App",components:{draggable:s.a,UserCard:h},data:function(){return{users:[{id:1,name:"a map of New Mexico",avatar:"https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"},{id:2,name:"The book- Edible Animals of the Desert",avatar:"https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"},{id:3,name:"duct tape",avatar:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Duct_tape_2016.jpg"},{id:4,name:"first aid kit",avatar:"https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"},{id:5,name:"cosmetic mirror",avatar:"https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"},{id:6,name:"flashlight (four-battery size)",avatar:"https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"},{id:7,name:"magnetic compass",avatar:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"},{id:8,name:"vodka 2 quart flask",avatar:"https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"},{id:9,name:"plastic raincoat",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"}],avatarList:[{id:1,name:"a map of New Mexico",avatar:"https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"},{id:2,name:"The book- Edible Animals of the Desert",avatar:"https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"},{id:3,name:"duct tape",avatar:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Duct_tape_2016.jpg"},{id:4,name:"first aid kit",avatar:"https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"},{id:5,name:"cosmetic mirror",avatar:"https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"},{id:6,name:"flashlight (four-battery size)",avatar:"https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"},{id:7,name:"magnetic compass",avatar:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"},{id:8,name:"vodka 2 quart flask",avatar:"https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"},{id:9,name:"plastic raincoat",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"}]}},methods:{onEdit:function(t){alert("Editing ".concat(t.name))},onDelete:function(t){alert("Deleting ".concat(t.name))},update:function(){alert("Prnting ".concat(JSON.stringify(this.users)))}}},g=v,b=(e("034f"),Object(m["a"])(g,n,r,!1,null,null,null)),w=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(w)}}).$mount("#app")},c21b:function(t,a,e){},c865:function(t,a,e){"use strict";e("1eeb")}});
//# sourceMappingURL=app.202588c1.js.map