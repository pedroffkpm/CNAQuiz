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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/help/shuffle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffle;
function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
;

/***/ }),

/***/ "./components/question.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_shuffle__ = __webpack_require__("./components/help/shuffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__);
var _jsxFileName = "/Users/pedro/Dropbox (DeveloperAcademy-BR)/CNAQuiz/components/question.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    button: {
      paddingLeft: '40px',
      paddingRight: '40px',
      margin: theme.spacing.unit,
      '&:active': {
        color: theme.palette.secondary
      }
    },
    card: {
      maxWidth: '400',
      margin: '500',
      padding: '30px',
      border: '2px solid black',
      borderRadius: '20px'
    },
    title: {
      fontFamily: 'Futura-Bold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
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

var Question =
/*#__PURE__*/
function (_Component) {
  _inherits(Question, _Component);

  function Question(props) {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this, props));
  }

  _createClass(Question, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          question = _props.question,
          _onClick = _props.onClick,
          id = _props.id;
      Object(__WEBPACK_IMPORTED_MODULE_2__help_shuffle__["a" /* default */])(question.options);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 16,
        direction: "column",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        className: classes.card,
        item: true,
        xs: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: classes.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, question.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 40,
        direction: "row",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, question.options.map(function (option, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
          item: true,
          xs: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
          key: index,
          variant: "extendedFab",
          onClick: function onClick() {
            return _onClick({
              "id": id,
              "value": option.value
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, option.title));
      })))));
    }
  }]);

  return Question;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;
Question.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  question: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_styles__["withStyles"])(styles)(Question));

/***/ }),

/***/ "./pages/quiz.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_assets_data_json__ = __webpack_require__("./static/assets/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_assets_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_assets_data_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_assets_categories_json__ = __webpack_require__("./static/assets/categories.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_assets_categories_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_assets_categories_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_question__ = __webpack_require__("./components/question.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_help_shuffle__ = __webpack_require__("./components/help/shuffle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_router__);
var _jsxFileName = "/Users/pedro/Dropbox (DeveloperAcademy-BR)/CNAQuiz/pages/quiz.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    }
  };
};

var Quiz =
/*#__PURE__*/
function (_Component) {
  _inherits(Quiz, _Component);

  function Quiz(props) {
    var _this;

    _classCallCheck(this, Quiz);

    _this = _possibleConstructorReturn(this, (Quiz.__proto__ || Object.getPrototypeOf(Quiz)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "calcProfile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(obj) {
        var max = -Infinity;
        var ans = '';

        for (var key in obj) {
          console.log(key);

          if (obj[key] > max) {
            max = obj[key];
            ans = key;
          }
        }

        return __WEBPACK_IMPORTED_MODULE_3__static_assets_categories_json___default.a.indexOf(ans);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleChoice", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(key) {
        var id = key.id,
            value = key.value;
        _this.state.log[id] = value;
        __WEBPACK_IMPORTED_MODULE_3__static_assets_categories_json___default.a.map( //reset scores
        function (category) {
          return _this.state.score[category] = 0;
        });

        for (var i in _this.state.log) {
          var valueIterator = _this.state.log[i];

          for (var category in valueIterator) {
            _this.state.score[category] += valueIterator[category];
          }
        }

        _this.state.profile = _this.calcProfile(_this.state.score);
        console.log(_this.state.score);
        console.log("profile  " + _this.state.profile);
      }
    });
    var numberOfRounds = __WEBPACK_IMPORTED_MODULE_2__static_assets_data_json___default.a.numberOfRounds,
        questions = __WEBPACK_IMPORTED_MODULE_2__static_assets_data_json___default.a.questions;
    Object(__WEBPACK_IMPORTED_MODULE_5__components_help_shuffle__["a" /* default */])(questions);
    _this.state = {
      log: [],
      questions: Object(__WEBPACK_IMPORTED_MODULE_5__components_help_shuffle__["a" /* default */])(questions).splice(0, numberOfRounds),
      score: {},
      profile: -1
    };
    return _this;
  }

  _createClass(Quiz, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 40,
        direction: "column",
        justify: "center",
        alignItems: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.state.questions.map(function (question) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_question__["a" /* default */], {
          id: question.id,
          question: question,
          onClick: function onClick(key) {
            return _this2.handleChoice(key);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        });
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Button___default.a, {
        variant: "extendedFab",
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_9_next_router___default.a.push("/subscribe?id=".concat(_this2.state.profile), "/subscribe");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "v")));
    }
  }]);

  return Quiz;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Quiz.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["withStyles"])(styles)(Quiz));

/***/ }),

/***/ "./static/assets/categories.json":
/***/ (function(module, exports) {

module.exports = ["aventura","relax","audacioso","turista","economico","consciente","top","convencional"]

/***/ }),

