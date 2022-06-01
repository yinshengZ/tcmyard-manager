"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_excel_merge-header_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/excel/merge-header.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/excel/merge-header.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/article */ "./resources/admin/src/api/article.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./resources/admin/src/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MergeHeader',
  data: function data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      var _this = this;

      this.listLoading = true;
      (0,_api_article__WEBPACK_IMPORTED_MODULE_0__.fetchList)(this.listQuery).then(function (response) {
        _this.list = response.data.items;
        _this.listLoading = false;
      });
    },
    handleDownload: function handleDownload() {
      var _this2 = this;

      this.downloadLoading = true;
      __webpack_require__.e(/*! import() */ "resources_admin_src_vendor_Export2Excel_js").then(__webpack_require__.bind(__webpack_require__, /*! @/vendor/Export2Excel */ "./resources/admin/src/vendor/Export2Excel.js")).then(function (excel) {
        var multiHeader = [['Id', 'Main Information', '', '', 'Date']];
        var header = ['', 'Title', 'Author', 'Readings', ''];
        var filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
        var list = _this2.list;

        var data = _this2.formatJson(filterVal, list);

        var merges = ['A1:A2', 'B1:D1', 'E1:E2'];
        excel.export_json_to_excel({
          multiHeader: multiHeader,
          header: header,
          merges: merges,
          data: data
        });
        _this2.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          if (j === 'timestamp') {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parseTime)(v[j]);
          } else {
            return v[j];
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/admin/src/api/article.js":
/*!********************************************!*\
  !*** ./resources/admin/src/api/article.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createArticle": () => (/* binding */ createArticle),
/* harmony export */   "fetchArticle": () => (/* binding */ fetchArticle),
/* harmony export */   "fetchList": () => (/* binding */ fetchList),
/* harmony export */   "fetchPv": () => (/* binding */ fetchPv),
/* harmony export */   "updateArticle": () => (/* binding */ updateArticle)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/admin/src/utils/request.js");

function fetchList(query) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params: query
  });
}
function fetchArticle(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: {
      id: id
    }
  });
}
function fetchPv(pv) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: {
      pv: pv
    }
  });
}
function createArticle(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data: data
  });
}
function updateArticle(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/admin/src/views/excel/merge-header.vue":
/*!**********************************************************!*\
  !*** ./resources/admin/src/views/excel/merge-header.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _merge_header_vue_vue_type_template_id_7407529e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-header.vue?vue&type=template&id=7407529e& */ "./resources/admin/src/views/excel/merge-header.vue?vue&type=template&id=7407529e&");
/* harmony import */ var _merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merge-header.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/excel/merge-header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _merge_header_vue_vue_type_template_id_7407529e___WEBPACK_IMPORTED_MODULE_0__.render,
  _merge_header_vue_vue_type_template_id_7407529e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/excel/merge-header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/excel/merge-header.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/src/views/excel/merge-header.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./merge-header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/excel/merge-header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/excel/merge-header.vue?vue&type=template&id=7407529e&":
/*!*****************************************************************************************!*\
  !*** ./resources/admin/src/views/excel/merge-header.vue?vue&type=template&id=7407529e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_template_id_7407529e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_template_id_7407529e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merge_header_vue_vue_type_template_id_7407529e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./merge-header.vue?vue&type=template&id=7407529e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/excel/merge-header.vue?vue&type=template&id=7407529e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/excel/merge-header.vue?vue&type=template&id=7407529e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/excel/merge-header.vue?vue&type=template&id=7407529e& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c(
        "el-button",
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: {
            loading: _vm.downloadLoading,
            type: "primary",
            icon: "el-icon-document",
          },
          on: { click: _vm.handleDownload },
        },
        [_vm._v("Export")]
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.listLoading,
              expression: "listLoading",
            },
          ],
          ref: "multipleTable",
          attrs: {
            data: _vm.list,
            "element-loading-text": "Loading",
            border: "",
            fit: "",
            "highlight-current-row": "",
          },
        },
        [
          _c("el-table-column", {
            attrs: { align: "center", label: "Id", width: "95" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (scope) {
                  return [
                    _vm._v("\n        " + _vm._s(scope.$index) + "\n      "),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Main Information", align: "center" } },
            [
              _c("el-table-column", {
                attrs: { label: "Title" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (scope) {
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(scope.row.title) +
                            "\n        "
                        ),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Author", width: "110", align: "center" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (scope) {
                      return [_c("el-tag", [_vm._v(_vm._s(scope.row.author))])]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Readings", width: "115", align: "center" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (scope) {
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(scope.row.pageviews) +
                            "\n        "
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "center", label: "Date", width: "220" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (scope) {
                  return [
                    _c("i", { staticClass: "el-icon-time" }),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm._f("parseTime")(
                            scope.row.timestamp,
                            "{y}-{m}-{d} {h}:{i}"
                          )
                        )
                      ),
                    ]),
                  ]
                },
              },
            ]),
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



/***/ })

}]);