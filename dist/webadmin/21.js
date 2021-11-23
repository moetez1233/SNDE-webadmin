(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/app/demo/pages/authentication/authentication-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication-routing.module.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            children: [
                // {
                //   path: 'signup',
                //   loadChildren: () => import('./auth-signup/auth-signup.module').then(module => module.AuthSignupModule)
                // },
                {
                    path: 'signin',
                    loadChildren: function () { return new Promise(function (resolve_1, reject_1) { __webpack_require__.e(/*! AMD require */ 17).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./auth-signin/auth-signin.module */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then(function (module) { return module.AuthSigninModule; }); }
                },
                {
                    path: 'reset-password',
                    loadChildren: function () { return new Promise(function (resolve_2, reject_2) { __webpack_require__.e(/*! AMD require */ 16).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./auth-reset-password/auth-reset-password.module */ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.module.ts")]; (resolve_2).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_2.bind(this)); }).then(function (module) { return module.AuthResetPasswordModule; }); }
                },
            ]
        }
    ];
    var AuthenticationRoutingModule = /** @class */ (function () {
        function AuthenticationRoutingModule() {
        }
        AuthenticationRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AuthenticationRoutingModule);
        return AuthenticationRoutingModule;
    }());
    exports.AuthenticationRoutingModule = AuthenticationRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/authentication/authentication.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/pages/authentication/authentication.module.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./authentication-routing.module */ "./src/app/demo/pages/authentication/authentication-routing.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, authentication_routing_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthenticationModule = /** @class */ (function () {
        function AuthenticationModule() {
        }
        AuthenticationModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    authentication_routing_module_1.AuthenticationRoutingModule
                ],
                declarations: []
            })
        ], AuthenticationModule);
        return AuthenticationModule;
    }());
    exports.AuthenticationModule = AuthenticationModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=21.js.map