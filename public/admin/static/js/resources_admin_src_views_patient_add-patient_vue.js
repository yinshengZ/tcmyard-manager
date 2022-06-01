"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_patient_add-patient_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-allergy.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-allergy.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/patient */ "./resources/admin/src/api/patient.js");
//
//
//
//
//
//
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
  name: 'AddAllergy',
  data: function data() {
    return {
      allergy: {
        allergy: ''
      }
    };
  },
  methods: {
    add_allergies: function add_allergies() {
      var _this = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.addAllergies)(this.allergy).then(function (response) {
        _this.$message('Allergy added successfully');
      })["catch"](function (error) {
        console.log(error);
      });
      document.getElementById('add_allergy_form').reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-gender.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-gender.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/patient */ "./resources/admin/src/api/patient.js");
//
//
//
//
//
//
//
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
  name: 'AddGender',
  data: function data() {
    return {
      gender: {
        gender: ''
      }
    };
  },
  methods: {
    add_gender: function add_gender() {
      var _this = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.addGender)(this.gender).then(function (response) {
        _this.$message('gender added successfully');
      });
      document.getElementById('add_gender_form').reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-marital.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-marital.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/patient */ "./resources/admin/src/api/patient.js");
//
//
//
//
//
//
//
//
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
  name: 'AddMarital',
  data: function data() {
    return {
      marital_status: {
        marital_status: ''
      }
    };
  },
  methods: {
    add_marital: function add_marital() {
      var _this = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.addMarital)(this.marital_status).then(function (response) {
        _this.$message('Marital status added successfully');
      })["catch"](function (error) {
        console.log(error);
      });
      document.getElementById('add_marital_form').reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/patient */ "./resources/admin/src/api/patient.js");
/* harmony import */ var _add_gender_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-gender.vue */ "./resources/admin/src/views/patient/add-gender.vue");
/* harmony import */ var _add_marital_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-marital.vue */ "./resources/admin/src/views/patient/add-marital.vue");
/* harmony import */ var _add_allergy_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-allergy.vue */ "./resources/admin/src/views/patient/add-allergy.vue");
/* harmony import */ var _add_symptom_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-symptom.vue */ "./resources/admin/src/views/patient/add-symptom.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AddGender: _add_gender_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AddMarital: _add_marital_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddAllergy: _add_allergy_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddSymptom: _add_symptom_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      patient_info: {
        first_name: "",
        last_name: "",
        gender_id: "",
        date_of_birth: "",
        postcode: "",
        telephone: "",
        email: "",
        marital_status_id: "",
        occupation: "",
        hiv: "false",
        past_history: "",
        current_issue: "",
        current_medication: "",
        allergies: [],
        symptoms: []
      },
      gender_rtv: null,
      marital_rtv: null,
      allergies_rtv: null,
      symptoms_rtv: null,
      add_allergy_loaded: false,
      add_genders_loaded: false,
      add_marital_loaded: false,
      add_symptom_loaded: false
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.get_genders();
    this.get_maritals();
    this.get_allergies();
    this.get_symptoms();
  },
  methods: {
    add_patient: function add_patient(data) {
      var _this = this;

      this.data = this.patient_info;
      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.AddPatient)(this.data).then(function (response) {
        console.log(response);

        _this.$message("Patient has been added successfully!");

        _this.$refs["patient-info"].resetFields();
      });
    },
    reset_form: function reset_form(formName) {
      this.$refs[formName].resetFields();
    },
    get_genders: function get_genders() {
      var _this2 = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.getGenders)().then(function (response) {
        _this2.gender_rtv = response;
      })["catch"](function (error) {
        $this.message(error);
      });
      this.add_genders_loaded = false;
    },
    get_maritals: function get_maritals() {
      var _this3 = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.getMarital)().then(function (response) {
        _this3.marital_rtv = response;
      });
      this.add_marital_loaded = false;
    },
    get_allergies: function get_allergies() {
      var _this4 = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.getAllergies)().then(function (response) {
        _this4.allergies_rtv = response;
      });
      this.add_allergy_loaded = false;
    },
    get_symptoms: function get_symptoms() {
      var _this5 = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.getSymptoms)().then(function (response) {
        _this5.symptoms_rtv = response;
      });
      this.add_symptom_loaded = false;
    },
    load_gender: function load_gender() {
      this.add_genders_loaded = !this.add_genders_loaded;
    },
    load_marital: function load_marital() {
      this.add_marital_loaded = !this.add_marital_loaded;
    },
    load_allergy: function load_allergy() {
      this.add_allergy_loaded = !this.add_allergy_loaded;
    },
    load_symptom: function load_symptom() {
      this.add_symptom_loaded = !this.add_symptom_loaded;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-symptom.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-symptom.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/patient */ "./resources/admin/src/api/patient.js");
