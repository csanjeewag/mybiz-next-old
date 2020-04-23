module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GoogleSign.js":
/*!**********************************!*\
  !*** ./components/GoogleSign.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "responseGoogle", response => {
      console.log(response);
    });

    _defineProperty(this, "responseFacebook", response => {
      console.log(response);
    });

    _defineProperty(this, "componentClicked", re => {
      console.log('r= ' + re);
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "google "), __jsx("meta", {
      name: "google-signin-scope",
      content: "profile email"
    }), __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"
    }), __jsx("script", {
      src: "https://apis.google.com/js/platform.js",
      async: true,
      defer: true
    })), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLogin"], {
      clientId: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      buttonText: "Sign In",
      onSuccess: this.responseGoogle,
      onFailure: this.responseGoogle,
      cookiePolicy: 'single_host_origin',
      cssClass: "btn btn-outline-primary",
      isSignedIn: false
    }), __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_4___default.a, {
      appId: "639750616597961",
      autoLoad: true,
      fields: "name,email,picture",
      onClick: this.componentClicked,
      callback: this.responseFacebook
    }), __jsx("img", {
      src: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2828808290560434&height=50&width=50&ext=1587395689&hash=AeS-p4-QSJ3AJVvl"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./constant/main.js":
/*!**************************!*\
  !*** ./constant/main.js ***!
  \**************************/
/*! exports provided: wesitename, WebUrl, Url, ImageUrl, web, NavLink, homeUrl, myoderUrl, createcategorUrl, updatecategoryUrl, categoryUrl, myProfileUrl, filteritemUrl, adminUrl, itemUrl, createitemUrl, updateitemUrl, myshopmUrl, shopmUrl, updateshopUrl, createshopUrl, cartitemMSG, cartUserdetails, cartUserNotlogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wesitename", function() { return wesitename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebUrl", function() { return WebUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUrl", function() { return ImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "web", function() { return web; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeUrl", function() { return homeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myoderUrl", function() { return myoderUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createcategorUrl", function() { return createcategorUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatecategoryUrl", function() { return updatecategoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryUrl", function() { return categoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myProfileUrl", function() { return myProfileUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteritemUrl", function() { return filteritemUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminUrl", function() { return adminUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemUrl", function() { return itemUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createitemUrl", function() { return createitemUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateitemUrl", function() { return updateitemUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myshopmUrl", function() { return myshopmUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopmUrl", function() { return shopmUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateshopUrl", function() { return updateshopUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createshopUrl", function() { return createshopUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartitemMSG", function() { return cartitemMSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartUserdetails", function() { return cartUserdetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartUserNotlogin", function() { return cartUserNotlogin; });
const wesitename = 'onShop';
const WebUrl = 'http://localhost:8000/';
const Url = 'http://localhost:8000/api/';
const ImageUrl = 'http://localhost:8000/Images/';
const web = {
  weburl: 'http://localhost:8000/',
  wetopic: "onshop, all items",
  webContent: "All shop items in sri lanka",
  webImage: "http://localhost:8000/special/back1.jpg",
  webKeyword: "shop, sri lanka"
};
const NavLink = [{
  url: '/',
  urlname: 'home'
}, {
  url: '/shop/All-island',
  urlname: 'all-shop'
}, {
  url: '/filter',
  urlname: 'search-items'
}, {
  url: '/create-shop',
  urlname: 'create-shop'
}, {
  url: '/about',
  urlname: 'about-us'
} //{url:'/myorder', urlname:'my-order'},
];
const homeUrl = '/';
const myoderUrl = '/myorder';
const createcategorUrl = '/create-catagery';
const updatecategoryUrl = '/update-category/';
const categoryUrl = '/catagery/';
const myProfileUrl = '/myprofile';
const filteritemUrl = '/filter';
const adminUrl = '/admin';
const itemUrl = '/item/';
const createitemUrl = '/create-item';
const updateitemUrl = '/update-item/';
const myshopmUrl = '/myshop/';
const shopmUrl = '/shop/';
const updateshopUrl = '/update-shop/';
const createshopUrl = '/create-shop';
const cartitemMSG = 'if you request item, you can keep massage to seller.';
const cartUserdetails = 'here your details that you provided, if you need to change you can change above details.';
const cartUserNotlogin = 'you are not sign in, please sign in before request.';

/***/ }),

