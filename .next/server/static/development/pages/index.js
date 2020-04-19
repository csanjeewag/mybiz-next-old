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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Allcatagery.js":
/*!***********************************!*\
  !*** ./components/Allcatagery.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant/main */ "./constant/main.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Index = props => __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
  id: "menu1",
  className: "jsx-2258984650" + " " + "Categories"
}, __jsx("h4", {
  className: "jsx-2258984650" + " " + "font1 topicC topicColor fontsizeE2-25"
}, props.topic), __jsx("div", {
  className: "jsx-2258984650" + " " + " row projects"
}, props.catageries.map((c, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  key: i,
  href: `${_constant_main__WEBPACK_IMPORTED_MODULE_4__["categoryUrl"] + c.type}?=ide${c._id}`
}, __jsx("div", {
  key: i,
  className: "jsx-2258984650" + " " + "col-sm-6 col-lg-4 col-xl-3"
}, " ", __jsx("div", {
  className: "jsx-2258984650" + " " + "card"
}, __jsx("div", {
  className: "jsx-2258984650" + " " + "image "
}, __jsx("img", {
  src: _constant_main__WEBPACK_IMPORTED_MODULE_4__["ImageUrl"] + c.mainimage,
  width: "100%",
  height: "200px",
  className: "jsx-2258984650"
})), __jsx("div", {
  className: "jsx-2258984650" + " " + "card-inner"
}, __jsx("div", {
  className: "jsx-2258984650" + " " + "header"
}, __jsx("h3", {
  className: "jsx-2258984650" + " " + "font4 topicColor fontsizeE1-5"
}, c.type)), __jsx("div", {
  className: "jsx-2258984650" + " " + "content"
}, __jsx("h4", {
  className: "jsx-2258984650" + " " + "font6 subtopicColor fontsizeE1"
}, c.name))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2258984650"
}, ".Categories.jsx-2258984650{border-style:outset none none none;margin:20px;}.topicC.jsx-2258984650{padding :10px;}.card.jsx-2258984650{box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;box-sizing:border-box;margin-top:10px;margin-bottom:10px;background-color:#FFF;font-size:0.9em;}.card.jsx-2258984650:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transition:0.5s;transition:0.5s;}.card.jsx-2258984650>.card-inner.jsx-2258984650{padding:10px;background-color:rgba(255,255,255,0.3);}.card.jsx-2258984650 .header.jsx-2258984650 h2.jsx-2258984650,h3.jsx-2258984650{margin-bottom:0px;margin-top:0px;}.card.jsx-2258984650 .header.jsx-2258984650{margin-bottom:5px;}.card.jsx-2258984650 img.jsx-2258984650{width:100%;-webkit-transition:0.5s;transition:0.5s;}.image.jsx-2258984650{height :100px;}.image.jsx-2258984650 img.jsx-2258984650:hover{opacity:0.5;-webkit-transition:0.5s;transition:0.5s;}.projects.jsx-2258984650 div.jsx-2258984650{-webkit-animation-name:fade-in-jsx-2258984650;animation-name:fade-in-jsx-2258984650;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-2258984650 div.jsx-2258984650:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-2258984650{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-2258984650{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEFsbGNhdGFnZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDTyxBQUd3QyxBQUlyQixBQUdvRCxBQVVBLEFBS3RELEFBSU0sQUFJRCxBQUdQLEFBSUksQUFJRixBQUtlLEFBS0YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdELEFBSU4sQUFHQSxVQUZmLEFBR0EsQ0FuRWEsQ0FRQSxDQW5CMEIsQ0FsQjVDLEFBa0NBLElBWmdCLEFBSWhCLGVBSEEsRUEzQmEsWUFDYixDQTRGQyxFQTFDQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLENBeERELENBWEEsQUFvQkEsYUFwQ2tDLEFBVVYsbUJBNkJPLHFEQXRDUCxLQXVDSSxDQTdCVixnQkFURCxnQkFDRyxRQVNwQixXQVJ1QixBQXFDdEIsc0JBcENnQixnQkFDakIiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcQWxsY2F0YWdlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7SW1hZ2VVcmwsY2F0ZWdvcnlVcmx9IGZyb20gJy4uL2NvbnN0YW50L21haW4nO1xyXG5cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcblxyXG4gIFxyXG5cclxuIDxMYXlvdXQ+XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXRlZ29yaWVzXCIgaWQ9XCJtZW51MVwiPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDIHRvcGljQ29sb3IgZm9udHNpemVFMi0yNVwiPntwcm9wcy50b3BpY308L2g0PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdyBwcm9qZWN0c1wiPlxyXG4gICAgICB7cHJvcHMuY2F0YWdlcmllcy5tYXAoKGMsaSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YCR7Y2F0ZWdvcnlVcmwrYy50eXBlfT89aWRlJHtjLl9pZH1gfSA+IFxyXG4gICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy00IGNvbC14bC0zXCI+IDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBcIj5cclxuICAgICAgICAgPGltZyBzcmM9e0ltYWdlVXJsK2MubWFpbmltYWdlfSAgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMjAwcHhcIiAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW5uZXJcIj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udDQgdG9waWNDb2xvciBmb250c2l6ZUUxLTVcIj57Yy50eXBlfTwvaDM+XHJcbiAgICAgICAgXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQ2IHN1YnRvcGljQ29sb3IgZm9udHNpemVFMVwiPntjLm5hbWV9PC9oND5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICBcclxuICAgICA8L0xpbms+XHJcbiAgICAgICkpXHJcbiAgICAgIH1cclxuICAgPC9kaXY+XHJcbiAgIFxyXG48L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAuQ2F0ZWdvcmllc3tcclxuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0IG5vbmUgbm9uZSBub25lO1xyXG4gICAgbWFyZ2luOjIwcHg7XHJcbiAgfVxyXG4gIC50b3BpY0Mge1xyXG4gICAgcGFkZGluZyA6IDEwcHg7XHJcbiAgfVxyXG4gICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRkY7XHJcbiAgICBmb250LXNpemU6MC45ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICAuY2FyZCA+IC5jYXJkLWlubmVyIHtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB9XHJcbiAgLmNhcmQgLmhlYWRlciBoMiwgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgfVxyXG4gIC5jYXJkIC5oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgfVxyXG4gIC5jYXJkIGltZ3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICAuaW1hZ2V7XHJcbiAgICBoZWlnaHQgOiAxMDBweDtcclxuXHJcbiAgfVxyXG4gIC5pbWFnZSBpbWc6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgXHJcbiAgfVxyXG4gICAgLnByb2plY3RzIGRpdiB7XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW47XHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOCkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4wcztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg5KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjJzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEwKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDExKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEyKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEzKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjBzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE0KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjJzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE1KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjQ7XHJcbiAgIH1cclxuICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgfVxyXG4gICB9XHJcbiAgICBcclxuICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Allcatagery.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("section", {
      id: "footer",
      className: "jsx-1098961160"
    }, __jsx("div", {
      className: "jsx-1098961160" + " " + "container"
    }, __jsx("div", {
      className: "jsx-1098961160" + " " + "row fontsizeE1"
    }, __jsx("div", {
      className: "jsx-1098961160" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4 "
    }, __jsx("h5", {
      className: "jsx-1098961160" + " " + "info-topic fontsizeE1-25"
    }, "CONTACT US"), __jsx("table", {
      className: "jsx-1098961160" + " " + "contact-info"
    }, __jsx("tbody", {
      className: "jsx-1098961160"
    }, __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-map-marker icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, " Smart Mobile Nugegoda.", __jsx("br", {
      className: "jsx-1098961160"
    }), "281/1A, Stanly Thilakarathna Mawatha,", __jsx("br", {
      className: "jsx-1098961160"
    }), "Nugegoda")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-phone icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "0767 568 568, 0772 337 148,", __jsx("br", {
      className: "jsx-1098961160"
    }), "0114 546 614 ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-envelope-o icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("a", {
      href: "mailto:info@smartmobile.lk",
      className: "jsx-1098961160"
    }, "info@smartmobile.lk"))), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-globe icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("a", {
      href: "https://www.smartmobile.lk",
      className: "jsx-1098961160"
    }, " www.smartmobile.lk")))))), __jsx("div", {
      className: "jsx-1098961160" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-1098961160" + " " + "info-topic fontsizeE1-25"
    }, "INFORMATION"), __jsx("table", {
      className: "jsx-1098961160" + " " + "contact-info"
    }, __jsx("tbody", {
      className: "jsx-1098961160"
    }, __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, " About Us")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "Delivery Information ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "Privacy Policy ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "Terms & Conditions"))))), __jsx("div", {
      className: "jsx-1098961160" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-1098961160" + " " + "info-topic fontsizeE1-25"
    }, "FOLLOW US"), __jsx("table", {
      className: "jsx-1098961160" + " " + "contact-info"
    }, __jsx("tbody", {
      className: "jsx-1098961160"
    }, __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-facebook icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, " facebook")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-twitter icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "twitter ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-instagram icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "instagram ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-google-plus icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, "google plus")))))))), __jsx("div", {
      className: "jsx-1098961160" + " " + "footer"
    }, "This footer will always be positioned at the bottom of the page, but ", __jsx("strong", {
      className: "jsx-1098961160"
    }, "not fixed"), "."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1098961160"
    }, "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');.footer.jsx-1098961160{position:relative;right:0;bottom:0;left:0;padding:1rem;background-color:black;text-align:center;}section.jsx-1098961160{padding:60px 0;}section.jsx-1098961160 .section-title.jsx-1098961160{text-align:center;color:#007b5e;margin-bottom:50px;text-transform:uppercase;}#footer.jsx-1098961160{background:darkblue !important;}#footer.jsx-1098961160 a.jsx-1098961160{color:#ffffff;-webkit-text-decoration:none !important;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160{padding:3px 0;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160 i.jsx-1098961160{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160:hover a.jsx-1098961160 i.jsx-1098961160{margin-top:-10px;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160,#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160{color:#ffffff;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160:hover{color:#eeeeee;}#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160:hover{padding:3px 0;margin-left:5px;}#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160 i.jsx-1098961160{margin-right:5px;}.info-topic.jsx-1098961160{color:white;margin:20px 0;}.contact-info.jsx-1098961160{color:white;font-family:'Titillium Web',sans-serif;}.contact-info.jsx-1098961160 .icon.jsx-1098961160{color:yellow;padding-right:20px;}tr.jsx-1098961160{vertical-align:top;padding-bottom:200px;font-family:'Titillium Web',sans-serif;}@media (max-width:767px){#footer.jsx-1098961160 h5.jsx-1098961160{padding-left:0;border-left:transparent;padding-bottom:0px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRkcsQUFHbUIsQUFTd0UsQUFFdkUsQUFJRyxBQU1hLEFBSWpCLEFBTUgsQUFHTSxBQU9KLEFBSUgsQUFHQSxBQUdDLEFBTUEsQUFJRyxBQUdOLEFBSUEsQUFJQyxBQUtPLEFBT0QsWUFuQkosQUFJMEIsQ0FJdEIsQ0EvQ2lCLEFBTXBDLEFBY0EsQUFHQSxBQUdpQyxBQU1qQixDQTlDaEIsQUF5RTRCLEVBbERiLEFBT2YsQUFvQkEsQ0E3RFEsQUFlVSxDQThERyxPQTVFWixBQWdFVCxJQVBBLENBckNBLENBTHVCLEFBbUJVLEFBdUNqQyxHQXhFTyxJQW1GZ0IsQ0FQa0IsRUEzRTVCLElBaURpQixLQW5DRCxBQW9EN0IsSUFqRXVCLEdBa0ZBLE1BbERPLFdBaUJMLENBbkN6QixDQXFFQSxDQWxGa0IsQ0EwRWhCLE9BckQrQixPQVdSLEdBL0J6QixtQkFxQnlDLGdCQTJCekMsa0JBaEJBLEdBVkEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi8uLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgIHJlbmRlcigpe1xyXG5cdCAgIHJldHVybihcclxuXHQ8TGF5b3V0PlxyXG5cdFx0XHRcclxuXHJcbjxzZWN0aW9uIGlkPVwiZm9vdGVyXCI+XHJcblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGZvbnRzaXplRTFcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgXCI+XHJcblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImluZm8tdG9waWMgZm9udHNpemVFMS0yNVwiPkNPTlRBQ1QgVVM8L2g1PlxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cclxuXHRcdFx0XHRcdDx0Ym9keSA+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgPiBTbWFydCBNb2JpbGUgTnVnZWdvZGEuPGJyLz5cclxuXHRcdFx0XHRcdDI4MS8xQSwgU3Rhbmx5IFRoaWxha2FyYXRobmEgTWF3YXRoYSw8YnIvPlxyXG5cdFx0XHRcdFx0TnVnZWdvZGE8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPjA3NjcgNTY4IDU2OCwgMDc3MiAzMzcgMTQ4LDxici8+MDExNCA1NDYgNjE0IDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZW52ZWxvcGUtbyBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD48YSBocmVmPVwibWFpbHRvOmluZm9Ac21hcnRtb2JpbGUubGtcIj5pbmZvQHNtYXJ0bW9iaWxlLmxrPC9hPjwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2xvYmUgaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnNtYXJ0bW9iaWxlLmxrXCI+IHd3dy5zbWFydG1vYmlsZS5sazwvYT48L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGJvZHk+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00XCI+XHJcblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImluZm8tdG9waWMgZm9udHNpemVFMS0yNVwiPklORk9STUFUSU9OPC9oNT5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dGJvZHkgPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkID4gQWJvdXQgVXM8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8gaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+RGVsaXZlcnkgSW5mb3JtYXRpb24gPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlByaXZhY3kgUG9saWN5IDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5mbyBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5UZXJtcyAmIENvbmRpdGlvbnM8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGJvZHk+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00XCI+XHJcblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImluZm8tdG9waWMgZm9udHNpemVFMS0yNVwiPkZPTExPVyBVUzwvaDU+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxyXG5cdFx0XHRcdFx0PHRib2R5ID5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2sgaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgPiBmYWNlYm9vazwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlciBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD50d2l0dGVyIDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPmluc3RhZ3JhbSA8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPmdvb2dsZSBwbHVzPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3Rib2R5PjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHQ8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlRoaXMgZm9vdGVyIHdpbGwgYWx3YXlzIGJlIHBvc2l0aW9uZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSwgYnV0IDxzdHJvbmc+bm90IGZpeGVkPC9zdHJvbmc+LjwvZGl2PlxyXG48c3R5bGUganN4PlxyXG57ICBgXHJcbi5mb290ZXIge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmxlZnQ6IDA7XHJcbnBhZGRpbmc6IDFyZW07XHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDdiNWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcclxuXHRtYXJnaW4tdG9wOi0xMHB4O1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYXtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGE6aG92ZXJ7XHJcblx0Y29sb3I6I2VlZWVlZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVye1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEgaXtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uaW5mby10b3BpYyB7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWN0LWluZm8gLmljb257XHJcblx0Y29sb3I6eWVsbG93O1xyXG5cdHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgXHJcbn1cclxudHIge1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0cGFkZGluZy1ib3R0b206MjAwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblx0I2Zvb3RlciBoNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuYH1cclxuPC9zdHlsZT5cclxuXHJcbjwvTGF5b3V0PlxyXG5cdCAgIClcclxuXHQgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyAiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Footer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/Topslide.js":
