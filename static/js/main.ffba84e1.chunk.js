(this["webpackJsonphotr-mission-house"]=this["webpackJsonphotr-mission-house"]||[]).push([[0],{38:function(n,e,t){},41:function(n,e,t){},64:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(2),o=t.n(i),a=t(14),c=t.n(a),s=(t(38),t(4)),l=t(3);function d(){var n=Object(s.a)(["\n font-size: ",";\n font-weight: ",";\n color:",";\n text-align: ",";\n line-height:1.1em;\n margin:0;\n padding:0;\n"]);return d=function(){return n},n}var h=function(n,e){switch(n){case"default":return e.colors.default;case"primary":return e.colors.primary;case"white":return e.colors.white;case"defaultAccent":return e.colors.defaultAccent;case"primaryAccent":return e.colors.primaryAccent;default:return e.colors.default}},u=l.c.p(d(),(function(n){return function(n){switch(n){case"1":return".5em";case"2":return".75em";case"3":return"1em";case"4":return"1.5em";case"5":return"2em";case"6":return"3em";default:return"1em"}}(n.size)}),(function(n){return n.weight}),(function(n){return h(n.color,n.theme)}),(function(n){return n.align})),j=function(n){var e=n.color,t=n.size,i=void 0===t?"15":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z",fill:e,"fill-opacity":"1"})})},b=t(13),m=function(){var n=Object(i.useState)(!1),e=Object(b.a)(n,2),t=e[0],r=e[1];return{scrolled:t,handleScroll:function(){var n=window.scrollY;r(n>400)}}};t(41);function p(){var n=Object(s.a)(["\nscroll-behavior:smooth;\nanimation:"," 15s ease-out infinite;\nbackground-repeat: no-repeat;\nbackground-size:cover;\nmin-height: 100vh;\npadding-left:30px;\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\njustify-content: center;\nfont-size: calc(10px + 2vmin);\ncolor: white;\nposition:relative;\n\n.hotr {opacity:.25; animation:"," 1.5s;}\n.mission-house {\n  position: absolute; bottom:0; left:0;\n  display:flex;\n  justify-content:center;\n  margin-bottom:10px;\n  width:100%;\n  text-align:center;\n  letter-spacing:2em;\n  word-spacing:3em;\n  opacity:.7;\n}\n\n\n.backToTop {\n  z-index:9;\n  position:fixed; bottom:20px; right:1em;\n  animation:"," 1s ease ;\n}\n\n@media (max-width: 600px){\n  min-height: 70vh;\n  .mission-house {\n    font-size:1em;\n     letter-spacing:.5em;\n  word-spacing:.05em;\n  }\n}\n\n\n"]);return p=function(){return n},n}function x(){var n=Object(s.a)(["\nfrom{\n  transform:translateY(100%);\n  opacity:0;\n}\n50%{\n  transform:translateY(100%);\n  opacity:0;\n}\nto{\n  transform:translateY(0%);\n  opacity:1;\n}\n"]);return x=function(){return n},n}function f(){var n=Object(s.a)(["\n  from{\n    opacity:0;\n    transform:translateX(-20%);\n  }\n  to{\n    opacity:.25;\n    transform:translateX(0%);\n  }\n"]);return f=function(){return n},n}function g(){var n=Object(s.a)(['\n  from {\n    background: -webkit-linear-gradient( rgba(0,0,0,.3), rgba(0,0,0,.8)),url("/hotr-mission-house.png") no-repeat;\n    background-size:100% 100%;\n  }\n  70% {\n    background: -webkit-linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)),url("/hotr-1.jpg") no-repeat;\n    background-size:cover;\n  }\n  to {\n    background: -webkit-linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)),url("/pst-paul.jpg") no-repeat;\n    background-size:cover;\n  }\n']);return g=function(){return n},n}var w=Object(l.d)(g()),v=Object(l.d)(f()),O=Object(l.d)(x()),y=Object(l.c)((function(n){var e=n.className,t=m(),o=t.scrolled,a=t.handleScroll;return Object(i.useEffect)((function(){window.addEventListener("scroll",a)})),Object(r.jsxs)("div",{className:e,id:"top",children:[Object(r.jsx)(u,{className:"mission-house",size:"3",color:"white",children:"THE MISSION HOUSE"}),o&&Object(r.jsx)("a",{href:"#top",className:"backToTop",children:Object(r.jsx)(j,{color:"#8AC23D",size:"20"})})]})}))(p(),w,v,O);function N(){var n=Object(s.a)(["\nbackground-color:",";\nposition:relative;\ncolor:",";\npadding:5px 10px;\nborder:none;\nfont-size:",";\noutline:none;\nbox-shadow:0 1px 2px rgba(0,0,0,.2);\ntext-decoration:none;\ntransition:.05s;\noverflow:hidden;\nwidth:",";\n&:hover {\n  background:#8AC23D;\n  color:#ffffff;\n  box-shadow:0 1px 3px rgba(0,0,0,.5);\n  cursor:pointer;\n}\n& > * {fill: ",";}\n&:hover > * {fill:",";}\n&:active {box-shadow:none; opacity:.8; text-decoration:none; transform:scale(.9);} \n\n  ","\n"]);return N=function(){return n},n}var k=l.c.button(N(),(function(n){return n.theme.colors.primary}),(function(n){return n.color}),(function(n){return function(n){switch(n){case"1":return".55em";case"2":return".7em";case"3":return"1em";case"4":return"1.5em";case"5":return"2em";default:return".7em"}}(n.size)}),(function(n){return function(n){switch(n){case"1":return"auto";case"2":return"100px";case"3":return"150px";case"4":return"250px";default:return"auto"}}(n.size)}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.active&&"\n    background:#8AC23D;\n    color:#ffffff;\n    &:hover {\n      background:#ffffff;\n      color:#8AC23D;\n      }\n    &:hover > * {fill:#8AC23D;}\n  "})),C=k.withComponent("a"),z=k;function H(){var n=Object(s.a)(["\nbackground:",";\npadding:20px 60px;\ndisplay:flex;\nflex-flow:row wrap;\njustify-content:space-around;\nalign-items:flex-end;\n.new-here {display:flex;\n  flex-direction:row;\n  justify-content:space-between;\n  align-items:center;}\n  ",' {padding:15px 0;}\n\n  .new-comers-message-wrap {\n    background: -webkit-linear-gradient( rgba(0,0,0,.9), rgba(0,0,0,.8)),url("mission-house/serve1.jpg") no-repeat;\n    background-size:cover;\n    height:50vh;\n    width:80%;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    margin:20px 0 40px;\n    transform-origin:50% 0;\n    animation: '," .5s alternate;\n  }\n  .new-comers-message-wrap > * {\n    animation: "," 1s  alternate;\n  }\n  .new-comers-message {\n    width:80%;\n    margin:0 auto;\n    padding:20px 0;\n    border-bottom:1px solid grey;\n  }\n  .locate-church{\n    text-decoration:none;\n    cursor:pointer;\n    animation: "," 1s infinite alternate;\n    \n  }\n@media (max-width:600px){\n  "," {margin-top:15px;}\n}\n\n"]);return H=function(){return n},n}function L(){var n=Object(s.a)(["\n  from{opacity:0;}\n  50%{opacity:0;}\n  to{opacity:1;}\n"]);return L=function(){return n},n}function S(){var n=Object(s.a)(["\n  from{transform:scaleY(.7)}\n  to{transform:scale(1)}\n"]);return S=function(){return n},n}function E(){var n=Object(s.a)(["\n  from{transform:scale(.7)}\n  to{transform:scale(1)}\n"]);return E=function(){return n},n}var A=Object(l.d)(E()),F=Object(l.d)(S()),M=Object(l.d)(L()),V=Object(l.c)((function(n){var e=n.className,t=Object(i.useState)(!1),o=Object(b.a)(t,2),a=o[0],c=o[1];return Object(r.jsxs)("div",{className:e,children:[Object(r.jsxs)("div",{className:"new-here",children:[Object(r.jsxs)(u,{color:"primary",size:"6",children:["NEW ",Object(r.jsx)("br",{})," HERE"]}),Object(r.jsx)(u,{color:"primary",size:"6",weight:"bold",children:"?"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(z,{onClick:function(){c(!a)},label:"",size:"4",active:!0,children:"JOIN US TODAY"}),Object(r.jsx)(u,{color:"primary",size:"3",weight:"bold",children:"hope to see you in church"})]}),a&&Object(r.jsxs)("div",{className:"new-comers-message-wrap",children:[Object(r.jsx)(u,{className:"new-comers-message",size:"4",color:"white",children:"The mission house Welcomes you."})," ",Object(r.jsx)("br",{}),Object(r.jsx)(u,{as:"a",href:"locateUs",className:"locate-church",size:"4",color:"primary",children:"LOCATE CHURCH"})]})]})}))(H(),(function(n){return n.theme.colors.white}),z,F,M,A,z);function R(){var n=Object(s.a)(['\n  background: -webkit-linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.8)), url("mission-house/core-values-bg.jpg") no-repeat;\n  background-size:cover;\n  background-attachment:fixed;\n  width:100%;\n  overflow:hidden;\n  position:relative;\n  .core-values {\n    display:flex;\n    flex-flow:row wrap;\n    align-items:flex-start;\n    justify-content:space-between;\n    width:80%;\n    width:80%;\n    height:100%;\n    margin:0 auto;\n    padding:50px 0;\n  }\n  .core-values-head {\n    position:absolute; top:50%; left:0;\n    transform:translateY(-50%);\n    width:100%;\n    text-align:center;\n    font-size:13em;\n    opacity:.1;\n    letter-spacing:.05em;\n    line-height:.85em;\n  }\n  .core-values > .word, .worship, .prayer { width:25%; }\n  .core-values > div > * {padding-bottom:10px;}\n  .values {line-height:1.5em;}\n  @media (max-width:600px){\n    background-position:50% 50%;\n    .core-values{padding-top:100px;}\n    .core-values-head {\n      width:100%;\n      top:1em;\n      text-align:center;\n      font-size:3em;\n      line-height:.5em;\n    }\n    .core-values > .word, .worship, .prayer { width:90%; margin:00 auto; }\n    .core-values > div > * {padding-bottom:25px;}\n  }\n  \n']);return R=function(){return n},n}var D=Object(l.c)((function(n){var e=n.className;return Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)(u,{className:"core-values-head",align:"center",color:"white",size:"6",weight:"bold",children:"CORE VALUES"}),Object(r.jsxs)("div",{className:"core-values",children:[Object(r.jsxs)("div",{className:"prayer",children:[Object(r.jsx)(u,{color:"primary",size:"4",children:"PRAYER"}),Object(r.jsx)(u,{className:"values",color:"white",size:"3",children:"House on the rock is a Praying based church, who believe in the potency and efficacy of prayer"})]}),Object(r.jsxs)("div",{className:"word",children:[Object(r.jsx)(u,{color:"primary",size:"4",children:"WORD"}),Object(r.jsx)(u,{className:"values",color:"white",size:"3",children:"The word of God is taught and preached without compromise, to the end that Kingdom be established."})]}),Object(r.jsxs)("div",{className:"worship",children:[Object(r.jsx)(u,{color:"primary",size:"4",children:"WORSHIP"}),Object(r.jsx)(u,{className:"values",color:"white",size:"3",children:"In House on the Rock we worship in spirit and in truth, and it goes beyond the service its our life style"})]})]})]})}))(R());function T(){var n=Object(s.a)(["\n  background:",";\n  width:200px;\n  min-height:250px;\n  overflow:hidden;\n  text-align:center;\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  align-items:center;\n  transition:.5s;\n\n  .image {width:200px;\n    height:190px;\n    border-radius:","}\n  .text {\n        height:50px;\n        display:flex;\n        justify-content:center;\n        align-items:center;  \n      }\n  @media (max-width:600px){\n        margin-bottom:30px;\n    }\n\n\n    \n\n\n"]);return T=function(){return n},n}var Z=Object(l.c)((function(n){var e=n.className,t=n.src,i=n.alt,o=n.label,a=n.children;return Object(r.jsxs)("div",{className:e,children:[t&&Object(r.jsx)("img",{className:"image",src:t,alt:i}),Object(r.jsxs)("div",{className:"text",children:[Object(r.jsx)(u,{color:"primary",align:"center",size:"2",children:o}),Object(r.jsx)(u,{color:"primary",align:"center",size:"2",children:a})]})]})}))(T(),(function(n){return h(n.color,n.theme)}),(function(n){return n.borderRadius})),I=t(7);function Y(){var n=Object(s.a)(["\n  width:100%;\n  padding:100px 0px;\n  .card {\n    width:80%;\n    margin:0 auto;\n    display:flex;\n    flex-flow:row wrap;\n    justify-content:space-around;\n  }\n  .card ",":hover {\n    transform:translateY(-5px);\n    box-shadow:0 2px 5px #555;\n  }\n  \n\n"]);return Y=function(){return n},n}var B=Object(l.c)((function(n){var e=n.className;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:e,children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)(I.b,{to:"/pages/sermons",style:{textDecoration:"none"},children:Object(r.jsx)(Z,{color:"white",src:"mission-house/pst3.jpg",alt:"",label:"Listen to Sermon"})}),Object(r.jsx)(Z,{color:"white",src:"mission-house/hotr-img2.jpg",alt:"",label:"worship warfare"}),Object(r.jsx)(Z,{color:"white",src:"mission-house/hotr-img.jpg",alt:"",label:"PUSH"}),Object(r.jsx)(Z,{color:"white",src:"mission-house/hotr-7.jpg",alt:"",label:"LOVE"})]})})})}))(Y(),Z),U=t(31),P=function(n){var e=n.color,t=n.size,i=void 0===t?"20":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.10001L6.48999 3.87001L14.62 12L6.48999 20.13Z",fill:e,"fill-opacity":"1"})})},G=function(n){var e=n.color,t=n.size,i=void 0===t?"20":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M17.51 3.87001L15.73 2.10001L5.83997 12L15.74 21.9L17.51 20.13L9.37997 12L17.51 3.87001Z",fill:e,"fill-opacity":"1"})})};function W(){var n=Object(s.a)(['\nbackground: -webkit-linear-gradient(rgba(30,30,30,.8),rgba(30,30,30,.9)), url("mission-house/pst1.jpg") no-repeat;\nbackground-size:100% 100%;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\nheight:60vh;\nwidth:80%;\nborder-radius:50px;\nbox-shadow:inset 0 0 10px 5px #000;\npadding:15px 0;\nmargin:0 auto;\nposition:relative;\n.quotes-header { width:100%;position:absolute; top:.2em; text-align:center;  }\n.carousel-wrap {\n  width:100%;\n  height:50vh;\n  display:flex;\n  margin:0 auto;\n  justify-content:center;\n  align-items:center;\n}\n\n.carousel-wrap '," {width:55%; opacity:.8; padding:50px; border-radius:50px;}\n.carousel-wrap:hover "," {\n  background:rgba(0,0,0,.5);\n  opacity:1;\n  transition:0.15s;\n}\n\n.caret {\n  background:rgba(0,0,0,.3);\n  padding: 20px 10px;\n  outline:none;\n  border:none;\n  opacity:.5;\n}\n.caret:hover {\n  background:rgba(0,0,0,.6);\n  opacity:1;\n  color: ",";\n}\n\n@media (max-width:600px){\n  \n  height:40vh;\n  width:90%;\n  margin:0 auto;\n  .quotes-header { width:100%;position:absolute; top:.2em; text-align:center; }\n  .carousel-wrap {height:35vh;}\n}\n"]);return W=function(){return n},n}var K=Object(l.c)((function(n){var e=n.className;return Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)(u,{className:"quotes-header",color:"primary",size:"5",align:"center",children:"SERVICE QUOTES"}),Object(r.jsxs)(U.a,{swiping:!0,autoplay:!0,autoplayInterval:5e3,wrapAround:!0,transitionMode:"scroll3d",opacityScale:0,renderCenterLeftControls:function(n){var e=n.previousSlide;return Object(r.jsx)("button",{className:"caret",onClick:e,children:Object(r.jsx)(G,{className:"caret",color:"white"})})},renderCenterRightControls:function(n){var e=n.nextSlide;return Object(r.jsxs)("button",{className:"caret",onClick:e,children:[" ",Object(r.jsx)(P,{className:"caret",color:"white"})]})},defaultControlsConfig:{pagingDotsStyle:{fill:"#8AC23D"}},children:[Object(r.jsx)("div",{className:"carousel-wrap",children:Object(r.jsx)(u,{size:"4",color:"white",align:"center",children:"...To obey is better than to sacrifice, and to harken than the fat of rams"})}),Object(r.jsx)("div",{className:"carousel-wrap",children:Object(r.jsx)(u,{size:"4",color:"white",align:"center",children:"And Isaac sowed in that land, and in the same reaped an hundred fold harvest"})}),Object(r.jsx)("div",{className:"carousel-wrap",children:Object(r.jsx)(u,{size:"4",color:"white",align:"center",children:"Abraham is the father of faith"})}),Object(r.jsx)("div",{className:"carousel-wrap",children:Object(r.jsx)(u,{size:"4",color:"white",align:"center",children:"Living is seeding, sow seeds of kindness, love and compassion for in due season you will reap, if you faint not"})})]})]})}))(W(),u,u,(function(n){return n.theme.colors.primary}));function J(){var n=Object(s.a)(["\n\n  height:70vh;\n  width:80%;\n  margin:0 auto;\n  display:flex;\n  flex-flow:row wrap;\n  justify-content:space-around;\n  align-items:center;\n\n  @media (max-width:600px){\n    margin-top:50px;\n    width:90%;\n  }\n\n"]);return J=function(){return n},n}var q=Object(l.c)((function(n){var e=n.className;return Object(r.jsxs)("div",{className:e,children:[Object(r.jsxs)(u,{color:"primary",size:"5",align:"center",weight:"bold",children:["Our pastor will like to ",Object(r.jsx)("br",{})," meet you and be your ",Object(r.jsx)("br",{})," friend"]}),Object(r.jsxs)(Z,{color:"transparent",src:"mission-house/pst2.jpg",alt:"Rev Barnabas Arastus",borderRadius:"50%",children:[Object(r.jsx)(u,{size:"4",color:"primary",weight:"light",children:"Rev Barnabas Arastus "}),Object(r.jsxs)(u,{size:"3",color:"primary",weight:"bold",children:["Resident Pastor, ",Object(r.jsx)("br",{})," House on the Rock Kaduna "]})]})]})}))(J()),X=function(n){var e=n.color,t=n.size,i=void 0===t?"20":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 8C18 4.69 15.3101 2 12 2C8.68994 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM10 8C10 6.90002 10.9 6 12 6C13.1 6 14 6.90002 14 8C14 9.09998 13.11 10 12 10C10.9 10 10 9.09998 10 8ZM5 22V20H19V22H5Z",fill:e,"fill-opacity":"1"})})},Q=function(n){var e=n.color,t=n.size,i=void 0===t?"20":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 4H20C21.1 4 22 4.90002 22 6V18C22 19.1 21.1 20 20 20H4C2.90002 20 2 19.1 2 18L2.01001 6C2.01001 4.90002 2.90002 4 4 4ZM12 13L20 8V6L12 11L4 6V8L12 13Z",fill:e,"fill-opacity":"0.75"})})},$=function(n){var e=n.color,t=n.size,i=void 0===t?"20":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z",fill:e,"fill-opacity":"0.54"})})};function _(){var n=Object(s.a)(["\n  position:relative;\n  background:-webkit-linear-gradient(#333, #232323);\n  height:auto;\n  width:100%;\n  .footer-main {\n    width:80%;\n    margin:0 auto 30px;\n    display:flex;\n    flex-flow:row wrap;\n    justify-content:space-between;\n  }\n  .footer-main > div {width:25%; padding-top:50px;}\n  .footer-main > div > :first-child {padding-bottom:20px}\n  .footer-main > div > "," {\n    line-height:1.5em;\n    display:flex; \n    justify-content:center;\n    align-items:center;\n  }\n  .footer-aux {\n    border-top:1.5px solid grey;\n    width:80%;\n    padding:10px 0;\n    margin: 0 auto;\n    display:flex;\n    flex-flow:row wrap;\n    justify-content:space-between;\n    align-items:center;  \n    text-align:center;\n  }\n  .footer-aux > "," {opacity:.56; letter-spacing:3px;}\n  .footer-aux .footer-logo {filter:drop-shadow(0 0 3px #000); opacity:.56;};\n  @media (max-width:600px){\n    height:auto;\n    .footer-main {\n      justify-content:space-around;\n      padding-bottom:15px;\n    }\n    \n    .footer-main > div { width:90%; margin:0 auto; padding-top:30px;}\n    .footer-main > div > :first-child {padding-bottom:10px}\n    .footer-aux > "," {opacity:.56; letter-spacing:3px; padding-bottom:15px;}\n    .footer-aux {padding:30px 0; margin-top:30px;}\n  }\n"]);return _=function(){return n},n}var nn=Object(l.c)((function(n){var e=n.className;return Object(r.jsxs)("div",{className:e,children:[Object(r.jsxs)("div",{className:"footer-main",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{size:"4",color:"primary",children:"ABOUT US"}),Object(r.jsx)(u,{size:"3",color:"white",children:"House on the rock the mission house is a blessed, where the spirit and power of God is manifest in our time"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{size:"4",color:"primary",children:"SERVICE TIMES"}),Object(r.jsx)(u,{size:"3",color:"white",weight:"bold",children:"Sundays"}),Object(r.jsxs)(u,{size:"3",color:"white",children:["1st service: 9:00am ",Object(r.jsx)("br",{})," 2nd service: 11:00am"]}),Object(r.jsxs)(u,{size:"3",color:"white",weight:"bold",children:[" ",Object(r.jsx)("br",{})," Wednessdays"]}),Object(r.jsx)(u,{size:"3",color:"white",children:"Mid-week Service: 05:00pm"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(u,{size:"4",color:"primary",children:"CONTACT US"}),Object(r.jsxs)(u,{size:"3",color:"white",weight:"bold",children:[Object(r.jsx)($,{color:"grey"})," 080333444555 "]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(u,{size:"3",color:"white",children:[Object(r.jsx)(X,{color:"grey"})," No.30 Yusuf Ilya street, ",Object(r.jsx)("br",{}),"Barnawa G.R.A Kaduna"]})," ",Object(r.jsx)("br",{}),Object(r.jsxs)(u,{size:"3",color:"white",children:[Object(r.jsx)(Q,{color:"grey"}),"hotrkd@gmail.com"]})]})]}),Object(r.jsxs)("div",{className:"footer-aux",children:[Object(r.jsx)(u,{size:"3",color:"white",children:"\xa9 2020 HOUSE ON THE ROCK. ALL RIGHTS RESERVED."}),Object(r.jsx)("img",{className:"footer-logo",src:"mission-house/hotr-logo.png",alt:"logo"})]})]})}))(_(),u,u,u),en=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{}),Object(r.jsx)(V,{}),Object(r.jsx)(D,{}),Object(r.jsx)(B,{}),Object(r.jsx)(K,{}),Object(r.jsx)(q,{}),Object(r.jsx)(nn,{})]})};function tn(){var n=Object(s.a)(["\nwidth:80%;\noverflow:hidden;\nmargin:90px auto 0;\n@media (max-width:600px){\n  margin:0px auto 0;\n  width:100%;\n}\n.sermons {\n  width:90%;\n  margin:30px auto;\n  display:flex;\n  flex-flow:row wrap;\n  justify-content:space-between;\n}\n\n@media (max-width: 600px){\n  .sermons {\n    justify-content:center;\n  }\n}\n\n"]);return tn=function(){return n},n}function rn(){var n=Object(s.a)(['\n  background: -webkit-linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.8)),url("mission-house/pst4.jpg") no-repeat;\n  background-size:cover;\n  height:70vh;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  \n  @media (max-width:600px){\n    height:40vh;\n  }\n\n\n']);return rn=function(){return n},n}var on=l.c.div(rn()),an=Object(l.c)((function(n){var e=n.className;return Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)(on,{children:Object(r.jsx)(u,{size:"6",color:"white",children:"SERMONS"})}),Object(r.jsxs)("div",{className:"sermons",children:[Object(r.jsx)(Z,{src:"mission-house/public/pst1.jpg",alt:"",label:"The Ziklag Experience"}),Object(r.jsx)(Z,{src:"mission-house/pst2.jpg",alt:"",label:"Katatizo"}),Object(r.jsx)(Z,{src:"mission-house/pst5.jpg",alt:"",label:"Walking in wisdom"}),Object(r.jsx)(Z,{src:"mission-house/pst4.jpg",alt:"",label:"Love"})]})]})}))(tn()),cn=t(23);function sn(){var n=Object(s.a)(["\n  margin:90px auto 0;\n\n  @media (max-width:600px){\n    margin:60px auto 0;\n  }\n\n"]);return sn=function(){return n},n}var ln=Object(l.c)((function(n){var e=n.className,t=n.google;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)("div",{children:"LOCATE US"}),Object(r.jsx)(cn.Map,{google:t})]})})}))(sn()),dn=Object(cn.GoogleApiWrapper)({apiKey:"AIzaSyCeEwFop4GhcCi7jL0yPJ94JsFbDPUXR9A"})(ln),hn=function(n){var e=n.color,t=n.size,i=void 0===t?"15":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2H18V4H6V2ZM4 8H20V6H4V8ZM20 10C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22H4C2.89999 22 2 21.1 2 20V12C2 10.9 2.89999 10 4 10H20ZM10 12.73L16 16L10 19.26V12.73Z",fill:e,"fill-opacity":"1"})})},un=function(n){var e=n.color,t=n.size,i=void 0===t?"15":t;return Object(r.jsx)("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(r.jsx)("path",{d:"M11.8 10.9C9.53001 10.31 8.80001 9.7 8.80001 8.75C8.80001 7.66 9.81001 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06001 5.58 6.50001 6.84 6.50001 8.77C6.50001 11.08 8.41001 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44001 17.1 8.63001 16.18 8.52001 15H6.32001C6.44001 17.19 8.08001 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z",fill:e,"fill-opacity":"1"})})};function jn(){var n=Object(s.a)(["\n\n  .menu > * {\n    background: ",";\n    width:20px;\n    height:2px;   \n  }\n  .ham {\n    transform-origin:1.5px; transition: .5s ease all;\n  }\n  .ham:first-child{margin-bottom:10px;}\n  .active{\n    background: ",";\n    \n  }\n  .active:nth-child(1) {\n    transform:rotateZ(45deg);\n  }\n  .active:nth-child(even) {\n    transform:rotateZ(-45deg);\n  }\n\n"]);return jn=function(){return n},n}var bn=Object(l.c)((function(n){var e=n.className,t=n.show;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"".concat(e),children:Object(r.jsxs)("div",{className:"menu",children:[Object(r.jsx)("div",{className:"ham ".concat(t&&"active")}),Object(r.jsx)("div",{className:"ham ".concat(t&&"active")})]})})})}))(jn(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}));function mn(){var n=Object(s.a)(["\n\ndisplay:none;\nwidth:100%;\ntext-align:center;\ncolor: ",";\nposition:fixed; top:0; left:0;\ndisplay:none;\n@media (max-width: 600px){\n  display:block;\n}\n.mobileNavHeader {\n  background:rgba(0,0,0,.5);\n  width:100%;\n  position:fixed;\n  z-index:11111;\n \n}\n.mobileNavHeadercontent{\n  width:90%;\n  padding:10px 5px;\n  margin:0 auto;\n  display:flex;\n  flex-flow:row nowrap;\n  justify-content:space-between;\n  align-items:center;\n  \n}\n.mobileNav {\n  position:absolute; top:0; left:0;\n  display:none;\n  background: rgba(0,0,0,.8);\n  height:100vh;\n  width:100%;\n  transition: .5s linear all;\n}\n.showMobileNav{\n  display:block;\n  \n}\n.mobilemenu {\n  position:absolute; bottom:0;\n  border-radius:20px 20px 0 0;\n  background: ",";\n  height:60vh;\n  width:100%;\n  margin:auto;\n  padding:50px auto;\n  display:flex;\n  flex-flow:column wrap;\n  justify-content:center;  \n  align-items:center;\n  color:#fff;\n  animation: "," .35s;\n\n}\n.mobNav {\n  color: ",";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  font-size:1.2em;\n  margin-bottom:50px;\n\n}\n"]);return mn=function(){return n},n}function pn(){var n=Object(s.a)(["\n  z-index:999999;\n  @media (max-width: 600px){\n    display:none;\n  }\n  .nav-class {\n    position:absolute; top:0; right:0;\n    background : rgba(255,255,255,.1);\n    width:100%;\n    height:80px;\n    display:flex;\n    flex-direction:row;\n    justify-content:space-between;\n    align-items:center;\n  }\n  .nav-scroll {\n    position:fixed; top:0; right:0;\n    background: rgba(255,255,255,.5);\n    box-shadow: 0 3px 10px #333;\n    animation:"," .5s ease alternate;\n  }\n  .logo {\n    padding-left:30px;\n    filter:drop-shadow(0 0 1px #777);\n  }\n  .menu {display:flex;\n    flex-direction:row;\n    justify-content:space-between;}\n  \n  .nav {\n    color:#fff;\n    text-shadow:0 0 3px #333;\n    margin-right:30px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size:1em;\n  }\n  .nav:visited {text-decoration:none;}\n  .normal {\n    background: ",";\n    text-decoration:none;\n  }\n\n  .nav:hover  {\n    background-color:rgba(255,255,255,1);\n    color:","; \n    text-shadow:none;\n    }\n\n  .nav > *  {\n    filter:drop-shadow(0 0 1px ",");\n    }\n  .nav:hover > *  {\n    filter:drop-shadow(0 0 0 transparent);\n    }\n  // .menu > ",":hover > *  {\n  //   fill:",";\n  //   filter:none;\n  //   }\n\n"]);return pn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  from{\n    opacity:0;\n    transform:translateY(100px);\n  }\n  50%{\n    opacity:0;\n    transform:translateY(50px);\n  }\n  51%{\n    opacity:1;\n    transform:translateY(50px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n"]);return xn=function(){return n},n}function fn(){var n=Object(s.a)(["\nfrom{\n  transform:translateY(-100%);\n  opacity:0.5;\n}\nto{\n  transform:translateY(0%);\n  opacity:1;\n}\n"]);return fn=function(){return n},n}var gn=Object(l.d)(fn()),wn=Object(l.d)(xn()),vn=Object(l.c)((function(n){var e=n.className,t=m(),o=t.scrolled,a=t.handleScroll,c=[];return Object(i.useEffect)((function(){window.addEventListener("scroll",a)})),o?c.push("nav-scroll"):c.pop(),Object(r.jsx)("div",{className:e,id:"nav",children:Object(r.jsxs)("div",{className:"nav-class ".concat(c.join(" ")),children:[Object(r.jsx)("img",{className:"logo",src:"/hotr-logo.png",alt:"logo"}),Object(r.jsxs)("div",{className:"menu",children:[Object(r.jsx)(I.b,{to:"/",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"nav normal",href:"#",children:[Object(r.jsx)(j,{}),"Home"]})}),Object(r.jsx)(I.b,{to:"/pages/sermons",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"nav normal",href:"#",children:[Object(r.jsx)(hn,{}),"Media"]})}),Object(r.jsx)(I.b,{to:"/pages/locate",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"nav normal",href:"#",children:[Object(r.jsx)(X,{size:"15"}),"Locate us"]})}),Object(r.jsx)(I.b,{to:"#",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"nav",href:"#",size:"2",active:!0,children:[Object(r.jsx)(un,{}),"Give"]})})]})]})})}))(pn(),gn,(function(n){return n.theme.colors.default}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}),C,(function(n){return n.theme.colors.primary})),On=Object(l.c)((function(n){var e=n.className,t=Object(i.useState)(!1),o=Object(b.a)(t,2),a=o[0],c=o[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:e,children:[Object(r.jsx)("div",{className:"mobileNavHeader",children:Object(r.jsxs)("div",{className:"mobileNavHeadercontent",children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:"/hotr-logo-mobile.png",alt:"logo"})}),Object(r.jsx)("div",{onClick:function(){return c(!a)},children:Object(r.jsx)(bn,{show:a})})]})}),Object(r.jsx)("div",{className:"mobileNav ".concat(a&&"showMobileNav"," "),children:Object(r.jsxs)("div",{className:"mobilemenu",children:[Object(r.jsx)(I.b,{onClick:function(){return c(!1)},to:"/",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"mobNav",href:"#",children:[Object(r.jsx)(j,{}),"Home"]})}),Object(r.jsx)(I.b,{onClick:function(){return c(!1)},to:"/pages/sermons",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"mobNav",href:"#",children:[Object(r.jsx)(hn,{}),"Media"]})}),Object(r.jsx)(I.b,{onClick:function(){return c(!1)},to:"/pages/locate",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"mobNav",href:"#",children:[Object(r.jsx)(X,{size:"15"}),"Locate us"]})}),Object(r.jsx)(I.b,{onClick:function(){return c(!1)},to:"#",style:{textDecoration:"none"},children:Object(r.jsxs)(C,{className:"mobNav",href:"#",size:"2",active:!0,children:[Object(r.jsx)(un,{}),"Give"]})})]})})]})})}))(mn(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),wn,(function(n){return n.theme.colors.white})),yn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(vn,{}),Object(r.jsx)(On,{})]})},Nn={type:"light",background:"#dfdfdf",hover:"#F8FCFF",mobile:"500px",colors:{default:"transparent",primary:"#8AC23D",defaultAccent:"#EEEEEE",primaryAccent:"#D9FFA3",white:"#FFFFFF"}},kn=t(5);function Cn(){var n=Object(s.a)(["\n    html, body{\n      text-align:center;\n      background-color:#dfdfdf;\n      margin: 0;\n      width:100%;\n      overflow-x: hidden;\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n        sans-serif;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      transition: all 0.5s linear;\n      scroll-behavior:smooth;\n    }\n    body > * {\n      width:100%;\n        overflow-x: hidden;\n    }\n    @media (max-width: 600px){\n      body {width:100%;\n        overflow-x: hidden;}\n    }\n    ::-webkit-scrollbar {width:10px;}\n    ::-webkit-scrollbar-track { background: rgba(0,00,00,.00);}\n    ::-webkit-scrollbar-thumb {box-shadow:0 4px 5px #555; height:10px; background: ",";}\n    ::-webkit-scrollbar-thumb:hover {background: ",";}\n  "]);return Cn=function(){return n},n}var zn=function(){var n=Object(l.b)(Cn(),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.primary}));return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(l.a,{theme:Nn,children:[Object(r.jsx)(n,{}),Object(r.jsxs)(I.a,{children:[Object(r.jsxs)(kn.c,{children:[Object(r.jsx)(kn.a,{path:"/",exact:!0,component:function(){return Object(r.jsx)(en,{})}}),Object(r.jsx)(kn.a,{path:"/pages/sermons",exact:!0,component:function(){return Object(r.jsx)(an,{})}}),Object(r.jsx)(kn.a,{path:"/pages/locate",exact:!0,component:function(){return Object(r.jsx)(dn,{})}})]}),Object(r.jsx)(yn,{})]})]})})},Hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),o(n),a(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(zn,{})}),document.getElementById("root")),Hn()}},[[64,1,2]]]);
//# sourceMappingURL=main.ffba84e1.chunk.js.map