"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_records_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { getToken } from 'api/qiniu'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditorSlideUpload',
  props: {
    color: {
      type: String,
      "default": '#1890ff'
    }
  },
  data: function data() {
    return {
      dialogVisible: false,
      listObj: {},
      fileList: []
    };
  },
  methods: {
    checkAllSuccess: function checkAllSuccess() {
      var _this = this;

      return Object.keys(this.listObj).every(function (item) {
        return _this.listObj[item].hasSuccess;
      });
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      var arr = Object.keys(this.listObj).map(function (v) {
        return _this2.listObj[v];
      });

      if (!this.checkAllSuccess()) {
        this.$message('Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!');
        return;
      }

      this.$emit('successCBK', arr);
      this.listObj = {};
      this.fileList = [];
      this.dialogVisible = false;
    },
    handleSuccess: function handleSuccess(response, file) {
      var uid = file.uid;
      var objKeyArr = Object.keys(this.listObj);

      for (var i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          this.listObj[objKeyArr[i]].url = response.files.file;
          this.listObj[objKeyArr[i]].hasSuccess = true;
          return;
        }
      }
    },
    handleRemove: function handleRemove(file) {
      var uid = file.uid;
      var objKeyArr = Object.keys(this.listObj);

      for (var i = 0, len = objKeyArr.length; i < len; i++) {
        if (this.listObj[objKeyArr[i]].uid === uid) {
          delete this.listObj[objKeyArr[i]];
          return;
        }
      }
    },
    beforeUpload: function beforeUpload(file) {
      var _self = this;

      var _URL = window.URL || window.webkitURL;

      var fileName = file.uid;
      this.listObj[fileName] = {};
      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = _URL.createObjectURL(file);

        img.onload = function () {
          _self.listObj[fileName] = {
            hasSuccess: false,
            uid: file.uid,
            width: this.width,
            height: this.height
          };
        };

        resolve(true);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_EditorImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditorImage */ "./resources/admin/src/components/Tinymce/components/EditorImage.vue");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./resources/admin/src/components/Tinymce/plugins.js");
/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar */ "./resources/admin/src/components/Tinymce/toolbar.js");
/* harmony import */ var _dynamicLoadScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dynamicLoadScript */ "./resources/admin/src/components/Tinymce/dynamicLoadScript.js");
//
//
//
//
//
//
//
//
//

/**
 * docs:
 * https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html#tinymce
 */



 // why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one

var tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Tinymce',
  components: {
    editorImage: _components_EditorImage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: {
      type: String,
      "default": function _default() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '');
      }
    },
    value: {
      type: String,
      "default": ''
    },
    toolbar: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    menubar: {
      type: String,
      "default": 'file edit insert view format table'
    },
    height: {
      type: [Number, String],
      required: false,
      "default": 360
    },
    width: {
      type: [Number, String],
      required: false,
      "default": 'auto'
    }
  },
  data: function data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        'en': 'en',
        'zh': 'zh_CN',
        'es': 'es_MX',
        'ja': 'ja'
      }
    };
  },
  computed: {
    containerWidth: function containerWidth() {
      var width = this.width;

      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return "".concat(width, "px");
      }

      return width;
    }
  },
  watch: {
    value: function value(val) {
      var _this2 = this;

      if (!this.hasChange && this.hasInit) {
        this.$nextTick(function () {
          return window.tinymce.get(_this2.tinymceId).setContent(val || '');
        });
      }
    }
  },
  mounted: function mounted() {
    this.init();
  },
  activated: function activated() {
    if (window.tinymce) {
      this.initTinymce();
    }
  },
  deactivated: function deactivated() {
    this.destroyTinymce();
  },
  destroyed: function destroyed() {
    this.destroyTinymce();
  },
  methods: {
    init: function init() {
      var _this3 = this;

      // dynamic load tinymce from cdn
      (0,_dynamicLoadScript__WEBPACK_IMPORTED_MODULE_3__["default"])(tinymceCDN, function (err) {
        if (err) {
          _this3.$message.error(err.message);

          return;
        }

        _this3.initTinymce();
      });
    },
    initTinymce: function initTinymce() {
      var _this4 = this;

      var _this = this;

      window.tinymce.init({
        selector: "#".concat(this.tinymceId),
        language: this.languageTypeList['en'],
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : _toolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
        menubar: this.menubar,
        plugins: _plugins__WEBPACK_IMPORTED_MODULE_1__["default"],
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true,
        // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: function init_instance_callback(editor) {
          if (_this.value) {
            editor.setContent(_this.value);
          }

          _this.hasInit = true;
          editor.on('NodeChange Change KeyUp SetContent', function () {
            _this4.hasChange = true;

            _this4.$emit('input', editor.getContent());
          });
        },
        setup: function setup(editor) {
          editor.on('FullscreenStateChanged', function (e) {
            _this.fullscreen = e.state;
          });
        },
        // it will try to keep these URLs intact
        // https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/
        // https://stackoverflow.com/questions/5196205/disable-tinymce-absolute-to-relative-url-conversions
        convert_urls: false // 整合七牛上传
        // images_dataimg_filter(img) {
        //   setTimeout(() => {
        //     const $image = $(img);
        //     $image.removeAttr('width');
        //     $image.removeAttr('height');
        //     if ($image[0].height && $image[0].width) {
        //       $image.attr('data-wscntype', 'image');
        //       $image.attr('data-wscnh', $image[0].height);
        //       $image.attr('data-wscnw', $image[0].width);
        //       $image.addClass('wscnph');
        //     }
        //   }, 0);
        //   return img
        // },
        // images_upload_handler(blobInfo, success, failure, progress) {
        //   progress(0);
        //   const token = _this.$store.getters.token;
        //   getToken(token).then(response => {
        //     const url = response.data.qiniu_url;
        //     const formData = new FormData();
        //     formData.append('token', response.data.qiniu_token);
        //     formData.append('key', response.data.qiniu_key);
        //     formData.append('file', blobInfo.blob(), url);
        //     upload(formData).then(() => {
        //       success(url);
        //       progress(100);
        //     })
        //   }).catch(err => {
        //     failure('出现未知问题，刷新页面，或者联系程序员')
        //     console.log(err);
        //   });
        // },

      });
    },
    destroyTinymce: function destroyTinymce() {
      var tinymce = window.tinymce.get(this.tinymceId);

      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen');
      }

      if (tinymce) {
        tinymce.destroy();
      }
    },
    setContent: function setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent: function getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },
    imageSuccessCBK: function imageSuccessCBK(arr) {
      var _this5 = this;

      arr.forEach(function (v) {
        return window.tinymce.get(_this5.tinymceId).insertContent("<img class=\"wscnph\" src=\"".concat(v.url, "\" >"));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/components/add-record-form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/components/add-record-form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/record */ "./resources/admin/src/api/record.js");
/* harmony import */ var _components_Tinymce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Tinymce */ "./resources/admin/src/components/Tinymce/index.vue");
//
//
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
  props: ['patient_id', 'user_id', 'user_name'],
  components: {
    Tinymce: _components_Tinymce__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      record_details: {
        record_body: '',
        patient_id: '',
        user_id: ''
      }
    };
  },
  methods: {
    add_record: function add_record() {
      var _this = this;

      this.record_details.patient_id = this.patient_id;
      this.record_details.user_id = this.user_id;
      (0,_api_record__WEBPACK_IMPORTED_MODULE_0__.addRecord)(this.record_details).then(function (response) {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./resources/admin/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _api_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/record */ "./resources/admin/src/api/record.js");
/* harmony import */ var _components_add_record_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-record-form */ "./resources/admin/src/views/records/components/add-record-form.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AddRecordForm: _components_add_record_form__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user: {},
      patient_id: 1,
      records: {
        id: "",
        first_name: "",
        last_name: ""
      },
      count: ""
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["id", "name"])),
  created: function created() {
    this.get_user();
    this.get_records();
  },
  methods: {
    get_user: function get_user() {
      this.user = {
        name: this.name,
        id: this.id
      };
    },
    get_records: function get_records() {
      var _this = this;

      (0,_api_record__WEBPACK_IMPORTED_MODULE_1__.getAllRecords)().then(function (response) {
        _this.records = response; //this.count = Object.keys(this.records).length
      });
    },
    delete_record: function delete_record(id) {
      var _this2 = this;

      if (confirm("Do you really want to delete this record?")) {
        (0,_api_record__WEBPACK_IMPORTED_MODULE_1__.deleteRecord)(id).then(function (response) {
          _this2.get_records();

          _this2.$notify({
            title: 'Notification',
            type: 'success',
            message: response
          });
        });
      }
    },
    convert_date: function convert_date(value) {
      var date = new Date(value).toLocaleDateString('en-gb');
      return date;
    },
    convert_time: function convert_time(value) {
      var time = new Date(value).toLocaleTimeString('en-gb');
      return time;
    }
  }
});

