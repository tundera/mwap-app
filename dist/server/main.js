/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mwap_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mwap/async */ "./node_modules/@mwap/async/dist/async.modern.js");




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_about_tsx */ "pages_about_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./about.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/about.tsx")),
  {
    __chunkId: "pages_about_tsx",
  }
);

function AsyncComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicComponent, props);
}
  

/***/ }),

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mwap_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mwap/async */ "./node_modules/@mwap/async/dist/async.modern.js");




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_home_tsx */ "pages_home_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./home.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/home.tsx")),
  {
    __chunkId: "pages_home_tsx",
  }
);

function AsyncComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicComponent, props);
}
  

/***/ }),

/***/ "./pages/team.tsx":
/*!************************!*\
  !*** ./pages/team.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mwap_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mwap/async */ "./node_modules/@mwap/async/dist/async.modern.js");




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_team_tsx */ "pages_team_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./team.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/team.tsx")),
  {
    __chunkId: "pages_team_tsx",
  }
);

function AsyncComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicComponent, props);
}
  

/***/ }),

/***/ "./pages/teams.tsx":
/*!*************************!*\
  !*** ./pages/teams.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AsyncComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mwap_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mwap/async */ "./node_modules/@mwap/async/dist/async.modern.js");




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_teams_tsx */ "pages_teams_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./teams.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./pages/teams.tsx")),
  {
    __chunkId: "pages_teams_tsx",
  }
);

function AsyncComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicComponent, props);
}
  

/***/ }),

/***/ "./lib/supabase/index.ts":
/*!*******************************!*\
  !*** ./lib/supabase/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ "./node_modules/@supabase/supabase-js/dist/module/index.js");
var _a;

const supabaseUrl = "https://phpowjikthjfauoskdvc.supabase.co";
const supabaseKey = (_a = ({"NODE_ENV":"development","PUBLIC_PATH":"/dist/"}).MWAP_SUPABASE_KEY) != null ? _a : "";
const client = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ "./loaders/about.ts":
/*!**************************!*\
  !*** ./loaders/about.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loader = ({params}) => {
  const message = params.message || "Chickens are funny animals";
  return {
    message,
    ttl: 20
  };
};
const config = ({data}) => ({
  headers: {
    "cache-control": `public, max-age=${data.ttl}`
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loader, config});


/***/ }),

/***/ "./loaders/app-shell.ts":
/*!******************************!*\
  !*** ./loaders/app-shell.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loader = () => {
  return {
    title: "AppShell"
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loader});


/***/ }),

/***/ "./loaders/home.ts":
/*!*************************!*\
  !*** ./loaders/home.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const loader = () => {
  return {
    name: "World",
    ttl: 604800
  };
};
const config = ({data}) => ({
  headers: {
    "cache-control": `public, max-age=${data.ttl}`
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loader, config});


/***/ }),

/***/ "./loaders/index.ts":
/*!**************************!*\
  !*** ./loaders/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_shell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-shell */ "./loaders/app-shell.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./loaders/about.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./loaders/home.ts");
/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams */ "./loaders/teams.tsx");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team */ "./loaders/team.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "app-shell": _app_shell__WEBPACK_IMPORTED_MODULE_0__.default,
  about: _about__WEBPACK_IMPORTED_MODULE_1__.default,
  home: _home__WEBPACK_IMPORTED_MODULE_2__.default,
  teams: _teams__WEBPACK_IMPORTED_MODULE_3__.default,
  team: _team__WEBPACK_IMPORTED_MODULE_4__.default
});


/***/ }),

/***/ "./loaders/team.ts":
/*!*************************!*\
  !*** ./loaders/team.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/supabase */ "./lib/supabase/index.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (result) => {
      return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const loader = (_0) => __async(undefined, [_0], function* ({params}) {
  const {data: team} = yield _lib_supabase__WEBPACK_IMPORTED_MODULE_0__.default.from("Team").select("*").match({id: params.id}).single();
  const {data: players} = yield _lib_supabase__WEBPACK_IMPORTED_MODULE_0__.default.from("Player").select("*").match({teamId: params.id});
  const {data: coaches} = yield _lib_supabase__WEBPACK_IMPORTED_MODULE_0__.default.from("Coach").select("*").match({teamId: params.id});
  const {data: colorScheme} = yield _lib_supabase__WEBPACK_IMPORTED_MODULE_0__.default.from("ColorScheme").select("*").match({teamId: params.id}).single();
  return {
    team,
    players,
    coaches,
    colorScheme,
    ttl: 604800
  };
});
const config = ({data}) => ({
  headers: {
    "cache-control": `public, max-age=${data.ttl}`
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loader, config});


/***/ }),

/***/ "./pages/index.ts":
/*!************************!*\
  !*** ./pages/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./pages/about.tsx");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./pages/home.tsx");
/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams */ "./pages/teams.tsx");
/* harmony import */ var _team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team */ "./pages/team.tsx");




const pages = [
  {
    component: _home__WEBPACK_IMPORTED_MODULE_1__.default,
    exact: true,
    path: "/"
  },
  {
    component: _about__WEBPACK_IMPORTED_MODULE_0__.default,
    path: "/about"
  },
  {
    component: _teams__WEBPACK_IMPORTED_MODULE_2__.default,
    path: "/teams"
  },
  {
    component: _team__WEBPACK_IMPORTED_MODULE_3__.default,
    path: "/team/:id"
  }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pages);


/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var _mwap_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mwap/express */ "./node_modules/@mwap/express/dist/express.modern.js");

const createApp = (express, args) => {
  const mwapApp = (0,_mwap_express__WEBPACK_IMPORTED_MODULE_0__.createApp)(express, args);
  const app = express();
  app.use((req, res, next) => {
    res.setHeader("custom-server", "true");
    next();
  });
  app.use(mwapApp);
  return app;
};


/***/ }),

/***/ "./app.tsx":
/*!*****************!*\
  !*** ./app.tsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/chakra-provider.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/esm/spinner.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var inspx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inspx */ "./node_modules/inspx/dist/inspx.esm.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Navbar */ "./components/Navbar.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ "./components/Footer.tsx");








