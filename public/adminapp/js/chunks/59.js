(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ProductCategoriesSingle', ['entry', 'loading'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ProductCategoriesSingle', ['fetchEditData', 'updateData', 'resetState', 'setName', 'setDescription', 'insertPhotoFile', 'removePhotoFile'])), {}, {
    updateName: function updateName(e) {
      this.setName(e.target.value);
    },
    updateDescription: function updateDescription(e) {
      this.setDescription(e.target.value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.updateData().then(function () {
        _this.$router.push({
          name: 'product_categories.index'
        });

        _this.$eventHub.$emit('update-success');
      })["catch"](function (error) {
        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=template&id=2a714e69&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=template&id=2a714e69& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card-header card-header-primary card-header-icon"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.$t("global.edit")) +
                        "\n              "
                    ),
                    _c("strong", [
                      _vm._v(
                        _vm._s(_vm.$t("cruds.productCategory.title_singular"))
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [_c("back-button")], 1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("bootstrap-alert"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.name,
                            "is-focused": _vm.activeField == "name"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("cruds.productCategory.fields.name")
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.entry.name },
                            on: {
                              input: _vm.updateName,
                              focus: function($event) {
                                return _vm.focusField("name")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "form-group bmd-form-group",
                          class: {
                            "has-items": _vm.entry.description,
                            "is-focused": _vm.activeField == "description"
                          }
                        },
                        [
                          _c(
                            "label",
                            { staticClass: "bmd-label-floating required" },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "cruds.productCategory.fields.description"
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            staticClass: "form-control",
                            attrs: { rows: "5", required: "" },
                            domProps: { value: _vm.entry.description },
                            on: {
                              input: _vm.updateDescription,
                              focus: function($event) {
                                return _vm.focusField("description")
                              },
                              blur: _vm.clearFocus
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", [
                            _vm._v(
                              _vm._s(
                                _vm.$t("cruds.productCategory.fields.photo")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("attachment", {
                            attrs: {
                              route: _vm.getRoute("product-categories"),
                              "collection-name": "product_category_photo",
                              media: _vm.entry.photo,
                              "model-id": _vm.$route.params.id,
                              "max-file-size": 2,
                              component: "pictures",
                              accept: "image/*",
                              "max-files": 1
                            },
                            on: {
                              "file-uploaded": _vm.insertPhotoFile,
                              "file-removed": _vm.removePhotoFile
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _c(
                    "vue-button-spinner",
                    {
                      staticClass: "btn-primary",
                      attrs: {
                        status: _vm.status,
                        isLoading: _vm.loading,
                        disabled: _vm.loading
                      }
                    },
                    [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.$t("global.save")) +
                          "\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-icon" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("edit")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/ProductCategories/Edit.vue":
/*!****************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ProductCategories/Edit.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2a714e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2a714e69& */ "./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=template&id=2a714e69&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2a714e69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2a714e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/ProductCategories/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=template&id=2a714e69&":
/*!***********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=template&id=2a714e69& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2a714e69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2a714e69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ProductCategories/Edit.vue?vue&type=template&id=2a714e69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2a714e69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2a714e69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);