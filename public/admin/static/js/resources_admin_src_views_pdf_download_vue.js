"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_pdf_download_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/pdf/download.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/pdf/download.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      article: '',
      fullscreenLoading: true
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      __webpack_require__.e(/*! import() */ "resources_admin_src_views_pdf_content_js").then(__webpack_require__.bind(__webpack_require__, /*! ./content.js */ "./resources/admin/src/views/pdf/content.js")).then(function (data) {
        var title = data["default"].title;
        document.title = title;
        _this.article = data["default"];
        setTimeout(function () {
          _this.fullscreenLoading = false;

          _this.$nextTick(function () {
            window.print();
          });
        }, 3000);
      });
    }
  }
});

/***/ }),

/***/ "./resources/admin/src/views/pdf/download.vue":
/*!****************************************************!*\
  !*** ./resources/admin/src/views/pdf/download.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _download_vue_vue_type_template_id_386495ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.vue?vue&type=template&id=386495ee& */ "./resources/admin/src/views/pdf/download.vue?vue&type=template&id=386495ee&");
/* harmony import */ var _download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/pdf/download.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './download.vue?vue&type=style&index=0&lang=scss&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _download_vue_vue_type_template_id_386495ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _download_vue_vue_type_template_id_386495ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/pdf/download.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/pdf/download.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/admin/src/views/pdf/download.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./download.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/pdf/download.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/pdf/download.vue?vue&type=template&id=386495ee&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/src/views/pdf/download.vue?vue&type=template&id=386495ee& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_template_id_386495ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_template_id_386495ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_download_vue_vue_type_template_id_386495ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./download.vue?vue&type=template&id=386495ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/pdf/download.vue?vue&type=template&id=386495ee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/pdf/download.vue?vue&type=template&id=386495ee&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/pdf/download.vue?vue&type=template&id=386495ee& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading.fullscreen.lock",
          value: _vm.fullscreenLoading,
          expression: "fullscreenLoading",
          modifiers: { fullscreen: true, lock: true },
        },
      ],
      staticClass: "main-article",
      attrs: { "element-loading-text": "Efforts to generate PDF" },
    },
    [
      _c("div", { staticClass: "article__heading" }, [
        _c("div", { staticClass: "article__heading__title" }, [
          _vm._v("\n      " + _vm._s(_vm.article.title) + "\n    "),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", {
        ref: "content",
        staticClass: "node-article-content",
        domProps: { innerHTML: _vm._s(_vm.article.content) },
      }),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { color: "#ccc" } }, [
      _vm._v("\n    This article is from Evan You on "),
      _c(
        "a",
        {
          attrs: {
            target: "_blank",
            href: "https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf",
          },
        },
        [_vm._v("medium")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);