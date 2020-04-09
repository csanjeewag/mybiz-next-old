module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
  url: '/shop/All-island',
  urlname: 'all-shop'
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
      className: "jsx-3406205668"
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      className: "jsx-3406205668"
    }, "Agency - Start Bootstrap Theme"), __jsx("meta", {
      name: "google-signin-client_id",
      content: "511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com",
      className: "jsx-3406205668"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
      crossOrigin: "anonymous",
      className: "jsx-3406205668"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap",
      rel: "stylesheet",
      className: "jsx-3406205668"
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap",
      rel: "stylesheet",
      className: "jsx-3406205668"
    })), this.props.children, __jsx("script", {
      src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
      integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
      crossOrigin: "anonymous",
      className: "jsx-3406205668"
    }), __jsx("script", {
      src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
      integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
      crossOrigin: "anonymous",
      className: "jsx-3406205668"
    }), __jsx("script", {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
      integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
      crossOrigin: "anonymous",
      className: "jsx-3406205668"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3406205668"
    }, ".font1{font-family:'Titillium Web',sans-serif;}.font2{font-family:'Ubuntu',sans-serif;}.font3{font-family:'Cabin',sans-serif;}.font4{font-family:'Anton',sans-serif;}.font5{font-family:'Indie Flower',cursive;}.font6{font-family:'Acme',sans-serif;}.font7{font-family:'Trade Winds',cursive;}.topicColor{color:darkblue;}.subtopicColor{color:blue;}.fontcolorOrange{color:orange;}.fontcolorSkyblue{color :#008ACC;}.fontcolorpink{color :#CC0047;}.fontcolorred{color :#CC0000;}.fontsizeE-5{font-size :0.5em;}.fontsizeE-6{font-size :0.6em;}.fontsizeE-7{font-size :0.7em;}.fontsizeE-8{font-size :0.8em;}.fontsizeE-9{font-size :0.9em;}.fontsizeE1{font-size :1em;}.fontsizeE1-25{font-size :1.25em;}.fontsizeE1-5{font-size :1.5em;}.fontsizeE2{font-size :2em;}.fontsizeE2-25{font-size :2.25em;}.fontweight700{font-weight :700;}.pointer{cursor:pointer;}.progress{cursor:progress;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXE1haW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0RJLEFBUzZDLEFBR1AsQUFHRCxBQUdBLEFBR0ksQUFHTCxBQUdJLEFBSXJCLEFBR0osQUFHRSxBQUdJLEFBR0EsQUFHQSxBQUdDLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRixBQUdHLEFBR0QsQUFHRixBQUdHLEFBSXBCLEFBRXlCLEFBQ0MsV0FoRHpCLEVBR0EsRUFOQSxBQVNBLEFBR0EsQUFHQSxBQWtCQSxBQVNBLEFBUXlCLENBQ0MsQ0FqQzFCLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFTQSxBQVNBLENBWkEsQUFTQSxZQXBEQSxDQVRBLEFBR0EsQ0FOQSxFQWVBLENBTkEsSUFaQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxsYXlvdXRzXFxNYWluTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xyXG4gICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZih3aW5kb3d3aWR0aDw5OTApe1xyXG4gICAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgICAgICAkKCcuaXNkZXNrdG9wX2Rpc2FibGUnKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAkKCcuaXNtb2JpbGVfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICQoJy5pc2Rlc2t0b3BfZGlzYWJsZScpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBpc01vYmlsZSgpO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShpc01vYmlsZSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgIFxyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXYgPlxyXG48SGVhZD5cclxuPHRpdGxlPkFnZW5jeSAtIFN0YXJ0IEJvb3RzdHJhcCBUaGVtZTwvdGl0bGU+XHJcblxyXG4gIFxyXG5cclxuIDxtZXRhIG5hbWU9XCJnb29nbGUtc2lnbmluLWNsaWVudF9pZFwiIGNvbnRlbnQ9XCI1MTE4ODA2NzQ5MDEtZ2ZuNnYybjFlajY1cnJsbm52MjlvZGdiamtwa2hwY2ouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIi8+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVZrb284eDRDR3NPMytIaHh2OFQvUTVQYVh0a0t0dTZ1ZzVUT2VOVjZnQmlGZVdQR0ZOOU11aE9mMjNROUlmamhcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BY21lfEFudG9ufENhYmlufEluZGllK0Zsb3dlcnxUcmFkZStXaW5kc3xVYnVudHUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taWMrTmV1ZTp3Z2h0QDcwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDYwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgXHJcbiAgICBcclxuXHJcbjxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuNC4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUo2cWE0ODQ5YmxFMitwb1Q0V255S2h2NXZaRjVTclBvMGlFandCdktVN2ltR0ZBVjB3d2oxeVlmb1JTSm9aK25cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LVE2RTlSSHZiSXlaRkpvZnQrMm1KYkhhRVdsZGx2STlJT1l5NW4zelY5enpUdG1JM1Vrc2RRUlZ2b3hNZm9vQW9cIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG48c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtd2ZTREYyRTUwWTJEMXVVZGowTzN1TUJKbmp1VUQ0SWg3WXdhWWQxaXFma3RqMFVvZDhHQ0V4bDNPZzhpZndCNlwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcblxyXG4gPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgIHtgXHJcbiAgIFxyXG4gICBcclxuICBcclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgLmZvbnQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgIH1cclxuICAgLmZvbnQye1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250M3tcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250NHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250NXtcclxuICAgIGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcclxuICAgfVxyXG4gICAuZm9udDZ7XHJcbiAgICBmb250LWZhbWlseTogJ0FjbWUnLCBzYW5zLXNlcmlmO1xyXG4gICB9XHJcbiAgIC5mb250N3tcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJhZGUgV2luZHMnLCBjdXJzaXZlO1xyXG4gICB9XHJcblxyXG4gICAudG9waWNDb2xvciB7XHJcbiAgICBjb2xvcjpkYXJrYmx1ZTtcclxuICAgfVxyXG4gICAuc3VidG9waWNDb2xvcntcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvck9yYW5nZXtcclxuICAgIGNvbG9yOm9yYW5nZTtcclxuICAgfVxyXG4gICAuZm9udGNvbG9yU2t5Ymx1ZXtcclxuICAgICBjb2xvciA6ICMwMDhBQ0M7XHJcbiAgIH1cclxuICAgLmZvbnRjb2xvcnBpbmt7XHJcbiAgICAgY29sb3IgOiAjQ0MwMDQ3O1xyXG4gICB9XHJcbiAgIC5mb250Y29sb3JyZWR7XHJcbiAgICAgY29sb3IgOiAjQ0MwMDAwO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtNSB7XHJcbiAgICBmb250LXNpemUgOiAwLjVlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTYge1xyXG4gICAgZm9udC1zaXplIDogMC42ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRS03IHtcclxuICAgIGZvbnQtc2l6ZSA6IDAuN2VtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUtOCB7XHJcbiAgICBmb250LXNpemUgOiAwLjhlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFLTkge1xyXG4gICAgZm9udC1zaXplIDogMC45ZW07XHJcbiAgIH1cclxuICAgLmZvbnRzaXplRTEge1xyXG4gICAgZm9udC1zaXplIDogMWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUxLTI1IHtcclxuICAgIGZvbnQtc2l6ZSA6IDEuMjVlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMS01IHtcclxuICAgIGZvbnQtc2l6ZSA6IDEuNWVtO1xyXG4gICB9XHJcbiAgIC5mb250c2l6ZUUyIHtcclxuICAgIGZvbnQtc2l6ZSA6IDJlbTtcclxuICAgfVxyXG4gICAuZm9udHNpemVFMi0yNSB7XHJcbiAgICBmb250LXNpemUgOiAyLjI1ZW07XHJcbiAgIH1cclxuICAgLmZvbnR3ZWlnaHQ3MDAge1xyXG4gICAgZm9udC13ZWlnaHQgOiA3MDBcclxuICAgfVxyXG5cclxuICAgLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgLnByb2dyZXNzIHtjdXJzb3I6IHByb2dyZXNzO31cclxuICAgYH1cclxuIDwvc3R5bGU+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\MainLayout.js */"));
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
    }, "MYBIZ.COM"), this.props.sidenavconst.visible ? __jsx("button", {
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
    }, ".subnav.jsx-2654486189{z-index :100;}.navbar-nav.jsx-2654486189{padding-left :100px;}.navbar-nav.jsx-2654486189 a.jsx-2654486189{color :white;}.navbar-nav.jsx-2654486189 a.jsx-2654486189:hover{color :gray;}.navbar.jsx-2654486189{z-index :50;height:60px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-2654486189{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;height:50px;}.togglemenuC.jsx-2654486189{display:none;}.sticky-top.jsx-2654486189{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.all-link.jsx-2654486189{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR2lCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBS0EsQUFTYyxBQVFoQyxBQUUwQixBQU1ULFlBNUJmLEFBSWdCLENBaEJoQixBQVFBLEFBd0JELEFBU0EsT0F0Q0MsSUFjOEIsQUFrQmQsRUFWMkIsd0JBUDNCLFlBQ0EsRUFpQlYsTUFDaUMsSUFqQkksc0NBTWYsd0JBQ1osWUFDRCxRQVVoQixJQWpCQSxBQVFBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLy4uL2xheW91dHMvU2lkZU5hdic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi8uLi9jb21wb25lbnRzL3NpZ251cCc7XHJcbmltcG9ydCB7TmF2TGlua30gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuIFxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy9zaWRlIG5hdiBiYXIgb3BlblxyXG4gICAgc2hvd3NpZGViYXIoKXtcclxuICAgICAgICB0aGlzLnJlZnMuc2lkZW5hdi5zaG93U2lkZWJhcigpO1xyXG4gICAgICB9XHJcbiAgICAvL3Nob3cgc2lnbnVwXHJcbiAgICAgIHNob3dzaWdudXAoKXtcclxuICAgICAgICB0aGlzLnJlZnMuc2lnbnVwLnNob3dzaWdudXAoKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVDJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCdkaXYubmF2YmFyLWNvbGxhcHNlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcudG9nZ2xlbWVudU8nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiBlZmZlY3QgZm9yIG5hdmJhciBcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAvLyBjaGVja3MgaWYgd2luZG93IGlzIHNjcm9sbGVkIG1vcmUgdGhhbiA1MDBweCwgYWRkcy9yZW1vdmVzIHNvbGlkIGNsYXNzXHJcbiAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+ICAkKHdpbmRvdykud2lkdGgoKS82KSB7IFxyXG4gICAgICAgICAgICAgICAgICAkKCcuc3ViMW5hdicpLmFkZENsYXNzKCdTb2xpZE5hdicpLmNzcyh7J29wYWNpdHknOicxJ30pLmFkZENsYXNzKCdmaXhlZC10b3AnKS5yZW1vdmVDbGFzcygnc3RpY2t5LXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubG9nby1saW5rJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7ICQoJy5hbGwtbGluaycpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zdWIxbmF2JykucmVtb3ZlQ2xhc3MoJ1NvbGlkTmF2JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkLXRvcCcpLmFkZENsYXNzKCdzdGlja3ktdG9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5hbGwtbGluaycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pOyAkKCcubG9nby1saW5rJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93d2lkdGg8OTkwKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjYnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh3aW5kb3cpLndpZHRoKCkvNCkgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2RhcmtibHVlJywnb3BhY2l0eSc6JzAuNicsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjYnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpZGVuYXZjb25zdC52aXNpYmxlID88U2lkZU5hdiByZWY9XCJzaWRlbmF2XCIgIHNpZGVuYXZjb25zdD17dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3R9Lz46bnVsbH1cclxuXHJcbiAgICAgICAgICAgIDxTaWduVXAgcmVmPVwic2lnbnVwXCIgc2hvd3NpZ251cD17dGhpcy5wcm9wcy5zaG93c2lnbnVwfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym5hdlwiID5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc3ViMW5hdiBzdGlja3ktdG9wIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIGZvbnQ3IGxvZ28tbGlua1wiIGhyZWY9XCIjXCI+TVlCSVouQ09NPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2lkZW5hdmNvbnN0LnZpc2libGU/PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dzaWRlYmFyLmJpbmQodGhpcyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYWxsLWxpbmsgZm9udDFcIj57dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3QudG9waWNsaW5rfTwvYnV0dG9uPjo8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmQgZm9udDcgYWxsLWxpbmtcIiBocmVmPVwiI1wiPk1ZQklaLkNPTTwvYT59XHJcbiBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciB0b2dnbGVtZW51TyBtZW51T3BlblwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyTmF2QWx0TWFya3VwXCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkFsdE1hcmt1cFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzMwL2ZmZmZmZi9tZW51LnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIG5hdmJhci10b2dnbGVyIHRvZ2dsZW1lbnVDIG1lbnVDbG9zZVwiIHR5cGU9XCJidXR0b25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZGVsZXRlLXNpZ24ucG5nXCIvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdkFsdE1hcmt1cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICB7TmF2TGluay5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17eC51cmx9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi1saW5rLW1haW4gYWN0aXZlIGZvbnQxXCIgPnt4LnVybG5hbWV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT0nMTAwJyBocmVmPScjJz48YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MVwiIG9uQ2xpY2s9e3RoaXMuc2hvd3NpZ251cC5iaW5kKHRoaXMpfSA+c2lnbmluPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLnN1Ym5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleCA6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQgOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleCA6IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci5Tb2xpZE5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAycyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggZ3JleTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLnRvZ2dsZW1lbnVDe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLnN0aWNreS10b3B7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAuYWxsLWxpbmt7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SubNavbar.js */"));
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

