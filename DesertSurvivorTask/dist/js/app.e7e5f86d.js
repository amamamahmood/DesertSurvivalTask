(function(t){function e(e){for(var i,o,r=e[0],l=e[1],d=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("c21b")},"1eeb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i,a,s,o,r,l=n("2b0e"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"column",staticStyle:{"background-color":"#bbb",display:"none"},attrs:{id:"avatarRating"}},[n("h3",[t._v("Avatar's Rankings")]),n("ol",t._l(t.avatarList,function(e){return n("li",{key:e.id,staticClass:"float-child",staticStyle:{"list-style-position":"inside"}},[n("div",{staticClass:"items"},[n("img",{staticClass:"image",staticStyle:{width:"6vw",height:"6vw"},attrs:{src:e.avatar,alt:"item.name",width:"70",heigth:"70"}}),n("br"),n("p",{staticClass:"text"},[t._v(t._s(e.name))])])])}))]),n("div",{staticClass:"column3"},[n("h1",{attrs:{id:"heading"}},[t._v(" Desert Survival Task ")]),n("h2",{staticClass:"text",attrs:{id:"intro"}},[t._v("\n                Your bus has\n                crashed in the desert of New Mexico and you have following nine items. Your task is to rank nine items in order\n                of importance for survival. Are you ready to begin?\n            ")]),n("br"),n("button",{staticClass:"button",staticStyle:{display:"inline-block"},attrs:{id:"start"},on:{click:t.startInitialRanking}},[t._v("See the items")]),n("br")]),t._m(0),n("div",{staticClass:"column3"},[n("h1",{staticStyle:{display:"none"},attrs:{id:"drag_inst"}},[t._v("The agent tries to convince the participant about next item")]),n("br"),n("h2",{staticClass:"text",staticStyle:{display:"none"},attrs:{id:"intro2"}}),n("br"),n("button",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"drag",width:"100px"},on:{click:t.makeDraggable}},[t._v("Update your ranking")]),t._v("\n                \n            "),n("button",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"noDrag",width:"100px"},on:{click:t.skipUpdating}},[t._v("Continue without updating")]),n("br"),n("button",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"begin"},on:{click:t.doneInitialRanking}},[t._v("Done Ranking? Continue")]),n("br"),n("button",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"interact"},on:{click:t.beginInteraction}},[t._v("Start Interaction")]),n("br"),n("button",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"done_drag"},on:{click:t.doneDragging}},[t._v("Done Updating? Continue")]),n("br"),n("button",{staticClass:"button",staticStyle:{display:"none"},attrs:{id:"submit"},on:{click:t.submitRankings}},[t._v("Submit Final Rankings")])]),n("div",{staticClass:"column2",staticStyle:{"background-color":"#aaa",display:"none"},attrs:{id:"user_list"}},[n("h3",{staticClass:"text"},[t._v("Your Rankings")]),n("draggable",{attrs:{id:"items_list",list:t.users,animation:200,disabled:!t.enabled,"ghost-class":"moving-card",group:"users",tag:"ol"},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}}},t._l(t.users,function(e){return n("user-card",{key:e.id,attrs:{user:e},on:{upate:t.update,"on-edit":t.onEdit,"on-delete":t.onDelete}})}))],1)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column3",attrs:{id:"avatar"}},[n("br")])}],u=(n("7f7f"),n("55dd"),n("b76a")),p=n.n(u),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"float-child",staticStyle:{"list-style-position":"inside"}},[n("div",{staticClass:"items"},[n("img",{staticClass:"image",staticStyle:{width:"6vw",height:"6vw"},attrs:{src:t.user.avatar,alt:"user.name",width:"70",heigth:"70"}}),n("br"),n("p",{staticClass:"text"},[t._v(t._s(t.user.name))])])])},g=[],y=n("0a35"),h={components:{EditIcon:y["a"],Trash2Icon:y["b"]},props:{user:{type:Object,default:function(){return{}}}}},v=h,f=(n("c865"),n("2877")),b=Object(f["a"])(v,m,g,!1,null,null,null),k=b.exports,w=n("5a89"),_=n("4721"),x=n("8710"),E=n("ef20"),S=0,I=[0,1,2,3,4,5,6,7,8],C=[4,5,0,1,2,7,3,8,6],B="idle",j=new w["h"];function D(){var t=document.createElement("div");t.classList.add("columnAvatar"),t.id="avatardiv",document.body.appendChild(t),i=new w["I"](45,t.clientWidth/t.clientHeight,1,2e3),i.position.set(50,150,250),a=new w["P"],a.background=new w["i"](16777215),a.fog=new w["q"](16777215,200,1e3);var e=new w["t"](16777215,4473924);e.position.set(0,200,0),a.add(e);var n=new w["k"](16777215,1,0);n.position.set(50,100,200),a.add(n);var l=new w["k"](16777215);l.position.set(0,200,100),l.castShadow=!0,l.shadow.camera.top=180,l.shadow.camera.bottom=-100,l.shadow.camera.left=-120,l.shadow.camera.right=120,a.add(l);var d=new w["C"](new w["J"](2e3,2e3),new w["E"]({color:10066329,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,a.add(d);var c,u=new w["r"](2e3,20,0,0);u.material.opacity=.2,u.material.transparent=!0;var p=new x["a"];"talking"==B?c="david_talking.fbx":"idle"==B&&(c="david_idle.fbx"),p.load(c,function(t){r=new w["c"](t);var e=r.clipAction(t.animations[0]);e.play(),t.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),a.add(t)}),s=new w["cb"]({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(t.clientWidth,t.clientHeight),s.shadowMap.enabled=!0,s.setClearColor(16777215,0),t.appendChild(s.domElement);var m=new _["a"](i,s.domElement);m.target.set(0,100,0),m.update(),window.addEventListener("resize",T),o=new E["a"],t.appendChild(o.dom)}function T(){var t=document.getElementById("avatardiv");i.aspect=t.clientWidth/t.clientHeight,i.updateProjectionMatrix(),s.setSize(t.clientWidth,t.clientHeight)}function O(){requestAnimationFrame(O);var t=j.getDelta();r&&r.update(t),s.render(a,i),o.update()}var P=window.speechSynthesis,M=window.speechSynthesis.getVoices;function R(t,e){t.voice=M[e],P.speak(t)}var A={name:"App",components:{draggable:p.a,UserCard:k},data:function(){return{enabled:!1,users:[{id:1,name:"a map of New Mexico",avatar:"https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"},{id:2,name:"The book- Edible Animals of the Desert",avatar:"https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"},{id:3,name:"duct tape",avatar:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Duct_tape_2016.jpg"},{id:4,name:"first aid kit",avatar:"https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"},{id:5,name:"cosmetic mirror",avatar:"https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"},{id:6,name:"flashlight (four-battery size)",avatar:"https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"},{id:7,name:"magnetic compass",avatar:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"},{id:8,name:"vodka 2 quart flask",avatar:"https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"},{id:9,name:"plastic raincoat",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"}],avatarList:[{id:1,name:"a map of New Mexico",avatar:"https://p1.pxfuel.com/preview/963/223/786/map-usa-map-usa-united.jpg"},{id:2,name:"The book- Edible Animals of the Desert",avatar:"https://p0.pxfuel.com/preview/962/798/408/book-book-pages-novel-paperback.jpg"},{id:3,name:"duct tape",avatar:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Duct_tape_2016.jpg"},{id:4,name:"first aid kit",avatar:"https://cdn.pixabay.com/photo/2018/09/22/05/32/first-aid-3694546_1280.jpg"},{id:5,name:"cosmetic mirror",avatar:"https://www.maxpixel.net/static/photo/1x/Silvery-Cosmetics-Mirror-Make-Up-Reflection-1472857.jpg"},{id:6,name:"flashlight (four-battery size)",avatar:"https://cdn.pixabay.com/photo/2018/05/11/17/07/flashlight-3391057_1280.jpg"},{id:7,name:"magnetic compass",avatar:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Magnetic_compass_-_school_laboratory.jpg"},{id:8,name:"vodka 2 quart flask",avatar:"https://p1.pxfuel.com/preview/555/831/622/vodka-ruska-alcohol-drunkenness.jpg"},{id:9,name:"plastic raincoat",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pownnssrFIBSPhzUKilGR_2SEfuuy53q-A&usqp=CAU"}]}},methods:{random_userList:function(){var t=this;I.sort(function(){return Math.random()-.5}),this.users=I.map(function(e){return t.users[e]})},reorder_avatarList:function(){var t=this;this.avatarList=C.map(function(e){return t.users[e]})},compare_lists:function(){return this.users[S].id==this.avatarList[S].id&&(S+=1,!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},onEdit:function(t){alert("Editing ".concat(t.name))},onDelete:function(t){alert("Deleting ".concat(t.name))},update:function(){alert("Prnting ".concat(JSON.stringify(this.users)))},startInitialRanking:function(t){this.enable(),this.random_userList();var e=document.getElementById("user_list");e.style.display="block",t.target.style.display="none";var n=document.getElementById("drag_inst");n.style.display="inline-block",n.textContent="Drag and drop the items to order the list",e=document.getElementById("begin"),e.style.display="inline-block"},doneInitialRanking:function(t){this.disable(),t.target.style.display="none";var e=document.getElementById("drag_inst");e.style.display="none";var n=document.getElementById("intro2");n.style.display="inline-block",n.textContent="After this initial ranking. Now you'll have a chance to see rankings of a Virtual AI agent. The agent will present you with his reasoning for picking each item in specific order. You will have a choice to update your ranking during the interaction";var i=document.getElementById("interact");i.style.display="inline-block"},beginInteraction:function(t){this.reorder_avatarList(),t.target.style.display="none";var e=document.getElementById("intro");e.style.display="none",e=document.getElementById("intro2"),e.style.display="none",e=document.getElementById("heading"),e.style.display="none",e=document.getElementById("avatarRating"),e.style.display="block","talking"!==B&&(B="talking",D(),O());var n=document.getElementById("drag_inst");n.style.display="inline-block",n.textContent="The agent tries to convince the participant of first item on its list";var i=0;setTimeout(function(){var t=new window.SpeechSynthesisUtterance;t.text="Hi. I am David. Here is my list. I'll try to convince you of first item on my list",R(t,i),t.addEventListener("end",function(){var t=document.getElementById("drag");t.style.display="inline-block",t=document.getElementById("noDrag"),t.style.display="inline-block","idle"!==B&&(B="idle",D(),O())})},3e3)},makeDraggable:function(t){var e=document.getElementById("drag_inst");e.style.display="inline-block",e.textContent="Update your list by dragging and dropping the items",t.target.style.display="none";var n=document.getElementById("noDrag");n.style.display="none",this.enable(),n=document.getElementById("done_drag"),n.style.display="inline-block"},skipUpdating:function(t){t.target.style.display="none";var e=document.getElementById("drag");e.style.display="none",this.doneDragging()},doneDragging:function(){var t,e=document.getElementById("done_drag");if(e.style.display="none",S+=1,S>=9)this.enable(),t=document.getElementById("drag_inst"),t.textContent="Please finalize and submit your rankings before concluding the study",e=document.getElementById("submit"),e.style.display="inline-block";else{t=document.getElementById("drag_inst"),this.disable();var n=S,i=this.compare_lists();while(i&&S<9)i=this.compare_lists();if(S-n>0){"talking"!==B&&(B="talking",D(),O());var a=0;setTimeout(function(){var n=new window.SpeechSynthesisUtterance;n.text="Glad we agree on some items on our list",R(n,a),alert(S),n.addEventListener("end",function(){alert(S),9==S?(alert(S),this.enable(),t=document.getElementById("drag_inst"),t.textContent="Please finalize and submit your rankings before concluding the study",e=document.getElementById("submit"),e.style.display="inline-block",setTimeout(function(){"idle"!==B&&(B="idle",D(),O())},2e3)):S<9&&("talking"!==B&&(B="talking",D(),O()),setTimeout(function(){var n=new window.SpeechSynthesisUtterance;t.textContent="The agent tries to convince the participant about item "+JSON.stringify(S+1),n.text="I'll try to convince you about item "+JSON.stringify(S+1),R(n,a),n.addEventListener("end",function(){e=document.getElementById("drag"),e.style.display="inline-block",e=document.getElementById("noDrag"),e.style.display="inline-block","idle"!==B&&(B="idle",D(),O())})},3e3))})},3e3)}else S-n==0&&(S<9?("talking"!==B&&(B="talking",D(),O()),setTimeout(function(){var n=new window.SpeechSynthesisUtterance;t.textContent="The agent tries to convince the participant about item "+JSON.stringify(S+1),n.text="I'll try to convince you about item "+JSON.stringify(S+1),R(n,a),n.addEventListener("end",function(){e=document.getElementById("drag"),e.style.display="inline-block",e=document.getElementById("noDrag"),e.style.display="inline-block","idle"!==B&&(B="idle",D(),O())})},3e3)):(this.enable(),"idle"!==B&&(B="idle",D(),O()),t=document.getElementById("drag_inst"),t.textContent="Please finalize and submit your rankings before concluding the study",e=document.getElementById("submit"),e.style.display="inline-block"))}},submitRankings:function(t){t.target.style.display="none",this.disable();var e=document.getElementById("drag_inst");e.textContent="Thank you for taking the time to complete the study. Please proceed to post-study questionnaires"}}},U=A,L=(n("034f"),Object(f["a"])(U,d,c,!1,null,null,null)),q=L.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(t){return t(q)}}).$mount("#app")},c21b:function(t,e,n){},c865:function(t,e,n){"use strict";n("1eeb")}});
//# sourceMappingURL=app.e7e5f86d.js.map