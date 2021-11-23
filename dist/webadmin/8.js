(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/add-releveur/add-releveur.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/add-releveur/add-releveur.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\">\r\n    <app-card [options]=\"false\" cardTitle=\"Ajoutes les informations du releveur\">\r\n        <!--\r\n        <form autocomplete=\"off\" [formGroup]=\"AddForm\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputNom1\" style=\"text-align: center;\">Nom</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"nom\" required [readonly]=\"isSubmitted\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputNom1\">Prenom</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlPrenom=\"prenom\" required [readonly]=\"isSubmitted\">\r\n\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputNom1\">Numéro Téléphone</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlPrenom=\"phoneNumber\" required [readonly]=\"isSubmitted\">\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    -->\r\n        <!--\r\n        <button class=\"btn btn-primary\" style=\"margin-right: 5px;\" type=\"button\" [disabled]=\"isSubmitted\">Ajouter Administrateur</button>\r\n    -->\r\n\r\n\r\n        <form action=\"javascript:\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label\">Nom</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"nom\" class=\"form-control\" #RelveNom placeholder=\"Nom\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputPassword3\" class=\"col-sm-3 col-form-label\">Prenom</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"prenom\" class=\"form-control\" #RelvPrenom placeholder=\"Prénom\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"inputPassword3\" class=\"col-sm-3 col-form-label\">Numéro Téléphone</label>\r\n                <div class=\"col-sm-6\">\r\n                    <input type=\"string\" class=\"form-control\" #RelvNumero placeholder=\"Numéro Téléphone\">\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-sm-10\">\r\n                    <button [disabled]=\"isSubmitted\" class=\"btn btn-primary\" (click)=\"addRelveur(RelveNom,RelvPrenom,RelvNumero)\">Ajouter Rouleuveur</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n\r\n    </app-card>\r\n</div>");

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

/***/ "./src/Models/User.ts":
/*!****************************!*\
  !*** ./src/Models/User.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! ./language */ "./src/Models/language.ts"), __webpack_require__(/*! ./wallet */ "./src/Models/wallet.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, language_1, wallet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var User = /** @class */ (function () {
        function User() {
            this.approved = 0;
            this.status = 0;
            this.balance = "0";
            this.currentLanguage = language_1.Language.French;
            this.wallet = new wallet_1.Wallet();
        }
        return User;
    }());
    exports.User = User;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Models/language.ts":
