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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
          jquery__WEBPACK_IMPORTED_MODULE_4___default()('#background-signin').css({
            'display': 'none'
          }).removeClass('visual-signup');
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
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#background-signin').css({
          'display': 'flex'
        }).addClass('visual-signup');
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#logreg-forms').addClass('animationSignup');
      });
    });

    _defineProperty(this, "hidesignup", () => {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()('#background-signin').css({
          'display': 'none'
        }).removeClass('visual-signup');
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
      className: "jsx-4001438521"
    }, __jsx("div", {
      id: "logreg-forms",
      className: "jsx-4001438521" + " " + "col-lg-4 col-md-8 col-sm-12"
    }, __jsx("div", {
      className: "jsx-4001438521" + " " + "popup-close"
    }, "x"), __jsx("br", {
      className: "jsx-4001438521"
    }), __jsx("h3", {
      className: "jsx-4001438521" + " " + "h3 mb-3 font6 topicColor .fontsizeE-6"
    }, " Sign in"), __jsx("div", {
      className: "jsx-4001438521" + " " + "social-login row col-12"
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
      className: "jsx-4001438521" + " " + "btn facebook-btn social-btn col-lg-6 col-sm-12"
    }, __jsx("span", {
      className: "jsx-4001438521"
    }, __jsx("i", {
      className: "jsx-4001438521" + " " + "fab fa-facebook-f"
    }), " Sign in with Facebook"), " ")), __jsx("hr", {
      className: "jsx-4001438521"
    }), __jsx("h3", {
      className: "jsx-4001438521" + " " + "h3 mb-3 font6 topicColor .fontsizeE-6"
    }, " Sign up"), __jsx("form", {
      className: "jsx-4001438521"
    }, __jsx("div", {
      className: "jsx-4001438521" + " " + "form-group"
    }, __jsx("label", {
      for: "exampleInputAddress",
      className: "jsx-4001438521" + " " + "font6"
    }, "address"), __jsx("input", {
      type: "email",
      name: "address",
      placeholder: "Enter Address",
      value: this.state.address,
      onChange: this.handleChange,
      className: "jsx-4001438521" + " " + "form-control"
    })), __jsx("div", {
      className: "jsx-4001438521" + " " + "form-group"
    }, __jsx("label", {
      for: "exampleInputAddress",
      className: "jsx-4001438521" + " " + "font6"
    }, "Contact"), __jsx("input", {
      type: "email",
      id: "exampleInputAddress",
      placeholder: "Enter Contact",
      name: "contact",
      value: this.state.contact,
      onChange: this.handleChange,
      className: "jsx-4001438521" + " " + "form-control"
    })), __jsx("div", {
      className: "jsx-4001438521" + " " + "form-check"
    }, __jsx("input", {
      type: "checkbox",
      className: "jsx-4001438521" + " " + "form-check-input"
    }), __jsx("label", {
      className: "form-check-label",
      for: "exampleCheck1",
      className: "jsx-4001438521" + " " + "font6"
    }, "Sign up as Seller")), __jsx("small", {
      id: "emailHelp",
      className: "jsx-4001438521" + " " + "form-text text-muted"
    }, "We'll never share your details with anyone else."), __jsx("div", {
      className: "jsx-4001438521" + " " + "social-login row col-12"
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
      className: "jsx-4001438521" + " " + "btn facebook-btn social-btn col-lg-6 col-sm-12"
    }, __jsx("span", {
      className: "jsx-4001438521"
    }, __jsx("i", {
      className: "jsx-4001438521" + " " + "fab fa-facebook-f"
    }), " Sign in with Facebook"), " "))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4001438521"
    }, ".visual-signup.jsx-4001438521{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 1s cubic-bezier(0,0,0.3,1);transition:transform 1s cubic-bezier(0,0,0.3,1);}.popup-close.jsx-4001438521{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:darkred;cursor:pointer;font-size:1.0rem;width:2.0rem;height:2.0rem;top:0.5rem;right:0.5rem;position:absolute;border-radius:100%;}#background-signin.jsx-4001438521{width:100%;background:rgba(0,0,0,0.8);font-family:\"Robato\",sans-serif;font-size:17px;display:none;z-index:100;position:fixed;left:0;top:0;width:100%;height:100%;}#logreg-forms.jsx-4001438521{box-shadow:0 7px 7px rgba(0,0,0,0.12),0 12px 40px rgba(0,0,0,0.24);margin:10vh auto;background-color:lightgray;overflow:auto;}#logreg-forms.jsx-4001438521 form.jsx-4001438521{width:100%;padding:15px;margin:auto;}#logreg-forms.jsx-4001438521 .form-control.jsx-4001438521{position:relative;box-sizing:border-box;height:auto;padding:10px;font-size:16px;}#logreg-forms.jsx-4001438521 .form-control.jsx-4001438521:focus{z-index:2;}#logreg-forms.jsx-4001438521 .form-signin.jsx-4001438521 input[type=\"email\"].jsx-4001438521{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0;}#logreg-forms.jsx-4001438521 .form-signin.jsx-4001438521 input[type=\"password\"].jsx-4001438521{border-top-left-radius:0;border-top-right-radius:0;}#logreg-forms.jsx-4001438521 .social-login.jsx-4001438521{margin:0 auto;margin-bottom:14px;}#logreg-forms.jsx-4001438521 .social-btn.jsx-4001438521{font-weight:100;color:white;font-size:0.9rem;}#logreg-forms.jsx-4001438521 a.jsx-4001438521{display:block;padding-top:10px;color:#fff;}#logreg-form.jsx-4001438521 .lines.jsx-4001438521{width:200px;border:1px solid red;}#logreg-forms.jsx-4001438521 button[type=\"submit\"].jsx-4001438521{margin-top:10px;}#logreg-forms.jsx-4001438521 .facebook-btn.jsx-4001438521{background-color:#3C589C;}#logreg-forms.jsx-4001438521 .google-btn.jsx-4001438521{background-color:#DF4B3B;}#logreg-forms.jsx-4001438521 .form-reset.jsx-4001438521,#logreg-forms.jsx-4001438521 .form-signup.jsx-4001438521{display:none;}#logreg-forms.jsx-4001438521 .form-signup.jsx-4001438521 .social-btn.jsx-4001438521{width:210px;}#logreg-forms.jsx-4001438521 .form-signup.jsx-4001438521 input.jsx-4001438521{margin-bottom:2px;}.form-signup.jsx-4001438521 .social-login.jsx-4001438521{margin:0 auto;}.submit.jsx-4001438521{background:-webkit-linear-gradient(0deg,#2dfbff 0%,#3c96ff 100%);border-radius:25px;color:#fff;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms{width:300px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-login.jsx-4001438521{width:200px;margin:0 auto;margin-bottom:10px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-btn.jsx-4001438521{font-size:1.3rem;font-weight:100;color:white;height:56px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-btn.jsx-4001438521:nth-child(1){margin-bottom:5px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-btn.jsx-4001438521 span.jsx-4001438521{display:none;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .facebook-btn.jsx-4001438521:after{content:'Facebook';}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .google-btn.jsx-4001438521:after{content:'Google+';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2TEMsQUFLd0QsQUFJMUMsQUFlRSxBQWdCNEQsQUFRMUQsQUFNTyxBQU11QixBQUV0QixBQUtNLEFBTVosQUFJRyxBQU1GLEFBTUgsQUFLb0MsQUFFRSxBQUVGLEFBRWdCLEFBRWpCLEFBRUUsQUFHbEMsQUFJb0QsQUFTbkQsQUFJQSxBQUtNLEFBT0MsQUFHTCxBQUdLLEFBSUQsVUF0RnFCLENBbkNqQixBQXlCWixDQXhDTCxBQWdGWSxBQVkyQixBQW1CL0MsQUFJaUIsQ0F6QitDLEFBd0NoRSxDQWxFbUIsQUFVSCxBQXdCcEIsRUE5QmUsQUFnQnFDLENBb0M1QixDQTNFRSxBQWlEMkIsQUFpQ2pELEFBVUEsQ0FwRjZCLEFBZ0Y3QixLQTVGWSxDQWlCYyxBQTRCd0IsQUFFRixDQTRCekIsRUEvQ04sR0FNUCxFQVZkLEFBZ0JBLEFBd0NtQixHQS9FbkIsRUExQmtDLEVBOEJsQixFQThCaEIsR0FOQSxBQStDSSxBQUtnQixHQXBFWSxHQUtoQyxDQVppQixLQTZFYixRQTVFZSxBQXNERSxFQXZFRCxHQWRILE1Bc0NqQixJQU5BLElBakIrQixBQXVFbEIsQ0FyRkMsQ0FqQkksU0F1R2xCLEdBckZhLFlBQ0ksQ0FhQyxjQVpULEFBY1QsT0FiUSxNQUNLLFdBQ0MsWUFHZCxPQTlCRixXQUt3QixtR0FDSixtQkFDSixlQUNFLGlCQUNKLGFBQ0MsY0FDSCxXQUNFLGFBQ0ssa0JBQ0MsbUJBQ3BCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXHNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgICAgICBhZGRyZXNzIDogJycsXHJcbiAgICAgICAgICAgIGNvbnRhY3QgOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6JycsXHJcbiAgICAgICAgICAgIGdvb2dsZUlkOicnLFxyXG4gICAgICAgICAgICBnaXZlbk5hbWU6JycsXHJcbiAgICAgICAgICAgIGZhbWlseU5hbWU6JycsXHJcbiAgICAgICAgICAgIHRva2VuOicnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQ9ICgpPT4ge1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICBcclxuICAgICAgICAkKCcucG9wdXAtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnI2JhY2tncm91bmQtc2lnbmluJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSkucmVtb3ZlQ2xhc3MoJ3Zpc3VhbC1zaWdudXAnKTtcclxuICAgICAgICB9KVxyXG5cclxuICBcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgIC8vIFRoaXMgdHJpZ2dlcnMgZXZlcnl0aW1lIHRoZSBpbnB1dCBpcyBjaGFuZ2VkXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiBldnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLmNvbnRhY3QubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5yZXNwb25zZS5wcm9maWxlT2JqLFxyXG4gICAgICAgICAgICB0b2tlbjpyZXNwb25zZS50b2tlbklkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgYWxlcnQoJ1RoZXJlIHNob3VsZCBiZSBjb250YWN0IGRldGFpbHMuJylcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXNwb25zZUdvb2dsZVNpZ25JbiA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgdGhpcy5oaWRlc2lnbnVwKCk7ICBcclxuICAgIHZhciByZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5yZXNwb25zZS5wcm9maWxlT2JqLFxyXG4gICAgICAgICAgICB0b2tlbjpyZXNwb25zZS50b2tlbklkXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgIGRhdGFzLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgIGRhdGFzLmFwcGVuZCgndG9rZW4nLCByZXNwb25zZS50b2tlbklkKTtcclxuICAgICAgICAgZmV0Y2goJy9hcGkvc2lnbmludXNlcicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YXMsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSAhPSB1bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTsgQ29va2llLnNldCgndXNlcicsZGF0YSl9fSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGVzaWdudXAoKTsgXHJcbiAgLy8gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YXMgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgLy8gZGF0YXMuYXBwZW5kKCdmaWxlJywgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xyXG4gICAgZGF0YXMuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICAgZmV0Y2goJy9hcGkvY3JlYXRldXNlcicsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8nQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAvLydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgIH0sIFxyXG4gICAgYm9keTpkYXRhcyxcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIClcclxuICAgIHRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhKXthbGVydChkYXRhLm1zZyk7IENvb2tpZS5zZXQoJ3VzZXInLGRhdGEpOyAgfX0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgXHJcblxyXG59O1xyXG5cclxuXHJcbiAgc2hvd3NpZ251cD0oKT0+e1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI2JhY2tncm91bmQtc2lnbmluJykuY3NzKHsnZGlzcGxheSc6J2ZsZXgnfSkuYWRkQ2xhc3MoJ3Zpc3VhbC1zaWdudXAnKTtcclxuICAgICAgICAkKCcjbG9ncmVnLWZvcm1zJykuYWRkQ2xhc3MoJ2FuaW1hdGlvblNpZ251cCcpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGlkZXNpZ251cD0oKT0+e1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNiYWNrZ3JvdW5kLXNpZ25pbicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pLnJlbW92ZUNsYXNzKCd2aXN1YWwtc2lnbnVwJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxucmVuZGVyKCl7XHJcblxyXG4gIHJldHVybihcclxuPExheW91dD5cclxuXHJcbjxkaXYgaWQ9XCJiYWNrZ3JvdW5kLXNpZ25pblwiPlxyXG5cclxuXHJcbiAgICA8ZGl2IGlkPVwibG9ncmVnLWZvcm1zXCIgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTggY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlXCI+eDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDMgbWItMyBmb250NiB0b3BpY0NvbG9yIC5mb250c2l6ZUUtNlwiID4gU2lnbiBpbjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIHJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjUxMTg4MDY3NDkwMS1nZm42djJuMWVqNjVycmxubnYyOW9kZ2Jqa3BraHBjai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlNpZ24gaW4gd2l0aCBHb29nbGUrXCJcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3RoaXMucmVzcG9uc2VHb29nbGVTaWduSW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXt0aGlzLnJlc3BvbnNlR29vZ2xlU2lnbklufVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdvb2dsZS1idG4gc29jaWFsLWJ0biBjb2wtbGctNiBjb2wtc20tMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZhY2Vib29rLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy02IGNvbC1zbS0xMlwiIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gU2lnbiBpbiB3aXRoIEZhY2Vib29rPC9zcGFuPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMyBtYi0zIGZvbnQ2IHRvcGljQ29sb3IgLmZvbnRzaXplRS02XCIgPiBTaWduIHVwPC9oMz5cclxuICAgICAgICAgICAgPGZvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRBZGRyZXNzXCIgY2xhc3NOYW1lPVwiZm9udDZcIj5hZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzc1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0QWRkcmVzc1wiIGNsYXNzTmFtZT1cImZvbnQ2XCI+Q29udGFjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRBZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb250YWN0XCIgbmFtZT1cImNvbnRhY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250YWN0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJleGFtcGxlQ2hlY2sxXCIgY2xhc3NOYW1lPVwiZm9udDZcIj5TaWduIHVwIGFzIFNlbGxlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscyB3aXRoIGFueW9uZSBlbHNlLjwvc21hbGw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIHJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJTaWduIGluIHdpdGggR29vZ2xlK1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXt0aGlzLnJlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5yZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBnb29nbGUtYnRuIHNvY2lhbC1idG4gY29sLWxnLTYgY29sLXNtLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmYWNlYm9vay1idG4gc29jaWFsLWJ0biBjb2wtbGctNiBjb2wtc20tMTJcIiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+IFNpZ24gaW4gd2l0aCBGYWNlYm9vazwvc3Bhbj4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxzdHlsZSBqc3g+XHJcbntgXHJcblxyXG5cclxuLnZpc3VhbC1zaWdudXAge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpO1xyXG5cclxufVxyXG4ucG9wdXAtY2xvc2Uge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogZGFya3JlZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjByZW07XHJcblx0d2lkdGg6IDIuMHJlbTtcclxuXHRoZWlnaHQ6IDIuMHJlbTtcclxuXHR0b3A6IDAuNXJlbTtcclxuXHRyaWdodDogMC41cmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiNiYWNrZ3JvdW5kLXNpZ25pbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9iYXRvXCIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1ze1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTJweCA0MHB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgIG1hcmdpbjoxMHZoIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sOmZvY3VzIHsgei1pbmRleDogMjsgfVxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAjbG9ncmVnLWZvcm1zIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWxvZ2lue1xyXG5cclxuICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0bntcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGF7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm0gLmxpbmVze1xyXG4gICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17IG1hcmdpbi10b3A6MTBweDsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZhY2Vib29rLWJ0bnsgIGJhY2tncm91bmQtY29sb3I6IzNDNTg5QzsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmdvb2dsZS1idG57IGJhY2tncm91bmQtY29sb3I6ICNERjRCM0I7fVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tcmVzZXQsICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbnVweyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWdudXAgLnNvY2lhbC1idG57IHdpZHRoOjIxMHB4OyB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWdudXAgaW5wdXQgeyBtYXJnaW4tYm90dG9tOiAycHg7fVxyXG4gIFxyXG4gIC5mb3JtLXNpZ251cCAuc29jaWFsLWxvZ2lue1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsICAjMmRmYmZmIDAlLCAjM2M5NmZmIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAvKiBNb2JpbGUgKi9cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAgICAgI2xvZ3JlZy1mb3Jtc3tcclxuICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5zb2NpYWwtbG9naW57XHJcbiAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5zb2NpYWwtYnRue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0bjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0biBzcGFue1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAjbG9ncmVnLWZvcm1zICAuZmFjZWJvb2stYnRuOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDonRmFjZWJvb2snO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5nb29nbGUtYnRuOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDonR29vZ2xlKyc7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5gfVxyXG48L3N0eWxlPlxyXG5cclxuPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\signup.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./constant/main.js":
