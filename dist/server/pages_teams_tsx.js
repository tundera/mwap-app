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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/esm/spinner.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/link.js");


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
    alt: "team logo",
    fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {
      label: "Loading image..."
    })
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    py: 5,
    textAlign: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {
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

/***/ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/teams.tsx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/teams.tsx ***!
  \*************************************************************************************************/
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
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Teams")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvVGVhbUNhcmQudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvdGVhbXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUUEsTUFBTSxXQUFvQyxDQUFDLENBQUUsVUFBVztBQUN0RCxTQUNFLGlFQUFDLGtEQUFJLEVBQUw7QUFBQSxJQUNFLElBQUksbUVBQWlCLENBQUMsV0FBVztBQUFBLElBQ2pDLEdBQUc7QUFBQSxJQUNILEdBQUU7QUFBQSxJQUNGLFlBQVc7QUFBQSxJQUNYLGdCQUFlO0FBQUEsS0FFZixpRUFBQyxpREFBRyxFQUFKO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixJQUFJLG1FQUFpQixDQUFDLFNBQVM7QUFBQSxJQUMvQixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixVQUFTO0FBQUEsSUFDVCxJQUFHO0FBQUEsS0FFSCxpRUFBQyxtREFBSyxFQUFOO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixHQUFHO0FBQUEsSUFDSCxLQUFJO0FBQUEsSUFDSixLQUFLLEtBQUs7QUFBQSxJQUNWLEtBQUk7QUFBQSxJQUNKLFVBQVUsaUVBQUMscURBQU8sRUFBUjtBQUFBLE1BQVMsT0FBTTtBQUFBO0FBQUEsTUFFM0IsaUVBQUMsaURBQUcsRUFBSjtBQUFBLElBQUssSUFBSTtBQUFBLElBQUcsV0FBVTtBQUFBLEtBQ3BCLGlFQUFDLGtEQUFJLEVBQUw7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFVBQVM7QUFBQSxJQUNULE9BQU8sbUVBQWlCLENBQUMsWUFBWTtBQUFBLElBQ3JDLFlBQVc7QUFBQSxLQUVWLEtBQUssT0FFUixpRUFBQyx5REFBVyxFQUFaO0FBQUEsSUFBYSxVQUFTO0FBQUEsSUFBSyxPQUFPLG1FQUFpQixDQUFDLFlBQVk7QUFBQSxLQUM3RCxLQUFLO0FBQUE7QUFRbEIsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EdkI7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBLE1BQU0sWUFBZ0IsTUFBTTtBQUMxQixRQUFNLENBQUUsU0FBVSwrQ0FBUyxDQUFnQjtBQUUzQyxTQUNFLG9IQUNFLGlFQUFDLHNEQUFNLEVBQVAsTUFDRSxpRUFBQyxTQUFELE1BQU8sV0FHVCxpRUFBQyxxREFBTyxFQUFSO0FBQUEsSUFBUyxJQUFHO0FBQUEsS0FBSyxVQUNqQixpRUFBQyxrREFBSSxFQUFMO0FBQUEsSUFBTSxpQkFBZ0I7QUFBQSxLQUNuQiwrQkFBTyxJQUFJLENBQUMsU0FDWCxpRUFBQyxzREFBUSxFQUFULE1BQ0UsaUVBQUMseURBQVEsRUFBVDtBQUFBLElBQVU7QUFBQTtBQUFBO0FBU3RCLGlFQUFlLFNBQVMiLCJmaWxlIjoicGFnZXNfdGVhbXNfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2hha3JhLCBCb3gsIEZsZXgsIEltYWdlLCB1c2VDb2xvck1vZGVWYWx1ZSwgTGluaywgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCB0eXBlIHsgVGVhbSB9IGZyb20gJy4uL2RiJ1xuXG5pbnRlcmZhY2UgVGVhbUNhcmRQcm9wcyB7XG4gIHRlYW06IFRlYW1cbn1cblxuY29uc3QgVGVhbUNhcmQ6IFJlYWN0LkZDPFRlYW1DYXJkUHJvcHM+ID0gKHsgdGVhbSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI0Y5RkFGQicsICdncmF5LjYwMCcpfVxuICAgICAgcD17NTB9XG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIHc9XCJ4c1wiXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnZ3JheS44MDAnKX1cbiAgICAgICAgc2hhZG93PVwibGdcIlxuICAgICAgICByb3VuZGVkPVwibGdcIlxuICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgIG14PVwiYXV0b1wiXG4gICAgICA+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICBoPXs1Nn1cbiAgICAgICAgICBmaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgc3JjPXt0ZWFtLmxvZ299XG4gICAgICAgICAgYWx0PVwidGVhbSBsb2dvXCJcbiAgICAgICAgICBmYWxsYmFjaz17PFNwaW5uZXIgbGFiZWw9XCJMb2FkaW5nIGltYWdlLi4uXCIgLz59XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggcHk9ezV9IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICAgICAgZm9udFNpemU9XCIyeGxcIlxuICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICd3aGl0ZScpfVxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0ZWFtLm5hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxjaGFrcmEuc3BhbiBmb250U2l6ZT1cInNtXCIgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjcwMCcsICdncmF5LjIwMCcpfT5cbiAgICAgICAgICAgIHt0ZWFtLmNpdHl9XG4gICAgICAgICAgPC9jaGFrcmEuc3Bhbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0ZsZXg+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbUNhcmRcbiIsImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZGluZywgR3JpZCwgR3JpZEl0ZW0gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJ1xuXG5pbXBvcnQgeyB1c2VMb2FkZXIgfSBmcm9tICdtd2FwJ1xuXG5pbXBvcnQgdHlwZSB7IFRlYW1zUGFnZURhdGEgfSBmcm9tICcuLi9sb2FkZXJzL3RlYW1zJ1xuaW1wb3J0IFRlYW1DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVGVhbUNhcmQnXG4vLyBpbXBvcnQgUmVhY3RKc29uIGZyb20gJ3JlYWN0LWpzb24tdmlldydcblxuY29uc3QgVGVhbXNQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0ZWFtcyB9ID0gdXNlTG9hZGVyPFRlYW1zUGFnZURhdGE+KCd0ZWFtJylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+VGVhbXM8L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj5UZWFtczwvSGVhZGluZz5cbiAgICAgIDxHcmlkIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg1LCAxZnIpXCI+XG4gICAgICAgIHt0ZWFtcz8ubWFwKCh0ZWFtKSA9PiAoXG4gICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgPFRlYW1DYXJkIHRlYW09e3RlYW19IC8+XG4gICAgICAgICAgICB7LyogPFJlYWN0SnNvbiBzcmM9e3RlYW19IC8+ICovfVxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1zUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==