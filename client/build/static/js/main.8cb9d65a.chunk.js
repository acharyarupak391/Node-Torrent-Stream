(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),r=a.n(c),l=(a(90),a(16)),o=(a(91),a(155)),s=a(120),d=a(152),u=a(72),j=a.n(u),b=a(73),m=a.n(b),p=(a(92),a(3)),x=Object(d.a)((function(){return{grid:{margin:"50px auto",padding:10},typoGrid:{display:"flex",alignItems:"flex-start",padding:5,borderRadius:2},ml10:{marginLeft:10},ml5:{marginLeft:5},listContainer:{margin:"10px 15px"},fileName:{wordBreak:"break-all"},fileSize:{color:"#7b7b7b"},listItem:{"&:hover":{background:"#fdf0f0",cursor:"pointer"},"&:active":{background:"#f9d5d5"}},title:{color:"blueviolet",background:"aliceblue",padding:3,marginBottom:5}}})),f=function(e){var t,a=e.files,i=e.setCurrentStep,c=x(),r=Object(n.useState)({}),d=Object(l.a)(r,2),u=d[0],b=d[1];Object(n.useEffect)((function(){a&&a!=={}&&b(function(e){var t,a={name:null===e||void 0===e?void 0:e.name,files:[]};return null===e||void 0===e||null===(t=e.files)||void 0===t||t.forEach((function(e){var t;a.files.push({name:e.name,size:(t=e.size,t<1048576?"".concat((t/1024).toFixed(2)," KB"):t<1073741824?"".concat((t/1024/1024).toFixed(2)," MB"):"".concat((t/1024/1024/1024).toFixed(2)," GB"))})})),a}(a))}),[a]);return Object(p.jsxs)(o.a,{xs:10,sm:8,lg:6,className:c.grid,children:[Object(p.jsx)(s.a,{className:c.title,children:"Choose a file to stream"}),Object(p.jsxs)(s.a,{variant:"h6",className:"".concat(c.typoGrid," textWrapper"),children:[Object(p.jsx)(j.a,{fontSize:"large"}),Object(p.jsx)("span",{className:"".concat(c.ml10," textWrap"),children:null===u||void 0===u?void 0:u.name})]}),Object(p.jsx)(o.a,{className:c.listContainer,children:null===u||void 0===u||null===(t=u.files)||void 0===t?void 0:t.map((function(e,t){return function(e){var t=e.split("."),a=t[t.length-1];return!!["avi","flv","mkv","mov","mp4","webm","wmv"].includes(a.toLowerCase())}(e.name)&&Object(p.jsxs)(s.a,{variant:"subtitle2",className:"".concat(c.typoGrid," ").concat(c.listItem," textWrapper"),onClick:function(){return function(e,t){i(2,{index:e,data:t})}(t,e)},children:[Object(p.jsx)(m.a,{}),Object(p.jsx)("span",{className:"".concat(c.ml5," ").concat(c.fileName),children:e.name}),Object(p.jsxs)("span",{className:"".concat(c.ml10," ").concat(c.fileSize),children:["[",e.size,"]"]})]})}))})]})},v=a(54),h=a(52),O=a.n(h),g=a(74),N=a(157),k=a(165),y=a(160),S=a(161),C=a(162),w=a(163),z=a(167),B=Object(d.a)((function(){return{container:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px auto"},line:{flex:"1",height:1,background:"grey"},text:{fontSize:15,margin:"auto 5px",lineHeight:1.5}}})),I=function(e){var t=e.text,a=B();return Object(p.jsxs)("div",{className:a.container,children:[Object(p.jsx)("div",{className:a.line}),t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(s.a,{variant:"caption",color:"textSecondary",className:a.text,children:t}),Object(p.jsx)("div",{className:a.line})]})]})},F=a(53),T=a.n(F),L=a(75),W=a.n(L),G=a(166),R=Object(d.a)((function(){return{grid:{margin:"50px auto",padding:10},dividerText:{position:"relative","&:before":{}},border2:{borderRadius:2},fileUploadContainer:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},fileName:{position:"relative",fontSize:14,maxWidth:300,wordBreak:"break-all",maxHeight:75,color:"#4f4848",marginTop:10,padding:5,border:"1px solid grey",borderRadius:2,background:"#ececec"},clearBtn:{position:"absolute",top:-10,right:-10,height:20,width:20,border:"1px solid"},submitBtn:{margin:"15px auto",height:36},clearText:{marginBottom:10},loader:{animationDuration:"750ms",marginRight:10,color:"darkslateblue"},snack:{top:75},alert:{width:"100%",minWidth:250,background:"#f44336",color:"white","&>*>svg":{color:"white"}}}})),D=function(e){var t,a=R(),i=Object(n.useState)(""),c=Object(l.a)(i,2),r=c[0],d=c[1],u=Object(n.useState)(null),j=Object(l.a)(u,2),b=j[0],m=j[1],x=Object(n.useState)(!1),f=Object(l.a)(x,2),h=f[0],B=f[1],F=Object(n.useState)(null),L=Object(l.a)(F,2),D=L[0],P=L[1],E=Object(n.useRef)(),H=function(e){e.preventDefault(),A()},A=function(){var t=Object(g.a)(O.a.mark((function t(){var a,n,i,c,l,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(!0),a=new FormData,r?a.append("magnet",r):b&&a.append("file",b),{magnet:r},t.prev=4,t.next=7,W.a.post("http://localhost:3000/torrent",a,{headers:{"Content-Type":"application/json"}});case 7:n=t.sent,e.setCurrentStep(1,null===(i=n)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.data),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),P({open:!0,message:null===t.t0||void 0===t.t0||null===(l=t.t0.response)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.error});case 14:B(!1);case 15:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(o.a,{xs:10,sm:8,lg:6,className:a.grid,children:[Object(p.jsxs)("form",{onSubmit:H,children:[Object(p.jsx)(k.a,{variant:"filled",label:"Magnet or Hash",onChange:function(e){d(e.target.value)},className:a.border2,fullWidth:!0,value:r,disabled:b,InputProps:{endAdornment:r&&Object(p.jsx)(y.a,{children:Object(p.jsx)(S.a,{className:a.clearText,size:"small",onClick:function(){d("")},children:Object(p.jsx)(T.a,{size:"small"})})})}}),Object(p.jsx)(I,{text:"or"}),Object(p.jsxs)("div",{className:a.fileUploadContainer,children:[Object(p.jsxs)(C.a,{variant:"outlined",component:"label",className:a.border2,disabled:r,children:["Upload .torrent File",Object(p.jsx)("input",{type:"file",accept:".torrent",onChange:function(e){m(e.target.files[0])},hidden:!0,ref:E})]}),b&&Object(p.jsxs)(s.a,{className:a.fileName,children:[b.name," ",Object(p.jsx)(S.a,{size:"small",className:a.clearBtn,onClick:function(){m(null),E.current.value=""},children:Object(p.jsx)(T.a,{fontSize:"small"})})]})]}),Object(p.jsx)("br",{}),Object(p.jsx)(I,{}),Object(p.jsxs)(C.a,{variant:"contained",color:"primary",className:"".concat(a.border2," ").concat(a.submitBtn),disabled:!b&&!r||h,onClick:H,children:[h&&Object(p.jsx)(w.a,{className:a.loader,thickness:4.5,size:20})," ","Start Streaming"]})]}),Object(p.jsx)(z.a,{open:null===D||void 0===D?void 0:D.open,onClose:function(e,t){"clickaway"!==t&&P(null)},anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:function(e){return Object(p.jsx)(N.a,Object(v.a)(Object(v.a)({},e),{},{direction:"left"}))},autoHideDuration:2500,className:a.snack,children:Object(p.jsx)(G.a,{severity:"error",className:a.alert,children:null!==(t=null===D||void 0===D?void 0:D.message)&&void 0!==t?t:"Some error occured!"})})]})},P=Object(d.a)((function(){return{torrent:{color:"#ca0000"},headerBack:{background:"whitesmoke","&:hover":{cursor:"pointer"}}}})),E=function(e){var t=e.setCurrentStep,a=P();return Object(p.jsx)(o.a,{children:Object(p.jsxs)(s.a,{variant:"h2",className:a.headerBack,onClick:function(){t(0)},children:[Object(p.jsx)("span",{className:a.torrent,children:"Torrent"}),Object(p.jsx)("span",{className:a.stream,children:"Stream"})]})})},H=a(164),A=a(76),M=a.n(A),U=Object(d.a)((function(){return{grid:{margin:"50px auto",padding:"15px 10px",background:"#8b000036",borderRadius:2},playIcon:{marginRight:10},typoGrid:{display:"flex",alignItems:"center",margin:"15px 2.5%",flexWrap:"wrap"},ml10:{marginLeft:10},ml30:{marginLeft:30},fileName:{wordBreak:"break-all"},fileSize:{color:"#7b7b7b"},btn:{marginLeft:"auto",marginTop:5}}})),J=function(e){var t,a,n=e.video,i=U();var c=function(e,t){!function(e,t){var a=document.createElement("a");a.href=e,a.setAttribute("download",t),a.click()}("http://localhost:3000/stream?index=".concat(e),t)};return Object(p.jsxs)(o.a,{xs:10,sm:8,lg:6,className:i.grid,children:[NaN!==parseInt(null===n||void 0===n?void 0:n.index)&&Object(p.jsx)("video",{id:"videoPlayer",controls:!0,style:{width:"95%"},children:Object(p.jsx)("source",{src:"http://localhost:3000/stream?index=".concat(n.index),type:"video/mp4"})}),Object(p.jsxs)(s.a,{className:i.typoGrid,children:[Object(p.jsx)(H.a,{size:"small",className:i.playIcon}),Object(p.jsx)("span",{children:"Now Playing:"})]}),Object(p.jsxs)(s.a,{variant:"body2",className:"".concat(i.ml30," ").concat(i.typoGrid),children:[Object(p.jsx)("span",{className:"".concat(i.fileName),children:null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.name}),Object(p.jsxs)("span",{className:"".concat(i.ml10," ").concat(i.fileSize),children:["[",null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.size,"]"]}),Object(p.jsx)(C.a,{className:i.btn,size:"small",startIcon:Object(p.jsx)(M.a,{}),variant:"outlined",onClick:function(){var e;return c(null===n||void 0===n?void 0:n.index,null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.name)},children:"Download"})]})]})};var K=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)({}),r=Object(l.a)(c,2),o=r[0],s=r[1],d=Object(n.useState)({}),u=Object(l.a)(d,2),j=u[0],b=u[1],m=function(e,t){i(e),1===e?s(t):2===e&&b(t)};return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(E,{setCurrentStep:m}),0===a&&Object(p.jsx)(D,{setCurrentStep:m}),1===a&&Object(p.jsx)(f,{files:o,setCurrentStep:m}),2===a&&Object(p.jsx)(J,{video:j})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,168)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(K,{})}),document.getElementById("root")),q()},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.8cb9d65a.chunk.js.map