/***/ "./layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
      function isMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).width();

        if (windowwidth < 600) {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.ismobile_disable').css({
            'display': 'none'
          });
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.isdesktop_disable').css({
            'display': 'block'
          });
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.desktopmobile').addClass('fontsizeE-9').removeClass('fontsizeE1');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.ismobile_disable').css({
            'display': 'block'
          });
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.isdesktop_disable').css({
            'display': 'none'
          });
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('.desktopmobile').addClass('fontsizeE1').removeClass('fontsizeE-9');
        }
      }

      isMobile();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).resize(isMobile);
    });

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('user')) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.isuserlogin').show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.isuserlogin').hide();
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-3260124964"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      className: "jsx-3260124964"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossOrigin: "anonymous",
      className: "jsx-3260124964"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-3260124964"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap",
      rel: "stylesheet",
      className: "jsx-3260124964"
    })), __jsx("div", {
      className: "jsx-3260124964" + " " + "desktopmobile"
    }, this.props.children), __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossOrigin: "anonymous",
      className: "jsx-3260124964"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossOrigin: "anonymous",
      className: "jsx-3260124964"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossOrigin: "anonymous",
      className: "jsx-3260124964"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3260124964"
    }, ".projects div{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects div:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects div:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects div:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects div:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects div:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects div:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects div:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects div:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects div:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects div:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects div:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects div:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects div:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects div:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects div:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.btn{font-size :0.9rem;}.font1{font-family:'Titillium Web',sans-serif;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.font7{font-family:'Trade Winds',cursive;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.1em;}.fontsizeE1-3{font-size :1.2em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontsizeE2-25{font-size :2.25em;}.fontweight700{font-weight :700;}.pointer{cursor:pointer;}.progress{cursor:progress;}.m-image{width:100%;padding:2px;}.m-content{padding:2px;}.m-content-left{padding:0;margin:0px;text-align:left;}.m-content-right{padding:0;margin:0px;text-align:right;}.m-card{padding:5px 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERJLEFBSTRCLEFBS0YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdELEFBSU4sQUFHQSxBQUtJLEFBS3NCLEFBR1AsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUdJLEFBSXJCLEFBR0osQUFHRSxBQUdJLEFBR0EsQUFHQSxBQUdDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUdFLEFBR0EsQUFHQSxBQUdGLEFBR0csQUFJcEIsQUFFeUIsQUFDQyxBQU1iLEFBS0MsQUFJRixBQUtBLEFBS0ssVUFsSGhCLEFBR0EsQUFzR1csQUFLQSxDQXhFWCxBQTBEYSxDQU1kLENBN0RDLEVBTkEsQUFTQSxBQUdBLEFBR0EsQUFrQkEsQUFZQSxBQVF5QixDQUNDLEFBMkIzQixDQS9EQyxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBTUEsQUFHQSxBQUdBLEFBU0EsQ0E5RUEsQUEyRUEsR0F1QmlCLEFBS0MsRUFibkIsT0F0RUMsQ0FUQSxBQUdBLENBTkEsRUFlQSxDQU5BLEVBa0ZELENBS0EsQ0FuR0MsU0FqQkgsRUExQ0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxJQTVDNkIsMERBQ0gsb0RBQzFCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3d3aWR0aDw2MDApe1xyXG4gICAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgICAkKCcuaXNkZXNrdG9wX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgICAgICQoJy5kZXNrdG9wbW9iaWxlJykuYWRkQ2xhc3MoJ2ZvbnRzaXplRS05JykucmVtb3ZlQ2xhc3MoJ2ZvbnRzaXplRTEnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICQoJy5pc2Rlc2t0b3BfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgJCgnLmRlc2t0b3Btb2JpbGUnKS5hZGRDbGFzcygnZm9udHNpemVFMScpLnJlbW92ZUNsYXNzKCdmb250c2l6ZUUtOScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGlzTW9iaWxlKCk7XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGlzTW9iaWxlKTtcclxuICAgIH0pXHJcbiAgICBpZihDb29raWUuZ2V0KCd1c2VyJykpe1xyXG4gICAgICAgICQoJy5pc3VzZXJsb2dpbicpLnNob3coKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoJy5pc3VzZXJsb2dpbicpLmhpZGUoKTtcclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgXHJcbiAgICByZXR1cm4oXHJcbiAgPGRpdiA+XHJcbjxIZWFkPlxyXG4gIFxyXG5cclxuIDxtZXRhIG5hbWU9XCJnb29nbGUtc2lnbmluLWNsaWVudF9pZFwiIGNvbnRlbnQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BY21lfEFudG9ufENhYmlufEluZGllK0Zsb3dlcnxUcmFkZStXaW5kc3xVYnVudHUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTp3Z2h0QDcwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVza3RvcG1vYmlsZVwiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcblxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjQuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1KNnFhNDg0OWJsRTIrcG9UNFdueUtodjV2WkY1U3JQbzBpRWp3QnZLVTdpbUdGQVYwd3dqMXlZZm9SU0pvWituXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LXdmU0RGMkU1MFkyRDF1VWRqME8zdU1CSm5qdVVENEloN1l3YVlkMWlxZmt0ajBVb2Q4R0NFeGwzT2c4aWZ3QjZcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG5cclxuIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICB7YFxyXG4gICBcclxuICAgLnByb2plY3RzIGRpdiB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjBzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjJzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi40cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDExKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuNnM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMy4wcztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzLjQ7XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbn1cclxuICBcclxuICAgLmJ0bntcclxuICAgIGZvbnQtc2l6ZSA6IDAuOXJlbTtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5mb250MSB7XHJcbiAgICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250MntcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDN7XHJcbiAgICBmb250LWZhbWlseTogJ0NhYmluJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDR7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDV7XHJcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XHJcbiAgIH1cclxuICAgLmZvbnQ2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDd7XHJcbiAgICBmb250LWZhbWlseTogJ1RyYWRlIFdpbmRzJywgY3Vyc2l2ZTtcclxuICAgfVxyXG5cclxuICAgLnRvcGljQ29sb3Ige1xyXG4gICAgY29sb3I6ZGFya2JsdWU7XHJcbiAgIH1cclxuICAgLnN1YnRvcGljQ29sb3J7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JPcmFuZ2V7XHJcbiAgICBjb2xvcjpvcmFuZ2U7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvclNreWJsdWV7XHJcbiAgICAgY29sb3IgOiAjMDA4QUNDO1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JwaW5re1xyXG4gICAgIGNvbG9yIDogI0NDMDA0NztcclxuICAgfVxyXG4gICAuZm9udGNvbG9ycmVke1xyXG4gICAgIGNvbG9yIDogI0NDMDAwMDtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTUge1xyXG4gICAgZm9udC1zaXplIDogMC41ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS02IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuNmVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNyB7XHJcbiAgICBmb250LXNpemUgOiAwLjdlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTgge1xyXG4gICAgZm9udC1zaXplIDogMC44ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS05IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuOWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxIHtcclxuICAgIGZvbnQtc2l6ZSA6IDFlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMS0yNSB7XHJcbiAgICBmb250LXNpemUgOiAxLjFlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMS0zIHtcclxuICAgIGZvbnQtc2l6ZSA6IDEuMmVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTUge1xyXG4gICAgZm9udC1zaXplIDogMS41ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTIge1xyXG4gICAgZm9udC1zaXplIDogMmVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUyLTI1IHtcclxuICAgIGZvbnQtc2l6ZSA6IDIuMjVlbTtcclxuICAgfVxyXG4gICAuZm9udHdlaWdodDcwMCB7XHJcbiAgICBmb250LXdlaWdodCA6IDcwMFxyXG4gICB9XHJcblxyXG4gICAucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAucHJvZ3Jlc3Mge2N1cnNvcjogcHJvZ3Jlc3M7fVxyXG5cclxuICAgLmlzdXNlcmxvZ2lue31cclxuXHJcblxyXG4gICAubS1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG5cclxuICB9XHJcbiAgLm0tY29udGVudHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICBcclxuICB9XHJcbiAgLm0tY29udGVudC1sZWZ0e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAubS1jb250ZW50LXJpZ2h0e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLm0tY2FyZHtcclxuICAgIHBhZGRpbmc6NXB4IDVweDtcclxuICBcclxuICB9XHJcbiAgIGBcclxuICAgXHJcbiAgIH1cclxuIDwvc3R5bGU+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./layouts/SideNav.js":