const App = ({children}) => {
  const {title} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("app-shell", {});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(mwap__WEBPACK_IMPORTED_MODULE_2__.ScrollToTop, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
    htmlAttributes: {lang: "en"},
    defaultTitle: "@mwap minimal example",
    titleTemplate: "%s | @mwap minimal example"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: "A minimal example demonstrating the @mwap framework."
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    charSet: "UTF-8"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(inspx__WEBPACK_IMPORTED_MODULE_3__.default, {
    disabled: "development" !== "development"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    flexDir: "column"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.chakra.main, {
    w: "full",
    flex: "1 1 auto",
    alignItems: "center"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    maxW: ["48em", "62em", "80em"],
    mx: "auto",
    px: "3",
    justify: "center",
    align: "center",
    direction: "column"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
      minH: "100vh",
      direction: "column",
      justify: "center",
      align: "center"
    }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Spinner, {
      size: "xl",
      label: "Loading..."
    }))
  }, children))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__.default, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/visually-hidden/dist/esm/visually-hidden.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/text.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/container.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/stack.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/simple-grid.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/link.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/esm/input.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/icon-button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const Logo = (props) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({
    height: 32,
    viewBox: "0 0 120 28",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M34.87 8.07H37.87V20.2H34.87V8.07ZM39.06 15.62C39.06 12.62 40.9 10.83 43.74 10.83C46.58 10.83 48.42 12.62 48.42 15.62C48.42 18.62 46.62 20.42 43.74 20.42C40.86 20.42 39.06 18.67 39.06 15.62ZM45.41 15.62C45.41 13.97 44.76 13 43.74 13C42.72 13 42.08 14 42.08 15.62C42.08 17.24 42.71 18.22 43.74 18.22C44.77 18.22 45.41 17.3 45.41 15.63V15.62ZM49.55 20.79H52.43C52.5671 21.0945 52.7988 21.3466 53.0907 21.5088C53.3826 21.6709 53.7191 21.7345 54.05 21.69C55.19 21.69 55.79 21.07 55.79 20.17V18.49H55.73C55.491 19.0049 55.1031 19.4363 54.6165 19.7287C54.1299 20.021 53.5668 20.1608 53 20.13C50.81 20.13 49.36 18.46 49.36 15.59C49.36 12.72 50.74 10.91 53.04 10.91C53.6246 10.8871 54.2022 11.0434 54.6955 11.3579C55.1888 11.6725 55.5742 12.1303 55.8 12.67V12.67V11H58.8V20.1C58.8 22.29 56.87 23.65 54.02 23.65C51.37 23.65 49.72 22.46 49.55 20.8V20.79ZM55.8 15.61C55.8 14.15 55.13 13.23 54.07 13.23C53.01 13.23 52.36 14.14 52.36 15.61C52.36 17.08 53 17.91 54.07 17.91C55.14 17.91 55.8 17.1 55.8 15.62V15.61ZM59.93 15.61C59.93 12.61 61.77 10.82 64.61 10.82C67.45 10.82 69.3 12.61 69.3 15.61C69.3 18.61 67.5 20.41 64.61 20.41C61.72 20.41 59.93 18.67 59.93 15.62V15.61ZM66.28 15.61C66.28 13.96 65.63 12.99 64.61 12.99C63.59 12.99 63 14 63 15.63C63 17.26 63.63 18.23 64.65 18.23C65.67 18.23 66.28 17.3 66.28 15.63V15.61ZM70.44 8.82C70.4321 8.51711 70.5144 8.2187 70.6763 7.96261C70.8383 7.70651 71.0726 7.50427 71.3496 7.38151C71.6266 7.25875 71.9338 7.221 72.2323 7.27305C72.5308 7.32511 72.8071 7.46462 73.0262 7.67389C73.2454 7.88317 73.3974 8.1528 73.4631 8.44859C73.5288 8.74438 73.5052 9.05301 73.3952 9.33536C73.2853 9.61772 73.094 9.86108 72.8456 10.0346C72.5973 10.2081 72.3029 10.304 72 10.31C71.7992 10.3238 71.5977 10.2959 71.4082 10.2281C71.2186 10.1603 71.0452 10.0541 70.8987 9.91601C70.7522 9.77796 70.6358 9.61111 70.5569 9.42594C70.4779 9.24077 70.4381 9.04128 70.44 8.84V8.82ZM70.44 11.02H73.44V20.2H70.44V11.02ZM84.33 15.61C84.33 18.61 83 20.32 80.72 20.32C80.1354 20.3575 79.5533 20.2146 79.0525 19.9106C78.5517 19.6065 78.1564 19.156 77.92 18.62H77.86V23.14H74.86V11H77.86V12.64H77.92C78.1454 12.0951 78.5332 11.6329 79.0306 11.3162C79.528 10.9995 80.1109 10.8437 80.7 10.87C83 10.91 84.37 12.63 84.37 15.63L84.33 15.61ZM81.33 15.61C81.33 14.15 80.66 13.22 79.61 13.22C78.56 13.22 77.89 14.16 77.88 15.61C77.87 17.06 78.56 17.99 79.61 17.99C80.66 17.99 81.33 17.08 81.33 15.63V15.61ZM89.48 10.81C91.97 10.81 93.48 11.99 93.55 13.88H90.82C90.82 13.23 90.28 12.82 89.45 12.82C88.62 12.82 88.25 13.14 88.25 13.61C88.25 14.08 88.58 14.23 89.25 14.37L91.17 14.76C93 15.15 93.78 15.89 93.78 17.28C93.78 19.18 92.05 20.4 89.5 20.4C86.95 20.4 85.28 19.18 85.15 17.31H88.04C88.13 17.99 88.67 18.39 89.55 18.39C90.43 18.39 90.83 18.1 90.83 17.62C90.83 17.14 90.55 17.04 89.83 16.89L88.1 16.52C86.31 16.15 85.37 15.2 85.37 13.8C85.39 12 87 10.83 89.48 10.83V10.81ZM103.79 20.18H100.9V18.47H100.84C100.681 19.0441 100.331 19.5466 99.8468 19.8941C99.3629 20.2415 98.7748 20.413 98.18 20.38C97.7242 20.4059 97.2682 20.3337 96.8427 20.1682C96.4172 20.0027 96.0322 19.7479 95.7137 19.4208C95.3952 19.0938 95.1505 18.7021 94.9964 18.2724C94.8422 17.8427 94.7821 17.3849 94.82 16.93V11H97.82V16.24C97.82 17.33 98.38 17.91 99.31 17.91C99.5281 17.9104 99.7437 17.8643 99.9425 17.7746C100.141 17.6849 100.319 17.5537 100.463 17.3899C100.606 17.226 100.714 17.0333 100.777 16.8247C100.84 16.616 100.859 16.3962 100.83 16.18V11H103.83L103.79 20.18ZM105.24 11H108.14V12.77H108.2C108.359 12.2035 108.702 11.7057 109.174 11.3547C109.646 11.0037 110.222 10.8191 110.81 10.83C111.409 10.7821 112.003 10.9612 112.476 11.3318C112.948 11.7024 113.264 12.2372 113.36 12.83H113.42C113.601 12.2309 113.977 11.7093 114.488 11.3472C114.998 10.9851 115.615 10.8031 116.24 10.83C116.648 10.8163 117.054 10.8886 117.432 11.0422C117.811 11.1957 118.152 11.4272 118.435 11.7214C118.718 12.0157 118.936 12.3662 119.075 12.7501C119.213 13.134 119.27 13.5429 119.24 13.95V20.2H116.24V14.75C116.24 13.75 115.79 13.29 114.95 13.29C114.763 13.2884 114.577 13.327 114.406 13.4032C114.235 13.4794 114.082 13.5914 113.958 13.7317C113.834 13.872 113.741 14.0372 113.686 14.2163C113.631 14.3955 113.616 14.5843 113.64 14.77V20.2H110.79V14.71C110.79 13.79 110.34 13.29 109.52 13.29C109.331 13.2901 109.143 13.3303 108.971 13.408C108.798 13.4858 108.643 13.5993 108.518 13.741C108.392 13.8827 108.298 14.0495 108.241 14.2304C108.185 14.4112 108.167 14.6019 108.19 14.79V20.2H105.19L105.24 11Z",
    fill: "currentColor"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M26.48 8.62001C25.9711 7.45637 25.2975 6.37195 24.48 5.40001C23.2714 3.92035 21.7632 2.71341 20.0546 1.85862C18.346 1.00383 16.4758 0.520582 14.567 0.440674C12.6582 0.360766 10.7541 0.68601 8.98 1.395C7.20594 2.104 5.60214 3.18067 4.27417 4.55414C2.94619 5.92762 1.92414 7.56676 1.27529 9.36369C0.626436 11.1606 0.365493 13.0746 0.509634 14.9796C0.653775 16.8847 1.19973 18.7376 2.11157 20.4164C3.02341 22.0953 4.28046 23.562 5.79998 24.72C6.77498 25.4779 7.85233 26.094 8.99998 26.55C10.609 27.2094 12.3311 27.549 14.07 27.55C17.6594 27.5421 21.0992 26.1113 23.6354 23.5713C26.1717 21.0314 27.5973 17.5894 27.6 14C27.6026 12.1485 27.2213 10.3166 26.48 8.62001V8.62001ZM14.06 3.19001C15.6215 3.18984 17.1642 3.53115 18.58 4.19001V4.19001C18.2347 4.33918 17.8718 4.44337 17.5 4.50001C16.2766 4.67711 15.1432 5.24509 14.2691 6.11918C13.3951 6.99328 12.8271 8.12661 12.65 9.35001C12.5722 10.0361 12.2602 10.6744 11.7665 11.1572C11.2728 11.64 10.6277 11.9377 9.93998 12C8.71657 12.1771 7.58324 12.7451 6.70915 13.6192C5.83505 14.4933 5.26707 15.6266 5.08998 16.85C5.03002 17.5024 4.75167 18.1155 4.29998 18.59V18.59C3.52063 16.9433 3.17053 15.1261 3.28225 13.3077C3.39397 11.4893 3.96388 9.72871 4.93895 8.18976C5.91401 6.65081 7.26255 5.38353 8.85905 4.50586C10.4555 3.62819 12.2481 3.16865 14.07 3.17001L14.06 3.19001ZM5.78998 21C5.90998 20.89 6.02998 20.79 6.14998 20.67C7.03963 19.8075 7.61069 18.6689 7.76998 17.44C7.83456 16.7493 8.14298 16.1041 8.63998 15.62C9.11822 15.1222 9.76195 14.8163 10.45 14.76C11.6734 14.5829 12.8067 14.0149 13.6808 13.1408C14.5549 12.2667 15.1229 11.1334 15.3 9.91001C15.3432 9.18752 15.6533 8.50685 16.17 8.00001C16.66 7.51186 17.3099 7.21711 18 7.17001C19.1239 7.01537 20.1721 6.51573 21 5.74001C21.9426 6.52208 22.7413 7.46291 23.36 8.52001C23.322 8.57136 23.2784 8.61832 23.23 8.66001C22.7526 9.16221 22.1098 9.47477 21.42 9.54001C20.1953 9.71401 19.0603 10.281 18.1856 11.1557C17.311 12.0303 16.744 13.1654 16.57 14.39C16.4995 15.0784 16.1932 15.7213 15.7029 16.2098C15.2127 16.6982 14.5687 17.0021 13.88 17.07C12.653 17.2458 11.5154 17.8126 10.6363 18.6863C9.75713 19.5601 9.18328 20.6941 8.99998 21.92C8.94616 22.4087 8.77832 22.878 8.50998 23.29C7.48397 22.6808 6.56506 21.9072 5.78998 21V21ZM14.06 24.86C13.0452 24.8611 12.0354 24.7197 11.06 24.44C11.3936 23.818 11.6106 23.1402 11.7 22.44C11.7701 21.7531 12.0749 21.1114 12.5632 20.6232C13.0514 20.135 13.6931 19.8301 14.38 19.76C15.6052 19.5849 16.7408 19.0178 17.6168 18.1435C18.4929 17.2693 19.0624 16.1349 19.24 14.91C19.3101 14.2231 19.6149 13.5814 20.1032 13.0932C20.5914 12.605 21.2331 12.3001 21.92 12.23C22.842 12.1101 23.7208 11.7668 24.48 11.23C24.9015 12.8279 24.9515 14.5012 24.626 16.1214C24.3004 17.7416 23.6081 19.2657 22.6021 20.5768C21.5961 21.8879 20.3031 22.9511 18.8224 23.6849C17.3417 24.4187 15.7125 24.8036 14.06 24.81V24.86Z",
    fill: "#2F855A"
  }));
};
const SocialButton = ({
  children,
  label,
  href
}) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.button, {
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
    rounded: "full",
    w: 8,
    h: 8,
    cursor: "pointer",
    as: "a",
    href,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease",
    _hover: {
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.200", "whiteAlpha.200")
    }
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VisuallyHidden, null, label), children);
};
const ListHeader = ({children}) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    fontWeight: "500",
    fontSize: "lg",
    mb: 2
  }, children);
};
function Footer() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    as: "footer",
    w: "full",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.50", "gray.900"),
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200")
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack,
    maxW: "6xl",
    py: 10
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.SimpleGrid, {
    templateColumns: {sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr"},
    spacing: 8
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 6
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Logo, {
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "white")
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    fontSize: "sm"
  }, "\xA9 2021 Mwap App. All rights reserved"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: "row",
    spacing: 6
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SocialButton, {
    label: "Twitter",
    href: "#"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaTwitter, null)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SocialButton, {
    label: "YouTube",
    href: "#"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaYoutube, null)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SocialButton, {
    label: "Instagram",
    href: "#"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaInstagram, null)))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    align: "flex-start"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListHeader, null, "Company"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "About us"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Blog"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Contact us"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Pricing"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Testimonials")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    align: "flex-start"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListHeader, null, "Support"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Help Center"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Terms of Service"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Legal"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Privacy Policy"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Link, {
    href: "#"
  }, "Satus")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    align: "flex-start"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListHeader, null, "Stay up to date"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: "row"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Input, {
    placeholder: "Your email address",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
    border: 0,
    _focus: {
      bg: "whiteAlpha.300"
    }
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, {
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("green.400", "green.800"),
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
    _hover: {
      bg: "green.600"
    },
    "aria-label": "Subscribe",
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_12__.BiMailSend, null)
  }))))));
}


