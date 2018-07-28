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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: ./static/assets/data.json
var data = __webpack_require__(13);
var data_default = /*#__PURE__*/__webpack_require__.n(data);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// CONCATENATED MODULE: ./components/help/shuffle.js
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
// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(3);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(4);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./components/quiz.js


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

var quiz_Quiz =
/*#__PURE__*/
function (_Component) {
  _inherits(Quiz, _Component);

  function Quiz(props) {
    _classCallCheck(this, Quiz);

    return _possibleConstructorReturn(this, (Quiz.__proto__ || Object.getPrototypeOf(Quiz)).call(this, props));
  }

  _createClass(Quiz, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          question = _props.question,
          _onClick = _props.onClick,
          index = _props.index;
      shuffle(question.options);
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16,
        direction: "column",
        justify: "center",
        alignItems: "center"
      }, external__react__default.a.createElement(Grid__default.a, {
        className: classes.card,
        item: true,
        xs: true
      }, external__react__default.a.createElement("h1", {
        className: classes.title
      }, question.title), external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 40,
        direction: "row",
        justify: "center",
        alignItems: "center"
      }, question.options.slice(0, 2).map(function (option) {
        return external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: true
        }, external__react__default.a.createElement(Button__default.a, {
          variant: "extendedFab",
          onClick: function onClick() {
            return _onClick({
              "index": index,
              "value": option.value
            });
          }
        }, option.title));
      })), external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 16,
        direction: "row",
        justify: "center",
        alignItems: "center"
      }, question.options.slice(2).map(function (option) {
        return external__react__default.a.createElement(Grid__default.a, {
          item: true,
          xs: true
        }, external__react__default.a.createElement(Button__default.a, {
          variant: "extendedFab",
          onClick: function onClick() {
            return _onClick({
              "index": index,
              "value": option.value
            });
          },
          className: classes.button
        }, option.title));
      })))));
    }
  }]);

  return Quiz;
}(external__react_["Component"]);

;
/* harmony default export */ var quiz = (Object(styles_["withStyles"])(styles)(quiz_Quiz));
// CONCATENATED MODULE: ./pages/quizPage.js










var quizPage_styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    list: {
      margin: '30',
      padding: '30px'
    }
  };
};

var answers = [];
var q = [];

function handleChoice(key) {
  var index = key.index,
      value = key.value;
  answers[index] = value;
  console.log(answers);
}

var quizPage_quizPage = function quizPage(props) {
  var classes = props.classes;
  var numberOfRounds = data_default.a.numberOfRounds,
      questions = data_default.a.questions;
  shuffle(questions);
  q = questions.splice(0, numberOfRounds);
  return external__react__default.a.createElement("div", {
    className: classes.root
  }, external__react__default.a.createElement(Grid__default.a, {
    container: true,
    spacing: 40,
    direction: "column",
    justify: "center",
    alignItems: "center"
  }, q.map(function (item, index) {
    return external__react__default.a.createElement(quiz, {
      question: item,
      index: index,
      onClick: function onClick(key) {
        return handleChoice(key);
      }
    });
  }), external__react__default.a.createElement("br", null), external__react__default.a.createElement(link__default.a, {
    href: "/subscribe"
  }, external__react__default.a.createElement(Button__default.a, {
    variant: "extendedFab"
  }, "v"))));
};

