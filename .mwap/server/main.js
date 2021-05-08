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




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_about_tsx */ "pages_about_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./about.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./pages/about.tsx")),
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




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_home_tsx */ "pages_home_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./home.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./pages/home.tsx")),
  {
    __chunkId: "pages_home_tsx",
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




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => Promise.all(/*! import() | pages_teams_tsx */[__webpack_require__.e("vendors"), __webpack_require__.e("pages_teams_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./teams.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./pages/teams.tsx")),
  {
    __chunkId: "pages_teams_tsx",
  }
);

function AsyncComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DynamicComponent, props);
}
  

/***/ }),

/***/ "./db/index.ts":
/*!*********************!*\
  !*** ./db/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disconnect": () => (/* binding */ disconnect),
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "./node_modules/@prisma/client/index-browser.js");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _prisma_client__WEBPACK_IMPORTED_MODULE_0__) if(["default","disconnect","connect"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _prisma_client__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
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

let db;
if (false) {} else {
  if (!global["prisma"]) {
    global["prisma"] = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }
  db = global["prisma"];
}
function disconnect() {
  return __async(this, null, function* () {
    yield db.$disconnect();
    return true;
  });
}
function connect() {
  return __async(this, null, function* () {
    yield db.$connect();
    return true;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


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
/* harmony import */ var _teams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams */ "./loaders/teams.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "app-shell": _app_shell__WEBPACK_IMPORTED_MODULE_0__.default,
  about: _about__WEBPACK_IMPORTED_MODULE_1__.default,
  home: _home__WEBPACK_IMPORTED_MODULE_2__.default,
  teams: _teams__WEBPACK_IMPORTED_MODULE_3__.default
});


/***/ }),

/***/ "./loaders/teams.ts":
/*!**************************!*\
  !*** ./loaders/teams.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db */ "./db/index.ts");
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
  const teams = yield _db__WEBPACK_IMPORTED_MODULE_0__.default.team.findMany();
  return {
    teams,
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
  }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pages);


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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/chakra-provider.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/esm/spinner.js");
/* harmony import */ var mwap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mwap */ "./node_modules/mwap/dist/mwap.module.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ "./components/Navbar.tsx");






const App = ({children}) => {
  const {title} = (0,mwap__WEBPACK_IMPORTED_MODULE_2__.useLoader)("app-shell", {});
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(mwap__WEBPACK_IMPORTED_MODULE_2__.ScrollToTop, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
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
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.default, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    w: "full",
    minH: "100vh"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, title), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
      label: "Loading..."
    })
  }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/flex.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/link.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/visually-hidden/dist/esm/visually-hidden.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/heading.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/stack.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/button.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/esm/icon-button.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/box.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/close-button/dist/esm/close-button.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





