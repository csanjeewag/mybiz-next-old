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

/***/ "./components/Slide1.js":
/*!******************************!*\
  !*** ./components/Slide1.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
      function checkWidth() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).width();
        var windowheight = jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).height(); //if the window is greater than 440px wide then turn on jScrollPane..
        //  $('.div1').addClass('desktop')

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.silde1image').css({
          'height': windowwidth / 3,
          'width': windowwidth
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.topic').css({
          'font-size': windowwidth / 10
        });
      } // Execute on load


      checkWidth(); // Bind event listener

      jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).resize(checkWidth);
    });
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      id: "carouselExampleIndicators",
      "data-ride": "carousel",
      className: "jsx-463248550" + " " + "carousel slide"
    }, __jsx("ol", {
      className: "jsx-463248550" + " " + "carousel-indicators"
    }, __jsx("li", {
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": "0",
      className: "jsx-463248550" + " " + "active"
    }), __jsx("li", {
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": "1",
      className: "jsx-463248550"
    }), __jsx("li", {
      "data-target": "#carouselExampleIndicators",
      "data-slide-to": "2",
      className: "jsx-463248550"
    })), __jsx("div", {
      className: "jsx-463248550" + " " + "carousel-inner"
    }, __jsx("div", {
      className: "jsx-463248550" + " " + "carousel-item active"
    }, __jsx("img", {
      src: "./add1.jpg",
      alt: "First slide",
      width: "100%",
      className: "jsx-463248550" + " " + "d-block w-100 silde1image"
    })), __jsx("div", {
      className: "jsx-463248550" + " " + "carousel-item "
    }, __jsx("img", {
      src: "./add2.webp",
      alt: "Second slide",
      width: "100%",
      className: "jsx-463248550" + " " + "d-block w-100 silde1image"
    })), __jsx("div", {
      className: "jsx-463248550" + " " + "carousel-item "
    }, __jsx("img", {
      src: "./add3.webp",
      alt: "Third slide",
      width: "100%",
      className: "jsx-463248550" + " " + "d-block w-100 silde1image"
    }))), __jsx("a", {
      href: "#carouselExampleIndicators",
      role: "button",
      "data-slide": "prev",
      className: "jsx-463248550" + " " + "carousel-control-prev"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "jsx-463248550" + " " + "carousel-control-prev-icon"
    }), __jsx("span", {
      className: "jsx-463248550" + " " + "sr-only"
    }, "Previous")), __jsx("a", {
      href: "#carouselExampleIndicators",
      role: "button",
      "data-slide": "next",
      className: "jsx-463248550" + " " + "carousel-control-next"
    }, __jsx("span", {
      "aria-hidden": "true",
      className: "jsx-463248550" + " " + "carousel-control-next-icon"
    }), __jsx("span", {
      className: "jsx-463248550" + " " + "sr-only"
    }, "Next"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "463248550"
    }, "div.div1.jsx-463248550{background-image:url(\"./mainimage.jpg\");background-position:center;background-repeat:no-repeat;background-size:cover;}.topic.jsx-463248550{position:relative;top:45%;text-align:center;color:lightgray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXFNsaWRlMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RGlCLEFBR3lELEFBT3RCLGtCQUNWLFFBQ1MsY0FSVSxJQVNYLGdCQUVsQixPQVY4Qiw0QkFDTixzQkFFeEIiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcU2xpZGUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrV2lkdGgoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93d2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3doZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgd2luZG93IGlzIGdyZWF0ZXIgdGhhbiA0NDBweCB3aWRlIHRoZW4gdHVybiBvbiBqU2Nyb2xsUGFuZS4uXHJcbiAgICAgICAgICAgICAgICAgIC8vICAkKCcuZGl2MScpLmFkZENsYXNzKCdkZXNrdG9wJylcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMWltYWdlJykuY3NzKHsnaGVpZ2h0Jzp3aW5kb3d3aWR0aC8zLCd3aWR0aCc6d2luZG93d2lkdGh9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnLnRvcGljJykuY3NzKHsnZm9udC1zaXplJyA6IHdpbmRvd3dpZHRoLzEwfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMWltYWdlXCIgc3JjPVwiLi9hZGQxLmpwZ1wiIGFsdD1cIkZpcnN0IHNsaWRlXCIgd2lkdGg9XCIxMDAlXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgc2lsZGUxaW1hZ2VcIiBzcmM9XCIuL2FkZDIud2VicFwiIGFsdD1cIlNlY29uZCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTFpbWFnZVwiIHNyYz1cIi4vYWRkMy53ZWJwXCIgYWx0PVwiVGhpcmQgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICBkaXYuZGl2MSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL21haW5pbWFnZS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50b3BpYyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Slide1.js */"));
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
      className: "jsx-813841711" + " " + "container"
    }, __jsx("div", {
      className: "jsx-813841711"
    }, __jsx("h2", {
      className: "jsx-813841711" + " " + "font1 topicColor menu2-topic"
    }, this.props.topic)), __jsx("div", {
      className: "jsx-813841711" + " " + "menu2 row projects"
    }, this.props.catageries.map(c => __jsx("div", {
      className: "jsx-813841711" + " " + "col-sm-6 col-md-4 col-lg-3 mt-4"
    }, __jsx("div", {
      className: "jsx-813841711" + " " + "card"
    }, __jsx("img", {
      src: c.imageUrl,
      className: "jsx-813841711" + " " + "card-img-top"
    }), __jsx("div", {
      className: "jsx-813841711" + " " + "card-block"
    }, __jsx("figure", {
      className: "jsx-813841711" + " " + "profile"
    }, __jsx("img", {
      src: c.topicImageUrl,
      alt: "",
      className: "jsx-813841711" + " " + "profile-avatar"
    })), __jsx("h4", {
      className: "jsx-813841711" + " " + "card-title font2 topicColor"
    }, c.subtopic), __jsx("div", {
      className: "jsx-813841711" + " " + "meta font6 subtopicColor"
    }, __jsx("a", {
      className: "jsx-813841711"
    }, c.topic), __jsx("div", {
      className: "jsx-813841711" + " " + " float-right"
    }, __jsx("a", {
      className: "jsx-813841711" + " " + "Icutprise font6"
    }, " ", __jsx("strike", {
      className: "jsx-813841711"
    }, "Rs.", c.price, ".00"), "  "), __jsx("a", {
      className: "jsx-813841711" + " " + "Idiscount font6"
    }, " ", c.discount, "% "), __jsx("a", {
      className: "jsx-813841711" + " " + "Iprise font6"
    }, "\xA0Rs.", c.price * (100 + c.discount) / 100))), __jsx("div", {
      className: "jsx-813841711" + " " + "card-text font6"
    }, c.content.slice(0, 150), "...")), __jsx("div", {
      className: "jsx-813841711" + " " + "card-footer"
    }, __jsx("small", {
      className: "jsx-813841711" + " " + "font3 float-left"
    }, c.date), __jsx("a", {
      href: "#",
      className: "jsx-813841711" + " " + "btn btn-danger float-right btn-sm"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/favorite-cart.png",
      className: "jsx-813841711"
    })), __jsx("a", {
      href: "#",
      className: "jsx-813841711" + " " + "btn btn-primary float-right btn-sm"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/in-transit.png",
      className: "jsx-813841711"
    })))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "813841711"
    }, "h5.jsx-813841711{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin:0;}.menu2.jsx-813841711{margin-bottom :20px;}.menu2-topic.jsx-813841711{padding :20px 10px 10px 10px;}.card.jsx-813841711{font-size:1em;overflow:hidden;padding:0;border:none;border-radius:.28571429rem;box-shadow:0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;-webkit-transition:0.5s;transition:0.5s;}.card.jsx-813841711:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);-webkit-transition:0.5s;transition:0.5s;}.card-block.jsx-813841711{font-size:1em;position:relative;margin:0;padding:0.5em;border:none;border-top:1px solid rgba(34,36,38,.1);box-shadow:none;}.card-img-top.jsx-813841711{display:block;width:100%;height:200;}.card-title.jsx-813841711{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-813841711{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :12px;}.card-footer.jsx-813841711{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;border-top:1px solid rgba(0,0,0,.05) !important;background:#fff;}.card-inverse.jsx-813841711 .btn.jsx-813841711{border:1px solid rgba(0,0,0,.05);}.profile.jsx-813841711{position:absolute;top:-12px;display:inline-block;overflow:hidden;box-sizing:border-box;width:25px;height:25px;margin:0;border:1px solid #fff;border-radius:50%;}.profile-avatar.jsx-813841711{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-813841711{position:relative;top:0;display:inline-block;}.profile-inline.jsx-813841711~.card-title.jsx-813841711{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-813841711{font-weight:700;}.meta.jsx-813841711{font-size:1em;}.meta.jsx-813841711 a.jsx-813841711{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-813841711{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-813841711{color:darkorange;font-size:0.8em;}.Iprise.jsx-813841711{color:red;font-size:1em;}.projects.jsx-813841711 div.jsx-813841711{-webkit-animation-name:fade-in-jsx-813841711;animation-name:fade-in-jsx-813841711;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-813841711 div.jsx-813841711:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-813841711{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-813841711{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXG1lbnUyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEb0IsQUFFZ0QsQUFNSCxBQUdTLEFBR2YsQUFTb0QsQUFLcEQsQUFVQSxBQU1TLEFBUVosQUFPRyxBQVdzQixBQUlsQixBQWFKLEFBT0ksQUFNRyxBQU1MLEFBSUYsQUFLTyxBQUlRLEFBS1osQUFJUCxBQUthLEFBS0YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdELEFBSU4sQUFHQSxVQTFEQSxBQXdEZixBQUdBLENBdklpQixHQXRDQSxBQWNFLEFBVVAsQUFxQkssQUE0QkwsQUF3QmYsRUFMQSxDQWtCb0IsQ0FsRE4sQUFvQkosRUF0RlYsQ0E0Rm9CLEVBbEdBLEFBMENBLENBbURLLEFBa0N6QixDQTFGZSxBQWlEQyxFQW5DYSxDQXNCSixDQWhFekIsQ0FJYyxBQTZDSixFQS9CRyxDQXlDYixBQXVEQSxHQXJGQSxBQXFCVyxDQTRCVyxBQVlDLEVBbEdFLEFBMENBLENBN0JULENBY0UsRUFnQ0MsRUFrQ25CLEdBb0ZELENBOUhxQixBQXNCQSxDQXdDcEIsQUFzQkQsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxFQWhLZ0MsR0FjZixBQTJEaEIsQ0FZQSxFQXZDd0IsRUEzRFgsQUEwQ1MsS0F2QkksQUFnQzFCLEFBc0IwQixDQTBDRSxDQXZGa0IsRUEzQjlDLFNBMkNBLEFBZ0J1RCxDQTlDRCxHQW1IekIsS0F2RGQsQUEwQ00sV0F6Q0wsTUEwQ2hCLEVBeEZvQixJQStDUCxTQUNhLEdBL0MxQixJQStCb0IsRUE5Q0EsWUFtSE0sQ0FwREosQ0FoQnRCLENBMUNvQixnQkEyRHBCLFNBL0RBLGVBS0EsU0E4R0QiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcbWVudTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuXHJcblxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250MSB0b3BpY0NvbG9yIG1lbnUyLXRvcGljXCI+e3RoaXMucHJvcHMudG9waWN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51MiByb3cgcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhdGFnZXJpZXMubWFwKGM9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2MuaW1hZ2VVcmx9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Yy50b3BpY0ltYWdlVXJsfSBjbGFzc05hbWU9XCJwcm9maWxlLWF2YXRhclwiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj57Yy5zdWJ0b3BpY308L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2MudG9waWN9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT5Scy57Yy5wcmljZX0uMDA8L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4ge2MuZGlzY291bnR9JSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy57Yy5wcmljZSooMTAwK2MuZGlzY291bnQpLzEwMH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Yy5jb250ZW50LnNsaWNlKDAsMTUwKX0uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgZmxvYXQtbGVmdFwiPntjLmRhdGV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvaW4tdHJhbnNpdC5wbmdcIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgICAgICAgICAgIGBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUyLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW52ZXJzZSAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1ldGEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JY3V0cHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSWRpc2NvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLklwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuNDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\menu2.js */"));
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
      className: "jsx-1972233995"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-1972233995"
    }, "Agency - Start Bootstrap Theme"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossorigin: "anonymous",
      className: "jsx-1972233995"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-1972233995"
    })), this.props.children, __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossorigin: "anonymous",
      className: "jsx-1972233995"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossorigin: "anonymous",
      className: "jsx-1972233995"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossorigin: "anonymous",
      className: "jsx-1972233995"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1972233995"
    }, ".font1{font-family:'Trade Winds',cursive;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.25em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontweight700{font-weight :700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURJLEFBU3dDLEFBR0YsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUlqQixBQUdKLEFBR0UsQUFHSSxBQUdBLEFBR0EsQUFHQyxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFHRyxBQUdELEFBR0YsQUFJakIsV0ExQ0MsRUFHQSxFQU5BLEFBU0EsQUFHQSxBQUdBLEFBa0JBLEFBU0EsRUF4QkEsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQVNBLEFBTUEsQ0FUQSxZQXhDQSxDQVRBLEFBR0EsQ0FOQSxFQUhBLENBWUEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcbGF5b3V0c1xcTWFpbkxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICBmdW5jdGlvbiBpc01vYmlsZSgpIHtcclxuICAgICAgICB2YXIgd2luZG93d2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgaWYod2luZG93d2lkdGg8OTkwKXtcclxuICAgICAgICAgICAgJCgnLmlzbW9iaWxlX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICAgICAgJCgnLmlzZGVza3RvcF9kaXNhYmxlJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgJCgnLmlzbW9iaWxlX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgICAkKCcuaXNkZXNrdG9wX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgaXNNb2JpbGUoKTtcclxuICAgICQod2luZG93KS5yZXNpemUoaXNNb2JpbGUpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICBcclxuICAgIHJldHVybihcclxuICA8ZGl2ID5cclxuPEhlYWQ+XHJcbjx0aXRsZT5BZ2VuY3kgLSBTdGFydCBCb290c3RyYXAgVGhlbWU8L3RpdGxlPlxyXG5cclxuICBcclxuXHJcblxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1Wa29vOHg0Q0dzTzMrSGh4djhUL1E1UGFYdGtLdHU2dWc1VE9lTlY2Z0JpRmVXUEdGTjlNdWhPZjIzUTlJZmpoXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L2xpbms+XHJcbjxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWNtZXxBbnRvbnxDYWJpbnxJbmRpZStGbG93ZXJ8VHJhZGUrV2luZHN8VWJ1bnR1JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcblxyXG5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgXHJcbiAgICBcclxuXHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNC4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUo2cWE0ODQ5YmxFMitwb1Q0V255S2h2NXZaRjVTclBvMGlFandCdktVN2ltR0ZBVjB3d2oxeVlmb1JTSm9aK25cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd2ZTREYyRTUwWTJEMXVVZGowTzN1TUJKbmp1VUQ0SWg3WXdhWWQxaXFma3RqMFVvZDhHQ0V4bDNPZzhpZndCNlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcblxyXG5cclxuIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICB7YFxyXG4gICBcclxuICAgXHJcbiAgXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIC5mb250MSB7XHJcbiAgICBmb250LWZhbWlseTogJ1RyYWRlIFdpbmRzJywgY3Vyc2l2ZTtcclxuICAgfVxyXG4gICAuZm9udDJ7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQze1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ1e1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICB9XHJcbiAgIC5mb250NntcclxuICAgIGZvbnQtZmFtaWx5OiAnQWNtZScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuXHJcbiAgIC50b3BpY0NvbG9yIHtcclxuICAgIGNvbG9yOmRhcmtibHVlO1xyXG4gICB9XHJcbiAgIC5zdWJ0b3BpY0NvbG9ye1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgfVxyXG4gICAuZm9udGNvbG9yT3Jhbmdle1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JTa3libHVle1xyXG4gICAgIGNvbG9yIDogIzAwOEFDQztcclxuICAgfVxyXG4gICAuZm9udGNvbG9ycGlua3tcclxuICAgICBjb2xvciA6ICNDQzAwNDc7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvcnJlZHtcclxuICAgICBjb2xvciA6ICNDQzAwMDA7XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS01IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNiB7XHJcbiAgICBmb250LXNpemUgOiAwLjZlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTcge1xyXG4gICAgZm9udC1zaXplIDogMC43ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS04IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuOGVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtOSB7XHJcbiAgICBmb250LXNpemUgOiAwLjllbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMSB7XHJcbiAgICBmb250LXNpemUgOiAxZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTEtMjUge1xyXG4gICAgZm9udC1zaXplIDogMS4yNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTUge1xyXG4gICAgZm9udC1zaXplIDogMS41ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTIge1xyXG4gICAgZm9udC1zaXplIDogMmVtO1xyXG4gICB9XHJcbiAgIC5mb250d2VpZ2h0NzAwIHtcclxuICAgIGZvbnQtd2VpZ2h0IDogNzAwXHJcbiAgIH1cclxuICAgYH1cclxuIDwvc3R5bGU+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
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
      className: "jsx-2118906225" + " " + "js-side-nav-container side-nav-container sidenavbar"
    }, __jsx("div", {
      className: "jsx-2118906225" + " " + "js-side-nav side-nav"
    }, __jsx("a", {
      href: "#0",
      className: "jsx-2118906225" + " " + "js-menu-close menu-close navbar-brand font1"
    }, "\xA0", __jsx("img", {
      src: "https://img.icons8.com/windows/25/FF8C8C/delete-slide.png",
      className: "jsx-2118906225"
    }), "\xA0 MYBIZ.COM"), __jsx("h4", {
      className: "jsx-2118906225" + " " + "sidenav-link-topic  font3"
    }, "  \xA0 ", this.props.sidenavconst.topic), __jsx("div", {
      className: "jsx-2118906225" + " " + "sidenavbar-link"
    }, this.props.sidenavconst.sidenavlink.map(c => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: c.link,
      key: c.id
    }, __jsx("a", {
      className: "jsx-2118906225" + " " + "nav-link font3"
    }, __jsx("img", {
      src: "https://img.icons8.com/small/25/C4FBFE/arrow.png",
      className: "jsx-2118906225"
    }), " \xA0", c.linkname)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2118906225"
    }, ".sidenavbar.jsx-2118906225{z-index:100;}.menu-close.jsx-2118906225{color:rgb(61,228,246);font-size:20px;padding:20px 10px 20px 10px;background:rgba(7,36,159 );}.side-nav.jsx-2118906225{position:relative;-webkit-transition:-webkit-transform 0.35s ease-out;-webkit-transition:transform 0.35s ease-out;transition:transform 0.35s ease-out;background:darkblue;opacity:0.9;height:100%;width:90%;max-width:200px;box-shadow:0 5px 6px 4px rgba(0,0,0,.2);-webkit-transform:translateX(-102%);-ms-transform:translateX(-102%);transform:translateX(-102%);will-change:transform;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.side-nav-container.jsx-2118906225{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none;}.side-nav-container.jsx-2118906225:before{-webkit-transition:opacity 0.3s cubic-bezier(0,0,0.3,1);transition:opacity 0.3s cubic-bezier(0,0,0.3,1);content:'';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);will-change:opacity;opacity:0;pointer-events:none;}.side-nav-animatable.jsx-2118906225 .side-nav.jsx-2118906225{-webkit-transition:-webkit-transform 0.33s cubic-bexier(0,0,0.3,0.1);-webkit-transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);z-index :100;}.side-nav-animatable.side-nav-visible.jsx-2118906225 .side-nav.jsx-2118906225{-webkit-transition:-webkit-transform 0.33s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 0.33s cubic-bezier(0,0,0.3,1);transition:transform 0.33s cubic-bezier(0,0,0.3,1);}.side-nav-visible.jsx-2118906225{pointer-events:auto;z-index :100;}.side-nav-visible.jsx-2118906225 .side-nav.jsx-2118906225{-webkit-transform:none;-ms-transform:none;transform:none;}.side-nav-visible.jsx-2118906225:before{opacity:1;}.sidenav-link-topic.jsx-2118906225{padding:20px 10px 10px 10px;color:#F7A12D;}.sidenavbar-link.jsx-2118906225{padding:10%;overflow:auto;}.sidenavbar-link.jsx-2118906225 a.jsx-2118906225{color:#C4FBFE;border-bottom:1px solid rgba(0,0,0,0.25);}.sidenavbar-link.jsx-2118906225 a.jsx-2118906225:hover{-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);-webkit-transition:0.5s;transition:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRHLEFBSWMsQUFJVyxBQU1OLEFBY0gsQUFTb0MsQUFjSyxBQUlGLEFBR2xDLEFBSUwsQUFHTCxBQUdvQixBQUlmLEFBSUksQUFJSyxVQWR4QixFQTdEQSxBQW9Fa0IsRUFJK0IsQ0FoRDFDLEdBZDZCLEVBNEN2QixFQWxERSxBQXFCVCxJQTRDTixFQTNDVyxBQXNDSyxLQVRoQixJQWxENEIsRUFzQmhCLEdBc0NaLFNBckNnQixJQTZDaEIsRUFmQSxRQXBENkIsRUF1QlQsV0ErQ0YsU0E5Q2xCLEtBdkJBLFlBMEJXLFdBQ0csR0E0Q2QsV0EzQ2tCLGtCQUNaLEdBekJjLEdBMEJaLFFBQ0MsU0ExQkcsQUEyQkwsT0FDc0IsQUFXN0IsS0F0Q1ksQ0FrQ0MsV0FqQ0gsRUFrQ1YsT0FQb0IsQ0ExQkosZ0JBQzJCLEdBMEJqQyxVQUNVLG9CQUNwQixPQTNCNEIsZ0dBQ04sc0JBRUEsOEVBQ3RCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50PSAoKT0+IHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm9wZW4tc2lkZS1uYXZiYXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKS5hZGRDbGFzcygnc2lkZS1uYXYtYW5pbWF0YWJsZSBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJCgnLmpzLW1lbnUtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKS5hZGRDbGFzcygnc2lkZS1uYXYtYW5pbWF0YWJsZScpLnJlbW92ZUNsYXNzKCcgc2lkZS1uYXYtdmlzaWJsZScpO1xyXG4gICAgICB9KVxyXG4gICAgICAkKCcuc2lkZW5hdmJhcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlJykucmVtb3ZlQ2xhc3MoJyBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBzaG93U2lkZWJhcj0oKT0+e1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlIHNpZGUtbmF2LXZpc2libGUnKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5yZW5kZXIoKXtcclxuICByZXR1cm4oXHJcbjxMYXlvdXQ+XHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJqcy1zaWRlLW5hdi1jb250YWluZXIgc2lkZS1uYXYtY29udGFpbmVyIHNpZGVuYXZiYXJcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJqcy1zaWRlLW5hdiBzaWRlLW5hdlwiPlxyXG4gIFxyXG4gIDxhIGhyZWY9XCIjMFwiIGNsYXNzTmFtZT1cImpzLW1lbnUtY2xvc2UgbWVudS1jbG9zZSBuYXZiYXItYnJhbmQgZm9udDFcIj4mbmJzcDtcclxuICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vd2luZG93cy8yNS9GRjhDOEMvZGVsZXRlLXNsaWRlLnBuZ1wiLz4mbmJzcDtcclxuICBNWUJJWi5DT01cclxuICA8L2E+XHJcblxyXG4gIDxoNCBjbGFzc05hbWU9XCJzaWRlbmF2LWxpbmstdG9waWMgIGZvbnQzXCI+ICAmbmJzcDsge3RoaXMucHJvcHMuc2lkZW5hdmNvbnN0LnRvcGljfTwvaDQ+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbmF2YmFyLWxpbmtcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpZGVuYXZjb25zdC5zaWRlbmF2bGluay5tYXAoYz0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtjLmxpbmt9IGtleT17Yy5pZH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZm9udDNcIiA+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL3NtYWxsLzI1L0M0RkJGRS9hcnJvdy5wbmdcIi8+ICZuYnNwO3tjLmxpbmtuYW1lfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbiAgPHN0eWxlIGpzeD5cclxuICB7YFxyXG5cclxuLnNpZGVuYXZiYXJ7XHJcbiAgei1pbmRleDoxMDA7XHJcbn1cclxuXHJcbi5tZW51LWNsb3Nle1xyXG5jb2xvcjogcmdiKDYxLCAyMjgsIDI0Nik7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxucGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxuYmFja2dyb3VuZDogcmdiYSg3LCAzNiwgMTU5ICk7XHJcbn1cclxuLnNpZGUtbmF2IHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgZWFzZS1vdXQ7XHJcbmJhY2tncm91bmQ6IGRhcmtibHVlO1xyXG5vcGFjaXR5OiAwLjk7XHJcbmhlaWdodDogMTAwJTtcclxud2lkdGg6IDkwJTtcclxubWF4LXdpZHRoOiAyMDBweDtcclxuYm94LXNoYWRvdzogMCA1cHggNnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDIlKTtcclxud2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxubGVmdDogMDtcclxudG9wOiAwO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uc2lkZS1uYXYtY29udGFpbmVyOmJlZm9yZSB7XHJcbnRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKTtcclxuY29udGVudDogJyc7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxucmlnaHQ6IDA7XHJcbmJvdHRvbTogMDtcclxubGVmdDogMDtcclxuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbndpbGwtY2hhbmdlOiBvcGFjaXR5O1xyXG5vcGFjaXR5OiAwO1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uc2lkZS1uYXYtYW5pbWF0YWJsZSAuc2lkZS1uYXYge1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zM3MgY3ViaWMtYmV4aWVyKDAsIDAsIDAuMywgMC4xKTtcclxuei1pbmRleCA6IDEwMDtcclxufVxyXG4uc2lkZS1uYXYtYW5pbWF0YWJsZS5zaWRlLW5hdi12aXNpYmxlIC5zaWRlLW5hdiB7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKTtcclxufVxyXG4uc2lkZS1uYXYtdmlzaWJsZSB7XHJcbnBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG56LWluZGV4IDogMTAwO1xyXG59XHJcbi5zaWRlLW5hdi12aXNpYmxlIC5zaWRlLW5hdiB7XHJcbnRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uc2lkZS1uYXYtdmlzaWJsZTpiZWZvcmUge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi5zaWRlbmF2LWxpbmstdG9waWMge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgY29sb3I6ICNGN0ExMkQ7XHJcbn1cclxuLnNpZGVuYXZiYXItbGlua3tcclxuICAgIHBhZGRpbmc6MTAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnNpZGVuYXZiYXItbGluayBhe1xyXG4gICAgY29sb3I6ICNDNEZCRkUgO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSkgO1xyXG59XHJcbi5zaWRlbmF2YmFyLWxpbmsgYTpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgXHJcbn1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbjwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SideNav.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
/* harmony import */ var _layouts_SideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../layouts/SideNav */ "./layouts/SideNav.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  //side nav bar open
  showsidebar() {
    this.refs.child.showSidebar();
  }

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
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() / 3) {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.sub1nav').addClass('SolidNav').css({
            'opacity': '1'
          }).addClass('fixed-top').removeClass('sticky-top');
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.logo-link').css({
            'display': 'none'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.all-link').css({
            'display': 'block'
          });
        } else {
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.sub1nav').removeClass('SolidNav').removeClass('fixed-top').addClass('sticky-top');
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.all-link').css({
            'display': 'none'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('.logo-link').css({
            'display': 'block'
          });
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
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() / 3) {
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
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SideNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: "child",
      sidenavconst: this.props.sidenavconst
    }), __jsx("div", {
      className: "jsx-2935234599" + " " + "subnav"
    }, __jsx("nav", {
      className: "jsx-2935234599" + " " + "navbar sub1nav sticky-top navbar-expand-lg"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2935234599" + " " + "navbar-brand font1 logo-link"
    }, "MYBIZ.COM"), __jsx("button", {
      onClick: this.showsidebar.bind(this),
      type: "button",
      className: "jsx-2935234599" + " " + "btn btn-primary all-link font3"
    }, this.props.sidenavconst.topiclink), __jsx("button", {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      className: "jsx-2935234599" + " " + "navbar-toggler togglemenuO menuOpen"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/30/ffffff/menu.png",
      className: "jsx-2935234599"
    })), __jsx("button", {
      type: "button",
      className: "jsx-2935234599" + " " + " navbar-toggler togglemenuC menuClose"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/delete-sign.png",
      className: "jsx-2935234599"
    })), __jsx("div", {
      id: "navbarNavAltMarkup",
      className: "jsx-2935234599" + " " + "collapse navbar-collapse"
    }, __jsx("div", {
      className: "jsx-2935234599" + " " + "navbar-nav"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 1,
      href: "/"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + "nav-link nav-link-main active font1"
    }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 6,
      href: "/index1"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + " nav-link nav-link-main active font1"
    }, "index")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 2,
      href: "/index2"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + " nav-link nav-link-main active font1"
    }, "index2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 3,
      href: "/index3"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + " nav-link nav-link-main active font1"
    }, "index3")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 7,
      href: "/index4"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + " nav-link nav-link-main active font1"
    }, "index4")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 4,
      href: "/menu2"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + " nav-link nav-link-main active font1"
    }, "menu2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: 5,
      href: "/menu3"
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + " nav-link nav-link-main active font1"
    }, "menu3")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2935234599"
    }, ".subnav.jsx-2935234599{z-index :100;}.navbar-nav.jsx-2935234599{padding-left :100px;}.navbar-nav.jsx-2935234599 a.jsx-2935234599{color :white;}.navbar-nav.jsx-2935234599 a.jsx-2935234599:hover{color :gray;}.navbar.jsx-2935234599{z-index :50;height:80px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-2935234599{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;}.togglemenuC.jsx-2935234599{display:none;}.sticky-top.jsx-2935234599{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.all-link.jsx-2935234599{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R2lCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBS0EsQUFTYyxBQU9oQyxBQUUwQixBQU1ULFlBM0JmLEFBSWdCLENBaEJoQixBQVFBLEFBdUJELEFBU0EsT0FyQ0MsSUFjOEIsQUFpQmQsRUFUMkIsd0JBUDNCLFlBQ0EsRUFnQlYsTUFDaUMsSUFoQkksc0NBTWYsd0JBQ1osWUFDakIsUUFTQSxJQWhCQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxTdWJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi8uLi9sYXlvdXRzL1NpZGVOYXYnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8vc2lkZSBuYXYgYmFyIG9wZW5cclxuICAgIHNob3dzaWRlYmFyKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLmNoaWxkLnNob3dTaWRlYmFyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVDJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCdkaXYubmF2YmFyLWNvbGxhcHNlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcudG9nZ2xlbWVudU8nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiBlZmZlY3QgZm9yIG5hdmJhciBcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAvLyBjaGVja3MgaWYgd2luZG93IGlzIHNjcm9sbGVkIG1vcmUgdGhhbiA1MDBweCwgYWRkcy9yZW1vdmVzIHNvbGlkIGNsYXNzXHJcbiAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+ICAkKHdpbmRvdykud2lkdGgoKS8zKSB7IFxyXG4gICAgICAgICAgICAgICAgICAkKCcuc3ViMW5hdicpLmFkZENsYXNzKCdTb2xpZE5hdicpLmNzcyh7J29wYWNpdHknOicxJ30pLmFkZENsYXNzKCdmaXhlZC10b3AnKS5yZW1vdmVDbGFzcygnc3RpY2t5LXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubG9nby1saW5rJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7ICQoJy5hbGwtbGluaycpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zdWIxbmF2JykucmVtb3ZlQ2xhc3MoJ1NvbGlkTmF2JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkLXRvcCcpLmFkZENsYXNzKCdzdGlja3ktdG9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5hbGwtbGluaycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pOyAkKCcubG9nby1saW5rJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93d2lkdGg8OTkwKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh3aW5kb3cpLndpZHRoKCkvMykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2RhcmtibHVlJywnb3BhY2l0eSc6JzAuNScsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTaWRlTmF2IHJlZj1cImNoaWxkXCIgIHNpZGVuYXZjb25zdD17dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3R9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJuYXZcIiA+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHN1YjFuYXYgc3RpY2t5LXRvcCBuYXZiYXItZXhwYW5kLWxnXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBmb250MSBsb2dvLWxpbmtcIiBocmVmPVwiI1wiPk1ZQklaLkNPTTwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dzaWRlYmFyLmJpbmQodGhpcyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYWxsLWxpbmsgZm9udDNcIj57dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3QudG9waWNsaW5rfTwvYnV0dG9uPlxyXG4gXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgdG9nZ2xlbWVudU8gbWVudU9wZW5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zMC9mZmZmZmYvbWVudS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBuYXZiYXItdG9nZ2xlciB0b2dnbGVtZW51QyBtZW51Q2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2RlbGV0ZS1zaWduLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXsxfSBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXs2fSBocmVmPVwiL2luZGV4MVwiPjxhIGNsYXNzTmFtZT1cIiBuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MVwiID5pbmRleDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9ezJ9IGhyZWY9XCIvaW5kZXgyXCI+PGEgY2xhc3NOYW1lPVwiIG5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPmluZGV4MjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9ezN9IGhyZWY9XCIvaW5kZXgzXCI+PGEgY2xhc3NOYW1lPVwiIG5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPmluZGV4MzwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9ezd9IGhyZWY9XCIvaW5kZXg0XCI+PGEgY2xhc3NOYW1lPVwiIG5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPmluZGV4NDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9ezR9IGhyZWY9XCIvbWVudTJcIj48YSBjbGFzc05hbWU9XCIgbmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiA+bWVudTI8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXs1fSBocmVmPVwiL21lbnUzXCI+PGEgY2xhc3NOYW1lPVwiIG5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPm1lbnUzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuc3VibmF2IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2IGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLlNvbGlkTmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAudG9nZ2xlbWVudUN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuc3RpY2t5LXRvcHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5hbGwtbGlua3tcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SubNavbar.js */"));
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

