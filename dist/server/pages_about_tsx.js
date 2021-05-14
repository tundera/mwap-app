exports.id = "pages_about_tsx";
exports.ids = ["pages_about_tsx"];
exports.modules = {

/***/ "./components/MotionBox.tsx":
/*!**********************************!*\
  !*** ./components/MotionBox.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionBox": () => (/* binding */ MotionBox)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.js");


const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.div);


/***/ }),

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_MotionBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MotionBox */ "./components/MotionBox.tsx");






const useQueryParams = () => {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();
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
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "About")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MotionBox__WEBPACK_IMPORTED_MODULE_3__.MotionBox, {
    display: "flex",
    py: "16",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    initial: {scaleY: 0},
    animate: {scaleY: 1},
    exit: {scaleY: 0},
    transition: {duration: 0.5}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    as: "h1"
  }, message)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvTW90aW9uQm94LnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2Fib3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLTyxNQUFNLFlBQXNDLHFEQUFNLENBQUMsd0RBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcEU7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUEsTUFBTSxpQkFBaUIsTUFBTTtBQUMzQixRQUFNLFdBQVcsNkRBQVc7QUFDNUIsUUFBTSxTQUFTLFNBQVMsVUFBVTtBQUNsQyxRQUFNLFFBQVEsT0FBTyxPQUFPO0FBQzVCLFFBQU0sU0FBb0M7QUFDMUMsUUFBTSxNQUFNLEtBQUssUUFBUSxDQUFDLFNBQVM7QUFDakMsVUFBTSxPQUFPLEtBQUssTUFBTTtBQUN4QixXQUFPLEtBQUssTUFBTSxtQkFBbUIsS0FBSztBQUFBO0FBRTVDLFNBQU87QUFBQTtBQUdULE1BQU0sWUFBZ0IsTUFBTTtBQUMxQixRQUFNLGNBQWM7QUFFcEIsUUFBTSxDQUFFLFdBQVksK0NBQVMsQ0FBaUMsU0FBUztBQUFBLElBQ3JFLFNBQVMsWUFBWTtBQUFBO0FBR3ZCLFNBQ0Usb0hBQ0UsaUVBQUMsc0RBQU0sRUFBUCxNQUNFLGlFQUFDLFNBQUQsTUFBTyxXQUdULGlFQUFDLDREQUFTLEVBQVY7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLElBQUc7QUFBQSxJQUNILGVBQWM7QUFBQSxJQUNkLFlBQVc7QUFBQSxJQUNYLGdCQUFlO0FBQUEsSUFDZixTQUFTLENBQUUsUUFBUTtBQUFBLElBQ25CLFNBQVMsQ0FBRSxRQUFRO0FBQUEsSUFDbkIsTUFBTSxDQUFFLFFBQVE7QUFBQSxJQUNoQixZQUFZLENBQUUsVUFBVTtBQUFBLEtBRXhCLGlFQUFDLHFEQUFPLEVBQVI7QUFBQSxJQUFTLElBQUc7QUFBQSxLQUFNO0FBQUE7QUFNMUIsaUVBQWUsU0FBUyIsImZpbGUiOiJwYWdlc19hYm91dF90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIVE1MQ2hha3JhUHJvcHMsIGNoYWtyYSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIEhUTUxNb3Rpb25Qcm9wcyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbnR5cGUgTWVyZ2U8UCwgVD4gPSBPbWl0PFAsIGtleW9mIFQ+ICYgVFxudHlwZSBNb3Rpb25Cb3hQcm9wcyA9IE1lcmdlPEhUTUxDaGFrcmFQcm9wczwnZGl2Jz4sIEhUTUxNb3Rpb25Qcm9wczwnZGl2Jz4+XG5cbmV4cG9ydCBjb25zdCBNb3Rpb25Cb3g6IFJlYWN0LkZDPE1vdGlvbkJveFByb3BzPiA9IG1vdGlvbihjaGFrcmEuZGl2KVxuIiwiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnbXdhcCdcblxuaW1wb3J0IHR5cGUgeyBBYm91dFBhZ2VEYXRhLCBBYm91dFBhZ2VQYXJhbXMgfSBmcm9tICcuLi9sb2FkZXJzL2Fib3V0J1xuaW1wb3J0IHsgTW90aW9uQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb3Rpb25Cb3gnXG5cbmNvbnN0IHVzZVF1ZXJ5UGFyYW1zID0gKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3Qgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoIHx8ICcnXG4gIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnN1YnN0cigxKVxuICBjb25zdCByZXN1bHQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuICBxdWVyeS5zcGxpdCgnJicpLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gcGFydC5zcGxpdCgnPScpXG4gICAgcmVzdWx0W2l0ZW1bMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW1bMV0pXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgQWJvdXRQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB1c2VRdWVyeVBhcmFtcygpXG5cbiAgY29uc3QgeyBtZXNzYWdlIH0gPSB1c2VMb2FkZXI8QWJvdXRQYWdlRGF0YSwgQWJvdXRQYWdlUGFyYW1zPignYWJvdXQnLCB7XG4gICAgbWVzc2FnZTogcXVlcnlQYXJhbXMubWVzc2FnZSxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+QWJvdXQ8L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxNb3Rpb25Cb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBweT1cIjE2XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGluaXRpYWw9e3sgc2NhbGVZOiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgc2NhbGVZOiAxIH19XG4gICAgICAgIGV4aXQ9e3sgc2NhbGVZOiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgPlxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCI+e21lc3NhZ2V9PC9IZWFkaW5nPlxuICAgICAgPC9Nb3Rpb25Cb3g+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9