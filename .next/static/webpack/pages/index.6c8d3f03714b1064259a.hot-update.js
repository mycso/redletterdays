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
  image: '../static/hotline.png'
}, {
  name: '2',
  id: '002',
  image: '../static/neonjungle.png'
}, {
  name: '3',
  id: '003',
  image: '../static/3hitpay.png'
}, {
  name: '4',
  id: '004',
  image: '../static/dayofthedead.png'
}, {
  name: '5',
  id: '005',
  image: '../static/mrjekyll.png'
}, {
  name: '6',
  id: '006',
  image: '../static/dayofthedead.png'
}, {
  name: '7',
  id: '007',
  image: '../static/seaoftranquility.png'
}, {
  name: '8',
  id: '008',
  image: '../static/aloha.png'
}, {
  name: '9',
  id: '009',
  image: '../static/mrjekyll.png'
}, {
  name: '10',
  id: '010',
  image: '../static/dayofthedead.png'
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
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
  };

  console.log(toggle);
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
          className: "list-details__item grey-text",
          children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, this), feedback.map(function (_ref) {
          var name = _ref.name,
              id = _ref.id,
              image = _ref.image;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "main",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: activeTab == "".concat(name) ? 'active' : 'button-circle',
                  onClick: function onClick() {
                    setToggle(id);
                    setVisible(false);
                    setActiveTab(name);
                    setShowMessage(false);
                  },
                  children: [name, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, _this), toggle === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 41
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "img",
                children: [visible && id === "1" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: image,
                  className: "photo"
                }, id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 37
                }, _this) : null, toggle === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: image,
                    className: "photo"
                  }, id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 41
                  }, _this)
                }, void 0, false) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, _this)
          }, void 0, false);
        }), feedback.map(function (rate) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "button-wrapper",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: activeTab == "".concat(rate.name) ? 'active' : 'button-circle',
                onClick: function onClick() {
                  setActiveTab("".concat(rate.name)), setShowMessage(false), setToggle("".concat(rate.name)), setVisible(false);
                },
                children: rate.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 37
              }, _this)
            }, rate.id, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
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
            lineNumber: 187,
            columnNumber: 29
          }, this), showMessage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-3 error-message",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "Please choose a rating"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 81
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 45
          }, this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 25
        }, this)]
      }, void 0, true), showThankYouMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "font-weight-bold pb-4",
          children: "Thank you"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "list-details__item grey-text small-text",
          children: ["Your feedback helps us to improve!", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 29
          }, this), "If you have any further feedback, please feel free to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "red-text",
            style: {
              'textDecoration': 'underline'
            },
            children: "contact us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 88
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
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

