(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\r\n    <div class=\"auth-content\">\r\n        <div class=\"card\">\r\n            <div class=\"row align-items-center text-center\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card-body\">\r\n                        <img src=\"assets/images/circle-cropped.png\" alt=\"\" class=\"img-fluid mb-4\">\r\n                        <h4 class=\"mb-3 f-w-400\">Réinitialiser votre mot de passe</h4>\r\n                        <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n                            <div class=\"input-group mb-2\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\r\n                                </div>\r\n                                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Adresse Email\">\r\n                            </div>\r\n                            <app-alert type=\"{{type}}\" dismiss=\"true\" class=\"alert\" id=\"alert\" hidden>{{alertText}}</app-alert>\r\n                            <button class=\"btn btn-block btn-primary mb-4\" type=\"submit\" [disabled]=\"isSubmitted\">Réinitialiser le mot de passe</button>\r\n                            <p class=\"mb-0 text-muted\"><a [routerLink]=\"['/auth/signin']\" class=\"f-w-400\">Se Connecter</a></p>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password-routing.module.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./auth-reset-password.component */ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, auth_reset_password_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: auth_reset_password_component_1.AuthResetPasswordComponent
        }
    ];
    var AuthResetPasswordRoutingModule = /** @class */ (function () {
        function AuthResetPasswordRoutingModule() {
        }
        AuthResetPasswordRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AuthResetPasswordRoutingModule);
        return AuthResetPasswordRoutingModule;
    }());
    exports.AuthResetPasswordRoutingModule = AuthResetPasswordRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  border-radius: 25px;\n  box-shadow: 0px 0px 20px 0px grey;\n}\n\n.auth-wrapper {\n  background-color: white;\n}\n\nimg {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoLXJlc2V0LXBhc3N3b3JkL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFxkZW1vXFxwYWdlc1xcYXV0aGVudGljYXRpb25cXGF1dGgtcmVzZXQtcGFzc3dvcmRcXGF1dGgtcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1yZXNldC1wYXNzd29yZC9hdXRoLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1yZXNldC1wYXNzd29yZC9hdXRoLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCBncmV5O1xyXG59XHJcbi5hdXRoLXdyYXBwZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbn0iLCIuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggZ3JleTtcbn1cblxuLmF1dGgtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, forms_1, auth_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthResetPasswordComponent = /** @class */ (function () {
        function AuthResetPasswordComponent(formBuilder, AUTH, router) {
            this.formBuilder = formBuilder;
            this.AUTH = AUTH;
            this.router = router;
            this.isSubmitted = false;
        }
        AuthResetPasswordComponent.prototype.ngOnInit = function () {
            this.resetForm = this.formBuilder.group({
                email: ['', forms_1.Validators.required],
            });
        };
        AuthResetPasswordComponent.prototype.onSubmit = function () {
            var _this = this;
            if (!this.isSubmitted) {
                if (!this.resetForm.invalid) {
                    this.isSubmitted = true;
                    var EMAIL = this.resetForm.value.email;
                    this.AUTH.auth.sendPasswordResetEmail(EMAIL).then(function (e) {
                        _this.type = "success";
                        _this.alertText = "Email envoyé. Veuillez verifier vos emails";
                    }).catch(function (e) {
                        switch (e.code) {
                            case "auth/invalid-email":
                                _this.alertText = "Adresse email est invalide";
                                break;
                            case "auth/user-disabled":
                                _this.alertText = "Ce compte est désactivé.\nVeuillez contacter votre administrateur pour plus de détails";
                                break;
                            case "auth/user-not-found":
                                _this.alertText = "Adresse email n'est pas associé a un compte";
                                break;
                            default:
                                _this.alertText = "Une erreur s'est produit. Réessayez dans quelques minutes";
                                break;
                        }
                        _this.type = "danger";
                    }).finally(function () {
                        _this.isSubmitted = false;
                        document.getElementById("alert").hidden = false;
                    });
                }
                else
                    this.isSubmitted = false;
            }
        };
        AuthResetPasswordComponent.ctorParameters = function () { return [
            { type: forms_1.FormBuilder },
            { type: auth_1.AngularFireAuth },
            { type: router_1.Router }
        ]; };
        AuthResetPasswordComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-auth-reset-password',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./auth-reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./auth-reset-password.component.scss */ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder, auth_1.AngularFireAuth, router_1.Router])
        ], AuthResetPasswordComponent);
        return AuthResetPasswordComponent;
    }());
    exports.AuthResetPasswordComponent = AuthResetPasswordComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.module.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./auth-reset-password-routing.module */ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password-routing.module.ts"), __webpack_require__(/*! ./auth-reset-password.component */ "./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, auth_reset_password_routing_module_1, auth_reset_password_component_1, forms_1, ng_bootstrap_1, shared_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthResetPasswordModule = /** @class */ (function () {
        function AuthResetPasswordModule() {
        }
        AuthResetPasswordModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    auth_reset_password_routing_module_1.AuthResetPasswordRoutingModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    shared_module_1.SharedModule,
                ],
                declarations: [auth_reset_password_component_1.AuthResetPasswordComponent]
            })
        ], AuthResetPasswordModule);
        return AuthResetPasswordModule;
    }());
    exports.AuthResetPasswordModule = AuthResetPasswordModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=16.js.map