(this.webpackJsonpfpt_source_part2=this.webpackJsonpfpt_source_part2||[]).push([[14],{369:function(e){e.exports=JSON.parse('{"cropped_idcard":"https://i.pinimg.com/originals/63/21/ae/6321aea41990552b5148a00998413374.jpg","ethnicity":"KINH","religion":"KH\xd4NG","issue_date":"10/10/2007","issue_loc":"TP H\xc0 N\u1ed8I"}')},777:function(e,a,t){"use strict";t.r(a);var s=t(30),n=t.n(s),i=t(37),c=t(51),l=t(9),r=t(10),o=t(12),d=t(11),h=t(0),m=t(225),u=t.n(m),p=t(1),b=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("div",{className:"card text-left",children:[Object(p.jsxs)("div",{className:"card-body",children:[this.props.dulieushh.cropped_idcard&&Object(p.jsx)("img",{className:"card-img-top",width:"120px",src:this.props.dulieushh.cropped_idcard,alt:"demo"}),this.props.dulieushh&&Object(p.jsx)("img",{className:"card-img-top",width:"120px",src:this.props.dulieushh,alt:""})]}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"card-body",style:{paddingTop:"0px"},children:[this.props.dulieushh.ethnicity&&Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["D\xe2n t\u1ed9c : ",this.props.dulieushh.ethnicity]}),this.props.dulieushh.religion&&Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["T\xf4n gi\xe1o : ",this.props.dulieushh.religion]}),this.props.dulieushh.issue_date&&Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["Ng\xe0y c\u1ea5p : ",this.props.dulieushh.issue_date]}),this.props.dulieushh.issue_loc&&Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["N\u01a1i c\u1ea5p : ",this.props.dulieushh.issue_loc]})]})})]})})})}}]),t}(h.Component),j=t(369),g=t(4),x=t(270),y=t.n(x),O=(t(271),t(21)),v=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).isChange=function(e){var a=e.target.name,t=e.target.value;s.setState(Object(c.a)({},a,t))},s.handleTakePhoto=function(e){console.log("takePhoto"+e),s.setState({dataBase64:e.slice(22)})},s.Haller=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{}.image_url=s.state.image_url,e.next=4,u.a.post(s.state.giayto).send({image_base64:s.state.dataBase64}).send({image_url:s.state.image_url}).send({face:1}).set("Content-Type","application/x-www-form-urlencoded").set("api_key",s.hamngoai()).end((function(e,a){if(e)alert("h\u1ebft h\u1ea1n s\u1ed1 l\u01b0\u1ee3t g\u1ecdi");else switch(s.setState({tempulary:a.text}),a.body.errorCode){case 3:alert("h\u1ec7 th\u1ed1ng kh\xf4ng t\xecm th\u1ea5y CMT trong \u1ea3nh ho\u1eb7c \u1ea3nh c\xf3 ch\u1ea5t l\u01b0\u1ee3ng k\xe9m (qu\xe1 m\u1edd, qu\xe1 t\u1ed1i/s\xe1ng).");break;case 1:alert("Sai th\xf4ng s\u1ed1 trong request (v\xed d\u1ee5 kh\xf4ng c\xf3 key ho\u1eb7c \u1ea3nh trong request body).");break;case 2:alert("CMT trong \u1ea3nh b\u1ecb thi\u1ebfu g\xf3c n\xean kh\xf4ng th\u1ec3 crop v\u1ec1 d\u1ea1ng chu\u1ea9n.");break;case 5:alert(" Request s\u1eed d\u1ee5ng key image_url nh\u01b0ng gi\xe1 tr\u1ecb b\u1ecf tr\u1ed1ng.");break;case 6:alert("Request s\u1eed d\u1ee5ng key image_url nh\u01b0ng h\u1ec7 th\u1ed1ng kh\xf4ng th\u1ec3 m\u1edf \u0111\u01b0\u1ee3c URL n\xe0y.");break;case 7:alert("File g\u1eedi l\xean kh\xf4ng ph\u1ea3i l\xe0 file \u1ea3nh.");break;case 8:alert(" File \u1ea3nh g\u1eedi l\xean b\u1ecb h\u1ecfng ho\u1eb7c format kh\xf4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3.");break;case 9:alert(" Request s\u1eed d\u1ee5ng key image_base64 nh\u01b0ng gi\xe1 tr\u1ecb b\u1ecf tr\u1ed1ng.");break;case 10:alert("Request s\u1eed d\u1ee5ng key image_base64 nh\u01b0ng string cung c\u1ea5p kh\xf4ng h\u1ee3p l\u1ec7.");break;case 0:localStorage.setItem("mahoan2",JSON.parse(a.text).data[0]);break;default:return null}}));case 4:case"end":return e.stop()}}),e)}))),s.hamngoai=function(){return s.state.datas[s.state.datas.length-1]},s.ButtonsClean=function(){localStorage.removeItem("mahoan2"),window.location.reload(),s.props.ThuchienthaydoitrangthaiA(),s.props.ThuchienlaydulieuA("ti\u1ebfn tr\xecnh l\xe0m s\u1ea1ch th\xe0nh c\xf4ng ")},s.ShowKeyss=function(){if(s.state.data2)return s.state.data2.map((function(e,a){return Object(p.jsx)("option",{value:e.name,children:e.name},a)}))},s.ShowKeyss2=function(){if(s.state.data2)return s.state.data2.map((function(e,a){return Object(p.jsx)("option",{value:e.stt,children:e.stt},a)}))},s.updatedatahehe=function(){var e={};if(s.state.persion&&s.state.persion2)if(s.state.tempulary){var a=JSON.parse(s.state.tempulary).data[0];e.namess=s.state.persion,e.key=s.state.persion2,e.ethnicity=a.ethnicity,e.ngayhethan=a.issue_date,e.noicap=a.issue_loc,e.tonhiao=a.religion,s.props.ThucHienQuyTrinhLayData(e),s.props.ThuchienthaydoitrangthaiA(),s.props.ThuchienlaydulieuA("ti\u1ebfn tr\xecnh t\u1ea3i l\xean m\u1eb7t sau cho "+s.state.persion+" th\xe0nh c\xf4ng ")}else e.namess=s.state.persion,e.key=s.state.persion2,e.ethnicity=s.state.data.ethnicity,e.ngayhethan=s.state.data.issue_date,e.noicap=s.state.data.issue_loc,e.tonhiao=s.state.data.religion,s.props.ThucHienQuyTrinhLayData(e),s.props.ThuchienthaydoitrangthaiA(),s.props.ThuchienlaydulieuA("ti\u1ebfn tr\xecnh t\u1ea3i l\xean m\u1eb7t sau cho "+s.state.persion+" th\xe0nh c\xf4ng ");else null===s.state.persion?(s.props.ThuchienthaydoitrangthaiA(),s.props.ThuchienlaydulieuA("Ch\xfang t\xf4i ph\xe1t hi\u1ec7n b\u1ea1n c\xf2n thi\u1ebfu th\xf4ng tin h\u1ecd t\xean c\u1ea7n update")):null===s.state.persion2?(s.props.ThuchienthaydoitrangthaiA(),s.props.ThuchienlaydulieuA("Ch\xfang t\xf4i ph\xe1t hi\u1ec7n b\u1ea1n c\xf2n thi\u1ebfu th\xf4ng tin key \u0111\u1ec3 update")):(s.props.ThuchienthaydoitrangthaiA(),s.props.ThuchienlaydulieuA("Ch\xfang t\xf4i ph\xe1t hi\u1ec7n b\u1ea1n c\xf2n thi\u1ebfu th\xf4ng tin \u0111\u1ec3 update"))},s.chuyengiatrisangchokhacnha=function(){if(s.state.tempulary){var e=s.state.tempulary;return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"col",children:Object(p.jsxs)("div",{className:"card text-left",children:[Object(p.jsx)("div",{className:"card-body",children:Object(p.jsx)("img",{className:"card-img-top",width:"120px",src:JSON.parse(e).data[0].cropped_idcard,alt:"demo"})}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"card-body",style:{paddingTop:"0px"},children:[Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["D\xe2n t\u1ed9c : ",JSON.parse(e).data[0].ethnicity]}),Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["T\xf4n gi\xe1o : ",JSON.parse(e).data[0].religion]}),Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["Ng\xe0y c\u1ea5p : ",JSON.parse(e).data[0].issue_date]}),Object(p.jsxs)("h5",{className:"card-title color_mana mb-20",style:{marginBottom:"23px"},children:["N\u01a1i c\u1ea5p : ",JSON.parse(e).data[0].issue_loc]})]})})]})})})}return Object(p.jsx)(b,{dulieushh:s.state.data})},s.state={image_url:"",data:"",data2:"",persion:"",giayto:"",dataBase64:"",datas:[Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_WEATHER_API_KEY:"xmZjFzpHjFc2fEYQy1odP62MJaQ2"}).REACT_APP_API_KEY],persion2:"",tempulary:null},s}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(g.e.on("value",(function(a){var t=[];a.forEach((function(e){var a=e.val();t.push(a)})),e.setState({datas:t})})),"toduyen0402@gmail.com"===JSON.parse(localStorage.getItem("dataUserNamePush")).email){var a=g.b;a.on("value",(function(t){var s=[];t.forEach((function(e){a.child(e.key).child("DataCard").on("value",(function(e){e.forEach((function(e){var a=e.key,t=e.val().key,n=e.val().name;s.push({stt:a,key:t,name:n})}))}))})),e.setState({data2:s})}))}else g.b.child(JSON.parse(localStorage.getItem("dataUserNamePush")).key).child("DataCard").on("value",(function(a){var t=[];a.forEach((function(e){var a=e.key,s=e.val().key,n=e.val().name;t.push({stt:a,key:s,name:n})})),e.setState({data2:t})}));if(null===localStorage.getItem("mahoan2"))localStorage.setItem("mahoan2",JSON.stringify(j));else{var t=JSON.parse(localStorage.getItem("mahoan2"));this.setState({data:t})}}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"input-group mb-3 mt-5",children:[Object(p.jsx)("input",{type:"text",className:"form-control",onChange:function(a){return e.isChange(a)},placeholder:"import link images",name:"image_url","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),Object(p.jsxs)("div",{className:"input-group-append",children:[Object(p.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:".JPG/.JPEG/.PNG"}),Object(p.jsxs)("button",{type:"button",className:"btn btn-success",onClick:function(){return e.Haller()},children:[Object(p.jsx)("i",{className:"fas fa-archway"}),"Ph\xe2n ti\u0301ch"]}),Object(p.jsxs)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",children:[Object(p.jsx)("i",{className:"fas fa-cloud-upload-alt"}),"G\u01b0\u0309i d\u01b0\u0303 li\xea\u0323u"]}),Object(p.jsxs)("button",{type:"button",className:"btn btn-warning",onClick:function(){return e.ButtonsClean()},children:[Object(p.jsx)("i",{className:"fas fa-eraser"}),"T\xe2\u0309y"]}),Object(p.jsxs)("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter3",children:[Object(p.jsx)("i",{className:"fas fa-cogs"}),"Ca\u0300i \u0111\u0103\u0323t"]}),Object(p.jsxs)("button",{type:"button",className:"btn btn-dark","data-toggle":"modal","data-target":"#exampleModalCenter2",children:[Object(p.jsx)("i",{className:"fas fa-video"}),"Open webcam"]})]}),Object(p.jsx)("div",{className:"modal fade",id:"exampleModalCenter3",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLongTitle",children:"L\u1ef1a ch\u1ecdn gi\u1ea5y t\u1edd ph\xf9 h\u1ee3p"}),Object(p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsx)("div",{className:"form-row",children:Object(p.jsx)("div",{className:"form-group col-md-12",children:Object(p.jsxs)("select",{className:"form-control form-control-sm",onChange:function(a){return e.isChange(a)},name:"giayto",children:[Object(p.jsx)("option",{value:!0,children:"Ch\u1ecdn lo\u1ea1i gi\u1ea5y t\u1edd"}),Object(p.jsx)("option",{value:"/vision/idr/vnm",children:"Ch\u1ee9ng minh nh\xe2n d\xe2n v\xe0 c\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n"}),Object(p.jsx)("option",{value:"/vision/dlr/vnm",children:"Gi\u1ea5y ph\xe9p l\xe1i xe"}),Object(p.jsx)("option",{value:"/vision/passport/vnm",children:"H\u1ed9 chi\u1ebfu"})]})})})}),Object(p.jsx)("div",{className:"modal-footer",children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",children:"Save change"})})]})})}),Object(p.jsx)("div",{className:"modal fade",id:"exampleModalCenter2",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(p.jsxs)("div",{className:"modal-content",style:{width:"800px"},children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLongTitle",children:"Camera HD"}),Object(p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(p.jsxs)("div",{className:"modal-body",children:[Object(p.jsx)("div",{className:"form-row",children:Object(p.jsx)("div",{className:"form-group col-md-12",children:Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsx)("div",{children:Object(p.jsx)(y.a,{onTakePhoto:function(a){return e.handleTakePhoto(a)}})})})})}),Object(p.jsx)("div",{className:"form-group",children:this.state.dataBase64&&Object(p.jsx)("div",{className:"alert alert-primary",role:"alert",children:Object(p.jsxs)("pre",{children:["D\u1eef li\u1ec7u m\xe3 h\xf3a : ",Object(p.jsx)("a",{href:"/",className:"alert-link",children:this.state.dataBase64})]})})})]}),Object(p.jsx)("div",{className:"modal-footer",children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",children:"Save change"})})]})})})]}),this.chuyengiatrisangchokhacnha(),Object(p.jsx)("div",{className:"modal fade",id:"exampleModalCenter",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLongTitle",children:"B\u1ea3ng d\u1eef li\u1ec7u \u0111\xe3 update l\xean t\u1eeb m\u1eb7t tr\u01b0\u1edbc"}),Object(p.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(p.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("div",{className:"form-row",children:[Object(p.jsx)("div",{className:"form-group col-md-6",children:Object(p.jsxs)("select",{multiple:!0,className:"form-control",onChange:function(a){return e.isChange(a)},name:"persion",id:"exampleFormControlSelect2",children:[Object(p.jsx)("option",{value:!0,children:"--- T\xean th\xe0nh vi\xean ---"}),this.ShowKeyss()]})}),Object(p.jsx)("div",{className:"form-group col-md-6",children:Object(p.jsxs)("select",{multiple:!0,className:"form-control",onChange:function(a){return e.isChange(a)},name:"persion2",id:"exampleFormControlSelect2",children:[Object(p.jsx)("option",{value:!0,children:"--- Ch\u1ecdn m\xe3 s\u1ed1 key ---"}),this.ShowKeyss2()]})})]})}),Object(p.jsx)("div",{className:"modal-footer",children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return e.updatedatahehe()},children:"Save change"})})]})})})]})}}]),t}(h.Component);a.default=Object(O.b)((function(e,a){return{ThucHienUpdatematSauState:e.updatematsau}}),(function(e,a){return{ThucHienQuyTrinhLayData:function(a){e({type:"GET_DATA_MASTER_BACK",getitem:a})},ThuchienthaydoitrangthaiA:function(){e({type:"TRANG_THAI"})},ThuchienlaydulieuA:function(a){e({type:"GETDATA",getitem:a})}}}))(v)}}]);
//# sourceMappingURL=14.3b27a5f7.chunk.js.map