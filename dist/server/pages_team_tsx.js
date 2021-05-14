exports.id = "pages_team_tsx";
exports.ids = ["pages_team_tsx"];
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

/***/ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/team.tsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/team.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/center.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/esm/image.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/avatar/dist/esm/avatar.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/stack.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/text.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_MotionBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MotionBox */ "./components/MotionBox.tsx");






const TeamPage = () => {
  const {id} = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();
  const {team, players, colorScheme} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("team", {id});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Team")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MotionBox__WEBPACK_IMPORTED_MODULE_3__.MotionBox, {
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
  }, team.city, " ", team.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {
    py: "16"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {
    src: team.logo,
    alt: `${team.name} team logo`,
    w: "md"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.SimpleGrid, {
    columns: [1, null, 2, 3],
    spacing: "40px"
  }, players == null ? void 0 : players.map((player) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {
    py: 6,
    key: player.id
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    h: "full",
    maxW: "270px",
    w: "full",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.useColorModeValue)("white", "gray.800"),
    boxShadow: "2xl",
    rounded: "md",
    overflow: "hidden"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    h: "120px",
    w: "full",
    bgGradient: `linear(to-r, ${colorScheme.primary}, ${colorScheme.secondary})`
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Flex, {
    justify: "center",
    mt: -12
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Avatar, {
    size: "xl",
    src: team.logo,
    fit: "cover",
    alt: "Author",
    css: {
      border: "2px solid white"
    }
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Box, {
    p: 6
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 0,
    align: "center",
    mb: 5
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    fontSize: "2xl",
    fontWeight: 500,
    fontFamily: "body"
  }, player.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    color: "gray.500"
  }, player.height, " / ", player.weight, "lbs")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    direction: "row",
    justify: "center",
    spacing: 6
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 0,
    align: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: 600
  }, player.number), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    color: "gray.500"
  }, "Number")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Stack, {
    spacing: 0,
    align: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontWeight: 600
  }, player.position), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Text, {
    fontSize: "sm",
    color: "gray.500"
  }, "Position"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.Button, {
    w: "full",
    mt: 8,
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.useColorModeValue)("#151f21", "gray.900"),
    color: "white",
    rounded: "md",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "lg"
    }
  }, "Player Profile"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvTW90aW9uQm94LnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL3RlYW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtPLE1BQU0sWUFBc0MscURBQU0sQ0FBQyx3REFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcEU7QUFDQTtBQWNBO0FBQ0E7QUFFQTtBQUlBO0FBRUEsTUFBTSxXQUFlLE1BQU07QUFDekIsUUFBTSxDQUFFLE1BQU8sMkRBQVM7QUFDeEIsUUFBTSxDQUFFLE1BQU0sU0FBUyxlQUFnQiwrQ0FBUyxDQUE2QixRQUFRLENBQUU7QUFFdkYsU0FDRSxvSEFDRSxpRUFBQyxzREFBTSxFQUFQLE1BQ0UsaUVBQUMsU0FBRCxNQUFPLFVBR1QsaUVBQUMsNERBQVMsRUFBVjtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsSUFBRztBQUFBLElBQ0gsZUFBYztBQUFBLElBQ2QsWUFBVztBQUFBLElBQ1gsZ0JBQWU7QUFBQSxJQUNmLFNBQVMsQ0FBRSxRQUFRO0FBQUEsSUFDbkIsU0FBUyxDQUFFLFFBQVE7QUFBQSxJQUNuQixNQUFNLENBQUUsUUFBUTtBQUFBLElBQ2hCLFlBQVksQ0FBRSxVQUFVO0FBQUEsS0FFeEIsaUVBQUMscURBQU8sRUFBUjtBQUFBLElBQVMsSUFBRztBQUFBLEtBQ1QsS0FBSyxNQUFLLEtBQUUsS0FBSyxPQUdwQixpRUFBQyxvREFBTSxFQUFQO0FBQUEsSUFBUSxJQUFHO0FBQUEsS0FDVCxpRUFBQyxtREFBSyxFQUFOO0FBQUEsSUFBTyxLQUFLLEtBQUs7QUFBQSxJQUFNLEtBQUssR0FBRyxLQUFLO0FBQUEsSUFBa0IsR0FBRTtBQUFBLE9BRzFELGlFQUFDLHdEQUFVLEVBQVg7QUFBQSxJQUFZLFNBQVMsQ0FBQyxHQUFHLE1BQU0sR0FBRztBQUFBLElBQUksU0FBUTtBQUFBLEtBQzNDLG1DQUFTLElBQUksQ0FBQyxXQUNiLGlFQUFDLG9EQUFNLEVBQVA7QUFBQSxJQUFRLElBQUk7QUFBQSxJQUFHLEtBQUssT0FBTztBQUFBLEtBQ3pCLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQUs7QUFBQSxJQUNMLEdBQUU7QUFBQSxJQUNGLElBQUksb0VBQWlCLENBQUMsU0FBUztBQUFBLElBQy9CLFdBQVU7QUFBQSxJQUNWLFNBQVE7QUFBQSxJQUNSLFVBQVM7QUFBQSxLQUVULGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLEdBQUU7QUFBQSxJQUNGLFlBQVksZ0JBQWdCLFlBQVksWUFBWSxZQUFZO0FBQUEsTUFFbEUsaUVBQUMsbURBQUksRUFBTDtBQUFBLElBQU0sU0FBUTtBQUFBLElBQVMsSUFBSTtBQUFBLEtBQ3pCLGlFQUFDLHFEQUFNLEVBQVA7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLEtBQUssS0FBSztBQUFBLElBQ1YsS0FBSTtBQUFBLElBQ0osS0FBSTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0gsUUFBUTtBQUFBO0FBQUEsT0FLZCxpRUFBQyxpREFBRyxFQUFKO0FBQUEsSUFBSyxHQUFHO0FBQUEsS0FDTixpRUFBQyxvREFBSyxFQUFOO0FBQUEsSUFBTyxTQUFTO0FBQUEsSUFBRyxPQUFNO0FBQUEsSUFBUyxJQUFJO0FBQUEsS0FDcEMsaUVBQUMscURBQU8sRUFBUjtBQUFBLElBQVMsVUFBUztBQUFBLElBQU0sWUFBWTtBQUFBLElBQUssWUFBVztBQUFBLEtBQ2pELE9BQU8sT0FFVixpRUFBQyxtREFBSSxFQUFMO0FBQUEsSUFBTSxPQUFNO0FBQUEsS0FDVCxPQUFPLFFBQU8sT0FBSSxPQUFPLFFBQU8sU0FJckMsaUVBQUMsb0RBQUssRUFBTjtBQUFBLElBQU8sV0FBVTtBQUFBLElBQU0sU0FBUTtBQUFBLElBQVMsU0FBUztBQUFBLEtBQy9DLGlFQUFDLG9EQUFLLEVBQU47QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLE9BQU87QUFBQSxLQUN4QixpRUFBQyxtREFBSSxFQUFMO0FBQUEsSUFBTSxZQUFZO0FBQUEsS0FBTSxPQUFPLFNBQy9CLGlFQUFDLG1EQUFJLEVBQUw7QUFBQSxJQUFNLFVBQVM7QUFBQSxJQUFLLE9BQU07QUFBQSxLQUFXLFlBSXZDLGlFQUFDLG9EQUFLLEVBQU47QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLE9BQU07QUFBQSxLQUN2QixpRUFBQyxtREFBSSxFQUFMO0FBQUEsSUFBTSxZQUFZO0FBQUEsS0FBTSxPQUFPLFdBQy9CLGlFQUFDLG1EQUFJLEVBQUw7QUFBQSxJQUFNLFVBQVM7QUFBQSxJQUFLLE9BQU07QUFBQSxLQUFXLGVBTXpDLGlFQUFDLHFEQUFNLEVBQVA7QUFBQSxJQUNFLEdBQUc7QUFBQSxJQUNILElBQUk7QUFBQSxJQUNKLElBQUksb0VBQWlCLENBQUMsV0FBVztBQUFBLElBQ2pDLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxNQUNOLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQTtBQUFBLEtBRWQ7QUFBQTtBQWFuQixpRUFBZSxRQUFRIiwiZmlsZSI6InBhZ2VzX3RlYW1fdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSFRNTENoYWtyYVByb3BzLCBjaGFrcmEgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBIVE1MTW90aW9uUHJvcHMgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG50eXBlIE1lcmdlPFAsIFQ+ID0gT21pdDxQLCBrZXlvZiBUPiAmIFRcbnR5cGUgTW90aW9uQm94UHJvcHMgPSBNZXJnZTxIVE1MQ2hha3JhUHJvcHM8J2Rpdic+LCBIVE1MTW90aW9uUHJvcHM8J2Rpdic+PlxuXG5leHBvcnQgY29uc3QgTW90aW9uQm94OiBSZWFjdC5GQzxNb3Rpb25Cb3hQcm9wcz4gPSBtb3Rpb24oY2hha3JhLmRpdilcbiIsImltcG9ydCB0eXBlIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgSGVhZGluZyxcbiAgU2ltcGxlR3JpZCxcbiAgVGV4dCxcbiAgQ2VudGVyLFxuICBJbWFnZSxcbiAgU3Bpbm5lcixcbiAgRmxleCxcbiAgQnV0dG9uLFxuICBBdmF0YXIsXG4gIFN0YWNrLFxuICBCb3gsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0LWFzeW5jJ1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlTG9hZGVyIH0gZnJvbSAnbXdhcCdcblxuaW1wb3J0IHR5cGUgeyBUZWFtUGFnZURhdGEsIFRlYW1QYWdlQXJncyB9IGZyb20gJy4uL2xvYWRlcnMvdGVhbSdcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVDYXJkJ1xuaW1wb3J0IHsgTW90aW9uQm94IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb3Rpb25Cb3gnXG5cbmNvbnN0IFRlYW1QYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zPFRlYW1QYWdlQXJncz4oKVxuICBjb25zdCB7IHRlYW0sIHBsYXllcnMsIGNvbG9yU2NoZW1lIH0gPSB1c2VMb2FkZXI8VGVhbVBhZ2VEYXRhLCBUZWFtUGFnZUFyZ3M+KCd0ZWFtJywgeyBpZCB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5UZWFtPC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8TW90aW9uQm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcHk9XCIxNlwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBpbml0aWFsPXt7IHNjYWxlWTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IHNjYWxlWTogMSB9fVxuICAgICAgICBleGl0PXt7IHNjYWxlWTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgID5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiPlxuICAgICAgICAgIHt0ZWFtLmNpdHl9IHt0ZWFtLm5hbWV9XG4gICAgICAgIDwvSGVhZGluZz5cblxuICAgICAgICA8Q2VudGVyIHB5PVwiMTZcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXt0ZWFtLmxvZ299IGFsdD17YCR7dGVhbS5uYW1lfSB0ZWFtIGxvZ29gfSB3PVwibWRcIiAvPlxuICAgICAgICA8L0NlbnRlcj5cblxuICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMSwgbnVsbCwgMiwgM119IHNwYWNpbmc9XCI0MHB4XCI+XG4gICAgICAgICAge3BsYXllcnM/Lm1hcCgocGxheWVyKSA9PiAoXG4gICAgICAgICAgICA8Q2VudGVyIHB5PXs2fSBrZXk9e3BsYXllci5pZH0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBoPVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgbWF4Vz1cIjI3MHB4XCJcbiAgICAgICAgICAgICAgICB3PVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZScsICdncmF5LjgwMCcpfVxuICAgICAgICAgICAgICAgIGJveFNoYWRvdz1cIjJ4bFwiXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cIm1kXCJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBoPVwiMTIwcHhcIlxuICAgICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgICAgYmdHcmFkaWVudD17YGxpbmVhcih0by1yLCAke2NvbG9yU2NoZW1lLnByaW1hcnl9LCAke2NvbG9yU2NoZW1lLnNlY29uZGFyeX0pYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBtdD17LTEyfT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0ZWFtLmxvZ299XG4gICAgICAgICAgICAgICAgICAgIGZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiQXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIHdoaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgICAgPEJveCBwPXs2fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswfSBhbGlnbj1cImNlbnRlclwiIG1iPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PXs1MDB9IGZvbnRGYW1pbHk9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGxheWVyLmhlaWdodH0gLyB7cGxheWVyLndlaWdodH1sYnNcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezB9IGFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD17NjAwfT57cGxheWVyLm51bWJlcn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezB9IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD17NjAwfT57cGxheWVyLnBvc2l0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHc9eydmdWxsJ31cbiAgICAgICAgICAgICAgICAgICAgbXQ9ezh9XG4gICAgICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnIzE1MWYyMScsICdncmF5LjkwMCcpfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17J3doaXRlJ31cbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZD17J21kJ31cbiAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KScsXG4gICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnbGcnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXIgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgIDwvTW90aW9uQm94PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1QYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9