/***/ "./pages/index1.js":
/*!*************************!*\
  !*** ./pages/index1.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_menu2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/menu2 */ "./components/menu2.js");
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _components_Slide1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/Slide1 */ "./components/Slide1.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Imageside = () => {
  return __jsx("div", {
    className: "jsx-3443398829" + " " + "col-lg-6 col-sm-12"
  }, __jsx("div", {
    id: "carouselExampleIndicators",
    "data-ride": "carousel",
    className: "jsx-3443398829" + " " + "carousel slide"
  }, __jsx("ol", {
    className: "jsx-3443398829" + " " + "carousel-indicators"
  }, __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "0",
    className: "jsx-3443398829" + " " + "active"
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "1",
    className: "jsx-3443398829"
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "2",
    className: "jsx-3443398829"
  })), __jsx("div", {
    className: "jsx-3443398829" + " " + "carousel-inner"
  }, __jsx("div", {
    className: "jsx-3443398829" + " " + "carousel-item active"
  }, __jsx("img", {
    src: "./item1.jpg",
    alt: "First slide",
    width: "100%",
    className: "jsx-3443398829" + " " + "d-block w-100 silde2image"
  })), __jsx("div", {
    className: "jsx-3443398829" + " " + "carousel-item "
  }, __jsx("img", {
    src: "./item2.jpg",
    alt: "Second slide",
    width: "100%",
    className: "jsx-3443398829" + " " + "d-block w-100 silde2image"
  })), __jsx("div", {
    className: "jsx-3443398829" + " " + "carousel-item "
  }, __jsx("img", {
    src: "./item3.jpg",
    alt: "Third slide",
    width: "100%",
    className: "jsx-3443398829" + " " + "d-block w-100 silde2image"
  }))), __jsx("a", {
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "prev",
    className: "jsx-3443398829" + " " + "carousel-control-prev"
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-3443398829" + " " + "carousel-control-prev-icon"
  }), __jsx("span", {
    className: "jsx-3443398829" + " " + "sr-only"
  }, "Previous")), __jsx("a", {
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "next",
    className: "jsx-3443398829" + " " + "carousel-control-next"
  }, __jsx("span", {
    "aria-hidden": "true",
    className: "jsx-3443398829" + " " + "carousel-control-next-icon"
  }), __jsx("span", {
    className: "jsx-3443398829" + " " + "sr-only"
  }, "Next"))), __jsx("div", {
    className: "jsx-3443398829" + " " + "card-footer"
  }, __jsx("small", {
    className: "jsx-3443398829" + " " + "font3 card-footer-button"
  }, "2020/7/05"), __jsx("a", {
    href: "#",
    className: "jsx-3443398829" + " " + "btn btn-danger float-right btn-sm"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/favorite-cart.png",
    className: "jsx-3443398829"
  }), " \xA0 Add to Cart"), __jsx("a", {
    href: "#",
    className: "jsx-3443398829" + " " + "btn btn-primary float-right btn-sm"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/in-transit.png",
    className: "jsx-3443398829"
  }), " \xA0Order Now")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3443398829"
  }, ".card-footer.jsx-3443398829{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:1em 0.75em;}.card-footer-button.jsx-3443398829{padding:0.5em 0.1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpbmRleDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENTLEFBRTJCLEFBU00sY0FSSixNQVNwQixVQVJVLE1BQ0MsT0FDUSxlQUNJLG1CQUV2QiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcaW5kZXgxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLy4uL2NvbXBvbmVudHMvbWVudTInO1xyXG5pbXBvcnQgU3ViTmF2YmFyIGZyb20gJy4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAgJy4vLi4vY29tcG9uZW50cy9TbGlkZTEnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY29uc3QgSW1hZ2VzaWRlPSgpPT4ge1xyXG4gICAgcmV0dXJuKFxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbjxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9saT5cclxuICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+XHJcbjwvb2w+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz1cIi4vaXRlbTEuanBnXCIgYWx0PVwiRmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz1cIi4vaXRlbTIuanBnXCIgYWx0PVwiU2Vjb25kIHNsaWRlXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIFwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPVwiLi9pdGVtMy5qcGdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbjwvYT5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG48L2E+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBjYXJkLWZvb3Rlci1idXR0b25cIj4yMDIwLzcvMDU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+ICZuYnNwOyBBZGQgdG8gQ2FydDwvYT5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2luLXRyYW5zaXQucG5nXCIvPiAmbmJzcDtPcmRlciBOb3c8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgIHtgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXItYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250ZW50c2lkZT0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPnRvcGljIGluIHNyaSBsYW5ha2E8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5oZWFkIHBob25lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPiA8c3RyaWtlPlJzLjc1MDAuMDA8L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IDMzJSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuNDUxLjI1PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIC4gc2xpZGUgY2xhc3MgYWRkcyBhIENTUyB0cmFuc2l0aW9uIGFuZCBhbmltYXRpb24gZWZmZWN0LCB3aGljaCBtYWtlcyB0aGUgaXRlbXMgc2xpZGUgd2hlbiBzaG93aW5nIGEgbmV3IGl0ZW0uIE9taXQgdGhpcyBjbGFzcyBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBlZmZlY3QuIFRoZSBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGF0dHJpYnV0ZSB0ZWxscyBCb290c3RyYXAgdG8gYmVnaW4gYW5pbWF0aW5nIHRoZSBjYXJvdXNlbCBpbW1lZGlhdGVseSB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIC4gc2xpZGUgY2xhc3MgYWRkcyBhIENTUyB0cmFuc2l0aW9uIGFuZCBhbmltYXRpb24gZWZmZWN0LCB3aGljaCBtYWtlcyB0aGUgaXRlbXMgc2xpZGUgd2hlbiBzaG93aW5nIGEgbmV3IGl0ZW0uIE9taXQgdGhpcyBjbGFzcyBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBlZmZlY3QuIFRoZSBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGF0dHJpYnV0ZSB0ZWxscyBCb290c3RyYXAgdG8gYmVnaW4gYW5pbWF0aW5nIHRoZSBjYXJvdXNlbCBpbW1lZGlhdGVseSB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TcGVjaWZpY2F0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgTWljIHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IEJyYW5kICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBNSTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgRmFzdCBjaGFyZ2luZyAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgWWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBQcm90ZWN0aW9uICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBQbGFzdGljPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBCb2R5IFR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IE1ldGVsPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXN0b2NrLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TdG9jayBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgU3RvY2sgUXR5ICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyA2PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBEZWxpdmFyeSB0eXBlICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBjYXNoIG9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyAxMDBxdHkgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IDQwJSBkaXNjb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgTWljIHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51MntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NGNTcwRSA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3BlY2J7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzRTE5MDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXN1YmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWRpc2NvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uU2lkZSA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWF0aW9uc1wiPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWFjdGlvblwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzQwLzAwMDAwMC9mYXEucG5nXCIvPjxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDYgZm9udHNpemVFLTlcIj4mbmJzcDsgV2hhdCBpcyB0aGlzPyA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLUNoYW5ha2EgU2FtcGF0aC0gb24gMjUvMDIvMjAyMDwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDtIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/IEhvdyB0byBjcmVhdGUgYSBwb3AtdXAgdG8gcHJpbnQgZGlhbG9nIGJveCB1c2luZyBKYXZhU2NyaXB0PyAgRVM2IHwgQW5pbWF0aW9uIMK3IEhvdyB0byAuLi48L3A+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1YWN0aW9uXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNDAvMDAwMDAwL2ZhcS5wbmdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/ICA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLUNoYW5ha2EgU2FtcGF0aC0gb24gMjUvMDIvMjAyMDwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDsgSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgfCBBbmltYXRpb24gwrcgSG93IHRvIC4uLjwvcD5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICB7YC5zcGFtLXRleHR7XHJcbiAgICAgICAgICAgY29sb3I6Z3JheVxyXG4gICAgICAgfVxyXG4gICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJldmlld1NpZGUgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3c1wiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvck9yYW5nZVwiPlJldmlld3MgZnJvbSBjdXN0b21lcjwvaDU+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPVwiLi9pdGVtMS5qcGdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBDaGFuYWthIFNhbmplZXdhIDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAtMjUvMDIvMjAyMC08L3NwYW0+PC9wPlxyXG4gICAgICAgIDxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDUgZm9udHdlaWdodDcwMCBmb250c2l6ZUUtOVwiPiZuYnNwOyZuYnNwOyZuYnNwO0hvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPVwiLi9pdGVtMS5qcGdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBNYXl1bmkgQWNoaW50aGlrYSA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLTI1LzAyLzIwMjAtPC9zcGFtPjwvcD5cclxuICAgICAgICA8cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ1IGZvbnR3ZWlnaHQ3MDAgZm9udHNpemVFLTlcIj4mbmJzcDsmbmJzcDsmbmJzcDtIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/IEhvdyB0byBjcmVhdGUgYSBwb3AtdXAgdG8gcHJpbnQgZGlhbG9nIGJveCB1c2luZyBKYXZhU2NyaXB0PyAgRVM2ICBBbmltYXRpb24gwrcgSG93IHRvIEhvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgXHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipzaWRlIG5hdmJhciAqL1xyXG4gICAgc2hvd3NpZGViYXIoKXtcclxuICAgICAgICB0aGlzLnJlZnMuY2hpbGQuc2hvd1NpZGViYXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQoJy5zaWxkZTJpbWFnZScpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gNDQwcHggd2lkZSB0aGVuIHR1cm4gb24galNjcm9sbFBhbmUuLlxyXG4gICAgICAgICAgICAgICAgICAvLyAgJCgnLmRpdjEnKS5hZGRDbGFzcygnZGVza3RvcCcpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLmNzcyh7J21heC1oZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5wYXJlbnQoKS5jc3MoeydoZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJywnYmFja2dyb3VuZCc6ICcjZmZmZmZmJ30pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9uIGxvYWRcclxuICAgICAgICAgICAgY2hlY2tXaWR0aCgpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tXaWR0aCk7XHJcbiAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gIC8vc2lkZSBuYXZiYXIgbGlua1xyXG4gIGNvbnN0IHNpZGVuYXZsaW5rID0gW1xyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnUyJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTMnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51NCd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU1J30sXHJcbiAgXTtcclxuICBcclxuICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdJdGVtcycsdG9waWNsaW5rOidBbGwgSXRlbXMnLHNpZGVuYXZsaW5rOnNpZGVuYXZsaW5rfTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD4gXHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2YmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzaWRlPjwvSW1hZ2VzaWRlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRzaWRlPjwvQ29udGVudHNpZGU+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25TaWRlPjwvUXVlc3Rpb25TaWRlPlxyXG4gICAgICAgICAgICAgICAgPFJldmlld1NpZGUvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\index1.js */"));
};

