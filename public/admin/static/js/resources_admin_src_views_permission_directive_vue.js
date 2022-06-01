"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_permission_directive_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    roles: function roles() {
      return this.$store.getters.roles;
    },
    switchRoles: {
      get: function get() {
        return this.roles[0];
      },
      set: function set(val) {
        var _this = this;

        this.$store.dispatch('user/changeRoles', val).then(function () {
          _this.$emit('change');
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/directive.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/directive.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/directive/permission/index.js */ "./resources/admin/src/directive/permission/index.js");
/* harmony import */ var _utils_permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/permission */ "./resources/admin/src/utils/permission.js");
/* harmony import */ var _components_SwitchRoles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SwitchRoles */ "./resources/admin/src/views/permission/components/SwitchRoles.vue");
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
 // 权限判断指令

 // 权限判断函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DirectivePermission',
  components: {
    SwitchRoles: _components_SwitchRoles__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  directives: {
    permission: _directive_permission_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令

    };
  },
  methods: {
    checkPermission: _utils_permission__WEBPACK_IMPORTED_MODULE_1__["default"],
    handleRolesChange: function handleRolesChange() {
      this.key++;
    }
  }
});

/***/ }),

/***/ "./resources/admin/src/directive/permission/index.js":
/*!***********************************************************!*\
  !*** ./resources/admin/src/directive/permission/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permission */ "./resources/admin/src/directive/permission/permission.js");


var install = function install(Vue) {
  Vue.directive('permission', _permission__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

if (window.Vue) {
  window['permission'] = _permission__WEBPACK_IMPORTED_MODULE_0__["default"];
  Vue.use(install); // eslint-disable-line
}

_permission__WEBPACK_IMPORTED_MODULE_0__["default"].install = install;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_permission__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/admin/src/directive/permission/permission.js":
/*!****************************************************************!*\
  !*** ./resources/admin/src/directive/permission/permission.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/admin/src/store/index.js");


function checkPermission(el, binding) {
  var value = binding.value;
  var roles = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.roles;

  if (value && value instanceof Array) {
    if (value.length > 0) {
      var permissionRoles = value;
      var hasPermission = roles.some(function (role) {
        return permissionRoles.includes(role);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error("need roles! Like v-permission=\"['admin','editor']\"");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inserted: function inserted(el, binding) {
    checkPermission(el, binding);
  },
  update: function update(el, binding) {
    checkPermission(el, binding);
  }
});

/***/ }),

/***/ "./resources/admin/src/utils/permission.js":
/*!*************************************************!*\
  !*** ./resources/admin/src/utils/permission.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkPermission)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/admin/src/store/index.js");

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */

function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    var roles = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters && _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters.roles;
    var permissionRoles = value;
    var hasPermission = roles.some(function (role) {
      return permissionRoles.includes(role);
    });
    return hasPermission;
  } else {
    console.error("need roles! Like v-permission=\"['admin','editor']\"");
    return false;
  }
}

/***/ }),

/***/ "./resources/admin/src/views/permission/components/SwitchRoles.vue":
/*!*************************************************************************!*\
  !*** ./resources/admin/src/views/permission/components/SwitchRoles.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchRoles_vue_vue_type_template_id_d3c75688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchRoles.vue?vue&type=template&id=d3c75688& */ "./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=template&id=d3c75688&");
/* harmony import */ var _SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchRoles.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwitchRoles_vue_vue_type_template_id_d3c75688___WEBPACK_IMPORTED_MODULE_0__.render,
  _SwitchRoles_vue_vue_type_template_id_d3c75688___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/permission/components/SwitchRoles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/permission/directive.vue":
/*!************************************************************!*\
  !*** ./resources/admin/src/views/permission/directive.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _directive_vue_vue_type_template_id_3aa831da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.vue?vue&type=template&id=3aa831da&scoped=true& */ "./resources/admin/src/views/permission/directive.vue?vue&type=template&id=3aa831da&scoped=true&");
/* harmony import */ var _directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/permission/directive.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './directive.vue?vue&type=style&index=0&id=3aa831da&lang=scss&scoped=true&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _directive_vue_vue_type_template_id_3aa831da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _directive_vue_vue_type_template_id_3aa831da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3aa831da",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/permission/directive.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchRoles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/permission/directive.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/admin/src/views/permission/directive.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./directive.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/directive.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=template&id=d3c75688&":
/*!********************************************************************************************************!*\
  !*** ./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=template&id=d3c75688& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_d3c75688___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_d3c75688___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchRoles_vue_vue_type_template_id_d3c75688___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchRoles.vue?vue&type=template&id=d3c75688& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=template&id=d3c75688&");


/***/ }),

