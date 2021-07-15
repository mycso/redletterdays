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



var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\frontend\\components\\RatingFeedback.js",
    _s = $RefreshSig$();



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
})(["margin-top:50px;background-color:#eee;padding:50px 50px;text-align:center;.button-wrapper{display:inline;}.active{border-radius:50px!important;width:40px;height:40px;line-height:1;margin:4px;color:#fff;background-color:#00a8a5;font-weight:bold;}.button-circle{border-radius:50px!important;width:40px;height:40px;line-height:1;margin:4px;color:#fff;background-color:#adb5bd;font-weight:bold;}.button-action{background-color:#e40521;color:#ffffff;font-weight:bold;width:150px;margin-top:50px;}"]);
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

  var handleClickSubmit = function handleClickSubmit() {
    if (activeTab == '') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingBox, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "font-weight-bold pb-4",
        children: "How did we do?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "list-details__item grey-text",
        children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this), feedback.map(function (rate) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "button-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: activeTab == "".concat(rate.name) ? 'active' : 'button-circle',
            onClick: function onClick() {
              return setActiveTab("".concat(rate.name));
            },
            children: rate.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)
        }, rate.id, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "button-action",
          onClick: handleClickSubmit,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this), showMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Select a number first"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 59
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 37
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 9
  }, this);
}

_s(RatingFeedback, "lv9IvJQQZ3Z/FjUUCq1aE6B92FI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiUmF0aW5nQm94Iiwic3R5bGVkIiwiZGl2IiwiUmF0aW5nRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJoYW5kbGVDbGlja1N1Ym1pdCIsIm1hcCIsInJhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNiO0FBQ0VDLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBRGEsRUFNYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQU5hLEVBV2I7QUFDRUYsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FYYSxFQWdCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQWhCYSxFQXFCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQXJCYSxFQTBCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQTFCYSxFQStCYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQS9CYSxFQW9DYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQXBDYSxFQXlDYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQXpDYSxFQThDYjtBQUNFRixNQUFJLEVBQUUsSUFEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQTlDYSxDQUFqQjtBQXFEQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbWZBQWY7S0FBTUYsUztBQXdDUyxTQUFTRyxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFOUJDLFNBRjhCO0FBQUEsTUFFbkJDLFlBRm1COztBQUFBLG1CQUdDRixzREFBUSxDQUFDLEtBQUQsQ0FIVDtBQUFBLE1BRzlCRyxXQUg4QjtBQUFBLE1BR2pCQyxjQUhpQjs7QUFLckMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQUlKLFNBQVMsSUFBSSxFQUFqQixFQUFxQjtBQUNqQkcsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxLQUZELE1BRU87QUFDSEEsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSDtBQUNKLEdBTkQ7O0FBUUgsc0JBQ08scUVBQUMsU0FBRDtBQUFBLDJCQUNJO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFHLGlCQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVVLWixRQUFRLENBQUNjLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2Q7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0k7QUFBUSxxQkFBUyxFQUFFTixTQUFTLGNBQU9NLElBQUksQ0FBQ2QsSUFBWixDQUFULEdBQThCLFFBQTlCLEdBQXlDLGVBQTVEO0FBQTZFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVMsWUFBWSxXQUFJSyxJQUFJLENBQUNkLElBQVQsRUFBbEI7QUFBQSxhQUF0RjtBQUFBLHNCQUEySGMsSUFBSSxDQUFDZDtBQUFoSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBcUNjLElBQUksQ0FBQ2IsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWpCLENBVkwsZUFlSTtBQUFBLGdDQUNJO0FBQVEsbUJBQVMsRUFBQyxlQUFsQjtBQUFrQyxpQkFBTyxFQUFFVyxpQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFTUYsV0FBVyxnQkFBRztBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFILEdBQW9FLElBRnJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZKO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFA7QUF3QkE7O0dBckN1QkosYzs7TUFBQUEsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDU5NGNjZGU1ZmQzODI3YTcwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgZmVlZGJhY2sgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcxJyxcclxuICAgICAgaWQ6ICcwMDEnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9ob3RsaW5lLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMicsXHJcbiAgICAgIGlkOiAnMDAyJyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvbmVvbmp1bmdsZS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzMnLFxyXG4gICAgICBpZDogJzAwMycsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzLzNoaXRwYXkucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc0JyxcclxuICAgICAgaWQ6ICcwMDQnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc1JyxcclxuICAgICAgaWQ6ICcwMDUnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9tcmpla3lsbC5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzYnLFxyXG4gICAgICBpZDogJzAwNicsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzcnLFxyXG4gICAgICBpZDogJzAwNycsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL3NlYW9mdHJhbnF1aWxpdHkucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc4JyxcclxuICAgICAgaWQ6ICcwMDgnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9hbG9oYS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzknLFxyXG4gICAgICBpZDogJzAwOScsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL21yamVreWxsLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMTAnLFxyXG4gICAgICBpZDogJzAxMCcsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG5jb25zdCBSYXRpbmdCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGE1O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY2lyY2xlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbi1hY3Rpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQwNTIxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYXRpbmdGZWVkYmFjaygpIHtcclxuXHJcbiAgICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3dNZXNzYWdlLCBzZXRTaG93TWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlVGFiID09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gKFxyXG4gICAgICAgIDxSYXRpbmdCb3g+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSG93IGRpZCB3ZSBkbz9cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaXN0LWRldGFpbHNfX2l0ZW0gZ3JleS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgT24gYSBzY2FsZSBmcm9tIDEgLSAxMCwgaG93IGVhc3kgZGlkIHlvdSBmaW5kIGJvb2tpbmcgeW91ciBob3RlbCBleHBlcmllbmNlP1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAge2ZlZWRiYWNrLm1hcChyYXRlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCIga2V5PXtyYXRlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PSBgJHtyYXRlLm5hbWV9YCA/ICdhY3RpdmUnIDogJ2J1dHRvbi1jaXJjbGUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoYCR7cmF0ZS5uYW1lfWApfT57cmF0ZS5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IHNob3dNZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+PHNwYW4+U2VsZWN0IGEgbnVtYmVyIGZpcnN0PC9zcGFuPjwvZGl2PiA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvUmF0aW5nQm94PlxyXG4gIFx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9