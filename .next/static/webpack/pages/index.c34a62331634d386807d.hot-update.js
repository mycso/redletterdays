webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RatingFeedback.js":
/*!**************************************!*\
  !*** ./components/RatingFeedback.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\frontend\\components\\RatingFeedback.js";


var feedback = [{
  name: '1',
  id: '001',
  image: '../images/hotline.png'
}, {
  name: '2',
  id: '002',
  image: '../images/neonjungle.png'
}, {
  name: '3',
  id: '003',
  image: '../images/3hitpay.png'
}, {
  name: '4',
  id: '004',
  image: '../images/dayofthedead.png'
}, {
  name: '5',
  id: '005',
  image: '../images/mrjekyll.png'
}, {
  name: '6',
  id: '006',
  image: '../images/dayofthedead.png'
}, {
  name: '7',
  id: '007',
  image: '../images/seaoftranquility.png'
}, {
  name: '8',
  id: '008',
  image: '../images/aloha.png'
}, {
  name: '9',
  id: '009',
  image: '../images/mrjekyll.png'
}, {
  name: '10',
  id: '010',
  image: '../images/dayofthedead.png'
}];
var RatingBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RatingFeedback__RatingBox",
  componentId: "t9q38v-0"
})(["margin-top:50px;background-color:#eee;padding:50px 50px;text-align:center;.button-wrapper{display:inline;}.button-circle{border-radius:50px;color:#fff;background-color:#00a8a5;}"]);
_c = RatingBox;
function Nav() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingBox, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "font-weight-bold pb-4",
      children: "How did we do?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "list-details__item grey-text",
      children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), feedback.map(function (rate) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "button-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "button-circle",
          children: rate.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this)
      }, rate.id, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 9
  }, this);
}
_c2 = Nav;

var _c, _c2;

$RefreshReg$(_c, "RatingBox");
$RefreshReg$(_c2, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiUmF0aW5nQm94Iiwic3R5bGVkIiwiZGl2IiwiTmF2IiwibWFwIiwicmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNFQyxNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQURhLEVBTWI7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FOYSxFQVdiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBWGEsRUFnQmI7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FoQmEsRUFxQmI7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FyQmEsRUEwQmI7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0ExQmEsRUErQmI7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0EvQmEsRUFvQ2I7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FwQ2EsRUF5Q2I7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0F6Q2EsRUE4Q2I7QUFDRUYsTUFBSSxFQUFFLElBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0E5Q2EsQ0FBakI7QUFxREEsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlMQUFmO0tBQU1GLFM7QUFnQlMsU0FBU0csR0FBVCxHQUFlO0FBQUE7O0FBRTdCLHNCQUNPLHFFQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBRyxlQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixFQU9LUCxRQUFRLENBQUNRLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsMEJBQ2Q7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLGVBQWxCO0FBQUEsb0JBQW1DQSxJQUFJLENBQUNSO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFxQ1EsSUFBSSxDQUFDUCxFQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFqQixDQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBZUE7TUFqQnVCSyxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzNGE2MjMzMTYzNGQzODY4MDdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBmZWVkYmFjayA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJzEnLFxyXG4gICAgICBpZDogJzAwMScsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2hvdGxpbmUucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcyJyxcclxuICAgICAgaWQ6ICcwMDInLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9uZW9uanVuZ2xlLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMycsXHJcbiAgICAgIGlkOiAnMDAzJyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvM2hpdHBheS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzQnLFxyXG4gICAgICBpZDogJzAwNCcsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzUnLFxyXG4gICAgICBpZDogJzAwNScsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL21yamVreWxsLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnNicsXHJcbiAgICAgIGlkOiAnMDA2JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvZGF5b2Z0aGVkZWFkLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnNycsXHJcbiAgICAgIGlkOiAnMDA3JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvc2Vhb2Z0cmFucXVpbGl0eS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzgnLFxyXG4gICAgICBpZDogJzAwOCcsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2Fsb2hhLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnOScsXHJcbiAgICAgIGlkOiAnMDA5JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvbXJqZWt5bGwucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcxMCcsXHJcbiAgICAgIGlkOiAnMDEwJyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvZGF5b2Z0aGVkZWFkLnBuZycsXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbmNvbnN0IFJhdGluZ0JveCA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGE1O1xyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuXHJcblx0cmV0dXJuIChcclxuICAgICAgICA8UmF0aW5nQm94PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICBIb3cgZGlkIHdlIGRvP1xyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXN0LWRldGFpbHNfX2l0ZW0gZ3JleS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICBPbiBhIHNjYWxlIGZyb20gMSAtIDEwLCBob3cgZWFzeSBkaWQgeW91IGZpbmQgYm9va2luZyB5b3VyIGhvdGVsIGV4cGVyaWVuY2U/XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAge2ZlZWRiYWNrLm1hcChyYXRlID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIiBrZXk9e3JhdGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWNpcmNsZVwiPntyYXRlLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9SYXRpbmdCb3g+XHJcbiAgXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=