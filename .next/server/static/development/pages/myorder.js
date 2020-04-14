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

/***/ "./components/Cartitem.js":
/*!********************************!*\
  !*** ./components/Cartitem.js ***!
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CartList = props => {
  const unitcount = (id, qty) => {
    props.updateOrder(id, qty);
  };

  const deletefavItems = itemid => {
    var array = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('faverite-item');
    const index = array.indexOf(itemid);

    if (index > -1) {
      array.splice(index, 1);
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('faverite-item', array);
    props.componentDidMount();
  };

  return __jsx("div", {
    className: "jsx-910200679" + " " + "menu2 row projects"
  }, props.catageries.length != 0 ? props.catageries.map((c, i) => __jsx("div", {
    key: i,
    className: "jsx-910200679" + " " + "card"
  }, __jsx("div", {
    onClick: () => deletefavItems(c._id),
    className: "jsx-910200679" + " " + "popup-close-cartitem"
  }, "x"), __jsx("div", {
    className: "jsx-910200679" + " " + "row col-12"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: _constant_main__WEBPACK_IMPORTED_MODULE_6__["itemUrl"] + c.urlname
  }, __jsx("div", {
    className: "jsx-910200679" + " " + "col-lg-3"
  }, __jsx("img", {
    src: _constant_main__WEBPACK_IMPORTED_MODULE_6__["ImageUrl"] + c.images[0],
    className: "jsx-910200679" + " " + "f-card-img-top"
  }))), __jsx("div", {
    className: "jsx-910200679" + " " + "col-lg-9"
  }, __jsx("h4", {
    className: "jsx-910200679" + " " + "card-title font2 topicColor"
  }, c.itemlongname), __jsx("div", {
    className: "jsx-910200679" + " " + "meta font6 subtopicColor"
  }, __jsx("a", {
    className: "jsx-910200679"
  }, c.categery, " - ", c.subcategery), __jsx("div", {
    className: "jsx-910200679" + " " + " float-right"
  }, __jsx("a", {
    className: "jsx-910200679" + " " + "Icutprise font6"
  }, " ", __jsx("strike", {
    className: "jsx-910200679"
  }, "Rs.", c.itemPrice, ".00"), "  "), __jsx("a", {
    className: "jsx-910200679" + " " + "Idiscount font6"
  }, " ", c.itemdiscount, "% "), __jsx("a", {
    className: "jsx-910200679" + " " + "Iprise font6"
  }, "\xA0Rs.", c.itemPrice * (100 - c.itemdiscount) / 100))), __jsx("div", {
    className: "jsx-910200679" + " " + "card-text font6"
  }, c.content1.slice(0, 150), "..."), __jsx("div", {
    className: "jsx-910200679" + " " + "card-footer"
  }, __jsx("small", {
    className: "jsx-910200679" + " " + "font3 float-left"
  }, "2020/25/5"), __jsx("div", {
    role: "group",
    "aria-label": "Basic example",
    className: "jsx-910200679" + " " + "btn-group float-right"
  }, __jsx("button", {
    type: "button",
    id: 'unitcount-' + c.id,
    "aria-describedby": "emailHelp",
    className: "jsx-910200679" + " " + "btn btn-danger btn-sm float-right"
  }, c.qty ? c.qty : 0), __jsx("button", {
    type: "button",
    onClick: () => unitcount(c._id, -1),
    className: "jsx-910200679" + " " + "btn btn-secondary btn-sm float-right"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/sort-down.png",
    className: "jsx-910200679"
  }), "\xA0"), __jsx("button", {
    type: "button",
    onClick: () => unitcount(c._id, 1),
    className: "jsx-910200679" + " " + "btn btn-secondary btn-sm float-right"
  }, __jsx("img", {
    src: "https://img.icons8.com/ios/20/ffffff/sort-up.png",
    className: "jsx-910200679"
  }), "\xA0"), __jsx("button", {
    type: "button",
    onClick: () => unitcount(c._id, 10),
    className: "jsx-910200679" + " " + "btn btn-secondary btn-sm float-right"
  }, "+10"))))))) : __jsx("div", {
    className: "jsx-910200679" + " " + "d-flex justify-content-center"
  }, __jsx("h4", {
    className: "jsx-910200679" + " " + "card-title font2 topicColor"
  }, "Loading...")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "910200679"
  }, ".unitcount-text.jsx-910200679{width :50px;}h5.jsx-910200679{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin:0;}.menu2.jsx-910200679{margin-bottom :20px;}.menu2-topic.jsx-910200679{padding :20px 10px 10px 10px;}.card.jsx-910200679{font-size:1em;overflow:hidden;padding:20px;border:none;border-radius:.28571429rem;box-shadow:0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;-webkit-transition:0.5s;transition:0.5s;margin :0.5em 0;}.card.jsx-910200679:hover{box-shadow:0 5px 5px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);-webkit-transform:scale(1.001);-ms-transform:scale(1.001);transform:scale(1.001);-webkit-transition:0.5s;transition:0.5s;}.card-block.jsx-910200679{font-size:1em;position:relative;margin:0;padding:0.5em;border:none;border-top:1px solid rgba(34,36,38,.1);box-shadow:none;}.popup-close-cartitem.jsx-910200679{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#01567e;cursor:pointer;font-size:0.6rem;width:1.2rem;height:1.2rem;top:1rem;right:1rem;position:absolute;border-radius:10%;}.f-card-img-top.jsx-910200679{display:block;width:100%;height:200;}.card-title.jsx-910200679{font-size:1.28571429em;font-weight:700;line-height:1.2857em;margin-bottom:0px;}.card-text.jsx-910200679{clear:both;margin-top:.5em;color:rgba(0,0,0,.68);font-size :12px;}.card-footer.jsx-910200679{font-size:1em;position:static;top:0;left:0;max-width:100%;padding:.5em 0.75em;border-top:1px solid rgba(0,0,0,.05);background:#fff;}.card-inverse.jsx-910200679{border:1px solid rgba(0,0,0,.05);}.profile.jsx-910200679{position:absolute;top:-12px;display:inline-block;overflow:hidden;box-sizing:border-box;width:25px;height:25px;margin:0;border:1px solid #fff;border-radius:50%;}.profile-avatar.jsx-910200679{display:block;width:100%;height:100%;border-radius:50%;}.profile-inline.jsx-910200679{position:relative;top:0;display:inline-block;}.profile-inline.jsx-910200679~.card-title.jsx-910200679{display:inline-block;margin-left:4px;vertical-align:top;}.text-bold.jsx-910200679{font-weight:700;}.meta.jsx-910200679{font-size:1em;}.meta.jsx-910200679 a.jsx-910200679{-webkit-text-decoration:none;text-decoration:none;}.Icutprise.jsx-910200679{-webkit-text-decoration:line-through;text-decoration:line-through;color:rgba(0,0,0,.8);font-size:0.75em;}.Idiscount.jsx-910200679{color:darkorange;font-size:0.8em;}.Iprise.jsx-910200679{color:red;font-size:1em;}.projects.jsx-910200679 div.jsx-910200679{-webkit-animation-name:fade-in-jsx-910200679;animation-name:fade-in-jsx-910200679;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;animation-duration:1s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(1){-webkit-animation-delay:0.6s;animation-delay:0.6s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(2){-webkit-animation-delay:0.8s;animation-delay:0.8s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(3){-webkit-animation-delay:1.0s;animation-delay:1.0s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(4){-webkit-animation-delay:1.2s;animation-delay:1.2s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(5){-webkit-animation-delay:1.4s;animation-delay:1.4s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(6){-webkit-animation-delay:1.6s;animation-delay:1.6s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(7){-webkit-animation-delay:1.8s;animation-delay:1.8s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(8){-webkit-animation-delay:2.0s;animation-delay:2.0s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(9){-webkit-animation-delay:2.2s;animation-delay:2.2s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(10){-webkit-animation-delay:2.4s;animation-delay:2.4s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(11){-webkit-animation-delay:2.6s;animation-delay:2.6s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(12){-webkit-animation-delay:2.8s;animation-delay:2.8s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(13){-webkit-animation-delay:3.0s;animation-delay:3.0s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(14){-webkit-animation-delay:3.2s;animation-delay:3.2s;}.projects.jsx-910200679 div.jsx-910200679:nth-of-type(15){-webkit-animation-delay:3.4;animation-delay:3.4;}@-webkit-keyframes fade-in-jsx-910200679{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in-jsx-910200679{0%{opacity:0;}100%{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXENhcnRpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFb0IsQUFFcUMsQUFHVyxBQU1ILEFBR1MsQUFHZixBQVVvRCxBQUtwRCxBQVNGLEFBZUUsQUFPUyxBQVFaLEFBT0csQUFXc0IsQUFJbEIsQUFhSixBQU9JLEFBTUcsQUFNTCxBQUlGLEFBS08sQUFJUSxBQUtaLEFBSVAsQUFLYSxBQUtGLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRCxBQUlOLEFBR0EsVUExREEsQUF3RGYsQUFHQSxDQXZJaUIsQ0FyRXBCLEFBdUNpQixFQXhCRyxBQWVFLEFBd0JQLEFBc0JLLEFBNEJMLEFBd0JmLEVBTEEsQ0FrQm9CLENBbEROLEFBb0JKLEVBdEdWLENBNEdvQixFQWxIQSxBQTBEQSxDQW1ESyxBQWtDekIsQ0EzRmUsQUFrREMsRUFuQ2EsQ0FzQkosQ0FoRnpCLENBSWlCLEFBNkRQLEVBOUNHLENBd0RiLEFBdURBLEdBckZBLEFBcUJXLENBNEJXLEFBWUMsRUFsSEUsQUEwREEsRUE5QlAsRUFmRixBQThERyxFQWtDbkIsR0FvRkQsQ0E5SHFCLEFBc0JBLENBd0NwQixBQXNCRCxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEtBaExnQyxBQWVmLEFBMEVoQixDQVlBLEVBdkN3QixFQTNFWCxBQTBEUyxLQXRDSyxBQStDM0IsQUFzQjBCLENBMENFLENBdEdrQixFQTVCOUMsU0EyREEsQUFnQjZDLElBOURTLEFBbUl6QixJQTlHTixDQXVEUixBQTBDTSxXQXpDTCxNQTBDaEIsRUF2R29CLElBOERQLEtBZk8sSUFnQk0sR0E5RDFCLFNBaEJvQixBQStEcEIsU0FvRTBCLENBcERKLEtBekVGLGFBMEVwQixZQS9FcUIsUUFvQk0sT0FkM0IsQ0FMQSxLQWtJRCxzRkE5R3dCLG1CQUNKLGVBQ0UsaUJBQ0osYUFDQyxjQUNMLFNBQ0UsV0FDTyxrQkFDRCxrQkFDckIiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxcY29tcG9uZW50c1xcQ2FydGl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHtVcmwsSW1hZ2VVcmwsaXRlbVVybCxjYXJ0aXRlbU1TRyxjYXJ0VXNlck5vdGxvZ2luLGNhcnRVc2VyZGV0YWlsc30gZnJvbSAnLi8uLi9jb25zdGFudC9tYWluJztcclxuXHJcblxyXG5jb25zdCBDYXJ0TGlzdD0ocHJvcHMpPT57XHJcblxyXG4gICBjb25zdCAgdW5pdGNvdW50PShpZCxxdHkpPT57XHJcbiAgICAgIFxyXG4gICAgICAgIHByb3BzLnVwZGF0ZU9yZGVyKGlkLHF0eSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbGV0ZWZhdkl0ZW1zPShpdGVtaWQpPT57XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGFycmF5ID0gQ29va2llLmdldEpTT04oJ2ZhdmVyaXRlLWl0ZW0nKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoaXRlbWlkKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBDb29raWUuc2V0KCdmYXZlcml0ZS1pdGVtJyxhcnJheSk7XHJcbiAgICAgICAgICBwcm9wcy5jb21wb25lbnREaWRNb3VudCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51MiByb3cgcHJvamVjdHNcIj5cclxuICAgICAgICBcclxuICAgICAgICB7cHJvcHMuY2F0YWdlcmllcy5sZW5ndGghPTA/cHJvcHMuY2F0YWdlcmllcy5tYXAoKGMsaSk9PlxyXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jbG9zZS1jYXJ0aXRlbVwiIG9uQ2xpY2s9eygpPT5kZWxldGVmYXZJdGVtcyhjLl9pZCl9ID54PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLTEyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17aXRlbVVybCtjLnVybG5hbWV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImYtY2FyZC1pbWctdG9wXCIgc3JjPXtJbWFnZVVybCtjLmltYWdlc1swXX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy05XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPntjLml0ZW1sb25nbmFtZX08L2g0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YSBmb250NiBzdWJ0b3BpY0NvbG9yXCI+XHJcbiAgICAgICAgICAgIDxhPntjLmNhdGVnZXJ5fSAtIHtjLnN1YmNhdGVnZXJ5fTwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxvYXQtcmlnaHRcIj4gXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkljdXRwcmlzZSBmb250NlwiPiA8c3RyaWtlPlJzLntjLml0ZW1QcmljZX0uMDA8L3N0cmlrZT4gIDwvYT4gXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIklkaXNjb3VudCBmb250NlwiPiB7Yy5pdGVtZGlzY291bnR9JSA8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIklwcmlzZSBmb250NlwiPiZuYnNwO1JzLntjLml0ZW1QcmljZSooMTAwLWMuaXRlbWRpc2NvdW50KS8xMDB9PC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dCBmb250NlwiPlxyXG4gICAgICAgIHtjLmNvbnRlbnQxLnNsaWNlKDAsMTUwKX0uLi5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvbnQzIGZsb2F0LWxlZnRcIj4yMDIwLzI1LzU8L3NtYWxsPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIGZsb2F0LXJpZ2h0XCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tc20gZmxvYXQtcmlnaHRcIiBpZD17J3VuaXRjb3VudC0nK2MuaWR9IGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiA+e2MucXR5P2MucXR5OjB9PC9idXR0b24+ICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnVuaXRjb3VudChjLl9pZCwtMSl9ICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmxvYXQtcmlnaHRcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9zb3J0LWRvd24ucG5nXCIvPiZuYnNwOzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT51bml0Y291bnQoYy5faWQsMSl9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBmbG9hdC1yaWdodFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3NvcnQtdXAucG5nXCIvPiZuYnNwOzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT51bml0Y291bnQoYy5faWQsMTApfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmxvYXQtcmlnaHRcIj4rMTA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApOjxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj48aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+TG9hZGluZy4uLjwvaDQ+PC9kaXY+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgICAgICAgICBgLnVuaXRjb3VudC10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVudTJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWVudTItdG9waWN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiA6IDAuNWVtIDAgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZDpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggNXB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvcHVwLWNsb3NlLWNhcnRpdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmYtY2FyZC1pbWctdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDI5ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI4NTdlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1pbnZlcnNlICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlLWlubGluZSB+IC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1ib2xkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1ldGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSWN1dHByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLklkaXNjb3VudHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JcHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAzLjQ7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIClcclxufVxyXG5cclxuY29uc3QgT3JkZXJTaWRlPShwcm9wcyk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yZGVyc2lkZVwiID5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS01IGZvbnRjb2xvclNreWJsdWVcIj5NeSBPcmRlciBCaWxsPC9oND5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZvbnRzaXplRS04XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgIDx0YWJsZSBzdW1tYXJ5PVwiVGhpcyB0YWJsZSBzaG93cyBob3cgdG8gY3JlYXRlIHJlc3BvbnNpdmUgdGFibGVzIHVzaW5nIEJvb3RzdHJhcCdzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICA8Y2FwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFuIGV4YW1wbGUgb2YgYSByZXNwb25zaXZlIHRhYmxlIGJhc2VkIG9uIDwvY2FwdGlvbj5cclxuICAgICAgICAgIDx0aGVhZCA+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCIgZm9udGNvbG9yT3JhbmdlXCI+XHJcbiAgICAgICAgICAgICAgPHRoPkl0ZW0gTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPmNhdGFnZXJ5PC90aD5cclxuICAgICAgICAgICAgICA8dGg+RGlzY291bnQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlF0eTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZvbnRjb2xvcnBpbmtcIj5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5ID5cclxuICAgICAgICAgICAgICB7cHJvcHMuY2FydEl0ZW1zLm1hcCgoYyxpKT0+XHJcbiAgICAgICAgICAgICAgICAgICAgKGMucXR5ID4gMCk/XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9ICBjbGFzc05hbWU9XCJzdWJ0b3BpY0NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Yy5pdGVtbG9uZ25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjLmNhdGVnZXJ5fS17Yy5zdWJjYXRlZ2VyeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2MuaXRlbWRpc2NvdW50fSU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+IDxzdHJpa2U+UnMue2MuaXRlbVByaWNlfTwvc3RyaWtlPiBScy57Yy5pdGVtUHJpY2UqKDEwMC1jLml0ZW1kaXNjb3VudCkvMTAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Yy5xdHk/Yy5xdHk6MH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udGNvbG9ycGlua1wiPlJzLnsoYy5pdGVtUHJpY2UqKDEwMC1jLml0ZW1kaXNjb3VudCkvMTAwKSooYy5xdHk/Yy5xdHk6MCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8dGZvb3Q+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjVcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPllvdXIgVG90YWwgcHJpY2UgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZm9udGNvbG9ycmVkXCI+UnMue3Byb3BzLnRvdGFscHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAub3JkZXJzaWRlIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNlbmRvcmRlclNpZGU9KHByb3BzKT0+e1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250NCBmb250c2l6ZUUxLTI1IGZvbnRjb2xvclNreWJsdWVcIj5Zb3VyIERldGFpbHM8L2g0PlxyXG4gICAgICAgIHtwcm9wcy51c2VyP1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxyXG4gICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgZm9udHNpemVFMSB0b3BpY0NvbG9yXCI+SGkge3Byb3BzLnVzZXIubmFtZX08L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPkNvbnRhY3Q8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlVXNlckRldGFpbHN9ICBuYW1lPSdjb250YWN0JyB2YWx1ZT17cHJvcHMudXNlci5jb250YWN0fSAgLz5cclxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPnsnJ308L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwIGNvbC1sZy0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+QWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICd9ICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlVXNlckRldGFpbHN9ICBuYW1lPSdhZGRyZXNzJyB2YWx1ZT17cHJvcHMudXNlci5hZGRyZXNzfSAgLz5cclxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPnsnJ308L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFzc2FnZS1jYXJ0XCI+XHJcbiAgICAgICAgICAgIHtjYXJ0VXNlcmRldGFpbHN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2Pjo8cCBjbGFzc05hbWU9XCJtYXNzYWdlLWNhcnRcIj5cclxuICAgICAgICAgICAge2NhcnRVc2VyTm90bG9naW59XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIH1cclxuICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTEtMjUgZm9udGNvbG9yU2t5Ymx1ZVwiPlNwZWNpYWwgbWFzc2FnZTwvaDQ+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFzc2FnZS1jYXJ0XCI+e2NhcnRpdGVtTVNHfTwvcD5cclxuICAgICAgICB7cHJvcHMuY2FydEl0ZW1zLm1hcCgoeCxpKT0+XHJcbiAgICAgICAgKHgucXR5ID4gMCk/XHJcbiAgICAgICAgXHJcbiAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJmaWVsZC13cmFwIGNvbC1sZy0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+e3guaXRlbWxvbmduYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICd9ICByb3dzPVwiMlwiIHJlcXVpcmVkICBuYW1lPXt4Ll9pZH0gdmFsdWU9e3gubXNnfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlU3BlY2lhbE1TR30gLz5cclxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPnsnJ308L3NwYW4+XHJcbiAgICAgICAgIDwvZGl2PjpudWxsICBcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJmb250NiAgYnRuIGJ0bi1zdWJtaXQgXCIgIHJlcXVpcmVkICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXR9ID4gU3VibWl0IDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIC5sYWJlbGYxIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhYmVsZjEgLnJlcSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbGYxLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbGYxLmFjdGl2ZSAucmVxIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhYmVsZjEuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDIzOTU3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dGYxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk3ZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuNXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRmMTpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAyMzk1NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5maWVsZC13cmFwIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1hZGRuZXdzaG9we1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxNTY3ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXN1Ym1pdHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1lcnJvcntcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogcmVkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplIDogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dC1lcnJvcntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXNzYWdlLWNhcnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6ICNjNDFiMDA7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcblxyXG59XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWUgOiAnY2hhbmFrYScsXHJcbiAgICAgICAgaXRlbXMgOiBbXSxcclxuICAgICAgICB1c2VyOnt9LFxyXG4gICAgICAgIHRvdGFscHJpY2UgOiAwLFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlU3BlY2lhbE1TRz0gZXZ0ID0+e1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgICAgIGl0ZW1zLmZpbmQoZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICBpZihlLl9pZCA9PSBldnQudGFyZ2V0Lm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgIGUubXNnID0gZXZ0LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGl0ZW1zIDogaXRlbXMsXHJcblxyXG4gICAgICAgIH0pXHJcbiAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlVXNlckRldGFpbHM9IGV2dCA9PntcclxuXHJcbiAgICAgICAgdmFyIHVzZXIgPSB0aGlzLnN0YXRlLnVzZXI7XHJcbiAgICAgICAgICAgIGlmKGV2dC50YXJnZXQubmFtZT09J2NvbnRhY3QnKXtcclxuICAgICAgICAgICAgdXNlci5jb250YWN0ID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXZ0LnRhcmdldC5uYW1lPT0nYWRkcmVzcycpe1xyXG4gICAgICAgICAgICAgICAgdXNlci5hZGRyZXNzID0gZXZ0LnRhcmdldC52YWx1ZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VyIDogdXNlcixcclxuXHJcbiAgICAgICAgfSlcclxuICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuXHJcbiAgICAgXHJcbiAgICAgICAgZmV0Y2goYCR7VXJsfWl0ZW1mb3JmYXZvcml0ZT9mYXY9JHtDb29raWUuZ2V0SlNPTignZmF2ZXJpdGUtaXRlbScpfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuc3RhdHVzPT0yMDA/cmVzLmpzb24oKTpudWxsfSlcclxuICAgICAgICAudGhlbihkYXRhPT57dGhpcy5zZXRTdGF0ZSh7aXRlbXM6ZGF0YX0pO30pXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB1c2VyIDogQ29va2llLmdldEpTT04oJ3VzZXInKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlT3JkZXIoaWQscXR5KXtcclxuXHJcbiAgICAgICAgdmFyIHRlbXBpdGVtID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgICAgICB2YXIgaXRlbXNJbmRleCA9IHRlbXBpdGVtLmZpbmRJbmRleChmdW5jdGlvbihjKSB7IFxyXG4gICAgICAgICAgICByZXR1cm4gYy5faWQgPT0gaWQ7IFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZW1waXRlbVtpdGVtc0luZGV4XSA9IHRlbXBpdGVtW2l0ZW1zSW5kZXhdLnF0eT90ZW1waXRlbVtpdGVtc0luZGV4XTp7Li4udGVtcGl0ZW1baXRlbXNJbmRleF0scXR5OjAsbXNnOicnfVxyXG4gICAgICAgIHRlbXBpdGVtW2l0ZW1zSW5kZXhdLnF0eSA9IHRlbXBpdGVtW2l0ZW1zSW5kZXhdLnF0eStxdHk7XHJcblxyXG4gICAgICAgIGlmKHRlbXBpdGVtW2l0ZW1zSW5kZXhdLnF0eT49MCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBbLi4udGVtcGl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWxwcmljZSA6IHRoaXMuZ2V0dG90YWwodGVtcGl0ZW0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldHRvdGFsKGl0ZW1zKXtcclxuICAgICAgICB2YXIgdGVtcGFycmF5ID0gaXRlbXM7XHJcbiAgICAgICAgdmFyIHRvdGFsPSAwO1xyXG4gICAgICAgIHRlbXBhcnJheS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICB0b3RhbCA9IChlLnF0eT8oZS5pdGVtUHJpY2UqKDEwMC1lLml0ZW1kaXNjb3VudCkvMTAwKSplLnF0eTowKSt0b3RhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gZXZ0ID0+IHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcy5maWx0ZXIoZT0+ZS5xdHk+MCk7XHJcbiAgICAgICAgdmFyIHVzZXIgID0gQ29va2llLmdldEpTT04oJ3VzZXInKTtcclxuICAgICAgICB1c2VyLmNvbnRhY3QgPSB0aGlzLnN0YXRlLnVzZXIuY29udGFjdDtcclxuICAgICAgICB1c2VyLmFkZHJlc3MgPSB0aGlzLnN0YXRlLnVzZXIuYWRkcmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICBcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY3JlYXRlb3JkZXInLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcblxyXG4gICAgXHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgcmVuZGVyKCkgeyBcclxuICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250MSB0b3BpY0NvbG9yIG1lbnUyLXRvcGljXCI+e3RoaXMucHJvcHMudG9waWN9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbXM/IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJ0TGlzdCBjb21wb25lbnREaWRNb3VudD17KCk9PnRoaXMuY29tcG9uZW50RGlkTW91bnQoKX0gY2F0YWdlcmllcz17dGhpcy5zdGF0ZS5pdGVtc30gdXBkYXRlT3JkZXI9eyhpZCxxdHkpPT50aGlzLnVwZGF0ZU9yZGVyKGlkLHF0eSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxPcmRlclNpZGUgIGNhcnRJdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gdG90YWxwcmljZT17dGhpcy5zdGF0ZS50b3RhbHByaWNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvdGFscHJpY2U+MD9cclxuICAgICAgICAgICAgICAgICAgICA8U2VuZG9yZGVyU2lkZSB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9IGhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzPXt0aGlzLmhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzfSBjYXJ0SXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IGhhbmRsZUNoYW5nZVNwZWNpYWxNU0c9e3RoaXMuaGFuZGxlQ2hhbmdlU3BlY2lhbE1TR30gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz46bnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPllvdXIgY2FydCBpcyBlbXB0eS48L2g0PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuY2FydC1tZW51e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Cartitem.js */"));
};

