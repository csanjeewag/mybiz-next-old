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
      className: "jsx-3250346063"
    }, __jsx("div", {
      className: "jsx-3250346063" + " " + "container"
    }, __jsx("div", {
      className: "jsx-3250346063" + " " + "row text-center text-xs-center text-sm-left text-md-left"
    }, __jsx("div", {
      className: "jsx-3250346063" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-3250346063"
    }, "Quick links"), __jsx("ul", {
      className: "jsx-3250346063" + " " + "list-unstyled quick-links"
    }, __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "Home")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "About")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "FAQ")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "Get Started")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "Videos")))), __jsx("div", {
      className: "jsx-3250346063" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("h5", {
      className: "jsx-3250346063"
    }, "Quick links"), __jsx("ul", {
      className: "jsx-3250346063" + " " + "list-unstyled quick-links"
    }, __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "Home")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "About")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "FAQ")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "Get Started")), __jsx("li", {
      className: "jsx-3250346063"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-angle-double-right"
    }), "Videos")))), __jsx("div", {
      className: "jsx-3250346063" + " " + "col-xs-12 col-sm-4 col-md-4 col-lg-4"
    }, __jsx("ul", {
      className: "jsx-3250346063" + " " + "list-unstyled list-inline social text-center"
    }, __jsx("li", {
      className: "jsx-3250346063" + " " + "list-inline-item"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-facebook"
    }))), __jsx("li", {
      className: "jsx-3250346063" + " " + "list-inline-item"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-twitter"
    }))), __jsx("li", {
      className: "jsx-3250346063" + " " + "list-inline-item"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-instagram"
    }))), __jsx("li", {
      className: "jsx-3250346063" + " " + "list-inline-item"
    }, __jsx("a", {
      href: "javascript:void();",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-google-plus"
    }))), __jsx("li", {
      className: "jsx-3250346063" + " " + "list-inline-item"
    }, __jsx("a", {
      href: "javascript:void();",
      target: "_blank",
      className: "jsx-3250346063"
    }, __jsx("i", {
      className: "jsx-3250346063" + " " + "fa fa-envelope"
    })))))))), __jsx("div", {
      className: "jsx-3250346063" + " " + "footer"
    }, "This footer will always be positioned at the bottom of the page, but ", __jsx("strong", {
      className: "jsx-3250346063"
    }, "not fixed"), "."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3250346063"
    }, "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');.footer.jsx-3250346063{position:relative;right:0;bottom:0;left:0;padding:1rem;background-color:black;text-align:center;}section.jsx-3250346063{padding:60px 0;}section.jsx-3250346063 .section-title.jsx-3250346063{text-align:center;color:#007b5e;margin-bottom:50px;text-transform:uppercase;}#footer.jsx-3250346063{background:darkblue !important;}#footer.jsx-3250346063 h5.jsx-3250346063{padding-left:10px;border-left:3px solid #eeeeee;padding-bottom:6px;margin-bottom:20px;color:#ffffff;}#footer.jsx-3250346063 a.jsx-3250346063{color:#ffffff;-webkit-text-decoration:none !important;text-decoration:none !important;background-color:transparent;-webkit-text-decoration-skip:objects;}#footer.jsx-3250346063 ul.social.jsx-3250346063 li.jsx-3250346063{padding:3px 0;}#footer.jsx-3250346063 ul.social.jsx-3250346063 li.jsx-3250346063 a.jsx-3250346063 i.jsx-3250346063{margin-right:5px;font-size:25px;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-3250346063 ul.social.jsx-3250346063 li.jsx-3250346063:hover a.jsx-3250346063 i.jsx-3250346063{font-size:30px;margin-top:-10px;}#footer.jsx-3250346063 ul.social.jsx-3250346063 li.jsx-3250346063 a.jsx-3250346063,#footer.jsx-3250346063 ul.quick-links.jsx-3250346063 li.jsx-3250346063 a.jsx-3250346063{color:#ffffff;}#footer.jsx-3250346063 ul.social.jsx-3250346063 li.jsx-3250346063 a.jsx-3250346063:hover{color:#eeeeee;}#footer.jsx-3250346063 ul.quick-links.jsx-3250346063 li.jsx-3250346063{padding:3px 0;-webkit-transition:.5s all ease;-moz-transition:.5s all ease;-webkit-transition:.5s all ease;transition:.5s all ease;}#footer.jsx-3250346063 ul.quick-links.jsx-3250346063 li.jsx-3250346063:hover{padding:3px 0;margin-left:5px;font-weight:700;}#footer.jsx-3250346063 ul.quick-links.jsx-3250346063 li.jsx-3250346063 a.jsx-3250346063 i.jsx-3250346063{margin-right:5px;}#footer.jsx-3250346063 ul.quick-links.jsx-3250346063 li.jsx-3250346063:hover a.jsx-3250346063 i.jsx-3250346063{font-weight:700;}@media (max-width:767px){#footer.jsx-3250346063 h5.jsx-3250346063{padding-left:0;border-left:transparent;padding-bottom:0px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxREcsQUFHbUIsQUFTd0UsQUFFdkUsQUFJRyxBQU1hLEFBR2hCLEFBT0QsQUFNSCxBQUdNLEFBT04sQUFLRCxBQUdBLEFBR0MsQUFNQSxBQUtHLEFBR0UsQUFLRCxjQTdDaUIsQUFNcEMsQUFlQSxBQUdBLEFBR2lDLEFBTWpCLENBckRoQixBQW9DaUIsQUE4QlcsQ0FMNUIsQ0FoQ2UsQUE2QmYsQ0FyRVEsQUFlVSxBQVNnQixRQXZCekIsSUFnRU8sQ0E1Q2hCLENBTHVCLEFBeUJVLEFBT2pDLEdBOUNPLElBNEVnQixHQTNFVixJQXdEaUIsQUFPOUIsRUF6Q3VCLEdBUk0sSUFiTixHQTJFQSxNQXJDTyxHQWhCUCxRQWtDRSxDQTFDekIsQ0E4REEsQ0EzRWtCLFFBc0JELEFBS2dCLE9BV1IsR0FyQ3pCLElBc0JBLGVBS3lDLGdCQTRCekMsa0JBakJBLEdBVkEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi8uLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgIHJlbmRlcigpe1xyXG5cdCAgIHJldHVybihcclxuXHQ8TGF5b3V0PlxyXG5cdFx0XHRcclxuXHJcbjxzZWN0aW9uIGlkPVwiZm9vdGVyXCI+XHJcblx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyIHRleHQteHMtY2VudGVyIHRleHQtc20tbGVmdCB0ZXh0LW1kLWxlZnRcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTRcIj5cclxuXHRcdFx0XHQ8aDU+UXVpY2sgbGlua3M8L2g1PlxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIHF1aWNrLWxpbmtzXCI+XHJcblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgpO1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5Ib21lPC9hPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgpO1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5BYm91dDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+RkFRPC9hPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgpO1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5HZXQgU3RhcnRlZDwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+VmlkZW9zPC9hPjwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00XCI+XHJcblx0XHRcdFx0PGg1PlF1aWNrIGxpbmtzPC9oNT5cclxuXHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBxdWljay1saW5rc1wiPlxyXG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+SG9tZTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+QWJvdXQ8L2E+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKCk7XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZBUTwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+R2V0IFN0YXJ0ZWQ8L2E+PC9saT5cclxuXHRcdFx0XHRcdDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKCk7XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPlZpZGVvczwvYT48L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbWQtNCBjb2wtbGctNFwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIGxpc3QtaW5saW5lIHNvY2lhbCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKCk7XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKCk7XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKCk7XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlLXBsdXNcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoKTtcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0PC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5UaGlzIGZvb3RlciB3aWxsIGFsd2F5cyBiZSBwb3NpdGlvbmVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UsIGJ1dCA8c3Ryb25nPm5vdCBmaXhlZDwvc3Ryb25nPi48L2Rpdj5cclxuPHN0eWxlIGpzeD5cclxueyAgYFxyXG4uZm9vdGVyIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5yaWdodDogMDtcclxuYm90dG9tOiAwO1xyXG5sZWZ0OiAwO1xyXG5wYWRkaW5nOiAxcmVtO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA3YjVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuI2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcbiNmb290ZXIgaDV7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcclxuXHRmb250LXNpemU6MzBweDtcclxuXHRtYXJnaW4tdG9wOi0xMHB4O1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYXtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGE6aG92ZXJ7XHJcblx0Y29sb3I6I2VlZWVlZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVye1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxuXHRmb250LXdlaWdodDo3MDA7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhIGl7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaTpob3ZlciBhIGkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG5cdCNmb290ZXIgaDUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbmB9XHJcbjwvc3R5bGU+XHJcblxyXG48L0xheW91dD5cclxuXHQgICApXHJcblx0ICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Footer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/menu2.js":
