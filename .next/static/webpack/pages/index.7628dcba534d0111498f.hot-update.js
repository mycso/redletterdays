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
  image: '../images/hotline.png',
  amount: 10,
  added: '2014-01-01'
}, {
  name: '2',
  id: '002',
  image: '../images/neonjungle.png',
  amount: 2,
  added: '2014-01-01'
}, {
  name: '3',
  id: '003',
  large: true,
  image: '../images/3hitpay.png',
  amount: 4,
  added: '2014-01-01'
}, {
  name: '4',
  id: '004',
  image: '../images/dayofthedead.png',
  amount: 2,
  added: '2014-01-01'
}, {
  name: '5',
  id: '005',
  image: '../images/mrjekyll.png',
  amount: 5,
  added: '2014-01-01'
}, {
  name: '6',
  id: '006',
  image: '../images/dayofthedead.png',
  amount: 7,
  added: '2014-01-01'
}, {
  name: '7',
  id: '007',
  image: '../images/seaoftranquility.png',
  amount: 2,
  added: '2014-01-01'
}, {
  name: '8',
  id: '008',
  image: '../images/aloha.png',
  amount: 1,
  added: '2014-01-01'
}, {
  name: '9',
  id: '009',
  image: '../images/mrjekyll.png',
  amount: 8,
  added: '2014-01-01'
}, {
  name: '10',
  id: '010',
  image: '../images/dayofthedead.png',
  amount: 11,
  added: '2014-01-01'
}];
var RatingBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "RatingFeedback__RatingBox",
  componentId: "t9q38v-0"
})(["margin-top:50px;background-color:#eee;padding:50px 50px;text-align:center;.button-wrapper{display:inline;}"]);
_c = RatingBox;
function Nav() {
  var _this = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RatingBox, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "font-weight-bold pb-4",
      children: "How did we do?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "list-details__item grey-text",
      children: "On a scale from 1 - 10, how easy did you find booking your hotel experience?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }, this), feedback.map(function (rate) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "button-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "",
          children: rate.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, _this)
      }, rate.id, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpbmdGZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJmZWVkYmFjayIsIm5hbWUiLCJpZCIsImltYWdlIiwiYW1vdW50IiwiYWRkZWQiLCJsYXJnZSIsIlJhdGluZ0JveCIsInN0eWxlZCIsImRpdiIsIk5hdiIsIm1hcCIsInJhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLENBQ2I7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLFFBQU0sRUFBRSxFQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBRGEsRUFRYjtBQUNFSixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUUsMEJBSFQ7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsT0FBSyxFQUFFO0FBTFQsQ0FSYSxFQWViO0FBQ0VKLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VJLE9BQUssRUFBRSxJQUhUO0FBSUVILE9BQUssRUFBRSx1QkFKVDtBQUtFQyxRQUFNLEVBQUUsQ0FMVjtBQU1FQyxPQUFLLEVBQUU7QUFOVCxDQWZhLEVBdUJiO0FBQ0VKLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSw0QkFIVDtBQUlFQyxRQUFNLEVBQUUsQ0FKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQXZCYSxFQThCYjtBQUNFSixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUUsd0JBSFQ7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsT0FBSyxFQUFFO0FBTFQsQ0E5QmEsRUFxQ2I7QUFDRUosTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFLDRCQUhUO0FBSUVDLFFBQU0sRUFBRSxDQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBckNhLEVBNENiO0FBQ0VKLE1BQUksRUFBRSxHQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSxnQ0FIVDtBQUlFQyxRQUFNLEVBQUUsQ0FKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQTVDYSxFQW1EYjtBQUNFSixNQUFJLEVBQUUsR0FEUjtBQUVFQyxJQUFFLEVBQUUsS0FGTjtBQUdFQyxPQUFLLEVBQUUscUJBSFQ7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsT0FBSyxFQUFFO0FBTFQsQ0FuRGEsRUEwRGI7QUFDRUosTUFBSSxFQUFFLEdBRFI7QUFFRUMsSUFBRSxFQUFFLEtBRk47QUFHRUMsT0FBSyxFQUFFLHdCQUhUO0FBSUVDLFFBQU0sRUFBRSxDQUpWO0FBS0VDLE9BQUssRUFBRTtBQUxULENBMURhLEVBaUViO0FBQ0VKLE1BQUksRUFBRSxJQURSO0FBRUVDLElBQUUsRUFBRSxLQUZOO0FBR0VDLE9BQUssRUFBRSw0QkFIVDtBQUlFQyxRQUFNLEVBQUUsRUFKVjtBQUtFQyxPQUFLLEVBQUU7QUFMVCxDQWpFYSxDQUFqQjtBQTBFQSxJQUFNRSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0hBQWY7S0FBTUYsUztBQVdTLFNBQVNHLEdBQVQsR0FBZTtBQUFBOztBQUU3QixzQkFDTyxxRUFBQyxTQUFEO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUcsZUFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosRUFPS1YsUUFBUSxDQUFDVyxHQUFULENBQWEsVUFBQUMsSUFBSTtBQUFBLDBCQUNkO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLCtCQUNJO0FBQVEsbUJBQVMsRUFBQyxFQUFsQjtBQUFBLG9CQUFzQkEsSUFBSSxDQUFDWDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBcUNXLElBQUksQ0FBQ1YsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURjO0FBQUEsS0FBakIsQ0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUDtBQWVBO01BakJ1QlEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NjI4ZGNiYTUzNGQwMTExNDk4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgZmVlZGJhY2sgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcxJyxcclxuICAgICAgaWQ6ICcwMDEnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9ob3RsaW5lLnBuZycsXHJcbiAgICAgIGFtb3VudDogMTAsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcyJyxcclxuICAgICAgaWQ6ICcwMDInLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9uZW9uanVuZ2xlLnBuZycsXHJcbiAgICAgIGFtb3VudDogMixcclxuICAgICAgYWRkZWQ6ICcyMDE0LTAxLTAxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzMnLFxyXG4gICAgICBpZDogJzAwMycsXHJcbiAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy8zaGl0cGF5LnBuZycsXHJcbiAgICAgIGFtb3VudDogNCxcclxuICAgICAgYWRkZWQ6ICcyMDE0LTAxLTAxJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzQnLFxyXG4gICAgICBpZDogJzAwNCcsXHJcbiAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2RheW9mdGhlZGVhZC5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDIsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc1JyxcclxuICAgICAgaWQ6ICcwMDUnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9tcmpla3lsbC5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDUsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc2JyxcclxuICAgICAgaWQ6ICcwMDYnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9kYXlvZnRoZWRlYWQucG5nJyxcclxuICAgICAgYW1vdW50OiA3LFxyXG4gICAgICBhZGRlZDogJzIwMTQtMDEtMDEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnNycsXHJcbiAgICAgIGlkOiAnMDA3JyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvc2Vhb2Z0cmFucXVpbGl0eS5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDIsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc4JyxcclxuICAgICAgaWQ6ICcwMDgnLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9hbG9oYS5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDEsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICc5JyxcclxuICAgICAgaWQ6ICcwMDknLFxyXG4gICAgICBpbWFnZTogJy4uL2ltYWdlcy9tcmpla3lsbC5wbmcnLFxyXG4gICAgICBhbW91bnQ6IDgsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICcxMCcsXHJcbiAgICAgIGlkOiAnMDEwJyxcclxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvZGF5b2Z0aGVkZWFkLnBuZycsXHJcbiAgICAgIGFtb3VudDogMTEsXHJcbiAgICAgIGFkZGVkOiAnMjAxNC0wMS0wMSdcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuY29uc3QgUmF0aW5nQm94ID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG5cclxuXHRyZXR1cm4gKFxyXG4gICAgICAgIDxSYXRpbmdCb3g+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgIEhvdyBkaWQgd2UgZG8/XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxpc3QtZGV0YWlsc19faXRlbSBncmV5LXRleHRcIj5cclxuICAgICAgICAgICAgICAgIE9uIGEgc2NhbGUgZnJvbSAxIC0gMTAsIGhvdyBlYXN5IGRpZCB5b3UgZmluZCBib29raW5nIHlvdXIgaG90ZWwgZXhwZXJpZW5jZT9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICB7ZmVlZGJhY2subWFwKHJhdGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiIGtleT17cmF0ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJcIj57cmF0ZS5uYW1lfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvUmF0aW5nQm94PlxyXG4gIFx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9