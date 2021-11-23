(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/add-new-admin/add-new-admin.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/add-new-admin/add-new-admin.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!adminGotTheRole\" class=\"col-sm-12\">\r\n    <app-alert type=\"danger\" dismiss=\"true\" class=\"alert\">\r\n        <h3>Vous ne posséde pas la permission d'ajouter un administrateur!<br>\r\n            Veuillez contacter votre administrateur pour cette permission</h3>\r\n    </app-alert>\r\n</div>\r\n<app-alert type=\"{{type}}\" dismiss=\"true\" class=\"alert\" id=\"alert\" hidden>{{alertText}}</app-alert>\r\n<div *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <app-card [options]=\"false\" cardTitle=\"Information de l'administrateur\">\r\n            <form autocomplete=\"off\" [formGroup]=\"AddForm\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 \">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputEmail1\">Adresse Email</label>\r\n                            <input type=\"email\" class=\"form-control\" formControlName=\"email\" required\r\n                                [readonly]=\"isSubmitted\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 \">\r\n                        <div class=\"form-group\">\r\n                            <label style=\"font: bold;\">Prénom</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"prenom\" required\r\n                                [readonly]=\"isSubmitted\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputNom1\">Nom</label>\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"nom\" required\r\n                                [readonly]=\"isSubmitted\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 \">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"exampleInputNumTel1\">Numéro Téléphone</label>\r\n                            <input type=\"tel\" class=\"form-control\" formControlName=\"phoneNumber\" required\r\n                                [readonly]=\"isSubmitted\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n        </app-card>\r\n    </div>\r\n    \r\n    <div class=\"col-sm-12\" style=\"margin-bottom: 20px;\">\r\n        <div *ngIf=\"adminCanSeeRoles\">\r\n            <app-roles></app-roles>\r\n        </div>\r\n\r\n        <button class=\"btn btn-primary\" style=\"margin-right: 5px;\" (click)=\"addAdmin()\" type=\"button\"\r\n            [disabled]=\"isSubmitted\">Ajouter Administrateur</button>\r\n        <button class=\"btn btn-secondary\" [disabled]=\"isSubmitted\" (click)=\"resetPage()\">Réinitialiser la page</button>\r\n    </div>\r\n\r\n    <!-- <div class=\"col-sm-12\" *ngIf=\"!adminCanSeeRoles\">\r\n        <app-alert type=\"danger\" dismiss=\"true\">\r\n            <h3>Vous ne posséde pas la permission d'affecter les rôles au administrateur!<br>\r\n                Vous pouvez que ajouter des administrateurs sans leurs rôles<br>\r\n                Veuillez contacter votre administrateur pour cette permission<br>\r\n\r\n            </h3>\r\n        </app-alert>\r\n    </div> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/roles/roles.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/roles/roles.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <app-card [options]=\"false\" cardClass=\"tab-card\" cardTitle=\"Rôles\">\r\n        <div class=\"mb-4\" *ngIf=\"!isLoaded\">\r\n            <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\"></ngb-progressbar>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" *ngFor=\"let roleGroup of rolesGroupKeys;let roleGroupIndex=index;\"\r\n                    title=\"{{roleGroup}}\" id=\"{{roleGroup}}\">\r\n                    <app-card cardTitle=\"{{roleGroup}}\" [options]=\"false\">\r\n                        <div *ngFor=\"let roles of rolesGroupe[roleGroupIndex];let rolesIndex=index;\">\r\n                            <div class=\"custom-control custom-switch mb-3\">\r\n                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{roles[1]}}\"\r\n                                    (change)=\"roleClick(roleGroupIndex,rolesIndex)\"\r\n                                    [checked]=\"roleCheck(roleGroupIndex, rolesIndex)\" [disabled]=\"isSubmitted\">\r\n                                <label class=\"custom-control-label\" for=\"{{roles[1]}}\">\r\n                                    {{roles[0]}}</label>\r\n                            </div>\r\n                        </div>\r\n                    </app-card>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </app-card>\r\n</div>");

/***/ }),