/***/ }),

/***/ "./resources/admin/src/api/record.js":
/*!*******************************************!*\
  !*** ./resources/admin/src/api/record.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRecord": () => (/* binding */ addRecord),
/* harmony export */   "deleteRecord": () => (/* binding */ deleteRecord),
/* harmony export */   "getAllRecords": () => (/* binding */ getAllRecords),
/* harmony export */   "getPatientRecords": () => (/* binding */ getPatientRecords),
/* harmony export */   "getSingleRecord": () => (/* binding */ getSingleRecord),
/* harmony export */   "updateRecord": () => (/* binding */ updateRecord)
/* harmony export */ });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/admin/src/utils/request.js");

function getAllRecords() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/record',
    method: 'get'
  });
}
function getSingleRecord(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/record/' + id,
    method: 'get'
  });
}
function getPatientRecords(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/record/search/' + id,
    method: 'get'
  });
}
function addRecord(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/record',
    method: 'post',
    data: data
  });
}
function updateRecord(data, id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/record/' + id,
    method: 'put',
    data: data
  });
}
function deleteRecord(id) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/record/' + id,
    method: 'delete'
  });
}

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/dynamicLoadScript.js":
/*!*********************************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/dynamicLoadScript.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var callbacks = [];

function loadedTinymce() {
  // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2144
  // check is successfully downloaded script
  return window.tinymce;
}

var dynamicLoadScript = function dynamicLoadScript(src, callback) {
  var existingScript = document.getElementById(src);

  var cb = callback || function () {};

  if (!existingScript) {
    var script = document.createElement('script');
    script.src = src; // src url for the third-party library being loaded.

    script.id = src;
    document.body.appendChild(script);
    callbacks.push(cb);
    var onEnd = 'onload' in script ? stdOnEnd : ieOnEnd;
    onEnd(script);
  }

  if (existingScript && cb) {
    if (loadedTinymce()) {
      cb(null, existingScript);
    } else {
      callbacks.push(cb);
    }
  }

  function stdOnEnd(script) {
    script.onload = function () {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null;

      var _iterator = _createForOfIteratorHelper(callbacks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _cb = _step.value;

          _cb(null, script);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      callbacks = null;
    };

    script.onerror = function () {
      this.onerror = this.onload = null;
      cb(new Error('Failed to load ' + src), script);
    };
  }

  function ieOnEnd(script) {
    script.onreadystatechange = function () {
      if (this.readyState !== 'complete' && this.readyState !== 'loaded') return;
      this.onreadystatechange = null;

      var _iterator2 = _createForOfIteratorHelper(callbacks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _cb2 = _step2.value;

          _cb2(null, script); // there is no way to catch loading errors in IE8

        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      callbacks = null;
    };
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dynamicLoadScript);

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/plugins.js":
/*!***********************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/plugins.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/
var plugins = ['advlist anchor autolink code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugins);

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/toolbar.js":
/*!***********************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/toolbar.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols
var toolbar = ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toolbar);

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/components/EditorImage.vue":
/*!***************************************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/components/EditorImage.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditorImage_vue_vue_type_template_id_211f14db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorImage.vue?vue&type=template&id=211f14db&scoped=true& */ "./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=template&id=211f14db&scoped=true&");
/* harmony import */ var _EditorImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorImage.vue?vue&type=script&lang=js& */ "./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './EditorImage.vue?vue&type=style&index=0&id=211f14db&lang=scss&scoped=true&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditorImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditorImage_vue_vue_type_template_id_211f14db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditorImage_vue_vue_type_template_id_211f14db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "211f14db",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/components/Tinymce/components/EditorImage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/index.vue":
/*!**********************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/index.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_7cb91388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7cb91388&scoped=true& */ "./resources/admin/src/components/Tinymce/index.vue?vue&type=template&id=7cb91388&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/admin/src/components/Tinymce/index.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.vue?vue&type=style&index=0&id=7cb91388&lang=scss&scoped=true&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7cb91388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_7cb91388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7cb91388",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/components/Tinymce/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/records/components/add-record-form.vue":
/*!**************************************************************************!*\
  !*** ./resources/admin/src/views/records/components/add-record-form.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_record_form_vue_vue_type_template_id_b54693e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-record-form.vue?vue&type=template&id=b54693e8&scoped=true& */ "./resources/admin/src/views/records/components/add-record-form.vue?vue&type=template&id=b54693e8&scoped=true&");