/*!********************************!*\
  !*** ./src/Models/language.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Language;
    (function (Language) {
        Language["French"] = "fr";
        Language["English"] = "en";
        Language["Arabic"] = "ar";
    })(Language = exports.Language || (exports.Language = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Models/wallet.ts":
/*!******************************!*\
  !*** ./src/Models/wallet.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Wallet = /** @class */ (function () {
        function Wallet() {
            this.operationLimit = 1;
            this.periodLimit = 1;
            this.transferLimit = 1;
            this.withdrawalLimit = 1;
            this.operation = 1;
            this.period = 1;
            this.transfer = 1;
            this.withdrawal = 1;
            this.operations = 1;
            this.periods = 1;
            this.transfers = 1;
            this.withdrawals = 1;
        }
        return Wallet;
    }());
    exports.Wallet = Wallet;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/add-releveur/add-releveur.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/add-releveur/add-releveur.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2FkZC1yZWxldmV1ci9hZGQtcmVsZXZldXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/demo/dashboard/add-releveur/add-releveur.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/add-releveur/add-releveur.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/User */ "./src/Models/User.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, User_1, Service_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddReleveurComponent = /** @class */ (function () {
        function AddReleveurComponent(http) {
            this.http = http;
        }
        AddReleveurComponent.prototype.ngOnInit = function () {
        };
        AddReleveurComponent.prototype.addRelveur = function (infoNom, InfoPrenom, InfoNumero) {
            if ((infoNom.value !== "") && (InfoPrenom.value !== "") && (InfoNumero.value !== "")) {
                var Userreleveur = new User_1.User();
                Userreleveur.nom = infoNom.value;
                Userreleveur.prenom = InfoPrenom.value;
                Userreleveur.phoneNumber = InfoNumero.value;
                Userreleveur.isreleveur = 1;
                console.log(Userreleveur.phoneNumber);
                //console.log(Userreleveur);
                //Userreleveur.id="58Z5FZTHZwUlaZ7SSpDccL16XpJ3"
                /* ============================= codage time ============================ */
                var temp = Math.round(new Date().getTime() / 1000); //return timestemp
                var tempcod = btoa(temp.toString()); //code le timestemp
                //alert(tempcod.slice(0,tempcod.search("=")))
                /* = ============================== end codage time ============================*/
                /* ======================================= codage numero ===========================  */
                if (Userreleveur.phoneNumber.toString().slice(0, 1) == "+") {
                    console.log("il ya + ");
                    var numTelCod = btoa(Userreleveur.phoneNumber.toString().replace("+", "00")); //remplace + par 00
                    //let numTelCod=btoa(Userreleveur.numeoTelephon.toString()) 
                    var idfinal = numTelCod.concat(tempcod);
                    var telcodef = idfinal.slice(0, numTelCod.search("="));
                    Userreleveur.id = telcodef;
                    console.log(telcodef);
                }
                else {
                    var numTelCod = btoa(Userreleveur.phoneNumber.toString());
                    //console.log(numTelCod);
                    var idfinal = numTelCod.concat(tempcod);
                    var telcodef = idfinal.slice(0, numTelCod.search("="));
                    Userreleveur.id = telcodef;
                    console.log(telcodef);
                }
                /* ========================== end codage numero ========================== */
                Service_1.Service.sendReleveur(this.http, Userreleveur).then(function (result) {
                    if (result.status) {
                        InfoPrenom.value = "";
                        infoNom.value = "";
                        InfoNumero.value = "";
                    }
                });
            }
        };
        AddReleveurComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient }
        ]; };
        AddReleveurComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-add-releveur',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./add-releveur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/add-releveur/add-releveur.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./add-releveur.component.scss */ "./src/app/demo/dashboard/add-releveur/add-releveur.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
        ], AddReleveurComponent);
        return AddReleveurComponent;
    }());
    exports.AddReleveurComponent = AddReleveurComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/add-releveur/add-releveur.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo/dashboard/add-releveur/add-releveur.module.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./add-releveur.component */ "./src/app/demo/dashboard/add-releveur/add-releveur.component.ts"), __webpack_require__(/*! ./add-releveurs-routing.module */ "./src/app/demo/dashboard/add-releveur/add-releveurs-routing.module.ts"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ../roles/roles.module */ "./src/app/demo/dashboard/roles/roles.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, add_releveur_component_1, add_releveurs_routing_module_1, ng_bootstrap_1, shared_module_1, forms_1, roles_module_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddReleveurModule = /** @class */ (function () {
        function AddReleveurModule() {
        }
        AddReleveurModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [add_releveur_component_1.AddReleveurComponent],
                imports: [
                    common_1.CommonModule,
                    add_releveurs_routing_module_1.addreleveurRoutingModule,
                    shared_module_1.SharedModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    roles_module_1.RolesModule,
                    http_1.HttpClientModule
                ]
            })
        ], AddReleveurModule);
        return AddReleveurModule;
    }());
    exports.AddReleveurModule = AddReleveurModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/add-releveur/add-releveurs-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/add-releveur/add-releveurs-routing.module.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./add-releveur.component */ "./src/app/demo/dashboard/add-releveur/add-releveur.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, add_releveur_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: add_releveur_component_1.AddReleveurComponent
        }
    ];
    var addreleveurRoutingModule = /** @class */ (function () {
        function addreleveurRoutingModule() {
        }
        addreleveurRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], addreleveurRoutingModule);
        return addreleveurRoutingModule;
    }());
    exports.addreleveurRoutingModule = addreleveurRoutingModule;
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
//# sourceMappingURL=8.js.map