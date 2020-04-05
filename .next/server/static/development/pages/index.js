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
  className: "jsx-2944295563" + " " + "Categories"
}, __jsx("h4", {
  className: "jsx-2944295563" + " " + "font1 topicC topicColor fontsizeE2-25"
}, props.topic), __jsx("div", {
  className: "jsx-2944295563" + " " + " row projects"
}, props.catageries.map((c, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  key: i,
  href: `/catagery/${c.type}`
}, __jsx("div", {
  key: i,
  className: "jsx-2944295563" + " " + "col-sm-6 col-lg-4 col-xl-3"
}, " ", __jsx("div", {
  className: "jsx-2944295563" + " " + "card"
}, __jsx("div", {
  className: "jsx-2944295563" + " " + "image "
}, __jsx("img", {
  src: _constant_main__WEBPACK_IMPORTED_MODULE_4__["ImageUrl"] + c.mainimage,
  width: "100%",
  height: "200px",
  className: "jsx-2944295563"
})), __jsx("div", {
  className: "jsx-2944295563" + " " + "card-inner"
}, __jsx("div", {
  className: "jsx-2944295563" + " " + "header"
}, __jsx("h3", {
  className: "jsx-2944295563" + " " + "font4 topicColor fontsizeE2"
}, c.type)), __jsx("div", {
  className: "jsx-2944295563" + " " + "content"
}, __jsx("h4", {
  className: "jsx-2944295563" + " " + "font6 subtopicColor fontsizeE1-5"
}, c.name))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2944295563"
}, ".Categories.jsx-2944295563{border-style:outset none none none;margin:20px;}.topicC.jsx-2944295563{padding :10px;}.card.jsx-2944295563{box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;box-sizing:border-box;margin-top:10px;margin-bottom:10px;background-color:#FFF;}.card.jsx-2944295563:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);-webkit-transition:0.5s;transition:0.5s;}.card.jsx-2944295563>.card-inner.jsx-2944295563{padding:10px;background-color:rgba(255,255,255,0.3);}.card.jsx-2944295563 .header.jsx-2944295563 h2.jsx-2944295563,h3.jsx-2944295563{margin-bottom:0px;margin-top:0px;}.card.jsx-2944295563 .header.jsx-2944295563{margin-bottom:5px;}.card.jsx-2944295563 img.jsx-2944295563{width:100%;-webkit-transition:0.5s;transition:0.5s;}.image.jsx-2944295563{height :100px;}.image.jsx-2944295563 img.jsx-2944295563:hover{opacity:0.5;-webkit-transition:0.5s;transition:0.5s;}.projects.jsx-2944295563 div.jsx-2944295563{-webkit-animation-name:fade-in-jsx-2944295563;animation-name:fade-in-jsx-2944295563;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-2944295563 div.jsx-2944295563:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-2944295563{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-2944295563{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEFsbGNhdGFnZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDTyxBQUd3QyxBQUlyQixBQUdvRCxBQVNBLEFBS3RELEFBSU0sQUFJRCxBQUdQLEFBSUksQUFJRixBQUtlLEFBS0YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdELEFBSU4sQUFHQSxVQUZmLEFBR0EsQ0FuRWEsQ0FRQSxDQW5CMEIsQ0FqQjVDLEFBaUNBLElBWmdCLEFBSWhCLGVBSEEsRUExQmEsWUFDYixDQTJGQyxFQTFDQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLENBeERELENBWEEsQUFvQkEsYUFuQ2tDLEFBU1YsbUJBNkJPLHFEQXJDUCxLQXNDSSxDQTdCVixnQkFSRCxnQkFDRyxRQVFwQixXQVB1QixBQW9DdEIsc0JBbkNEIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEFsbGNhdGFnZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0ltYWdlVXJsfSBmcm9tICcuLi9jb25zdGFudC9tYWluJztcclxuXHJcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxyXG5cclxuICBcclxuXHJcbiA8TGF5b3V0PlxyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2F0ZWdvcmllc1wiIGlkPVwibWVudTFcIj5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQxIHRvcGljQyB0b3BpY0NvbG9yIGZvbnRzaXplRTItMjVcIj57cHJvcHMudG9waWN9PC9oND5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cgcHJvamVjdHNcIj5cclxuICAgICAge3Byb3BzLmNhdGFnZXJpZXMubWFwKChjLGkpID0+IChcclxuICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvY2F0YWdlcnkvJHtjLnR5cGV9YH0gPiBcclxuICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctNCBjb2wteGwtM1wiPiA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgXCI+XHJcbiAgICAgICAgIDxpbWcgc3JjPXtJbWFnZVVybCtjLm1haW5pbWFnZX0gIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjIwMHB4XCIgLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWlubmVyXCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQ0IHRvcGljQ29sb3IgZm9udHNpemVFMlwiPntjLnR5cGV9PC9oMz5cclxuICAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDYgc3VidG9waWNDb2xvciBmb250c2l6ZUUxLTVcIj57Yy5uYW1lfTwvaDQ+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgXHJcbiAgICAgPC9MaW5rPlxyXG4gICAgICApKVxyXG4gICAgICB9XHJcbiAgIDwvZGl2PlxyXG4gICBcclxuPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgIHtgXHJcbiAgLkNhdGVnb3JpZXN7XHJcbiAgICBib3JkZXItc3R5bGU6IG91dHNldCBub25lIG5vbmUgbm9uZTtcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuICAudG9waWNDIHtcclxuICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gIH1cclxuICAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGO1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLmNhcmQgPiAuY2FyZC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgfVxyXG4gIC5jYXJkIC5oZWFkZXIgaDIsIGgzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gIH1cclxuICAuY2FyZCAuaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIH1cclxuICAuY2FyZCBpbWd7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLmltYWdle1xyXG4gICAgaGVpZ2h0IDogMTAwcHg7XHJcblxyXG4gIH1cclxuICAuaW1hZ2UgaW1nOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIFxyXG4gIH1cclxuICAgIC5wcm9qZWN0cyBkaXYge1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4wcztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG4gICB9XHJcbiAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDgpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMHM7XHJcbiAgIH1cclxuICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOSkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4ycztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi40cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMSkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi42cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMikge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMykge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4wcztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNCkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcclxuICAgfVxyXG4gICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNSkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy40O1xyXG4gICB9XHJcbiAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgIH1cclxuICAgfVxyXG4gICAgXHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Allcatagery.js */"));

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
      className: "jsx-3617189512"
    }, __jsx("div", {
      className: "jsx-3617189512" + " " + "container"
    }, __jsx("div", {
      className: "jsx-3617189512" + " " + "row"
    }, __jsx("div", {
      className: "jsx-3617189512" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-3617189512" + " " + "info-topic"
    }, "CONTACT US"), __jsx("table", {
      className: "jsx-3617189512" + " " + "contact-info"
    }, __jsx("tbody", {
      className: "jsx-3617189512"
    }, __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-map-marker icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, " Smart Mobile Nugegoda.", __jsx("br", {
      className: "jsx-3617189512"
    }), "281/1A, Stanly Thilakarathna Mawatha,", __jsx("br", {
      className: "jsx-3617189512"
    }), "Nugegoda")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-phone icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "0767 568 568, 0772 337 148,", __jsx("br", {
      className: "jsx-3617189512"
    }), "0114 546 614 ")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-envelope-o icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("a", {
      href: "mailto:info@smartmobile.lk",
      className: "jsx-3617189512"
    }, "info@smartmobile.lk"))), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-globe icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("a", {
      href: "https://www.smartmobile.lk",
      className: "jsx-3617189512"
    }, " www.smartmobile.lk")))))), __jsx("div", {
      className: "jsx-3617189512" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-3617189512" + " " + "info-topic"
    }, "INFORMATION"), __jsx("table", {
      className: "jsx-3617189512" + " " + "contact-info"
    }, __jsx("tbody", {
      className: "jsx-3617189512"
    }, __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, " About Us")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "Delivery Information ")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "Privacy Policy ")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-info icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "Terms & Conditions"))))), __jsx("div", {
      className: "jsx-3617189512" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-3617189512" + " " + "info-topic"
    }, "FOLLOW US"), __jsx("table", {
      className: "jsx-3617189512" + " " + "contact-info"
    }, __jsx("tbody", {
      className: "jsx-3617189512"
    }, __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-facebook icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, " facebook")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-twitter icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "twitter ")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-instagram icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "instagram ")), __jsx("tr", {
      className: "jsx-3617189512"
    }, __jsx("td", {
      className: "jsx-3617189512"
    }, __jsx("i", {
      className: "jsx-3617189512" + " " + "fa fa-google-plus icon"
    })), __jsx("td", {
      className: "jsx-3617189512"
    }, "google plus")))))))), __jsx("div", {
      className: "jsx-3617189512" + " " + "footer"
    }, "This footer will always be positioned at the bottom of the page, but ", __jsx("strong", {
      className: "jsx-3617189512"
    }, "not fixed"), "."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3617189512"
    }, "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');.footer.jsx-3617189512{position:relative;right:0;bottom:0;left:0;padding:1rem;background-color:black;text-align:center;}section.jsx-3617189512{padding:60px 0;}section.jsx-3617189512 .section-title.jsx-3617189512{text-align:center;color:#007b5e;margin-bottom:50px;text-transform:uppercase;}#footer.jsx-3617189512{background:darkblue !important;}#footer.jsx-3617189512 a.jsx-3617189512{color:#ffffff;-webkit-text-decoration:none !important;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;}#footer.jsx-3617189512 ul.social.jsx-3617189512 li.jsx-3617189512{padding:3px 0;}#footer.jsx-3617189512 ul.social.jsx-3617189512 li.jsx-3617189512 a.jsx-3617189512 i.jsx-3617189512{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-3617189512 ul.social.jsx-3617189512 li.jsx-3617189512:hover a.jsx-3617189512 i.jsx-3617189512{font-size:30px;margin-top:-10px;}#footer.jsx-3617189512 ul.social.jsx-3617189512 li.jsx-3617189512 a.jsx-3617189512,#footer.jsx-3617189512 ul.quick-links.jsx-3617189512 li.jsx-3617189512 a.jsx-3617189512{color:#ffffff;}#footer.jsx-3617189512 ul.social.jsx-3617189512 li.jsx-3617189512 a.jsx-3617189512:hover{color:#eeeeee;}#footer.jsx-3617189512 ul.quick-links.jsx-3617189512 li.jsx-3617189512{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-3617189512 ul.quick-links.jsx-3617189512 li.jsx-3617189512:hover{padding:3px 0;margin-left:5px;font-weight:700;}#footer.jsx-3617189512 ul.quick-links.jsx-3617189512 li.jsx-3617189512 a.jsx-3617189512 i.jsx-3617189512{margin-right:5px;}#footer.jsx-3617189512 ul.quick-links.jsx-3617189512 li.jsx-3617189512:hover a.jsx-3617189512 i.jsx-3617189512{font-weight:700;}.info-topic.jsx-3617189512{color:white;margin:20px 0;}.contact-info.jsx-3617189512{color:white;font-family:'Titillium Web',sans-serif;}.contact-info.jsx-3617189512 .icon.jsx-3617189512{color:yellow;padding-right:20px;}tr.jsx-3617189512{vertical-align:top;padding-bottom:200px;font-family:'Titillium Web',sans-serif;}@media (max-width:767px){#footer.jsx-3617189512 h5.jsx-3617189512{padding-left:0;border-left:transparent;padding-bottom:0px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRkcsQUFHbUIsQUFTd0UsQUFFdkUsQUFJRyxBQU1hLEFBSWpCLEFBTUgsQUFHTSxBQU9OLEFBS0QsQUFHQSxBQUdDLEFBTUEsQUFLRyxBQUdFLEFBR1IsQUFJQSxBQUlDLEFBS08sQUFPRCxZQW5CSixBQUkwQixDQUl0QixDQXBEaUIsQUFNcEMsQUFlQSxBQUdBLEFBR2lDLEFBTWpCLENBL0NoQixBQThCaUIsQUFnRFcsQ0F2QjVCLENBaENlLEFBNkJmLENBL0RRLEFBZVUsQ0FtRUcsT0FqRlosQUFxRVQsSUFYZ0IsQ0F0Q2hCLENBTHVCLEFBbUJVLEFBT2pDLEFBcUNBLEdBN0VPLElBd0ZnQixDQVBrQixFQWhGNUIsSUFrRGlCLEFBTzlCLEtBM0M2QixBQXlEN0IsSUF0RXVCLEdBdUZBLE1BdkRPLFdBa0JMLENBcEN6QixDQTBFQSxDQXZGa0IsQ0ErRWhCLE9BMUQrQixPQVdSLEdBL0J6QixtQkFxQnlDLGdCQTRCekMsa0JBakJBLEdBVkEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi8uLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgIHJlbmRlcigpe1xyXG5cdCAgIHJldHVybihcclxuXHQ8TGF5b3V0PlxyXG5cdFx0XHRcclxuXHJcbjxzZWN0aW9uIGlkPVwiZm9vdGVyXCI+XHJcblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00XCI+XHJcblx0XHRcdFx0PGg1IGNsYXNzTmFtZT1cImluZm8tdG9waWNcIj5DT05UQUNUIFVTPC9oNT5cclxuXHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dGJvZHkgPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkID4gU21hcnQgTW9iaWxlIE51Z2Vnb2RhLjxici8+XHJcblx0XHRcdFx0XHQyODEvMUEsIFN0YW5seSBUaGlsYWthcmF0aG5hIE1hd2F0aGEsPGJyLz5cclxuXHRcdFx0XHRcdE51Z2Vnb2RhPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZSBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD4wNzY3IDU2OCA1NjgsIDA3NzIgMzM3IDE0OCw8YnIvPjAxMTQgNTQ2IDYxNCA8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW8gaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGEgaHJlZj1cIm1haWx0bzppbmZvQHNtYXJ0bW9iaWxlLmxrXCI+aW5mb0BzbWFydG1vYmlsZS5sazwvYT48L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdsb2JlIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPjxhIGhyZWY9XCJodHRwczovL3d3dy5zbWFydG1vYmlsZS5sa1wiPiB3d3cuc21hcnRtb2JpbGUubGs8L2E+PC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3Rib2R5PjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctNFwiPlxyXG5cdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJpbmZvLXRvcGljXCI+SU5GT1JNQVRJT048L2g1PlxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cclxuXHRcdFx0XHRcdDx0Ym9keSA+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8gaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgPiBBYm91dCBVczwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5mbyBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD5EZWxpdmVyeSBJbmZvcm1hdGlvbiA8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8gaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+UHJpdmFjeSBQb2xpY3kgPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdDx0ZD48aSBjbGFzc05hbWU9XCJmYSBmYS1pbmZvIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlRlcm1zICYgQ29uZGl0aW9uczwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90Ym9keT48L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTRcIj5cclxuXHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwiaW5mby10b3BpY1wiPkZPTExPVyBVUzwvaDU+XHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mb1wiPlxyXG5cdFx0XHRcdFx0PHRib2R5ID5cclxuXHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2sgaWNvblwiPjwvaT48L3RkPlxyXG5cdFx0XHRcdFx0XHQ8dGQgPiBmYWNlYm9vazwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlciBpY29uXCI+PC9pPjwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD50d2l0dGVyIDwvdGQ+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPmluc3RhZ3JhbSA8L3RkPlxyXG5cdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0PHRkPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzIGljb25cIj48L2k+PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPmdvb2dsZSBwbHVzPC90ZD5cclxuXHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3Rib2R5PjwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHQ8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuXHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlRoaXMgZm9vdGVyIHdpbGwgYWx3YXlzIGJlIHBvc2l0aW9uZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSwgYnV0IDxzdHJvbmc+bm90IGZpeGVkPC9zdHJvbmc+LjwvZGl2PlxyXG48c3R5bGUganN4PlxyXG57ICBgXHJcbi5mb290ZXIge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmxlZnQ6IDA7XHJcbnBhZGRpbmc6IDFyZW07XHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbnNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDdiNWU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNmb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcclxuXHRmb250LXNpemU6MzBweDtcclxuXHRtYXJnaW4tdG9wOi0xMHB4O1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYXtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGE6aG92ZXJ7XHJcblx0Y29sb3I6I2VlZWVlZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVye1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxuXHRmb250LXdlaWdodDo3MDA7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhIGl7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaTpob3ZlciBhIGkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uaW5mby10b3BpYyB7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0bWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHRmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5jb250YWN0LWluZm8gLmljb257XHJcblx0Y29sb3I6eWVsbG93O1xyXG5cdHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgXHJcbn1cclxudHIge1xyXG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0cGFkZGluZy1ib3R0b206MjAwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblx0I2Zvb3RlciBoNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuYH1cclxuPC9zdHlsZT5cclxuXHJcbjwvTGF5b3V0PlxyXG5cdCAgIClcclxuXHQgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyAiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Footer.js */"));
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