/* harmony import */ var _add_record_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-record-form.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/records/components/add-record-form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_record_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_record_form_vue_vue_type_template_id_b54693e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _add_record_form_vue_vue_type_template_id_b54693e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b54693e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/records/components/add-record-form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/records/index.vue":
/*!*****************************************************!*\
  !*** ./resources/admin/src/views/records/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_473c7471___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=473c7471& */ "./resources/admin/src/views/records/index.vue?vue&type=template&id=473c7471&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/records/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_473c7471___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_473c7471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/records/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/records/components/add-record-form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/admin/src/views/records/components/add-record-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_record_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-record-form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/components/add-record-form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_record_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/records/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/admin/src/views/records/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=template&id=211f14db&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=template&id=211f14db&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_template_id_211f14db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_template_id_211f14db_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditorImage_vue_vue_type_template_id_211f14db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditorImage.vue?vue&type=template&id=211f14db&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=template&id=211f14db&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/components/Tinymce/index.vue?vue&type=template&id=7cb91388&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/admin/src/components/Tinymce/index.vue?vue&type=template&id=7cb91388&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7cb91388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7cb91388_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7cb91388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=7cb91388&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/index.vue?vue&type=template&id=7cb91388&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/records/components/add-record-form.vue?vue&type=template&id=b54693e8&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/admin/src/views/records/components/add-record-form.vue?vue&type=template&id=b54693e8&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_record_form_vue_vue_type_template_id_b54693e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_record_form_vue_vue_type_template_id_b54693e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_record_form_vue_vue_type_template_id_b54693e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./add-record-form.vue?vue&type=template&id=b54693e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/components/add-record-form.vue?vue&type=template&id=b54693e8&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/records/index.vue?vue&type=template&id=473c7471&":