/***/ }),

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/link.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/visually-hidden/dist/esm/visually-hidden.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/stack.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/icon-button.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/close-button/dist/esm/close-button.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






function Navbar() {
  const bg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.800", "white");
  const mobileNav = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();
  const {toggleColorMode} = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
  const text = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("dark", "light");
  const color = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("white", "gray.800");
  const SwitchIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMoon, react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaSun);
  const StickyFlex = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra.header)`
    position: sticky;
    backdrop-filter: saturate(180%) blur(20px);
    transition: background-color 0.1 ease-in-out;
  `;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(StickyFlex, {
    bg,
    w: "full",
    px: {base: 2, sm: 4},
    py: 4,
    shadow: "md",
    color,
    zIndex: "20"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {
    href: "/",
    title: "Mwap App Home Page",
    display: "flex",
    alignItems: "center",
    mx: "4",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaReact, {
    size: "32"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VisuallyHidden, null, "mwap")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Heading, {
    as: "h1",
    fontSize: "2xl",
    fontWeight: "bold"
  }, "mwap")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.HStack, {
    display: "flex",
    alignItems: "center",
    spacing: 1
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.HStack, {
    spacing: 1,
    mr: 1,
    display: {base: "none", md: "inline-flex"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/",
    variant: "ghost",
    color: "current",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, "Home"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: `/about?message=${encodeURI("Test Message From Search")}`,
    variant: "ghost",
    color: "current",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, "About"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/teams",
    variant: "ghost",
    color: "current",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, "Teams")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
    size: "md",
    fontSize: "lg",
    "aria-label": `Switch to ${text} mode`,
    variant: "ghost",
    color: "current",
    ml: {base: "0", md: "3"},
    onClick: toggleColorMode,
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwitchIcon, null)
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_13__.Box, {
    display: {base: "inline-flex", md: "none"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.IconButton, {
    display: {base: "flex", md: "none"},
    "aria-label": "Open menu",
    fontSize: "20px",
    color: "current",
    variant: "ghost",
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_14__.AiOutlineMenu, null),
    onClick: mobileNav.onOpen
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.VStack, {
    pos: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: mobileNav.isOpen ? "flex" : "none",
    flexDirection: "column",
    p: 2,
    pb: 4,
    m: 2,
    bg,
    spacing: 3,
    rounded: "sm",
    shadow: "sm"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.CloseButton, {
    "aria-label": "Close menu",
    onClick: mobileNav.onClose
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/",
    w: "full",
    variant: "ghost",
    onClick: mobileNav.onClose
  }, "Home"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: `/about?message=${encodeURI("Test Message From Search")}`,
    w: "full",
    variant: "ghost",
    onClick: mobileNav.onClose
  }, "About"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link,
    to: "/teams",
    w: "full",
    variant: "ghost",
    onClick: mobileNav.onClose
  }, "Teams"))))));
}


/***/ }),

/***/ "./document.tsx":
/*!**********************!*\
  !*** ./document.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mwap_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mwap/server */ "./node_modules/@mwap/server/dist/server.modern.js");


const Document = () => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mwap_server__WEBPACK_IMPORTED_MODULE_1__.Html, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mwap_server__WEBPACK_IMPORTED_MODULE_1__.Head, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    charSet: "utf-8"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mwap_server__WEBPACK_IMPORTED_MODULE_1__.Body, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("script", {
    async: true,
    src: "https://api.countapi.xyz/hit/mysite.com/visits"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Document);


/***/ }),