/***/ "./constant/main.js":
/*!**************************!*\
  !*** ./constant/main.js ***!
  \**************************/
/*! exports provided: Url, ImageUrl, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUrl", function() { return ImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
const Url = 'http://localhost:8000/api/';
const ImageUrl = 'http://localhost:8000/Images/';
const NavLink = [{
  url: '/',
  urlname: 'home'
}, {
  url: '/create-shop',
  urlname: 'create-shop'
}, {
  url: '/create-item',
  urlname: 'create-item'
}, {
  url: '/create-catagery',
  urlname: 'create-catagery'
}, {
  url: '/index2',
  urlname: 'index2'
}, {
  url: '/myorder',
  urlname: 'my-order'
}, {
  url: '/index4',
  urlname: 'index4'
}];

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      function isMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();

        if (windowwidth < 990) {
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
  }

  render() {
    return __jsx("div", {
      className: "jsx-1700398626"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-1700398626"
    }, "Agency - Start Bootstrap Theme"), __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      className: "jsx-1700398626"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossOrigin: "anonymous",
      className: "jsx-1700398626"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-1700398626"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap",
      rel: "stylesheet",
      className: "jsx-1700398626"
    })), this.props.children, __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossOrigin: "anonymous",
      className: "jsx-1700398626"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossOrigin: "anonymous",
      className: "jsx-1700398626"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossOrigin: "anonymous",
      className: "jsx-1700398626"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1700398626"
    }, ".font1{font-family:'Titillium Web',sans-serif;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.font7{font-family:'Trade Winds',cursive;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.25em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontsizeE2-25{font-size :2.25em;}.fontweight700{font-weight :700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RJLEFBUzZDLEFBR1AsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUdJLEFBSXJCLEFBR0osQUFHRSxBQUdJLEFBR0EsQUFHQSxBQUdDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUdHLEFBR0QsQUFHRixBQUdHLEFBSXBCLFdBN0NDLEVBR0EsRUFOQSxBQVNBLEFBR0EsQUFHQSxBQWtCQSxBQVNBLEVBeEJBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFTQSxBQVNBLENBWkEsQUFTQSxZQXBEQSxDQVRBLEFBR0EsQ0FOQSxFQWVBLENBTkEsSUFaQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxNYWluTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3d3aWR0aDw5OTApe1xyXG4gICAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgICAkKCcuaXNkZXNrdG9wX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICQoJy5pc2Rlc2t0b3BfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBpc01vYmlsZSgpO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShpc01vYmlsZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgIFxyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXYgPlxyXG48SGVhZD5cclxuPHRpdGxlPkFnZW5jeSAtIFN0YXJ0IEJvb3RzdHJhcCBUaGVtZTwvdGl0bGU+XHJcblxyXG4gIFxyXG5cclxuIDxtZXRhIG5hbWU9XCJnb29nbGUtc2lnbmluLWNsaWVudF9pZFwiIGNvbnRlbnQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BY21lfEFudG9ufENhYmlufEluZGllK0Zsb3dlcnxUcmFkZStXaW5kc3xVYnVudHUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTp3Z2h0QDcwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgXHJcbiAgICBcclxuXHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNC4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUo2cWE0ODQ5YmxFMitwb1Q0V255S2h2NXZaRjVTclBvMGlFandCdktVN2ltR0ZBVjB3d2oxeVlmb1JTSm9aK25cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd2ZTREYyRTUwWTJEMXVVZGowTzN1TUJKbmp1VUQ0SWg3WXdhWWQxaXFma3RqMFVvZDhHQ0V4bDNPZzhpZndCNlwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcblxyXG4gPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgIHtgXHJcbiAgIFxyXG4gICBcclxuICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgLmZvbnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQye1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250M3tcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250NHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250NXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcclxuICAgfVxyXG4gICAuZm9udDZ7XHJcbiAgICBmb250LWZhbWlseTogJ0FjbWUnLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250N3tcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJhZGUgV2luZHMnLCBjdXJzaXZlO1xyXG4gICB9XHJcblxyXG4gICAudG9waWNDb2xvciB7XHJcbiAgICBjb2xvcjpkYXJrYmx1ZTtcclxuICAgfVxyXG4gICAuc3VidG9waWNDb2xvcntcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvck9yYW5nZXtcclxuICAgIGNvbG9yOm9yYW5nZTtcclxuICAgfVxyXG4gICAuZm9udGNvbG9yU2t5Ymx1ZXtcclxuICAgICBjb2xvciA6ICMwMDhBQ0M7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvcnBpbmt7XHJcbiAgICAgY29sb3IgOiAjQ0MwMDQ3O1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JyZWR7XHJcbiAgICAgY29sb3IgOiAjQ0MwMDAwO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNSB7XHJcbiAgICBmb250LXNpemUgOiAwLjVlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTYge1xyXG4gICAgZm9udC1zaXplIDogMC42ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS03IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuN2VtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtOCB7XHJcbiAgICBmb250LXNpemUgOiAwLjhlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTkge1xyXG4gICAgZm9udC1zaXplIDogMC45ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTEge1xyXG4gICAgZm9udC1zaXplIDogMWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTI1IHtcclxuICAgIGZvbnQtc2l6ZSA6IDEuMjVlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMS01IHtcclxuICAgIGZvbnQtc2l6ZSA6IDEuNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUyIHtcclxuICAgIGZvbnQtc2l6ZSA6IDJlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMi0yNSB7XHJcbiAgICBmb250LXNpemUgOiAyLjI1ZW07XHJcbiAgIH1cclxuICAgLmZvbnR3ZWlnaHQ3MDAge1xyXG4gICAgZm9udC13ZWlnaHQgOiA3MDBcclxuICAgfVxyXG4gICBgfVxyXG4gPC9zdHlsZT5cclxuXHJcbiAgPC9kaXY+XHJcblxyXG4pXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
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
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
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
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.navbar').addClass('SolidNav');
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.navbar').removeClass('SolidNav');
        }
      });

      function checkMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();

        if (windowwidth < 990) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
            'background-color': 'black',
            'opacity': '0.5',
            'padding-left': '20px'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).height() / 4) {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
                'background-color': 'darkblue',
                'opacity': '0.5',
                'padding-left': '20px'
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
                'background-color': 'black',
                'opacity': '0.5',
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

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-3414892808" + " " + "mainnav"
    }, __jsx("nav", {
      className: "jsx-3414892808" + " " + "navbar fixed-top navbar-expand-lg"
    }, __jsx("a", {
      href: "#",
      className: "jsx-3414892808" + " " + "navbar-brand font7"
    }, "MYBIZ.COM"), __jsx("button", {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      className: "jsx-3414892808" + " " + "navbar-toggler togglemenuO menuOpen"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/30/ffffff/menu.png",
      className: "jsx-3414892808"
    })), __jsx("button", {
      type: "button",
      className: "jsx-3414892808" + " " + " navbar-toggler togglemenuC menuClose"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/delete-sign.png",
      className: "jsx-3414892808"
    })), __jsx("div", {
      id: "navbarNavAltMarkup",
      className: "jsx-3414892808" + " " + "collapse navbar-collapse"
    }, __jsx("div", {
      className: "jsx-3414892808" + " " + "navbar-nav"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_5__["NavLink"].map((x, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      href: x.url
    }, __jsx("a", {
      className: "jsx-3414892808" + " " + "nav-link nav-link-main active font1"
    }, x.urlname))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3414892808"
    }, ".mainnav.jsx-3414892808{z-index :100;}.navbar-nav.jsx-3414892808{padding-left :100px;}.navbar-nav.jsx-3414892808 a.jsx-3414892808{color :white;}.navbar-nav.jsx-3414892808 a.jsx-3414892808:hover{color :gray;}.navbar.jsx-3414892808{z-index :100;height:50px;background-color:transparent;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-3414892808{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;}.togglemenuC.jsx-3414892808{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRmlCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBS0MsQUFTYSxBQU9oQyxZQW5CRSxDQVpBLEFBUUEsQUFRZ0IsQUFlakIsT0E1QkMsS0FjaUMsQ0FRVSw0QkFQM0IsWUFDQSxZQUMyQixrQ0FNZix3QkFDWixZQUNqQixnQkFQQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHtOYXZMaW5rfSBmcm9tICcuLy4uL2NvbnN0YW50L21haW4nO1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy50b2dnbGVtZW51QycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnZGl2Lm5hdmJhci1jb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVDbG9zZScpLmZhZGVPdXQoMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51T3BlbicpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVPJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51T3BlbicpLmZhZGVPdXQoMTApO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVDbG9zZScpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gZWZmZWN0IGZvciBuYXZiYXIgXHJcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgLy8gY2hlY2tzIGlmIHdpbmRvdyBpcyBzY3JvbGxlZCBtb3JlIHRoYW4gNTAwcHgsIGFkZHMvcmVtb3ZlcyBzb2xpZCBjbGFzc1xyXG4gICAgICAgICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAkKHdpbmRvdykuaGVpZ2h0KCkvMykgeyBcclxuICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLmFkZENsYXNzKCdTb2xpZE5hdicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhcicpLnJlbW92ZUNsYXNzKCdTb2xpZE5hdicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93d2lkdGg8OTkwKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh3aW5kb3cpLmhlaWdodCgpLzQpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidkYXJrYmx1ZScsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2JsYWNrJywnb3BhY2l0eSc6JzAuNScsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbm5hdlwiID5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgZml4ZWQtdG9wIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIGZvbnQ3XCIgaHJlZj1cIiNcIj5NWUJJWi5DT008L2E+XHJcbiAgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgdG9nZ2xlbWVudU8gbWVudU9wZW5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zMC9mZmZmZmYvbWVudS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBuYXZiYXItdG9nZ2xlciB0b2dnbGVtZW51QyBtZW51Q2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2RlbGV0ZS1zaWduLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAge05hdkxpbmsubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e3gudXJsfT48YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MVwiID57eC51cmxuYW1lfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5tYWlubmF2IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2IGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci5Tb2xpZE5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLnRvZ2dsZW1lbnVDe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\Navbar.js */"));
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
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_layouts_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Topslide__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Allcatagery__WEBPACK_IMPORTED_MODULE_2__["default"], {
      catageries: this.props.types,
      topic: "categories"
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(`${_constant_main__WEBPACK_IMPORTED_MODULE_6__["Url"]}types`);
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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