/*!********************************!*\
  !*** ./components/Topslide.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Navbar */ "./layouts/Navbar.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      function checkWidth() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();
        var windowheight = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height(); //if the window is greater than 440px wide then turn on jScrollPane..
        //  $('.div1').addClass('desktop')

        jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.div1').css({
          'background-color': 'lightblue',
          'height': windowheight / 2,
          'width': windowwidth
        });
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.topic').css({
          'font-size': windowwidth / 10
        });
      } // Execute on load


      checkWidth(); // Bind event listener

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(checkWidth);
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
      className: "jsx-3737670149" + " " + "div1"
    }, __jsx("h1", {
      className: "jsx-3737670149" + " " + "topic font1"
    }, "MYBIZ.COM")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3737670149"
    }, "div.div1.jsx-3737670149{background-image:url(\"./mainimage.jpg\");background-position:center;background-repeat:no-repeat;background-size:cover;}.topic.jsx-3737670149{position:relative;top:45%;text-align:center;color:lightgray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXFRvcHNsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDaUIsQUFHeUQsQUFPdEIsa0JBQ1YsUUFDUyxjQVJVLElBU1gsZ0JBRWxCLE9BVjhCLDRCQUNOLHNCQUV4QiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxjb21wb25lbnRzXFxUb3BzbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9sYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSB3aW5kb3cgaXMgZ3JlYXRlciB0aGFuIDQ0MHB4IHdpZGUgdGhlbiB0dXJuIG9uIGpTY3JvbGxQYW5lLi5cclxuICAgICAgICAgICAgICAgICAgLy8gICQoJy5kaXYxJykuYWRkQ2xhc3MoJ2Rlc2t0b3AnKVxyXG4gICAgICAgICAgICAgICAgICAkKCdkaXYuZGl2MScpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidsaWdodGJsdWUnLCdoZWlnaHQnOndpbmRvd2hlaWdodC8yLCd3aWR0aCc6d2luZG93d2lkdGh9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnLnRvcGljJykuY3NzKHsnZm9udC1zaXplJyA6IHdpbmRvd3dpZHRoLzEwfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICA8TmF2QmFyPjwvTmF2QmFyPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiAgPlxyXG4gICAgICAgICA8aDEgY2xhc3NOYW1lPVwidG9waWMgZm9udDFcIiAgPk1ZQklaLkNPTTwvaDE+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgZGl2LmRpdjEge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9tYWluaW1hZ2UuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudG9waWMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Topslide.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/signup.js":
