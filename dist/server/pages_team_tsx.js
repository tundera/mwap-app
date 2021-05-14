exports.id = "pages_team_tsx";
exports.ids = ["pages_team_tsx"];
exports.modules = {

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/center.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/esm/image.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/avatar/dist/esm/avatar.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/stack.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/text.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");





const TeamPage = () => {
  const {id} = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const {team, players, colorScheme} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("team", {id});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Team")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    as: "h1"
  }, team.city, " ", team.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {
    py: "16"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {
    src: team.logo,
    alt: `${team.name} team logo`,
    w: "md"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {
    columns: [1, null, 2, 3],
    spacing: "40px"
  }, players == null ? void 0 : players.map((player) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {
    py: 6,
    key: player.id
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {
    maxW: "270px",
    w: "full",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useColorModeValue)("white", "gray.800"),
    boxShadow: "2xl",
    rounded: "md",
    overflow: "hidden"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {
    h: "120px",
    w: "full",
    bgGradient: `linear(to-r, ${colorScheme.primary}, ${colorScheme.secondary})`
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {
    justify: "center",
    mt: -12
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Avatar, {
    size: "xl",
    src: team.logo,
    fit: "cover",
    alt: "Author",
    css: {
      border: "2px solid white"
    }
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {
    p: 6
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 0,
    align: "center",
    mb: 5
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    fontSize: "2xl",
    fontWeight: 500,
    fontFamily: "body"
  }, player.name), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    color: "gray.500"
  }, player.height, " / ", player.weight, "lbs")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    direction: "row",
    justify: "center",
    spacing: 6
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 0,
    align: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontWeight: 600
  }, player.number), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontSize: "sm",
    color: "gray.500"
  }, "Number")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Stack, {
    spacing: 0,
    align: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontWeight: 600
  }, player.position), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Text, {
    fontSize: "sm",
    color: "gray.500"
  }, "Position"))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.Button, {
    w: "full",
    mt: 8,
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.useColorModeValue)("#151f21", "gray.900"),
    color: "white",
    rounded: "md",
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "lg"
    }
  }, "Follow")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPage);


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL3RlYW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFLQSxNQUFNLFdBQWUsTUFBTTtBQUN6QixRQUFNLENBQUUsTUFBTywyREFBUztBQUN4QixRQUFNLENBQUUsTUFBTSxTQUFTLGVBQWdCLCtDQUFTLENBQTZCLFFBQVEsQ0FBRTtBQUV2RixTQUNFLG9IQUNFLGlFQUFDLHNEQUFNLEVBQVAsTUFDRSxpRUFBQyxTQUFELE1BQU8sVUFHVCxpRUFBQyxxREFBTyxFQUFSO0FBQUEsSUFBUyxJQUFHO0FBQUEsS0FDVCxLQUFLLE1BQUssS0FBRSxLQUFLLE9BR3BCLGlFQUFDLG9EQUFNLEVBQVA7QUFBQSxJQUFRLElBQUc7QUFBQSxLQUNULGlFQUFDLG1EQUFLLEVBQU47QUFBQSxJQUFPLEtBQUssS0FBSztBQUFBLElBQU0sS0FBSyxHQUFHLEtBQUs7QUFBQSxJQUFrQixHQUFFO0FBQUEsT0FHMUQsaUVBQUMsd0RBQVUsRUFBWDtBQUFBLElBQVksU0FBUyxDQUFDLEdBQUcsTUFBTSxHQUFHO0FBQUEsSUFBSSxTQUFRO0FBQUEsS0FDM0MsbUNBQVMsSUFBSSxDQUFDLFdBQ2IsaUVBQUMsb0RBQU0sRUFBUDtBQUFBLElBQVEsSUFBSTtBQUFBLElBQUcsS0FBSyxPQUFPO0FBQUEsS0FDekIsaUVBQUMsaURBQUcsRUFBSjtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsR0FBRTtBQUFBLElBQ0YsSUFBSSxtRUFBaUIsQ0FBQyxTQUFTO0FBQUEsSUFDL0IsV0FBVTtBQUFBLElBQ1YsU0FBUTtBQUFBLElBQ1IsVUFBUztBQUFBLEtBRVQsaUVBQUMsaURBQUcsRUFBSjtBQUFBLElBQ0UsR0FBRTtBQUFBLElBQ0YsR0FBRTtBQUFBLElBQ0YsWUFBWSxnQkFBZ0IsWUFBWSxZQUFZLFlBQVk7QUFBQSxNQUVsRSxpRUFBQyxtREFBSSxFQUFMO0FBQUEsSUFBTSxTQUFRO0FBQUEsSUFBUyxJQUFJO0FBQUEsS0FDekIsaUVBQUMscURBQU0sRUFBUDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsS0FBSyxLQUFLO0FBQUEsSUFDVixLQUFJO0FBQUEsSUFDSixLQUFJO0FBQUEsSUFDSixLQUFLO0FBQUEsTUFDSCxRQUFRO0FBQUE7QUFBQSxPQUtkLGlFQUFDLGlEQUFHLEVBQUo7QUFBQSxJQUFLLEdBQUc7QUFBQSxLQUNOLGlFQUFDLG9EQUFLLEVBQU47QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFHLE9BQU07QUFBQSxJQUFTLElBQUk7QUFBQSxLQUNwQyxpRUFBQyxxREFBTyxFQUFSO0FBQUEsSUFBUyxVQUFTO0FBQUEsSUFBTSxZQUFZO0FBQUEsSUFBSyxZQUFXO0FBQUEsS0FDakQsT0FBTyxPQUVWLGlFQUFDLG1EQUFJLEVBQUw7QUFBQSxJQUFNLE9BQU07QUFBQSxLQUNULE9BQU8sUUFBTyxPQUFJLE9BQU8sUUFBTyxTQUlyQyxpRUFBQyxvREFBSyxFQUFOO0FBQUEsSUFBTyxXQUFVO0FBQUEsSUFBTSxTQUFRO0FBQUEsSUFBUyxTQUFTO0FBQUEsS0FDL0MsaUVBQUMsb0RBQUssRUFBTjtBQUFBLElBQU8sU0FBUztBQUFBLElBQUcsT0FBTztBQUFBLEtBQ3hCLGlFQUFDLG1EQUFJLEVBQUw7QUFBQSxJQUFNLFlBQVk7QUFBQSxLQUFNLE9BQU8sU0FDL0IsaUVBQUMsbURBQUksRUFBTDtBQUFBLElBQU0sVUFBUztBQUFBLElBQUssT0FBTTtBQUFBLEtBQVcsWUFJdkMsaUVBQUMsb0RBQUssRUFBTjtBQUFBLElBQU8sU0FBUztBQUFBLElBQUcsT0FBTTtBQUFBLEtBQ3ZCLGlFQUFDLG1EQUFJLEVBQUw7QUFBQSxJQUFNLFlBQVk7QUFBQSxLQUFNLE9BQU8sV0FDL0IsaUVBQUMsbURBQUksRUFBTDtBQUFBLElBQU0sVUFBUztBQUFBLElBQUssT0FBTTtBQUFBLEtBQVcsZUFNekMsaUVBQUMscURBQU0sRUFBUDtBQUFBLElBQ0UsR0FBRztBQUFBLElBQ0gsSUFBSTtBQUFBLElBQ0osSUFBSSxtRUFBaUIsQ0FBQyxXQUFXO0FBQUEsSUFDakMsT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBO0FBQUEsS0FFZDtBQUFBO0FBWWpCLGlFQUFlLFFBQVEiLCJmaWxlIjoicGFnZXNfdGVhbV90c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEhlYWRpbmcsXG4gIFNpbXBsZUdyaWQsXG4gIFRleHQsXG4gIENlbnRlcixcbiAgSW1hZ2UsXG4gIFNwaW5uZXIsXG4gIEZsZXgsXG4gIEJ1dHRvbixcbiAgQXZhdGFyLFxuICBTdGFjayxcbiAgQm94LFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IHVzZUxvYWRlciB9IGZyb20gJ213YXAnXG5cbmltcG9ydCB0eXBlIHsgVGVhbVBhZ2VEYXRhLCBUZWFtUGFnZUFyZ3MgfSBmcm9tICcuLi9sb2FkZXJzL3RlYW0nXG5pbXBvcnQgUHJvZmlsZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlQ2FyZCdcblxuY29uc3QgVGVhbVBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXM8VGVhbVBhZ2VBcmdzPigpXG4gIGNvbnN0IHsgdGVhbSwgcGxheWVycywgY29sb3JTY2hlbWUgfSA9IHVzZUxvYWRlcjxUZWFtUGFnZURhdGEsIFRlYW1QYWdlQXJncz4oJ3RlYW0nLCB7IGlkIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPHRpdGxlPlRlYW08L3RpdGxlPlxuICAgICAgPC9IZWxtZXQ+XG5cbiAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIj5cbiAgICAgICAge3RlYW0uY2l0eX0ge3RlYW0ubmFtZX1cbiAgICAgIDwvSGVhZGluZz5cblxuICAgICAgPENlbnRlciBweT1cIjE2XCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e3RlYW0ubG9nb30gYWx0PXtgJHt0ZWFtLm5hbWV9IHRlYW0gbG9nb2B9IHc9XCJtZFwiIC8+XG4gICAgICA8L0NlbnRlcj5cblxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzEsIG51bGwsIDIsIDNdfSBzcGFjaW5nPVwiNDBweFwiPlxuICAgICAgICB7cGxheWVycz8ubWFwKChwbGF5ZXIpID0+IChcbiAgICAgICAgICA8Q2VudGVyIHB5PXs2fSBrZXk9e3BsYXllci5pZH0+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIG1heFc9XCIyNzBweFwiXG4gICAgICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZScsICdncmF5LjgwMCcpfVxuICAgICAgICAgICAgICBib3hTaGFkb3c9XCIyeGxcIlxuICAgICAgICAgICAgICByb3VuZGVkPVwibWRcIlxuICAgICAgICAgICAgICBvdmVyZmxvdz1cImhpZGRlblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBoPVwiMTIwcHhcIlxuICAgICAgICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICBiZ0dyYWRpZW50PXtgbGluZWFyKHRvLXIsICR7Y29sb3JTY2hlbWUucHJpbWFyeX0sICR7Y29sb3JTY2hlbWUuc2Vjb25kYXJ5fSlgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgbXQ9ey0xMn0+XG4gICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17dGVhbS5sb2dvfVxuICAgICAgICAgICAgICAgICAgZml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgPEJveCBwPXs2fT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17MH0gYWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9ezUwMH0gZm9udEZhbWlseT1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge3BsYXllci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cGxheWVyLmhlaWdodH0gLyB7cGxheWVyLndlaWdodH1sYnNcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswfSBhbGlnbj17J2NlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXs2MDB9PntwbGF5ZXIubnVtYmVyfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheS41MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXswfSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PXs2MDB9PntwbGF5ZXIucG9zaXRpb259PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5LjUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHc9eydmdWxsJ31cbiAgICAgICAgICAgICAgICAgIG10PXs4fVxuICAgICAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjMTUxZjIxJywgJ2dyYXkuOTAwJyl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj17J3doaXRlJ31cbiAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9eydtZCd9XG4gICAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMnB4KScsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJ2xnJyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRm9sbG93XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9TaW1wbGVHcmlkPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1QYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9