function Navbar() {
  const bg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.800", "white");
  const mobileNav = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
  const {toggleColorMode} = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
  const text = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("dark", "light");
  const color = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800");
  const SwitchIcon = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMoon, react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSun);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.header, {
    bg,
    w: "full",
    px: {base: 2, sm: 4},
    py: 4,
    shadow: "md",
    color
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    alignItems: "center",
    justifyContent: "space-between",
    mx: "auto"
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
    href: "/",
    title: "Mwap App Home Page",
    display: "flex",
    alignItems: "center",
    mx: "4",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaReact, {
    size: "32"
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VisuallyHidden, null, "mwap")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {
    as: "h1",
    fontSize: "2xl",
    fontWeight: "bold"
  }, "mwap")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, {
    display: "flex",
    alignItems: "center",
    spacing: 1
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, {
    spacing: 1,
    mr: 1,
    display: {base: "none", md: "inline-flex"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/",
    variant: "ghost",
    color: "current",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, "Home"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: `/about?message=${encodeURI("Test Message From Search")}`,
    variant: "ghost",
    color: "current",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, "About"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/teams",
    variant: "ghost",
    color: "current",
    _hover: {color: "#61dbfb"},
    _focus: {color: "#61dbfb"}
  }, "Teams")), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, {
    size: "md",
    fontSize: "lg",
    "aria-label": `Switch to ${text} mode`,
    variant: "ghost",
    color: "current",
    ml: {base: "0", md: "3"},
    onClick: toggleColorMode,
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwitchIcon, null)
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Box, {
    display: {base: "inline-flex", md: "none"}
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.IconButton, {
    display: {base: "flex", md: "none"},
    "aria-label": "Open menu",
    fontSize: "20px",
    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.800", "inherit"),
    variant: "ghost",
    icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiOutlineMenu, null),
    onClick: mobileNav.onOpen
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.VStack, {
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
  }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_14__.CloseButton, {
    "aria-label": "Close menu",
    onClick: mobileNav.onClose
  }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/",
    w: "full",
    variant: "ghost"
  }, "Home"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: `/about?message=${encodeURI("Test Message From Search")}`,
    w: "full",
    variant: "ghost"
  }, "About"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
    to: "/teams",
    w: "full",
    variant: "ghost"
  }, "Teams")))))));
}


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./node_modules/@mwap/express/dist/express.modern.js")))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2Fib3V0LnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2hvbWUudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvdGVhbXMudHN4Iiwid2VicGFjazovL213YXAtYXBwLy4vZGIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2Fib3V0LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy9hcHAtc2hlbGwudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2hvbWUudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2luZGV4LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy90ZWFtcy50cyIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJjb25zdGFudHNcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJzdHJpbmdfZGVjb2RlclwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwiemxpYlwiIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9td2FwLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9yZXF1aXJlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNPOztBQUV0Qyx5QkFBeUIsb0RBQU8sT0FB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O1dBQ0E7V0FDQTtXQUNBLGVBQWUscUJBQXFCO1dBQ3BDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBLEdBQUc7V0FDSDtXQUNBOztXQUVBOztXQUVBOztXQUVBLGtCOzs7OztXQ3JDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1VDSkE7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tIFwiQG13YXAvYXN5bmNcIjtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFxuICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzX2Fib3V0X3RzeFwiICovIFwiISEuLi9ub2RlX21vZHVsZXMvZXNidWlsZC1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL2Fib3V0LnRzeFwiKSxcbiAge1xuICAgIF9fY2h1bmtJZDogXCJwYWdlc19hYm91dF90c3hcIixcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXN5bmNDb21wb25lbnQocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHluYW1pY0NvbXBvbmVudCwgcHJvcHMpO1xufVxuICAiLCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZHluYW1pYyB9IGZyb20gXCJAbXdhcC9hc3luY1wiO1xuXG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXG4gIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZXNfaG9tZV90c3hcIiAqLyBcIiEhLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10hLi9ob21lLnRzeFwiKSxcbiAge1xuICAgIF9fY2h1bmtJZDogXCJwYWdlc19ob21lX3RzeFwiLFxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3luY0NvbXBvbmVudChwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEeW5hbWljQ29tcG9uZW50LCBwcm9wcyk7XG59XG4gICIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkeW5hbWljIH0gZnJvbSBcIkBtd2FwL2FzeW5jXCI7XG5cbmNvbnN0IER5bmFtaWNDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcbiAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlc190ZWFtc190c3hcIiAqLyBcIiEhLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10hLi90ZWFtcy50c3hcIiksXG4gIHtcbiAgICBfX2NodW5rSWQ6IFwicGFnZXNfdGVhbXNfdHN4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KER5bmFtaWNDb21wb25lbnQsIHByb3BzKTtcbn1cbiAgIiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBkYjogUHJpc21hQ2xpZW50XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWxbJ3ByaXNtYSddKSB7XG4gICAgZ2xvYmFsWydwcmlzbWEnXSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICB9XG5cbiAgZGIgPSBnbG9iYWxbJ3ByaXNtYSddXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICBhd2FpdCBkYi4kZGlzY29ubmVjdCgpXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gIGF3YWl0IGRiLiRjb25uZWN0KClcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgKiBmcm9tICdAcHJpc21hL2NsaWVudCdcbmV4cG9ydCBkZWZhdWx0IGRiXG4iLCJpbXBvcnQgdHlwZSB7IExvYWRlciwgTG9hZGVyQ29uZmlnRnVuYyB9IGZyb20gXCJtd2FwXCI7XG5cbmV4cG9ydCB0eXBlIEFib3V0UGFnZURhdGEgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHRsOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBYm91dFBhZ2VQYXJhbXMgPSB7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxBYm91dFBhZ2VEYXRhLCBBYm91dFBhZ2VQYXJhbXM+ID0gKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8IFwiQ2hpY2tlbnMgYXJlIGZ1bm55IGFuaW1hbHNcIjtcblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2UsXG4gICAgdHRsOiAyMCxcbiAgfTtcbn07XG5cbmNvbnN0IGNvbmZpZzogTG9hZGVyQ29uZmlnRnVuYzxBYm91dFBhZ2VEYXRhPiA9ICh7IGRhdGEgfSkgPT4gKHtcbiAgaGVhZGVyczoge1xuICAgIFwiY2FjaGUtY29udHJvbFwiOiBgcHVibGljLCBtYXgtYWdlPSR7ZGF0YS50dGx9YCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWRlciwgY29uZmlnIH07XG4iLCJpbXBvcnQgdHlwZSB7IExvYWRlciB9IGZyb20gJ213YXAnXG5pbXBvcnQgdHlwZSB7IE5hdmJhckxpbmsgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IHR5cGUgQXBwU2hlbGxQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBsaW5rcz86IE5hdmJhckxpbmtcbn1cblxuY29uc3QgbG9hZGVyOiBMb2FkZXI8QXBwU2hlbGxQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdBcHBTaGVsbCcsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkZXIgfVxuIiwiaW1wb3J0IHR5cGUgeyBMb2FkZXIsIExvYWRlckNvbmZpZ0Z1bmMgfSBmcm9tICdtd2FwJ1xuXG5leHBvcnQgdHlwZSBIb21lUGFnZURhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICB0dGw6IG51bWJlclxufVxuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxIb21lUGFnZURhdGE+ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdXb3JsZCcsXG4gICAgdHRsOiA2MDQ4MDAsXG4gIH1cbn1cblxuY29uc3QgY29uZmlnOiBMb2FkZXJDb25maWdGdW5jPEhvbWVQYWdlRGF0YT4gPSAoeyBkYXRhIH0pID0+ICh7XG4gIGhlYWRlcnM6IHtcbiAgICAnY2FjaGUtY29udHJvbCc6IGBwdWJsaWMsIG1heC1hZ2U9JHtkYXRhLnR0bH1gLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkZXIsIGNvbmZpZyB9XG4iLCJpbXBvcnQgYXBwU2hlbGwgZnJvbSAnLi9hcHAtc2hlbGwnXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCdcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCB0ZWFtcyBmcm9tICcuL3RlYW1zJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICdhcHAtc2hlbGwnOiBhcHBTaGVsbCxcbiAgYWJvdXQsXG4gIGhvbWUsXG4gIHRlYW1zLFxufVxuIiwiLy8gaW1wb3J0IHsgY2xpZW50LCBUZWFtc1F1ZXJ5IH0gZnJvbSAnLi4vbGliL2dyYXBocWwnXG5pbXBvcnQgdHlwZSB7IExvYWRlciwgTG9hZGVyQ29uZmlnRnVuYyB9IGZyb20gJ213YXAnXG5pbXBvcnQgZGIsIHsgVGVhbSB9IGZyb20gJy4uL2RiJ1xuXG5leHBvcnQgdHlwZSBUZWFtc1BhZ2VEYXRhID0ge1xuICAvLyB0ZWFtczogVGVhbVtdXG4gIHRlYW1zOiBhbnlbXVxuICB0dGw6IG51bWJlclxufVxuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxUZWFtc1BhZ2VEYXRhPiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVhbXMgPSBhd2FpdCBkYi50ZWFtLmZpbmRNYW55KClcblxuICAvLyBjb25zdCB0ZWFtcyA9IGF3YWl0IGNsaWVudC5yZXF1ZXN0KFRlYW1zUXVlcnkpXG4gIHJldHVybiB7XG4gICAgdGVhbXMsXG4gICAgdHRsOiA2MDQ4MDAsXG4gIH1cbn1cblxuY29uc3QgY29uZmlnOiBMb2FkZXJDb25maWdGdW5jPFRlYW1zUGFnZURhdGE+ID0gKHsgZGF0YSB9KSA9PiAoe1xuICBoZWFkZXJzOiB7XG4gICAgJ2NhY2hlLWNvbnRyb2wnOiBgcHVibGljLCBtYXgtYWdlPSR7ZGF0YS50dGx9YCxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHsgbG9hZGVyLCBjb25maWcgfVxuIiwiaW1wb3J0IHR5cGUgeyBQYWdlIH0gZnJvbSAnbXdhcCdcblxuaW1wb3J0IEFib3V0IGZyb20gJy4vYWJvdXQnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgVGVhbXMgZnJvbSAnLi90ZWFtcydcblxuY29uc3QgcGFnZXM6IFBhZ2VbXSA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBwYXRoOiAnLycsXG4gIH0sXG4gIHtcbiAgICBjb21wb25lbnQ6IEFib3V0LFxuICAgIHBhdGg6ICcvYWJvdXQnLFxuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBUZWFtcyxcbiAgICBwYXRoOiAnL3RlYW1zJyxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZXNcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBGbGV4LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuaW1wb3J0IHsgU2Nyb2xsVG9Ub3AsIHVzZUxvYWRlciB9IGZyb20gJ213YXAnXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcidcblxuaW1wb3J0IHR5cGUgeyBBcHBTaGVsbFByb3BzIH0gZnJvbSAnLi9sb2FkZXJzL2FwcC1zaGVsbCdcblxuY29uc3QgQXBwID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHRpdGxlIH0gPSB1c2VMb2FkZXI8QXBwU2hlbGxQcm9wcywge30+KCdhcHAtc2hlbGwnLCB7fSlcblxuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlcj5cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuXG4gICAgICA8SGVsbWV0XG4gICAgICAgIGh0bWxBdHRyaWJ1dGVzPXt7IGxhbmc6ICdlbicgfX1cbiAgICAgICAgZGVmYXVsdFRpdGxlPVwiQG13YXAgbWluaW1hbCBleGFtcGxlXCJcbiAgICAgICAgdGl0bGVUZW1wbGF0ZT1cIiVzIHwgQG13YXAgbWluaW1hbCBleGFtcGxlXCJcbiAgICAgID5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgbWluaW1hbCBleGFtcGxlIGRlbW9uc3RyYXRpbmcgdGhlIEBtd2FwIGZyYW1ld29yay5cIiAvPlxuXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgIDwvSGVsbWV0PlxuXG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiB3PVwiZnVsbFwiIG1pbkg9XCIxMDB2aFwiPlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNwaW5uZXIgbGFiZWw9XCJMb2FkaW5nLi4uXCIgLz59PntjaGlsZHJlbn08L1N1c3BlbnNlPlxuICAgICAgPC9GbGV4PlxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7XG4gIGNoYWtyYSxcbiAgQm94LFxuICBGbGV4LFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgVmlzdWFsbHlIaWRkZW4sXG4gIEhTdGFjayxcbiAgQnV0dG9uLFxuICB1c2VEaXNjbG9zdXJlLFxuICBWU3RhY2ssXG4gIEhlYWRpbmcsXG4gIExpbmssXG4gIEljb25CdXR0b24sXG4gIENsb3NlQnV0dG9uLFxuICB1c2VDb2xvck1vZGUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXG5pbXBvcnQgeyBGYVJlYWN0LCBGYU1vb24sIEZhU3VuIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgeyBMaW5rIGFzIE13YXBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBiZyA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICd3aGl0ZScpXG4gIGNvbnN0IG1vYmlsZU5hdiA9IHVzZURpc2Nsb3N1cmUoKVxuXG4gIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICBjb25zdCB0ZXh0ID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2RhcmsnLCAnbGlnaHQnKVxuICBjb25zdCBjb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZScsICdncmF5LjgwMCcpXG4gIGNvbnN0IFN3aXRjaEljb24gPSB1c2VDb2xvck1vZGVWYWx1ZShGYU1vb24sIEZhU3VuKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGNoYWtyYS5oZWFkZXIgYmc9e2JnfSB3PVwiZnVsbFwiIHB4PXt7IGJhc2U6IDIsIHNtOiA0IH19IHB5PXs0fSBzaGFkb3c9XCJtZFwiIGNvbG9yPXtjb2xvcn0+XG4gICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBteD1cImF1dG9cIj5cbiAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJNd2FwIEFwcCBIb21lIFBhZ2VcIlxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBteD1cIjRcIlxuICAgICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgICAgICBfZm9jdXM9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFSZWFjdCBzaXplPVwiMzJcIiAvPlxuICAgICAgICAgICAgICA8VmlzdWFsbHlIaWRkZW4+bXdhcDwvVmlzdWFsbHlIaWRkZW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICBtd2FwXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxIU3RhY2sgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezF9IG1yPXsxfSBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdpbmxpbmUtZmxleCcgfX0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17TXdhcExpbmt9XG4gICAgICAgICAgICAgICAgdG89XCIvXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnIzYxZGJmYicgfX1cbiAgICAgICAgICAgICAgICBfZm9jdXM9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPXtNd2FwTGlua31cbiAgICAgICAgICAgICAgICB0bz17YC9hYm91dD9tZXNzYWdlPSR7ZW5jb2RlVVJJKCdUZXN0IE1lc3NhZ2UgRnJvbSBTZWFyY2gnKX1gfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJjdXJyZW50XCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgICAgICAgIF9mb2N1cz17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPXtNd2FwTGlua31cbiAgICAgICAgICAgICAgICB0bz1cIi90ZWFtc1wiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgICAgX2ZvY3VzPXt7IGNvbG9yOiAnIzYxZGJmYicgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlYW1zXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICBmb250U2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YFN3aXRjaCB0byAke3RleHR9IG1vZGVgfVxuICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICBjb2xvcj1cImN1cnJlbnRcIlxuICAgICAgICAgICAgICBtbD17eyBiYXNlOiAnMCcsIG1kOiAnMycgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxuICAgICAgICAgICAgICBpY29uPXs8U3dpdGNoSWNvbiAvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9e3sgYmFzZTogJ2lubGluZS1mbGV4JywgbWQ6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdmbGV4JywgbWQ6ICdub25lJyB9fVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIG1lbnVcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMjBweFwiXG4gICAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICdpbmhlcml0Jyl9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBpY29uPXs8QWlPdXRsaW5lTWVudSAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXttb2JpbGVOYXYub25PcGVufVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxWU3RhY2tcbiAgICAgICAgICAgICAgICBwb3M9XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgICAgIGxlZnQ9ezB9XG4gICAgICAgICAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgICAgICAgICAgZGlzcGxheT17bW9iaWxlTmF2LmlzT3BlbiA/ICdmbGV4JyA6ICdub25lJ31cbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgIHBiPXs0fVxuICAgICAgICAgICAgICAgIG09ezJ9XG4gICAgICAgICAgICAgICAgYmc9e2JnfVxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgICAgICAgICAgcm91bmRlZD1cInNtXCJcbiAgICAgICAgICAgICAgICBzaGFkb3c9XCJzbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlIG1lbnVcIiBvbkNsaWNrPXttb2JpbGVOYXYub25DbG9zZX0gLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPXtNd2FwTGlua30gdG89XCIvXCIgdz1cImZ1bGxcIiB2YXJpYW50PVwiZ2hvc3RcIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcz17TXdhcExpbmt9XG4gICAgICAgICAgICAgICAgICB0bz17YC9hYm91dD9tZXNzYWdlPSR7ZW5jb2RlVVJJKCdUZXN0IE1lc3NhZ2UgRnJvbSBTZWFyY2gnKX1gfVxuICAgICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYXM9e013YXBMaW5rfSB0bz1cIi90ZWFtc1wiIHc9XCJmdWxsXCIgdmFyaWFudD1cImdob3N0XCI+XG4gICAgICAgICAgICAgICAgICBUZWFtc1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L2NoYWtyYS5oZWFkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJidWZmZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbnN0YW50c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ19kZWNvZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cdC8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuXHR2YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvQG13YXAvZXhwcmVzcy9kaXN0L2V4cHJlc3MubW9kZXJuLmpzXCIpKSlcblx0X193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcblx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG59O1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3MgYW5kIHNpYmxpbmcgY2h1bmtzIGZvciB0aGUgZW50cnlwb2ludFxuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuLy8gXCIxXCIgbWVhbnMgXCJsb2FkZWRcIiwgb3RoZXJ3aXNlIG5vdCBsb2FkZWQgeWV0XG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLnJlcXVpcmUgPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSk7XG5cbnZhciBpbnN0YWxsQ2h1bmsgPSAoY2h1bmspID0+IHtcblx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHMsIHJ1bnRpbWUgPSBjaHVuay5ydW50aW1lO1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5PKCk7XG59O1xuXG4vLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLnJlcXVpcmUgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG5cdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0aW5zdGFsbENodW5rKHJlcXVpcmUoXCIuL1wiICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpKSk7XG5cdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDE7XG5cdH1cbn07XG5cbi8vIG5vIGV4dGVybmFsIGluc3RhbGwgY2h1bmtcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdCIsInZhciBuZXh0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy54O1xuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzXCIpO1xuXHRyZXR1cm4gbmV4dCgpO1xufTsiLCIvLyBydW4gc3RhcnR1cFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=