/*!****************************!*\
  !*** ./layouts/SideNav.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.open-side-navbar').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-side-nav-container').addClass('side-nav-animatable side-nav-visible');
        });
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-menu-close').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-side-nav-container').addClass('side-nav-animatable').removeClass(' side-nav-visible');
        });
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.sidenavbar').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-side-nav-container').addClass('side-nav-animatable').removeClass(' side-nav-visible');
        });
      });
    });

    _defineProperty(this, "showSidebar", () => {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.js-side-nav-container').addClass('side-nav-animatable side-nav-visible');
      });
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("div", {
      className: "jsx-3807493491" + " " + "js-side-nav-container side-nav-container sidenavbar"
    }, __jsx("div", {
      className: "jsx-3807493491" + " " + "js-side-nav side-nav"
    }, __jsx("a", {
      className: "jsx-3807493491" + " " + "js-menu-close menu-close navbar-brand font7"
    }, "\xA0", __jsx("img", {
      src: "https://img.icons8.com/windows/25/FF8C8C/delete-slide.png",
      className: "jsx-3807493491"
    }), "\xA0", _constant_main__WEBPACK_IMPORTED_MODULE_5__["wesitename"]), __jsx("h4", {
      className: "jsx-3807493491" + " " + "sidenav-link-topic  font1 fontsizeE2"
    }, "  \xA0 ", this.props.sidenavconst.topic), __jsx("div", {
      className: "jsx-3807493491" + " " + "sidenavbar-link pointer"
    }, this.props.sidenavconst.sidenavlink.map((c, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: i,
      href: c.suburl + c.type ? c.type : c.urlname ? c.urlname + '?ide=' + c._id : c.district
    }, __jsx("div", {
      className: "jsx-3807493491"
    }, __jsx("a", {
      className: "jsx-3807493491" + " " + "nav-link font1 fontsizeE1"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "jsx-3807493491" + " " + "fa fa-telegram"
    }), " \xA0", c.name ? c.name : c.itemname ? c.itemname : c.district))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3807493491"
    }, ".sidenavbar.jsx-3807493491{z-index:100;}.menu-close.jsx-3807493491{width:100%;color:rgb(61,228,246);font-size:1.5em;padding:20px 10px 20px 10px;background:rgba(7,36,159 );}.side-nav.jsx-3807493491{position:relative;-webkit-transition:-webkit-transform 0.35s ease-out;-webkit-transition:transform 0.35s ease-out;transition:transform 0.35s ease-out;background:darkblue;opacity:0.9;height:100%;width:90%;max-width:200px;box-shadow:0 5px 6px 4px rgba(0,0,0,.2);-webkit-transform:translateX(-102%);-ms-transform:translateX(-102%);transform:translateX(-102%);will-change:transform;overflow:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.side-nav-container.jsx-3807493491{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none;}.side-nav-container.jsx-3807493491:before{-webkit-transition:opacity 0.3s cubic-bezier(0,0,0.3,1);transition:opacity 0.3s cubic-bezier(0,0,0.3,1);content:'';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);will-change:opacity;opacity:0;pointer-events:none;}.side-nav-animatable.jsx-3807493491 .side-nav.jsx-3807493491{-webkit-transition:-webkit-transform 0.33s cubic-bexier(0,0,0.3,0.1);-webkit-transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);z-index :100;}.side-nav-animatable.side-nav-visible.jsx-3807493491 .side-nav.jsx-3807493491{-webkit-transition:-webkit-transform 0.33s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 0.33s cubic-bezier(0,0,0.3,1);transition:transform 0.33s cubic-bezier(0,0,0.3,1);}.side-nav-visible.jsx-3807493491{pointer-events:auto;z-index :100;}.side-nav-visible.jsx-3807493491 .side-nav.jsx-3807493491{-webkit-transform:none;-ms-transform:none;transform:none;}.side-nav-visible.jsx-3807493491:before{opacity:1;}.sidenav-link-topic.jsx-3807493491{padding:20px 10px 10px 10px;color:#F7A12D;}.sidenavbar-link.jsx-3807493491{padding:10%;}.sidenavbar-link.jsx-3807493491 a.jsx-3807493491{color:#C4FBFE;border-bottom:1px solid rgba(255,255,255,0.5);}.sidenavbar-link.jsx-3807493491 a.jsx-3807493491:hover{-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);-webkit-transition:0.5s;transition:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVHLEFBSWMsQUFJSCxBQU9RLEFBY0gsQUFTb0MsQUFjSyxBQUlGLEFBR2xDLEFBSUwsQUFHTCxBQUdvQixBQUlmLEFBR0ksQUFJSyxVQWJ4QixDQTFEd0IsQ0FKeEIsQUFxRUEsRUFHc0QsQ0EvQy9DLEdBZDZCLEVBNEN2QixFQTdCUCxNQUNLLEFBc0NLLEtBNURBLEFBbURoQixNQTVCWSxHQXNDWixPQTVENEIsRUF1QlosTUE4QmhCLEdBY0EsT0EzQ29CLFVBdkJTLENBcUVYLFNBN0NsQixpQkF2QkEsQUEwQlcsV0FDRyxHQTJDZCxXQTFDa0Isa0JBQ1osR0F6QmMsR0EwQlosUUFDQyxTQTFCRyxBQTJCTCxPQUNzQixBQVc3QixLQXRDWSxDQWtDQyxXQWpDSCxFQWtDVixPQVBvQixDQTFCSixnQkFDMkIsR0EwQmpDLFVBQ1Usb0JBQ3BCLE9BM0I0QixnR0FDTixzQkFDUixjQUNRLDhFQUN0QiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxTaWRlTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7d2VzaXRlbmFtZX0gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQ9ICgpPT4ge1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAkKCcub3Blbi1zaWRlLW5hdmJhcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlIHNpZGUtbmF2LXZpc2libGUnKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKCcuanMtbWVudS1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlJykucmVtb3ZlQ2xhc3MoJyBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgICQoJy5zaWRlbmF2YmFyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuanMtc2lkZS1uYXYtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3NpZGUtbmF2LWFuaW1hdGFibGUnKS5yZW1vdmVDbGFzcygnIHNpZGUtbmF2LXZpc2libGUnKTtcclxuICAgICAgfSlcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHNob3dTaWRlYmFyPSgpPT57XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuanMtc2lkZS1uYXYtY29udGFpbmVyJykuYWRkQ2xhc3MoJ3NpZGUtbmF2LWFuaW1hdGFibGUgc2lkZS1uYXYtdmlzaWJsZScpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgXHJcbnJlbmRlcigpe1xyXG4gIHJldHVybihcclxuPExheW91dD5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImpzLXNpZGUtbmF2LWNvbnRhaW5lciBzaWRlLW5hdi1jb250YWluZXIgc2lkZW5hdmJhclwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cImpzLXNpZGUtbmF2IHNpZGUtbmF2XCI+XHJcbiAgXHJcbiAgPGEgIGNsYXNzTmFtZT1cImpzLW1lbnUtY2xvc2UgbWVudS1jbG9zZSBuYXZiYXItYnJhbmQgZm9udDdcIj4mbmJzcDtcclxuICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vd2luZG93cy8yNS9GRjhDOEMvZGVsZXRlLXNsaWRlLnBuZ1wiLz4mbmJzcDtcclxuICB7d2VzaXRlbmFtZX1cclxuICA8L2E+XHJcblxyXG4gIDxoNCBjbGFzc05hbWU9XCJzaWRlbmF2LWxpbmstdG9waWMgIGZvbnQxIGZvbnRzaXplRTJcIj4gICZuYnNwOyB7dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3QudG9waWN9PC9oND5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZiYXItbGluayBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3Quc2lkZW5hdmxpbmsubWFwKChjLGkpPT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17Yy5zdWJ1cmwrYy50eXBlP2MudHlwZTooYy51cmxuYW1lP2MudXJsbmFtZSsnP2lkZT0nK2MuX2lkOmMuZGlzdHJpY3QpfSA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBmb250MSBmb250c2l6ZUUxXCIgPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRlbGVncmFtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAmbmJzcDt7Yy5uYW1lP2MubmFtZTpjLml0ZW1uYW1lP2MuaXRlbW5hbWU6Yy5kaXN0cmljdH08L2E+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG4gIDxzdHlsZSBqc3g+XHJcbiAge2BcclxuXHJcbi5zaWRlbmF2YmFye1xyXG4gIHotaW5kZXg6MTAwO1xyXG59XHJcblxyXG4ubWVudS1jbG9zZXtcclxud2lkdGg6MTAwJTtcclxuY29sb3I6IHJnYig2MSwgMjI4LCAyNDYpO1xyXG5mb250LXNpemU6IDEuNWVtO1xyXG5wYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDcsIDM2LCAxNTkgKTtcclxufVxyXG4uc2lkZS1uYXYge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cyBlYXNlLW91dDtcclxuYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbm9wYWNpdHk6IDAuOTtcclxuaGVpZ2h0OiAxMDAlO1xyXG53aWR0aDogOTAlO1xyXG5tYXgtd2lkdGg6IDIwMHB4O1xyXG5ib3gtc2hhZG93OiAwIDVweCA2cHggNHB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMiUpO1xyXG53aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5vdmVyZmxvdzogYXV0bztcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc2lkZS1uYXYtY29udGFpbmVyIHtcclxucG9zaXRpb246IGZpeGVkO1xyXG5sZWZ0OiAwO1xyXG50b3A6IDA7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbm92ZXJmbG93OiBoaWRkZW47XHJcbnBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5zaWRlLW5hdi1jb250YWluZXI6YmVmb3JlIHtcclxudHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpO1xyXG5jb250ZW50OiAnJztcclxuZGlzcGxheTogYmxvY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxudG9wOiAwO1xyXG5yaWdodDogMDtcclxuYm90dG9tOiAwO1xyXG5sZWZ0OiAwO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KTtcclxud2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcbm9wYWNpdHk6IDA7XHJcbnBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi5zaWRlLW5hdi1hbmltYXRhYmxlIC5zaWRlLW5hdiB7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcyBjdWJpYy1iZXhpZXIoMCwgMCwgMC4zLCAwLjEpO1xyXG56LWluZGV4IDogMTAwO1xyXG59XHJcbi5zaWRlLW5hdi1hbmltYXRhYmxlLnNpZGUtbmF2LXZpc2libGUgLnNpZGUtbmF2IHtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzNzIGN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpO1xyXG59XHJcbi5zaWRlLW5hdi12aXNpYmxlIHtcclxucG9pbnRlci1ldmVudHM6IGF1dG87XHJcbnotaW5kZXggOiAxMDA7XHJcbn1cclxuLnNpZGUtbmF2LXZpc2libGUgLnNpZGUtbmF2IHtcclxudHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5zaWRlLW5hdi12aXNpYmxlOmJlZm9yZSB7XHJcbm9wYWNpdHk6IDE7XHJcbn1cclxuLnNpZGVuYXYtbGluay10b3BpYyB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICBjb2xvcjogI0Y3QTEyRDtcclxufVxyXG4uc2lkZW5hdmJhci1saW5re1xyXG4gICAgcGFkZGluZzoxMCU7XHJcbn1cclxuLnNpZGVuYXZiYXItbGluayBhe1xyXG4gICAgY29sb3I6ICNDNEZCRkUgO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSA7XHJcbn1cclxuLnNpZGVuYXZiYXItbGluayBhOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBcclxufVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SideNav.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/menu3.js":
/*!************************!*\
  !*** ./pages/menu3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../layouts/SideNav */ "./layouts/SideNav.js");