/***/ "./static/assets/data.json":
/***/ (function(module, exports) {

module.exports = {"numberOfRounds":9,"questions":[{"id":0,"title":"Qual selfie do gato mais define seus stories?","options":[{"image":"catchrist.png","title":"No Cristo Redentor","value":{"turista":2,"convencional":3}},{"image":"catpark.png","title":"No parque","value":{"aventura":3,"relax":2}},{"image":"catparty.png","title":"Na balada","value":{"audacioso":2}},{"image":"catroller.png","title":"Na montanha-russa","value":{"audacioso":4,"turista":1}}]},{"id":1,"title":"Qual drink do Starbucks é mais comprado por você?","options":[{"image":"unicorn.jpeg","title":"Frappuccino Unicórnio","value":{"audacioso":4,"turista":2,"top":3}},{"image":"americano.jpg","title":"Americano ou Latte","value":{"convencional":3,"economico":2}},{"image":"frapuccino.jpeg","title":"Frapuccinos de Chocolate","value":{"audacioso":3,"top":2,"turista":1}},{"image":"wallet.jpg","title":"Nenhum, meu plano não cobre Starbucks!","value":{"economico":3}}]},{"id":2,"title":"Se você ganhasse uma volta ao mundo em 80 dias começando amanhã tudo free, você marca:","options":[{"image":"volta1.jpg","title":"Confirma!","value":{"audacioso":2,"economico":1,"turista":3}},{"image":"volta2.jpg","title":"Interesse!","value":{"audacioso":1,"consciente":1,"turista":2}},{"image":"volta3.jpg","title":"Nem pensar","value":{"relax":3,"top":1}},{"image":"volta4.jpg","title":"Isso não é possível, a Terra é plana.","value":{}}]},{"id":3,"title":"Você está na China e chegam pra você com uma barata frita, você:","options":[{"image":"china1.jpg","title":"Olá, tenho interesse!","value":{"audacioso":3}},{"image":"china2.jpg","title":"Se for barato, vamo lá!","value":{"audacioso":2,"consciente":3}},{"image":"china3.jpg","title":"Não tem pão não?","value":{"convencional":2}},{"image":"china4.jpg","title":"Saio correndo, deus me livre","value":{"convencional":3}}]},{"id":4,"title":"Escolha um super poder para viagem","options":[{"image":"poder1.jpg","title":"Levitar suas mohilas e sacolas","value":{"top":2,"turista":1}},{"image":"poder2.jpg","title":"Não ter sono nem cansaço","value":{"turista":3}},{"image":"poder3.jpg","title":"Ter repelente e protetor embutido na pele","value":{"aventura":3}},{"image":"poder4.jpg","title":"Não se esquecer de nada de lá!","value":{"top":2,"turista":1,"relax":3,"convencional":1}}]},{"id":5,"title":"Escolhe uma mata","options":[{"image":"mata1.jpg","title":"Vanessa da Mata","value":{}},{"image":"mata2.jpg","title":"Mata Atlântica","value":{"aventura":3}},{"image":"mata3.jpeg","title":"Mata mata","value":{}},{"image":"mata4.jpeg","title":"Matcha latte","value":{"audacioso":3}}]},{"id":6,"title":"Qual imagem melhor define suas jantas?","options":[{"image":"comida1.jpeg","title":"Restaurante gourmet","value":{"top":3}},{"image":"comida2.jpg","title":"Comida de rua local","value":{"audacioso":3,"turista":1,"consciente":1}},{"image":"comida3.jpeg","title":"Fast food","value":{"consciente":2,"convencional":2}},{"image":"comida4.jpeg","title":"Comida feita em casa","value":{"convencional":1,"consciente":3}}]},{"id":7,"title":"Qual hotel você mais se identifica?","options":[{"image":"hotel1.jpg","title":"Perto da praia","value":{"relax":3}},{"image":"hotel2.jpg","title":"Perto da mata","value":{"aventura":3}},{"image":"hotel3.jpg","title":"Perto da cidade","value":{"turista":3,"convencional":1}},{"image":"hotel4.jpg","title":"Qualquer canto dormível","value":{"consciente":3}}]},{"id":8,"title":"Se o papo for planejamento, você","options":[{"image":"plan1.jpg","title":"Não deixa pra depois","value":{"consciente":3}},{"image":"plan2.jpeg","title":"Procrastina igual aos trabalhos","value":{"consciente":1}},{"image":"plan3.jpeg","title":"Pede pra alguém fazer o trabalho sujo","value":{"consciente":2,"top":3}},{"image":"plan4.jpg","title":"Vai na fé","value":{"relax":3,"top":2}}]}]}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/quiz.js");


/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=quiz.js.map