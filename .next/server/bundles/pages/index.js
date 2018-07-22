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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/head.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/Users/pedro/Dropbox (DeveloperAcademy-BR)/CNAQuiz/components/head.js";



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.title || ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }));
};

Head.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  description: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  url: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"],
  ogImage: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"]
};
/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_head__ = __webpack_require__("./components/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grid__);
var _jsxFileName = "/Users/pedro/Dropbox (DeveloperAcademy-BR)/CNAQuiz/pages/index.js";









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
      margin: '40',
      padding: '40px',
      border: '1px solid #DDD'
    },
    link: {
      marginTop: '1%',
      marginLeft: '40%',
      marginRight: '40%',
      resize: 'both',
      maxHeight: '5vw'
    },
    title: {
      fontFamily: 'Futura-Bold,-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif',
      marginTop: '2vw',
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
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_head__["a" /* default */], {
    title: "Travel Quiz",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grid___default.a, {
    container: true,
    spacing: 40,
    direction: "column",
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/assets/Logo_EaiViajanteT.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    className: "jsx-308561547" + " " + (classes.logo || "")
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: "jsx-308561547" + " " + (classes.title || "")
  }, "Travel Quiz"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    variant: "extendedFab",
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "Clique aqui para come\xE7ar"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    style: {
      maxWidth: '880px',
      marginTop: '12vw',
      marginBottom: '2vw',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: "jsx-308561547"
  }, "Nos siga nas redes sociais:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Grid___default.a, {
    container: true,
    direction: "row",
    justify: "center",
    alignItems: "center",
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "https://www.facebook.com/eaiviajante/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-308561547"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/assets/facebook-logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    className: "jsx-308561547" + " " + (classes.link || "")
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "https://www.facebook.com/eaiviajante/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    className: "jsx-308561547"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/assets/facebook-logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    className: "jsx-308561547" + " " + (classes.link || "")
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "https://www.facebook.com/eaiviajante/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: "jsx-308561547"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "/static/assets/facebook-logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    className: "jsx-308561547" + " " + (classes.link || "")
  })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "308561547",
    css: "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFZ0IsQUFHa0IsU0FDNEUscUZBQ3ZGIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyby9Ecm9wYm94IChEZXZlbG9wZXJBY2FkZW15LUJSKS9DTkFRdWl6Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgcGFkZGluZ0xlZnQ6ICc0MHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICc0MHB4JyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcudW5pdCxcbiAgfSxcbiAgbG9nbzoge1xuICAgIHdpZHRoOiAnNzB2dycsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgbGlzdDoge1xuICAgIG1hcmdpbjogJzQwJyxcbiAgICBwYWRkaW5nOiAnNDBweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxuICB9LFxuICBsaW5rOiB7XG4gICAgbWFyZ2luVG9wOiAnMSUnLFxuICAgIG1hcmdpbkxlZnQ6ICc0MCUnLFxuICAgIG1hcmdpblJpZ2h0OiAnNDAlJyxcbiAgICByZXNpemU6ICdib3RoJyxcbiAgICBtYXhIZWlnaHQ6ICc1dncnLFxuICB9LFxuXG4gIHRpdGxlOiB7XG4gICAgZm9udEZhbWlseTogJ0Z1dHVyYS1Cb2xkLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LEF2ZW5pciBOZXh0LEF2ZW5pcixIZWx2ZXRpY2Esc2Fucy1zZXJpZicsXG4gICAgbWFyZ2luVG9wOiAnMnZ3JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6ICcwJyxcbiAgICBsaW5lSGVpZ2h0OiAnMS4xNScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogJzQ4cHgnLFxuICB9LFxufSk7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2NsYXNzZXN9ID0gcHJvcHM7XG5cbiAgcmV0dXJuKFxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICA8SGVhZCB0aXRsZT1cIlRyYXZlbCBRdWl6XCIvPlxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0MH0gZGlyZWN0aW9uPXtcImNvbHVtblwifSBqdXN0aWZ5PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IHNyYz1cIi9zdGF0aWMvYXNzZXRzL0xvZ29fRWFpVmlhamFudGVULnBuZ1wiLz5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlRyYXZlbCBRdWl6PC9oMT5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImV4dGVuZGVkRmFiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgIENsaXF1ZSBhcXVpIHBhcmEgY29tZcOnYXJcbiAgICAgIDwvQnV0dG9uPlxuICAgIDxoMyBzdHlsZT17e21heFdpZHRoOiAnODgwcHgnLCBtYXJnaW5Ub3A6ICcxMnZ3JywgbWFyZ2luQm90dG9tOiAnMnZ3JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfX0+XG4gICAgICAgIE5vcyBzaWdhIG5hcyByZWRlcyBzb2NpYWlzOlxuICAgIDwvaDM+XG5cbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPXtcInJvd1wifSBqdXN0aWZ5PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZWFpdmlhamFudGUvXCI+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfXNyYz1cIi9zdGF0aWMvYXNzZXRzL2ZhY2Vib29rLWxvZ28uc3ZnXCIvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VhaXZpYWphbnRlL1wiPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubGlua31zcmM9XCIvc3RhdGljL2Fzc2V0cy9mYWNlYm9vay1sb2dvLnN2Z1wiLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz48TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VhaXZpYWphbnRlL1wiPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubGlua31zcmM9XCIvc3RhdGljL2Fzc2V0cy9mYWNlYm9vay1sb2dvLnN2Z1wiLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9HcmlkPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIDpnbG9iYWwoYm9keSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxBdmVuaXIgTmV4dCxBdmVuaXIsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XG4gICAgICB9XG4gICAgICAuXG4gICAgYH08L3N0eWxlPlxuICAgIDwvR3JpZD5cbiAgPC9kaXY+XG4pfVxuXG5Ib21lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEhvbWUpIl19 */\n/*@ sourceURL=pages/index.js */"
  })));
};

Home.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_styles__["withStyles"])(styles)(Home));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map