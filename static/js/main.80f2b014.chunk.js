(this.webpackJsonpcv_builder=this.webpackJsonpcv_builder||[]).push([[0],{133:function(e,t,n){},148:function(e,t,n){},153:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(25),o=n.n(c),r=n(199),s=n(17),l=n(14),d=n(204),j=n(200),u=n(205),b=n(209),h=n(208),m=n(201),p=n(210),O=n(211),x=n(198),g=n(112),v=n.n(g),f=n(114),y=n.n(f),k=n(213),w=n(207),C=n(206),N=n(113),S=n.n(N),D=n(197),I=n(212),q=(n(133),n(59)),A=n.n(q),L=n(78),P=n.n(L),T=n(103),R=n(81),z=n(53),B=n(54),E=n(41),_=n(100),G=n(101),F=n(82),W=(n(146),n(147),n(148),n(104)),M=n.n(W),V=n(107),H=n.n(V),J=n(2),K=function(e){var t=e.getData,n=e.imageSrc,i=Object(a.useState)(!1),c=Object(l.a)(i,2),o=c[0],r=c[1];return Object(J.jsxs)("div",{className:"container",children:[Object(J.jsxs)("button",{type:"button",onClick:function(){r(!0),t(!0,n)},className:"btn btn-primary rounded-circle mt-2 opaque profile-pic",disabled:o&&n,children:[(!o||!n)&&Object(J.jsx)(M.a,{fontSize:"large"}),o&&n&&Object(J.jsx)("img",{alt:"profile",src:n,className:"rounded-circle",width:"100%"})]}),o&&n&&Object(J.jsx)("button",{type:"button",className:"btn btn-danger rounded-circle position-relative delete-button",onClick:function(){r(!1),t(!1,"")},children:Object(J.jsx)(H.a,{fontSize:"small"})})]})},U=(n(152),n(153),n(108)),Z=n.n(U),Q=function(e){var t=e.getData,n=Object(a.useState)(""),i=Object(l.a)(n,2),c=i[0],o=i[1];return Object(J.jsxs)("div",{onMouseDown:function(e){return e.stopPropagation()},className:"container-fluid",children:[Object(J.jsxs)("div",{className:"row",children:[Object(J.jsx)("div",{className:"col-md-6 m-auto",children:Object(J.jsx)("div",{className:"mx-auto my-4 choose-file",children:Object(J.jsx)(Z.a,{imageWidth:270,width:"100%",height:180,onCrop:function(e){o(e)},onClose:function(){o("")},onBeforeFileLoad:function(){}})})}),Object(J.jsx)("div",{className:"col-md-6 m-auto",children:Object(J.jsx)("div",{className:"previewDiv rounded-circle m-auto",children:c&&Object(J.jsx)("img",{alt:"preview",src:c,width:"100%",height:"100%",className:"rounded-circle"})})})]}),Object(J.jsxs)("div",{className:"row",children:[Object(J.jsx)("div",{className:"col-6",children:Object(J.jsx)("button",{type:"button",className:"btn btn-secondary btn-md float-left ml-2 mb-3 text-center",style:{minWidth:"100px"},onClick:function(){t(!1,"")},children:"Cancel"})}),Object(J.jsx)("div",{className:"col-6",children:Object(J.jsx)("button",{type:"button",className:"btn btn-success btn-md float-right mr-2 mb-3 text-center",onClick:function(){t(!1,c)},disabled:!c,style:{minWidth:"100px"},children:"Ok"})})]})]})},X=n(3),Y=n.n(X),$=function(e){var t=e.portalDiv,n=e.children,i=Object(a.useState)(document.createElement("div")),c=Object(l.a)(i,1)[0],r=document.getElementById(t);return Object(a.useEffect)((function(){return r.appendChild(c),function(){r.removeChild(c)}}),[c,r]),o.a.createPortal(n,c)};$.propTypes={portalDiv:Y.a.string.isRequired,children:Y.a.instanceOf(Object).isRequired};var ee=$,te=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),r=o[0],s=o[1],d=function(e,t){i(e),s(t)};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(K,{getData:d,imageSrc:r}),Object(J.jsx)("div",{id:"createAvatarDiv"}),n&&!r&&Object(J.jsx)(ee,{portalDiv:"createAvatarDiv",children:Object(J.jsx)("div",{className:"createAvatarDiv_content m-auto",children:Object(J.jsx)(Q,{getData:d})})}),Object(J.jsx)("br",{})]})},ne=n(118),ae=n(117),ie=n(46),ce=["style","className"],oe=i.a.forwardRef((function(e,t){e.style;var n=e.className,i=(Object(ne.a)(e,ce),Object(a.useRef)(null));return Object(J.jsx)("div",{style:{width:"100%",padding:"5px"},className:n,ref:t,children:Object(J.jsx)(ae.a,{onMouseDown:function(e){return e.stopPropagation()},apiKey:"ht1s66g8hr4748lrtcv5l798fj6c75r02jantmzw7i4fglis",onInit:function(e,t){return i.current=t},inline:!0,init:{menubar:!0,placeholder:ie.a.t("section2_placeholder"),height:"900",plugins:["advlist autolink lists link image charmap preview anchor","searchreplace visualblocks emoticons","insertdatetime media table paste code hr"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | hr | emoticons",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:20px }"}})})})),re=Object(F.WidthProvider)(F.Responsive),se=function(e){Object(_.a)(n,e);var t=Object(G.a)(n);function n(e){var a;return Object(z.a)(this,n),(a=t.call(this,e)).onBreakpointChange=a.onBreakpointChange.bind(Object(E.a)(a)),a.onLayoutChange=a.onLayoutChange.bind(Object(E.a)(a)),a}return Object(B.a)(n,[{key:"createElement",value:function(e){var t,n=e.i;return 1===e.btn?t=Object(J.jsx)(te,{}):2===e.btn&&(t=Object(J.jsx)(oe,{})),Object(J.jsxs)("div",{"data-grid":e,children:[t,Object(J.jsx)("span",{className:"removeItem",style:{position:"absolute",right:"2px",top:0,cursor:"pointer"},onClick:this.onRemoveItem.bind(this,e.i),children:"x"})]},n)}},{key:"onBreakpointChange",value:function(e,t){this.setState({breakpoint:e,cols:t})}},{key:"onLayoutChange",value:function(e){this.setState({layout:e})}},{key:"onRemoveItem",value:function(e){this.props.removeItem(e)}},{key:"onDrage",value:function(e){this.setState({layout:e})}},{key:"render",value:function(){var e=this;return Object(J.jsx)("div",{children:Object(J.jsx)(re,Object(R.a)(Object(R.a)({onLayoutChange:this.onLayoutChange,onBreakpointChange:this.onBreakpointChange,onDrag:this.onDrag},this.props),{},{children:A.a.map(this.props.items,(function(t){return e.createElement(t)}))}))})}}]),n}(i.a.PureComponent);se.defaultProps={className:"layout",cols:{lg:12,md:10,sm:6,xs:4,xxs:2},rowHeight:100,compactType:null};var le=n(203),de=240,je=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(le.a)(),o=c.t,r=c.i18n,g=function(e){r.changeLanguage(e)};return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(d.a,{sx:{display:"flex"},children:[Object(J.jsx)(u.a,{position:"fixed",sx:{width:"calc(100% - ".concat(de,"px)"),ml:"".concat(de,"px")}}),Object(J.jsxs)(j.a,{sx:{width:de,flexShrink:0,"& .MuiDrawer-paper":{width:de,boxSizing:"border-box"}},variant:"permanent",anchor:"left",children:[Object(J.jsx)(C.a,{children:Object(J.jsxs)(D.a,{direction:"row",spacing:2,children:[Object(J.jsx)(w.a,{variant:"outlined",onClick:function(){return g("en")},children:"ENG"}),Object(J.jsx)(w.a,{variant:"outlined",onClick:function(){return g("vi")},children:"VIE"})]})}),Object(J.jsx)(h.a,{}),Object(J.jsx)(b.a,{children:Object(J.jsx)(m.a,{disablePadding:!0,children:Object(J.jsxs)(x.a,{onClick:function(){var e,t=document.querySelector(".page");P()(t,{onclone:function(t){for(e=0;e<t.querySelectorAll(".react-resizable-handle").length;e++)t.querySelectorAll(".react-resizable-handle")[e].style.visibility="hidden";for(e=0;e<t.querySelectorAll(".removeItem").length;e++)t.querySelectorAll(".removeItem")[e].style.visibility="hidden";for(e=0;e<t.querySelectorAll(".delete-button").length;e++)t.querySelectorAll(".delete-button")[e].style.visibility="hidden"}}).then((function(e){var t=e.toDataURL("image/png"),n=210*e.height/e.width,a=n,i=new T.a("p","mm","a4"),c=0;for(i.addImage(t,"PNG",0,c,210,n+10),a-=297;a>=0;)c=a-n,i.addPage(),i.addImage(t,"PNG",0,c,210,n+10),a-=297;i.save("CV-".concat((new Date).toLocaleString("vi",{timeZoneName:"short"}),".pdf"))}))},children:[Object(J.jsx)(p.a,{children:Object(J.jsx)(v.a,{})}),Object(J.jsx)(O.a,{primary:o("Download")})]})})}),Object(J.jsx)(h.a,{}),Object(J.jsxs)(k.a,{orientation:"vertical","aria-label":"vertical outlined button group",children:[Object(J.jsx)(w.a,{variant:"contained",endIcon:Object(J.jsx)(S.a,{}),onClick:function(){i([].concat(Object(s.a)(n),[{i:"n"+n.length,x:2*n.length,y:n.length+1,w:2,h:1,btn:1}]))},children:o("section1")}),Object(J.jsx)(w.a,{variant:"contained",endIcon:Object(J.jsx)(y.a,{}),onClick:function(){i([].concat(Object(s.a)(n),[{i:"n"+n.length,x:2*n.length,y:n.length+1,w:2,h:1,btn:2}]))},children:o("section2")})]}),Object(J.jsx)("br",{}),Object(J.jsx)(I.a,{paragraph:!0,children:o("tips")}),Object(J.jsx)("br",{}),Object(J.jsx)(I.a,{paragraph:!0,children:o("todo")})]}),Object(J.jsx)(d.a,{class:"container-fluid",component:"main",sx:{flexGrow:1,p:3},children:Object(J.jsx)("div",{class:"book",children:Object(J.jsx)("div",{class:"page",children:Object(J.jsx)("div",{class:"subpage",id:"editor-container",children:Object(J.jsx)(se,{items:n,removeItem:function(e){i(A.a.reject(n,["i",e]))}})})})})})]})})},ue=n(115),be=n(49);ie.a.use(ue.a).use(be.e).init({resources:{en:{translations:{Download:"Download",section1:"Create avatar",section2:"Create text field",section2_placeholder:"Type something in...",section3:"Create timeline",tips:"Tip: Drag avatar's width to full page to see preview correctly then drag it smaller again",todo:"Create timeline template, clean up code"}},vi:{translations:{Download:"T\u1ea3i xu\u1ed1ng",section1:"T\u1ea1o \u1ea3nh \u0111\u1ea1i di\u1ec7n",section2:"T\u1ea1o tr\u01b0\u1eddng nh\u1eadp li\u1ec7u",section2_placeholder:"G\xf5 v\xe0o \u0111\xe2y...",section3:"T\u1ea1o d\xf2ng th\u1eddi gian",tips:"Tip: K\xe9o \u1ea3nh \u0111\u1ea1i di\u1ec7n t\u1edbi h\u1ebft chi\u1ec1u d\xe0i trang gi\u1ea5y \u0111\u1ec3 hi\u1ec7n \u0111\xfang xem tr\u01b0\u1edbc r\u1ed3i k\xe9o nh\u1ecf l\u1ea1i",todo:"T\u1ea1o m\u1eabu d\xf2ng th\u1eddi gian, t\u1ed1i \u01b0u code"}}},fallbackLng:"en",debug:!1,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1}});ie.a;o.a.render(Object(J.jsx)(r.a,{injectFirst:!0,children:Object(J.jsx)(je,{})}),document.querySelector("#root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.80f2b014.chunk.js.map