/* harmony default export */ var pages_quizPage = __webpack_exports__["default"] = (Object(styles_["withStyles"])(quizPage_styles)(quizPage_quizPage));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"numberOfRounds":9,"questions":[{"title":"Qual selfie do gato mais define seus stories?","options":[{"image":"catchrist.png","title":"No Cristo Redentor","value":{"turista":2,"convencional":3}},{"image":"catpark.png","title":"No parque","value":{"aventura":3,"relax":2}},{"image":"catparty.png","title":"Na balada","value":{"audacioso":2}},{"image":"catroller.png","title":"Na montanha-russa","value":{"audacioso":4,"turista":1}}]},{"title":"Qual drink do Starbucks é mais comprado por você?","options":[{"image":"unicorn.jpeg","title":"Frappuccino Unicórnio","value":{"audacioso":4,"turista":2,"top":3}},{"image":"americano.jpg","title":"Americano ou Latte","value":{"convencional":3,"economico":2}},{"image":"frapuccino.jpeg","title":"Frapuccinos de Chocolate","value":{"audacioso":3,"top":2,"turista":1}},{"image":"wallet.jpg","title":"Nenhum, meu plano não cobre Starbucks!","value":{"economico":3}}]},{"title":"Se você ganhasse uma volta ao mundo em 80 dias começando amanhã tudo free, você marca:","options":[{"image":"volta1.jpg","title":"Confirma!","value":{"audacioso":2,"economico":1,"turista":3}},{"image":"volta2.jpg","title":"Interesse!","value":{"audacioso":1,"consciente":1,"turista":2}},{"image":"volta3.jpg","title":"Nem pensar","value":{"relax":3,"top":1}},{"image":"volta4.jpg","title":"Isso não é possível, a Terra é plana.","value":{}}]},{"title":"Você está na China e chegam pra você com uma barata frita, você:","options":[{"image":"china1.jpg","title":"Olá, tenho interesse!","value":{"audacioso":3}},{"image":"china2.jpg","title":"Se for barato, vamo lá!","value":{"audacioso":2,"consciente":3}},{"image":"china3.jpg","title":"Não tem pão não?","value":{"convencional":2}},{"image":"china4.jpg","title":"Saio correndo, deus me livre","value":{"convencional":3}}]},{"title":"Escolha um super poder para viagem","options":[{"image":"poder1.jpg","title":"Levitar suas mohilas e sacolas","value":{"top":2,"turista":1}},{"image":"poder2.jpg","title":"Não ter sono nem cansaço","value":{"turista":3}},{"image":"poder3.jpg","title":"Ter repelente e protetor embutido na pele","value":{"aventura":3}},{"image":"poder4.jpg","title":"Não se esquecer de nada de lá!","value":{"top":2,"turista":1,"relax":3,"convencional":1}}]},{"title":"Escolhe uma mata","options":[{"image":"mata1.jpg","title":"Vanessa da Mata","value":{}},{"image":"mata2.jpg","title":"Mata Atlântica","value":{"aventura":3}},{"image":"mata3.jpeg","title":"Mata mata","value":{}},{"image":"mata4.jpeg","title":"Matcha latte","value":{"audacioso":3}}]},{"title":"Qual imagem melhor define suas jantas?","options":[{"image":"comida1.jpeg","title":"Restaurante gourmet","value":{"top":3}},{"image":"comida2.jpg","title":"Comida de rua local","value":{"audacioso":3,"turista":1,"consciente":1}},{"image":"comida3.jpeg","title":"Fast food","value":{"consciente":2,"convencional":2}},{"image":"comida4.jpeg","title":"Comida feita em casa","value":{"convencional":1,"consciente":3}}]},{"title":"Qual hotel você mais se identifica?","options":[{"image":"hotel1.jpg","title":"Perto da praia","value":{"relax":3}},{"image":"hotel2.jpg","title":"Perto da mata","value":{"aventura":3}},{"image":"hotel3.jpg","title":"Perto da cidade","value":{"turista":3,"convencional":1}},{"image":"hotel4.jpg","title":"Qualquer canto dormível","value":{"consciente":3}}]},{"title":"Se o papo for planejamento, você","options":[{"image":"plan1.jpg","title":"Não deixa pra depois","value":{"consciente":3}},{"image":"plan2.jpeg","title":"Procrastina igual aos trabalhos","value":{"consciente":1}},{"image":"plan3.jpeg","title":"Pede pra alguém fazer o trabalho sujo","value":{"consciente":2,"top":3}},{"image":"plan4.jpg","title":"Vai na fé","value":{"relax":3,"top":2}}]}]}

/***/ })
/******/ ]);