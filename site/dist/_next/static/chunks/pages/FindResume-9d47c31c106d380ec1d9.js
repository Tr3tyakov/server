(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{6708:function(e,t,n){"use strict";var r=n(5893),i=n(4699),a=n(7294),s=n(6958),c=n(8610);t.Z=function(e){var t=e.classes,n=e.setFilter,o=e.title,l=a.useState(""),d=(0,i.Z)(l,2),u=d[0],x=d[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("form",{onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),n(u))},className:t.form,children:(0,r.jsx)(s.Z,{variant:"filled",value:u,label:o,fullWidth:!0,onChange:function(e){var t=e.target.value;x(t)}})}),(0,r.jsx)(c.Z,{className:t.filterBtn,variant:"contained",color:"primary",onClick:function(){n(u)},children:"\u041d\u0430\u0439\u0442\u0438"})]})}},7212:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(2174)),a=n(7642),s=n(5894);t.Z=function(e){var t=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(s.Z,{m:"20px 0",children:(0,r.jsx)(a.Z,{maxWidth:"md",children:(0,r.jsx)(r.Fragment,{children:t})})})]})}},5741:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return N},default:function(){return E}});var r=n(5893),i=n(7757),a=n.n(i),s=n(7329),c=n(2137),o=n(4699),l=n(7294),d=n(7272),u=n(4592),x=n(7212),f=n(6708),p=n(9669),h=n.n(p),m=n(8658),v=n(5894),j=n(1664),Z=n(8610),g=n(6112),w=(0,n(376).Z)({paper:{padding:"20px",margin:"5px 0",width:"100%",display:"flex",justifyContent:"space-between"},textDecoration:{textDecoration:"none"},avatar:{borderRadius:"5px"},btn:{padding:"5px 10px"}}),y=n(5675),_=n(4642),b=function(e){var t=e.resume,n=e.id,i=w();return(0,r.jsx)(j.default,{href:"/currentResume/".concat(n),children:(0,r.jsx)("a",{style:{textDecoration:"none"},children:(0,r.jsxs)(g.Z,{className:i.paper,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Z,{variant:"h6",children:t.desiredPosition}),(0,r.jsxs)(d.Z,{variant:"subtitle2",children:[t.desiredPay,"\xa0\u0440\u0443\u0431."]}),(0,r.jsx)(d.Z,{variant:"subtitle2",children:"".concat(t.mainInfo.name," ").concat(t.mainInfo.secondName)}),(0,r.jsx)(d.Z,{variant:"subtitle2",children:t.mainInfo.email}),(0,r.jsx)(d.Z,{variant:"subtitle2",children:t.education}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsxs)(d.Z,{color:"textSecondary",gutterBottom:!0,children:["\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e: ",(0,r.jsx)("br",{}),new Date(t.date).toLocaleString()]})}),(0,r.jsx)(Z.Z,{className:i.btn,color:"primary",variant:"contained",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})]}),(0,r.jsx)("div",{children:t.mainInfo.avatar?(0,r.jsx)(v.Z,{m:2,children:(0,r.jsx)(y.default,{className:i.avatar,src:"https://next-tailwind-project.herokuapp.com/".concat(t.mainInfo.avatar),layout:"intrinsic",width:100,height:100,alt:"avatar"})}):(0,r.jsx)(_.Z,{})})]})})})},N=!0,E=function(e){var t=e.AllResume,n=e.countResume,i=l.useState(""),p=(0,o.Z)(i,2),Z=p[0],g=p[1],w=l.useState(2),y=(0,o.Z)(w,2),_=y[0],N=y[1],E=l.useState(!1),S=(0,o.Z)(E,2),C=S[0],D=S[1],k=l.useState(t),F=(0,o.Z)(k,2),I=F[0],P=F[1],W=l.useState(n),B=(0,o.Z)(W,2),L=B[0],R=(B[1],(0,u.y)()),T=l.useMemo((function(){return I.filter((function(e){return e.desiredPosition.toLowerCase().includes(Z.toLowerCase())}))}),[Z,I]);l.useEffect((function(){C&&function(){var e=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("".concat(m.J,"/resume?page=").concat(_));case 2:t=e.sent,D(!1),N((function(e){return e+1})),P([].concat((0,s.Z)(I),(0,s.Z)(t.data.resumeData)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[C]),l.useEffect((function(){return document.addEventListener("scroll",H),function(){document.removeEventListener("scroll",H)}}));var H=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.scrollTop;t-window.innerHeight-n<100&&I.length<L&&D(!0)};return(0,r.jsx)(x.Z,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:R.flex,children:(0,r.jsx)(f.Z,{classes:R,setFilter:g,title:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"})}),(0,r.jsxs)(v.Z,{display:"flex",children:[(0,r.jsx)(v.Z,{margin:"0 10px 0 0",children:(0,r.jsx)(j.default,{href:"/FindVacancies",children:(0,r.jsx)("a",{className:R.textDecoration,children:(0,r.jsx)(d.Z,{variant:"h6",gutterBottom:!0,color:"textSecondary",children:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"})})})}),(0,r.jsx)(v.Z,{children:(0,r.jsx)(d.Z,{variant:"h6",gutterBottom:!0,children:"\u0420\u0435\u0437\u044e\u043c\u0435"})})]}),T.map((function(e){return(0,r.jsx)(b,{id:e._id,resume:e},e._id)}))]})})}},4592:function(e,t,n){"use strict";n.d(t,{y:function(){return r}});var r=(0,n(376).Z)({modal:{display:"flex",justifyContent:"center",alignItems:"center"},paperModal:{padding:"20px",maxWidth:"500px"},paper:{padding:"20px",maxWidth:"450px",width:"100%",minWidth:"250px"},p:{margin:0},example:{margin:"0",color:"#303f9f",cursor:"pointer"},flex:{display:"flex"},filterBtn:{marginLeft:"10px"},textDecoration:{textDecoration:"none"},cardsWrapper:{display:"flex",flexWrap:"wrap",justifyContent:"center"},container:{margin:"20px auto"},white:{color:"white"},form:{width:"100%",position:"relative"},positionBtn:{position:"absolute!important",zIndex:1e3,top:"0",height:"55px",right:"0"},btn:{padding:"5px 10px"}})},9948:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/FindResume",function(){return n(5741)}])}},function(e){e.O(0,[844,99,174,774,888,179],(function(){return t=9948,e(e.s=t);var t}));var t=e.O();_N_E=t}]);