_s(RatingFeedback, "8mgJ2gl3LLviL9lTSstUhzRn6vM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiUmF0aW5nQm94Iiwic3R5bGVkIiwiZGl2IiwiUmF0aW5nRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNob3dNZXNzYWdlIiwic2V0U2hvd01lc3NhZ2UiLCJzaG93VGhhbmtZb3VNZXNzYWdlIiwic2V0U2hvd1RoYW5rWW91TWVzc2FnZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlQ2xpY2tTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFO0FBSFQsQ0FEYSxFQU1iO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBTmEsRUFXYjtBQUNFRixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUU7QUFIVCxDQVhhLEVBZ0JiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBaEJhLEVBcUJiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBckJhLEVBMEJiO0FBQ0VGLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRTtBQUhULENBMUJhLEVBK0JiO0FBQ0VGLE1BQUksRUFBRSxH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QUEsa0JBREosRUFFTVIsV0FBVyxnQkFBRztBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxHQUFtRixJQUZwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOURKO0FBQUEsc0JBRlIsRUF1RUtFLG1CQUFtQixpQkFDaEI7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFHLG1CQUFTLEVBQUMseUNBQWI7QUFBQSx3RUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLHlFQUUrRDtBQUFNLHFCQUFTLEVBQUMsVUFBaEI7QUFBMkIsaUJBQUssRUFBRTtBQUFDLGdDQUFrQjtBQUFuQixhQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUEsc0JBeEVSO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFA7QUF1RkE7O0dBMUd1Qk4sYzs7TUFBQUEsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzhkM2YwMzcxNGIxMDY0MjU5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgZmVlZGJhY2sgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcxJyxcclxuICAgICAgaWQ6ICcwMDEnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9ob3RsaW5lLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMicsXHJcbiAgICAgIGlkOiAnMDAyJyxcclxuICAgICAgaW1hZ2U6ICcuLi9zdGF0aWMvbmVvbmp1bmdsZS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzMnLFxyXG4gICAgICBpZDogJzAwMycsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljLzNoaXRwYXkucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc0JyxcclxuICAgICAgaWQ6ICcwMDQnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc1JyxcclxuICAgICAgaWQ6ICcwMDUnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9tcmpla3lsbC5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzYnLFxyXG4gICAgICBpZDogJzAwNicsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzcnLFxyXG4gICAgICBpZDogJzAwNycsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL3NlYW9mdHJhbnF1aWxpdHkucG5nJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc4JyxcclxuICAgICAgaWQ6ICcwMDgnLFxyXG4gICAgICBpbWFnZTogJy4uL3N0YXRpYy9hbG9oYS5wbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzknLFxyXG4gICAgICBpZDogJzAwOScsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL21yamVreWxsLnBuZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnMTAnLFxyXG4gICAgICBpZDogJzAxMCcsXHJcbiAgICAgIGltYWdlOiAnLi4vc3RhdGljL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG5jb25zdCBSYXRpbmdCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDcwcHggNzBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5idXR0b24td3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhOGE1O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY2lyY2xlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbi1hY3Rpb24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQwNTIxO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlNDA1MjE7XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0aW5nRmVlZGJhY2soKSB7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dUaGFua1lvdU1lc3NhZ2UsIHNldFNob3dUaGFua1lvdU1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGlja1N1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlVGFiID09ICcnKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFNob3dUaGFua1lvdU1lc3NhZ2UodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvZ2dsZSk7XHJcblxyXG5cdHJldHVybiAoXHJcbiAgICAgICAgPFJhdGluZ0JveD5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHshc2hvd1RoYW5rWW91TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG93IGRpZCB3ZSBkbz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdC1kZXRhaWxzX19pdGVtIGdyZXktdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT24gYSBzY2FsZSBmcm9tIDEgLSAxMCwgaG93IGVhc3kgZGlkIHlvdSBmaW5kIGJvb2tpbmcgeW91ciBob3RlbCBleHBlcmllbmNlP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVlZGJhY2subWFwKCh7IG5hbWUsIGlkLCBpbWFnZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlVGFiID09IGAke25hbWV9YCA/ICdhY3RpdmUnIDogJ2J1dHRvbi1jaXJjbGUnfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGUoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYihuYW1lKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZ2dsZSA9PT0gaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Zpc2libGUgJiYgaWQgPT09IFwiMVwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGtleT17aWR9IGNsYXNzTmFtZT1cInBob3RvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2dnbGUgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBrZXk9e2lkfSBjbGFzc05hbWU9XCJwaG90b1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVlZGJhY2subWFwKHJhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCIga2V5PXtyYXRlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT0gYCR7cmF0ZS5uYW1lfWAgPyAnYWN0aXZlJyA6ICdidXR0b24tY2lyY2xlJ30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVRhYihgJHtyYXRlLm5hbWV9YCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01lc3NhZ2UoZmFsc2UpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRvZ2dsZShgJHtyYXRlLm5hbWV9YCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWFjdGlvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2hvd01lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZXJyb3ItbWVzc2FnZVwiPjxzcGFuPlBsZWFzZSBjaG9vc2UgYSByYXRpbmc8L3NwYW4+PC9kaXY+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7c2hvd1RoYW5rWW91TWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmsgeW91XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtZGV0YWlsc19faXRlbSBncmV5LXRleHQgc21hbGwtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBmZWVkYmFjayBoZWxwcyB1cyB0byBpbXByb3ZlIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5JZiB5b3UgaGF2ZSBhbnkgZnVydGhlciBmZWVkYmFjaywgcGxlYXNlIGZlZWwgZnJlZSB0byA8c3BhbiBjbGFzc05hbWU9XCJyZWQtdGV4dFwiIHN0eWxlPXt7J3RleHREZWNvcmF0aW9uJzogJ3VuZGVybGluZSd9fT5jb250YWN0IHVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICA8L1JhdGluZ0JveD5cclxuICBcdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==