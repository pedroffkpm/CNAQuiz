module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(6);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(10);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var head_Head = function Head(props) {
  return external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external__react__default.a.createElement("title", null, props.title || ''), external__react__default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external__react__default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external__react__default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), external__react__default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon"
  }), external__react__default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external__react__default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external__react__default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external__react__default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external__react__default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external__react__default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var head = (head_Head);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(3);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(4);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./pages/index.js








var styles = function styles(theme) {
  return {
    body: {
      margin: '0',
      fontFamily: '-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif'
    },
    root: {
      flexGrow: 1
    },
    button: {
      paddingLeft: '40px',
      paddingRight: '40px',
      margin: theme.spacing.unit
    },
    logo: {
      marginTop: '4vw',
      width: '70vw',
      display: 'flex',
      justifyContent: 'center'
    },
    list: {
      margin: '30',
      padding: '30px'
    },
    link: {
      marginLeft: '33.3%',
      resize: 'both',
      maxHeight: '4vw'
    },
    title: {
      fontFamily: 'Futura-Bold,-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
      marginTop: '0',
      marginBottom: '2vw',
      width: '100%',
      paddingTop: '0',
      lineHeight: '1.15',
      textAlign: 'center',
      fontSize: '48px'
    }
  };
};

var pages_Home = function Home(props) {
  var classes = props.classes;
  return external__react__default.a.createElement("div", {
    className: classes.body
  }, external__react__default.a.createElement("div", {
    className: classes.root
  }, external__react__default.a.createElement(head, {
    title: "Travel Quiz"
  }), external__react__default.a.createElement(Grid__default.a, {
    container: true,
    spacing: 40,
    direction: "column",
    justify: "center",
    alignItems: "center"
  }, external__react__default.a.createElement("img", {
    className: classes.logo,
    src: "/static/assets/Logo_EaiViajanteT.png"
  }), external__react__default.a.createElement("h1", {
    className: classes.title
  }, "Travel Quiz"), external__react__default.a.createElement(link__default.a, {
    href: "/quiz"
  }, external__react__default.a.createElement(Button__default.a, {
    variant: "extendedFab",
    className: classes.button
  }, "Clique aqui para come\xE7ar")), external__react__default.a.createElement("h3", {
    style: {
      marginTop: '10vw',
      marginBottom: '2vw',
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, "Nos siga nas redes sociais:"), external__react__default.a.createElement(Grid__default.a, {
    container: true,
    className: classes.list,
    spacing: 16,
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 2
  }, external__react__default.a.createElement(link__default.a, {
    href: "https://www.facebook.com/eaiviajante/"
  }, external__react__default.a.createElement("a", {
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    className: classes.link,
    src: "/static/assets/facebook-logo.svg"
  })))), external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 2
  }, external__react__default.a.createElement(link__default.a, {
    href: "https://eaiviajante.wordpress.com/"
  }, external__react__default.a.createElement("a", {
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    style: {
      resize: 'both',
      maxHeight: '4vw'
    },
    src: "/static/assets/home.svg"
  })))), external__react__default.a.createElement(Grid__default.a, {
    item: true,
    xs: 2
  }, external__react__default.a.createElement(link__default.a, {
    href: "https://www.instagram.com/eaiviajante/"
  }, external__react__default.a.createElement("a", {
    target: "_blank"
  }, external__react__default.a.createElement("img", {
    style: {
      resize: 'both',
      maxHeight: '4vw'
    },
    src: "/static/assets/instagram.svg"
  }))))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(styles_["withStyles"])(styles)(pages_Home));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })
/******/ ]);