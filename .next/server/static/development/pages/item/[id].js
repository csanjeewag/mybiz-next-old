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
      href: "#",
      className: "jsx-1424358053" + " " + "js-menu-close menu-close navbar-brand font7"
    }, "\xA0", __jsx("img", {
      src: "https://img.icons8.com/windows/25/FF8C8C/delete-slide.png",
      className: "jsx-1424358053"
    }), "\xA0 MYBIZ.COM"), __jsx("h4", {
      className: "jsx-1424358053" + " " + "sidenav-link-topic  font1"
    }, "  \xA0 ", this.props.sidenavconst.topic), __jsx("div", {
      className: "jsx-1424358053" + " " + "sidenavbar-link"
    }, this.props.sidenavconst.sidenavlink.map((c, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: i,
      href: c.link
    }, __jsx("a", {
      className: "jsx-1424358053" + " " + "nav-link font1"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "jsx-1424358053" + " " + "fa fa-telegram"
    }), " \xA0", c.linkname)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1424358053"
    }, ".sidenavbar.jsx-1424358053{z-index:100;}.menu-close.jsx-1424358053{color:rgb(61,228,246);font-size:20px;padding:20px 10px 20px 10px;background:rgba(7,36,159 );}.side-nav.jsx-1424358053{position:relative;-webkit-transition:-webkit-transform 0.35s ease-out;-webkit-transition:transform 0.35s ease-out;transition:transform 0.35s ease-out;background:darkblue;opacity:0.9;height:100%;width:90%;max-width:200px;box-shadow:0 5px 6px 4px rgba(0,0,0,.2);-webkit-transform:translateX(-102%);-ms-transform:translateX(-102%);transform:translateX(-102%);will-change:transform;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.side-nav-container.jsx-1424358053{position:fixed;left:0;top:0;width:100%;height:100%;overflow:hidden;pointer-events:none;}.side-nav-container.jsx-1424358053:before{-webkit-transition:opacity 0.3s cubic-bezier(0,0,0.3,1);transition:opacity 0.3s cubic-bezier(0,0,0.3,1);content:'';display:block;position:absolute;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);will-change:opacity;opacity:0;pointer-events:none;}.side-nav-animatable.jsx-1424358053 .side-nav.jsx-1424358053{-webkit-transition:-webkit-transform 0.33s cubic-bexier(0,0,0.3,0.1);-webkit-transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);transition:transform 0.33s cubic-bexier(0,0,0.3,0.1);z-index :100;}.side-nav-animatable.side-nav-visible.jsx-1424358053 .side-nav.jsx-1424358053{-webkit-transition:-webkit-transform 0.33s cubic-bezier(0,0,0.3,1);-webkit-transition:transform 0.33s cubic-bezier(0,0,0.3,1);transition:transform 0.33s cubic-bezier(0,0,0.3,1);}.side-nav-visible.jsx-1424358053{pointer-events:auto;z-index :100;}.side-nav-visible.jsx-1424358053 .side-nav.jsx-1424358053{-webkit-transform:none;-ms-transform:none;transform:none;}.side-nav-visible.jsx-1424358053:before{opacity:1;}.sidenav-link-topic.jsx-1424358053{padding:20px 10px 10px 10px;color:#F7A12D;}.sidenavbar-link.jsx-1424358053{padding:10%;overflow:auto;}.sidenavbar-link.jsx-1424358053 a.jsx-1424358053{color:#C4FBFE;border-bottom:1px solid rgba(255,255,255,0.5);}.sidenavbar-link.jsx-1424358053 a.jsx-1424358053:hover{-webkit-transform:scale(1.01);-ms-transform:scale(1.01);transform:scale(1.01);-webkit-transition:0.5s;transition:0.5s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRHLEFBSWMsQUFJVyxBQU1OLEFBY0gsQUFTb0MsQUFjSyxBQUlGLEFBR2xDLEFBSUwsQUFHTCxBQUdvQixBQUlmLEFBSUksQUFJSyxVQWR4QixFQTdEQSxBQW9Fa0IsRUFJb0MsQ0FoRC9DLEdBZDZCLEVBNEN2QixFQWxERSxBQXFCVCxJQTRDTixFQTNDVyxBQXNDSyxLQVRoQixJQWxENEIsRUFzQmhCLEdBc0NaLFNBckNnQixNQThCaEIsR0FlQSxLQW5FNkIsRUF1QlQsV0ErQ0YsU0E5Q2xCLEtBdkJBLFlBMEJXLFdBQ0csR0E0Q2QsV0EzQ2tCLGtCQUNaLEdBekJjLEdBMEJaLFFBQ0MsU0ExQkcsQUEyQkwsT0FDc0IsQUFXN0IsS0F0Q1ksQ0FrQ0MsV0FqQ0gsRUFrQ1YsT0FQb0IsQ0ExQkosZ0JBQzJCLEdBMEJqQyxVQUNVLG9CQUNwQixPQTNCNEIsZ0dBQ04sc0JBRUEsOEVBQ3RCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFNpZGVOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50PSAoKT0+IHtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLm9wZW4tc2lkZS1uYXZiYXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKS5hZGRDbGFzcygnc2lkZS1uYXYtYW5pbWF0YWJsZSBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgJCgnLmpzLW1lbnUtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5qcy1zaWRlLW5hdi1jb250YWluZXInKS5hZGRDbGFzcygnc2lkZS1uYXYtYW5pbWF0YWJsZScpLnJlbW92ZUNsYXNzKCcgc2lkZS1uYXYtdmlzaWJsZScpO1xyXG4gICAgICB9KVxyXG4gICAgICAkKCcuc2lkZW5hdmJhcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlJykucmVtb3ZlQ2xhc3MoJyBzaWRlLW5hdi12aXNpYmxlJyk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICBzaG93U2lkZWJhcj0oKT0+e1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLmpzLXNpZGUtbmF2LWNvbnRhaW5lcicpLmFkZENsYXNzKCdzaWRlLW5hdi1hbmltYXRhYmxlIHNpZGUtbmF2LXZpc2libGUnKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5yZW5kZXIoKXtcclxuICByZXR1cm4oXHJcbjxMYXlvdXQ+XHJcblxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJqcy1zaWRlLW5hdi1jb250YWluZXIgc2lkZS1uYXYtY29udGFpbmVyIHNpZGVuYXZiYXJcIj5cclxuPGRpdiBjbGFzc05hbWU9XCJqcy1zaWRlLW5hdiBzaWRlLW5hdlwiPlxyXG4gIFxyXG4gIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwianMtbWVudS1jbG9zZSBtZW51LWNsb3NlIG5hdmJhci1icmFuZCBmb250N1wiPiZuYnNwO1xyXG4gIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1L0ZGOEM4Qy9kZWxldGUtc2xpZGUucG5nXCIvPiZuYnNwO1xyXG4gIE1ZQklaLkNPTVxyXG4gIDwvYT5cclxuXHJcbiAgPGg0IGNsYXNzTmFtZT1cInNpZGVuYXYtbGluay10b3BpYyAgZm9udDFcIj4gICZuYnNwOyB7dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3QudG9waWN9PC9oND5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVuYXZiYXItbGlua1wiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2lkZW5hdmNvbnN0LnNpZGVuYXZsaW5rLm1hcCgoYyxpKT0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2MubGlua30gPjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZvbnQxXCIgPjxpIGNsYXNzTmFtZT1cImZhIGZhLXRlbGVncmFtXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAmbmJzcDt7Yy5saW5rbmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG4gIDxzdHlsZSBqc3g+XHJcbiAge2BcclxuXHJcbi5zaWRlbmF2YmFye1xyXG4gIHotaW5kZXg6MTAwO1xyXG59XHJcblxyXG4ubWVudS1jbG9zZXtcclxuY29sb3I6IHJnYig2MSwgMjI4LCAyNDYpO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbnBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcbmJhY2tncm91bmQ6IHJnYmEoNywgMzYsIDE1OSApO1xyXG59XHJcbi5zaWRlLW5hdiB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGVhc2Utb3V0O1xyXG5iYWNrZ3JvdW5kOiBkYXJrYmx1ZTtcclxub3BhY2l0eTogMC45O1xyXG5oZWlnaHQ6IDEwMCU7XHJcbndpZHRoOiA5MCU7XHJcbm1heC13aWR0aDogMjAwcHg7XHJcbmJveC1zaGFkb3c6IDAgNXB4IDZweCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAyJSk7XHJcbndpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblxyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5zaWRlLW5hdi1jb250YWluZXIge1xyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbmxlZnQ6IDA7XHJcbnRvcDogMDtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxub3ZlcmZsb3c6IGhpZGRlbjtcclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnNpZGUtbmF2LWNvbnRhaW5lcjpiZWZvcmUge1xyXG50cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XHJcbmNvbnRlbnQ6ICcnO1xyXG5kaXNwbGF5OiBibG9jaztcclxucG9zaXRpb246IGFic29sdXRlO1xyXG50b3A6IDA7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmxlZnQ6IDA7XHJcbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG53aWxsLWNoYW5nZTogb3BhY2l0eTtcclxub3BhY2l0eTogMDtcclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnNpZGUtbmF2LWFuaW1hdGFibGUgLnNpZGUtbmF2IHtcclxudHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzNzIGN1YmljLWJleGllcigwLCAwLCAwLjMsIDAuMSk7XHJcbnotaW5kZXggOiAxMDA7XHJcbn1cclxuLnNpZGUtbmF2LWFuaW1hdGFibGUuc2lkZS1uYXYtdmlzaWJsZSAuc2lkZS1uYXYge1xyXG50cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zM3MgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMywgMSk7XHJcbn1cclxuLnNpZGUtbmF2LXZpc2libGUge1xyXG5wb2ludGVyLWV2ZW50czogYXV0bztcclxuei1pbmRleCA6IDEwMDtcclxufVxyXG4uc2lkZS1uYXYtdmlzaWJsZSAuc2lkZS1uYXYge1xyXG50cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuLnNpZGUtbmF2LXZpc2libGU6YmVmb3JlIHtcclxub3BhY2l0eTogMTtcclxufVxyXG4uc2lkZW5hdi1saW5rLXRvcGljIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGNvbG9yOiAjRjdBMTJEO1xyXG59XHJcbi5zaWRlbmF2YmFyLWxpbmt7XHJcbiAgICBwYWRkaW5nOjEwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5zaWRlbmF2YmFyLWxpbmsgYXtcclxuICAgIGNvbG9yOiAjQzRGQkZFIDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgO1xyXG59XHJcbi5zaWRlbmF2YmFyLWxpbmsgYTpob3ZlcntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgXHJcbn1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbjwvTGF5b3V0PlxyXG4gIClcclxufVxyXG4gXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SideNav.js */"));
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
        if (jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).scrollTop() > jquery__WEBPACK_IMPORTED_MODULE_4___default()(window).width() / 4) {
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
      className: "jsx-2654486189" + " " + "subnav"
    }, __jsx("nav", {
      className: "jsx-2654486189" + " " + "navbar sub1nav sticky-top navbar-expand-lg"
    }, __jsx("a", {
      href: "#",
      className: "jsx-2654486189" + " " + "navbar-brand font7 logo-link"
    }, "MYBIZ.COM"), __jsx("button", {
      onClick: this.showsidebar.bind(this),
      type: "button",
      className: "jsx-2654486189" + " " + "btn btn-primary all-link font1"
    }, this.props.sidenavconst.topiclink), __jsx("button", {
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
    }, ".subnav.jsx-2654486189{z-index :100;}.navbar-nav.jsx-2654486189{padding-left :100px;}.navbar-nav.jsx-2654486189 a.jsx-2654486189{color :white;}.navbar-nav.jsx-2654486189 a.jsx-2654486189:hover{color :gray;}.navbar.jsx-2654486189{z-index :50;height:60px;background-color:darkblue;border:none;color:white;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.navbar.SolidNav.jsx-2654486189{background-color:darkblue;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;box-shadow:0 0 4px grey;color:white;height:50px;}.togglemenuC.jsx-2654486189{display:none;}.sticky-top.jsx-2654486189{position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;-webkit-transition:background-color 2s ease 0s;transition:background-color 2s ease 0s;}.all-link.jsx-2654486189{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R2lCLEFBR2tDLEFBSU8sQUFJUCxBQUlELEFBS0EsQUFTYyxBQVFoQyxBQUUwQixBQU1ULFlBNUJmLEFBSWdCLENBaEJoQixBQVFBLEFBd0JELEFBU0EsT0F0Q0MsSUFjOEIsQUFrQmQsRUFWMkIsd0JBUDNCLFlBQ0EsRUFpQlYsTUFDaUMsSUFqQkksc0NBTWYsd0JBQ1osWUFDRCxRQVVoQixJQWpCQSxBQVFBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGxheW91dHNcXFN1Yk5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLy4uL2xheW91dHMvU2lkZU5hdic7XHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi8uLi9jb21wb25lbnRzL3NpZ251cCc7XHJcbmltcG9ydCB7TmF2TGlua30gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuIFxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLy9zaWRlIG5hdiBiYXIgb3BlblxyXG4gICAgc2hvd3NpZGViYXIoKXtcclxuICAgICAgICB0aGlzLnJlZnMuc2lkZW5hdi5zaG93U2lkZWJhcigpO1xyXG4gICAgICB9XHJcbiAgICAvL3Nob3cgc2lnbnVwXHJcbiAgICAgIHNob3dzaWdudXAoKXtcclxuICAgICAgICB0aGlzLnJlZnMuc2lnbnVwLnNob3dzaWdudXAoKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnLnRvZ2dsZW1lbnVDJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCdkaXYubmF2YmFyLWNvbGxhcHNlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkKCcudG9nZ2xlbWVudU8nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lbnVPcGVuJykuZmFkZU91dCgxMCk7XHJcbiAgICAgICAgICAgICAgICAkKCcubWVudUNsb3NlJykuZmFkZUluKDEwMCk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiBlZmZlY3QgZm9yIG5hdmJhciBcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAvLyBjaGVja3MgaWYgd2luZG93IGlzIHNjcm9sbGVkIG1vcmUgdGhhbiA1MDBweCwgYWRkcy9yZW1vdmVzIHNvbGlkIGNsYXNzXHJcbiAgICAgICAgICAgICAgaWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+ICAkKHdpbmRvdykud2lkdGgoKS80KSB7IFxyXG4gICAgICAgICAgICAgICAgICAkKCcuc3ViMW5hdicpLmFkZENsYXNzKCdTb2xpZE5hdicpLmNzcyh7J29wYWNpdHknOicxJ30pLmFkZENsYXNzKCdmaXhlZC10b3AnKS5yZW1vdmVDbGFzcygnc3RpY2t5LXRvcCcpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcubG9nby1saW5rJykuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7ICQoJy5hbGwtbGluaycpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zdWIxbmF2JykucmVtb3ZlQ2xhc3MoJ1NvbGlkTmF2JykucmVtb3ZlQ2xhc3MoJ2ZpeGVkLXRvcCcpLmFkZENsYXNzKCdzdGlja3ktdG9wJyk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5hbGwtbGluaycpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pOyAkKCcubG9nby1saW5rJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTW9iaWxlKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93d2lkdGg8OTkwKXtcclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnNjcm9sbFRvcCgpID4gJCh3aW5kb3cpLndpZHRoKCkvMykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5uYXYtbGluay1tYWluJykuY3NzKHsnYmFja2dyb3VuZC1jb2xvcic6J2RhcmtibHVlJywnb3BhY2l0eSc6JzAuNScsJ3BhZGRpbmctbGVmdCc6JzIwcHgnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcubmF2LWxpbmstbWFpbicpLmNzcyh7J2JhY2tncm91bmQtY29sb3InOidibGFjaycsJ29wYWNpdHknOicwLjUnLCdwYWRkaW5nLWxlZnQnOicyMHB4J30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrTW9iaWxlKCk7XHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tNb2JpbGUpO1xyXG4gICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxTaWRlTmF2IHJlZj1cInNpZGVuYXZcIiAgc2lkZW5hdmNvbnN0PXt0aGlzLnByb3BzLnNpZGVuYXZjb25zdH0vPlxyXG4gICAgICAgICAgICA8U2lnblVwIHJlZj1cInNpZ251cFwiIHNob3dzaWdudXA9e3RoaXMucHJvcHMuc2hvd3NpZ251cH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJuYXZcIiA+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHN1YjFuYXYgc3RpY2t5LXRvcCBuYXZiYXItZXhwYW5kLWxnXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBmb250NyBsb2dvLWxpbmtcIiBocmVmPVwiI1wiPk1ZQklaLkNPTTwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dzaWRlYmFyLmJpbmQodGhpcyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYWxsLWxpbmsgZm9udDFcIj57dGhpcy5wcm9wcy5zaWRlbmF2Y29uc3QudG9waWNsaW5rfTwvYnV0dG9uPlxyXG4gXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgdG9nZ2xlbWVudU8gbWVudU9wZW5cIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkFsdE1hcmt1cFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8zMC9mZmZmZmYvbWVudS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIiBuYXZiYXItdG9nZ2xlciB0b2dnbGVtZW51QyBtZW51Q2xvc2VcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2RlbGV0ZS1zaWduLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZBbHRNYXJrdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAge05hdkxpbmsubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e3gudXJsfT48YSBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtbGluay1tYWluIGFjdGl2ZSBmb250MVwiID57eC51cmxuYW1lfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9JzEwMCcgaHJlZj0nIyc+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LWxpbmstbWFpbiBhY3RpdmUgZm9udDFcIiBvbkNsaWNrPXt0aGlzLnNob3dzaWdudXAuYmluZCh0aGlzKX0gPnNpZ25pbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5zdWJuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXggOiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0IDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLW5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1uYXYgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXggOiA1MDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXIuU29saWROYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMnMgZWFzZSAwcztcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IGdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC50b2dnbGVtZW51Q3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5zdGlja3ktdG9we1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDJzIGVhc2UgMHM7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgLmFsbC1saW5re1xyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\layouts\\\\SubNavbar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./layouts/error.js":
/*!**************************!*\
  !*** ./layouts/error.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "error-page"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-md-12"
    }, __jsx("div", {
      className: "error-template"
    }, __jsx("h1", null, "Oops!"), __jsx("h2", null, this.props.error ? this.props.error.msg : '404 Not Found'), __jsx("div", {
      className: "error-details"
    }, this.props.error ? this.props.error.errormsg : 'Sorry, an error has occured, Requested page not found!'))))), __jsx("style", null, `
    .error-page { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);
        height:500px;
    }
    .error-template {padding: 40px 15px;text-align: center;}
    .error-actions {margin-top:15px;margin-bottom:15px;}
    .error-actions .btn { margin-right:10px; }
    `));
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

/***/ "./pages/item/[id].js":
/*!****************************!*\
  !*** ./pages/item/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Footer */ "./components/Footer.js");
/* harmony import */ var _layouts_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../layouts/error */ "./layouts/error.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../constant/main */ "./constant/main.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);

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
  }, props.item.images.map((x, i) => __jsx("li", {
    key: i,
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": i,
    className: "jsx-3443398829" + " " + ((i == 0 ? 'active' : 'c') || "")
  }))), __jsx("div", {
    className: "jsx-3443398829" + " " + "carousel-inner"
  }, props.item.images.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-3443398829" + " " + ((i == 0 ? 'carousel-item active' : 'carousel-item') || "")
  }, __jsx("img", {
    src: _constant_main__WEBPACK_IMPORTED_MODULE_7__["ImageUrl"] + x,
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
  }, props.item.createDate), __jsx("a", {
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
  }, ".card-footer.jsx-3443398829{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:1em 0.75em;}.card-footer-button.jsx-3443398829{padding:0.5em 0.1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpdGVtXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDUyxBQUUyQixBQVNNLGNBUkosTUFTcEIsVUFSVSxNQUNDLE9BQ1EsZUFDSSxtQkFFdkIiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxccGFnZXNcXGl0ZW1cXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBTdWJOYXZiYXIgZnJvbSAnLi4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IEVycm9ycGFnZSBmcm9tICcuLy4uLy4uL2xheW91dHMvZXJyb3InO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgIHtVcmwsSW1hZ2VVcmx9IGZyb20gJy4vLi4vLi4vY29uc3RhbnQvbWFpbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgSW1hZ2VzaWRlPShwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4oXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxue3Byb3BzLml0ZW0uaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICA8bGkga2V5PXtpfSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz17aX0gY2xhc3NOYW1lPXtpPT0wPydhY3RpdmUnOidjJ30gPjwvbGk+IFxyXG4gICAgKX1cclxuXHJcbjwvb2w+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxue3Byb3BzLml0ZW0uaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpPT0wPydjYXJvdXNlbC1pdGVtIGFjdGl2ZSc6J2Nhcm91c2VsLWl0ZW0nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz17SW1hZ2VVcmwreH0gYWx0PVwiZmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgKX1cclxuPC9kaXY+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbjwvYT5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG48L2E+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBjYXJkLWZvb3Rlci1idXR0b25cIj57cHJvcHMuaXRlbS5jcmVhdGVEYXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9mYXZvcml0ZS1jYXJ0LnBuZ1wiLz4gJm5ic3A7IEFkZCB0byBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvaW4tdHJhbnNpdC5wbmdcIi8+ICZuYnNwO09yZGVyIE5vdzwvYT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICAge2AgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWZvb3Rlci1idXR0b257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbnRlbnRzaWRlPShwcm9wcyk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj57cHJvcHMuaXRlbS5pdGVtbG9uZ25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NiBzdWJ0b3BpY0NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3Byb3BzLml0ZW0uY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPiA8c3RyaWtlPntwcm9wcy5pdGVtLml0ZW1QcmljZX08L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IDMzJSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuNDUxLjI1PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5jb250ZW50MX1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uY29udGVudDJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPlNwZWNpZmljYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uaXRlbVNwZWNpZmljYXRpb24/cHJvcHMuaXRlbS5pdGVtU3BlY2lmaWNhdGlvbi5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyB7eC5uYW1lfSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBwcm9maWxlLXNwZWNiXCI+ICZuYnNwOyB7eC52YWx1ZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItc3RvY2stZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPlN0b2NrIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5zdG9ja0RldGFpbD9wcm9wcy5pdGVtLnN0b2NrRGV0YWlsLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IHt4Lm5hbWV9ICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IHByb2ZpbGUtc3BlY2JcIj4gJm5ic3A7IHt4LnZhbHVlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTpudWxsfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9teXNob3AvJytwcm9wcy5pdGVtLnNob3BbMF0uc2hvcGlkfT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9vbmxpbmUtc2hvcC5wbmdcIi8+ICZuYnNwO2dvIHRvIHNob3A8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXNwZWNhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0Y1NzBFIDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNFMTkwMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3ViY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25TaWRlID0gKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcXVhdGlvbnMgY29sLTEyXCI+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICB7cHJvcHMucXVlc3Rpb25kYXRhLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtZW51Mi1xdWVzdGlvblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2N1dGUtY2xpcGFydC80MC8wMDAwMDAvZmFxLnBuZ1wiLz48cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IHt4LnF1ZXN0aW9ufTxici8+IDxzcGFuIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAte3guYV91c2VyLm5hbWV9LSBvbiB7eC5hX0RhdGV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImZvbnQzIGZvbnRzaXplRS05XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL3dpbmRvd3MvMjUvMDAwMDAwL3N0YWNrLWV4Y2hhbmdlLWFuc3dlci5wbmdcIi8+ICZuYnNwO3t4LmFuc3dlcj94LmFuc3dlcjoncGVuZGluZyBhbnN3ZXIuLid9PC9wPlxyXG4gICAgICAgICAgICB7IXguYW5zd2VyPzxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dGYyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicXVlc3Rpb25cIiBpZD17J2lucHV0LScreC5faWR9IC8+PGJyLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVnaXZlYW5zd2VyLmJpbmQodGhpcyx4Ll9pZCl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVsbGhvcm5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7IGtlZXAgYSBhbnN3ZXIgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnJlbW92ZWFuc2V3ZXIuYmluZCh0aGlzLHguX2lkKX0+eDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWVzdGlvblwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzQwLzAwMDAwMC9mYXEucG5nXCIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dGYyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicXVlc3Rpb25cIiB2YWx1ZT17cHJvcHMucXVlc3Rpb259ICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPjxici8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVhc2txdWVzdGlvbn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1xdW9yYVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDsgQXNrIGEgcXVlc3Rpb24gPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICAuaW5wdXRmMntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBSZXZpZXdTaWRlID0gKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3cyBjb2wtMTJcIj5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudTItc3ViY2FyZC10aXRsZSBmb250MiBmb250Y29sb3JPcmFuZ2VcIj5SZXZpZXdzIGZyb20gY3VzdG9tZXI8L2g1PlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAge3Byb3BzLnJldmlld3NkYXRhLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPXt4LnVzZXIuaW1hZ2VVcmx9IC8+PHAgIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IHt4LnVzZXIubmFtZX0gPGJyLz4gPHNwYW0gY2xhc3NOYW1lPVwic3BhbS10ZXh0IGZvbnQzIGZvbnRzaXplRS04XCI+IC17eC5jcmVhdGVEYXRlfS08L3NwYW0+PC9wPlxyXG4gICAgICAgICAgIDxwICBjbGFzc05hbWU9XCJmb250NSBmb250d2VpZ2h0NzAwIGZvbnRzaXplRS05XCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7e3gucmV2aWV3fSA8L3A+XHJcbiAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcXVlc3Rpb24gY29sLTEyXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNDAvMDAwMDAwL2VkaXQtY2hhdC1oaXN0b3J5LnBuZ1wiLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJldmlld1wiIHZhbHVlPXtwcm9wcy5yZXZpZXd9ICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPjxici8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVyZXZpZXdzfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7IGtlZXAgYSByZXZpZXcgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAge2Auc3BhbS10ZXh0e1xyXG4gICAgICAgICAgIGNvbG9yOmdyYXlcclxuICAgICAgIH1cclxuICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXRmMntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXRlbWlkOicnLFxyXG4gICAgICAgICAgICBxdWVzdGlvbjogJycsXHJcbiAgICAgICAgICAgIGFuc3dlcjogJycsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uZGF0YTpbXSxcclxuICAgICAgICAgICAgcmV2aWV3OicnLFxyXG4gICAgICAgICAgICByZXZpZXdzZGF0YTpbXSxcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAgICAgLy8gVGhpcyB0cmlnZ2VycyBldmVyeXRpbWUgdGhlIGlucHV0IGlzIGNoYW5nZWRcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgXHJcbiAgICBoYW5kbGVyZXZpZXdzPSgpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICBcclxuICAgICAgICBmZXRjaCgnL2FwaS9yZXZpZXdjcmVhdGUnLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7dGhpcy5zZXRTdGF0ZSh7cmV2aWV3OicnfSk7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICAgLy9hc2sgcXVlc3Rpb25cclxuICAgIGhhbmRsZWFza3F1ZXN0aW9uPSgpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICBcclxuICAgICAgICBmZXRjaCgnL2FwaS9xdWVzdGlvbmNyZWF0ZScse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5jb21wb25lbnREaWRNb3VudCgpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXsgdGhpcy5zZXRTdGF0ZSh7cXVlc3Rpb246Jyd9KTsgYWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAvL2RlbGV0ZSBhbnN3ZXJcclxuICAgIHJlbW92ZWFuc2V3ZXI9KGlkKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBcclxuICAgICAgICBmZXRjaCgnL2FwaS9yZW1vdmVhbnNld2VyLycraWQse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe3RoaXMuc2V0U3RhdGUoe3JldmlldzonJ30pO2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG4gICAgLy9naXZlIGFuc3dlclxyXG4gICAgaGFuZGxlZ2l2ZWFuc3dlcj0oaWQpPT57XHJcbiAgICAgICAgdmFyIHN0YXRlID0gIHtcclxuICAgICAgICAgICAgYW5zd2VyOiAkKGAjaW5wdXQtJHtpZH1gKS52YWwoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvYW5zd2VydG9xZXN0aW9uLyR7aWR9YCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoqc2lkZSBuYXZiYXIgKi9cclxuICAgIHNob3dzaWRlYmFyKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLmNoaWxkLnNob3dTaWRlYmFyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrV2lkdGgoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93d2lkdGggPSAkKCcuc2lsZGUyaW1hZ2UnKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSB3aW5kb3cgaXMgZ3JlYXRlciB0aGFuIDQ0MHB4IHdpZGUgdGhlbiB0dXJuIG9uIGpTY3JvbGxQYW5lLi5cclxuICAgICAgICAgICAgICAgICAgLy8gICQoJy5kaXYxJykuYWRkQ2xhc3MoJ2Rlc2t0b3AnKVxyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5jc3MoeydtYXgtaGVpZ2h0Jzp3aW5kb3d3aWR0aC8zKjIsJ3dpZHRoJzonMTAwJSd9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMmltYWdlJykucGFyZW50KCkuY3NzKHsnaGVpZ2h0Jzp3aW5kb3d3aWR0aC8zKjIsJ3dpZHRoJzonMTAwJScsJ2JhY2tncm91bmQnOiAnI2ZmZmZmZid9KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvbiBsb2FkXHJcbiAgICAgICAgICAgIGNoZWNrV2lkdGgoKTtcclxuICAgICAgICAgICAgLy8gQmluZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGNoZWNrV2lkdGgpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZldGNoKGAke1VybH1xdWVzdGlvbnMvJHt0aGlzLnByb3BzLml0ZW0uX2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuanNvbigpO30pXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1pZDp0aGlzLnByb3BzLml0ZW0uX2lkP3RoaXMucHJvcHMuaXRlbS5faWQ6JycsXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbmRhdGEgOiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmZXRjaChgJHtVcmx9cmV2aWV3cy8ke3RoaXMucHJvcHMuaXRlbS5faWR9YClcclxuICAgICAgICAudGhlbihyZXM9PnsgcmV0dXJuIHJlcy5qc29uKCk7fSlcclxuICAgICAgICAudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3c2RhdGEgOiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gIC8vc2lkZSBuYXZiYXIgbGlua1xyXG4gIGNvbnN0IHNpZGVuYXZsaW5rID0gW1xyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnUyJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTMnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51NCd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU1J30sXHJcbiAgXTtcclxuICBcclxuICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdJdGVtcycsdG9waWNsaW5rOidBbGwgSXRlbXMnLHNpZGVuYXZsaW5rOnNpZGVuYXZsaW5rfTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD4gXHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2YmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJyb3I/PEVycm9ycGFnZSBlcnJvcj17dGhpcy5wcm9wcy5pdGVtfSAvPjpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNpZGUgaXRlbT17dGhpcy5wcm9wcy5pdGVtfT48L0ltYWdlc2lkZT5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50c2lkZSBpdGVtPXt0aGlzLnByb3BzLml0ZW19ID48L0NvbnRlbnRzaWRlPlxyXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uU2lkZSByZW1vdmVhbnNld2VyPXsoaWQpPT50aGlzLnJlbW92ZWFuc2V3ZXIoaWQpfSBxdWVzdGlvbmRhdGE9e3RoaXMuc3RhdGUucXVlc3Rpb25kYXRhfSBxdWVzdGlvbj17dGhpcy5zdGF0ZS5xdWVzdGlvbn0gYW5zd2VyPXt0aGlzLnN0YXRlLmFuc3dlcn0gaGFuZGxlYXNrcXVlc3Rpb249e3RoaXMuaGFuZGxlYXNrcXVlc3Rpb259IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZWdpdmVhbnN3ZXI9eyhpZCk9PnRoaXMuaGFuZGxlZ2l2ZWFuc3dlcihpZCl9PjwvUXVlc3Rpb25TaWRlPlxyXG4gICAgICAgICAgICAgICAgPFJldmlld1NpZGUgcmV2aWV3c2RhdGE9e3RoaXMuc3RhdGUucmV2aWV3c2RhdGF9IHJldmlldz17dGhpcy5zdGF0ZS5yZXZpZXd9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZXJldmlld3M9e3RoaXMuaGFuZGxlcmV2aWV3c30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29uc3QgeyBpZCxpZGUgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVcmx9aXRlbS8ke2lkfT9pZGU9JHtpZGV9YCk7XHJcbiAgICAgdmFyICBpdGVtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICB2YXIgZXJyb3IgPSBmYWxzZTtcclxuICAgICBpZihyZXMuc3RhdHVzIT0yMDApe1xyXG4gICAgICBlcnJvciA9IHRydWUgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7aXRlbSxlcnJvcn1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\item\\\\[id].js */"));
};