/***/ "./loaders/teams.tsx":
/*!***************************!*\
  !*** ./loaders/teams.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/supabase */ "./lib/supabase/index.ts");
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (result) => {
      return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const loader = () => __async(undefined, null, function* () {
  const response = yield _lib_supabase__WEBPACK_IMPORTED_MODULE_0__.default.from("Team").select("*");
  console.dir(response);
  return {
    teams: response.data,
    ttl: 604800
  };
});
const config = ({data}) => ({
  headers: {
    "cache-control": `public, max-age=${data.ttl}`
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({loader, config});


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");;

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");;

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("constants");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");;

/***/ }),

/***/ "encoding":
/*!***************************!*\
  !*** external "encoding" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("encoding");;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");;

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");;

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./server.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e("vendors");
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2Fib3V0LnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2hvbWUudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvdGVhbS50c3giLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9wYWdlcy90ZWFtcy50c3giLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9saWIvc3VwYWJhc2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2Fib3V0LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy9hcHAtc2hlbGwudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2hvbWUudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2luZGV4LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy90ZWFtLnRzIiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9hcHAudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vY29tcG9uZW50cy9Gb290ZXIudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vZG9jdW1lbnQudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy90ZWFtcy50c3giLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImJ1ZmZlclwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwiY29uc3RhbnRzXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImVuY29kaW5nXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwib3NcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJzdHJlYW1cIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcInN0cmluZ19kZWNvZGVyXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJ0dHlcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwiemxpYlwiIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9td2FwLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9yZXF1aXJlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNPOztBQUV0Qyx5QkFBeUIsb0RBQU8sT0FBTyx5VEFDOEY7QUFDckk7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixTQUFTLGdEQUFtQjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWitCO0FBQ087O0FBRXRDLHlCQUF5QixvREFBTyxPQUFPLHFUQUM0RjtBQUNuSTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLFNBQVMsZ0RBQW1CO0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaK0I7QUFDTzs7QUFFdEMseUJBQXlCLG9EQUFPLE9BQU8scVRBQzRGO0FBQ25JO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsU0FBUyxnREFBbUI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1orQjtBQUNPOztBQUV0Qyx5QkFBeUIsb0RBQU8sT0FBTyx5VEFDOEY7QUFDckk7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixTQUFTLGdEQUFtQjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFFQSxN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QUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUscUJBQXFCO1dBQ3BDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBLEdBQUc7V0FDSDtXQUNBOztXQUVBOztXQUVBOztXQUVBLGtCOzs7OztXQ3JDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1VDSkE7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tIFwiQG13YXAvYXN5bmNcIjtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFxuICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzX2Fib3V0X3RzeFwiICovIFwiISEuLi9ub2RlX21vZHVsZXMvZXNidWlsZC1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9hYm91dC50c3hcIiksXG4gIHtcbiAgICBfX2NodW5rSWQ6IFwicGFnZXNfYWJvdXRfdHN4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KER5bmFtaWNDb21wb25lbnQsIHByb3BzKTtcbn1cbiAgIiwiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tIFwiQG13YXAvYXN5bmNcIjtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFxuICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzX2hvbWVfdHN4XCIgKi8gXCIhIS4uL25vZGVfbW9kdWxlcy9lc2J1aWxkLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL2hvbWUudHN4XCIpLFxuICB7XG4gICAgX19jaHVua0lkOiBcInBhZ2VzX2hvbWVfdHN4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KER5bmFtaWNDb21wb25lbnQsIHByb3BzKTtcbn1cbiAgIiwiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tIFwiQG13YXAvYXN5bmNcIjtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFxuICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzX3RlYW1fdHN4XCIgKi8gXCIhIS4uL25vZGVfbW9kdWxlcy9lc2J1aWxkLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL3RlYW0udHN4XCIpLFxuICB7XG4gICAgX19jaHVua0lkOiBcInBhZ2VzX3RlYW1fdHN4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KER5bmFtaWNDb21wb25lbnQsIHByb3BzKTtcbn1cbiAgIiwiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tIFwiQG13YXAvYXN5bmNcIjtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFxuICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzX3RlYW1zX3RzeFwiICovIFwiISEuLi9ub2RlX21vZHVsZXMvZXNidWlsZC1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi90ZWFtcy50c3hcIiksXG4gIHtcbiAgICBfX2NodW5rSWQ6IFwicGFnZXNfdGVhbXNfdHN4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KER5bmFtaWNDb21wb25lbnQsIHByb3BzKTtcbn1cbiAgIiwiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJ1xuXG5jb25zdCBzdXBhYmFzZVVybCA9ICdodHRwczovL3BocG93amlrdGhqZmF1b3NrZHZjLnN1cGFiYXNlLmNvJ1xuY29uc3Qgc3VwYWJhc2VLZXkgPSBwcm9jZXNzLmVudi5NV0FQX1NVUEFCQVNFX0tFWSA/PyAnJ1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlS2V5KVxuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRcbiIsImltcG9ydCB0eXBlIHsgTG9hZGVyLCBMb2FkZXJDb25maWdGdW5jIH0gZnJvbSBcIm13YXBcIjtcblxuZXhwb3J0IHR5cGUgQWJvdXRQYWdlRGF0YSA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0dGw6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFib3V0UGFnZVBhcmFtcyA9IHtcbiAgbWVzc2FnZT86IHN0cmluZztcbn07XG5cbmNvbnN0IGxvYWRlcjogTG9hZGVyPEFib3V0UGFnZURhdGEsIEFib3V0UGFnZVBhcmFtcz4gPSAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gcGFyYW1zLm1lc3NhZ2UgfHwgXCJDaGlja2VucyBhcmUgZnVubnkgYW5pbWFsc1wiO1xuXG4gIHJldHVybiB7XG4gICAgbWVzc2FnZSxcbiAgICB0dGw6IDIwLFxuICB9O1xufTtcblxuY29uc3QgY29uZmlnOiBMb2FkZXJDb25maWdGdW5jPEFib3V0UGFnZURhdGE+ID0gKHsgZGF0YSB9KSA9PiAoe1xuICBoZWFkZXJzOiB7XG4gICAgXCJjYWNoZS1jb250cm9sXCI6IGBwdWJsaWMsIG1heC1hZ2U9JHtkYXRhLnR0bH1gLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9hZGVyLCBjb25maWcgfTtcbiIsImltcG9ydCB0eXBlIHsgTG9hZGVyIH0gZnJvbSAnbXdhcCdcbmltcG9ydCB0eXBlIHsgTmF2YmFyTGluayB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgdHlwZSBBcHBTaGVsbFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIGxpbmtzPzogTmF2YmFyTGlua1xufVxuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxBcHBTaGVsbFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0FwcFNoZWxsJyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWRlciB9XG4iLCJpbXBvcnQgdHlwZSB7IExvYWRlciwgTG9hZGVyQ29uZmlnRnVuYyB9IGZyb20gJ213YXAnXG5cbmV4cG9ydCB0eXBlIEhvbWVQYWdlRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nXG4gIHR0bDogbnVtYmVyXG59XG5cbmNvbnN0IGxvYWRlcjogTG9hZGVyPEhvbWVQYWdlRGF0YT4gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ1dvcmxkJyxcbiAgICB0dGw6IDYwNDgwMCxcbiAgfVxufVxuXG5jb25zdCBjb25maWc6IExvYWRlckNvbmZpZ0Z1bmM8SG9tZVBhZ2VEYXRhPiA9ICh7IGRhdGEgfSkgPT4gKHtcbiAgaGVhZGVyczoge1xuICAgICdjYWNoZS1jb250cm9sJzogYHB1YmxpYywgbWF4LWFnZT0ke2RhdGEudHRsfWAsXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWRlciwgY29uZmlnIH1cbiIsImltcG9ydCBhcHBTaGVsbCBmcm9tICcuL2FwcC1zaGVsbCdcbmltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0J1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IHRlYW1zIGZyb20gJy4vdGVhbXMnXG5pbXBvcnQgdGVhbSBmcm9tICcuL3RlYW0nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ2FwcC1zaGVsbCc6IGFwcFNoZWxsLFxuICBhYm91dCxcbiAgaG9tZSxcbiAgdGVhbXMsXG4gIHRlYW0sXG59XG4iLCJpbXBvcnQgdHlwZSB7IExvYWRlciwgTG9hZGVyQ29uZmlnRnVuYyB9IGZyb20gJ213YXAnXG5pbXBvcnQgdHlwZSB7IFRlYW0sIFBsYXllciwgQ29hY2gsIENvbG9yU2NoZW1lIH0gZnJvbSAnLi4vdHlwZXMnXG5cbmltcG9ydCBzdXBhYmFzZSBmcm9tICcuLi9saWIvc3VwYWJhc2UnXG5cbmV4cG9ydCB0eXBlIFRlYW1QYWdlRGF0YSA9IHtcbiAgdGVhbTogVGVhbVxuICBwbGF5ZXJzOiBQbGF5ZXJbXVxuICBjb2FjaGVzOiBDb2FjaFtdXG4gIGNvbG9yU2NoZW1lOiBDb2xvclNjaGVtZVxuICB0dGw6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBUZWFtUGFnZUFyZ3MgPSB7XG4gIGlkOiBzdHJpbmdcbn1cblxuY29uc3QgbG9hZGVyOiBMb2FkZXI8VGVhbVBhZ2VEYXRhPiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogdGVhbSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbTxUZWFtPignVGVhbScpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm1hdGNoKHsgaWQ6IHBhcmFtcy5pZCB9KVxuICAgIC5zaW5nbGUoKVxuICBjb25zdCB7IGRhdGE6IHBsYXllcnMgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb208UGxheWVyPignUGxheWVyJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAubWF0Y2goeyB0ZWFtSWQ6IHBhcmFtcy5pZCB9KVxuICBjb25zdCB7IGRhdGE6IGNvYWNoZXMgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgLmZyb208Q29hY2g+KCdDb2FjaCcpXG4gICAgLnNlbGVjdCgnKicpXG4gICAgLm1hdGNoKHsgdGVhbUlkOiBwYXJhbXMuaWQgfSlcbiAgY29uc3QgeyBkYXRhOiBjb2xvclNjaGVtZSB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAuZnJvbTxDb2xvclNjaGVtZT4oJ0NvbG9yU2NoZW1lJylcbiAgICAuc2VsZWN0KCcqJylcbiAgICAubWF0Y2goeyB0ZWFtSWQ6IHBhcmFtcy5pZCB9KVxuICAgIC5zaW5nbGUoKVxuXG4gIHJldHVybiB7XG4gICAgdGVhbSxcbiAgICBwbGF5ZXJzLFxuICAgIGNvYWNoZXMsXG4gICAgY29sb3JTY2hlbWUsXG4gICAgdHRsOiA2MDQ4MDAsXG4gIH1cbn1cblxuY29uc3QgY29uZmlnOiBMb2FkZXJDb25maWdGdW5jPFRlYW1QYWdlRGF0YT4gPSAoeyBkYXRhIH0pID0+ICh7XG4gIGhlYWRlcnM6IHtcbiAgICAnY2FjaGUtY29udHJvbCc6IGBwdWJsaWMsIG1heC1hZ2U9JHtkYXRhLnR0bH1gLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkZXIsIGNvbmZpZyB9XG4iLCJpbXBvcnQgdHlwZSB7IFBhZ2UgfSBmcm9tICdtd2FwJ1xuXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dCdcbmltcG9ydCBIb21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBUZWFtcyBmcm9tICcuL3RlYW1zJ1xuaW1wb3J0IFRlYW0gZnJvbSAnLi90ZWFtJ1xuXG5jb25zdCBwYWdlczogUGFnZVtdID0gW1xuICB7XG4gICAgY29tcG9uZW50OiBIb21lLFxuICAgIGV4YWN0OiB0cnVlLFxuICAgIHBhdGg6ICcvJyxcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogQWJvdXQsXG4gICAgcGF0aDogJy9hYm91dCcsXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IFRlYW1zLFxuICAgIHBhdGg6ICcvdGVhbXMnLFxuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBUZWFtLFxuICAgIHBhdGg6ICcvdGVhbS86aWQnLFxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlc1xuIiwiaW1wb3J0IHsgY3JlYXRlQXBwIGFzIGNyZWF0ZU13YXBBcHAgfSBmcm9tICdAbXdhcC9leHByZXNzJ1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQXBwID0gKGV4cHJlc3MsIGFyZ3MpID0+IHtcbiAgY29uc3QgbXdhcEFwcCA9IGNyZWF0ZU13YXBBcHAoZXhwcmVzcywgYXJncylcblxuICBjb25zdCBhcHAgPSBleHByZXNzKClcblxuICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlcy5zZXRIZWFkZXIoJ2N1c3RvbS1zZXJ2ZXInLCAndHJ1ZScpXG4gICAgbmV4dCgpXG4gIH0pXG5cbiAgYXBwLnVzZShtd2FwQXBwKVxuXG4gIHJldHVybiBhcHBcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnXG5pbXBvcnQgeyBjaGFrcmEsIENoYWtyYVByb3ZpZGVyLCBTcGlubmVyLCBGbGV4IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IFNjcm9sbFRvVG9wLCB1c2VMb2FkZXIgfSBmcm9tICdtd2FwJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAnaW5zcHgnXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3RlcidcblxuaW1wb3J0IHR5cGUgeyBBcHBTaGVsbFByb3BzIH0gZnJvbSAnLi9sb2FkZXJzL2FwcC1zaGVsbCdcblxuY29uc3QgQXBwID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlIH0gPSB1c2VMb2FkZXI8QXBwU2hlbGxQcm9wcywge30+KCdhcHAtc2hlbGwnLCB7fSlcblxuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuICAgICAgPEhlbG1ldFxuICAgICAgICBodG1sQXR0cmlidXRlcz17eyBsYW5nOiAnZW4nIH19XG4gICAgICAgIGRlZmF1bHRUaXRsZT1cIkBtd2FwIG1pbmltYWwgZXhhbXBsZVwiXG4gICAgICAgIHRpdGxlVGVtcGxhdGU9XCIlcyB8IEBtd2FwIG1pbmltYWwgZXhhbXBsZVwiXG4gICAgICA+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIG1pbmltYWwgZXhhbXBsZSBkZW1vbnN0cmF0aW5nIHRoZSBAbXdhcCBmcmFtZXdvcmsuXCIgLz5cblxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxJbnNwZWN0IGRpc2FibGVkPXtwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50J30+XG4gICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPGNoYWtyYS5tYWluIHc9XCJmdWxsXCIgZmxleD1cIjEgMSBhdXRvXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgbWF4Vz17Wyc0OGVtJywgJzYyZW0nLCAnODBlbSddfVxuICAgICAgICAgICAgICBteD1cImF1dG9cIlxuICAgICAgICAgICAgICBweD1cIjNcIlxuICAgICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3VzcGVuc2VcbiAgICAgICAgICAgICAgICBmYWxsYmFjaz17XG4gICAgICAgICAgICAgICAgICA8RmxleCBtaW5IPVwiMTAwdmhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgbGFiZWw9XCJMb2FkaW5nLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9jaGFrcmEubWFpbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvSW5zcGVjdD5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQm94LFxuICBjaGFrcmEsXG4gIENvbnRhaW5lcixcbiAgTGluayxcbiAgU2ltcGxlR3JpZCxcbiAgU3RhY2ssXG4gIFRleHQsXG4gIFZpc3VhbGx5SGlkZGVuLFxuICBJbnB1dCxcbiAgSWNvbkJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZhSW5zdGFncmFtLCBGYVR3aXR0ZXIsIEZhWW91dHViZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgQmlNYWlsU2VuZCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xuXG5jb25zdCBMb2dvID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIGhlaWdodD17MzJ9IHZpZXdCb3g9XCIwIDAgMTIwIDI4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHsuLi5wcm9wc30+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTM0Ljg3IDguMDdIMzcuODdWMjAuMkgzNC44N1Y4LjA3Wk0zOS4wNiAxNS42MkMzOS4wNiAxMi42MiA0MC45IDEwLjgzIDQzLjc0IDEwLjgzQzQ2LjU4IDEwLjgzIDQ4LjQyIDEyLjYyIDQ4LjQyIDE1LjYyQzQ4LjQyIDE4LjYyIDQ2LjYyIDIwLjQyIDQzLjc0IDIwLjQyQzQwLjg2IDIwLjQyIDM5LjA2IDE4LjY3IDM5LjA2IDE1LjYyWk00NS40MSAxNS42MkM0NS40MSAxMy45NyA0NC43NiAxMyA0My43NCAxM0M0Mi43MiAxMyA0Mi4wOCAxNCA0Mi4wOCAxNS42MkM0Mi4wOCAxNy4yNCA0Mi43MSAxOC4yMiA0My43NCAxOC4yMkM0NC43NyAxOC4yMiA0NS40MSAxNy4zIDQ1LjQxIDE1LjYzVjE1LjYyWk00OS41NSAyMC43OUg1Mi40M0M1Mi41NjcxIDIxLjA5NDUgNTIuNzk4OCAyMS4zNDY2IDUzLjA5MDcgMjEuNTA4OEM1My4zODI2IDIxLjY3MDkgNTMuNzE5MSAyMS43MzQ1IDU0LjA1IDIxLjY5QzU1LjE5IDIxLjY5IDU1Ljc5IDIxLjA3IDU1Ljc5IDIwLjE3VjE4LjQ5SDU1LjczQzU1LjQ5MSAxOS4wMDQ5IDU1LjEwMzEgMTkuNDM2MyA1NC42MTY1IDE5LjcyODdDNTQuMTI5OSAyMC4wMjEgNTMuNTY2OCAyMC4xNjA4IDUzIDIwLjEzQzUwLjgxIDIwLjEzIDQ5LjM2IDE4LjQ2IDQ5LjM2IDE1LjU5QzQ5LjM2IDEyLjcyIDUwLjc0IDEwLjkxIDUzLjA0IDEwLjkxQzUzLjYyNDYgMTAuODg3MSA1NC4yMDIyIDExLjA0MzQgNTQuNjk1NSAxMS4zNTc5QzU1LjE4ODggMTEuNjcyNSA1NS41NzQyIDEyLjEzMDMgNTUuOCAxMi42N1YxMi42N1YxMUg1OC44VjIwLjFDNTguOCAyMi4yOSA1Ni44NyAyMy42NSA1NC4wMiAyMy42NUM1MS4zNyAyMy42NSA0OS43MiAyMi40NiA0OS41NSAyMC44VjIwLjc5Wk01NS44IDE1LjYxQzU1LjggMTQuMTUgNTUuMTMgMTMuMjMgNTQuMDcgMTMuMjNDNTMuMDEgMTMuMjMgNTIuMzYgMTQuMTQgNTIuMzYgMTUuNjFDNTIuMzYgMTcuMDggNTMgMTcuOTEgNTQuMDcgMTcuOTFDNTUuMTQgMTcuOTEgNTUuOCAxNy4xIDU1LjggMTUuNjJWMTUuNjFaTTU5LjkzIDE1LjYxQzU5LjkzIDEyLjYxIDYxLjc3IDEwLjgyIDY0LjYxIDEwLjgyQzY3LjQ1IDEwLjgyIDY5LjMgMTIuNjEgNjkuMyAxNS42MUM2OS4zIDE4LjYxIDY3LjUgMjAuNDEgNjQuNjEgMjAuNDFDNjEuNzIgMjAuNDEgNTkuOTMgMTguNjcgNTkuOTMgMTUuNjJWMTUuNjFaTTY2LjI4IDE1LjYxQzY2LjI4IDEzLjk2IDY1LjYzIDEyLjk5IDY0LjYxIDEyLjk5QzYzLjU5IDEyLjk5IDYzIDE0IDYzIDE1LjYzQzYzIDE3LjI2IDYzLjYzIDE4LjIzIDY0LjY1IDE4LjIzQzY1LjY3IDE4LjIzIDY2LjI4IDE3LjMgNjYuMjggMTUuNjNWMTUuNjFaTTcwLjQ0IDguODJDNzAuNDMyMSA4LjUxNzExIDcwLjUxNDQgOC4yMTg3IDcwLjY3NjMgNy45NjI2MUM3MC44MzgzIDcuNzA2NTEgNzEuMDcyNiA3LjUwNDI3IDcxLjM0OTYgNy4zODE1MUM3MS42MjY2IDcuMjU4NzUgNzEuOTMzOCA3LjIyMSA3Mi4yMzIzIDcuMjczMDVDNzIuNTMwOCA3LjMyNTExIDcyLjgwNzEgNy40NjQ2MiA3My4wMjYyIDcuNjczODlDNzMuMjQ1NCA3Ljg4MzE3IDczLjM5NzQgOC4xNTI4IDczLjQ2MzEgOC40NDg1OUM3My41Mjg4IDguNzQ0MzggNzMuNTA1MiA5LjA1MzAxIDczLjM5NTIgOS4zMzUzNkM3My4yODUzIDkuNjE3NzIgNzMuMDk0IDkuODYxMDggNzIuODQ1NiAxMC4wMzQ2QzcyLjU5NzMgMTAuMjA4MSA3Mi4zMDI5IDEwLjMwNCA3MiAxMC4zMUM3MS43OTkyIDEwLjMyMzggNzEuNTk3NyAxMC4yOTU5IDcxLjQwODIgMTAuMjI4MUM3MS4yMTg2IDEwLjE2MDMgNzEuMDQ1MiAxMC4wNTQxIDcwLjg5ODcgOS45MTYwMUM3MC43NTIyIDkuNzc3OTYgNzAuNjM1OCA5LjYxMTExIDcwLjU1NjkgOS40MjU5NEM3MC40Nzc5IDkuMjQwNzcgNzAuNDM4MSA5LjA0MTI4IDcwLjQ0IDguODRWOC44MlpNNzAuNDQgMTEuMDJINzMuNDRWMjAuMkg3MC40NFYxMS4wMlpNODQuMzMgMTUuNjFDODQuMzMgMTguNjEgODMgMjAuMzIgODAuNzIgMjAuMzJDODAuMTM1NCAyMC4zNTc1IDc5LjU1MzMgMjAuMjE0NiA3OS4wNTI1IDE5LjkxMDZDNzguNTUxNyAxOS42MDY1IDc4LjE1NjQgMTkuMTU2IDc3LjkyIDE4LjYySDc3Ljg2VjIzLjE0SDc0Ljg2VjExSDc3Ljg2VjEyLjY0SDc3LjkyQzc4LjE0NTQgMTIuMDk1MSA3OC41MzMyIDExLjYzMjkgNzkuMDMwNiAxMS4zMTYyQzc5LjUyOCAxMC45OTk1IDgwLjExMDkgMTAuODQzNyA4MC43IDEwLjg3QzgzIDEwLjkxIDg0LjM3IDEyLjYzIDg0LjM3IDE1LjYzTDg0LjMzIDE1LjYxWk04MS4zMyAxNS42MUM4MS4zMyAxNC4xNSA4MC42NiAxMy4yMiA3OS42MSAxMy4yMkM3OC41NiAxMy4yMiA3Ny44OSAxNC4xNiA3Ny44OCAxNS42MUM3Ny44NyAxNy4wNiA3OC41NiAxNy45OSA3OS42MSAxNy45OUM4MC42NiAxNy45OSA4MS4zMyAxNy4wOCA4MS4zMyAxNS42M1YxNS42MVpNODkuNDggMTAuODFDOTEuOTcgMTAuODEgOTMuNDggMTEuOTkgOTMuNTUgMTMuODhIOTAuODJDOTAuODIgMTMuMjMgOTAuMjggMTIuODIgODkuNDUgMTIuODJDODguNjIgMTIuODIgODguMjUgMTMuMTQgODguMjUgMTMuNjFDODguMjUgMTQuMDggODguNTggMTQuMjMgODkuMjUgMTQuMzdMOTEuMTcgMTQuNzZDOTMgMTUuMTUgOTMuNzggMTUuODkgOTMuNzggMTcuMjhDOTMuNzggMTkuMTggOTIuMDUgMjAuNCA4OS41IDIwLjRDODYuOTUgMjAuNCA4NS4yOCAxOS4xOCA4NS4xNSAxNy4zMUg4OC4wNEM4OC4xMyAxNy45OSA4OC42NyAxOC4zOSA4OS41NSAxOC4zOUM5MC40MyAxOC4zOSA5MC44MyAxOC4xIDkwLjgzIDE3LjYyQzkwLjgzIDE3LjE0IDkwLjU1IDE3LjA0IDg5LjgzIDE2Ljg5TDg4LjEgMTYuNTJDODYuMzEgMTYuMTUgODUuMzcgMTUuMiA4NS4zNyAxMy44Qzg1LjM5IDEyIDg3IDEwLjgzIDg5LjQ4IDEwLjgzVjEwLjgxWk0xMDMuNzkgMjAuMThIMTAwLjlWMTguNDdIMTAwLjg0QzEwMC42ODEgMTkuMDQ0MSAxMDAuMzMxIDE5LjU0NjYgOTkuODQ2OCAxOS44OTQxQzk5LjM2MjkgMjAuMjQxNSA5OC43NzQ4IDIwLjQxMyA5OC4xOCAyMC4zOEM5Ny43MjQyIDIwLjQwNTkgOTcuMjY4MiAyMC4zMzM3IDk2Ljg0MjcgMjAuMTY4MkM5Ni40MTcyIDIwLjAwMjcgOTYuMDMyMiAxOS43NDc5IDk1LjcxMzcgMTkuNDIwOEM5NS4zOTUyIDE5LjA5MzggOTUuMTUwNSAxOC43MDIxIDk0Ljk5NjQgMTguMjcyNEM5NC44NDIyIDE3Ljg0MjcgOTQuNzgyMSAxNy4zODQ5IDk0LjgyIDE2LjkzVjExSDk3LjgyVjE2LjI0Qzk3LjgyIDE3LjMzIDk4LjM4IDE3LjkxIDk5LjMxIDE3LjkxQzk5LjUyODEgMTcuOTEwNCA5OS43NDM3IDE3Ljg2NDMgOTkuOTQyNSAxNy43NzQ2QzEwMC4xNDEgMTcuNjg0OSAxMDAuMzE5IDE3LjU1MzcgMTAwLjQ2MyAxNy4zODk5QzEwMC42MDYgMTcuMjI2IDEwMC43MTQgMTcuMDMzMyAxMDAuNzc3IDE2LjgyNDdDMTAwLjg0IDE2LjYxNiAxMDAuODU5IDE2LjM5NjIgMTAwLjgzIDE2LjE4VjExSDEwMy44M0wxMDMuNzkgMjAuMThaTTEwNS4yNCAxMUgxMDguMTRWMTIuNzdIMTA4LjJDMTA4LjM1OSAxMi4yMDM1IDEwOC43MDIgMTEuNzA1NyAxMDkuMTc0IDExLjM1NDdDMTA5LjY0NiAxMS4wMDM3IDExMC4yMjIgMTAuODE5MSAxMTAuODEgMTAuODNDMTExLjQwOSAxMC43ODIxIDExMi4wMDMgMTAuOTYxMiAxMTIuNDc2IDExLjMzMThDMTEyLjk0OCAxMS43MDI0IDExMy4yNjQgMTIuMjM3MiAxMTMuMzYgMTIuODNIMTEzLjQyQzExMy42MDEgMTIuMjMwOSAxMTMuOTc3IDExLjcwOTMgMTE0LjQ4OCAxMS4zNDcyQzExNC45OTggMTAuOTg1MSAxMTUuNjE1IDEwLjgwMzEgMTE2LjI0IDEwLjgzQzExNi42NDggMTAuODE2MyAxMTcuMDU0IDEwLjg4ODYgMTE3LjQzMiAxMS4wNDIyQzExNy44MTEgMTEuMTk1NyAxMTguMTUyIDExLjQyNzIgMTE4LjQzNSAxMS43MjE0QzExOC43MTggMTIuMDE1NyAxMTguOTM2IDEyLjM2NjIgMTE5LjA3NSAxMi43NTAxQzExOS4yMTMgMTMuMTM0IDExOS4yNyAxMy41NDI5IDExOS4yNCAxMy45NVYyMC4ySDExNi4yNFYxNC43NUMxMTYuMjQgMTMuNzUgMTE1Ljc5IDEzLjI5IDExNC45NSAxMy4yOUMxMTQuNzYzIDEzLjI4ODQgMTE0LjU3NyAxMy4zMjcgMTE0LjQwNiAxMy40MDMyQzExNC4yMzUgMTMuNDc5NCAxMTQuMDgyIDEzLjU5MTQgMTEzLjk1OCAxMy43MzE3QzExMy44MzQgMTMuODcyIDExMy43NDEgMTQuMDM3MiAxMTMuNjg2IDE0LjIxNjNDMTEzLjYzMSAxNC4zOTU1IDExMy42MTYgMTQuNTg0MyAxMTMuNjQgMTQuNzdWMjAuMkgxMTAuNzlWMTQuNzFDMTEwLjc5IDEzLjc5IDExMC4zNCAxMy4yOSAxMDkuNTIgMTMuMjlDMTA5LjMzMSAxMy4yOTAxIDEwOS4xNDMgMTMuMzMwMyAxMDguOTcxIDEzLjQwOEMxMDguNzk4IDEzLjQ4NTggMTA4LjY0MyAxMy41OTkzIDEwOC41MTggMTMuNzQxQzEwOC4zOTIgMTMuODgyNyAxMDguMjk4IDE0LjA0OTUgMTA4LjI0MSAxNC4yMzA0QzEwOC4xODUgMTQuNDExMiAxMDguMTY3IDE0LjYwMTkgMTA4LjE5IDE0Ljc5VjIwLjJIMTA1LjE5TDEwNS4yNCAxMVpcIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI2LjQ4IDguNjIwMDFDMjUuOTcxMSA3LjQ1NjM3IDI1LjI5NzUgNi4zNzE5NSAyNC40OCA1LjQwMDAxQzIzLjI3MTQgMy45MjAzNSAyMS43NjMyIDIuNzEzNDEgMjAuMDU0NiAxLjg1ODYyQzE4LjM0NiAxLjAwMzgzIDE2LjQ3NTggMC41MjA1ODIgMTQuNTY3IDAuNDQwNjc0QzEyLjY1ODIgMC4zNjA3NjYgMTAuNzU0MSAwLjY4NjAxIDguOTggMS4zOTVDNy4yMDU5NCAyLjEwNCA1LjYwMjE0IDMuMTgwNjcgNC4yNzQxNyA0LjU1NDE0QzIuOTQ2MTkgNS45Mjc2MiAxLjkyNDE0IDcuNTY2NzYgMS4yNzUyOSA5LjM2MzY5QzAuNjI2NDM2IDExLjE2MDYgMC4zNjU0OTMgMTMuMDc0NiAwLjUwOTYzNCAxNC45Nzk2QzAuNjUzNzc1IDE2Ljg4NDcgMS4xOTk3MyAxOC43Mzc2IDIuMTExNTcgMjAuNDE2NEMzLjAyMzQxIDIyLjA5NTMgNC4yODA0NiAyMy41NjIgNS43OTk5OCAyNC43MkM2Ljc3NDk4IDI1LjQ3NzkgNy44NTIzMyAyNi4wOTQgOC45OTk5OCAyNi41NUMxMC42MDkgMjcuMjA5NCAxMi4zMzExIDI3LjU0OSAxNC4wNyAyNy41NUMxNy42NTk0IDI3LjU0MjEgMjEuMDk5MiAyNi4xMTEzIDIzLjYzNTQgMjMuNTcxM0MyNi4xNzE3IDIxLjAzMTQgMjcuNTk3MyAxNy41ODk0IDI3LjYgMTRDMjcuNjAyNiAxMi4xNDg1IDI3LjIyMTMgMTAuMzE2NiAyNi40OCA4LjYyMDAxVjguNjIwMDFaTTE0LjA2IDMuMTkwMDFDMTUuNjIxNSAzLjE4OTg0IDE3LjE2NDIgMy41MzExNSAxOC41OCA0LjE5MDAxVjQuMTkwMDFDMTguMjM0NyA0LjMzOTE4IDE3Ljg3MTggNC40NDMzNyAxNy41IDQuNTAwMDFDMTYuMjc2NiA0LjY3NzExIDE1LjE0MzIgNS4yNDUwOSAxNC4yNjkxIDYuMTE5MThDMTMuMzk1MSA2Ljk5MzI4IDEyLjgyNzEgOC4xMjY2MSAxMi42NSA5LjM1MDAxQzEyLjU3MjIgMTAuMDM2MSAxMi4yNjAyIDEwLjY3NDQgMTEuNzY2NSAxMS4xNTcyQzExLjI3MjggMTEuNjQgMTAuNjI3NyAxMS45Mzc3IDkuOTM5OTggMTJDOC43MTY1NyAxMi4xNzcxIDcuNTgzMjQgMTIuNzQ1MSA2LjcwOTE1IDEzLjYxOTJDNS44MzUwNSAxNC40OTMzIDUuMjY3MDcgMTUuNjI2NiA1LjA4OTk4IDE2Ljg1QzUuMDMwMDIgMTcuNTAyNCA0Ljc1MTY3IDE4LjExNTUgNC4yOTk5OCAxOC41OVYxOC41OUMzLjUyMDYzIDE2Ljk0MzMgMy4xNzA1MyAxNS4xMjYxIDMuMjgyMjUgMTMuMzA3N0MzLjM5Mzk3IDExLjQ4OTMgMy45NjM4OCA5LjcyODcxIDQuOTM4OTUgOC4xODk3NkM1LjkxNDAxIDYuNjUwODEgNy4yNjI1NSA1LjM4MzUzIDguODU5MDUgNC41MDU4NkMxMC40NTU1IDMuNjI4MTkgMTIuMjQ4MSAzLjE2ODY1IDE0LjA3IDMuMTcwMDFMMTQuMDYgMy4xOTAwMVpNNS43ODk5OCAyMUM1LjkwOTk4IDIwLjg5IDYuMDI5OTggMjAuNzkgNi4xNDk5OCAyMC42N0M3LjAzOTYzIDE5LjgwNzUgNy42MTA2OSAxOC42Njg5IDcuNzY5OTggMTcuNDRDNy44MzQ1NiAxNi43NDkzIDguMTQyOTggMTYuMTA0MSA4LjYzOTk4IDE1LjYyQzkuMTE4MjIgMTUuMTIyMiA5Ljc2MTk1IDE0LjgxNjMgMTAuNDUgMTQuNzZDMTEuNjczNCAxNC41ODI5IDEyLjgwNjcgMTQuMDE0OSAxMy42ODA4IDEzLjE0MDhDMTQuNTU0OSAxMi4yNjY3IDE1LjEyMjkgMTEuMTMzNCAxNS4zIDkuOTEwMDFDMTUuMzQzMiA5LjE4NzUyIDE1LjY1MzMgOC41MDY4NSAxNi4xNyA4LjAwMDAxQzE2LjY2IDcuNTExODYgMTcuMzA5OSA3LjIxNzExIDE4IDcuMTcwMDFDMTkuMTIzOSA3LjAxNTM3IDIwLjE3MjEgNi41MTU3MyAyMSA1Ljc0MDAxQzIxLjk0MjYgNi41MjIwOCAyMi43NDEzIDcuNDYyOTEgMjMuMzYgOC41MjAwMUMyMy4zMjIgOC41NzEzNiAyMy4yNzg0IDguNjE4MzIgMjMuMjMgOC42NjAwMUMyMi43NTI2IDkuMTYyMjEgMjIuMTA5OCA5LjQ3NDc3IDIxLjQyIDkuNTQwMDFDMjAuMTk1MyA5LjcxNDAxIDE5LjA2MDMgMTAuMjgxIDE4LjE4NTYgMTEuMTU1N0MxNy4zMTEgMTIuMDMwMyAxNi43NDQgMTMuMTY1NCAxNi41NyAxNC4zOUMxNi40OTk1IDE1LjA3ODQgMTYuMTkzMiAxNS43MjEzIDE1LjcwMjkgMTYuMjA5OEMxNS4yMTI3IDE2LjY5ODIgMTQuNTY4NyAxNy4wMDIxIDEzLjg4IDE3LjA3QzEyLjY1MyAxNy4yNDU4IDExLjUxNTQgMTcuODEyNiAxMC42MzYzIDE4LjY4NjNDOS43NTcxMyAxOS41NjAxIDkuMTgzMjggMjAuNjk0MSA4Ljk5OTk4IDIxLjkyQzguOTQ2MTYgMjIuNDA4NyA4Ljc3ODMyIDIyLjg3OCA4LjUwOTk4IDIzLjI5QzcuNDgzOTcgMjIuNjgwOCA2LjU2NTA2IDIxLjkwNzIgNS43ODk5OCAyMVYyMVpNMTQuMDYgMjQuODZDMTMuMDQ1MiAyNC44NjExIDEyLjAzNTQgMjQuNzE5NyAxMS4wNiAyNC40NEMxMS4zOTM2IDIzLjgxOCAxMS42MTA2IDIzLjE0MDIgMTEuNyAyMi40NEMxMS43NzAxIDIxLjc1MzEgMTIuMDc0OSAyMS4xMTE0IDEyLjU2MzIgMjAuNjIzMkMxMy4wNTE0IDIwLjEzNSAxMy42OTMxIDE5LjgzMDEgMTQuMzggMTkuNzZDMTUuNjA1MiAxOS41ODQ5IDE2Ljc0MDggMTkuMDE3OCAxNy42MTY4IDE4LjE0MzVDMTguNDkyOSAxNy4yNjkzIDE5LjA2MjQgMTYuMTM0OSAxOS4yNCAxNC45MUMxOS4zMTAxIDE0LjIyMzEgMTkuNjE0OSAxMy41ODE0IDIwLjEwMzIgMTMuMDkzMkMyMC41OTE0IDEyLjYwNSAyMS4yMzMxIDEyLjMwMDEgMjEuOTIgMTIuMjNDMjIuODQyIDEyLjExMDEgMjMuNzIwOCAxMS43NjY4IDI0LjQ4IDExLjIzQzI0LjkwMTUgMTIuODI3OSAyNC45NTE1IDE0LjUwMTIgMjQuNjI2IDE2LjEyMTRDMjQuMzAwNCAxNy43NDE2IDIzLjYwODEgMTkuMjY1NyAyMi42MDIxIDIwLjU3NjhDMjEuNTk2MSAyMS44ODc5IDIwLjMwMzEgMjIuOTUxMSAxOC44MjI0IDIzLjY4NDlDMTcuMzQxNyAyNC40MTg3IDE1LjcxMjUgMjQuODAzNiAxNC4wNiAyNC44MVYyNC44NlpcIlxuICAgICAgICBmaWxsPVwiIzJGODU1QVwiXG4gICAgICAvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmNvbnN0IFNvY2lhbEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBsYWJlbCxcbiAgaHJlZixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxuICBsYWJlbDogc3RyaW5nXG4gIGhyZWY6IHN0cmluZ1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxjaGFrcmEuYnV0dG9uXG4gICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ2JsYWNrQWxwaGEuMTAwJywgJ3doaXRlQWxwaGEuMTAwJyl9XG4gICAgICByb3VuZGVkPXsnZnVsbCd9XG4gICAgICB3PXs4fVxuICAgICAgaD17OH1cbiAgICAgIGN1cnNvcj17J3BvaW50ZXInfVxuICAgICAgYXM9eydhJ31cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBkaXNwbGF5PXsnaW5saW5lLWZsZXgnfVxuICAgICAgYWxpZ25JdGVtcz17J2NlbnRlcid9XG4gICAgICBqdXN0aWZ5Q29udGVudD17J2NlbnRlcid9XG4gICAgICB0cmFuc2l0aW9uPXsnYmFja2dyb3VuZCAwLjNzIGVhc2UnfVxuICAgICAgX2hvdmVyPXt7XG4gICAgICAgIGJnOiB1c2VDb2xvck1vZGVWYWx1ZSgnYmxhY2tBbHBoYS4yMDAnLCAnd2hpdGVBbHBoYS4yMDAnKSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPntsYWJlbH08L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvY2hha3JhLmJ1dHRvbj5cbiAgKVxufVxuXG5jb25zdCBMaXN0SGVhZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGV4dCBmb250V2VpZ2h0PXsnNTAwJ30gZm9udFNpemU9eydsZyd9IG1iPXsyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RleHQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiZm9vdGVyXCJcbiAgICAgIHc9XCJmdWxsXCJcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS41MCcsICdncmF5LjkwMCcpfVxuICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjcwMCcsICdncmF5LjIwMCcpfVxuICAgID5cbiAgICAgIDxDb250YWluZXIgYXM9e1N0YWNrfSBtYXhXPXsnNnhsJ30gcHk9ezEwfT5cbiAgICAgICAgPFNpbXBsZUdyaWQgdGVtcGxhdGVDb2x1bW5zPXt7IHNtOiAnMWZyIDFmcicsIG1kOiAnMmZyIDFmciAxZnIgMmZyJyB9fSBzcGFjaW5nPXs4fT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0+XG4gICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICA8TG9nbyBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuNzAwJywgJ3doaXRlJyl9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsnc20nfT7CqSAyMDIxIE13YXAgQXBwLiBBbGwgcmlnaHRzIHJlc2VydmVkPC9UZXh0PlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17J3Jvdyd9IHNwYWNpbmc9ezZ9PlxuICAgICAgICAgICAgICA8U29jaWFsQnV0dG9uIGxhYmVsPXsnVHdpdHRlcid9IGhyZWY9eycjJ30+XG4gICAgICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgICAgICA8L1NvY2lhbEJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbiBsYWJlbD17J1lvdVR1YmUnfSBocmVmPXsnIyd9PlxuICAgICAgICAgICAgICAgIDxGYVlvdXR1YmUgLz5cbiAgICAgICAgICAgICAgPC9Tb2NpYWxCdXR0b24+XG4gICAgICAgICAgICAgIDxTb2NpYWxCdXR0b24gbGFiZWw9eydJbnN0YWdyYW0nfSBocmVmPXsnIyd9PlxuICAgICAgICAgICAgICAgIDxGYUluc3RhZ3JhbSAvPlxuICAgICAgICAgICAgICA8L1NvY2lhbEJ1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgYWxpZ249eydmbGV4LXN0YXJ0J30+XG4gICAgICAgICAgICA8TGlzdEhlYWRlcj5Db21wYW55PC9MaXN0SGVhZGVyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5BYm91dCB1czwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+QmxvZzwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+Q29udGFjdCB1czwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+UHJpY2luZzwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+VGVzdGltb25pYWxzPC9MaW5rPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPFN0YWNrIGFsaWduPXsnZmxleC1zdGFydCd9PlxuICAgICAgICAgICAgPExpc3RIZWFkZXI+U3VwcG9ydDwvTGlzdEhlYWRlcj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+SGVscCBDZW50ZXI8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PlRlcm1zIG9mIFNlcnZpY2U8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PkxlZ2FsPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5Qcml2YWN5IFBvbGljeTwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+U2F0dXM8L0xpbms+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2sgYWxpZ249eydmbGV4LXN0YXJ0J30+XG4gICAgICAgICAgICA8TGlzdEhlYWRlcj5TdGF5IHVwIHRvIGRhdGU8L0xpc3RIZWFkZXI+XG4gICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXsncm93J30+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnWW91ciBlbWFpbCBhZGRyZXNzJ31cbiAgICAgICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ2JsYWNrQWxwaGEuMTAwJywgJ3doaXRlQWxwaGEuMTAwJyl9XG4gICAgICAgICAgICAgICAgYm9yZGVyPXswfVxuICAgICAgICAgICAgICAgIF9mb2N1cz17e1xuICAgICAgICAgICAgICAgICAgYmc6ICd3aGl0ZUFscGhhLjMwMCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJ2dyZWVuLjQwMCcsICdncmVlbi44MDAnKX1cbiAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJ2dyYXkuODAwJyl9XG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgICAgICBiZzogJ2dyZWVuLjYwMCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU3Vic2NyaWJlXCJcbiAgICAgICAgICAgICAgICBpY29uPXs8QmlNYWlsU2VuZCAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TaW1wbGVHcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgY2hha3JhLFxuICBCb3gsXG4gIEZsZXgsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBWaXN1YWxseUhpZGRlbixcbiAgSFN0YWNrLFxuICBCdXR0b24sXG4gIHVzZURpc2Nsb3N1cmUsXG4gIFZTdGFjayxcbiAgSGVhZGluZyxcbiAgTGluayxcbiAgSWNvbkJ1dHRvbixcbiAgQ2xvc2VCdXR0b24sXG4gIHVzZUNvbG9yTW9kZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgRmFSZWFjdCwgRmFNb29uLCBGYVN1biB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgTGluayBhcyBNd2FwTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgYmcgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnd2hpdGUnKVxuICBjb25zdCBtb2JpbGVOYXYgPSB1c2VEaXNjbG9zdXJlKClcblxuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgY29uc3QgdGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKCdkYXJrJywgJ2xpZ2h0JylcbiAgY29uc3QgY29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnZ3JheS44MDAnKVxuICBjb25zdCBTd2l0Y2hJY29uID0gdXNlQ29sb3JNb2RlVmFsdWUoRmFNb29uLCBGYVN1bilcblxuICBjb25zdCBTdGlja3lGbGV4ID0gc3R5bGVkKGNoYWtyYS5oZWFkZXIpYFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xIGVhc2UtaW4tb3V0O1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8U3RpY2t5RmxleFxuICAgICAgYmc9e2JnfVxuICAgICAgdz1cImZ1bGxcIlxuICAgICAgcHg9e3sgYmFzZTogMiwgc206IDQgfX1cbiAgICAgIHB5PXs0fVxuICAgICAgc2hhZG93PVwibWRcIlxuICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgekluZGV4PVwiMjBcIlxuICAgID5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgIHRpdGxlPVwiTXdhcCBBcHAgSG9tZSBQYWdlXCJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgbXg9XCI0XCJcbiAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICBfZm9jdXM9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYVJlYWN0IHNpemU9XCIzMlwiIC8+XG4gICAgICAgICAgICA8VmlzdWFsbHlIaWRkZW4+bXdhcDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XG4gICAgICAgICAgICBtd2FwXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDxIU3RhY2sgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17MX0+XG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsxfSBtcj17MX0gZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnaW5saW5lLWZsZXgnIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBhcz17TXdhcExpbmt9XG4gICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgIF9mb2N1cz17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBhcz17TXdhcExpbmt9XG4gICAgICAgICAgICAgIHRvPXtgL2Fib3V0P21lc3NhZ2U9JHtlbmNvZGVVUkkoJ1Rlc3QgTWVzc2FnZSBGcm9tIFNlYXJjaCcpfWB9XG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgIF9mb2N1cz17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgYXM9e013YXBMaW5rfVxuICAgICAgICAgICAgICB0bz1cIi90ZWFtc1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgIF9mb2N1cz17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRlYW1zXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwibGdcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YFN3aXRjaCB0byAke3RleHR9IG1vZGVgfVxuICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICBtbD17eyBiYXNlOiAnMCcsIG1kOiAnMycgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgIGljb249ezxTd2l0Y2hJY29uIC8+fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6ICdpbmxpbmUtZmxleCcsIG1kOiAnbm9uZScgfX0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdmbGV4JywgbWQ6ICdub25lJyB9fVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBtZW51XCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIyMHB4XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJjdXJyZW50XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgaWNvbj17PEFpT3V0bGluZU1lbnUgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e21vYmlsZU5hdi5vbk9wZW59XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8VlN0YWNrXG4gICAgICAgICAgICAgIHBvcz1cImFic29sdXRlXCJcbiAgICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICByaWdodD17MH1cbiAgICAgICAgICAgICAgZGlzcGxheT17bW9iaWxlTmF2LmlzT3BlbiA/ICdmbGV4JyA6ICdub25lJ31cbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIHA9ezJ9XG4gICAgICAgICAgICAgIHBiPXs0fVxuICAgICAgICAgICAgICBtPXsyfVxuICAgICAgICAgICAgICBiZz17Ymd9XG4gICAgICAgICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgICAgICAgIHJvdW5kZWQ9XCJzbVwiXG4gICAgICAgICAgICAgIHNoYWRvdz1cInNtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCIgb25DbGljaz17bW9iaWxlTmF2Lm9uQ2xvc2V9IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gYXM9e013YXBMaW5rfSB0bz1cIi9cIiB3PVwiZnVsbFwiIHZhcmlhbnQ9XCJnaG9zdFwiIG9uQ2xpY2s9e21vYmlsZU5hdi5vbkNsb3NlfT5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYXM9e013YXBMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtgL2Fib3V0P21lc3NhZ2U9JHtlbmNvZGVVUkkoJ1Rlc3QgTWVzc2FnZSBGcm9tIFNlYXJjaCcpfWB9XG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17bW9iaWxlTmF2Lm9uQ2xvc2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPXtNd2FwTGlua31cbiAgICAgICAgICAgICAgICB0bz1cIi90ZWFtc1wiXG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17bW9iaWxlTmF2Lm9uQ2xvc2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZWFtc1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgIDwvRmxleD5cbiAgICA8L1N0aWNreUZsZXg+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQm9keSwgSGVhZCwgSHRtbCB9IGZyb20gJ0Btd2FwL3NlcnZlcidcblxuY29uc3QgRG9jdW1lbnQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEh0bWw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCb2R5PlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vYXBpLmNvdW50YXBpLnh5ei9oaXQvbXlzaXRlLmNvbS92aXNpdHNcIiAvPlxuICAgICAgPC9Cb2R5PlxuICAgIDwvSHRtbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudFxuIiwiaW1wb3J0IHR5cGUgeyBMb2FkZXIsIExvYWRlckNvbmZpZ0Z1bmMgfSBmcm9tICdtd2FwJ1xuXG5pbXBvcnQgc3VwYWJhc2UgZnJvbSAnLi4vbGliL3N1cGFiYXNlJ1xuXG5leHBvcnQgdHlwZSBUZWFtc1BhZ2VEYXRhID0ge1xuICB0ZWFtczogYW55W11cbiAgdHRsOiBudW1iZXJcbn1cblxuY29uc3QgbG9hZGVyOiBMb2FkZXI8VGVhbXNQYWdlRGF0YT4gPSBhc3luYyAoKSA9PiB7XG4gIC8vIGNvbnN0IHRlYW1zID0gYXdhaXQgZGIudGVhbS5maW5kTWFueSgpXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnVGVhbScpLnNlbGVjdCgnKicpXG5cbiAgY29uc29sZS5kaXIocmVzcG9uc2UpXG5cbiAgcmV0dXJuIHtcbiAgICB0ZWFtczogcmVzcG9uc2UuZGF0YSxcbiAgICB0dGw6IDYwNDgwMCxcbiAgfVxufVxuXG5jb25zdCBjb25maWc6IExvYWRlckNvbmZpZ0Z1bmM8VGVhbXNQYWdlRGF0YT4gPSAoeyBkYXRhIH0pID0+ICh7XG4gIGhlYWRlcnM6IHtcbiAgICAnY2FjaGUtY29udHJvbCc6IGBwdWJsaWMsIG1heC1hZ2U9JHtkYXRhLnR0bH1gLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkZXIsIGNvbmZpZyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29uc3RhbnRzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVuY29kaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ19kZWNvZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcblx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2VydmVyLnRzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJsb2FkZWRcIiwgb3RoZXJ3aXNlIG5vdCBsb2FkZWQgeWV0XG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLnJlcXVpcmUgPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG5cbnZhciBpbnN0YWxsQ2h1bmsgPSAoY2h1bmspID0+IHtcblx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHMsIHJ1bnRpbWUgPSBjaHVuay5ydW50aW1lO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5PKCk7XG59O1xuXG4vLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmUgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzXCIpO1xuXHRyZXR1cm4gbmV4dCgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=