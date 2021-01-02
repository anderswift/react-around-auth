(this["webpackJsonpreact-around-auth"]=this["webpackJsonpreact-around-auth"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(22),s=n.n(i),r=n(10),l=(n(31),n(2)),u=n(4),b=n(15),j=n(16),d=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(b.a)(this,e),this._baseUrl=n,this._headers=a}return Object(j.a)(e,[{key:"checkToken",value:function(e){return fetch(this._baseUrl+"users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"login",value:function(e){var t=this;return fetch(this._baseUrl+"signin",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).then((function(e){return localStorage.setItem("jwt",e.token),t.checkToken(e.token)}))}},{key:"register",value:function(e){var t=this;return fetch(this._baseUrl+"signup",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).then((function(n){return fetch(t._baseUrl+"signin",{method:"POST",headers:t._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))})).then((function(e){return localStorage.setItem("jwt",e.token),n}))}))}}]),e}())({baseUrl:"https://register.nomoreparties.co/",headers:{"Content-Type":"application/json"}}),m=Object(c.createContext)(),h=n(3),O=n(25),p=function(e){var t=e.component,n=Object(O.a)(e,["component"]),o=Object(c.useContext)(m);return Object(a.jsx)(u.b,{children:function(){return!0===o.loggedIn?Object(a.jsx)(t,Object(h.a)({},n)):Object(a.jsx)(u.a,{to:"./signin"})}})},f=n.p+"static/media/logo.4e8e0a1d.svg";var g=function(e){var t=e.handleLogout,n=Object(c.useContext)(m),o=Object(c.useState)(!1),i=Object(l.a)(o,2),s=i[0],u=i[1];return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",src:f,alt:"Around The U.S."}),Object(a.jsx)("ul",{className:"header__account-menu ".concat(n.loggedIn?"header__account-menu_logged-in ":"").concat(s?"header__account-menu_active ":"","list"),children:n.loggedIn?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)("div",{className:"header__account-item header__account-item_logged-in",children:n.accountData.email})}),Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:"header__account-item header__account-item_logged-in header__account-logout button",onClick:t,children:"Log out"})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.c,{activeStyle:{display:"none"},to:"/signup",className:"header__account-item link",children:"Sign up"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.c,{activeStyle:{display:"none"},to:"/signin",className:"header__account-item link",children:"Log in"})})]})}),!0===n.loggedIn&&Object(a.jsx)("button",{className:"header__menu-toggle ".concat(s?"header__menu-toggle_selected ":"","button"),onClick:function(e){u(!s),e.target.blur()},"aria-label":"Show Menu"})]})},v=n(24),_=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(b.a)(this,e),this._baseUrl=n,this._headers=a}return Object(j.a)(e,[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"cards",{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"updateLikes",value:function(e,t){var n="DELETE";return t&&(n="PUT"),fetch(this._baseUrl+"cards/likes/"+e,{method:n,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-6/",headers:{authorization:"95a5b594-7318-496e-ada2-f96a00133f51","Content-Type":"application/json"}}),x=Object(c.createContext)();var S=function(e){var t=e.card,n=e.currentUserId,c=e.onCardClick,o=e.onDeleteClick,i=e.onLikeClick,s=t.owner._id===n,r=t.likes.some((function(e){return e._id===n}));return Object(a.jsxs)("li",{className:"photo",id:t._id,children:[Object(a.jsx)("img",{className:"photo__image",src:t.link,alt:t.name,onClick:function(){c(t)}}),Object(a.jsxs)("div",{className:"photo__meta",children:[Object(a.jsx)("h2",{className:"photo__caption",children:t.name}),Object(a.jsx)("button",{type:"button","aria-label":"Like",className:"photo__like button".concat(r?" photo__like_on":""),onClick:function(e){i(t,e)},children:Object(a.jsx)("span",{className:"photo__like-count",children:t.likes.length})})]}),s&&Object(a.jsx)("button",{type:"reset",className:"photo__delete button","aria-label":"Delete",onClick:function(){o(t)}})]})};var k=function(e){var t=e.cards,n=e.onEditAvatar,o=e.onEditProfile,i=e.onAddPlace,s=e.onCardClick,r=e.onDeleteClick,l=e.onLikeClick,u=Object(c.useContext)(x);return Object(a.jsxs)("main",{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("button",{className:"profile__edit-avatar","aria-label":"Edit Avatar",onClick:n,children:Object(a.jsx)("img",{className:"profile__avatar",src:u.avatar,alt:"Avatar"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:u.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-info button","aria-label":"Edit profile",onClick:o}),Object(a.jsx)("p",{className:"profile__about",children:u.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-image button","aria-label":"Add image",onClick:i})]}),Object(a.jsx)("section",{className:"photo-grid",children:Object(a.jsx)("ul",{className:"photo-grid__list list",children:t.map((function(e){return Object(a.jsx)(S,{card:e,currentUserId:u._id,onCardClick:s,onDeleteClick:r,onLikeClick:l},e._id)}))})})]})},y=n(6);var C=function(e){var t=Object(c.useRef)(),n=function(e){"Escape"===e.key&&t.current.reset()};return Object(c.useEffect)((function(){e.isOpen?document.addEventListener("keyup",n):document.removeEventListener("keyup",n)}),[e.isOpen]),Object(a.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_active":""),children:Object(a.jsxs)("form",{ref:t,name:"".concat(e.name,"-form"),className:"popup__item form modal modal_form_".concat(e.name),onSubmit:e.onSubmit,onReset:function(){return setTimeout((function(){e.onReset&&e.onReset()}),200)},children:[Object(a.jsx)("h3",{className:"form__heading modal__heading",children:e.heading}),e.children,Object(a.jsx)("button",{type:"submit",className:"button form__button modal__button modal__button_type_save".concat(!e.submitReady&&" form__button_disabled modal__button_disabled"),name:"".concat(e.name,"-submit"),children:e.submitText}),Object(a.jsx)("button",{type:"reset",className:"popup__exit button","aria-label":"Close",onClick:e.onClose})]})})};var N=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:void 0===e.type?"text":e.type,name:e.name,id:e.name,className:"form__input".concat(e.isModal?" modal__input":"").concat(e.error?" form__input_type_error":""),"aria-label":e.label,placeholder:e.label,minLength:e.minMax?e.minMax[0]:void 0,maxLength:e.minMax?e.minMax[1]:void 0,value:e.value,onChange:e.handleChange,autoComplete:"password"===e.type?"around-the-us ".concat(e.name):"",required:!0}),Object(a.jsx)("span",{className:"form__error".concat(e.error?" form__error_active":""),children:e.error})]})};var A=function(e){var t=e.isOpen,n=e.isSaving,o=e.onClose,i=e.onSubmit,s=Object(c.useContext)(x),r=Object(c.useState)({name:"",about:""}),u=Object(l.a)(r,2),b=u[0],j=u[1],d=Object(c.useState)({}),m=Object(l.a)(d,2),O=m[0],p=m[1],f=Object(c.useState)(!1),g=Object(l.a)(f,2),v=g[0],_=g[1];function S(e){var t=e.target.name.split("-").pop();if(j(Object(h.a)(Object(h.a)({},b),{},Object(y.a)({},t,e.target.value))),e.target.validity.valid){var n=Object(h.a)(Object(h.a)({},O),{},Object(y.a)({},t,""));p(n),_(!Object.values(n).some((function(e){return e})))}else p(Object(h.a)(Object(h.a)({},O),{},Object(y.a)({},t,e.target.validationMessage))),_(!1)}return Object(c.useEffect)((function(){j({name:s.name,about:s.about}),_(!0)}),[s]),Object(a.jsxs)(C,{heading:"Edit profile",name:"profile",isOpen:t,onClose:o,onReset:function(){j({name:s.name||"",about:s.about||""}),p({}),_(!(!s.name||!s.about))},submitText:n?"Saving...":"Save",submitReady:v,onSubmit:function(e){e.preventDefault(),i(b)},children:[Object(a.jsx)(N,{isModal:!0,name:"profile-name",label:"Name",minMax:[2,40],handleChange:S,value:b.name,error:O.name}),Object(a.jsx)(N,{isModal:!0,name:"profile-about",label:"About me",minMax:[2,200],handleChange:S,value:b.about,error:O.about})]})};var E=function(e){var t=e.isOpen,n=e.isSaving,o=e.onClose,i=e.onSubmit,s=Object(c.useContext)(x),r=Object(c.useState)(""),u=Object(l.a)(r,2),b=u[0],j=u[1],d=Object(c.useState)(""),m=Object(l.a)(d,2),h=m[0],O=m[1],p=Object(c.useState)(!1),f=Object(l.a)(p,2),g=f[0],v=f[1];return Object(c.useEffect)((function(){j(s.avatar||""),v(!!s.avatar)}),[s]),Object(a.jsx)(C,{heading:"Change profile picture",name:"avatar",isOpen:t,onClose:o,onReset:function(){j(s.avatar||""),O(""),v(!!s.avatar)},submitText:n?"Saving...":"Save",submitReady:g,onSubmit:function(e){e.preventDefault(),i({avatar:b})},children:Object(a.jsx)(N,{isModal:!0,name:"profile-avatar",type:"url",label:"Image link",value:b,handleChange:function(e){j(e.target.value),O(e.target.validity.valid?"":e.target.validationMessage),v(e.target.validity.valid)},error:h})})};var w=function(e){var t=e.isOpen,n=e.isSaving,o=e.onClose,i=e.onSubmit,s=Object(c.useState)({name:"",link:""}),r=Object(l.a)(s,2),u=r[0],b=r[1],j=Object(c.useState)({}),d=Object(l.a)(j,2),m=d[0],O=d[1],p=Object(c.useState)(!1),f=Object(l.a)(p,2),g=f[0],v=f[1];function _(e){var t=e.target.name.split("-").pop();if(b(Object(h.a)(Object(h.a)({},u),{},Object(y.a)({},t,e.target.value))),e.target.validity.valid){var n=Object(h.a)(Object(h.a)({},m),{},Object(y.a)({},t,""));O(n);var a=Object.values(n);2===a.length&&v(!a.some((function(e){return e})))}else O(Object(h.a)(Object(h.a)({},m),{},Object(y.a)({},t,e.target.validationMessage))),v(!1)}return Object(a.jsxs)(C,{heading:"New place",name:"photo",isOpen:t,onClose:o,onReset:function(e){O({}),v(!1)},submitText:n?"Saving...":"Create",submitReady:g,onSubmit:function(e){e.preventDefault(),i(u,e)},children:[Object(a.jsx)(N,{isModal:!0,name:"photo-name",label:"Title",minMax:[2,30],error:m.name,handleChange:_}),Object(a.jsx)(N,{isModal:!0,name:"photo-link",type:"url",label:"Image link",error:m.link,handleChange:_})]})};var U=function(e){var t=e.isOpen,n=e.isSaving,c=e.onClose,o=e.cardId,i=e.onSubmit;return Object(a.jsx)(C,{heading:"Are you sure?",name:"delete",isOpen:t,onClose:c,submitReady:!0,submitText:n?"Saving...":"Yes",onSubmit:function(e){e.preventDefault(),i(o)}})};var I=function(e){return Object(a.jsx)("div",{className:"popup popup_dark ".concat(e.isOpen?"popup_active":""),children:Object(a.jsxs)("div",{className:"popup__item photo-viewer",children:[Object(a.jsxs)("figure",{className:"photo-viewer__figure",children:[Object(a.jsx)("img",{className:"photo-viewer__image",src:e.card.link,alt:e.card.name}),Object(a.jsx)("figcaption",{className:"photo-viewer__caption",children:e.card.name})]}),Object(a.jsx)("button",{type:"button",className:"popup__exit photo-viewer__exit button","aria-label":"Close Photo Viewer",onClick:e.onClose})]})})};var M=function(){var e=Object(c.useState)({name:"",about:"",avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQxMzQxQ0UxRUY0MTFFQjlEMEFGQ0NEMURDQTc3NkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQxMzQxQ0YxRUY0MTFFQjlEMEFGQ0NEMURDQTc3NkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDEzNDFDQzFFRjQxMUVCOUQwQUZDQ0QxRENBNzc2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDEzNDFDRDFFRjQxMUVCOUQwQUZDQ0QxRENBNzc2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgV334EAAAAGUExURQAAAP///6XZn90AAAAMSURBVHjaYmAACDAAAAIAAU9tWeEAAAAASUVORK5CYII="}),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),s=Object(l.a)(i,2),r=s[0],u=s[1],b=Object(c.useState)({}),j=Object(l.a)(b,2),d=j[0],m=j[1],h=Object(c.useState)(!1),O=Object(l.a)(h,2),p=O[0],f=O[1],g=Object(c.useState)(!1),S=Object(l.a)(g,2),y=S[0],C=S[1],N=Object(c.useState)(!1),M=Object(l.a)(N,2),L=M[0],R=M[1],D=Object(c.useState)(!1),T=Object(l.a)(D,2),P=T[0],G=T[1],Z=Object(c.useState)(!1),Q=Object(l.a)(Z,2),Y=Q[0],F=Q[1],J=Object(c.useState)(!1),V=Object(l.a)(J,2),z=V[0],W=V[1],B=function(){R(!1),C(!1),G(!1),F(!1),W(!1),setTimeout((function(){m({})}),200),X(!1)},H=function(e){"Escape"===e.key&&B()},X=function(e){e?document.addEventListener("keyup",H):document.removeEventListener("keyup",H)};return Object(c.useEffect)((function(){_.getUserInfo().then((function(e){o(e)})).catch((function(e){console.log(e)}))}),[]),Object(c.useEffect)((function(){n&&_.getInitialCards().then(u).catch((function(e){console.log(e)}))}),[n]),Object(a.jsxs)(x.Provider,{value:n,children:[Object(a.jsx)(k,{cards:r,onEditAvatar:function(){R(!0),X(!0)},onEditProfile:function(){C(!0),X(!0)},onAddPlace:function(){G(!0),X(!0)},onCardClick:function(e){m(e),W(!0),X(!0)},onDeleteClick:function(e){m(e),F(!0),X(!0)},onLikeClick:function(e,t){var a=e.likes.some((function(e){return e._id===n._id}));_.updateLikes(e._id,!a).then((function(n){var a=r.map((function(t){return t._id===e._id?n:t}));u(a),t.target.blur()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(A,{isOpen:y,onClose:B,onSubmit:function(e){f(!0),_.setUserInfo(e).then((function(e){o(e),B(),setTimeout((function(){f(!1)}),200)})).catch((function(e){console.log(e),f(!1)}))},isSaving:p}),Object(a.jsx)(E,{isOpen:L,onClose:B,onSubmit:function(e){f(!0),_.setUserAvatar(e).then((function(e){o(e),B(),setTimeout((function(){f(!1)}),200)})).catch((function(e){console.log(e),f(!1)}))},isSaving:p}),Object(a.jsx)(w,{isOpen:P,onClose:B,onSubmit:function(e,t){f(!0),_.addCard(e).then((function(e){u([e].concat(Object(v.a)(r))),B(),setTimeout((function(){f(!1)}),200),t.target.reset()})).catch((function(e){console.log(e),f(!1)}))},isSaving:p}),Object(a.jsx)(U,{isOpen:Y,onClose:B,onSubmit:function(e){f(!0),_.deleteCard(e).then((function(t){var n=r.filter((function(t){return t._id!==e}));u(n),B(),setTimeout((function(){f(!1)}),200)})).catch((function(e){console.log(e),f(!1)}))},cardId:d._id,isSaving:p}),Object(a.jsx)(I,{isOpen:z,onClose:B,card:d})]})};var L=function(e){var t=e.handleLogin,n=e.isLoading,o=Object(c.useState)({email:"",password:""}),i=Object(l.a)(o,2),s=i[0],u=i[1],b=Object(c.useState)({}),j=Object(l.a)(b,2),d=j[0],m=j[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),f=p[0],g=p[1];function v(e){var t=e.target.name.split("-").pop();if(u(Object(h.a)(Object(h.a)({},s),{},Object(y.a)({},t,e.target.value))),e.target.validity.valid){var n=Object(h.a)(Object(h.a)({},d),{},Object(y.a)({},t,""));m(n);var a=Object.values(n);2===a.length&&g(!a.some((function(e){return e})))}else m(Object(h.a)(Object(h.a)({},d),{},Object(y.a)({},t,e.target.validationMessage))),g(!1)}return Object(a.jsxs)("form",{name:"login-form",className:"form",onSubmit:function(e){e.preventDefault(),t(s).catch((function(){u(Object(h.a)(Object(h.a)({},s),{},{password:""})),g(!1)}))},children:[Object(a.jsx)("h3",{className:"form__heading",children:"Log in"}),Object(a.jsx)(N,{name:"login-email",label:"Email",handleChange:v,value:s.email,error:d.email}),Object(a.jsx)(N,{name:"login-password",type:"password",label:"Password",handleChange:v,value:s.password,error:d.password}),Object(a.jsx)("button",{type:"submit",className:"form__button".concat(f?"":" form__button_disabled"),name:"login-submit",children:n?"Loading...":"Log in"}),Object(a.jsx)(r.b,{to:"/signup",className:"form__text link",children:"Not a member yet? Sign up here!"})]})};var R=function(e){var t=e.handleRegister,n=e.isLoading,o=Object(c.useState)({email:"",password:""}),i=Object(l.a)(o,2),s=i[0],u=i[1],b=Object(c.useState)({}),j=Object(l.a)(b,2),d=j[0],m=j[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),f=p[0],g=p[1];function v(e){var t=e.target.name.split("-").pop();if(u(Object(h.a)(Object(h.a)({},s),{},Object(y.a)({},t,e.target.value))),e.target.validity.valid){var n=Object(h.a)(Object(h.a)({},d),{},Object(y.a)({},t,""));m(n);var a=Object.values(n);2===a.length&&g(!a.some((function(e){return e})))}else m(Object(h.a)(Object(h.a)({},d),{},Object(y.a)({},t,e.target.validationMessage))),g(!1)}return Object(a.jsxs)("form",{name:"register-form",className:"form",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(a.jsx)("h3",{className:"form__heading",children:"Sign up"}),Object(a.jsx)(N,{name:"signup-email",type:"email",label:"Email",minMax:[5,320],handleChange:v,value:s.email,error:d.email}),Object(a.jsx)(N,{name:"signup-password",type:"password",label:"Password",minMax:[10,256],handleChange:v,value:s.password,error:d.password}),Object(a.jsx)("button",{type:"submit",className:"form__button".concat(f?"":" form__button_disabled"),name:"login-submit",children:n?"Loading...":"Sign up"}),Object(a.jsx)(r.b,{to:"/signin",className:"form__text link",children:"Already a member? Log in here!"})]})};var D=function(e){return Object(a.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_active":""),children:Object(a.jsxs)("div",{className:"popup__item modal modal_tooltip_".concat(e.type),children:[Object(a.jsx)("p",{className:"modal__heading",children:e.children}),Object(a.jsx)("button",{type:"reset",className:"popup__exit button","aria-label":"Close",onClick:e.onClose})]})})};var T=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Around the U.S."})})};var P=function(){var e=Object(u.g)(),t=Object(c.useState)(!1),n=Object(l.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)({_id:"",email:""}),r=Object(l.a)(s,2),b=r[0],j=r[1],h=Object(c.useState)(!1),O=Object(l.a)(h,2),f=O[0],v=O[1],_=Object(c.useState)(!1),x=Object(l.a)(_,2),S=x[0],k=x[1],y=Object(c.useState)(!1),C=Object(l.a)(y,2),N=C[0],A=C[1],E=Object(c.useState)(!1),w=Object(l.a)(E,2),U=w[0],I=w[1],P=function(){I(!1),k(!1),A(!1),Z(!1)},G=function(e){"Escape"===e.key&&P()},Z=function(e){e?document.addEventListener("keyup",G):document.removeEventListener("keyup",G)},Q=function(t){i(!0),j(t),e.push("/")};return Object(c.useEffect)((function(){var t=localStorage.getItem("jwt");t&&d.checkToken(t).then((function(t){t&&(i(!0),j(t.data),e.push("/"))}))}),[]),Object(a.jsx)(m.Provider,{value:{loggedIn:o,accountData:b},children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(g,{handleLogout:function(){localStorage.removeItem("jwt"),i(!1)}}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(p,{exact:!0,path:"/",component:M}),Object(a.jsx)(u.b,{path:"/signin",children:Object(a.jsx)(L,{handleLogin:function(e){return v(!0),d.login(e).then((function(e){Q(e.data),v(!1)})).catch((function(){I(!0),Z(!0),v(!1)}))},isLoading:f})}),Object(a.jsx)(u.b,{path:"/signup",children:Object(a.jsx)(R,{handleRegister:function(e){v(!0),d.register(e).then((function(e){k(!0),Q(e.data)})).catch((function(){A(!0)})).finally((function(){Z(!0),v(!1)}))},isLoading:f})}),Object(a.jsx)(u.b,{children:o?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsx)(u.a,{to:"/signin"})})]}),Object(a.jsx)(D,{type:"success",isOpen:S,onClose:P,children:"Success! You have now been registered."}),Object(a.jsx)(D,{type:"error",isOpen:N,onClose:P,children:"Oops, something went wrong! Please try again."}),Object(a.jsx)(D,{type:"error",isOpen:U,onClose:P,children:"Oops, your email or password was incorrect! Please try again."}),Object(a.jsx)(T,{})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(r.a,{basename:"/react-around-auth",children:Object(a.jsx)(P,{})})}),document.getElementById("root")),G()}},[[37,1,2]]]);
//# sourceMappingURL=main.5febe046.chunk.js.map