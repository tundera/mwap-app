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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.tsx");
/* harmony import */ var _components_MotionBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MotionBox */ "./components/MotionBox.tsx");






const HomePage = () => {
  const {name} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("home");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MotionBox__WEBPACK_IMPORTED_MODULE_4__.MotionBox, {
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
  }, "Hello, ", name, "!"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_3__.default, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvSGVyby50c3giLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9jb21wb25lbnRzL01vdGlvbkJveC50c3giLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9wYWdlcy9ob21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTSxPQUFPLE1BQU07QUFDakIsU0FDRSxpRUFBQyxpREFBRyxFQUFKO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBVyxVQUFTO0FBQUEsS0FDM0IsaUVBQUMsaURBQUcsRUFBSjtBQUFBLElBQUssTUFBSztBQUFBLElBQU0sSUFBRztBQUFBLEtBQ2pCLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLElBQUksQ0FBRSxNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUFBLElBQzNDLEdBQUU7QUFBQSxJQUNGLFFBQU87QUFBQSxLQUVQLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE1BQU0sQ0FBRSxNQUFNO0FBQUEsSUFDZCxJQUFJLENBQUUsTUFBTSxHQUFHLElBQUksR0FBRyxJQUFJO0FBQUEsSUFDMUIsSUFBSSxDQUFFLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFBQSxLQUVwQyxpRUFBQyxpREFBRyxFQUFKO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBUyxHQUFHLENBQUUsTUFBTSxRQUFRLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTtBQUFBLElBQU0sSUFBRztBQUFBLEtBQ3ZFLGlFQUFDLHVEQUFTLEVBQVY7QUFBQSxJQUNFLFVBQVUsQ0FBRSxNQUFNLE9BQU8sSUFBSSxPQUFPLElBQUk7QUFBQSxJQUN4QyxlQUFjO0FBQUEsSUFDZCxZQUFXO0FBQUEsSUFDWCxZQUFXO0FBQUEsSUFDWCxPQUFPLG1FQUFpQixDQUFDLFlBQVk7QUFBQSxLQUN0QyxhQUdELGlFQUFDLHNEQUFRLEVBQVQ7QUFBQSxJQUNFLElBQUksQ0FBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFBQSxJQUMxQixJQUFJLENBQUUsSUFBSSxRQUFRLElBQUk7QUFBQSxJQUN0QixJQUFJO0FBQUEsSUFDSixVQUFVLENBQUUsTUFBTSxNQUFNLElBQUk7QUFBQSxJQUM1QixPQUFNO0FBQUEsSUFDTixZQUFXO0FBQUEsS0FDWjtBQUFBO0FBWWYsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NuQjtBQUNBO0FBS08sTUFBTSxZQUFzQyxxREFBTSxDQUFDLHdEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnBFO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUVBLE1BQU0sV0FBZSxNQUFNO0FBQ3pCLFFBQU0sQ0FBRSxRQUFTLCtDQUFTLENBQWU7QUFFekMsU0FDRSxvSEFDRSxpRUFBQyxzREFBTSxFQUFQLE1BQ0UsaUVBQUMsU0FBRCxNQUFPLFVBR1QsaUVBQUMsNERBQVMsRUFBVjtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsSUFBRztBQUFBLElBQ0gsZUFBYztBQUFBLElBQ2QsWUFBVztBQUFBLElBQ1gsZ0JBQWU7QUFBQSxJQUNmLFNBQVMsQ0FBRSxRQUFRO0FBQUEsSUFDbkIsU0FBUyxDQUFFLFFBQVE7QUFBQSxJQUNuQixNQUFNLENBQUUsUUFBUTtBQUFBLElBQ2hCLFlBQVksQ0FBRSxVQUFVO0FBQUEsS0FFeEIsaUVBQUMscURBQU8sRUFBUjtBQUFBLElBQVMsSUFBRztBQUFBLEtBQUssV0FBUSxNQUFLLE1BQzlCLGlFQUFDLHFEQUFJLEVBQUw7QUFBQTtBQU1SLGlFQUFlLFFBQVEiLCJmaWxlIjoicGFnZXNfaG9tZV90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjaGFrcmEsIEJveCwgdXNlQ29sb3JNb2RlVmFsdWUsIEljb24sIEltYWdlLCBIU3RhY2ssIFN0YWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuY29uc3QgSGVybyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvcz1cInJlbGF0aXZlXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgIDxCb3ggbWF4Vz1cIjd4bFwiIG14PVwiYXV0b1wiPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgcG9zPVwicmVsYXRpdmVcIlxuICAgICAgICAgIHBiPXt7IGJhc2U6IDgsIHNtOiAxNiwgbWQ6IDIwLCBsZzogMjgsIHhsOiAzMiB9fVxuICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICBib3JkZXI9XCJzb2xpZCAxcHggdHJhbnNwYXJlbnRcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgbXg9XCJhdXRvXCJcbiAgICAgICAgICAgIG1heFc9e3sgYmFzZTogJzd4bCcgfX1cbiAgICAgICAgICAgIHB4PXt7IGJhc2U6IDQsIHNtOiA2LCBsZzogOCB9fVxuICAgICAgICAgICAgbXQ9e3sgYmFzZTogMTIsIG1kOiAxNiwgbGc6IDIwLCB4bDogMjggfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIHc9e3sgYmFzZTogJ2Z1bGwnLCBtZDogMTEgLyAxMiwgeGw6IDggLyAxMiB9fSBteD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgPGNoYWtyYS5oMVxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICc0eGwnLCBzbTogJzV4bCcsIG1kOiAnNnhsJyB9fVxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodD1cInNob3J0XCJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuOTAwJywgJ3doaXRlJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNd2FwIEFwcFxuICAgICAgICAgICAgICA8L2NoYWtyYS5oMT5cbiAgICAgICAgICAgICAgPGNoYWtyYS5wXG4gICAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogMywgc206IDUsIG1kOiA1IH19XG4gICAgICAgICAgICAgICAgbXg9e3sgc206ICdhdXRvJywgbGc6IDAgfX1cbiAgICAgICAgICAgICAgICBtYj17Nn1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnbGcnLCBtZDogJ3hsJyB9fVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ9XCJiYXNlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFuaW0gYXV0ZSBpZCBtYWduYSBhbGlxdWEgYWQgYWQgbm9uIGRlc2VydW50IHN1bnQuIFF1aSBpcnVyZSBxdWkgbG9yZW0gY3VwaWRhdGF0XG4gICAgICAgICAgICAgICAgY29tbW9kby4gRWxpdCBzdW50IGFtZXQgZnVnaWF0IHZlbmlhbSBvY2NhZWNhdCBmdWdpYXQgYWxpcXVhLlxuICAgICAgICAgICAgICA8L2NoYWtyYS5wPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSFRNTENoYWtyYVByb3BzLCBjaGFrcmEgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBIVE1MTW90aW9uUHJvcHMgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG50eXBlIE1lcmdlPFAsIFQ+ID0gT21pdDxQLCBrZXlvZiBUPiAmIFRcbnR5cGUgTW90aW9uQm94UHJvcHMgPSBNZXJnZTxIVE1MQ2hha3JhUHJvcHM8J2Rpdic+LCBIVE1MTW90aW9uUHJvcHM8J2Rpdic+PlxuXG5leHBvcnQgY29uc3QgTW90aW9uQm94OiBSZWFjdC5GQzxNb3Rpb25Cb3hQcm9wcz4gPSBtb3Rpb24oY2hha3JhLmRpdilcbiIsImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJ1xuXG5pbXBvcnQgeyB1c2VMb2FkZXIgfSBmcm9tICdtd2FwJ1xuXG5pbXBvcnQgdHlwZSB7IEhvbWVQYWdlRGF0YSB9IGZyb20gJy4uL2xvYWRlcnMvaG9tZSdcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVybydcbmltcG9ydCB7IE1vdGlvbkJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTW90aW9uQm94J1xuXG5jb25zdCBIb21lUGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gdXNlTG9hZGVyPEhvbWVQYWdlRGF0YT4oJ2hvbWUnKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8TW90aW9uQm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcHk9XCIxNlwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBpbml0aWFsPXt7IHNjYWxlWTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHNjYWxlWTogMSB9fVxuICAgICAgICBleGl0PXt7IHNjYWxlWTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPkhlbGxvLCB7bmFtZX0hPC9IZWFkaW5nPlxuICAgICAgICA8SGVybyAvPlxuICAgICAgPC9Nb3Rpb25Cb3g+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=