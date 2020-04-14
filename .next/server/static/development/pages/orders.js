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
      className: "jsx-4001438521" + " " + "h3 mb-3 font1 topicColor .fontsizeE-6"
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
      className: "jsx-4001438521" + " " + "h3 mb-3 font1 topicColor .fontsizeE-6"
    }, " Sign up"), __jsx("form", {
      className: "jsx-4001438521"
    }, __jsx("div", {
      className: "jsx-4001438521" + " " + "form-group"
    }, __jsx("label", {
      className: "jsx-4001438521" + " " + "font1"
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
      className: "jsx-4001438521" + " " + "font1"
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
      className: "jsx-4001438521" + " " + "font1"
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
    }, ".visual-signup.jsx-4001438521{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 1s cubic-bezier(0,0,0.3,1);transition:transform 1s cubic-bezier(0,0,0.3,1);}.popup-close.jsx-4001438521{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:darkred;cursor:pointer;font-size:1.0rem;width:2.0rem;height:2.0rem;top:0.5rem;right:0.5rem;position:absolute;border-radius:100%;}#background-signin.jsx-4001438521{width:100%;background:rgba(0,0,0,0.8);font-family:\"Robato\",sans-serif;font-size:17px;display:none;z-index:100;position:fixed;left:0;top:0;width:100%;height:100%;}#logreg-forms.jsx-4001438521{box-shadow:0 7px 7px rgba(0,0,0,0.12),0 12px 40px rgba(0,0,0,0.24);margin:10vh auto;background-color:lightgray;overflow:auto;}#logreg-forms.jsx-4001438521 form.jsx-4001438521{width:100%;padding:15px;margin:auto;}#logreg-forms.jsx-4001438521 .form-control.jsx-4001438521{position:relative;box-sizing:border-box;height:auto;padding:10px;font-size:16px;}#logreg-forms.jsx-4001438521 .form-control.jsx-4001438521:focus{z-index:2;}#logreg-forms.jsx-4001438521 .form-signin.jsx-4001438521 input[type=\"email\"].jsx-4001438521{margin-bottom:-1px;border-bottom-right-radius:0;border-bottom-left-radius:0;}#logreg-forms.jsx-4001438521 .form-signin.jsx-4001438521 input[type=\"password\"].jsx-4001438521{border-top-left-radius:0;border-top-right-radius:0;}#logreg-forms.jsx-4001438521 .social-login.jsx-4001438521{margin:0 auto;margin-bottom:14px;}#logreg-forms.jsx-4001438521 .social-btn.jsx-4001438521{font-weight:100;color:white;font-size:0.9rem;}#logreg-forms.jsx-4001438521 a.jsx-4001438521{display:block;padding-top:10px;color:#fff;}#logreg-form.jsx-4001438521 .lines.jsx-4001438521{width:200px;border:1px solid red;}#logreg-forms.jsx-4001438521 button[type=\"submit\"].jsx-4001438521{margin-top:10px;}#logreg-forms.jsx-4001438521 .facebook-btn.jsx-4001438521{background-color:#3C589C;}#logreg-forms.jsx-4001438521 .google-btn.jsx-4001438521{background-color:#DF4B3B;}#logreg-forms.jsx-4001438521 .form-reset.jsx-4001438521,#logreg-forms.jsx-4001438521 .form-signup.jsx-4001438521{display:none;}#logreg-forms.jsx-4001438521 .form-signup.jsx-4001438521 .social-btn.jsx-4001438521{width:210px;}#logreg-forms.jsx-4001438521 .form-signup.jsx-4001438521 input.jsx-4001438521{margin-bottom:2px;}.form-signup.jsx-4001438521 .social-login.jsx-4001438521{margin:0 auto;}.submit.jsx-4001438521{background:-webkit-linear-gradient(0deg,#2dfbff 0%,#3c96ff 100%);border-radius:25px;color:#fff;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms{width:300px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-login.jsx-4001438521{width:200px;margin:0 auto;margin-bottom:10px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-btn.jsx-4001438521{font-size:1.3rem;font-weight:100;color:white;height:56px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-btn.jsx-4001438521:nth-child(1){margin-bottom:5px;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .social-btn.jsx-4001438521 span.jsx-4001438521{display:none;}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .facebook-btn.jsx-4001438521:after{content:'Facebook';}@media screen and (max-width.jsx-4001438521:500px) #logreg-forms .google-btn.jsx-4001438521:after{content:'Google+';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXHNpZ251cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2TEMsQUFLd0QsQUFJMUMsQUFlRSxBQWdCNEQsQUFRMUQsQUFNTyxBQU11QixBQUV0QixBQUtNLEFBTVosQUFJRyxBQU1GLEFBTUgsQUFLb0MsQUFFRSxBQUVGLEFBRWdCLEFBRWpCLEFBRUUsQUFHbEMsQUFJb0QsQUFTbkQsQUFJQSxBQUtNLEFBT0MsQUFHTCxBQUdLLEFBSUQsVUF0RnFCLENBbkNqQixBQXlCWixDQXhDTCxBQWdGWSxBQVkyQixBQW1CL0MsQUFJaUIsQ0F6QitDLEFBd0NoRSxDQWxFbUIsQUFVSCxBQXdCcEIsRUE5QmUsQUFnQnFDLENBb0M1QixDQTNFRSxBQWlEMkIsQUFpQ2pELEFBVUEsQ0FwRjZCLEFBZ0Y3QixLQTVGWSxDQWlCYyxBQTRCd0IsQUFFRixDQTRCekIsRUEvQ04sR0FNUCxFQVZkLEFBZ0JBLEFBd0NtQixHQS9FbkIsRUExQmtDLEVBOEJsQixFQThCaEIsR0FOQSxBQStDSSxBQUtnQixHQXBFWSxHQUtoQyxDQVppQixLQTZFYixRQTVFZSxBQXNERSxFQXZFRCxHQWRILE1Bc0NqQixJQU5BLElBakIrQixBQXVFbEIsQ0FyRkMsQ0FqQkksU0F1R2xCLEdBckZhLFlBQ0ksQ0FhQyxjQVpULEFBY1QsT0FiUSxNQUNLLFdBQ0MsWUFHZCxPQTlCRixXQUt3QixtR0FDSixtQkFDSixlQUNFLGlCQUNKLGFBQ0MsY0FDSCxXQUNFLGFBQ0ssa0JBQ0MsbUJBQ3BCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXHNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGVtYWlsOicnLFxyXG4gICAgICAgICAgICBhZGRyZXNzIDogJycsXHJcbiAgICAgICAgICAgIGNvbnRhY3QgOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6JycsXHJcbiAgICAgICAgICAgIGdvb2dsZUlkOicnLFxyXG4gICAgICAgICAgICBnaXZlbk5hbWU6JycsXHJcbiAgICAgICAgICAgIGZhbWlseU5hbWU6JycsXHJcbiAgICAgICAgICAgIHRva2VuOicnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQ9ICgpPT4ge1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICBcclxuICAgICAgICAkKCcucG9wdXAtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnI2JhY2tncm91bmQtc2lnbmluJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSkucmVtb3ZlQ2xhc3MoJ3Zpc3VhbC1zaWdudXAnKTtcclxuICAgICAgICB9KVxyXG5cclxuICBcclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgIC8vIFRoaXMgdHJpZ2dlcnMgZXZlcnl0aW1lIHRoZSBpbnB1dCBpcyBjaGFuZ2VkXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiBldnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLmNvbnRhY3QubGVuZ3RoPjApe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5yZXNwb25zZS5wcm9maWxlT2JqLFxyXG4gICAgICAgICAgICB0b2tlbjpyZXNwb25zZS50b2tlbklkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQoKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgYWxlcnQoJ1RoZXJlIHNob3VsZCBiZSBjb250YWN0IGRldGFpbHMuJylcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXNwb25zZUdvb2dsZVNpZ25JbiA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgdGhpcy5oaWRlc2lnbnVwKCk7ICBcclxuICAgIHZhciByZXMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5yZXNwb25zZS5wcm9maWxlT2JqLFxyXG4gICAgICAgICAgICB0b2tlbjpyZXNwb25zZS50b2tlbklkXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgIGRhdGFzLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgICAgIGRhdGFzLmFwcGVuZCgndG9rZW4nLCByZXNwb25zZS50b2tlbklkKTtcclxuICAgICAgICAgZmV0Y2goJy9hcGkvc2lnbmludXNlcicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YXMsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3JldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSAhPSB1bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTsgQ29va2llLnNldCgndXNlcicsZGF0YSl9fSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhpZGVzaWdudXAoKTsgXHJcbiAgLy8gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YXMgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgLy8gZGF0YXMuYXBwZW5kKCdmaWxlJywgdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGUpO1xyXG4gICAgZGF0YXMuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICAgZmV0Y2goJy9hcGkvY3JlYXRldXNlcicsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgLy8nQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAvLydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgIH0sIFxyXG4gICAgYm9keTpkYXRhcyxcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIClcclxuICAgIHRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhKXthbGVydChkYXRhLm1zZyk7IENvb2tpZS5zZXQoJ3VzZXInLGRhdGEpOyAgfX0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgXHJcblxyXG59O1xyXG5cclxuXHJcbiAgc2hvd3NpZ251cD0oKT0+e1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnI2JhY2tncm91bmQtc2lnbmluJykuY3NzKHsnZGlzcGxheSc6J2ZsZXgnfSkuYWRkQ2xhc3MoJ3Zpc3VhbC1zaWdudXAnKTtcclxuICAgICAgICAkKCcjbG9ncmVnLWZvcm1zJykuYWRkQ2xhc3MoJ2FuaW1hdGlvblNpZ251cCcpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaGlkZXNpZ251cD0oKT0+e1xyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJyNiYWNrZ3JvdW5kLXNpZ25pbicpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pLnJlbW92ZUNsYXNzKCd2aXN1YWwtc2lnbnVwJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxucmVuZGVyKCl7XHJcblxyXG4gIHJldHVybihcclxuPExheW91dD5cclxuXHJcbjxkaXYgaWQ9XCJiYWNrZ3JvdW5kLXNpZ25pblwiPlxyXG5cclxuXHJcbiAgICA8ZGl2IGlkPVwibG9ncmVnLWZvcm1zXCIgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTggY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlXCI+eDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDMgbWItMyBmb250MSB0b3BpY0NvbG9yIC5mb250c2l6ZUUtNlwiID4gU2lnbiBpbjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIHJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgICAgICBjbGllbnRJZD1cIjUxMTg4MDY3NDkwMS1nZm42djJuMWVqNjVycmxubnYyOW9kZ2Jqa3BraHBjai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIlNpZ24gaW4gd2l0aCBHb29nbGUrXCJcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3RoaXMucmVzcG9uc2VHb29nbGVTaWduSW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXt0aGlzLnJlc3BvbnNlR29vZ2xlU2lnbklufVxyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGdvb2dsZS1idG4gc29jaWFsLWJ0biBjb2wtbGctNiBjb2wtc20tMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW49e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGZhY2Vib29rLWJ0biBzb2NpYWwtYnRuIGNvbC1sZy02IGNvbC1zbS0xMlwiIHR5cGU9XCJidXR0b25cIj48c3Bhbj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gU2lnbiBpbiB3aXRoIEZhY2Vib29rPC9zcGFuPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMyBtYi0zIGZvbnQxIHRvcGljQ29sb3IgLmZvbnRzaXplRS02XCIgPiBTaWduIHVwPC9oMz5cclxuICAgICAgICAgICAgPGZvcm0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDFcIj5hZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQWRkcmVzc1wiIHZhbHVlPXt0aGlzLnN0YXRlLmFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQxXCI+Q29udGFjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRBZGRyZXNzXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDb250YWN0XCIgbmFtZT1cImNvbnRhY3RcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250YWN0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiAgY2xhc3NOYW1lPVwiZm9udDFcIj5TaWduIHVwIGFzIFNlbGxlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c21hbGwgaWQ9XCJlbWFpbEhlbHBcIiBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZGV0YWlscyB3aXRoIGFueW9uZSBlbHNlLjwvc21hbGw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxvZ2luIHJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJTaWduIGluIHdpdGggR29vZ2xlK1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzPXt0aGlzLnJlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5yZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBnb29nbGUtYnRuIHNvY2lhbC1idG4gY29sLWxnLTYgY29sLXNtLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICBpc1NpZ25lZEluPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBmYWNlYm9vay1idG4gc29jaWFsLWJ0biBjb2wtbGctNiBjb2wtc20tMTJcIiB0eXBlPVwiYnV0dG9uXCI+PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+IFNpZ24gaW4gd2l0aCBGYWNlYm9vazwvc3Bhbj4gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxzdHlsZSBqc3g+XHJcbntgXHJcblxyXG5cclxuLnZpc3VhbC1zaWdudXAge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLCAwLCAwLjMsIDEpO1xyXG5cclxufVxyXG4ucG9wdXAtY2xvc2Uge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogZGFya3JlZDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAxLjByZW07XHJcblx0d2lkdGg6IDIuMHJlbTtcclxuXHRoZWlnaHQ6IDIuMHJlbTtcclxuXHR0b3A6IDAuNXJlbTtcclxuXHRyaWdodDogMC41cmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcbiNiYWNrZ3JvdW5kLXNpZ25pbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9iYXRvXCIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHotaW5kZXg6MTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcblxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1ze1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTJweCA0MHB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICAgIG1hcmdpbjoxMHZoIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1jb250cm9sOmZvY3VzIHsgei1pbmRleDogMjsgfVxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJlbWFpbFwiXSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICAjbG9ncmVnLWZvcm1zIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWxvZ2lue1xyXG5cclxuICAgICAgbWFyZ2luOjAgYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcbiAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0bntcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm1zIGF7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICBcclxuICAjbG9ncmVnLWZvcm0gLmxpbmVze1xyXG4gICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgYm9yZGVyOjFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl17IG1hcmdpbi10b3A6MTBweDsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZhY2Vib29rLWJ0bnsgIGJhY2tncm91bmQtY29sb3I6IzNDNTg5QzsgfVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmdvb2dsZS1idG57IGJhY2tncm91bmQtY29sb3I6ICNERjRCM0I7fVxyXG4gIFxyXG4gICNsb2dyZWctZm9ybXMgLmZvcm0tcmVzZXQsICNsb2dyZWctZm9ybXMgLmZvcm0tc2lnbnVweyBkaXNwbGF5OiBub25lOyB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWdudXAgLnNvY2lhbC1idG57IHdpZHRoOjIxMHB4OyB9XHJcbiAgXHJcbiAgI2xvZ3JlZy1mb3JtcyAuZm9ybS1zaWdudXAgaW5wdXQgeyBtYXJnaW4tYm90dG9tOiAycHg7fVxyXG4gIFxyXG4gIC5mb3JtLXNpZ251cCAuc29jaWFsLWxvZ2lue1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDBkZWcsICAjMmRmYmZmIDAlLCAjM2M5NmZmIDEwMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAvKiBNb2JpbGUgKi9cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAgICAgI2xvZ3JlZy1mb3Jtc3tcclxuICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5zb2NpYWwtbG9naW57XHJcbiAgICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5zb2NpYWwtYnRue1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0bjpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgI2xvZ3JlZy1mb3JtcyAuc29jaWFsLWJ0biBzcGFue1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAjbG9ncmVnLWZvcm1zICAuZmFjZWJvb2stYnRuOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDonRmFjZWJvb2snO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNsb2dyZWctZm9ybXMgIC5nb29nbGUtYnRuOmFmdGVye1xyXG4gICAgICAgICAgY29udGVudDonR29vZ2xlKyc7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5gfVxyXG48L3N0eWxlPlxyXG5cclxuPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\signup.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./constant/main.js":
/*!**************************!*\
  !*** ./constant/main.js ***!
  \**************************/
/*! exports provided: wesitename, Url, ImageUrl, NavLink, homeUrl, myoderUrl, createcategorUrl, categoryUrl, itemUrl, createitemUrl, updateitemUrl, myshopmUrl, shopmUrl, updateshopUrl, createshopUrl, cartitemMSG, cartUserdetails, cartUserNotlogin */
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
      className: "jsx-963555908"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-963555908"
    }, "Agency - Start Bootstrap Theme"), __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      className: "jsx-963555908"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossOrigin: "anonymous",
      className: "jsx-963555908"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-963555908"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap",
      rel: "stylesheet",
      className: "jsx-963555908"
    })), this.props.children, __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossOrigin: "anonymous",
      className: "jsx-963555908"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossOrigin: "anonymous",
      className: "jsx-963555908"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossOrigin: "anonymous",
      className: "jsx-963555908"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "963555908"
    }, ".projects div{-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects div:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects div:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects div:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects div:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects div:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects div:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects div:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects div:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects div:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects div:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects div:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects div:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects div:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects div:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects div:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.font1{font-family:'Titillium Web',sans-serif;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.font7{font-family:'Trade Winds',cursive;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.25em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontsizeE2-25{font-size :2.25em;}.fontweight700{font-weight :700;}.pointer{cursor:pointer;}.progress{cursor:progress;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RJLEFBSTRCLEFBS0YsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdELEFBSU4sQUFHQSxBQVEwQixBQUdQLEFBR0QsQUFHQSxBQUdJLEFBR0wsQUFHSSxBQUlyQixBQUdKLEFBR0UsQUFHSSxBQUdBLEFBR0EsQUFHQyxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0YsQUFHRyxBQUdELEFBR0YsQUFHRyxBQUlwQixBQUV5QixBQUNDLFVBcEZ6QixBQUdBLENBaUNBLEVBR0EsRUFOQSxBQVNBLEFBR0EsQUFHQSxBQWtCQSxBQVNBLEFBUXlCLENBQ0MsQ0FqQzFCLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFTQSxBQVNBLENBWkEsQUFTQSxZQXBEQSxDQVRBLEFBR0EsQ0FOQSxFQWVBLENBTkEsSUFaQSxTQWZILEVBMUNBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsSUE1QzZCLDBEQUNILG9EQUMxQiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxNYWluTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3d3aWR0aDw5OTApe1xyXG4gICAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgICAkKCcuaXNkZXNrdG9wX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICQoJy5pc2Rlc2t0b3BfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBpc01vYmlsZSgpO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShpc01vYmlsZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgIFxyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXYgPlxyXG48SGVhZD5cclxuPHRpdGxlPkFnZW5jeSAtIFN0YXJ0IEJvb3RzdHJhcCBUaGVtZTwvdGl0bGU+XHJcblxyXG4gIFxyXG5cclxuIDxtZXRhIG5hbWU9XCJnb29nbGUtc2lnbmluLWNsaWVudF9pZFwiIGNvbnRlbnQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BY21lfEFudG9ufENhYmlufEluZGllK0Zsb3dlcnxUcmFkZStXaW5kc3xVYnVudHUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTp3Z2h0QDcwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgXHJcbiAgICBcclxuXHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNC4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUo2cWE0ODQ5YmxFMitwb1Q0V255S2h2NXZaRjVTclBvMGlFandCdktVN2ltR0ZBVjB3d2oxeVlmb1JTSm9aK25cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd2ZTREYyRTUwWTJEMXVVZGowTzN1TUJKbmp1VUQ0SWg3WXdhWWQxaXFma3RqMFVvZDhHQ0V4bDNPZzhpZndCNlwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcblxyXG4gPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgIHtgXHJcbiAgIFxyXG4gICAucHJvamVjdHMgZGl2IHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuMHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg5KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuMnM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMi42cztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDIuOHM7XHJcbn1cclxuLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzLjBzO1xyXG59XHJcbi5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcclxufVxyXG4ucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE1KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDMuNDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxufVxyXG4gIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICAuZm9udDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgfVxyXG4gICAuZm9udDJ7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQze1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbnRvbicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ1e1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbmRpZSBGbG93ZXInLCBjdXJzaXZlO1xyXG4gICB9XHJcbiAgIC5mb250NntcclxuICAgIGZvbnQtZmFtaWx5OiAnQWNtZScsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQ3e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmFkZSBXaW5kcycsIGN1cnNpdmU7XHJcbiAgIH1cclxuXHJcbiAgIC50b3BpY0NvbG9yIHtcclxuICAgIGNvbG9yOmRhcmtibHVlO1xyXG4gICB9XHJcbiAgIC5zdWJ0b3BpY0NvbG9ye1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgfVxyXG4gICAuZm9udGNvbG9yT3Jhbmdle1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JTa3libHVle1xyXG4gICAgIGNvbG9yIDogIzAwOEFDQztcclxuICAgfVxyXG4gICAuZm9udGNvbG9ycGlua3tcclxuICAgICBjb2xvciA6ICNDQzAwNDc7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvcnJlZHtcclxuICAgICBjb2xvciA6ICNDQzAwMDA7XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS01IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNiB7XHJcbiAgICBmb250LXNpemUgOiAwLjZlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTcge1xyXG4gICAgZm9udC1zaXplIDogMC43ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS04IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuOGVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtOSB7XHJcbiAgICBmb250LXNpemUgOiAwLjllbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMSB7XHJcbiAgICBmb250LXNpemUgOiAxZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTEtMjUge1xyXG4gICAgZm9udC1zaXplIDogMS4yNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTUge1xyXG4gICAgZm9udC1zaXplIDogMS41ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTIge1xyXG4gICAgZm9udC1zaXplIDogMmVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUyLTI1IHtcclxuICAgIGZvbnQtc2l6ZSA6IDIuMjVlbTtcclxuICAgfVxyXG4gICAuZm9udHdlaWdodDcwMCB7XHJcbiAgICBmb250LXdlaWdodCA6IDcwMFxyXG4gICB9XHJcblxyXG4gICAucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAucHJvZ3Jlc3Mge2N1cnNvcjogcHJvZ3Jlc3M7fVxyXG4gICBgfVxyXG4gPC9zdHlsZT5cclxuXHJcbiAgPC9kaXY+XHJcblxyXG4pXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
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
      className: "jsx-1424358053" + " " + "js-side-nav-container side-nav-container sidenavbar"
    }, __jsx("div", {
      className: "jsx-1424358053" + " " + "js-side-nav side-nav"
    }, __jsx("a", {
      className: "jsx-1424358053" + " " + "js-menu-close menu-close navbar-brand font7"
    }, "\xA0", __jsx("img", {
      src: "https://img.icons8.com/windows/25/FF8C8C/delete-slide.png",
      className: "jsx-1424358053"
    }), "\xA0 MYBIZ.COM"), __jsx("h4", {
      className: "jsx-1424358053" + " " + "sidenav-link-topic  font1"
    }, "  \xA0 ", this.props.sidenavconst.topic), __jsx("div", {
      className: "jsx-1424358053" + " " + "sidenavbar-link pointer"
    }, this.props.sidenavconst.sidenavlink.map((c, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: i,
      href: c.suburl + c.type ? c.type : c.itemlongname ? c.itemlongname + '?ide=' + c._id : c.district
    }, __jsx("div", {
      className: "jsx-1424358053"
    }, __jsx("a", {
      className: "jsx-1424358053" + " " + "nav-link font1"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "jsx-1424358053" + " " + "fa fa-telegram"
    }), " \xA0", c.name ? c.name : c.itemname ? c.itemname : c.district))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1424358053"
    }, ".sidenavbar.jsx-1424358053{z-index:100;}.menu-close.jsx-1424358053{color:rgb(61,228,246);font-size:20px;padding:20px 10px 20px 10px;background:rgba(7,36,159 );}.side-nav.jsx-1424358053{position:relative;-webkit-transition:-webkit-transform 0.35s ease-out;-webkit-transition:transform 0.35s ease-out;transition:transform 0.35s ease-out;background:darkblue;opacity:0.9;height:100%;width:90%;max-width:200px;box-shadow:0 5px 6px 4px rgba(0,0,0,.2);-webkit-transform:translateX(-102%);-ms-transform:translateX(-102%);transform:translateX(-102%);will-change:transform;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.side-nav-container.jsx-1424358053{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none;}.side-nav-container.jsx-1424358053:before{-webkit-transition:opacity 0.3s cubic-bezier(0,0,0.3,1);transition:opacity 0.3s cubic-bezier(0,0,0.3,1);content:'';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);will-change:opacity;opacity:0;pointer-events:none;}.side-nav-animatable.jsx-1424358053 .side-nav.jsx-1424358053{-webkit-transition:-webkit-transform 0.33s cubic-bexier(0,0,0.3,0.1);-webkit-transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);z-index :100;}.side-nav-animatable.side-nav-visible.jsx-1424358053 .side-nav.jsx-1424358053{-webkit-transition:-webkit-transform 0.33s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 0.33s cubic-bezier(0,0,0.3,1);transition:transform 0.33s cubic-bezier(0,0,0.3,1);}.side-nav-visible.jsx-1424358053{pointer-events:auto;z-index :100;}.side-nav-visible.jsx-1424358053 .side-nav.jsx-1424358053{-webkit-transform:none;-ms-transform:none;transform:none;}.side-nav-visible.jsx-1424358053:before{opacity:1;}.sidenav-link-topic.jsx-1424358053{padding:20px 10px 10px 10px;color:#F7A12D;}.sidenavbar-link.jsx-1424358053{padding:10%;overflow:auto;}.sidenavbar-link.jsx-1424358053 a.jsx-1424358053{color:#C4FBFE;border-bottom:1px solid rgba(255,255,255,0.5);}.sidenavbar-link.jsx-1424358053 a.jsx-1424358053:hover{-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);-webkit-transition:0.5s;transition:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVHLEFBSWMsQUFJVyxBQU1OLEFBY0gsQUFTb0MsQUFjSyxBQUlGLEFBR2xDLEFBSUwsQUFHTCxBQUdvQixBQUlmLEFBSUksQUFJSyxVQWR4QixFQTdEQSxBQW9Fa0IsRUFJb0MsQ0FoRC9DLEdBZDZCLEVBNEN2QixFQWxERSxBQXFCVCxJQTRDTixFQTNDVyxBQXNDSyxLQVRoQixJQWxENEIsRUFzQmhCLEdBc0NaLFNBckNnQixNQThCaEIsR0FlQSxLQW5FNkIsRUF1QlQsV0ErQ0YsU0E5Q2xCLEtBdkJBLFlBMEJXLFdBQ0csR0E0Q2QsV0EzQ2tCLGtCQUNaLEdBekJjLEdBMEJaLFFBQ0MsU0ExQkcsQUEyQkwsT0FDc0IsQUFXN0IsS0F0Q1ksQ0FrQ0MsV0FqQ0gsRUFrQ1YsT0FQb0IsQ0ExQkosZ0JBQzJCLEdBMEJqQyxVQUNVLG9CQUNwQixPQTNCNEIsZ0dBQ04sc0JBRUEsOEVBQ3RCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50PSAoKT0+IHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm9wZW4tc2lkZS1uYXZiYXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKS5hZGRDbGFzcygnc2lkZS1uYXYtYW5pbWF0YWJsZSBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJCgnLmpzLW1lbnUtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKS5hZGRDbGFzcygnc2lkZS1uYXYtYW5pbWF0YWJsZScpLnJlbW92ZUNsYXNzKCcgc2lkZS1uYXYtdmlzaWJsZScpO1xyXG4gICAgICB9KVxyXG4gICAgICAkKCcuc2lkZW5hdmJhcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlJykucmVtb3ZlQ2xhc3MoJyBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBzaG93U2lkZWJhcj0oKT0+e1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlIHNpZGUtbmF2LXZpc2libGUnKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5yZW5kZXIoKXtcclxuICByZXR1cm4oXHJcbjxMYXlvdXQ+XHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJqcy1zaWRlLW5hdi1jb250YWluZXIgc2lkZS1uYXYtY29udGFpbmVyIHNpZGVuYXZiYXJcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJqcy1zaWRlLW5hdiBzaWRlLW5hdlwiPlxyXG4gIFxyXG4gIDxhICBjbGFzc05hbWU9XCJqcy1tZW51LWNsb3NlIG1lbnUtY2xvc2UgbmF2YmFyLWJyYW5kIGZvbnQ3XCI+Jm5ic3A7XHJcbiAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL3dpbmRvd3MvMjUvRkY4QzhDL2RlbGV0ZS1zbGlkZS5wbmdcIi8+Jm5ic3A7XHJcbiAgTVlCSVouQ09NXHJcbiAgPC9hPlxyXG5cclxuICA8aDQgY2xhc3NOYW1lPVwic2lkZW5hdi1saW5rLXRvcGljICBmb250MVwiPiAgJm5ic3A7IHt0aGlzLnByb3BzLnNpZGVuYXZjb25zdC50b3BpY308L2g0PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdmJhci1saW5rIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpZGVuYXZjb25zdC5zaWRlbmF2bGluay5tYXAoKGMsaSk9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtjLnN1YnVybCtjLnR5cGU/Yy50eXBlOmMuaXRlbWxvbmduYW1lP2MuaXRlbWxvbmduYW1lKyc/aWRlPScrYy5faWQ6Yy5kaXN0cmljdH0gPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZm9udDFcIiA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGVsZWdyYW1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ICZuYnNwO3tjLm5hbWU/Yy5uYW1lOmMuaXRlbW5hbWU/Yy5pdGVtbmFtZTpjLmRpc3RyaWN0fTwvYT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbiAgPHN0eWxlIGpzeD5cclxuICB7YFxyXG5cclxuLnNpZGVuYXZiYXJ7XHJcbiAgei1pbmRleDoxMDA7XHJcbn1cclxuXHJcbi5tZW51LWNsb3Nle1xyXG5jb2xvcjogcmdiKDYxLCAyMjgsIDI0Nik7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxucGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxuYmFja2dyb3VuZDogcmdiYSg3LCAzNiwgMTU5ICk7XHJcbn1cclxuLnNpZGUtbmF2IHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgZWFzZS1vdXQ7XHJcbmJhY2tncm91bmQ6IGRhcmtibHVlO1xyXG5vcGFjaXR5OiAwLjk7XHJcbmhlaWdodDogMTAwJTtcclxud2lkdGg6IDkwJTtcclxubWF4LXdpZHRoOiAyMDBweDtcclxuYm94LXNoYWRvdzogMCA1cHggNnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDIlKTtcclxud2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuXHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZGUtbmF2LWNvbnRhaW5lciB7XHJcbnBvc2l0aW9uOiBmaXhlZDtcclxubGVmdDogMDtcclxudG9wOiAwO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uc2lkZS1uYXYtY29udGFpbmVyOmJlZm9yZSB7XHJcbnRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKTtcclxuY29udGVudDogJyc7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMDtcclxucmlnaHQ6IDA7XHJcbmJvdHRvbTogMDtcclxubGVmdDogMDtcclxuYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbndpbGwtY2hhbmdlOiBvcGFjaXR5O1xyXG5vcGFjaXR5OiAwO1xyXG5wb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG4uc2lkZS1uYXYtYW5pbWF0YWJsZSAuc2lkZS1uYXYge1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zM3MgY3ViaWMtYmV4aWVyKDAsIDAsIDAuMywgMC4xKTtcclxuei1pbmRleCA6IDEwMDtcclxufVxyXG4uc2lkZS1uYXYtYW5pbWF0YWJsZS5zaWRlLW5hdi12aXNpYmxlIC5zaWRlLW5hdiB7XHJcbnRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjMzcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4zLCAxKTtcclxufVxyXG4uc2lkZS1uYXYtdmlzaWJsZSB7XHJcbnBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG56LWluZGV4IDogMTAwO1xyXG59XHJcbi5zaWRlLW5hdi12aXNpYmxlIC5zaWRlLW5hdiB7XHJcbnRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uc2lkZS1uYXYtdmlzaWJsZTpiZWZvcmUge1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcbi5zaWRlbmF2LWxpbmstdG9waWMge1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgY29sb3I6ICNGN0ExMkQ7XHJcbn1cclxuLnNpZGVuYXZiYXItbGlua3tcclxuICAgIHBhZGRpbmc6MTAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnNpZGVuYXZiYXItbGluayBhe1xyXG4gICAgY29sb3I6ICNDNEZCRkUgO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSA7XHJcbn1cclxuLnNpZGVuYXZiYXItbGluayBhOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBcclxufVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SideNav.js */"));
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
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() / 6) {
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
            'opacity': '0.6',
            'padding-left': '20px'
          });
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).scroll(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() / 4) {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
                'background-color': 'darkblue',
                'opacity': '0.6',
                'padding-left': '20px'
              });
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_4___default()('.nav-link-main').css({
                'background-color': 'black',
                'opacity': '0.6',
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
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, this.props.sidenavconst.visible ? __jsx(_layouts_SideNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      ref: "sidenav",
      sidenavconst: this.props.sidenavconst
    }) : null, __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ref: "signup",
      showsignup: this.props.showsignup
    }), __jsx("div", {
      className: "jsx-2654486189" + " " + "subnav"
    }, __jsx("nav", {
      className: "jsx-2654486189" + " " + "navbar sub1nav sticky-top navbar-expand-lg"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2654486189" + " " + "navbar-brand font7 logo-link"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_7__["wesitename"]), this.props.sidenavconst.visible ? __jsx("button", {
      onClick: this.showsidebar.bind(this),
      type: "button",
      className: "jsx-2654486189" + " " + "btn btn-primary all-link font1"
    }, this.props.sidenavconst.topiclink) : __jsx("a", {
      href: "#",
      className: "jsx-2654486189" + " " + "navbar-brand font7 all-link"
    }, "MYBIZ.COM"), __jsx("button", {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      className: "jsx-2654486189" + " " + "navbar-toggler togglemenuO menuOpen"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/30/ffffff/menu.png",
      className: "jsx-2654486189"
    })), __jsx("button", {
      type: "button",
      className: "jsx-2654486189" + " " + " navbar-toggler togglemenuC menuClose"
    }, __jsx("img", {
      src: "https://img.icons8.com/ios/25/ffffff/delete-sign.png",
      className: "jsx-2654486189"
    })), __jsx("div", {
      id: "navbarNavAltMarkup",
      className: "jsx-2654486189" + " " + "collapse navbar-collapse"
    }, __jsx("div", {
      className: "jsx-2654486189" + " " + "navbar-nav"
    }, _constant_main__WEBPACK_IMPORTED_MODULE_7__["NavLink"].map((x, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: i,
      href: x.url
    }, __jsx("a", {
      className: "jsx-2654486189" + " " + "nav-link nav-link-main active font1"
    }, x.urlname))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: "100",
      href: "#"
    }, __jsx("a", {
      onClick: this.showsignup.bind(this),
      className: "jsx-2654486189" + " " + "nav-link nav-link-main active font1"
    }, "signin"))), "           "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2654486189"
    }, ".subnav.jsx-2654486189{z-index :100;}.navbar-nav.jsx-2654486189{padding-left :100px;}.navbar-nav.jsx-2654486189 a.jsx-2654486189{color :white;}.navbar-nav.jsx-2654486189 a.jsx-2654486189:hover{color :gray;}.navbar.jsx-2654486189{z-index :50;height:60px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-2654486189{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;height:50px;}.togglemenuC.jsx-2654486189{display:none;}.sticky-top.jsx-2654486189{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.all-link.jsx-2654486189{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2lCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBS0EsQUFTYyxBQVFoQyxBQUUwQixBQU1ULFlBNUJmLEFBSWdCLENBaEJoQixBQVFBLEFBd0JELEFBU0EsT0F0Q0MsSUFjOEIsQUFrQmQsRUFWMkIsd0JBUDNCLFlBQ0EsRUFpQlYsTUFDaUMsSUFqQkksc0NBTWYsd0JBQ1osWUFDRCxRQVVoQixJQWpCQSxBQVFBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLy4uL2xheW91dHMvU2lkZU5hdic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi8uLi9jb21wb25lbnRzL3NpZ251cCc7XHJcbmltcG9ydCB7TmF2TGluayx3ZXNpdGVuYW1lfSBmcm9tICcuLy4uL2NvbnN0YW50L21haW4nO1xyXG4gXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICAvL3NpZGUgbmF2IGJhciBvcGVuXHJcbiAgICBzaG93c2lkZWJhcigpe1xyXG4gICAgICAgIHRoaXMucmVmcy5zaWRlbmF2LnNob3dTaWRlYmFyKCk7XHJcbiAgICAgIH1cclxuICAgIC8vc2hvdyBzaWdudXBcclxuICAgICAgc2hvd3NpZ251cCgpe1xyXG4gICAgICAgIHRoaXMucmVmcy5zaWdudXAuc2hvd3NpZ251cCgpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcudG9nZ2xlbWVudUMnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2Rpdi5uYXZiYXItY29sbGFwc2UnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5tZW51Q2xvc2UnKS5mYWRlT3V0KDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudU9wZW4nKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJy50b2dnbGVtZW51TycpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudU9wZW4nKS5mYWRlT3V0KDEwKTtcclxuICAgICAgICAgICAgICAgICQoJy5tZW51Q2xvc2UnKS5mYWRlSW4oMTAwKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uIGVmZmVjdCBmb3IgbmF2YmFyIFxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIC8vIGNoZWNrcyBpZiB3aW5kb3cgaXMgc2Nyb2xsZWQgbW9yZSB0aGFuIDUwMHB4LCBhZGRzL3JlbW92ZXMgc29saWQgY2xhc3NcclxuICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gICQod2luZG93KS53aWR0aCgpLzYpIHsgXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zdWIxbmF2JykuYWRkQ2xhc3MoJ1NvbGlkTmF2JykuY3NzKHsnb3BhY2l0eSc6JzEnfSkuYWRkQ2xhc3MoJ2ZpeGVkLXRvcCcpLnJlbW92ZUNsYXNzKCdzdGlja3ktdG9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5sb2dvLWxpbmsnKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTsgJCgnLmFsbC1saW5rJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgJCgnLnN1YjFuYXYnKS5yZW1vdmVDbGFzcygnU29saWROYXYnKS5yZW1vdmVDbGFzcygnZml4ZWQtdG9wJykuYWRkQ2xhc3MoJ3N0aWNreS10b3AnKTtcclxuICAgICAgICAgICAgICAgICAgJCgnLmFsbC1saW5rJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7ICQoJy5sb2dvLWxpbmsnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tNb2JpbGUoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93d2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3d3aWR0aDw5OTApe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2JsYWNrJywnb3BhY2l0eSc6JzAuNicsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAkKHdpbmRvdykud2lkdGgoKS80KSB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm5hdi1saW5rLW1haW4nKS5jc3MoeydiYWNrZ3JvdW5kLWNvbG9yJzonZGFya2JsdWUnLCdvcGFjaXR5JzonMC42JywncGFkZGluZy1sZWZ0JzonMjBweCd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2JsYWNrJywnb3BhY2l0eSc6JzAuNicsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2tNb2JpbGUoKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja01vYmlsZSk7XHJcbiAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2lkZW5hdmNvbnN0LnZpc2libGUgPzxTaWRlTmF2IHJlZj1cInNpZGVuYXZcIiAgc2lkZW5hdmNvbnN0PXt0aGlzLnByb3BzLnNpZGVuYXZjb25zdH0vPjpudWxsfVxyXG5cclxuICAgICAgICAgICAgPFNpZ25VcCByZWY9XCJzaWdudXBcIiBzaG93c2lnbnVwPXt0aGlzLnByb3BzLnNob3dzaWdudXB9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibmF2XCIgPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzdWIxbmF2IHN0aWNreS10b3AgbmF2YmFyLWV4cGFuZC1sZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgZm9udDcgbG9nby1saW5rXCIgaHJlZj1cIiNcIj57d2VzaXRlbmFtZX08L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3QudmlzaWJsZT88YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd3NpZGViYXIuYmluZCh0aGlzKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBhbGwtbGluayBmb250MVwiPnt0aGlzLnByb3BzLnNpZGVuYXZjb25zdC50b3BpY2xpbmt9PC9idXR0b24+OjxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBmb250NyBhbGwtbGlua1wiIGhyZWY9XCIjXCI+TVlCSVouQ09NPC9hPn1cclxuIFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyIHRvZ2dsZW1lbnVPIG1lbnVPcGVuXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2QWx0TWFya3VwXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMzAvZmZmZmZmL21lbnUucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgbmF2YmFyLXRvZ2dsZXIgdG9nZ2xlbWVudUMgbWVudUNsb3NlXCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9kZWxldGUtc2lnbi5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIHtOYXZMaW5rLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXt4LnVybH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiA+e3gudXJsbmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PScxMDAnIGhyZWY9JyMnPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgb25DbGljaz17dGhpcy5zaG93c2lnbnVwLmJpbmQodGhpcyl9ID5zaWduaW48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuc3VibmF2IHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2IGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLlNvbGlkTmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCBncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAudG9nZ2xlbWVudUN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmVcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuc3RpY2t5LXRvcHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5hbGwtbGlua3tcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SubNavbar.js */"));
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

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Imageside = props => {
  return __jsx("div", {
    className: "jsx-3443398829" + " " + "col-lg-6 col-sm-12"
  }, __jsx("div", {
    id: "carouselExampleIndicators",
    "data-ride": "carousel",
    className: "jsx-3443398829" + " " + "carousel slide"
  }, __jsx("ol", {
    className: "jsx-3443398829" + " " + "carousel-indicators"
  }, props.shop.images.map((x, i) => __jsx("li", {
    key: i,
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": i,
    className: "jsx-3443398829" + " " + ((i == 0 ? 'active' : 'c') || "")
  }))), __jsx("div", {
    className: "jsx-3443398829" + " " + "carousel-inner"
  }, props.shop.images.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-3443398829" + " " + ((i == 0 ? 'carousel-item active' : 'carousel-item') || "")
  }, __jsx("img", {
    src: _constant_main__WEBPACK_IMPORTED_MODULE_5__["ImageUrl"] + x,
    alt: "first slide",
    width: "100%",
    className: "jsx-3443398829" + " " + "d-block w-100 silde2image"
  })))), __jsx("a", {
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
  }, props.shop.createDate)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3443398829"
  }, ".card-footer.jsx-3443398829{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:1em 0.75em;}.card-footer-button.jsx-3443398829{padding:0.5em 0.1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxvcmRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNTLEFBRTJCLEFBU00sY0FSSixNQVNwQixVQVJVLE1BQ0MsT0FDUSxlQUNJLG1CQUV2QiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBTdWJOYXZCYXIgZnJvbSAnLi8uLi9sYXlvdXRzL1N1Yk5hdmJhcic7XHJcbmltcG9ydCAge1VybCxJbWFnZVVybCxjcmVhdGVpdGVtVXJsLHVwZGF0ZXNob3BVcmwsaXRlbVVybH0gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcblxyXG5jb25zdCBJbWFnZXNpZGU9KHByb3BzKT0+IHtcclxuICAgIHJldHVybihcclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG48b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG57cHJvcHMuc2hvcC5pbWFnZXMubWFwKCh4LGkpPT5cclxuICAgIDxsaSBrZXk9e2l9IGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPXtpfSBjbGFzc05hbWU9e2k9PTA/J2FjdGl2ZSc6J2MnfSA+PC9saT4gXHJcbiAgICApfVxyXG48L29sPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+ICAgXHJcbiAgICB7cHJvcHMuc2hvcC5pbWFnZXMubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2k9PTA/J2Nhcm91c2VsLWl0ZW0gYWN0aXZlJzonY2Fyb3VzZWwtaXRlbSd9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPXtJbWFnZVVybCt4fSBhbHQ9XCJmaXJzdCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgXHJcbjwvZGl2PlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG48L2E+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuPC9hPlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgY2FyZC1mb290ZXItYnV0dG9uXCI+e3Byb3BzLnNob3AuY3JlYXRlRGF0ZX08L3NtYWxsPlxyXG4gXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgIHtgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXItYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250ZW50c2lkZT0ocHJvcHMpPT57XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+e3Byb3BzLnNob3Auc2hvcE5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NiBzdWJ0b3BpY0NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3Byb3BzLnNob3AuY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPntwcm9wcy5zaG9wLmRpc3RyaWN0KycvJytwcm9wcy5zaG9wLnRvd259IDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+e3Byb3BzLnNob3AuY29udGFjdDErJy8nK3Byb3BzLnNob3AuY29udGFjdDJ9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvcC5jb250ZW50MX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG9wLmNvbnRlbnQyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2ZpbGUtc3ViY2FyZC10aXRsZSBmb250MiBmb250Y29sb3JTa3libHVlXCI+ICZuYnNwOyA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3Auc2hvcERldGFpbD9wcm9wcy5zaG9wLnNob3BEZXRhaWwubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcHJvZmlsZS1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyB7eC5uYW1lfSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBwcm9maWxlLXNwZWNiXCI+ICZuYnNwOyB7eC52YWx1ZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtjcmVhdGVpdGVtVXJsKyc/aWQ9Jytwcm9wcy5zaG9wLl9pZCsnJnNob3BuYW1lPScrcHJvcHMuc2hvcC5zaG9wTmFtZX0+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvbmV3LXZpZXcucG5nXCIvPiAmbmJzcDthZGQgbmV3IGl0ZW08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXBkYXRlc2hvcFVybCtwcm9wcy5zaG9wLl9pZH0+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9uZXctdmlldy5wbmdcIi8+ICZuYnNwO3VwZGF0ZSBzaG9wPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9maWxle1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtdG9waWN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1zcGVjYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NGNTcwRSA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1zcGVjYntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNFMTkwMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1zdWJjYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JY3V0cHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLklwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IENhcnRMaXN0PShwcm9wcyk9PntcclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udDYgZm9udGNvbG9yT3JhbmdlXCI+e308L2g1PlxyXG4gICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cgcHJvZmlsZS1jc3MgcHJvamVjdHNcIj5cclxuICAgXHJcbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoYyxpKT0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTJcIj5cclxuICAgICAgICA8TGluayBocmVmPXtpdGVtVXJsK2MudXJsbmFtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZi1jYXJkLWltZy10b3BcIiBzcmM9e0ltYWdlVXJsK2MuaW1hZ2VzWzBdfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+e2MuaXRlbW5hbWV9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICA8YT57Yy5jYXRlZ2VyeX0gLSB7Yy5zdWJjYXRlZ2VyeX08L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT5Scy57Yy5pdGVtUHJpY2V9LjAwPC9zdHJpa2U+ICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4ge2MuaXRlbWRpc2NvdW50fSUgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy57LypjLnByaWNlKigxMDAtYy5kaXNjb3VudCkvMTAwKi99PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgIHtjLmNvbnRlbnQxLnNsaWNlKDAsMTUwKX0uLi5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBmbG9hdC1sZWZ0XCI+MjAyMC8yNS81PC9zbWFsbD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuYWRkdG9jYXJ0LmJpbmQodGhpcyxjLl9pZCxjLml0ZW1uYW1lKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtIGlzbW9iaWxlX2Rpc2FibGVcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9mYXZvcml0ZS1jYXJ0LnBuZ1wiLz4gJm5ic3A7QWRkIHRvIENhcnQ8L2E+XHJcbiAgICAgICAgICAgICA8YSBvbkNsaWNrPXtwcm9wcy5hZGR0b2NhcnQuYmluZCh0aGlzLGMuX2lkLGMuaXRlbW5hbWUpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtIGlzbW9iaWxlX2Rpc2FibGVcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9pbi10cmFuc2l0LnBuZ1wiLz4gJm5ic3A7IE9yZGVyIE5vdzwvYT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgICAgICAgICAgIGAudW5pdGNvdW50LXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWNzc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWNzcy10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiA6IDAuNWVtIDAgO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmYtY2FyZC1pbWctdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnZlcnNlICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjQ7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT3JkZXJUYWJsZT0ocHJvcHMpPT57XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItdGFibGVcIj5cclxuXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtIGNvbC0xMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ2FsbCcpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9zaG93LWFsbC12aWV3cy5wbmdcIi8+IEFsbDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCduZXcnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvbmV3LnBuZ1wiLz4gbmV3PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ21haWwnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvdXBsb2FkLW1haWwucG5nXCIvPiBlbWFpbDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdjb25maXJtJyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL2NoZWNrZWQtY2hlY2tib3gucG5nXCIvPiBjb25maXJtPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ3JlbW92ZScpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvdHJhc2gucG5nXCIvPiByZW1vdmVzPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnN0YXRlPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JdGVtIERldGFpbHM8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyIGRldGFpbHM8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk1hc3NhZ2VzPC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cclxuICBcclxuICB7cHJvcHMub3JkZXJzLm1hcCgoeCxpKT0+XHJcbiAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICA8dGg+PGRpdj48aW1nIHdpZHRoPVwiNTBweFwiIHNyYz17SW1hZ2VVcmwreC5pdGVtLmltYWdlc1swXX0gLz5cclxuICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRzaXplRS04XCI+e3guY3JlYXRlRGF0ZX08L3A+XHJcbiAgICAgICA8L2Rpdj4gPC90aD5cclxuICAgICAgPHRkPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj57eC5zdGF0ZX0gPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCduZXcnKX0gc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvMDAwMDAwL25ldy5wbmdcIi8+IFxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCdtYWlsJyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC91cGxvYWQtbWFpbC5wbmdcIi8+IFxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCdjb25maXJtJyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC9jaGVja2VkLWNoZWNrYm94LnBuZ1wiLz5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwncmVtb3ZlJyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC90cmFzaC5wbmdcIi8+IDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj57eC5pdGVtLml0ZW1sb25nbmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgIDxwPnt4Lml0ZW0uY2F0ZWdlcnl9L3t4Lml0ZW0uc3ViY2F0ZWdlcnl9IDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+UnMue3guaXRlbS5pdGVtUHJpY2UqKDEwMC14Lml0ZW0uaXRlbWRpc2NvdW50KS8xMDB9IHgge3guaXRlbS5xdHl9ID0gUnMue3guaXRlbS5pdGVtUHJpY2UqKDEwMC14Lml0ZW0uaXRlbWRpc2NvdW50KS8xMDAqeC5pdGVtLnF0eX0gPC9wPlxyXG4gICAgICAgICAgPHAgPiA8c3RyaWtlIGNsYXNzTmFtZT1cImZvbnRzaXplRS04XCI+UnMue3guaXRlbS5pdGVtUHJpY2V9LjAwPC9zdHJpa2U+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnRjb2xvck9yYW5nZSBmb250c2l6ZUUtOFwiPnt4Lml0ZW0uaXRlbWRpc2NvdW50fSUgPC9zcGFuPiAgUnMue3guaXRlbS5pdGVtUHJpY2UqKDEwMC14Lml0ZW0uaXRlbWRpc2NvdW50KS8xMDB9IDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT1cInVzZXItZGV0YWlscyBmb250NlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj57eC51c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgPiB7eC51c2VyLmVtYWlsfSAtIHt4LnVzZXIuY29udGFjdH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHMgZm9udDZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+Y3VzOiB7eC51c2VyTXNnP3gudXNlck1zZzonLS0nfTwvcD5cclxuICAgICAgICAgIDxwID55b3U6IHt4LnNlbGxlck1zZz94LnNlbGxlck1zZzonLS0nfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgb25DbGljaz17cHJvcHMuc2VsbGVyTWFzc2VnZS5iaW5kKHRoaXMseC5faWQseC5zdGF0ZSl9PnNlbmQgbXNnPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICBcclxuICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgKX1cclxuICBcclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuICA8c3R5bGUganN4PlxyXG4gIHtgXHJcbiAgLm9yZGVyLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cgOiBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1kZXRhaWxzIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlscyBpbWd7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuICBcclxuICApXHJcbiAgfVxyXG4gIFxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3RhbHByaWNlIDogMCxcclxuICAgICAgb3JkZXJzOltdLFxyXG4gICAgICBpc3RhYmxlOmZhbHNlXHJcblxyXG4gIH1cclxuXHR9XHJcblxyXG5cclxuICAgIGdldG9yZGVyYnlzdGF0ZShzdGF0ZSl7XHJcblxyXG4gICAgICBmZXRjaChgJHtVcmx9b3JkZXJieXNob3BpZC81ZTg4ODlhNDM4NzQ3OTM2NTgwZDg1Yzg/c3RhdGU9JHtzdGF0ZX1gKVxyXG4gICAgICAudGhlbihyZXM9PnsgcmV0dXJuIHJlcy5qc29uKCl9KVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgdGhpcy5zZXRTdGF0ZSh7b3JkZXJzOmRhdGF9KX0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVvcmRlcihpZCxzdGF0ZSl7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHZhciBqc29uYm9keSA9IHtzdGF0ZTpzdGF0ZX1cclxuICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoanNvbmJvZHkpKTtcclxuICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgIGZldGNoKCcvYXBpL3VwZGF0ZW9yZGVyLycraWQse1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICAgIHNlbGxlck1hc3NlZ2UoaWQsc3RhdGUpe1xyXG4gICAgICAgIHZhciBzZW5kID0gcHJvbXB0KFwiZW50ZXIgeW91ciBtZXNzYWdlLlwiLCBcIlwiKTtcclxuICAgICAgICBpZihzZW5kIT1udWxsKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICB2YXIganNvbmJvZHkgPSB7c2VsbGVyTXNnOnNlbmR9XHJcbiAgICAgICAgICAgIC8vdmFyIGpzb25ib2R5ID0ge3N0YXRlOiduZXcnfVxyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeShqc29uYm9keSkpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgndXNlcicsIEpTT04uc3RyaW5naWZ5KENvb2tpZS5nZXRKU09OKCd1c2VyJykpKTtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvdXBkYXRlb3JkZXIvJytpZCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5nZXRvcmRlcmJ5c3RhdGUoc3RhdGUpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICBhZGR0b2NhcnQoaXRlbWlkLG5hbWUpe1xyXG4gICAgICAgIHZhciBkYXRhID0gQ29va2llLmdldEpTT04oJ2ZhdmVyaXRlLWl0ZW0nKTtcclxuICAgICAgICB2YXIganNvbmFycmF5ID0gW11cclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgaWYoIWRhdGEuaW5jbHVkZXMoaXRlbWlkKSlcclxuICAgICAgICAgICAge2pzb25hcnJheSA9IFsuLi5kYXRhLGl0ZW1pZF1cclxuICAgICAgICAgICAgQ29va2llLnNldCgnZmF2ZXJpdGUtaXRlbScsanNvbmFycmF5KTtcclxuICAgICAgICAgICAgYWxlcnQoYGFkZCAke25hbWV9IHRvIGNhcnQuYClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBhbHJlYWR5IGFkZGVkICR7bmFtZX0gdG8gY2FydC5gKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqc29uYXJyYXkgPSBbaXRlbWlkXVxyXG4gICAgICAgICAgICBDb29raWUuc2V0KCdmYXZlcml0ZS1pdGVtJyxqc29uYXJyYXkpO1xyXG4gICAgICAgICAgICBhbGVydChgYWRkICR7bmFtZX0gdG8gY2FydC5gKVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1dpZHRoKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCgnLnNpbGRlMmltYWdlJykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3doZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgd2luZG93IGlzIGdyZWF0ZXIgdGhhbiA0NDBweCB3aWRlIHRoZW4gdHVybiBvbiBqU2Nyb2xsUGFuZS4uXHJcbiAgICAgICAgICAgICAgICAgIC8vICAkKCcuZGl2MScpLmFkZENsYXNzKCdkZXNrdG9wJylcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMmltYWdlJykuY3NzKHsnbWF4LWhlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLnBhcmVudCgpLmNzcyh7J2hlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnLCdiYWNrZ3JvdW5kJzogJyNmZmZmZmYnfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgb3JkZXJzOnRoaXMucHJvcHMub3JkZXJzXHJcbiAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNobmFnZXRhYj0oaXN0YWJsZSk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXN0YWJsZTppc3RhYmxlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuXHJcbiAgICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdDYXRlZ2VyaWVzJyx0b3BpY2xpbms6J0FsbCBDYXRlZ2VyaWVzcycsc2lkZW5hdmxpbms6W10sIHZpc2libGU6ZmFsc2UgfTtcclxuIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICA8U3ViTmF2QmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LW1lbnUgY29sLWxnLTExIGNvbC1zbS0xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250MSB0b3BpY0NvbG9yIHByb2ZpbGUtY3NzLXRvcGljXCI+TXkgcHJvZmlsZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2lkZSBzaG9wPXt0aGlzLnByb3BzLnNob3A/dGhpcy5wcm9wcy5zaG9wOm51bGx9ID48L0ltYWdlc2lkZT5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50c2lkZSBzaG9wPXt0aGlzLnByb3BzLnNob3A/dGhpcy5wcm9wcy5zaG9wOm51bGx9ID48L0NvbnRlbnRzaWRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2huYWdldGFiLmJpbmQodGhpcyxmYWxzZSl9IGNsYXNzTmFtZT0ge3RoaXMuc3RhdGUuaXN0YWJsZT9cIm5hdi1saW5rXCI6XCJuYXYtbGluayBhY3RpdmVcIn0gPkl0ZW1zIExpc3Q8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNobmFnZXRhYi5iaW5kKHRoaXMsdHJ1ZSl9ICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXN0YWJsZT9cIm5hdi1saW5rIGFjdGl2ZVwiOlwibmF2LWxpbmtcIn0+T3JkZXIgTGlzdDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXN0YWJsZT88T3JkZXJUYWJsZSBvcmRlcnM9e3RoaXMuc3RhdGUub3JkZXJzfSB1cGRhdGVvcmRlcj17KGlkLHN0YXRlKT0+dGhpcy51cGRhdGVvcmRlcihpZCxzdGF0ZSl9IGdldG9yZGVyYnlzdGF0ZT17KHN0YXRlKT0+dGhpcy5nZXRvcmRlcmJ5c3RhdGUoc3RhdGUpfSBzZWxsZXJNYXNzZWdlPXsoaWQsc3RhdGUpPT50aGlzLnNlbGxlck1hc3NlZ2UoaWQsc3RhdGUpfS8+XHJcbiAgICAgICAgICAgICAgICA6PENhcnRMaXN0IGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfSBjYXRhZ2VyeXR5cGU9XCJQaG9uZXNcIiBhZGR0b2NhcnQgPXsoaWQsbmFtZSk9PnRoaXMuYWRkdG9jYXJ0KGlkLG5hbWUpfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4gIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7VXJsfW9yZGVyYnlzaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4P3N0YXRlPW5ld2ApO1xyXG4gIC8vICBjb25zdCByZXNzaG9wID0gYXdhaXQgZmV0Y2goYCR7VXJsfXNob3BpZC81ZTg4ODlhNDM4NzQ3OTM2NTgwZDg1YzhgKTtcclxuICAgIGNvbnN0IHJlc3Nob3AgPSBhd2FpdCBmZXRjaChgJHtVcmx9c2hvcGFuZGl0ZW1zL3NoYj9pZGU9NWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4YCk7XHJcblxyXG4gICAgdmFyICBvcmRlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgdmFyICBzaG9wYW5kaXRlbXMgPSBhd2FpdCByZXNzaG9wLmpzb24oKTtcclxuICAgIHZhciBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYocmVzLnN0YXR1cyE9MjAwfHxyZXNzaG9wLnN0YXR1cyE9MjAwKXtcclxuICAgICAgICBlcnJvciA9IHRydWUgO1xyXG4gICB9XHJcbiAgICByZXR1cm4ge29yZGVyczpvcmRlcnMsc2hvcDpzaG9wYW5kaXRlbXMuc2hvcCxpdGVtczpzaG9wYW5kaXRlbXMuaXRlbXMsZXJyb3J9XHJcblxyXG5cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\orders.js */"));
};