//
//
//
//
//
//
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
  name: 'AddSymptom',
  data: function data() {
    return {
      symptom: {
        symptom: ''
      }
    };
  },
  methods: {
    add_symptom: function add_symptom() {
      var _this = this;

      (0,_api_patient__WEBPACK_IMPORTED_MODULE_0__.addSymptoms)(this.symptom).then(function (response) {
        _this.$message('Symptom added successfully');
      })["catch"](function (error) {
        console.log(error);
      });
      document.getElementById('add_symptom_form').reset();
    }
  }
});

/***/ }),

/***/ "./resources/admin/src/api/patient.js":
/*!********************************************!*\
  !*** ./resources/admin/src/api/patient.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPatient": () => (/* binding */ AddPatient),
/* harmony export */   "addAllergies": () => (/* binding */ addAllergies),
/* harmony export */   "addGender": () => (/* binding */ addGender),
/* harmony export */   "addMarital": () => (/* binding */ addMarital),
/* harmony export */   "addSymptoms": () => (/* binding */ addSymptoms),
/* harmony export */   "deleteAllergies": () => (/* binding */ deleteAllergies),
/* harmony export */   "deleteGender": () => (/* binding */ deleteGender),
/* harmony export */   "deleteMarital": () => (/* binding */ deleteMarital),
/* harmony export */   "deleteSymptoms": () => (/* binding */ deleteSymptoms),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "getAllergies": () => (/* binding */ getAllergies),
/* harmony export */   "getGenders": () => (/* binding */ getGenders),
/* harmony export */   "getMarital": () => (/* binding */ getMarital),
/* harmony export */   "getSingle": () => (/* binding */ getSingle),
/* harmony export */   "getSymptoms": () => (/* binding */ getSymptoms),
/* harmony export */   "searchPatient": () => (/* binding */ searchPatient)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/admin/src/utils/request.js");

function searchPatient(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/patient/search',
    method: 'post',
    data: data
  });
}
function getAll() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/patient',
    method: 'get'
  });
}
function getSingle(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/patient/' + id,
    method: 'get'
  });
}
function AddPatient(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/patient',
    method: 'post',
    data: data
  });
}
function addGender(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/gender',
    method: 'post',
    data: data
  });
}
function getGenders() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/gender',
    method: 'get'
  });
}
function deleteGender(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/gender',
    method: 'delete',
    id: id
  });
}
function addMarital(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/marital',
    method: 'post',
    data: data
  });
}
function getMarital() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/marital',
    method: 'get'
  });
}
function deleteMarital(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/marital',
    method: 'delete',
    id: id
  });
}
function addAllergies(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/allergy',
    method: 'post',
    data: data
  });
}
function getAllergies() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/allergy',
    method: 'get'
  });
}
function deleteAllergies(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/allergy',
    method: 'delete',
    id: id
  });
}
function addSymptoms(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/symptom',
    method: 'post',
    data: data
  });
}
function getSymptoms() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/symptom',
    method: 'get'
  });
}
function deleteSymptoms(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/symptom',
    method: 'delete',
    id: id
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.container[data-v-4b808b7b] {\r\n  padding: 32px;\r\n  background-color: rgb(240, 242, 245);\r\n  position: relative;\n}\n#add_patient[data-v-4b808b7b] {\r\n  padding-top: 2%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_style_index_0_id_4b808b7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_style_index_0_id_4b808b7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_style_index_0_id_4b808b7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/admin/src/views/patient/add-allergy.vue":
/*!***********************************************************!*\
  !*** ./resources/admin/src/views/patient/add-allergy.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_allergy_vue_vue_type_template_id_739f4e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-allergy.vue?vue&type=template&id=739f4e76& */ "./resources/admin/src/views/patient/add-allergy.vue?vue&type=template&id=739f4e76&");
