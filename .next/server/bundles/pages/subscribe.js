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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(1);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(3);
var Button__default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__(16);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(4);
var Grid__default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "jquery"
var external__jquery_ = __webpack_require__(17);
var external__jquery__default = /*#__PURE__*/__webpack_require__.n(external__jquery_);

// CONCATENATED MODULE: ./components/help/mailchimpHelp.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


function subscribeToNewsletter(_x) {
  return _subscribeToNewsletter.apply(this, arguments);
}

function _subscribeToNewsletter() {
  _subscribeToNewsletter = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(email) {
    var data;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              EMAIL: email
            };
            console.log(process.env);
            external__jquery__default.a.ajax({
              url: "https://eaiviajante.us18.list-manage.com/subscribe/post-json?u=825b9b7c924a9c0d4528fe92c&amp;id=3e972f9aa9&c=?",
              type: 'GET',
              data: data,
              dataType: 'jsonp',
              contentType: "application/json; charset=utf-8",
              success: function success(data) {
                if (data['result'] != "success") {
                  //ERROR
                  throw new Error(data['msg']);
                } else {
                  return data;
                }
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _subscribeToNewsletter.apply(this, arguments);
}
// CONCATENATED MODULE: ./pages/subscribe.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function subscribe__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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
    },
    button: {
      paddingLeft: '40px',
      paddingRight: '40px',
      margin: theme.spacing.unit
    },
    logo: {
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

var emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)\b/;

var subscribe_Subscribe =
/*#__PURE__*/
function (_Component) {
  _inherits(Subscribe, _Component);

  function Subscribe(props) {
    var _this;

    _classCallCheck(this, Subscribe);

    _this = _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = subscribe__asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(e) {
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _context.next = 3;
                  return subscribeToNewsletter(_this.state.email);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      error: true,
      email: '',
      value: props.value
    };
    return _this;
  }

  _createClass(Subscribe, [{
    key: "onChange",
    value: function onChange(event) {
      var newState = Object.assign({}, this.state);
      newState["email"] = event.target.value;

      if (emailRegEx.test(event.target.value)) {
        newState["error"] = false;
      } else if (event.target.value === "") {
        newState["error"] = true;
      } else {
        newState["error"] = true;
      }

      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(Grid__default.a, {
        container: true,
        spacing: 40,
        direction: "column",
        justify: "center",
        alignItems: "center"
      }, external__react__default.a.createElement("form", {
        onSubmit: this.onSubmit
      }, external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: true
      }, external__react__default.a.createElement("h2", null, " Quase l\xE1! ")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: true
      }, external__react__default.a.createElement("p", null, " Cadastre o seu e-mail para ficar por dentro de todas as nossas novidades! ")), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: true
      }, external__react__default.a.createElement(TextField__default.a, {
        required: true,
        placeholder: "exemplo@exemplo.com",
        label: "Email",
        type: "email",
        error: this.state.error,
        onChange: this.onChange.bind(this),
        value: this.state.email,
        style: {
          marginTop: '2%'
        }
      })), external__react__default.a.createElement(Grid__default.a, {
        item: true,
        xs: true
      }, external__react__default.a.createElement(Button__default.a, {
        variant: "raised",
        type: "submit",
        className: "button",
        style: {
          marginTop: '5%'
        },
        disabled: this.state.error
      }, "Inscrever "))));
    }
  }]);

  return Subscribe;
}(external__react_["Component"]);

/* harmony default export */ var subscribe = __webpack_exports__["default"] = (Object(styles_["withStyles"])(styles)(subscribe_Subscribe));

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ })
/******/ ]);