const Contentside = props => {
  return __jsx("div", {
    className: "jsx-1654157463" + " " + "col-lg-6 col-sm-12"
  }, __jsx("div", {
    className: "jsx-1654157463" + " " + "card"
  }, __jsx("div", {
    className: "jsx-1654157463" + " " + "card-block"
  }, __jsx("h4", {
    className: "jsx-1654157463" + " " + "card-title font2 topicColor"
  }, props.shop.shopName), __jsx("div", {
    className: "jsx-1654157463" + " " + "meta font6 subtopicColor"
  }, __jsx("a", {
    className: "jsx-1654157463"
  }, props.shop.categery), __jsx("div", {
    className: "jsx-1654157463" + " " + " float-right"
  }, __jsx("a", {
    className: "jsx-1654157463" + " " + "Icutprise font6"
  }, props.shop.district + '/' + props.shop.town, " "))), __jsx("div", {
    className: "jsx-1654157463" + " " + "meta font6"
  }, __jsx("div", {
    className: "jsx-1654157463" + " " + " float-right"
  }, __jsx("a", {
    className: "jsx-1654157463" + " " + "Icutprise font6"
  }, props.shop.contact1 + '/' + props.shop.contact2, " "))), __jsx("div", {
    className: "jsx-1654157463" + " " + "card-text font6"
  }, props.shop.content1), __jsx("div", {
    className: "jsx-1654157463" + " " + "card-text font6"
  }, props.shop.content2), __jsx("div", {
    className: "jsx-1654157463" + " " + "profile-specification"
  }, __jsx("h5", {
    className: "jsx-1654157463" + " " + "profile-subcard-title font2 fontcolorSkyblue"
  }, " \xA0 "), __jsx("div", {
    className: "jsx-1654157463" + " " + " card-text font6"
  }, __jsx("div", {
    className: "jsx-1654157463" + " " + "row"
  }, props.shop.shopDetail ? props.shop.shopDetail.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-1654157463" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1654157463" + " " + "float-left profile-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1654157463"
  }), "\xA0 \xA0 ", x.name, " \xA0: "), " ", __jsx("a", {
    className: "jsx-1654157463" + " " + "float-left profile-specb"
  }, " \xA0 ", x.value))) : null)), __jsx("hr", {
    className: "jsx-1654157463"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _constant_main__WEBPACK_IMPORTED_MODULE_5__["createitemUrl"] + '?id=' + props.shop._id + '&shopname=' + props.shop.shopName
  }, __jsx("a", {
    href: "#",
    className: "jsx-1654157463" + " " + "btn btn-primary float-right btn-sm"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/new-view.png",
    className: "jsx-1654157463"
  }), " \xA0add new item")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _constant_main__WEBPACK_IMPORTED_MODULE_5__["updateshopUrl"] + props.shop._id
  }, __jsx("a", {
    href: "#",
    className: "jsx-1654157463" + " " + "btn btn-danger float-right btn-sm"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/new-view.png",
    className: "jsx-1654157463"
  }), " \xA0update shop"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1654157463"
  }, "h5.jsx-1654157463{font-size:1.5em;font-weight:700;line-height:1.2857em;margin-bottom:20px;}.profile.jsx-1654157463{margin-bottom :20px;}.profile-topic.jsx-1654157463{padding :20px 10px 10px 10px;}.profile-speca.jsx-1654157463{font-size:1em;color:#CF570E;}.profile-specb.jsx-1654157463{font-size:1em;color:#3E1903;}.card.jsx-1654157463{font-size:1em;overflow:hidden;padding:0;-webkit-transition:0.5s;transition:0.5s;border :none;}.card-block.jsx-1654157463{font-size:1em;position:relative;margin:0;padding:0.5em;box-shadow:none;}.card-img-top.jsx-1654157463{display:block;width:100%;height:200;}.card-title.jsx-1654157463{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.profile-subcard-title.jsx-1654157463{font-size:1em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-1654157463{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :15px;}.card-footer.jsx-1654157463{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;}.profile.jsx-1654157463{position:absolute;top:-12px;display:inline-block;overflow:hidden;width:25px;height:25px;margin:0;}.profile-avatar.jsx-1654157463{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-1654157463{position:relative;top:0;display:inline-block;}.profile-inline.jsx-1654157463~.card-title.jsx-1654157463{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-1654157463{font-weight:700;}.meta.jsx-1654157463{font-size:1.3em;}.meta.jsx-1654157463 a.jsx-1654157463{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-1654157463{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-1654157463{color:darkorange;font-size:0.8em;}.Iprise.jsx-1654157463{color:red;font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxvcmRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0hpQixBQUdxQyxBQU1JLEFBR1MsQUFHZixBQUtBLEFBSUEsQUFRQSxBQVFBLEFBTVMsQUFPVCxBQVFILEFBT0csQUFXSSxBQVdKLEFBT0ksQUFNRyxBQU1MLEFBSUEsQUFLSyxBQUlRLEFBS1osQUFJUCxVQUNJLENBdEVFLEdBOUNELEFBS0QsQUFJRSxBQVFFLEFBUVAsQUFhSyxBQWVBLEFBc0JMLEVBdkZLLEFBMEdwQixBQUtBLENBYW9CLENBaEROLEFBa0JKLEVBeEZWLENBOEZvQixFQXpEQSxDQW9ESyxBQWtDekIsQ0EzRmUsQUFrREMsRUE3QmEsQ0E3QzdCLEFBSUEsQUEyRHlCLENBcEV6QixDQWFjLEFBNkJXLEFBZWYsRUFqRWUsQUE2QlosQ0ErRmIsR0F0RkEsQUE0QlcsQ0FzQlcsQUFZQyxFQXpERSxDQXJCTCxDQVFGLEVBcUNDLEVBNEJuQixJQXBDb0IsQUFrQkEsQ0FzQ3BCLENBaEVzQixFQWxEQyxFQThCSCxBQTBEcEIsQ0FZQSxFQWpDd0IsRUF4QkYsS0FnQnRCLEFBa0JlLENBd0NhLEdBakU1QixFQXJCQSxDQTlCQSxJQTZFZ0IsRUFqQ2hCLEFBd0JBLEVBL0NpQixPQWdHSSxDQXZDUixLQXhEYixJQTBEQSxPQXNDQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcb3JkZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBTdWJOYXZCYXIgZnJvbSAnLi8uLi9sYXlvdXRzL1N1Yk5hdmJhcic7XHJcbmltcG9ydCAge1VybCxJbWFnZVVybCxjcmVhdGVpdGVtVXJsLHVwZGF0ZXNob3BVcmwsaXRlbVVybH0gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL0Zvb3RlcidcclxuXHJcblxyXG5jb25zdCBJbWFnZXNpZGU9KHByb3BzKT0+IHtcclxuICAgIHJldHVybihcclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG48b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG57cHJvcHMuc2hvcC5pbWFnZXMubWFwKCh4LGkpPT5cclxuICAgIDxsaSBrZXk9e2l9IGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPXtpfSBjbGFzc05hbWU9e2k9PTA/J2FjdGl2ZSc6J2MnfSA+PC9saT4gXHJcbiAgICApfVxyXG48L29sPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+ICAgXHJcbiAgICB7cHJvcHMuc2hvcC5pbWFnZXMubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2k9PTA/J2Nhcm91c2VsLWl0ZW0gYWN0aXZlJzonY2Fyb3VzZWwtaXRlbSd9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPXtJbWFnZVVybCt4fSBhbHQ9XCJmaXJzdCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgXHJcbjwvZGl2PlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG48L2E+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuPC9hPlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgY2FyZC1mb290ZXItYnV0dG9uXCI+e3Byb3BzLnNob3AuY3JlYXRlRGF0ZX08L3NtYWxsPlxyXG4gXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgIHtgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXItYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250ZW50c2lkZT0ocHJvcHMpPT57XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+e3Byb3BzLnNob3Auc2hvcE5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NiBzdWJ0b3BpY0NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3Byb3BzLnNob3AuY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPntwcm9wcy5zaG9wLmRpc3RyaWN0KycvJytwcm9wcy5zaG9wLnRvd259IDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+e3Byb3BzLnNob3AuY29udGFjdDErJy8nK3Byb3BzLnNob3AuY29udGFjdDJ9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvcC5jb250ZW50MX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaG9wLmNvbnRlbnQyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInByb2ZpbGUtc3ViY2FyZC10aXRsZSBmb250MiBmb250Y29sb3JTa3libHVlXCI+ICZuYnNwOyA8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnNob3Auc2hvcERldGFpbD9wcm9wcy5zaG9wLnNob3BEZXRhaWwubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcHJvZmlsZS1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyB7eC5uYW1lfSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBwcm9maWxlLXNwZWNiXCI+ICZuYnNwOyB7eC52YWx1ZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtjcmVhdGVpdGVtVXJsKyc/aWQ9Jytwcm9wcy5zaG9wLl9pZCsnJnNob3BuYW1lPScrcHJvcHMuc2hvcC5zaG9wTmFtZX0+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvbmV3LXZpZXcucG5nXCIvPiAmbmJzcDthZGQgbmV3IGl0ZW08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dXBkYXRlc2hvcFVybCtwcm9wcy5zaG9wLl9pZH0+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9uZXctdmlldy5wbmdcIi8+ICZuYnNwO3VwZGF0ZSBzaG9wPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9maWxle1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtdG9waWN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1zcGVjYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NGNTcwRSA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1zcGVjYntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNFMTkwMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1zdWJjYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JY3V0cHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLklwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IENhcnRMaXN0PShwcm9wcyk9PntcclxuXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udDYgZm9udGNvbG9yT3JhbmdlXCI+e308L2g1PlxyXG4gICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cgcHJvZmlsZS1jc3MgcHJvamVjdHNcIj5cclxuICAgXHJcbiAgICAgICAge3Byb3BzLml0ZW1zLm1hcCgoYyxpKT0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTJcIj5cclxuICAgICAgICA8TGluayBocmVmPXtpdGVtVXJsK2MudXJsbmFtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZi1jYXJkLWltZy10b3BcIiBzcmM9e0ltYWdlVXJsK2MuaW1hZ2VzWzBdfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+e2MuaXRlbW5hbWV9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICA8YT57Yy5jYXRlZ2VyeX0gLSB7Yy5zdWJjYXRlZ2VyeX08L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT5Scy57Yy5pdGVtUHJpY2V9LjAwPC9zdHJpa2U+ICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4ge2MuaXRlbWRpc2NvdW50fSUgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy57LypjLnByaWNlKigxMDAtYy5kaXNjb3VudCkvMTAwKi99PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgIHtjLmNvbnRlbnQxLnNsaWNlKDAsMTUwKX0uLi5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBmbG9hdC1sZWZ0XCI+MjAyMC8yNS81PC9zbWFsbD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuYWRkdG9jYXJ0LmJpbmQodGhpcyxjLl9pZCxjLml0ZW1uYW1lKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtIGlzbW9iaWxlX2Rpc2FibGVcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9mYXZvcml0ZS1jYXJ0LnBuZ1wiLz4gJm5ic3A7QWRkIHRvIENhcnQ8L2E+XHJcbiAgICAgICAgICAgICA8YSBvbkNsaWNrPXtwcm9wcy5hZGR0b2NhcnQuYmluZCh0aGlzLGMuX2lkLGMuaXRlbW5hbWUpfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtIGlzbW9iaWxlX2Rpc2FibGVcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9pbi10cmFuc2l0LnBuZ1wiLz4gJm5ic3A7IE9yZGVyIE5vdzwvYT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgICAgICAgICAgIGAudW5pdGNvdW50LXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWNzc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWNzcy10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiA6IDAuNWVtIDAgO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmYtY2FyZC1pbWctdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnZlcnNlICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjQ7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT3JkZXJUYWJsZT0ocHJvcHMpPT57XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItdGFibGVcIj5cclxuXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXNtIGNvbC0xMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ2FsbCcpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9zaG93LWFsbC12aWV3cy5wbmdcIi8+IEFsbDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCduZXcnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvbmV3LnBuZ1wiLz4gbmV3PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ21haWwnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvdXBsb2FkLW1haWwucG5nXCIvPiBlbWFpbDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdjb25maXJtJyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL2NoZWNrZWQtY2hlY2tib3gucG5nXCIvPiBjb25maXJtPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ3JlbW92ZScpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj4gPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvdHJhc2gucG5nXCIvPiByZW1vdmVzPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnN0YXRlPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JdGVtIERldGFpbHM8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyIGRldGFpbHM8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk1hc3NhZ2VzPC90aD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHkgY2xhc3NOYW1lPVwicHJvamVjdHNcIj5cclxuICBcclxuICB7cHJvcHMub3JkZXJzLm1hcCgoeCxpKT0+XHJcbiAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICA8dGg+PGRpdj48aW1nIHdpZHRoPVwiNTBweFwiIHNyYz17SW1hZ2VVcmwreC5pdGVtLmltYWdlc1swXX0gLz5cclxuICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRzaXplRS04XCI+e3guY3JlYXRlRGF0ZX08L3A+XHJcbiAgICAgICA8L2Rpdj4gPC90aD5cclxuICAgICAgPHRkPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj57eC5zdGF0ZX0gPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCduZXcnKX0gc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvMDAwMDAwL25ldy5wbmdcIi8+IFxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCdtYWlsJyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC91cGxvYWQtbWFpbC5wbmdcIi8+IFxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCdjb25maXJtJyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC9jaGVja2VkLWNoZWNrYm94LnBuZ1wiLz5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwncmVtb3ZlJyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC90cmFzaC5wbmdcIi8+IDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj57eC5pdGVtLml0ZW1sb25nbmFtZX0gPC9wPlxyXG4gICAgICAgICAgICAgIDxwPnt4Lml0ZW0uY2F0ZWdlcnl9L3t4Lml0ZW0uc3ViY2F0ZWdlcnl9IDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+UnMue3guaXRlbS5pdGVtUHJpY2UqKDEwMC14Lml0ZW0uaXRlbWRpc2NvdW50KS8xMDB9IHgge3guaXRlbS5xdHl9ID0gUnMue3guaXRlbS5pdGVtUHJpY2UqKDEwMC14Lml0ZW0uaXRlbWRpc2NvdW50KS8xMDAqeC5pdGVtLnF0eX0gPC9wPlxyXG4gICAgICAgICAgPHAgPiA8c3RyaWtlIGNsYXNzTmFtZT1cImZvbnRzaXplRS04XCI+UnMue3guaXRlbS5pdGVtUHJpY2V9LjAwPC9zdHJpa2U+IDxzcGFuIGNsYXNzTmFtZT1cImZvbnRjb2xvck9yYW5nZSBmb250c2l6ZUUtOFwiPnt4Lml0ZW0uaXRlbWRpc2NvdW50fSUgPC9zcGFuPiAgUnMue3guaXRlbS5pdGVtUHJpY2UqKDEwMC14Lml0ZW0uaXRlbWRpc2NvdW50KS8xMDB9IDwvcD5cclxuICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgPC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT1cInVzZXItZGV0YWlscyBmb250NlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj57eC51c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgPiB7eC51c2VyLmVtYWlsfSAtIHt4LnVzZXIuY29udGFjdH0gPC9wPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHMgZm9udDZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+Y3VzOiB7eC51c2VyTXNnP3gudXNlck1zZzonLS0nfTwvcD5cclxuICAgICAgICAgIDxwID55b3U6IHt4LnNlbGxlck1zZz94LnNlbGxlck1zZzonLS0nfTwvcD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIgb25DbGljaz17cHJvcHMuc2VsbGVyTWFzc2VnZS5iaW5kKHRoaXMseC5faWQseC5zdGF0ZSl9PnNlbmQgbXNnPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICBcclxuICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgKX1cclxuICBcclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuICA8c3R5bGUganN4PlxyXG4gIHtgXHJcbiAgLm9yZGVyLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cgOiBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1kZXRhaWxzIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlscyBpbWd7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuICBcclxuICApXHJcbiAgfVxyXG4gIFxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b3RhbHByaWNlIDogMCxcclxuICAgICAgb3JkZXJzOltdLFxyXG4gICAgICBpc3RhYmxlOmZhbHNlXHJcblxyXG4gIH1cclxuXHR9XHJcblxyXG5cclxuICAgIGdldG9yZGVyYnlzdGF0ZShzdGF0ZSl7XHJcblxyXG4gICAgICBmZXRjaChgJHtVcmx9b3JkZXJieXNob3BpZC81ZTg4ODlhNDM4NzQ3OTM2NTgwZDg1Yzg/c3RhdGU9JHtzdGF0ZX1gKVxyXG4gICAgICAudGhlbihyZXM9PnsgcmV0dXJuIHJlcy5qc29uKCl9KVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgdGhpcy5zZXRTdGF0ZSh7b3JkZXJzOmRhdGF9KX0pXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVvcmRlcihpZCxzdGF0ZSl7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIHZhciBqc29uYm9keSA9IHtzdGF0ZTpzdGF0ZX1cclxuICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoanNvbmJvZHkpKTtcclxuICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgIGZldGNoKCcvYXBpL3VwZGF0ZW9yZGVyLycraWQse1xyXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICAgIHNlbGxlck1hc3NlZ2UoaWQsc3RhdGUpe1xyXG4gICAgICAgIHZhciBzZW5kID0gcHJvbXB0KFwiZW50ZXIgeW91ciBtZXNzYWdlLlwiLCBcIlwiKTtcclxuICAgICAgICBpZihzZW5kIT1udWxsKXtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICB2YXIganNvbmJvZHkgPSB7c2VsbGVyTXNnOnNlbmR9XHJcbiAgICAgICAgICAgIC8vdmFyIGpzb25ib2R5ID0ge3N0YXRlOiduZXcnfVxyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeShqc29uYm9keSkpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgndXNlcicsIEpTT04uc3RyaW5naWZ5KENvb2tpZS5nZXRKU09OKCd1c2VyJykpKTtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvdXBkYXRlb3JkZXIvJytpZCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5nZXRvcmRlcmJ5c3RhdGUoc3RhdGUpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICBhZGR0b2NhcnQoaXRlbWlkLG5hbWUpe1xyXG4gICAgICAgIHZhciBkYXRhID0gQ29va2llLmdldEpTT04oJ2ZhdmVyaXRlLWl0ZW0nKTtcclxuICAgICAgICB2YXIganNvbmFycmF5ID0gW11cclxuICAgICAgICBcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgaWYoIWRhdGEuaW5jbHVkZXMoaXRlbWlkKSlcclxuICAgICAgICAgICAge2pzb25hcnJheSA9IFsuLi5kYXRhLGl0ZW1pZF1cclxuICAgICAgICAgICAgQ29va2llLnNldCgnZmF2ZXJpdGUtaXRlbScsanNvbmFycmF5KTtcclxuICAgICAgICAgICAgYWxlcnQoYGFkZCAke25hbWV9IHRvIGNhcnQuYClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBhbHJlYWR5IGFkZGVkICR7bmFtZX0gdG8gY2FydC5gKSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBqc29uYXJyYXkgPSBbaXRlbWlkXVxyXG4gICAgICAgICAgICBDb29raWUuc2V0KCdmYXZlcml0ZS1pdGVtJyxqc29uYXJyYXkpO1xyXG4gICAgICAgICAgICBhbGVydChgYWRkICR7bmFtZX0gdG8gY2FydC5gKVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1dpZHRoKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCgnLnNpbGRlMmltYWdlJykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3doZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgd2luZG93IGlzIGdyZWF0ZXIgdGhhbiA0NDBweCB3aWRlIHRoZW4gdHVybiBvbiBqU2Nyb2xsUGFuZS4uXHJcbiAgICAgICAgICAgICAgICAgIC8vICAkKCcuZGl2MScpLmFkZENsYXNzKCdkZXNrdG9wJylcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMmltYWdlJykuY3NzKHsnbWF4LWhlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLnBhcmVudCgpLmNzcyh7J2hlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnLCdiYWNrZ3JvdW5kJzogJyNmZmZmZmYnfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgb3JkZXJzOnRoaXMucHJvcHMub3JkZXJzXHJcbiAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNobmFnZXRhYj0oaXN0YWJsZSk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXN0YWJsZTppc3RhYmxlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuXHJcbiAgICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdDYXRlZ2VyaWVzJyx0b3BpY2xpbms6J0FsbCBDYXRlZ2VyaWVzcycsc2lkZW5hdmxpbms6W10sIHZpc2libGU6ZmFsc2UgfTtcclxuIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICA8U3ViTmF2QmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LW1lbnUgY29sLWxnLTExIGNvbC1zbS0xMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250MSB0b3BpY0NvbG9yIHByb2ZpbGUtY3NzLXRvcGljXCI+TXkgcHJvZmlsZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2lkZSBzaG9wPXt0aGlzLnByb3BzLnNob3A/dGhpcy5wcm9wcy5zaG9wOm51bGx9ID48L0ltYWdlc2lkZT5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50c2lkZSBzaG9wPXt0aGlzLnByb3BzLnNob3A/dGhpcy5wcm9wcy5zaG9wOm51bGx9ID48L0NvbnRlbnRzaWRlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnNcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuY2huYWdldGFiLmJpbmQodGhpcyxmYWxzZSl9IGNsYXNzTmFtZT0ge3RoaXMuc3RhdGUuaXN0YWJsZT9cIm5hdi1saW5rXCI6XCJuYXYtbGluayBhY3RpdmVcIn0gPkl0ZW1zIExpc3Q8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNobmFnZXRhYi5iaW5kKHRoaXMsdHJ1ZSl9ICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaXN0YWJsZT9cIm5hdi1saW5rIGFjdGl2ZVwiOlwibmF2LWxpbmtcIn0+T3JkZXIgTGlzdDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXN0YWJsZT88T3JkZXJUYWJsZSBvcmRlcnM9e3RoaXMuc3RhdGUub3JkZXJzfSB1cGRhdGVvcmRlcj17KGlkLHN0YXRlKT0+dGhpcy51cGRhdGVvcmRlcihpZCxzdGF0ZSl9IGdldG9yZGVyYnlzdGF0ZT17KHN0YXRlKT0+dGhpcy5nZXRvcmRlcmJ5c3RhdGUoc3RhdGUpfSBzZWxsZXJNYXNzZWdlPXsoaWQsc3RhdGUpPT50aGlzLnNlbGxlck1hc3NlZ2UoaWQsc3RhdGUpfS8+XHJcbiAgICAgICAgICAgICAgICA6PENhcnRMaXN0IGl0ZW1zPXt0aGlzLnByb3BzLml0ZW1zfSBjYXRhZ2VyeXR5cGU9XCJQaG9uZXNcIiBhZGR0b2NhcnQgPXsoaWQsbmFtZSk9PnRoaXMuYWRkdG9jYXJ0KGlkLG5hbWUpfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4gIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7VXJsfW9yZGVyYnlzaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4P3N0YXRlPW5ld2ApO1xyXG4gIC8vICBjb25zdCByZXNzaG9wID0gYXdhaXQgZmV0Y2goYCR7VXJsfXNob3BpZC81ZTg4ODlhNDM4NzQ3OTM2NTgwZDg1YzhgKTtcclxuICAgIGNvbnN0IHJlc3Nob3AgPSBhd2FpdCBmZXRjaChgJHtVcmx9c2hvcGFuZGl0ZW1zL3NoYj9pZGU9NWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4YCk7XHJcblxyXG4gICAgdmFyICBvcmRlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgdmFyICBzaG9wYW5kaXRlbXMgPSBhd2FpdCByZXNzaG9wLmpzb24oKTtcclxuICAgIHZhciBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYocmVzLnN0YXR1cyE9MjAwfHxyZXNzaG9wLnN0YXR1cyE9MjAwKXtcclxuICAgICAgICBlcnJvciA9IHRydWUgO1xyXG4gICB9XHJcbiAgICByZXR1cm4ge29yZGVyczpvcmRlcnMsc2hvcDpzaG9wYW5kaXRlbXMuc2hvcCxpdGVtczpzaG9wYW5kaXRlbXMuaXRlbXMsZXJyb3J9XHJcblxyXG5cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\orders.js */"));
};