const Contentside = () => {
  return __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "card"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "card-block"
  }, __jsx("h4", {
    className: "jsx-1041883449" + " " + "card-title font2 topicColor"
  }, "topic in sri lanaka"), __jsx("div", {
    className: "jsx-1041883449" + " " + "meta font6 subtopicColor"
  }, __jsx("a", {
    className: "jsx-1041883449"
  }, "head phone"), __jsx("div", {
    className: "jsx-1041883449" + " " + " float-right"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "Icutprise font6"
  }, " ", __jsx("strike", {
    className: "jsx-1041883449"
  }, "Rs.7500.00"), "  "), __jsx("a", {
    className: "jsx-1041883449" + " " + "Idiscount font6"
  }, " 33% "), __jsx("a", {
    className: "jsx-1041883449" + " " + "Iprise font6"
  }, "\xA0Rs.451.25"))), __jsx("div", {
    className: "jsx-1041883449" + " " + "card-text font6"
  }, "The . slide class adds a CSS transition and animation effect, which makes the items slide when showing a new item. Omit this class if you do not want this effect. The data-ride=\"carousel\" attribute tells Bootstrap to begin animating the carousel immediately when the page loads."), __jsx("div", {
    className: "jsx-1041883449" + " " + "card-text font6"
  }, "The . slide class adds a CSS transition and animation effect, which makes the items slide when showing a new item. Omit this class if you do not want this effect. The data-ride=\"carousel\" attribute tells Bootstrap to begin animating the carousel immediately when the page loads."), __jsx("div", {
    className: "jsx-1041883449" + " " + "menu2-specification"
  }, __jsx("h5", {
    className: "jsx-1041883449" + " " + "menu2-subcard-title font2 fontcolorSkyblue"
  }, "Specification"), __jsx("div", {
    className: "jsx-1041883449" + " " + " card-text font6"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Mic type \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 head phone")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Brand \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 MI")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Fast charging \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 Yes")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Protection \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 Plastic")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Body Type \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 Metel"))))), __jsx("div", {
    className: "jsx-1041883449" + " " + "menu2-stock-details"
  }, __jsx("h5", {
    className: "jsx-1041883449" + " " + "menu2-subcard-title font2 fontcolorSkyblue"
  }, "Stock Details"), __jsx("div", {
    className: "jsx-1041883449" + " " + " card-text font6"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Stock Qty \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 6")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Delivary type \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 cash on")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 100qty \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 40% discount")), __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 Mic type \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-specb"
  }, " \xA0 head phone"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1041883449"
  }, "h5.jsx-1041883449{font-size:1.5em;font-weight:700;line-height:1.2857em;margin-bottom:20px;}.menu2.jsx-1041883449{margin-bottom :20px;}.menu2-topic.jsx-1041883449{padding :20px 10px 10px 10px;}.menu2-speca.jsx-1041883449{font-size:1em;color:#CF570E;}.menu2-specb.jsx-1041883449{font-size:1em;color:#3E1903;}.card.jsx-1041883449{font-size:1em;overflow:hidden;padding:0;-webkit-transition:0.5s;transition:0.5s;border :none;}.card-block.jsx-1041883449{font-size:1em;position:relative;margin:0;padding:0.5em;box-shadow:none;}.card-img-top.jsx-1041883449{display:block;width:100%;height:200;}.card-title.jsx-1041883449{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.menu2-subcard-title.jsx-1041883449{font-size:1em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-1041883449{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :15px;}.card-footer.jsx-1041883449{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;}.profile.jsx-1041883449{position:absolute;top:-12px;display:inline-block;overflow:hidden;width:25px;height:25px;margin:0;}.profile-avatar.jsx-1041883449{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-1041883449{position:relative;top:0;display:inline-block;}.profile-inline.jsx-1041883449~.card-title.jsx-1041883449{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-1041883449{font-weight:700;}.meta.jsx-1041883449{font-size:1.3em;}.meta.jsx-1041883449 a.jsx-1041883449{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-1041883449{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-1041883449{color:darkorange;font-size:0.8em;}.Iprise.jsx-1041883449{color:red;font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpbmRleDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlpQixBQUdxQyxBQU1JLEFBR1MsQUFHZixBQUtBLEFBSUEsQUFRQSxBQVFBLEFBTVMsQUFPVCxBQVFILEFBT0csQUFXSSxBQVdKLEFBT0ksQUFNRyxBQU1MLEFBSUEsQUFLSyxBQUlRLEFBS1osQUFJUCxVQUNJLENBdEVFLEdBOUNELEFBS0QsQUFJRSxBQVFFLEFBUVAsQUFhSyxBQWVBLEFBc0JMLEVBdkZLLEFBMEdwQixBQUtBLENBYW9CLENBaEROLEFBa0JKLEVBeEZWLENBOEZvQixFQXpEQSxDQW9ESyxBQWtDekIsQ0EzRmUsQUFrREMsRUE3QmEsQ0E3QzdCLEFBSUEsQUEyRHlCLENBcEV6QixDQWFjLEFBNkJXLEFBZWYsRUFqRWUsQUE2QlosQ0ErRmIsR0F0RkEsQUE0QlcsQ0FzQlcsQUFZQyxFQXpERSxDQXJCTCxDQVFGLEVBcUNDLEVBNEJuQixJQXBDb0IsQUFrQkEsQ0FzQ3BCLENBaEVzQixFQWxEQyxFQThCSCxBQTBEcEIsQ0FZQSxFQWpDd0IsRUF4QkYsS0FnQnRCLEFBa0JlLENBd0NhLEdBakU1QixFQXJCQSxDQTlCQSxJQTZFZ0IsRUFqQ2hCLEFBd0JBLEVBL0NpQixPQWdHSSxDQXZDUixLQXhEYixJQTBEQSxPQXNDQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcaW5kZXgxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLy4uL2NvbXBvbmVudHMvbWVudTInO1xyXG5pbXBvcnQgU3ViTmF2YmFyIGZyb20gJy4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAgJy4vLi4vY29tcG9uZW50cy9TbGlkZTEnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY29uc3QgSW1hZ2VzaWRlPSgpPT4ge1xyXG4gICAgcmV0dXJuKFxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbjxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9saT5cclxuICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+XHJcbjwvb2w+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz1cIi4vaXRlbTEuanBnXCIgYWx0PVwiRmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz1cIi4vaXRlbTIuanBnXCIgYWx0PVwiU2Vjb25kIHNsaWRlXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIFwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPVwiLi9pdGVtMy5qcGdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbjwvYT5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG48L2E+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBjYXJkLWZvb3Rlci1idXR0b25cIj4yMDIwLzcvMDU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+ICZuYnNwOyBBZGQgdG8gQ2FydDwvYT5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2luLXRyYW5zaXQucG5nXCIvPiAmbmJzcDtPcmRlciBOb3c8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgIHtgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXItYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250ZW50c2lkZT0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPnRvcGljIGluIHNyaSBsYW5ha2E8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5oZWFkIHBob25lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPiA8c3RyaWtlPlJzLjc1MDAuMDA8L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IDMzJSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuNDUxLjI1PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIC4gc2xpZGUgY2xhc3MgYWRkcyBhIENTUyB0cmFuc2l0aW9uIGFuZCBhbmltYXRpb24gZWZmZWN0LCB3aGljaCBtYWtlcyB0aGUgaXRlbXMgc2xpZGUgd2hlbiBzaG93aW5nIGEgbmV3IGl0ZW0uIE9taXQgdGhpcyBjbGFzcyBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBlZmZlY3QuIFRoZSBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGF0dHJpYnV0ZSB0ZWxscyBCb290c3RyYXAgdG8gYmVnaW4gYW5pbWF0aW5nIHRoZSBjYXJvdXNlbCBpbW1lZGlhdGVseSB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIC4gc2xpZGUgY2xhc3MgYWRkcyBhIENTUyB0cmFuc2l0aW9uIGFuZCBhbmltYXRpb24gZWZmZWN0LCB3aGljaCBtYWtlcyB0aGUgaXRlbXMgc2xpZGUgd2hlbiBzaG93aW5nIGEgbmV3IGl0ZW0uIE9taXQgdGhpcyBjbGFzcyBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBlZmZlY3QuIFRoZSBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGF0dHJpYnV0ZSB0ZWxscyBCb290c3RyYXAgdG8gYmVnaW4gYW5pbWF0aW5nIHRoZSBjYXJvdXNlbCBpbW1lZGlhdGVseSB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TcGVjaWZpY2F0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgTWljIHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IEJyYW5kICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBNSTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgRmFzdCBjaGFyZ2luZyAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgWWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBQcm90ZWN0aW9uICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBQbGFzdGljPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBCb2R5IFR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IE1ldGVsPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXN0b2NrLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TdG9jayBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgU3RvY2sgUXR5ICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyA2PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBEZWxpdmFyeSB0eXBlICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBjYXNoIG9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyAxMDBxdHkgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IDQwJSBkaXNjb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgTWljIHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51MntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NGNTcwRSA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3BlY2J7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzRTE5MDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXN1YmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWRpc2NvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uU2lkZSA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWF0aW9uc1wiPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWFjdGlvblwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzQwLzAwMDAwMC9mYXEucG5nXCIvPjxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDYgZm9udHNpemVFLTlcIj4mbmJzcDsgV2hhdCBpcyB0aGlzPyA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLUNoYW5ha2EgU2FtcGF0aC0gb24gMjUvMDIvMjAyMDwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDtIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/IEhvdyB0byBjcmVhdGUgYSBwb3AtdXAgdG8gcHJpbnQgZGlhbG9nIGJveCB1c2luZyBKYXZhU2NyaXB0PyAgRVM2IHwgQW5pbWF0aW9uIMK3IEhvdyB0byAuLi48L3A+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1YWN0aW9uXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNDAvMDAwMDAwL2ZhcS5wbmdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/ICA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLUNoYW5ha2EgU2FtcGF0aC0gb24gMjUvMDIvMjAyMDwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDsgSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgfCBBbmltYXRpb24gwrcgSG93IHRvIC4uLjwvcD5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICB7YC5zcGFtLXRleHR7XHJcbiAgICAgICAgICAgY29sb3I6Z3JheVxyXG4gICAgICAgfVxyXG4gICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJldmlld1NpZGUgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3c1wiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvck9yYW5nZVwiPlJldmlld3MgZnJvbSBjdXN0b21lcjwvaDU+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPVwiLi9pdGVtMS5qcGdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBDaGFuYWthIFNhbmplZXdhIDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAtMjUvMDIvMjAyMC08L3NwYW0+PC9wPlxyXG4gICAgICAgIDxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDUgZm9udHdlaWdodDcwMCBmb250c2l6ZUUtOVwiPiZuYnNwOyZuYnNwOyZuYnNwO0hvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPVwiLi9pdGVtMS5qcGdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBNYXl1bmkgQWNoaW50aGlrYSA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLTI1LzAyLzIwMjAtPC9zcGFtPjwvcD5cclxuICAgICAgICA8cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ1IGZvbnR3ZWlnaHQ3MDAgZm9udHNpemVFLTlcIj4mbmJzcDsmbmJzcDsmbmJzcDtIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/IEhvdyB0byBjcmVhdGUgYSBwb3AtdXAgdG8gcHJpbnQgZGlhbG9nIGJveCB1c2luZyBKYXZhU2NyaXB0PyAgRVM2ICBBbmltYXRpb24gwrcgSG93IHRvIEhvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgXHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipzaWRlIG5hdmJhciAqL1xyXG4gICAgc2hvd3NpZGViYXIoKXtcclxuICAgICAgICB0aGlzLnJlZnMuY2hpbGQuc2hvd1NpZGViYXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQoJy5zaWxkZTJpbWFnZScpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gNDQwcHggd2lkZSB0aGVuIHR1cm4gb24galNjcm9sbFBhbmUuLlxyXG4gICAgICAgICAgICAgICAgICAvLyAgJCgnLmRpdjEnKS5hZGRDbGFzcygnZGVza3RvcCcpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLmNzcyh7J21heC1oZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5wYXJlbnQoKS5jc3MoeydoZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJywnYmFja2dyb3VuZCc6ICcjZmZmZmZmJ30pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9uIGxvYWRcclxuICAgICAgICAgICAgY2hlY2tXaWR0aCgpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tXaWR0aCk7XHJcbiAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gIC8vc2lkZSBuYXZiYXIgbGlua1xyXG4gIGNvbnN0IHNpZGVuYXZsaW5rID0gW1xyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnUyJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTMnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51NCd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU1J30sXHJcbiAgXTtcclxuICBcclxuICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdJdGVtcycsdG9waWNsaW5rOidBbGwgSXRlbXMnLHNpZGVuYXZsaW5rOnNpZGVuYXZsaW5rfTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD4gXHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2YmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzaWRlPjwvSW1hZ2VzaWRlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRzaWRlPjwvQ29udGVudHNpZGU+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25TaWRlPjwvUXVlc3Rpb25TaWRlPlxyXG4gICAgICAgICAgICAgICAgPFJldmlld1NpZGUvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\index1.js */"));
};