/***/ "./resources/admin/src/views/permission/directive.vue?vue&type=template&id=3aa831da&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/admin/src/views/permission/directive.vue?vue&type=template&id=3aa831da&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_template_id_3aa831da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_template_id_3aa831da_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directive_vue_vue_type_template_id_3aa831da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./directive.vue?vue&type=template&id=3aa831da&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/directive.vue?vue&type=template&id=3aa831da&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=template&id=d3c75688&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/components/SwitchRoles.vue?vue&type=template&id=d3c75688& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticStyle: { "margin-bottom": "15px" } }, [
        _vm._v("\n    Your roles: " + _vm._s(_vm.roles) + "\n  "),
      ]),
      _vm._v("\n  Switch roles:\n  "),
      _c(
        "el-radio-group",
        {
          model: {
            value: _vm.switchRoles,
            callback: function ($$v) {
              _vm.switchRoles = $$v
            },
            expression: "switchRoles",
          },
        },
        [
          _c("el-radio-button", { attrs: { label: "editor" } }),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "admin" } }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/directive.vue?vue&type=template&id=3aa831da&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/permission/directive.vue?vue&type=template&id=3aa831da&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "app-container" },
    [
      _c("switch-roles", { on: { change: _vm.handleRolesChange } }),
      _vm._v(" "),
      _c("div", { key: _vm.key, staticStyle: { "margin-top": "30px" } }, [
        _c(
          "div",
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']",
                  },
                ],
                staticClass: "permission-alert",
              },
              [
                _vm._v("\n        Only\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("admin")]
                ),
                _vm._v(" can see this\n      "),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tag",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin"],
                    expression: "['admin']",
                  },
                ],
                staticClass: "permission-sourceCode",
                attrs: { type: "info" },
              },
              [_vm._v("\n        v-permission=\"['admin']\"\n      ")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["editor"],
                    expression: "['editor']",
                  },
                ],
                staticClass: "permission-alert",
              },
              [
                _vm._v("\n        Only\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("editor")]
                ),
                _vm._v(" can see this\n      "),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tag",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["editor"],
                    expression: "['editor']",
                  },
                ],
                staticClass: "permission-sourceCode",
                attrs: { type: "info" },
              },
              [_vm._v("\n        v-permission=\"['editor']\"\n      ")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "span",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin", "editor"],
                    expression: "['admin','editor']",
                  },
                ],
                staticClass: "permission-alert",
              },
              [
                _vm._v("\n        Both\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("admin")]
                ),
                _vm._v(" and\n        "),
                _c(
                  "el-tag",
                  { staticClass: "permission-tag", attrs: { size: "small" } },
                  [_vm._v("editor")]
                ),
                _vm._v(" can see this\n      "),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-tag",
              {
                directives: [
                  {
                    name: "permission",
                    rawName: "v-permission",
                    value: ["admin", "editor"],
                    expression: "['admin','editor']",
                  },
                ],
                staticClass: "permission-sourceCode",
                attrs: { type: "info" },
              },
              [_vm._v("\n        v-permission=\"['admin','editor']\"\n      ")]
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          key: "checkPermission" + _vm.key,
          staticStyle: { "margin-top": "60px" },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "el-tabs",
            { staticStyle: { width: "550px" }, attrs: { type: "border-card" } },
            [
              _vm.checkPermission(["admin"])
                ? _c(
                    "el-tab-pane",
                    { attrs: { label: "Admin" } },
                    [
                      _vm._v("\n        Admin can see this\n        "),
                      _c(
                        "el-tag",
                        {
                          staticClass: "permission-sourceCode",
                          attrs: { type: "info" },
                        },
                        [
                          _vm._v(
                            "\n          v-if=\"checkPermission(['admin'])\"\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.checkPermission(["editor"])
                ? _c(
                    "el-tab-pane",
                    { attrs: { label: "Editor" } },
                    [
                      _vm._v("\n        Editor can see this\n        "),
                      _c(
                        "el-tag",
                        {
                          staticClass: "permission-sourceCode",
                          attrs: { type: "info" },
                        },
                        [
                          _vm._v(
                            "\n          v-if=\"checkPermission(['editor'])\"\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.checkPermission(["admin", "editor"])
                ? _c(
                    "el-tab-pane",
                    { attrs: { label: "Admin-OR-Editor" } },
                    [
                      _vm._v(
                        "\n        Both admin or editor can see this\n        "
                      ),
                      _c(
                        "el-tag",
                        {
                          staticClass: "permission-sourceCode",
                          attrs: { type: "info" },
                        },
                        [
                          _vm._v(
                            "\n          v-if=\"checkPermission(['admin','editor'])\"\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("aside", [
      _vm._v(
        "\n      In some cases, using v-permission will have no effect. For example: Element-UI's Tab component or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.\n      "
      ),
      _c("br"),
      _vm._v(" e.g.\n    "),
    ])
  },
]
render._withStripped = true



/***/ })

}]);