/***/ "./src/app/demo/dashboard/add-new-admin/Add-New-Admin-Service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/add-new-admin/Add-New-Admin-Service.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Constants_1, Service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddNewAdminService = /** @class */ (function () {
        function AddNewAdminService() {
        }
        AddNewAdminService.createNewAdmin = function (http, AddForm, roles) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, email, password, admin, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            email = AddForm.value.email;
                            password = this.generatePassword();
                            admin = {
                                nom: AddForm.value.nom,
                                prenom: AddForm.value.prenom,
                                phoneNumber: AddForm.value.phoneNumber,
                            };
                            return [4 /*yield*/, http.post(Constants_1.URLS.createNewAdmin, {
                                    "email": email,
                                    "password": password,
                                    "roles": roles,
                                    "admin": admin,
                                }, options).toPromise()];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        AddNewAdminService.generatePassword = function () {
            var allowedCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = allowedCharacters.length;
            var length = 15;
            var password = "";
            for (var i = 0; i < length; i++) {
                var charPos = Math.floor(Math.random() * charactersLength);
                password += allowedCharacters.charAt(charPos);
            }
            return password;
        };
        return AddNewAdminService;
    }());
    exports.AddNewAdminService = AddNewAdminService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/add-new-admin/add-new-admin-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/dashboard/add-new-admin/add-new-admin-routing.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./add-new-admin.component */ "./src/app/demo/dashboard/add-new-admin/add-new-admin.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, add_new_admin_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: add_new_admin_component_1.AddNewAdminComponent
        }
    ];
    var AddNewAdminRoutingModule = /** @class */ (function () {
        function AddNewAdminRoutingModule() {
        }
        AddNewAdminRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AddNewAdminRoutingModule);
        return AddNewAdminRoutingModule;
    }());
    exports.AddNewAdminRoutingModule = AddNewAdminRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/add-new-admin/add-new-admin.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/add-new-admin/add-new-admin.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2FkZC1uZXctYWRtaW4vYWRkLW5ldy1hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/demo/dashboard/add-new-admin/add-new-admin.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/add-new-admin/add-new-admin.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! ./Add-New-Admin-Service */ "./src/app/demo/dashboard/add-new-admin/Add-New-Admin-Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ../roles/RoleService */ "./src/app/demo/dashboard/roles/RoleService.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, auth_1, forms_1, Constants_1, Add_New_Admin_Service_1, http_1, RoleService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddNewAdminComponent = /** @class */ (function () {
        function AddNewAdminComponent(AUTH, formBuilder, http) {
            this.AUTH = AUTH;
            this.formBuilder = formBuilder;
            this.http = http;
            this.type = "";
            this.alertText = "";
            this.adminRoles = [];
            this.isSubmitted = false;
            this.adminGotTheRole = false;
            this.adminCanSeeRoles = false;
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.add_admin) !== -1) {
                this.adminGotTheRole = true;
                if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.Affect_Role_To_Admin) !== -1) {
                    this.adminCanSeeRoles = true;
                }
            }
        }
        AddNewAdminComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.AddForm = this.formBuilder.group({
                email: ['', forms_1.Validators.required],
                nom: ['', forms_1.Validators.required],
                prenom: ['', forms_1.Validators.required],
                phoneNumber: ['', forms_1.Validators.required]
            });
            RoleService_1.RoleService.get().subscribe(function (item) {
                if (item.adminRoles) {
                    _this.adminRoles = item.adminRoles;
                }
            });
        };
        AddNewAdminComponent.prototype.ngAfterViewInit = function () {
        };
        AddNewAdminComponent.prototype.addAdmin = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var email, regex, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            Constants_1.Constants.redirect = false;
                            if (!!this.AddForm.invalid) return [3 /*break*/, 4];
                            email = this.AddForm.value.email;
                            regex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
                            if (!email.match(regex)) return [3 /*break*/, 2];
                            this.isSubmitted = true;
                            this.showAlert("info", "Ajout de l'administrateur . . .");
                            return [4 /*yield*/, Add_New_Admin_Service_1.AddNewAdminService.createNewAdmin(this.http, this.AddForm, this.adminRoles)];
                        case 1:
                            result = _a.sent();
                            //@ts-ignore
                            if (result.status) {
                                this.AUTH.auth.sendPasswordResetEmail(email);
                                this.showAlert("success", "Administrateur ajouté!");
                                this.resetPage();
                            }
                            else {
                                //@ts-ignore
                                this.showAlert("danger", "Administrateur n'est pas ajouté");
                            }
                            this.isSubmitted = false;
                            return [3 /*break*/, 3];
                        case 2:
                            this.showAlert("danger", "Le format de l'e-mail est incorrect");
                            _a.label = 3;
                        case 3: return [3 /*break*/, 5];
                        case 4:
                            this.showAlert("danger", "Certains champs sont vides");
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AddNewAdminComponent.prototype.showAlert = function (type, text) {
            this.type = type;
            this.alertText = text;
            if (document.getElementById("alert"))
                document.getElementById("alert").hidden = false;
        };
        AddNewAdminComponent.prototype.resetPage = function () {
            this.AddForm.reset();
            this.isSubmitted = false;
            RoleService_1.RoleService.resetPage();
        };
        AddNewAdminComponent.ctorParameters = function () { return [
            { type: auth_1.AngularFireAuth },
            { type: forms_1.FormBuilder },
            { type: http_1.HttpClient }
        ]; };
        AddNewAdminComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-add-new-admin',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./add-new-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/add-new-admin/add-new-admin.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./add-new-admin.component.scss */ "./src/app/demo/dashboard/add-new-admin/add-new-admin.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [auth_1.AngularFireAuth,
                forms_1.FormBuilder,
                http_1.HttpClient])
        ], AddNewAdminComponent);
        return AddNewAdminComponent;
    }());
    exports.AddNewAdminComponent = AddNewAdminComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/add-new-admin/add-new-admin.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/dashboard/add-new-admin/add-new-admin.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./add-new-admin-routing.module */ "./src/app/demo/dashboard/add-new-admin/add-new-admin-routing.module.ts"), __webpack_require__(/*! ./add-new-admin.component */ "./src/app/demo/dashboard/add-new-admin/add-new-admin.component.ts"), __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! ../roles/roles.module */ "./src/app/demo/dashboard/roles/roles.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, add_new_admin_routing_module_1, add_new_admin_component_1, shared_module_1, forms_1, ng_bootstrap_1, http_1, angular_webstorage_service_1, roles_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddNewAdminModule = /** @class */ (function () {
        function AddNewAdminModule() {
        }
        AddNewAdminModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    add_new_admin_routing_module_1.AddNewAdminRoutingModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    http_1.HttpClientModule,
                    angular_webstorage_service_1.StorageServiceModule,
                    http_1.HttpClientModule,
                    roles_module_1.RolesModule,
                ],
                declarations: [
                    add_new_admin_component_1.AddNewAdminComponent,
                ],
                providers: [
                    http_1.HttpClient
                ]
            })
        ], AddNewAdminModule);
        return AddNewAdminModule;
    }());
    exports.AddNewAdminModule = AddNewAdminModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/roles/RoleService.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo/dashboard/roles/RoleService.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Service_1, Constants_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RoleService = /** @class */ (function () {
        function RoleService() {
        }
        RoleService.getAllRoles = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getAllRoles, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result.status ? result.roles : []];
                    }
                });
            });
        };
        RoleService.setAdminRoles = function (adminRoles) {
            this.fire.emit({ "setAdminRoles": true, adminRoles: adminRoles });
        };
        RoleService.get = function () {
            return this.fire;
        };
        RoleService.resetPage = function () {
            this.fire.emit({ "resetPage": true });
        };
        RoleService.initializeRole = function (admin) {
            this.fire.emit({ "initRoles": true, admin: admin });
        };
        RoleService.fire = new core_1.EventEmitter();
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], RoleService, "fire", void 0);
        RoleService = tslib_1.__decorate([
            core_1.Injectable()
        ], RoleService);
        return RoleService;
    }());
    exports.RoleService = RoleService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/roles/roles.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/demo/dashboard/roles/roles.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/dashboard/roles/roles.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/dashboard/roles/roles.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ./RoleService */ "./src/app/demo/dashboard/roles/RoleService.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, RoleService_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RolesComponent = /** @class */ (function () {
        function RolesComponent(http) {
            this.http = http;
            this.isLoaded = false;
            this.rolesGroupKeys = [];
            this.rolesGroupe = [[], [], [], []];
            this.roleGroupChecked = [[], [], [], []];
            this.adminRoles = [];
        }
        RolesComponent.prototype.ngOnInit = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _a;
                var _this = this;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4 /*yield*/, RoleService_1.RoleService.getAllRoles(this.http)];
                        case 1:
                            _a.snapshotRoles = _b.sent();
                            this.initRoles();
                            RoleService_1.RoleService.get().subscribe(function (item) {
                                if (item.resetPage) {
                                    _this.resetPage();
                                }
                                else if (item.initRoles) {
                                    var admin = item.admin;
                                    _this.initRoles(admin);
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        RolesComponent.prototype.ngAfterViewInit = function () {
        };
        RolesComponent.prototype.initRoles = function (admin) {
            this.adminRoles = [];
            this.roleGroupChecked = [[], [], [], []];
            this.rolesGroupe = [[], [], [], []];
            var allgroupedRoles = this.snapshotRoles;
            var groupedRoles = Object.values(allgroupedRoles);
            for (var i = 0; i < groupedRoles.length; i++) {
                var groupe = groupedRoles[i];
                var des = groupe.description;
                if (this.rolesGroupKeys.length < 4)
                    this.rolesGroupKeys.push(des);
                delete groupe.description;
                var roles = Object.values(groupe);
                for (var j = 0; j < roles.length; j++) {
                    this.rolesGroupe[i][j] = Object.values(roles[j]);
                    if (admin && admin.rolesGroupe) {
                        this.roleGroupChecked[i][j] = (admin.rolesGroupe.indexOf(this.rolesGroupe[i][j][1]) >= 0);
                        if (this.roleGroupChecked[i][j]) {
                            this.adminRoles.push(this.rolesGroupe[i][j][1]);
                        }
                    }
                    else {
                        this.roleGroupChecked[i][j] = false;
                    }
                }
            }
            this.isLoaded = true;
        };
        RolesComponent.prototype.roleCheck = function (roleGroupIndex, rolesIndex) {
            return this.roleGroupChecked[roleGroupIndex][rolesIndex];
        };
        RolesComponent.prototype.roleClick = function (roleGroupIndex, rolesIndex) {
            this.roleGroupChecked[roleGroupIndex][rolesIndex] = !this.roleGroupChecked[roleGroupIndex][rolesIndex];
            if (this.roleGroupChecked[roleGroupIndex][rolesIndex]) {
                this.adminRoles.push(this.rolesGroupe[roleGroupIndex][rolesIndex][1]);
            }
            else {
                var index = this.adminRoles.indexOf(this.rolesGroupe[roleGroupIndex][rolesIndex][1]);
                this.adminRoles.splice(index, 1);
            }
            RoleService_1.RoleService.setAdminRoles(this.adminRoles);
        };
        RolesComponent.prototype.resetPage = function () {
            this.roleGroupChecked = [[], [], [], []];
            this.adminRoles = [];
        };
        RolesComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient }
        ]; };
        RolesComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-roles',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/roles/roles.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./roles.component.scss */ "./src/app/demo/dashboard/roles/roles.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
        ], RolesComponent);
        return RolesComponent;
    }());
    exports.RolesComponent = RolesComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/roles/roles.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/dashboard/roles/roles.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./roles.component */ "./src/app/demo/dashboard/roles/roles.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, roles_component_1, shared_module_1, forms_1, ng_bootstrap_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RolesModule = /** @class */ (function () {
        function RolesModule() {
        }
        RolesModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [roles_component_1.RolesComponent],
                imports: [
                    common_1.CommonModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    http_1.HttpClientModule,
                ],
                exports: [
                    roles_component_1.RolesComponent
                ]
            })
        ], RolesModule);
        return RolesModule;
    }());
    exports.RolesModule = RolesModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=9.js.map