/*!**************************!*\
  !*** ./constant/main.js ***!
  \**************************/
/*! exports provided: Url, ImageUrl, NavLink, Catageries, Subtype, GetSubtype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUrl", function() { return ImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catageries", function() { return Catageries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtype", function() { return Subtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSubtype", function() { return GetSubtype; });
const Url = 'http://localhost:8000/api/';
const ImageUrl = 'http://localhost:8000/Images/';
const NavLink = [{
  url: '/',
  urlname: 'home'
}, {
  url: '/myshop/:id',
  urlname: 'myshop'
}, {
  url: '/create-shop',
  urlname: 'create-shop'
}, {
  url: '/create-item',
  urlname: 'create-item'
}, {
  url: '/index1',
  urlname: 'index1'
}, {
  url: '/index2',
  urlname: 'index2'
}, {
  url: '/index3',
  urlname: 'index3'
}, {
  url: '/index4',
  urlname: 'index4'
}];
const Catageries = [{
  type: 'vegitable',
  name: 'vegitable',
  subtype: [{
    name: 'abc'
  }, {
    name: 'cdh'
  }, {
    name: 'djkn'
  }, {
    name: 'njkb'
  }]
}, {
  type: 'electronic',
  name: 'electronic',
  subtype: [{
    name: 'fbd'
  }, {
    name: 'cdh'
  }, {
    name: 'djkn'
  }, {
    name: 'njkb'
  }]
}, {
  type: 'vehicle',
  name: 'vehicle',
  subtype: [{
    name: 'ayjubc'
  }, {
    name: 'cdh'
  }, {
    name: 'djkn'
  }, {
    name: 'njkb'
  }]
}];
const Subtype = [{
  type: 'vegitable',
  name: 'vegitable',
  subtype: [{
    name: 'abc'
  }, {
    name: 'cdh'
  }, {
    name: 'djkn'
  }, {
    name: 'njkb'
  }]
}, {
  type: 'electronic',
  name: 'electronic',
  subtype: [{
    name: 'abc'
  }, {
    name: 'cdh'
  }, {
    name: 'djkn'
  }, {
    name: 'njkb'
  }]
}, {
  type: 'vehicle',
  name: 'vehicle',
  subtype: [{
    name: 'abc'
  }, {
    name: 'cdh'
  }, {
    name: 'djkn'
  }, {
    name: 'njkb'
  }]
}];
const GetSubtype = () => {
  return [{
    type: 'vegitable',
    name: 'vegitable',
    subtype: [{
      name: 'abc'
    }, {
      name: 'cdh'
    }, {
      name: 'djkn'
    }, {
      name: 'njkb'
    }]
  }, {
    type: 'electronic',
    name: 'electronic',
    subtype: [{
      name: 'abc'
    }, {
      name: 'cdh'
    }, {
      name: 'djkn'
    }, {
      name: 'njkb'
    }]
  }, {
    type: 'vehicle',
    name: 'vehicle',
    subtype: [{
      name: 'abc'
    }, {
      name: 'cdh'
    }, {
      name: 'djkn'
    }, {
      name: 'njkb'
    }]
  }];
};

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
      className: "jsx-3368045634"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-3368045634"
    }, "Agency - Start Bootstrap Theme"), __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      className: "jsx-3368045634"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossorigin: "anonymous",
      className: "jsx-3368045634"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-3368045634"
    })), this.props.children, __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossorigin: "anonymous",
      className: "jsx-3368045634"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossorigin: "anonymous",
      className: "jsx-3368045634"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossorigin: "anonymous",
      className: "jsx-3368045634"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3368045634"
    }, ".font1{font-family:'Trade Winds',cursive;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.25em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontsizeE2-25{font-size :2.25em;}.fontweight700{font-weight :700;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RJLEFBU3dDLEFBR0YsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUlqQixBQUdKLEFBR0UsQUFHSSxBQUdBLEFBR0EsQUFHQyxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFHRyxBQUdELEFBR0YsQUFHRyxBQUlwQixXQTdDQyxFQUdBLEVBTkEsQUFTQSxBQUdBLEFBR0EsQUFrQkEsQUFTQSxFQXhCQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBU0EsQUFTQSxDQVpBLEFBU0EsWUFqREEsQ0FUQSxBQUdBLENBTkEsRUFIQSxDQVlBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgIGlmKHdpbmRvd3dpZHRoPDk5MCl7XHJcbiAgICAgICAgICAgICQoJy5pc21vYmlsZV9kaXNhYmxlJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgICAgICQoJy5pc2Rlc2t0b3BfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICQoJy5pc21vYmlsZV9kaXNhYmxlJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICAgJCgnLmlzZGVza3RvcF9kaXNhYmxlJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGlzTW9iaWxlKCk7XHJcbiAgICAkKHdpbmRvdykucmVzaXplKGlzTW9iaWxlKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgXHJcbiAgICByZXR1cm4oXHJcbiAgPGRpdiA+XHJcbjxIZWFkPlxyXG48dGl0bGU+QWdlbmN5IC0gU3RhcnQgQm9vdHN0cmFwIFRoZW1lPC90aXRsZT5cclxuXHJcbiAgXHJcblxyXG4gPG1ldGEgbmFtZT1cImdvb2dsZS1zaWduaW4tY2xpZW50X2lkXCIgY29udGVudD1cIjUxMTg4MDY3NDkwMS1nZm42djJuMWVqNjVycmxubnYyOW9kZ2Jqa3BraHBjai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLz5cclxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtVmtvbzh4NENHc08zK0hoeHY4VC9RNVBhWHRrS3R1NnVnNVRPZU5WNmdCaUZlV1BHRk45TXVoT2YyM1E5SWZqaFwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9saW5rPlxyXG48bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFjbWV8QW50b258Q2FiaW58SW5kaWUrRmxvd2VyfFRyYWRlK1dpbmRzfFVidW50dSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuXHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIFxyXG4gICAgXHJcblxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0zLjQuMS5zbGltLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1KNnFhNDg0OWJsRTIrcG9UNFdueUtodjV2WkY1U3JQbzBpRWp3QnZLVTdpbUdGQVYwd3dqMXlZZm9SU0pvWituXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3BvcHBlci5qc0AxLjE2LjAvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1RNkU5Ukh2Ykl5WkZKb2Z0KzJtSmJIYUVXbGRsdkk5SU9ZeTVuM3pWOXp6VHRtSTNVa3NkUVJWdm94TWZvb0FvXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9qcy9ib290c3RyYXAubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LXdmU0RGMkU1MFkyRDF1VWRqME8zdU1CSm5qdVVENEloN1l3YVlkMWlxZmt0ajBVb2Q4R0NFeGwzT2c4aWZ3QjZcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG5cclxuIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICB7YFxyXG4gICBcclxuICAgXHJcbiAgXHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIC5mb250MSB7XHJcbiAgICBmb250LWZhbWlseTogJ1RyYWRlIFdpbmRzJywgY3Vyc2l2ZTtcclxuICAgfVxyXG4gICAuZm9udDJ7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQze1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ1e1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICB9XHJcbiAgIC5mb250NntcclxuICAgIGZvbnQtZmFtaWx5OiAnQWNtZScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuXHJcbiAgIC50b3BpY0NvbG9yIHtcclxuICAgIGNvbG9yOmRhcmtibHVlO1xyXG4gICB9XHJcbiAgIC5zdWJ0b3BpY0NvbG9ye1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgfVxyXG4gICAuZm9udGNvbG9yT3Jhbmdle1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JTa3libHVle1xyXG4gICAgIGNvbG9yIDogIzAwOEFDQztcclxuICAgfVxyXG4gICAuZm9udGNvbG9ycGlua3tcclxuICAgICBjb2xvciA6ICNDQzAwNDc7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvcnJlZHtcclxuICAgICBjb2xvciA6ICNDQzAwMDA7XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS01IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNiB7XHJcbiAgICBmb250LXNpemUgOiAwLjZlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTcge1xyXG4gICAgZm9udC1zaXplIDogMC43ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS04IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuOGVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtOSB7XHJcbiAgICBmb250LXNpemUgOiAwLjllbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMSB7XHJcbiAgICBmb250LXNpemUgOiAxZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTEtMjUge1xyXG4gICAgZm9udC1zaXplIDogMS4yNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTUge1xyXG4gICAgZm9udC1zaXplIDogMS41ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTIge1xyXG4gICAgZm9udC1zaXplIDogMmVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUyLTI1IHtcclxuICAgIGZvbnQtc2l6ZSA6IDIuMjVlbTtcclxuICAgfVxyXG4gICAuZm9udHdlaWdodDcwMCB7XHJcbiAgICBmb250LXdlaWdodCA6IDcwMFxyXG4gICB9XHJcbiAgIGB9XHJcbiA8L3N0eWxlPlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbilcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
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
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/signup */ "./components/signup.js");
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  //side nav bar open
  showsidebar() {
    this.refs.sidenav.showSidebar();
  } //show signup


  showsignup() {
    this.refs.signup.showsignup();
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
      ref: "sidenav",
      sidenavconst: this.props.sidenavconst
    }), __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ref: "signup",
      showsignup: this.props.showsignup
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
    }, _constant_main__WEBPACK_IMPORTED_MODULE_7__["NavLink"].map((x, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      href: x.url
    }, __jsx("a", {
      className: "jsx-2935234599" + " " + "nav-link nav-link-main active font1"
    }, x.urlname)))), "           "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2935234599"
    }, ".subnav.jsx-2935234599{z-index :100;}.navbar-nav.jsx-2935234599{padding-left :100px;}.navbar-nav.jsx-2935234599 a.jsx-2935234599{color :white;}.navbar-nav.jsx-2935234599 a.jsx-2935234599:hover{color :gray;}.navbar.jsx-2935234599{z-index :50;height:80px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-2935234599{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;}.togglemenuC.jsx-2935234599{display:none;}.sticky-top.jsx-2935234599{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.all-link.jsx-2935234599{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R2lCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBS0EsQUFTYyxBQU9oQyxBQUUwQixBQU1ULFlBM0JmLEFBSWdCLENBaEJoQixBQVFBLEFBdUJELEFBU0EsT0FyQ0MsSUFjOEIsQUFpQmQsRUFUMkIsd0JBUDNCLFlBQ0EsRUFnQlYsTUFDaUMsSUFoQkksc0NBTWYsd0JBQ1osWUFDakIsUUFTQSxJQWhCQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxTdWJOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi8uLi9sYXlvdXRzL1NpZGVOYXYnO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4vLi4vY29tcG9uZW50cy9zaWdudXAnO1xyXG5pbXBvcnQge05hdkxpbmt9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcbiBcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIC8vc2lkZSBuYXYgYmFyIG9wZW5cclxuICAgIHNob3dzaWRlYmFyKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLnNpZGVuYXYuc2hvd1NpZGViYXIoKTtcclxuICAgICAgfVxyXG4gICAgLy9zaG93IHNpZ251cFxyXG4gICAgICBzaG93c2lnbnVwKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLnNpZ251cC5zaG93c2lnbnVwKCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICQoJy50b2dnbGVtZW51QycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnZGl2Lm5hdmJhci1jb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVDbG9zZScpLmZhZGVPdXQoMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51T3BlbicpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVPJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51T3BlbicpLmZhZGVPdXQoMTApO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVDbG9zZScpLmZhZGVJbigxMDApO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gZWZmZWN0IGZvciBuYXZiYXIgXHJcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgLy8gY2hlY2tzIGlmIHdpbmRvdyBpcyBzY3JvbGxlZCBtb3JlIHRoYW4gNTAwcHgsIGFkZHMvcmVtb3ZlcyBzb2xpZCBjbGFzc1xyXG4gICAgICAgICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAgJCh3aW5kb3cpLndpZHRoKCkvMykgeyBcclxuICAgICAgICAgICAgICAgICAgJCgnLnN1YjFuYXYnKS5hZGRDbGFzcygnU29saWROYXYnKS5jc3MoeydvcGFjaXR5JzonMSd9KS5hZGRDbGFzcygnZml4ZWQtdG9wJykucmVtb3ZlQ2xhc3MoJ3N0aWNreS10b3AnKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmxvZ28tbGluaycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pOyAkKCcuYWxsLWxpbmsnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc3ViMW5hdicpLnJlbW92ZUNsYXNzKCdTb2xpZE5hdicpLnJlbW92ZUNsYXNzKCdmaXhlZC10b3AnKS5hZGRDbGFzcygnc3RpY2t5LXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuYWxsLWxpbmsnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTsgJCgnLmxvZ28tbGluaycpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja01vYmlsZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHdpbmRvd3dpZHRoPDk5MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLW1haW4nKS5jc3MoeydiYWNrZ3JvdW5kLWNvbG9yJzonYmxhY2snLCdvcGFjaXR5JzonMC41JywncGFkZGluZy1sZWZ0JzonMjBweCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+ICQod2luZG93KS53aWR0aCgpLzMpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidkYXJrYmx1ZScsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLW1haW4nKS5jc3MoeydiYWNrZ3JvdW5kLWNvbG9yJzonYmxhY2snLCdvcGFjaXR5JzonMC41JywncGFkZGluZy1sZWZ0JzonMjBweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGVja01vYmlsZSgpO1xyXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGNoZWNrTW9iaWxlKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8U2lkZU5hdiByZWY9XCJzaWRlbmF2XCIgIHNpZGVuYXZjb25zdD17dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3R9Lz5cclxuICAgICAgICAgICAgPFNpZ25VcCByZWY9XCJzaWdudXBcIiBzaG93c2lnbnVwPXt0aGlzLnByb3BzLnNob3dzaWdudXB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibmF2XCIgPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzdWIxbmF2IHN0aWNreS10b3AgbmF2YmFyLWV4cGFuZC1sZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgZm9udDEgbG9nby1saW5rXCIgaHJlZj1cIiNcIj5NWUJJWi5DT008L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zaG93c2lkZWJhci5iaW5kKHRoaXMpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGFsbC1saW5rIGZvbnQzXCI+e3RoaXMucHJvcHMuc2lkZW5hdmNvbnN0LnRvcGljbGlua308L2J1dHRvbj5cclxuIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyIHRvZ2dsZW1lbnVPIG1lbnVPcGVuXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2QWx0TWFya3VwXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzAvZmZmZmZmL21lbnUucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgbmF2YmFyLXRvZ2dsZXIgdG9nZ2xlbWVudUMgbWVudUNsb3NlXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9kZWxldGUtc2lnbi5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHtOYXZMaW5rLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXt4LnVybH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiA+e3gudXJsbmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5zdWJuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXggOiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0IDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXYgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXggOiA1MDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuU29saWROYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC50b2dnbGVtZW51Q3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5zdGlja3ktdG9we1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmFsbC1saW5re1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SubNavbar.js */"));
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