/*!******************************!*\
  !*** ./components/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "componentDidMount", () => {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.popup-close').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logreg-forms').slideUp(1000, function () {
            jquery__WEBPACK_IMPORTED_MODULE_4___default()('#background-signin').hide();
          });
        });
      });
    });

    _defineProperty(this, "handleChange", evt => {
      // This triggers everytime the input is changed
      this.setState({
        [evt.target.name]: evt.target.value
      });
    });

    _defineProperty(this, "responseGoogle", response => {
      if (this.state.contact.length > 0) {
        this.setState(_objectSpread({}, response.profileObj, {
          token: response.tokenId
        }));
        this.handleSubmit();
      } else {
        alert('There should be contact details.');
      }
    });

    _defineProperty(this, "responseGoogleSignIn", response => {
      this.hidesignup();
      var res = null;
      this.setState(_objectSpread({}, response.profileObj, {
        token: response.tokenId
      }));
      const datas = new FormData();
      datas.append('jsonbody', JSON.stringify(this.state));
      datas.append('token', response.tokenId);
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('/api/signinuser', {
        method: 'POST',
        headers: {},
        body: datas
      }).then(response => {
        return response.json();
      }).then(data => {
        if (data != undefined) {
          alert(data.msg);
          js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('user', data);
        }
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "handleSubmit", () => {
      this.hidesignup(); //  evt.preventDefault();

      const datas = new FormData(); // datas.append('file', this.state.selectedFile);

      datas.append('jsonbody', JSON.stringify(this.state));
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('/api/createuser', {
        method: 'POST',
        headers: {//'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          //'Content-Type': 'multipart/form-data'
        },
        body: datas
      });
      then(response => {
        return response.json();
      }).then(data => {
        if (data) {
          alert(data.msg);
          js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('user', data);
        }
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "showsignup", () => {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#background-signin').show();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logreg-forms').hide();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logreg-forms').slideDown(1000);
    });

    _defineProperty(this, "hidesignup", () => {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logreg-forms').slideUp(1000, function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#background-signin').hide();
      });
    });

    this.state = {
      name: '',
      email: '',
      address: '',
      contact: '',
      imageUrl: '',
      googleId: '',
      givenName: '',
      familyName: '',
      token: ''
    };
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      id: "background-signin",
      className: "jsx-3259398597"
    }, __jsx("div", {
      id: "logreg-forms",
      className: "jsx-3259398597" + " " + "col-lg-4 col-md-8 col-sm-12"
    }, __jsx("div", {
      className: "jsx-3259398597" + " " + "popup-close"
    }, "x"), __jsx("br", {
      className: "jsx-3259398597"
    }), __jsx("h3", {
      className: "jsx-3259398597" + " " + "h3 mb-3 font1 topicColor fontsizeE1"
    }, " Sign in"), __jsx("div", {
      className: "jsx-3259398597" + " " + "social-login row col-12 fontsizeE-9"
    }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLogin"], {
      clientId: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      buttonText: "Sign in with Google+",
      onSuccess: this.responseGoogleSignIn,
      onFailure: this.responseGoogleSignIn,
      cookiePolicy: 'single_host_origin',
      className: "btn google-btn social-btn col-lg-6 col-sm-12",
      isSignedIn: false
    }), __jsx("button", {
      type: "button",
      className: "jsx-3259398597" + " " + "btn facebook-btn social-btn col-lg-6 col-sm-12 fontsizeE-9"
    }, __jsx("span", {
      className: "jsx-3259398597"
    }, __jsx("i", {
      className: "jsx-3259398597" + " " + "fab fa-facebook-f"
    }), " Sign in with Facebook"), " ")), __jsx("hr", {
      className: "jsx-3259398597"
    }), __jsx("h3", {
      className: "jsx-3259398597" + " " + "h3 mb-3 font1 topicColor fontsizeE1"
    }, " Sign up"), __jsx("form", {
      className: "jsx-3259398597"
    }, __jsx("div", {
      className: "jsx-3259398597" + " " + "form-group"
    }, __jsx("label", {
      className: "jsx-3259398597" + " " + "font1 fontsizeE1"
    }, "address"), __jsx("input", {
      type: "email",
      name: "address",
      placeholder: "Enter Address",
      value: this.state.address,
      onChange: this.handleChange,
      className: "jsx-3259398597" + " " + "form-control fontsizeE1"
    })), __jsx("div", {
      className: "jsx-3259398597" + " " + "form-group"
    }, __jsx("label", {
      className: "jsx-3259398597" + " " + "font1 fontsizeE1"
    }, "Contact *"), __jsx("input", {
      type: "email",
      id: "exampleInputAddress",
      placeholder: "Enter Contact *",
      name: "contact",
      value: this.state.contact,
      onChange: this.handleChange,
      className: "jsx-3259398597" + " " + "form-control fontsizeE1"
    })), __jsx("div", {
      className: "jsx-3259398597" + " " + "form-check"
    }, __jsx("input", {
      type: "checkbox",
      className: "jsx-3259398597" + " " + "form-check-input"
    }), __jsx("label", {
      className: "form-check-label",
      className: "jsx-3259398597" + " " + "font1 fontsizeE-9"
    }, "Sign up as Seller")), __jsx("small", {
      id: "emailHelp",
      className: "jsx-3259398597" + " " + "form-text text-muted fontsizeE-7"
    }, "We'll never share your details with anyone else."), __jsx("div", {
      className: "jsx-3259398597" + " " + "social-login row col-12 fontsizeE-9"
    }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLogin"], {
      clientId: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      buttonText: "Sign in with Google+",
      onSuccess: this.responseGoogle,
      onFailure: this.responseGoogle,
      cookiePolicy: 'single_host_origin',
      className: "btn google-btn social-btn col-lg-6 col-sm-12",
      isSignedIn: false
    }), __jsx("button", {
      type: "button",
      className: "jsx-3259398597" + " " + "btn facebook-btn social-btn col-lg-6 col-sm-12 fontsizeE-9"
    }, __jsx("span", {
      className: "jsx-3259398597"
    }, __jsx("i", {
      className: "jsx-3259398597" + " " + "fab fa-facebook-f"
    }), " Sign in with Facebook"), " "))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3259398597"
    }, ".visual-signup.jsx-3259398597{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 1s cubic-bezier(0,0,0.3,1);transition:transform 1s cubic-bezier(0,0,0.3,1);}.popup-close.jsx-3259398597{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:darkred;cursor:pointer;font-size:1.0rem;width:2.0rem;height:2.0rem;top:0.5rem;right:0.5rem;position:absolute;border-radius:100%;}#background-signin.jsx-3259398597{width:100%;background:rgba(0,0,0,0.8);font-family:\"Robato\",sans-serif;font-size:1.1em;display:none;z-index:100;position:fixed;left:0;top:0;width:100%;height:100%;}#logreg-forms.jsx-3259398597{box-shadow:0 7px 7px rgba(0,0,0,0.12),0 12px 40px rgba(0,0,0,0.24);margin:10vh auto;background-color:lightgray;overflow:auto;}#logreg-forms.jsx-3259398597 form.jsx-3259398597{width:100%;padding:15px;margin:auto;}#logreg-forms.jsx-3259398597 .form-control.jsx-3259398597{position:relative;box-sizing:border-box;height:auto;padding:10px;font-size:1.1em;}#logreg-forms.jsx-3259398597 .form-control.jsx-3259398597:focus{z-index:2;}#logreg-forms.jsx-3259398597 .form-signin.jsx-3259398597 input[type=\"email\"].jsx-3259398597{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0;}#logreg-forms.jsx-3259398597 .form-signin.jsx-3259398597 input[type=\"password\"].jsx-3259398597{border-top-left-radius:0;border-top-right-radius:0;}#logreg-forms.jsx-3259398597 .social-login.jsx-3259398597{margin:0 auto;margin-bottom:14px;}#logreg-forms.jsx-3259398597 .social-btn.jsx-3259398597{font-weight:100;color:white;font-size:0.9rem;}#logreg-forms.jsx-3259398597 a.jsx-3259398597{display:block;padding-top:10px;color:#fff;}#logreg-form.jsx-3259398597 .lines.jsx-3259398597{width:200px;border:1px solid red;}#logreg-forms.jsx-3259398597 button[type=\"submit\"].jsx-3259398597{margin-top:10px;}#logreg-forms.jsx-3259398597 .facebook-btn.jsx-3259398597{background-color:#3C589C;}#logreg-forms.jsx-3259398597 .google-btn.jsx-3259398597{background-color:#DF4B3B;}#logreg-forms.jsx-3259398597 .form-reset.jsx-3259398597,#logreg-forms.jsx-3259398597 .form-signup.jsx-3259398597{display:none;}#logreg-forms.jsx-3259398597 .form-signup.jsx-3259398597 .social-btn.jsx-3259398597{width:210px;}#logreg-forms.jsx-3259398597 .form-signup.jsx-3259398597 input.jsx-3259398597{margin-bottom:2px;}.form-signup.jsx-3259398597 .social-login.jsx-3259398597{margin:0 auto;}.submit.jsx-3259398597{background:-webkit-linear-gradient(0deg,#2dfbff 0%,#3c96ff 100%);border-radius:25px;color:#fff;}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms{width:300px;}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms .social-login.jsx-3259398597{width:200px;margin:0 auto;margin-bottom:10px;}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms .social-btn.jsx-3259398597{font-size:1.3rem;font-weight:100;color:white;height:56px;}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms .social-btn.jsx-3259398597:nth-child(1){margin-bottom:5px;}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms .social-btn.jsx-3259398597 span.jsx-3259398597{display:none;}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms .facebook-btn.jsx-3259398597:after{content:'Facebook';}@media screen and (max-width.jsx-3259398597:500px) #logreg-forms .google-btn.jsx-3259398597:after{content:'Google+';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErTEMsQUFLd0QsQUFJMUMsQUFlRSxBQWdCNEQsQUFRMUQsQUFNTyxBQU11QixBQUV0QixBQUtNLEFBTVosQUFJRyxBQU1GLEFBTUgsQUFLb0MsQUFFRSxBQUVGLEFBRWdCLEFBRWpCLEFBRUUsQUFHbEMsQUFJb0QsQUFTbkQsQUFJQSxBQUtNLEFBT0MsQUFHTCxBQUdLLEFBSUQsVUF0RnFCLENBbkNqQixBQXlCWixDQXhDTCxBQWdGWSxBQVkyQixBQW1CL0MsQUFJaUIsQ0F6QitDLEFBd0NoRSxDQWxFbUIsQUFVSCxBQXdCcEIsRUE5QmUsQUFnQnFDLENBb0M1QixDQTNFRSxBQWlEMkIsQUFpQ2pELEFBVUEsQ0FwRjZCLEFBZ0Y3QixLQTVGWSxDQWlCYyxBQTRCd0IsQUFFRixDQTRCekIsRUEvQ04sR0FNUCxFQVZkLEFBZ0JBLEFBd0NtQixHQS9FbkIsRUExQmtDLEVBOEJsQixFQThCaEIsR0FOQSxBQStDSSxBQUtnQixHQXBFWSxHQUtoQyxDQVppQixLQTZFYixRQTVFZ0IsQUFzREMsRUF2RUQsR0FkRixNQXNDbEIsS0FOQSxHQWpCK0IsQUF1RWxCLEVBdEdLLEFBaUJKLFNBc0ZkLElBckZhLFlBQ0ksQUFhQyxjQUVsQixDQWRTLE9BQ0QsTUFDSyxXQUNDLFlBR2QsTUE5QkYsV0FLd0IsbUdBQ0osbUJBQ0osZUFDRSxpQkFDSixhQUNDLGNBQ0gsV0FDRSxhQUNLLGtCQUNDLG1CQUNwQiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxjb21wb25lbnRzXFxzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICAgICAgYWRkcmVzcyA6ICcnLFxyXG4gICAgICAgICAgICBjb250YWN0IDogJycsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOicnLFxyXG4gICAgICAgICAgICBnb29nbGVJZDonJyxcclxuICAgICAgICAgICAgZ2l2ZW5OYW1lOicnLFxyXG4gICAgICAgICAgICBmYW1pbHlOYW1lOicnLFxyXG4gICAgICAgICAgICB0b2tlbjonJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gIGNvbXBvbmVudERpZE1vdW50PSAoKT0+IHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgXHJcbiAgICAgICAgJCgnLnBvcHVwLWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICQoJyNsb2dyZWctZm9ybXMnKS5zbGlkZVVwKDEwMDAsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnI2JhY2tncm91bmQtc2lnbmluJykuaGlkZSgpOyBcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgXHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAvLyBUaGlzIHRyaWdnZXJzIGV2ZXJ5dGltZSB0aGUgaW5wdXQgaXMgY2hhbmdlZFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gIHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgaWYodGhpcy5zdGF0ZS5jb250YWN0Lmxlbmd0aD4wKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4ucmVzcG9uc2UucHJvZmlsZU9iaixcclxuICAgICAgICAgICAgdG9rZW46cmVzcG9uc2UudG9rZW5JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAgIGFsZXJ0KCdUaGVyZSBzaG91bGQgYmUgY29udGFjdCBkZXRhaWxzLicpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VHb29nbGVTaWduSW4gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIHRoaXMuaGlkZXNpZ251cCgpOyAgXHJcbiAgICB2YXIgcmVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4ucmVzcG9uc2UucHJvZmlsZU9iaixcclxuICAgICAgICAgICAgdG9rZW46cmVzcG9uc2UudG9rZW5JZFxyXG4gICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhcyA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICBkYXRhcy5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICBkYXRhcy5hcHBlbmQoJ3Rva2VuJywgcmVzcG9uc2UudG9rZW5JZCk7XHJcbiAgICAgICAgIGZldGNoKCcvYXBpL3NpZ25pbnVzZXInLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBib2R5OmRhdGFzLFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEgIT0gdW5kZWZpbmVkKXthbGVydChkYXRhLm1zZyk7IENvb2tpZS5zZXQoJ3VzZXInLGRhdGEpfX0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5oaWRlc2lnbnVwKCk7IFxyXG4gIC8vICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgIC8vIGRhdGFzLmFwcGVuZCgnZmlsZScsIHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlKTtcclxuICAgIGRhdGFzLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XHJcbiAgIGZldGNoKCcvYXBpL2NyZWF0ZXVzZXInLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIC8vJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgLy8gJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgLy8nQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICB9LCBcclxuICAgIGJvZHk6ZGF0YXMsXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICApXHJcbiAgICB0aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSl7YWxlcnQoZGF0YS5tc2cpOyBDb29raWUuc2V0KCd1c2VyJyxkYXRhKTsgIH19KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIFxyXG5cclxufTtcclxuXHJcblxyXG4gIHNob3dzaWdudXA9KCk9PntcclxuICAgICQoJyNiYWNrZ3JvdW5kLXNpZ25pbicpLnNob3coKTtcclxuICAgICQoJyNsb2dyZWctZm9ybXMnKS5oaWRlKCk7XHJcbiAgICAkKCcjbG9ncmVnLWZvcm1zJykuc2xpZGVEb3duKDEwMDApO1xyXG5cclxuICB9XHJcblxyXG4gIGhpZGVzaWdudXA9KCk9PntcclxuICAgICQoJyNsb2dyZWctZm9ybXMnKS5zbGlkZVVwKDEwMDAsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjYmFja2dyb3VuZC1zaWduaW4nKS5oaWRlKCk7IFxyXG4gICAgIH0pO1xyXG4gICAgICAgIFxyXG4gIH1cclxuICBcclxucmVuZGVyKCl7XHJcblxyXG4gIHJldHVybihcclxuPExheW91dD5cclxuXHJcbjxkaXYgaWQ9XCJiYWNrZ3JvdW5kLXNpZ25pblwiPlxyXG5cclxuXHJcbiAgICA8ZGl2IGlkPVwibG9ncmVnLWZvcm1zXCIgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTggY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlXCI+eDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDMgbWItMyBmb250MSB0b3BpY0NvbG9yIGZvbnRzaXplRTFcIiA+IFNpZ24gaW48L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpbiByb3cgY29sLTEyIGZvbnRzaXplRS05XCI+XHJcbiAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJTaWduIGluIHdpdGggR29vZ2xlK1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXt0aGlzLnJlc3BvbnNlR29vZ2xlU2lnbklufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5yZXNwb25zZUdvb2dsZVNpZ25Jbn1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBnb29nbGUtYnRuIHNvY2lhbC1idG4gY29sLWxnLTYgY29sLXNtLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmYWNlYm9vay1idG4gc29jaWFsLWJ0biBjb2wtbGctNiBjb2wtc20tMTIgZm9udHNpemVFLTlcIiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+IFNpZ24gaW4gd2l0aCBGYWNlYm9vazwvc3Bhbj4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDMgbWItMyBmb250MSB0b3BpY0NvbG9yIGZvbnRzaXplRTFcIiA+IFNpZ24gdXA8L2gzPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MSBmb250c2l6ZUUxXCI+YWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvbnRzaXplRTFcIiBuYW1lPVwiYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzc1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQxIGZvbnRzaXplRTFcIj5Db250YWN0ICo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb250c2l6ZUUxXCIgaWQ9XCJleGFtcGxlSW5wdXRBZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb250YWN0ICpcIiBuYW1lPVwiY29udGFjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3R9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiICBjbGFzc05hbWU9XCJmb250MSBmb250c2l6ZUUtOVwiPlNpZ24gdXAgYXMgU2VsbGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkIGZvbnRzaXplRS03XCI+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBkZXRhaWxzIHdpdGggYW55b25lIGVsc2UuPC9zbWFsbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW4gcm93IGNvbC0xMiBmb250c2l6ZUUtOVwiPlxyXG4gICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjUxMTg4MDY3NDkwMS1nZm42djJuMWVqNjVycmxubnYyOW9kZ2Jqa3BraHBjai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlNpZ24gaW4gd2l0aCBHb29nbGUrXCJcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3RoaXMucmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXt0aGlzLnJlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdvb2dsZS1idG4gc29jaWFsLWJ0biBjb2wtbGctNiBjb2wtc20tMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZhY2Vib29rLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy02IGNvbC1zbS0xMiBmb250c2l6ZUUtOVwiIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gU2lnbiBpbiB3aXRoIEZhY2Vib29rPC9zcGFuPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPHN0eWxlIGpzeD5cclxue2BcclxuXHJcblxyXG4udmlzdWFsLXNpZ251cCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XHJcblxyXG59XHJcbi5wb3B1cC1jbG9zZSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiBkYXJrcmVkO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDEuMHJlbTtcclxuXHR3aWR0aDogMi4wcmVtO1xyXG5cdGhlaWdodDogMi4wcmVtO1xyXG5cdHRvcDogMC41cmVtO1xyXG5cdHJpZ2h0OiAwLjVyZW07XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuI2JhY2tncm91bmQtc2lnbmlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JhdG9cIixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1ze1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTJweCA0MHB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgIG1hcmdpbjoxMHZoIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tY29udHJvbDpmb2N1cyB7IHotaW5kZXg6IDI7IH1cclxuICAjbG9ncmVnLWZvcm1zIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLnNvY2lhbC1sb2dpbntcclxuXHJcbiAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG4gICNsb2dyZWctZm9ybXMgLnNvY2lhbC1idG57XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyBhe1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtIC5saW5lc3tcclxuICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG4gIH1cclxuICBcclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdeyBtYXJnaW4tdG9wOjEwcHg7IH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIC5mYWNlYm9vay1idG57ICBiYWNrZ3JvdW5kLWNvbG9yOiMzQzU4OUM7IH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIC5nb29nbGUtYnRueyBiYWNrZ3JvdW5kLWNvbG9yOiAjREY0QjNCO31cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIC5mb3JtLXJlc2V0LCAjbG9ncmVnLWZvcm1zIC5mb3JtLXNpZ251cHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbnVwIC5zb2NpYWwtYnRueyB3aWR0aDoyMTBweDsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbnVwIGlucHV0IHsgbWFyZ2luLWJvdHRvbTogMnB4O31cclxuICBcclxuICAuZm9ybS1zaWdudXAgLnNvY2lhbC1sb2dpbntcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCAgIzJkZmJmZiAwJSwgIzNjOTZmZiAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLyogTW9iaWxlICovXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAgICNsb2dyZWctZm9ybXN7XHJcbiAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAjbG9ncmVnLWZvcm1zICAuc29jaWFsLWxvZ2lue1xyXG4gICAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAjbG9ncmVnLWZvcm1zICAuc29jaWFsLWJ0bntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gIFxyXG4gICAgICB9XHJcbiAgICAgICNsb2dyZWctZm9ybXMgLnNvY2lhbC1idG46bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICNsb2dyZWctZm9ybXMgLnNvY2lhbC1idG4gc3BhbntcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAgLmZhY2Vib29rLWJ0bjphZnRlcntcclxuICAgICAgICAgIGNvbnRlbnQ6J0ZhY2Vib29rJztcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAjbG9ncmVnLWZvcm1zICAuZ29vZ2xlLWJ0bjphZnRlcntcclxuICAgICAgICAgIGNvbnRlbnQ6J0dvb2dsZSsnO1xyXG4gICAgICB9XHJcblxyXG4gIH1cclxuYH1cclxuPC9zdHlsZT5cclxuXHJcbjwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\signup.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./constant/main.js":
/*!**************************!*\
  !*** ./constant/main.js ***!
  \**************************/
