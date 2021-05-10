exports.id = "pages_home_tsx";
exports.ids = ["pages_home_tsx"];
exports.modules = {

/***/ "./components/Hero.tsx":
/*!*****************************!*\
  !*** ./components/Hero.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");


const Hero = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    pos: "relative",
    overflow: "hidden"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    maxW: "7xl",
    mx: "auto"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    pos: "relative",
    pb: {base: 8, sm: 16, md: 20, lg: 28, xl: 32},
    w: "full",
    border: "solid 1px transparent"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    mx: "auto",
    maxW: {base: "7xl"},
    px: {base: 4, sm: 6, lg: 8},
    mt: {base: 12, md: 16, lg: 20, xl: 28}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    textAlign: "center",
    w: {base: "full", md: 11 / 12, xl: 8 / 12},
    mx: "auto"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra.h1, {
    fontSize: {base: "4xl", sm: "5xl", md: "6xl"},
    letterSpacing: "tight",
    lineHeight: "short",
    fontWeight: "extrabold",
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.900", "white")
  }, "Mwap App"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra.p, {
    mt: {base: 3, sm: 5, md: 5},
    mx: {sm: "auto", lg: 0},
    mb: 6,
    fontSize: {base: "lg", md: "xl"},
    color: "gray.500",
    lineHeight: "base"
  }, "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/home.tsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/home.tsx ***!
  \************************************************************************************************/
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
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.tsx");






const HomePage = () => {
  const {name} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("home");
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h1"
  }, "Hello, ", name, "!"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__.default, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    my: "8",
    onClick: () => setCount(count + 1)
  }, "Count: ", count));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvSGVyby50c3giLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9wYWdlcy9ob21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTSxPQUFPLE1BQU07QUFDakIsU0FDRSxpRUFBQyxpREFBRyxFQUFKO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBVyxVQUFTO0FBQUEsS0FDM0IsaUVBQUMsaURBQUcsRUFBSjtBQUFBLElBQUssTUFBSztBQUFBLElBQU0sSUFBRztBQUFBLEtBQ2pCLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLElBQUksQ0FBRSxNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUFBLElBQzNDLEdBQUU7QUFBQSxJQUNGLFFBQU87QUFBQSxLQUVQLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE1BQU0sQ0FBRSxNQUFNO0FBQUEsSUFDZCxJQUFJLENBQUUsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDMUIsSUFBSSxDQUFFLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFBQSxLQUVwQyxpRUFBQyxpREFBRyxFQUFKO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBUyxHQUFHLENBQUUsTUFBTSxRQUFRLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTtBQUFBLElBQU0sSUFBRztBQUFBLEtBQ3ZFLGlFQUFDLHVEQUFTLEVBQVY7QUFBQSxJQUNFLFVBQVUsQ0FBRSxNQUFNLE9BQU8sSUFBSSxPQUFPLElBQUk7QUFBQSxJQUN4QyxlQUFjO0FBQUEsSUFDZCxZQUFXO0FBQUEsSUFDWCxZQUFXO0FBQUEsSUFDWCxPQUFPLG1FQUFpQixDQUFDLFlBQVk7QUFBQSxLQUN0QyxhQUdELGlFQUFDLHNEQUFRLEVBQVQ7QUFBQSxJQUNFLElBQUksQ0FBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFBQSxJQUMxQixJQUFJLENBQUUsSUFBSSxRQUFRLElBQUk7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVLENBQUUsTUFBTSxNQUFNLElBQUk7QUFBQSxJQUM1QixPQUFNO0FBQUEsSUFDTixZQUFXO0FBQUEsS0FDWjtBQUFBO0FBWWYsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DbkI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUEsTUFBTSxXQUFlLE1BQU07QUFDekIsUUFBTSxDQUFFLFFBQVMsK0NBQVMsQ0FBZTtBQUN6QyxRQUFNLENBQUMsT0FBTyxZQUFZLCtDQUFRLENBQUM7QUFFbkMsU0FDRSxvSEFDRSxpRUFBQyxzREFBTSxFQUFQLE1BQ0UsaUVBQUMsU0FBRCxNQUFPLFVBR1QsaUVBQUMscURBQU8sRUFBUjtBQUFBLElBQVMsSUFBRztBQUFBLEtBQUssV0FBUSxNQUFLLE1BQzlCLGlFQUFDLHFEQUFJLEVBQUwsT0FDQSxpRUFBQyxvREFBTSxFQUFQO0FBQUEsSUFBUSxJQUFHO0FBQUEsSUFBSSxTQUFTLE1BQU0sU0FBUyxRQUFRO0FBQUEsS0FBSSxXQUN6QztBQUFBO0FBTWhCLGlFQUFlLFFBQVEiLCJmaWxlIjoicGFnZXNfaG9tZV90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjaGFrcmEsIEJveCwgdXNlQ29sb3JNb2RlVmFsdWUsIEljb24sIEltYWdlLCBIU3RhY2ssIFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvcz1cInJlbGF0aXZlXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgIDxCb3ggbWF4Vz1cIjd4bFwiIG14PVwiYXV0b1wiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgICAgIHBiPXt7IGJhc2U6IDgsIHNtOiAxNiwgbWQ6IDIwLCBsZzogMjgsIHhsOiAzMiB9fVxuICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICBib3JkZXI9XCJzb2xpZCAxcHggdHJhbnNwYXJlbnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbXg9XCJhdXRvXCJcbiAgICAgICAgICAgIG1heFc9e3sgYmFzZTogJzd4bCcgfX1cbiAgICAgICAgICAgIHB4PXt7IGJhc2U6IDQsIHNtOiA2LCBsZzogOCB9fVxuICAgICAgICAgICAgbXQ9e3sgYmFzZTogMTIsIG1kOiAxNiwgbGc6IDIwLCB4bDogMjggfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIHc9e3sgYmFzZTogJ2Z1bGwnLCBtZDogMTEgLyAxMiwgeGw6IDggLyAxMiB9fSBteD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgPGNoYWtyYS5oMVxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICc0eGwnLCBzbTogJzV4bCcsIG1kOiAnNnhsJyB9fVxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cInNob3J0XCJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuOTAwJywgJ3doaXRlJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNd2FwIEFwcFxuICAgICAgICAgICAgICA8L2NoYWtyYS5oMT5cbiAgICAgICAgICAgICAgPGNoYWtyYS5wXG4gICAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogMywgc206IDUsIG1kOiA1IH19XG4gICAgICAgICAgICAgICAgbXg9e3sgc206ICdhdXRvJywgbGc6IDAgfX1cbiAgICAgICAgICAgICAgICBtYj17Nn1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnbGcnLCBtZDogJ3hsJyB9fVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJiYXNlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFuaW0gYXV0ZSBpZCBtYWduYSBhbGlxdWEgYWQgYWQgbm9uIGRlc2VydW50IHN1bnQuIFF1aSBpcnVyZSBxdWkgbG9yZW0gY3VwaWRhdGF0XG4gICAgICAgICAgICAgICAgY29tbW9kby4gRWxpdCBzdW50IGFtZXQgZnVnaWF0IHZlbmlhbSBvY2NhZWNhdCBmdWdpYXQgYWxpcXVhLlxuICAgICAgICAgICAgICA8L2NoYWtyYS5wPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1xuIiwiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcblxuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnbXdhcCdcblxuaW1wb3J0IHR5cGUgeyBIb21lUGFnZURhdGEgfSBmcm9tICcuLi9sb2FkZXJzL2hvbWUnXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5cbmNvbnN0IEhvbWVQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBuYW1lIH0gPSB1c2VMb2FkZXI8SG9tZVBhZ2VEYXRhPignaG9tZScpXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoNSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPkhlbGxvLCB7bmFtZX0hPC9IZWFkaW5nPlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxCdXR0b24gbXk9XCI4XCIgb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIENvdW50OiB7Y291bnR9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==