const Contentside = props => {
  return __jsx("div", {
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "card"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "card-block"
  }, __jsx("h4", {
    className: "jsx-1041883449" + " " + "card-title font2 topicColor"
  }, props.item.itemlongname), __jsx("div", {
    className: "jsx-1041883449" + " " + "meta font6 subtopicColor"
  }, __jsx("a", {
    className: "jsx-1041883449"
  }, props.item.categery), __jsx("div", {
    className: "jsx-1041883449" + " " + " float-right"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "Icutprise font6"
  }, " ", __jsx("strike", {
    className: "jsx-1041883449"
  }, props.item.itemPrice), "  "), __jsx("a", {
    className: "jsx-1041883449" + " " + "Idiscount font6"
  }, " 33% "), __jsx("a", {
    className: "jsx-1041883449" + " " + "Iprise font6"
  }, "\xA0Rs.451.25"))), __jsx("div", {
    className: "jsx-1041883449" + " " + "card-text font6"
  }, props.item.content1), __jsx("div", {
    className: "jsx-1041883449" + " " + "card-text font6"
  }, props.item.content2), __jsx("div", {
    className: "jsx-1041883449" + " " + "menu2-specification"
  }, __jsx("h5", {
    className: "jsx-1041883449" + " " + "menu2-subcard-title font2 fontcolorSkyblue"
  }, "Specification"), __jsx("div", {
    className: "jsx-1041883449" + " " + " card-text font6"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "row"
  }, props.item.itemSpecification ? props.item.itemSpecification.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 ", x.name, " \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left profile-specb"
  }, " \xA0 ", x.value))) : null))), __jsx("div", {
    className: "jsx-1041883449" + " " + "menu2-stock-details"
  }, __jsx("h5", {
    className: "jsx-1041883449" + " " + "menu2-subcard-title font2 fontcolorSkyblue"
  }, "Stock Details"), __jsx("div", {
    className: "jsx-1041883449" + " " + " card-text font6"
  }, __jsx("div", {
    className: "jsx-1041883449" + " " + "row"
  }, props.item.stockDetail ? props.item.stockDetail.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-1041883449" + " " + "col-lg-6 col-sm-12"
  }, __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left menu2-speca"
  }, __jsx("img", {
    src: "https://img.icons8.com/metro/15/000000/external-link.png",
    className: "jsx-1041883449"
  }), "\xA0 \xA0 ", x.name, " \xA0: "), " ", __jsx("a", {
    className: "jsx-1041883449" + " " + "float-left profile-specb"
  }, " \xA0 ", x.value))) : null))), __jsx("hr", {
    className: "jsx-1041883449"
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: '/myshop/' + props.item.shop[0].shopid
  }, __jsx("a", {
    href: "#",
    className: "jsx-1041883449" + " " + "btn btn-primary float-right btn-sm"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/25/ffffff/online-shop.png",
    className: "jsx-1041883449"
  }), " \xA0go to shop")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1041883449"
  }, "h5.jsx-1041883449{font-size:1.5em;font-weight:700;line-height:1.2857em;margin-bottom:20px;}.menu2.jsx-1041883449{margin-bottom :20px;}.menu2-topic.jsx-1041883449{padding :20px 10px 10px 10px;}.menu2-speca.jsx-1041883449{font-size:1em;color:#CF570E;}.menu2-specb.jsx-1041883449{font-size:1em;color:#3E1903;}.card.jsx-1041883449{font-size:1em;overflow:hidden;padding:0;-webkit-transition:0.5s;transition:0.5s;border :none;}.card-block.jsx-1041883449{font-size:1em;position:relative;margin:0;padding:0.5em;box-shadow:none;}.card-img-top.jsx-1041883449{display:block;width:100%;height:200;}.card-title.jsx-1041883449{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.menu2-subcard-title.jsx-1041883449{font-size:1em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-1041883449{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :15px;}.card-footer.jsx-1041883449{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;}.profile.jsx-1041883449{position:absolute;top:-12px;display:inline-block;overflow:hidden;width:25px;height:25px;margin:0;}.profile-avatar.jsx-1041883449{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-1041883449{position:relative;top:0;display:inline-block;}.profile-inline.jsx-1041883449~.card-title.jsx-1041883449{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-1041883449{font-weight:700;}.meta.jsx-1041883449{font-size:1.3em;}.meta.jsx-1041883449 a.jsx-1041883449{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-1041883449{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-1041883449{color:darkorange;font-size:0.8em;}.Iprise.jsx-1041883449{color:red;font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpdGVtXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVIaUIsQUFHcUMsQUFNSSxBQUdTLEFBR2YsQUFLQSxBQUlBLEFBUUEsQUFRQSxBQU1TLEFBT1QsQUFRSCxBQU9HLEFBV0ksQUFXSixBQU9JLEFBTUcsQUFNTCxBQUlBLEFBS0ssQUFJUSxBQUtaLEFBSVAsVUFDSSxDQXRFRSxHQTlDRCxBQUtELEFBSUUsQUFRRSxBQVFQLEFBYUssQUFlQSxBQXNCTCxFQXZGSyxBQTBHcEIsQUFLQSxDQWFvQixDQWhETixBQWtCSixFQXhGVixDQThGb0IsRUF6REEsQ0FvREssQUFrQ3pCLENBM0ZlLEFBa0RDLEVBN0JhLENBN0M3QixBQUlBLEFBMkR5QixDQXBFekIsQ0FhYyxBQTZCVyxBQWVmLEVBakVlLEFBNkJaLENBK0ZiLEdBdEZBLEFBNEJXLENBc0JXLEFBWUMsRUF6REUsQ0FyQkwsQ0FRRixFQXFDQyxFQTRCbkIsSUFwQ29CLEFBa0JBLENBc0NwQixDQWhFc0IsRUFsREMsRUE4QkgsQUEwRHBCLENBWUEsRUFqQ3dCLEVBeEJGLEtBZ0J0QixBQWtCZSxDQXdDYSxHQWpFNUIsRUFyQkEsQ0E5QkEsSUE2RWdCLEVBakNoQixBQXdCQSxFQS9DaUIsT0FnR0ksQ0F2Q1IsS0F4RGIsSUEwREEsT0FzQ0EiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxccGFnZXNcXGl0ZW1cXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBTdWJOYXZiYXIgZnJvbSAnLi4vLi4vbGF5b3V0cy9TdWJOYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IEVycm9ycGFnZSBmcm9tICcuLy4uLy4uL2xheW91dHMvZXJyb3InO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgIHtVcmwsSW1hZ2VVcmx9IGZyb20gJy4vLi4vLi4vY29uc3RhbnQvbWFpbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3QgSW1hZ2VzaWRlPShwcm9wcyk9PiB7XHJcbiAgICByZXR1cm4oXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuPG9sIGNsYXNzTmFtZT1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxue3Byb3BzLml0ZW0uaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICA8bGkga2V5PXtpfSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz17aX0gY2xhc3NOYW1lPXtpPT0wPydhY3RpdmUnOidjJ30gPjwvbGk+IFxyXG4gICAgKX1cclxuXHJcbjwvb2w+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5uZXJcIj5cclxue3Byb3BzLml0ZW0uaW1hZ2VzLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtpPT0wPydjYXJvdXNlbC1pdGVtIGFjdGl2ZSc6J2Nhcm91c2VsLWl0ZW0nfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBzaWxkZTJpbWFnZVwiIHNyYz17SW1hZ2VVcmwreH0gYWx0PVwiZmlyc3Qgc2xpZGVcIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgKX1cclxuPC9kaXY+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldlwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbjwvYT5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG48L2E+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBjYXJkLWZvb3Rlci1idXR0b25cIj57cHJvcHMuaXRlbS5jcmVhdGVEYXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9mYXZvcml0ZS1jYXJ0LnBuZ1wiLz4gJm5ic3A7IEFkZCB0byBDYXJ0PC9hPlxyXG4gICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvaW4tdHJhbnNpdC5wbmdcIi8+ICZuYnNwO09yZGVyIE5vdzwvYT5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICAge2AgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWZvb3Rlci1idXR0b257XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IENvbnRlbnRzaWRlPShwcm9wcyk9PntcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj57cHJvcHMuaXRlbS5pdGVtbG9uZ25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NiBzdWJ0b3BpY0NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+e3Byb3BzLml0ZW0uY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPiA8c3RyaWtlPntwcm9wcy5pdGVtLml0ZW1QcmljZX08L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IDMzJSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMuNDUxLjI1PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5jb250ZW50MX1cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uY29udGVudDJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItc3BlY2lmaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPlNwZWNpZmljYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uaXRlbVNwZWNpZmljYXRpb24/cHJvcHMuaXRlbS5pdGVtU3BlY2lmaWNhdGlvbi5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyB7eC5uYW1lfSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBwcm9maWxlLXNwZWNiXCI+ICZuYnNwOyB7eC52YWx1ZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItc3RvY2stZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yU2t5Ymx1ZVwiPlN0b2NrIERldGFpbHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5zdG9ja0RldGFpbD9wcm9wcy5pdGVtLnN0b2NrRGV0YWlsLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IHt4Lm5hbWV9ICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IHByb2ZpbGUtc3BlY2JcIj4gJm5ic3A7IHt4LnZhbHVlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTpudWxsfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9teXNob3AvJytwcm9wcy5pdGVtLnNob3BbMF0uc2hvcGlkfT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9vbmxpbmUtc2hvcC5wbmdcIi8+ICZuYnNwO2dvIHRvIHNob3A8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXNwZWNhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0Y1NzBFIDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzNFMTkwMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3ViY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25TaWRlID0gKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcXVhdGlvbnMgY29sLTEyXCI+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICB7cHJvcHMucXVlc3Rpb25kYXRhLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtZW51Mi1xdWVzdGlvblwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2N1dGUtY2xpcGFydC80MC8wMDAwMDAvZmFxLnBuZ1wiLz48cCBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IHt4LnF1ZXN0aW9ufTxici8+IDxzcGFuIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAte3guYV91c2VyLm5hbWV9LSBvbiB7eC5hX0RhdGV9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImZvbnQzIGZvbnRzaXplRS05XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL3dpbmRvd3MvMjUvMDAwMDAwL3N0YWNrLWV4Y2hhbmdlLWFuc3dlci5wbmdcIi8+ICZuYnNwO3t4LmFuc3dlcj94LmFuc3dlcjoncGVuZGluZyBhbnN3ZXIuLid9PC9wPlxyXG4gICAgICAgICAgICB7IXguYW5zd2VyPzxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dGYyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicXVlc3Rpb25cIiBpZD17J2lucHV0LScreC5faWR9IC8+PGJyLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVnaXZlYW5zd2VyLmJpbmQodGhpcyx4Ll9pZCl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYnVsbGhvcm5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7IGtlZXAgYSBhbnN3ZXIgPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PjpudWxsfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnJlbW92ZWFuc2V3ZXIuYmluZCh0aGlzLHguX2lkKX0+eDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWVzdGlvblwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzQwLzAwMDAwMC9mYXEucG5nXCIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dGYyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicXVlc3Rpb25cIiB2YWx1ZT17cHJvcHMucXVlc3Rpb259ICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPjxici8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVhc2txdWVzdGlvbn0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1xdW9yYVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDsgQXNrIGEgcXVlc3Rpb24gPC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICAuaW5wdXRmMntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBSZXZpZXdTaWRlID0gKHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcmV2aWV3cyBjb2wtMTJcIj5cclxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudTItc3ViY2FyZC10aXRsZSBmb250MiBmb250Y29sb3JPcmFuZ2VcIj5SZXZpZXdzIGZyb20gY3VzdG9tZXI8L2g1PlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAge3Byb3BzLnJldmlld3NkYXRhLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3NcIj5cclxuICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgYXZhdGFyXCIgc3JjPXt4LnVzZXIuaW1hZ2VVcmx9IC8+PHAgIGNsYXNzTmFtZT1cImZvbnQ2IGZvbnRzaXplRS05XCI+Jm5ic3A7IHt4LnVzZXIubmFtZX0gPGJyLz4gPHNwYW0gY2xhc3NOYW1lPVwic3BhbS10ZXh0IGZvbnQzIGZvbnRzaXplRS04XCI+IC17eC5jcmVhdGVEYXRlfS08L3NwYW0+PC9wPlxyXG4gICAgICAgICAgIDxwICBjbGFzc05hbWU9XCJmb250NSBmb250d2VpZ2h0NzAwIGZvbnRzaXplRS05XCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7e3gucmV2aWV3fSA8L3A+XHJcbiAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcXVlc3Rpb24gY29sLTEyXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvNDAvMDAwMDAwL2VkaXQtY2hhdC1oaXN0b3J5LnBuZ1wiLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJldmlld1wiIHZhbHVlPXtwcm9wcy5yZXZpZXd9ICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPjxici8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVyZXZpZXdzfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7IGtlZXAgYSByZXZpZXcgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAge2Auc3BhbS10ZXh0e1xyXG4gICAgICAgICAgIGNvbG9yOmdyYXlcclxuICAgICAgIH1cclxuICAgICAgIC5hdmF0YXIge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAuaW5wdXRmMntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgIH1cclxuICAgICAgIGB9XHJcbiAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXRlbWlkOicnLFxyXG4gICAgICAgICAgICBxdWVzdGlvbjogJycsXHJcbiAgICAgICAgICAgIGFuc3dlcjogJycsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uZGF0YTpbXSxcclxuICAgICAgICAgICAgcmV2aWV3OicnLFxyXG4gICAgICAgICAgICByZXZpZXdzZGF0YTpbXSxcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XHJcbiAgICAgICAgLy8gVGhpcyB0cmlnZ2VycyBldmVyeXRpbWUgdGhlIGlucHV0IGlzIGNoYW5nZWRcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBbZXZ0LnRhcmdldC5uYW1lXTogZXZ0LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgXHJcbiAgICBoYW5kbGVyZXZpZXdzPSgpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICBcclxuICAgICAgICBmZXRjaCgnL2FwaS9yZXZpZXdjcmVhdGUnLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7dGhpcy5zZXRTdGF0ZSh7cmV2aWV3OicnfSk7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICAgLy9hc2sgcXVlc3Rpb25cclxuICAgIGhhbmRsZWFza3F1ZXN0aW9uPSgpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuICBcclxuICAgICAgICBmZXRjaCgnL2FwaS9xdWVzdGlvbmNyZWF0ZScse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5jb21wb25lbnREaWRNb3VudCgpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXsgdGhpcy5zZXRTdGF0ZSh7cXVlc3Rpb246Jyd9KTsgYWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAvL2RlbGV0ZSBhbnN3ZXJcclxuICAgIHJlbW92ZWFuc2V3ZXI9KGlkKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICBcclxuICAgICAgICBmZXRjaCgnL2FwaS9yZW1vdmVhbnNld2VyLycraWQse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe3RoaXMuc2V0U3RhdGUoe3JldmlldzonJ30pO2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG4gICAgLy9naXZlIGFuc3dlclxyXG4gICAgaGFuZGxlZ2l2ZWFuc3dlcj0oaWQpPT57XHJcbiAgICAgICAgdmFyIHN0YXRlID0gIHtcclxuICAgICAgICAgICAgYW5zd2VyOiAkKGAjaW5wdXQtJHtpZH1gKS52YWwoKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgZmV0Y2goYC9hcGkvYW5zd2VydG9xZXN0aW9uLyR7aWR9YCx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLyoqc2lkZSBuYXZiYXIgKi9cclxuICAgIHNob3dzaWRlYmFyKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLmNoaWxkLnNob3dTaWRlYmFyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrV2lkdGgoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93d2lkdGggPSAkKCcuc2lsZGUyaW1hZ2UnKS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZSB3aW5kb3cgaXMgZ3JlYXRlciB0aGFuIDQ0MHB4IHdpZGUgdGhlbiB0dXJuIG9uIGpTY3JvbGxQYW5lLi5cclxuICAgICAgICAgICAgICAgICAgLy8gICQoJy5kaXYxJykuYWRkQ2xhc3MoJ2Rlc2t0b3AnKVxyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5jc3MoeydtYXgtaGVpZ2h0Jzp3aW5kb3d3aWR0aC8zKjIsJ3dpZHRoJzonMTAwJSd9KTtcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMmltYWdlJykucGFyZW50KCkuY3NzKHsnaGVpZ2h0Jzp3aW5kb3d3aWR0aC8zKjIsJ3dpZHRoJzonMTAwJScsJ2JhY2tncm91bmQnOiAnI2ZmZmZmZid9KTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSBvbiBsb2FkXHJcbiAgICAgICAgICAgIGNoZWNrV2lkdGgoKTtcclxuICAgICAgICAgICAgLy8gQmluZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGNoZWNrV2lkdGgpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZldGNoKGAke1VybH1xdWVzdGlvbnMvJHt0aGlzLnByb3BzLml0ZW0uX2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuanNvbigpO30pXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1pZDp0aGlzLnByb3BzLml0ZW0uX2lkP3RoaXMucHJvcHMuaXRlbS5faWQ6JycsXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbmRhdGEgOiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBmZXRjaChgJHtVcmx9cmV2aWV3cy8ke3RoaXMucHJvcHMuaXRlbS5faWR9YClcclxuICAgICAgICAudGhlbihyZXM9PnsgcmV0dXJuIHJlcy5qc29uKCk7fSlcclxuICAgICAgICAudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcmV2aWV3c2RhdGEgOiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIHJlbmRlcigpIHsgXHJcblxyXG4gIC8vc2lkZSBuYXZiYXIgbGlua1xyXG4gIGNvbnN0IHNpZGVuYXZsaW5rID0gW1xyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J2hvbWUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnUyJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTMnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51NCd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU1J30sXHJcbiAgXTtcclxuICBcclxuICAgIGNvbnN0IHNpZGVuYXZjb25zdCA9IHt0b3BpYyA6ICdJdGVtcycsdG9waWNsaW5rOidBbGwgSXRlbXMnLHNpZGVuYXZsaW5rOnNpZGVuYXZsaW5rfTtcclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD4gXHJcbiAgICAgICAgICAgICAgICA8U3ViTmF2YmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJyb3I/PEVycm9ycGFnZSBlcnJvcj17dGhpcy5wcm9wcy5pdGVtfSAvPjpcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZXNpZGUgaXRlbT17dGhpcy5wcm9wcy5pdGVtfT48L0ltYWdlc2lkZT5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50c2lkZSBpdGVtPXt0aGlzLnByb3BzLml0ZW19ID48L0NvbnRlbnRzaWRlPlxyXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uU2lkZSByZW1vdmVhbnNld2VyPXsoaWQpPT50aGlzLnJlbW92ZWFuc2V3ZXIoaWQpfSBxdWVzdGlvbmRhdGE9e3RoaXMuc3RhdGUucXVlc3Rpb25kYXRhfSBxdWVzdGlvbj17dGhpcy5zdGF0ZS5xdWVzdGlvbn0gYW5zd2VyPXt0aGlzLnN0YXRlLmFuc3dlcn0gaGFuZGxlYXNrcXVlc3Rpb249e3RoaXMuaGFuZGxlYXNrcXVlc3Rpb259IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZWdpdmVhbnN3ZXI9eyhpZCk9PnRoaXMuaGFuZGxlZ2l2ZWFuc3dlcihpZCl9PjwvUXVlc3Rpb25TaWRlPlxyXG4gICAgICAgICAgICAgICAgPFJldmlld1NpZGUgcmV2aWV3c2RhdGE9e3RoaXMuc3RhdGUucmV2aWV3c2RhdGF9IHJldmlldz17dGhpcy5zdGF0ZS5yZXZpZXd9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZXJldmlld3M9e3RoaXMuaGFuZGxlcmV2aWV3c30gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29uc3QgeyBpZCxpZGUgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtVcmx9aXRlbS8ke2lkfT9pZGU9JHtpZGV9YCk7XHJcbiAgICAgdmFyICBpdGVtID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICB2YXIgZXJyb3IgPSBmYWxzZTtcclxuICAgICBpZihyZXMuc3RhdHVzIT0yMDApe1xyXG4gICAgICBlcnJvciA9IHRydWUgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7aXRlbSxlcnJvcn1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\item\\\\[id].js */"));
};

