(this.webpackJsonpfpt_source_part2=this.webpackJsonpfpt_source_part2||[]).push([[3],{151:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(27),c=a.n(i),r=(a(82),a(10)),s=a(11),o=a(13),l=a(12),u=(a(83),a(9)),h=a(52),d=a(23),j=a(2),b=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).HanLer=function(){e.props.ThayDOiTrangThai()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)(h.b,{children:Object(j.jsx)(h.a,{timeout:8e3,onDismiss:function(){return e.HanLer()},type:"success",children:this.props.ThucHienTrangThaiDuLieu})})}}]),a}(n.Component),m=Object(d.b)((function(e,t){return{ThucHienTrangThaiDuLieu:e.thongbao.getdata}}),(function(e,t){return{ThayDOiTrangThai:function(){e({type:"TRANG_THAI"})}}}))(b),p=a(31),f=a.n(p),g=a(41),O=a(19),v=a.n(O),x=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"login",children:[Object(j.jsx)("button",{className:"github",onClick:function(){return e.props.authenticate("Github")},children:"Log In With Github"}),Object(j.jsx)("button",{className:"facebook",onClick:function(){return e.props.authenticate("Facebook")},children:"Log In With Facebook"})]})}}]),a}(n.Component),y=a(6),N=a(8),k=a(3);function w(e){var t=function(t){Object(o.a)(n,t);var a=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={Component:n.Component},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(t,a){var i=this;this.state.Component||e().then((function(e){n.Component=e,i.setState({Component:e})}))}},{key:"render",value:function(){var e=this.state.Component;return e?Object(j.jsx)(e,Object(k.a)({},this.props)):null}}]),n}(n.Component);return t.Component=null,t}var T=a(74),A=a(39),S=function(e){var t=e.component,a=Object(T.a)(e,["component"]);return Object(j.jsx)(N.b,Object(k.a)(Object(k.a)({},a),{},{render:function(e){return A.a.isAuthenticated?Object(j.jsx)(t,Object(k.a)({},e)):Object(j.jsx)(N.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},D=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).Home=w((function(){return a.e(19).then(a.bind(null,762)).then((function(e){return e.default}))})),e.FormText=w((function(){return Promise.all([a.e(0),a.e(2),a.e(1),a.e(8),a.e(9)]).then(a.bind(null,760)).then((function(e){return e.default}))})),e.FormTextBack=w((function(){return Promise.all([a.e(0),a.e(2),a.e(14)]).then(a.bind(null,766)).then((function(e){return e.default}))})),e.DanhsachTable=w((function(){return a.e(13).then(a.bind(null,763)).then((function(e){return e.default}))})),e.FormInForVsEdit=w((function(){return Promise.all([a.e(24),a.e(12)]).then(a.bind(null,761)).then((function(e){return e.default}))})),e.Language_speed_ai=w((function(){return Promise.all([a.e(0),a.e(1),a.e(6),a.e(10)]).then(a.bind(null,757)).then((function(e){return e.default}))})),e.New=w((function(){return a.e(18).then(a.bind(null,767)).then((function(e){return e.default}))})),e.DataLanguage=w((function(){return a.e(20).then(a.bind(null,768)).then((function(e){return e.default}))})),e.NewDeltal=w((function(){return Promise.all([a.e(11),a.e(17)]).then(a.bind(null,765)).then((function(e){return e.default}))})),e.Palte=w((function(){return a.e(21).then(a.bind(null,758)).then((function(e){return e.default}))})),e.Infos=w((function(){return a.e(16).then(a.bind(null,764)).then((function(e){return e.default}))})),e.Login=w((function(){return a.e(15).then(a.bind(null,759)).then((function(e){return e.default}))})),e}return Object(s.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(N.d,{children:[Object(j.jsx)(N.b,{exact:!0,path:"/",component:this.Home}),Object(j.jsx)(N.b,{path:"/mat-truoc",component:this.FormText}),Object(j.jsx)(N.b,{path:"/mat-sau",component:this.FormTextBack}),Object(j.jsx)(N.b,{path:"/danh-sach",component:this.DanhsachTable}),Object(j.jsx)(N.b,{path:"/du-lieu-update-no-ai",component:this.Palte}),Object(j.jsx)(S,{path:"/thong-ke",component:this.FormInForVsEdit}),Object(j.jsx)(S,{path:"/giong-noi",component:this.Language_speed_ai}),Object(j.jsx)(S,{path:"/hien-thi-danh-sach",component:this.New}),Object(j.jsx)(S,{path:"/du-lieu-giong-noi",component:this.DataLanguage}),Object(j.jsx)(S,{path:"/chi-tiet-tai-lieu/:slug.:id.html",component:this.NewDeltal}),Object(j.jsx)(S,{path:"/thong-tin-he-thong",component:this.Infos}),Object(j.jsx)(N.b,{path:"/login",component:this.Login})]})})}}]),n}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark static-top",children:[Object(j.jsxs)("a",{className:"navbar-brand mr-1 fontssss",href:"/",children:[Object(j.jsx)("img",{src:"https://i.imgur.com/sygcnNv.png",className:"anhdaidien",alt:"iconImage"}),"H\u1ec7 th\u1ed1ng thu th\u1eadp d\u1eef li\u1ec7u v\xe0 qu\u1ea3n l\xfd gi\u1ea5y t\u1edd t\xf9y th\xe2n"]}),Object(j.jsx)("form",{className:"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0"}),Object(j.jsx)("ul",{className:"navbar-nav ml-auto ml-md-0",children:Object(j.jsxs)("li",{className:"nav-item dropdown no-arrow",children:[Object(j.jsxs)("a",{className:"nav-link dropdown-toggle",href:"/",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:["xmZjFzpHjFc2fEYQy1odP62MJaQ2"===this.props.uid?Object(j.jsxs)("small",{className:"alert alert-dark",role:"alert",children:["Ng\u01b0\u01a1\u0300i truy c\xe2\u0323p ",this.props.email," Quy\xea\u0300n cao nh\xe2\u0301t"]}):Object(j.jsxs)("small",{className:"alert alert-dark",role:"alert",children:["Ng\u01b0\u01a1\u0300i truy c\xe2\u0323p ",this.props.email]}),Object(j.jsx)("img",{src:this.props.avatar,alt:"logo",style:{width:"40px"}})]}),Object(j.jsxs)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"userDropdown",children:[Object(j.jsx)("a",{className:"dropdown-item",href:"/",children:Object(j.jsxs)("span",{children:["\u0110i\u0323a chi\u0309 Email : ",this.props.email]})}),Object(j.jsx)("a",{className:"dropdown-item",href:"/",children:Object(j.jsxs)("span",{children:["Ma\u0303 id : ",this.props.uid]})}),Object(j.jsx)("a",{className:"dropdown-item",href:"/",children:this.props.displayName?Object(j.jsxs)("span",{children:["T\xean truy c\xe2\u0323p : ",this.props.displayName]}):Object(j.jsx)("span",{children:"T\xean truy c\xe2\u0323p : Kh\xf4ng co\u0301"})}),Object(j.jsx)("a",{className:"dropdown-item",href:"/",children:this.props.emailVerified?Object(j.jsx)("span",{children:"\u0110a\u0303 xa\u0301c th\u01b0\u0323c th\u01b0 tha\u0300nh c\xf4ng"}):Object(j.jsx)("span",{children:"Y\xeau c\xe2\u0300u ki\xea\u0309m tra th\u01b0 \u0111i\xea\u0323n t\u01b0\u0309"})}),Object(j.jsx)("div",{className:"dropdown-divider"}),Object(j.jsx)("a",{className:"dropdown-item",href:"/","data-toggle":"modal","data-target":"#logoutModal",children:this.props.dangxuat}),Object(j.jsx)("a",{className:"dropdown-item",href:"/","data-toggle":"modal","data-target":"#logoutModal",children:this.props.yeucau})]})]})})]})}}]),a}(n.Component),C=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("ul",{className:"sidebar navbar-nav",children:"xmZjFzpHjFc2fEYQy1odP62MJaQ2"===this.props.uids?Object(j.jsxs)("li",{className:"nav-item active",children:[Object(j.jsxs)(u.c,{className:"nav-link",to:"/",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-home"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Home"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/thong-ke",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-fw fa-tachometer-alt"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Statistics"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/mat-truoc",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-meh"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Card front"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/mat-sau",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"far fa-meh"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Back of card"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/du-lieu-update-no-ai",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"far fa-grin-tongue-wink"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Manual input"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/danh-sach",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-list-alt"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"List of data"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/giong-noi",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-microphone-alt"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Create text to speech"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/hien-thi-danh-sach",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-address-book"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"List of text"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/du-lieu-giong-noi",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-archive"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Audio list"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/thong-tin-he-thong",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-cogs"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Setting"})]})]}):Object(j.jsxs)("li",{className:"nav-item active",children:[Object(j.jsxs)(u.c,{className:"nav-link",to:"/mat-truoc",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-meh"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Card front"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/mat-sau",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"far fa-meh"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Back of card"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/du-lieu-update-no-ai",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"far fa-grin-tongue-wink"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"Manual input"})]}),Object(j.jsxs)(u.c,{className:"nav-link",to:"/danh-sach",activeStyle:{fontWeight:"bold",color:"red"},children:[Object(j.jsx)("i",{className:"fas fa-list-alt"}),Object(j.jsx)("span",{style:{marginLeft:"15px"},children:"List of data"})]})]})})}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("footer",{className:"sticky-footer",children:Object(j.jsx)("div",{className:"container my-auto",children:Object(j.jsx)("div",{className:"copyright text-center my-auto",children:Object(j.jsx)("span",{children:"Copyright \xa9 Your Website 2019"})})})})}}]),a}(n.Component),_=a(73),E=function(){return A.a.isAuthenticated?Object(j.jsxs)("p",{children:["Welcome!"," PhanTuan "]}):Object(j.jsx)("p",{children:"Tu\u0300y quy\xea\u0300n ma\u0300 se\u0303 hi\xea\u0323n ch\u01b0\u0301c n\u0103ng t\u01b0\u01a1ng \u01b0\u0301ng ho\u0103\u0323c m\xf4\u0323t va\u0300i ti\u0301nh n\u0103ng se\u0303 kh\xf4ng \u0111\u01b0\u01a1\u0323c chuy\xea\u0309n h\u01b0\u01a1\u0301ng"})},H=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).authHandler=function(){var e=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.user;case 2:a=e.sent,n.setState({email:a.email,displayName:a.displayName,uid:a.uid,photoURL:a.photoURL,emailVerified:a.emailVerified},(function(){n.props.layID(a.uid)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.authenticate=function(e){var t=new(v.a.auth["".concat(e,"AuthProvider")]);y.a.auth().signInWithPopup(t).then(n.authHandler)},n.logout=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.auth().signOut();case 2:n.setState({email:null,displayName:null,uid:null}),window.location.reload();case 4:case"end":return e.stop()}}),e)}))),n.sukienTaiDuLieu=function(){var e=[];if(n.state.data.forEach((function(t){-1!==t.email.indexOf(n.state.email)&&(localStorage.setItem("dataUserNamePush",JSON.stringify(t)),e.push(t))})),e.length>0)console.log("tru\u0300ng r\xf4\u0300i");else if(0===e.length){var t={};t.displayName=n.state.displayName,t.email=n.state.email,t.uid=n.state.uid,n.props.senDataFirebase(t)}},n.state={email:null,displayName:null,uid:null,photoURL:null,emailVerified:null,data:[]},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){null===localStorage.getItem("dataUserNamePush")&&localStorage.setItem("dataUserNamePush",JSON.stringify(_))}},{key:"componentDidMount",value:function(){var e=this;v.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})})),y.b.on("value",(function(t){var a=[];t.forEach((function(e){var t=e.key,n=e.val().email;a.push({email:n,key:t})})),e.setState({data:a})}))}},{key:"render",value:function(){var e=Object(j.jsx)("button",{onClick:this.logout,children:"Log Out! Auth Github or Facebook"}),t=Object(j.jsx)("button",{onClick:this.sukienTaiDuLieu,children:"Y\xeau c\xe2\u0300u ki\u0301ch hoa\u0323t t\u01b0\u0323 \u0111\xf4\u0323ng"});return this.state.email?Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)(L,{dangxuat:e,yeucau:t,avatar:this.state.photoURL,email:this.state.email,uid:this.state.uid,emailVerified:this.state.emailVerified,displayName:this.state.displayName}),Object(j.jsxs)("div",{id:"wrapper",children:[Object(j.jsx)(C,{uids:this.state.uid}),Object(j.jsx)("div",{id:"content-wrapper",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(D,{}),Object(j.jsx)(E,{}),Object(j.jsx)(I,{})]})})]})]}):Object(j.jsx)(x,{authenticate:this.authenticate})}}]),a}(n.Component),P=Object(d.b)((function(e,t){return{reducerStateLoginAuth:e.reducerStateLoginAuth,reducerPushDatauser:e.reducerPushDatauser}}),(function(e,t){return{layID:function(t){e({type:"CHANGE_STATE_LOGIN",getString:t})},senDataFirebase:function(t){e({type:"INSERT_DATA_USER_OAUTH",newItem:t})}}}))(H),U=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).showthongbao=function(){if(!0===n.props.changthai)return Object(j.jsx)(m,{})},n.state={photoURL:"https://i.pinimg.com/564x/e6/57/55/e65755e73d8085e30aedfa21fde07f1b.jpg"},n}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(u.a,{children:[this.showthongbao(),Object(j.jsx)(P,{})]})}}]),a}(n.Component),W=Object(d.b)((function(e,t){return{changthai:e.thongbao.chang}}),(function(e,t){return{Getdata:function(){e({type:"TRANG_THAI"})}}}))(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F={Nhandata:{}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_UPDATE":return y.b.child(JSON.parse(localStorage.getItem("dataUserNamePush")).key).child("DataCard").child(t.getupdate.key).update({name:t.getupdate.name,id:t.getupdate.id,dob:t.getupdate.dob,home:t.getupdate.home,address:t.getupdate.address,sex:t.getupdate.sex}),Object(k.a)(Object(k.a)({},e),{},{Nhandata:t.getupdate});default:return e}},R={Dle:{}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"XOA_CUC_DO":return y.b.child(JSON.parse(localStorage.getItem("dataUserNamePush")).key).child("DataCard").child(t.xoa).remove(),Object(k.a)(Object(k.a)({},e),{},{Dle:t.xoa});default:return e}},M={getdata:{}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANG_GETDATA":return y.f.push(t.getitem),Object(k.a)(Object(k.a)({},e),{},{getdata:t.getitem});default:return e}},V={Deledata:{}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_DATA":return y.f.child(t.deteitem).remove(),Object(k.a)(Object(k.a)({},e),{},{Deledata:t.deteitem});default:return e}},Y={getdata:{},chang:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETDATA":return Object(k.a)(Object(k.a)({},e),{},{getdata:t.getitem});case"TRANG_THAI":return Object(k.a)(Object(k.a)({},e),{},{chang:!e.chang});default:return e}},K={getdata:{}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA_MASTER_BACK":return y.b.child(JSON.parse(localStorage.getItem("dataUserNamePush")).key).child("DataCard").child(t.getitem.key).update({namess:t.getitem.namess,ethnicity:t.getitem.ethnicity,ngayhethan:t.getitem.ngayhethan,noicap:t.getitem.noicap,tonhiao:t.getitem.tonhiao}),Object(k.a)(Object(k.a)({},e),{},{getdata:t.getitem});default:return e}},X={Nhangiatriapimoi:"ae09e31509b6444381556e772689eb09"},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_API":return console.log(JSON.stringify(e.Nhangiatriapimoi)),y.e.push(t.getdata),Object(k.a)(Object(k.a)({},e),{},{Nhangiatriapimoi:t.getdata});default:return e}},$={LuuData2:{}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LAY_DATA_DECODE":return console.log(JSON.stringify(t.getitem)),y.d.push(t.getitem),Object(k.a)(Object(k.a)({},e),{},{LuuData2:t.getitem});default:return e}},te={getdata:{}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUAQR":return y.d.child(t.getupdate.key).update({check:t.getupdate.check}),y.d.once("value").then((function(e){console.log(e.val())})),console.log(JSON.stringify(t.getupdate)),Object(k.a)(Object(k.a)({},e),{},{getdata:t.getitem});default:return e}},ne={LuuData2:{}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"THEM_LAN_THOI":return y.c.child("-M0mOkIPdhmNv2bXua7h").update({hienThiThongBao:t.getupdate.hienThiThongBao,outtaikhoan:t.getupdate.outtaikhoan,treem:t.getupdate.treem,nhomatchu:t.getupdate.nhomatchu}),console.log(JSON.stringify(t.getupdate)),Object(k.a)(Object(k.a)({},e),{},{getdata:t.getitem});default:return e}},ce={dataLogin:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_STATE_LOGIN":return Object(k.a)(Object(k.a)({},e),{},{dataLogin:t.getString});default:return e}},se={newUserName:{}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_DATA_USER_OAUTH":var a=Object(k.a)(Object(k.a)({},e),{},{newUserName:t.newItem});return a.newUserName.uid&&y.b.push(a.newUserName),e;case"THEMMOI_VAO_NUT_CHA":var n=y.b.push().key,i={};return i["DataCard/"+n]=t.ganGiatri,y.b.child(JSON.parse(localStorage.getItem("dataUserNamePush")).key).update(i),e;default:return e}},le=a(48),ue=le.combineReducers({updatedata:G,xoa:J,thuchienluudata:B,thuchienxoaaudios:Q,thongbao:z,updatematsau:q,nhaplieuapi:Z,laymaDecode:ee,suamaQR:ae,themmoimotIDs:ie,reducerStateLoginAuth:re,reducerPushDatauser:oe}),he=le.createStore(ue);c.a.render(Object(j.jsx)(d.a,{store:he,children:Object(j.jsx)(W,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,a){"use strict";var n={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}};t.a=n},6:function(e,t,a){"use strict";a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return s}));var n=a(19),i=a.n(n),c=a(72),r=a.n(c),s=i.a.initializeApp({apiKey:"AIzaSyBMuNhWnFCaVvv6rgIyNmk0dnTm6a4fJCI",authDomain:"getdataai.firebaseapp.com",databaseURL:"https://getdataai.firebaseio.com",projectId:"getdataai",storageBucket:"",messagingSenderId:"368706777855",appId:"1:368706777855:web:230bb006041bcf82"}),o=i.a.database().ref("Note1"),l=i.a.database().ref("Note3"),u=i.a.database().ref("Note4"),h=i.a.database().ref("Note5"),d=i.a.database().ref("Demo");r.a.createClass(i.a.database())},73:function(e){e.exports=JSON.parse('[{"key":""}]')},82:function(e,t,a){},83:function(e,t,a){}},[[151,4,7]]]);
//# sourceMappingURL=main.e2c49ded.chunk.js.map