const OrderSide = props => {
  return __jsx("div", {
    className: "jsx-2501479444" + " " + "orderside"
  }, __jsx("h4", {
    className: "jsx-2501479444" + " " + "font4 fontsizeE1-5 fontcolorSkyblue"
  }, "My Order Bill"), __jsx("div", {
    className: "jsx-2501479444" + " " + "container fontsizeE-8"
  }, __jsx("div", {
    className: "jsx-2501479444" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2501479444" + " " + "col-xs-12"
  }, __jsx("div", {
    className: "jsx-2501479444" + " " + "table-responsive"
  }, __jsx("table", {
    summary: "This table shows how to create responsive tables using Bootstrap's default functionality",
    className: "jsx-2501479444" + " " + "table table-bordered table-hover"
  }, __jsx("caption", {
    className: "jsx-2501479444" + " " + "text-center"
  }, "An example of a responsive table based on "), __jsx("thead", {
    className: "jsx-2501479444"
  }, __jsx("tr", {
    className: "jsx-2501479444" + " " + " fontcolorOrange"
  }, __jsx("th", {
    className: "jsx-2501479444"
  }, "Item Name"), __jsx("th", {
    className: "jsx-2501479444"
  }, "catagery"), __jsx("th", {
    className: "jsx-2501479444"
  }, "Discount"), __jsx("th", {
    className: "jsx-2501479444"
  }, "Price"), __jsx("th", {
    className: "jsx-2501479444"
  }, "Qty"), __jsx("th", {
    className: "jsx-2501479444" + " " + "fontcolorpink"
  }, "Total"))), __jsx("tbody", {
    className: "jsx-2501479444"
  }, props.cartItems.map((c, i) => c.qty > 0 ? __jsx("tr", {
    key: i,
    className: "jsx-2501479444" + " " + "subtopicColor"
  }, __jsx("td", {
    className: "jsx-2501479444"
  }, c.itemlongname), __jsx("td", {
    className: "jsx-2501479444"
  }, c.categery, "-", c.subcategery), __jsx("td", {
    className: "jsx-2501479444"
  }, c.itemdiscount, "%"), __jsx("td", {
    className: "jsx-2501479444"
  }, " ", __jsx("strike", {
    className: "jsx-2501479444"
  }, "Rs.", c.itemPrice), " Rs.", c.itemPrice * (100 - c.itemdiscount) / 100), __jsx("td", {
    className: "jsx-2501479444"
  }, c.qty ? c.qty : 0), __jsx("td", {
    className: "jsx-2501479444" + " " + "fontcolorpink"
  }, "Rs.", c.itemPrice * (100 - c.itemdiscount) / 100 * (c.qty ? c.qty : 0))) : null)), __jsx("tfoot", {
    className: "jsx-2501479444"
  }, __jsx("tr", {
    className: "jsx-2501479444"
  }, __jsx("td", {
    colSpan: "5",
    className: "jsx-2501479444" + " " + "text-center"
  }, "Your Total price "), __jsx("td", {
    className: "jsx-2501479444" + " " + "fontcolorred"
  }, "Rs.", props.totalprice)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2501479444"
  }, ".orderside.jsx-2501479444{overflow:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXENhcnRpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1WYSxBQUkrQixjQUNsQiIsImZpbGUiOiJEOlxcV2ViLXByb2plY3RcXG15YXBwXFxjb21wb25lbnRzXFxDYXJ0aXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQge1VybCxJbWFnZVVybCxpdGVtVXJsLGNhcnRpdGVtTVNHLGNhcnRVc2VyTm90bG9naW4sY2FydFVzZXJkZXRhaWxzfSBmcm9tICcuLy4uL2NvbnN0YW50L21haW4nO1xyXG5cclxuXHJcbmNvbnN0IENhcnRMaXN0PShwcm9wcyk9PntcclxuXHJcbiAgIGNvbnN0ICB1bml0Y291bnQ9KGlkLHF0eSk9PntcclxuICAgICAgXHJcbiAgICAgICAgcHJvcHMudXBkYXRlT3JkZXIoaWQscXR5KVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgZGVsZXRlZmF2SXRlbXM9KGl0ZW1pZCk9PntcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYXJyYXkgPSBDb29raWUuZ2V0SlNPTignZmF2ZXJpdGUtaXRlbScpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihpdGVtaWQpO1xyXG4gICAgICBcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIENvb2tpZS5zZXQoJ2ZhdmVyaXRlLWl0ZW0nLGFycmF5KTtcclxuICAgICAgICAgIHByb3BzLmNvbXBvbmVudERpZE1vdW50KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUyIHJvdyBwcm9qZWN0c1wiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtwcm9wcy5jYXRhZ2VyaWVzLmxlbmd0aCE9MD9wcm9wcy5jYXRhZ2VyaWVzLm1hcCgoYyxpKT0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNsb3NlLWNhcnRpdGVtXCIgb25DbGljaz17KCk9PmRlbGV0ZWZhdkl0ZW1zKGMuX2lkKX0gPng8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTJcIj5cclxuICAgICAgICA8TGluayBocmVmPXtpdGVtVXJsK2MudXJsbmFtZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctM1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZi1jYXJkLWltZy10b3BcIiBzcmM9e0ltYWdlVXJsK2MuaW1hZ2VzWzBdfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTlcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+e2MuaXRlbWxvbmduYW1lfTwvaDQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhIGZvbnQ2IHN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgPGE+e2MuY2F0ZWdlcnl9IC0ge2Muc3ViY2F0ZWdlcnl9PC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbG9hdC1yaWdodFwiPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWN1dHByaXNlIGZvbnQ2XCI+IDxzdHJpa2U+UnMue2MuaXRlbVByaWNlfS4wMDwvc3RyaWtlPiAgPC9hPiBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSWRpc2NvdW50IGZvbnQ2XCI+IHtjLml0ZW1kaXNjb3VudH0lIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiSXByaXNlIGZvbnQ2XCI+Jm5ic3A7UnMue2MuaXRlbVByaWNlKigxMDAtYy5pdGVtZGlzY291bnQpLzEwMH08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IGZvbnQ2XCI+XHJcbiAgICAgICAge2MuY29udGVudDEuc2xpY2UoMCwxNTApfS4uLlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm9udDMgZmxvYXQtbGVmdFwiPjIwMjAvMjUvNTwvc21hbGw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgZmxvYXQtcmlnaHRcIiByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiQmFzaWMgZXhhbXBsZVwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbSBmbG9hdC1yaWdodFwiIGlkPXsndW5pdGNvdW50LScrYy5pZH0gYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiID57Yy5xdHk/Yy5xdHk6MH08L2J1dHRvbj4gICAgICBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+dW5pdGNvdW50KGMuX2lkLC0xKX0gIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBmbG9hdC1yaWdodFwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3NvcnQtZG93bi5wbmdcIi8+Jm5ic3A7PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnVuaXRjb3VudChjLl9pZCwxKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvc29ydC11cC5wbmdcIi8+Jm5ic3A7PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCk9PnVuaXRjb3VudChjLl9pZCwxMCl9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBmbG9hdC1yaWdodFwiPisxMDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG48L2Rpdj4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk6PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPjxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj5Mb2FkaW5nLi4uPC9oND48L2Rpdj59XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e1xyXG4gICAgICAgICAgICAgICAgICAgIGAudW5pdGNvdW50LXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZW51MntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tZW51Mi10b3BpY3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZDRkNGQ1LCAwIDAgMCAxcHggI2Q0ZDRkNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luIDogMC41ZW0gMCA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCA1cHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9wdXAtY2xvc2UtY2FydGl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZi1jYXJkLWltZy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjg1NzE0MjllbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjg1N2VtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42OCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjVlbSAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWludmVyc2UgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2ZpbGUtaW5saW5lIH4gLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LWJvbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWV0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1ldGEgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JY3V0cHJpc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSWRpc2NvdW50e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZGFya29yYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLklwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAyLjBzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuMnM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuNDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBPcmRlclNpZGU9KHByb3BzKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJzaWRlXCIgPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250NCBmb250c2l6ZUUxLTUgZm9udGNvbG9yU2t5Ymx1ZVwiPk15IE9yZGVyIEJpbGw8L2g0PlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZm9udHNpemVFLThcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgPHRhYmxlIHN1bW1hcnk9XCJUaGlzIHRhYmxlIHNob3dzIGhvdyB0byBjcmVhdGUgcmVzcG9uc2l2ZSB0YWJsZXMgdXNpbmcgQm9vdHN0cmFwJ3MgZGVmYXVsdCBmdW5jdGlvbmFsaXR5XCIgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgIDxjYXB0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QW4gZXhhbXBsZSBvZiBhIHJlc3BvbnNpdmUgdGFibGUgYmFzZWQgb24gPC9jYXB0aW9uPlxyXG4gICAgICAgICAgPHRoZWFkID5cclxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIiBmb250Y29sb3JPcmFuZ2VcIj5cclxuICAgICAgICAgICAgICA8dGg+SXRlbSBOYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Y2F0YWdlcnk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5EaXNjb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICA8dGg+UXR5PC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiZm9udGNvbG9ycGlua1wiPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHkgPlxyXG4gICAgICAgICAgICAgIHtwcm9wcy5jYXJ0SXRlbXMubWFwKChjLGkpPT5cclxuICAgICAgICAgICAgICAgICAgICAoYy5xdHkgPiAwKT9cclxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0gIGNsYXNzTmFtZT1cInN1YnRvcGljQ29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjLml0ZW1sb25nbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2MuY2F0ZWdlcnl9LXtjLnN1YmNhdGVnZXJ5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Yy5pdGVtZGlzY291bnR9JTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4gPHN0cmlrZT5Scy57Yy5pdGVtUHJpY2V9PC9zdHJpa2U+IFJzLntjLml0ZW1QcmljZSooMTAwLWMuaXRlbWRpc2NvdW50KS8xMDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjLnF0eT9jLnF0eTowfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250Y29sb3JwaW5rXCI+UnMueyhjLml0ZW1QcmljZSooMTAwLWMuaXRlbWRpc2NvdW50KS8xMDApKihjLnF0eT9jLnF0eTowKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiNVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+WW91ciBUb3RhbCBwcmljZSA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmb250Y29sb3JyZWRcIj5Scy57cHJvcHMudG90YWxwcmljZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5vcmRlcnNpZGUge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgU2VuZG9yZGVyU2lkZT0ocHJvcHMpPT57XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTEtMjUgZm9udGNvbG9yU2t5Ymx1ZVwiPllvdXIgRGV0YWlsczwvaDQ+XHJcbiAgICAgICAge3Byb3BzLnVzZXI/XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBmb250c2l6ZUUxIHRvcGljQ29sb3JcIj5IaSB7cHJvcHMudXNlci5uYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC13cmFwIGNvbC1sZy0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb250MiBsYWJlbGYxXCI+Q29udGFjdDwvbGFiZWw+XHJcbiAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9eydmb250NiBpbnB1dGYxICd9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2VVc2VyRGV0YWlsc30gIG5hbWU9J2NvbnRhY3QnIHZhbHVlPXtwcm9wcy51c2VyLmNvbnRhY3R9ICAvPlxyXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+eycnfTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGxhYmVsZjFcIj5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJ30gIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2VVc2VyRGV0YWlsc30gIG5hbWU9J2FkZHJlc3MnIHZhbHVlPXtwcm9wcy51c2VyLmFkZHJlc3N9ICAvPlxyXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+eycnfTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXNzYWdlLWNhcnRcIj5cclxuICAgICAgICAgICAge2NhcnRVc2VyZGV0YWlsc31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+OjxwIGNsYXNzTmFtZT1cIm1hc3NhZ2UtY2FydFwiPlxyXG4gICAgICAgICAgICB7Y2FydFVzZXJOb3Rsb2dpbn1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS0yNSBmb250Y29sb3JTa3libHVlXCI+U3BlY2lhbCBtYXNzYWdlPC9oND5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXNzYWdlLWNhcnRcIj57Y2FydGl0ZW1NU0d9PC9wPlxyXG4gICAgICAgIHtwcm9wcy5jYXJ0SXRlbXMubWFwKCh4LGkpPT5cclxuICAgICAgICAoeC5xdHkgPiAwKT9cclxuICAgICAgICBcclxuICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGxhYmVsZjFcIj57eC5pdGVtbG9uZ25hbWV9PC9sYWJlbD5cclxuICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJ30gIHJvd3M9XCIyXCIgcmVxdWlyZWQgIG5hbWU9e3guX2lkfSB2YWx1ZT17eC5tc2d9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2VTcGVjaWFsTVNHfSAvPlxyXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+eycnfTwvc3Bhbj5cclxuICAgICAgICAgPC9kaXY+Om51bGwgIFxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImZvbnQ2ICBidG4gYnRuLXN1Ym1pdCBcIiAgcmVxdWlyZWQgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVN1Ym1pdH0gPiBTdWJtaXQgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgLmxhYmVsZjEge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxNTY3ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWxmMSAucmVxIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhYmVsZjEuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhYmVsZjEuYWN0aXZlIC5yZXEge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWxmMS5oaWdobGlnaHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMjM5NTc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0ZjEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTdkO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzAxNTY3ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dGYxOmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDIzOTU3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpZWxkLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWFkZG5ld3Nob3B7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tc3VibWl0e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxNTY3ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlOyBcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWVycm9ye1xyXG4gICAgICAgICAgICAgICAgY29sb3IgOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemUgOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LWVycm9ye1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hc3NhZ2UtY2FydHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yIDogI2M0MWIwMDtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgbmFtZSA6ICdjaGFuYWthJyxcclxuICAgICAgICBpdGVtcyA6IFtdLFxyXG4gICAgICAgIHVzZXI6e30sXHJcbiAgICAgICAgdG90YWxwcmljZSA6IDAsXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2VTcGVjaWFsTVNHPSBldnQgPT57XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICAgICAgaXRlbXMuZmluZChmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgIGlmKGUuX2lkID09IGV2dC50YXJnZXQubmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgZS5tc2cgPSBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXRlbXMgOiBpdGVtcyxcclxuXHJcbiAgICAgICAgfSlcclxuICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2VVc2VyRGV0YWlscz0gZXZ0ID0+e1xyXG5cclxuICAgICAgICB2YXIgdXNlciA9IHRoaXMuc3RhdGUudXNlcjtcclxuICAgICAgICAgICAgaWYoZXZ0LnRhcmdldC5uYW1lPT0nY29udGFjdCcpe1xyXG4gICAgICAgICAgICB1c2VyLmNvbnRhY3QgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihldnQudGFyZ2V0Lm5hbWU9PSdhZGRyZXNzJyl7XHJcbiAgICAgICAgICAgICAgICB1c2VyLmFkZHJlc3MgPSBldnQudGFyZ2V0LnZhbHVlIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXIgOiB1c2VyLFxyXG5cclxuICAgICAgICB9KVxyXG4gIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG5cclxuICAgICBcclxuICAgICAgICBmZXRjaChgJHtVcmx9aXRlbWZvcmZhdm9yaXRlP2Zhdj0ke0Nvb2tpZS5nZXRKU09OKCdmYXZlcml0ZS1pdGVtJyl9YClcclxuICAgICAgICAudGhlbihyZXM9PnsgcmV0dXJuIHJlcy5zdGF0dXM9PTIwMD9yZXMuanNvbigpOm51bGx9KVxyXG4gICAgICAgIC50aGVuKGRhdGE9Pnt0aGlzLnNldFN0YXRlKHtpdGVtczpkYXRhfSk7fSlcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXIgOiBDb29raWUuZ2V0SlNPTigndXNlcicpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVPcmRlcihpZCxxdHkpe1xyXG5cclxuICAgICAgICB2YXIgdGVtcGl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zO1xyXG4gICAgICAgIHZhciBpdGVtc0luZGV4ID0gdGVtcGl0ZW0uZmluZEluZGV4KGZ1bmN0aW9uKGMpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiBjLl9pZCA9PSBpZDsgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRlbXBpdGVtW2l0ZW1zSW5kZXhdID0gdGVtcGl0ZW1baXRlbXNJbmRleF0ucXR5P3RlbXBpdGVtW2l0ZW1zSW5kZXhdOnsuLi50ZW1waXRlbVtpdGVtc0luZGV4XSxxdHk6MCxtc2c6Jyd9XHJcbiAgICAgICAgdGVtcGl0ZW1baXRlbXNJbmRleF0ucXR5ID0gdGVtcGl0ZW1baXRlbXNJbmRleF0ucXR5K3F0eTtcclxuXHJcbiAgICAgICAgaWYodGVtcGl0ZW1baXRlbXNJbmRleF0ucXR5Pj0wKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtcyA6IFsuLi50ZW1waXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbHByaWNlIDogdGhpcy5nZXR0b3RhbCh0ZW1waXRlbSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0dG90YWwoaXRlbXMpe1xyXG4gICAgICAgIHZhciB0ZW1wYXJyYXkgPSBpdGVtcztcclxuICAgICAgICB2YXIgdG90YWw9IDA7XHJcbiAgICAgICAgdGVtcGFycmF5LmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIHRvdGFsID0gKGUucXR5PyhlLml0ZW1QcmljZSooMTAwLWUuaXRlbWRpc2NvdW50KS8xMDApKmUucXR5OjApK3RvdGFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgPSBldnQgPT4ge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLnN0YXRlLml0ZW1zLmZpbHRlcihlPT5lLnF0eT4wKTtcclxuICAgICAgICB2YXIgdXNlciAgPSBDb29raWUuZ2V0SlNPTigndXNlcicpO1xyXG4gICAgICAgIHVzZXIuY29udGFjdCA9IHRoaXMuc3RhdGUudXNlci5jb250YWN0O1xyXG4gICAgICAgIHVzZXIuYWRkcmVzcyA9IHRoaXMuc3RhdGUudXNlci5hZGRyZXNzO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2pzb25ib2R5JywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jcmVhdGVvcmRlcicse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSApXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4geyBpZihkYXRhIT11bmRlZmluZWQpe2FsZXJ0KGRhdGEubXNnKTt9fSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuXHJcbiAgICBcclxuICAgIH07XHJcblxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7IFxyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQxIHRvcGljQ29sb3IgbWVudTItdG9waWNcIj57dGhpcy5wcm9wcy50b3BpY308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pdGVtcz8gXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcnRMaXN0IGNvbXBvbmVudERpZE1vdW50PXsoKT0+dGhpcy5jb21wb25lbnREaWRNb3VudCgpfSBjYXRhZ2VyaWVzPXt0aGlzLnN0YXRlLml0ZW1zfSB1cGRhdGVPcmRlcj17KGlkLHF0eSk9PnRoaXMudXBkYXRlT3JkZXIoaWQscXR5KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE9yZGVyU2lkZSAgY2FydEl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSB0b3RhbHByaWNlPXt0aGlzLnN0YXRlLnRvdGFscHJpY2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudG90YWxwcmljZT4wP1xyXG4gICAgICAgICAgICAgICAgICAgIDxTZW5kb3JkZXJTaWRlIHVzZXI9e3RoaXMuc3RhdGUudXNlcn0gaGFuZGxlQ2hhbmdlVXNlckRldGFpbHM9e3RoaXMuaGFuZGxlQ2hhbmdlVXNlckRldGFpbHN9IGNhcnRJdGVtcz17dGhpcy5zdGF0ZS5pdGVtc30gaGFuZGxlQ2hhbmdlU3BlY2lhbE1TRz17dGhpcy5oYW5kbGVDaGFuZ2VTcGVjaWFsTVNHfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPjpudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgOjxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj48aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZSBmb250MiB0b3BpY0NvbG9yXCI+WW91ciBjYXJ0IGlzIGVtcHR5LjwvaDQ+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5jYXJ0LW1lbnV7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luIDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsgXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Cartitem.js */"));
};

const SendorderSide = props => {
  return __jsx("div", {
    className: "jsx-420002085"
  }, __jsx("h4", {
    className: "jsx-420002085" + " " + "font4 fontsizeE1-25 fontcolorSkyblue"
  }, "Your Details"), props.user ? __jsx("div", {
    className: "jsx-420002085" + " " + "user"
  }, __jsx("label", {
    className: "jsx-420002085" + " " + "font2 fontsizeE1 topicColor"
  }, "Hi ", props.user.name), __jsx("div", {
    className: "jsx-420002085" + " " + "field-wrap col-lg-12 col-sm-12"
  }, __jsx("label", {
    className: "jsx-420002085" + " " + "font2 labelf1"
  }, "Contact"), __jsx("input", {
    onChange: props.handleChangeUserDetails,
    name: "contact",
    value: props.user.contact,
    className: "jsx-420002085" + " " + 'font6 inputf1 '
  }), __jsx("span", {
    className: "jsx-420002085" + " " + "form-error"
  }, '')), __jsx("div", {
    className: "jsx-420002085" + " " + "field-wrap col-lg-12 col-sm-12"
  }, __jsx("label", {
    className: "jsx-420002085" + " " + "font2 labelf1"
  }, "Address"), __jsx("input", {
    onChange: props.handleChangeUserDetails,
    name: "address",
    value: props.user.address,
    className: "jsx-420002085" + " " + 'font6 inputf1 '
  }), __jsx("span", {
    className: "jsx-420002085" + " " + "form-error"
  }, '')), __jsx("p", {
    className: "jsx-420002085" + " " + "massage-cart"
  }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["cartUserdetails"])) : __jsx("p", {
    className: "jsx-420002085" + " " + "massage-cart"
  }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["cartUserNotlogin"]), __jsx("h4", {
    className: "jsx-420002085" + " " + "font4 fontsizeE1-25 fontcolorSkyblue"
  }, "Special massage"), __jsx("p", {
    className: "jsx-420002085" + " " + "massage-cart"
  }, _constant_main__WEBPACK_IMPORTED_MODULE_6__["cartitemMSG"]), props.cartItems.map((x, i) => x.qty > 0 ? __jsx("div", {
    key: i,
    className: "jsx-420002085" + " " + "field-wrap col-lg-12 col-sm-12"
  }, __jsx("label", {
    className: "jsx-420002085" + " " + "font2 labelf1"
  }, x.itemlongname), __jsx("textarea", {
    rows: "2",
    required: true,
    name: x._id,
    value: x.msg,
    onChange: props.handleChangeSpecialMSG,
    className: "jsx-420002085" + " " + 'font6 inputf1 '
  }), __jsx("span", {
    className: "jsx-420002085" + " " + "form-error"
  }, '')) : null), __jsx("div", {
    className: "jsx-420002085" + " " + "d-flex justify-content-end"
  }, __jsx("button", {
    type: "button",
    required: true,
    onClick: props.handleSubmit,
    className: "jsx-420002085" + " " + "font6  btn btn-submit "
  }, " Submit ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "420002085"
  }, ".labelf1.jsx-420002085{position:relative;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);left:5px;color:#01567e;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;-webkit-backface-visibility:hidden;pointer-events:none;font-size:18px;}.labelf1.jsx-420002085 .req.jsx-420002085{margin:2px;color:#01567e;}.labelf1.active.jsx-420002085{left:13px;-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);font-size:15px;}.labelf1.active.jsx-420002085 .req.jsx-420002085{opacity:0;}.labelf1.highlight.jsx-420002085{color:#023957;}.inputf1.jsx-420002085{font-size:15px;display:block;width:100%;padding:5px 10px;background:#e9e9e97d;background-image:none;border:none;border:1.5px solid #01567e;color:darkblue;border-radius:0;-webkit-transition:border-color 0.5s ease;transition:border-color 0.5s ease;}.inputf1.jsx-420002085:focus,textarea.jsx-420002085:focus{outline:0;border-color:#023957;}textarea.jsx-420002085{resize:vertical;}.field-wrap.jsx-420002085{position:relative;}.btn-addnewshop.jsx-420002085{background:#01567e;color:white;}.btn-submit.jsx-420002085{background:#01567e;color:white;width:100%;margin-top:3rem;}.form-error.jsx-420002085{color :red;font-size :0.8rem;}.input-error.jsx-420002085{border-color:red;}.massage-cart.jsx-420002085{padding:2px;left:13px;font-size :0.8rem;color :#c41b00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXENhcnRpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlZWSxBQUdtQyxBQVVQLEFBSUQsQUFLQSxBQUdJLEFBR0MsQUFhTCxBQUlNLEFBR0UsQUFJQyxBQUlBLEFBTVIsQUFJTSxBQUdOLFVBbkRnQixBQUsvQixBQW1CeUIsQ0E1QlAsQUFpREksQ0FPUixFQTVDZCxDQUdrQixDQWlCbEIsQ0FxQkEsQ0EvRDhCLEFBOEM5QixDQUdlLEFBSUEsR0FjTyxHQXhEdEIsSUFlZSxBQWtDZixFQXJCQSxBQVdBLEFBSWMsU0EzQk8sQUF5Q0YsRUFiQyxhQWVwQixFQTFDeUIsQ0E0QnpCLG9CQTNCMEIsc0JBQ1YsR0FmRyxLQWROLElBOEJrQixLQTdCYixDQWNsQixhQWI4QixRQTZCWCxlQUNDLGdCQUNrQixxQkE5QkMsbUNBQ2Ysb0JBQ0wsQUE2Qm5CLGVBNUJBIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXENhcnRpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7VXJsLEltYWdlVXJsLGl0ZW1VcmwsY2FydGl0ZW1NU0csY2FydFVzZXJOb3Rsb2dpbixjYXJ0VXNlcmRldGFpbHN9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcblxyXG5cclxuY29uc3QgQ2FydExpc3Q9KHByb3BzKT0+e1xyXG5cclxuICAgY29uc3QgIHVuaXRjb3VudD0oaWQscXR5KT0+e1xyXG4gICAgICBcclxuICAgICAgICBwcm9wcy51cGRhdGVPcmRlcihpZCxxdHkpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVmYXZJdGVtcz0oaXRlbWlkKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBhcnJheSA9IENvb2tpZS5nZXRKU09OKCdmYXZlcml0ZS1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW1pZCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQ29va2llLnNldCgnZmF2ZXJpdGUtaXRlbScsYXJyYXkpO1xyXG4gICAgICAgICAgcHJvcHMuY29tcG9uZW50RGlkTW91bnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTIgcm93IHByb2plY3RzXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3Byb3BzLmNhdGFnZXJpZXMubGVuZ3RoIT0wP3Byb3BzLmNhdGFnZXJpZXMubWFwKChjLGkpPT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY2xvc2UtY2FydGl0ZW1cIiBvbkNsaWNrPXsoKT0+ZGVsZXRlZmF2SXRlbXMoYy5faWQpfSA+eDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMlwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2l0ZW1VcmwrYy51cmxuYW1lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmLWNhcmQtaW1nLXRvcFwiIHNyYz17SW1hZ2VVcmwrYy5pbWFnZXNbMF19Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj57Yy5pdGVtbG9uZ25hbWV9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICA8YT57Yy5jYXRlZ2VyeX0gLSB7Yy5zdWJjYXRlZ2VyeX08L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT5Scy57Yy5pdGVtUHJpY2V9LjAwPC9zdHJpa2U+ICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4ge2MuaXRlbWRpc2NvdW50fSUgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy57Yy5pdGVtUHJpY2UqKDEwMC1jLml0ZW1kaXNjb3VudCkvMTAwfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICB7Yy5jb250ZW50MS5zbGljZSgwLDE1MCl9Li4uXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBmbG9hdC1sZWZ0XCI+MjAyMC8yNS81PC9zbWFsbD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBmbG9hdC1yaWdodFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtIGZsb2F0LXJpZ2h0XCIgaWQ9eyd1bml0Y291bnQtJytjLmlkfSBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgPntjLnF0eT9jLnF0eTowfTwvYnV0dG9uPiAgICAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT51bml0Y291bnQoYy5faWQsLTEpfSAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvc29ydC1kb3duLnBuZ1wiLz4mbmJzcDs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+dW5pdGNvdW50KGMuX2lkLDEpfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmxvYXQtcmlnaHRcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9zb3J0LXVwLnBuZ1wiLz4mbmJzcDs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+dW5pdGNvdW50KGMuX2lkLDEwKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCI+KzEwPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTo8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPkxvYWRpbmcuLi48L2g0PjwvZGl2Pn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICAgICAgICAgICAgICAgYC51bml0Y291bnQtdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUyLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAwLjVlbSAwIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3B1cC1jbG9zZS1jYXJ0aXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxNTY3ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mLWNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW52ZXJzZSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy40O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE9yZGVyU2lkZT0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcnNpZGVcIiA+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTEtNSBmb250Y29sb3JTa3libHVlXCI+TXkgT3JkZXIgQmlsbDwvaDQ+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb250c2l6ZUUtOFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICA8dGFibGUgc3VtbWFyeT1cIlRoaXMgdGFibGUgc2hvd3MgaG93IHRvIGNyZWF0ZSByZXNwb25zaXZlIHRhYmxlcyB1c2luZyBCb290c3RyYXAncyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHlcIiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgPGNhcHRpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BbiBleGFtcGxlIG9mIGEgcmVzcG9uc2l2ZSB0YWJsZSBiYXNlZCBvbiA8L2NhcHRpb24+XHJcbiAgICAgICAgICA8dGhlYWQgPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiIGZvbnRjb2xvck9yYW5nZVwiPlxyXG4gICAgICAgICAgICAgIDx0aD5JdGVtIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5jYXRhZ2VyeTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkRpc2NvdW50PC90aD5cclxuICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250Y29sb3JwaW5rXCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keSA+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmNhcnRJdGVtcy5tYXAoKGMsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgIChjLnF0eSA+IDApP1xyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSAgY2xhc3NOYW1lPVwic3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2MuaXRlbWxvbmduYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Yy5jYXRlZ2VyeX0te2Muc3ViY2F0ZWdlcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjLml0ZW1kaXNjb3VudH0lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPiA8c3RyaWtlPlJzLntjLml0ZW1QcmljZX08L3N0cmlrZT4gUnMue2MuaXRlbVByaWNlKigxMDAtYy5pdGVtZGlzY291bnQpLzEwMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2MucXR5P2MucXR5OjB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnRjb2xvcnBpbmtcIj5Scy57KGMuaXRlbVByaWNlKigxMDAtYy5pdGVtZGlzY291bnQpLzEwMCkqKGMucXR5P2MucXR5OjApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Zb3VyIFRvdGFsIHByaWNlIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnRjb2xvcnJlZFwiPlJzLntwcm9wcy50b3RhbHByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLm9yZGVyc2lkZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTZW5kb3JkZXJTaWRlPShwcm9wcyk9PntcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS0yNSBmb250Y29sb3JTa3libHVlXCI+WW91ciBEZXRhaWxzPC9oND5cclxuICAgICAgICB7cHJvcHMudXNlcj9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGZvbnRzaXplRTEgdG9waWNDb2xvclwiPkhpIHtwcm9wcy51c2VyLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGxhYmVsZjFcIj5Db250YWN0PC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJ30gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzfSAgbmFtZT0nY29udGFjdCcgdmFsdWU9e3Byb3BzLnVzZXIuY29udGFjdH0gIC8+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Jyd9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnfSAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzfSAgbmFtZT0nYWRkcmVzcycgdmFsdWU9e3Byb3BzLnVzZXIuYWRkcmVzc30gIC8+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Jyd9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hc3NhZ2UtY2FydFwiPlxyXG4gICAgICAgICAgICB7Y2FydFVzZXJkZXRhaWxzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj46PHAgY2xhc3NOYW1lPVwibWFzc2FnZS1jYXJ0XCI+XHJcbiAgICAgICAgICAgIHtjYXJ0VXNlck5vdGxvZ2lufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICB9XHJcbiAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250NCBmb250c2l6ZUUxLTI1IGZvbnRjb2xvclNreWJsdWVcIj5TcGVjaWFsIG1hc3NhZ2U8L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hc3NhZ2UtY2FydFwiPntjYXJ0aXRlbU1TR308L3A+XHJcbiAgICAgICAge3Byb3BzLmNhcnRJdGVtcy5tYXAoKHgsaSk9PlxyXG4gICAgICAgICh4LnF0eSA+IDApP1xyXG4gICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPnt4Lml0ZW1sb25nbmFtZX08L2xhYmVsPlxyXG4gICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnfSAgcm93cz1cIjJcIiByZXF1aXJlZCAgbmFtZT17eC5faWR9IHZhbHVlPXt4Lm1zZ30gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVNwZWNpYWxNU0d9IC8+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Jyd9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj46bnVsbCAgXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZm9udDYgIGJ0biBidG4tc3VibWl0IFwiICByZXF1aXJlZCAgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fSA+IFN1Ym1pdCA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAubGFiZWxmMSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbGYxIC5yZXEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxNTY3ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWxmMS5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTNweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWxmMS5hY3RpdmUgLnJlcSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbGYxLmhpZ2hsaWdodCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAyMzk1NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRmMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5N2Q7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0ZjE6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMjM5NTc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmllbGQtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkbmV3c2hvcHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1zdWJtaXR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tZXJyb3J7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXQtZXJyb3J7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFzc2FnZS1jYXJ0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplIDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgOiAjYzQxYjAwO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBuYW1lIDogJ2NoYW5ha2EnLFxyXG4gICAgICAgIGl0ZW1zIDogW10sXHJcbiAgICAgICAgdXNlcjp7fSxcclxuICAgICAgICB0b3RhbHByaWNlIDogMCxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZVNwZWNpYWxNU0c9IGV2dCA9PntcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgICAgICBpdGVtcy5maW5kKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgaWYoZS5faWQgPT0gZXZ0LnRhcmdldC5uYW1lKXtcclxuICAgICAgICAgICAgICAgICBlLm1zZyA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpdGVtcyA6IGl0ZW1zLFxyXG5cclxuICAgICAgICB9KVxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzPSBldnQgPT57XHJcblxyXG4gICAgICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xyXG4gICAgICAgICAgICBpZihldnQudGFyZ2V0Lm5hbWU9PSdjb250YWN0Jyl7XHJcbiAgICAgICAgICAgIHVzZXIuY29udGFjdCA9IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGV2dC50YXJnZXQubmFtZT09J2FkZHJlc3MnKXtcclxuICAgICAgICAgICAgICAgIHVzZXIuYWRkcmVzcyA9IGV2dC50YXJnZXQudmFsdWUgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlciA6IHVzZXIsXHJcblxyXG4gICAgICAgIH0pXHJcbiAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcblxyXG4gICAgIFxyXG4gICAgICAgIGZldGNoKGAke1VybH1pdGVtZm9yZmF2b3JpdGU/ZmF2PSR7Q29va2llLmdldEpTT04oJ2ZhdmVyaXRlLWl0ZW0nKX1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+eyByZXR1cm4gcmVzLnN0YXR1cz09MjAwP3Jlcy5qc29uKCk6bnVsbH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+e3RoaXMuc2V0U3RhdGUoe2l0ZW1zOmRhdGF9KTt9KVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlciA6IENvb2tpZS5nZXRKU09OKCd1c2VyJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9yZGVyKGlkLHF0eSl7XHJcblxyXG4gICAgICAgIHZhciB0ZW1waXRlbSA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICAgICAgdmFyIGl0ZW1zSW5kZXggPSB0ZW1waXRlbS5maW5kSW5kZXgoZnVuY3Rpb24oYykgeyBcclxuICAgICAgICAgICAgcmV0dXJuIGMuX2lkID09IGlkOyBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVtcGl0ZW1baXRlbXNJbmRleF0gPSB0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHk/dGVtcGl0ZW1baXRlbXNJbmRleF06ey4uLnRlbXBpdGVtW2l0ZW1zSW5kZXhdLHF0eTowLG1zZzonJ31cclxuICAgICAgICB0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHkgPSB0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHkrcXR5O1xyXG5cclxuICAgICAgICBpZih0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHk+PTApe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zIDogWy4uLnRlbXBpdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFscHJpY2UgOiB0aGlzLmdldHRvdGFsKHRlbXBpdGVtKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXR0b3RhbChpdGVtcyl7XHJcbiAgICAgICAgdmFyIHRlbXBhcnJheSA9IGl0ZW1zO1xyXG4gICAgICAgIHZhciB0b3RhbD0gMDtcclxuICAgICAgICB0ZW1wYXJyYXkuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdG90YWwgPSAoZS5xdHk/KGUuaXRlbVByaWNlKigxMDAtZS5pdGVtZGlzY291bnQpLzEwMCkqZS5xdHk6MCkrdG90YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCA9IGV2dCA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGU9PmUucXR5PjApO1xyXG4gICAgICAgIHZhciB1c2VyICA9IENvb2tpZS5nZXRKU09OKCd1c2VyJyk7XHJcbiAgICAgICAgdXNlci5jb250YWN0ID0gdGhpcy5zdGF0ZS51c2VyLmNvbnRhY3Q7XHJcbiAgICAgICAgdXNlci5hZGRyZXNzID0gdGhpcy5zdGF0ZS51c2VyLmFkZHJlc3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NyZWF0ZW9yZGVyJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDb2xvciBtZW51Mi10b3BpY1wiPnt0aGlzLnByb3BzLnRvcGljfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1zPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FydExpc3QgY29tcG9uZW50RGlkTW91bnQ9eygpPT50aGlzLmNvbXBvbmVudERpZE1vdW50KCl9IGNhdGFnZXJpZXM9e3RoaXMuc3RhdGUuaXRlbXN9IHVwZGF0ZU9yZGVyPXsoaWQscXR5KT0+dGhpcy51cGRhdGVPcmRlcihpZCxxdHkpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8T3JkZXJTaWRlICBjYXJ0SXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IHRvdGFscHJpY2U9e3RoaXMuc3RhdGUudG90YWxwcmljZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b3RhbHByaWNlPjA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbmRvcmRlclNpZGUgdXNlcj17dGhpcy5zdGF0ZS51c2VyfSBoYW5kbGVDaGFuZ2VVc2VyRGV0YWlscz17dGhpcy5oYW5kbGVDaGFuZ2VVc2VyRGV0YWlsc30gY2FydEl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSBoYW5kbGVDaGFuZ2VTcGVjaWFsTVNHPXt0aGlzLmhhbmRsZUNoYW5nZVNwZWNpYWxNU0d9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+Om51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPjxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj5Zb3VyIGNhcnQgaXMgZW1wdHkuPC9oND48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmNhcnQtbWVudXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Cartitem.js */"));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      name: 'chanaka',
      items: [],
      user: {},
      totalprice: 0
    });

    _defineProperty(this, "handleChangeSpecialMSG", evt => {
      var items = this.state.items;
      items.find(function (e) {
        if (e._id == evt.target.name) {
          e.msg = evt.target.value;
        }
      });
      this.setState({
        items: items
      });
    });

    _defineProperty(this, "handleChangeUserDetails", evt => {
      var user = this.state.user;

      if (evt.target.name == 'contact') {
        user.contact = evt.target.value;
      } else if (evt.target.name == 'address') {
        user.address = evt.target.value;
      }

      this.setState({
        user: user
      });
    });

    _defineProperty(this, "handleSubmit", evt => {
      evt.preventDefault();
      var items = this.state.items.filter(e => e.qty > 0);
      var user = js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('user');
      user.contact = this.state.user.contact;
      user.address = this.state.user.address;
      const data = new FormData();
      data.append('jsonbody', JSON.stringify(items));
      data.append('user', JSON.stringify(user));
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('/api/createorder', {
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
    });
  }

  componentDidMount() {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(`${_constant_main__WEBPACK_IMPORTED_MODULE_6__["Url"]}itemforfavorite?fav=${js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('faverite-item')}`).then(res => {
      return res.status == 200 ? res.json() : null;
    }).then(data => {
      this.setState({
        items: data
      });
    });
    this.setState({
      user: js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.getJSON('user')
    });
  }

  updateOrder(id, qty) {
    var tempitem = this.state.items;
    var itemsIndex = tempitem.findIndex(function (c) {
      return c._id == id;
    });
    tempitem[itemsIndex] = tempitem[itemsIndex].qty ? tempitem[itemsIndex] : _objectSpread({}, tempitem[itemsIndex], {
      qty: 0,
      msg: ''
    });
    tempitem[itemsIndex].qty = tempitem[itemsIndex].qty + qty;

    if (tempitem[itemsIndex].qty >= 0) {
      this.setState({
        items: [...tempitem],
        totalprice: this.gettotal(tempitem)
      });
    }
  }

  gettotal(items) {
    var temparray = items;
    var total = 0;
    temparray.forEach(e => {
      total = (e.qty ? e.itemPrice * (100 - e.itemdiscount) / 100 * e.qty : 0) + total;
    });
    return total;
  }

  render() {
    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
      className: "jsx-2163379266" + " " + "cart-menu"
    }, __jsx("div", {
      className: "jsx-2163379266"
    }, __jsx("h2", {
      className: "jsx-2163379266" + " " + "font1 topicColor menu2-topic"
    }, this.props.topic)), this.state.items ? __jsx("div", {
      className: "jsx-2163379266" + " " + "row"
    }, __jsx("div", {
      className: "jsx-2163379266" + " " + "col-lg-6 col-sm-12"
    }, __jsx(CartList, {
      componentDidMount: () => this.componentDidMount(),
      catageries: this.state.items,
      updateOrder: (id, qty) => this.updateOrder(id, qty)
    })), __jsx("div", {
      className: "jsx-2163379266" + " " + "col-lg-6 col-sm-12"
    }, __jsx(OrderSide, {
      cartItems: this.state.items,
      totalprice: this.state.totalprice
    }), this.state.totalprice > 0 ? __jsx(SendorderSide, {
      user: this.state.user,
      handleChangeUserDetails: this.handleChangeUserDetails,
      cartItems: this.state.items,
      handleChangeSpecialMSG: this.handleChangeSpecialMSG,
      handleSubmit: this.handleSubmit
    }) : null)) : __jsx("div", {
      className: "jsx-2163379266" + " " + "d-flex justify-content-center"
    }, __jsx("h4", {
      className: "jsx-2163379266" + " " + "card-title font2 topicColor"
    }, "Your cart is empty."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2163379266"
    }, ".cart-menu.jsx-2163379266{margin :20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXENhcnRpdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBtQmlCLEFBR2tDLGFBQ2pCIiwiZmlsZSI6IkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXGNvbXBvbmVudHNcXENhcnRpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCB7VXJsLEltYWdlVXJsLGl0ZW1VcmwsY2FydGl0ZW1NU0csY2FydFVzZXJOb3Rsb2dpbixjYXJ0VXNlcmRldGFpbHN9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcblxyXG5cclxuY29uc3QgQ2FydExpc3Q9KHByb3BzKT0+e1xyXG5cclxuICAgY29uc3QgIHVuaXRjb3VudD0oaWQscXR5KT0+e1xyXG4gICAgICBcclxuICAgICAgICBwcm9wcy51cGRhdGVPcmRlcihpZCxxdHkpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxldGVmYXZJdGVtcz0oaXRlbWlkKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBhcnJheSA9IENvb2tpZS5nZXRKU09OKCdmYXZlcml0ZS1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW1pZCk7XHJcbiAgICAgIFxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQ29va2llLnNldCgnZmF2ZXJpdGUtaXRlbScsYXJyYXkpO1xyXG4gICAgICAgICAgcHJvcHMuY29tcG9uZW50RGlkTW91bnQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudTIgcm93IHByb2plY3RzXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3Byb3BzLmNhdGFnZXJpZXMubGVuZ3RoIT0wP3Byb3BzLmNhdGFnZXJpZXMubWFwKChjLGkpPT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY2xvc2UtY2FydGl0ZW1cIiBvbkNsaWNrPXsoKT0+ZGVsZXRlZmF2SXRlbXMoYy5faWQpfSA+eDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMlwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2l0ZW1VcmwrYy51cmxuYW1lfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmLWNhcmQtaW1nLXRvcFwiIHNyYz17SW1hZ2VVcmwrYy5pbWFnZXNbMF19Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOVwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj57Yy5pdGVtbG9uZ25hbWV9PC9oND5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGEgZm9udDYgc3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICA8YT57Yy5jYXRlZ2VyeX0gLSB7Yy5zdWJjYXRlZ2VyeX08L2E+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsb2F0LXJpZ2h0XCI+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJY3V0cHJpc2UgZm9udDZcIj4gPHN0cmlrZT5Scy57Yy5pdGVtUHJpY2V9LjAwPC9zdHJpa2U+ICA8L2E+IFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJZGlzY291bnQgZm9udDZcIj4ge2MuaXRlbWRpc2NvdW50fSUgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJJcHJpc2UgZm9udDZcIj4mbmJzcDtScy57Yy5pdGVtUHJpY2UqKDEwMC1jLml0ZW1kaXNjb3VudCkvMTAwfTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHQgZm9udDZcIj5cclxuICAgICAgICB7Yy5jb250ZW50MS5zbGljZSgwLDE1MCl9Li4uXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmb250MyBmbG9hdC1sZWZ0XCI+MjAyMC8yNS81PC9zbWFsbD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBmbG9hdC1yaWdodFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtIGZsb2F0LXJpZ2h0XCIgaWQ9eyd1bml0Y291bnQtJytjLmlkfSBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgPntjLnF0eT9jLnF0eTowfTwvYnV0dG9uPiAgICAgIFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpPT51bml0Y291bnQoYy5faWQsLTEpfSAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvc29ydC1kb3duLnBuZ1wiLz4mbmJzcDs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+dW5pdGNvdW50KGMuX2lkLDEpfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmxvYXQtcmlnaHRcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9zb3J0LXVwLnBuZ1wiLz4mbmJzcDs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKT0+dW5pdGNvdW50KGMuX2lkLDEwKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZsb2F0LXJpZ2h0XCI+KzEwPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbjwvZGl2PiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTo8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+PGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgZm9udDIgdG9waWNDb2xvclwiPkxvYWRpbmcuLi48L2g0PjwvZGl2Pn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57XHJcbiAgICAgICAgICAgICAgICAgICAgYC51bml0Y291bnQtdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUyLXRvcGlje1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nIDogMjBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAwLjVlbSAwIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgzNCwgMzYsIDM4LCAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wb3B1cC1jbG9zZS1jYXJ0aXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxNTY3ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mLWNhcmQtaW1nLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yODU3MTQyOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yODU3ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplIDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtIDAuNzVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjA1KSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtaW52ZXJzZSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1hdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAucHJvZmlsZS1pbmxpbmUgfiAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5tZXRhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubWV0YSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkljdXRwcmlzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5JZGlzY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuSXByaXNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuNHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcm9qZWN0cyBkaXY6bnRoLW9mLXR5cGUoOCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuMHM7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByb2plY3RzIGRpdjpudGgtb2YtdHlwZSg5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi40cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi42cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4wcztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy4ycztcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJvamVjdHMgZGl2Om50aC1vZi10eXBlKDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMy40O1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE9yZGVyU2lkZT0ocHJvcHMpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlcnNpZGVcIiA+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQ0IGZvbnRzaXplRTEtNSBmb250Y29sb3JTa3libHVlXCI+TXkgT3JkZXIgQmlsbDwvaDQ+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb250c2l6ZUUtOFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICA8dGFibGUgc3VtbWFyeT1cIlRoaXMgdGFibGUgc2hvd3MgaG93IHRvIGNyZWF0ZSByZXNwb25zaXZlIHRhYmxlcyB1c2luZyBCb290c3RyYXAncyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHlcIiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgPGNhcHRpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BbiBleGFtcGxlIG9mIGEgcmVzcG9uc2l2ZSB0YWJsZSBiYXNlZCBvbiA8L2NhcHRpb24+XHJcbiAgICAgICAgICA8dGhlYWQgPlxyXG4gICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiIGZvbnRjb2xvck9yYW5nZVwiPlxyXG4gICAgICAgICAgICAgIDx0aD5JdGVtIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5jYXRhZ2VyeTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkRpc2NvdW50PC90aD5cclxuICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJmb250Y29sb3JwaW5rXCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keSA+XHJcbiAgICAgICAgICAgICAge3Byb3BzLmNhcnRJdGVtcy5tYXAoKGMsaSk9PlxyXG4gICAgICAgICAgICAgICAgICAgIChjLnF0eSA+IDApP1xyXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSAgY2xhc3NOYW1lPVwic3VidG9waWNDb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2MuaXRlbWxvbmduYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57Yy5jYXRlZ2VyeX0te2Muc3ViY2F0ZWdlcnl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntjLml0ZW1kaXNjb3VudH0lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPiA8c3RyaWtlPlJzLntjLml0ZW1QcmljZX08L3N0cmlrZT4gUnMue2MuaXRlbVByaWNlKigxMDAtYy5pdGVtZGlzY291bnQpLzEwMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+e2MucXR5P2MucXR5OjB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnRjb2xvcnBpbmtcIj5Scy57KGMuaXRlbVByaWNlKigxMDAtYy5pdGVtZGlzY291bnQpLzEwMCkqKGMucXR5P2MucXR5OjApfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbFNwYW49XCI1XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Zb3VyIFRvdGFsIHByaWNlIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImZvbnRjb2xvcnJlZFwiPlJzLntwcm9wcy50b3RhbHByaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLm9yZGVyc2lkZSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTZW5kb3JkZXJTaWRlPShwcm9wcyk9PntcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udDQgZm9udHNpemVFMS0yNSBmb250Y29sb3JTa3libHVlXCI+WW91ciBEZXRhaWxzPC9oND5cclxuICAgICAgICB7cHJvcHMudXNlcj9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGZvbnRzaXplRTEgdG9waWNDb2xvclwiPkhpIHtwcm9wcy51c2VyLm5hbWV9PC9sYWJlbD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXdyYXAgY29sLWxnLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImZvbnQyIGxhYmVsZjFcIj5Db250YWN0PC9sYWJlbD5cclxuICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17J2ZvbnQ2IGlucHV0ZjEgJ30gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzfSAgbmFtZT0nY29udGFjdCcgdmFsdWU9e3Byb3BzLnVzZXIuY29udGFjdH0gIC8+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Jyd9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnfSAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzfSAgbmFtZT0nYWRkcmVzcycgdmFsdWU9e3Byb3BzLnVzZXIuYWRkcmVzc30gIC8+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Jyd9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hc3NhZ2UtY2FydFwiPlxyXG4gICAgICAgICAgICB7Y2FydFVzZXJkZXRhaWxzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj46PHAgY2xhc3NOYW1lPVwibWFzc2FnZS1jYXJ0XCI+XHJcbiAgICAgICAgICAgIHtjYXJ0VXNlck5vdGxvZ2lufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICB9XHJcbiAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250NCBmb250c2l6ZUUxLTI1IGZvbnRjb2xvclNreWJsdWVcIj5TcGVjaWFsIG1hc3NhZ2U8L2g0PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hc3NhZ2UtY2FydFwiPntjYXJ0aXRlbU1TR308L3A+XHJcbiAgICAgICAge3Byb3BzLmNhcnRJdGVtcy5tYXAoKHgsaSk9PlxyXG4gICAgICAgICh4LnF0eSA+IDApP1xyXG4gICAgICAgIFxyXG4gICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmllbGQtd3JhcCBjb2wtbGctMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiZm9udDIgbGFiZWxmMVwiPnt4Lml0ZW1sb25nbmFtZX08L2xhYmVsPlxyXG4gICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXsnZm9udDYgaW5wdXRmMSAnfSAgcm93cz1cIjJcIiByZXF1aXJlZCAgbmFtZT17eC5faWR9IHZhbHVlPXt4Lm1zZ30gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZVNwZWNpYWxNU0d9IC8+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj57Jyd9PC9zcGFuPlxyXG4gICAgICAgICA8L2Rpdj46bnVsbCAgXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiZm9udDYgIGJ0biBidG4tc3VibWl0IFwiICByZXF1aXJlZCAgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0fSA+IFN1Ym1pdCA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAubGFiZWxmMSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbGYxIC5yZXEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxNTY3ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWxmMS5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTNweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGFiZWxmMS5hY3RpdmUgLnJlcSB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sYWJlbGYxLmhpZ2hsaWdodCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAyMzk1NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRmMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5N2Q7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGRhcmtibHVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0ZjE6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMjM5NTc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmllbGQtd3JhcCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4tYWRkbmV3c2hvcHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMTU2N2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1zdWJtaXR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDE1NjdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvcm0tZXJyb3J7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSA6IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXQtZXJyb3J7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWFzc2FnZS1jYXJ0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplIDogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgOiAjYzQxYjAwO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBuYW1lIDogJ2NoYW5ha2EnLFxyXG4gICAgICAgIGl0ZW1zIDogW10sXHJcbiAgICAgICAgdXNlcjp7fSxcclxuICAgICAgICB0b3RhbHByaWNlIDogMCxcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZVNwZWNpYWxNU0c9IGV2dCA9PntcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5zdGF0ZS5pdGVtcztcclxuICAgICAgICBpdGVtcy5maW5kKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgaWYoZS5faWQgPT0gZXZ0LnRhcmdldC5uYW1lKXtcclxuICAgICAgICAgICAgICAgICBlLm1zZyA9IGV2dC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpdGVtcyA6IGl0ZW1zLFxyXG5cclxuICAgICAgICB9KVxyXG4gIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZVVzZXJEZXRhaWxzPSBldnQgPT57XHJcblxyXG4gICAgICAgIHZhciB1c2VyID0gdGhpcy5zdGF0ZS51c2VyO1xyXG4gICAgICAgICAgICBpZihldnQudGFyZ2V0Lm5hbWU9PSdjb250YWN0Jyl7XHJcbiAgICAgICAgICAgIHVzZXIuY29udGFjdCA9IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKGV2dC50YXJnZXQubmFtZT09J2FkZHJlc3MnKXtcclxuICAgICAgICAgICAgICAgIHVzZXIuYWRkcmVzcyA9IGV2dC50YXJnZXQudmFsdWUgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlciA6IHVzZXIsXHJcblxyXG4gICAgICAgIH0pXHJcbiAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcblxyXG4gICAgIFxyXG4gICAgICAgIGZldGNoKGAke1VybH1pdGVtZm9yZmF2b3JpdGU/ZmF2PSR7Q29va2llLmdldEpTT04oJ2ZhdmVyaXRlLWl0ZW0nKX1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+eyByZXR1cm4gcmVzLnN0YXR1cz09MjAwP3Jlcy5qc29uKCk6bnVsbH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YT0+e3RoaXMuc2V0U3RhdGUoe2l0ZW1zOmRhdGF9KTt9KVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlciA6IENvb2tpZS5nZXRKU09OKCd1c2VyJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU9yZGVyKGlkLHF0eSl7XHJcblxyXG4gICAgICAgIHZhciB0ZW1waXRlbSA9IHRoaXMuc3RhdGUuaXRlbXM7XHJcbiAgICAgICAgdmFyIGl0ZW1zSW5kZXggPSB0ZW1waXRlbS5maW5kSW5kZXgoZnVuY3Rpb24oYykgeyBcclxuICAgICAgICAgICAgcmV0dXJuIGMuX2lkID09IGlkOyBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVtcGl0ZW1baXRlbXNJbmRleF0gPSB0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHk/dGVtcGl0ZW1baXRlbXNJbmRleF06ey4uLnRlbXBpdGVtW2l0ZW1zSW5kZXhdLHF0eTowLG1zZzonJ31cclxuICAgICAgICB0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHkgPSB0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHkrcXR5O1xyXG5cclxuICAgICAgICBpZih0ZW1waXRlbVtpdGVtc0luZGV4XS5xdHk+PTApe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zIDogWy4uLnRlbXBpdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFscHJpY2UgOiB0aGlzLmdldHRvdGFsKHRlbXBpdGVtKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXR0b3RhbChpdGVtcyl7XHJcbiAgICAgICAgdmFyIHRlbXBhcnJheSA9IGl0ZW1zO1xyXG4gICAgICAgIHZhciB0b3RhbD0gMDtcclxuICAgICAgICB0ZW1wYXJyYXkuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgdG90YWwgPSAoZS5xdHk/KGUuaXRlbVByaWNlKigxMDAtZS5pdGVtZGlzY291bnQpLzEwMCkqZS5xdHk6MCkrdG90YWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCA9IGV2dCA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuc3RhdGUuaXRlbXMuZmlsdGVyKGU9PmUucXR5PjApO1xyXG4gICAgICAgIHZhciB1c2VyICA9IENvb2tpZS5nZXRKU09OKCd1c2VyJyk7XHJcbiAgICAgICAgdXNlci5jb250YWN0ID0gdGhpcy5zdGF0ZS51c2VyLmNvbnRhY3Q7XHJcbiAgICAgICAgdXNlci5hZGRyZXNzID0gdGhpcy5zdGF0ZS51c2VyLmFkZHJlc3M7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnanNvbmJvZHknLCBKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NyZWF0ZW9yZGVyJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OmRhdGFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9IClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7IGlmKGRhdGEhPXVuZGVmaW5lZCl7YWxlcnQoZGF0YS5tc2cpO319KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG5cclxuICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBcclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udDEgdG9waWNDb2xvciBtZW51Mi10b3BpY1wiPnt0aGlzLnByb3BzLnRvcGljfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1zPyBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FydExpc3QgY29tcG9uZW50RGlkTW91bnQ9eygpPT50aGlzLmNvbXBvbmVudERpZE1vdW50KCl9IGNhdGFnZXJpZXM9e3RoaXMuc3RhdGUuaXRlbXN9IHVwZGF0ZU9yZGVyPXsoaWQscXR5KT0+dGhpcy51cGRhdGVPcmRlcihpZCxxdHkpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8T3JkZXJTaWRlICBjYXJ0SXRlbXM9e3RoaXMuc3RhdGUuaXRlbXN9IHRvdGFscHJpY2U9e3RoaXMuc3RhdGUudG90YWxwcmljZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50b3RhbHByaWNlPjA/XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbmRvcmRlclNpZGUgdXNlcj17dGhpcy5zdGF0ZS51c2VyfSBoYW5kbGVDaGFuZ2VVc2VyRGV0YWlscz17dGhpcy5oYW5kbGVDaGFuZ2VVc2VyRGV0YWlsc30gY2FydEl0ZW1zPXt0aGlzLnN0YXRlLml0ZW1zfSBoYW5kbGVDaGFuZ2VTcGVjaWFsTVNHPXt0aGlzLmhhbmRsZUNoYW5nZVNwZWNpYWxNU0d9IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IC8+Om51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA6PGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPjxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIGZvbnQyIHRvcGljQ29sb3JcIj5Zb3VyIGNhcnQgaXMgZW1wdHkuPC9oND48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmNhcnQtbWVudXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4gOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyBcclxuIl19 */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\components\\\\Cartitem.js */"));
  }

}

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

/***/ "./pages/myorder.js":
/*!**************************!*\
  !*** ./pages/myorder.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/MainLayout */ "./layouts/MainLayout.js");