const QuestionSide = props => {
  return __jsx("div", {
    className: "jsx-1113657443" + " " + "menu2-quations col-12"
  }, __jsx("hr", {
    className: "jsx-1113657443"
  }), props.questiondata.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-1113657443" + " " + "menu2-question"
  }, __jsx("img", {
    src: "https://img.icons8.com/cute-clipart/40/000000/faq.png",
    className: "jsx-1113657443" + " " + "float-left"
  }), __jsx("p", {
    href: "#",
    className: "jsx-1113657443" + " " + "font6 fontsizeE-9"
  }, "\xA0 ", x.question, __jsx("br", {
    className: "jsx-1113657443"
  }), " ", __jsx("span", {
    className: "jsx-1113657443" + " " + "spam-text font3 fontsizeE-8"
  }, " -", x.a_user.name, "- on ", x.a_Date)), __jsx("p", {
    className: "jsx-1113657443" + " " + "font3 fontsizeE-9"
  }, __jsx("img", {
    src: "https://img.icons8.com/windows/25/000000/stack-exchange-answer.png",
    className: "jsx-1113657443"
  }), " \xA0", x.answer ? x.answer : 'pending answer..'), !x.answer ? __jsx("div", {
    className: "jsx-1113657443"
  }, __jsx("input", {
    type: "text",
    name: "question",
    id: 'input-' + x._id,
    className: "jsx-1113657443" + " " + "inputf2"
  }), __jsx("br", {
    className: "jsx-1113657443"
  }), __jsx("button", {
    onClick: props.handlegiveanswer.bind(undefined, x._id),
    type: "button",
    className: "jsx-1113657443" + " " + "btn btn-primary btn-sm"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-1113657443" + " " + "fa fa-bullhorn"
  }), "\xA0 keep a answer ")) : null, __jsx("button", {
    onClick: props.removeansewer.bind(undefined, x._id),
    className: "jsx-1113657443"
  }, "x"), __jsx("hr", {
    className: "jsx-1113657443"
  }))), __jsx("div", {
    className: "jsx-1113657443" + " " + "menu2-question"
  }, __jsx("img", {
    src: "https://img.icons8.com/cute-clipart/40/000000/faq.png",
    className: "jsx-1113657443" + " " + "float-left"
  }), __jsx("input", {
    type: "text",
    name: "question",
    value: props.question,
    onChange: props.handleChange,
    className: "jsx-1113657443" + " " + "inputf2"
  }), __jsx("br", {
    className: "jsx-1113657443"
  }), __jsx("button", {
    onClick: props.handleaskquestion,
    type: "button",
    className: "jsx-1113657443" + " " + "btn btn-primary btn-sm"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-1113657443" + " " + "fa fa-quora"
  }), "\xA0 Ask a question "), __jsx("hr", {
    className: "jsx-1113657443"
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1113657443"
  }, ".spam-text.jsx-1113657443{color:gray;}.inputf2.jsx-1113657443{width:80%;color:darkblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpdGVtXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdTUSxBQUdPLEFBRVksVUFDSyxDQUhoQixjQUlBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpdGVtXFxbaWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgU3ViTmF2YmFyIGZyb20gJy4uLy4uL2xheW91dHMvU3ViTmF2YmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBFcnJvcnBhZ2UgZnJvbSAnLi8uLi8uLi9sYXlvdXRzL2Vycm9yJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICB7VXJsLEltYWdlVXJsfSBmcm9tICcuLy4uLy4uL2NvbnN0YW50L21haW4nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEltYWdlc2lkZT0ocHJvcHMpPT4ge1xyXG4gICAgcmV0dXJuKFxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgPGRpdiBpZD1cImNhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBjbGFzc05hbWU9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbjxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbntwcm9wcy5pdGVtLmltYWdlcy5tYXAoKHgsaSk9PlxyXG4gICAgPGxpIGtleT17aX0gZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89e2l9IGNsYXNzTmFtZT17aT09MD8nYWN0aXZlJzonYyd9ID48L2xpPiBcclxuICAgICl9XHJcblxyXG48L29sPlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWlubmVyXCI+XHJcbntwcm9wcy5pdGVtLmltYWdlcy5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17aT09MD8nY2Fyb3VzZWwtaXRlbSBhY3RpdmUnOidjYXJvdXNlbC1pdGVtJ30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgc2lsZGUyaW1hZ2VcIiBzcmM9e0ltYWdlVXJsK3h9IGFsdD1cImZpcnN0IHNsaWRlXCIgd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICl9XHJcbjwvZGl2PlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXZcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG48L2E+XHJcbjxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuPC9hPlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgY2FyZC1mb290ZXItYnV0dG9uXCI+e3Byb3BzLml0ZW0uY3JlYXRlRGF0ZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvZmF2b3JpdGUtY2FydC5wbmdcIi8+ICZuYnNwOyBBZGQgdG8gQ2FydDwvYT5cclxuICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2luLXRyYW5zaXQucG5nXCIvPiAmbmJzcDtPcmRlciBOb3c8L2E+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAgIHtgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1mb290ZXItYnV0dG9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwLjFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBDb250ZW50c2lkZT0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2tcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+e3Byb3BzLml0ZW0uaXRlbWxvbmduYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPntwcm9wcy5pdGVtLmNhdGVnZXJ5fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbG9hdC1yaWdodFwiPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT57cHJvcHMuaXRlbS5pdGVtUHJpY2V9PC9zdHJpa2U+ICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIklkaXNjb3VudCBmb250NlwiPiAzMyUgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIklwcmlzZSBmb250NlwiPiZuYnNwO1JzLjQ1MS4yNTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uY29udGVudDF9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLmNvbnRlbnQyfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXNwZWNpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TcGVjaWZpY2F0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLml0ZW1TcGVjaWZpY2F0aW9uP3Byb3BzLml0ZW0uaXRlbVNwZWNpZmljYXRpb24ubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsge3gubmFtZX0gJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcHJvZmlsZS1zcGVjYlwiPiAmbmJzcDsge3gudmFsdWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXN0b2NrLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvclNreWJsdWVcIj5TdG9jayBEZXRhaWxzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLml0ZW0uc3RvY2tEZXRhaWw/cHJvcHMuaXRlbS5zdG9ja0RldGFpbC5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBtZW51Mi1zcGVjYVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9tZXRyby8xNS8wMDAwMDAvZXh0ZXJuYWwtbGluay5wbmdcIi8+Jm5ic3A7ICZuYnNwOyB7eC5uYW1lfSAmbmJzcDs6IDwvYT4gPGEgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBwcm9maWxlLXNwZWNiXCI+ICZuYnNwOyB7eC52YWx1ZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6bnVsbH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbXlzaG9wLycrcHJvcHMuaXRlbS5zaG9wWzBdLnNob3BpZH0+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHQgYnRuLXNtXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS9mZmZmZmYvb25saW5lLXNob3AucG5nXCIvPiAmbmJzcDtnbyB0byBzaG9wPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51MntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zcGVjYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0NGNTcwRSA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3BlY2J7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzRTE5MDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXN1YmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSWRpc2NvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uU2lkZSA9IChwcm9wcyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1YXRpb25zIGNvbC0xMlwiPlxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAge3Byb3BzLnF1ZXN0aW9uZGF0YS5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibWVudTItcXVlc3Rpb25cIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNDAvMDAwMDAwL2ZhcS5wbmdcIi8+PHAgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyB7eC5xdWVzdGlvbn08YnIvPiA8c3BhbiBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLXt4LmFfdXNlci5uYW1lfS0gb24ge3guYV9EYXRlfTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwICBjbGFzc05hbWU9XCJmb250MyBmb250c2l6ZUUtOVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS93aW5kb3dzLzI1LzAwMDAwMC9zdGFjay1leGNoYW5nZS1hbnN3ZXIucG5nXCIvPiAmbmJzcDt7eC5hbnN3ZXI/eC5hbnN3ZXI6J3BlbmRpbmcgYW5zd2VyLi4nfTwvcD5cclxuICAgICAgICAgICAgeyF4LmFuc3dlcj88ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF1ZXN0aW9uXCIgaWQ9eydpbnB1dC0nK3guX2lkfSAvPjxici8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlZ2l2ZWFuc3dlci5iaW5kKHRoaXMseC5faWQpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJ1bGxob3JuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiZuYnNwOyBrZWVwIGEgYW5zd2VyIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj46bnVsbH1cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5yZW1vdmVhbnNld2VyLmJpbmQodGhpcyx4Ll9pZCl9Png8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTItcXVlc3Rpb25cIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2N1dGUtY2xpcGFydC80MC8wMDAwMDAvZmFxLnBuZ1wiLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRmMlwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInF1ZXN0aW9uXCIgdmFsdWU9e3Byb3BzLnF1ZXN0aW9ufSAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz48YnIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlYXNrcXVlc3Rpb259IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcXVvcmFcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+Jm5ic3A7IEFzayBhIHF1ZXN0aW9uIDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICB7YC5zcGFtLXRleHR7XHJcbiAgICAgICAgICAgY29sb3I6Z3JheVxyXG4gICAgICAgfVxyXG4gICAgICAgLmlucHV0ZjJ7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBgfVxyXG4gICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUmV2aWV3U2lkZSA9IChwcm9wcyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXJldmlld3MgY29sLTEyXCI+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lbnUyLXN1YmNhcmQtdGl0bGUgZm9udDIgZm9udGNvbG9yT3JhbmdlXCI+UmV2aWV3cyBmcm9tIGN1c3RvbWVyPC9oNT5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIHtwcm9wcy5yZXZpZXdzZGF0YS5tYXAoKHgsaSk9PlxyXG4gICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtZW51Mi1yZXZpZXdzXCI+XHJcbiAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IGF2YXRhclwiIHNyYz17eC51c2VyLmltYWdlVXJsfSAvPjxwICBjbGFzc05hbWU9XCJmb250NiBmb250c2l6ZUUtOVwiPiZuYnNwOyB7eC51c2VyLm5hbWV9IDxici8+IDxzcGFtIGNsYXNzTmFtZT1cInNwYW0tdGV4dCBmb250MyBmb250c2l6ZUUtOFwiPiAte3guY3JlYXRlRGF0ZX0tPC9zcGFtPjwvcD5cclxuICAgICAgICAgICA8cCAgY2xhc3NOYW1lPVwiZm9udDUgZm9udHdlaWdodDcwMCBmb250c2l6ZUUtOVwiPiZuYnNwOyZuYnNwOyZuYnNwO3t4LnJldmlld30gPC9wPlxyXG4gICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1ZXN0aW9uIGNvbC0xMlwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzQwLzAwMDAwMC9lZGl0LWNoYXQtaGlzdG9yeS5wbmdcIi8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0ZjJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJyZXZpZXdcIiB2YWx1ZT17cHJvcHMucmV2aWV3fSAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gLz48YnIvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlcmV2aWV3c30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNvbW1lbnRzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiZuYnNwOyBrZWVwIGEgcmV2aWV3IDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgIHtgLnNwYW0tdGV4dHtcclxuICAgICAgICAgICBjb2xvcjpncmF5XHJcbiAgICAgICB9XHJcbiAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgLmlucHV0ZjJ7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICB9XHJcbiAgICAgICBgfVxyXG4gICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGl0ZW1pZDonJyxcclxuICAgICAgICAgICAgcXVlc3Rpb246ICcnLFxyXG4gICAgICAgICAgICBhbnN3ZXI6ICcnLFxyXG4gICAgICAgICAgICBxdWVzdGlvbmRhdGE6W10sXHJcbiAgICAgICAgICAgIHJldmlldzonJyxcclxuICAgICAgICAgICAgcmV2aWV3c2RhdGE6W10sXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBldnQgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgZXZlcnl0aW1lIHRoZSBpbnB1dCBpcyBjaGFuZ2VkXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgW2V2dC50YXJnZXQubmFtZV06IGV2dC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgaGFuZGxlcmV2aWV3cz0oKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndXNlcicsIEpTT04uc3RyaW5naWZ5KENvb2tpZS5nZXRKU09OKCd1c2VyJykpKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XHJcbiAgXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvcmV2aWV3Y3JlYXRlJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe3RoaXMuc2V0U3RhdGUoe3JldmlldzonJ30pO2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfVxyXG4gICAgIC8vYXNrIHF1ZXN0aW9uXHJcbiAgICBoYW5kbGVhc2txdWVzdGlvbj0oKT0+e1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndXNlcicsIEpTT04uc3RyaW5naWZ5KENvb2tpZS5nZXRKU09OKCd1c2VyJykpKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XHJcbiAgXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvcXVlc3Rpb25jcmVhdGUnLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7IHRoaXMuc2V0U3RhdGUoe3F1ZXN0aW9uOicnfSk7IGFsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy9kZWxldGUgYW5zd2VyXHJcbiAgICByZW1vdmVhbnNld2VyPShpZCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgXHJcbiAgICAgICAgZmV0Y2goJy9hcGkvcmVtb3ZlYW5zZXdlci8nK2lkLHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5jb21wb25lbnREaWRNb3VudCgpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXt0aGlzLnNldFN0YXRlKHtyZXZpZXc6Jyd9KTthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICAgIC8vZ2l2ZSBhbnN3ZXJcclxuICAgIGhhbmRsZWdpdmVhbnN3ZXI9KGlkKT0+e1xyXG4gICAgICAgIHZhciBzdGF0ZSA9ICB7XHJcbiAgICAgICAgICAgIGFuc3dlcjogJChgI2lucHV0LSR7aWR9YCkudmFsKCksXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2Fuc3dlcnRvcWVzdGlvbi8ke2lkfWAse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC8qKnNpZGUgbmF2YmFyICovXHJcbiAgICBzaG93c2lkZWJhcigpe1xyXG4gICAgICAgIHRoaXMucmVmcy5jaGlsZC5zaG93U2lkZWJhcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja1dpZHRoKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRvd3dpZHRoID0gJCgnLnNpbGRlMmltYWdlJykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3doZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgd2luZG93IGlzIGdyZWF0ZXIgdGhhbiA0NDBweCB3aWRlIHRoZW4gdHVybiBvbiBqU2Nyb2xsUGFuZS4uXHJcbiAgICAgICAgICAgICAgICAgIC8vICAkKCcuZGl2MScpLmFkZENsYXNzKCdkZXNrdG9wJylcclxuICAgICAgICAgICAgICAgICAgJCgnLnNpbGRlMmltYWdlJykuY3NzKHsnbWF4LWhlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLnBhcmVudCgpLmNzcyh7J2hlaWdodCc6d2luZG93d2lkdGgvMyoyLCd3aWR0aCc6JzEwMCUnLCdiYWNrZ3JvdW5kJzogJyNmZmZmZmYnfSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgb24gbG9hZFxyXG4gICAgICAgICAgICBjaGVja1dpZHRoKCk7XHJcbiAgICAgICAgICAgIC8vIEJpbmQgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja1dpZHRoKTtcclxuXHJcbiAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChgJHtVcmx9cXVlc3Rpb25zLyR7dGhpcy5wcm9wcy5pdGVtLl9pZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+eyByZXR1cm4gcmVzLmpzb24oKTt9KVxyXG4gICAgICAgIC50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtaWQ6dGhpcy5wcm9wcy5pdGVtLl9pZD90aGlzLnByb3BzLml0ZW0uX2lkOicnLFxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25kYXRhIDogZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZmV0Y2goYCR7VXJsfXJldmlld3MvJHt0aGlzLnByb3BzLml0ZW0uX2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuanNvbigpO30pXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+e1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJldmlld3NkYXRhIDogZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbiAgICByZW5kZXIoKSB7IFxyXG5cclxuICAvL3NpZGUgbmF2YmFyIGxpbmtcclxuICBjb25zdCBzaWRlbmF2bGluayA9IFtcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidob21lJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvbWVudScsbGlua25hbWU6J21lbnUnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51Mid9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnUzJ30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTQnfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51NSd9LFxyXG4gIF07XHJcbiAgXHJcbiAgICBjb25zdCBzaWRlbmF2Y29uc3QgPSB7dG9waWMgOiAnSXRlbXMnLHRvcGljbGluazonQWxsIEl0ZW1zJyxzaWRlbmF2bGluazpzaWRlbmF2bGlua307XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+IFxyXG4gICAgICAgICAgICAgICAgPFN1Yk5hdmJhciBzaWRlbmF2Y29uc3Q9e3NpZGVuYXZjb25zdH0vPlxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yPzxFcnJvcnBhZ2UgZXJyb3I9e3RoaXMucHJvcHMuaXRlbX0gLz46XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VzaWRlIGl0ZW09e3RoaXMucHJvcHMuaXRlbX0+PC9JbWFnZXNpZGU+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudHNpZGUgaXRlbT17dGhpcy5wcm9wcy5pdGVtfSA+PC9Db250ZW50c2lkZT5cclxuICAgICAgICAgICAgICAgIDxRdWVzdGlvblNpZGUgcmVtb3ZlYW5zZXdlcj17KGlkKT0+dGhpcy5yZW1vdmVhbnNld2VyKGlkKX0gcXVlc3Rpb25kYXRhPXt0aGlzLnN0YXRlLnF1ZXN0aW9uZGF0YX0gcXVlc3Rpb249e3RoaXMuc3RhdGUucXVlc3Rpb259IGFuc3dlcj17dGhpcy5zdGF0ZS5hbnN3ZXJ9IGhhbmRsZWFza3F1ZXN0aW9uPXt0aGlzLmhhbmRsZWFza3F1ZXN0aW9ufSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVnaXZlYW5zd2VyPXsoaWQpPT50aGlzLmhhbmRsZWdpdmVhbnN3ZXIoaWQpfT48L1F1ZXN0aW9uU2lkZT5cclxuICAgICAgICAgICAgICAgIDxSZXZpZXdTaWRlIHJldmlld3NkYXRhPXt0aGlzLnN0YXRlLnJldmlld3NkYXRhfSByZXZpZXc9e3RoaXMuc3RhdGUucmV2aWV3fSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVyZXZpZXdzPXt0aGlzLmhhbmRsZXJldmlld3N9IC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHsgaWQsaWRlIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7VXJsfWl0ZW0vJHtpZH0/aWRlPSR7aWRlfWApO1xyXG4gICAgIHZhciAgaXRlbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgdmFyIGVycm9yID0gZmFsc2U7XHJcbiAgICAgaWYocmVzLnN0YXR1cyE9MjAwKXtcclxuICAgICAgZXJyb3IgPSB0cnVlIDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2l0ZW0sZXJyb3J9XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\item\\\\[id].js */"));
};

