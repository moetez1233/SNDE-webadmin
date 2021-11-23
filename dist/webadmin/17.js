(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\r\n    <div class=\"auth-content\">\r\n        <div class=\"card\">\r\n            <div class=\"row align-items-center text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card-body\">\r\n                        <img src=\"assets/images/circle-cropped.png\" alt=\"\" class=\"img-fluid mb-4\">\r\n                        <h4 class=\"mb-3 f-w-400\">Connexion</h4>\r\n                        <form [formGroup]=\"registeForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\r\n                                </div>\r\n                                <input type=\"email\" required class=\"form-control\" formControlName=\"email\" placeholder=\"Adresse Email\">\r\n                            </div>\r\n                            <div class=\"input-group mb-2\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\r\n                                </div>\r\n                                <input type=\"password\" required class=\"form-control\" formControlName=\"password\" placeholder=\"Mot de passe\">\r\n                            </div>\r\n                            <app-alert type=\"{{type}}\" dismiss=\"true\" class=\"alert\" id=\"alert\" hidden>{{alertText}}</app-alert>\r\n                            <button class=\"btn btn-block btn-primary mb-4\" type=\"submit\" [disabled]=\"isSubmitted\">Se Connecter</button>\r\n                            <p class=\"mb-2 text-muted\">Mot de passe oublié ? <a [routerLink]=\"['/auth/reset-password']\" class=\"f-w-400\">Réinitialiser</a></p>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, auth_signin_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: auth_signin_component_1.AuthSigninComponent
        }
    ];
    var AuthSigninRoutingModule = /** @class */ (function () {
        function AuthSigninRoutingModule() {
        }
        AuthSigninRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AuthSigninRoutingModule);
        return AuthSigninRoutingModule;
    }());
    exports.AuthSigninRoutingModule = AuthSigninRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 25px;\n  box-shadow: 0px 0px 20px 0px grey;\n}\n\n.auth-wrapper {\n  background-color: white;\n}\n\nimg {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoLXNpZ25pbi9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXGF1dGhlbnRpY2F0aW9uXFxhdXRoLXNpZ25pblxcYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWduaW4vYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLGlDQUFBO0FDQUo7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoLXNpZ25pbi9hdXRoLXNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IGdyZXk7XHJcbn1cclxuLmF1dGgtd3JhcHBlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxNTBweDtcclxufSIsIi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCBncmV5O1xufVxuXG4uYXV0aC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, auth_1, router_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthSigninComponent = /** @class */ (function () {
        function AuthSigninComponent(formBuilder, AUTH, router) {
            this.formBuilder = formBuilder;
            this.AUTH = AUTH;
            this.router = router;
            this.submitted = false;
            this.isSubmitted = false;
        }
        AuthSigninComponent.prototype.ngOnInit = function () {
            this.registeForm = this.formBuilder.group({
                email: ['', forms_1.Validators.required],
                password: ['', forms_1.Validators.required]
            });
        };
        AuthSigninComponent.prototype.onSubmit = function () {
            var _this = this;
            if (!this.isSubmitted) {
                this.isSubmitted = true;
                if (!this.registeForm.invalid) {
                    var EMAIL = this.registeForm.value.email;
                    var PASSWORD = this.registeForm.value.password;
                    this.AUTH.auth.signInWithEmailAndPassword(EMAIL, PASSWORD).then(function (e) {
                        _this.submitted = true;
                        Constants_1.Constants.redirect = true;
                        _this.router.navigateByUrl('');
                    }).catch(function (e) {
                        switch (e.code) {
                            case "auth/invalid-email":
                                _this.alertText = "Adresse email est invalide";
                                break;
                            case "auth/user-disabled":
                                _this.alertText = "Ce compte est désactivé.\nVeuillez contacter votre administrateur pour plus de détails";
                                break;
                            case "auth/user-not-found":
                            case "auth/wrong-password":
                                _this.alertText = "Adresse email ou mot de passe sont incorrects";
                                break;
                            default:
                                _this.alertText = "Une erreur s'est produit. Réessayez dans quelques minutes";
                                break;
                        }
                        _this.type = "danger";
                        document.getElementById("alert").hidden = false;
                        _this.isSubmitted = false;
                    });
                }
                else
                    this.isSubmitted = false;
            }
        };
        AuthSigninComponent.ctorParameters = function () { return [
            { type: forms_1.FormBuilder },
            { type: auth_1.AngularFireAuth },
            { type: router_1.Router }
        ]; };
        AuthSigninComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-auth-signin',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./auth-signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./auth-signin.component.scss */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder, auth_1.AngularFireAuth, router_1.Router])
        ], AuthSigninComponent);
        return AuthSigninComponent;
    }());
    exports.AuthSigninComponent = AuthSigninComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./auth-signin-routing.module */ "./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts"), __webpack_require__(/*! ./auth-signin.component */ "./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, auth_signin_routing_module_1, auth_signin_component_1, forms_1, ng_bootstrap_1, shared_module_1, angular_webstorage_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthSigninModule = /** @class */ (function () {
        function AuthSigninModule() {
        }
        AuthSigninModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    auth_signin_routing_module_1.AuthSigninRoutingModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    shared_module_1.SharedModule,
                    angular_webstorage_service_1.StorageServiceModule,
                ],
                declarations: [auth_signin_component_1.AuthSigninComponent]
            })
        ], AuthSigninModule);
        return AuthSigninModule;
    }());
    exports.AuthSigninModule = AuthSigninModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=17.js.map