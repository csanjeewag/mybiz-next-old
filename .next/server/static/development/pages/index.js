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
  className: "jsx-636989611" + " " + "Categories"
}, __jsx("h4", {
  className: "jsx-636989611" + " " + "font1 topicC topicColor fontsizeE2-25"
}, props.topic), __jsx("div", {
  className: "jsx-636989611" + " " + " row projects"
}, props.catageries.map((c, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  key: i,
  href: `${_constant_main__WEBPACK_IMPORTED_MODULE_4__["categoryUrl"] + c.type}?=ide${c._id}`
}, __jsx("div", {
  key: i,
  className: "jsx-636989611" + " " + "col-sm-6 col-lg-4 col-xl-3"
}, " ", __jsx("div", {
  className: "jsx-636989611" + " " + "card"
}, __jsx("div", {
  className: "jsx-636989611" + " " + "image"
}, __jsx("img", {
  src: _constant_main__WEBPACK_IMPORTED_MODULE_4__["ImageUrl"] + c.mainimage,
  width: "100%",
  height: "200px",
  className: "jsx-636989611"
})), __jsx("div", {
  className: "jsx-636989611" + " " + "card-inner"
}, __jsx("div", {
  className: "jsx-636989611" + " " + "header"
}, __jsx("h3", {
  className: "jsx-636989611" + " " + "font4 topicColor fontsizeE1-5"
}, c.name))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "636989611"
}, ".Categories.jsx-636989611{border-style:outset none none none;margin:20px;}.topicC.jsx-636989611{padding :10px;}.card.jsx-636989611{box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;box-sizing:border-box;margin-top:10px;margin-bottom:10px;background-color:#FFF;font-size:0.9em;}.card.jsx-636989611:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transition:0.5s;transition:0.5s;}.card.jsx-636989611>.card-inner.jsx-636989611{padding:10px;background-color:rgba(255,255,255,0.3);}.card.jsx-636989611 .header.jsx-636989611 h2.jsx-636989611,h3.jsx-636989611{margin-bottom:0px;margin-top:0px;}.card.jsx-636989611 .header.jsx-636989611{margin-bottom:5px;}.card.jsx-636989611 img.jsx-636989611{width:100%;-webkit-transition:0.5s;transition:0.5s;}.image.jsx-636989611 img.jsx-636989611:hover{opacity:0.5;-webkit-transition:0.5s;transition:0.5s;}.projects.jsx-636989611 div.jsx-636989611{-webkit-animation-name:fade-in-jsx-636989611;animation-name:fade-in-jsx-636989611;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-636989611 div.jsx-636989611:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-636989611{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-636989611{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEFsbGNhdGFnZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDTyxBQUd3QyxBQUlyQixBQUdvRCxBQVdBLEFBS3RELEFBSU0sQUFJRCxBQUdQLEFBUUUsQUFLZSxBQUtGLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRCxBQUlOLEFBR0EsVUFGZixBQUdBLENBbkVhLENBUUEsQ0FuQjBCLENBbkI1QyxJQXVCZ0IsQUFJaEIsZUFIQSxFQTVCYSxZQUNiLENBNkZDLEVBMUNBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQ0F4REQsQ0FYQSxBQW9CQSxhQXJDa0MsQUFXVixpQkE2Qk8sdURBdkNQLEdBd0NJLEdBN0JWLGdCQVZELGdCQUNHLFFBVXBCLFNBNkJDLEVBdENzQixzQkFDTixnQkFFakIiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcQWxsY2F0YWdlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7SW1hZ2VVcmwsY2F0ZWdvcnlVcmx9IGZyb20gJy4uL2NvbnN0YW50L21haW4nO1xyXG5cclxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXHJcblxyXG4gIFxyXG5cclxuIDxMYXlvdXQ+XHJcblxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXRlZ29yaWVzXCIgaWQ9XCJtZW51MVwiPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDIHRvcGljQ29sb3IgZm9udHNpemVFMi0yNVwiPntwcm9wcy50b3BpY308L2g0PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdyBwcm9qZWN0c1wiPlxyXG4gICAgICB7cHJvcHMuY2F0YWdlcmllcy5tYXAoKGMsaSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YCR7Y2F0ZWdvcnlVcmwrYy50eXBlfT89aWRlJHtjLl9pZH1gfSA+IFxyXG4gICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy00IGNvbC14bC0zXCI+IDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICA8aW1nIHNyYz17SW1hZ2VVcmwrYy5tYWluaW1hZ2V9ICB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIyMDBweFwiIC8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250NCB0b3BpY0NvbG9yIGZvbnRzaXplRTEtNVwiPntjLm5hbWV9PC9oMz5cclxuICAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDYgc3VidG9waWNDb2xvciBmb250c2l6ZUUxXCI+e2MubmFtZX08L2g0PlxyXG4gICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgXHJcbiAgICAgPC9MaW5rPlxyXG4gICAgICApKVxyXG4gICAgICB9XHJcbiAgIDwvZGl2PlxyXG4gICBcclxuPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgLkNhdGVnb3JpZXN7XHJcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBub25lIG5vbmUgbm9uZTtcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuICAudG9waWNDIHtcclxuICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gIH1cclxuICAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xyXG4gICAgZm9udC1zaXplOjAuOWVtO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5jYXJkID4gLmNhcmQtaW5uZXIge1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIH1cclxuICAuY2FyZCAuaGVhZGVyIGgyLCBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICB9XHJcbiAgLmNhcmQgLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICB9XHJcbiAgLmNhcmQgaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5pbWFnZXtcclxuIFxyXG5cclxuICB9XHJcbiAgLmltYWdlIGltZzpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBcclxuICB9XHJcbiAgICAucHJvamVjdHMgZGl2IHtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS44cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjBzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDkpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMnM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTEpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNnM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTIpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuOHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTMpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTQpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTUpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuNDtcclxuICAgfVxyXG4gICAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgIFxyXG4gICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gXHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Allcatagery.js */"));

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
/* harmony import */ var _constant_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../constant/page */ "./constant/page.js");

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
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].contactUs), __jsx("table", {
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
    }, " ", _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a1.t1, __jsx("br", {
      className: "jsx-1098961160"
    }), _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a1.t2, __jsx("br", {
      className: "jsx-1098961160"
    }), _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a1.t3)), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-phone icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a2.t1, ",", __jsx("br", {
      className: "jsx-1098961160"
    }), _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a1.t2, " ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-envelope-o icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("a", {
      href: _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a2.t1,
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a2.t2))), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-globe icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("a", {
      href: _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a3.t1,
      className: "jsx-1098961160"
    }, " ", _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].a3.t2)))))), __jsx("div", {
      className: "jsx-1098961160" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-1098961160" + " " + "info-topic fontsizeE1-25"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].information), __jsx("table", {
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
    }, " ", _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].b1)), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].b2)), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].b3, " ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].b4))))), __jsx("div", {
      className: "jsx-1098961160" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-1098961160" + " " + "info-topic fontsizeE1-25"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].followus), __jsx("table", {
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
    }, " ", _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].c1)), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-twitter icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].c2, " ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-instagram icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].c3, " ")), __jsx("tr", {
      className: "jsx-1098961160"
    }, __jsx("td", {
      className: "jsx-1098961160"
    }, __jsx("i", {
      className: "jsx-1098961160" + " " + "fa fa-google-plus icon"
    })), __jsx("td", {
      className: "jsx-1098961160"
    }, _constant_page__WEBPACK_IMPORTED_MODULE_3__["footer"].c4)))))))), __jsx("div", {
      className: "jsx-1098961160" + " " + "footer"
    }, "This footer will always be positioned at the bottom of the page, but ", __jsx("strong", {
      className: "jsx-1098961160"
    }, "not fixed"), "."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1098961160"
    }, "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');.footer.jsx-1098961160{position:relative;right:0;bottom:0;left:0;padding:1rem;background-color:black;text-align:center;}section.jsx-1098961160{padding:60px 0;}section.jsx-1098961160 .section-title.jsx-1098961160{text-align:center;color:#007b5e;margin-bottom:50px;text-transform:uppercase;}#footer.jsx-1098961160{background:darkblue !important;}#footer.jsx-1098961160 a.jsx-1098961160{color:#ffffff;-webkit-text-decoration:none !important;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160{padding:3px 0;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160 i.jsx-1098961160{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160:hover a.jsx-1098961160 i.jsx-1098961160{margin-top:-10px;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160,#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160{color:#ffffff;}#footer.jsx-1098961160 ul.social.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160:hover{color:#eeeeee;}#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160:hover{padding:3px 0;margin-left:5px;}#footer.jsx-1098961160 ul.quick-links.jsx-1098961160 li.jsx-1098961160 a.jsx-1098961160 i.jsx-1098961160{margin-right:5px;}.info-topic.jsx-1098961160{color:white;margin:20px 0;}.contact-info.jsx-1098961160{color:white;font-family:'Titillium Web',sans-serif;}.contact-info.jsx-1098961160 .icon.jsx-1098961160{color:yellow;padding-right:20px;}tr.jsx-1098961160{vertical-align:top;padding-bottom:200px;font-family:'Titillium Web',sans-serif;}@media (max-width:767px){#footer.jsx-1098961160 h5.jsx-1098961160{padding-left:0;border-left:transparent;padding-bottom:0px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RkcsQUFHbUIsQUFTd0UsQUFFdkUsQUFJRyxBQU1hLEFBSWpCLEFBTUgsQUFHTSxBQU9KLEFBSUgsQUFHQSxBQUdDLEFBTUEsQUFJRyxBQUdOLEFBSUEsQUFJQyxBQUtPLEFBT0QsWUFuQkosQUFJMEIsQ0FJdEIsQ0EvQ2lCLEFBTXBDLEFBY0EsQUFHQSxBQUdpQyxBQU1qQixDQTlDaEIsQUF5RTRCLEVBbERiLEFBT2YsQUFvQkEsQ0E3RFEsQUFlVSxDQThERyxPQTVFWixBQWdFVCxJQVBBLENBckNBLENBTHVCLEFBbUJVLEFBdUNqQyxHQXhFTyxJQW1GZ0IsQ0FQa0IsRUEzRTVCLElBaURpQixLQW5DRCxBQW9EN0IsSUFqRXVCLEdBa0ZBLE1BbERPLFdBaUJMLENBbkN6QixDQXFFQSxDQWxGa0IsQ0EwRWhCLE9BckQrQixPQVdSLEdBL0J6QixtQkFxQnlDLGdCQTJCekMsa0JBaEJBLEdBVkEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi8uLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHtmb290ZXJ9IGZyb20gJy4vLi4vY29uc3RhbnQvcGFnZSc7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICByZW5kZXIoKXtcclxuXHQgICByZXR1cm4oXHJcblx0PExheW91dD5cclxuXHRcdFx0XHJcblxyXG48c2VjdGlvbiBpZD1cImZvb3RlclwiPlxyXG5cdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb250c2l6ZUUxXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00IFwiPlxyXG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJpbmZvLXRvcGljIGZvbnRzaXplRTEtMjVcIj57Zm9vdGVyLmNvbnRhY3RVc308L2g1PlxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cclxuXHRcdFx0XHRcdDx0Ym9keSA+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgPiB7Zm9vdGVyLmExLnQxfTxici8+XHJcblx0XHRcdFx0XHRcdHtmb290ZXIuYTEudDJ9PGJyLz5cclxuXHRcdFx0XHRcdFx0e2Zvb3Rlci5hMS50M308L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntmb290ZXIuYTIudDF9LDxici8+e2Zvb3Rlci5hMS50Mn0gPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPjxhIGhyZWY9e2Zvb3Rlci5hMi50MX0+e2Zvb3Rlci5hMi50Mn08L2E+PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1nbG9iZSBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD48YSBocmVmPXtmb290ZXIuYTMudDF9PiB7Zm9vdGVyLmEzLnQyfTwvYT48L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGJvZHk+PC90YWJsZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00XCI+XHJcblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImluZm8tdG9waWMgZm9udHNpemVFMS0yNVwiPntmb290ZXIuaW5mb3JtYXRpb259PC9oNT5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dGJvZHkgPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkID4ge2Zvb3Rlci5iMX08L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8gaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2Zvb3Rlci5iMn08L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8gaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2Zvb3Rlci5iM30gPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntmb290ZXIuYjR9PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3Rib2R5PjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctNFwiPlxyXG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJpbmZvLXRvcGljIGZvbnRzaXplRTEtMjVcIj57Zm9vdGVyLmZvbGxvd3VzfTwvaDU+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxyXG5cdFx0XHRcdFx0PHRib2R5ID5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2sgaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgPiB7Zm9vdGVyLmMxfTwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlciBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Zm9vdGVyLmMyfSA8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbSBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Zm9vdGVyLmMzfSA8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPntmb290ZXIuYzR9PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3Rib2R5PjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHQ8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlRoaXMgZm9vdGVyIHdpbGwgYWx3YXlzIGJlIHBvc2l0aW9uZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSwgYnV0IDxzdHJvbmc+bm90IGZpeGVkPC9zdHJvbmc+LjwvZGl2PlxyXG48c3R5bGUganN4PlxyXG57ICBgXHJcbi5mb290ZXIge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmxlZnQ6IDA7XHJcbnBhZGRpbmc6IDFyZW07XHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDdiNWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcclxuXHRtYXJnaW4tdG9wOi0xMHB4O1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYXtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGE6aG92ZXJ7XHJcblx0Y29sb3I6I2VlZWVlZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVye1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEgaXtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uaW5mby10b3BpYyB7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWN0LWluZm8gLmljb257XHJcblx0Y29sb3I6eWVsbG93O1xyXG5cdHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgXHJcbn1cclxudHIge1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0cGFkZGluZy1ib3R0b206MjAwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblx0I2Zvb3RlciBoNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuYH1cclxuPC9zdHlsZT5cclxuXHJcbjwvTGF5b3V0PlxyXG5cdCAgIClcclxuXHQgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyAiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Footer.js */"));
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
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      function checkWidth() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();
        var windowheight = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height();

        if (windowwidth > 600) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.div1').css({
            'background-color': 'lightblue',
            'height': windowheight / 2,
            'width': windowwidth
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.topic').css({
            'font-size': windowwidth / 10
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('div.div1').css({
            'background-color': 'lightblue',
            'height': windowheight / 3,
            'width': windowwidth
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.topic').css({
            'font-size': windowwidth / 8
          });
        }
      } // Execute on load


      checkWidth(); // Bind event listener

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(checkWidth);
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-3737670149" + " " + "div1"
    }, __jsx("h1", {
      className: "jsx-3737670149" + " " + "topic font7"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_5__["wesitename"], ".lk")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3737670149"
    }, "div.div1.jsx-3737670149{background-image:url(\"./mainimage.jpg\");background-position:center;background-repeat:no-repeat;background-size:cover;}.topic.jsx-3737670149{position:relative;top:45%;text-align:center;color:lightgray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXFRvcHNsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDaUIsQUFHeUQsQUFPdEIsa0JBQ1YsUUFDUyxjQVJVLElBU1gsZ0JBRWxCLE9BVjhCLDRCQUNOLHNCQUV4QiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxjb21wb25lbnRzXFxUb3BzbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9sYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7d2VzaXRlbmFtZX0gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1dpZHRoKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICBpZih3aW5kb3d3aWR0aD42MDApe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2Rpdi5kaXYxJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2xpZ2h0Ymx1ZScsJ2hlaWdodCc6d2luZG93aGVpZ2h0LzIsJ3dpZHRoJzp3aW5kb3d3aWR0aH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy50b3BpYycpLmNzcyh7J2ZvbnQtc2l6ZScgOiB3aW5kb3d3aWR0aC8xMH0pO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAkKCdkaXYuZGl2MScpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidsaWdodGJsdWUnLCdoZWlnaHQnOndpbmRvd2hlaWdodC8zLCd3aWR0aCc6d2luZG93d2lkdGh9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcudG9waWMnKS5jc3Moeydmb250LXNpemUnIDogd2luZG93d2lkdGgvOH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIiAgPlxyXG4gICAgICAgICA8aDEgY2xhc3NOYW1lPVwidG9waWMgZm9udDdcIiAgPnt3ZXNpdGVuYW1lfS5sazwvaDE+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgZGl2LmRpdjEge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9tYWluaW1hZ2UuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudG9waWMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Topslide.js */"));
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "componentDidMount", () => {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('.popup-close').click(function () {
          jquery__WEBPACK_IMPORTED_MODULE_5___default()('#logreg-forms').slideUp(1000, function () {
            jquery__WEBPACK_IMPORTED_MODULE_5___default()('#background-signin').hide();
          });
        });
      });
    });

    _defineProperty(this, "handleChange", evt => {
      // This triggers everytime the input is changed
      if (evt.target.name == 'isseller') {
        this.setState({
          [evt.target.name]: evt.target.checked
        });
      } else {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }
    });

    _defineProperty(this, "responseGoogle", response => {
      if (this.state.isseller == true) {
        if (this.state.address.length > 2 && this.state.contact.length > 2) {
          this.setState(_objectSpread({}, response.profileObj, {
            token: response.tokenId
          }));
          this.handleSubmit();
        } else {
          alert('You register as seller, so please complete all field');
        }
      } else {
        this.setState(_objectSpread({}, response.profileObj, {
          token: response.tokenId
        }));
        this.handleSubmit();
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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('/api/signinuser', {
        method: 'POST',
        headers: {},
        body: datas
      }).then(response => {
        return response.json();
      }).then(data => {
        alert(data.msg);

        if (data.status == 200) {
          js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('user', data);
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.reload();
        }
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "handleSubmit", () => {
      this.hidesignup(); //  evt.preventDefault();

      const datas = new FormData(); // datas.append('file', this.state.selectedFile);

      if (this.state.email.length > 2) {
        datas.append('jsonbody', JSON.stringify(this.state));
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('/api/createuser', {
          method: 'POST',
          headers: {//'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            //'Content-Type': 'multipart/form-data'
          },
          body: datas
        }).then(response => {
          return response.json();
        }).then(data => {
          alert(data.msg);

          if (data.status == 200) {
            js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('user', data);
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.reload();
          }
        }).catch(error => console.log(error));
      }
    });

    _defineProperty(this, "showsignup", () => {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#background-signin').show();
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#logreg-forms').hide();
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#logreg-forms').slideDown(1000);
    });

    _defineProperty(this, "hidesignup", () => {
      jquery__WEBPACK_IMPORTED_MODULE_5___default()('#logreg-forms').slideUp(1000, function () {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#background-signin').hide();
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
      token: '',
      isseller: false
    };
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("div", {
      id: "background-signin",
      className: "jsx-631873222"
    }, __jsx("div", {
      id: "logreg-forms",
      className: "jsx-631873222" + " " + "col-lg-4 col-md-8 col-sm-12"
    }, __jsx("div", {
      className: "jsx-631873222" + " " + "popup-close"
    }, "x"), __jsx("br", {
      className: "jsx-631873222"
    }), __jsx("h2", {
      className: "jsx-631873222" + " " + "h3 mb-3 font1 topicColor fontsizeE1"
    }, " Sign in"), __jsx("div", {
      className: "jsx-631873222" + " " + "social-login row col-12 fontsizeE-9"
    }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLogin"], {
      clientId: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      buttonText: "Sign in with Google+",
      onSuccess: this.responseGoogleSignIn,
      onFailure: this.responseGoogleSignIn,
      cookiePolicy: 'single_host_origin',
      className: "btn google-btn social-btn col-lg-12 col-sm-12",
      isSignedIn: false
    })), __jsx("hr", {
      className: "jsx-631873222"
    }), __jsx("h2", {
      className: "jsx-631873222" + " " + "h3 mb-3 font1 topicColor fontsizeE1"
    }, " Sign up"), __jsx("form", {
      className: "jsx-631873222"
    }, __jsx("div", {
      className: "jsx-631873222" + " " + "form-group"
    }, __jsx("label", {
      className: "jsx-631873222" + " " + "font1 fontsizeE-9"
    }, "address"), __jsx("input", {
      type: "email",
      name: "address",
      placeholder: "Enter Address",
      value: this.state.address,
      onChange: this.handleChange,
      className: "jsx-631873222" + " " + "form-control fontsizeE-9"
    })), __jsx("div", {
      className: "jsx-631873222" + " " + "form-group"
    }, __jsx("label", {
      className: "jsx-631873222" + " " + "font1 fontsizeE-9"
    }, "Contact *"), __jsx("input", {
      type: "email",
      id: "exampleInputAddress",
      placeholder: "Enter Contact *",
      name: "contact",
      value: this.state.contact,
      onChange: this.handleChange,
      className: "jsx-631873222" + " " + "form-control fontsizeE-9"
    })), __jsx("div", {
      className: "jsx-631873222" + " " + "form-check"
    }, __jsx("input", {
      type: "checkbox",
      name: "isseller",
      value: this.state.isseller,
      onChange: this.handleChange,
      className: "jsx-631873222" + " " + "form-check-input"
    }), __jsx("label", {
      className: "form-check-label",
      className: "jsx-631873222" + " " + "font1 fontsizeE-9"
    }, "Sign up as Seller")), __jsx("small", {
      id: "emailHelp",
      className: "jsx-631873222" + " " + "form-text text-muted fontsizeE-7"
    }, "If you register as seller, you should provide address and contact."), __jsx("small", {
      id: "emailHelp",
      className: "jsx-631873222" + " " + "form-text text-muted fontsizeE-7"
    }, "We'll never share your details with anyone else."), __jsx("div", {
      className: "jsx-631873222" + " " + "social-login row col-12 fontsizeE-9"
    }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLogin"], {
      clientId: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      buttonText: "Sign up with Google+",
      onSuccess: this.responseGoogle,
      onFailure: this.responseGoogle,
      cookiePolicy: 'single_host_origin',
      className: "btn google-btn social-btn col-lg-12 col-sm-12",
      isSignedIn: false
    }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "631873222"
    }, ".visual-signup.jsx-631873222{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 1s cubic-bezier(0,0,0.3,1);transition:transform 1s cubic-bezier(0,0,0.3,1);}.popup-close.jsx-631873222{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:darkred;cursor:pointer;font-size:1.0rem;width:2.0rem;height:2.0rem;top:0.5rem;right:0.5rem;position:absolute;border-radius:100%;}#background-signin.jsx-631873222{width:100%;background:rgba(0,0,0,0.8);font-family:\"Robato\",sans-serif;font-size:1.1em;display:none;z-index:100;position:fixed;left:0;top:0;width:100%;height:100%;}#logreg-forms.jsx-631873222{box-shadow:0 7px 7px rgba(0,0,0,0.12),0 12px 40px rgba(0,0,0,0.24);margin:10vh auto;background-color:lightgray;overflow:auto;}#logreg-forms.jsx-631873222 form.jsx-631873222{width:100%;padding:15px;margin:auto;}#logreg-forms.jsx-631873222 .form-control.jsx-631873222{position:relative;box-sizing:border-box;height:auto;padding:2px;font-size:1.1em;}#logreg-forms.jsx-631873222 .form-control.jsx-631873222:focus{z-index:2;}#logreg-forms.jsx-631873222 .form-signin.jsx-631873222 input[type=\"email\"].jsx-631873222{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0;}#logreg-forms.jsx-631873222 .form-signin.jsx-631873222 input[type=\"password\"].jsx-631873222{border-top-left-radius:0;border-top-right-radius:0;}#logreg-forms.jsx-631873222 .social-login.jsx-631873222{margin:0 auto;margin-bottom:14px;}#logreg-forms.jsx-631873222 .social-btn.jsx-631873222{font-weight:100;color:white;font-size:0.9rem;}#logreg-forms.jsx-631873222 a.jsx-631873222{display:block;padding-top:10px;color:#fff;}#logreg-form.jsx-631873222 .lines.jsx-631873222{width:200px;border:1px solid red;}#logreg-forms.jsx-631873222 button[type=\"submit\"].jsx-631873222{margin-top:10px;}#logreg-forms.jsx-631873222 .facebook-btn.jsx-631873222{background-color:#3C589C;}#logreg-forms.jsx-631873222 .google-btn.jsx-631873222{background-color:#DF4B3B;}#logreg-forms.jsx-631873222 .form-reset.jsx-631873222,#logreg-forms.jsx-631873222 .form-signup.jsx-631873222{display:none;}#logreg-forms.jsx-631873222 .form-signup.jsx-631873222 .social-btn.jsx-631873222{width:210px;}#logreg-forms.jsx-631873222 .form-signup.jsx-631873222 input.jsx-631873222{margin-bottom:2px;}.form-signup.jsx-631873222 .social-login.jsx-631873222{margin:0 auto;}.submit.jsx-631873222{background:-webkit-linear-gradient(0deg,#2dfbff 0%,#3c96ff 100%);border-radius:25px;color:#fff;}@media screen and (max-width.jsx-631873222:500px) #logreg-forms{width:300px;}@media screen and (max-width.jsx-631873222:500px) #logreg-forms .social-login.jsx-631873222{width:200px;margin:0 auto;margin-bottom:10px;}@media screen and (max-width.jsx-631873222:500px) #logreg-forms .social-btn.jsx-631873222{font-size:1.3rem;font-weight:100;color:white;height:56px;}@media screen and (max-width.jsx-631873222:500px) #logreg-forms .social-btn.jsx-631873222:nth-child(1){margin-bottom:5px;}@media screen and (max-width.jsx-631873222:500px) #logreg-forms .social-btn.jsx-631873222 span.jsx-631873222{display:none;}@media screen and (max-width.jsx-631873222:500px) #logreg-forms .facebook-btn.jsx-631873222:after{content:'Facebook';}@media screen and (max-width.jsx-631873222:500px) #logreg-forms .google-btn.jsx-631873222:after{content:'Google+';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TkMsQUFLd0QsQUFJMUMsQUFlRSxBQWdCNEQsQUFRMUQsQUFNTyxBQU11QixBQUV0QixBQUtNLEFBTVosQUFJRyxBQU1GLEFBTUgsQUFLb0MsQUFFRSxBQUVGLEFBRWdCLEFBRWpCLEFBRUUsQUFHbEMsQUFJb0QsQUFTbkQsQUFJQSxBQUtNLEFBT0MsQUFHTCxBQUdLLEFBSUQsVUF0RnFCLENBbkNqQixBQXlCWixDQXhDTCxBQWdGWSxBQVkyQixBQW1CL0MsQUFJaUIsQ0F6QitDLEFBd0NoRSxDQWxFbUIsQUFVSCxBQXdCcEIsRUE5QmUsQUFnQnFDLENBb0M1QixDQTNFRSxBQWlEMkIsQUFpQ2pELEFBVUEsQ0FwRjZCLEFBZ0Y3QixLQTVGWSxDQWlCYyxBQTRCd0IsQUFFRixDQTRCekIsRUEvQ04sR0FNUCxFQVZkLEFBZ0JBLEFBd0NtQixHQS9FbkIsRUExQmtDLEVBOEJsQixFQThCaEIsR0FOQSxBQStDSSxBQUtnQixHQXBFWSxHQUtoQyxDQVpnQixLQTZFWixPQTVFZ0IsQ0FzREMsRUF2RUQsR0FkRixNQXNDbEIsSUFOQSxJQWpCK0IsQUF1RWxCLEVBdEdLLEFBaUJKLFNBc0ZkLElBckZhLFlBQ0ksQUFhQyxjQUVsQixDQWRTLE9BQ0QsTUFDSyxXQUNDLFlBR2QsTUE5QkYsV0FLd0IsbUdBQ0osbUJBQ0osZUFDRSxpQkFDSixhQUNDLGNBQ0gsV0FDRSxhQUNLLGtCQUNDLG1CQUNwQiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxjb21wb25lbnRzXFxzaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCB7IEdvb2dsZUxvZ2luIH0gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6JycsXHJcbiAgICAgICAgICAgIGFkZHJlc3MgOiAnJyxcclxuICAgICAgICAgICAgY29udGFjdCA6ICcnLFxyXG4gICAgICAgICAgICBpbWFnZVVybDonJyxcclxuICAgICAgICAgICAgZ29vZ2xlSWQ6JycsXHJcbiAgICAgICAgICAgIGdpdmVuTmFtZTonJyxcclxuICAgICAgICAgICAgZmFtaWx5TmFtZTonJyxcclxuICAgICAgICAgICAgdG9rZW46JycsXHJcbiAgICAgICAgICAgIGlzc2VsbGVyOmZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQ9ICgpPT4ge1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICBcclxuICAgICAgICAkKCcucG9wdXAtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgJCgnI2xvZ3JlZy1mb3JtcycpLnNsaWRlVXAoMTAwMCxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcjYmFja2dyb3VuZC1zaWduaW4nKS5oaWRlKCk7IFxyXG4gICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICBcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgIC8vIFRoaXMgdHJpZ2dlcnMgZXZlcnl0aW1lIHRoZSBpbnB1dCBpcyBjaGFuZ2VkXHJcbiAgICBpZihldnQudGFyZ2V0Lm5hbWU9PSdpc3NlbGxlcicpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC5jaGVja2VkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgW2V2dC50YXJnZXQubmFtZV06IGV2dC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnN0YXRlLmlzc2VsbGVyPT10cnVlKXtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFkZHJlc3MubGVuZ3RoPjImJnRoaXMuc3RhdGUuY29udGFjdC5sZW5ndGg+Mil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4ucmVzcG9uc2UucHJvZmlsZU9iaixcclxuICAgICAgICAgICAgICAgIHRva2VuOnJlc3BvbnNlLnRva2VuSWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgcmVnaXN0ZXIgYXMgc2VsbGVyLCBzbyBwbGVhc2UgY29tcGxldGUgYWxsIGZpZWxkJylcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4ucmVzcG9uc2UucHJvZmlsZU9iaixcclxuICAgICAgICAgICAgdG9rZW46cmVzcG9uc2UudG9rZW5JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgcmVzcG9uc2VHb29nbGVTaWduSW4gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIHRoaXMuaGlkZXNpZ251cCgpOyAgXHJcbiAgICB2YXIgcmVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4ucmVzcG9uc2UucHJvZmlsZU9iaixcclxuICAgICAgICAgICAgdG9rZW46cmVzcG9uc2UudG9rZW5JZFxyXG4gICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhcyA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICBkYXRhcy5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xyXG4gICAgICAgICBkYXRhcy5hcHBlbmQoJ3Rva2VuJywgcmVzcG9uc2UudG9rZW5JZCk7XHJcbiAgICAgICAgIGZldGNoKCcvYXBpL3NpZ25pbnVzZXInLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBib2R5OmRhdGFzLFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGFsZXJ0KGRhdGEubXNnKTsgaWYoZGF0YS5zdGF0dXM9PTIwMCl7Q29va2llLnNldCgndXNlcicsZGF0YSk7IFJvdXRlci5yZWxvYWQoKTt9fSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGVzaWdudXAoKTsgXHJcbiAgLy8gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YXMgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgLy8gZGF0YXMuYXBwZW5kKCdmaWxlJywgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xyXG4gICBpZih0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aD4yKXtcclxuICAgIGRhdGFzLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XHJcbiAgICBmZXRjaCgnL2FwaS9jcmVhdGV1c2VyJywge1xyXG4gICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAvLydBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgLy8nQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgfSwgXHJcbiAgICAgYm9keTpkYXRhcyxcclxuIFxyXG4gICAgIH1cclxuICAgICBcclxuICAgICApXHJcbiAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgIC50aGVuKGRhdGEgPT4geyBhbGVydChkYXRhLm1zZyk7IGlmKGRhdGEuc3RhdHVzPT0yMDApe0Nvb2tpZS5zZXQoJ3VzZXInLGRhdGEpO1JvdXRlci5yZWxvYWQoKTt9fSlcclxuICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICB9XHJcbiAgXHJcbiAgICBcclxuXHJcbn07XHJcblxyXG5cclxuICBzaG93c2lnbnVwPSgpPT57XHJcbiAgICAkKCcjYmFja2dyb3VuZC1zaWduaW4nKS5zaG93KCk7XHJcbiAgICAkKCcjbG9ncmVnLWZvcm1zJykuaGlkZSgpO1xyXG4gICAgJCgnI2xvZ3JlZy1mb3JtcycpLnNsaWRlRG93bigxMDAwKTtcclxuXHJcbiAgfVxyXG5cclxuICBoaWRlc2lnbnVwPSgpPT57XHJcbiAgICAkKCcjbG9ncmVnLWZvcm1zJykuc2xpZGVVcCgxMDAwLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2JhY2tncm91bmQtc2lnbmluJykuaGlkZSgpOyBcclxuICAgICB9KTtcclxuICAgICAgICBcclxuICB9XHJcbiAgXHJcbnJlbmRlcigpe1xyXG5cclxuICByZXR1cm4oXHJcbjxMYXlvdXQ+XHJcblxyXG48ZGl2IGlkPVwiYmFja2dyb3VuZC1zaWduaW5cIj5cclxuXHJcblxyXG4gICAgPGRpdiBpZD1cImxvZ3JlZy1mb3Jtc1wiIGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC04IGNvbC1zbS0xMlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jbG9zZVwiPng8L2Rpdj5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgzIG1iLTMgZm9udDEgdG9waWNDb2xvciBmb250c2l6ZUUxXCIgPiBTaWduIGluPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbG9naW4gcm93IGNvbC0xMiBmb250c2l6ZUUtOVwiPlxyXG4gICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiNTExODgwNjc0OTAxLWdmbjZ2Mm4xZWo2NXJybG5udjI5b2RnYmprcGtocGNqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiU2lnbiBpbiB3aXRoIEdvb2dsZStcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5yZXNwb25zZUdvb2dsZVNpZ25Jbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMucmVzcG9uc2VHb29nbGVTaWduSW59XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZ29vZ2xlLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy0xMiBjb2wtc20tMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZhY2Vib29rLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy02IGNvbC1zbS0xMiBmb250c2l6ZUUtOVwiIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gU2lnbiBpbiB3aXRoIEZhY2Vib29rPC9zcGFuPiA8L2J1dHRvbj4qL31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMyBtYi0zIGZvbnQxIHRvcGljQ29sb3IgZm9udHNpemVFMVwiID4gU2lnbiB1cDwvaDI+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQxIGZvbnRzaXplRS05XCI+YWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvbnRzaXplRS05XCIgbmFtZT1cImFkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEFkZHJlc3NcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MSBmb250c2l6ZUUtOVwiPkNvbnRhY3QgKjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvbnRzaXplRS05XCIgaWQ9XCJleGFtcGxlSW5wdXRBZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb250YWN0ICpcIiBuYW1lPVwiY29udGFjdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3R9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIG5hbWU9XCJpc3NlbGxlclwiIHZhbHVlPXt0aGlzLnN0YXRlLmlzc2VsbGVyfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiICBjbGFzc05hbWU9XCJmb250MSBmb250c2l6ZUUtOVwiPlNpZ24gdXAgYXMgU2VsbGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkIGZvbnRzaXplRS03XCI+SWYgeW91IHJlZ2lzdGVyIGFzIHNlbGxlciwgeW91IHNob3VsZCBwcm92aWRlIGFkZHJlc3MgYW5kIGNvbnRhY3QuPC9zbWFsbD5cclxuICAgICAgICAgICAgPHNtYWxsIGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWQgZm9udHNpemVFLTdcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGRldGFpbHMgd2l0aCBhbnlvbmUgZWxzZS48L3NtYWxsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1sb2dpbiByb3cgY29sLTEyIGZvbnRzaXplRS05XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiNTExODgwNjc0OTAxLWdmbjZ2Mm4xZWo2NXJybG5udjI5b2RnYmprcGtocGNqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25UZXh0PVwiU2lnbiB1cCB3aXRoIEdvb2dsZStcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17dGhpcy5yZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMucmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZ29vZ2xlLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy0xMiBjb2wtc20tMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZhY2Vib29rLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy02IGNvbC1zbS0xMiBmb250c2l6ZUUtOVwiIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gU2lnbiBpbiB3aXRoIEZhY2Vib29rPC9zcGFuPiA8L2J1dHRvbj4qL31cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPHN0eWxlIGpzeD5cclxue2BcclxuXHJcblxyXG4udmlzdWFsLXNpZ251cCB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XHJcblxyXG59XHJcbi5wb3B1cC1jbG9zZSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiBkYXJrcmVkO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDEuMHJlbTtcclxuXHR3aWR0aDogMi4wcmVtO1xyXG5cdGhlaWdodDogMi4wcmVtO1xyXG5cdHRvcDogMC41cmVtO1xyXG5cdHJpZ2h0OiAwLjVyZW07XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuI2JhY2tncm91bmQtc2lnbmlue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JhdG9cIixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjFlbTtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1ze1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTJweCA0MHB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgIG1hcmdpbjoxMHZoIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sOmZvY3VzIHsgei1pbmRleDogMjsgfVxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAjbG9ncmVnLWZvcm1zIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWxvZ2lue1xyXG5cclxuICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0bntcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGF7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm0gLmxpbmVze1xyXG4gICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17IG1hcmdpbi10b3A6MTBweDsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZhY2Vib29rLWJ0bnsgIGJhY2tncm91bmQtY29sb3I6IzNDNTg5QzsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmdvb2dsZS1idG57IGJhY2tncm91bmQtY29sb3I6ICNERjRCM0I7fVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tcmVzZXQsICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbnVweyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWdudXAgLnNvY2lhbC1idG57IHdpZHRoOjIxMHB4OyB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWdudXAgaW5wdXQgeyBtYXJnaW4tYm90dG9tOiAycHg7fVxyXG4gIFxyXG4gIC5mb3JtLXNpZ251cCAuc29jaWFsLWxvZ2lue1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsICAjMmRmYmZmIDAlLCAjM2M5NmZmIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAvKiBNb2JpbGUgKi9cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAgICAgI2xvZ3JlZy1mb3Jtc3tcclxuICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5zb2NpYWwtbG9naW57XHJcbiAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5zb2NpYWwtYnRue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0bjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0biBzcGFue1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAjbG9ncmVnLWZvcm1zICAuZmFjZWJvb2stYnRuOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDonRmFjZWJvb2snO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5nb29nbGUtYnRuOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDonR29vZ2xlKyc7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5gfVxyXG48L3N0eWxlPlxyXG5cclxuPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\signup.js */"));
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

/***/ "./constant/page.js":
/*!**************************!*\
  !*** ./constant/page.js ***!
  \**************************/
/*! exports provided: about, footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
const about = {
  aboutUs: 'About Us',
  p1: 'This is a website which you provide sales platform for your business. This consist with several categories of items. There are web page for every shop and items. Additionally you are able to search items several type.',
  p2: 'is there any problem or suggestion contact us?',
  topic1: 'Shop keeper',
  content1: 'As shop keeper you can add new shop which should be one category to this website. Then admin will accept after check your details. Then you can add items regarding subcategory.',
  topic2: 'Customer',
  content2: 'As customer you can search items in this website, if there are items which your prefer, you are able to request to items through the web or contact personally through contact details.',
  topic3: 'How do you create shop?',
  content3: 'First of all sign up within google account, then you are eligible to create shop. To create shop use bellow button. However after create shop you have to wait contact admin or admin will contact you. First 500 shop can create account free. so please try it quickly. Best of luck.',
  btn3: 'create shop',
  link3: '/create-shop'
};
const footer = {
  contactUs: 'CONTACT US',
  a1: {
    t1: 'onShop',
    t2: 'Athurugiriya road',
    t3: 'Homagama'
  },
  a2: {
    t1: '0717 49 29 17, 0765 49 27 95,',
    t2: '0717 10 96 50'
  },
  a3: {
    t1: 'mailto:casanjeewag@gmail.com',
    t2: 'info@onshop.lk'
  },
  a4: {
    t1: 'https://www.onshop.lk',
    t2: 'www.onshop.lk'
  },
  information: 'INFORMATION',
  b1: 'About Us',
  b2: 'Delivery Information',
  b3: 'Terms & Conditions',
  followus: 'FOLLOW US',
  c1: 'facebook',
  c2: 'twitter',
  c3: 'instagram',
  c4: 'google plus'
};

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
      className: "jsx-1866428350" + " " + "mainnav"
    }, __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: "signup",
      showsignup: this.props.showsignup
    }), __jsx("nav", {
      className: "jsx-1866428350" + " " + "navbar-bar navbar fixed navbar-expand-md"
    }, __jsx("span", {
      className: "jsx-1866428350" + " " + "navbar-brand isdesktop_disable"
    }, __jsx("a", {
      href: "#",
      className: "jsx-1866428350" + " " + "font7 fontsizeE1"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["wesitename"]), this.state.isuserlogin && this.state.user.isseller ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "101",
      href: `/myprofile?id=${this.state.isuserlogin ? this.state.user._id : ''}`
    }, __jsx("a", {
      className: "jsx-1866428350" + " " + "font1 fontsizeE-7 isuserlogin "
    }, "\xA0\xA0 \xA0\xA0\xA0\xA0", __jsx("img", {
      src: "https://img.icons8.com/material-rounded/20/ffffff/shop.png",
      className: "jsx-1866428350"
    }))) : null), __jsx("span", {
      className: "jsx-1866428350" + " " + "navbar-brand ismobile_disable"
    }, __jsx("a", {
      href: "#",
      className: "jsx-1866428350" + " " + "font7 fontsizeE1"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["wesitename"])), __jsx("button", {
      onClick: this.show,
      type: "button",
      "data-toggle": "collapse",
      className: "jsx-1866428350" + " " + "navbar-toggler"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/20/ffffff/menu.png",
      className: "jsx-1866428350"
    })), __jsx("div", {
      id: "collapsibleNavbar",
      className: "jsx-1866428350" + " " + "collapse navbar-collapse"
    }, __jsx("div", {
      className: "jsx-1866428350" + " " + "navbar-nav"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["NavLink"].map((x, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      href: x.url
    }, __jsx("a", {
      className: "jsx-1866428350" + " " + "nav-link nav-link-main active font1"
    }, x.urlname))), this.state.isuserlogin && this.state.user.isseller ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "101",
      href: `/myprofile?id=${this.state.isuserlogin ? this.state.user._id : ''}`
    }, __jsx("a", {
      className: "jsx-1866428350" + " " + "nav-link nav-link-main active font1 isuserlogin"
    }, "my-shops")) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "100",
      href: "?sign=true"
    }, __jsx("a", {
      onClick: this.showsignup.bind(this),
      className: "jsx-1866428350" + " " + "nav-link nav-link-main active font1"
    }, "sign-in")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "101",
      href: `/myorder`
    }, __jsx("a", {
      className: "jsx-1866428350" + " " + "nav-link nav-link-main active font1 isuserlogin"
    }, __jsx("img", {
      src: "https://img.icons8.com/pastel-glyph/20/ffffff/shopping-cart--v2.png",
      className: "jsx-1866428350"
    }))))), this.state.isuserlogin ? __jsx("a", {
      href: "#",
      className: "jsx-1866428350" + " " + "ismobile_disable logo-link nav-link nav-link-main active font1"
    }, this.state.user.givenName, " ") : null, this.state.isuserlogin ? __jsx("img", {
      src: this.state.user.imageUrl,
      className: "jsx-1866428350" + " " + "ismobile_disable float-left avatar"
    }) : null)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1866428350"
    }, ".avatar.jsx-1866428350{vertical-align:middle;width:30px;height:30px;border-radius:50%;}.mainnav.jsx-1866428350{z-index :100;}.navbar-nav.jsx-1866428350{padding-left :100px;}.navbar-nava.jsx-1866428350 a.jsx-1866428350{color :white;}.navbar-nava.jsx-1866428350 a.jsx-1866428350:hover{color :gray;}.nav-link.jsx-1866428350{color:white;}.navbar-bar.jsx-1866428350{z-index :100;height:80px;background-image:linear-gradient( black,transparent);border:none;color:white;-webkit-transition:background-color,height 2s ease 0s;transition:background-color,height 2s ease 0s;}.SolidNav.jsx-1866428350{z-index :100;height:50px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color,height 2s ease 0s;transition:background-color,height 2s ease 0s;}.togglemenuC.jsx-1866428350{display:none;}.fixed.jsx-1866428350{position:-webkit-sticky;width :100%;position:fixed;top:0;z-index:50;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SWlCLEFBRzJDLEFBTVQsQUFLTyxBQUlQLEFBSUQsQUFJRCxBQUdFLEFBUUEsQUFTbkIsQUFFMEIsWUF4QnhCLEFBR0EsQ0FoQkEsQUFTQSxBQVVnQixBQVFBLEFBUWpCLE9BL0JDLEVBWGUsRUE2Q0osQ0FsQjhDLEFBUTNCLFFBbENkLEdBNkNELFNBNUNPLE1Ba0NOLEFBV1YsTUFDSSxNQTdDUixBQWtDYyxLQVlsQixPQVhvRCxHQVZsQyxZQUNBLFlBQ2tDLHlFQVNuRCwyQkFSQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFNpZ25VcCBmcm9tICcuLy4uL2NvbXBvbmVudHMvc2lnbnVwJztcclxuaW1wb3J0IHtOYXZMaW5rLHdlc2l0ZW5hbWV9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgaXN1c2VybG9naW46ZmFsc2UsXHJcbiAgICAgICAgdXNlcjp7fVxyXG5cclxuICB9XHJcblx0fVxyXG4gICAgICAgIC8vc2hvdyBzaWdudXBcclxuICAgICAgICBzaG93c2lnbnVwKCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcy5zaWdudXAuc2hvd3NpZ251cCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXIgOiBDb29raWUuZ2V0SlNPTigndXNlcicpLFxyXG4gICAgICAgICAgICBpc3VzZXJsb2dpbiA6IENvb2tpZS5nZXRKU09OKCd1c2VyJyk/dHJ1ZTpmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcudG9nZ2xlbWVudUMnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2Rpdi5uYXZiYXItY29sbGFwc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51Q2xvc2UnKS5mYWRlT3V0KDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudU9wZW4nKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy50b2dnbGVtZW51TycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudU9wZW4nKS5mYWRlT3V0KDEwKTtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51Q2xvc2UnKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIGVmZmVjdCBmb3IgbmF2YmFyIFxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIC8vIGNoZWNrcyBpZiB3aW5kb3cgaXMgc2Nyb2xsZWQgbW9yZSB0aGFuIDUwMHB4LCBhZGRzL3JlbW92ZXMgc29saWQgY2xhc3NcclxuICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh3aW5kb3cpLmhlaWdodCgpLzMpIHsgXHJcbiAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXInKS5hZGRDbGFzcygnU29saWROYXYnKS5yZW1vdmVDbGFzcygnbmF2YmFyLWJhcicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdTb2xpZE5hdicpLmFkZENsYXNzKCduYXZiYXItYmFyJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tNb2JpbGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93d2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3d3aWR0aDw2MDApe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2JsYWNrJywnb3BhY2l0eSc6JzAuOScsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkvNCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2RhcmtibHVlJywnb3BhY2l0eSc6JzAuOScsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLW1haW4nKS5jc3MoeydiYWNrZ3JvdW5kLWNvbG9yJzonYmxhY2snLCdvcGFjaXR5JzonMC45JywncGFkZGluZy1sZWZ0JzonMjBweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2tNb2JpbGUoKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja01vYmlsZSk7XHJcbiAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCl7XHJcbiAgICAgICAgaWYoJCgnI2NvbGxhcHNpYmxlTmF2YmFyJykuaXMoXCI6dmlzaWJsZVwiKSl7XHJcbiAgICAgICAgICAgICQoJyNjb2xsYXBzaWJsZU5hdmJhcicpLnNsaWRlVXAoNTAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgJCgnI2NvbGxhcHNpYmxlTmF2YmFyJykuc2xpZGVEb3duKDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWlubmF2XCIgPlxyXG4gICAgICAgICAgICA8U2lnblVwIHJlZj1cInNpZ251cFwiIHNob3dzaWdudXA9e3RoaXMucHJvcHMuc2hvd3NpZ251cH0gLz5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXItYmFyIG5hdmJhciBmaXhlZCBuYXZiYXItZXhwYW5kLW1kXCI+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgaXNkZXNrdG9wX2Rpc2FibGVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udDcgZm9udHNpemVFMVwiIGhyZWY9XCIjXCI+e3dlc2l0ZW5hbWV9PC9hPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc3VzZXJsb2dpbiYmdGhpcy5zdGF0ZS51c2VyLmlzc2VsbGVyP1xyXG4gICAgICAgICAgICAgPExpbmsgIGtleT0nMTAxJyBocmVmPXtgL215cHJvZmlsZT9pZD0ke3RoaXMuc3RhdGUuaXN1c2VybG9naW4/dGhpcy5zdGF0ZS51c2VyLl9pZDonJ31gfT48YSBjbGFzc05hbWU9XCJmb250MSBmb250c2l6ZUUtNyBpc3VzZXJsb2dpbiBcIiAgPiZuYnNwOyZuYnNwOyAmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWF0ZXJpYWwtcm91bmRlZC8yMC9mZmZmZmYvc2hvcC5wbmdcIi8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgaXNtb2JpbGVfZGlzYWJsZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250NyBmb250c2l6ZUUxXCIgaHJlZj1cIiNcIj57d2VzaXRlbmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93fSAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvbWVudS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwiY29sbGFwc2libGVOYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAge05hdkxpbmsubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e3gudXJsfT48YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MVwiID57eC51cmxuYW1lfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8TGluayBrZXk9JzEwMCcgaHJlZj0nIyc+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiBvbkNsaWNrPXt0aGlzLnNob3dzaWdudXAuYmluZCh0aGlzKX0gPnNpZ25pbjwvYT48L0xpbms+Ki99XHJcbiAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzdXNlcmxvZ2luJiZ0aGlzLnN0YXRlLnVzZXIuaXNzZWxsZXI/XHJcbiAgICAgICAgICAgICA8TGluayBrZXk9JzEwMScgaHJlZj17YC9teXByb2ZpbGU/aWQ9JHt0aGlzLnN0YXRlLmlzdXNlcmxvZ2luP3RoaXMuc3RhdGUudXNlci5faWQ6Jyd9YH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDEgaXN1c2VybG9naW5cIiAgPm15LXNob3BzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgOm51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT0nMTAwJyAgaHJlZj0nP3NpZ249dHJ1ZSc+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiBvbkNsaWNrPXt0aGlzLnNob3dzaWdudXAuYmluZCh0aGlzKX0gPnNpZ24taW48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PScxMDEnIGhyZWY9e2AvbXlvcmRlcmB9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxIGlzdXNlcmxvZ2luXCIgID48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vcGFzdGVsLWdseXBoLzIwL2ZmZmZmZi9zaG9wcGluZy1jYXJ0LS12Mi5wbmdcIi8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc3VzZXJsb2dpbj8gPGEgY2xhc3NOYW1lPVwiaXNtb2JpbGVfZGlzYWJsZSBsb2dvLWxpbmsgbmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiBocmVmPVwiI1wiPnt0aGlzLnN0YXRlLnVzZXIuZ2l2ZW5OYW1lfSA8L2E+Om51bGwgfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc3VzZXJsb2dpbj88aW1nIGNsYXNzTmFtZT1cImlzbW9iaWxlX2Rpc2FibGUgZmxvYXQtbGVmdCBhdmF0YXJcIiBzcmM9e3RoaXMuc3RhdGUudXNlci5pbWFnZVVybH0gLz46bnVsbH0gIFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFpbm5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleCA6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXZhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdmEgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdi1saW5re1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXggOiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggYmxhY2ssdHJhbnNwYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvcixoZWlnaHQgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLlNvbGlkTmF2IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsaGVpZ2h0IDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLnRvZ2dsZW1lbnVDe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmZpeGVkIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgICAgICAgICAgICAgIHdpZHRoIDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDo1MDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\Navbar.js */"));
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_Allcatagery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Allcatagery */ "./components/Allcatagery.js");
/* harmony import */ var _layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../layouts/Navbar */ "./layouts/Navbar.js");
/* harmony import */ var _components_Topslide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Topslide */ "./components/Topslide.js");
/* harmony import */ var _layouts_filterItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../layouts/filterItem */ "./layouts/filterItem.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, " ", _constant_main__WEBPACK_IMPORTED_MODULE_8__["web"].wetopic), __jsx("meta", {
      property: "og:url",
      content: _constant_main__WEBPACK_IMPORTED_MODULE_8__["WebUrl"]
    }), __jsx("meta", {
      property: "og:type",
      content: "article"
    }), __jsx("meta", {
      property: "og:title",
      content: _constant_main__WEBPACK_IMPORTED_MODULE_8__["web"].wetopic
    }), __jsx("meta", {
      property: "og:description",
      content: _constant_main__WEBPACK_IMPORTED_MODULE_8__["web"].webContent
    }), __jsx("meta", {
      property: "og:image",
      content: _constant_main__WEBPACK_IMPORTED_MODULE_8__["web"].webImage
    }), __jsx("meta", {
      name: "keywords",
      content: _constant_main__WEBPACK_IMPORTED_MODULE_8__["web"].webKeyword
    }), __jsx("meta", {
      name: "description",
      content: _constant_main__WEBPACK_IMPORTED_MODULE_8__["web"].webContent
    })), __jsx(_layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Topslide__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_layouts_filterItem__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_Allcatagery__WEBPACK_IMPORTED_MODULE_3__["default"], {
      catageries: this.props.types,
      topic: "categories"
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(`${_constant_main__WEBPACK_IMPORTED_MODULE_8__["Url"]}types`);
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\index.js */"./pages/index.js");


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