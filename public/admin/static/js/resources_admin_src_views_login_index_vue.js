"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_admin_src_views_login_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
// import openWindow from '@/utils/open-window'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'SocialSignin',
  methods: {
    wechatHandleClick: function wechatHandleClick(thirdpart) {
      alert('ok'); // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const appid = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      // openWindow(url, thirdpart, 540, 540)
    },
    tencentHandleClick: function tencentHandleClick(thirdpart) {
      alert('ok'); // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, thirdpart, 540, 540)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/validate */ "./resources/admin/src/utils/validate.js");
/* harmony import */ var _components_SocialSignin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SocialSignin */ "./resources/admin/src/views/login/components/SocialSignin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Login',
  components: {
    SocialSign: _components_SocialSignin__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var validateUsername = function validateUsername(rule, value, callback) {
      if (!(0,_utils_validate__WEBPACK_IMPORTED_MODULE_0__.validUsername)(value)) {
        callback(new Error('Please enter the correct user name'));
      } else {
        callback();
      }
    };

    var validatePassword = function validatePassword(rule, value, callback) {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: 'dongsmbm',
        password: '123456'
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePassword
        }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    };
  },
  watch: {
    $route: {
      handler: function handler(route) {
        var query = route.query;

        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },
  created: function created() {// window.addEventListener('storage', this.afterQRScan)
  },
  mounted: function mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus();
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus();
    }
  },
  destroyed: function destroyed() {// window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock: function checkCapslock(e) {
      var key = e.key;
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z';
    },
    showPwd: function showPwd() {
      var _this = this;

      if (this.passwordType === 'password') {
        this.passwordType = '';
      } else {
        this.passwordType = 'password';
      }

      this.$nextTick(function () {
        _this.$refs.password.focus();
      });
    },
    handleLogin: function handleLogin() {
      var _this2 = this;

      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          _this2.loading = true;

          _this2.$store.dispatch('user/login', _this2.loginForm).then(function () {
            _this2.$router.push({
              path: _this2.redirect || '/',
              query: _this2.otherQuery
            });

            _this2.loading = false;
          })["catch"](function () {
            _this2.loading = false;
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getOtherQuery: function getOtherQuery(query) {
      return Object.keys(query).reduce(function (acc, cur) {
        if (cur !== 'redirect') {
          acc[cur] = query[cur];
        }

        return acc;
      }, {});
    } // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }

  }
});

/***/ }),

/***/ "./resources/admin/src/views/login/components/SocialSignin.vue":
/*!*********************************************************************!*\
  !*** ./resources/admin/src/views/login/components/SocialSignin.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SocialSignin_vue_vue_type_template_id_0c565324_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialSignin.vue?vue&type=template&id=0c565324&scoped=true& */ "./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=template&id=0c565324&scoped=true&");
/* harmony import */ var _SocialSignin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialSignin.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './SocialSignin.vue?vue&type=style&index=0&id=0c565324&lang=scss&scoped=true&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SocialSignin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialSignin_vue_vue_type_template_id_0c565324_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SocialSignin_vue_vue_type_template_id_0c565324_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0c565324",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/login/components/SocialSignin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/login/index.vue":
/*!***************************************************!*\
  !*** ./resources/admin/src/views/login/index.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_369ad450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=369ad450&scoped=true& */ "./resources/admin/src/views/login/index.vue?vue&type=template&id=369ad450&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/admin/src/views/login/index.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.vue?vue&type=style&index=0&lang=scss&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './index.vue?vue&type=style&index=1&id=369ad450&lang=scss&scoped=true&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_369ad450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_369ad450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "369ad450",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/src/views/login/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSignin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialSignin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSignin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/login/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/admin/src/views/login/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=template&id=0c565324&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=template&id=0c565324&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSignin_vue_vue_type_template_id_0c565324_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSignin_vue_vue_type_template_id_0c565324_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSignin_vue_vue_type_template_id_0c565324_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SocialSignin.vue?vue&type=template&id=0c565324&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=template&id=0c565324&scoped=true&");


/***/ }),