const QuestionSide = () => {
  return __jsx("div", {
    className: "jsx-1799564512" + " " + "menu2-quations"
  }, __jsx("hr", {
    className: "jsx-1799564512"
  }), __jsx("div", {
    className: "jsx-1799564512" + " " + "menu2-quaction"
  }, __jsx("img", {
    src: "https://img.icons8.com/cute-clipart/40/000000/faq.png",
    className: "jsx-1799564512" + " " + "float-left"
  }), __jsx("p", {
    href: "#",
    className: "jsx-1799564512" + " " + "font6 fontsizeE-9"
  }, "\xA0 What is this? ", __jsx("br", {
    className: "jsx-1799564512"
  }), " ", __jsx("spam", {
    className: "jsx-1799564512" + " " + "spam-text font3 fontsizeE-8"
  }, " -Chanaka Sampath- on 25/02/2020")), __jsx("p", {
    href: "#",
    className: "jsx-1799564512" + " " + "font3 fontsizeE-9"
  }, __jsx("img", {
    src: "https://img.icons8.com/windows/25/000000/stack-exchange-answer.png",
    className: "jsx-1799564512"
  }), " \xA0How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6 | Animation \xB7 How to ..."), __jsx("hr", {
    className: "jsx-1799564512"
  })), __jsx("div", {
    className: "jsx-1799564512" + " " + "menu2-quaction"
  }, __jsx("img", {
    src: "https://img.icons8.com/cute-clipart/40/000000/faq.png",
    className: "jsx-1799564512" + " " + "float-left"
  }), __jsx("p", {
    href: "#",
    className: "jsx-1799564512" + " " + "font6 fontsizeE-9"
  }, "\xA0 How to add/update an attribute to an HTML element using JavaScript?  ", __jsx("br", {
    className: "jsx-1799564512"
  }), " ", __jsx("spam", {
    className: "jsx-1799564512" + " " + "spam-text font3 fontsizeE-8"
  }, " -Chanaka Sampath- on 25/02/2020")), __jsx("p", {
    href: "#",
    className: "jsx-1799564512" + " " + "font3 fontsizeE-9"
  }, __jsx("img", {
    src: "https://img.icons8.com/windows/25/000000/stack-exchange-answer.png",
    className: "jsx-1799564512"
  }), " \xA0 How to create a pop-up to print dialog box using JavaScript?  ES6 | Animation \xB7 How to ..."), __jsx("hr", {
    className: "jsx-1799564512"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1799564512"
  }, ".spam-text.jsx-1799564512{color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpbmRleDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1NRLEFBR08sV0FBQyIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcaW5kZXgxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBNZW51MiBmcm9tICcuLy4uL2NvbXBvbmVudHMvbWVudTInO1xyXG5pbXBvcnQgU3ViTmF2YmFyIGZyb20gJy4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAgJy4vLi4vY29tcG9uZW50cy9TbGlkZTEnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY29uc3QgSW1hZ2VzaWRlPSgpPT4ge1xyXG4gICAgcmV0dXJuKFxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbjxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9saT5cclxuICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+XHJcbjwvb2w+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz1cIi4vaXRlbTEuanBnXCIgYWx0PVwiRmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz1cIi4vaXRlbTIuanBnXCIgYWx0PVwiU2Vjb25kIHNsaWRlXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIFwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPVwiLi9pdGVtMy5qcGdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbjwvYT5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG48L2E+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBjYXJkLWZvb3Rlci1idXR0b25cIj4yMDIwLzcvMDU8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+ICZuYnNwOyBBZGQgdG8gQ2FydDwvYT5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2luLXRyYW5zaXQucG5nXCIvPiAmbmJzcDtPcmRlciBOb3c8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgIHtgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXItYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250ZW50c2lkZT0oKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPnRvcGljIGluIHNyaSBsYW5ha2E8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT5oZWFkIHBob25lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPiA8c3RyaWtlPlJzLjc1MDAuMDA8L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IDMzJSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuNDUxLjI1PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIC4gc2xpZGUgY2xhc3MgYWRkcyBhIENTUyB0cmFuc2l0aW9uIGFuZCBhbmltYXRpb24gZWZmZWN0LCB3aGljaCBtYWtlcyB0aGUgaXRlbXMgc2xpZGUgd2hlbiBzaG93aW5nIGEgbmV3IGl0ZW0uIE9taXQgdGhpcyBjbGFzcyBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBlZmZlY3QuIFRoZSBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGF0dHJpYnV0ZSB0ZWxscyBCb290c3RyYXAgdG8gYmVnaW4gYW5pbWF0aW5nIHRoZSBjYXJvdXNlbCBpbW1lZGlhdGVseSB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgVGhlIC4gc2xpZGUgY2xhc3MgYWRkcyBhIENTUyB0cmFuc2l0aW9uIGFuZCBhbmltYXRpb24gZWZmZWN0LCB3aGljaCBtYWtlcyB0aGUgaXRlbXMgc2xpZGUgd2hlbiBzaG93aW5nIGEgbmV3IGl0ZW0uIE9taXQgdGhpcyBjbGFzcyBpZiB5b3UgZG8gbm90IHdhbnQgdGhpcyBlZmZlY3QuIFRoZSBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiIGF0dHJpYnV0ZSB0ZWxscyBCb290c3RyYXAgdG8gYmVnaW4gYW5pbWF0aW5nIHRoZSBjYXJvdXNlbCBpbW1lZGlhdGVseSB3aGVuIHRoZSBwYWdlIGxvYWRzLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TcGVjaWZpY2F0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgTWljIHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IEJyYW5kICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBNSTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgRmFzdCBjaGFyZ2luZyAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgWWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBQcm90ZWN0aW9uICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBQbGFzdGljPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBCb2R5IFR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IE1ldGVsPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXN0b2NrLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TdG9jayBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgU3RvY2sgUXR5ICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyA2PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBEZWxpdmFyeSB0eXBlICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBjYXNoIG9uPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyAxMDBxdHkgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IDQwJSBkaXNjb3VudDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgTWljIHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51MntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NGNTcwRSA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3BlY2J7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzRTE5MDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXN1YmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWRpc2NvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uU2lkZSA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWF0aW9uc1wiPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWFjdGlvblwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzQwLzAwMDAwMC9mYXEucG5nXCIvPjxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDYgZm9udHNpemVFLTlcIj4mbmJzcDsgV2hhdCBpcyB0aGlzPyA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLUNoYW5ha2EgU2FtcGF0aC0gb24gMjUvMDIvMjAyMDwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDtIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/IEhvdyB0byBjcmVhdGUgYSBwb3AtdXAgdG8gcHJpbnQgZGlhbG9nIGJveCB1c2luZyBKYXZhU2NyaXB0PyAgRVM2IHwgQW5pbWF0aW9uIMK3IEhvdyB0byAuLi48L3A+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1YWN0aW9uXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNDAvMDAwMDAwL2ZhcS5wbmdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/ICA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLUNoYW5ha2EgU2FtcGF0aC0gb24gMjUvMDIvMjAyMDwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDsgSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgfCBBbmltYXRpb24gwrcgSG93IHRvIC4uLjwvcD5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICB7YC5zcGFtLXRleHR7XHJcbiAgICAgICAgICAgY29sb3I6Z3JheVxyXG4gICAgICAgfVxyXG4gICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJldmlld1NpZGUgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3c1wiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvck9yYW5nZVwiPlJldmlld3MgZnJvbSBjdXN0b21lcjwvaDU+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPVwiLi9pdGVtMS5qcGdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBDaGFuYWthIFNhbmplZXdhIDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAtMjUvMDIvMjAyMC08L3NwYW0+PC9wPlxyXG4gICAgICAgIDxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDUgZm9udHdlaWdodDcwMCBmb250c2l6ZUUtOVwiPiZuYnNwOyZuYnNwOyZuYnNwO0hvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPVwiLi9pdGVtMS5qcGdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBNYXl1bmkgQWNoaW50aGlrYSA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLTI1LzAyLzIwMjAtPC9zcGFtPjwvcD5cclxuICAgICAgICA8cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ1IGZvbnR3ZWlnaHQ3MDAgZm9udHNpemVFLTlcIj4mbmJzcDsmbmJzcDsmbmJzcDtIb3cgdG8gYWRkL3VwZGF0ZSBhbiBhdHRyaWJ1dGUgdG8gYW4gSFRNTCBlbGVtZW50IHVzaW5nIEphdmFTY3JpcHQ/IEhvdyB0byBjcmVhdGUgYSBwb3AtdXAgdG8gcHJpbnQgZGlhbG9nIGJveCB1c2luZyBKYXZhU2NyaXB0PyAgRVM2ICBBbmltYXRpb24gwrcgSG93IHRvIEhvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgXHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvKipzaWRlIG5hdmJhciAqL1xyXG4gICAgc2hvd3NpZGViYXIoKXtcclxuICAgICAgICB0aGlzLnJlZnMuY2hpbGQuc2hvd1NpZGViYXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQoJy5zaWxkZTJpbWFnZScpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gNDQwcHggd2lkZSB0aGVuIHR1cm4gb24galNjcm9sbFBhbmUuLlxyXG4gICAgICAgICAgICAgICAgICAvLyAgJCgnLmRpdjEnKS5hZGRDbGFzcygnZGVza3RvcCcpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLmNzcyh7J21heC1oZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5wYXJlbnQoKS5jc3MoeydoZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJywnYmFja2dyb3VuZCc6ICcjZmZmZmZmJ30pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9uIGxvYWRcclxuICAgICAgICAgICAgY2hlY2tXaWR0aCgpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tXaWR0aCk7XHJcbiAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gIC8vc2lkZSBuYXZiYXIgbGlua1xyXG4gIGNvbnN0IHNpZGVuYXZsaW5rID0gW1xyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnUyJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTMnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51NCd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU1J30sXHJcbiAgXTtcclxuICBcclxuICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdJdGVtcycsdG9waWNsaW5rOidBbGwgSXRlbXMnLHNpZGVuYXZsaW5rOnNpZGVuYXZsaW5rfTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD4gXHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2YmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzaWRlPjwvSW1hZ2VzaWRlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRzaWRlPjwvQ29udGVudHNpZGU+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25TaWRlPjwvUXVlc3Rpb25TaWRlPlxyXG4gICAgICAgICAgICAgICAgPFJldmlld1NpZGUvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\index1.js */"));
};

const ReviewSide = () => {
  return __jsx("div", {
    className: "jsx-2331023016" + " " + "menu2-reviews"
  }, __jsx("h5", {
    className: "jsx-2331023016" + " " + "menu2-subcard-title font2 fontcolorOrange"
  }, "Reviews from customer"), __jsx("hr", {
    className: "jsx-2331023016"
  }), __jsx("div", {
    className: "jsx-2331023016" + " " + "menu2-reviews"
  }, __jsx("img", {
    src: "./item1.jpg",
    className: "jsx-2331023016" + " " + "float-left avatar"
  }), __jsx("p", {
    href: "#",
    className: "jsx-2331023016" + " " + "font6 fontsizeE-9"
  }, "\xA0 Chanaka Sanjeewa ", __jsx("br", {
    className: "jsx-2331023016"
  }), " ", __jsx("spam", {
    className: "jsx-2331023016" + " " + "spam-text font3 fontsizeE-8"
  }, " -25/02/2020-")), __jsx("p", {
    href: "#",
    className: "jsx-2331023016" + " " + "font5 fontweight700 fontsizeE-9"
  }, "\xA0\xA0\xA0How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6  Animation \xB7 How to "), __jsx("hr", {
    className: "jsx-2331023016"
  })), __jsx("div", {
    className: "jsx-2331023016" + " " + "menu2-reviews"
  }, __jsx("img", {
    src: "./item1.jpg",
    className: "jsx-2331023016" + " " + "float-left avatar"
  }), __jsx("p", {
    href: "#",
    className: "jsx-2331023016" + " " + "font6 fontsizeE-9"
  }, "\xA0 Mayuni Achinthika ", __jsx("br", {
    className: "jsx-2331023016"
  }), " ", __jsx("spam", {
    className: "jsx-2331023016" + " " + "spam-text font3 fontsizeE-8"
  }, " -25/02/2020-")), __jsx("p", {
    href: "#",
    className: "jsx-2331023016" + " " + "font5 fontweight700 fontsizeE-9"
  }, "\xA0\xA0\xA0How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6  Animation \xB7 How to How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6  Animation \xB7 How to "), __jsx("hr", {
    className: "jsx-2331023016"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2331023016"
  }, ".spam-text.jsx-2331023016{color:gray;}.avatar.jsx-2331023016{vertical-align:middle;width:40px;height:40px;border-radius:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpbmRleDEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1VRLEFBR08sQUFFd0IsV0FGdkIsV0FHWSxXQUNDLFlBQ00sa0JBQ3BCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpbmRleDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IE1lbnUyIGZyb20gJy4vLi4vY29tcG9uZW50cy9tZW51Mic7XHJcbmltcG9ydCBTdWJOYXZiYXIgZnJvbSAnLi8uLi9sYXlvdXRzL1N1Yk5hdmJhcic7XHJcbmltcG9ydCBTbGlkZSBmcm9tICAnLi8uLi9jb21wb25lbnRzL1NsaWRlMSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCBJbWFnZXNpZGU9KCk9PiB7XHJcbiAgICByZXR1cm4oXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjBcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj48L2xpPlxyXG4gICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+XHJcbiAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuPC9vbD5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPVwiLi9pdGVtMS5qcGdcIiBhbHQ9XCJGaXJzdCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pdGVtIFwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPVwiLi9pdGVtMi5qcGdcIiBhbHQ9XCJTZWNvbmQgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWl0ZW0gXCI+XHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgc2lsZGUyaW1hZ2VcIiBzcmM9XCIuL2l0ZW0zLmpwZ1wiIGFsdD1cIlRoaXJkIHNsaWRlXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuPC9hPlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcbjwvYT5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQzIGNhcmQtZm9vdGVyLWJ1dHRvblwiPjIwMjAvNy8wNTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9mYXZvcml0ZS1jYXJ0LnBuZ1wiLz4gJm5ic3A7IEFkZCB0byBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvaW4tdHJhbnNpdC5wbmdcIi8+ICZuYnNwO09yZGVyIE5vdzwvYT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICAge2AgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWZvb3Rlci1idXR0b257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbnRlbnRzaWRlPSgpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+dG9waWMgaW4gc3JpIGxhbmFrYTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPmhlYWQgcGhvbmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+IDxzdHJpa2U+UnMuNzUwMC4wMDwvc3RyaWtlPiAgPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4gMzMlIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy40NTEuMjU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgLiBzbGlkZSBjbGFzcyBhZGRzIGEgQ1NTIHRyYW5zaXRpb24gYW5kIGFuaW1hdGlvbiBlZmZlY3QsIHdoaWNoIG1ha2VzIHRoZSBpdGVtcyBzbGlkZSB3aGVuIHNob3dpbmcgYSBuZXcgaXRlbS4gT21pdCB0aGlzIGNsYXNzIGlmIHlvdSBkbyBub3Qgd2FudCB0aGlzIGVmZmVjdC4gVGhlIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgYXR0cmlidXRlIHRlbGxzIEJvb3RzdHJhcCB0byBiZWdpbiBhbmltYXRpbmcgdGhlIGNhcm91c2VsIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHBhZ2UgbG9hZHMuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICBUaGUgLiBzbGlkZSBjbGFzcyBhZGRzIGEgQ1NTIHRyYW5zaXRpb24gYW5kIGFuaW1hdGlvbiBlZmZlY3QsIHdoaWNoIG1ha2VzIHRoZSBpdGVtcyBzbGlkZSB3aGVuIHNob3dpbmcgYSBuZXcgaXRlbS4gT21pdCB0aGlzIGNsYXNzIGlmIHlvdSBkbyBub3Qgd2FudCB0aGlzIGVmZmVjdC4gVGhlIGRhdGEtcmlkZT1cImNhcm91c2VsXCIgYXR0cmlidXRlIHRlbGxzIEJvb3RzdHJhcCB0byBiZWdpbiBhbmltYXRpbmcgdGhlIGNhcm91c2VsIGltbWVkaWF0ZWx5IHdoZW4gdGhlIHBhZ2UgbG9hZHMuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPlNwZWNpZmljYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBNaWMgdHlwZSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgaGVhZCBwaG9uZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsgQnJhbmQgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IE1JPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBGYXN0IGNoYXJnaW5nICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNiXCI+ICZuYnNwOyBZZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IFByb3RlY3Rpb24gJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IFBsYXN0aWM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IEJvZHkgVHlwZSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgTWV0ZWw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItc3RvY2stZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPlN0b2NrIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBTdG9jayBRdHkgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IDY8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IERlbGl2YXJ5IHR5cGUgJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2JcIj4gJm5ic3A7IGNhc2ggb248L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IDEwMHF0eSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgNDAlIGRpc2NvdW50PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyBNaWMgdHlwZSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYlwiPiAmbmJzcDsgaGVhZCBwaG9uZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXNwZWNhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0Y1NzBFIDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNFMTkwMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3ViY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25TaWRlID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1YXRpb25zXCI+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1YWN0aW9uXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNDAvMDAwMDAwL2ZhcS5wbmdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyBXaGF0IGlzIHRoaXM/IDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAtQ2hhbmFrYSBTYW1wYXRoLSBvbiAyNS8wMi8yMDIwPC9zcGFtPjwvcD5cclxuICAgICAgICA8cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQzIGZvbnRzaXplRS05XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL3dpbmRvd3MvMjUvMDAwMDAwL3N0YWNrLWV4Y2hhbmdlLWFuc3dlci5wbmdcIi8+ICZuYnNwO0hvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgfCBBbmltYXRpb24gwrcgSG93IHRvIC4uLjwvcD5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcXVhY3Rpb25cIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2N1dGUtY2xpcGFydC80MC8wMDAwMDAvZmFxLnBuZ1wiLz48cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IEhvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gIDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAtQ2hhbmFrYSBTYW1wYXRoLSBvbiAyNS8wMi8yMDIwPC9zcGFtPjwvcD5cclxuICAgICAgICA8cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQzIGZvbnRzaXplRS05XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL3dpbmRvd3MvMjUvMDAwMDAwL3N0YWNrLWV4Y2hhbmdlLWFuc3dlci5wbmdcIi8+ICZuYnNwOyBIb3cgdG8gY3JlYXRlIGEgcG9wLXVwIHRvIHByaW50IGRpYWxvZyBib3ggdXNpbmcgSmF2YVNjcmlwdD8gIEVTNiB8IEFuaW1hdGlvbiDCtyBIb3cgdG8gLi4uPC9wPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICBgfVxyXG4gICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUmV2aWV3U2lkZSA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1yZXZpZXdzXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yT3JhbmdlXCI+UmV2aWV3cyBmcm9tIGN1c3RvbWVyPC9oNT5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3c1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBhdmF0YXJcIiBzcmM9XCIuL2l0ZW0xLmpwZ1wiLz48cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IENoYW5ha2EgU2FuamVld2EgPGJyLz4gPHNwYW0gY2xhc3NOYW1lPVwic3BhbS10ZXh0IGZvbnQzIGZvbnRzaXplRS04XCI+IC0yNS8wMi8yMDIwLTwvc3BhbT48L3A+XHJcbiAgICAgICAgPHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NSBmb250d2VpZ2h0NzAwIGZvbnRzaXplRS05XCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7SG93IHRvIGFkZC91cGRhdGUgYW4gYXR0cmlidXRlIHRvIGFuIEhUTUwgZWxlbWVudCB1c2luZyBKYXZhU2NyaXB0PyBIb3cgdG8gY3JlYXRlIGEgcG9wLXVwIHRvIHByaW50IGRpYWxvZyBib3ggdXNpbmcgSmF2YVNjcmlwdD8gIEVTNiAgQW5pbWF0aW9uIMK3IEhvdyB0byA8L3A+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3c1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBhdmF0YXJcIiBzcmM9XCIuL2l0ZW0xLmpwZ1wiLz48cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IE1heXVuaSBBY2hpbnRoaWthIDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAtMjUvMDIvMjAyMC08L3NwYW0+PC9wPlxyXG4gICAgICAgIDxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDUgZm9udHdlaWdodDcwMCBmb250c2l6ZUUtOVwiPiZuYnNwOyZuYnNwOyZuYnNwO0hvdyB0byBhZGQvdXBkYXRlIGFuIGF0dHJpYnV0ZSB0byBhbiBIVE1MIGVsZW1lbnQgdXNpbmcgSmF2YVNjcmlwdD8gSG93IHRvIGNyZWF0ZSBhIHBvcC11cCB0byBwcmludCBkaWFsb2cgYm94IHVzaW5nIEphdmFTY3JpcHQ/ICBFUzYgIEFuaW1hdGlvbiDCtyBIb3cgdG8gSG93IHRvIGFkZC91cGRhdGUgYW4gYXR0cmlidXRlIHRvIGFuIEhUTUwgZWxlbWVudCB1c2luZyBKYXZhU2NyaXB0PyBIb3cgdG8gY3JlYXRlIGEgcG9wLXVwIHRvIHByaW50IGRpYWxvZyBib3ggdXNpbmcgSmF2YVNjcmlwdD8gIEVTNiAgQW5pbWF0aW9uIMK3IEhvdyB0byA8L3A+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICBcclxuICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAge2Auc3BhbS10ZXh0e1xyXG4gICAgICAgICAgIGNvbG9yOmdyYXlcclxuICAgICAgIH1cclxuICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8qKnNpZGUgbmF2YmFyICovXHJcbiAgICBzaG93c2lkZWJhcigpe1xyXG4gICAgICAgIHRoaXMucmVmcy5jaGlsZC5zaG93U2lkZWJhcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1dpZHRoKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCgnLnNpbGRlMmltYWdlJykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3doZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgd2luZG93IGlzIGdyZWF0ZXIgdGhhbiA0NDBweCB3aWRlIHRoZW4gdHVybiBvbiBqU2Nyb2xsUGFuZS4uXHJcbiAgICAgICAgICAgICAgICAgIC8vICAkKCcuZGl2MScpLmFkZENsYXNzKCdkZXNrdG9wJylcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMmltYWdlJykuY3NzKHsnbWF4LWhlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLnBhcmVudCgpLmNzcyh7J2hlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnLCdiYWNrZ3JvdW5kJzogJyNmZmZmZmYnfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuXHJcbiAgLy9zaWRlIG5hdmJhciBsaW5rXHJcbiAgY29uc3Qgc2lkZW5hdmxpbmsgPSBbXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonaG9tZSd9LFxyXG4gICAge2lkOjEsbGluazonL21lbnUnLGxpbmtuYW1lOidtZW51J30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTInfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51Myd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU0J30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTUnfSxcclxuICBdO1xyXG4gIFxyXG4gICAgY29uc3Qgc2lkZW5hdmNvbnN0ID0ge3RvcGljIDogJ0l0ZW1zJyx0b3BpY2xpbms6J0FsbCBJdGVtcycsc2lkZW5hdmxpbms6c2lkZW5hdmxpbmt9O1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PiBcclxuICAgICAgICAgICAgICAgIDxTdWJOYXZiYXIgc2lkZW5hdmNvbnN0PXtzaWRlbmF2Y29uc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNpZGU+PC9JbWFnZXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHNpZGU+PC9Db250ZW50c2lkZT5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvblNpZGU+PC9RdWVzdGlvblNpZGU+XHJcbiAgICAgICAgICAgICAgICA8UmV2aWV3U2lkZS8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\index1.js */"));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  /**side navbar */
  showsidebar() {
    this.refs.child.showSidebar();
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).ready(function () {
      function checkWidth() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_7___default()('.silde2image').width();
        var windowheight = jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).height(); //if the window is greater than 440px wide then turn on jScrollPane..
        //  $('.div1').addClass('desktop')

        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.silde2image').css({
          'max-height': windowwidth / 3 * 2,
          'width': '100%'
        });
        jquery__WEBPACK_IMPORTED_MODULE_7___default()('.silde2image').parent().css({
          'height': windowwidth / 3 * 2,
          'width': '100%',
          'background': '#ffffff'
        });
      } // Execute on load


      checkWidth(); // Bind event listener

      jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).resize(checkWidth);
    });
  }

  render() {
    //side navbar link
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
      linkname: 'newmenu2'
    }, {
      id: 1,
      link: '/',
      linkname: 'newmenu3'
    }, {
      id: 1,
      link: '/',
      linkname: 'newmenu4'
    }, {
      id: 1,
      link: '/',
      linkname: 'newmenu5'
    }];
    const sidenavconst = {
      topic: 'Items',
      topiclink: 'All Items',
      sidenavlink: sidenavlink
    }; //////////////

    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sidenavconst: sidenavconst
    }), __jsx("br", null), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx(Imageside, null), __jsx(Contentside, null), __jsx(QuestionSide, null), __jsx(ReviewSide, null))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index1.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\index1.js */"./pages/index1.js");


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
//# sourceMappingURL=index1.js.map