(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/admin-profile/admin-profile.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/admin-profile/admin-profile.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-alert type=\"{{type}}\" dismiss=\"true\" class=\"alert\" id=\"alert\" hidden>{{alertText}}</app-alert>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <app-card [options]=\"false\" [hidHeader]=\"true\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 \">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" [src]=\"imageurl\" alt=\"\">\r\n                        <button [disabled]=\"isSubmitted\" class=\"btn btn-primary\"\r\n                            (click)=\"exampleModalPopoversLabel.show()\">Changer</button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3 \">\r\n                    <form [formGroup]=\"updateForm\" (ngSubmit)=\"update()\" autocomplete=\"off\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Adresse Email</label>\r\n                            <input type=\"email\" class=\"form-control\" [readonly]=\"true\" [disabled]='true'\r\n                                value=\"{{email}}\" style=\"cursor: not-allowed;\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputNom1\">Nom</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"test\" formControlName=\"nom\"\r\n                                value=\"{{admin.nom}}\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputPrenom1\">Prénom</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"test\" formControlName=\"prenom\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputPhoneNumber1\">Numéro Téléphone</label>\r\n                            <input type=\"tel\" class=\"form-control\" id=\"test\" formControlName=\"phoneNumber\">\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" type=\"submit\">Mise à jour</button>\r\n                    </form>\r\n                </div>\r\n                <app-ui-modal #exampleModalPopoversLabel [containerClick]=\"false\">\r\n                    <div class=\"app-modal-header\">\r\n                        <h5 class=\"modal-title\">Changer la photo de profile</h5>\r\n                        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\"\r\n                            (click)=\"exampleModalPopoversLabel.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n                        <div class=\"col-md-9\">\r\n                            <div class=\"card\">\r\n                                <img class=\"card-img-top\" id=\"uploadedFile\" alt=\"\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"app-modal-body\">\r\n                        <div class=\"mb-4\">\r\n                            <p>{{Uploadingstatus}}</p>\r\n                        </div>\r\n                        <div>\r\n                            <h5>Choisir une image</h5>\r\n                            <div class=\"custom-file\">\r\n                                <input [disabled]=\"isUploading\" type=\"file\" class=\"custom-file-input\"\r\n                                    id=\"validatedCustomFile\" accept=\".jpg,.jpeg,.png\" (change)=\"fileLoaded($event)\">\r\n                                <label class=\"custom-file-label\" for=\"validatedCustomFile\">image (.jpg .jpeg .png)\r\n                                    ...</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"app-modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\r\n                            (click)=\"exampleModalPopoversLabel.hide()\">Fermer</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"fileIsSelected\" id=\"saveChangeBtn\"\r\n                            style=\"cursor: not-allowed;\" (click)=\"saveChanges()\">Sauvegarder les changement</button>\r\n                    </div>\r\n                </app-ui-modal>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <button class=\"btn btn-dark\" [disabled]=\"isSent\" (click)=\"sendResetPasswordMail()\">Envoyer un e-mail\r\n                        de réinitialisation du mot de passe</button>\r\n                </div>\r\n            </div>\r\n        </app-card>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/demo/dashboard/admin-profile/admin-profile-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/dashboard/admin-profile/admin-profile-routing.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./admin-profile.component */ "./src/app/demo/dashboard/admin-profile/admin-profile.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, admin_profile_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: admin_profile_component_1.AdminProfileComponent
        }
    ];
    var AdminProfileRoutingModule = /** @class */ (function () {
        function AdminProfileRoutingModule() {
        }
        AdminProfileRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AdminProfileRoutingModule);
        return AdminProfileRoutingModule;
    }());
    exports.AdminProfileRoutingModule = AdminProfileRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admin-profile/admin-profile.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/admin-profile/admin-profile.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2FkbWluLXByb2ZpbGUvYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/dashboard/admin-profile/admin-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/admin-profile/admin-profile.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./Admin-Profile-Service */ "./src/app/demo/dashboard/admin-profile/Admin-Profile-Service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, Constants_1, forms_1, auth_1, storage_1, http_1, Admin_Profile_Service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminProfileComponent = /** @class */ (function () {
        function AdminProfileComponent(formBuilder, AUTH, strorage, http) {
            this.formBuilder = formBuilder;
            this.AUTH = AUTH;
            this.strorage = strorage;
            this.http = http;
            this.reader = new FileReader();
            this.uploadedFile = "";
            this.email = Constants_1.Constants.authAdmin.email;
            this.isSent = false;
            this.isUploading = false;
            this.Uploadingstatus = "";
            this.imageurl = Constants_1.Constants.imgsrc;
            this.admin = Constants_1.Constants.admin;
            this.fileIsSelected = true;
            this.isSubmitted = false;
            this.UplodedImage = null;
        }
        AdminProfileComponent.prototype.ngOnInit = function () {
            this.updateForm = this.formBuilder.group({
                nom: [this.admin.nom],
                prenom: [this.admin.prenom],
                phoneNumber: [this.admin.phoneNumber]
            });
            this.reader.onload = function (e) {
                //@ts-ignore
                document.getElementById("uploadedFile").setAttribute('src', e.target.result.toString());
            };
        };
        AdminProfileComponent.prototype.fileLoaded = function (event) {
            this.fileIsSelected = event.target.files.length < 0 || !this.validateFileType(event.target.value);
            if (this.fileIsSelected) {
                document.getElementById("saveChangeBtn").style.cursor = "not-allowed";
                document.getElementById("uploadedFile").setAttribute('src', "");
            }
            else {
                document.getElementById("saveChangeBtn").style.cursor = "pointer";
                this.UplodedImage = event.target.files[0];
                this.reader.readAsDataURL(this.UplodedImage);
            }
        };
        AdminProfileComponent.prototype.validateFileType = function (fileName) {
            var isVerifyed = false;
            var idxDot = fileName.lastIndexOf(".") + 1;
            var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
            if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
                isVerifyed = true;
                this.imagPath = Constants_1.Constants.imageStorageRef + this.admin.id + ".jpg";
            }
            return isVerifyed;
        };
        AdminProfileComponent.prototype.update = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var time, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.validateForm(this.updateForm)) return [3 /*break*/, 2];
                            if (!!this.isSubmitted) return [3 /*break*/, 2];
                            this.isSubmitted = true;
                            time = new Date().getTime().toString();
                            this.type = "info";
                            this.alertText = "Mise à jour du profile";
                            document.getElementById("alert").hidden = false;
                            Constants_1.Constants.admin.id = Constants_1.Constants.admin.id;
                            Constants_1.Constants.admin.nom = this.updateForm.value.nom;
                            Constants_1.Constants.admin.prenom = this.updateForm.value.prenom;
                            Constants_1.Constants.admin.phoneNumber = this.updateForm.value.phoneNumber;
                            Constants_1.Constants.admin.profileImgUrl = Constants_1.Constants.admin.profileImgUrl ? Constants_1.Constants.admin.profileImgUrl : "";
                            return [4 /*yield*/, Admin_Profile_Service_1.AdminProfileService.updateAdminProfile(this.http, Constants_1.Constants.admin, Constants_1.Constants.refAdmin.adminUID)];
                        case 1:
                            result = _a.sent();
                            if (result.status) {
                                Admin_Profile_Service_1.AdminProfileService.updateNameandUrl(this.updateForm.value.nom + " " + this.updateForm.value.prenom, Constants_1.Constants.imgsrc);
                                this.isSubmitted = false;
                                this.type = "success";
                                this.alertText = "Profile est à jour";
                                document.getElementById("alert").hidden = false;
                            }
                            else {
                                this.type = "danger";
                                this.alertText = "Erreur dans la mise à jour du profile";
                                document.getElementById("alert").hidden = false;
                            }
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        AdminProfileComponent.prototype.validateForm = function (updateForm) {
            return (updateForm.value.nom !== "" && updateForm.value.prenom !== "" && updateForm.value.phoneNumber !== "");
        };
        AdminProfileComponent.prototype.sendResetPasswordMail = function () {
            var _this = this;
            this.isSent = true;
            Admin_Profile_Service_1.AdminProfileService.sendResetPassword(this.AUTH).then(function (e) {
                //<app-alert type="{{type}}" dismiss="true" class="alert" id="alert" hidden>{{alertText}}</app-alert>
                _this.type = "success";
                _this.alertText = "E-mail envoyé! Verifier vos emails";
                document.getElementById("alert").hidden = false;
                _this.isSent = false;
            });
        };
        AdminProfileComponent.prototype.saveChanges = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.isSubmitted = true;
                            this.type = "info";
                            this.alertText = "Téléchargement ...";
                            document.getElementById("alert").hidden = false;
                            this.Uploadingstatus = "Téléchargement ...";
                            this.isUploading = true;
                            document.getElementById("validatedCustomFile").value = "";
                            this.fileIsSelected = true;
                            document.getElementById("saveChangeBtn").style.cursor = "not-allowed";
                            return [4 /*yield*/, this.strorage.storage.ref(this.imagPath).put(this.UplodedImage)
                                    .catch(function (e) {
                                    _this.type = "danger";
                                    _this.alertText = "Erreur dans le téléchargement";
                                    document.getElementById("alert").hidden = false;
                                    _this.Uploadingstatus = "Erreur dans le téléchargement";
                                }).then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return tslib_1.__generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.strorage.storage.ref(this.imagPath).getDownloadURL()
                                                    .then(function (url) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                                    var geturl, result;
                                                    return tslib_1.__generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                geturl = url;
                                                                Constants_1.Constants.imgsrc = geturl;
                                                                Constants_1.Constants.admin.profileImgUrl = Constants_1.Constants.imgsrc;
                                                                this.type = "info";
                                                                this.alertText = "Mise à jour du profile ...";
                                                                document.getElementById("alert").hidden = false;
                                                                this.Uploadingstatus = "Mise à jour du profile ...";
                                                                return [4 /*yield*/, Admin_Profile_Service_1.AdminProfileService.updateAdminProfile(this.http, Constants_1.Constants.admin, Constants_1.Constants.refAdmin.adminUID)];
                                                            case 1:
                                                                result = _a.sent();
                                                                if (result.status) {
                                                                    this.type = "success";
                                                                    this.alertText = "Téléchargement et mise à jour términés!";
                                                                    document.getElementById("alert").hidden = false;
                                                                    this.Uploadingstatus = "Téléchargement et mise à jour términés!";
                                                                    this.imageurl = Constants_1.Constants.imgsrc;
                                                                }
                                                                else {
                                                                    this.type = "danger";
                                                                    this.alertText = "Erreur dans la mise à jour du profile";
                                                                    document.getElementById("alert").hidden = false;
                                                                    this.Uploadingstatus = "Erreur dans la mise à jour du profile";
                                                                }
                                                                this.isUploading = false;
                                                                Admin_Profile_Service_1.AdminProfileService.updateNameandUrl(this.updateForm.value.nom + " " + this.updateForm.value.prenom, Constants_1.Constants.imgsrc);
                                                                this.isSubmitted = false;
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminProfileComponent.ctorParameters = function () { return [
            { type: forms_1.FormBuilder },
            { type: auth_1.AngularFireAuth },
            { type: storage_1.AngularFireStorage },
            { type: http_1.HttpClient }
        ]; };
        AdminProfileComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-admin-profile',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./admin-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/admin-profile/admin-profile.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./admin-profile.component.scss */ "./src/app/demo/dashboard/admin-profile/admin-profile.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [forms_1.FormBuilder,
                auth_1.AngularFireAuth,
                storage_1.AngularFireStorage,
                http_1.HttpClient])
        ], AdminProfileComponent);
        return AdminProfileComponent;
    }());
    exports.AdminProfileComponent = AdminProfileComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admin-profile/admin-profile.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/dashboard/admin-profile/admin-profile.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./admin-profile-routing.module */ "./src/app/demo/dashboard/admin-profile/admin-profile-routing.module.ts"), __webpack_require__(/*! ./admin-profile.component */ "./src/app/demo/dashboard/admin-profile/admin-profile.component.ts"), __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! ./Admin-Profile-Service */ "./src/app/demo/dashboard/admin-profile/Admin-Profile-Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, admin_profile_routing_module_1, admin_profile_component_1, shared_module_1, forms_1, ng_bootstrap_1, Admin_Profile_Service_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminProfileModule = /** @class */ (function () {
        function AdminProfileModule() {
        }
        AdminProfileModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    admin_profile_routing_module_1.AdminProfileRoutingModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    http_1.HttpClientModule
                ],
                declarations: [
                    admin_profile_component_1.AdminProfileComponent,
                ],
                providers: [
                    Admin_Profile_Service_1.AdminProfileService
                ]
            })
        ], AdminProfileModule);
        return AdminProfileModule;
    }());
    exports.AdminProfileModule = AdminProfileModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=12.js.map