const CartList = props => {
  return __jsx("div", {
    className: "jsx-3491787877"
  }, __jsx("h5", {
    className: "jsx-3491787877" + " " + "font6 fontcolorOrange"
  }), __jsx("div", {
    className: "jsx-3491787877" + " " + " row profile-css projects"
  }, props.items.map((c, i) => __jsx("div", {
    key: i,
    className: "jsx-3491787877" + " " + "col-lg-6 col-sm-12"
  }, __jsx("div", {
    className: "jsx-3491787877" + " " + "card"
  }, __jsx("div", {
    className: "jsx-3491787877" + " " + "row col-12"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: _constant_main__WEBPACK_IMPORTED_MODULE_5__["itemUrl"] + c.urlname
  }, __jsx("div", {
    className: "jsx-3491787877" + " " + "col-lg-3"
  }, __jsx("img", {
    src: _constant_main__WEBPACK_IMPORTED_MODULE_5__["ImageUrl"] + c.images[0],
    className: "jsx-3491787877" + " " + "f-card-img-top"
  }))), __jsx("div", {
    className: "jsx-3491787877" + " " + "col-lg-9"
  }, __jsx("h4", {
    className: "jsx-3491787877" + " " + "card-title font2 topicColor"
  }, c.itemname), __jsx("div", {
    className: "jsx-3491787877" + " " + "meta font6 subtopicColor"
  }, __jsx("a", {
    className: "jsx-3491787877"
  }, c.categery, " - ", c.subcategery), __jsx("div", {
    className: "jsx-3491787877" + " " + " float-right"
  }, __jsx("a", {
    className: "jsx-3491787877" + " " + "Icutprise font6"
  }, " ", __jsx("strike", {
    className: "jsx-3491787877"
  }, "Rs.", c.itemPrice, ".00"), "  "), __jsx("a", {
    className: "jsx-3491787877" + " " + "Idiscount font6"
  }, " ", c.itemdiscount, "% "), __jsx("a", {
    className: "jsx-3491787877" + " " + "Iprise font6"
  }, "\xA0Rs."))), __jsx("div", {
    className: "jsx-3491787877" + " " + "card-text font6"
  }, c.content1.slice(0, 150), "..."), __jsx("div", {
    className: "jsx-3491787877" + " " + "card-footer"
  }, __jsx("small", {
    className: "jsx-3491787877" + " " + "font3 float-left"
  }, "2020/25/5"), __jsx("div", {
    className: "jsx-3491787877" + " " + "card-footer"
  }, __jsx("a", {
    onClick: props.addtocart.bind(undefined, c._id, c.itemname),
    className: "jsx-3491787877" + " " + "btn btn-danger float-right btn-sm ismobile_disable"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/favorite-cart.png",
    className: "jsx-3491787877"
  }), " \xA0Add to Cart"), __jsx("a", {
    onClick: props.addtocart.bind(undefined, c._id, c.itemname),
    className: "jsx-3491787877" + " " + "btn btn-primary float-right btn-sm ismobile_disable"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/in-transit.png",
    className: "jsx-3491787877"
  }), " \xA0 Order Now"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3491787877"
  }, ".unitcount-text.jsx-3491787877{width :50px;}h5.jsx-3491787877{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin:0;}.profile-css.jsx-3491787877{margin-bottom :20px;}.profile-css-topic.jsx-3491787877{padding :20px 10px 10px 10px;}.card.jsx-3491787877{font-size:1em;overflow:hidden;padding:2%;border:none;border-radius:.28571429rem;box-shadow:0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;-webkit-transition:0.5s;transition:0.5s;margin :0.5em 0;}.card.jsx-3491787877:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.001);-ms-transform:scale(1.001);transform:scale(1.001);-webkit-transition:0.5s;transition:0.5s;}.card-block.jsx-3491787877{font-size:1em;position:relative;margin:0;padding:0.5em;border:none;border-top:1px solid rgba(34,36,38,.1);box-shadow:none;}.f-card-img-top.jsx-3491787877{display:block;width:100%;height:200;}.card-title.jsx-3491787877{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-3491787877{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :12px;}.card-footer.jsx-3491787877{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;border-top:1px solid rgba(0,0,0,.05);background:#fff;}.card-inverse.jsx-3491787877{border:1px solid rgba(0,0,0,.05);}.profile.jsx-3491787877{position:absolute;top:-12px;display:inline-block;overflow:hidden;box-sizing:border-box;width:25px;height:25px;margin:0;border:1px solid #fff;border-radius:50%;}.profile-avatar.jsx-3491787877{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-3491787877{position:relative;top:0;display:inline-block;}.profile-inline.jsx-3491787877~.card-title.jsx-3491787877{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-3491787877{font-weight:700;}.meta.jsx-3491787877{font-size:1em;}.meta.jsx-3491787877 a.jsx-3491787877{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-3491787877{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-3491787877{color:darkorange;font-size:0.8em;}.Iprise.jsx-3491787877{color:red;font-size:1em;}.projects.jsx-3491787877 div.jsx-3491787877{-webkit-animation-name:fade-in-jsx-3491787877;animation-name:fade-in-jsx-3491787877;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-3491787877 div.jsx-3491787877:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-3491787877{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-3491787877{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxvcmRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1RvQixBQUVxQyxBQUdXLEFBTUgsQUFHUyxBQUdmLEFBV29ELEFBS3BELEFBVUEsQUFPUyxBQVFaLEFBT0csQUFXc0IsQUFJbEIsQUFhSixBQU9JLEFBTUcsQUFNTCxBQUlGLEFBS08sQUFJUSxBQUtaLEFBSVAsQUFLYSxBQUtGLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRCxBQUlOLEFBR0EsVUExREEsQUF3RGYsQUFHQSxDQXZJaUIsQ0F4RHBCLEVBZW9CLEFBZ0JFLEFBVVAsQUFzQkssQUE0QkwsQUF3QmYsRUFMQSxDQWtCb0IsQ0FsRE4sQUFvQkosRUF6RlYsQ0ErRm9CLEVBckdBLEFBNkNBLENBbURLLEFBa0N6QixDQTNGZSxBQWtEQyxFQW5DYSxDQXNCSixDQW5FekIsQ0FJZSxBQWdETCxFQWhDRyxDQTBDYixBQXVEQSxHQXJGQSxBQXFCVyxDQTRCVyxBQVlDLEVBckdFLEFBNkNBLEVBaENULEFBZ0JFLEVBaUNDLEVBa0NuQixHQW9GRCxDQTlIcUIsQUFzQkEsQ0F3Q3BCLEFBc0JELEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsR0FuS2dDLEVBZ0JmLEFBNERoQixDQVlBLEVBdkN3QixFQTlEWCxBQTZDUyxLQXhCSyxBQWlDM0IsQUFzQjBCLENBMENFLENBeEZrQixFQTdCOUMsU0E4Q0EsQUFnQjZDLEVBakRTLElBc0h6QixHQXZEZCxBQTBDTSxXQXpDTCxNQTBDaEIsRUF6Rm9CLElBZ0RQLEtBZk8sSUFnQk0sR0FoRDFCLE9BakJvQixFQWtEcEIsVUFnQnNCLENBb0RJLElBL0dOLGFBNERwQixVQWxFcUIsZ0JBRXJCLENBS0EsUUErR0QiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxccGFnZXNcXG9yZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU3ViTmF2QmFyIGZyb20gJy4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgIHtVcmwsSW1hZ2VVcmwsY3JlYXRlaXRlbVVybCx1cGRhdGVzaG9wVXJsLGl0ZW1Vcmx9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5cclxuY29uc3QgSW1hZ2VzaWRlPShwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4oXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxue3Byb3BzLnNob3AuaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICA8bGkga2V5PXtpfSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz17aX0gY2xhc3NOYW1lPXtpPT0wPydhY3RpdmUnOidjJ30gPjwvbGk+IFxyXG4gICAgKX1cclxuPC9vbD5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPiAgIFxyXG4gICAge3Byb3BzLnNob3AuaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpPT0wPydjYXJvdXNlbC1pdGVtIGFjdGl2ZSc6J2Nhcm91c2VsLWl0ZW0nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz17SW1hZ2VVcmwreH0gYWx0PVwiZmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgIFxyXG48L2Rpdj5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuPC9hPlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcbjwvYT5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQzIGNhcmQtZm9vdGVyLWJ1dHRvblwiPntwcm9wcy5zaG9wLmNyZWF0ZURhdGV9PC9zbWFsbD5cclxuIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgICB7YCAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMC43NWVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZm9vdGVyLWJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMC4xZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQ29udGVudHNpZGU9KHByb3BzKT0+e1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPntwcm9wcy5zaG9wLnNob3BOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPntwcm9wcy5zaG9wLmNhdGVnZXJ5fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbG9hdC1yaWdodFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj57cHJvcHMuc2hvcC5kaXN0cmljdCsnLycrcHJvcHMuc2hvcC50b3dufSA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPntwcm9wcy5zaG9wLmNvbnRhY3QxKycvJytwcm9wcy5zaG9wLmNvbnRhY3QyfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnNob3AuY29udGVudDF9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvcC5jb250ZW50Mn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9maWxlLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPiAmbmJzcDsgPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG9wLnNob3BEZXRhaWw/cHJvcHMuc2hvcC5zaG9wRGV0YWlsLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IHByb2ZpbGUtc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsge3gubmFtZX0gJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcHJvZmlsZS1zcGVjYlwiPiAmbmJzcDsge3gudmFsdWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y3JlYXRlaXRlbVVybCsnP2lkPScrcHJvcHMuc2hvcC5faWQrJyZzaG9wbmFtZT0nK3Byb3BzLnNob3Auc2hvcE5hbWV9PjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL25ldy12aWV3LnBuZ1wiLz4gJm5ic3A7YWRkIG5ldyBpdGVtPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VwZGF0ZXNob3BVcmwrcHJvcHMuc2hvcC5faWR9PjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvbmV3LXZpZXcucG5nXCIvPiAmbmJzcDt1cGRhdGUgc2hvcDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtc3BlY2F7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDRjU3MEUgO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtc3BlY2J7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzRTE5MDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtc3ViY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBDYXJ0TGlzdD0ocHJvcHMpPT57XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRjb2xvck9yYW5nZVwiPnt9PC9oNT5cclxuICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm93IHByb2ZpbGUtY3NzIHByb2plY3RzXCI+XHJcbiAgIFxyXG4gICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKGMsaSk9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLTEyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17aXRlbVVybCtjLnVybG5hbWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImYtY2FyZC1pbWctdG9wXCIgc3JjPXtJbWFnZVVybCtjLmltYWdlc1swXX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPntjLml0ZW1uYW1lfTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgPGE+e2MuY2F0ZWdlcnl9IC0ge2Muc3ViY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbG9hdC1yaWdodFwiPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+IDxzdHJpa2U+UnMue2MuaXRlbVByaWNlfS4wMDwvc3RyaWtlPiAgPC9hPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IHtjLml0ZW1kaXNjb3VudH0lIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuey8qYy5wcmljZSooMTAwLWMuZGlzY291bnQpLzEwMCovfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICB7Yy5jb250ZW50MS5zbGljZSgwLDE1MCl9Li4uXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgZmxvYXQtbGVmdFwiPjIwMjAvMjUvNTwvc21hbGw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLmFkZHRvY2FydC5iaW5kKHRoaXMsYy5faWQsYy5pdGVtbmFtZSl9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0IGJ0bi1zbSBpc21vYmlsZV9kaXNhYmxlXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+ICZuYnNwO0FkZCB0byBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuYWRkdG9jYXJ0LmJpbmQodGhpcyxjLl9pZCxjLml0ZW1uYW1lKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbSBpc21vYmlsZV9kaXNhYmxlXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvaW4tdHJhbnNpdC5wbmdcIi8+ICZuYnNwOyBPcmRlciBOb3c8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgICAgICAgICBgLnVuaXRjb3VudC10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1jc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1jc3MtdG9waWN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAwLjVlbSAwIDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mLWNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW52ZXJzZSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy40O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE9yZGVyVGFibGU9KHByb3BzKT0+e1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlXCI+XHJcblxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbSBjb2wtMTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdhbGwnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvc2hvdy1hbGwtdmlld3MucG5nXCIvPiBBbGw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywnbmV3Jyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL25ldy5wbmdcIi8+IG5ldzwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdtYWlsJyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3VwbG9hZC1tYWlsLnBuZ1wiLz4gZW1haWw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywnY29uZmlybScpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9jaGVja2VkLWNoZWNrYm94LnBuZ1wiLz4gY29uZmlybTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdyZW1vdmUnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3RyYXNoLnBuZ1wiLz4gcmVtb3ZlczwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5zdGF0ZTwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SXRlbSBEZXRhaWxzPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlciBkZXRhaWxzPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5NYXNzYWdlczwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XHJcbiAgXHJcbiAge3Byb3BzLm9yZGVycy5tYXAoKHgsaSk9PlxyXG4gICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgPHRoPjxkaXY+PGltZyB3aWR0aD1cIjUwcHhcIiBzcmM9e0ltYWdlVXJsK3guaXRlbS5pbWFnZXNbMF19IC8+XHJcbiAgICAgICA8cCBjbGFzc05hbWU9XCJmb250c2l6ZUUtOFwiPnt4LmNyZWF0ZURhdGV9PC9wPlxyXG4gICAgICAgPC9kaXY+IDwvdGg+XHJcbiAgICAgIDx0ZD4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+e3guc3RhdGV9IDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwnbmV3Jyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC9uZXcucG5nXCIvPiBcclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwnbWFpbCcpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvdXBsb2FkLW1haWwucG5nXCIvPiBcclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwnY29uZmlybScpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvY2hlY2tlZC1jaGVja2JveC5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy51cGRhdGVvcmRlci5iaW5kKHRoaXMseC5faWQsJ3JlbW92ZScpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvdHJhc2gucG5nXCIvPiA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+e3guaXRlbS5pdGVtbG9uZ25hbWV9IDwvcD5cclxuICAgICAgICAgICAgICA8cD57eC5pdGVtLmNhdGVnZXJ5fS97eC5pdGVtLnN1YmNhdGVnZXJ5fSA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPlJzLnt4Lml0ZW0uaXRlbVByaWNlKigxMDAteC5pdGVtLml0ZW1kaXNjb3VudCkvMTAwfSB4IHt4Lml0ZW0ucXR5fSA9IFJzLnt4Lml0ZW0uaXRlbVByaWNlKigxMDAteC5pdGVtLml0ZW1kaXNjb3VudCkvMTAwKnguaXRlbS5xdHl9IDwvcD5cclxuICAgICAgICAgIDxwID4gPHN0cmlrZSBjbGFzc05hbWU9XCJmb250c2l6ZUUtOFwiPlJzLnt4Lml0ZW0uaXRlbVByaWNlfS4wMDwvc3RyaWtlPiA8c3BhbiBjbGFzc05hbWU9XCJmb250Y29sb3JPcmFuZ2UgZm9udHNpemVFLThcIj57eC5pdGVtLml0ZW1kaXNjb3VudH0lIDwvc3Bhbj4gIFJzLnt4Lml0ZW0uaXRlbVByaWNlKigxMDAteC5pdGVtLml0ZW1kaXNjb3VudCkvMTAwfSA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHMgZm9udDZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+e3gudXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgIDxwID4ge3gudXNlci5lbWFpbH0gLSB7eC51c2VyLmNvbnRhY3R9IDwvcD5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIFxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzIGZvbnQ2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPmN1czoge3gudXNlck1zZz94LnVzZXJNc2c6Jy0tJ308L3A+XHJcbiAgICAgICAgICA8cCA+eW91OiB7eC5zZWxsZXJNc2c/eC5zZWxsZXJNc2c6Jy0tJ308L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3Byb3BzLnNlbGxlck1hc3NlZ2UuYmluZCh0aGlzLHguX2lkLHguc3RhdGUpfT5zZW5kIG1zZzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgICl9XHJcbiAgXHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbiAgPHN0eWxlIGpzeD5cclxuICB7YFxyXG4gIC5vcmRlci10YWJsZXtcclxuICAgIG92ZXJmbG93IDogYXV0bztcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlscyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5pdGVtLWRldGFpbHMgaW1ne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgKVxyXG4gIH1cclxuICBcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG90YWxwcmljZSA6IDAsXHJcbiAgICAgIG9yZGVyczpbXSxcclxuICAgICAgaXN0YWJsZTpmYWxzZVxyXG5cclxuICB9XHJcblx0fVxyXG5cclxuXHJcbiAgICBnZXRvcmRlcmJ5c3RhdGUoc3RhdGUpe1xyXG5cclxuICAgICAgZmV0Y2goYCR7VXJsfW9yZGVyYnlzaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4P3N0YXRlPSR7c3RhdGV9YClcclxuICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuanNvbigpfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7IHRoaXMuc2V0U3RhdGUoe29yZGVyczpkYXRhfSl9KVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlb3JkZXIoaWQsc3RhdGUpe1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB2YXIganNvbmJvZHkgPSB7c3RhdGU6c3RhdGV9XHJcbiAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KGpzb25ib2R5KSk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICBmZXRjaCgnL2FwaS91cGRhdGVvcmRlci8nK2lkLHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmdldG9yZGVyYnlzdGF0ZShzdGF0ZSk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICBzZWxsZXJNYXNzZWdlKGlkLHN0YXRlKXtcclxuICAgICAgICB2YXIgc2VuZCA9IHByb21wdChcImVudGVyIHlvdXIgbWVzc2FnZS5cIiwgXCJcIik7XHJcbiAgICAgICAgaWYoc2VuZCE9bnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIGpzb25ib2R5ID0ge3NlbGxlck1zZzpzZW5kfVxyXG4gICAgICAgICAgICAvL3ZhciBqc29uYm9keSA9IHtzdGF0ZTonbmV3J31cclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoanNvbmJvZHkpKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL3VwZGF0ZW9yZGVyLycraWQse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgYWRkdG9jYXJ0KGl0ZW1pZCxuYW1lKXtcclxuICAgICAgICB2YXIgZGF0YSA9IENvb2tpZS5nZXRKU09OKCdmYXZlcml0ZS1pdGVtJyk7XHJcbiAgICAgICAgdmFyIGpzb25hcnJheSA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhLmluY2x1ZGVzKGl0ZW1pZCkpXHJcbiAgICAgICAgICAgIHtqc29uYXJyYXkgPSBbLi4uZGF0YSxpdGVtaWRdXHJcbiAgICAgICAgICAgIENvb2tpZS5zZXQoJ2ZhdmVyaXRlLWl0ZW0nLGpzb25hcnJheSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBhZGQgJHtuYW1lfSB0byBjYXJ0LmApXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGVydChgYWxyZWFkeSBhZGRlZCAke25hbWV9IHRvIGNhcnQuYCkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAganNvbmFycmF5ID0gW2l0ZW1pZF1cclxuICAgICAgICAgICAgQ29va2llLnNldCgnZmF2ZXJpdGUtaXRlbScsanNvbmFycmF5KTtcclxuICAgICAgICAgICAgYWxlcnQoYGFkZCAke25hbWV9IHRvIGNhcnQuYClcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQoJy5zaWxkZTJpbWFnZScpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gNDQwcHggd2lkZSB0aGVuIHR1cm4gb24galNjcm9sbFBhbmUuLlxyXG4gICAgICAgICAgICAgICAgICAvLyAgJCgnLmRpdjEnKS5hZGRDbGFzcygnZGVza3RvcCcpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLmNzcyh7J21heC1oZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5wYXJlbnQoKS5jc3MoeydoZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJywnYmFja2dyb3VuZCc6ICcjZmZmZmZmJ30pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9uIGxvYWRcclxuICAgICAgICAgICAgY2hlY2tXaWR0aCgpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tXaWR0aCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG9yZGVyczp0aGlzLnByb3BzLm9yZGVyc1xyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaG5hZ2V0YWI9KGlzdGFibGUpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzdGFibGU6aXN0YWJsZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gICAgICBjb25zdCBzaWRlbmF2Y29uc3QgPSB7dG9waWMgOiAnQ2F0ZWdlcmllcycsdG9waWNsaW5rOidBbGwgQ2F0ZWdlcmllc3MnLHNpZGVuYXZsaW5rOltdLCB2aXNpYmxlOmZhbHNlIH07XHJcbiBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgPFN1Yk5hdkJhciBzaWRlbmF2Y29uc3Q9e3NpZGVuYXZjb25zdH0vPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1tZW51IGNvbC1sZy0xMSBjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDb2xvciBwcm9maWxlLWNzcy10b3BpY1wiPk15IHByb2ZpbGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNpZGUgc2hvcD17dGhpcy5wcm9wcy5zaG9wP3RoaXMucHJvcHMuc2hvcDpudWxsfSA+PC9JbWFnZXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHNpZGUgc2hvcD17dGhpcy5wcm9wcy5zaG9wP3RoaXMucHJvcHMuc2hvcDpudWxsfSA+PC9Db250ZW50c2lkZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNobmFnZXRhYi5iaW5kKHRoaXMsZmFsc2UpfSBjbGFzc05hbWU9IHt0aGlzLnN0YXRlLmlzdGFibGU/XCJuYXYtbGlua1wiOlwibmF2LWxpbmsgYWN0aXZlXCJ9ID5JdGVtcyBMaXN0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5jaG5hZ2V0YWIuYmluZCh0aGlzLHRydWUpfSAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzdGFibGU/XCJuYXYtbGluayBhY3RpdmVcIjpcIm5hdi1saW5rXCJ9Pk9yZGVyIExpc3Q8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzdGFibGU/PE9yZGVyVGFibGUgb3JkZXJzPXt0aGlzLnN0YXRlLm9yZGVyc30gdXBkYXRlb3JkZXI9eyhpZCxzdGF0ZSk9PnRoaXMudXBkYXRlb3JkZXIoaWQsc3RhdGUpfSBnZXRvcmRlcmJ5c3RhdGU9eyhzdGF0ZSk9PnRoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKX0gc2VsbGVyTWFzc2VnZT17KGlkLHN0YXRlKT0+dGhpcy5zZWxsZXJNYXNzZWdlKGlkLHN0YXRlKX0vPlxyXG4gICAgICAgICAgICAgICAgOjxDYXJ0TGlzdCBpdGVtcz17dGhpcy5wcm9wcy5pdGVtc30gY2F0YWdlcnl0eXBlPVwiUGhvbmVzXCIgYWRkdG9jYXJ0ID17KGlkLG5hbWUpPT50aGlzLmFkZHRvY2FydChpZCxuYW1lKX0gLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuICBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VybH1vcmRlcmJ5c2hvcGlkLzVlODg4OWE0Mzg3NDc5MzY1ODBkODVjOD9zdGF0ZT1uZXdgKTtcclxuICAvLyAgY29uc3QgcmVzc2hvcCA9IGF3YWl0IGZldGNoKGAke1VybH1zaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4YCk7XHJcbiAgICBjb25zdCByZXNzaG9wID0gYXdhaXQgZmV0Y2goYCR7VXJsfXNob3BhbmRpdGVtcy9zaGI/aWRlPTVlODg4OWE0Mzg3NDc5MzY1ODBkODVjOGApO1xyXG5cclxuICAgIHZhciAgb3JkZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHZhciAgc2hvcGFuZGl0ZW1zID0gYXdhaXQgcmVzc2hvcC5qc29uKCk7XHJcbiAgICB2YXIgZXJyb3IgPSBmYWxzZTtcclxuICAgIGlmKHJlcy5zdGF0dXMhPTIwMHx8cmVzc2hvcC5zdGF0dXMhPTIwMCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlIDtcclxuICAgfVxyXG4gICAgcmV0dXJuIHtvcmRlcnM6b3JkZXJzLHNob3A6c2hvcGFuZGl0ZW1zLnNob3AsaXRlbXM6c2hvcGFuZGl0ZW1zLml0ZW1zLGVycm9yfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\orders.js */"));
};

const OrderTable = props => {
  return __jsx("div", {
    className: "jsx-1722122627" + " " + "order-table"
  }, __jsx("div", {
    role: "group",
    "aria-label": "Basic example",
    className: "jsx-1722122627" + " " + "btn-group btn-group-sm col-12"
  }, __jsx("button", {
    onClick: props.getorderbystate.bind(undefined, 'all'),
    type: "button",
    className: "jsx-1722122627" + " " + "btn btn-secondary"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/show-all-views.png",
    className: "jsx-1722122627"
  }), " All"), __jsx("button", {
    onClick: props.getorderbystate.bind(undefined, 'new'),
    type: "button",
    className: "jsx-1722122627" + " " + "btn btn-secondary"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/new.png",
    className: "jsx-1722122627"
  }), " new"), __jsx("button", {
    onClick: props.getorderbystate.bind(undefined, 'mail'),
    type: "button",
    className: "jsx-1722122627" + " " + "btn btn-secondary"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/upload-mail.png",
    className: "jsx-1722122627"
  }), " email"), __jsx("button", {
    onClick: props.getorderbystate.bind(undefined, 'confirm'),
    type: "button",
    className: "jsx-1722122627" + " " + "btn btn-secondary"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/checked-checkbox.png",
    className: "jsx-1722122627"
  }), " confirm"), __jsx("button", {
    onClick: props.getorderbystate.bind(undefined, 'remove'),
    type: "button",
    className: "jsx-1722122627" + " " + "btn btn-secondary"
  }, " ", __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/trash.png",
    className: "jsx-1722122627"
  }), " removes")), __jsx("table", {
    className: "jsx-1722122627" + " " + "table table-striped"
  }, __jsx("thead", {
    className: "jsx-1722122627"
  }, __jsx("tr", {
    className: "jsx-1722122627"
  }, __jsx("th", {
    scope: "col",
    className: "jsx-1722122627"
  }), __jsx("th", {
    scope: "col",
    className: "jsx-1722122627"
  }, "state"), __jsx("th", {
    scope: "col",
    className: "jsx-1722122627"
  }, "Item Details"), __jsx("th", {
    scope: "col",
    className: "jsx-1722122627"
  }, "Price"), __jsx("th", {
    scope: "col",
    className: "jsx-1722122627"
  }, "User details"), __jsx("th", {
    scope: "col",
    className: "jsx-1722122627"
  }, "Massages"))), __jsx("tbody", {
    className: "jsx-1722122627" + " " + "projects"
  }, props.orders.map((x, i) => __jsx("tr", {
    key: i,
    className: "jsx-1722122627"
  }, __jsx("th", {
    className: "jsx-1722122627"
  }, __jsx("div", {
    className: "jsx-1722122627"
  }, __jsx("img", {
    width: "50px",
    src: _constant_main__WEBPACK_IMPORTED_MODULE_5__["ImageUrl"] + x.item.images[0],
    className: "jsx-1722122627"
  }), __jsx("p", {
    className: "jsx-1722122627" + " " + "fontsizeE-8"
  }, x.createDate)), " "), __jsx("td", {
    className: "jsx-1722122627"
  }, __jsx("div", {
    className: "jsx-1722122627" + " " + "item-details font6"
  }, __jsx("p", {
    className: "jsx-1722122627" + " " + "topicColor"
  }, x.state, " "), __jsx("p", {
    className: "jsx-1722122627"
  }, __jsx("img", {
    onClick: props.updateorder.bind(undefined, x._id, 'new'),
    src: "https://img.icons8.com/ios/25/000000/new.png",
    className: "jsx-1722122627"
  }), __jsx("img", {
    onClick: props.updateorder.bind(undefined, x._id, 'mail'),
    src: "https://img.icons8.com/ios/25/000000/upload-mail.png",
    className: "jsx-1722122627"
  }), __jsx("img", {
    onClick: props.updateorder.bind(undefined, x._id, 'confirm'),
    src: "https://img.icons8.com/ios/25/000000/checked-checkbox.png",
    className: "jsx-1722122627"
  }), __jsx("img", {
    onClick: props.updateorder.bind(undefined, x._id, 'remove'),
    src: "https://img.icons8.com/ios/25/000000/trash.png",
    className: "jsx-1722122627"
  }), " "))), __jsx("td", {
    className: "jsx-1722122627"
  }, __jsx("div", {
    className: "jsx-1722122627" + " " + "item-details font6"
  }, __jsx("p", {
    className: "jsx-1722122627" + " " + "topicColor"
  }, x.item.itemlongname, " "), __jsx("p", {
    className: "jsx-1722122627"
  }, x.item.categery, "/", x.item.subcategery, " "))), __jsx("td", {
    className: "jsx-1722122627"
  }, __jsx("div", {
    className: "jsx-1722122627" + " " + "item-details font6"
  }, __jsx("p", {
    className: "jsx-1722122627" + " " + "topicColor"
  }, "Rs.", x.item.itemPrice * (100 - x.item.itemdiscount) / 100, " x ", x.item.qty, " = Rs.", x.item.itemPrice * (100 - x.item.itemdiscount) / 100 * x.item.qty, " "), __jsx("p", {
    className: "jsx-1722122627"
  }, " ", __jsx("strike", {
    className: "jsx-1722122627" + " " + "fontsizeE-8"
  }, "Rs.", x.item.itemPrice, ".00"), " ", __jsx("span", {
    className: "jsx-1722122627" + " " + "fontcolorOrange fontsizeE-8"
  }, x.item.itemdiscount, "% "), "  Rs.", x.item.itemPrice * (100 - x.item.itemdiscount) / 100, " "))), __jsx("td", {
    className: "jsx-1722122627" + " " + "user-details font6"
  }, __jsx("div", {
    className: "jsx-1722122627" + " " + "item-details font6"
  }, __jsx("p", {
    className: "jsx-1722122627" + " " + "topicColor"
  }, x.user.name), __jsx("p", {
    className: "jsx-1722122627"
  }, " ", x.user.email, " - ", x.user.contact, " "))), __jsx("td", {
    className: "jsx-1722122627" + " " + "user-details font6"
  }, __jsx("div", {
    className: "jsx-1722122627" + " " + "item-details font6"
  }, __jsx("p", {
    className: "jsx-1722122627" + " " + "topicColor"
  }, "cus: ", x.userMsg ? x.userMsg : '--'), __jsx("p", {
    className: "jsx-1722122627"
  }, "you: ", x.sellerMsg ? x.sellerMsg : '--'), __jsx("button", {
    onClick: props.sellerMassege.bind(undefined, x._id, x.state),
    className: "jsx-1722122627" + " " + "btn btn-sm btn-danger"
  }, "send msg"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1722122627"
  }, ".order-table.jsx-1722122627{overflow :auto;}.item-details.jsx-1722122627 p.jsx-1722122627{margin-top:0;margin-bottom:0;}.item-details.jsx-1722122627 img.jsx-1722122627{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxvcmRlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNmtCRyxBQUdvQixBQUdGLEFBSUUsYUFIQyxFQUhsQixBQU9BLGNBSEEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxccGFnZXNcXG9yZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU3ViTmF2QmFyIGZyb20gJy4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgIHtVcmwsSW1hZ2VVcmwsY3JlYXRlaXRlbVVybCx1cGRhdGVzaG9wVXJsLGl0ZW1Vcmx9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9Gb290ZXInXHJcblxyXG5cclxuY29uc3QgSW1hZ2VzaWRlPShwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4oXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxue3Byb3BzLnNob3AuaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICA8bGkga2V5PXtpfSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz17aX0gY2xhc3NOYW1lPXtpPT0wPydhY3RpdmUnOidjJ30gPjwvbGk+IFxyXG4gICAgKX1cclxuPC9vbD5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPiAgIFxyXG4gICAge3Byb3BzLnNob3AuaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpPT0wPydjYXJvdXNlbC1pdGVtIGFjdGl2ZSc6J2Nhcm91c2VsLWl0ZW0nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz17SW1hZ2VVcmwreH0gYWx0PVwiZmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgIFxyXG48L2Rpdj5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuPC9hPlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcbjwvYT5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQzIGNhcmQtZm9vdGVyLWJ1dHRvblwiPntwcm9wcy5zaG9wLmNyZWF0ZURhdGV9PC9zbWFsbD5cclxuIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgICB7YCAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMC43NWVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZm9vdGVyLWJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMC4xZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQ29udGVudHNpZGU9KHByb3BzKT0+e1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPntwcm9wcy5zaG9wLnNob3BOYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPntwcm9wcy5zaG9wLmNhdGVnZXJ5fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbG9hdC1yaWdodFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj57cHJvcHMuc2hvcC5kaXN0cmljdCsnLycrcHJvcHMuc2hvcC50b3dufSA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPntwcm9wcy5zaG9wLmNvbnRhY3QxKycvJytwcm9wcy5zaG9wLmNvbnRhY3QyfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnNob3AuY29udGVudDF9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuc2hvcC5jb250ZW50Mn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9maWxlLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPiAmbmJzcDsgPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG9wLnNob3BEZXRhaWw/cHJvcHMuc2hvcC5zaG9wRGV0YWlsLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IHByb2ZpbGUtc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsge3gubmFtZX0gJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcHJvZmlsZS1zcGVjYlwiPiAmbmJzcDsge3gudmFsdWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Y3JlYXRlaXRlbVVybCsnP2lkPScrcHJvcHMuc2hvcC5faWQrJyZzaG9wbmFtZT0nK3Byb3BzLnNob3Auc2hvcE5hbWV9PjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL25ldy12aWV3LnBuZ1wiLz4gJm5ic3A7YWRkIG5ldyBpdGVtPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VwZGF0ZXNob3BVcmwrcHJvcHMuc2hvcC5faWR9PjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvbmV3LXZpZXcucG5nXCIvPiAmbmJzcDt1cGRhdGUgc2hvcDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtc3BlY2F7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDRjU3MEUgO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtc3BlY2J7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzRTE5MDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtc3ViY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBDYXJ0TGlzdD0ocHJvcHMpPT57XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRjb2xvck9yYW5nZVwiPnt9PC9oNT5cclxuICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcm93IHByb2ZpbGUtY3NzIHByb2plY3RzXCI+XHJcbiAgIFxyXG4gICAgICAgIHtwcm9wcy5pdGVtcy5tYXAoKGMsaSk9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLTEyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17aXRlbVVybCtjLnVybG5hbWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImYtY2FyZC1pbWctdG9wXCIgc3JjPXtJbWFnZVVybCtjLmltYWdlc1swXX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPntjLml0ZW1uYW1lfTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgPGE+e2MuY2F0ZWdlcnl9IC0ge2Muc3ViY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbG9hdC1yaWdodFwiPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+IDxzdHJpa2U+UnMue2MuaXRlbVByaWNlfS4wMDwvc3RyaWtlPiAgPC9hPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IHtjLml0ZW1kaXNjb3VudH0lIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuey8qYy5wcmljZSooMTAwLWMuZGlzY291bnQpLzEwMCovfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICB7Yy5jb250ZW50MS5zbGljZSgwLDE1MCl9Li4uXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgZmxvYXQtbGVmdFwiPjIwMjAvMjUvNTwvc21hbGw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLmFkZHRvY2FydC5iaW5kKHRoaXMsYy5faWQsYy5pdGVtbmFtZSl9IGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0IGJ0bi1zbSBpc21vYmlsZV9kaXNhYmxlXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+ICZuYnNwO0FkZCB0byBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuYWRkdG9jYXJ0LmJpbmQodGhpcyxjLl9pZCxjLml0ZW1uYW1lKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbSBpc21vYmlsZV9kaXNhYmxlXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvaW4tdHJhbnNpdC5wbmdcIi8+ICZuYnNwOyBPcmRlciBOb3c8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgICAgICAgICBgLnVuaXRjb3VudC10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1jc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1jc3MtdG9waWN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAwLjVlbSAwIDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mLWNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW52ZXJzZSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy40O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE9yZGVyVGFibGU9KHByb3BzKT0+e1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlXCI+XHJcblxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbSBjb2wtMTJcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdhbGwnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvc2hvdy1hbGwtdmlld3MucG5nXCIvPiBBbGw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywnbmV3Jyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL25ldy5wbmdcIi8+IG5ldzwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdtYWlsJyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3VwbG9hZC1tYWlsLnBuZ1wiLz4gZW1haWw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywnY29uZmlybScpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9jaGVja2VkLWNoZWNrYm94LnBuZ1wiLz4gY29uZmlybTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5nZXRvcmRlcmJ5c3RhdGUuYmluZCh0aGlzLCdyZW1vdmUnKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3RyYXNoLnBuZ1wiLz4gcmVtb3ZlczwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5zdGF0ZTwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SXRlbSBEZXRhaWxzPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmljZTwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VXNlciBkZXRhaWxzPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5NYXNzYWdlczwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XHJcbiAgXHJcbiAge3Byb3BzLm9yZGVycy5tYXAoKHgsaSk9PlxyXG4gICAgICA8dHIga2V5PXtpfT5cclxuICAgICAgPHRoPjxkaXY+PGltZyB3aWR0aD1cIjUwcHhcIiBzcmM9e0ltYWdlVXJsK3guaXRlbS5pbWFnZXNbMF19IC8+XHJcbiAgICAgICA8cCBjbGFzc05hbWU9XCJmb250c2l6ZUUtOFwiPnt4LmNyZWF0ZURhdGV9PC9wPlxyXG4gICAgICAgPC9kaXY+IDwvdGg+XHJcbiAgICAgIDx0ZD4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+e3guc3RhdGV9IDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwnbmV3Jyl9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1LzAwMDAwMC9uZXcucG5nXCIvPiBcclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwnbWFpbCcpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvdXBsb2FkLW1haWwucG5nXCIvPiBcclxuICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLnVwZGF0ZW9yZGVyLmJpbmQodGhpcyx4Ll9pZCwnY29uZmlybScpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvY2hlY2tlZC1jaGVja2JveC5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy51cGRhdGVvcmRlci5iaW5kKHRoaXMseC5faWQsJ3JlbW92ZScpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvdHJhc2gucG5nXCIvPiA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD4gXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+e3guaXRlbS5pdGVtbG9uZ25hbWV9IDwvcD5cclxuICAgICAgICAgICAgICA8cD57eC5pdGVtLmNhdGVnZXJ5fS97eC5pdGVtLnN1YmNhdGVnZXJ5fSA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPlJzLnt4Lml0ZW0uaXRlbVByaWNlKigxMDAteC5pdGVtLml0ZW1kaXNjb3VudCkvMTAwfSB4IHt4Lml0ZW0ucXR5fSA9IFJzLnt4Lml0ZW0uaXRlbVByaWNlKigxMDAteC5pdGVtLml0ZW1kaXNjb3VudCkvMTAwKnguaXRlbS5xdHl9IDwvcD5cclxuICAgICAgICAgIDxwID4gPHN0cmlrZSBjbGFzc05hbWU9XCJmb250c2l6ZUUtOFwiPlJzLnt4Lml0ZW0uaXRlbVByaWNlfS4wMDwvc3RyaWtlPiA8c3BhbiBjbGFzc05hbWU9XCJmb250Y29sb3JPcmFuZ2UgZm9udHNpemVFLThcIj57eC5pdGVtLml0ZW1kaXNjb3VudH0lIDwvc3Bhbj4gIFJzLnt4Lml0ZW0uaXRlbVByaWNlKigxMDAteC5pdGVtLml0ZW1kaXNjb3VudCkvMTAwfSA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ1c2VyLWRldGFpbHMgZm9udDZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b3BpY0NvbG9yXCI+e3gudXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgIDxwID4ge3gudXNlci5lbWFpbH0gLSB7eC51c2VyLmNvbnRhY3R9IDwvcD5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgIFxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzIGZvbnQ2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPmN1czoge3gudXNlck1zZz94LnVzZXJNc2c6Jy0tJ308L3A+XHJcbiAgICAgICAgICA8cCA+eW91OiB7eC5zZWxsZXJNc2c/eC5zZWxsZXJNc2c6Jy0tJ308L3A+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3Byb3BzLnNlbGxlck1hc3NlZ2UuYmluZCh0aGlzLHguX2lkLHguc3RhdGUpfT5zZW5kIG1zZzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgXHJcbiAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgICl9XHJcbiAgXHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbiAgPHN0eWxlIGpzeD5cclxuICB7YFxyXG4gIC5vcmRlci10YWJsZXtcclxuICAgIG92ZXJmbG93IDogYXV0bztcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlscyBwe1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5pdGVtLWRldGFpbHMgaW1ne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbiAgXHJcbiAgKVxyXG4gIH1cclxuICBcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG90YWxwcmljZSA6IDAsXHJcbiAgICAgIG9yZGVyczpbXSxcclxuICAgICAgaXN0YWJsZTpmYWxzZVxyXG5cclxuICB9XHJcblx0fVxyXG5cclxuXHJcbiAgICBnZXRvcmRlcmJ5c3RhdGUoc3RhdGUpe1xyXG5cclxuICAgICAgZmV0Y2goYCR7VXJsfW9yZGVyYnlzaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4P3N0YXRlPSR7c3RhdGV9YClcclxuICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuanNvbigpfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7IHRoaXMuc2V0U3RhdGUoe29yZGVyczpkYXRhfSl9KVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlb3JkZXIoaWQsc3RhdGUpe1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB2YXIganNvbmJvZHkgPSB7c3RhdGU6c3RhdGV9XHJcbiAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KGpzb25ib2R5KSk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICBmZXRjaCgnL2FwaS91cGRhdGVvcmRlci8nK2lkLHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmdldG9yZGVyYnlzdGF0ZShzdGF0ZSk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICBzZWxsZXJNYXNzZWdlKGlkLHN0YXRlKXtcclxuICAgICAgICB2YXIgc2VuZCA9IHByb21wdChcImVudGVyIHlvdXIgbWVzc2FnZS5cIiwgXCJcIik7XHJcbiAgICAgICAgaWYoc2VuZCE9bnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgdmFyIGpzb25ib2R5ID0ge3NlbGxlck1zZzpzZW5kfVxyXG4gICAgICAgICAgICAvL3ZhciBqc29uYm9keSA9IHtzdGF0ZTonbmV3J31cclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoanNvbmJvZHkpKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL3VwZGF0ZW9yZGVyLycraWQse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgYWRkdG9jYXJ0KGl0ZW1pZCxuYW1lKXtcclxuICAgICAgICB2YXIgZGF0YSA9IENvb2tpZS5nZXRKU09OKCdmYXZlcml0ZS1pdGVtJyk7XHJcbiAgICAgICAgdmFyIGpzb25hcnJheSA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKCFkYXRhLmluY2x1ZGVzKGl0ZW1pZCkpXHJcbiAgICAgICAgICAgIHtqc29uYXJyYXkgPSBbLi4uZGF0YSxpdGVtaWRdXHJcbiAgICAgICAgICAgIENvb2tpZS5zZXQoJ2ZhdmVyaXRlLWl0ZW0nLGpzb25hcnJheSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGBhZGQgJHtuYW1lfSB0byBjYXJ0LmApXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhbGVydChgYWxyZWFkeSBhZGRlZCAke25hbWV9IHRvIGNhcnQuYCkgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAganNvbmFycmF5ID0gW2l0ZW1pZF1cclxuICAgICAgICAgICAgQ29va2llLnNldCgnZmF2ZXJpdGUtaXRlbScsanNvbmFycmF5KTtcclxuICAgICAgICAgICAgYWxlcnQoYGFkZCAke25hbWV9IHRvIGNhcnQuYClcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQoJy5zaWxkZTJpbWFnZScpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gNDQwcHggd2lkZSB0aGVuIHR1cm4gb24galNjcm9sbFBhbmUuLlxyXG4gICAgICAgICAgICAgICAgICAvLyAgJCgnLmRpdjEnKS5hZGRDbGFzcygnZGVza3RvcCcpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLmNzcyh7J21heC1oZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5wYXJlbnQoKS5jc3MoeydoZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJywnYmFja2dyb3VuZCc6ICcjZmZmZmZmJ30pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9uIGxvYWRcclxuICAgICAgICAgICAgY2hlY2tXaWR0aCgpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tXaWR0aCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG9yZGVyczp0aGlzLnByb3BzLm9yZGVyc1xyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjaG5hZ2V0YWI9KGlzdGFibGUpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzdGFibGU6aXN0YWJsZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gICAgICBjb25zdCBzaWRlbmF2Y29uc3QgPSB7dG9waWMgOiAnQ2F0ZWdlcmllcycsdG9waWNsaW5rOidBbGwgQ2F0ZWdlcmllc3MnLHNpZGVuYXZsaW5rOltdLCB2aXNpYmxlOmZhbHNlIH07XHJcbiBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgPFN1Yk5hdkJhciBzaWRlbmF2Y29uc3Q9e3NpZGVuYXZjb25zdH0vPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1tZW51IGNvbC1sZy0xMSBjb2wtc20tMTIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDb2xvciBwcm9maWxlLWNzcy10b3BpY1wiPk15IHByb2ZpbGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNpZGUgc2hvcD17dGhpcy5wcm9wcy5zaG9wP3RoaXMucHJvcHMuc2hvcDpudWxsfSA+PC9JbWFnZXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHNpZGUgc2hvcD17dGhpcy5wcm9wcy5zaG9wP3RoaXMucHJvcHMuc2hvcDpudWxsfSA+PC9Db250ZW50c2lkZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmNobmFnZXRhYi5iaW5kKHRoaXMsZmFsc2UpfSBjbGFzc05hbWU9IHt0aGlzLnN0YXRlLmlzdGFibGU/XCJuYXYtbGlua1wiOlwibmF2LWxpbmsgYWN0aXZlXCJ9ID5JdGVtcyBMaXN0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5jaG5hZ2V0YWIuYmluZCh0aGlzLHRydWUpfSAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmlzdGFibGU/XCJuYXYtbGluayBhY3RpdmVcIjpcIm5hdi1saW5rXCJ9Pk9yZGVyIExpc3Q8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlzdGFibGU/PE9yZGVyVGFibGUgb3JkZXJzPXt0aGlzLnN0YXRlLm9yZGVyc30gdXBkYXRlb3JkZXI9eyhpZCxzdGF0ZSk9PnRoaXMudXBkYXRlb3JkZXIoaWQsc3RhdGUpfSBnZXRvcmRlcmJ5c3RhdGU9eyhzdGF0ZSk9PnRoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKX0gc2VsbGVyTWFzc2VnZT17KGlkLHN0YXRlKT0+dGhpcy5zZWxsZXJNYXNzZWdlKGlkLHN0YXRlKX0vPlxyXG4gICAgICAgICAgICAgICAgOjxDYXJ0TGlzdCBpdGVtcz17dGhpcy5wcm9wcy5pdGVtc30gY2F0YWdlcnl0eXBlPVwiUGhvbmVzXCIgYWRkdG9jYXJ0ID17KGlkLG5hbWUpPT50aGlzLmFkZHRvY2FydChpZCxuYW1lKX0gLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuICBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VybH1vcmRlcmJ5c2hvcGlkLzVlODg4OWE0Mzg3NDc5MzY1ODBkODVjOD9zdGF0ZT1uZXdgKTtcclxuICAvLyAgY29uc3QgcmVzc2hvcCA9IGF3YWl0IGZldGNoKGAke1VybH1zaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4YCk7XHJcbiAgICBjb25zdCByZXNzaG9wID0gYXdhaXQgZmV0Y2goYCR7VXJsfXNob3BhbmRpdGVtcy9zaGI/aWRlPTVlODg4OWE0Mzg3NDc5MzY1ODBkODVjOGApO1xyXG5cclxuICAgIHZhciAgb3JkZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHZhciAgc2hvcGFuZGl0ZW1zID0gYXdhaXQgcmVzc2hvcC5qc29uKCk7XHJcbiAgICB2YXIgZXJyb3IgPSBmYWxzZTtcclxuICAgIGlmKHJlcy5zdGF0dXMhPTIwMHx8cmVzc2hvcC5zdGF0dXMhPTIwMCl7XHJcbiAgICAgICAgZXJyb3IgPSB0cnVlIDtcclxuICAgfVxyXG4gICAgcmV0dXJuIHtvcmRlcnM6b3JkZXJzLHNob3A6c2hvcGFuZGl0ZW1zLnNob3AsaXRlbXM6c2hvcGFuZGl0ZW1zLml0ZW1zLGVycm9yfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\orders.js */"));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "chnagetab", istable => {
      this.setState({
        istable: istable
      });
    });

    this.state = {
      totalprice: 0,
      orders: [],
      istable: false
    };
  }

  getorderbystate(state) {
    fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_5__["Url"]}orderbyshopid/5e8889a438747936580d85c8?state=${state}`).then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        orders: data
      });
    });
  }

  updateorder(id, state) {
    const data = new FormData();
    var jsonbody = {
      state: state
    };
    data.append('jsonbody', JSON.stringify(jsonbody));
    data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('user')));
    fetch('/api/updateorder/' + id, {
      method: 'PUT',
      headers: {},
      body: data
    }).then(response => {
      this.getorderbystate(state);
      return response.json();
    }).then(data => {
      if (data != undefined) {
        alert(data.msg);
      }
    }).catch(error => console.log(error));
  }

  sellerMassege(id, state) {
    var send = prompt("enter your message.", "");

    if (send != null) {
      const data = new FormData();
      var jsonbody = {
        sellerMsg: send
      }; //var jsonbody = {state:'new'}

      data.append('jsonbody', JSON.stringify(jsonbody));
      data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('user')));
      fetch('/api/updateorder/' + id, {
        method: 'PUT',
        headers: {},
        body: data
      }).then(response => {
        this.getorderbystate(state);
        return response.json();
      }).then(data => {
        if (data != undefined) {
          alert(data.msg);
        }
      }).catch(error => console.log(error));
    }
  }

  addtocart(itemid, name) {
    var data = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('faverite-item');
    var jsonarray = [];

    if (data) {
      if (!data.includes(itemid)) {
        jsonarray = [...data, itemid];
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('faverite-item', jsonarray);
        alert(`add ${name} to cart.`);
      } else {
        alert(`already added ${name} to cart.`);
      }
    } else {
      jsonarray = [itemid];
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.set('faverite-item', jsonarray);
      alert(`add ${name} to cart.`);
    }
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
      function checkWidth() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.silde2image').width();
        var windowheight = jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).height(); //if the window is greater than 440px wide then turn on jScrollPane..
        //  $('.div1').addClass('desktop')

        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.silde2image').css({
          'max-height': windowwidth / 3 * 2,
          'width': '100%'
        });
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.silde2image').parent().css({
          'height': windowwidth / 3 * 2,
          'width': '100%',
          'background': '#ffffff'
        });
      } // Execute on load


      checkWidth(); // Bind event listener

      jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).resize(checkWidth);
    });
    this.setState({
      orders: this.props.orders
    });
  }

  render() {
    const sidenavconst = {
      topic: 'Categeries',
      topiclink: 'All Categeriess',
      sidenavlink: [],
      visible: false
    };
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sidenavconst: sidenavconst
    }), __jsx("div", {
      className: "cart-menu col-lg-11 col-sm-12 mx-auto"
    }, __jsx("div", null, __jsx("h2", {
      className: "font1 topicColor profile-css-topic"
    }, "My profile")), __jsx("div", {
      className: "row col-12"
    }, __jsx(Imageside, {
      shop: this.props.shop ? this.props.shop : null
    }), __jsx(Contentside, {
      shop: this.props.shop ? this.props.shop : null
    })), __jsx("ul", {
      className: "nav nav-tabs"
    }, __jsx("li", {
      className: "nav-item pointer"
    }, __jsx("a", {
      onClick: this.chnagetab.bind(this, false),
      className: this.state.istable ? "nav-link" : "nav-link active"
    }, "Items List")), __jsx("li", {
      className: "nav-item pointer"
    }, __jsx("a", {
      onClick: this.chnagetab.bind(this, true),
      className: this.state.istable ? "nav-link active" : "nav-link"
    }, "Order List"))), __jsx("br", null), this.state.istable ? __jsx(OrderTable, {
      orders: this.state.orders,
      updateorder: (id, state) => this.updateorder(id, state),
      getorderbystate: state => this.getorderbystate(state),
      sellerMassege: (id, state) => this.sellerMassege(id, state)
    }) : __jsx(CartList, {
      items: this.props.items,
      catagerytype: "Phones",
      addtocart: (id, name) => this.addtocart(id, name)
    })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_5__["Url"]}orderbyshopid/5e8889a438747936580d85c8?state=new`); //  const resshop = await fetch(`${Url}shopid/5e8889a438747936580d85c8`);

  const resshop = await fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_5__["Url"]}shopanditems/shb?ide=5e8889a438747936580d85c8`);
  var orders = await res.json();
  var shopanditems = await resshop.json();
  var error = false;

  if (res.status != 200 || resshop.status != 200) {
    error = true;
  }

  return {
    orders: orders,
    shop: shopanditems.shop,
    items: shopanditems.items,
    error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/orders.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\orders.js */"./pages/orders.js");


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
//# sourceMappingURL=orders.js.map