/* harmony import */ var _add_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-allergy.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/patient/add-allergy.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_allergy_vue_vue_type_template_id_739f4e76___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_allergy_vue_vue_type_template_id_739f4e76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/patient/add-allergy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/patient/add-gender.vue":
/*!**********************************************************!*\
  !*** ./resources/admin/src/views/patient/add-gender.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_gender_vue_vue_type_template_id_3bb23e8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-gender.vue?vue&type=template&id=3bb23e8a& */ "./resources/admin/src/views/patient/add-gender.vue?vue&type=template&id=3bb23e8a&");
/* harmony import */ var _add_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-gender.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/patient/add-gender.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_gender_vue_vue_type_template_id_3bb23e8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_gender_vue_vue_type_template_id_3bb23e8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/patient/add-gender.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/patient/add-marital.vue":
/*!***********************************************************!*\
  !*** ./resources/admin/src/views/patient/add-marital.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_marital_vue_vue_type_template_id_672751ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-marital.vue?vue&type=template&id=672751ea& */ "./resources/admin/src/views/patient/add-marital.vue?vue&type=template&id=672751ea&");
/* harmony import */ var _add_marital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-marital.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/patient/add-marital.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_marital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_marital_vue_vue_type_template_id_672751ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_marital_vue_vue_type_template_id_672751ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/patient/add-marital.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/patient/add-patient.vue":
/*!***********************************************************!*\
  !*** ./resources/admin/src/views/patient/add-patient.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_patient_vue_vue_type_template_id_4b808b7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-patient.vue?vue&type=template&id=4b808b7b&scoped=true& */ "./resources/admin/src/views/patient/add-patient.vue?vue&type=template&id=4b808b7b&scoped=true&");
/* harmony import */ var _add_patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-patient.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/patient/add-patient.vue?vue&type=script&lang=js&");
/* harmony import */ var _add_patient_vue_vue_type_style_index_0_id_4b808b7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css& */ "./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_patient_vue_vue_type_template_id_4b808b7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_patient_vue_vue_type_template_id_4b808b7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b808b7b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/patient/add-patient.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/patient/add-symptom.vue":
/*!***********************************************************!*\
  !*** ./resources/admin/src/views/patient/add-symptom.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_symptom_vue_vue_type_template_id_55abc6c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-symptom.vue?vue&type=template&id=55abc6c2& */ "./resources/admin/src/views/patient/add-symptom.vue?vue&type=template&id=55abc6c2&");
/* harmony import */ var _add_symptom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-symptom.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/patient/add-symptom.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_symptom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_symptom_vue_vue_type_template_id_55abc6c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_symptom_vue_vue_type_template_id_55abc6c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/patient/add-symptom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/patient/add-allergy.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-allergy.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-allergy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-allergy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_allergy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/patient/add-gender.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-gender.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-gender.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-gender.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_gender_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/patient/add-marital.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-marital.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_marital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-marital.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-marital.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_marital_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/patient/add-patient.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-patient.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-patient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/patient/add-symptom.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-symptom.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_symptom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-symptom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-symptom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_symptom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_style_index_0_id_4b808b7b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=style&index=0&id=4b808b7b&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/admin/src/views/patient/add-allergy.vue?vue&type=template&id=739f4e76&":
/*!******************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-allergy.vue?vue&type=template&id=739f4e76& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_allergy_vue_vue_type_template_id_739f4e76___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_allergy_vue_vue_type_template_id_739f4e76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_allergy_vue_vue_type_template_id_739f4e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-allergy.vue?vue&type=template&id=739f4e76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-allergy.vue?vue&type=template&id=739f4e76&");


/***/ }),