/***/ "./pages/update-shop/[id].js":
/*!***********************************!*\
  !*** ./pages/update-shop/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/Footer */ "./components/Footer.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      var shopd = this.state.shopDetail;
      shopd.find(function (e) {
        if (e.name == evt.target.name) {
          e.value = evt.target.value;
        }
      });
      this.setState({
        shopDetail: shopd
      });
    });

    _defineProperty(this, "addnewShopDetails", evt => {
      if (this.state.newshopdetail != '') {
        var shopd = this.state.shopDetail;
        shopd.push({
          name: this.state.newshopdetail,
          value: ''
        });
        this.setState({
          shopDetail: shopd,
          newshopdetail: ''
        });
        alert(' added new details!');
        this.componentDidMount();
      }
    });

    _defineProperty(this, "deleteDetals", value => {
      if (confirm('is it sure remove ' + value + '?')) {
        var shopd = this.state.shopDetail;
        shopd.splice(shopd.findIndex(function (e) {
          return e.name == value;
        }), 1);
        this.setState({
          shopDetail: shopd
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
        case 'shopName':
          validation.shopName = form.shopName.length < 5 ? 'There are should be atleast 5 charactors.' : '';
          break;

        case 'district':
          validation.district = form.district.length < 1 ? 'District cannot be empty.' : '';
          break;

        case 'town':
          validation.town = form.town.length < 1 ? 'Town cannot be empty.' : '';
          break;

        case 'address':
          validation.address = form.address.length < 1 ? 'Address cannot be empty.' : '';
          break;

        case 'categery':
          validation.categery = form.categery.length < 2 ? 'Categery should be select.' : '';
          break;

        case 'contact1':
          validation.contact1 = form.contact1.length < 1 ? 'Contact cannot be empty.' : '';
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

        data.append('jsonbody', JSON.stringify(jsonbody)); // data.append('files',this.state.files);

        data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON('user')));
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('/api/updateshop/' + this.props.shopid, {
          method: 'PUT',
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

    _defineProperty(this, "deleteImagesinDB", x => {
      var deleteimages = this.state.deleteimages;

      if (!deleteimages.includes(x)) {
        deleteimages.push(x);
        this.setState({
          deleteimages: deleteimages
        });
      }
    });

    _defineProperty(this, "addImagesinDB", x => {
      var deleteimages = this.state.deleteimages;

      if (deleteimages.includes(x)) {
        deleteimages.splice(deleteimages.findIndex(e => e == x), 1);
        this.setState({
          deleteimages: deleteimages
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
      shopName: '',
      categery: '',
      district: '',
      town: '',
      address: '',
      contact1: '',
      contact2: '',
      content1: '',
      content2: '',
      images: [],
      deleteimages: [],
      newshopdetail: '',
      shopDetail: [{
        name: 'cash on delivery',
        value: ''
      }],
      selectedFilecount: 1,
      defaultfilepath: 'https://img.icons8.com/ios/50/01567e/image.png',
      files: [{
        selectedFile: null,
        selectedfilepath: 'https://img.icons8.com/ios/50/01567e/image.png'
      }],
      validation: {
        shopName: '',
        categery: '',
        district: '',
        town: '',
        address: '',
        contact1: '',
        contact2: '',
        content1: '',
        content2: ''
      }
    };
  }

  componentDidMount() {
    var shop = this.props.shop;
    shop.user = null;
    this.setState(_objectSpread({}, shop));
    console.log(shop);
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
      sidenavlink: sidenavlink,
      visible: false
    }; //////////////

    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sidenavconst: sidenavconst
    }), __jsx("div", {
      className: "jsx-2767949673" + " " + "form-create-shop"
    }, __jsx("div", {
      className: "jsx-2767949673" + " " + "container"
    }, __jsx("h1", {
      className: "jsx-2767949673" + " " + "font4 fontsizeE2-25 topicColor d-flex justify-content-center"
    }, "Update shop"), __jsx("form", {
      className: "jsx-2767949673" + " " + "form"
    }, __jsx("div", {
      className: "jsx-2767949673" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-2767949673" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "Shop Details"), __jsx("div", {
      className: "jsx-2767949673" + " " + "row"
    }, __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap  col-lg-6 col-md-6 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "Shop Name", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      name: "shopName",
      value: this.state.shopName,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.shopName != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.shopName)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-6 col-md-6 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "Categery Name", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("select", {
      type: "text",
      required: true,
      name: "categery",
      value: this.state.categery,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.categery != '' ? 'input-error' : '') || false)
    }, __jsx("option", {
      value: "d",
      className: "jsx-2767949673"
    }, "Default select"), this.props.error ? null : this.props.type.map((x, i) => __jsx("option", {
      key: i,
      value: x.type,
      className: "jsx-2767949673"
    }, x.name))), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.categery)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "District", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      name: "district",
      value: this.state.district,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.district != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.district)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "Town", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      name: "town",
      value: this.state.town,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.town != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.town)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "Address", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      name: "address",
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.address != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.address)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-6 col-md-6 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "contact 1", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      name: "contact1",
      value: this.state.contact1,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.contact1 != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.contact1)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-6 col-md-6 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "contact 2", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("input", {
      type: "text",
      required: true,
      name: "contact2",
      value: this.state.contact2,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.contact2 != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.contact2)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-12 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "content 1", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("textarea", {
      rows: "3",
      required: true,
      name: "content1",
      value: this.state.content1,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.content1 != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.content1)), __jsx("div", {
      className: "jsx-2767949673" + " " + "field-wrap col-lg-12 col-sm-12"
    }, __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, "content 2", __jsx("span", {
      className: "jsx-2767949673" + " " + "req"
    }, "*")), __jsx("textarea", {
      rows: "3",
      required: true,
      name: "content2",
      value: this.state.content2,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + ('font6 inputf1 ' + (this.state.validation.content2 != '' ? 'input-error' : '') || false)
    }), __jsx("span", {
      className: "jsx-2767949673" + " " + "form-error"
    }, this.state.validation.content2))), __jsx("hr", {
      className: "jsx-2767949673"
    }), __jsx("div", {
      className: "jsx-2767949673" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-2767949673" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "cover images for shop"), __jsx("div", {
      className: "jsx-2767949673" + " " + " row col-12"
    }, this.state.files.map((x, i) => __jsx("div", {
      key: i,
      className: "jsx-2767949673" + " " + " field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("div", {
      className: "jsx-2767949673" + " " + "imageupload d-flex justify-content-center"
    }, __jsx("div", {
      onClick: () => this.deleteFiles(x.selectedfilepath),
      className: "jsx-2767949673" + " " + "popup-close-2"
    }, "x"), __jsx("img", {
      width: x.selectedfilepath != this.state.defaultfilepath ? '100%' : null,
      src: x.selectedfilepath,
      className: "jsx-2767949673" + " " + "align-self-center"
    }), __jsx("input", {
      type: "file",
      required: true,
      value: x.file,
      onChange: this.fileChangeHandler,
      className: "jsx-2767949673" + " " + "imageupload-input"
    })))))), __jsx("hr", {
      className: "jsx-2767949673"
    }), __jsx("div", {
      className: "jsx-2767949673" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-2767949673" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "what should be removed"), __jsx("div", {
      className: "jsx-2767949673" + " " + " row col-12"
    }, this.state.images.map((x, i) => __jsx("div", {
      key: i,
      className: "jsx-2767949673" + " " + 'field-wrap col-lg-4 col-md-4 col-sm-12 deletefile'
    }, __jsx("div", {
      className: "jsx-2767949673" + " " + 'imageupload d-flex justify-content-center'
    }, !this.state.deleteimages.includes(x) ? __jsx("div", {
      onClick: () => this.deleteImagesinDB(x),
      className: "jsx-2767949673" + " " + "popup-close-3"
    }, " remove") : __jsx("div", {
      onClick: () => this.addImagesinDB(x),
      className: "jsx-2767949673" + " " + "popup-close-3"
    }, " add"), __jsx("img", {
      width: x != this.state.defaultfilepath ? '100%' : null,
      src: _constant_main__WEBPACK_IMPORTED_MODULE_8__["ImageUrl"] + x,
      className: "jsx-2767949673" + " " + "align-self-center"
    })))))), __jsx("hr", {
      className: "jsx-2767949673"
    }), __jsx("div", {
      className: "jsx-2767949673" + " " + "content"
    }, __jsx("h3", {
      className: "jsx-2767949673" + " " + "font4 fontsizeE1-5 fontcolorOrange"
    }, "Shop Details"), __jsx("div", {
      className: "jsx-2767949673" + " " + "col-12"
    }, __jsx("div", {
      className: "jsx-2767949673" + " " + " field-wrap col-lg-6 col-md-6 col-sm-12"
    }, __jsx("div", {
      role: "group",
      "aria-label": "Basic example",
      className: "jsx-2767949673" + " " + "btn-group"
    }, __jsx("input", {
      type: "text",
      required: true,
      name: "newshopdetail",
      value: this.state.newshopdetail,
      onChange: this.handleChange,
      onBlur: this.validationform,
      className: "jsx-2767949673" + " " + 'font6 inputf1 '
    }), __jsx("button", {
      type: "button",
      required: true,
      name: "newshopdetail",
      onClick: this.addnewShopDetails,
      className: "jsx-2767949673" + " " + "font6  btn btn-addnewshop"
    }, " new+ "))), __jsx("span", {
      className: "jsx-2767949673"
    }, "If you need add more field as your details of shop")), __jsx("div", {
      className: "jsx-2767949673" + " " + "row"
    }, this.state.shopDetail.map((x, i) => __jsx("div", {
      key: i,
      className: "jsx-2767949673" + " " + "field-wrap col-lg-4 col-md-4 col-sm-12"
    }, __jsx("div", {
      onClick: () => this.deleteDetals(x.name),
      display: "none",
      className: "jsx-2767949673" + " " + "popup-close-1"
    }, "x"), __jsx("label", {
      className: "jsx-2767949673" + " " + "font2 labelf1"
    }, x.name), __jsx("input", {
      type: "text",
      required: true,
      name: x.name,
      value: x.value,
      onChange: this.handleChangedetails,
      className: "jsx-2767949673" + " " + 'font6 inputf1'
    })))))), __jsx("div", {
      className: "jsx-2767949673" + " " + "d-flex justify-content-end"
    }, __jsx("button", {
      type: "button",
      required: true,
      name: "newshopdetail",
      onClick: this.handleSubmit,
      className: "jsx-2767949673" + " " + "font6  btn btn-submit "
    }, " Submit "))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2767949673"
    }, ".imageupload.jsx-2767949673{background:#c2d1e17d;height:200px;border:1.5px solid #01567e;overflow:hidden;margin-top:2rem;}.imageupload-input.jsx-2767949673{position:absolute;font-size:1px;cursor:pointer;opacity:0;height:100%;width:80%;}.popup-close-1.jsx-2767949673{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#01567e;cursor:pointer;font-size:0.6rem;width:1.2rem;height:1.2rem;top:2.2rem;right:1rem;position:absolute;border-radious:100%;}.popup-close-2.jsx-2767949673{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#01567e;cursor:pointer;font-size:0.6rem;width:1.5rem;height:1.5rem;top:2.1rem;right:1rem;position:absolute;}.popup-close-3.jsx-2767949673{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#01567e;cursor:pointer;font-size:0.6rem;width:5rem;height:1.5rem;top:2.1rem;right:1rem;position:absolute;}.form-create-shop.jsx-2767949673{background:#8b8b8ba8;}.container.jsx-2767949673{background-image:url(\"/form1.jpg\");background-repeat:no-repeat;padding :20px 10px;opacity:1.1;}.labelf1.jsx-2767949673{position:relative;-webkit-transform:translateY(40px);-ms-transform:translateY(40px);transform:translateY(40px);left:13px;color:#01567e;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;-webkit-backface-visibility:hidden;pointer-events:none;font-size:18px;}.labelf1.jsx-2767949673 .req.jsx-2767949673{margin:2px;color:#01567e;}.labelf1.active.jsx-2767949673{left:13px;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);font-size:15px;}.labelf1.active.jsx-2767949673 .req.jsx-2767949673{opacity:0;}.labelf1.highlight.jsx-2767949673{color:#023957;}.inputf1.jsx-2767949673{font-size:18px;display:block;width:100%;padding:5px 10px;background:#c2d1e17d;background-image:none;border:none;border:1.5px solid #01567e;color:darkblue;border-radius:0;-webkit-transition:border-color 0.5s ease;transition:border-color 0.5s ease;}.inputf1.jsx-2767949673:focus,textarea.jsx-2767949673:focus{outline:0;border-color:#023957;}.deletefile.jsx-2767949673{border-color:red;}textarea.jsx-2767949673{resize:vertical;}.field-wrap.jsx-2767949673{position:relative;}.btn-addnewshop.jsx-2767949673{background:#01567e;color:white;}.btn-submit.jsx-2767949673{background:#01567e;color:white;width:100%;margin-top:3rem;}.form-error.jsx-2767949673{color :red;font-size :0.8rem;}.input-error.jsx-2767949673{border-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFx1cGRhdGUtc2hvcFxcW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5ZUMsQUFHMEIsQUFPSCxBQVFULEFBZUEsQUFlRyxBQWNTLEFBS2MsQUFPakIsQUFVUCxBQUlELEFBS0EsQUFHSSxBQUdDLEFBYUwsQUFJTyxBQUdELEFBR0UsQUFJQyxBQUlBLEFBTVIsQUFJTSxVQW5EVSxBQUsvQixBQW1CeUIsQ0E1QlAsQUFvREksQ0F0SFIsQUFlQSxBQWVBLEVBZ0RkLENBR2tCLENBb0JsQixDQUhBLEFBd0JBLENBbElrQixBQWdFYSxBQWlEL0IsQ0FHZSxBQUlBLEVBL0hDLEFBMkRoQixJQXVCQSxJQWVlLEFBcUNmLEVBeEJBLEFBY0EsQUFJYyxDQXhISyxFQVBZLENBK0RDLEtBa0NYLEVBK0JELEtBeEhOLFVBQ0MsQUF5RlUsQ0ErQnpCLEdBaElvQixFQStERyxNQXREVixRQVJNLENBaUdPLENBeEYxQixHQXNEZSxJQWxESyxBQWVBLEFBZUEsT0ExQ3BCLENBZ0VBLE1BaUNnQixHQWZHLFFBZEwsQ0E4QmlCLE1BZi9CLEdBZGtCLGNBQ1ksSUE2QlgsZUFDQyxnQkFDa0IsU0F4RmQsQUFlQSxBQWVBLGdCQTRCZSxtQ0FDZixnQkE4QnhCLElBN0JtQixlQUNuQixhQTVEb0IsQUFlQSxBQWVBLG1CQTdCSixBQWVBLEFBZUEsZUE3QkUsQUFlQSxBQWVBLGlCQTdCSixBQWVBLEFBZUYsV0FDRyxFQTlCQSxBQWVBLFlBZ0JILEVBOUJBLEFBZUEsU0FnQkEsRUE5QkEsQUFlQSxTQWdCTyxFQTlCQSxBQWVBLGdCQWdCbkIsRUE5QnVCLEFBZ0J2QixvQkFmQSIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcdXBkYXRlLXNob3BcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IFN1Yk5hdkJhciBmcm9tICcuLy4uLy4uL2xheW91dHMvU3ViTmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQge1VybCxJbWFnZVVybH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudC9tYWluJztcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvcE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBjYXRlZ2VyeSA6JycsXHJcbiAgICAgICAgICAgIGRpc3RyaWN0OicnLFxyXG4gICAgICAgICAgICB0b3duOicnLFxyXG4gICAgICAgICAgICBhZGRyZXNzOicnLFxyXG4gICAgICAgICAgICBjb250YWN0MTonJyxcclxuICAgICAgICAgICAgY29udGFjdDI6JycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQxOicnLFxyXG4gICAgICAgICAgICBjb250ZW50MjonJyxcclxuICAgICAgICAgICAgaW1hZ2VzOltdLFxyXG4gICAgICAgICAgICBkZWxldGVpbWFnZXM6W10sXHJcbiAgICAgICAgICAgIG5ld3Nob3BkZXRhaWw6JycsXHJcbiAgICAgICAgICAgIHNob3BEZXRhaWw6W3tuYW1lOidjYXNoIG9uIGRlbGl2ZXJ5Jyx2YWx1ZTonJ31dLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGVjb3VudCA6IDEsXHJcbiAgICAgICAgICAgIGRlZmF1bHRmaWxlcGF0aCA6J2h0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwLzAxNTY3ZS9pbWFnZS5wbmcnLFxyXG4gICAgICAgICAgICBmaWxlcyA6IFt7c2VsZWN0ZWRGaWxlOm51bGwsc2VsZWN0ZWRmaWxlcGF0aDonaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDE1NjdlL2ltYWdlLnBuZyd9XSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbiA6IHtcclxuICAgICAgICAgICAgICAgIHNob3BOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGNhdGVnZXJ5IDonJyxcclxuICAgICAgICAgICAgICAgIGRpc3RyaWN0OicnLFxyXG4gICAgICAgICAgICAgICAgdG93bjonJyxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6JycsXHJcbiAgICAgICAgICAgICAgICBjb250YWN0MTonJyxcclxuICAgICAgICAgICAgICAgIGNvbnRhY3QyOicnLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDE6JycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50MjonJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdmFyIHNob3AgPSB0aGlzLnByb3BzLnNob3A7XHJcbiAgICAgICAgc2hvcC51c2VyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnNob3BcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3ApO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmZvcm0nKS5maW5kKCcuaW5wdXRmMScpLm9uKCdrZXl1cCBibHVyIGZvY3VzJywgZnVuY3Rpb24gKGUpIHtcclxuICBcclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSAkdGhpcy5wcmV2KCcubGFiZWxmMScpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdrZXl1cCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJHRoaXMudmFsKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZUNsYXNzKCdhY3RpdmUgaGlnaGxpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5hZGRDbGFzcygnYWN0aXZlIGhpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ2JsdXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiggJHRoaXMudmFsKCkgPT09ICcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZUNsYXNzKCdhY3RpdmUgaGlnaGxpZ2h0Jyk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodCcpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdmb2N1cycpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiggJHRoaXMudmFsKCkgPT09ICcnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLnJlbW92ZUNsYXNzKCdoaWdobGlnaHQnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKCAkdGhpcy52YWwoKSAhPT0gJycgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuYWRkQ2xhc3MoJ2hpZ2hsaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdmb3JtMSgpe1xyXG4gICAgICAgICAgICAgICAgJCgnLmZvcm0gLmlucHV0ZjEnKS5lYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByZXYoJy5sYWJlbGYxJykuYWRkQ2xhc3MoJ2FjdGl2ZSBoaWdobGlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGxvYWRpbmdmb3JtMSgpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAvLyBUaGlzIHRyaWdnZXJzIGV2ZXJ5dGltZSB0aGUgaW5wdXQgaXMgY2hhbmdlZFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiBcclxuICAgIGhhbmRsZUNoYW5nZWRldGFpbHM9IGV2dCA9PntcclxuICAgICAgICB2YXIgc2hvcGQgPSB0aGlzLnN0YXRlLnNob3BEZXRhaWw7XHJcbiAgICAgICAgc2hvcGQuZmluZChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgIGlmKGUubmFtZSA9PSBldnQudGFyZ2V0Lm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgIGUudmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvcERldGFpbCA6IHNob3BkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFkZG5ld1Nob3BEZXRhaWxzID0gZXZ0ID0+e1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUubmV3c2hvcGRldGFpbCAhPSAnJyl7XHJcbiAgICAgICAgICAgIHZhciBzaG9wZCA9IHRoaXMuc3RhdGUuc2hvcERldGFpbDtcclxuICAgICAgICAgICAgc2hvcGQucHVzaCh7bmFtZTp0aGlzLnN0YXRlLm5ld3Nob3BkZXRhaWwsdmFsdWU6Jyd9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaG9wRGV0YWlsIDogc2hvcGQsXHJcbiAgICAgICAgICAgICAgICBuZXdzaG9wZGV0YWlsIDogJydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYWxlcnQoJyBhZGRlZCBuZXcgZGV0YWlscyEnKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuICAgIGRlbGV0ZURldGFscyA9IHZhbHVlID0+e1xyXG5cclxuICAgICAgICBpZihjb25maXJtKCdpcyBpdCBzdXJlIHJlbW92ZSAnK3ZhbHVlKyc/Jykpe1xyXG5cclxuICAgICAgICBcclxuICAgICAgIHZhciBzaG9wZCA9IHRoaXMuc3RhdGUuc2hvcERldGFpbDtcclxuICAgICAgIHNob3BkLnNwbGljZShzaG9wZC5maW5kSW5kZXgoZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgcmV0dXJuIGUubmFtZSA9PSB2YWx1ZVxyXG4gICAgIFxyXG4gICAgICAgIH0pLDEpO1xyXG5cclxuICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3BEZXRhaWwgOiBzaG9wZCxcclxuICAgIH0pXHJcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRpb25mb3JtPShldnQpPT57XHJcbiAgICAgICAgdGhpcy5jaGVja3ZhbGlkYXRpb24oZXZ0LnRhcmdldC5uYW1lKVxyXG5cclxuICAgIH1cclxuICAgIGNoZWNrdmFsaWRhdGlvbiA9IChuYW1lKT0+e1xyXG4gICAgICAgIHZhciBmb3JtID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHRoaXMuc3RhdGUudmFsaWRhdGlvbjtcclxuICAgICAgICBzd2l0Y2gobmFtZSl7XHJcbiAgICAgICAgICAgIGNhc2UgKCdzaG9wTmFtZScpIDogdmFsaWRhdGlvbi5zaG9wTmFtZSA9IFxyXG4gICAgICAgICAgICBmb3JtLnNob3BOYW1lLmxlbmd0aCA8IDUgPyAgJ1RoZXJlIGFyZSBzaG91bGQgYmUgYXRsZWFzdCA1IGNoYXJhY3RvcnMuJ1xyXG4gICAgICAgICAgICA6JydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKCdkaXN0cmljdCcpIDogdmFsaWRhdGlvbi5kaXN0cmljdCA9IFxyXG4gICAgICAgICAgICBmb3JtLmRpc3RyaWN0Lmxlbmd0aCA8MSA/ICAnRGlzdHJpY3QgY2Fubm90IGJlIGVtcHR5Lic6JydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgKCd0b3duJykgOiB2YWxpZGF0aW9uLnRvd24gPSBcclxuICAgICAgICAgICAgZm9ybS50b3duLmxlbmd0aCA8MSA/ICAnVG93biBjYW5ub3QgYmUgZW1wdHkuJzonJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAoJ2FkZHJlc3MnKSA6IHZhbGlkYXRpb24uYWRkcmVzcyA9IFxyXG4gICAgICAgICAgICBmb3JtLmFkZHJlc3MubGVuZ3RoIDwxID8gICdBZGRyZXNzIGNhbm5vdCBiZSBlbXB0eS4nOicnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICgnY2F0ZWdlcnknKSA6IHZhbGlkYXRpb24uY2F0ZWdlcnkgPSBcclxuICAgICAgICAgICAgZm9ybS5jYXRlZ2VyeS5sZW5ndGggPDIgPyAgJ0NhdGVnZXJ5IHNob3VsZCBiZSBzZWxlY3QuJzonJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAoJ2NvbnRhY3QxJykgOiB2YWxpZGF0aW9uLmNvbnRhY3QxID0gXHJcbiAgICAgICAgICAgIGZvcm0uY29udGFjdDEubGVuZ3RoIDwxID8gICdDb250YWN0IGNhbm5vdCBiZSBlbXB0eS4nOicnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICgnY29udGVudDEnKSA6IHZhbGlkYXRpb24uY29udGVudDEgPSBcclxuICAgICAgICAgICAgZm9ybS5jb250ZW50MS5sZW5ndGggPDEgPyAgJ0NvbnRlbnQgY2Fubm90IGJlIGVtcHR5Lic6JydcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbjp2YWxpZGF0aW9uXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGJlZm9yZXN1Ym1pdD0oKT0+e1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS52YWxpZGF0aW9uKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2t2YWxpZGF0aW9uKGtleSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLnZhbGlkYXRpb24pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICAgaWYodmFsdWUhPScnKXtcclxuICAgICAgICAgICAgICAgICBjb3VudCA9IGNvdW50KzE7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdCA9IGV2dCA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAvL2NoZWNrIHZhbGlkYXRpb25zXHJcbiAgICAgICAgaWYodGhpcy5iZWZvcmVzdWJtaXQoKT4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCBjYW5ub3QgU3VibWl0IGZvcm0sIGNoZWNrIGFnYWluIGZvcm0hLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZmlsZXMhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZpbGVzLm1hcCgoeCxpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGBpbWFnZWAseC5zZWxlY3RlZEZpbGUpOyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGpzb25ib2R5ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICAgICAvLyBqc29uYm9keS5maWxlcyA9IG51bGw7XHJcbiAgICAgICAgICAgLy8ganNvbmJvZHkuZGVmYXVsdGZpbGVwYXRoID0gbnVsbDtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoanNvbmJvZHkpKTtcclxuICAgICAgICAgICAvLyBkYXRhLmFwcGVuZCgnZmlsZXMnLHRoaXMuc3RhdGUuZmlsZXMpO1xyXG4gICAgICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL3VwZGF0ZXNob3AvJyt0aGlzLnByb3BzLnNob3BpZCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGZpbGVDaGFuZ2VIYW5kbGVyPWV2ZW50PT57XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlY291bnQ+Mil7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzO1xyXG4gICAgICAgICAgICBmaWxlcy5zcGxpY2UoZmlsZXMuZmluZEluZGV4KGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgcmV0dXJuIGUuc2VsZWN0ZWRmaWxlcGF0aCA9PSAnaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNTAvMDE1NjdlL2ltYWdlLnBuZydcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgfSksMSk7XHJcbiAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgZmlsZXMgOiBmaWxlcyxcclxuICAgICAgICAgICAgIHNlbGVjdGVkRmlsZWNvdW50IDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVjb3VudC0xXHJcbiAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihldmVudC50YXJnZXQuZmlsZXNbMF0hPW51bGwpe1xyXG4gICAgICAgICAgICB2YXIgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzO1xyXG4gICAgICAgICAgICBmaWxlcy51bnNoaWZ0KHtzZWxlY3RlZEZpbGU6ZXZlbnQudGFyZ2V0LmZpbGVzWzBdLHNlbGVjdGVkZmlsZXBhdGg6VVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC50YXJnZXQuZmlsZXNbMF0pfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmlsZXMgOiBmaWxlcyxcclxuICAgICAgICAgICAgICBzZWxlY3RlZEZpbGVjb3VudCA6ICh0aGlzLnN0YXRlLnNlbGVjdGVkRmlsZWNvdW50PDMpP3RoaXMuc3RhdGUuc2VsZWN0ZWRGaWxlY291bnQrMTozXHJcbiAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBkZWxldGVJbWFnZXNpbkRCID0geCA9PntcclxuXHJcbiAgICAgICAgdmFyIGRlbGV0ZWltYWdlcyA9IHRoaXMuc3RhdGUuZGVsZXRlaW1hZ2VzO1xyXG4gICAgICAgIGlmKCFkZWxldGVpbWFnZXMuaW5jbHVkZXMoeCkpXHJcbiAgICAgICAgeyBkZWxldGVpbWFnZXMucHVzaCh4KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVpbWFnZXM6ZGVsZXRlaW1hZ2VzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIGFkZEltYWdlc2luREIgPSB4ID0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBkZWxldGVpbWFnZXMgPSB0aGlzLnN0YXRlLmRlbGV0ZWltYWdlcztcclxuICAgICAgICBpZihkZWxldGVpbWFnZXMuaW5jbHVkZXMoeCkpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgZGVsZXRlaW1hZ2VzLnNwbGljZShkZWxldGVpbWFnZXMuZmluZEluZGV4KGU9PmU9PXgpLDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZWltYWdlczpkZWxldGVpbWFnZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZGVsZXRlRmlsZXMgPSBzZWxlY3RlZGZpbGVwYXRoID0+e1xyXG5cclxuICAgICAgICBpZihjb25maXJtKCdpcyBpdCBzdXJlIHJlbW92ZSA/Jykpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVjb3VudD09MSl7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBmaWxlcyA9IFt7c2VsZWN0ZWRGaWxlOm51bGwsc2VsZWN0ZWRmaWxlcGF0aDp0aGlzLnN0YXRlLmRlZmF1bHRmaWxlcGF0aH1dO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIGZpbGVzIDogZmlsZXMsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZWNvdW50IDogMVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5zdGF0ZS5maWxlcztcclxuICAgICAgICAgICAgICAgIGZpbGVzLnNwbGljZShmaWxlcy5maW5kSW5kZXgoZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGUuc2VsZWN0ZWRmaWxlcGF0aCA9PSBzZWxlY3RlZGZpbGVwYXRoXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSksMSk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICBmaWxlcyA6IGZpbGVzLFxyXG4gICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZWNvdW50IDogdGhpcy5zdGF0ZS5zZWxlY3RlZEZpbGVjb3VudC0xXHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgIFxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgICBcclxuXHJcbiAgICBzaG93c2lkZWJhcigpe1xyXG4gICAgICAgIHRoaXMucmVmcy5jaGlsZC5zaG93U2lkZWJhcigpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgXHJcbiAgXHJcbiAgICAgICAgLy9zaWRlIG5hdmJhciBsaW5rXHJcbiAgICAgICAgY29uc3Qgc2lkZW5hdmxpbmsgPSBbXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidob21lJ30sXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAgICAgICAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbWVudTInfSxcclxuICAgICAgICAgICAge2lkOjEsbGluazonLycsbGlua25hbWU6J21lbnUzJ30sXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidtZW51NCd9LFxyXG4gICAgICAgICAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbWVudTUnfSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2lkZW5hdmNvbnN0ID0ge3RvcGljIDogJ0NhdGVnZXJpZXMnLHRvcGljbGluazonQWxsIENhdGVnZXJpZXNzJyxzaWRlbmF2bGluazpzaWRlbmF2bGluayx2aXNpYmxlOmZhbHNlIH07XHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPFN1Yk5hdkJhciBzaWRlbmF2Y29uc3Q9e3NpZGVuYXZjb25zdH0vPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNyZWF0ZS1zaG9wXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTItMjUgdG9waWNDb2xvciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlVwZGF0ZSBzaG9wPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS01IGZvbnRjb2xvck9yYW5nZVwiPlNob3AgRGV0YWlsczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgIGNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPlNob3AgTmFtZTxzcGFuIGNsYXNzTmFtZT1cInJlcVwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJysodGhpcy5zdGF0ZS52YWxpZGF0aW9uLnNob3BOYW1lIT0nJz8naW5wdXQtZXJyb3InOicnKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZCAgbmFtZT1cInNob3BOYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvcE5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gb25CbHVyPXt0aGlzLnZhbGlkYXRpb25mb3JtfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb24uc2hvcE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+Q2F0ZWdlcnkgTmFtZTxzcGFuIGNsYXNzTmFtZT1cInJlcVwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJysodGhpcy5zdGF0ZS52YWxpZGF0aW9uLmNhdGVnZXJ5IT0nJz8naW5wdXQtZXJyb3InOicnKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZCAgbmFtZT1cImNhdGVnZXJ5XCIgdmFsdWU9e3RoaXMuc3RhdGUuY2F0ZWdlcnl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gb25CbHVyPXt0aGlzLnZhbGlkYXRpb25mb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRcIj5EZWZhdWx0IHNlbGVjdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvcj9udWxsOnRoaXMucHJvcHMudHlwZS5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e3gudHlwZX0+e3gubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uLmNhdGVnZXJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPkRpc3RyaWN0PHNwYW4gY2xhc3NOYW1lPVwicmVxXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICcrKHRoaXMuc3RhdGUudmFsaWRhdGlvbi5kaXN0cmljdCE9Jyc/J2lucHV0LWVycm9yJzonJyl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgIG5hbWU9XCJkaXN0cmljdFwiIHZhbHVlPXt0aGlzLnN0YXRlLmRpc3RyaWN0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy52YWxpZGF0aW9uZm9ybX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uLmRpc3RyaWN0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPlRvd248c3BhbiBjbGFzc05hbWU9XCJyZXFcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJysodGhpcy5zdGF0ZS52YWxpZGF0aW9uLnRvd24hPScnPydpbnB1dC1lcnJvcic6JycpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkICBuYW1lPVwidG93blwiIHZhbHVlPXt0aGlzLnN0YXRlLnRvd259IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gb25CbHVyPXt0aGlzLnZhbGlkYXRpb25mb3JtfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPnt0aGlzLnN0YXRlLnZhbGlkYXRpb24udG93bn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGxhYmVsZjFcIj5BZGRyZXNzPHNwYW4gY2xhc3NOYW1lPVwicmVxXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICcrKHRoaXMuc3RhdGUudmFsaWRhdGlvbi5hZGRyZXNzIT0nJz8naW5wdXQtZXJyb3InOicnKX0gdHlwZT1cInRleHRcIiByZXF1aXJlZCAgbmFtZT1cImFkZHJlc3NcIiB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy52YWxpZGF0aW9uZm9ybX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uLmFkZHJlc3N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTYgY29sLW1kLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+Y29udGFjdCAxPHNwYW4gY2xhc3NOYW1lPVwicmVxXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICcrKHRoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250YWN0MSE9Jyc/J2lucHV0LWVycm9yJzonJyl9IHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgIG5hbWU9XCJjb250YWN0MVwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRhY3QxfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG9uQmx1cj17dGhpcy52YWxpZGF0aW9uZm9ybX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57dGhpcy5zdGF0ZS52YWxpZGF0aW9uLmNvbnRhY3QxfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwIGNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPmNvbnRhY3QgMjxzcGFuIGNsYXNzTmFtZT1cInJlcVwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnKyh0aGlzLnN0YXRlLnZhbGlkYXRpb24uY29udGFjdDIhPScnPydpbnB1dC1lcnJvcic6JycpfSB0eXBlPVwidGV4dFwiIHJlcXVpcmVkICBuYW1lPVwiY29udGFjdDJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250YWN0Mn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBvbkJsdXI9e3RoaXMudmFsaWRhdGlvbmZvcm19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250YWN0Mn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+Y29udGVudCAxPHNwYW4gY2xhc3NOYW1lPVwicmVxXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICcrKHRoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250ZW50MSE9Jyc/J2lucHV0LWVycm9yJzonJyl9ICByb3dzPVwiM1wiIHJlcXVpcmVkICBuYW1lPVwiY29udGVudDFcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50MX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBvbkJsdXI9e3RoaXMudmFsaWRhdGlvbmZvcm19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250ZW50MX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+Y29udGVudCAyPHNwYW4gY2xhc3NOYW1lPVwicmVxXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICcrKHRoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250ZW50MiE9Jyc/J2lucHV0LWVycm9yJzonJyl9ICByb3dzPVwiM1wiIHJlcXVpcmVkICBuYW1lPVwiY29udGVudDJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50Mn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBvbkJsdXI9e3RoaXMudmFsaWRhdGlvbmZvcm19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+e3RoaXMuc3RhdGUudmFsaWRhdGlvbi5jb250ZW50Mn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogZmlsZSB1cGxvYWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS01IGZvbnRjb2xvck9yYW5nZVwiPmNvdmVyIGltYWdlcyBmb3Igc2hvcDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdyBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmlsZXMubWFwKCh4LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIiBmaWVsZC13cmFwIGNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2V1cGxvYWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlLTJcIiBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVGaWxlcyh4LnNlbGVjdGVkZmlsZXBhdGgpfT54PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiIHdpZHRoPXt4LnNlbGVjdGVkZmlsZXBhdGghPXRoaXMuc3RhdGUuZGVmYXVsdGZpbGVwYXRoPycxMDAlJzpudWxsfSBzcmM9e3guc2VsZWN0ZWRmaWxlcGF0aH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbWFnZXVwbG9hZC1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgcmVxdWlyZWQgIHZhbHVlPXt4LmZpbGV9IG9uQ2hhbmdlPXt0aGlzLmZpbGVDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZmlsZSByZW1vdmUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS01IGZvbnRjb2xvck9yYW5nZVwiPndoYXQgc2hvdWxkIGJlIHJlbW92ZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmltYWdlcy5tYXAoKHgsaSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXsnZmllbGQtd3JhcCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgZGVsZXRlZmlsZSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17J2ltYWdldXBsb2FkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJ30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5kZWxldGVpbWFnZXMuaW5jbHVkZXMoeCk/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jbG9zZS0zXCIgb25DbGljaz17KCk9PnRoaXMuZGVsZXRlSW1hZ2VzaW5EQih4KX0+IHJlbW92ZTwvZGl2PjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jbG9zZS0zXCIgb25DbGljaz17KCk9PnRoaXMuYWRkSW1hZ2VzaW5EQih4KX0+IGFkZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlclwiIHdpZHRoPXt4IT10aGlzLnN0YXRlLmRlZmF1bHRmaWxlcGF0aD8nMTAwJSc6bnVsbH0gc3JjPXtJbWFnZVVybCt4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBzaG9wIGRldGFpbHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTEtNSBmb250Y29sb3JPcmFuZ2VcIj5TaG9wIERldGFpbHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmaWVsZC13cmFwIGNvbC1sZy02IGNvbC1tZC02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J2ZvbnQ2IGlucHV0ZjEgJyAgcmVxdWlyZWQgIG5hbWU9XCJuZXdzaG9wZGV0YWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUubmV3c2hvcGRldGFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBvbkJsdXI9e3RoaXMudmFsaWRhdGlvbmZvcm19Lz4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZm9udDYgIGJ0biBidG4tYWRkbmV3c2hvcFwiICByZXF1aXJlZCAgbmFtZT1cIm5ld3Nob3BkZXRhaWxcIiBvbkNsaWNrPXt0aGlzLmFkZG5ld1Nob3BEZXRhaWxzfSA+IG5ldysgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5JZiB5b3UgbmVlZCBhZGQgbW9yZSBmaWVsZCBhcyB5b3VyIGRldGFpbHMgb2Ygc2hvcDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3BEZXRhaWwubWFwKCh4LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY2xvc2UtMVwiIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZURldGFscyh4Lm5hbWUpfSBkaXNwbGF5PSdub25lJyA+eDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+e3gubmFtZX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZm9udDYgaW5wdXRmMScgdHlwZT1cInRleHRcIiByZXF1aXJlZCAgbmFtZT17eC5uYW1lfSB2YWx1ZT17eC52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlZGV0YWlsc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmb250NiAgYnRuIGJ0bi1zdWJtaXQgXCIgIHJlcXVpcmVkICBuYW1lPVwibmV3c2hvcGRldGFpbFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSA+IFN1Ym1pdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuPHN0eWxlIGpzeD5cclxue2BcclxuLmltYWdldXBsb2Fke1xyXG4gICAgYmFja2dyb3VuZDogI2MyZDFlMTdkO1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDE1NjdlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6MnJlbTtcclxufVxyXG4uaW1hZ2V1cGxvYWQtaW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjgwJTtcclxufVxyXG4ucG9wdXAtY2xvc2UtMSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDAuNnJlbTtcclxuXHR3aWR0aDogMS4ycmVtO1xyXG5cdGhlaWdodDogMS4ycmVtO1xyXG5cdHRvcDogMi4ycmVtO1xyXG5cdHJpZ2h0OiAxcmVtO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpb3VzOjEwMCU7XHJcbn1cclxuLnBvcHVwLWNsb3NlLTIge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogIzAxNTY3ZTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Zm9udC1zaXplOiAwLjZyZW07XHJcblx0d2lkdGg6IDEuNXJlbTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxuXHR0b3A6IDIuMXJlbTtcclxuXHRyaWdodDogMXJlbTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG59XHJcbi5wb3B1cC1jbG9zZS0ze1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6IDAuNnJlbTtcclxuXHR3aWR0aDogNXJlbTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxuXHR0b3A6IDIuMXJlbTtcclxuXHRyaWdodDogMXJlbTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZvcm0tY3JlYXRlLXNob3Age1xyXG4gICAgYmFja2dyb3VuZDogIzhiOGI4YmE4O1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBcclxuICAgIC8qYmFja2dyb3VuZDogI2RkZTFmZmJmICA7Ki9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9mb3JtMS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgcGFkZGluZyA6IDIwcHggMTBweDtcclxuICAgIG9wYWNpdHk6MS4xO1xyXG4gICBcclxufVxyXG4ubGFiZWxmMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMwMTU2N2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLmxhYmVsZjEgLnJlcSB7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGNvbG9yOiAjMDE1NjdlO1xyXG59XHJcbi5sYWJlbGYxLmFjdGl2ZSB7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5sYWJlbGYxLmFjdGl2ZSAucmVxIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmxhYmVsZjEuaGlnaGxpZ2h0IHtcclxuICAgIGNvbG9yOiAjMDIzOTU3O1xyXG59XHJcbi5pbnB1dGYxIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjMmQxZTE3ZDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMTU2N2U7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMgZWFzZTtcclxufVxyXG4uaW5wdXRmMTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyMzk1NztcclxufVxyXG4uZGVsZXRlZmlsZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDsgXHJcbn1cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxufVxyXG4uZmllbGQtd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcbi5idG4tYWRkbmV3c2hvcHtcclxuICAgIGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcbiAgICBjb2xvcjp3aGl0ZTsgXHJcbn1cclxuLmJ0bi1zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG4gICAgY29sb3I6d2hpdGU7IFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuLmZvcm0tZXJyb3J7XHJcbiAgICBjb2xvciA6IHJlZDtcclxuICAgIGZvbnQtc2l6ZSA6IDAuOHJlbTtcclxufVxyXG4uaW5wdXQtZXJyb3J7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxufVxyXG5gfVxyXG48L3N0eWxlPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG5cclxuICAgIHZhciB7aWR9ID0gY29udGV4dC5xdWVyeTtcclxuICAgIGNvbnN0IHJlc3Nob3AgPSBhd2FpdCBmZXRjaChgJHtVcmx9c2hvcGlkLyR7aWR9YCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVcmx9dHlwZXNgKTtcclxuXHJcbiAgICB2YXIgc2hvcCA9IGF3YWl0IHJlc3Nob3AuanNvbigpO1xyXG4gICAgdmFyICB0eXBlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHZhciBlcnJvciA9IGZhbHNlO1xyXG4gICAgaWYocmVzLnN0YXR1cyE9MjAwfHxyZXNzaG9wLnN0YXR1cyE9MjAwKXtcclxuICAgICAgICBlcnJvciA9IHRydWUgO1xyXG4gICB9XHJcbiAgICByZXR1cm4ge3Nob3BpZDppZCx0eXBlLHNob3AsZXJyb3J9O1xyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\update-shop\\\\[id].js */"), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  var {
    id
  } = context.query;
  const resshop = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`${_constant_main__WEBPACK_IMPORTED_MODULE_8__["Url"]}shopid/${id}`);
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`${_constant_main__WEBPACK_IMPORTED_MODULE_8__["Url"]}types`);
  var shop = await resshop.json();
  var type = await res.json();
  var error = false;

  if (res.status != 200 || resshop.status != 200) {
    error = true;
  }

  return {
    shopid: id,
    type,
    shop,
    error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!*****************************************!*\
  !*** multi ./pages/update-shop/[id].js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\update-shop\[id].js */"./pages/update-shop/[id].js");


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
//# sourceMappingURL=[id].js.map