/* harmony import */ var _components_GoogleSign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/GoogleSign */ "./components/GoogleSign.js");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-crop */ "react-image-crop");
/* harmony import */ var react_image_crop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_crop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "componentDidMount", () => {});

    _defineProperty(this, "onClickhh", () => {
      alert('ghh');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('button').attr("disabled", true); //Router.push('/hello-nextjs')
    });

    this.state = {
      crop: {
        unit: 'px',
        // default, can be 'px' or '%'
        x: 130,
        y: 50,
        width: 200,
        height: 200
      }
    };
  }

  showsidebar() {
    this.refs.child.showSidebar();
  }

  render() {
    const sidenavlink = [{
      id: 1,
      link: '/',
      linkname: 'home'
    }, {
      id: 1,
      link: '/menu',
      linkname: 'menu'
    }, {
      id: 1,
      link: '/',
      linkname: 'menu2'
    }, {
      id: 1,
      link: '/',
      linkname: 'menu3'
    }, {
      id: 1,
      link: '/',
      linkname: 'menu4'
    }, {
      id: 1,
      link: '/',
      linkname: 'menu5'
    }];
    const topic = 'Categeries';
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("h1", {
      className: "jsx-2038225627" + " " + "font1"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font2"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font3"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font4"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font5"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font6"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font1 topicColor"
    }, "Catageries"), __jsx("h1", {
      className: "jsx-2038225627" + " " + "font1 subtopicColor"
    }, "Catageries"), __jsx(_components_GoogleSign__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
      className: "jsx-2038225627" + " " + "col-3"
    }, __jsx("button", {
      onClick: this.onClickhh,
      className: "jsx-2038225627"
    }, "click")), __jsx("div", {
      className: "jsx-2038225627" + " " + "col-sm-6 col-md-4 col-lg-3 mt-4"
    }, __jsx("div", {
      className: "jsx-2038225627" + " " + "row m-card"
    }, __jsx("div", {
      className: "jsx-2038225627" + " " + "col-4 m-image"
    }, __jsx("img", {
      src: './form2.jpg',
      className: "jsx-2038225627" + " " + "card-img-top"
    })), __jsx("div", {
      className: "jsx-2038225627" + " " + "col-8 m-content"
    }, __jsx("h4", {
      className: "jsx-2038225627" + " " + "font1 topicColor fontsizeE1-25 m-content-left"
    }, "Samsung As hosty 5"), __jsx("p", {
      className: "jsx-2038225627" + " " + "font6 subtopicColor fontsizeE-9 m-content-left "
    }, "Electronic-device/Samsung"), __jsx("p", {
      className: "jsx-2038225627" + " " + "font6 m-content-right"
    }, __jsx("strike", {
      className: "jsx-2038225627" + " " + "fontsizeE-8"
    }, "Rs 2500.00"), __jsx("span", {
      className: "jsx-2038225627" + " " + "fontcolorOrange fontsizeE-8"
    }, "10% "), __jsx("span", {
      className: "jsx-2038225627" + " " + "fontcolorred fontsizeE-9"
    }, "Rs.25000")), __jsx("div", {
      className: "jsx-2038225627" + " " + "float-right"
    }, __jsx("a", {
      className: "jsx-2038225627" + " " + "btn btn-danger fontsizeE-9 float-right btn-sm m-content-righ"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/20/ffffff/favorite-cart.png",
      className: "jsx-2038225627"
    })), __jsx("a", {
      className: "jsx-2038225627" + " " + "font6 fontsizeE-9 float-right m-content-righ"
    }, "Idea mart/Nugeggoda"))))), __jsx("div", {
      className: "jsx-2038225627" + " " + "col-sm-6 col-md-4 col-lg-3 mt-4"
    }, __jsx("div", {
      className: "jsx-2038225627" + " " + "row m-card"
    }, __jsx("div", {
      className: "jsx-2038225627" + " " + "col-4 m-image"
    }, __jsx("img", {
      src: './form2.jpg',
      className: "jsx-2038225627" + " " + "card-img-top"
    })), __jsx("div", {
      className: "jsx-2038225627" + " " + "col-8 m-content"
    }, __jsx("h4", {
      className: "jsx-2038225627" + " " + "font1 topicColor fontsizeE1-25 m-content-left"
    }, "Samsung As hosty 5"), __jsx("p", {
      className: "jsx-2038225627" + " " + "font6 subtopicColor fontsizeE-9 m-content-left "
    }, "Electronic-device/Samsung"), __jsx("p", {
      className: "jsx-2038225627" + " " + "font6 m-content-right"
    }, __jsx("strike", {
      className: "jsx-2038225627" + " " + "fontsizeE-8"
    }, "Rs 2500.00"), __jsx("span", {
      className: "jsx-2038225627" + " " + "fontcolorOrange fontsizeE-8"
    }, "10% "), __jsx("span", {
      className: "jsx-2038225627" + " " + "fontcolorred fontsizeE-9"
    }, "Rs.25000")), __jsx("div", {
      className: "jsx-2038225627" + " " + "float-right"
    }, __jsx("a", {
      className: "jsx-2038225627" + " " + "btn btn-danger fontsizeE-9 float-right btn-sm m-content-righ"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/20/ffffff/favorite-cart.png",
      className: "jsx-2038225627"
    })), __jsx("a", {
      className: "jsx-2038225627" + " " + "font6 fontsizeE-9 float-right m-content-righ"
    }, "Idea mart/Nugeggoda"))))), __jsx("br", {
      className: "jsx-2038225627"
    }), __jsx("br", {
      className: "jsx-2038225627"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2038225627"
    }, ".m-image.jsx-2038225627{width:100%;padding:2px;}.m-content.jsx-2038225627{padding:2px;}.m-content-left.jsx-2038225627{padding:0;margin:0px;text-align:left;}.m-content-right.jsx-2038225627{padding:0;margin:0px;text-align:right;}.m-card.jsx-2038225627{background:lightblue;padding:5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxtZW51My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSW9CLEFBSWtDLEFBS0MsQUFJRixBQUtBLEFBS1UsVUFUVixBQUtBLENBZEUsQ0FNZCxTQUlrQixBQUtDLEFBSUosRUFqQmYsWUFtQkEsRUFWQSxDQUtBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxtZW51My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLy4uL2xheW91dHMvU2lkZU5hdic7XHJcbmltcG9ydCBHb29nbGVTaWduIGZyb20gJy4vLi4vY29tcG9uZW50cy9Hb29nbGVTaWduJztcclxuaW1wb3J0IFJlYWN0Q3JvcCBmcm9tICdyZWFjdC1pbWFnZS1jcm9wJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNyb3A6IHtcclxuICAgICAgICB1bml0OiAncHgnLCAvLyBkZWZhdWx0LCBjYW4gYmUgJ3B4JyBvciAnJSdcclxuICAgICAgICB4OiAxMzAsXHJcbiAgICAgICAgeTogNTAsXHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICBoZWlnaHQ6IDIwMFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQ9ICgpPT4ge1xyXG5cclxuICB9XHJcbiAgc2hvd3NpZGViYXIoKXtcclxuICAgIHRoaXMucmVmcy5jaGlsZC5zaG93U2lkZWJhcigpO1xyXG4gIH1cclxuXHJcbiAgb25DbGlja2hoPSgpPT57XHJcbmFsZXJ0KCdnaGgnKTtcclxuXHJcbiAgJCgnYnV0dG9uJykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cclxuXHJcbiAgIC8vUm91dGVyLnB1c2goJy9oZWxsby1uZXh0anMnKVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBcclxuICBcclxucmVuZGVyKCl7XHJcblxyXG4gIGNvbnN0IHNpZGVuYXZsaW5rID0gW1xyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J21lbnUyJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbWVudTMnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidtZW51NCd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J21lbnU1J30sXHJcbiAgXTtcclxuICBjb25zdCB0b3BpYyA9ICdDYXRlZ2VyaWVzJztcclxuICByZXR1cm4oXHJcbjxMYXlvdXQ+XHJcblxyXG5cclxuPGgxIGNsYXNzTmFtZT1cImZvbnQxXCI+Q2F0YWdlcmllczwvaDE+XHJcbjxoMSBjbGFzc05hbWU9XCJmb250MlwiPkNhdGFnZXJpZXM8L2gxPlxyXG48aDEgY2xhc3NOYW1lPVwiZm9udDNcIj5DYXRhZ2VyaWVzPC9oMT5cclxuPGgxIGNsYXNzTmFtZT1cImZvbnQ0XCI+Q2F0YWdlcmllczwvaDE+XHJcbjxoMSBjbGFzc05hbWU9XCJmb250NVwiPkNhdGFnZXJpZXM8L2gxPlxyXG48aDEgY2xhc3NOYW1lPVwiZm9udDZcIj5DYXRhZ2VyaWVzPC9oMT5cclxuPGgxIGNsYXNzTmFtZT1cImZvbnQxIHRvcGljQ29sb3JcIj5DYXRhZ2VyaWVzPC9oMT5cclxuPGgxIGNsYXNzTmFtZT1cImZvbnQxIHN1YnRvcGljQ29sb3JcIj5DYXRhZ2VyaWVzPC9oMT5cclxuXHJcblxyXG48R29vZ2xlU2lnbj48L0dvb2dsZVNpZ24+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XHJcbjxidXR0b24gb25DbGljaz17dGhpcy5vbkNsaWNraGh9ID5jbGljazwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zIG10LTRcIj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwicm93IG0tY2FyZFwiPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBtLWltYWdlXCI+XHJcbjxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXsnLi9mb3JtMi5qcGcnfSAvPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLTggbS1jb250ZW50XCI+XHJcblxyXG48aDQgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDb2xvciBmb250c2l6ZUUxLTI1IG0tY29udGVudC1sZWZ0XCI+U2Ftc3VuZyBBcyBob3N0eSA1PC9oND5cclxuXHJcbjxwIGNsYXNzTmFtZT1cImZvbnQ2IHN1YnRvcGljQ29sb3IgZm9udHNpemVFLTkgbS1jb250ZW50LWxlZnQgXCI+RWxlY3Ryb25pYy1kZXZpY2UvU2Ftc3VuZzwvcD5cclxuPHAgY2xhc3NOYW1lPVwiZm9udDYgbS1jb250ZW50LXJpZ2h0XCI+PHN0cmlrZSBjbGFzc05hbWU9XCJmb250c2l6ZUUtOFwiPlJzIDI1MDAuMDA8L3N0cmlrZT48c3BhbiBjbGFzc05hbWU9XCJmb250Y29sb3JPcmFuZ2UgZm9udHNpemVFLThcIj4xMCUgPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZvbnRjb2xvcnJlZCBmb250c2l6ZUUtOVwiPlJzLjI1MDAwPC9zcGFuPjwvcD5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZm9udHNpemVFLTkgZmxvYXQtcmlnaHQgYnRuLXNtIG0tY29udGVudC1yaWdoXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+PC9hPlxyXG48YSBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOSBmbG9hdC1yaWdodCBtLWNvbnRlbnQtcmlnaFwiPklkZWEgbWFydC9OdWdlZ2dvZGE8L2E+XHJcbjwvZGl2PiAgICAgICAgICAgICAgICBcclxuPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMgbXQtNFwiPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJyb3cgbS1jYXJkXCI+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC00IG0taW1hZ2VcIj5cclxuPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9eycuL2Zvcm0yLmpwZyd9IC8+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBtLWNvbnRlbnRcIj5cclxuXHJcbjxoNCBjbGFzc05hbWU9XCJmb250MSB0b3BpY0NvbG9yIGZvbnRzaXplRTEtMjUgbS1jb250ZW50LWxlZnRcIj5TYW1zdW5nIEFzIGhvc3R5IDU8L2g0PlxyXG5cclxuPHAgY2xhc3NOYW1lPVwiZm9udDYgc3VidG9waWNDb2xvciBmb250c2l6ZUUtOSBtLWNvbnRlbnQtbGVmdCBcIj5FbGVjdHJvbmljLWRldmljZS9TYW1zdW5nPC9wPlxyXG48cCBjbGFzc05hbWU9XCJmb250NiBtLWNvbnRlbnQtcmlnaHRcIj48c3RyaWtlIGNsYXNzTmFtZT1cImZvbnRzaXplRS04XCI+UnMgMjUwMC4wMDwvc3RyaWtlPjxzcGFuIGNsYXNzTmFtZT1cImZvbnRjb2xvck9yYW5nZSBmb250c2l6ZUUtOFwiPjEwJSA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZm9udGNvbG9ycmVkIGZvbnRzaXplRS05XCI+UnMuMjUwMDA8L3NwYW4+PC9wPlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG48YSBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmb250c2l6ZUUtOSBmbG9hdC1yaWdodCBidG4tc20gbS1jb250ZW50LXJpZ2hcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9mYXZvcml0ZS1jYXJ0LnBuZ1wiLz48L2E+XHJcbjxhIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05IGZsb2F0LXJpZ2h0IG0tY29udGVudC1yaWdoXCI+SWRlYSBtYXJ0L051Z2VnZ29kYTwvYT5cclxuPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG48L2Rpdj5cclxuXHJcblxyXG48L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG4gICAgICAgICBcclxuXHJcblxyXG5cclxuPGJyLz48YnIvPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm0taW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tLWNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tLWNvbnRlbnQtbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm0tY29udGVudC1yaWdodHtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tLWNhcmR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOmxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG5cclxuPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\menu3.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/menu3.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\menu3.js */"./pages/menu3.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-image-crop":
/*!***********************************!*\
  !*** external "react-image-crop" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=menu3.js.map