(this["webpackJsonpreact-dashboard"]=this["webpackJsonpreact-dashboard"]||[]).push([[0],{222:function(e,a,t){e.exports=t(408)},408:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(12),c=t.n(r),i=t(440),m=t(56),o=t(82),s=t(21),d=t(437),u=t(458),E=t(438),p=t(439),g=t(441),b=t(38),f=t(443),h=t(475),w=t(476),v=t(447),y=t(478),N=t(448),k=t(449),x=t(450),O=t(433),j=t(435),I=t(436),C=t(442),T=t(444),D=t(451),L=[{id:1,title:"Profile",icon:l.a.createElement(O.a,null)},{id:2,title:"Videos",icon:l.a.createElement(j.a,null)},{id:3,title:"Settings",icon:l.a.createElement(I.a,null)}],S=Object(d.a)((function(e){return{appBar:{color:"#666666",background:"#ffffff",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",boxShadow:"none"},toolbar:Object(s.a)({marginLeft:64},e.breakpoints.down("sm"),{marginLeft:0}),icon:Object(s.a)({display:"none"},e.breakpoints.down("sm"),{display:"flex"}),iconButton:{padding:4},list:{padding:0},red:{color:"#ef3637"},hideInDesktop:Object(s.a)({},e.breakpoints.up("md"),{display:"none"})}})),B=function(e){var a=e.handleDrawerOpen,t=S(),r=Object(n.useState)(null),c=Object(m.a)(r,2),o=c[0],s=c[1];return l.a.createElement(E.a,{position:"fixed",className:t.appBar},l.a.createElement(p.a,{className:t.toolbar},l.a.createElement(i.a,{container:!0,alignItems:"center",spacing:2},l.a.createElement(i.a,{item:!0,className:t.hideInDesktop},l.a.createElement(g.a,{edge:"start",className:t.icon,onClick:a},l.a.createElement(C.a,null))),l.a.createElement(i.a,{item:!0,xs:!0},l.a.createElement(b.a,{variant:"h6",noWrap:!0},"Dashboard")),l.a.createElement(i.a,{item:!0},l.a.createElement(g.a,{className:t.iconButton},l.a.createElement(f.a,{badgeContent:3,color:"secondary"},l.a.createElement(T.a,null)))),l.a.createElement(i.a,{item:!0},l.a.createElement(g.a,{className:t.iconButton,onClick:function(e){return s(e.currentTarget)}},l.a.createElement(h.a,{src:"https://i.pravatar.cc/50"})),l.a.createElement(w.a,{keepMounted:!0,anchorEl:o,open:Boolean(o),onClose:function(){return s(null)}},l.a.createElement(v.a,{className:t.list},l.a.createElement(y.a,null,l.a.createElement(N.a,null,l.a.createElement(h.a,{src:"https://i.pravatar.cc/50"})),l.a.createElement(k.a,{primary:"Harry",secondary:"harrychiu1106@gmail.com"})),l.a.createElement(x.a,null),L.map((function(e){var a=e.id,t=e.title,n=e.icon;return l.a.createElement(y.a,{button:!0,key:a},l.a.createElement(N.a,null,n),l.a.createElement(k.a,{primary:t}))})),l.a.createElement(x.a,null),l.a.createElement(y.a,{button:!0},l.a.createElement(N.a,{className:t.red},l.a.createElement(D.a,null)),l.a.createElement(k.a,{primary:"Sign Out",className:t.red}))))))))},M=t(4),F=t(19),W=t(456),A=t(474),G=t(477),R=t(452),V=t(453),J=t(454),K=t(455),P=t(457),$=[{id:1,title:"Dashboard",icon:l.a.createElement(R.a,null)},{id:2,title:"Conversations",icon:l.a.createElement(V.a,null)},{id:3,title:"Library",icon:l.a.createElement(J.a,null)},{id:4,title:"Calendar",icon:l.a.createElement(K.a,null)}],H=Object(d.a)((function(e){return{toolbar:Object(o.a)({display:"flex",color:"#666666",alignItems:"center",justifyContent:"center"},e.mixins.toolbar,Object(s.a)({},e.breakpoints.down("sm"),{justifyContent:"flex-start"})),listItem:Object(s.a)({display:"flex",justifyContent:"center",color:"#666666",width:64,height:56},e.breakpoints.down("sm"),{width:280,justifyContent:"flex-start"}),listItemText:{marginLeft:e.spacing(2)},active:Object(s.a)({color:"#107ae4",borderRight:"3px solid #107ae4"},e.breakpoints.down("sm"),{borderRight:"none"})}})),Y=function(e){var a=e.open,t=e.handleDrawerClose,r=H(),c=Object(F.a)(),i=Object(n.useState)(1),o=Object(m.a)(i,2),s=o[0],d=o[1],u=Object(W.a)(c.breakpoints.down("sm"));return l.a.createElement(A.a,{open:a,anchor:"left",variant:u?null:"permanent",onClose:t},l.a.createElement("div",{className:r.toolbar},l.a.createElement(y.a,{button:!0,className:r.listItem},l.a.createElement(P.a,null),u&&l.a.createElement(k.a,{className:r.listItemText,primary:"React Dashboard"}))),l.a.createElement(x.a,null),l.a.createElement(v.a,null,$.map((function(e){var a=e.id,t=e.title,n=e.icon;return l.a.createElement(G.a,{key:a,title:t,placement:"right",arrow:!0},l.a.createElement(y.a,{button:!0,onClick:function(){return function(e){return d(e)}(a)},className:Object(M.a)(r.listItem,a===s?r.active:null)},n,u&&l.a.createElement(k.a,{className:r.listItemText,primary:t})))}))))},q=Object(d.a)((function(e){return{root:{display:"flex",background:"#f4f7fd"},content:Object(s.a)({width:"100%",marginLeft:64,padding:e.spacing(2)},e.breakpoints.down("sm"),{marginLeft:0,padding:e.spacing(1)}),toolbar:Object(o.a)({},e.mixins.toolbar)}})),z=function(e){var a=e.children,t=q(),n=l.a.useState(!1),r=Object(m.a)(n,2),c=r[0],i=r[1];return l.a.createElement("div",{className:t.root},l.a.createElement(u.a,null),l.a.createElement(B,{open:c,handleDrawerOpen:function(){i(!0)}}),l.a.createElement(Y,{open:c,handleDrawerClose:function(){i(!1)}}),l.a.createElement("main",{className:t.content},l.a.createElement("div",{className:t.toolbar}),a))},Q=t(465),U=t(459),X=t(460),Z=t(461),_=t(462),ee=t(463),ae=t(464),te=[{id:1,title:"Followers",description:"13.5k",stat:"",icon:l.a.createElement(U.a,null)},{id:2,title:"Likes",description:"7.8k",stat:1.6,icon:l.a.createElement(X.a,null)},{id:3,title:"Income",description:"29.1k",stat:-2.1,icon:l.a.createElement(Z.a,null)},{id:4,title:"Grow",description:"1.5k",stat:1.2,icon:l.a.createElement(_.a,null)}],ne=Object(d.a)((function(e){return{card:{display:"flex",alignItems:"center",flexDirection:"column",padding:e.spacing(2),height:"100%"},icon:{margin:e.spacing(1,0)},blue:{color:"#107ae4",background:"#e3f4fe"},purple:{color:"#7e69db",background:"#f3f1fd"},yellow:{color:"#ebb92d",background:"#fefae7"},green:{color:"#3db53d",background:"#eaf8ea"},up:{color:"#65b165"},down:{color:"#ef3637"},title:{padding:e.spacing(1,0)},bold:{fontWeight:"bold"}}})),le=function(){var e=ne(),a=function(a){switch(a){case 1:return e.blue;case 2:return e.purple;case 3:return e.yellow;case 4:return e.green;default:return null}},t=function(a){return a>0?e.up:e.down};return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{variant:"h4",className:e.title},"Overview"),l.a.createElement(i.a,{container:!0,spacing:3,justify:"space-between"},te.map((function(n){var r=n.id,c=n.icon,m=n.description,o=n.stat,s=n.title;return l.a.createElement(i.a,{item:!0,key:r,xs:12,md:6,lg:3},l.a.createElement(Q.a,{variant:"outlined",className:e.card},l.a.createElement(h.a,{className:Object(M.a)(e.icon,a(r))},c),l.a.createElement(b.a,{variant:"h3",className:e.bold},m),l.a.createElement(b.a,{variant:"subtitle1",color:"textSecondary",className:e.title},s),o?l.a.createElement(i.a,{container:!0,justify:"center",className:Object(M.a)(e.bold,t(o))},l.a.createElement(i.a,{item:!0},function(e){return e>0?l.a.createElement(ee.a,null):l.a.createElement(ae.a,null)}(o)),l.a.createElement(i.a,{item:!0},l.a.createElement(b.a,{className:e.bold},o,"%"))):"-"))}))))},re=t(466),ce=t(467),ie=t(468),me=t(469),oe=t(37),se=[{name:"Oct 02",followers:1579},{name:"Oct 05",followers:3125},{name:"Oct 09",followers:2532},{name:"Oct 13",followers:4301},{name:"Oct 17",followers:2130},{name:"Oct 24",followers:4536},{name:"Oct 31",followers:5987}],de={axisLine:!1,tickLine:!1,padding:{left:24}},ue={axisLine:!1,tickLine:!1},Ee=function(){return l.a.createElement(oe.d,{width:"100%",height:300},l.a.createElement(oe.c,{data:se},l.a.createElement(oe.a,{strokeDasharray:"3 3",vertical:!1}),l.a.createElement(oe.f,Object.assign({dataKey:"name"},de)),l.a.createElement(oe.g,ue),l.a.createElement(oe.e,null),l.a.createElement(oe.b,{type:"monotone",dataKey:"followers",stroke:"#8884d8"})))},pe=Object(d.a)((function(e){return{card:{margin:e.spacing(3,0)},content:{padding:e.spacing(5,4)},bold:{fontWeight:"bold"},icon:{width:36,height:36},green:{color:"#3cc03d"},yellow:{color:"#efcb54"},verticalMargin:{margin:e.spacing(3,0)}}})),ge=function(){var e=pe();return l.a.createElement(Q.a,{variant:"outlined",className:e.card},l.a.createElement(re.a,{title:"Follower Growth"}),l.a.createElement(x.a,null),l.a.createElement(ce.a,{className:e.content},l.a.createElement(i.a,{container:!0},l.a.createElement(i.a,{item:!0,xs:12,md:5,lg:4},l.a.createElement(b.a,{variant:"h3",className:e.bold},"9,673"),l.a.createElement(b.a,{variant:"h6",className:e.bold},"Gained Followers (last 30 days)"),l.a.createElement("div",{className:e.verticalMargin},l.a.createElement(i.a,{container:!0,alignItems:"center",spacing:2},l.a.createElement(i.a,{item:!0},l.a.createElement(ie.a,{className:Object(M.a)(e.icon,e.green)})),l.a.createElement(i.a,{item:!0},l.a.createElement(b.a,null,"You have a ",l.a.createElement("strong",{className:e.green},"11% growth")," in comparison",l.a.createElement("br",null),"with previous month."))),l.a.createElement(i.a,{container:!0,alignItems:"center",spacing:2},l.a.createElement(i.a,{item:!0},l.a.createElement(me.a,{className:Object(M.a)(e.icon,e.yellow)})),l.a.createElement(i.a,{item:!0},l.a.createElement(b.a,null,l.a.createElement("strong",null,"62%")," of 6,000 followers goal"))))),l.a.createElement(i.a,{item:!0,xs:12,md:7,lg:8},l.a.createElement(Ee,null)))))},be=t(470),fe=t(471),he=[{id:1,name:"Sara",watchTime:"13:23:06",likes:157},{id:2,name:"Mary",watchTime:"09:02:36",likes:128},{id:3,name:"Alex",watchTime:"07:18:24",likes:89},{id:4,name:"Aaron",watchTime:"07:09:17",likes:91},{id:5,name:"Elen",watchTime:"05:47:03",likes:53}],we=Object(d.a)({content:{padding:0},textCenter:{textAlign:"right"},grey:{color:"#666666"},blue:{color:"#107ae4"}}),ve=function(){var e=we();return l.a.createElement(Q.a,{variant:"outlined"},l.a.createElement(re.a,{title:"Fans"}),l.a.createElement(x.a,null),l.a.createElement(ce.a,{className:e.content},l.a.createElement(v.a,null,he.map((function(a){var t=a.id,n=a.name,r=a.watchTime,c=a.likes;return l.a.createElement(y.a,{button:!0,key:t},l.a.createElement(i.a,{container:!0,alignItems:"center"},l.a.createElement(i.a,{item:!0,xs:!0,container:!0,alignItems:"center"},l.a.createElement(i.a,{item:!0},l.a.createElement(N.a,null,l.a.createElement(h.a,{src:"https://i.pravatar.cc/50?img=".concat(t),className:e.avatar}))),l.a.createElement(i.a,{item:!0},l.a.createElement(k.a,{primary:n}))),l.a.createElement(i.a,{item:!0,xs:!0,container:!0,alignItems:"center",spacing:1},l.a.createElement(i.a,{item:!0},l.a.createElement(be.a,{className:e.grey})),l.a.createElement(i.a,{item:!0},l.a.createElement(k.a,{primary:"".concat(r),className:e.textCenter}))),l.a.createElement(i.a,{item:!0,xs:!0,container:!0,alignItems:"center",spacing:1},l.a.createElement(i.a,{item:!0},l.a.createElement(fe.a,{className:e.blue})),l.a.createElement(i.a,{item:!0},l.a.createElement(k.a,{primary:"".concat(c),className:e.textCenter})))))})))))},ye=t(472),Ne=Object(d.a)((function(e){return{image:{border:"1px solid #dddddd"},bold:{fontWeight:"bold"},blue:{color:"#107ae4"},red:{color:"#ef3637"},green:{color:"#3db53d"},verticalMargin:{margin:e.spacing(2,0)}}})),ke=function(){var e=Ne();return l.a.createElement(Q.a,{variant:"outlined"},l.a.createElement(re.a,{title:"Most Popular Video"}),l.a.createElement(x.a,null),l.a.createElement(ce.a,null,l.a.createElement(i.a,{container:!0,spacing:2,alignItems:"center"},l.a.createElement(i.a,{item:!0,xs:12,md:"auto"},l.a.createElement("img",{src:"https://picsum.photos/300/200",className:e.image,alt:"random"})),l.a.createElement(i.a,{item:!0,xs:12,md:"auto"},l.a.createElement(b.a,{variant:"h5",className:e.bold},"Vlog - Travel in Taiwan"),l.a.createElement(b.a,{variant:"subtitle2",color:"textSecondary"},"1,310,567 views"),l.a.createElement(i.a,{container:!0,alignItems:"center",className:e.verticalMargin,spacing:1},l.a.createElement(i.a,{item:!0},l.a.createElement(fe.a,{className:e.blue})),l.a.createElement(i.a,{item:!0},"13,159"),l.a.createElement(i.a,{item:!0},l.a.createElement(ye.a,{className:e.red})),l.a.createElement(i.a,{item:!0},"267")),l.a.createElement(b.a,{variant:"h4"},l.a.createElement("strong",{className:e.green},"$ 327,641"),l.a.createElement(b.a,{component:"span",color:"textSecondary"},"   $0.25/click"))))))},xe=function(){return l.a.createElement(z,null,l.a.createElement(le,null),l.a.createElement(ge,null),l.a.createElement(i.a,{container:!0,spacing:3},l.a.createElement(i.a,{item:!0,xs:12,md:5},l.a.createElement(ve,null)),l.a.createElement(i.a,{item:!0,xs:12,md:7},l.a.createElement(ke,null))))};c.a.render(l.a.createElement(xe,null),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.8c59b92b.chunk.js.map