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
  name: 'Hotline',
  id: '001',
  image: '../images/hotline.png',
  amount: 10,
  added: '2014-01-01'
}, {
  name: 'Neon Jungle',
  id: '002',
  image: '../images/neonjungle.png',
  amount: 2,
  added: '2014-01-01'
}, {
  name: '3 Hit Pay',
  id: '003',
  large: true,
  image: '../images/3hitpay.png',
  amount: 4,
  added: '2014-01-01'
}, {
  name: 'Day of the Dead',
  id: '004',
  image: '../images/dayofthedead.png',
  amount: 2,
  added: '2014-01-01'
}, {
  name: 'Dr Jekyll and Mr Hyde',
  id: '005',
  image: '../images/mrjekyll.png',
  amount: 5,
  added: '2014-01-01'
}, {
  name: 'Day of the Dead',
  id: '006',
  image: '../images/dayofthedead.png',
  amount: 7,
  added: '2014-01-01'
}, {
  name: 'Sea of Tranquility',
  id: '007',
  image: '../images/seaoftranquility.png',
  amount: 2,
  added: '2014-01-01'
}, {
  name: 'Aloha',
  id: '008',
  image: '../images/aloha.png',
  amount: 1,
  added: '2014-01-01'
}, {
  name: 'Dr Jekyll and Mr Hyde',
  id: '009',
  image: '../images/mrjekyll.png',
  amount: 8,
  added: '2014-01-01'
}, {
  name: 'Day of the Dead',
  id: '010',
  image: '../images/dayofthedead.png',
  amount: 11,
  added: '2014-01-01'
}];
var RatingBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RatingFeedback__RatingBox",
  componentId: "t9q38v-0"
})(["margin-top:50px;background-color:#eee;padding:50px 50px;text-align:center;"]);
_c = RatingBox;
function Nav() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingBox, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "font-weight-bold pb-4",
      children: "How did we do?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "list-details__item grey-text",
      children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiYW1vdW50IiwiYWRkZWQiLCJsYXJnZSIsIlJhdGluZ0JveCIsInN0eWxlZCIsImRpdiIsIk5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNFQyxNQUFJLEVBQUUsU0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUUsdUJBSFQ7QUFJRUMsUUFBTSxFQUFFLEVBSlY7QUFLRUMsT0FBSyxFQUFFO0FBTFQsQ0FEYSxFQVFiO0FBQ0VKLE1BQUksRUFBRSxhQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSwwQkFIVDtBQUlFQyxRQUFNLEVBQUUsQ0FKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQVJhLEVBZWI7QUFDRUosTUFBSSxFQUFFLFdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUksT0FBSyxFQUFFLElBSFQ7QUFJRUgsT0FBSyxFQUFFLHVCQUpUO0FBS0VDLFFBQU0sRUFBRSxDQUxWO0FBTUVDLE9BQUssRUFBRTtBQU5ULENBZmEsRUF1QmI7QUFDRUosTUFBSSxFQUFFLGlCQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSw0QkFIVDtBQUlFQyxRQUFNLEVBQUUsQ0FKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQXZCYSxFQThCYjtBQUNFSixNQUFJLEVBQUUsdUJBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFLHdCQUhUO0FBSUVDLFFBQU0sRUFBRSxDQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBOUJhLEVBcUNiO0FBQ0VKLE1BQUksRUFBRSxpQkFEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUUsNEJBSFQ7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsT0FBSyxFQUFFO0FBTFQsQ0FyQ2EsRUE0Q2I7QUFDRUosTUFBSSxFQUFFLG9CQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSxnQ0FIVDtBQUlFQyxRQUFNLEVBQUUsQ0FKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQTVDYSxFQW1EYjtBQUNFSixNQUFJLEVBQUUsT0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsT0FBSyxFQUFFO0FBTFQsQ0FuRGEsRUEwRGI7QUFDRUosTUFBSSxFQUFFLHVCQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSx3QkFIVDtBQUlFQyxRQUFNLEVBQUUsQ0FKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQTFEYSxFQWlFYjtBQUNFSixNQUFJLEVBQUUsaUJBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFLDRCQUhUO0FBSUVDLFFBQU0sRUFBRSxFQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBakVhLENBQWpCO0FBMEVBLElBQU1FLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrRkFBZjtLQUFNRixTO0FBT1MsU0FBU0csR0FBVCxHQUFlO0FBRTdCLHNCQUNPLHFFQUFDLFNBQUQ7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBRyxlQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUDtBQVVBO01BWnVCQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0YzYyN2RlOWY3NzExMzMxZGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBmZWVkYmFjayA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0hvdGxpbmUnLFxyXG4gICAgICBpZDogJzAwMScsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2hvdGxpbmUucG5nJyxcclxuICAgICAgYW1vdW50OiAxMCxcclxuICAgICAgYWRkZWQ6ICcyMDE0LTAxLTAxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ05lb24gSnVuZ2xlJyxcclxuICAgICAgaWQ6ICcwMDInLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9uZW9uanVuZ2xlLnBuZycsXHJcbiAgICAgIGFtb3VudDogMixcclxuICAgICAgYWRkZWQ6ICcyMDE0LTAxLTAxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzMgSGl0IFBheScsXHJcbiAgICAgIGlkOiAnMDAzJyxcclxuICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzLzNoaXRwYXkucG5nJyxcclxuICAgICAgYW1vdW50OiA0LFxyXG4gICAgICBhZGRlZDogJzIwMTQtMDEtMDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRGF5IG9mIHRoZSBEZWFkJyxcclxuICAgICAgaWQ6ICcwMDQnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgICAgYW1vdW50OiAyLFxyXG4gICAgICBhZGRlZDogJzIwMTQtMDEtMDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRHIgSmVreWxsIGFuZCBNciBIeWRlJyxcclxuICAgICAgaWQ6ICcwMDUnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9tcmpla3lsbC5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDUsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdEYXkgb2YgdGhlIERlYWQnLFxyXG4gICAgICBpZDogJzAwNicsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDcsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdTZWEgb2YgVHJhbnF1aWxpdHknLFxyXG4gICAgICBpZDogJzAwNycsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL3NlYW9mdHJhbnF1aWxpdHkucG5nJyxcclxuICAgICAgYW1vdW50OiAyLFxyXG4gICAgICBhZGRlZDogJzIwMTQtMDEtMDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQWxvaGEnLFxyXG4gICAgICBpZDogJzAwOCcsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2Fsb2hhLnBuZycsXHJcbiAgICAgIGFtb3VudDogMSxcclxuICAgICAgYWRkZWQ6ICcyMDE0LTAxLTAxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0RyIEpla3lsbCBhbmQgTXIgSHlkZScsXHJcbiAgICAgIGlkOiAnMDA5JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvbXJqZWt5bGwucG5nJyxcclxuICAgICAgYW1vdW50OiA4LFxyXG4gICAgICBhZGRlZDogJzIwMTQtMDEtMDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRGF5IG9mIHRoZSBEZWFkJyxcclxuICAgICAgaWQ6ICcwMTAnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgICAgYW1vdW50OiAxMSxcclxuICAgICAgYWRkZWQ6ICcyMDE0LTAxLTAxJ1xyXG4gICAgfSxcclxuICBdXHJcblxyXG5jb25zdCBSYXRpbmdCb3ggPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcblxyXG5cdHJldHVybiAoXHJcbiAgICAgICAgPFJhdGluZ0JveD5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgSG93IGRpZCB3ZSBkbz9cclxuICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlzdC1kZXRhaWxzX19pdGVtIGdyZXktdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgT24gYSBzY2FsZSBmcm9tIDEgLSAxMCwgaG93IGVhc3kgZGlkIHlvdSBmaW5kIGJvb2tpbmcgeW91ciBob3RlbCBleHBlcmllbmNlP1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9SYXRpbmdCb3g+XHJcbiAgXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=