webpackHotUpdate_N_E("pages/index",{

/***/ "./components/RatingFeedback.js":
/*!**************************************!*\
  !*** ./components/RatingFeedback.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingFeedback; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\redletterdays\\components\\RatingFeedback.js",
    _s = $RefreshSig$();



var feedback = [{
  name: '1',
  id: '001',
  image: '../static/smiley1.png'
}, {
  name: '2',
  id: '002',
  image: '../static/smiley2.png'
}, {
  name: '3',
  id: '003',
  image: '../static/smiley3.png'
}, {
  name: '4',
  id: '004',
  image: '../static/smiley4.png'
}, {
  name: '5',
  id: '005',
  image: '../static/smiley5.png'
}, {
  name: '6',
  id: '006',
  image: '../static/smiley6.png'
}, {
  name: '7',
  id: '007',
  image: '../static/smiley7.png'
}, {
  name: '8',
  id: '008',
  image: '../static/smiley8.png'
}, {
  name: '9',
  id: '009',
  image: '../static/smiley9.png'
}, {
  name: '10',
  id: '010',
  image: '../static/smiley10.png'
}];
var RatingBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RatingFeedback__RatingBox",
  componentId: "t9q38v-0"
})(["margin-top:50px;background-color:#eee;padding:70px 70px;text-align:center;.button-wrapper{display:inline;}.active{border-radius:50px!important;width:40px;height:40px;line-height:1;margin:4px;color:#fff;background-color:#00a8a5;font-weight:bold;}.button-circle{border-radius:50px!important;width:40px;height:40px;line-height:1;margin:4px;color:#fff;background-color:#adb5bd;font-weight:bold;}.button-action{background-color:#e40521;color:#ffffff;font-weight:bold;width:150px;margin-top:50px;}.error-message{color:#e40521;}"]);
_c = RatingBox;
function RatingFeedback() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showMessage = _useState2[0],
      setShowMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showThankYouMessage = _useState3[0],
      setShowThankYouMessage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('../static/smiley0.png'),
      toggle = _useState4[0],
      setToggle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      visible = _useState5[0],
      setVisible = _useState5[1];

  var handleClickSubmit = function handleClickSubmit() {
    if (activeTab == '') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      setShowThankYouMessage(true);
    }
  }; // console.log(toggle);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingBox, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [!showThankYouMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "font-weight-bold pb-4",
          children: "How did we do?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "list-details__item grey-text small-text",
          children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, this), toggle !== '' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pb-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            width: "100px",
            src: toggle,
            alt: activeTab
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 51
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }, this) : null, feedback.map(function (rate) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "button-wrapper",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: activeTab == "".concat(rate.name) ? 'active' : 'button-circle',
                onClick: function onClick() {
                  setActiveTab(rate.name), setShowMessage(false), setToggle(rate.image), setVisible(false);
                },
                children: rate.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 37
              }, _this)
            }, index.id, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 33
            }, _this)
          }, void 0, false);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "button-action",
            onClick: handleClickSubmit,
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 29
          }, this), showMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-3 error-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Please choose a rating"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 81
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 45
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 25
        }, this)]
      }, void 0, true), showThankYouMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "font-weight-bold pb-4",
          children: "Thank you"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "list-details__item grey-text small-text",
          children: ["Your feedback helps us to improve!", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 29
          }, this), "If you have any further feedback, please feel free to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "red-text",
            style: {
              'textDecoration': 'underline'
            },
            children: "contact us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 88
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 25
        }, this)]
      }, void 0, true)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 9
  }, this);
}

_s(RatingFeedback, "9xSz0hAd9gbD3EjQrPB5qLwrIKo=");

_c2 = RatingFeedback;

var _c, _c2;

$RefreshReg$(_c, "RatingBox");
$RefreshReg$(_c2, "RatingFeedback");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiUmF0aW5nQm94Iiwic3R5bGVkIiwiZGl2IiwiUmF0aW5nRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJzaG93VGhhbmtZb3VNZXNzYWdlIiwic2V0U2hvd1RoYW5rWW91TWVzc2FnZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlQ2xpY2tTdWJtaXQiLCJtYXAiLCJyYXRlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNiO0FBQ0VDLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRGEsRUFNYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQU5hLEVBV2I7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FYYSxFQWdCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQWhCYSxFQXFCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQXJCYSxFQTBCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQTFCYSxFQStCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVF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QVEscUJBQVMsRUFBQyxlQUFsQjtBQUFrQyxtQkFBTyxFQUFFaUIsaUJBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBRU1SLFdBQVcsZ0JBQUc7QUFBSyxxQkFBUyxFQUFDLG9CQUFmO0FBQUEsbUNBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsR0FBbUYsSUFGcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCSjtBQUFBLHNCQUZSLEVBc0NLRSxtQkFBbUIsaUJBQ2hCO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBRyxtQkFBUyxFQUFDLHlDQUFiO0FBQUEsd0VBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSix5RUFFK0Q7QUFBTSxxQkFBUyxFQUFDLFVBQWhCO0FBQTJCLGlCQUFLLEVBQUU7QUFBQyxnQ0FBa0I7QUFBbkIsYUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRi9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBLHNCQXZDUjtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBc0RBOztHQXpFdUJOLGM7O01BQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOThiM2QwZDljZmU5NjhhOTRjODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBmZWVkYmFjayA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJzEnLFxyXG4gICAgICBpZDogJzAwMScsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL3NtaWxleTEucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcyJyxcclxuICAgICAgaWQ6ICcwMDInLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9zbWlsZXkyLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMycsXHJcbiAgICAgIGlkOiAnMDAzJyxcclxuICAgICAgaW1hZ2U6ICcuLi9zdGF0aWMvc21pbGV5My5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzQnLFxyXG4gICAgICBpZDogJzAwNCcsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL3NtaWxleTQucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc1JyxcclxuICAgICAgaWQ6ICcwMDUnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9zbWlsZXk1LnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnNicsXHJcbiAgICAgIGlkOiAnMDA2JyxcclxuICAgICAgaW1hZ2U6ICcuLi9zdGF0aWMvc21pbGV5Ni5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzcnLFxyXG4gICAgICBpZDogJzAwNycsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL3NtaWxleTcucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc4JyxcclxuICAgICAgaWQ6ICcwMDgnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9zbWlsZXk4LnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnOScsXHJcbiAgICAgIGlkOiAnMDA5JyxcclxuICAgICAgaW1hZ2U6ICcuLi9zdGF0aWMvc21pbGV5OS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzEwJyxcclxuICAgICAgaWQ6ICcwMTAnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9zbWlsZXkxMC5wbmcnLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG5jb25zdCBSYXRpbmdCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGE1O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY2lyY2xlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbi1hY3Rpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQwNTIxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNDA1MjE7XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0aW5nRmVlZGJhY2soKSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dUaGFua1lvdU1lc3NhZ2UsIHNldFNob3dUaGFua1lvdU1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKCcuLi9zdGF0aWMvc21pbGV5MC5wbmcnKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmVUYWIgPT0gJycpIHtcclxuICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTaG93TWVzc2FnZShmYWxzZSlcclxuICAgICAgICAgICAgc2V0U2hvd1RoYW5rWW91TWVzc2FnZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2codG9nZ2xlKTtcclxuXHJcblx0cmV0dXJuIChcclxuICAgICAgICA8UmF0aW5nQm94PlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgeyFzaG93VGhhbmtZb3VNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb3cgZGlkIHdlIGRvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXN0LWRldGFpbHNfX2l0ZW0gZ3JleS10ZXh0IHNtYWxsLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9uIGEgc2NhbGUgZnJvbSAxIC0gMTAsIGhvdyBlYXN5IGRpZCB5b3UgZmluZCBib29raW5nIHlvdXIgaG90ZWwgZXhwZXJpZW5jZT9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RvZ2dsZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTRcIj48aW1nIHdpZHRoPVwiMTAwcHhcIiBzcmM9e3RvZ2dsZX0gYWx0PXthY3RpdmVUYWJ9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZlZWRiYWNrLm1hcChyYXRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiIGtleT17aW5kZXguaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSBgJHtyYXRlLm5hbWV9YCA/ICdhY3RpdmUnIDogJ2J1dHRvbi1jaXJjbGUnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKHJhdGUubmFtZSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShyYXRlLmltYWdlKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2hvd01lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZXJyb3ItbWVzc2FnZVwiPjxzcGFuPlBsZWFzZSBjaG9vc2UgYSByYXRpbmc8L3NwYW4+PC9kaXY+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd1RoYW5rWW91TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmsgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtZGV0YWlsc19faXRlbSBncmV5LXRleHQgc21hbGwtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBmZWVkYmFjayBoZWxwcyB1cyB0byBpbXByb3ZlIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5JZiB5b3UgaGF2ZSBhbnkgZnVydGhlciBmZWVkYmFjaywgcGxlYXNlIGZlZWwgZnJlZSB0byA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dFwiIHN0eWxlPXt7J3RleHREZWNvcmF0aW9uJzogJ3VuZGVybGluZSd9fT5jb250YWN0IHVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1JhdGluZ0JveD5cclxuICBcdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==