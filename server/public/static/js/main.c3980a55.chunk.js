(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,a){},272:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(23),o=a.n(s),i=(a(128),a(189),a(42)),l=a(38),u=a(49),j=(a(190),a(8)),d=a(29),b=a(277),h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return Object(j.a)({},e)})).auth,a=Object(l.g)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.a,{expand:"sm",className:"navbackground",children:[Object(n.jsx)(b.a.Brand,{children:Object(n.jsx)(i.b,{className:"nav-link d-flex align-items-center navbarcolor",to:"/",children:Object(n.jsx)("h1",{children:"Hotels"})})}),Object(n.jsx)(b.a.Toggle,{}),Object(n.jsxs)(b.a.Collapse,{className:"justify-content-end nav",children:[null!==t&&Object(n.jsx)(i.b,{className:"nav-link d-flex align-items-center navbarcolor",to:"/dashboard",children:"Dashboard"}),null!==t&&Object(n.jsx)("a",{className:"nav-link pointer d-flex align-items-center navbarcolor",href:"#",onClick:function(){e({type:"LOGOUT",payload:null}),window.localStorage.removeItem("auth"),a.push("/")},children:"Logout"}),null===t&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.b,{className:"nav-link d-flex align-items-center navbarcolor",to:"/login",children:"Login"}),Object(n.jsx)(i.b,{className:"nav-link d-flex align-items-center navbarcolor",to:"/register",children:"Register"})]})]})]})})},p=function(e){var t=Object.assign({},e),a=Object(d.c)((function(e){return Object(j.a)({},e)})).auth;return a&&a.token?Object(n.jsx)(l.b,Object(j.a)({},t)):Object(n.jsx)(l.a,{to:"/login"})},m=a(10),O=a.n(m),f=a(21),x=a(14),v=a(37),g=a.n(v),N=function(){var e=Object(f.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("https://server-1011.herokuapp.com/api","/create-hotel"),a,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://server-1011.herokuapp.com/api","/hotels?user=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e,t){var a=new Date(e),n=new Date(t);return Math.round(Math.abs((a-n)/864e5))},k=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://server-1011.herokuapp.com/api","/hotel/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(O.a.mark((function e(t,a,n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.put("".concat("https://server-1011.herokuapp.com/api","/update-hotel/").concat(n),a,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://server-1011.herokuapp.com/api","/user-hotel-bookings"),{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(f.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://server-1011.herokuapp.com/api","/is-already-booked/").concat(a),{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(O.a.mark((function e(t,a,n,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("https://server-1011.herokuapp.com/api","/book-hotel?hotelId=").concat(n,"&userId=").concat(a),c,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}(),D=function(){var e=Object(f.a)(O.a.mark((function e(t,a,n,c){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("".concat("https://server-1011.herokuapp.com/api","/search-listings?location=").concat(t,"&date=").concat(a,"&bed=").concat(n,"&user=").concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,c){return e.apply(this,arguments)}}(),L=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.a.post("".concat("https://server-1011.herokuapp.com/api","/get-account-status"),{},{headers:{Authorization:"Bearer ".concat(t)}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.a.post("".concat("https://server-1011.herokuapp.com/api","/get-account-balance"),{},{headers:{Authorization:"Bearer ".concat(t)}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){return(e.amount/100).toLocaleString(e.currency,{style:"currency",currency:e.currency})},_=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("https://server-1011.herokuapp.com/api","/payout-setting"),{},{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(f.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("https://server-1011.herokuapp.com/api","/stripe-success"),{hotelId:a},{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),B=a(285),F=a(286),P=a(75),M=a(108),Y=function(e){var t=e.h,a=e.handleHotelDelete,c=void 0===a?function(e){return e}:a,r=e.owner,s=void 0!==r&&r,o=e.showViewMoreButton,u=void 0===o||o,j=Object(l.g)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(n.jsx)(M.a,{children:Object(n.jsxs)(P.a,{className:"text-center m-1",children:[t.image&&t.image.contentType?Object(n.jsx)("img",{src:t.image.link,alt:"default hotel image",className:"card-image img img-fluid"}):Object(n.jsx)("img",{src:"https://via.placeholder.com/900x500.png?text=MERN+Booking",alt:"default hotel image",className:"card-image img img-fluid"}),Object(n.jsxs)(P.a.Body,{children:[Object(n.jsxs)(P.a.Title,{children:[t.title," ",Object(n.jsx)("span",{className:"float-right text-primary",children:A({amount:100*t.price,currency:"CAD"})})," "]}),Object(n.jsx)(P.a.Text,{children:t.location}),Object(n.jsx)(P.a.Text,{children:t.content}),Object(n.jsxs)(P.a.Text,{children:[" ",Object(n.jsxs)("span",{children:["for ",y(t.from,t.to)," ",y(t.from,t.to)<=1?" day":" days"]})]}),Object(n.jsxs)(P.a.Text,{children:[t.bed," bed"]}),Object(n.jsxs)(P.a.Text,{children:["Available from ",new Date(t.from).toLocaleDateString()]}),Object(n.jsxs)("div",{className:"d-flex justify-content-between h4",children:[u&&Object(n.jsx)("button",{onClick:function(){return j.push("/hotel/".concat(t._id))},className:"btn btn-primary",children:"Show more"}),s&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.b,{to:"/hotel/edit/".concat(t._id),children:Object(n.jsx)(B.a,{className:"text-warning"})}),Object(n.jsx)(F.a,{onClick:function(){return c(t._id)},className:"text-danger"})]})]})]})]})})})})},U=a(278),J=a(280),z=a(283),G=a(287),V=a(97),H=a.n(V),W=a(32),K=a.n(W),X=U.a.RangePicker,q=J.a.Option,$=function(){var e=Object(c.useState)(""),t=Object(x.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),o=Object(x.a)(s,2),i=o[0],u=o[1],j=Object(c.useState)(""),d=Object(x.a)(j,2),b=d[0],h=d[1],p=Object(l.g)();return Object(n.jsxs)("div",{className:"d-flex flex-row pb-4 m-3",children:[Object(n.jsx)("div",{className:"w-100",children:Object(n.jsx)(z.a,{placeholder:"Location",value:a,onChange:function(e){r(e.target.value)},onSuggestions:function(e){var t=e.rawAnswer,a=e.query,n=e.suggestions;return console.log(t,a,n)},style:{height:"50px"}})}),Object(n.jsx)(X,{onChange:function(e,t){return u(t)},disabledDate:function(e){return e&&e.valueOf()<K()().subtract(1,"days")},className:"w-100"}),Object(n.jsxs)(J.a,{onChange:function(e){return h(e)},className:"w-100",size:"large",placeholder:"Number of beds",children:[Object(n.jsx)(q,{children:1},1),Object(n.jsx)(q,{children:2},2),Object(n.jsx)(q,{children:3},3),Object(n.jsx)(q,{children:4},4)]}),Object(n.jsx)(G.a,{onClick:function(){p.push("/search-result?location=".concat(a,"&date=").concat(i,"&bed=").concat(b))},className:"btn btn-primary p-3 btn-square"})]})},Q=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(f.a)(O.a.mark((function e(){var t,a,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.localStorage.getItem("auth")){e.next=9;break}return t=JSON.parse(window.localStorage.getItem("auth")),a=t.user.email,e.next=5,w(a);case 5:n=e.sent,r(n.data),e.next=14;break;case 9:return null,e.next=12,w(null);case 12:c=e.sent,r(c.data);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"showcase",children:Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("h1",{children:"Find your next stay"}),Object(n.jsx)("h3",{children:"Search hotels, homes, and much more..."})]})}),Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("br",{}),Object(n.jsx)($,{})]}),Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("br",{}),Object(n.jsx)(M.a,{children:a.map((function(e){return Object(n.jsx)(Y,{h:e},e._id)}))})]})]})},Z=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("https://server-1011.herokuapp.com/api","/register"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("".concat("https://server-1011.herokuapp.com/api","/login"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(e,t){if(window.localStorage.getItem("auth")){var a=JSON.parse(localStorage.getItem("auth"));a.user=e,localStorage.setItem("auth",JSON.stringify(a)),t()}},ae=function(e){var t=e.handleSubmit,a=e.email,c=e.setEmail,r=e.password,s=e.setPassword;return Object(n.jsxs)("form",{onSubmit:t,className:"mt-3",children:[Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("label",{className:"form-label",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("label",{className:"form-label",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsx)("button",{disabled:!a||!r,className:"btn btn-primary",children:"Submit"})]})},ne=function(e){var t=e.history,a=Object(c.useState)(""),r=Object(x.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),l=Object(x.a)(i,2),j=l[0],b=l[1],h=Object(d.b)(),p=function(){var e=Object(f.a)(O.a.mark((function e(a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log("SEND LOGIN DATA",{email:s,password:j}),e.prev=2,e.next=5,ee({email:s,password:j});case 5:(n=e.sent).data&&(console.log(n.data),console.log("SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> "),window.localStorage.setItem("auth",JSON.stringify(n.data)),h({type:"LOGGED_IN_USER",payload:n.data}),t.push("/dashboard")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),400===e.t0.response.status&&u.b.error(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container-fluid p-5 text-center",children:Object(n.jsx)("h1",{children:"Login"})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(n.jsx)(ae,{handleSubmit:p,email:s,setEmail:o,password:j,setPassword:b})})})})]})},ce=function(e){var t=e.handleSubmit,a=e.name,c=e.setName,r=e.email,s=e.setEmail,o=e.password,i=e.setPassword;return Object(n.jsxs)("form",{onSubmit:t,className:"mt-3",children:[Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("label",{className:"form-label",children:"Your name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter name",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("label",{className:"form-label",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("label",{className:"form-label",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(n.jsx)("button",{disabled:!a||!r||!o,className:"btn btn-primary",children:"Submit"})]})},re=function(e){var t=e.history,a=Object(c.useState)(""),r=Object(x.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),l=Object(x.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(""),h=Object(x.a)(b,2),p=h[0],m=h[1],v=function(){var e=Object(f.a)(O.a.mark((function e(a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,Z({name:s,email:j,password:p});case 4:n=e.sent,console.log("REGISTER USER ===> ",n),u.b.success("Register success. Please login."),t.push("/login"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),400===e.t0.response.status&&u.b.error(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container-fluid p-5 text-center",children:Object(n.jsx)("h1",{children:"Register"})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(n.jsx)(ce,{handleSubmit:v,name:s,setName:o,email:j,setEmail:d,password:p,setPassword:m})})})})]})},se=function(){var e=window.location.pathname;return Object(n.jsxs)("ul",{className:"nav nav-tabs",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{className:"nav-link ".concat("/dashboard"===e&&"active"),to:"/dashboard",children:"Your Bookings"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{className:"nav-link ".concat("/dashboard/seller"===e&&"active"),to:"/dashboard/seller",children:"Your Profile"})})]})},oe=a(279),ie=a(284),le=a(281),ue=a(288),je=oe.a.Meta,de=ie.a.Ribbon,be=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=(t[0],t[1]),r=Object(c.useState)(0),s=Object(x.a)(r,2),o=s[0],i=s[1],l=Object(d.c)((function(e){return Object(j.a)({},e)})).auth,b=l.user,h=l.token;Object(c.useEffect)((function(){T(l.token).then((function(e){i(e.data)}))}),[]);var p=function(){var e=Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,_(h);case 4:t=e.sent,window.location.href=t.data.url,a(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),a(!1),Object(u.b)("Unable to access settings. Try again");case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(n.jsx)(oe.a,{children:Object(n.jsx)(je,{avatar:Object(n.jsx)(le.a,{children:b.name[0]}),title:b.name,description:"Joined ".concat(K()(b.createdAt).fromNow())})}),l&&l.user&&l.user.stripe_seller&&l.user.stripe_seller.charges_enabled&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(de,{text:"Avaliable",color:"grey",children:Object(n.jsx)(oe.a,{className:"bg-light pt-1",children:o&&o.pending&&o.pending.map((function(e,t){return Object(n.jsx)("span",{className:"lead",children:A(e)},t)}))})}),Object(n.jsx)(de,{text:"Payouts",color:"silver",children:Object(n.jsx)(oe.a,{onClick:p,className:"bg-light pointer",children:Object(n.jsx)(ue.a,{className:"h5 pt-2"})})})]})]})},he=a(282),pe=function(e){var t=e.session,a=(e.orderedBy,e.showModal),c=e.setShowModal;return Object(n.jsxs)(he.a,{visible:a,title:"Order payment info",onCancel:function(){return c(!a)},children:[Object(n.jsxs)("p",{children:["Payment intent: ",t.intent]}),Object(n.jsxs)("p",{children:["Payment status: ",t.status]}),Object(n.jsxs)("p",{children:["Amount total: ",t.purchase_units[0].amount.currency_code.toUpperCase()," ",t.purchase_units[0].amount.value]}),Object(n.jsxs)("p",{children:["Customer id: ",t.payer.payer_id]}),Object(n.jsxs)("p",{children:["Customer: ",t.payer.name.given_name+" "+t.payer.name.surname]})]})},me=function(e){var t=e.hotel,a=e.session,r=e.orderedBy,s=Object(c.useState)(!1),o=Object(x.a)(s,2),i=o[0],u=o[1];Object(l.g)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"card mb-3",children:Object(n.jsxs)("div",{className:"row no-gutters",children:[Object(n.jsx)("div",{className:"col-md-4",children:t.image&&t.image.contentType?Object(n.jsx)("img",{src:t.image.link,alt:"default hotel image",className:"card-image img img-fluid"}):Object(n.jsx)("img",{src:"https://via.placeholder.com/900x500.png?text=MERN+Booking",alt:"default hotel image",className:"card-image img img-fluid"})}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h3",{className:"card-title",children:[t.title," ",Object(n.jsx)("span",{className:"float-right text-primary",children:A({amount:100*t.price,currency:"CAD"})})," "]}),Object(n.jsx)("p",{className:"alert alert-info",children:t.location}),Object(n.jsx)("p",{className:"card-text",children:"".concat(t.content.substring(1,200),"...")}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsxs)("span",{className:"float-right text-primary",children:["for ",y(t.from,t.to)," ",y(t.from,t.to)<=1?" day":" days"]})}),Object(n.jsxs)("p",{className:"card-text",children:[t.bed," bed"]}),Object(n.jsxs)("p",{className:"card-text",children:["Available from ",new Date(t.from).toLocaleDateString()]}),i&&Object(n.jsx)(pe,{session:a,orderedBy:r,showModal:i,setShowModal:u}),Object(n.jsx)("div",{className:"d-flex justify-content-between h4",children:Object(n.jsx)("button",{onClick:function(){return u(!i)},className:"btn btn-primary",children:"Show Payment info"})})]})})]})})})},Oe=function(){var e=Object(d.c)((function(e){return Object(j.a)({},e)})).auth.token,t=Object(c.useState)([]),a=Object(x.a)(t,2),r=a[0],s=a[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var t=Object(f.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:a=t.sent,console.log(a),s(a.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container-fluid p-5",children:Object(n.jsx)(be,{})}),Object(n.jsx)("div",{className:"container-fluid p-4",children:Object(n.jsx)(se,{})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-10",children:Object(n.jsx)("h2",{children:"Your Bookings"})}),Object(n.jsx)("div",{className:"col-md-2",children:Object(n.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"Pro"})})]})}),Object(n.jsx)("div",{className:"row",children:r.map((function(e){return Object(n.jsx)(me,{hotel:e.hotel,session:e.session,orderedBy:e.orderedBy.name},e._id)}))})]})},fe=a(289),xe=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),a=(t[0],t[1],Object(c.useState)(!1)),r=Object(x.a)(a,2),s=(r[0],r[1],Object(c.useState)({name:"",email:""})),o=Object(x.a)(s,2),i=o[0],l=o[1];return Object(c.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("auth")),t={name:e.user.name,email:e.user.email};l(t)})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container-fluid p-5",children:Object(n.jsx)(be,{})}),Object(n.jsx)("div",{className:"container-fluid p-4",children:Object(n.jsx)(se,{})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-md-6 offset-md-3 text-center",children:Object(n.jsxs)("div",{className:"p-5 pointer",children:[Object(n.jsx)(fe.a,{className:"h1"}),Object(n.jsxs)("h4",{children:["Name : ",i.name," "]}),Object(n.jsxs)("h4",{children:["Email : ",i.email," "]})]})})})})]})},ve=a(36),ge=a(124),Ne=J.a.Option,we={appId:"Y3XK95UWOL",apiKey:"e2278926db93668617ab09931abad856",language:"en"},ye=function(e){var t=e.values,a=e.setValues,c=e.handleChange,r=e.handleImageChange,s=e.handleSubmit,o=e.location,i=e.setLocation,l=t.title,u=t.content,d=t.price;return Object(n.jsxs)("form",{onSubmit:s,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("label",{className:"btn btn-outline-secondary btn-block m-2 text-left",children:["Image",Object(n.jsx)("input",{type:"file",name:"image",onChange:r,accept:"image/*",hidden:!0})]}),Object(n.jsx)("input",{type:"text",name:"title",onChange:c,placeholder:"Title",className:"form-control m-2",value:l}),Object(n.jsx)("textarea",{name:"content",onChange:c,placeholder:"Content",className:"form-control m-2",value:u}),Object(n.jsx)(H.a,{className:"form-control m-2",placeholder:"Location",defaultValue:o,options:we,onChange:function(e){var t=e.suggestion;return i(t.value)},style:{height:"50px"}}),Object(n.jsx)("input",{type:"number",name:"price",onChange:c,placeholder:"Price",className:"form-control m-2",value:d}),Object(n.jsxs)(J.a,{onChange:function(e){return a(Object(j.a)(Object(j.a)({},t),{},{bed:e}))},className:"w-100 m-2",size:"large",placeholder:"Number of beds",children:[Object(n.jsx)(Ne,{children:1},1),Object(n.jsx)(Ne,{children:2},2),Object(n.jsx)(Ne,{children:3},3),Object(n.jsx)(Ne,{children:4},4)]})]}),Object(n.jsx)(U.a,{placeholder:"From date",className:"form-control m-2",onChange:function(e,n){return a(Object(j.a)(Object(j.a)({},t),{},{from:n}))},disabledDate:function(e){return e&&e.valueOf()<K()().subtract(1,"days")}}),Object(n.jsx)(U.a,{placeholder:"To date",className:"form-control m-2",onChange:function(e,n){return a(Object(j.a)(Object(j.a)({},t),{},{to:n}))},disabledDate:function(e){return e&&e.valueOf()<K()().subtract(1,"days")}}),Object(n.jsx)("button",{className:"btn btn-outline-primary m-2",children:"Save"})]})},ke=(J.a.Option,function(){var e=Object(d.c)((function(e){return Object(j.a)({},e)})).auth.token,t=Object(c.useState)({title:"",content:"",image:"",price:"",from:"",to:"",bed:""}),a=Object(x.a)(t,2),r=a[0],s=a[1],o=Object(c.useState)("https://via.placeholder.com/100x100.png?text=PREVIEW"),i=Object(x.a)(o,2),l=i[0],b=i[1],h=Object(c.useState)(""),p=Object(x.a)(h,2),m=p[0],v=p[1],g=r.title,w=r.content,y=r.image,k=r.price,S=r.from,C=r.to,E=r.bed,I=function(){var t=Object(f.a)(O.a.mark((function t(a){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),(n=new FormData).append("title",g),n.append("content",w),n.append("location",m),n.append("price",k),y&&n.append("image",y),n.append("from",S),n.append("to",C),n.append("bed",E),console.log(Object(ge.a)(n)),t.prev=11,t.next=14,N(e,n);case 14:c=t.sent,console.log("HOTEL CREATE RES",c),u.b.success("New hotel is posted"),setTimeout((function(){window.location.reload()}),1e3),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(11),console.log(t.t0),u.b.error(t.t0.response.data);case 24:case"end":return t.stop()}}),t,null,[[11,20]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container-fluid bg-secondary p-5 text-center",children:Object(n.jsx)("h2",{children:"Add Hotel"})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-10",children:[Object(n.jsx)("br",{}),Object(n.jsx)(ye,{values:r,setValues:s,handleChange:function(e){s(Object(j.a)(Object(j.a)({},r),{},Object(ve.a)({},e.target.name,e.target.value)))},handleImageChange:function(e){b(URL.createObjectURL(e.target.files[0])),s(Object(j.a)(Object(j.a)({},r),{},{image:e.target.files[0]}))},handleSubmit:I,location:m,setLocation:v})]}),Object(n.jsxs)("div",{className:"col-md-2",children:[Object(n.jsx)("img",{src:l,alt:"preview_image",className:"img img-fluid m-2"}),Object(n.jsx)("pre",{children:JSON.stringify(r,null,4)}),JSON.stringify(m)]})]})})]})}),Se=a(290),Ce=function(e){e.history;var t=Object(d.c)((function(e){return Object(j.a)({},e)})).auth,a=Object(d.b)();Object(c.useEffect)((function(){t&&t.token&&r()}),[t]);var r=function(){var e=Object(f.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(t.token);case 3:n=e.sent,te(n.data,(function(){a({type:"LOGGED_IN_USER",payload:n.data}),window.location.href="/dashboard/seller"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"d-flex justify-content-center p-5",children:Object(n.jsx)(Se.a,{className:"display-1 p-5 text-danger"})})},Ee=J.a.Option,Ie={appId:"Y3XK95UWOL",apiKey:"e2278926db93668617ab09931abad856",language:"en"},De=function(e){var t=e.values,a=e.setValues,c=e.handleChange,r=e.handleImageChange,s=e.handleSubmit,o=t.title,i=t.content,l=t.location,u=t.price,d=t.bed,b=t.from,h=t.to;return Object(n.jsxs)("form",{onSubmit:s,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsxs)("label",{className:"btn btn-outline-secondary btn-block m-2 text-left",children:["Image",Object(n.jsx)("input",{type:"file",name:"image",onChange:r,accept:"image/*",hidden:!0})]}),Object(n.jsx)("input",{type:"text",name:"title",onChange:c,placeholder:"Title",className:"form-control m-2",value:o}),Object(n.jsx)("textarea",{name:"content",onChange:c,placeholder:"Content",className:"form-control m-2",value:i}),l&&l.length&&Object(n.jsx)(H.a,{className:"form-control m-2",placeholder:"Location",defaultValue:l,options:Ie,onChange:function(e){var n=e.suggestion;return a(Object(j.a)(Object(j.a)({},t),{},{location:n.value}))},style:{height:"50px"}}),Object(n.jsx)("input",{type:"number",name:"price",onChange:c,placeholder:"Price",className:"form-control m-2",value:u}),Object(n.jsxs)(J.a,{onChange:function(e){return a(Object(j.a)(Object(j.a)({},t),{},{bed:e}))},className:"w-100 m-2",size:"large",placeholder:"Number of beds",value:d,children:[Object(n.jsx)(Ee,{children:1},1),Object(n.jsx)(Ee,{children:2},2),Object(n.jsx)(Ee,{children:3},3),Object(n.jsx)(Ee,{children:4},4)]})]}),b&&Object(n.jsx)(U.a,{defaultValue:K()(b,"YYYY-MM-DD"),placeholder:"From date",className:"form-control m-2",onChange:function(e,n){return a(Object(j.a)(Object(j.a)({},t),{},{from:n}))},disabledDate:function(e){return e&&e.valueOf()<K()().subtract(1,"days")}}),h&&Object(n.jsx)(U.a,{defaultValue:K()(h,"YYYY-MM-DD"),placeholder:"To date",className:"form-control m-2",onChange:function(e,n){return a(Object(j.a)(Object(j.a)({},t),{},{to:n}))},disabledDate:function(e){return e&&e.valueOf()<K()().subtract(1,"days")}}),Object(n.jsx)("button",{className:"btn btn-outline-primary m-2",children:"Save"})]})},Le=(J.a.Option,function(e){var t=e.match,a=Object(d.c)((function(e){return Object(j.a)({},e)})).auth.token,r=Object(c.useState)({title:"",content:"",location:"",price:"",from:"",to:"",bed:""}),s=Object(x.a)(r,2),o=s[0],i=s[1],l=Object(c.useState)(""),b=Object(x.a)(l,2),h=b[0],p=b[1],m=Object(c.useState)("https://via.placeholder.com/100x100.png?text=PREVIEW"),v=Object(x.a)(m,2),g=v[0],N=v[1],w=o.title,y=o.content,C=o.price,E=o.from,I=o.to,D=o.bed,L=o.location;Object(c.useEffect)((function(){T()}),[]);var T=function(){var e=Object(f.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t.params.hotelId);case 2:a=e.sent,i(Object(j.a)(Object(j.a)({},o),a.data)),N("".concat("https://server-1011.herokuapp.com/api","/hotel/image/").concat(a.data._id));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(O.a.mark((function e(n){var c,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(c=new FormData).append("title",w),c.append("content",y),c.append("location",L),c.append("price",C),h&&c.append("image",h),c.append("from",E),c.append("to",I),c.append("bed",D),e.prev=10,e.next=13,S(a,c,t.params.hotelId);case 13:r=e.sent,console.log("HOTEL UPDATE RES",r),u.b.success("".concat(r.data.title," is updated")),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0),u.b.error(e.t0.response.data.err);case 22:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"container-fluid bg-secondary p-5 text-center",children:Object(n.jsx)("h2",{children:"Edit Hotel"})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-10",children:[Object(n.jsx)("br",{}),Object(n.jsx)(De,{values:o,setValues:i,handleChange:function(e){i(Object(j.a)(Object(j.a)({},o),{},Object(ve.a)({},e.target.name,e.target.value)))},handleImageChange:function(e){N(URL.createObjectURL(e.target.files[0])),p(e.target.files[0])},handleSubmit:A})]}),Object(n.jsxs)("div",{className:"col-md-2",children:[Object(n.jsx)("img",{src:g,alt:"preview_image",className:"img img-fluid m-2"}),Object(n.jsx)("pre",{children:JSON.stringify(o,null,4)})]})]})})]})}),Te=a(138),Ae=(a(270),function(e){var t=e.match,a=e.history,r=Object(c.useState)({}),s=Object(x.a)(r,2),o=s[0],i=s[1],l=Object(c.useState)(""),u=Object(x.a)(l,2),b=u[0],h=u[1],p=Object(c.useState)(!1),m=Object(x.a)(p,2),v=m[0],g=m[1],N=Object(c.useState)(!1),w=Object(x.a)(N,2),S=w[0],C=w[1],D=Object(c.useState)(!1),L=Object(x.a)(D,2),T=L[0],A=L[1],_=Object(c.useState)(!1),R=Object(x.a)(_,2),B=(R[0],R[1],Object(c.useState)("")),F=Object(x.a)(B,2),P=(F[0],F[1],Object(c.useState)()),M=Object(x.a)(P,2),Y=(M[0],M[1]),U=Object(d.c)((function(e){return Object(j.a)({},e)})).auth;Object(c.useEffect)((function(){J()}),[]);var J=function(){var e=Object(f.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t.params.hotelId);case 2:a=e.sent,i(a.data),h(a.data.image.link),U&&U.token&&E(U.token,t.params.hotelId).then((function(e){e.data&&C(!0)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),U&&U.token?A(!0):(a.push("/login"),g(!0));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:["  ",Object(n.jsxs)(Te.b,{options:{"client-id":"test",currency:"CAD"},children:[Object(n.jsx)("div",{className:"container-fluid bg-secondary p-5 text-center",children:Object(n.jsx)("h1",{children:o.title})}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("br",{}),Object(n.jsx)("img",{src:b,alt:o.title,className:"img img-fluid m-2"})]}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:o.content}),Object(n.jsxs)("p",{className:"alert alert-info mt-3",children:["$",o.price]}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsxs)("span",{className:"float-right text-primary",children:["for ",y(o.from,o.to)," ",y(o.from,o.to)<=1?" day":" days"]})}),Object(n.jsxs)("p",{children:["From ",Object(n.jsx)("br",{})," ",K()(new Date(o.from)).format("MMMM Do YYYY, h:mm:ss a")]}),Object(n.jsxs)("p",{children:["To ",Object(n.jsx)("br",{})," ",K()(new Date(o.to)).format("MMMM Do YYYY, h:mm:ss a")]}),Object(n.jsxs)("i",{children:["Posted by ",o.postedBy&&o.postedBy.name]}),Object(n.jsx)("br",{}),T?Object(n.jsx)(Te.a,{style:{layout:"vertical"},createOrder:function(e,t){return t.order.create({purchase_units:[{description:o.name,amount:{currency_code:"CAD",value:o.price}}],application_context:{shipping_preference:"NO_SHIPPING"}}).then((function(e){return Y(e),e}))},onApprove:function(e,t){return t.order.capture().then((function(e){var t=JSON.parse(window.localStorage.getItem("auth"));I(t.token,t.user._id,o._id,e).then((function(e){a.push("/dashboard")}))}))}}):Object(n.jsx)("button",{onClick:z,className:"btn btn-block btn-lg btn-primary mt-3",disabled:v||S,children:v?"Loading...":S?"Already Booked":U&&U.token?"Book Now":"Login to Book"})]})]})})]})]})}),_e=function(e){var t=e.match,a=e.history,r=Object(d.c)((function(e){return Object(j.a)({},e)})).auth.token;return Object(c.useEffect)((function(){R(r,t.params.hotelId).then((function(e){e.data.success?a.push("/dashboard"):a.push("/stripe/cancel")}))}),[t.params.hotelId]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"d-flex justify-content-center p-5",children:Object(n.jsx)(Se.a,{className:"display-1 text-danger p-5"})})})},Re=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsx)("h2",{className:"text-center p-5",children:"Payment failed. Try again."})})})},Be=a(174),Fe=a.n(Be),Pe=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1];return Object(c.useEffect)((function(){var e=Fe.a.parse(window.location.search),t=e.location,a=e.date,n=e.bed;if(window.localStorage.getItem("auth")){var c=JSON.parse(window.localStorage.getItem("auth"));D(t,a,n,c.user.email).then((function(e){r(e.data)}))}else console.log("auth not present"),D(t,a,n,null).then((function(e){r(e.data)}))}),[a,window.location.search]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)("br",{}),Object(n.jsx)($,{})]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:a.map((function(e){return Object(n.jsx)(Y,{h:e},e._id)}))})})]})};var Me,Ye=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(h,{}),Object(n.jsx)(u.a,{position:"top-center"}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:Q}),Object(n.jsx)(l.b,{exact:!0,path:"/login",component:ne}),Object(n.jsx)(l.b,{exact:!0,path:"/register",component:re}),Object(n.jsx)(p,{exact:!0,path:"/dashboard",component:Oe}),Object(n.jsx)(p,{exact:!0,path:"/dashboard/seller",component:xe}),Object(n.jsx)(p,{exact:!0,path:"/hotels/new",component:ke}),Object(n.jsx)(p,{exact:!0,path:"/stripe/callback",component:Ce}),Object(n.jsx)(p,{exact:!0,path:"/hotel/edit/:hotelId",component:Le}),Object(n.jsx)(l.b,{exact:!0,path:"/hotel/:hotelId",component:Ae}),Object(n.jsx)(p,{exact:!0,path:"/stripe/success/:hotelId",component:_e}),Object(n.jsx)(p,{exact:!0,path:"/stripe/cancel",component:Re}),Object(n.jsx)(l.b,{exact:!0,path:"/search-result",component:Pe})]})]})},Ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,291)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},Je=a(82),ze=a(175);Me=window.localStorage.getItem("auth")?JSON.parse(window.localStorage.getItem("auth")):null;var Ge=Object(Je.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN_USER":return Object(j.a)(Object(j.a)({},e),t.payload);case"LOGOUT":return t.payload;default:return e}}}),Ve=Object(Je.createStore)(Ge,Object(ze.composeWithDevTools)());o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d.a,{store:Ve,children:Object(n.jsx)(Ye,{})})}),document.getElementById("root")),Ue()}},[[272,1,2]]]);
//# sourceMappingURL=main.c3980a55.chunk.js.map