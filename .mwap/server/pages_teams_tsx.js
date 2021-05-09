exports.id = "pages_teams_tsx";
exports.ids = ["pages_teams_tsx"];
exports.modules = {

/***/ "./components/TeamCard.tsx":
/*!*********************************!*\
  !*** ./components/TeamCard.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/esm/image.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/link.js");


const TeamCard = ({team}) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("#F9FAFB", "gray.600"),
    p: 50,
    w: "full",
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    w: "xs",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("white", "gray.800"),
    shadow: "lg",
    rounded: "lg",
    overflow: "hidden",
    mx: "auto"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
    w: "full",
    h: 56,
    fit: "cover",
    src: team.logo,
    alt: "team logo"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    py: 5,
    textAlign: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
    display: "block",
    fontSize: "2xl",
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.800", "white"),
    fontWeight: "bold"
  }, team.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra.span, {
    fontSize: "sm",
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.700", "gray.200")
  }, team.city))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamCard);


/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./pages/teams.tsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./pages/teams.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/grid.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_TeamCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TeamCard */ "./components/TeamCard.tsx");





const TeamsPage = () => {
  const {teams} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("team");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h1"
  }, "Teams"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {
    templateColumns: "repeat(5, 1fr)"
  }, teams == null ? void 0 : teams.map((team) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridItem, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TeamCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    team
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamsPage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvVGVhbUNhcmQudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvdGVhbXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQSxNQUFNLFdBQW9DLENBQUMsQ0FBRSxVQUFXO0FBQ3RELFNBQ0UsaUVBQUMsa0RBQUksRUFBTDtBQUFBLElBQ0UsSUFBSSxtRUFBaUIsQ0FBQyxXQUFXO0FBQUEsSUFDakMsR0FBRztBQUFBLElBQ0gsR0FBRTtBQUFBLElBQ0YsWUFBVztBQUFBLElBQ1gsZ0JBQWU7QUFBQSxLQUVmLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLElBQUksbUVBQWlCLENBQUMsU0FBUztBQUFBLElBQy9CLFFBQU87QUFBQSxJQUNQLFNBQVE7QUFBQSxJQUNSLFVBQVM7QUFBQSxJQUNULElBQUc7QUFBQSxLQUVILGlFQUFDLG1EQUFLLEVBQU47QUFBQSxJQUFPLEdBQUU7QUFBQSxJQUFPLEdBQUc7QUFBQSxJQUFJLEtBQUk7QUFBQSxJQUFRLEtBQUssS0FBSztBQUFBLElBQU0sS0FBSTtBQUFBLE1BRXZELGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUFLLElBQUk7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUNwQixpRUFBQyxrREFBSSxFQUFMO0FBQUEsSUFDRSxTQUFRO0FBQUEsSUFDUixVQUFTO0FBQUEsSUFDVCxPQUFPLG1FQUFpQixDQUFDLFlBQVk7QUFBQSxJQUNyQyxZQUFXO0FBQUEsS0FFVixLQUFLLE9BRVIsaUVBQUMseURBQVcsRUFBWjtBQUFBLElBQWEsVUFBUztBQUFBLElBQUssT0FBTyxtRUFBaUIsQ0FBQyxZQUFZO0FBQUEsS0FDN0QsS0FBSztBQUFBO0FBUWxCLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3ZCO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQSxNQUFNLFlBQWdCLE1BQU07QUFDMUIsUUFBTSxDQUFFLFNBQVUsK0NBQVMsQ0FBZ0I7QUFFM0MsU0FDRSxvSEFDRSxpRUFBQyxzREFBTSxFQUFQLE1BQ0UsaUVBQUMsU0FBRCxNQUFPLFVBR1QsaUVBQUMscURBQU8sRUFBUjtBQUFBLElBQVMsSUFBRztBQUFBLEtBQUssVUFDakIsaUVBQUMsa0RBQUksRUFBTDtBQUFBLElBQU0saUJBQWdCO0FBQUEsS0FDbkIsK0JBQU8sSUFBSSxDQUFDLFNBQ1gsaUVBQUMsc0RBQVEsRUFBVCxNQUNFLGlFQUFDLHlEQUFRLEVBQVQ7QUFBQSxJQUFVO0FBQUE7QUFBQTtBQVN0QixpRUFBZSxTQUFTIiwiZmlsZSI6InBhZ2VzX3RlYW1zX3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNoYWtyYSwgQm94LCBJbWFnZSwgRmxleCwgdXNlQ29sb3JNb2RlVmFsdWUsIExpbmsgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgdHlwZSB7IFRlYW0gfSBmcm9tICcuLi9kYidcblxuaW50ZXJmYWNlIFRlYW1DYXJkUHJvcHMge1xuICB0ZWFtOiBUZWFtXG59XG5cbmNvbnN0IFRlYW1DYXJkOiBSZWFjdC5GQzxUZWFtQ2FyZFByb3BzPiA9ICh7IHRlYW0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNGOUZBRkInLCAnZ3JheS42MDAnKX1cbiAgICAgIHA9ezUwfVxuICAgICAgdz1cImZ1bGxcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICB3PVwieHNcIlxuICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2dyYXkuODAwJyl9XG4gICAgICAgIHNoYWRvdz1cImxnXCJcbiAgICAgICAgcm91bmRlZD1cImxnXCJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBteD1cImF1dG9cIlxuICAgICAgPlxuICAgICAgICA8SW1hZ2Ugdz1cImZ1bGxcIiBoPXs1Nn0gZml0PVwiY292ZXJcIiBzcmM9e3RlYW0ubG9nb30gYWx0PVwidGVhbSBsb2dvXCIgLz5cblxuICAgICAgICA8Qm94IHB5PXs1fSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMnhsXCJcbiAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnd2hpdGUnKX1cbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGVhbS5uYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Y2hha3JhLnNwYW4gZm9udFNpemU9XCJzbVwiIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS43MDAnLCAnZ3JheS4yMDAnKX0+XG4gICAgICAgICAgICB7dGVhbS5jaXR5fVxuICAgICAgICAgIDwvY2hha3JhLnNwYW4+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1DYXJkXG4iLCJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlYWRpbmcsIEdyaWQsIEdyaWRJdGVtIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcblxuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnbXdhcCdcblxuaW1wb3J0IHR5cGUgeyBUZWFtc1BhZ2VEYXRhIH0gZnJvbSAnLi4vbG9hZGVycy90ZWFtcydcbmltcG9ydCBUZWFtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1RlYW1DYXJkJ1xuLy8gaW1wb3J0IFJlYWN0SnNvbiBmcm9tICdyZWFjdC1qc29uLXZpZXcnXG5cbmNvbnN0IFRlYW1zUGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGVhbXMgfSA9IHVzZUxvYWRlcjxUZWFtc1BhZ2VEYXRhPigndGVhbScpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj5UZWFtczwvSGVhZGluZz5cbiAgICAgIDxHcmlkIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCI+XG4gICAgICAgIHt0ZWFtcz8ubWFwKCh0ZWFtKSA9PiAoXG4gICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgPFRlYW1DYXJkIHRlYW09e3RlYW19IC8+XG4gICAgICAgICAgICB7LyogPFJlYWN0SnNvbiBzcmM9e3RlYW19IC8+ICovfVxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1zUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==