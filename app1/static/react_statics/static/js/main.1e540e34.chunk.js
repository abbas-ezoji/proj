(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},213:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(24),o=t.n(i),l=(t(100),t(101),t(21)),c=t(78),s=t.n(c),m=t(80),u=t.n(m),d=t(10),p=t.n(d),h=t(52),E=t.n(h),f=t(17),g=t.n(f),v=t(81),b=t.n(v);var w=Object(l.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(u.a,null,r.a.createElement(g.a,{className:a.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(b.a,null)),r.a.createElement(p.a,{variant:"h6",color:"inherit",className:a.grow},"News"),r.a.createElement(E.a,{color:"inherit"},"Login"))))}),x=t(32),k=t(33),y=t(34),j=t(36),O=t(35),N=t(37),S=t(18),C=t.n(S),A=t(93),L=t.n(A),T=t(38),B=t.n(T),G=t(94),M=t.n(G),R=t(39),D=t.n(R),W=t(31),z=t.n(W),H=t(5),J=t.n(H),q=t(82),I=t.n(q),$=t(83),_=t.n($),F=t(86),K=t.n(F),P=t(53),Q=t.n(P),U=t(87),V=t.n(U),X=t(91),Y=t.n(X),Z=t(84),ee=t.n(Z),ae=t(51),te=t.n(ae),ne=t(88),re=t.n(ne),ie=t(89),oe=t.n(ie),le=t(90),ce=t.n(le),se=t(85),me=t.n(se),ue=function(e){function a(){var e,t;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(j.a)(this,(e=Object(O.a)(a)).call.apply(e,[this].concat(r)))).state={expanded:!1},t.handleExpandClick=function(){t.setState(function(e){return{expanded:!e.expanded}})},t}return Object(N.a)(a,e),Object(y.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(I.a,{className:e.card},r.a.createElement(_.a,{avatar:r.a.createElement(ee.a,{"aria-label":"Recipe",className:e.avatar},"R"),action:r.a.createElement(g.a,null,r.a.createElement(me.a,null)),title:this.props.item.title,subheader:this.props.item.pub_date}),r.a.createElement(K.a,{className:e.media,image:this.props.item.pohto,title:"\u0646\u0645\u0648\u0646\u0647 \u0639\u06a9\u0633"}),r.a.createElement(Q.a,null,r.a.createElement(p.a,{component:"p"},this.props.item.comment)),r.a.createElement(V.a,{className:e.actions,disableActionSpacing:!0},r.a.createElement(g.a,{"aria-label":"Add to favorites"},r.a.createElement(re.a,null)),r.a.createElement(g.a,{"aria-label":"Share"},r.a.createElement(oe.a,null)),r.a.createElement(g.a,{className:J()(e.expand,Object(x.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(ce.a,null))),r.a.createElement(Y.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(Q.a,null,r.a.createElement(p.a,{paragraph:!0},"Method:"),r.a.createElement(p.a,{paragraph:!0},"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."),r.a.createElement(p.a,{paragraph:!0},"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."),r.a.createElement(p.a,{paragraph:!0},"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"),r.a.createElement(p.a,null,"Set aside off of the heat to let rest for 10 minutes, and then serve."))))}}]),a}(r.a.Component),de=Object(l.withStyles)(function(e){return{card:{maxWidth:400},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:te.a[500]}}})(ue),pe=t(54),he=t.n(pe),Ee=t(92);function fe(){return(fe=Object(Ee.a)(he.a.mark(function e(a){var t,n,r;return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0==a?"http://127.0.0.1:8000/api/villa/?format=json":"http://127.0.0.1:8000/api/villa/".concat(a).concat("/?format=json"),console.log("villas: "+t),e.next=4,fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}var ge=function(e){return fe.apply(this,arguments)},ve=function(e){var a=e.item;e.index;return r.a.createElement(C.a,{key:a.id,item:!0},r.a.createElement(de,{item:a}))},be=function(e){function a(e){var t;return Object(k.a)(this,a),(t=Object(j.a)(this,Object(O.a)(a).call(this,e))).handleChange=function(e){return function(a,n){t.setState(Object(x.a)({},e,n))}},t.state={spacing:"1",error:null,isLoaded:!1,items:[]},t}return Object(N.a)(a,e),Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;ge(0).then(function(a){e.setState({isLoaded:!0,items:a})},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.spacing,n=a.error,i=a.isLoaded,o=a.items;return n?r.a.createElement("div",null,"Error: ",n.message):i?r.a.createElement(C.a,{container:!0,className:e.root,spacing:2},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(C.a,{container:!0,className:e.demo,justify:"center",spacing:Number(t)},o.map(function(e,a){return r.a.createElement(ve,{item:e,index:a,key:e.id})}))),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(z.a,{className:e.control},r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0},r.a.createElement(L.a,null,"spacing"),r.a.createElement(M.a,{name:"spacing","aria-label":"Spacing",value:t,onChange:this.handleChange("spacing"),row:!0},r.a.createElement(B.a,{value:"1",control:r.a.createElement(D.a,null),label:"1"}),r.a.createElement(B.a,{value:"2",control:r.a.createElement(D.a,null),label:"2"}),r.a.createElement(B.a,{value:"3",control:r.a.createElement(D.a,null),label:"3"}))))))):r.a.createElement("div",null,"Loading...")}}]),a}(r.a.Component),we=Object(l.withStyles)(function(e){return{root:{flexGrow:1},paper:{width:100}}})(be);var xe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(we,{container:!0,spacing:24},r.a.createElement(we,{item:!0,md:3})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,a,t){e.exports=t(213)}},[[95,1,2]]]);
//# sourceMappingURL=main.1e540e34.chunk.js.map