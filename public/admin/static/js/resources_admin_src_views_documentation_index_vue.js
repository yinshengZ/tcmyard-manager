"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_documentation_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    title: {
      type: String,
      "default": 'vue'
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  methods: {
    clickTitle: function clickTitle() {
      this.isActive = !this.isActive;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/documentation/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/documentation/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Share_DropdownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Share/DropdownMenu */ "./resources/admin/src/components/Share/DropdownMenu.vue");
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
  name: 'Documentation',
  components: {
    DropdownMenu: _components_Share_DropdownMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      articleList: [{
        title: '基础篇',
        href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2'
      }, {
        title: '登录权限篇',
        href: 'https://juejin.im/post/591aa14f570c35006961acac'
      }, {
        title: '实战篇',
        href: 'https://juejin.im/post/593121aa0ce4630057f70d35'
      }, {
        title: 'vue-admin-template 篇',
        href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56'
      }, {
        title: 'v4.0 篇',
        href: 'https://juejin.im/post/5c92ff94f265da6128275a85'
      }, {
        title: '自行封装 component',
        href: 'https://segmentfault.com/a/1190000009090836'
      }, {
        title: '优雅的使用 icon',
        href: 'https://juejin.im/post/59bb864b5188257e7a427c09'
      }, {
        title: 'webpack4（上）',
        href: 'https://juejin.im/post/59bb864b5188257e7a427c09'
      }, {
        title: 'webpack4（下）',
        href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc'
      }]
    };
  }
});

/***/ }),

/***/ "./resources/admin/src/components/Share/DropdownMenu.vue":
/*!***************************************************************!*\
  !*** ./resources/admin/src/components/Share/DropdownMenu.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownMenu_vue_vue_type_template_id_871bd034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownMenu.vue?vue&type=template&id=871bd034& */ "./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=template&id=871bd034&");
/* harmony import */ var _DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownMenu.vue?vue&type=script&lang=js& */ "./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './DropdownMenu.vue?vue&type=style&index=0&lang=scss&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownMenu_vue_vue_type_template_id_871bd034___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropdownMenu_vue_vue_type_template_id_871bd034___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/components/Share/DropdownMenu.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/documentation/index.vue":
/*!***********************************************************!*\
  !*** ./resources/admin/src/views/documentation/index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3614f82e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3614f82e&scoped=true& */ "./resources/admin/src/views/documentation/index.vue?vue&type=template&id=3614f82e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/documentation/index.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.vue?vue&type=style&index=0&id=3614f82e&lang=scss&scoped=true&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3614f82e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3614f82e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3614f82e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/documentation/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/documentation/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/admin/src/views/documentation/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/documentation/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=template&id=871bd034&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=template&id=871bd034& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_template_id_871bd034___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_template_id_871bd034___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownMenu_vue_vue_type_template_id_871bd034___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownMenu.vue?vue&type=template&id=871bd034& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=template&id=871bd034&");


/***/ }),

/***/ "./resources/admin/src/views/documentation/index.vue?vue&type=template&id=3614f82e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/admin/src/views/documentation/index.vue?vue&type=template&id=3614f82e&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3614f82e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3614f82e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3614f82e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3614f82e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/documentation/index.vue?vue&type=template&id=3614f82e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=template&id=871bd034&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Share/DropdownMenu.vue?vue&type=template&id=871bd034& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "share-dropdown-menu", class: { active: _vm.isActive } },
    [
      _c(
        "div",
        { staticClass: "share-dropdown-menu-wrapper" },
        [
          _c(
            "span",
            {
              staticClass: "share-dropdown-menu-title",
              on: {
                click: function ($event) {
                  if ($event.target !== $event.currentTarget) {
                    return null
                  }
                  return _vm.clickTitle.apply(null, arguments)
                },
              },
            },
            [_vm._v(_vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _vm._l(_vm.items, function (item, index) {
            return _c(
              "div",
              { key: index, staticClass: "share-dropdown-menu-item" },
              [
                item.href
                  ? _c("a", { attrs: { href: item.href, target: "_blank" } }, [
                      _vm._v(_vm._s(item.title)),
                    ])
                  : _c("span", [_vm._v(_vm._s(item.title))]),
              ]
            )
          }),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/documentation/index.vue?vue&type=template&id=3614f82e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/documentation/index.vue?vue&type=template&id=3614f82e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app-container documentation-container" },
    [
      _c(
        "a",
        {
          staticClass: "document-btn",
          attrs: {
            target: "_blank",
            href: "https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=demo_English_button",
          },
        },
        [_vm._v("Java backend integration")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "document-btn",
          attrs: {
            target: "_blank",
            href: "https://panjiachen.github.io/vue-element-admin-site/",
          },
        },
        [_vm._v("Documentation")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "document-btn",
          attrs: {
            target: "_blank",
            href: "https://github.com/PanJiaChen/vue-element-admin/",
          },
        },
        [_vm._v("Github Repository")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "document-btn",
          attrs: {
            target: "_blank",
            href: "https://panjiachen.gitee.io/vue-element-admin-site/zh/",
          },
        },
        [_vm._v("国内文档")]
      ),
      _vm._v(" "),
      _c("dropdown-menu", {
        staticClass: "document-btn",
        attrs: { items: _vm.articleList, title: "系列文章" },
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "document-btn",
          attrs: {
            target: "_blank",
            href: "https://panjiachen.github.io/vue-element-admin-site/zh/job/",
          },
        },
        [_vm._v("内推招聘")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);