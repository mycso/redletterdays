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
})(["margin-top:50px;background-color:#eee;padding:50px 50px;text-align:center;.button-wrapper{display:inline;}.active{border-radius:50px!important;width:40px;height:40px;line-height:1;margin:4px;color:#fff;background-color:#00a8a5;font-weight:bold;}.button-circle{border-radius:50px!important;width:40px;height:40px;line-height:1;margin:4px;color:#fff;background-color:#adb5bd;font-weight:bold;}.button-action{background-color:#e40521;color:#ffffff;font-weight:bold;width:150px;margin-top:50px;}.error-message{color:#e40521;}"]);
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

  var handleClickSubmit = function handleClickSubmit() {
    if (activeTab == '') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      setShowThankYouMessage(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingBox, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "font-weight-bold pb-4",
        children: "How did we do?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "list-details__item grey-text",
        children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), feedback.map(function (rate) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "button-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: activeTab == "".concat(rate.name) ? 'active' : 'button-circle',
            onClick: function onClick() {
              setActiveTab("".concat(rate.name)), setShowMessage(false);
            },
            children: rate.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)
        }, rate.id, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "button-action",
          onClick: handleClickSubmit,
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), showMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-3 error-message",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Please choose a rating"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 73
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 37
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, this);
}

_s(RatingFeedback, "o6JYgMQPUBIPlKWyDMjGjB5xQds=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiUmF0aW5nQm94Iiwic3R5bGVkIiwiZGl2IiwiUmF0aW5nRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJzaG93VGhhbmtZb3VNZXNzYWdlIiwic2V0U2hvd1RoYW5rWW91TWVzc2FnZSIsImhhbmRsZUNsaWNrU3VibWl0IiwibWFwIiwicmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEYSxFQU1iO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTmEsRUFXYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhhLEVBZ0JiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBaEJhLEVBcUJiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBckJhLEVBMEJiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBMUJhLEVBK0JiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBL0JhLEVBb0NiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBcENhLEVBeUNiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBekNhLEVBOENiO0FBQ0VGLE1BQUksRUFBRSxJQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBOUNhLENBQWpCO0FBcURBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpaEJBQWY7S0FBTUYsUztBQTRDUyxTQUFTRyxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRUhDLHNEQUFRLENBQUMsRUFBRCxDQUZMO0FBQUEsTUFFOUJDLFNBRjhCO0FBQUEsTUFFbkJDLFlBRm1COztBQUFBLG1CQUdDRixzREFBUSxDQUFDLEtBQUQsQ0FIVDtBQUFBLE1BRzlCRyxXQUg4QjtBQUFBLE1BR2pCQyxjQUhpQjs7QUFBQSxtQkFJaUJKLHNEQUFRLENBQUMsS0FBRCxDQUp6QjtBQUFBLE1BSTlCSyxtQkFKOEI7QUFBQSxNQUlUQyxzQkFKUzs7QUFNckMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCLFFBQUlOLFNBQVMsSUFBSSxFQUFqQixFQUFxQjtBQUNqQkcsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxLQUZELE1BRU87QUFDSEEsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUUsNEJBQXNCLENBQUMsSUFBRCxDQUF0QjtBQUNIO0FBQ0osR0FQRDs7QUFTSCxzQkFDTyxxRUFBQyxTQUFEO0FBQUEsMkJBQ0k7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUcsaUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLEVBVUtkLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2Q7QUFBSyxtQkFBUyxFQUFDLGdCQUFmO0FBQUEsaUNBQ0k7QUFBUSxxQkFBUyxFQUFFUixTQUFTLGNBQU9RLElBQUksQ0FBQ2hCLElBQVosQ0FBVCxHQUE4QixRQUE5QixHQUF5QyxlQUE1RDtBQUE2RSxtQkFBTyxFQUFFLG1CQUFNO0FBQUNTLDBCQUFZLFdBQUlPLElBQUksQ0FBQ2hCLElBQVQsRUFBWixFQUE4QlcsY0FBYyxDQUFDLEtBQUQsQ0FBNUM7QUFBb0QsYUFBako7QUFBQSxzQkFBb0pLLElBQUksQ0FBQ2hCO0FBQXpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFxQ2dCLElBQUksQ0FBQ2YsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWpCLENBVkwsZUFlSTtBQUFBLGdDQUNJO0FBQVEsbUJBQVMsRUFBQyxlQUFsQjtBQUFrQyxpQkFBTyxFQUFFYSxpQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFTUosV0FBVyxnQkFBRztBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxHQUFtRixJQUZwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURQO0FBd0JBOztHQXZDdUJKLGM7O01BQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Y0Y2I1ZWY3MjdhYzRiNjI4ZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IGZlZWRiYWNrID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMScsXHJcbiAgICAgIGlkOiAnMDAxJyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvaG90bGluZS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzInLFxyXG4gICAgICBpZDogJzAwMicsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL25lb25qdW5nbGUucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICczJyxcclxuICAgICAgaWQ6ICcwMDMnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy8zaGl0cGF5LnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnNCcsXHJcbiAgICAgIGlkOiAnMDA0JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvZGF5b2Z0aGVkZWFkLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnNScsXHJcbiAgICAgIGlkOiAnMDA1JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvbXJqZWt5bGwucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc2JyxcclxuICAgICAgaWQ6ICcwMDYnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc3JyxcclxuICAgICAgaWQ6ICcwMDcnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9zZWFvZnRyYW5xdWlsaXR5LnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnOCcsXHJcbiAgICAgIGlkOiAnMDA4JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvYWxvaGEucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc5JyxcclxuICAgICAgaWQ6ICcwMDknLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9tcmpla3lsbC5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzEwJyxcclxuICAgICAgaWQ6ICcwMTAnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuY29uc3QgUmF0aW5nQm94ID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYThhNTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tYWN0aW9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0MDUyMTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZTQwNTIxO1xyXG4gICAgICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhdGluZ0ZlZWRiYWNrKCkge1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2hvd01lc3NhZ2UsIHNldFNob3dNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93VGhhbmtZb3VNZXNzYWdlLCBzZXRTaG93VGhhbmtZb3VNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlVGFiID09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFNob3dUaGFua1lvdU1lc3NhZ2UodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHJldHVybiAoXHJcbiAgICAgICAgPFJhdGluZ0JveD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBIb3cgZGlkIHdlIGRvP1xyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtZGV0YWlsc19faXRlbSBncmV5LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBPbiBhIHNjYWxlIGZyb20gMSAtIDEwLCBob3cgZWFzeSBkaWQgeW91IGZpbmQgYm9va2luZyB5b3VyIGhvdGVsIGV4cGVyaWVuY2U/XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7ZmVlZGJhY2subWFwKHJhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIiBrZXk9e3JhdGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWN0aXZlVGFiID09IGAke3JhdGUubmFtZX1gID8gJ2FjdGl2ZScgOiAnYnV0dG9uLWNpcmNsZSd9IG9uQ2xpY2s9eygpID0+IHtzZXRBY3RpdmVUYWIoYCR7cmF0ZS5uYW1lfWApLCBzZXRTaG93TWVzc2FnZShmYWxzZSl9fT57cmF0ZS5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7IHNob3dNZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJtdC0zIGVycm9yLW1lc3NhZ2VcIj48c3Bhbj5QbGVhc2UgY2hvb3NlIGEgcmF0aW5nPC9zcGFuPjwvZGl2PiA6IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvUmF0aW5nQm94PlxyXG4gIFx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9