/* harmony import */ var _components_Cartitem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cartitem */ "./components/Cartitem.js");
/* harmony import */ var _layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/SubNavbar */ "./layouts/SubNavbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constant_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../constant/main */ "./constant/main.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








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
  }, "User details"))), __jsx("tbody", {
    className: "jsx-1722122627"
  }, props.orders.map((x, i) => __jsx("tr", {
    key: i,
    className: "jsx-1722122627"
  }, __jsx("th", {
    className: "jsx-1722122627"
  }, __jsx("div", {
    className: "jsx-1722122627"
  }, __jsx("img", {
    width: "50px",
    src: _constant_main__WEBPACK_IMPORTED_MODULE_7__["ImageUrl"] + x.item.images[0],
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
  }, " ", x.user.email, " - ", x.user.contact, " "))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1722122627"
  }, ".order-table.jsx-1722122627{overflow :auto;}.item-details.jsx-1722122627 p.jsx-1722122627{margin-top:0;margin-bottom:0;}.item-details.jsx-1722122627 img.jsx-1722122627{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxXZWItcHJvamVjdFxcbXlhcHBcXHBhZ2VzXFxteW9yZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFRyxBQUdvQixBQUdGLEFBSUUsYUFIQyxFQUhsQixBQU9BLGNBSEEiLCJmaWxlIjoiRDpcXFdlYi1wcm9qZWN0XFxteWFwcFxccGFnZXNcXG15b3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCBDYXJ0aXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0NhcnRpdGVtJztcclxuaW1wb3J0IFN1Yk5hdkJhciBmcm9tICcuLi9sYXlvdXRzL1N1Yk5hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHtVcmwsSW1hZ2VVcmx9IGZyb20gJy4vLi4vY29uc3RhbnQvbWFpbic7XHJcblxyXG5jb25zdCBPcmRlclRhYmxlPShwcm9wcyk9PntcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci10YWJsZVwiPlxyXG5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc20gY29sLTEyXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywnYWxsJyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjAvZmZmZmZmL3Nob3ctYWxsLXZpZXdzLnBuZ1wiLz4gQWxsPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ25ldycpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi9uZXcucG5nXCIvPiBuZXc8L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywnbWFpbCcpfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi91cGxvYWQtbWFpbC5wbmdcIi8+IGVtYWlsPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmdldG9yZGVyYnlzdGF0ZS5iaW5kKHRoaXMsJ2NvbmZpcm0nKX0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yMC9mZmZmZmYvY2hlY2tlZC1jaGVja2JveC5wbmdcIi8+IGNvbmZpcm08L2J1dHRvbj5cclxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ2V0b3JkZXJieXN0YXRlLmJpbmQodGhpcywncmVtb3ZlJyl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPiA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzIwL2ZmZmZmZi90cmFzaC5wbmdcIi8+IHJlbW92ZXM8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cclxuICAgIDx0aGVhZD5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+c3RhdGU8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkl0ZW0gRGV0YWlsczwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJpY2U8L3RoPlxyXG4gICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlVzZXIgZGV0YWlsczwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG4gICAgPHRib2R5PlxyXG4gIFxyXG4gIHtwcm9wcy5vcmRlcnMubWFwKCh4LGkpPT5cclxuICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgIDx0aD48ZGl2PjxpbWcgd2lkdGg9XCI1MHB4XCIgc3JjPXtJbWFnZVVybCt4Lml0ZW0uaW1hZ2VzWzBdfSAvPlxyXG4gICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udHNpemVFLThcIj57eC5jcmVhdGVEYXRlfTwvcD5cclxuICAgICAgIDwvZGl2PiA8L3RoPlxyXG4gICAgICA8dGQ+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPnt4LnN0YXRlfSA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy51cGRhdGVvcmRlci5iaW5kKHRoaXMseC5faWQsJ25ldycpfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy8yNS8wMDAwMDAvbmV3LnBuZ1wiLz4gXHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy51cGRhdGVvcmRlci5iaW5kKHRoaXMseC5faWQsJ21haWwnKX0gc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvMDAwMDAwL3VwbG9hZC1tYWlsLnBuZ1wiLz4gXHJcbiAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtwcm9wcy51cGRhdGVvcmRlci5iaW5kKHRoaXMseC5faWQsJ2NvbmZpcm0nKX0gc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvMDAwMDAwL2NoZWNrZWQtY2hlY2tib3gucG5nXCIvPlxyXG4gICAgICAgICAgICAgIDxpbWcgb25DbGljaz17cHJvcHMudXBkYXRlb3JkZXIuYmluZCh0aGlzLHguX2lkLCdyZW1vdmUnKX0gc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9pb3MvMjUvMDAwMDAwL3RyYXNoLnBuZ1wiLz4gPC9wPlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+IFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZm9udDZcIj4gXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPnt4Lml0ZW0uaXRlbWxvbmduYW1lfSA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+e3guaXRlbS5jYXRlZ2VyeX0ve3guaXRlbS5zdWJjYXRlZ2VyeX0gPC9wPlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tZGV0YWlscyBmb250NlwiPiBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRvcGljQ29sb3JcIj5Scy57eC5pdGVtLml0ZW1QcmljZSooMTAwLXguaXRlbS5pdGVtZGlzY291bnQpLzEwMH0geCB7eC5pdGVtLnF0eX0gPSBScy57eC5pdGVtLml0ZW1QcmljZSooMTAwLXguaXRlbS5pdGVtZGlzY291bnQpLzEwMCp4Lml0ZW0ucXR5fSA8L3A+XHJcbiAgICAgICAgICA8cCA+IDxzdHJpa2UgY2xhc3NOYW1lPVwiZm9udHNpemVFLThcIj5Scy57eC5pdGVtLml0ZW1QcmljZX0uMDA8L3N0cmlrZT4gPHNwYW4gY2xhc3NOYW1lPVwiZm9udGNvbG9yT3JhbmdlIGZvbnRzaXplRS04XCI+e3guaXRlbS5pdGVtZGlzY291bnR9JSA8L3NwYW4+ICBScy57eC5pdGVtLml0ZW1QcmljZSooMTAwLXguaXRlbS5pdGVtZGlzY291bnQpLzEwMH0gPC9wPlxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICA8L3RkPlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwidXNlci1kZXRhaWxzIGZvbnQ2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzIGZvbnQ2XCI+IFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidG9waWNDb2xvclwiPnt4LnVzZXIubmFtZX08L3A+XHJcbiAgICAgICAgICA8cCA+IHt4LnVzZXIuZW1haWx9IC0ge3gudXNlci5jb250YWN0fSA8L3A+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICBcclxuICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgKX1cclxuICBcclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuICA8c3R5bGUganN4PlxyXG4gIHtgXHJcbiAgLm9yZGVyLXRhYmxle1xyXG4gICAgb3ZlcmZsb3cgOiBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1kZXRhaWxzIHB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLml0ZW0tZGV0YWlscyBpbWd7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuICBcclxuICApXHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG90YWxwcmljZSA6IDAsXHJcbiAgICAgIG9yZGVyczpbXVxyXG5cclxuICB9XHJcblx0fVxyXG5cclxuXHJcbiAgICBnZXRvcmRlcmJ5c3RhdGUoc3RhdGUpe1xyXG5cclxuICAgICAgZmV0Y2goYCR7VXJsfW9yZGVyYnlzaG9waWQvNWU4ODg5YTQzODc0NzkzNjU4MGQ4NWM4P3N0YXRlPSR7c3RhdGV9YClcclxuICAgICAgLnRoZW4ocmVzPT57IHJldHVybiByZXMuanNvbigpfSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7IHRoaXMuc2V0U3RhdGUoe29yZGVyczpkYXRhfSl9KVxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlb3JkZXIoaWQsc3RhdGUpe1xyXG5cclxuICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICB2YXIganNvbmJvZHkgPSB7c3RhdGU6c3RhdGV9XHJcbiAgICAgIGRhdGEuYXBwZW5kKCdqc29uYm9keScsIEpTT04uc3RyaW5naWZ5KGpzb25ib2R5KSk7XHJcbiAgICAgIGRhdGEuYXBwZW5kKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoQ29va2llLmdldEpTT04oJ3VzZXInKSkpO1xyXG4gICAgICBmZXRjaCgnL2FwaS91cGRhdGVvcmRlci8nK2lkLHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTpkYXRhXHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHt0aGlzLmdldG9yZGVyYnlzdGF0ZShzdGF0ZSk7IHJldHVybiByZXNwb25zZS5qc29uKCk7IH0gKVxyXG4gICAgICAudGhlbihkYXRhID0+IHsgaWYoZGF0YSE9dW5kZWZpbmVkKXthbGVydChkYXRhLm1zZyk7fX0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9XHJcbiAgIFxyXG5cclxuICAgIHNob3dzaWRlYmFyKCl7XHJcbiAgICAgICAgdGhpcy5yZWZzLmNoaWxkLnNob3dTaWRlYmFyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBvcmRlcnM6dGhpcy5wcm9wcy5vcmRlcnNcclxuICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9zaWRlIG5hdmJhciBsaW5rXHJcbiAgICAgICAgY29uc3Qgc2lkZW5hdmxpbmsgPSBbXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidob21lJ30sXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy9tZW51JyxsaW5rbmFtZTonbWVudSd9LFxyXG4gICAgICAgICAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbWVudTInfSxcclxuICAgICAgICAgICAge2lkOjEsbGluazonLycsbGlua25hbWU6J21lbnUzJ30sXHJcbiAgICAgICAgICAgIHtpZDoxLGxpbms6Jy8nLGxpbmtuYW1lOidtZW51NCd9LFxyXG4gICAgICAgICAgICB7aWQ6MSxsaW5rOicvJyxsaW5rbmFtZTonbWVudTUnfSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2lkZW5hdmNvbnN0ID0ge3RvcGljIDogJ0NhdGVnZXJpZXMnLHRvcGljbGluazonQWxsIENhdGVnZXJpZXNzJyxzaWRlbmF2bGluazpzaWRlbmF2bGluaywgdmlzaWJsZTpmYWxzZSB9O1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICA8U3ViTmF2QmFyIHNpZGVuYXZjb25zdD17c2lkZW5hdmNvbnN0fS8+IFxyXG5cclxuICAgICAgICAgICAgICAgIDxDYXJ0aXRlbSAgdG9waWM9XCJNeSBmYXZvcml0ZXNcIj48L0NhcnRpdGVtPlxyXG4gICAgICAgICAgICAgICAgPE9yZGVyVGFibGUgb3JkZXJzPXt0aGlzLnN0YXRlLm9yZGVyc30gdXBkYXRlb3JkZXI9eyhpZCxzdGF0ZSk9PnRoaXMudXBkYXRlb3JkZXIoaWQsc3RhdGUpfSBnZXRvcmRlcmJ5c3RhdGU9eyhzdGF0ZSk9PnRoaXMuZ2V0b3JkZXJieXN0YXRlKHN0YXRlKX0gLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICBcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke1VybH1vcmRlcmJ5c2hvcGlkLzVlODg4OWE0Mzg3NDc5MzY1ODBkODVjOD9zdGF0ZT1uZXdgKTtcclxuXHJcbiAgdmFyICBvcmRlcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICB2YXIgZXJyb3IgPSBmYWxzZTtcclxuICBpZihyZXMuc3RhdHVzIT0yMDApe1xyXG4gICAgICBlcnJvciA9IHRydWUgO1xyXG4gfVxyXG4gIHJldHVybiB7b3JkZXJzOm9yZGVycyxlcnJvcn1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7IFxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Web-project\\\\myapp\\\\pages\\\\myorder.js */"));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();
    this.state = {
      totalprice: 0,
      orders: []
    };
  }

  getorderbystate(state) {
    fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_7__["Url"]}orderbyshopid/5e8889a438747936580d85c8?state=${state}`).then(res => {
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
    data.append('user', JSON.stringify(js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.getJSON('user')));
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

  showsidebar() {
    this.refs.child.showSidebar();
  }

  componentDidMount() {
    this.setState({
      orders: this.props.orders
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

    return __jsx(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_layouts_SubNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sidenavconst: sidenavconst
    }), __jsx(_components_Cartitem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      topic: "My favorites"
    }), __jsx(OrderTable, {
      orders: this.state.orders,
      updateorder: (id, state) => this.updateorder(id, state),
      getorderbystate: state => this.getorderbystate(state)
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

Index.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await fetch(`${_constant_main__WEBPACK_IMPORTED_MODULE_7__["Url"]}orderbyshopid/5e8889a438747936580d85c8?state=new`);
  var orders = await res.json();
  var error = false;

  if (res.status != 200) {
    error = true;
  }

  return {
    orders: orders,
    error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/myorder.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Web-project\myapp\pages\myorder.js */"./pages/myorder.js");


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
//# sourceMappingURL=myorder.js.map