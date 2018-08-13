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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = [{"id":"aventura","img":"perfilAventura.gif","title":"Você tirou o Tigrão","text":"Você e seu bonde adoram aventuras na mata, acampamentos e tudo o que envolva ficar perto da mãe natureza!"},{"id":"audacioso","img":"perfilAudacioso.jpg","title":"Você tirou a Moana","text":"Você é muito curioso e não pensa muito antes de viver novas experiencias. Assim, deixa a vida te levar a lugares novos e conhece tudo que a vida tem a te oferecer."},{"id":"turista","img":"perfilTurista.jpg","title":"Você tirou o Russel","text":"Você é o turista que quer garantir que viu tudo que tinha que ver. O tempo na viagem voa, escorre pelas mãos, e por isso você faz de tudo para viver o máximo."},{"id":"consciente","img":"perfilConsciente.jpg","title":"Você tirou o Sirigueijo","text":"Você é do tipo consciente. Às vezes meio pão-duro, mas é por que não quer levar um susto com as contas de sabe se lá quantos dol."},{"id":"convencional","img":"perfilConvencional.jpeg","title":"Você tirou o Marlin","text":"Você é o turista que toma muito cuidado na hora de experimentar comidas e passeios alternativos, vai que dê ruim? Mesmo assim, não deixa de criar várias memórias em suas viagens!"},{"id":"top","img":"perfilTop.jpeg","title":"Você tirou a Elsa","text":"Suas viagens são um sonho de princesa. Você livre está para gastar uns dol a mais para ter uma viagem com mais conforto!"},{"id":"relax","img":"perfilRelax.jpg","title":"Você tirou o Lula Molusco","text":"Você é o turista paz e amor ✌️. Férias são para descansar e você sabe fazer isso muito bem passando um dia pleno na praia."},{"id":"guloso","img":"perfilGuloso.png","title":"Você tirou a Magali","text":"você é o turista que só pensa em comer! Pra você, viagem é uma oportunidade de experimentar pratos novos e deliciosos. Você sabe aproveitar cada dia muito bem, não deixando pra amanhã o que você pode comer hoje!"}]

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, props.title || ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "fb:app_id",
    content: props.appID || defaultOGURL
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:type",
    content: props.type || "article"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.ogTitle || ''
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_categories_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_categories_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_categories_json__);

function findProfile(id) {
  var profile = {};

  for (var index in __WEBPACK_IMPORTED_MODULE_0__static_categories_json___default.a) {
    if (__WEBPACK_IMPORTED_MODULE_0__static_categories_json___default.a[index].id === id) {
      profile = __WEBPACK_IMPORTED_MODULE_0__static_categories_json___default.a[index];
    }
  }

  return profile;
}

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RestartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InstaIcon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon__);


var FbIcon = function FbIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default.a, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "m5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2-2v-14a2 2 0 0 1 2-2m13 2h-2.5a3.5 3.5 0 0 0 -3.5 3.5v2.5h-2v3h2v7h3v-7h3v-3h-3v-2a1 1 0 0 1 1-1h2z"
  }));
};
var HomeIcon = function HomeIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default.a, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z"
  }));
};
var RestartIcon = function RestartIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default.a, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "m11 4c2.05 0 4.09.77 5.65 2.33 3.13 3.13 3.12 8.17-.01 11.31-1.83 1.86-4.34 2.6-6.73 2.28l.53-1.96c1.71.16 3.49-.42 4.8-1.73 2.34-2.34 2.34-6.14 0-8.48-1.18-1.18-2.71-1.75-4.24-1.75v4.58l-4.96-4.95 4.96-4.95zm-5.66 13.65c-2.64-2.65-3.04-6.65-1.23-9.71l1.48 1.47c-1.09 2.23-.68 4.98 1.16 6.82.52.52 1.12.93 1.75 1.22l-.5 1.95c-1-.4-1.88-.97-2.66-1.75z"
  }));
};
var InstaIcon = function InstaIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default.a, props, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
  }));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_head__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_icons__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_help_findProfile__ = __webpack_require__(10);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var styles = function styles(theme) {
  var _logo;

  return {
    text: {
      marginTop: 100,
      fontFamily: '-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
      display: 'flex',
      justifyContent: 'space-around'
    },
    root: {
      flexGrow: 1,
      margin: 0
    },
    button: {
      marginTop: 0,
      paddingLeft: '40px',
      paddingRight: '40px',
      margin: theme.spacing.unit
    },
    logo: (_logo = {}, _defineProperty(_logo, theme.breakpoints.down('md'), {
      marginTop: '4vw'
    }), _defineProperty(_logo, "width", '70vw'), _defineProperty(_logo, "display", 'flex'), _defineProperty(_logo, "justifyContent", 'center'), _logo),
    list: {
      marginTop: '0 important',
      padding: '20px'
    },
    link: {
      marginLeft: '33.3%',
      resize: 'both',
      maxHeight: '4vw'
    },
    icon: {
      fontSize: 48,
      color: 'black'
    },
    title: {
      fontFamily: 'Futura-Bold,-apple-system,Arial,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
      marginTop: 0,
      marginBottom: '2vw',
      width: '100%',
      paddingTop: '0',
      lineHeight: '1.15',
      textAlign: 'center',
      fontSize: '48px'
    }
  };
};

var Home = function Home(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_head__["a" /* default */], {
    title: "Travel Quiz"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    container: true,
    spacing: 40,
    direction: "column",
    justify: "center",
    alignItems: "center"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: classes.logo,
    src: "/static/Logo_EaiViajanteT.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: classes.title
  }, "Travel Quiz"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/quiz"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Button___default.a, {
    variant: "extendedFab",
    className: classes.button
  }, "Clique aqui para come\xE7ar"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: classes.text
  }, "Nos siga nas redes sociais:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    container: true,
    className: classes.list,
    spacing: 40,
    direction: "row",
    justify: "center",
    alignItems: "center"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    item: true
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "https://www.facebook.com/eaiviajante/"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_icons__["a" /* FbIcon */], {
    className: classes.icon
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    item: true
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "https://eaiviajante.wordpress.com/"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_icons__["b" /* HomeIcon */], {
    className: classes.icon
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Grid___default.a, {
    item: true
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "https://www.instagram.com/eaiviajante/"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    target: "_blank"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_icons__["c" /* InstaIcon */], {
    className: classes.icon
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(Home));

/***/ })
/******/ ]);