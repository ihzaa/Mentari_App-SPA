(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user */ "./resources/js/user.js");
/* harmony import */ var _authUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authUser */ "./resources/js/authUser.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import "@fortawesome/fontawesome-free/css/all.min.css";


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isUserEmpty: true
    };
  },
  methods: {
    checkAuth: function checkAuth() {
      var _this = this;

      var token = localStorage.getItem("token");

      if (!_.isEmpty(token)) {
        axios.get("api/user", {
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        }).then(function (result) {
          _user__WEBPACK_IMPORTED_MODULE_1__["default"].data = result.data;
          window.user = result.data;
          _this.isUserEmpty = false;
          axios.defaults.headers.common["Authorization"] = token; // console.log(window.user);
        })["catch"](function (err) {
          localStorage.removeItem("token");
        });
      }
    },
    logout: function logout() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_authUser__WEBPACK_IMPORTED_MODULE_2__["logoutUser"])();

              case 2:
                _context.next = 4;
                return _this2.$router.push({
                  name: "login"
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.checkAuth();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n  min-height: 100%;\n  padding-top: 80px;\n}\n.search {\n  width: 30%;\n}\n.search-group {\n  width: 90%;\n}\n.authNav {\n  border-left: solid 1px gray;\n  padding-left: 20px;\n}\n.kategori {\n  cursor: pointer;\n  margin-right: 30px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.shopping-cart {\n  cursor: pointer;\n  margin-right: 30px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.shopping-cart:hover {\n  background-color: lightgreen;\n  border-radius: 50px;\n}\n.shopping-cart:hover span {\n  color: white;\n}\n#search {\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  border-right: 0;\n}\n#searchButton {\n  border-color: #ced4da;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  border-left: 0;\n}\n@media only screen and (max-width: 990px) {\nbody {\n    padding-top: 120px !important;\n}\n.search {\n    width: 100%;\n}\n.search-group {\n    width: 100%;\n}\n.kategori {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    margin-top: 20px;\n    position: relative;\n}\n.kategori span {\n    font-size: 18px;\n}\n.shopping-cart {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.shopping-cart span {\n    font-size: 18px;\n}\n.authNav {\n    border-left: 0;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 0;\n    font-size: 18px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation.vue?vue&type=template&id=d456e682& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-navbar",
        {
          staticClass: "bg-white px-5 fixed-top",
          attrs: { toggleable: "lg", type: "light", variant: "info" }
        },
        [
          _c("b-navbar-brand", { attrs: { href: "#" } }, [
            _c("h1", [_c("strong", [_vm._v("Mentari")])])
          ]),
          _vm._v(" "),
          _c("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "search" },
            [
              _c(
                "b-input-group",
                { staticClass: "search-group mx-auto" },
                [
                  _c("b-form-input", {
                    attrs: { size: "lg", id: "search", placeholder: "Search" }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-input-group-append",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: {
                            id: "searchButton",
                            variant: "outline-secondary"
                          }
                        },
                        [
                          _c("font-awesome-icon", { attrs: { icon: "search" } })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            { attrs: { id: "nav-collapse", "is-nav": "" } },
            [
              _c(
                "b-navbar-nav",
                { staticClass: "ml-auto mr-4" },
                [
                  _c(
                    "b-nav-item-dropdown",
                    {
                      staticClass: "kategori",
                      attrs: { right: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "button-content",
                          fn: function() {
                            return [
                              _c("span", [_c("strong", [_vm._v("Kategori")])])
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("b-dropdown-item", { attrs: { href: "#" } }, [
                        _vm._v("Profile")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-nav-item", { staticClass: "shopping-cart" }, [
                    _c("span", [_c("strong", [_vm._v("Keranjang")])]),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "icon" },
                      [
                        _c("font-awesome-icon", {
                          attrs: { icon: "shopping-cart" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "tag" }, [_vm._v("0")])
                  ]),
                  _vm._v(" "),
                  _vm.isUserEmpty
                    ? _c(
                        "b-nav-item",
                        { staticClass: "authNav" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "register" } } },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "ml-2",
                                  attrs: { variant: "outline-success" }
                                },
                                [_vm._v("Daftar")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            { attrs: { to: { name: "login" } } },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "ml-2",
                                  attrs: { variant: "outline-success" }
                                },
                                [_vm._v("Masuk")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _c(
                        "b-nav-item-dropdown",
                        {
                          staticClass: "userNav",
                          attrs: { right: "" },
                          scopedSlots: _vm._u([
                            {
                              key: "button-content",
                              fn: function() {
                                return [_c("strong", [_vm._v("User")])]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("b-dropdown-item", { attrs: { href: "#" } }, [
                            _vm._v("Profile")
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-dropdown-item",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.logout($event)
                                }
                              }
                            },
                            [_vm._v("Sign Out")]
                          )
                        ],
                        1
                      )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/authUser.js":
/*!**********************************!*\
  !*** ./resources/js/authUser.js ***!
  \**********************************/
/*! exports provided: getUser, logoutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./resources/js/user.js");

var getUser = function getUser() {
  var token = localStorage.getItem("token");

  if (!_.isEmpty(token)) {
    axios.get("api/user", {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (result) {
      _user__WEBPACK_IMPORTED_MODULE_0__["default"].data = result.data;
      window.user = result.data;
      axios.defaults.headers.common["Authorization"] = token; // console.log(window.user);
    })["catch"](function () {
      localStorage.removeItem("token");
    });
  }
};
var logoutUser = function logoutUser() {
  axios.get("auth/logout").then(function (result) {
    localStorage.removeItem("token");
    _user__WEBPACK_IMPORTED_MODULE_0__["default"].data = null;
    window.user = null;
    axios.defaults.headers.common["Authorization"] = null;
  })["catch"](function (err) {
    console.log(err);
  });
};

/***/ }),

/***/ "./resources/js/components/Navigation.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Navigation.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=d456e682& */ "./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Navigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Navigation.vue?vue&type=template&id=d456e682& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=d456e682& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation.vue?vue&type=template&id=d456e682&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_d456e682___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/user.js":
/*!******************************!*\
  !*** ./resources/js/user.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: null
});

/***/ })

}]);