/***/ "./resources/admin/src/views/patient/add-gender.vue?vue&type=template&id=3bb23e8a&":
/*!*****************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-gender.vue?vue&type=template&id=3bb23e8a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_gender_vue_vue_type_template_id_3bb23e8a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_gender_vue_vue_type_template_id_3bb23e8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_gender_vue_vue_type_template_id_3bb23e8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-gender.vue?vue&type=template&id=3bb23e8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-gender.vue?vue&type=template&id=3bb23e8a&");


/***/ }),

/***/ "./resources/admin/src/views/patient/add-marital.vue?vue&type=template&id=672751ea&":
/*!******************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-marital.vue?vue&type=template&id=672751ea& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_marital_vue_vue_type_template_id_672751ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_marital_vue_vue_type_template_id_672751ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_marital_vue_vue_type_template_id_672751ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-marital.vue?vue&type=template&id=672751ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-marital.vue?vue&type=template&id=672751ea&");


/***/ }),

/***/ "./resources/admin/src/views/patient/add-patient.vue?vue&type=template&id=4b808b7b&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-patient.vue?vue&type=template&id=4b808b7b&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_template_id_4b808b7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_template_id_4b808b7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_patient_vue_vue_type_template_id_4b808b7b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-patient.vue?vue&type=template&id=4b808b7b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=template&id=4b808b7b&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/patient/add-symptom.vue?vue&type=template&id=55abc6c2&":
/*!******************************************************************************************!*\
  !*** ./resources/admin/src/views/patient/add-symptom.vue?vue&type=template&id=55abc6c2& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_symptom_vue_vue_type_template_id_55abc6c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_symptom_vue_vue_type_template_id_55abc6c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_symptom_vue_vue_type_template_id_55abc6c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-symptom.vue?vue&type=template&id=55abc6c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-symptom.vue?vue&type=template&id=55abc6c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-allergy.vue?vue&type=template&id=739f4e76&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-allergy.vue?vue&type=template&id=739f4e76& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        { attrs: { id: "add_allergy_form" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                model: {
                  value: _vm.allergy.allergy,
                  callback: function ($$v) {
                    _vm.$set(_vm.allergy, "allergy", $$v)
                  },
                  expression: "allergy.allergy",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticStyle: { width: "100%" },
              attrs: { type: "primary" },
              on: { click: _vm.add_allergies },
            },
            [_vm._v("Add Allergy")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-gender.vue?vue&type=template&id=3bb23e8a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-gender.vue?vue&type=template&id=3bb23e8a& ***!
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
    [
      _c(
        "el-form",
        { attrs: { id: "add_gender_form" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                model: {
                  value: _vm.gender.gender,
                  callback: function ($$v) {
                    _vm.$set(_vm.gender, "gender", $$v)
                  },
                  expression: "gender.gender",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 24 } },
                [
                  _c(
                    "el-button",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { type: "primary" },
                      on: { click: _vm.add_gender },
                    },
                    [_vm._v("Add Gender")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-marital.vue?vue&type=template&id=672751ea&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-marital.vue?vue&type=template&id=672751ea& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        { attrs: { id: "add_marital_form" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                model: {
                  value: _vm.marital_status.marital_status,
                  callback: function ($$v) {
                    _vm.$set(_vm.marital_status, "marital_status", $$v)
                  },
                  expression: "marital_status.marital_status",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 24 } },
                [
                  _c(
                    "el-button",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { type: "primary" },
                      on: { click: _vm.add_marital },
                    },
                    [_vm._v("Add Marital Status")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=template&id=4b808b7b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-patient.vue?vue&type=template&id=4b808b7b&scoped=true& ***!
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
    { staticClass: "app-container" },
    [
      _c(
        "el-card",
        { staticClass: "box-card", attrs: { shadow: "hover" } },
        [
          _c(
            "el-form",
            {
              ref: "patient-info",
              attrs: {
                model: _vm.patient_info,
                id: "add_patient",
                "label-width": "140px",
                "label-position": "left",
              },
            },
            [
              _c(
                "el-form-item",
                { attrs: { label: "First Name", prop: "first_name" } },
                [
                  _c("el-input", {
                    attrs: { "prefix-icon": "el-icon-user-solid" },
                    model: {
                      value: _vm.patient_info.first_name,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "first_name", $$v)
                      },
                      expression: "patient_info.first_name",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Last Name", prop: "last_name" } },
                [
                  _c("el-input", {
                    attrs: { "prefix-icon": "el-icon-user-solid" },
                    model: {
                      value: _vm.patient_info.last_name,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "last_name", $$v)
                      },
                      expression: "patient_info.last_name",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Gender", prop: "gender_id" } },
                        [
                          _c(
                            "el-select",
                            {
                              model: {
                                value: _vm.patient_info.gender_id,
                                callback: function ($$v) {
                                  _vm.$set(_vm.patient_info, "gender_id", $$v)
                                },
                                expression: "patient_info.gender_id",
                              },
                            },
                            _vm._l(_vm.gender_rtv, function (genders) {
                              return _c("el-option", {
                                key: genders.id,
                                attrs: {
                                  label: genders.gender,
                                  value: genders.id,
                                },
                              })
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 5 } },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary", icon: "el-icon-plus" },
                          on: { click: _vm.load_gender },
                        },
                        [_vm._v("\n            Add\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Date of Birth", prop: "date_of_birth" } },
                [
                  _c("el-date-picker", {
                    attrs: {
                      type: "date",
                      format: "yyyy/MM/dd",
                      "value-format": "yyyy/MM/dd",
                    },
                    model: {
                      value: _vm.patient_info.date_of_birth,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "date_of_birth", $$v)
                      },
                      expression: "patient_info.date_of_birth",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Postcode", prop: "postcode" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.patient_info.postcode,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "postcode", $$v)
                      },
                      expression: "patient_info.postcode",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Telephone", prop: "telephone" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.patient_info.telephone,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "telephone", $$v)
                      },
                      expression: "patient_info.telephone",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Email", prop: "email" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.patient_info.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "email", $$v)
                      },
                      expression: "patient_info.email",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "Marital Status",
                            prop: "marital_status_id",
                          },
                        },
                        [
                          _c(
                            "el-select",
                            {
                              model: {
                                value: _vm.patient_info.marital_status_id,
                                callback: function ($$v) {
                                  _vm.$set(
                                    _vm.patient_info,
                                    "marital_status_id",
                                    $$v
                                  )
                                },
                                expression: "patient_info.marital_status_id",
                              },
                            },
                            _vm._l(_vm.marital_rtv, function (marital) {
                              return _c("el-option", {
                                key: marital.id,
                                attrs: {
                                  label: marital.marital_status,
                                  value: marital.id,
                                },
                              })
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 5 } },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary", icon: "el-icon-plus" },
                          on: { click: _vm.load_marital },
                        },
                        [_vm._v("\n            Add\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Occupation", prop: "occupation" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.patient_info.occupation,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "occupation", $$v)
                      },
                      expression: "patient_info.occupation",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "HIV Postive", prop: "hiv" } },
                [
                  _c("el-switch", {
                    model: {
                      value: _vm.patient_info.hiv,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "hiv", $$v)
                      },
                      expression: "patient_info.hiv",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Past History", prop: "past_history" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: 3 },
                    model: {
                      value: _vm.patient_info.past_history,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "past_history", $$v)
                      },
                      expression: "patient_info.past_history",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Current Issue", prop: "current_issue" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: 3 },
                    model: {
                      value: _vm.patient_info.current_issue,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "current_issue", $$v)
                      },
                      expression: "patient_info.current_issue",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Allergies", prop: "allergies" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.patient_info.allergies,
                                callback: function ($$v) {
                                  _vm.$set(_vm.patient_info, "allergies", $$v)
                                },
                                expression: "patient_info.allergies",
                              },
                            },
                            _vm._l(_vm.allergies_rtv, function (allergy) {
                              return _c("el-option", {
                                key: allergy.id,
                                attrs: {
                                  label: allergy.allergies,
                                  value: allergy.id,
                                },
                              })
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 5 } },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary", icon: "el-icon-plus" },
                          on: { click: _vm.load_allergy },
                        },
                        [_vm._v("\n            Add\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    { attrs: { span: 12 } },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: "Symptoms", prop: "symptoms" } },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { multiple: "" },
                              model: {
                                value: _vm.patient_info.symptoms,
                                callback: function ($$v) {
                                  _vm.$set(_vm.patient_info, "symptoms", $$v)
                                },
                                expression: "patient_info.symptoms",
                              },
                            },
                            _vm._l(_vm.symptoms_rtv, function (symptom) {
                              return _c("el-option", {
                                key: symptom.id,
                                attrs: {
                                  label: symptom.symptom,
                                  value: symptom.id,
                                },
                              })
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 5 } },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary", icon: "el-icon-plus" },
                          on: { click: _vm.load_symptom },
                        },
                        [_vm._v("\n            Add\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "Current Medication",
                    prop: "current_medication",
                  },
                },
                [
                  _c("el-input", {
                    attrs: { type: "textarea", rows: 3 },
                    model: {
                      value: _vm.patient_info.current_medication,
                      callback: function ($$v) {
                        _vm.$set(_vm.patient_info, "current_medication", $$v)
                      },
                      expression: "patient_info.current_medication",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-row",
                [
                  _c(
                    "el-col",
                    [
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: {
                                click: function ($event) {
                                  return _vm.add_patient(_vm.first_name)
                                },
                              },
                            },
                            [_vm._v("Submit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-button",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.reset_form("patient_info")
                                },
                              },
                            },
                            [_vm._v(" Reset ")]
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "Add New Allergy",
                visible: _vm.add_allergy_loaded,
                "before-close": _vm.get_allergies,
              },
              on: {
                "update:visible": function ($event) {
                  _vm.add_allergy_loaded = $event
                },
              },
            },
            [_c("add-allergy")],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "Add New Gender",
                visible: _vm.add_genders_loaded,
                "before-close": _vm.get_genders,
              },
              on: {
                "update:visible": function ($event) {
                  _vm.add_genders_loaded = $event
                },
              },
            },
            [_c("add-gender")],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "Add New Marital Status",
                visible: _vm.add_marital_loaded,
                "before-close": _vm.get_maritals,
              },
              on: {
                "update:visible": function ($event) {
                  _vm.add_marital_loaded = $event
                },
              },
            },
            [_c("add-marital")],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "Add New Symptoms",
                visible: _vm.add_symptom_loaded,
                "before-close": _vm.get_symptoms,
              },
              on: {
                "update:visible": function ($event) {
                  _vm.add_symptom_loaded = $event
                },
              },
            },
            [_c("add-symptom")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-symptom.vue?vue&type=template&id=55abc6c2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/patient/add-symptom.vue?vue&type=template&id=55abc6c2& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        { attrs: { id: "add_symptom_form" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                model: {
                  value: _vm.symptom.symptom,
                  callback: function ($$v) {
                    _vm.$set(_vm.symptom, "symptom", $$v)
                  },
                  expression: "symptom.symptom",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticStyle: { width: "100%" },
              attrs: { type: "primary" },
              on: { click: _vm.add_symptom },
            },
            [_vm._v("Add Symptom")]
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



/***/ })

}]);