const ReviewSide = props => {
  return __jsx("div", {
    className: "jsx-3884520444" + " " + "menu2-reviews col-12"
  }, __jsx("h5", {
    className: "jsx-3884520444" + " " + "menu2-subcard-title font2 fontcolorOrange"
  }, "Reviews from customer"), __jsx("hr", {
    className: "jsx-3884520444"
  }), props.reviewsdata.map((x, i) => __jsx("div", {
    key: i,
    className: "jsx-3884520444" + " " + "menu2-reviews"
  }, __jsx("img", {
    src: x.user.imageUrl,
    className: "jsx-3884520444" + " " + "float-left avatar"
  }), __jsx("p", {
    className: "jsx-3884520444" + " " + "font6 fontsizeE-9"
  }, "\xA0 ", x.user.name, " ", __jsx("br", {
    className: "jsx-3884520444"
  }), " ", __jsx("spam", {
    className: "jsx-3884520444" + " " + "spam-text font3 fontsizeE-8"
  }, " -", x.createDate, "-")), __jsx("p", {
    className: "jsx-3884520444" + " " + "font5 fontweight700 fontsizeE-9"
  }, "\xA0\xA0\xA0", x.review, " "), __jsx("hr", {
    className: "jsx-3884520444"
  }))), __jsx("div", {
    className: "jsx-3884520444" + " " + "menu2-question col-12"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/40/000000/edit-chat-history.png",
    className: "jsx-3884520444" + " " + "float-left"
  }), __jsx("input", {
    type: "text",
    name: "review",
    value: props.review,
    onChange: props.handleChange,
    className: "jsx-3884520444" + " " + "inputf2"
  }), __jsx("br", {
    className: "jsx-3884520444"
  }), __jsx("button", {
    onClick: props.handlereviews,
    type: "button",
    className: "jsx-3884520444" + " " + "btn btn-danger btn-sm"
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "jsx-3884520444" + " " + "fa fa-comments"
  }), "\xA0 keep a review ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3884520444"
  }, ".spam-text.jsx-3884520444{color:gray;}.avatar.jsx-3884520444{vertical-align:middle;width:40px;height:40px;border-radius:50%;}.inputf2.jsx-3884520444{width:80%;color:darkblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxpdGVtXFxbaWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlVUSxBQUdPLEFBRXdCLEFBTVosVUFDSyxDQVRoQixXQUdZLEdBT1osUUFOYSxZQUNNLGtCQUNwQiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxwYWdlc1xcaXRlbVxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IFN1Yk5hdmJhciBmcm9tICcuLi8uLi9sYXlvdXRzL1N1Yk5hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgRXJyb3JwYWdlIGZyb20gJy4vLi4vLi4vbGF5b3V0cy9lcnJvcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAge1VybCxJbWFnZVVybH0gZnJvbSAnLi8uLi8uLi9jb25zdGFudC9tYWluJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBJbWFnZXNpZGU9KHByb3BzKT0+IHtcclxuICAgIHJldHVybihcclxuPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgIDxkaXYgaWQ9XCJjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgY2xhc3NOYW1lPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG48b2wgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxyXG57cHJvcHMuaXRlbS5pbWFnZXMubWFwKCh4LGkpPT5cclxuICAgIDxsaSBrZXk9e2l9IGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPXtpfSBjbGFzc05hbWU9e2k9PTA/J2FjdGl2ZSc6J2MnfSA+PC9saT4gXHJcbiAgICApfVxyXG5cclxuPC9vbD5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG57cHJvcHMuaXRlbS5pbWFnZXMubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e2k9PTA/J2Nhcm91c2VsLWl0ZW0gYWN0aXZlJzonY2Fyb3VzZWwtaXRlbSd9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHNpbGRlMmltYWdlXCIgc3JjPXtJbWFnZVVybCt4fSBhbHQ9XCJmaXJzdCBzbGlkZVwiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICApfVxyXG48L2Rpdj5cclxuPGEgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJwcmV2XCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuPC9hPlxyXG48YSBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLW5leHRcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XHJcbjwvYT5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQzIGNhcmQtZm9vdGVyLWJ1dHRvblwiPntwcm9wcy5pdGVtLmNyZWF0ZURhdGV9PC9zbWFsbD5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL2Zhdm9yaXRlLWNhcnQucG5nXCIvPiAmbmJzcDsgQWRkIHRvIENhcnQ8L2E+XHJcbiAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodCBidG4tc21cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzI1L2ZmZmZmZi9pbi10cmFuc2l0LnBuZ1wiLz4gJm5ic3A7T3JkZXIgTm93PC9hPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4ID5cclxuICAgICAgICB7YCAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMC43NWVtO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZm9vdGVyLWJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMC4xZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQ29udGVudHNpZGU9KHByb3BzKT0+e1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPntwcm9wcy5pdGVtLml0ZW1sb25nbmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YT57cHJvcHMuaXRlbS5jYXRlZ2VyeX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+IDxzdHJpa2U+e3Byb3BzLml0ZW0uaXRlbVByaWNlfTwvc3RyaWtlPiAgPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4gMzMlIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy40NTEuMjU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLmNvbnRlbnQxfVxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5jb250ZW50Mn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1zcGVjaWZpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudTItc3ViY2FyZC10aXRsZSBmb250MiBmb250Y29sb3JTa3libHVlXCI+U3BlY2lmaWNhdGlvbjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbS5pdGVtU3BlY2lmaWNhdGlvbj9wcm9wcy5pdGVtLml0ZW1TcGVjaWZpY2F0aW9uLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IG1lbnUyLXNwZWNhXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL21ldHJvLzE1LzAwMDAwMC9leHRlcm5hbC1saW5rLnBuZ1wiLz4mbmJzcDsgJm5ic3A7IHt4Lm5hbWV9ICZuYnNwOzogPC9hPiA8YSBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0IHByb2ZpbGUtc3BlY2JcIj4gJm5ic3A7IHt4LnZhbHVlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTpudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1zdG9jay1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVudTItc3ViY2FyZC10aXRsZSBmb250MiBmb250Y29sb3JTa3libHVlXCI+U3RvY2sgRGV0YWlsczwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pdGVtLnN0b2NrRGV0YWlsP3Byb3BzLml0ZW0uc3RvY2tEZXRhaWwubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgbWVudTItc3BlY2FcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vbWV0cm8vMTUvMDAwMDAwL2V4dGVybmFsLWxpbmsucG5nXCIvPiZuYnNwOyAmbmJzcDsge3gubmFtZX0gJm5ic3A7OiA8L2E+IDxhIGNsYXNzTmFtZT1cImZsb2F0LWxlZnQgcHJvZmlsZS1zcGVjYlwiPiAmbmJzcDsge3gudmFsdWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOm51bGx9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL215c2hvcC8nK3Byb3BzLml0ZW0uc2hvcFswXS5zaG9waWR9PjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGJ0bi1zbVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvZmZmZmZmL29ubGluZS1zaG9wLnBuZ1wiLz4gJm5ic3A7Z28gdG8gc2hvcDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItdG9waWN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWVudTItc3BlY2F7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNDRjU3MEUgO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm1lbnUyLXNwZWNie1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM0UxOTAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlciA6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1pbWctdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5tZW51Mi1zdWJjYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JY3V0cHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLklwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBRdWVzdGlvblNpZGUgPSAocHJvcHMpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWF0aW9ucyBjb2wtMTJcIj5cclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIHtwcm9wcy5xdWVzdGlvbmRhdGEubWFwKCh4LGkpPT5cclxuICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1lbnUyLXF1ZXN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdFwiIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vY3V0ZS1jbGlwYXJ0LzQwLzAwMDAwMC9mYXEucG5nXCIvPjxwIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9udDYgZm9udHNpemVFLTlcIj4mbmJzcDsge3gucXVlc3Rpb259PGJyLz4gPHNwYW4gY2xhc3NOYW1lPVwic3BhbS10ZXh0IGZvbnQzIGZvbnRzaXplRS04XCI+IC17eC5hX3VzZXIubmFtZX0tIG9uIHt4LmFfRGF0ZX08L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8cCAgY2xhc3NOYW1lPVwiZm9udDMgZm9udHNpemVFLTlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vd2luZG93cy8yNS8wMDAwMDAvc3RhY2stZXhjaGFuZ2UtYW5zd2VyLnBuZ1wiLz4gJm5ic3A7e3guYW5zd2VyP3guYW5zd2VyOidwZW5kaW5nIGFuc3dlci4uJ308L3A+XHJcbiAgICAgICAgICAgIHsheC5hbnN3ZXI/PGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0ZjJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxdWVzdGlvblwiIGlkPXsnaW5wdXQtJyt4Ll9pZH0gLz48YnIvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZWdpdmVhbnN3ZXIuYmluZCh0aGlzLHguX2lkKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1idWxsaG9yblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDsga2VlcCBhIGFuc3dlciA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+Om51bGx9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMucmVtb3ZlYW5zZXdlci5iaW5kKHRoaXMseC5faWQpfT54PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyLXF1ZXN0aW9uXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmbG9hdC1sZWZ0XCIgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9jdXRlLWNsaXBhcnQvNDAvMDAwMDAwL2ZhcS5wbmdcIi8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0ZjJcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJxdWVzdGlvblwiIHZhbHVlPXtwcm9wcy5xdWVzdGlvbn0gIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+PGJyLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZWFza3F1ZXN0aW9ufSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXF1b3JhXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiZuYnNwOyBBc2sgYSBxdWVzdGlvbiA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8aHIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxzdHlsZSBqc3ggPlxyXG4gICAgICAge2Auc3BhbS10ZXh0e1xyXG4gICAgICAgICAgIGNvbG9yOmdyYXlcclxuICAgICAgIH1cclxuICAgICAgIC5pbnB1dGYye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgfVxyXG4gICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJldmlld1NpZGUgPSAocHJvcHMpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1yZXZpZXdzIGNvbC0xMlwiPlxyXG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZW51Mi1zdWJjYXJkLXRpdGxlIGZvbnQyIGZvbnRjb2xvck9yYW5nZVwiPlJldmlld3MgZnJvbSBjdXN0b21lcjwvaDU+XHJcbiAgICAgICAgPGhyLz5cclxuICAgICAgICB7cHJvcHMucmV2aWV3c2RhdGEubWFwKCh4LGkpPT5cclxuICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibWVudTItcmV2aWV3c1wiPlxyXG4gICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmxvYXQtbGVmdCBhdmF0YXJcIiBzcmM9e3gudXNlci5pbWFnZVVybH0gLz48cCAgY2xhc3NOYW1lPVwiZm9udDYgZm9udHNpemVFLTlcIj4mbmJzcDsge3gudXNlci5uYW1lfSA8YnIvPiA8c3BhbSBjbGFzc05hbWU9XCJzcGFtLXRleHQgZm9udDMgZm9udHNpemVFLThcIj4gLXt4LmNyZWF0ZURhdGV9LTwvc3BhbT48L3A+XHJcbiAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImZvbnQ1IGZvbnR3ZWlnaHQ3MDAgZm9udHNpemVFLTlcIj4mbmJzcDsmbmJzcDsmbmJzcDt7eC5yZXZpZXd9IDwvcD5cclxuICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51Mi1xdWVzdGlvbiBjb2wtMTJcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZsb2F0LWxlZnRcIiBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy80MC8wMDAwMDAvZWRpdC1jaGF0LWhpc3RvcnkucG5nXCIvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dGYyXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicmV2aWV3XCIgdmFsdWU9e3Byb3BzLnJldmlld30gIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+PGJyLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZXJldmlld3N9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc21cIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb21tZW50c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4mbmJzcDsga2VlcCBhIHJldmlldyA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgPHN0eWxlIGpzeCA+XHJcbiAgICAgICB7YC5zcGFtLXRleHR7XHJcbiAgICAgICAgICAgY29sb3I6Z3JheVxyXG4gICAgICAgfVxyXG4gICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbnB1dGYye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgfVxyXG4gICAgICAgYH1cclxuICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpdGVtaWQ6JycsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnJyxcclxuICAgICAgICAgICAgYW5zd2VyOiAnJyxcclxuICAgICAgICAgICAgcXVlc3Rpb25kYXRhOltdLFxyXG4gICAgICAgICAgICByZXZpZXc6JycsXHJcbiAgICAgICAgICAgIHJldmlld3NkYXRhOltdLFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcclxuICAgICAgICAvLyBUaGlzIHRyaWdnZXJzIGV2ZXJ5dGltZSB0aGUgaW5wdXQgaXMgY2hhbmdlZFxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIFtldnQudGFyZ2V0Lm5hbWVdOiBldnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBcclxuICAgIGhhbmRsZXJldmlld3M9KCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xyXG4gIFxyXG4gICAgICAgIGZldGNoKCcvYXBpL3Jldmlld2NyZWF0ZScse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5jb21wb25lbnREaWRNb3VudCgpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXt0aGlzLnNldFN0YXRlKHtyZXZpZXc6Jyd9KTthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH1cclxuICAgICAvL2FzayBxdWVzdGlvblxyXG4gICAgaGFuZGxlYXNrcXVlc3Rpb249KCk9PntcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeShDb29raWUuZ2V0SlNPTigndXNlcicpKSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xyXG4gIFxyXG4gICAgICAgIGZldGNoKCcvYXBpL3F1ZXN0aW9uY3JlYXRlJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpeyB0aGlzLnNldFN0YXRlKHtxdWVzdGlvbjonJ30pOyBhbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC8vZGVsZXRlIGFuc3dlclxyXG4gICAgcmVtb3ZlYW5zZXdlcj0oaWQpPT57XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIFxyXG4gICAgICAgIGZldGNoKCcvYXBpL3JlbW92ZWFuc2V3ZXIvJytpZCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge3RoaXMuY29tcG9uZW50RGlkTW91bnQoKTsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7dGhpcy5zZXRTdGF0ZSh7cmV2aWV3OicnfSk7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgICAvL2dpdmUgYW5zd2VyXHJcbiAgICBoYW5kbGVnaXZlYW5zd2VyPShpZCk9PntcclxuICAgICAgICB2YXIgc3RhdGUgPSAge1xyXG4gICAgICAgICAgICBhbnN3ZXI6ICQoYCNpbnB1dC0ke2lkfWApLnZhbCgpLFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgndXNlcicsIEpTT04uc3RyaW5naWZ5KENvb2tpZS5nZXRKU09OKCd1c2VyJykpKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuICAgIFxyXG4gICAgICAgICAgICBmZXRjaChgL2FwaS9hbnN3ZXJ0b3Flc3Rpb24vJHtpZH1gLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7dGhpcy5jb21wb25lbnREaWRNb3VudCgpOyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAvKipzaWRlIG5hdmJhciAqL1xyXG4gICAgc2hvd3NpZGViYXIoKXtcclxuICAgICAgICB0aGlzLnJlZnMuY2hpbGQuc2hvd1NpZGViYXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tXaWR0aCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5kb3d3aWR0aCA9ICQoJy5zaWxkZTJpbWFnZScpLndpZHRoKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2luZG93aGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIHdpbmRvdyBpcyBncmVhdGVyIHRoYW4gNDQwcHggd2lkZSB0aGVuIHR1cm4gb24galNjcm9sbFBhbmUuLlxyXG4gICAgICAgICAgICAgICAgICAvLyAgJCgnLmRpdjEnKS5hZGRDbGFzcygnZGVza3RvcCcpXHJcbiAgICAgICAgICAgICAgICAgICQoJy5zaWxkZTJpbWFnZScpLmNzcyh7J21heC1oZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAkKCcuc2lsZGUyaW1hZ2UnKS5wYXJlbnQoKS5jc3MoeydoZWlnaHQnOndpbmRvd3dpZHRoLzMqMiwnd2lkdGgnOicxMDAlJywnYmFja2dyb3VuZCc6ICcjZmZmZmZmJ30pO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIG9uIGxvYWRcclxuICAgICAgICAgICAgY2hlY2tXaWR0aCgpO1xyXG4gICAgICAgICAgICAvLyBCaW5kIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoY2hlY2tXaWR0aCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmV0Y2goYCR7VXJsfXF1ZXN0aW9ucy8ke3RoaXMucHJvcHMuaXRlbS5faWR9YClcclxuICAgICAgICAudGhlbihyZXM9PnsgcmV0dXJuIHJlcy5qc29uKCk7fSlcclxuICAgICAgICAudGhlbihkYXRhPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbWlkOnRoaXMucHJvcHMuaXRlbS5faWQ/dGhpcy5wcm9wcy5pdGVtLl9pZDonJyxcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uZGF0YSA6IGRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZldGNoKGAke1VybH1yZXZpZXdzLyR7dGhpcy5wcm9wcy5pdGVtLl9pZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+eyByZXR1cm4gcmVzLmpzb24oKTt9KVxyXG4gICAgICAgIC50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICByZXZpZXdzZGF0YSA6IGRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuXHJcbiAgLy9zaWRlIG5hdmJhciBsaW5rXHJcbiAgY29uc3Qgc2lkZW5hdmxpbmsgPSBbXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonaG9tZSd9LFxyXG4gICAge2lkOjEsbGluazonL21lbnUnLGxpbmtuYW1lOidtZW51J30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTInfSxcclxuICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOiduZXdtZW51Myd9LFxyXG4gICAge2lkOjEsbGluazonLycsbGlua25hbWU6J25ld21lbnU0J30sXHJcbiAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbmV3bWVudTUnfSxcclxuICBdO1xyXG4gIFxyXG4gICAgY29uc3Qgc2lkZW5hdmNvbnN0ID0ge3RvcGljIDogJ0l0ZW1zJyx0b3BpY2xpbms6J0FsbCBJdGVtcycsc2lkZW5hdmxpbms6c2lkZW5hdmxpbmt9O1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PiBcclxuICAgICAgICAgICAgICAgIDxTdWJOYXZiYXIgc2lkZW5hdmNvbnN0PXtzaWRlbmF2Y29uc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvcj88RXJyb3JwYWdlIGVycm9yPXt0aGlzLnByb3BzLml0ZW19IC8+OlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlc2lkZSBpdGVtPXt0aGlzLnByb3BzLml0ZW19PjwvSW1hZ2VzaWRlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnRzaWRlIGl0ZW09e3RoaXMucHJvcHMuaXRlbX0gPjwvQ29udGVudHNpZGU+XHJcbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25TaWRlIHJlbW92ZWFuc2V3ZXI9eyhpZCk9PnRoaXMucmVtb3ZlYW5zZXdlcihpZCl9IHF1ZXN0aW9uZGF0YT17dGhpcy5zdGF0ZS5xdWVzdGlvbmRhdGF9IHF1ZXN0aW9uPXt0aGlzLnN0YXRlLnF1ZXN0aW9ufSBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfSBoYW5kbGVhc2txdWVzdGlvbj17dGhpcy5oYW5kbGVhc2txdWVzdGlvbn0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaGFuZGxlZ2l2ZWFuc3dlcj17KGlkKT0+dGhpcy5oYW5kbGVnaXZlYW5zd2VyKGlkKX0+PC9RdWVzdGlvblNpZGU+XHJcbiAgICAgICAgICAgICAgICA8UmV2aWV3U2lkZSByZXZpZXdzZGF0YT17dGhpcy5zdGF0ZS5yZXZpZXdzZGF0YX0gcmV2aWV3PXt0aGlzLnN0YXRlLnJldmlld30gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaGFuZGxlcmV2aWV3cz17dGhpcy5oYW5kbGVyZXZpZXdzfSAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7IGlkLGlkZSB9ID0gY29udGV4dC5xdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VybH1pdGVtLyR7aWR9P2lkZT0ke2lkZX1gKTtcclxuICAgICB2YXIgIGl0ZW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgIHZhciBlcnJvciA9IGZhbHNlO1xyXG4gICAgIGlmKHJlcy5zdGF0dXMhPTIwMCl7XHJcbiAgICAgIGVycm9yID0gdHJ1ZSA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtpdGVtLGVycm9yfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\item\\\\[id].js */"));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleChange", evt => {
      // This triggers everytime the input is changed
      this.setState({
        [evt.target.name]: evt.target.value
      });
    });

    _defineProperty(this, "handlereviews", () => {
      const data = new FormData();
      data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.getJSON('user')));
      data.append('jsonbody', JSON.stringify(this.state));
      fetch('/api/reviewcreate', {
        method: 'POST',
        headers: {},
        body: data
      }).then(response => {
        this.componentDidMount();
        return response.json();
      }).then(data => {
        if (data != undefined) {
          this.setState({
            review: ''
          });
          alert(data.msg);
        }
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "handleaskquestion", () => {
      const data = new FormData();
      data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.getJSON('user')));
      data.append('jsonbody', JSON.stringify(this.state));
      fetch('/api/questioncreate', {
        method: 'POST',
        headers: {},
        body: data
      }).then(response => {
        this.componentDidMount();
        return response.json();
      }).then(data => {
        if (data != undefined) {
          this.setState({
            question: ''
          });
          alert(data.msg);
        }
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "removeansewer", id => {
      const data = new FormData();
      fetch('/api/removeansewer/' + id, {
        method: 'PUT',
        headers: {},
        body: data
      }).then(response => {
        this.componentDidMount();
        return response.json();
      }).then(data => {
        if (data != undefined) {
          this.setState({
            review: ''
          });
          alert(data.msg);
        }
      }).catch(error => console.log(error));
    });

    _defineProperty(this, "handlegiveanswer", id => {
      var state = {
        answer: jquery__WEBPACK_IMPORTED_MODULE_6___default()(`#input-${id}`).val()
      };
      const data = new FormData();
      data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.getJSON('user')));
      data.append('jsonbody', JSON.stringify(state));
      fetch(`/api/answertoqestion/${id}`, {
        method: 'POST',
        headers: {},
        body: data
      }).then(response => {
        this.componentDidMount();
        return response.json();
      }).then(data => {}).catch(error => console.log(error));
    });

    this.state = {
      itemid: '',
      question: '',
      answer: '',
      questiondata: [],
      review: '',
      reviewsdata: []
    };
  }

  /**side navbar */
  showsidebar() {
    this.refs.child.showSidebar();
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()(document).ready(function () {
      function checkWidth() {
        var windowwidth = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.silde2image').width();
        var windowheight = jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).height(); //if the window is greater than 440px wide then turn on jScrollPane..
        //  $('.div1').addClass('desktop')

        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.silde2image').css({
          'max-height': windowwidth / 3 * 2,
          'width': '100%'
        });
        jquery__WEBPACK_IMPORTED_MODULE_6___default()('.silde2image').parent().css({
          'height': windowwidth / 3 * 2,
          'width': '100%',
          'background': '#ffffff'
        });
      } // Execute on load


      checkWidth(); // Bind event listener

      jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).resize(checkWidth);
    });
    fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_7__["Url"]}questions/${this.props.item._id}`).then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        itemid: this.props.item._id ? this.props.item._id : '',
        questiondata: data
      });
    });
    fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_7__["Url"]}reviews/${this.props.item._id}`).then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        reviewsdata: data
      });
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

    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sidenavconst: sidenavconst
    }), __jsx("br", null), this.props.error ? __jsx(_layouts_error__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: this.props.item
    }) : __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx(Imageside, {
      item: this.props.item
    }), __jsx(Contentside, {
      item: this.props.item
    }), __jsx(QuestionSide, {
      removeansewer: id => this.removeansewer(id),
      questiondata: this.state.questiondata,
      question: this.state.question,
      answer: this.state.answer,
      handleaskquestion: this.handleaskquestion,
      handleChange: this.handleChange,
      handlegiveanswer: id => this.handlegiveanswer(id)
    }), __jsx(ReviewSide, {
      reviewsdata: this.state.reviewsdata,
      review: this.state.review,
      handleChange: this.handleChange,
      handlereviews: this.handlereviews
    }))), __jsx("br", null), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  const {
    id,
    ide
  } = context.query;
  const res = await fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_7__["Url"]}item/${id}?ide=${ide}`);
  var item = await res.json();
  var error = false;

  if (res.status != 200) {
    error = true;
  }

  return {
    item,
    error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/item/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\item\[id].js */"./pages/item/[id].js");


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