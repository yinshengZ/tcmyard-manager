"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_inventory_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-category.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/category */ "./resources/admin/src/api/category.js");
//
//
//
//
//
//
//
//
//
//
//
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
      category_details: {
        categories: ''
      }
    };
  },
  methods: {
    add_new_category: function add_new_category() {
      var _this = this;

      this.data = this.category_details;
      (0,_api_category__WEBPACK_IMPORTED_MODULE_0__.add_category)(this.data).then(function (response) {
        _this.$notify({
          title: 'Notification',
          message: response,
          type: 'success'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/inventory */ "./resources/admin/src/api/inventory.js");
/* harmony import */ var _api_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/category */ "./resources/admin/src/api/category.js");
/* harmony import */ var _add_category_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.vue */ "./resources/admin/src/views/inventory/components/add-category.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    AddCategory: _add_category_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      inventory_details: {
        name: '',
        eng_name: '',
        stock: 0,
        categories_id: '',
        description: ''
      },
      categories_rtv: '',
      add_new_category_form_visible: false
    };
  },
  mounted: function mounted() {
    this.get_categories();
  },
  methods: {
    add_new_item: function add_new_item() {
      var _this = this;

      this.data = this.inventory_details;
      (0,_api_inventory__WEBPACK_IMPORTED_MODULE_0__.add_item)(this.data).then(function (response) {
        _this.$notify({
          title: 'Notification',
          message: response,
          type: 'success'
        });
      });
    },
    get_categories: function get_categories() {
      var _this2 = this;

      (0,_api_category__WEBPACK_IMPORTED_MODULE_1__.getAll)().then(function (response) {
        _this2.categories_rtv = response;
      });
      this.add_new_category_form_visible = false;
    },
    add_new_category_form: function add_new_category_form() {
      this.add_new_category_form_visible = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/inventory */ "./resources/admin/src/api/inventory.js");
/* harmony import */ var _add_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item */ "./resources/admin/src/views/inventory/components/add-item.vue");
/* harmony import */ var _update_inventory_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-inventory-form */ "./resources/admin/src/views/inventory/components/update-inventory-form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  filters: {
    capitalize: function capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  components: {
    AddItem: _add_item__WEBPACK_IMPORTED_MODULE_1__["default"],
    UpdateInventory: _update_inventory_form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      inventory_list: [],
      search: '',
      add_inventory_form_visible: false,
      update_inventory_form_visible: false,
      inventory_id: '',
      key: ''
    };
  },
  created: function created() {
    this.get_inventories();
  },
  methods: {
    get_inventories: function get_inventories() {
      var _this = this;

      (0,_api_inventory__WEBPACK_IMPORTED_MODULE_0__.get_all)().then(function (response) {
        _this.inventory_list = response;
      });
      this.add_inventory_form_visible = false;
      this.update_inventory_form_visible = false;
    },
    load_add_inventory_form: function load_add_inventory_form() {
      this.add_inventory_form_visible = true;
      this.key += 1;
    },
    load_update_inventory_form: function load_update_inventory_form(id) {
      this.inventory_id = id;
      this.update_inventory_form_visible = true;
      this.key += 1;
    },
    convert_date: function convert_date(date) {
      var date = new Date(date).toLocaleDateString("en-gb");
      return date;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_inventory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/inventory */ "./resources/admin/src/api/inventory.js");
/* harmony import */ var _api_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/category */ "./resources/admin/src/api/category.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['inventory_id'],
  data: function data() {
    return {
      inventory_details: [],
      categories_rtv: ''
    };
  },
  mounted: function mounted() {
    this.get_categories();
    this.get_inventory_details();
  },
  methods: {
    get_inventory_details: function get_inventory_details() {
      var _this = this;

      (0,_api_inventory__WEBPACK_IMPORTED_MODULE_0__.get_single)(this.inventory_id).then(function (response) {
        console.log(_this.inventory_id);
        console.log(response);
        _this.inventory_details = response;
      });
    },
    update_inventory_details: function update_inventory_details() {
      var _this2 = this;

      (0,_api_inventory__WEBPACK_IMPORTED_MODULE_0__.update_inventory)(this.inventory_details, this.inventory_id).then(function (response) {
        _this2.$notify({
          title: 'Notification',
          message: response,
          type: 'success'
        });
      });
    },
    get_categories: function get_categories() {
      var _this3 = this;

      (0,_api_category__WEBPACK_IMPORTED_MODULE_1__.getAll)().then(function (response) {
        _this3.categories_rtv = response;
        console.log(_this3.categories_rtv);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_inventory_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inventory-list */ "./resources/admin/src/views/inventory/components/inventory-list.vue");
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
  components: {
    InventoryList: _components_inventory_list__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./resources/admin/src/api/category.js":
/*!*********************************************!*\
  !*** ./resources/admin/src/api/category.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_category": () => (/* binding */ add_category),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "getSingle": () => (/* binding */ getSingle),
/* harmony export */   "updateCategory": () => (/* binding */ updateCategory)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/admin/src/utils/request.js");

function getAll() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/category',
    method: 'get'
  });
}
function getSingle(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/category/' + data,
    method: 'get'
  });
}
function add_category(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/category',
    method: 'post',
    data: data
  });
}
function updateCategory(data, id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/category/' + id,
    method: 'put',
    data: data
  });
}