/*!*****************************!*\
  !*** ./components/menu2.js ***!
  \*****************************/
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
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-3710015567" + " " + "container"
    }, __jsx("h1", {
      className: "jsx-3710015567" + " " + "font1 topicColor"
    }, this.props.topic), __jsx("div", {
      className: "jsx-3710015567" + " " + "menu2 row projects"
    }, this.props.catageries.map(c => __jsx("div", {
      className: "jsx-3710015567" + " " + "col-sm-6 col-md-4 col-lg-3 mt-4"
    }, __jsx("div", {
      className: "jsx-3710015567" + " " + "card"
    }, __jsx("img", {
      src: c.imageUrl,
      className: "jsx-3710015567" + " " + "card-img-top"
    }), __jsx("div", {
      className: "jsx-3710015567" + " " + "card-block"
    }, __jsx("figure", {
      className: "jsx-3710015567" + " " + "profile"
    }, __jsx("img", {
      src: c.topicImageUrl,
      alt: "",
      className: "jsx-3710015567" + " " + "profile-avatar"
    })), __jsx("h4", {
      className: "jsx-3710015567" + " " + "card-title font2 topicColor"
    }, c.subtopic), __jsx("div", {
      className: "jsx-3710015567" + " " + "meta font6 subtopicColor"
    }, __jsx("a", {
      className: "jsx-3710015567"
    }, c.topic), __jsx("div", {
      className: "jsx-3710015567" + " " + " float-right"
    }, __jsx("a", {
      className: "jsx-3710015567" + " " + "Icutprise font6"
    }, " ", __jsx("strike", {
      className: "jsx-3710015567"
    }, "Rs.", c.price, ".00"), "  "), __jsx("a", {
      className: "jsx-3710015567" + " " + "Idiscount font6"
    }, " ", c.discount, "% "), __jsx("a", {
      className: "jsx-3710015567" + " " + "Iprise font6"
    }, "\xA0Rs.", c.price * (100 + c.discount) / 100))), __jsx("div", {
      className: "jsx-3710015567" + " " + "card-text font6"
    }, c.content.slice(0, 150), "...")), __jsx("div", {
      className: "jsx-3710015567" + " " + "card-footer"
    }, __jsx("small", {
      className: "jsx-3710015567" + " " + "font3"
    }, c.date), __jsx("a", {
      href: "#",
      className: "jsx-3710015567" + " " + "btn btn-danger float-right btn-sm"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/favorite-cart.png",
      className: "jsx-3710015567"
    })), __jsx("a", {
      href: "#",
      className: "jsx-3710015567" + " " + "btn btn-primary float-right btn-sm"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/in-transit.png",
      className: "jsx-3710015567"
    })))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3710015567"
    }, "h5.jsx-3710015567{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin:0;}.menu2.jsx-3710015567{margin-bottom :20px;}.card.jsx-3710015567{font-size:1em;overflow:hidden;padding:0;border:none;border-radius:.28571429rem;box-shadow:0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;-webkit-transition:0.5s;transition:0.5s;}.card.jsx-3710015567:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);-webkit-transition:0.5s;transition:0.5s;}.card-block.jsx-3710015567{font-size:1em;position:relative;margin:0;padding:0.5em;border:none;border-top:1px solid rgba(34,36,38,.1);box-shadow:none;}.card-img-top.jsx-3710015567{display:block;width:100%;height:200;}.card-title.jsx-3710015567{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-3710015567{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :12px;}.card-footer.jsx-3710015567{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;border-top:1px solid rgba(0,0,0,.05) !important;background:#fff;}.card-inverse.jsx-3710015567 .btn.jsx-3710015567{border:1px solid rgba(0,0,0,.05);}.profile.jsx-3710015567{position:absolute;top:-12px;display:inline-block;overflow:hidden;box-sizing:border-box;width:25px;height:25px;margin:0;border:1px solid #fff;border-radius:50%;}.profile-avatar.jsx-3710015567{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-3710015567{position:relative;top:0;display:inline-block;}.profile-inline.jsx-3710015567~.card-title.jsx-3710015567{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-3710015567{font-weight:700;}.meta.jsx-3710015567{font-size:1em;}.meta.jsx-3710015567 a.jsx-3710015567{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-3710015567{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-3710015567{color:darkorange;font-size:0.8em;}.Iprise.jsx-3710015567{color:red;font-size:1em;}.projects.jsx-3710015567 div.jsx-3710015567{-webkit-animation-name:fade-in-jsx-3710015567;animation-name:fade-in-jsx-3710015567;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-3710015567 div.jsx-3710015567:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-3710015567{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-3710015567{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXG1lbnUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEb0IsQUFFZ0QsQUFNSCxBQUdOLEFBU29ELEFBS3BELEFBVUEsQUFNUyxBQVFaLEFBT0csQUFXc0IsQUFJbEIsQUFhSixBQU9JLEFBTUcsQUFNTCxBQUlGLEFBS08sQUFJUSxBQUtaLEFBSVAsQUFLYSxBQUtGLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRCxBQUlOLEFBR0EsVUExREEsQUF3RGYsQUFHQSxDQXZJaUIsR0F0Q0EsQUFjRSxBQVVQLEFBcUJLLEFBNEJMLEFBd0JmLEVBTEEsQ0FrQm9CLENBbEROLEFBb0JKLEVBbkZWLENBeUZvQixFQS9GQSxBQXVDQSxDQW1ESyxBQWtDekIsQ0ExRmUsQUFpREMsRUFuQ2EsQ0FzQkosRUE1RFgsQUE2Q0osRUEvQkcsQ0F5Q2IsQUF1REEsR0FyRkEsQUFxQlcsQ0E0QlcsQUFZQyxFQS9GRSxBQXVDQSxDQTdCVCxDQWNFLEVBZ0NDLEVBa0NuQixHQW9GRCxDQTlIcUIsQUFzQkEsQ0F3Q3BCLEFBc0JELEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsRUFoS2dDLEdBY2YsQUEyRGhCLENBWUEsRUF2Q3dCLEVBeERYLEFBdUNTLEtBdkJJLEFBZ0MxQixBQXNCMEIsQ0EwQ0UsQ0F2RmtCLEVBeEI5QyxTQXdDQSxBQWdCdUQsQ0E5Q0QsS0FtSHpCLEdBdkRkLEFBMENNLFdBekNMLE1BMENoQixFQXhGb0IsSUErQ1AsU0FDYSxHQS9DMUIsSUErQm9CLEVBOUNBLGFBK0RFLENBaEJ0QixBQW9FMEIsQ0E5R04sZ0JBMkRwQixTQS9EQSxlQUtBLFdBOEdEIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXG1lbnUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcblxyXG5cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQxIHRvcGljQ29sb3JcIj57dGhpcy5wcm9wcy50b3BpY308L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51MiByb3cgcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhdGFnZXJpZXMubWFwKGM9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2MuaW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Yy50b3BpY0ltYWdlVXJsfSBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj57Yy5zdWJ0b3BpY308L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2MudG9waWN9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT5Scy57Yy5wcmljZX0uMDA8L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4ge2MuZGlzY291bnR9JSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy57Yy5wcmljZSooMTAwK2MuZGlzY291bnQpLzEwMH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Yy5jb250ZW50LnNsaWNlKDAsMTUwKX0uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDNcIj57Yy5kYXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2Zhdm9yaXRlLWNhcnQucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2luLXRyYW5zaXQucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgICAgICAgICBgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZW51MntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZDRkNGQ1LCAwIDAgMCAxcHggI2Q0ZDRkNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWludmVyc2UgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjQ7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\menu2.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-316389115"
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
  className: "jsx-316389115"
}, "Agency - Start Bootstrap Theme"), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
  crossorigin: "anonymous",
  className: "jsx-316389115"
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
  rel: "stylesheet",
  className: "jsx-316389115"
})), props.children, __jsx("script", {
  src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
  crossorigin: "anonymous",
  className: "jsx-316389115"
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossorigin: "anonymous",
  className: "jsx-316389115"
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossorigin: "anonymous",
  className: "jsx-316389115"
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "316389115"
}, ".font1{font-family:'Trade Winds',cursive;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJJLEFBU3dDLEFBR0YsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUlqQixBQUdKLFdBQ1gsSUFIQSxlQUpBLENBVEEsQUFHQSxDQU5BLEVBSEEsQ0FZQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxNYWluTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuXHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiA+XHJcbjxIZWFkPlxyXG48dGl0bGU+QWdlbmN5IC0gU3RhcnQgQm9vdHN0cmFwIFRoZW1lPC90aXRsZT5cclxuXHJcbiAgXHJcblxyXG5cclxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG48bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFjbWV8QW50b258Q2FiaW58SW5kaWUrRmxvd2VyfFRyYWRlK1dpbmRzfFVidW50dSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuXHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICBcclxuICAgIFxyXG5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy40LjEuc2xpbS5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtSjZxYTQ4NDlibEUyK3BvVDRXbnlLaHY1dlpGNVNyUG8waUVqd0J2S1U3aW1HRkFWMHd3ajF5WWZvUlNKb1orblwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9wb3BwZXIuanNAMS4xNi4wL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC13ZlNERjJFNTBZMkQxdVVkajBPM3VNQkpuanVVRDRJaDdZd2FZZDFpcWZrdGowVW9kOEdDRXhsM09nOGlmd0I2XCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuXHJcblxyXG4gPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgIHtgXHJcbiAgIFxyXG4gICBcclxuICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgLmZvbnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJhZGUgV2luZHMnLCBjdXJzaXZlO1xyXG4gICB9XHJcbiAgIC5mb250MntcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDN7XHJcbiAgICBmb250LWZhbWlseTogJ0NhYmluJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDR7XHJcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDV7XHJcbiAgICBmb250LWZhbWlseTogJ0luZGllIEZsb3dlcicsIGN1cnNpdmU7XHJcbiAgIH1cclxuICAgLmZvbnQ2e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG5cclxuICAgLnRvcGljQ29sb3Ige1xyXG4gICAgY29sb3I6ZGFya2JsdWU7XHJcbiAgIH1cclxuICAgLnN1YnRvcGljQ29sb3J7XHJcbiAgICBjb2xvcjpibHVlO1xyXG4gICB9XHJcbiAgIGB9XHJcbiA8L3N0eWxlPlxyXG5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./layouts/SubNavbar.js":
/*!******************************!*\
  !*** ./layouts/SubNavbar.js ***!
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

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
      });

      function checkMobile() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width();

        if (windowwidth < 990) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link').css({
            'background-color': 'darkblue',
            'opacity': '0.5',
            'padding-left': '20px'
          });
        }
      }

      checkMobile();
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).resize(checkMobile);
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("nav", {
      className: "jsx-2852026948" + " " + "navbar sticky-top navbar-expand-lg"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2852026948" + " " + "navbar-brand font1"
    }, "MYBIZ.COM"), __jsx("button", {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      className: "jsx-2852026948" + " " + "navbar-toggler togglemenuO menuOpen"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/30/ffffff/menu.png",
      className: "jsx-2852026948"
    })), __jsx("button", {
      type: "button",
      className: "jsx-2852026948" + " " + " navbar-toggler togglemenuC menuClose"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/delete-sign.png",
      className: "jsx-2852026948"
    })), __jsx("div", {
      id: "navbarNavAltMarkup",
      className: "jsx-2852026948" + " " + "collapse navbar-collapse"
    }, __jsx("div", {
      className: "jsx-2852026948" + " " + "navbar-nav"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "jsx-2852026948" + " " + "nav-link active font1"
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/menu2"
    }, __jsx("a", {
      className: "jsx-2852026948" + " " + " nav-link active font1"
    }, "menu2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/menu1"
    }, __jsx("a", {
      className: "jsx-2852026948" + " " + " nav-link active font1"
    }, "menu1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/menu3"
    }, __jsx("a", {
      className: "jsx-2852026948" + " " + " nav-link active font1"
    }, "menu3")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/menu1"
    }, __jsx("a", {
      className: "jsx-2852026948" + " " + " nav-link active font1"
    }, "menu1"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2852026948"
    }, ".navbar-nav.jsx-2852026948{padding-left :100px;}.navbar-nav.jsx-2852026948 a.jsx-2852026948{color :white;}.navbar-nav.jsx-2852026948 a.jsx-2852026948:hover{color :gray;}.navbar.jsx-2852026948{height:80px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-2852026948{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;}.togglemenuC.jsx-2852026948{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWlCLEFBSXlDLEFBSVAsQUFJRCxBQU1BLEFBUWMsQUFPaEMsWUFuQkUsQUFLOEIsQ0FUOUIsQUF1QkQsT0E1QkMsTUFzQjJDLFlBUDNCLFlBQ0EsWUFDMkIsa0RBTWYsd0JBQ1osWUFOakIsQUFPQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxTdWJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy50b2dnbGVtZW51QycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnZGl2Lm5hdmJhci1jb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVDbG9zZScpLmZhZGVPdXQoMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51T3BlbicpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVPJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51T3BlbicpLmZhZGVPdXQoMTApO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVDbG9zZScpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja01vYmlsZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvd3dpZHRoPDk5MCl7XHJcbiAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmsnKS5jc3MoeydiYWNrZ3JvdW5kLWNvbG9yJzonZGFya2JsdWUnLCdvcGFjaXR5JzonMC41JywncGFkZGluZy1sZWZ0JzonMjBweCd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzdGlja3ktdG9wIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIGZvbnQxXCIgaHJlZj1cIiNcIj5NWUJJWi5DT008L2E+XHJcbiAgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgdG9nZ2xlbWVudU8gbWVudU9wZW5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zMC9mZmZmZmYvbWVudS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBuYXZiYXItdG9nZ2xlciB0b2dnbGVtZW51QyBtZW51Q2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2RlbGV0ZS1zaWduLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmUgZm9udDFcIiA+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21lbnUyXCI+PGEgY2xhc3NOYW1lPVwiIG5hdi1saW5rIGFjdGl2ZSBmb250MVwiID5tZW51MjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL21lbnUxXCI+PGEgY2xhc3NOYW1lPVwiIG5hdi1saW5rIGFjdGl2ZSBmb250MVwiID5tZW51MTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVudTNcIj48YSBjbGFzc05hbWU9XCIgbmF2LWxpbmsgYWN0aXZlIGZvbnQxXCIgPm1lbnUzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWVudTFcIj48YSBjbGFzc05hbWU9XCIgbmF2LWxpbmsgYWN0aXZlIGZvbnQxXCIgPm1lbnUxPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQgOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuU29saWROYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC50b2dnbGVtZW51Q3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SubNavbar.js */"));
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

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_menu2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/menu2 */ "./components/menu2.js");
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const catageries = [{
      id: 1,
      topic: 'topic1',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=1',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 2,
      topic: 'topic2',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=2',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 3,
      topic: 'topic3',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=3',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 4,
      topic: 'topic4',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=4',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 5,
      topic: 'topic5',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=5',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 6,
      topic: 'topic6',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=6',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 7,
      topic: 'topic7',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=7',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 8,
      topic: 'topic8',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=8',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 9,
      topic: 'topic9',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=9',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 10,
      topic: 'topic10',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=10',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }, {
      id: 11,
      topic: 'topic11',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=11',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'
    }];
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_menu2__WEBPACK_IMPORTED_MODULE_2__["default"], {
      catageries: catageries,
      topic: "Catageries"
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\index2.js */"./pages/index2.js");


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
//# sourceMappingURL=index2.js.map