/*!************************************************************************************!*\
  !*** ./resources/admin/src/views/records/index.vue?vue&type=template&id=473c7471& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_473c7471___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_473c7471___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_473c7471___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=473c7471& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/index.vue?vue&type=template&id=473c7471&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=template&id=211f14db&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/components/EditorImage.vue?vue&type=template&id=211f14db&scoped=true& ***!
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
    { staticClass: "upload-container" },
    [
      _c(
        "el-button",
        {
          style: { background: _vm.color, borderColor: _vm.color },
          attrs: { icon: "el-icon-upload", size: "mini", type: "primary" },
          on: {
            click: function ($event) {
              _vm.dialogVisible = true
            },
          },
        },
        [_vm._v("\n    upload\n  ")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.dialogVisible },
          on: {
            "update:visible": function ($event) {
              _vm.dialogVisible = $event
            },
          },
        },
        [
          _c(
            "el-upload",
            {
              staticClass: "editor-slide-upload",
              attrs: {
                multiple: true,
                "file-list": _vm.fileList,
                "show-file-list": true,
                "on-remove": _vm.handleRemove,
                "on-success": _vm.handleSuccess,
                "before-upload": _vm.beforeUpload,
                action: "https://httpbin.org/post",
                "list-type": "picture-card",
              },
            },
            [
              _c("el-button", { attrs: { size: "small", type: "primary" } }, [
                _vm._v("\n        Click upload\n      "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              on: {
                click: function ($event) {
                  _vm.dialogVisible = false
                },
              },
            },
            [_vm._v("\n      Cancel\n    ")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.handleSubmit } },
            [_vm._v("\n      Confirm\n    ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/index.vue?vue&type=template&id=7cb91388&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/components/Tinymce/index.vue?vue&type=template&id=7cb91388&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "tinymce-container",
      class: { fullscreen: _vm.fullscreen },
      style: { width: _vm.containerWidth },
    },
    [
      _c("textarea", {
        staticClass: "tinymce-textarea",
        attrs: { id: _vm.tinymceId },
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "editor-custom-btn-container" },
        [
          _c("editorImage", {
            staticClass: "editor-upload-btn",
            attrs: { color: "#1890ff" },
            on: { successCBK: _vm.imageSuccessCBK },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/components/add-record-form.vue?vue&type=template&id=b54693e8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/components/add-record-form.vue?vue&type=template&id=b54693e8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
      _c("h2", [_vm._v("Current Editing User: " + _vm._s(_vm.user_name))]),
      _vm._v(" "),
      _c("tinymce", {
        attrs: { height: 300 },
        model: {
          value: _vm.record_details.record_body,
          callback: function ($$v) {
            _vm.$set(_vm.record_details, "record_body", $$v)
          },
          expression: "record_details.record_body",
        },
      }),
      _vm._v(" "),
      _c(
        "el-button",
        { attrs: { type: "primary" }, on: { click: _vm.add_record } },
        [_vm._v("\n    Submit\n    ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/index.vue?vue&type=template&id=473c7471&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/records/index.vue?vue&type=template&id=473c7471& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
        { staticStyle: { width: "50%" } },
        [
          _c(
            "el-table",
            {
              staticStyle: { width: "100" },
              attrs: {
                data: _vm.records,
                fit: "",
                "highlight-current-row": "",
              },
            },
            [
              _c("el-table-column", {
                attrs: {
                  label: "ID",
                  prop: "id",
                  sortable: "",
                  align: "center",
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [_c("div", [_c("span", [_vm._v(_vm._s(row.id))])])]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Record Body" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c("div", {
                          domProps: { innerHTML: _vm._s(row.record_body) },
                        }),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Creation Time" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var row = ref.row
                      return [
                        _c("div", [
                          _c("p", [
                            _vm._v(_vm._s(_vm.convert_time(row.created_at))),
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(_vm.convert_date(row.created_at))),
                          ]),
                        ]),
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c(
                "el-table-column",
                { attrs: { label: "Operations" } },
                [
                  _c("el-button", { attrs: { type: "primary" } }, [
                    _vm._v("Update"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "danger" },
                      on: {
                        click: function ($event) {
                          return _vm.delete_record(_vm.row.id)
                        },
                      },
                    },
                    [_vm._v("Delete")]
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



/***/ })

}]);