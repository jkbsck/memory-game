(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),o=(c(9),c(2)),i=(c(10),c(11),c(0)),l=function(t){return Object(i.jsx)("div",{onClick:t.gameOver?null:function(){return t.playHandler(t.item.id)},className:"card-component col-2 ".concat(t.gameOver||t.start?"inactive":"active"),style:t.style,children:Object(i.jsx)("div",{className:"img-wrapper",children:Object(i.jsx)("img",{src:t.item.src,alt:t.item.name})})})},p=(c(13),function(t){var e=Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:12===t.score?"YOU WON!":"GAME OVER!"}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{className:"play-again btn",onClick:t.gameReset,children:"Play again"})]}),c=Object(i.jsxs)("div",{className:"start-wrapper",children:[Object(i.jsx)("p",{children:"Try to choose as many characters as you can without repetition."}),Object(i.jsx)("button",{className:"play-again btn",onClick:t.startHandler,children:"Play"})]}),a=Object(i.jsxs)("div",{children:[Object(i.jsxs)("h6",{children:["Score: ",t.score]}),Object(i.jsxs)("h6",{children:["High score: ",t.highScore]})]});return Object(i.jsx)("div",{className:"score-component col-6",children:Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"score",children:[t.start?c:a,t.gameOver||12===t.score?e:null]})})})}),d=(c(14),function(t){var e=40,c=30,n=function(t,e){var c=t*Math.PI/180;return Math.sin(c)*e},s=function(t,e){var c=t*Math.PI/180;return Math.cos(c)*e},r=[{left:"".concat(e+s(90,e),"%"),top:"".concat(e-n(90,e),"%")},{left:"".concat(e+s(60,e),"%"),top:"".concat(e-n(60,e),"%")},{left:"".concat(e+s(c,e),"%"),top:"".concat(e-n(c,e),"%")},{left:"".concat(e+s(0,e),"%"),top:"".concat(e-n(0,e),"%")},{left:"".concat(e+s(c,e),"%"),top:"".concat(e+n(c,e),"%")},{left:"".concat(e+s(60,e),"%"),top:"".concat(e+n(60,e),"%")},{left:"".concat(e+s(90,e),"%"),top:"".concat(e+n(90,e),"%")},{left:"".concat(e-s(60,e),"%"),top:"".concat(e+n(60,e),"%")},{left:"".concat(e-s(c,e),"%"),top:"".concat(e+n(c,e),"%")},{left:"".concat(e-s(0,e),"%"),top:"".concat(e+n(0,e),"%")},{left:"".concat(e-s(c,e),"%"),top:"".concat(e-n(c,e),"%")},{left:"".concat(e-s(60,e),"%"),top:"".concat(e-n(60,e),"%")}],d=Object(a.useState)([{id:1,name:"HAL 9000",src:"https://static01.nyt.com/images/2018/05/15/arts/01hal-voice1/merlin_135847308_098289a6-90ee-461b-88e2-20920469f96a-superJumbo.jpg"},{id:2,name:"Ellen Ripley",src:"https://www.filmfutter.com/wp-content/uploads/2015/02/latest.jpg"},{id:3,name:"Wall-E",src:"https://www.staffsunion.com/asset/Event/6001/2nFyTvssbtJMLC6eyYwwZ88gALD.jpg"},{id:4,name:"Leeloo",src:"https://i.pinimg.com/originals/6e/4a/c5/6e4ac5f364fc160de9bd4a8c6235c021.jpg"},{id:5,name:"Cooper",src:"https://i.insider.com/546ab754ecad0463484453c2"},{id:6,name:"Chewbacca",src:"https://starwarsblog.starwars.com/wp-content/uploads/2020/04/best-friend-in-galaxy-chewbacca_TALL.jpg"},{id:7,name:"Rick Deckard",src:"https://lwlies.com/wp-content/uploads/2016/01/blade-runner-harrison-ford-1108x0-c-default.jpg"},{id:8,name:"Caesar",src:"https://c4.wallpaperflare.com/wallpaper/792/350/431/caesar-war-for-the-planet-of-the-apes-amiah-miller-wallpaper-preview.jpg"},{id:9,name:"Paul Atreides",src:"https://cdnb.artstation.com/p/assets/images/images/030/318/801/large/brian-taylor-paul.jpg?1600250795"},{id:10,name:"Jean-Luc Picard",src:"https://www.indiewire.com/wp-content/uploads/2018/08/shutterstock_390919hj.jpg"},{id:11,name:"Johhny Rico",src:"https://play-lh.googleusercontent.com/proxy/O3Ok5d8yIcTHs5wBZ3mhW4PCwr7H7NQ_yTJzB7j3dPq8dB_ojpDCZtHz9ZXMgSXwvLdMUHVBRDpXDjDb0jU1kIlcqh5uPDBi7MYhacW_Fd8p_8PpWrhe=w720-h405-rw"},{id:12,name:"Grandmaster",src:"https://d23.com/app/uploads/2018/02/1180w-600h_021618_video-thor-ragnarok-exclusive-clip.jpg"}]),j=Object(o.a)(d,2),m=j[0],u=j[1],h=Object(a.useState)(!0),b=Object(o.a)(h,2),g=b[0],O=b[1],f=Object(a.useState)(0),w=Object(o.a)(f,2),v=w[0],x=w[1],y=Object(a.useState)(0),B=Object(o.a)(y,2),k=B[0],N=B[1],S=Object(a.useState)([]),M=Object(o.a)(S,2),H=M[0],P=M[1],_=Object(a.useState)(!1),C=Object(o.a)(_,2),L=C[0],D=C[1],J=function(e){!1===H.includes(e)?(P(H.concat(e)),D(!1),k<v+1&&N(k+1),11===v&&(D(!0),t.setBlurBg("")),x(v+1)):(D(!0),t.setBlurBg("")),u(m.map((function(t){return{sort:Math.random(),value:t}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value})))};return Object(i.jsx)("div",{className:"main-component",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{start:g,startHandler:function(){O(!1)},score:v,highScore:k,gameOver:L,gameReset:function(){x(0),P([]),D(!1),t.setBlurBg("blur")}}),m.map((function(t,e){return Object(i.jsx)(l,{start:g,item:t,style:r[e],gameOver:L,playHandler:J},e)}))]})})});var j=function(){var t=Object(a.useState)("blur"),e=Object(o.a)(t,2),c=e[0],n=e[1];return Object(i.jsxs)("div",{className:"App ".concat(c),children:[Object(i.jsx)(d,{setBlurBg:n}),Object(i.jsx)("img",{className:"bg-img",src:"https://cdn.wallpapersafari.com/91/15/317d0k.jpg",alt:"space"})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.ff4f0baf.chunk.js.map