exports.id = "pages_teams_tsx";
exports.ids = ["pages_teams_tsx"];
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/link-box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/esm/image.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/esm/spinner.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/text.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_MotionBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MotionBox */ "./components/MotionBox.tsx");




const TeamCard = ({team}) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MotionBox__WEBPACK_IMPORTED_MODULE_1__.MotionBox, {
    display: "flex",
    minW: "160",
    w: "160",
    p: 50,
    justifyContent: "center",
    whileHover: {scale: 1.05},
    whileTap: {scale: 0.95}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkBox, {
    w: "xs",
    bg: "white",
    shadow: "dark-lg",
    rounded: "lg",
    overflow: "hidden"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
    w: "full",
    h: 56,
    fit: "cover",
    src: team.logo,
    alt: "team logo",
    fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      h: 56,
      w: "full",
      direction: "column",
      align: "center",
      justify: "center"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
      color: "gray.500",
      size: "xs",
      py: "4",
      fontWeight: "bold"
    }, "Loading..."))
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link,
    to: `/team/${team.id}`,
    display: "block",
    fontSize: "2xl",
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useColorModeValue)("gray.800", "white"),
    fontWeight: "bold"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    py: 5,
    textAlign: "center",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useColorModeValue)("gray.800", "gray.200"),
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.useColorModeValue)("gray.200", "gray.700")
  }, team.name, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    fontSize: "sm"
  }, team.city)))));
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_TeamCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TeamCard */ "./components/TeamCard.tsx");





