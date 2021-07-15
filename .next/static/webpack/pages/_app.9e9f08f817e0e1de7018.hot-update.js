webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var C_Users_Michael_Documents_reactJS_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\frontend\\components\\Page.js";

function _templateObject() {
  var data = Object(C_Users_Michael_Documents_reactJS_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: ", ";\n  color: ", ";\n  margin-top: 150px;\n\n  @font-face {\n    font-family: 'sans-serif';\n\t\tformat('woff2')\n\t\tfont-weight normal;\n\t\tfont-style: normal;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    padding: 0;\n    margin: 0 0 0 0;\n    line-height: 2;\n    font-family: sans-serif;\n  }\n\n  button {\n    border-radius: ", " !important;\n    padding: 5px;\n    border: 0;\n  }\n\n  button:focus {\n      outline: 0px;\n  }\n\n  .active a.blue {\n    text-decoration: none;\n      color: ", ";\n  }\n\n  .carousel img {\n      width: 100%;\n      @media (max-width: 767px) {\n        width: ", ";\n        position: ", ";\n        left: ", ";\n    }\n\n    @media (max-width: 500px) {\n        width: 220%;\n        position: absolute;\n        left: -61%;\n    }\n  }\n\n  .text-content {\n      white-space: pre-wrap;\n  }\n\n  .ellipsis {\n      height: auto;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      width: 350px;\n      overflow: hidden;\n  }\n\n  .carousel-item {\n    height: 70vh;\n    min-height: 400px;\n    background: no-repeat center center scroll;\n    -webkit-background-size: ", ";\n    -moz-background-size: ", ";\n    -o-background-size: ", ";\n    background-size: ", ";\n    max-height: 800px !important;\n  }\n\n  .carousel-item:after {\n    content:\"\";\n    display:block;\n    position:", " !important;\n    top:0;\n    bottom:0;\n    left:0;\n    right:0;\n    background: rgba(96, 96, 96, 0.61);\n    @media (max-width: 767px) {\n        width: ", " !important;\n        position: ", " !important;\n        left: ", " !important;\n    }\n  }\n  .carousel-caption {\n      position: ", " !important;\n      right: 15%;\n      bottom: 20px;\n      left: 15%;\n      z-index: 10;\n      color: #fff;\n      text-align: center;\n  }\n\n  .social-button-main {\n    position: ", ";\n    z-index: 1000;\n    top: 30px;\n    right: 2px;\n  }\n\n  .social-button-main .svg-inline--fa {\n      font-size: 40px;\n      color: #fff;\n    @media (max-width: 767px) {\n        font-size: 30px;\n    }\n  }\n\n  .heading .display-4 {\n    @media (max-width: 767px) {\n        font-size: 35px;\n    }\n  }\n\n  .heading .display-5 {\n    @media (max-width: 767px) {\n        font-size: 20px;\n    }\n  }\n\n  .site-map-title {\n    @media (max-width: 767px) {\n        border-top: 0.1px solid #fff;\n        padding-bottom: 0px;\n        width: 260px;\n        margin: 0 auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var theme = {
  navyBlue: '#1b1464',
  mainBlue: '#0071bc',
  lightBlue: '#29abe2',
  turquoise: '#00a99d',
  yellow: '#fcee21',
  black: '#212529',
  lightOrange: '#f7931e',
  lightPink: '#ed1e79',
  pink: '#d4145a',
  lightgrey: '#bcbcbc',
  transparent: 'transparent',
  grey: '#606060',
  green: '#218838',
  white: '#ffffff',
  maxWidth: '1200px',
  fontSize: '20px',
  logoStaxWidth: '160px',
  carouselResponsiveWidth: '170%',
  carouselPosition: 'absolute',
  carouselLeft: '-36%',
  carouselBg: 'cover',
  footerLogoResponsive: 'center',
  roundedCorner: '0.25rem'
};
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.grey;
}, function (props) {
  return props.theme.roundedCorner;
}, theme.mainBlue, function (props) {
  return props.theme.carouselResponsiveWidth;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselLeft;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselBg;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselResponsiveWidth;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselLeft;
}, function (props) {
  return props.theme.carouselPosition;
}, function (props) {
  return props.theme.carouselPosition;
});
_c = GlobalStyles;
var StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:", ";color:", ";margin-top:0px;"], function (props) {
  return props.theme.white;
}, function (props) {
  return props.theme.grey;
});
_c2 = StyledPage;
function Page(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Meta__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(GlobalStyles, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledPage, {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 5
  }, this);
}
_c3 = Page;
Page.propTypes = {
  cool: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

var _c, _c2, _c3;

$RefreshReg$(_c, "GlobalStyles");
$RefreshReg$(_c2, "StyledPage");
$RefreshReg$(_c3, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlLmpzIl0sIm5hbWVzIjpbInRoZW1lIiwibmF2eUJsdWUiLCJtYWluQmx1ZSIsImxpZ2h0Qmx1ZSIsInR1cnF1b2lzZSIsInllbGxvdyIsImJsYWNrIiwibGlnaHRPcmFuZ2UiLCJsaWdodFBpbmsiLCJwaW5rIiwibGlnaHRncmV5IiwidHJhbnNwYXJlbnQiLCJncmV5IiwiZ3JlZW4iLCJ3aGl0ZSIsIm1heFdpZHRoIiwiZm9udFNpemUiLCJsb2dvU3RheFdpZHRoIiwiY2Fyb3VzZWxSZXNwb25zaXZlV2lkdGgiLCJjYXJvdXNlbFBvc2l0aW9uIiwiY2Fyb3VzZWxMZWZ0IiwiY2Fyb3VzZWxCZyIsImZvb3RlckxvZ29SZXNwb25zaXZlIiwicm91bmRlZENvcm5lciIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJTdHlsZWRQYWdlIiwic3R5bGVkIiwiZGl2IiwiUGFnZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiY29vbCIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFVBQVEsRUFBRSxTQURFO0FBRVpDLFVBQVEsRUFBRSxTQUZFO0FBR1pDLFdBQVMsRUFBRSxTQUhDO0FBSVpDLFdBQVMsRUFBRSxTQUpDO0FBS1pDLFFBQU0sRUFBRSxTQUxJO0FBTVpDLE9BQUssRUFBRSxTQU5LO0FBT1pDLGFBQVcsRUFBRSxTQVBEO0FBUVpDLFdBQVMsRUFBRSxTQVJDO0FBU1pDLE1BQUksRUFBRSxTQVRNO0FBVVpDLFdBQVMsRUFBRSxTQVZDO0FBV1pDLGFBQVcsRUFBRSxhQVhEO0FBWVpDLE1BQUksRUFBRSxTQVpNO0FBYVpDLE9BQUssRUFBRSxTQWJLO0FBY1pDLE9BQUssRUFBRSxTQWRLO0FBZVpDLFVB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QUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRSxxRUFBQyxVQUFEO0FBQUEsa0JBQWErQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO01BWnVCRCxJO0FBY3hCQSxJQUFJLENBQUNFLFNBQUwsR0FBaUI7QUFDZkMsTUFBSSxFQUFFQyxpREFBUyxDQUFDQyxNQUREO0FBRWZKLFVBQVEsRUFBRUcsaURBQVMsQ0FBQ0U7QUFGTCxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjllOWYwOGY4MTdlMGUxZGU3MDE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIG5hdnlCbHVlOiAnIzFiMTQ2NCcsXHJcbiAgbWFpbkJsdWU6ICcjMDA3MWJjJyxcclxuICBsaWdodEJsdWU6ICcjMjlhYmUyJyxcclxuICB0dXJxdW9pc2U6ICcjMDBhOTlkJyxcclxuICB5ZWxsb3c6ICcjZmNlZTIxJyxcclxuICBibGFjazogJyMyMTI1MjknLFxyXG4gIGxpZ2h0T3JhbmdlOiAnI2Y3OTMxZScsXHJcbiAgbGlnaHRQaW5rOiAnI2VkMWU3OScsXHJcbiAgcGluazogJyNkNDE0NWEnLFxyXG4gIGxpZ2h0Z3JleTogJyNiY2JjYmMnLFxyXG4gIHRyYW5zcGFyZW50OiAndHJhbnNwYXJlbnQnLFxyXG4gIGdyZXk6ICcjNjA2MDYwJyxcclxuICBncmVlbjogJyMyMTg4MzgnLFxyXG4gIHdoaXRlOiAnI2ZmZmZmZicsXHJcbiAgbWF4V2lkdGg6ICcxMjAwcHgnLFxyXG4gIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgbG9nb1N0YXhXaWR0aDogJzE2MHB4JyxcclxuICBjYXJvdXNlbFJlc3BvbnNpdmVXaWR0aDogJzE3MCUnLFxyXG4gIGNhcm91c2VsUG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgY2Fyb3VzZWxMZWZ0OiAnLTM2JScsXHJcbiAgY2Fyb3VzZWxCZzonY292ZXInLFxyXG4gIGZvb3RlckxvZ29SZXNwb25zaXZlOiAnY2VudGVyJyxcclxuICByb3VuZGVkQ29ybmVyOiAnMC4yNXJlbSdcclxufTtcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGV9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdyZXl9O1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnc2Fucy1zZXJpZic7XHJcblx0XHRmb3JtYXQoJ3dvZmYyJylcclxuXHRcdGZvbnQtd2VpZ2h0IG5vcm1hbDtcclxuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIGh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucm91bmRlZENvcm5lcn0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IDBweDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUgYS5ibHVlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICR7dGhlbWUubWFpbkJsdWV9O1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbFJlc3BvbnNpdmVXaWR0aH07XHJcbiAgICAgICAgcG9zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2Fyb3VzZWxQb3NpdGlvbn07XHJcbiAgICAgICAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbExlZnR9O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAyMjAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNjElO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRleHQtY29udGVudCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICB9XHJcblxyXG4gIC5lbGxpcHNpcyB7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2Fyb3VzZWxCZ307XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbEJnfTtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbEJnfTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbEJnfTtcclxuICAgIG1heC1oZWlnaHQ6IDgwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtaXRlbTphZnRlciB7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgcG9zaXRpb246JHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbFBvc2l0aW9ufSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDk2LCA5NiwgOTYsIDAuNjEpO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2Fyb3VzZWxSZXNwb25zaXZlV2lkdGh9ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2Fyb3VzZWxQb3NpdGlvbn0gIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNhcm91c2VsTGVmdH0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jYXJvdXNlbFBvc2l0aW9ufSAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogMTUlO1xyXG4gICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgIGxlZnQ6IDE1JTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWJ1dHRvbi1tYWluIHtcclxuICAgIHBvc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNhcm91c2VsUG9zaXRpb259O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWJ1dHRvbi1tYWluIC5zdmctaW5saW5lLS1mYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZyAuZGlzcGxheS00IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIC5kaXNwbGF5LTUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpdGUtbWFwLXRpdGxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDAuMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS53aGl0ZX07XHJcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3JleX07XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIHsvKiA8U3ViSGVhZGVyIC8+ICovfVxyXG4gICAgICAgICAgPFN0eWxlZFBhZ2U+e2NoaWxkcmVufTwvU3R5bGVkUGFnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5QYWdlLnByb3BUeXBlcyA9IHtcclxuICBjb29sOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9