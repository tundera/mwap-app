exports.id = "pages_about_tsx";
exports.ids = ["pages_about_tsx"];
exports.modules = {

/***/ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/about.tsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/about.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");






const useQueryParams = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const search = location.search || "";
  const query = search.substr(1);
  const result = {};
  query.split("&").forEach((part) => {
    const item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
};
const AboutPage = () => {
  const queryParams = useQueryParams();
  const {message} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("about", {
    message: queryParams.message
  });
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "About")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h1"
  }, message), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    my: "8",
    onClick: () => setCount(count + 1)
  }, "Count: ", count));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2Fib3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQSxNQUFNLGlCQUFpQixNQUFNO0FBQzNCLFFBQU0sV0FBVyw2REFBVztBQUM1QixRQUFNLFNBQVMsU0FBUyxVQUFVO0FBQ2xDLFFBQU0sUUFBUSxPQUFPLE9BQU87QUFDNUIsUUFBTSxTQUFvQztBQUMxQyxRQUFNLE1BQU0sS0FBSyxRQUFRLENBQUMsU0FBUztBQUNqQyxVQUFNLE9BQU8sS0FBSyxNQUFNO0FBQ3hCLFdBQU8sS0FBSyxNQUFNLG1CQUFtQixLQUFLO0FBQUE7QUFFNUMsU0FBTztBQUFBO0FBR1QsTUFBTSxZQUFnQixNQUFNO0FBQzFCLFFBQU0sY0FBYztBQUVwQixRQUFNLENBQUUsV0FBWSwrQ0FBUyxDQUFpQyxTQUFTO0FBQUEsSUFDckUsU0FBUyxZQUFZO0FBQUE7QUFHdkIsUUFBTSxDQUFDLE9BQU8sWUFBWSwrQ0FBUSxDQUFDO0FBRW5DLFNBQ0Usb0hBQ0UsaUVBQUMsc0RBQU0sRUFBUCxNQUNFLGlFQUFDLFNBQUQsTUFBTyxXQUdULGlFQUFDLHFEQUFPLEVBQVI7QUFBQSxJQUFTLElBQUc7QUFBQSxLQUFNLFVBQ2xCLGlFQUFDLG9EQUFNLEVBQVA7QUFBQSxJQUFRLElBQUc7QUFBQSxJQUFJLFNBQVMsTUFBTSxTQUFTLFFBQVE7QUFBQSxLQUFJLFdBQ3pDO0FBQUE7QUFNaEIsaUVBQWUsU0FBUyIsImZpbGUiOiJwYWdlc19hYm91dF90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJ1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyB1c2VMb2FkZXIgfSBmcm9tICdtd2FwJ1xuXG5pbXBvcnQgdHlwZSB7IEFib3V0UGFnZURhdGEsIEFib3V0UGFnZVBhcmFtcyB9IGZyb20gJy4uL2xvYWRlcnMvYWJvdXQnXG5cbmNvbnN0IHVzZVF1ZXJ5UGFyYW1zID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3Qgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoIHx8ICcnXG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnN1YnN0cigxKVxuICBjb25zdCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gcGFydC5zcGxpdCgnPScpXG4gICAgcmVzdWx0W2l0ZW1bMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW1bMV0pXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgQWJvdXRQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB1c2VRdWVyeVBhcmFtcygpXG5cbiAgY29uc3QgeyBtZXNzYWdlIH0gPSB1c2VMb2FkZXI8QWJvdXRQYWdlRGF0YSwgQWJvdXRQYWdlUGFyYW1zPignYWJvdXQnLCB7XG4gICAgbWVzc2FnZTogcXVlcnlQYXJhbXMubWVzc2FnZSxcbiAgfSlcblxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDUpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkFib3V0PC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8SGVhZGluZyBhcz1cImgxXCI+e21lc3NhZ2V9PC9IZWFkaW5nPlxuICAgICAgPEJ1dHRvbiBteT1cIjhcIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5cbiAgICAgICAgQ291bnQ6IHtjb3VudH1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0UGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==