/*! exports provided: wesitename, Url, ImageUrl, NavLink, homeUrl, myoderUrl, createcategorUrl, categoryUrl, myProfileUrl, filteritemUrl, itemUrl, createitemUrl, updateitemUrl, myshopmUrl, shopmUrl, updateshopUrl, createshopUrl, cartitemMSG, cartUserdetails, cartUserNotlogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wesitename", function() { return wesitename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUrl", function() { return ImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeUrl", function() { return homeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myoderUrl", function() { return myoderUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createcategorUrl", function() { return createcategorUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryUrl", function() { return categoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myProfileUrl", function() { return myProfileUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteritemUrl", function() { return filteritemUrl; });
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
const wesitename = 'MyBiz';
const Url = 'http://localhost:8000/api/';
const ImageUrl = 'http://localhost:8000/Images/';
const NavLink = [{
  url: '/',
  urlname: 'home'
}, {
  url: '/shop/All-island',
  urlname: 'all-shop'
}, {
  url: '/create-shop',
  urlname: 'create-shop'
}, {
  url: '/create-catagery',
  urlname: 'create-catagery'
}, {
  url: '/myorder',
  urlname: 'my-order'
}];
const homeUrl = '/';
const myoderUrl = '/myorder';
const createcategorUrl = '/create-catagery';
const categoryUrl = '/catagery/';
const myProfileUrl = '/myprofile';
const filteritemUrl = '/filter';
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

/***/ "./layouts/Header.js":
/*!***************************!*\
  !*** ./layouts/Header.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HideAppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function HideOnScroll(props) {
  const {
    children,
    window
  } = props; // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.

  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7___default()({
    target: window ? window() : undefined
  });
  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_13___default.a, {
    appear: false,
    direction: "down",
    in: trigger
  }, children);
}

HideOnScroll.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired,

  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
function HideAppBar(props) {
  const classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, null), __jsx(HideOnScroll, props, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default.a, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h6",
    className: classes.title
  }, "News"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    color: "inherit"
  }, "Login")))), __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, null), __jsx("div", null, props.children));
}

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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./layouts/Header.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      function isMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();

        if (windowwidth < 600) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.ismobile_disable').css({
            'display': 'none'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.isdesktop_disable').css({
            'display': 'block'
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.ismobile_disable').css({
            'display': 'block'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.isdesktop_disable').css({
            'display': 'none'
          });
        }
      }

      isMobile();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(isMobile);
    });

    if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('user')) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.isuserlogin').show();
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.isuserlogin').hide();
    }
  }

  render() {
    return __jsx("div", {
      className: "jsx-3311452111"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-3311452111"
    }, "Agency - Start Bootstrap Theme"), __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      className: "jsx-3311452111"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossOrigin: "anonymous",
      className: "jsx-3311452111"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-3311452111"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap",
      rel: "stylesheet",
      className: "jsx-3311452111"
    })), __jsx("div", {
      className: "jsx-3311452111" + " " + "fontsizeE-9"
    }, this.props.children), __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossOrigin: "anonymous",
      className: "jsx-3311452111"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossOrigin: "anonymous",
      className: "jsx-3311452111"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossOrigin: "anonymous",
      className: "jsx-3311452111"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3311452111"
    }, ".projects div{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects div:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects div:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects div:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects div:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects div:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects div:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects div:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects div:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects div:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects div:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects div:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects div:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects div:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects div:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects div:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.btn{font-size :0.9rem;}.font1{font-family:'Titillium Web',sans-serif;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.font7{font-family:'Trade Winds',cursive;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.25em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontsizeE2-25{font-size :2.25em;}.fontweight700{font-weight :700;}.pointer{cursor:pointer;}.progress{cursor:progress;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERJLEFBSTRCLEFBS0YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdELEFBSU4sQUFHQSxBQUtJLEFBS3NCLEFBR1AsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUdJLEFBSXJCLEFBR0osQUFHRSxBQUdJLEFBR0EsQUFHQSxBQUdDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUdHLEFBR0QsQUFHRixBQUdHLEFBSXBCLEFBRXlCLEFBQ0MsVUF0RnpCLEFBR0EsQ0FtQ0EsRUFHQSxFQU5BLEFBU0EsQUFHQSxBQUdBLEFBa0JBLEFBU0EsQUFReUIsQ0FDQyxDQWpDMUIsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQVNBLEFBU0EsQ0EzRUEsQUErREEsQUFTQSxZQXBEQSxDQVRBLEFBR0EsQ0FOQSxFQWVBLENBTkEsSUFaQSxTQWpCSCxFQTFDQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLElBNUM2QiwwREFDSCxvREFDMUIiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcbGF5b3V0c1xcTWFpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3d3aWR0aDw2MDApe1xyXG4gICAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgICAkKCcuaXNkZXNrdG9wX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICQoJy5pc2Rlc2t0b3BfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBpc01vYmlsZSgpO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShpc01vYmlsZSk7XHJcbiAgICB9KVxyXG4gICAgaWYoQ29va2llLmdldCgndXNlcicpKXtcclxuICAgICAgICAkKCcuaXN1c2VybG9naW4nKS5zaG93KCk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICAkKCcuaXN1c2VybG9naW4nKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgIFxyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXYgPlxyXG48SGVhZD5cclxuPHRpdGxlPkFnZW5jeSAtIFN0YXJ0IEJvb3RzdHJhcCBUaGVtZTwvdGl0bGU+XHJcblxyXG4gIFxyXG5cclxuIDxtZXRhIG5hbWU9XCJnb29nbGUtc2lnbmluLWNsaWVudF9pZFwiIGNvbnRlbnQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BY21lfEFudG9ufENhYmlufEluZGllK0Zsb3dlcnxUcmFkZStXaW5kc3xVYnVudHUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTp3Z2h0QDcwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udHNpemVFLTlcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy40LjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSjZxYTQ4NDlibEUyK3BvVDRXbnlLaHY1dlpGNVNyUG8waUVqd0J2S1U3aW1HRkFWMHd3ajF5WWZvUlNKb1orblwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC13ZlNERjJFNTBZMkQxdVVkajBPM3VNQkpuanVVRDRJaDdZd2FZZDFpcWZrdGowVW9kOEdDRXhsM09nOGlmd0I2XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuXHJcbiA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAge2BcclxuICAgXHJcbiAgIC5wcm9qZWN0cyBkaXYge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW47XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4wcztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDYpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMS44cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDgpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi4wcztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDkpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi4ycztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEwKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDMuMHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzLjJzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMy40O1xyXG59XHJcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG59XHJcbiAgXHJcbiAgIC5idG57XHJcbiAgICBmb250LXNpemUgOiAwLjlyZW07XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAuZm9udDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDJ7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQze1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ1e1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICB9XHJcbiAgIC5mb250NntcclxuICAgIGZvbnQtZmFtaWx5OiAnQWNtZScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ3e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmFkZSBXaW5kcycsIGN1cnNpdmU7XHJcbiAgIH1cclxuXHJcbiAgIC50b3BpY0NvbG9yIHtcclxuICAgIGNvbG9yOmRhcmtibHVlO1xyXG4gICB9XHJcbiAgIC5zdWJ0b3BpY0NvbG9ye1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgfVxyXG4gICAuZm9udGNvbG9yT3Jhbmdle1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JTa3libHVle1xyXG4gICAgIGNvbG9yIDogIzAwOEFDQztcclxuICAgfVxyXG4gICAuZm9udGNvbG9ycGlua3tcclxuICAgICBjb2xvciA6ICNDQzAwNDc7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvcnJlZHtcclxuICAgICBjb2xvciA6ICNDQzAwMDA7XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS01IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNiB7XHJcbiAgICBmb250LXNpemUgOiAwLjZlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTcge1xyXG4gICAgZm9udC1zaXplIDogMC43ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS04IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuOGVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtOSB7XHJcbiAgICBmb250LXNpemUgOiAwLjllbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMSB7XHJcbiAgICBmb250LXNpemUgOiAxZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTEtMjUge1xyXG4gICAgZm9udC1zaXplIDogMS4yNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTUge1xyXG4gICAgZm9udC1zaXplIDogMS41ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTIge1xyXG4gICAgZm9udC1zaXplIDogMmVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUyLTI1IHtcclxuICAgIGZvbnQtc2l6ZSA6IDIuMjVlbTtcclxuICAgfVxyXG4gICAuZm9udHdlaWdodDcwMCB7XHJcbiAgICBmb250LXdlaWdodCA6IDcwMFxyXG4gICB9XHJcblxyXG4gICAucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAucHJvZ3Jlc3Mge2N1cnNvcjogcHJvZ3Jlc3M7fVxyXG5cclxuICAgLmlzdXNlcmxvZ2lue31cclxuXHJcbiAgIGB9XHJcbiA8L3N0eWxlPlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbilcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./layouts/Navbar.js":
/*!***************************!*\
  !*** ./layouts/Navbar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/signup */ "./components/signup.js");
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();
    this.state = {
      isuserlogin: false,
      user: {}
    };
  } //show signup


  showsignup() {
    this.refs.signup.showsignup();
  }

  componentDidMount() {
    this.setState({
      user: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('user'),
      isuserlogin: js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('user') ? true : false
    });
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.togglemenuC').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.navbar-collapse').removeClass('show');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.menuClose').fadeOut(10);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.menuOpen').fadeIn(100);
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.togglemenuO').click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.menuOpen').fadeOut(10);
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('.menuClose').fadeIn(100);
      }); // Transition effect for navbar 

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height() / 3) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.navbar').addClass('SolidNav').removeClass('navbar-bar');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.navbar').removeClass('SolidNav').addClass('navbar-bar');
        }
      });

      function checkMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();

        if (windowwidth < 600) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
            'background-color': 'black',
            'opacity': '0.9',
            'padding-left': '20px'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height() / 4) {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
                'background-color': 'darkblue',
                'opacity': '0.9',
                'padding-left': '20px'
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
                'background-color': 'black',
                'opacity': '0.9',
                'padding-left': '20px'
              });
            }
          });
        }
      }

      checkMobile();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(checkMobile);
    });
  }

  show() {
    if (jquery__WEBPACK_IMPORTED_MODULE_4___default()('#collapsibleNavbar').is(":visible")) {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#collapsibleNavbar').slideUp(500);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('#collapsibleNavbar').slideDown(500);
    }
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-2155243917" + " " + "mainnav"
    }, __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: "signup",
      showsignup: this.props.showsignup
    }), __jsx("nav", {
      className: "jsx-2155243917" + " " + "navbar-bar navbar fixed navbar-expand-md"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2155243917" + " " + "navbar-brand font7"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["wesitename"]), __jsx("button", {
      onClick: this.show,
      type: "button",
      "data-toggle": "collapse",
      className: "jsx-2155243917" + " " + "navbar-toggler"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/20/ffffff/menu.png",
      className: "jsx-2155243917"
    })), __jsx("div", {
      id: "collapsibleNavbar",
      className: "jsx-2155243917" + " " + "collapse navbar-collapse"
    }, __jsx("div", {
      className: "jsx-2155243917" + " " + "navbar-nav"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["NavLink"].map((x, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      href: x.url
    }, __jsx("a", {
      className: "jsx-2155243917" + " " + "nav-link nav-link-main active font1"
    }, x.urlname))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "101",
      href: `/myprofile?id=${this.state.isuserlogin ? this.state.user._id : ''}`
    }, __jsx("a", {
      className: "jsx-2155243917" + " " + "nav-link nav-link-main active font1 isuserlogin"
    }, "my-profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "100",
      href: "?sign=true"
    }, __jsx("a", {
      onClick: this.showsignup.bind(this),
      className: "jsx-2155243917" + " " + "nav-link nav-link-main active font1"
    }, "sign-in")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2155243917"
    }, ".mainnav.jsx-2155243917{z-index :100;}.navbar-nava.jsx-2155243917{padding-left :100px;}.navbar-nava.jsx-2155243917 a.jsx-2155243917{color :white;}.navbar-nava.jsx-2155243917 a.jsx-2155243917:hover{color :gray;}.nav-link.jsx-2155243917{color:white;}.navbar-bar.jsx-2155243917{z-index :100;height:80px;background-image:linear-gradient( black,transparent);border:none;color:white;-webkit-transition:background-color,height 2s ease 0s;transition:background-color,height 2s ease 0s;}.SolidNav.jsx-2155243917{z-index :100;height:50px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color,height 2s ease 0s;transition:background-color,height 2s ease 0s;}.togglemenuC.jsx-2155243917{display:none;}.fixed.jsx-2155243917{position:-webkit-sticky;width :100%;position:fixed;top:0;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSGlCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBSUQsQUFHRSxBQVFBLEFBU25CLEFBRTBCLFlBeEJ4QixBQUdBLENBZkEsQUFRQSxBQVVnQixBQVFBLEFBUWpCLE9BL0JDLElBa0NXLENBbEI4QyxBQVEzQixXQVdmLGVBVkMsQUFXVixNQUNJLE1BWE0sS0FZbEIsT0FYb0QsR0FWbEMsWUFDQSxZQUNrQyx5RUFTbkQsMkJBUkEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcbGF5b3V0c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi8uLi9jb21wb25lbnRzL3NpZ251cCc7XHJcbmltcG9ydCB7TmF2TGluayx3ZXNpdGVuYW1lfSBmcm9tICcuLy4uL2NvbnN0YW50L21haW4nO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGlzdXNlcmxvZ2luOmZhbHNlLFxyXG4gICAgICAgIHVzZXI6e31cclxuXHJcbiAgfVxyXG5cdH1cclxuICAgICAgICAvL3Nob3cgc2lnbnVwXHJcbiAgICAgICAgc2hvd3NpZ251cCgpe1xyXG4gICAgICAgICAgICB0aGlzLnJlZnMuc2lnbnVwLnNob3dzaWdudXAoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VyIDogQ29va2llLmdldEpTT04oJ3VzZXInKSxcclxuICAgICAgICAgICAgaXN1c2VybG9naW4gOiBDb29raWUuZ2V0SlNPTigndXNlcicpP3RydWU6ZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVDJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCdkaXYubmF2YmFyLWNvbGxhcHNlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcudG9nZ2xlbWVudU8nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiBlZmZlY3QgZm9yIG5hdmJhciBcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAvLyBjaGVja3MgaWYgd2luZG93IGlzIHNjcm9sbGVkIG1vcmUgdGhhbiA1MDBweCwgYWRkcy9yZW1vdmVzIHNvbGlkIGNsYXNzXHJcbiAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+ICQod2luZG93KS5oZWlnaHQoKS8zKSB7IFxyXG4gICAgICAgICAgICAgICAgICAkKCcubmF2YmFyJykuYWRkQ2xhc3MoJ1NvbGlkTmF2JykucmVtb3ZlQ2xhc3MoJ25hdmJhci1iYXInKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5yZW1vdmVDbGFzcygnU29saWROYXYnKS5hZGRDbGFzcygnbmF2YmFyLWJhcicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93d2lkdGg8NjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjknLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh3aW5kb3cpLmhlaWdodCgpLzQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidkYXJrYmx1ZScsJ29wYWNpdHknOicwLjknLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2JsYWNrJywnb3BhY2l0eSc6JzAuOScsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpe1xyXG4gICAgICAgIGlmKCQoJyNjb2xsYXBzaWJsZU5hdmJhcicpLmlzKFwiOnZpc2libGVcIikpe1xyXG4gICAgICAgICAgICAkKCcjY29sbGFwc2libGVOYXZiYXInKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICQoJyNjb2xsYXBzaWJsZU5hdmJhcicpLnNsaWRlRG93big1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbm5hdlwiID5cclxuICAgICAgICAgICAgPFNpZ25VcCByZWY9XCJzaWdudXBcIiBzaG93c2lnbnVwPXt0aGlzLnByb3BzLnNob3dzaWdudXB9IC8+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWJhciBuYXZiYXIgZml4ZWQgbmF2YmFyLWV4cGFuZC1tZFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgZm9udDdcIiBocmVmPVwiI1wiPnt3ZXNpdGVuYW1lfTwvYT5cclxuICBcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3d9ICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9tZW51LnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJjb2xsYXBzaWJsZU5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7TmF2TGluay5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17eC51cmx9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPnt4LnVybG5hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGtleT0nMTAwJyBocmVmPScjJz48YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MVwiIG9uQ2xpY2s9e3RoaXMuc2hvd3NpZ251cC5iaW5kKHRoaXMpfSA+c2lnbmluPC9hPjwvTGluaz4qL31cclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT0nMTAxJyBocmVmPXtgL215cHJvZmlsZT9pZD0ke3RoaXMuc3RhdGUuaXN1c2VybG9naW4/dGhpcy5zdGF0ZS51c2VyLl9pZDonJ31gfT48YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MSBpc3VzZXJsb2dpblwiICA+bXktcHJvZmlsZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9JzEwMCcgIGhyZWY9Jz9zaWduPXRydWUnPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgb25DbGljaz17dGhpcy5zaG93c2lnbnVwLmJpbmQodGhpcyl9ID5zaWduLWluPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAubWFpbm5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleCA6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdmF7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0IDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdmEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2YSBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2LWxpbmt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleCA6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCBibGFjayx0cmFuc3BhcmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLGhlaWdodCAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuU29saWROYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXggOiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixoZWlnaHQgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAudG9nZ2xlbWVudUN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuZml4ZWQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgd2lkdGggOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjUwO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\Navbar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./layouts/filterItem.js":
/*!*******************************!*\
  !*** ./layouts/filterItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handlesubmit", () => {
      var url = `${_constant_main__WEBPACK_IMPORTED_MODULE_5__["filteritemUrl"]}?${this.state.search ? 'search=' + this.state.search : 'search='}` + `${this.state.categery ? '&category=' + this.state.categery : ''}${this.state.subcategery ? '&subcategory=' + this.state.subcategery : ''}` + `${this.state.district ? '&district=' + this.state.district : ''}${this.state.town ? '&town=' + this.state.town : ''}` + `${this.state.lowerprice ? '&lowerprice=' + this.state.lowerprice : ''}${this.state.upperprice ? '&upperprice=' + this.state.upperprice : ''}`;
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(url);
    });

    _defineProperty(this, "handleChange", evt => {
      this.setState({
        [evt.target.name]: evt.target.value
      });
    });

    _defineProperty(this, "gettows", district => {
      var id = this.state.location.findIndex(e => e.district == district);
      var index = id > 0 ? id : 0;
      return district.length > 2 ? this.state.location[index].town : [];
    });

    _defineProperty(this, "getsubcategory", categery => {
      var id = this.state.types.findIndex(e => e.type == categery);
      var index = id > 0 ? id : 0;
      return categery.length > 1 ? this.state.types[index].subtype : [];
    });

    _defineProperty(this, "gettypeandlocation", () => {
      fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_5__["Url"]}types`).then(res => {
        return res.json();
      }).then(data => {
        this.setState({
          types: data
        });
      });
      fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_5__["Url"]}locations`).then(res => {
        return res.json();
      }).then(data => {
        this.setState({
          location: data
        });
      });
    });

    this.state = {
      types: [],
      location: [],
      search: '',
      categery: '',
      subcategery: '',
      district: '',
      town: '',
      upperprice: '',
      lowerprice: ''
    };
  }

  componentDidMount() {
    this.gettypeandlocation();
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      function checkMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();

        if (windowwidth < 990) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scroll(function () {});
        }
      }

      checkMobile();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(checkMobile);
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-3451855229" + " " + " filter-section"
    }, __jsx("div", {
      className: "jsx-3451855229" + " " + "row col-lg-11 col-sm-12 mx-auto"
    }, __jsx("div", {
      className: "jsx-3451855229" + " " + "field-wrap  col-lg-3 col-md-3 col-sm-5 col-xs-12"
    }, __jsx("label", {
      className: "jsx-3451855229" + " " + "font1 labelf1"
    }, "Category"), __jsx("select", {
      type: "text",
      required: true,
      name: "categery",
      value: this.state.categery,
      onChange: this.handleChange,
      className: "jsx-3451855229" + " " + 'font1 inputf1'
    }, __jsx("option", {
      key: "1",
      value: "d",
      className: "jsx-3451855229"
    }, "all categories"), this.state.types.map((x, i) => __jsx("option", {
      key: i,
      value: x.type,
      className: "jsx-3451855229"
    }, x.name))), __jsx("select", {
      type: "text",
      required: true,
      name: "subcategery",
      value: this.state.subcategery,
      onChange: this.handleChange,
      className: "jsx-3451855229" + " " + 'font1 inputf1'
    }, __jsx("option", {
      key: "1",
      value: "d",
      className: "jsx-3451855229"
    }, "all subcategories"), this.getsubcategory(this.state.categery).map((x, i) => __jsx("option", {
      key: i,
      value: x.type,
      className: "jsx-3451855229"
    }, x.name)))), __jsx("div", {
      className: "jsx-3451855229" + " " + "field-wrap  col-lg-2 col-md-2 col-sm-4 col-xs-7"
    }, __jsx("label", {
      className: "jsx-3451855229" + " " + "font1 labelf1"
    }, "location"), __jsx("select", {
      type: "text",
      required: true,
      name: "district",
      value: this.state.district,
      onChange: this.handleChange,
      className: "jsx-3451855229" + " " + 'font1 inputf1'
    }, __jsx("option", {
      key: "1",
      value: "d",
      className: "jsx-3451855229"
    }, "all district"), this.state.location.map((x, i) => __jsx("option", {
      key: i,
      value: x.district,
      className: "jsx-3451855229"
    }, x.district))), __jsx("select", {
      type: "text",
      required: true,
      name: "town",
      value: this.state.town,
      onChange: this.handleChange,
      className: "jsx-3451855229" + " " + 'font1 inputf1'
    }, __jsx("option", {
      key: "1",
      value: "d",
      className: "jsx-3451855229"
    }, "all cities"), this.gettows(this.state.district).map((x, i) => __jsx("option", {
      key: i,
      value: x,
      className: "jsx-3451855229"
    }, x)))), __jsx("div", {
      className: "jsx-3451855229" + " " + "field-wrap  col-lg-2 col-md-2 col-sm-3 col-xs-5"
    }, __jsx("label", {
      className: "jsx-3451855229" + " " + "font1 labelf1"
    }, "Price"), __jsx("input", {
      type: "number",
      required: true,
      name: "upperprice",
      value: this.state.upperprice,
      onChange: this.handleChange,
      placeholder: "upper price",
      className: "jsx-3451855229" + " " + 'font1 inputf1 '
    }), __jsx("input", {
      type: "number",
      required: true,
      name: "lowerprice",
      value: this.state.lowerprice,
      onChange: this.handleChange,
      placeholder: "lower price?",
      className: "jsx-3451855229" + " " + 'font1 inputf1 '
    })), __jsx("div", {
      className: "jsx-3451855229" + " " + "field-wrap  col-lg-5 col-md-5 col-sm-12"
    }, __jsx("label", {
      className: "jsx-3451855229" + " " + "font1 labelf1"
    }, "Search"), __jsx("input", {
      type: "text",
      required: true,
      name: "search",
      value: this.state.search,
      onChange: this.handleChange,
      placeholder: "what do you find?",
      className: "jsx-3451855229" + " " + 'font1 inputf1 '
    }), __jsx("button", {
      onClick: this.handlesubmit.bind(this),
      className: "jsx-3451855229" + " " + "btn btn-sm btn-submit"
    }, "search"))), __jsx("br", {
      className: "jsx-3451855229"
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3451855229"
    }, ".filter-section.jsx-3451855229{background:#c2d1e17d;}.labelf1.jsx-3451855229{position:relative;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);left:5px;color:#01567e;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;-webkit-backface-visibility:hidden;pointer-events:none;font-size:0.9em;}.inputf1.jsx-3451855229{font-size:0.9em;display:block;width:100%;padding:5px 5px;background:white;background-image:none;border:none;border:1px solid #01567e;color:darkblue;border-radius:0;-webkit-transition:border-color 0.5s ease;transition:border-color 0.5s ease;}.inputf1.jsx-3451855229:focus,textarea.jsx-3451855229:focus{outline:0;border-color:#023957;}.btn-submit.jsx-3451855229{border-radius:0;background:#01567e;color:white;width:100%;font-size:0.9em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXGZpbHRlckl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOElhLEFBR3FDLEFBR0YsQUFVRixBQWFOLEFBSU0sVUFISyxNQWJQLEFBaUJLLEVBM0JRLEdBSC9CLFNBY2UsQ0FhZixJQUllLE1BaEJLLE1BaUJOLFVBaEJPLENBaUJELGdCQWhCTSxBQWlCMUIsc0JBaEJnQixZQUNhLEdBZmhCLFNBQ0ssYUFlQyxDQWRXLGNBZVYsZ0JBQ2tCLDhCQWZDLG1DQUNmLFdBZXhCLFNBZG9CLGdCQUNwQiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxmaWx0ZXJJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7VXJsLGZpbHRlcml0ZW1Vcmx9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHR5cGVzOltdLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjpbXSxcclxuICAgICAgICAgICAgc2VhcmNoOicnLFxyXG4gICAgICAgICAgICBjYXRlZ2VyeTonJyxcclxuICAgICAgICAgICAgc3ViY2F0ZWdlcnk6JycsXHJcbiAgICAgICAgICAgIGRpc3RyaWN0OicnLFxyXG4gICAgICAgICAgICB0b3duOicnLFxyXG4gICAgICAgICAgICB1cHBlcnByaWNlOicnLFxyXG4gICAgICAgICAgICBsb3dlcnByaWNlOicnXHJcblxyXG4gIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZXN1Ym1pdD0oKT0+e1xyXG4gICAgICAgIHZhciB1cmwgPSBgJHtmaWx0ZXJpdGVtVXJsfT8ke3RoaXMuc3RhdGUuc2VhcmNoPydzZWFyY2g9Jyt0aGlzLnN0YXRlLnNlYXJjaDonc2VhcmNoPSd9YCtcclxuICAgICAgICBgJHt0aGlzLnN0YXRlLmNhdGVnZXJ5PycmY2F0ZWdvcnk9Jyt0aGlzLnN0YXRlLmNhdGVnZXJ5OicnfSR7dGhpcy5zdGF0ZS5zdWJjYXRlZ2VyeT8nJnN1YmNhdGVnb3J5PScrdGhpcy5zdGF0ZS5zdWJjYXRlZ2VyeTonJ31gK1xyXG4gICAgICAgIGAke3RoaXMuc3RhdGUuZGlzdHJpY3Q/JyZkaXN0cmljdD0nK3RoaXMuc3RhdGUuZGlzdHJpY3Q6Jyd9JHt0aGlzLnN0YXRlLnRvd24/JyZ0b3duPScrdGhpcy5zdGF0ZS50b3duOicnfWArXHJcbiAgICAgICAgYCR7dGhpcy5zdGF0ZS5sb3dlcnByaWNlPycmbG93ZXJwcmljZT0nK3RoaXMuc3RhdGUubG93ZXJwcmljZTonJ30ke3RoaXMuc3RhdGUudXBwZXJwcmljZT8nJnVwcGVycHJpY2U9Jyt0aGlzLnN0YXRlLnVwcGVycHJpY2U6Jyd9YDtcclxuICAgICAgICBSb3V0ZXIucHVzaCh1cmwpO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgICAgIC8vc2hvdyBzaWdudXBcclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgZ2V0dG93cz0oZGlzdHJpY3QpPT57XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuc3RhdGUubG9jYXRpb24uZmluZEluZGV4KGU9PmUuZGlzdHJpY3Q9PWRpc3RyaWN0KTtcclxuICAgICAgICB2YXIgaW5kZXggPSBpZD4wP2lkOjA7XHJcblxyXG4gICAgICAgcmV0dXJuIGRpc3RyaWN0Lmxlbmd0aD4yP3RoaXMuc3RhdGUubG9jYXRpb25baW5kZXhdLnRvd246W107XHJcbiAgICB9XHJcbiAgICBnZXRzdWJjYXRlZ29yeT0oY2F0ZWdlcnkpPT57XHJcblxyXG4gICAgICAgIHZhciBpZCA9IHRoaXMuc3RhdGUudHlwZXMuZmluZEluZGV4KGU9PmUudHlwZT09Y2F0ZWdlcnkpO1xyXG4gICAgICAgIHZhciBpbmRleCA9IGlkPjA/aWQ6MDtcclxuXHJcbiAgICAgICByZXR1cm4gY2F0ZWdlcnkubGVuZ3RoPjE/dGhpcy5zdGF0ZS50eXBlc1tpbmRleF0uc3VidHlwZTpbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXR0eXBlYW5kbG9jYXRpb249KCk9PntcclxuICAgICAgICBmZXRjaChgJHtVcmx9dHlwZXNgKVxyXG4gICAgICAgIC50aGVuKHJlcz0+e3JldHVybiByZXMuanNvbigpfSlcclxuICAgICAgICAudGhlbihkYXRhPT57dGhpcy5zZXRTdGF0ZSh7dHlwZXM6ZGF0YX0pO30pXHJcbiAgICAgICAgZmV0Y2goYCR7VXJsfWxvY2F0aW9uc2ApXHJcbiAgICAgICAgLnRoZW4ocmVzPT57cmV0dXJuIHJlcy5qc29uKCl9KVxyXG4gICAgICAgIC50aGVuKGRhdGE9Pnt0aGlzLnNldFN0YXRlKHtsb2NhdGlvbjpkYXRhfSk7fSlcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuZ2V0dHlwZWFuZGxvY2F0aW9uKCk7XHJcbiAgICAgICBcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93d2lkdGg8OTkwKXtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCIgZmlsdGVyLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLWxnLTExIGNvbC1zbS0xMiBteC1hdXRvXCIgPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgIGNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS01IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MSBsYWJlbGYxXCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9eydmb250MSBpbnB1dGYxJ30gdHlwZT1cInRleHRcIiByZXF1aXJlZCAgbmFtZT1cImNhdGVnZXJ5XCIgdmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdlcnl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT0nMScgdmFsdWU9XCJkXCI+YWxsIGNhdGVnb3JpZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnR5cGVzLm1hcCgoeCxpKT0+PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt4LnR5cGV9Pnt4Lm5hbWV9PC9vcHRpb24+KX0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXsnZm9udDEgaW5wdXRmMSd9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgIG5hbWU9XCJzdWJjYXRlZ2VyeVwiIHZhbHVlPXt0aGlzLnN0YXRlLnN1YmNhdGVnZXJ5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9JzEnIHZhbHVlPVwiZFwiPmFsbCBzdWJjYXRlZ29yaWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5nZXRzdWJjYXRlZ29yeSh0aGlzLnN0YXRlLmNhdGVnZXJ5KS5tYXAoKHgsaSk9PjxvcHRpb24ga2V5PXtpfSB2YWx1ZT17eC50eXBlfT57eC5uYW1lfTwvb3B0aW9uPil9ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwICBjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tNCBjb2wteHMtN1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MSBsYWJlbGYxXCI+bG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9eydmb250MSBpbnB1dGYxJ30gdHlwZT1cInRleHRcIiByZXF1aXJlZCAgbmFtZT1cImRpc3RyaWN0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZGlzdHJpY3R9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT0nMScgdmFsdWU9XCJkXCI+YWxsIGRpc3RyaWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2NhdGlvbi5tYXAoKHgsaSk9PjxvcHRpb24ga2V5PXtpfSB2YWx1ZT17eC5kaXN0cmljdH0+e3guZGlzdHJpY3R9PC9vcHRpb24+KX0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXsnZm9udDEgaW5wdXRmMSd9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgIG5hbWU9XCJ0b3duXCIgdmFsdWU9e3RoaXMuc3RhdGUudG93bn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PScxJyB2YWx1ZT1cImRcIj5hbGwgY2l0aWVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5nZXR0b3dzKHRoaXMuc3RhdGUuZGlzdHJpY3QpLm1hcCgoeCxpKT0+PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXt4fT57eH08L29wdGlvbj4pfSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCAgY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTMgY29sLXhzLTVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDEgbGFiZWxmMVwiPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPXsnZm9udDEgaW5wdXRmMSAnfSB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgIG5hbWU9XCJ1cHBlcnByaWNlXCIgdmFsdWU9e3RoaXMuc3RhdGUudXBwZXJwcmljZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cInVwcGVyIHByaWNlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPXsnZm9udDEgaW5wdXRmMSAnfSB0eXBlPVwibnVtYmVyXCIgcmVxdWlyZWQgIG5hbWU9XCJsb3dlcnByaWNlXCIgdmFsdWU9e3RoaXMuc3RhdGUubG93ZXJwcmljZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cImxvd2VyIHByaWNlP1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCAgY29sLWxnLTUgY29sLW1kLTUgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQxIGxhYmVsZjFcIj5TZWFyY2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9eydmb250MSBpbnB1dGYxICd9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgIG5hbWU9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJ3aGF0IGRvIHlvdSBmaW5kP1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlc3VibWl0LmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXN1Ym1pdFwiPnNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLmZpbHRlci1zZWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojYzJkMWUxN2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhYmVsZjEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dGYxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRmMTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAyMzk1NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXN1Ym1pdHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\filterItem.js */"));
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_Allcatagery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Allcatagery */ "./components/Allcatagery.js");
/* harmony import */ var _layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layouts/Navbar */ "./layouts/Navbar.js");
/* harmony import */ var _components_Topslide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Topslide */ "./components/Topslide.js");
/* harmony import */ var _layouts_filterItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../layouts/filterItem */ "./layouts/filterItem.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Topslide__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_layouts_filterItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_Allcatagery__WEBPACK_IMPORTED_MODULE_2__["default"], {
      catageries: this.props.types,
      topic: "categories"
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(`${_constant_main__WEBPACK_IMPORTED_MODULE_7__["Url"]}types`);
  var types = await res.json();
  var error = false;

  if (res.status != 200) {
    error = true;
  }

  return {
    itemname: id,
    types,
    error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useScrollTrigger");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

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
//# sourceMappingURL=index.js.map