(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__input_state_error",errorClass:"popup__input-error_active"},t=document.querySelector(".profile"),n=t.querySelector(".profile__edit-btn"),r=t.querySelector(".profile__add-btn"),o=t.querySelector(".profile__avatar"),i=t.querySelector(".profile__avatar-img"),u=document.querySelector(".popup_type_profile").querySelector(".popup__container"),c=u.querySelector(".popup__inputs"),a=u.querySelector(".popup__input_type_author"),s=u.querySelector(".popup__input_type_activity"),l=document.querySelector(".popup_type_cards").querySelector(".popup__container").querySelector(".popup__inputs"),f=document.querySelector(".popup_type_avatar").querySelector(".popup__container");function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._title=t.name,this._link=t.link,this._likeCount=t.likes.length,this._cardId=t._id,this._handleCardClick=r,this._handleToggleLike=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"toggleLike",value:function(e){e?(this._cardElement.querySelector(".cards__like-btn").classList.add("cards__like-btn_active"),this._isLiked=!0):(this._cardElement.querySelector(".cards__like-btn").classList.remove("cards__like-btn_active"),this._isLiked=!1)}},{key:"countLikes",value:function(e){this._likeCount=e.length,this._cardElement.querySelector(".cards__like-count").textContent=this._likeCount}},{key:"_setEventListeners",value:function(){var e=this;this._cardElement.querySelector(".cards__like-btn").addEventListener("click",(function(){e._handleToggleLike(e,e._cardId,e._isLiked)})),this._cardElement.querySelector(".cards__image").addEventListener("click",(function(){e._handleCardClick(e._title,e._link)}))}},{key:"generateCard",value:function(){return this._cardElement=this._getTemplate(),this._setEventListeners(),this._cardElement.querySelector(".cards__place").textContent=this._title,this._cardElement.querySelector(".cards__image").src=this._link,this._cardElement.querySelector(".cards__image").alt=this._title+".",this._cardElement.querySelector(".cards__like-count").textContent=this._likeCount,this._cardElement}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._eventHandler=this._handleEscClose.bind(this),this._closeHandler=this.close.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._eventHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._eventHandler)}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__overlay").addEventListener("click",this._closeHandler),this._popup.querySelector(".popup__close-btn").addEventListener("click",this._closeHandler)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t,n=e.selector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__inputs"),t._submitBtn=t._form.querySelector(".popup__submit-btn"),t._submitBtnDefaultText=t._submitBtn.textContent,t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"displayLoadingStatus",value:function(e){this._submitBtn.textContent=e?"Сохранение...":this._submitBtnDefaultText}},{key:"setEventListeners",value:function(){var e=this;E(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){E(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function R(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._caption=t._popup.querySelector(".popup__caption"),t._popupPhoto=t._popup.querySelector(".popup__photo"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._caption.textContent=t,this._popupPhoto.src=n,this._popupPhoto.alt=t+".",j(T(u.prototype),"open",this).call(this)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function F(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function u(e){var t,n=e.selector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__inputs"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;U(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardId,e._currentCard),e.close()}))}},{key:"open",value:function(e,t){this._cardId=e,this._currentCard=t,U(V(u.prototype),"open",this).call(this)}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(v);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={},this._userInfo.profileName=this._name.textContent,this._userInfo.profileAbout=this._about.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._buttonElement=n.querySelector(t.submitButtonSelector),this._inactiveButtonClass=t.inactiveButtonClass}var t,n;return t=e,(n=[{key:"_setFormEventListener",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"_setInputEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._input=t,e._checkInputValidity(),e._toggleButtonState()}))}))}},{key:"_showInputError",value:function(){this._errorElement=this._formElement.querySelector(".".concat(this._input.id,"-error")),this._input.classList.add(this._inputErrorClass),this._errorElement.textContent=this._input.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(){this._errorElement=this._formElement.querySelector(".".concat(this._input.id,"-error")),this._input.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(){this._input.validity.valid?this._hideInputError():this._showInputError()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled",""))}},{key:"cleanErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._input=t,e._hideInputError(),e._toggleButtonState()}))}},{key:"enableValidation",value:function(){this._setFormEventListener(),this._setInputEventListener(),this._toggleButtonState()}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getCurrentUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"updateUserProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers})}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(){return X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},X.apply(this,arguments)}function Y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}function Z(e,t){return Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Z(e,t)}function $(e,t){if(t&&("object"===Q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ee(e){return ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ee(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ee(r);if(o){var n=ee(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return $(this,e)});function u(e,t,n,r,o){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(c=i.call(this,e,t,n,o))._handleCardRemove=r,c}return t=u,(n=[{key:"handleRemoveCard",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"_setEventListeners",value:function(){var e=this;X(ee(u.prototype),"_setEventListeners",this).call(this),this._cardElement.querySelector(".cards__remove-btn").addEventListener("click",(function(){e._handleCardRemove(e._cardId,e)}))}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re,oe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._errorDescription=this._popup.querySelector(".popup-error__description"),this._errorCode=this._popup.querySelector(".popup-error__code")}var t,n;return t=e,(n=[{key:"open",value:function(e){var t=this;this._popup.classList.add("popup-error_opened"),this._errorDescription.textContent=e.statusText,this._errorCode.textContent="Код ошибки: ".concat(e.status),setTimeout((function(){t._close()}),7e3)}},{key:"_close",value:function(){this._popup.classList.remove("popup-error_opened")}}])&&ne(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ie=new J({nameSelector:".profile__author",aboutSelector:".profile__activity"}),ue=new I(".popup_type_image"),ce=new oe(".popup-error"),ae=new _({renderer:function(e){var t=ke(e);ae.addItem(t)}},".cards"),se=new K({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-38",headers:{authorization:"ecb315ea-f58f-45a5-9103-978eaaf2ad6f","Content-Type":"application/json"}});function le(e){return e.ok?e.json():Promise.reject(e)}function fe(e){ce.open(e)}function pe(e,t){ue.open({name:e,link:t})}function he(e,t){be.open(e,t)}function ye(e,t,n){n?se.removeLike(t).then((function(e){return le(e)})).then((function(t){e.toggleLike(!1),e.countLikes(t.likes)})).catch((function(e){return fe(e)})):se.addLike(t).then((function(e){return le(e)})).then((function(t){e.toggleLike(!0),e.countLikes(t.likes)})).catch((function(e){return fe(e)}))}var _e=new O({selector:".popup_type_profile",handleFormSubmit:function(e){_e.displayLoadingStatus(!0),se.updateUserProfile(e.profileName,e.profileAbout).then((function(e){return le(e)})).then((function(e){return me(e)})).catch((function(e){return fe(e)})).finally((function(){return _e.displayLoadingStatus(!1)}))}}),de=new O({selector:".popup_type_cards",handleFormSubmit:function(e){de.displayLoadingStatus(!0),se.addNewCard(e.title,e.link).then((function(e){return le(e)})).then((function(e){var t=ke(e);ae.addItem(t)})).catch((function(e){return fe(e)})).finally((function(){return de.displayLoadingStatus(!1)}))}}),ve=new O({selector:".popup_type_avatar",handleFormSubmit:function(e){ve.displayLoadingStatus(!0),se.updateAvatar(e.link).then((function(e){return le(e)})).then((function(e){return Ee(e)})).catch((function(e){return fe(e)})).finally((function(){return ve.displayLoadingStatus(!1)}))}}),be=new N({selector:".popup_type_confirmation",handleFormSubmit:function(e,t){se.removeCard(e).then((function(e){return le(e)})).then((function(){return t.handleRemoveCard()})).catch((function(e){return fe(e)}))}});function me(e){ie.setUserInfo(e)}function Ee(e){i.src=e.avatar}function ke(e){var t=!!e.likes.find((function(e){return e._id===re})),n=e.owner._id===re?new te(e,"#cards-template-owner",pe,he,ye):new h(e,"#cards-template-viewer",pe,ye),r=n.generateCard();return n.toggleLike(t),r}var ge=new z(e,c);ge.enableValidation();var we=new z(e,l);we.enableValidation();var Se=new z(e,f);Se.enableValidation(),ue.setEventListeners(),_e.setEventListeners(),de.setEventListeners(),ve.setEventListeners(),be.setEventListeners(),n.addEventListener("click",(function(){!function(e){a.value=e.profileName,s.value=e.profileAbout}(ie.getUserInfo()),ge.cleanErrors(),_e.open()})),r.addEventListener("click",(function(){we.cleanErrors(),de.open()})),o.addEventListener("click",(function(){Se.cleanErrors(),ve.open()})),se.getCurrentUser().then((function(e){return le(e)})).then((function(e){me(e),Ee(e),re=e._id})).catch((function(e){return fe(e)})),se.getInitialCards().then((function(e){return le(e)})).then((function(e){return ae.renderItems(e.reverse())})).catch((function(e){return fe(e)}))})();