/***/ }),

/***/ "./resources/admin/src/api/inventory.js":
/*!**********************************************!*\
  !*** ./resources/admin/src/api/inventory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add_item": () => (/* binding */ add_item),
/* harmony export */   "getHerbs": () => (/* binding */ getHerbs),
/* harmony export */   "getInventoryByCategory": () => (/* binding */ getInventoryByCategory),
/* harmony export */   "getProducts": () => (/* binding */ getProducts),
/* harmony export */   "get_all": () => (/* binding */ get_all),
/* harmony export */   "get_single": () => (/* binding */ get_single),
/* harmony export */   "update_inventory": () => (/* binding */ update_inventory)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/admin/src/utils/request.js");

function add_item(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/inventory',
    method: 'post',
    data: data
  });
}
function get_all() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/inventory',
    method: 'get'
  });
}
function get_single(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/inventory/' + data,
    method: 'get'
  });
}
function getHerbs() {}
function getProducts() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/inventory/retail',
    method: 'get'
  });
}
function update_inventory(data, id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/inventory/' + id,
    method: 'put',
    data: data
  });
}
function getInventoryByCategory(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/inventory/category/' + data,
    method: 'get'
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.inline-button[data-v-395c9fde]{\n    padding-left: 10px;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.inventory-table[data-v-3d31c20b]{\r\n    margin-top:10px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_style_index_0_id_395c9fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_style_index_0_id_395c9fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_style_index_0_id_395c9fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d31c20b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d31c20b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d31c20b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-category.vue":
/*!*************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-category.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_category_vue_vue_type_template_id_bc4cbd08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-category.vue?vue&type=template&id=bc4cbd08&scoped=true& */ "./resources/admin/src/views/inventory/components/add-category.vue?vue&type=template&id=bc4cbd08&scoped=true&");
/* harmony import */ var _add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-category.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/inventory/components/add-category.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_category_vue_vue_type_template_id_bc4cbd08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_category_vue_vue_type_template_id_bc4cbd08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bc4cbd08",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/inventory/components/add-category.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-item.vue":
/*!*********************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-item.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_item_vue_vue_type_template_id_395c9fde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item.vue?vue&type=template&id=395c9fde&scoped=true& */ "./resources/admin/src/views/inventory/components/add-item.vue?vue&type=template&id=395c9fde&scoped=true&");
/* harmony import */ var _add_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-item.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/inventory/components/add-item.vue?vue&type=script&lang=js&");
/* harmony import */ var _add_item_vue_vue_type_style_index_0_id_395c9fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css& */ "./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_item_vue_vue_type_template_id_395c9fde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_item_vue_vue_type_template_id_395c9fde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "395c9fde",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/inventory/components/add-item.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/inventory-list.vue":
/*!***************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/inventory-list.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inventory_list_vue_vue_type_template_id_43a6d37e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true& */ "./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true&");
/* harmony import */ var _inventory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-list.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _inventory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inventory_list_vue_vue_type_template_id_43a6d37e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _inventory_list_vue_vue_type_template_id_43a6d37e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "43a6d37e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/inventory/components/inventory-list.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/update-inventory-form.vue":
/*!**********************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/update-inventory-form.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _update_inventory_form_vue_vue_type_template_id_79e65037_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true& */ "./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true&");
/* harmony import */ var _update_inventory_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-inventory-form.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _update_inventory_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _update_inventory_form_vue_vue_type_template_id_79e65037_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _update_inventory_form_vue_vue_type_template_id_79e65037_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "79e65037",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/inventory/components/update-inventory-form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/inventory/index.vue":
/*!*******************************************************!*\
  !*** ./resources/admin/src/views/inventory/index.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3d31c20b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3d31c20b&scoped=true& */ "./resources/admin/src/views/inventory/index.vue?vue&type=template&id=3d31c20b&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/inventory/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_3d31c20b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css& */ "./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3d31c20b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3d31c20b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d31c20b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/inventory/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-category.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-item.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-item.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inventory-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_inventory_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update-inventory-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_update_inventory_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/inventory/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_style_index_0_id_395c9fde_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=style&index=0&id=395c9fde&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3d31c20b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=style&index=0&id=3d31c20b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-category.vue?vue&type=template&id=bc4cbd08&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-category.vue?vue&type=template&id=bc4cbd08&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_category_vue_vue_type_template_id_bc4cbd08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_category_vue_vue_type_template_id_bc4cbd08_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_category_vue_vue_type_template_id_bc4cbd08_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-category.vue?vue&type=template&id=bc4cbd08&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-category.vue?vue&type=template&id=bc4cbd08&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/inventory/components/add-item.vue?vue&type=template&id=395c9fde&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/add-item.vue?vue&type=template&id=395c9fde&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_template_id_395c9fde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_template_id_395c9fde_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_item_vue_vue_type_template_id_395c9fde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-item.vue?vue&type=template&id=395c9fde&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=template&id=395c9fde&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_list_vue_vue_type_template_id_43a6d37e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_list_vue_vue_type_template_id_43a6d37e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_list_vue_vue_type_template_id_43a6d37e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_inventory_form_vue_vue_type_template_id_79e65037_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_inventory_form_vue_vue_type_template_id_79e65037_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_update_inventory_form_vue_vue_type_template_id_79e65037_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/inventory/index.vue?vue&type=template&id=3d31c20b&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/admin/src/views/inventory/index.vue?vue&type=template&id=3d31c20b&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d31c20b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d31c20b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d31c20b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3d31c20b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=template&id=3d31c20b&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-category.vue?vue&type=template&id=bc4cbd08&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-category.vue?vue&type=template&id=bc4cbd08&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "add_category_form" },
      [
        _c(
          "el-form",
          {
            ref: "add_category_form",
            attrs: { model: _vm.category_details, "label-width": "120px" },
          },
          [
            _c(
              "el-form-item",
              { attrs: { label: "Category" } },
              [
                _c("el-input", {
                  model: {
                    value: _vm.category_details.categories,
                    callback: function ($$v) {
                      _vm.$set(_vm.category_details, "categories", $$v)
                    },
                    expression: "category_details.categories",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: { click: _vm.add_new_category },
                  },
                  [_vm._v("\n                      Submit\n                  ")]
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=template&id=395c9fde&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/add-item.vue?vue&type=template&id=395c9fde&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
      _c("el-card", [
        _c(
          "div",
          { staticClass: "add-item-form" },
          [
            _c(
              "el-form",
              {
                ref: "add-item-form",
                attrs: { model: _vm.inventory_details, "label-width": "120px" },
              },
              [
                _c(
                  "el-form-item",
                  { attrs: { label: "Chinese Name" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.inventory_details.name,
                        callback: function ($$v) {
                          _vm.$set(_vm.inventory_details, "name", $$v)
                        },
                        expression: "inventory_details.name",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "English Name" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.inventory_details.eng_name,
                        callback: function ($$v) {
                          _vm.$set(_vm.inventory_details, "eng_name", $$v)
                        },
                        expression: "inventory_details.eng_name",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Unit Price" } },
                  [
                    _c("el-input-number", {
                      attrs: { precison: 2, step: 0.1, max: 999999 },
                      model: {
                        value: _vm.inventory_details.unit_price,
                        callback: function ($$v) {
                          _vm.$set(_vm.inventory_details, "unit_price", $$v)
                        },
                        expression: "inventory_details.unit_price",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Stock" } },
                  [
                    _c("el-input", {
                      model: {
                        value: _vm.inventory_details.stock,
                        callback: function ($$v) {
                          _vm.$set(_vm.inventory_details, "stock", $$v)
                        },
                        expression: "inventory_details.stock",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Category" } },
                  [
                    _c(
                      "el-select",
                      {
                        attrs: { placeholder: "select..." },
                        model: {
                          value: _vm.inventory_details.categories_id,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.inventory_details,
                              "categories_id",
                              $$v
                            )
                          },
                          expression: "inventory_details.categories_id",
                        },
                      },
                      _vm._l(_vm.categories_rtv, function (categories) {
                        return _c("el-option", {
                          key: categories.id,
                          attrs: {
                            label: categories.categories,
                            value: categories.id,
                          },
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "inline-button" },
                      [
                        _c("el-button", {
                          attrs: {
                            type: "primary",
                            icon: "el-icon-circle-plus",
                          },
                          on: { click: _vm.add_new_category_form },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Expiry Date" } },
                  [
                    _c("el-date-picker", {
                      attrs: {
                        type: "date",
                        format: "yyyy/MM/dd",
                        "value-format": "yyyy/MM/dd",
                        placeholder: "Pick a date",
                      },
                      model: {
                        value: _vm.inventory_details.expiry_date,
                        callback: function ($$v) {
                          _vm.$set(_vm.inventory_details, "expiry_date", $$v)
                        },
                        expression: "inventory_details.expiry_date",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  { attrs: { label: "Description" } },
                  [
                    _c("el-input", {
                      attrs: { type: "textarea" },
                      model: {
                        value: _vm.inventory_details.description,
                        callback: function ($$v) {
                          _vm.$set(_vm.inventory_details, "description", $$v)
                        },
                        expression: "inventory_details.description",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: { click: _vm.add_new_item },
                      },
                      [
                        _vm._v(
                          "\n                        Create\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      { attrs: { type: "info" }, on: { click: _vm.reset } },
                      [
                        _vm._v(
                          "\n                        Reset\n                    "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-dialog",
              {
                attrs: {
                  title: "Add New Category:",
                  visible: _vm.add_new_category_form_visible,
                  "before-close": _vm.get_categories,
                },
                on: {
                  "update:visible": function ($event) {
                    _vm.add_new_category_form_visible = $event
                  },
                },
              },
              [_c("add-category")],
              1
            ),
          ],
          1
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/inventory-list.vue?vue&type=template&id=43a6d37e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "el-card",
        [
          _c(
            "div",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.load_add_inventory_form },
                },
                [_vm._v("\n              New\n            ")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: {
                data: _vm.inventory_list.filter(function (data) {
                  return (
                    !_vm.search ||
                    data.name
                      .toLowerCase()
                      .includes(_vm.search.toLowerCase()) ||
                    data.eng_name
                      .toLowerCase()
                      .includes(_vm.search.toLowerCase())
                  )
                }),
              },
            },
            [
              _c("el-table-column", {
                attrs: { label: "ID", width: "50" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [_c("span", [_vm._v(_vm._s(row.id))])]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Name", width: "100" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [_c("span", [_vm._v(_vm._s(row.name))])]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "English Name", width: "130" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c("span", [
                          _vm._v(_vm._s(_vm._f("capitalize")(row.eng_name))),
                        ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Stock", width: "100" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [_c("span", [_vm._v(_vm._s(row.stock))])]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Category", width: "100" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c("span", [
                          _vm._v(
                            "\n        " +
                              _vm._s(
                                _vm._f("capitalize")(row.category.categories)
                              ) +
                              "\n      "
                          ),
                        ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Unit Price", width: "100", align: "center" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c("span", [
                          _vm._v(
                            "\n          " +
                              _vm._s(row.unit_price) +
                              "\n        "
                          ),
                        ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Expiry Date", width: "140" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        row.expiry_date == null
                          ? _c("span", [_vm._v("No Date Set")])
                          : _c("span", [
                              _vm._v(_vm._s(_vm.convert_date(row.expiry_date))),
                            ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Last Updated", width: "140" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c("span", [
                          _vm._v(_vm._s(_vm.convert_date(row.updated_at))),
                        ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Operations", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "primary" },
                            on: {
                              click: function ($event) {
                                return _vm.load_update_inventory_form(row.id)
                              },
                            },
                          },
                          [_vm._v(" Update ")]
                        ),
                        _vm._v(" "),
                        _c("el-button", { attrs: { type: "danger" } }, [
                          _vm._v(" Delete "),
                        ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c(
                "el-table-column",
                {
                  attrs: {
                    type: "expand",
                    align: "right",
                    label: "Description",
                    width: "180",
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function (ref) {
                        var row = ref.row
                        return [
                          _c("p", [_c("b", [_vm._v("Description:")])]),
                          _vm._v(" "),
                          _c("span", [_vm._v(_vm._s(row.description))]),
                        ]
                      },
                    },
                  ]),
                },
                [
                  _c(
                    "template",
                    { slot: "header" },
                    [
                      _c("el-input", {
                        attrs: {
                          size: "mini",
                          placeholder: "Type to search..",
                        },
                        model: {
                          value: _vm.search,
                          callback: function ($$v) {
                            _vm.search = $$v
                          },
                          expression: "search",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                2
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Add New Inventory",
            visible: _vm.add_inventory_form_visible,
            "before-close": _vm.get_inventories,
          },
          on: {
            "update:visible": function ($event) {
              _vm.add_inventory_form_visible = $event
            },
          },
        },
        [_c("add-item", { key: _vm.key })],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Update Inventory Details",
            visible: _vm.update_inventory_form_visible,
            "beofre-close": _vm.get_inventories,
          },
          on: {
            "update:visible": function ($event) {
              _vm.update_inventory_form_visible = $event
            },
          },
        },
        [
          _c("update-inventory", {
            key: _vm.key,
            attrs: { inventory_id: _vm.inventory_id },
          }),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/components/update-inventory-form.vue?vue&type=template&id=79e65037&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "el-form",
        {
          ref: "update_inventory_form",
          attrs: {
            model: _vm.inventory_details,
            "label-position": "left",
            "label-width": "120px",
          },
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "ID" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.inventory_details.id,
                  callback: function ($$v) {
                    _vm.$set(_vm.inventory_details, "id", $$v)
                  },
                  expression: "inventory_details.id",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Name" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.inventory_details.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.inventory_details, "name", $$v)
                  },
                  expression: "inventory_details.name",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "English Name" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.inventory_details.eng_name,
                  callback: function ($$v) {
                    _vm.$set(_vm.inventory_details, "eng_name", $$v)
                  },
                  expression: "inventory_details.eng_name",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Category" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "select..." },
                  model: {
                    value: _vm.inventory_details.categories_id,
                    callback: function ($$v) {
                      _vm.$set(_vm.inventory_details, "categories_id", $$v)
                    },
                    expression: "inventory_details.categories_id",
                  },
                },
                _vm._l(_vm.categories_rtv, function (categories) {
                  return _c("el-option", {
                    key: categories.id,
                    attrs: {
                      label: categories.categories,
                      value: categories.id,
                    },
                  })
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Unit Price" } },
            [
              _c("el-input-number", {
                attrs: { precison: 2, step: 0.1, max: 999999 },
                model: {
                  value: _vm.inventory_details.unit_price,
                  callback: function ($$v) {
                    _vm.$set(_vm.inventory_details, "unit_price", $$v)
                  },
                  expression: "inventory_details.unit_price",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Stock" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.inventory_details.stock,
                  callback: function ($$v) {
                    _vm.$set(_vm.inventory_details, "stock", $$v)
                  },
                  expression: "inventory_details.stock",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Description" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.inventory_details.description,
                  callback: function ($$v) {
                    _vm.$set(_vm.inventory_details, "description", $$v)
                  },
                  expression: "inventory_details.description",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.update_inventory_details },
                },
                [_vm._v("Update")]
              ),
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=template&id=3d31c20b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/inventory/index.vue?vue&type=template&id=3d31c20b&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "app-container" }, [_c("inventory-list")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);