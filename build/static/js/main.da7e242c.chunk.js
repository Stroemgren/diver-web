(window["webpackJsonpdiver-web"]=window["webpackJsonpdiver-web"]||[]).push([[0],{156:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),i=n.n(o),c=(n(99),n(4)),l=n(21),s=n(38),u=n(177),m=n(178),p=n(91),d=Object(p.a)({palette:{primary:{main:"#0C7ED9"},secondary:{main:"#FF8C20"}},typography:{fontFamily:["Muli","sans-serif"].join(",")}}),f=n(29),b=n(73),h=n.n(b),g=function(e){var t=h.a.create({responseType:"json"});return t.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),t.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t(e)},y=function(e){return{type:"LOAD_LOCATIONS",locations:e}};function O(){return function(e,t){g({method:"get",url:"http://157.245.3.84:3000/location"}).then((function(t){e(y(t.data))})).catch((function(e){}))}}var v=n(11),E=function(e){var t=e.router.location.pathname.split("/").filter((function(e){return""!==e})),n="dive-spot"===t[0]?t[1]:null;return n&&n in e.spots.byId?e.spots.byId[n]:null},j=function(e){return Object.values(e.spots.byId)},x=n(5),w=n(74),T=n.n(w),C=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var P={zoom:8},D=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},P,{},e),n=t.center,r=t.children,o=t.zoom;return a.a.createElement(T.a,{bootstrapURLKeys:{key:"AIzaSyCbiVq77U94A6g0sEK59tcKlKj_1NFMZkE"},center:{lat:n.latitude,lng:n.longitude},defaultZoom:6,zoom:o,options:{styles:C,disableDefaultUI:!0}},r)},S=n(75),N=n(6);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var z=n(140),R={color:"primary"},F=function(e){var t=L(e),n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},R,{},e),r=n.color,o=n.onClick,i=n.active,c=Object(N.a)(t.container,"primary"===r?t.primary:t.secondary,o&&t.clickable,i&&t.active);return a.a.createElement("div",{onClick:function(){o&&o()},className:c},a.a.createElement("div",null))},L=Object(S.a)((function(e){return{container:{position:"absolute",transform:"translate(-50%, -50%)",width:"20px",height:"20px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center","& div":{width:"8px",height:"8px",borderRadius:"50%"}},active:{width:"30px",height:"30px"},primary:{backgroundColor:z(e.palette.primary.main).fade(.65).rgb().string(),"& div":{backgroundColor:e.palette.primary.main}},secondary:{backgroundColor:z(e.palette.secondary.main).fade(.65).rgb().string(),"& div":{backgroundColor:e.palette.secondary.main}},clickable:{cursor:"pointer"}}})),_=function(e){return e.map.center},B=function(e){return e.map.zoom},A=function(e){return{type:"SET_CENTER",coordinate:e}},M=function(e){return{type:"SET_ZOOM",zoom:e}},W=n(78),H=n.n(W),V=n(77),G=n.n(V),U=n(181),K=function(e){return e.router.location.pathname.split("/").filter((function(e){return""!==e}))},Z=n(93),q=function(e){var t=X(),n=e.icon,r=e.active,o=e.onClick;return a.a.createElement("div",{onClick:o,className:Object(N.a)(t.item,r&&t.itemActive)},n)},J=function(e){var t=X(),n=Object(c.e)(),r=Object(c.f)(K,Z.a);return a.a.createElement(U.a,{elevation:2,className:t.container},a.a.createElement(q,{onClick:function(){return n(Object(v.d)("/explore"))},active:"explore"===r[0],icon:a.a.createElement(G.a,null)}),a.a.createElement(q,{onClick:function(){return n(Object(v.d)("/map"))},active:"map"===r[0]||"dive-spot"===r[0],icon:a.a.createElement(H.a,null)}))},X=Object(S.a)((function(e){var t,n;return{container:Object(x.a)({backgroundColor:"#fff",display:"flex",flexDirection:"row",justifyContent:"center",zIndex:200,borderRadius:0},e.breakpoints.up("sm"),{flexDirection:"column"}),item:(t={cursor:"pointer",height:"56px",width:"48px",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},Object(x.a)(t,e.breakpoints.up("sm"),{height:"56px",width:"80px"}),Object(x.a)(t,"& .MuiSvgIcon-root",Object(x.a)({fontSize:"1.875rem",color:"rgba(0, 0, 0, 0.35)"},e.breakpoints.up("sm"),{fontSize:"2.1875rem",height:"80px",width:"56px"})),Object(x.a)(t,"&:hover",{"& .MuiSvgIcon-root":{color:"rgba(0, 0, 0, 0.45)"}}),t),itemActive:(n={borderBottom:"3px solid ".concat(e.palette.primary.main),borderLeft:"none"},Object(x.a)(n,e.breakpoints.up("sm"),{borderBottom:"none",borderLeft:"3px solid ".concat(e.palette.primary.main)}),Object(x.a)(n,"& .MuiSvgIcon-root",{marginLeft:"-3px",color:e.palette.primary.main}),Object(x.a)(n,"&:hover",{"& .MuiSvgIcon-root":{color:e.palette.primary.main}}),n)}})),Y=function(e){var t=e.children,n=$();return a.a.createElement("div",{className:n.container},a.a.createElement(J,{activeIndex:1}),a.a.createElement("div",{style:{display:"flex",flexGrow:1,height:"100%"}},t))},$=Object(S.a)((function(e){return{container:Object(x.a)({display:"flex",height:"100%",width:"100%",flexDirection:"column-reverse"},e.breakpoints.up("sm"),{flexDirection:"row"})}})),Q=function(e){return Object.values(e.centers.byId)},ee=function(e){return{type:"LOAD_CENTERS",centers:e}};function te(){return function(e,t){g({method:"get",url:"http://157.245.3.84:3000/center"}).then((function(t){e(ee(t.data))})).catch((function(e){}))}}var ne=n(174),re=n(179),ae=function(e){var t=oe(),n=e.children;return a.a.createElement(U.a,{elevation:3,className:t.container},n)},oe=Object(S.a)({container:{textAlign:"center",width:"250px",height:"100px",borderRadius:"5px",padding:"8px",transform:"translate(-50%, -50%)",marginTop:"-56px"}}),ie=function(e){var t=e.lat,n=e.lng,r=e.location,o=e.onViewClick;return a.a.createElement(ae,{lat:t,lng:n},a.a.createElement(ne.a,{variant:"overline",style:{fontSize:"0.65rem"}},r.locationType," dive"),a.a.createElement(ne.a,{variant:"h6",gutterBottom:!0,style:{fontSize:"1rem",marginTop:"-8px"}},r.name),a.a.createElement(re.a,{size:"small",color:"primary",onClick:o},"View"))},ce=function(e){le(e);var t=Object(c.e)(),n=Object(c.f)(j,c.d),o=Object(c.f)(Q,c.d),i=Object(c.f)(E,c.d),l=Object(c.f)(_,c.d),s=Object(c.f)(B,c.d),u=Object(r.useState)(null),m=Object(f.a)(u,2),p=m[0],d=m[1];Object(r.useEffect)((function(){t(O()),t(te())}),[t]),Object(r.useEffect)((function(){i&&(t(A(i.coordinate)),t(M(10)))}),[i,t]);return a.a.createElement(Y,null,a.a.createElement(D,{center:l,zoom:s},n.map((function(e){return a.a.createElement(F,{active:null!==i&&e.id===i.id,key:e.id,lat:e.coordinate.latitude,lng:e.coordinate.longitude,onClick:function(){return t(A((n=e).coordinate)),t(M(10)),void d(n);var n}})})),o.map((function(e){return a.a.createElement(F,{key:e.id,lat:e.coordinate.latitude,lng:e.coordinate.longitude,color:"secondary"})})),p&&a.a.createElement(ie,{location:p,lat:p.coordinate.latitude,lng:p.coordinate.longitude,onViewClick:function(){return t(Object(v.d)("/dive-spot/".concat(p.id)))}})))},le=Object(S.a)({container:{position:"relative",height:"100%",maxHeight:"100%",width:"100%"},backdrop:{width:"100%",height:"325px",top:0,overflow:"hidden"},mapFix:{height:"375px",marginTop:"-25px"},contentContainer:{position:"absolute",height:"100%",maxHeight:"100%",width:"100%",zIndex:75,overflowY:"scroll",top:0},content:{backgroundColor:"#fff",width:"100%",marginTop:"325px"}}),se=n(80),ue=n(30),me=n(81),pe=n(82),de=n(92),fe=function(e){return{type:"LOAD_WEATHER_FORECAST",weatherForecast:e}};var be=function(e,t){var n="".concat(t.latitude).concat(t.longitude);return n in e.weatherForecasts.byCoordinate?e.weatherForecasts.byCoordinate[n]:null},he=n(33),ge=n.n(he),ye=n(14),Oe=function(e){var t=Ee(),n={left:"flex-start",center:"space-around",right:"flex-end"}[e.align];return a.a.createElement("div",{style:{width:"".concat(e.width,"%"),justifyContent:n},className:t.segment},e.children)},ve=function(e){var t=Ee(e);return a.a.createElement("div",{className:t.root},a.a.createElement(Oe,{width:13,align:"left"},a.a.createElement("p",{className:t.title},e.title)),a.a.createElement(Oe,{width:18,align:"center"},a.a.createElement(ge.a,{className:t.attributeIcon,path:ye.i,title:"Wind",size:.6}),a.a.createElement("p",{className:t.attribute},e.wind,a.a.createElement("span",{className:t.attributePostfix},"m/s"))),a.a.createElement(Oe,{width:20,align:"center"},a.a.createElement(ge.a,{path:je[e.icon].icon,style:{fill:je[e.icon].color},size:.7})),a.a.createElement(Oe,{width:9,align:"left"},a.a.createElement("p",{className:t.attribute},e.minTemp,"\xb0C")),a.a.createElement(Oe,{width:31,align:"center"},a.a.createElement("div",{className:t.tempGraphContainer},a.a.createElement("div",{className:t.tempGraphBaseline}),a.a.createElement("div",{className:t.tempMinLine,style:{width:xe(e.minTemp)}}),a.a.createElement("div",{className:t.tempMaxLine,style:{width:xe(e.maxTemp)}}))),a.a.createElement(Oe,{width:9,align:"right"},a.a.createElement("p",{className:t.attribute,style:{color:"#222"}},e.maxTemp,"\xb0C")))},Ee=Object(S.a)((function(e){return{root:{display:"flex",flexDirection:"row",alignItems:"center"},segment:{display:"flex",flexDirection:"row",alignItems:"center"},title:{fontSize:"0.875rem",margin:0},attributeIcon:{marginRight:"4px",fill:e.palette.primary.main},attribute:{color:"#666",fontSize:"0.775rem",margin:"8px 0"},attributePostfix:{fontSize:"0.675rem",fontWeight:700},tempGraphContainer:{position:"relative",width:"100%",height:"15px",margin:"0 8px"},tempGraphBaseline:{position:"absolute",top:"7px",width:"100%",borderBottom:"1px dashed #ccc"},tempMinLine:{backgroundColor:"#ccc",height:"5px",borderBottomLeftRadius:"2px",borderTopLeftRadius:"2px",position:"absolute",right:"50%",top:"5px"},tempMaxLine:{backgroundColor:"#FF8C20",height:"5px",borderBottomRightRadius:"2px",borderTopRightRadius:"2px",position:"absolute",left:"50%",top:"5px"}}})),je={clearSky:{icon:ye.h,color:"#FF8C20"},fewClouds:{icon:ye.e,color:"#0791EC"},scatteredClouds:{icon:ye.d,color:"#0791EC"},brokenClouds:{icon:ye.d,color:"#0791EC"},rain:{icon:ye.g,color:"#030155"},showerRain:{icon:ye.f,color:"#030155"}},xe=function(e){return 2.5*(e<=40?e:40)/2},we=function(e){function t(){return Object(se.a)(this,t),Object(me.a)(this,Object(pe.a)(t).apply(this,arguments))}return Object(de.a)(t,e),Object(ue.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchWeatherForecast(this.props.coordinate)}},{key:"componentDidUpdate",value:function(e){e.coordinate!==this.props.coordinate&&this.props.fetchWeatherForecast(this.props.coordinate)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"24px"}},a.a.createElement(ve,{title:"Sun",icon:"clearSky",wind:3.6,minTemp:14,maxTemp:23}),a.a.createElement(ve,{title:"Mon",icon:"showerRain",wind:3.2,minTemp:13,maxTemp:23}),a.a.createElement(ve,{title:"Tue",icon:"fewClouds",wind:3.4,minTemp:10,maxTemp:18}),a.a.createElement(ve,{title:"Wed",icon:"scatteredClouds",wind:2.1,minTemp:10,maxTemp:19}),a.a.createElement(ve,{title:"Thu",icon:"scatteredClouds",wind:1.8,minTemp:17,maxTemp:26})))}}]),t}(a.a.Component),Te=Object(c.c)((function(e,t){return{weatherForecast:be(e,t.coordinate)}}),(function(e){return{fetchWeatherForecast:function(t){return e(function(e){return function(t,n){g({method:"get",url:"http://0.0.0.0:3000/weather?latitude=".concat(e.latitude,"&longitude=").concat(e.longitude)}).then((function(e){t(fe(e.data))})).catch((function(e){}))}}(t))}}}))(we),Ce=n(3),ke=function(e){e.children;var t=Object(Ce.a)(e,["children"]);return a.a.createElement(ne.a,Object.assign({variant:"h6"},t),e.children)},Pe=function(e){var t=Se();return a.a.createElement("div",{className:t.item},a.a.createElement(ge.a,{className:t.icon,path:e.icon,title:"User Profile",size:1}),a.a.createElement(ne.a,{className:t.text,variant:"body2"},e.text))},De=function(e){var t=Se(e),n=e.location;return a.a.createElement(U.a,{elevation:1,className:t.container},a.a.createElement(Pe,{icon:ye.a,text:n.entryType+" Entry"}),a.a.createElement(Pe,{icon:ye.b,text:n.locationType}),a.a.createElement(Pe,{icon:ye.c,text:"".concat(n.minDepth,"-").concat(n.maxDepth,"m")}))},Se=Object(S.a)({container:{display:"flex",flexDirection:"row",marginBottom:"24px",padding:"8px 0"},item:{display:"flex",flexGrow:1,flexDirection:"column",alignItems:"center"},icon:{marginBottom:"4px",fill:"#555"},text:{fontSize:"0.725rem",color:"#555"}}),Ne=function(e){var t=Ie(),n=e.children,r=Object(Ce.a)(e,["children"]);return a.a.createElement(ne.a,Object.assign({variant:"body2",className:t.text},r),n)},Ie=Object(S.a)({text:{fontSize:"0.825rem"}}),ze=function(e){var t=Re(),n=e.children,o=Object(r.useState)(!1),i=Object(f.a)(o,2),c=i[0],l=i[1];return a.a.createElement(a.a.Fragment,null,""!==n&&a.a.createElement("div",{className:t.container},a.a.createElement("div",{className:Object(N.a)(t.textContainer,!c&&t.textContainerClosed)},a.a.createElement(Ne,null,n)),a.a.createElement(re.a,{onClick:function(){l(!c)},size:"small",color:"primary",className:t.button},c?"View less":"View more")))},Re=Object(S.a)({container:{marginBottom:"24px"},textContainer:{marginBottom:"8px",position:"relative",height:"auto",overflow:"hidden"},textContainerClosed:{height:"52px",overflow:"hidden"},button:{margin:"0 auto",display:"block",textTransform:"none"}}),Fe=n(175),Le=n(180),_e=function(e){var t=Be(e);return a.a.createElement("div",{className:t.root},a.a.createElement(Fe.a,{cellHeight:100,cols:3},e.images.map((function(e,t){return a.a.createElement(Le.a,{key:t,cols:(t+1)%4===0?2:1},a.a.createElement("img",{alt:"",src:e}))}))))},Be=Object(S.a)({root:{marginBottom:"24px"}}),Ae=n(83),Me=n.n(Ae),We=n(84),He=n.n(We),Ve=n(85),Ge=n.n(Ve),Ue=n(86),Ke=n.n(Ue),Ze=n(87),qe=n.n(Ze),Je=function(e){var t=Xe(),n=e.coordinate;return a.a.createElement("div",{className:t.container},a.a.createElement("div",{style:{width:"120px",height:"120px",marginTop:"-20px",marginLeft:"-20px"}},a.a.createElement(D,{center:n},a.a.createElement(F,{lat:n.latitude,lng:n.longitude}))))},Xe=Object(S.a)({container:{width:"80px",height:"80px",borderRadius:"50%",overflow:"hidden"}}),Ye=function(e){var t=$e();return a.a.createElement(U.a,{className:t.container},a.a.createElement(Je,{coordinate:{latitude:56,longitude:12}}))},$e=Object(S.a)({container:{height:"120px"}}),Qe=n(176),et=function(e){var t=e.children,n=Object(Ce.a)(e,["children"]);return a.a.createElement(ne.a,Object.assign({variant:"h4",component:"h1"},n),t)},tt=n(88),nt=n.n(tt),rt=function(e){var t=at(),n=e.children,r=e.paragraph,o=Object(Ce.a)(e,["children","paragraph"]);return a.a.createElement("div",{className:t.container,style:{marginBottom:r?"16px":0}},a.a.createElement(nt.a,{className:t.icon}),a.a.createElement(ne.a,Object.assign({variant:"body1",className:t.text},o),n))},at=Object(S.a)((function(e){return{container:{display:"flex",flexDirection:"row",alignItems:"center"},icon:{fontSize:"1.125rem",marginRight:"2px",marginLeft:"-2px",color:e.palette.primary.main},text:{fontSize:"0.825rem",color:e.palette.primary.main}}})),ot=function(e){var t=e.title,n=e.place;return a.a.createElement("div",{style:{padding:"16px 0"}},a.a.createElement(et,null,t),a.a.createElement(rt,null,n))},it=function(e){var t=e.location,n=t.city?"".concat(t.city.name,", ").concat(t.country.name):t.country.name;return a.a.createElement("div",null,a.a.createElement("div",{style:{marginBottom:"24px"}},a.a.createElement(ot,{title:t.name,place:n})),a.a.createElement(Qe.a,{container:!0,spacing:4},a.a.createElement(Qe.a,{item:!0,sm:6,style:{width:"100%"}},a.a.createElement(ke,{paragraph:!0},"Description"),a.a.createElement(De,{location:t}),a.a.createElement(ze,null,e.location.description)),a.a.createElement(Qe.a,{item:!0,sm:6,style:{width:"100%"}},a.a.createElement(ke,{paragraph:!0},"Weather Forecast"),a.a.createElement(Te,{coordinate:e.location.coordinate}))),a.a.createElement(ke,{paragraph:!0},"Photos"),a.a.createElement(_e,{images:[Me.a,He.a,Ge.a,Ke.a,qe.a]}),a.a.createElement(ke,{paragraph:!0},"Nearby Locations"),a.a.createElement(Ye,null),a.a.createElement(ke,{paragraph:!0},"Nearby Centers"),a.a.createElement(Ye,null))},ct=n(39),lt=n.n(ct),st=function(e){return a.a.createElement("div",{style:{maxWidth:"1024px",margin:"0 auto"}},e.children)},ut=function(){var e=mt(),t=Object(c.e)(),n=Object(c.f)(j,c.d),o=Object(c.f)(Q,c.d),i=Object(c.f)(E,c.d),l=Object(c.f)(_,c.d),s=Object(c.f)(B,c.d),u=Object(r.useRef)(null),m=Object(r.useRef)(null),p=Object(r.useState)(!1),d=Object(f.a)(p,2),b=d[0],h=d[1];Object(r.useEffect)((function(){var e=function(){var e=m.current.getBoundingClientRect();h(e.top<1)};return u.current.addEventListener("scroll",lt()(e)),function(){return u.current.removeEventListener("scroll",lt()(e))}}),[lt.a]),Object(r.useEffect)((function(){t(O()),t(te())}),[t]),Object(r.useEffect)((function(){i&&(t(A(i.coordinate)),t(M(10)))}),[i,t]);return a.a.createElement(Y,null,a.a.createElement("div",{className:e.container},a.a.createElement(U.a,{style:{position:"absolute",top:0,left:0,right:0,zIndex:100,display:b?"block":"none",borderRadius:"0",padding:"0 32px"}},a.a.createElement(st,null,a.a.createElement(ot,{title:i?i.name:"",place:i?i.country.name:""}))),a.a.createElement("div",{className:e.backdrop},a.a.createElement("div",{className:e.mapFix},a.a.createElement(D,{center:l,zoom:s},n.map((function(e){return a.a.createElement(F,{active:null!==i&&e.id===i.id,key:e.id,lat:e.coordinate.latitude,lng:e.coordinate.longitude,onClick:function(){return n=e,t(Object(v.d)("/dive-spot/".concat(n.id))),t(A(n.coordinate)),void t(M(10));var n}})})),o.map((function(e){return a.a.createElement(F,{key:e.id,lat:e.coordinate.latitude,lng:e.coordinate.longitude,color:"secondary"})}))))),a.a.createElement("div",{className:e.contentContainer,ref:u},a.a.createElement("div",{className:e.content,ref:m},a.a.createElement(st,null,i&&a.a.createElement(it,{location:i}))))))},mt=Object(S.a)({container:{position:"relative",height:"100%",maxHeight:"100%",width:"100%"},backdrop:{width:"100%",height:"".concat(250,"px"),top:0,overflow:"hidden"},mapFix:{height:"".concat(300,"px"),marginTop:"-25px"},contentContainer:{position:"absolute",height:"100%",maxHeight:"100%",width:"100%",zIndex:75,overflowY:"scroll",top:0},content:{backgroundColor:"#fff",width:"100%",marginTop:"".concat(250,"px"),padding:"0 32px 24px 32px"}}),pt=function(){return a.a.createElement(Y,null,a.a.createElement(ne.a,{variant:"h4"},"Stay tuned!"))},dt=n(18),ft=n(22),bt=n(69),ht=n(89);function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gt(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{byId:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_CENTERS":return yt({},e,{byId:yt({},e.byId,{},t.centers.reduce((function(e,t){return yt({},e,Object(x.a)({},t.id,t))}),{}))})}return e};function vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vt(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{byId:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_LOCATIONS":return Et({},e,{byId:Et({},e.byId,{},t.locations.reduce((function(e,t){return Et({},e,Object(x.a)({},t.id,t))}),{}))})}return e};function xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function wt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xt(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{byCoordinate:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_WEATHER_FORECAST":var n="".concat(t.weatherForecast.coordinate.latitude).concat(t.weatherForecast.coordinate.longitude);return wt({},e,{byCoordinate:wt({},e.byCoordinate,Object(x.a)({},n,t.weatherForecast))})}return e};function Ct(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function kt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ct(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ct(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pt={center:{latitude:56,longitude:12},zoom:8},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CENTER":return kt({},e,{center:t.coordinate});case"SET_ZOOM":return kt({},e,{zoom:t.zoom})}return e},St=function(e){return Object(ft.c)({centers:Ot,map:Dt,router:Object(l.b)(e),spots:jt,weatherForecasts:Tt})},Nt=Object(dt.a)();var It=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ft.d;return Object(ft.e)(St(Nt),e,t(Object(ft.a)(Object(bt.a)(Nt),ht.a)))}(),zt=function(){return a.a.createElement(u.a,{theme:d},a.a.createElement(c.a,{store:It},a.a.createElement(l.a,{history:Nt},a.a.createElement(m.a,null),a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/dive-spot/:id",render:function(){return a.a.createElement(ut,null)}}),a.a.createElement(s.b,{path:"/map",render:function(){return a.a.createElement(ce,null)}}),a.a.createElement(s.b,{path:"/explore",render:function(){return a.a.createElement(pt,null)}}),a.a.createElement(s.b,{path:"/",render:function(){return a.a.createElement(s.a,{to:"/map"})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(zt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},83:function(e,t,n){e.exports=n.p+"static/media/image1.3cbb4587.jpg"},84:function(e,t,n){e.exports=n.p+"static/media/image2.9d7ce690.jpg"},85:function(e,t,n){e.exports=n.p+"static/media/image3.24ee4e51.jpg"},86:function(e,t,n){e.exports=n.p+"static/media/image4.a425af57.jpg"},87:function(e,t,n){e.exports=n.p+"static/media/image5.88671b52.jpg"},94:function(e,t,n){e.exports=n(156)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.da7e242c.chunk.js.map