/***/ "./resources/admin/src/views/login/index.vue?vue&type=template&id=369ad450&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/admin/src/views/login/index.vue?vue&type=template&id=369ad450&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_369ad450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_369ad450_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_369ad450_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=369ad450&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/index.vue?vue&type=template&id=369ad450&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=template&id=0c565324&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/components/SocialSignin.vue?vue&type=template&id=0c565324&scoped=true& ***!
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
  return _c("div", { staticClass: "social-signup-container" }, [
    _c(
      "div",
      {
        staticClass: "sign-btn",
        on: {
          click: function ($event) {
            return _vm.wechatHandleClick("wechat")
          },
        },
      },
      [
        _c(
          "span",
          { staticClass: "wx-svg-container" },
          [
            _c("svg-icon", {
              staticClass: "icon",
              attrs: { "icon-class": "wechat" },
            }),
          ],
          1
        ),
        _vm._v("\n    WeChat\n  "),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "sign-btn",
        on: {
          click: function ($event) {
            return _vm.tencentHandleClick("tencent")
          },
        },
      },
      [
        _c(
          "span",
          { staticClass: "qq-svg-container" },
          [
            _c("svg-icon", {
              staticClass: "icon",
              attrs: { "icon-class": "qq" },
            }),
          ],
          1
        ),
        _vm._v("\n    QQ\n  "),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/index.vue?vue&type=template&id=369ad450&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/src/views/login/index.vue?vue&type=template&id=369ad450&scoped=true& ***!
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
    { staticClass: "login-container" },
    [
      _c(
        "el-form",
        {
          ref: "loginForm",
          staticClass: "login-form",
          attrs: {
            model: _vm.loginForm,
            rules: _vm.loginRules,
            autocomplete: "on",
            "label-position": "left",
          },
        },
        [
          _c("div", { staticClass: "title-container" }, [
            _c("h3", { staticClass: "title" }, [_vm._v("Login Form")]),
          ]),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "username" } },
            [
              _c(
                "span",
                { staticClass: "svg-container" },
                [_c("svg-icon", { attrs: { "icon-class": "user" } })],
                1
              ),
              _vm._v(" "),
              _c("el-input", {
                ref: "username",
                attrs: {
                  placeholder: "Username",
                  name: "username",
                  type: "text",
                  tabindex: "1",
                  autocomplete: "on",
                },
                model: {
                  value: _vm.loginForm.username,
                  callback: function ($$v) {
                    _vm.$set(_vm.loginForm, "username", $$v)
                  },
                  expression: "loginForm.username",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tooltip",
            {
              attrs: {
                content: "Caps lock is On",
                placement: "right",
                manual: "",
              },
              model: {
                value: _vm.capsTooltip,
                callback: function ($$v) {
                  _vm.capsTooltip = $$v
                },
                expression: "capsTooltip",
              },
            },
            [
              _c(
                "el-form-item",
                { attrs: { prop: "password" } },
                [
                  _c(
                    "span",
                    { staticClass: "svg-container" },
                    [_c("svg-icon", { attrs: { "icon-class": "password" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-input", {
                    key: _vm.passwordType,
                    ref: "password",
                    attrs: {
                      type: _vm.passwordType,
                      placeholder: "Password",
                      name: "password",
                      tabindex: "2",
                      autocomplete: "on",
                    },
                    on: {
                      blur: function ($event) {
                        _vm.capsTooltip = false
                      },
                    },
                    nativeOn: {
                      keyup: [
                        function ($event) {
                          return _vm.checkCapslock.apply(null, arguments)
                        },
                        function ($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.handleLogin.apply(null, arguments)
                        },
                      ],
                    },
                    model: {
                      value: _vm.loginForm.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.loginForm, "password", $$v)
                      },
                      expression: "loginForm.password",
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "show-pwd", on: { click: _vm.showPwd } },
                    [
                      _c("svg-icon", {
                        attrs: {
                          "icon-class":
                            _vm.passwordType === "password"
                              ? "eye"
                              : "eye-open",
                        },
                      }),
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
            "el-button",
            {
              staticStyle: { width: "100%", "margin-bottom": "30px" },
              attrs: { loading: _vm.loading, type: "primary" },
              nativeOn: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.handleLogin.apply(null, arguments)
                },
              },
            },
            [_vm._v("Login")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { position: "relative" } },
            [
              _c("div", { staticClass: "tips" }, [
                _c("span", [_vm._v("Username : admin")]),
                _vm._v(" "),
                _c("span", [_vm._v("Password : any")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "tips" }, [
                _c("span", { staticStyle: { "margin-right": "18px" } }, [
                  _vm._v("Username : editor"),
                ]),
                _vm._v(" "),
                _c("span", [_vm._v("Password : any")]),
              ]),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  staticClass: "thirdparty-button",
                  attrs: { type: "primary" },
                  on: {
                    click: function ($event) {
                      _vm.showDialog = true
                    },
                  },
                },
                [_vm._v("\n        Or connect with\n      ")]
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
          attrs: { title: "Or connect with", visible: _vm.showDialog },
          on: {
            "update:visible": function ($event) {
              _vm.showDialog = $event
            },
          },
        },
        [
          _vm._v(
            "\n    Can not be simulated on local, so please combine you own business simulation! ! !\n    "
          ),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("social-sign"),
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