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




const DynamicComponent = (0,_mwap_async__WEBPACK_IMPORTED_MODULE_1__.dynamic)(() => __webpack_require__.e(/*! import() | pages_teams_tsx */ "pages_teams_tsx").then(__webpack_require__.bind(__webpack_require__, /*! !!../node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./teams.tsx */ "./node_modules/esbuild-loader/dist/index.js??ruleSet[1].rules[3]!./pages/teams.tsx")),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2Fib3V0LnRzeD8xZTJlIiwid2VicGFjazovL213YXAtYXBwLy4vcGFnZXMvaG9tZS50c3g/MjY2NSIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL3RlYW1zLnRzeD83Y2YwIiwid2VicGFjazovL213YXAtYXBwLy4vZGIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2Fib3V0LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy9hcHAtc2hlbGwudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2hvbWUudHMiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvLi9sb2FkZXJzL2luZGV4LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vbG9hZGVycy90ZWFtcy50cyIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL3BhZ2VzL2luZGV4LnRzIiwid2VicGFjazovL213YXAtYXBwLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJjb25zdGFudHNcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9td2FwLWFwcC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvZXh0ZXJuYWwgXCJzdHJpbmdfZGVjb2RlclwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL213YXAtYXBwL2V4dGVybmFsIFwiemxpYlwiIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9td2FwLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svcnVudGltZS9yZXF1aXJlIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXdhcC1hcHAvd2VicGFjay9ydW50aW1lL3N0YXJ0dXAgY2h1bmsgZGVwZW5kZW5jaWVzIiwid2VicGFjazovL213YXAtYXBwL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNPOztBQUV0Qyx5QkFBeUIsb0RBQU8sT0FBTywyU0FDdUY7QUFDOUg7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixTQUFTLGdEQUFtQjtBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWitCO0FBQ087O0FBRXRDLHlCQUF5QixvREFBTyxPQUFPLHVTQUNxRjtBQUM1SDtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLFNBQVMsZ0RBQW1CO0FBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaK0I7QUFDTzs7QUFFdEMseUJBQXlCLG9EQUFPLE9BQU8sMlNBQ3VGO0FBQzlIO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsU0FBUyxnREFBbUI7QUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFFQSxJQUFJO0FBRUosSUFBSSxLQUF5QixFQUFlLEVBQ2pDLE1BQ0o7QUFDTCxNQUFJLENBQUMsT0FBTyxXQUFXO0FBQ3JCLFdBQU8sWUFBWSxJQUFJLHdEQUFZO0FBQVo7QUFHekIsT0FBSyxPQUFPO0FBQUE7QUFHUCxzQkFBNEI7QUFBQTtBQUNqQyxVQUFNLEdBQUc7QUFFVCxXQUFPO0FBQUE7QUFBQTtBQUdGLG1CQUF5QjtBQUFBO0FBQzlCLFVBQU0sR0FBRztBQUVULFdBQU87QUFBQTtBQUFBO0FBR1Q7QUFDQSxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUNoQmpCLE1BQU0sU0FBaUQsQ0FBQyxDQUFFLFlBQWE7QUFDckUsUUFBTSxVQUFVLE9BQU8sV0FBVztBQUVsQyxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUE7QUFJVCxNQUFNLFNBQTBDLENBQUMsQ0FBRSxVQUFZO0FBQUEsRUFDN0QsU0FBUztBQUFBLElBQ1AsaUJBQWlCLG1CQUFtQixLQUFLO0FBQUE7QUFBQTtBQUk3QyxpRUFBZSxDQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ2xCekIsTUFBTSxTQUFnQyxNQUFNO0FBQzFDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQTtBQUFBO0FBSVgsaUVBQWUsQ0FBRTs7Ozs7Ozs7Ozs7Ozs7O0FDUGpCLE1BQU0sU0FBK0IsTUFBTTtBQUN6QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUE7QUFBQTtBQUlULE1BQU0sU0FBeUMsQ0FBQyxDQUFFLFVBQVk7QUFBQSxFQUM1RCxTQUFTO0FBQUEsSUFDUCxpQkFBaUIsbUJBQW1CLEtBQUs7QUFBQTtBQUFBO0FBSTdDLGlFQUFlLENBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCekI7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZTtBQUFBLEVBQ2IsYUFBYSwrQ0FBUTtBQUFSLEVBQ2IsS0FBSztBQUFMLEVBQ0EsSUFBSTtBQUFKLEVBQ0EsS0FBSztBQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JGO0FBT0EsTUFBTSxTQUFnQyxNQUFZO0FBQ2hELFFBQU0sUUFBUSxNQUFNLHNEQUFnQjtBQUVwQyxTQUFPO0FBQUEsSUFDTDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUE7QUFJVCxNQUFNLFNBQTBDLENBQUMsQ0FBRSxVQUFZO0FBQUEsRUFDN0QsU0FBUztBQUFBLElBQ1AsaUJBQWlCLG1CQUFtQixLQUFLO0FBQUE7QUFBQTtBQUk3QyxpRUFBZSxDQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCekI7QUFDQTtBQUNBO0FBRUEsTUFBTSxRQUFnQjtBQUFBLEVBQ3BCO0FBQUEsSUFDRSxXQUFXLDBDQUFJO0FBQUosSUFDWCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQUEsSUFDRSxXQUFXLDJDQUFLO0FBQUwsSUFDWCxNQUFNO0FBQUE7QUFBQSxFQUVSO0FBQUEsSUFDRSxXQUFXLDJDQUFLO0FBQUwsSUFDWCxNQUFNO0FBQUE7QUFBQTtBQUlWLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnBCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBLE1BQU0sTUFBTSxDQUFDLENBQUUsY0FBZTtBQUM1QixRQUFNLENBQUUsU0FBVSwrQ0FBUyxDQUFvQixhQUFhO0FBRTVELFNBQ0UsaUVBQUMsNERBQWMsRUFBZixNQUNFLGlFQUFDLDZDQUFXLEVBQVosT0FFQSxpRUFBQyxzREFBTSxFQUFQO0FBQUEsSUFDRSxnQkFBZ0IsQ0FBRSxNQUFNO0FBQUEsSUFDeEIsY0FBYTtBQUFBLElBQ2IsZUFBYztBQUFBLEtBRWQsaUVBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQWMsU0FBUTtBQUFBLE1BRWpDLGlFQUFDLFFBQUQ7QUFBQSxJQUFNLFNBQVE7QUFBQSxNQUNkLGlFQUFDLFFBQUQ7QUFBQSxJQUFNLGNBQVc7QUFBQSxJQUFrQixTQUFRO0FBQUEsTUFDM0MsaUVBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLGlFQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFtQixPQUFNO0FBQUEsSUFBVSxNQUFLO0FBQUEsTUFDbEQsaUVBQUMsUUFBRDtBQUFBLElBQU0sS0FBSTtBQUFBLElBQU8sTUFBSztBQUFBLElBQVksT0FBTTtBQUFBLElBQVEsTUFBSztBQUFBLE1BQ3JELGlFQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFZLE9BQU07QUFBQSxJQUFRLE1BQUs7QUFBQSxNQUNyRCxpRUFBQyxRQUFEO0FBQUEsSUFBTSxLQUFJO0FBQUEsSUFBVyxNQUFLO0FBQUEsT0FHNUIsaUVBQUMsdURBQU0sRUFBUCxPQUNBLGlFQUFDLGtEQUFJLEVBQUw7QUFBQSxJQUFNLFdBQVU7QUFBQSxJQUFTLFlBQVc7QUFBQSxJQUFTLGdCQUFlO0FBQUEsSUFBUyxHQUFFO0FBQUEsSUFBTyxNQUFLO0FBQUEsS0FDakYsaUVBQUMsTUFBRCxNQUFLLFFBQ0wsaUVBQUMsMkNBQVEsRUFBVDtBQUFBLElBQVUsVUFBVSxpRUFBQyxxREFBTyxFQUFSO0FBQUEsTUFBUyxPQUFNO0FBQUE7QUFBQSxLQUFrQjtBQUFBO0FBTTdELGlFQUFlLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDbEI7QUFFQTtBQWdCQTtBQUNBO0FBQ0E7QUFFZSxrQkFBa0I7QUFDL0IsUUFBTSxLQUFLLG1FQUFpQixDQUFDLFlBQVk7QUFDekMsUUFBTSxZQUFZLCtEQUFhO0FBRS9CLFFBQU0sQ0FBRSxtQkFBb0IsOERBQVk7QUFDeEMsUUFBTSxPQUFPLG1FQUFpQixDQUFDLFFBQVE7QUFDdkMsUUFBTSxRQUFRLG1FQUFpQixDQUFDLFNBQVM7QUFDekMsUUFBTSxhQUFhLG1FQUFpQixDQUFDLGtEQUFNLEVBQUUsaURBQUs7QUFFbEQsU0FDRSxpRUFBQywyQ0FBYyxFQUFmLE1BQ0UsaUVBQUMsMkRBQWEsRUFBZDtBQUFBLElBQWU7QUFBQSxJQUFRLEdBQUU7QUFBQSxJQUFPLElBQUksQ0FBRSxNQUFNLEdBQUcsSUFBSTtBQUFBLElBQUssSUFBSTtBQUFBLElBQUcsUUFBTztBQUFBLElBQUs7QUFBQSxLQUN6RSxpRUFBQyxrREFBSSxFQUFMO0FBQUEsSUFBTSxZQUFXO0FBQUEsSUFBUyxnQkFBZTtBQUFBLElBQWdCLElBQUc7QUFBQSxLQUMxRCxpRUFBQyxrREFBSSxFQUFMLE1BQ0UsaUVBQUMsa0RBQUksRUFBTDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sU0FBUTtBQUFBLElBQ1IsWUFBVztBQUFBLElBQ1gsSUFBRztBQUFBLElBQ0gsUUFBUSxDQUFFLE9BQU87QUFBQSxJQUNqQixRQUFRLENBQUUsT0FBTztBQUFBLEtBRWpCLGlFQUFDLG1EQUFPLEVBQVI7QUFBQSxJQUFTLE1BQUs7QUFBQSxNQUNkLGlFQUFDLDREQUFjLEVBQWYsTUFBZ0IsVUFFbEIsaUVBQUMscURBQU8sRUFBUjtBQUFBLElBQVMsSUFBRztBQUFBLElBQUssVUFBUztBQUFBLElBQU0sWUFBVztBQUFBLEtBQU8sVUFJcEQsaUVBQUMsb0RBQU0sRUFBUDtBQUFBLElBQVEsU0FBUTtBQUFBLElBQU8sWUFBVztBQUFBLElBQVMsU0FBUztBQUFBLEtBQ2xELGlFQUFDLG9EQUFNLEVBQVA7QUFBQSxJQUFRLFNBQVM7QUFBQSxJQUFHLElBQUk7QUFBQSxJQUFHLFNBQVMsQ0FBRSxNQUFNLFFBQVEsSUFBSTtBQUFBLEtBQ3RELGlFQUFDLG9EQUFNLEVBQVA7QUFBQSxJQUNFLElBQUksbURBQVE7QUFBUixJQUNKLElBQUc7QUFBQSxJQUNILFNBQVE7QUFBQSxJQUNSLE9BQU07QUFBQSxJQUNOLFFBQVEsQ0FBRSxPQUFPO0FBQUEsSUFDakIsUUFBUSxDQUFFLE9BQU87QUFBQSxLQUNsQixTQUdELGlFQUFDLG9EQUFNLEVBQVA7QUFBQSxJQUNFLElBQUksbURBQVE7QUFBUixJQUNKLElBQUksa0JBQWtCLFVBQVU7QUFBQSxJQUNoQyxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixRQUFRLENBQUUsT0FBTztBQUFBLElBQ2pCLFFBQVEsQ0FBRSxPQUFPO0FBQUEsS0FDbEIsVUFHRCxpRUFBQyxvREFBTSxFQUFQO0FBQUEsSUFDRSxJQUFJLG1EQUFRO0FBQVIsSUFDSixJQUFHO0FBQUEsSUFDSCxTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixRQUFRLENBQUUsT0FBTztBQUFBLElBQ2pCLFFBQVEsQ0FBRSxPQUFPO0FBQUEsS0FDbEIsV0FJSCxpRUFBQyx5REFBVSxFQUFYO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxVQUFTO0FBQUEsSUFDVCxjQUFZLGFBQWE7QUFBQSxJQUN6QixTQUFRO0FBQUEsSUFDUixPQUFNO0FBQUEsSUFDTixJQUFJLENBQUUsTUFBTSxLQUFLLElBQUk7QUFBQSxJQUNyQixTQUFTO0FBQUEsSUFDVCxNQUFNLGlFQUFDLFlBQUQ7QUFBQSxNQUVSLGlFQUFDLGtEQUFHLEVBQUo7QUFBQSxJQUFLLFNBQVMsQ0FBRSxNQUFNLGVBQWUsSUFBSTtBQUFBLEtBQ3ZDLGlFQUFDLHlEQUFVLEVBQVg7QUFBQSxJQUNFLFNBQVMsQ0FBRSxNQUFNLFFBQVEsSUFBSTtBQUFBLElBQzdCLGNBQVc7QUFBQSxJQUNYLFVBQVM7QUFBQSxJQUNULE9BQU8sbUVBQWlCLENBQUMsWUFBWTtBQUFBLElBQ3JDLFNBQVE7QUFBQSxJQUNSLE1BQU0saUVBQUMsMERBQWEsRUFBZDtBQUFBLElBQ04sU0FBUyxVQUFVO0FBQUEsTUFHckIsaUVBQUMsb0RBQU0sRUFBUDtBQUFBLElBQ0UsS0FBSTtBQUFBLElBQ0osS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsU0FBUyxVQUFVLFNBQVMsU0FBUztBQUFBLElBQ3JDLGVBQWM7QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILElBQUk7QUFBQSxJQUNKLEdBQUc7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsSUFDVCxTQUFRO0FBQUEsSUFDUixRQUFPO0FBQUEsS0FFUCxpRUFBQywwREFBVyxFQUFaO0FBQUEsSUFBYSxjQUFXO0FBQUEsSUFBYSxTQUFTLFVBQVU7QUFBQSxNQUN4RCxpRUFBQyxvREFBTSxFQUFQO0FBQUEsSUFBUSxJQUFJLG1EQUFRO0FBQVIsSUFBVSxJQUFHO0FBQUEsSUFBSSxHQUFFO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBUSxTQUd0RCxpRUFBQyxvREFBTSxFQUFQO0FBQUEsSUFDRSxJQUFJLG1EQUFRO0FBQVIsSUFDSixJQUFJLGtCQUFrQixVQUFVO0FBQUEsSUFDaEMsR0FBRTtBQUFBLElBQ0YsU0FBUTtBQUFBLEtBQ1QsVUFHRCxpRUFBQyxvREFBTSxFQUFQO0FBQUEsSUFBUSxJQUFJLG1EQUFRO0FBQVIsSUFBVSxJQUFHO0FBQUEsSUFBUyxHQUFFO0FBQUEsSUFBTyxTQUFRO0FBQUEsS0FBUTtBQUFBOzs7Ozs7Ozs7OztBQ3JJM0Usb0M7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOzs7OztXQ3JDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDhCQUE4Qix3Q0FBd0M7V0FDdEU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0IscUJBQXFCO1dBQ3JDO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzFCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRDtXQUN0RCxxQ0FBcUMsaUVBQWlFO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0NSQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGVBQWUscUJBQXFCO1dBQ3BDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBLEdBQUc7V0FDSDtXQUNBOztXQUVBOztXQUVBOztXQUVBLGtCOzs7OztXQ3JDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1VDSkE7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGR5bmFtaWMgfSBmcm9tIFwiQG13YXAvYXN5bmNcIjtcblxuY29uc3QgRHluYW1pY0NvbXBvbmVudCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFxuICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhZ2VzX2Fib3V0X3RzeFwiICovIFwiISEuLi9ub2RlX21vZHVsZXMvZXNidWlsZC1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXSEuL2Fib3V0LnRzeFwiKSxcbiAge1xuICAgIF9fY2h1bmtJZDogXCJwYWdlc19hYm91dF90c3hcIixcbiAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXN5bmNDb21wb25lbnQocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHluYW1pY0NvbXBvbmVudCwgcHJvcHMpO1xufVxuICAiLCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZHluYW1pYyB9IGZyb20gXCJAbXdhcC9hc3luY1wiO1xuXG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXG4gIC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFnZXNfaG9tZV90c3hcIiAqLyBcIiEhLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10hLi9ob21lLnRzeFwiKSxcbiAge1xuICAgIF9fY2h1bmtJZDogXCJwYWdlc19ob21lX3RzeFwiLFxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc3luY0NvbXBvbmVudChwcm9wcykge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChEeW5hbWljQ29tcG9uZW50LCBwcm9wcyk7XG59XG4gICIsIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkeW5hbWljIH0gZnJvbSBcIkBtd2FwL2FzeW5jXCI7XG5cbmNvbnN0IER5bmFtaWNDb21wb25lbnQgPSBkeW5hbWljKCgpID0+IGltcG9ydChcbiAgLyogd2VicGFja0NodW5rTmFtZTogXCJwYWdlc190ZWFtc190c3hcIiAqLyBcIiEhLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10hLi90ZWFtcy50c3hcIiksXG4gIHtcbiAgICBfX2NodW5rSWQ6IFwicGFnZXNfdGVhbXNfdHN4XCIsXG4gIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFzeW5jQ29tcG9uZW50KHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KER5bmFtaWNDb21wb25lbnQsIHByb3BzKTtcbn1cbiAgIiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBkYjogUHJpc21hQ2xpZW50XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWxbJ3ByaXNtYSddKSB7XG4gICAgZ2xvYmFsWydwcmlzbWEnXSA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICB9XG5cbiAgZGIgPSBnbG9iYWxbJ3ByaXNtYSddXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICBhd2FpdCBkYi4kZGlzY29ubmVjdCgpXG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gIGF3YWl0IGRiLiRjb25uZWN0KClcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgKiBmcm9tICdAcHJpc21hL2NsaWVudCdcbmV4cG9ydCBkZWZhdWx0IGRiXG4iLCJpbXBvcnQgdHlwZSB7IExvYWRlciwgTG9hZGVyQ29uZmlnRnVuYyB9IGZyb20gXCJtd2FwXCI7XG5cbmV4cG9ydCB0eXBlIEFib3V0UGFnZURhdGEgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHRsOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBYm91dFBhZ2VQYXJhbXMgPSB7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxBYm91dFBhZ2VEYXRhLCBBYm91dFBhZ2VQYXJhbXM+ID0gKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IHBhcmFtcy5tZXNzYWdlIHx8IFwiQ2hpY2tlbnMgYXJlIGZ1bm55IGFuaW1hbHNcIjtcblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2UsXG4gICAgdHRsOiAyMCxcbiAgfTtcbn07XG5cbmNvbnN0IGNvbmZpZzogTG9hZGVyQ29uZmlnRnVuYzxBYm91dFBhZ2VEYXRhPiA9ICh7IGRhdGEgfSkgPT4gKHtcbiAgaGVhZGVyczoge1xuICAgIFwiY2FjaGUtY29udHJvbFwiOiBgcHVibGljLCBtYXgtYWdlPSR7ZGF0YS50dGx9YCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWRlciwgY29uZmlnIH07XG4iLCJpbXBvcnQgdHlwZSB7IExvYWRlciB9IGZyb20gJ213YXAnXG5pbXBvcnQgdHlwZSB7IE5hdmJhckxpbmsgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IHR5cGUgQXBwU2hlbGxQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBsaW5rcz86IE5hdmJhckxpbmtcbn1cblxuY29uc3QgbG9hZGVyOiBMb2FkZXI8QXBwU2hlbGxQcm9wcz4gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdBcHBTaGVsbCcsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkZXIgfVxuIiwiaW1wb3J0IHR5cGUgeyBMb2FkZXIsIExvYWRlckNvbmZpZ0Z1bmMgfSBmcm9tICdtd2FwJ1xuXG5leHBvcnQgdHlwZSBIb21lUGFnZURhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICB0dGw6IG51bWJlclxufVxuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxIb21lUGFnZURhdGE+ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdXb3JsZCcsXG4gICAgdHRsOiA2MDQ4MDAsXG4gIH1cbn1cblxuY29uc3QgY29uZmlnOiBMb2FkZXJDb25maWdGdW5jPEhvbWVQYWdlRGF0YT4gPSAoeyBkYXRhIH0pID0+ICh7XG4gIGhlYWRlcnM6IHtcbiAgICAnY2FjaGUtY29udHJvbCc6IGBwdWJsaWMsIG1heC1hZ2U9JHtkYXRhLnR0bH1gLFxuICB9LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgeyBsb2FkZXIsIGNvbmZpZyB9XG4iLCJpbXBvcnQgYXBwU2hlbGwgZnJvbSAnLi9hcHAtc2hlbGwnXG5pbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCdcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCB0ZWFtcyBmcm9tICcuL3RlYW1zJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICdhcHAtc2hlbGwnOiBhcHBTaGVsbCxcbiAgYWJvdXQsXG4gIGhvbWUsXG4gIHRlYW1zLFxufVxuIiwiaW1wb3J0IHR5cGUgeyBMb2FkZXIsIExvYWRlckNvbmZpZ0Z1bmMgfSBmcm9tICdtd2FwJ1xuaW1wb3J0IGRiLCB7IFRlYW0gfSBmcm9tICcuLi9kYidcblxuZXhwb3J0IHR5cGUgVGVhbXNQYWdlRGF0YSA9IHtcbiAgdGVhbXM6IFRlYW1bXVxuICB0dGw6IG51bWJlclxufVxuXG5jb25zdCBsb2FkZXI6IExvYWRlcjxUZWFtc1BhZ2VEYXRhPiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVhbXMgPSBhd2FpdCBkYi50ZWFtLmZpbmRNYW55KClcblxuICByZXR1cm4ge1xuICAgIHRlYW1zLFxuICAgIHR0bDogNjA0ODAwLFxuICB9XG59XG5cbmNvbnN0IGNvbmZpZzogTG9hZGVyQ29uZmlnRnVuYzxUZWFtc1BhZ2VEYXRhPiA9ICh7IGRhdGEgfSkgPT4gKHtcbiAgaGVhZGVyczoge1xuICAgICdjYWNoZS1jb250cm9sJzogYHB1YmxpYywgbWF4LWFnZT0ke2RhdGEudHRsfWAsXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7IGxvYWRlciwgY29uZmlnIH1cbiIsImltcG9ydCB0eXBlIHsgUGFnZSB9IGZyb20gJ213YXAnXG5cbmltcG9ydCBBYm91dCBmcm9tICcuL2Fib3V0J1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IFRlYW1zIGZyb20gJy4vdGVhbXMnXG5cbmNvbnN0IHBhZ2VzOiBQYWdlW10gPSBbXG4gIHtcbiAgICBjb21wb25lbnQ6IEhvbWUsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgcGF0aDogJy8nLFxuICB9LFxuICB7XG4gICAgY29tcG9uZW50OiBBYm91dCxcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgfSxcbiAge1xuICAgIGNvbXBvbmVudDogVGVhbXMsXG4gICAgcGF0aDogJy90ZWFtcycsXG4gIH0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VzXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnXG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciwgRmxleCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmltcG9ydCB7IFNjcm9sbFRvVG9wLCB1c2VMb2FkZXIgfSBmcm9tICdtd2FwJ1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInXG5cbmltcG9ydCB0eXBlIHsgQXBwU2hlbGxQcm9wcyB9IGZyb20gJy4vbG9hZGVycy9hcHAtc2hlbGwnXG5cbmNvbnN0IEFwcCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSB9ID0gdXNlTG9hZGVyPEFwcFNoZWxsUHJvcHMsIHt9PignYXBwLXNoZWxsJywge30pXG5cbiAgcmV0dXJuIChcbiAgICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgICA8U2Nyb2xsVG9Ub3AgLz5cblxuICAgICAgPEhlbG1ldFxuICAgICAgICBodG1sQXR0cmlidXRlcz17eyBsYW5nOiAnZW4nIH19XG4gICAgICAgIGRlZmF1bHRUaXRsZT1cIkBtd2FwIG1pbmltYWwgZXhhbXBsZVwiXG4gICAgICAgIHRpdGxlVGVtcGxhdGU9XCIlcyB8IEBtd2FwIG1pbmltYWwgZXhhbXBsZVwiXG4gICAgICA+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIG1pbmltYWwgZXhhbXBsZSBkZW1vbnN0cmF0aW5nIHRoZSBAbXdhcCBmcmFtZXdvcmsuXCIgLz5cblxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICA8L0hlbG1ldD5cblxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgdz1cImZ1bGxcIiBtaW5IPVwiMTAwdmhcIj5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxTcGlubmVyIGxhYmVsPVwiTG9hZGluZy4uLlwiIC8+fT57Y2hpbGRyZW59PC9TdXNwZW5zZT5cbiAgICAgIDwvRmxleD5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge1xuICBjaGFrcmEsXG4gIEJveCxcbiAgRmxleCxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIFZpc3VhbGx5SGlkZGVuLFxuICBIU3RhY2ssXG4gIEJ1dHRvbixcbiAgdXNlRGlzY2xvc3VyZSxcbiAgVlN0YWNrLFxuICBIZWFkaW5nLFxuICBMaW5rLFxuICBJY29uQnV0dG9uLFxuICBDbG9zZUJ1dHRvbixcbiAgdXNlQ29sb3JNb2RlLFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xuaW1wb3J0IHsgRmFSZWFjdCwgRmFNb29uLCBGYVN1biB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgTGluayBhcyBNd2FwTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgYmcgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnd2hpdGUnKVxuICBjb25zdCBtb2JpbGVOYXYgPSB1c2VEaXNjbG9zdXJlKClcblxuICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcbiAgY29uc3QgdGV4dCA9IHVzZUNvbG9yTW9kZVZhbHVlKCdkYXJrJywgJ2xpZ2h0JylcbiAgY29uc3QgY29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnd2hpdGUnLCAnZ3JheS44MDAnKVxuICBjb25zdCBTd2l0Y2hJY29uID0gdXNlQ29sb3JNb2RlVmFsdWUoRmFNb29uLCBGYVN1bilcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxjaGFrcmEuaGVhZGVyIGJnPXtiZ30gdz1cImZ1bGxcIiBweD17eyBiYXNlOiAyLCBzbTogNCB9fSBweT17NH0gc2hhZG93PVwibWRcIiBjb2xvcj17Y29sb3J9PlxuICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgbXg9XCJhdXRvXCI+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgIHRpdGxlPVwiTXdhcCBBcHAgSG9tZSBQYWdlXCJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgbXg9XCI0XCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnIzYxZGJmYicgfX1cbiAgICAgICAgICAgICAgX2ZvY3VzPXt7IGNvbG9yOiAnIzYxZGJmYicgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhUmVhY3Qgc2l6ZT1cIjMyXCIgLz5cbiAgICAgICAgICAgICAgPFZpc3VhbGx5SGlkZGVuPm13YXA8L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAgbXdhcFxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8SFN0YWNrIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsxfSBtcj17MX0gZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnaW5saW5lLWZsZXgnIH19PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYXM9e013YXBMaW5rfVxuICAgICAgICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImN1cnJlbnRcIlxuICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgICAgX2ZvY3VzPXt7IGNvbG9yOiAnIzYxZGJmYicgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17TXdhcExpbmt9XG4gICAgICAgICAgICAgICAgdG89e2AvYWJvdXQ/bWVzc2FnZT0ke2VuY29kZVVSSSgnVGVzdCBNZXNzYWdlIEZyb20gU2VhcmNoJyl9YH1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudFwiXG4gICAgICAgICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnIzYxZGJmYicgfX1cbiAgICAgICAgICAgICAgICBfZm9jdXM9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17TXdhcExpbmt9XG4gICAgICAgICAgICAgICAgdG89XCIvdGVhbXNcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJjdXJyZW50XCJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgY29sb3I6ICcjNjFkYmZiJyB9fVxuICAgICAgICAgICAgICAgIF9mb2N1cz17eyBjb2xvcjogJyM2MWRiZmInIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBUZWFtc1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvSFN0YWNrPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BTd2l0Y2ggdG8gJHt0ZXh0fSBtb2RlYH1cbiAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgICAgY29sb3I9XCJjdXJyZW50XCJcbiAgICAgICAgICAgICAgbWw9e3sgYmFzZTogJzAnLCBtZDogJzMnIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cbiAgICAgICAgICAgICAgaWNvbj17PFN3aXRjaEljb24gLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6ICdpbmxpbmUtZmxleCcsIG1kOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnZmxleCcsIG1kOiAnbm9uZScgfX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBtZW51XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjIwcHhcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheS44MDAnLCAnaW5oZXJpdCcpfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgaWNvbj17PEFpT3V0bGluZU1lbnUgLz59XG4gICAgICAgICAgICAgICAgb25DbGljaz17bW9iaWxlTmF2Lm9uT3Blbn1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICA8VlN0YWNrXG4gICAgICAgICAgICAgICAgcG9zPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e21vYmlsZU5hdi5pc09wZW4gPyAnZmxleCcgOiAnbm9uZSd9XG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgcD17Mn1cbiAgICAgICAgICAgICAgICBwYj17NH1cbiAgICAgICAgICAgICAgICBtPXsyfVxuICAgICAgICAgICAgICAgIGJnPXtiZ31cbiAgICAgICAgICAgICAgICBzcGFjaW5nPXszfVxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJzbVwiXG4gICAgICAgICAgICAgICAgc2hhZG93PVwic21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZSBtZW51XCIgb25DbGljaz17bW9iaWxlTmF2Lm9uQ2xvc2V9IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz17TXdhcExpbmt9IHRvPVwiL1wiIHc9XCJmdWxsXCIgdmFyaWFudD1cImdob3N0XCI+XG4gICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXM9e013YXBMaW5rfVxuICAgICAgICAgICAgICAgICAgdG89e2AvYWJvdXQ/bWVzc2FnZT0ke2VuY29kZVVSSSgnVGVzdCBNZXNzYWdlIEZyb20gU2VhcmNoJyl9YH1cbiAgICAgICAgICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGFzPXtNd2FwTGlua30gdG89XCIvdGVhbXNcIiB3PVwiZnVsbFwiIHZhcmlhbnQ9XCJnaG9zdFwiPlxuICAgICAgICAgICAgICAgICAgVGVhbXNcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9jaGFrcmEuaGVhZGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYnVmZmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25zdGFudHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpbmdfZGVjb2RlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXHQvLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcblx0dmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL0Btd2FwL2V4cHJlc3MvZGlzdC9leHByZXNzLm1vZGVybi5qc1wiKSkpXG5cdF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xufTtcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0cmVzdWx0ID0gZm4oKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzIGFuZCBzaWJsaW5nIGNodW5rcyBmb3IgdGhlIGVudHJ5cG9pbnRcbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3Ncbi8vIFwiMVwiIG1lYW5zIFwibG9hZGVkXCIsIG90aGVyd2lzZSBub3QgbG9hZGVkIHlldFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDFcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5yZXF1aXJlID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pO1xuXG52YXIgaW5zdGFsbENodW5rID0gKGNodW5rKSA9PiB7XG5cdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzLCBydW50aW1lID0gY2h1bmsucnVudGltZTtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDE7XG5cdF9fd2VicGFja19yZXF1aXJlX18uTygpO1xufTtcblxuLy8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcbl9fd2VicGFja19yZXF1aXJlX18uZi5yZXF1aXJlID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuXHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdGluc3RhbGxDaHVuayhyZXF1aXJlKFwiLi9cIiArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKSkpO1xuXHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAxO1xuXHR9XG59O1xuXG4vLyBubyBleHRlcm5hbCBpbnN0YWxsIGNodW5rXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3QiLCJ2YXIgbmV4dCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9yc1wiKTtcblx0cmV0dXJuIG5leHQoKTtcbn07IiwiLy8gcnVuIHN0YXJ0dXBcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9