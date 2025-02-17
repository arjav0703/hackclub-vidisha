"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);


const ColorSwitcher = (props)=>{
    const [mode, setMode] = (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        onClick: ()=>setMode(mode === "dark" ? "light" : "dark"),
        title: `Switch to ${mode === "dark" ? "light" : "dark"} mode`,
        sx: {
            position: "absolute",
            top: [
                2,
                3
            ],
            right: [
                2,
                3
            ],
            color: "primary",
            cursor: "pointer",
            borderRadius: "circle",
            transition: "box-shadow .125s ease-in-out",
            ":hover,:focus": {
                boxShadow: "0 0 0 3px",
                outline: "none"
            }
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            viewBox: "0 0 32 32",
            width: 24,
            height: 24,
            fill: "currentcolor",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: 16,
                    cy: 16,
                    r: 14,
                    fill: "none",
                    stroke: "currentcolor",
                    strokeWidth: 4
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M 16 0 A 16 16 0 0 0 16 32 z"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorSwitcher);


/***/ })

};
;