const TeamsPage = () => {
  const {teams} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("teams");
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Teams")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h1"
  }, "Teams"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {
    columns: [1, null, 2, 3],
    spacing: "80px"
  }, teams == null ? void 0 : teams.map((team) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_TeamCard__WEBPACK_IMPORTED_MODULE_3__.default, {
    team,
    key: team.id
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamsPage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvTW90aW9uQm94LnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvVGVhbUNhcmQudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvdGVhbXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtPLE1BQU0sWUFBc0MscURBQU0sQ0FBQyx3REFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcEU7QUFDQTtBQVVBO0FBRUE7QUFPQSxNQUFNLFdBQW9DLENBQUMsQ0FBRSxVQUFXO0FBQ3RELFNBQ0UsaUVBQUMsNERBQVMsRUFBVjtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsR0FBRTtBQUFBLElBQ0YsR0FBRztBQUFBLElBQ0gsZ0JBQWU7QUFBQSxJQUNmLFlBQVksQ0FBRSxPQUFPO0FBQUEsSUFDckIsVUFBVSxDQUFFLE9BQU87QUFBQSxLQUVuQixpRUFBQyxxREFBTyxFQUFSO0FBQUEsSUFBUyxHQUFFO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBUSxRQUFPO0FBQUEsSUFBVSxTQUFRO0FBQUEsSUFBSyxVQUFTO0FBQUEsS0FDaEUsaUVBQUMsbURBQUssRUFBTjtBQUFBLElBQ0UsR0FBRTtBQUFBLElBQ0YsR0FBRztBQUFBLElBQ0gsS0FBSTtBQUFBLElBQ0osS0FBSyxLQUFLO0FBQUEsSUFDVixLQUFJO0FBQUEsSUFDSixVQUNFLGlFQUFDLGtEQUFJLEVBQUw7QUFBQSxNQUFNLEdBQUc7QUFBQSxNQUFJLEdBQUU7QUFBQSxNQUFPLFdBQVU7QUFBQSxNQUFTLE9BQU07QUFBQSxNQUFTLFNBQVE7QUFBQSxPQUM5RCxpRUFBQyxxREFBTyxFQUFSLE9BQ0EsaUVBQUMsa0RBQUksRUFBTDtBQUFBLE1BQU0sT0FBTTtBQUFBLE1BQVcsTUFBSztBQUFBLE1BQUssSUFBRztBQUFBLE1BQUksWUFBVztBQUFBLE9BQU87QUFBQSxNQU1oRSxpRUFBQyx5REFBVyxFQUFaO0FBQUEsSUFDRSxJQUFJLGtEQUFRO0FBQVIsSUFDSixJQUFJLFNBQVMsS0FBSztBQUFBLElBQ2xCLFNBQVE7QUFBQSxJQUNSLFVBQVM7QUFBQSxJQUNULE9BQU8sbUVBQWlCLENBQUMsWUFBWTtBQUFBLElBQ3JDLFlBQVc7QUFBQSxLQUVYLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxJQUNWLElBQUksbUVBQWlCLENBQUMsWUFBWTtBQUFBLElBQ2xDLE9BQU8sbUVBQWlCLENBQUMsWUFBWTtBQUFBLEtBRXBDLEtBQUssTUFDTixpRUFBQyxrREFBSSxFQUFMO0FBQUEsSUFBTSxVQUFTO0FBQUEsS0FBTSxLQUFLO0FBQUE7QUFRdEMsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFdkI7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUdBLE1BQU0sWUFBZ0IsTUFBTTtBQUMxQixRQUFNLENBQUUsU0FBVSwrQ0FBUyxDQUFnQjtBQUUzQyxTQUNFLG9IQUNFLGlFQUFDLHNEQUFNLEVBQVAsTUFDRSxpRUFBQyxTQUFELE1BQU8sV0FHVCxpRUFBQyxxREFBTyxFQUFSO0FBQUEsSUFBUyxJQUFHO0FBQUEsS0FBSyxVQUNqQixpRUFBQyx3REFBVSxFQUFYO0FBQUEsSUFBWSxTQUFTLENBQUMsR0FBRyxNQUFNLEdBQUc7QUFBQSxJQUFJLFNBQVE7QUFBQSxLQUMzQywrQkFBTyxJQUFJLENBQUMsU0FDWCxpRUFBQyx5REFBUSxFQUFUO0FBQUEsSUFBVTtBQUFBLElBQVksS0FBSyxLQUFLO0FBQUE7QUFBQTtBQU8xQyxpRUFBZSxTQUFTIiwiZmlsZSI6InBhZ2VzX3RlYW1zX3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhUTUxDaGFrcmFQcm9wcywgY2hha3JhIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgSFRNTE1vdGlvblByb3BzIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxudHlwZSBNZXJnZTxQLCBUPiA9IE9taXQ8UCwga2V5b2YgVD4gJiBUXG50eXBlIE1vdGlvbkJveFByb3BzID0gTWVyZ2U8SFRNTENoYWtyYVByb3BzPCdkaXYnPiwgSFRNTE1vdGlvblByb3BzPCdkaXYnPj5cblxuZXhwb3J0IGNvbnN0IE1vdGlvbkJveDogUmVhY3QuRkM8TW90aW9uQm94UHJvcHM+ID0gbW90aW9uKGNoYWtyYS5kaXYpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBCb3gsXG4gIEltYWdlLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgTGlua0JveCxcbiAgTGlua092ZXJsYXksXG4gIFRleHQsXG4gIEZsZXgsXG4gIFNwaW5uZXIsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBMaW5rIGFzIE13YXBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tICdtd2FwJ1xuaW1wb3J0IHsgTW90aW9uQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb3Rpb25Cb3gnXG5pbXBvcnQgeyBUZWFtIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmludGVyZmFjZSBUZWFtQ2FyZFByb3BzIHtcbiAgdGVhbTogVGVhbVxufVxuXG5jb25zdCBUZWFtQ2FyZDogUmVhY3QuRkM8VGVhbUNhcmRQcm9wcz4gPSAoeyB0ZWFtIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TW90aW9uQm94XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBtaW5XPVwiMTYwXCJcbiAgICAgIHc9XCIxNjBcIlxuICAgICAgcD17NTB9XG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NSB9fVxuICAgID5cbiAgICAgIDxMaW5rQm94IHc9XCJ4c1wiIGJnPVwid2hpdGVcIiBzaGFkb3c9XCJkYXJrLWxnXCIgcm91bmRlZD1cImxnXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgIGg9ezU2fVxuICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICBzcmM9e3RlYW0ubG9nb31cbiAgICAgICAgICBhbHQ9XCJ0ZWFtIGxvZ29cIlxuICAgICAgICAgIGZhbGxiYWNrPXtcbiAgICAgICAgICAgIDxGbGV4IGg9ezU2fSB3PVwiZnVsbFwiIGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyYXkuNTAwXCIgc2l6ZT1cInhzXCIgcHk9XCI0XCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxMaW5rT3ZlcmxheVxuICAgICAgICAgIGFzPXtNd2FwTGlua31cbiAgICAgICAgICB0bz17YC90ZWFtLyR7dGVhbS5pZH1gfVxuICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgICAgZm9udFNpemU9XCIyeGxcIlxuICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnd2hpdGUnKX1cbiAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBweT17NX1cbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ2dyYXkuMjAwJyl9XG4gICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuMjAwJywgJ2dyYXkuNzAwJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RlYW0ubmFtZX1cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIj57dGVhbS5jaXR5fTwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9MaW5rT3ZlcmxheT5cbiAgICAgIDwvTGlua0JveD5cbiAgICA8L01vdGlvbkJveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtQ2FyZFxuIiwiaW1wb3J0IHR5cGUgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkaW5nLCBTaW1wbGVHcmlkIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcblxuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnbXdhcCdcblxuaW1wb3J0IHR5cGUgeyBUZWFtc1BhZ2VEYXRhIH0gZnJvbSAnLi4vbG9hZGVycy90ZWFtcydcbmltcG9ydCBUZWFtQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1RlYW1DYXJkJ1xuLy8gaW1wb3J0IFJlYWN0SnNvbiBmcm9tICdyZWFjdC1qc29uLXZpZXcnXG5cbmNvbnN0IFRlYW1zUGFnZTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGVhbXMgfSA9IHVzZUxvYWRlcjxUZWFtc1BhZ2VEYXRhPigndGVhbXMnKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5UZWFtczwvdGl0bGU+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPlRlYW1zPC9IZWFkaW5nPlxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIG51bGwsIDIsIDNdfSBzcGFjaW5nPVwiODBweFwiPlxuICAgICAgICB7dGVhbXM/Lm1hcCgodGVhbSkgPT4gKFxuICAgICAgICAgIDxUZWFtQ2FyZCB0ZWFtPXt0ZWFtfSBrZXk9e3RlYW0uaWR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1zUGFnZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==