/***/ "./pages/create-catagery.js":
/*!**********************************!*\
  !*** ./pages/create-catagery.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleChange", evt => {
      // This triggers everytime the input is changed
      this.setState({
        [evt.target.name]: evt.target.value
      });
    });

    _defineProperty(this, "handleChangedetails", evt => {
      var shopd = this.state.subtype;
      shopd.find(function (e) {
        if (e.name == evt.target.name) {
          e.type = evt.target.value;
        }
      });
      this.setState({
        subtype: shopd
      });
    });

    _defineProperty(this, "addnewSubtypes", evt => {
      if (this.state.newsubtype != '') {
        var shopd = this.state.subtype;
        alert(this.state.newsubtype);
        shopd.push({
          name: this.state.newsubtype,
          type: ''
        });
        this.setState({
          subtype: shopd,
          newsubtype: ''
        });
        alert(' added new details!');
        this.componentDidMount();
      }
    });

    _defineProperty(this, "deleteDetals", type => {
      if (confirm('is it sure remove ' + type + '?')) {
        var shopd = this.state.subtype;
        shopd.splice(shopd.findIndex(function (e) {
          return e.name == type;
        }), 1);
        this.setState({
          subtype: shopd
        });
        this.componentDidMount();
      }
    });

    _defineProperty(this, "validationform", evt => {
      this.checkvalidation(evt.target.name);
    });

    _defineProperty(this, "checkvalidation", name => {
      var form = this.state;
      var validation = this.state.validation;

      switch (name) {
        case 'name':
          validation.name = form.name.length < 1 ? 'name cannot be empty.' : '';
          break;

        case 'type':
          validation.type = form.type.length < 1 ? 'type cannot be empty.' : '';
          break;

        case 'content1':
          validation.content1 = form.content1.length < 1 ? 'Content cannot be empty.' : '';
          break;
      }

      this.setState({
        validation: validation
      });
    });

    _defineProperty(this, "beforesubmit", () => {
      var count = 0;
      Object.entries(this.state.validation).forEach(([key, value]) => {
        this.checkvalidation(key);
      });
      Object.entries(this.state.validation).forEach(([key, value]) => {
        if (value != '') {
          count = count + 1;
          return 1;
        }
      });
      return count;
    });

    _defineProperty(this, "handleSubmit", evt => {
      evt.preventDefault(); //check validations

      if (this.beforesubmit() > 0) {
        alert('Sorry, cannot Submit form, check again form!.');
      } else {
        const data = new FormData();

        if (this.state.files != undefined) {
          this.state.files.map((x, i) => {
            data.append(`image`, x.selectedFile);
          });
        }

        var jsonbody = this.state; // jsonbody.files = null;
        // jsonbody.defaultfilepath = null;

        data.append('jsonbody', JSON.stringify(jsonbody));
        data.append('mainfile', this.state.mainfile);
        data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('user')));
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('/api/createCatagery', {
          method: 'POST',
          headers: {},
          body: data
        }).then(response => {
          return response.json();
        }).then(data => {
          if (data != undefined) {
            alert(data.msg);
          }
        }).catch(error => console.log(error));
      }
    });

    _defineProperty(this, "mainfileChangeHandler", event => {
      this.setState({
        mainfile: event.target.files[0],
        mainfilepath: URL.createObjectURL(event.target.files[0])
      });
    });

    _defineProperty(this, "fileChangeHandler", event => {
      if (this.state.selectedFilecount > 2) {
        var files = this.state.files;
        files.splice(files.findIndex(function (e) {
          return e.selectedfilepath == 'https://img.icons8.com/ios/50/01567e/image.png';
        }), 1);
        this.setState({
          files: files,
          selectedFilecount: this.state.selectedFilecount - 1
        });
      }

      if (event.target.files[0] != null) {
        var files = this.state.files;
        files.unshift({
          selectedFile: event.target.files[0],
          selectedfilepath: URL.createObjectURL(event.target.files[0])
        });
        this.setState({
          files: files,
          selectedFilecount: this.state.selectedFilecount < 3 ? this.state.selectedFilecount + 1 : 3
        });
      }
    });

    _defineProperty(this, "deleteFiles", selectedfilepath => {
      if (confirm('is it sure remove ?')) {
        if (this.state.selectedFilecount == 1) {
          var files = [{
            selectedFile: null,
            selectedfilepath: this.state.defaultfilepath
          }];
          this.setState({
            files: files,
            selectedFilecount: 1
          });
        } else {
          var files = this.state.files;
          files.splice(files.findIndex(function (e) {
            return e.selectedfilepath == selectedfilepath;
          }), 1);
          this.setState({
            files: files,
            selectedFilecount: this.state.selectedFilecount - 1
          });
        }
      }
    });

    this.state = {
      name: '',
      type: '',
      content1: '',
      newsubtype: '',
      mainfile: null,
      mainfilepath: 'https://img.icons8.com/ios/50/01567e/image.png',
      subtype: [{
        name: 'tghc',
        type: 'oiko'
      }],
      selectedFilecount: 1,
      defaultfilepath: 'https://img.icons8.com/ios/50/01567e/image.png',
      files: [{
        selectedFile: null,
        selectedfilepath: 'https://img.icons8.com/ios/50/01567e/image.png'
      }],
      validation: {
        name: '',
        type: '',
        content1: ''
      }
    };
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.form').find('.inputf1').on('keyup blur focus', function (e) {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this),
            label = $this.prev('.labelf1');

        if (e.type === 'keyup') {
          if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
        } else if (e.type === 'blur') {
          if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.removeClass('highlight');
          }
        } else if (e.type === 'focus') {
          if ($this.val() === '') {
            label.removeClass('highlight');
          } else if ($this.val() !== '') {
            label.addClass('highlight');
          }
        }
      });

      function loadingform1() {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.form .inputf1').each(function () {
          var val = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).val().trim();

          if (val != '') {
            jquery__WEBPACK_IMPORTED_MODULE_6___default()(this).prev('.labelf1').addClass('active highlight');
          }
        });
      }

      loadingform1();
    });
  }

  showsidebar() {
    this.refs.child.showSidebar();
  }

  render() {
    const items = [{
      id: 1,
      topic: 'topic1',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=1',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',
      qty: 0,
      seller: 'idea mart'
    }, {
      id: 2,
      topic: 'topic2',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=2',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',
      qty: 0,
      seller: 'idea mart'
    }, {
      id: 3,
      topic: 'topic3',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=3',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',
      qty: 0,
      seller: 'idea mart'
    }, {
      id: 4,
      topic: 'topic4',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=4',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',
      qty: 0,
      seller: 'idea mart'
    }, {
      id: 5,
      topic: 'topic5',
      subtopic: 'subtopic1',
      imageUrl: 'http://loremflickr.com/320/150?random=5',
      discount: 5,
      date: '2020/4/5',
      price: 150,
      topicImageUrl: 'https://img.icons8.com/ios/50/000000/contract-job.png',
      content: 'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',
      qty: 0,
      seller: 'idea mart'
    }]; //side navbar link

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
    const sidenavconst = {
      topic: 'Categeries',
      topiclink: 'All Categeriess',
      sidenavlink: sidenavlink
    }; //////////////

    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sidenavconst: sidenavconst
    }), __jsx("div", {
      className: "jsx-1972308323" + " " + "form-create-shop"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + "container"
    }, __jsx("h1", {
      className: "jsx-1972308323" + " " + "font4 fontsizeE2-25 topicColor d-flex justify-content-center"
    }, "Create new Categery"), __jsx("form", {
      className: "jsx-1972308323" + " " + "form"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-1972308323" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "new type"), __jsx("div", {
      className: "jsx-1972308323" + " " + "row"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("label", {
      className: "jsx-1972308323" + " " + "font2 labelf1"
    }, "name", __jsx("span", {
      className: "jsx-1972308323" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      autocomplete: "off",
      name: "name",
      value: this.state.name,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-1972308323" + " " + ('font6 inputf1 ' + (this.state.validation.name != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-1972308323" + " " + "form-error"
    }, this.state.validation.name)), __jsx("div", {
      className: "jsx-1972308323" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("label", {
      className: "jsx-1972308323" + " " + "font2 labelf1"
    }, "type", __jsx("span", {
      className: "jsx-1972308323" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      autocomplete: "off",
      name: "type",
      value: this.state.type,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-1972308323" + " " + ('font6 inputf1 ' + (this.state.validation.type != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-1972308323" + " " + "form-error"
    }, this.state.validation.type)), __jsx("div", {
      className: "jsx-1972308323" + " " + "field-wrap col-lg-12 col-sm-12"
    }, __jsx("label", {
      className: "jsx-1972308323" + " " + "font2 labelf1"
    }, "details", __jsx("span", {
      className: "jsx-1972308323" + " " + "req"
    }, "*")), __jsx("textarea", {
      rows: "3",
      required: true,
      autocomplete: "off",
      name: "content1",
      type: this.state.content1,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-1972308323" + " " + ('font6 inputf1 ' + (this.state.validation.content1 != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-1972308323" + " " + "form-error"
    }, this.state.validation.content1))), __jsx("hr", {
      className: "jsx-1972308323"
    }), __jsx("div", {
      className: "jsx-1972308323" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-1972308323" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "Sub type"), __jsx("div", {
      className: "jsx-1972308323" + " " + "col-12"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + " field-wrap col-lg-6 col-md-6 col-sm-12"
    }, __jsx("div", {
      role: "group",
      "aria-label": "Basic example",
      className: "jsx-1972308323" + " " + "btn-group"
    }, __jsx("input", {
      type: "text",
      required: true,
      autocomplete: "off",
      name: "newsubtype",
      value: this.state.newsubtype,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-1972308323" + " " + 'font6 inputf1 '
    }), __jsx("button", {
      type: "button",
      required: true,
      autocomplete: "off",
      name: "newsubtype",
      onClick: this.addnewSubtypes,
      className: "jsx-1972308323" + " " + "font6  btn btn-addnewshop"
    }, " new+ "))), __jsx("span", {
      className: "jsx-1972308323"
    }, "If you need add more field as your details of subtype")), __jsx("div", {
      className: "jsx-1972308323" + " " + "row"
    }, this.state.subtype.map((x, i) => __jsx("div", {
      key: i,
      className: "jsx-1972308323" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("div", {
      onClick: () => this.deleteDetals(x.name),
      display: "none",
      className: "jsx-1972308323" + " " + "popup-close-1"
    }, "x"), __jsx("label", {
      className: "jsx-1972308323" + " " + "font2 labelf1"
    }, x.name), __jsx("input", {
      type: "text",
      required: true,
      autocomplete: "off",
      name: x.name,
      value: x.type,
      onChange: this.handleChangedetails,
      className: "jsx-1972308323" + " " + 'font6 inputf1'
    }))))), __jsx("hr", {
      className: "jsx-1972308323"
    }), __jsx("div", {
      className: "jsx-1972308323" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-1972308323" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "cover images for shop"), __jsx("div", {
      className: "jsx-1972308323" + " " + " row col-12"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + " field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + "imageupload d-flex justify-content-center"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + "popup-close-2"
    }, "x"), __jsx("img", {
      width: this.state.mainfilepath != this.state.defaultfilepath ? '100%' : null,
      src: this.state.mainfilepath,
      className: "jsx-1972308323" + " " + "align-self-center"
    }), __jsx("input", {
      type: "file",
      required: true,
      autocomplete: "off",
      onChange: this.mainfileChangeHandler,
      className: "jsx-1972308323" + " " + "imageupload-input"
    }))))), __jsx("hr", {
      className: "jsx-1972308323"
    }), __jsx("div", {
      className: "jsx-1972308323" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-1972308323" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "cover images for shop"), __jsx("div", {
      className: "jsx-1972308323" + " " + " row col-12"
    }, this.state.files.map((x, i) => __jsx("div", {
      key: i,
      className: "jsx-1972308323" + " " + " field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("div", {
      className: "jsx-1972308323" + " " + "imageupload d-flex justify-content-center"
    }, __jsx("div", {
      onClick: () => this.deleteFiles(x.selectedfilepath),
      className: "jsx-1972308323" + " " + "popup-close-2"
    }, "x"), __jsx("img", {
      width: x.selectedfilepath != this.state.defaultfilepath ? '100%' : null,
      src: x.selectedfilepath,
      className: "jsx-1972308323" + " " + "align-self-center"
    }), __jsx("input", {
      type: "file",
      required: true,
      autocomplete: "off",
      value: x.file,
      onChange: this.fileChangeHandler,
      className: "jsx-1972308323" + " " + "imageupload-input"
    }))))))), __jsx("div", {
      className: "jsx-1972308323" + " " + "d-flex justify-content-end"
    }, __jsx("button", {
      type: "button",
      required: true,
      autocomplete: "off",
      name: "newsubtype",
      onClick: this.handleSubmit,
      className: "jsx-1972308323" + " " + "font6  btn btn-submit "
    }, " Submit "))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1972308323"
    }, ".imageupload.jsx-1972308323{background:#c2d1e17d;height:200px;border:1.5px solid #01567e;overflow:hidden;margin-top:2rem;}.imageupload-input.jsx-1972308323{position:absolute;font-size:1px;cursor:pointer;opacity:0;height:100%;width:80%;}.popup-close-1.jsx-1972308323{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#01567e;cursor:pointer;font-size:0.6rem;width:1.2rem;height:1.2rem;top:2.2rem;right:1rem;position:absolute;border-radious:100%;}.popup-close-2.jsx-1972308323{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#01567e;cursor:pointer;font-size:0.6rem;width:1.5rem;height:1.5rem;top:2.1rem;right:1rem;position:absolute;}.form-create-shop.jsx-1972308323{background:#8b8b8ba8;}.container.jsx-1972308323{background-image:url(\"/form1.jpg\");background-repeat:no-repeat;padding :20px 10px;opacity:1.1;}.labelf1.jsx-1972308323{position:relative;-webkit-transform:translateY(40px);-ms-transform:translateY(40px);transform:translateY(40px);left:13px;color:#01567e;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;-webkit-backface-visibility:hidden;pointer-events:none;font-size:18px;}.labelf1.jsx-1972308323 .req.jsx-1972308323{margin:2px;color:#01567e;}.labelf1.active.jsx-1972308323{left:13px;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);font-size:15px;}.labelf1.active.jsx-1972308323 .req.jsx-1972308323{opacity:0;}.labelf1.highlight.jsx-1972308323{color:#023957;}.inputf1.jsx-1972308323{font-size:18px;display:block;width:100%;padding:5px 10px;background:#c2d1e17d;background-image:none;border:none;border:1.5px solid #01567e;color:darkblue;border-radius:0;-webkit-transition:border-color 0.5s ease;transition:border-color 0.5s ease;}.inputf1.jsx-1972308323:focus,textarea.jsx-1972308323:focus{outline:0;border-color:#023957;}textarea.jsx-1972308323{resize:vertical;}.field-wrap.jsx-1972308323{position:relative;}.btn-addnewshop.jsx-1972308323{background:#01567e;color:white;}.btn-submit.jsx-1972308323{background:#01567e;color:white;width:100%;margin-top:3rem;}.form-error.jsx-1972308323{color :red;font-size :0.8rem;}.input-error.jsx-1972308323{border-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxjcmVhdGUtY2F0YWdlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMFpDLEFBRzBCLEFBT0gsQUFRVCxBQWVBLEFBZVksQUFLYyxBQU9qQixBQVVQLEFBSUQsQUFLQSxBQUdJLEFBR0MsQUFhTCxBQUlNLEFBR0UsQUFJQyxBQUlBLEFBTVIsQUFJTSxVQWhEVSxBQUsvQixBQW1CeUIsQ0E1QlAsQUFpREksQ0FyR1IsQUFlQSxFQWlEZCxDQUdrQixDQWlCbEIsQ0FxQkEsQ0FqSGtCLEFBa0RhLEFBOEMvQixDQUdlLEFBSUEsRUE5R0MsQUE2Q2hCLElBdUJBLElBZWUsQUFrQ2YsRUFyQkEsQUFXQSxBQUljLENBdkdLLEVBUFksQ0FpREMsS0FrQ1gsRUE0QkQsS0F2R04sVUFDQyxBQTJFVSxDQTRCekIsR0EvR29CLEVBaURHLE1BeENWLFFBUk0sQ0FtRk8sQ0ExRTFCLEdBd0NlLElBcENLLEFBZUEsT0EzQnBCLENBa0RBLE1BaUNnQixHQWZHLFFBZEwsQ0E4QmlCLE1BZi9CLEdBZGtCLGNBQ1ksSUE2QlgsZUFDQyxnQkFDa0IsU0ExRWQsQUFlQSxnQkE2QmUsbUNBQ2YsZ0JBOEJ4QixJQTdCbUIsZUFDbkIsYUE5Q29CLEFBZUEsbUJBZEosQUFlQSxlQWRFLEFBZUEsaUJBZEosQUFlQSxhQWRDLEFBZUEsY0FkSCxBQWVBLFdBZEEsQUFlQSxXQWRPLEFBZUEsa0JBZEksQUFnQnZCLG9CQWZBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxjcmVhdGUtY2F0YWdlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IFN1Yk5hdkJhciBmcm9tICcuLy4uL2xheW91dHMvU3ViTmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQge1VybH0gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZTonJyxcclxuICAgICAgICAgICAgdHlwZTonJyxcclxuICAgICAgICAgICAgY29udGVudDE6JycsXHJcbiAgICAgICAgICAgIG5ld3N1YnR5cGU6JycsXHJcbiAgICAgICAgICAgIG1haW5maWxlOm51bGwsXHJcbiAgICAgICAgICAgIG1haW5maWxlcGF0aDonaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDE1NjdlL2ltYWdlLnBuZycsXHJcbiAgICAgICAgICAgIHN1YnR5cGU6W3tuYW1lOid0Z2hjJyx0eXBlOidvaWtvJ31dLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGVjb3VudCA6IDEsXHJcbiAgICAgICAgICAgIGRlZmF1bHRmaWxlcGF0aCA6J2h0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwLzAxNTY3ZS9pbWFnZS5wbmcnLFxyXG4gICAgICAgICAgICBmaWxlcyA6IFt7c2VsZWN0ZWRGaWxlOm51bGwsc2VsZWN0ZWRmaWxlcGF0aDonaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDE1NjdlL2ltYWdlLnBuZyd9XSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbiA6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdHlwZSA6JycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50MTonJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuZm9ybScpLmZpbmQoJy5pbnB1dGYxJykub24oJ2tleXVwIGJsdXIgZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCA9ICR0aGlzLnByZXYoJy5sYWJlbGYxJyk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudHlwZSA9PT0gJ2tleXVwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkdGhpcy52YWwoKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmFkZENsYXNzKCdhY3RpdmUgaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKCAkdGhpcy52YWwoKSA9PT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBoaWdobGlnaHQnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5yZW1vdmVDbGFzcygnaGlnaGxpZ2h0Jyk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAkdGhpcy52YWwoKSA9PT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodCcpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoICR0aGlzLnZhbCgpICE9PSAnJyApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5hZGRDbGFzcygnaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gbG9hZGluZ2Zvcm0xKCl7XHJcbiAgICAgICAgICAgICAgICAkKCcuZm9ybSAuaW5wdXRmMScpLmVhY2goXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCkudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucHJldignLmxhYmVsZjEnKS5hZGRDbGFzcygnYWN0aXZlIGhpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgbG9hZGluZ2Zvcm0xKCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgIC8vIFRoaXMgdHJpZ2dlcnMgZXZlcnl0aW1lIHRoZSBpbnB1dCBpcyBjaGFuZ2VkXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiBldnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuIFxyXG4gICAgaGFuZGxlQ2hhbmdlZGV0YWlscz0gZXZ0ID0+e1xyXG4gICAgICAgIHZhciBzaG9wZCA9IHRoaXMuc3RhdGUuc3VidHlwZTtcclxuICAgICAgICBzaG9wZC5maW5kKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgaWYoZS5uYW1lID09IGV2dC50YXJnZXQubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgZS50eXBlID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN1YnR5cGUgOiBzaG9wZFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhZGRuZXdTdWJ0eXBlcyA9IGV2dCA9PntcclxuICAgICAgICBpZih0aGlzLnN0YXRlLm5ld3N1YnR5cGUgIT0gJycpe1xyXG4gICAgICAgICAgICB2YXIgc2hvcGQgPSB0aGlzLnN0YXRlLnN1YnR5cGU7XHJcbiAgICAgICAgICAgIGFsZXJ0KHRoaXMuc3RhdGUubmV3c3VidHlwZSlcclxuICAgICAgICAgICAgc2hvcGQucHVzaCh7bmFtZTp0aGlzLnN0YXRlLm5ld3N1YnR5cGUsdHlwZTonJ30pO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN1YnR5cGUgOiBzaG9wZCxcclxuICAgICAgICAgICAgICAgIG5ld3N1YnR5cGUgOiAnJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBhbGVydCgnIGFkZGVkIG5ldyBkZXRhaWxzIScpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgZGVsZXRlRGV0YWxzID0gdHlwZSA9PntcclxuXHJcbiAgICAgICAgaWYoY29uZmlybSgnaXMgaXQgc3VyZSByZW1vdmUgJyt0eXBlKyc/Jykpe1xyXG5cclxuICAgICAgICBcclxuICAgICAgIHZhciBzaG9wZCA9IHRoaXMuc3RhdGUuc3VidHlwZTtcclxuICAgICAgIHNob3BkLnNwbGljZShzaG9wZC5maW5kSW5kZXgoZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgcmV0dXJuIGUubmFtZSA9PSB0eXBlXHJcbiAgICAgXHJcbiAgICAgICAgfSksMSk7XHJcblxyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3VidHlwZSA6IHNob3BkLFxyXG4gICAgfSlcclxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGlvbmZvcm09KGV2dCk9PntcclxuICAgICAgICB0aGlzLmNoZWNrdmFsaWRhdGlvbihldnQudGFyZ2V0Lm5hbWUpXHJcblxyXG4gICAgfVxyXG4gICAgY2hlY2t2YWxpZGF0aW9uID0gKG5hbWUpPT57XHJcbiAgICAgICAgdmFyIGZvcm0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0gdGhpcy5zdGF0ZS52YWxpZGF0aW9uO1xyXG4gICAgICAgIHN3aXRjaChuYW1lKXtcclxuICAgICAgICAgICAgY2FzZSAoJ25hbWUnKSA6IHZhbGlkYXRpb24ubmFtZSA9IFxyXG4gICAgICAgICAgICBmb3JtLm5hbWUubGVuZ3RoIDwxID8gICduYW1lIGNhbm5vdCBiZSBlbXB0eS4nOicnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICgndHlwZScpIDogdmFsaWRhdGlvbi50eXBlID0gXHJcbiAgICAgICAgICAgIGZvcm0udHlwZS5sZW5ndGggPDEgPyAgJ3R5cGUgY2Fubm90IGJlIGVtcHR5Lic6JydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKCdjb250ZW50MScpIDogdmFsaWRhdGlvbi5jb250ZW50MSA9IFxyXG4gICAgICAgICAgICBmb3JtLmNvbnRlbnQxLmxlbmd0aCA8MSA/ICAnQ29udGVudCBjYW5ub3QgYmUgZW1wdHkuJzonJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uOnZhbGlkYXRpb25cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYmVmb3Jlc3VibWl0PSgpPT57XHJcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLnZhbGlkYXRpb24pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jaGVja3ZhbGlkYXRpb24oa2V5KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUudmFsaWRhdGlvbikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICBpZih2YWx1ZSE9Jycpe1xyXG4gICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQrMTtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0ID0gZXZ0ID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgIC8vY2hlY2sgdmFsaWRhdGlvbnNcclxuICAgICAgICBpZih0aGlzLmJlZm9yZXN1Ym1pdCgpPjApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydCgnU29ycnksIGNhbm5vdCBTdWJtaXQgZm9ybSwgY2hlY2sgYWdhaW4gZm9ybSEuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5maWxlcyE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZmlsZXMubWFwKCh4LGkpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoYGltYWdlYCx4LnNlbGVjdGVkRmlsZSk7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXIganNvbmJvZHkgPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgICAgIC8vIGpzb25ib2R5LmZpbGVzID0gbnVsbDtcclxuICAgICAgICAgICAvLyBqc29uYm9keS5kZWZhdWx0ZmlsZXBhdGggPSBudWxsO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeShqc29uYm9keSkpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWFpbmZpbGUnLHRoaXMuc3RhdGUubWFpbmZpbGUpO1xyXG4gICAgICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NyZWF0ZUNhdGFnZXJ5Jyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBtYWluZmlsZUNoYW5nZUhhbmRsZXI9ZXZlbnQ9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWFpbmZpbGUgOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgICAgICAgICAgIG1haW5maWxlcGF0aCA6IFVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbGVDaGFuZ2VIYW5kbGVyPWV2ZW50PT57XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlY291bnQ+Mil7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzO1xyXG4gICAgICAgICAgICBmaWxlcy5zcGxpY2UoZmlsZXMuZmluZEluZGV4KGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgcmV0dXJuIGUuc2VsZWN0ZWRmaWxlcGF0aCA9PSAnaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDE1NjdlL2ltYWdlLnBuZydcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfSksMSk7XHJcbiAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgZmlsZXMgOiBmaWxlcyxcclxuICAgICAgICAgICAgIHNlbGVjdGVkRmlsZWNvdW50IDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVjb3VudC0xXHJcbiAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC50YXJnZXQuZmlsZXNbMF0hPW51bGwpe1xyXG4gICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzO1xyXG4gICAgICAgICAgICBmaWxlcy51bnNoaWZ0KHtzZWxlY3RlZEZpbGU6ZXZlbnQudGFyZ2V0LmZpbGVzWzBdLHNlbGVjdGVkZmlsZXBhdGg6VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmlsZXMgOiBmaWxlcyxcclxuICAgICAgICAgICAgICBzZWxlY3RlZEZpbGVjb3VudCA6ICh0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZWNvdW50PDMpP3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlY291bnQrMTozXHJcbiAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBkZWxldGVGaWxlcyA9IHNlbGVjdGVkZmlsZXBhdGggPT57XHJcblxyXG4gICAgICAgIGlmKGNvbmZpcm0oJ2lzIGl0IHN1cmUgcmVtb3ZlID8nKSl7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZWNvdW50PT0xKXtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gW3tzZWxlY3RlZEZpbGU6bnVsbCxzZWxlY3RlZGZpbGVwYXRoOnRoaXMuc3RhdGUuZGVmYXVsdGZpbGVwYXRofV07XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgZmlsZXMgOiBmaWxlcyxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlY291bnQgOiAxXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzO1xyXG4gICAgICAgICAgICAgICAgZmlsZXMuc3BsaWNlKGZpbGVzLmZpbmRJbmRleChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICByZXR1cm4gZS5zZWxlY3RlZGZpbGVwYXRoID09IHNlbGVjdGVkZmlsZXBhdGhcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9KSwxKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgIGZpbGVzIDogZmlsZXMsXHJcbiAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlY291bnQgOiB0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZWNvdW50LTFcclxuICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIFxyXG5cclxuICAgIHNob3dzaWRlYmFyKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLmNoaWxkLnNob3dTaWRlYmFyKCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge2lkOjEgLCB0b3BpYzogJ3RvcGljMScsIHN1YnRvcGljOidzdWJ0b3BpYzEnLGltYWdlVXJsOidodHRwOi8vbG9yZW1mbGlja3IuY29tLzMyMC8xNTA/cmFuZG9tPTEnICAgLGRpc2NvdW50OjUsZGF0ZTonMjAyMC80LzUnLHByaWNlOjE1MCx0b3BpY0ltYWdlVXJsOidodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvY29udHJhY3Qtam9iLnBuZycsY29udGVudDonSW4gcHVibGlzaGluZywgYXJ0LCBhbmQgY29tbXVuaWNhdGlvbiwgY29udGVudCBpcyB0aGUgaW5mb3JtYXRpb24gYW5kIGV4cGVyaWVuY2VzIHRoYXQgYXJlIGRpcmVjdGVkIHRvd2FyZCBhbiBlbmQtdXNlciBvciBhdWRpZW5jZS4gQ29udGVudCBpcyBcInNvbWV0aGluZyB0aGF0IGlzIHRvIGJlIGV4cHJlc3NlZCB0aHJvdWdoIHNvbWUgbWVkaXVtLCBhcyBzcGVlY2gsIHdyaXRpbmcgb3IgYW55IG9mIHZhcmlvdXMgYXJ0cycscXR5OjAsc2VsbGVyOidpZGVhIG1hcnQnfSxcclxuICAgICAgICAgICAge2lkOjIgLCB0b3BpYzogJ3RvcGljMicsIHN1YnRvcGljOidzdWJ0b3BpYzEnLGltYWdlVXJsOidodHRwOi8vbG9yZW1mbGlja3IuY29tLzMyMC8xNTA/cmFuZG9tPTInICAgLGRpc2NvdW50OjUsZGF0ZTonMjAyMC80LzUnLHByaWNlOjE1MCx0b3BpY0ltYWdlVXJsOidodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvY29udHJhY3Qtam9iLnBuZycsY29udGVudDonSW4gcHVibGlzaGluZywgYXJ0LCBhbmQgY29tbXVuaWNhdGlvbiwgY29udGVudCBpcyB0aGUgaW5mb3JtYXRpb24gYW5kIGV4cGVyaWVuY2VzIHRoYXQgYXJlIGRpcmVjdGVkIHRvd2FyZCBhbiBlbmQtdXNlciBvciBhdWRpZW5jZS4gQ29udGVudCBpcyBcInNvbWV0aGluZyB0aGF0IGlzIHRvIGJlIGV4cHJlc3NlZCB0aHJvdWdoIHNvbWUgbWVkaXVtLCBhcyBzcGVlY2gsIHdyaXRpbmcgb3IgYW55IG9mIHZhcmlvdXMgYXJ0cycscXR5OjAsc2VsbGVyOidpZGVhIG1hcnQnfSxcclxuICAgICAgICAgICAge2lkOjMgLCB0b3BpYzogJ3RvcGljMycsIHN1YnRvcGljOidzdWJ0b3BpYzEnLGltYWdlVXJsOidodHRwOi8vbG9yZW1mbGlja3IuY29tLzMyMC8xNTA/cmFuZG9tPTMnICAgLGRpc2NvdW50OjUsZGF0ZTonMjAyMC80LzUnLHByaWNlOjE1MCx0b3BpY0ltYWdlVXJsOidodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvY29udHJhY3Qtam9iLnBuZycsY29udGVudDonSW4gcHVibGlzaGluZywgYXJ0LCBhbmQgY29tbXVuaWNhdGlvbiwgY29udGVudCBpcyB0aGUgaW5mb3JtYXRpb24gYW5kIGV4cGVyaWVuY2VzIHRoYXQgYXJlIGRpcmVjdGVkIHRvd2FyZCBhbiBlbmQtdXNlciBvciBhdWRpZW5jZS4gQ29udGVudCBpcyBcInNvbWV0aGluZyB0aGF0IGlzIHRvIGJlIGV4cHJlc3NlZCB0aHJvdWdoIHNvbWUgbWVkaXVtLCBhcyBzcGVlY2gsIHdyaXRpbmcgb3IgYW55IG9mIHZhcmlvdXMgYXJ0cycscXR5OjAsc2VsbGVyOidpZGVhIG1hcnQnfSxcclxuICAgICAgICAgICAge2lkOjQgLCB0b3BpYzogJ3RvcGljNCcsIHN1YnRvcGljOidzdWJ0b3BpYzEnLGltYWdlVXJsOidodHRwOi8vbG9yZW1mbGlja3IuY29tLzMyMC8xNTA/cmFuZG9tPTQnICAgLGRpc2NvdW50OjUsZGF0ZTonMjAyMC80LzUnLHByaWNlOjE1MCx0b3BpY0ltYWdlVXJsOidodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvY29udHJhY3Qtam9iLnBuZycsY29udGVudDonSW4gcHVibGlzaGluZywgYXJ0LCBhbmQgY29tbXVuaWNhdGlvbiwgY29udGVudCBpcyB0aGUgaW5mb3JtYXRpb24gYW5kIGV4cGVyaWVuY2VzIHRoYXQgYXJlIGRpcmVjdGVkIHRvd2FyZCBhbiBlbmQtdXNlciBvciBhdWRpZW5jZS4gQ29udGVudCBpcyBcInNvbWV0aGluZyB0aGF0IGlzIHRvIGJlIGV4cHJlc3NlZCB0aHJvdWdoIHNvbWUgbWVkaXVtLCBhcyBzcGVlY2gsIHdyaXRpbmcgb3IgYW55IG9mIHZhcmlvdXMgYXJ0cycscXR5OjAsc2VsbGVyOidpZGVhIG1hcnQnfSxcclxuICAgICAgICAgICAge2lkOjUgLCB0b3BpYzogJ3RvcGljNScsIHN1YnRvcGljOidzdWJ0b3BpYzEnLGltYWdlVXJsOidodHRwOi8vbG9yZW1mbGlja3IuY29tLzMyMC8xNTA/cmFuZG9tPTUnICAgLGRpc2NvdW50OjUsZGF0ZTonMjAyMC80LzUnLHByaWNlOjE1MCx0b3BpY0ltYWdlVXJsOidodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvY29udHJhY3Qtam9iLnBuZycsY29udGVudDonSW4gcHVibGlzaGluZywgYXJ0LCBhbmQgY29tbXVuaWNhdGlvbiwgY29udGVudCBpcyB0aGUgaW5mb3JtYXRpb24gYW5kIGV4cGVyaWVuY2VzIHRoYXQgYXJlIGRpcmVjdGVkIHRvd2FyZCBhbiBlbmQtdXNlciBvciBhdWRpZW5jZS4gQ29udGVudCBpcyBcInNvbWV0aGluZyB0aGF0IGlzIHRvIGJlIGV4cHJlc3NlZCB0aHJvdWdoIHNvbWUgbWVkaXVtLCBhcyBzcGVlY2gsIHdyaXRpbmcgb3IgYW55IG9mIHZhcmlvdXMgYXJ0cycscXR5OjAsc2VsbGVyOidpZGVhIG1hcnQnfSxcclxuICAgICAgICAgXHJcbiAgICAgICAgXTtcclxuICAgICAgICAvL3NpZGUgbmF2YmFyIGxpbmtcclxuICAgICAgICBjb25zdCBzaWRlbmF2bGluayA9IFtcclxuICAgICAgICAgICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgICAgICAgICAge2lkOjEsbGluazonL21lbnUnLGxpbmtuYW1lOidtZW51J30sXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidtZW51Mid9LFxyXG4gICAgICAgICAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbWVudTMnfSxcclxuICAgICAgICAgICAge2lkOjEsbGluazonLycsbGlua25hbWU6J21lbnU0J30sXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidtZW51NSd9LFxyXG4gICAgICAgICAgXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBzaWRlbmF2Y29uc3QgPSB7dG9waWMgOiAnQ2F0ZWdlcmllcycsdG9waWNsaW5rOidBbGwgQ2F0ZWdlcmllc3MnLHNpZGVuYXZsaW5rOnNpZGVuYXZsaW5rfTtcclxuICAgICAgICAvLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2QmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY3JlYXRlLXNob3BcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMi0yNSB0b3BpY0NvbG9yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+Q3JlYXRlIG5ldyBDYXRlZ2VyeTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTEtNSBmb250Y29sb3JPcmFuZ2VcIj5uZXcgdHlwZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+bmFtZTxzcGFuIGNsYXNzTmFtZT1cInJlcVwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnKyh0aGlzLnN0YXRlLnZhbGlkYXRpb24ubmFtZSE9Jyc/J2lucHV0LWVycm9yJzonJyl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy52YWxpZGF0aW9uZm9ybX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+dHlwZTxzcGFuIGNsYXNzTmFtZT1cInJlcVwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnKyh0aGlzLnN0YXRlLnZhbGlkYXRpb24udHlwZSE9Jyc/J2lucHV0LWVycm9yJzonJyl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS50eXBlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy52YWxpZGF0aW9uZm9ybX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uLnR5cGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPmRldGFpbHM8c3BhbiBjbGFzc05hbWU9XCJyZXFcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJysodGhpcy5zdGF0ZS52YWxpZGF0aW9uLmNvbnRlbnQxIT0nJz8naW5wdXQtZXJyb3InOicnKX0gIHJvd3M9XCIzXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cImNvbnRlbnQxXCIgdHlwZT17dGhpcy5zdGF0ZS5jb250ZW50MX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBvbkJsdXI9e3RoaXMudmFsaWRhdGlvbmZvcm19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250ZW50MX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIHN1YiBpdGVtcyBkZXRhaWxzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250NCBmb250c2l6ZUUxLTUgZm9udGNvbG9yT3JhbmdlXCI+U3ViIHR5cGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmaWVsZC13cmFwIGNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J2ZvbnQ2IGlucHV0ZjEgJyAgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbmFtZT1cIm5ld3N1YnR5cGVcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uZXdzdWJ0eXBlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy52YWxpZGF0aW9uZm9ybX0vPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmb250NiAgYnRuIGJ0bi1hZGRuZXdzaG9wXCIgIHJlcXVpcmVkIGF1dG9jb21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJuZXdzdWJ0eXBlXCIgb25DbGljaz17dGhpcy5hZGRuZXdTdWJ0eXBlc30gPiBuZXcrIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+SWYgeW91IG5lZWQgYWRkIG1vcmUgZmllbGQgYXMgeW91ciBkZXRhaWxzIG9mIHN1YnR5cGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWJ0eXBlLm1hcCgoeCxpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTQgY29sLW1kLTQgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlLTFcIiBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVEZXRhbHMoeC5uYW1lKX0gZGlzcGxheT0nbm9uZScgPng8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPnt4Lm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2ZvbnQ2IGlucHV0ZjEnIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbmFtZT17eC5uYW1lfSB2YWx1ZT17eC50eXBlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VkZXRhaWxzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250NCBmb250c2l6ZUUxLTUgZm9udGNvbG9yT3JhbmdlXCI+Y292ZXIgaW1hZ2VzIGZvciBzaG9wPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm93IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCIgZmllbGQtd3JhcCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdldXBsb2FkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jbG9zZS0yXCI+eDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXJcIiB3aWR0aD17dGhpcy5zdGF0ZS5tYWluZmlsZXBhdGghPXRoaXMuc3RhdGUuZGVmYXVsdGZpbGVwYXRoPycxMDAlJzpudWxsfSBzcmM9e3RoaXMuc3RhdGUubWFpbmZpbGVwYXRofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImltYWdldXBsb2FkLWlucHV0XCIgdHlwZT1cImZpbGVcIiByZXF1aXJlZCBhdXRvY29tcGxldGU9XCJvZmZcIiAgb25DaGFuZ2U9e3RoaXMubWFpbmZpbGVDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGZpbGUgdXBsb2FkICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS01IGZvbnRjb2xvck9yYW5nZVwiPmNvdmVyIGltYWdlcyBmb3Igc2hvcDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmlsZXMubWFwKCh4LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIiBmaWVsZC13cmFwIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2V1cGxvYWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlLTJcIiBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVGaWxlcyh4LnNlbGVjdGVkZmlsZXBhdGgpfT54PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiIHdpZHRoPXt4LnNlbGVjdGVkZmlsZXBhdGghPXRoaXMuc3RhdGUuZGVmYXVsdGZpbGVwYXRoPycxMDAlJzpudWxsfSBzcmM9e3guc2VsZWN0ZWRmaWxlcGF0aH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZXVwbG9hZC1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgdmFsdWU9e3guZmlsZX0gb25DaGFuZ2U9e3RoaXMuZmlsZUNoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmb250NiAgYnRuIGJ0bi1zdWJtaXQgXCIgIHJlcXVpcmVkIGF1dG9jb21wbGV0ZT1cIm9mZlwiIG5hbWU9XCJuZXdzdWJ0eXBlXCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9ID4gU3VibWl0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG48c3R5bGUganN4PlxyXG57YFxyXG4uaW1hZ2V1cGxvYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzJkMWUxN2Q7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMTU2N2U7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDoycmVtO1xyXG59XHJcbi5pbWFnZXVwbG9hZC1pbnB1dHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6ODAlO1xyXG59XHJcbi5wb3B1cC1jbG9zZS0xIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtc2l6ZTogMC42cmVtO1xyXG5cdHdpZHRoOiAxLjJyZW07XHJcblx0aGVpZ2h0OiAxLjJyZW07XHJcblx0dG9wOiAyLjJyZW07XHJcblx0cmlnaHQ6IDFyZW07XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGlvdXM6MTAwJTtcclxufVxyXG4ucG9wdXAtY2xvc2UtMiB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDAuNnJlbTtcclxuXHR3aWR0aDogMS41cmVtO1xyXG5cdGhlaWdodDogMS41cmVtO1xyXG5cdHRvcDogMi4xcmVtO1xyXG5cdHJpZ2h0OiAxcmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuLmZvcm0tY3JlYXRlLXNob3Age1xyXG4gICAgYmFja2dyb3VuZDogIzhiOGI4YmE4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBcclxuICAgIC8qYmFja2dyb3VuZDogI2RkZTFmZmJmICA7Ki9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9mb3JtMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgcGFkZGluZyA6IDIwcHggMTBweDtcclxuICAgIG9wYWNpdHk6MS4xO1xyXG4gICBcclxufVxyXG4ubGFiZWxmMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMTU2N2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxhYmVsZjEgLnJlcSB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGNvbG9yOiAjMDE1NjdlO1xyXG59XHJcbi5sYWJlbGYxLmFjdGl2ZSB7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5sYWJlbGYxLmFjdGl2ZSAucmVxIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmxhYmVsZjEuaGlnaGxpZ2h0IHtcclxuICAgIGNvbG9yOiAjMDIzOTU3O1xyXG59XHJcbi5pbnB1dGYxIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjMmQxZTE3ZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMTU2N2U7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMgZWFzZTtcclxufVxyXG4uaW5wdXRmMTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyMzk1NztcclxufVxyXG50ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcbi5maWVsZC13cmFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbn1cclxuLmJ0bi1hZGRuZXdzaG9we1xyXG4gICAgYmFja2dyb3VuZDogIzAxNTY3ZTtcclxuICAgIGNvbG9yOndoaXRlOyBcclxufVxyXG4uYnRuLXN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG4uZm9ybS1lcnJvcntcclxuICAgIGNvbG9yIDogcmVkO1xyXG4gICAgZm9udC1zaXplIDogMC44cmVtO1xyXG59XHJcbi5pbnB1dC1lcnJvcntcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcbmB9XHJcbjwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\create-catagery.js */"), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/create-catagery.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\create-catagery.js */"./pages/create-catagery.js");


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
//# sourceMappingURL=create-catagery.js.map