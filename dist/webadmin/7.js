(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/admins-list/admins-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/admins-list/admins-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-alert type=\"{{type}}\" dismiss=\"true\" class=\"alert\" id=\"alert\" hidden>{{alertText}}</app-alert>\r\n<div *ngIf=\"!adminGotTheRole\" class=\"col-sm-12\">\r\n    <app-alert type=\"danger\" dismiss=\"true\" class=\"alert\">\r\n        <h3>Vous ne posséde pas la permission de consulter les administrateurs!<br> Veuillez contacter votre administrateur pour cette permission</h3>\r\n    </app-alert>\r\n</div>\r\n<div *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div class=\"col-sm-12 m-b-15\">\r\n        <div id=\"main-search\" class=\"main-search open\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" (keyup)=\"verifyingSearch($event)\">\r\n                <span class=\"input-group-append search-btn btn btn-primary feather icon-search input-group-text\" (click)=\"Search()\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <app-card [options]=\"false\" cardTitle=\"Liste des Administrateurs\">\r\n            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\" [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n                <div class=\"col-md-12\">\r\n                    <ng-container>\r\n                        <ng-container *ngFor=\"let admin of admins;let adminIndex=index;\">\r\n                            <app-alert style=\"cursor: pointer;\" [type]=\"adminsColor[adminIndex]\" (mouseenter)=\"hoverOn(adminIndex)\" (mouseleave)=\"hoverOff(adminIndex)\" (click)=\"adminClicked(adminIndex)\">\r\n\r\n                                <div class=\"row\" style=\"margin-left: -20px;margin-right: -10px;\">\r\n                                    <div id=\"searche\"></div>\r\n                                    <i class=\"col-md-12 text-left\">{{admin.userName}} </i>\r\n                                </div>\r\n                            </app-alert>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </app-card>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <app-card [options]=\"false\" cardTitle=\"Details de l'Administrateur\">\r\n            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\" [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n                <div class=\"table-responsive\" *ngIf=\"adminIndex!=-1\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <th>Statut</th>\r\n                                <th>{{clickedAdmin.accountStatut === 1 ?'Débloqué' : 'Bloqué'}}</th>\r\n                                <th style=\"text-align: right;\" *ngIf=\"adminCanBlockUnblock\">\r\n                                    <input style=\"width: 93px;\" type=\"button\" value=\"{{clickedAdmin.accountStatut === 1 ?'Bloquer' : 'Débloquer'}}\" class=\"btn {{clickedAdmin.accountStatut === 1 ?'btn-danger' : 'btn-success'}}\" (click)=\"blockOrUnblockAdmin($event)\">\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Administrateur Master</th>\r\n                                <th>{{clickedAdmin.isMaster ?'Oui' : 'Non'}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Prénom</th>\r\n                                <th>{{clickedAdmin.prenom}}</th>\r\n                                <th>\r\n                                    <!-- <img src=\"assets/images/showInfo.png\" #justifyingImage -->\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Nom</th>\r\n                                <th>{{clickedAdmin.nom}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                    <!-- <img src=\"assets/images/showInfo.png\" #justifyingImage> -->\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Numéro de Téléphone</th>\r\n                                <th>{{clickedAdmin.phoneNumber}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                    <img src=\"assets/images/showInfo.png\" #justifyingImage1 (click)=\"justifying('phoneNumber','admin',justificationModal,justification,justifyingImage1)\">\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Adresse Email</th>\r\n                                <th>{{clickedRef.email}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                    <img src=\"assets/images/showInfo.png\" #justifyingImage2 (click)=\"justifying('email','ref',justificationModal,justification,justifyingImage2)\">\r\n                                </th>\r\n                            </tr>\r\n\r\n                            <tr>\r\n                                <th>Rôle</th>\r\n                                <th>{{clickedAdmin.rolesGroupe ? clickedAdmin.rolesGroupe.length : 0}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                    <img *ngIf=\"adminCanChangeRoles\" src=\"assets/images/edit.png\" (click)=\"editRolesPop.show();editRoles()\">\r\n                                </th>\r\n                            </tr>\r\n                            <tr>\r\n                                <th>Date de création</th>\r\n                                <th>{{timestampToDate(clickedAdmin.created)}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                </th>\r\n                            </tr>\r\n                            <tr *ngIf=\"clickedAdmin.updated\">\r\n                                <th>Derniere mise à jour</th>\r\n                                <th>{{timestampToDate(clickedAdmin.updated)}}</th>\r\n                                <th style=\"text-align: right;\">\r\n                                </th>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </app-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-ui-modal #editRolesPop [dialogClass]=\"'modal-xl'\" [containerClick]=\"false\">\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"container\" *ngIf=\"adminGotTheRole\">\r\n            <app-roles></app-roles>\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"editRolesPop.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" id=\"saveChangeBtn\" (click)=\"saveChanges(editRolesPop)\">Save\r\n      changes</button>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n<app-ui-modal #justificationModal [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Justification pour voir la donnée cachée </h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <input type=\"text\" class=\"form-control\" #justification placeholder=\"Justification\">\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal.hide();justification.value=''\">Fermer</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"justify(justificationModal,justification)\">Justifier</button>\r\n    </div>\r\n</app-ui-modal>");

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

/***/ "./src/Models/Administrateur.ts":
/*!**************************************!*\
  !*** ./src/Models/Administrateur.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Administrateur = /** @class */ (function () {
        function Administrateur() {
            this.rolesGroupe = [];
        }
        return Administrateur;
    }());
    exports.Administrateur = Administrateur;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Models/Justification.ts":
/*!*************************************!*\
  !*** ./src/Models/Justification.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Justification = /** @class */ (function () {
        function Justification() {
            var time = new Date().getTime();
            this.idAdmin = Constants_1.Constants.admin.id;
            this.idJus = Constants_1.Constants.admin.id + time;
            this.created = time.toString();
        }
        return Justification;
    }());
    exports.Justification = Justification;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Models/Ref.ts":
/*!***************************!*\
  !*** ./src/Models/Ref.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Reference = /** @class */ (function () {
        function Reference() {
        }
        return Reference;
    }());
    exports.Reference = Reference;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admins-list/AdminListService.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/dashboard/admins-list/AdminListService.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Service_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminListService = /** @class */ (function () {
        function AdminListService() {
        }
        AdminListService.getAdminsAndRefs = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getAdminsAndRefs, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return AdminListService;
    }());
    exports.AdminListService = AdminListService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admins-list/admins-list-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/dashboard/admins-list/admins-list-routing.module.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./admins-list.component */ "./src/app/demo/dashboard/admins-list/admins-list.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, admins_list_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: admins_list_component_1.AdminListComponent
        }
    ];
    var AdminsListRoutingModule = /** @class */ (function () {
        function AdminsListRoutingModule() {
        }
        AdminsListRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AdminsListRoutingModule);
        return AdminsListRoutingModule;
    }());
    exports.AdminsListRoutingModule = AdminsListRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admins-list/admins-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/admins-list/admins-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 25px;\n  cursor: pointer;\n}\n\ni {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\n.row {\n  margin: 0px;\n}\n\nth {\n  width: 50%;\n  border: 0;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvYWRtaW5zLWxpc3QvRDpcXGV0YWFpaVxccHJvamVjdDJcXFNOREVcXFNOREUtd2ViYWRtaW4vc3JjXFxhcHBcXGRlbW9cXGRhc2hib2FyZFxcYWRtaW5zLWxpc3RcXGFkbWlucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9hZG1pbnMtbGlzdC9hZG1pbnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENJO0VBQ0ksWUFBQTtBQ0VSOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9hZG1pbnMtbGlzdC9hZG1pbnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDoyNXB4OyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuaXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFwcC1hbGVydHtcclxuICAgICYuYWxlcnR7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxudGh7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59IiwiaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1hbGVydC5hbGVydCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG50aCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMC41cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/dashboard/admins-list/admins-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/dashboard/admins-list/admins-list.component.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/Administrateur */ "./src/Models/Administrateur.ts"), __webpack_require__(/*! src/Models/Ref */ "./src/Models/Ref.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! ../roles/RoleService */ "./src/app/demo/dashboard/roles/RoleService.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ../admin-profile/Admin-Profile-Service */ "./src/app/demo/dashboard/admin-profile/Admin-Profile-Service.ts"), __webpack_require__(/*! ./AdminListService */ "./src/app/demo/dashboard/admins-list/AdminListService.ts"), __webpack_require__(/*! src/Models/Justification */ "./src/Models/Justification.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, Administrateur_1, Ref_1, Constants_1, RoleService_1, http_1, Admin_Profile_Service_1, AdminListService_1, Justification_1, Service_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminListComponent = /** @class */ (function () {
        function AdminListComponent(http, titleService) {
            this.http = http;
            this.titleService = titleService;
            this.admins = [];
            this.listeadmins = [];
            this.refs = [];
            this.displayAdmins = [];
            this.displayRefs = [];
            this.searching = false;
            this.isLoading = true;
            this.adminRoles = [];
            this.type = "";
            this.alertText = "";
            this.adminIndex = -1;
            this.clickedAdmin = new Administrateur_1.Administrateur();
            this.clickedRef = new Ref_1.Reference();
            this.window = window;
            this.adminsColor = [];
            this.adminGotTheRole = false;
            this.adminCanChangeRoles = false;
            this.adminCanBlockUnblock = false;
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.admin_Consultation) !== -1) {
                this.adminGotTheRole = true;
            }
        }
        AdminListComponent.prototype.verifyRoles = function () {
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.Edit_Admin_Roles) !== -1) {
                this.adminCanChangeRoles = true;
            }
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.block_unblock_admin) !== -1) {
                this.adminCanBlockUnblock = true;
            }
        };
        AdminListComponent.prototype.ngOnInit = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.titleService.setTitle("Consulter les Administrateurs");
                    return [2 /*return*/];
                });
            });
        };
        AdminListComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.adminGotTheRole) {
                this.getAllAdmin();
                RoleService_1.RoleService.get().subscribe(function (item) {
                    if (item.setAdminRoles) {
                        _this.adminRoles = item.adminRoles;
                    }
                });
            }
        };
        AdminListComponent.prototype.initialize = function (adminIndex) {
            this.adminRoles = [];
            if (!this.admins[adminIndex].rolesGroupe)
                this.admins[adminIndex].rolesGroupe = [];
        };
        /*async getAllAdmin(search?:string) {
          let result = (await AdminListService.getAdminsAndRefs(this.http));
          if (result.status) {
            if(!this.searching){}
            this.admins = Object.values(result.administrateurs);
            this.refs = Object.values(result.references)
            this.displayAdmins = Object.values(result.displayAdministrateurs)
            this.displayRefs = Object.values(result.displayReferences)
            this.refs.splice(this.getAdminIndex(Constants.admin, this.admins), 1);
            this.displayAdmins.splice(this.getAdminIndex(Constants.admin, this.admins), 1);
            this.displayRefs.splice(this.getAdminIndex(Constants.admin, this.admins), 1);
            this.admins.splice(this.getAdminIndex(Constants.admin, this.admins), 1);
            for (let i = 0; i < this.displayAdmins.length; i++) {
              this.displayAdmins[i] = this.createNewBlankAdmin(i).admin;
              this.displayRefs[i] = this.createNewBlankAdmin(i).ref;
              this.adminsColor[i] = 'light'
            }
            this.isLoading = false;
          }
      
      
        }*/
        AdminListComponent.prototype.getAllAdmin = function (search) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var result, i, i;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, AdminListService_1.AdminListService.getAdminsAndRefs(this.http)];
                        case 1:
                            result = (_a.sent());
                            if (result.status) {
                                this.admins = [];
                                this.listeadmins = Object.values(result.administrateurs);
                                if (!this.searching) {
                                    this.admins = Object.values(result.administrateurs);
                                    this.refs = Object.values(result.references);
                                    this.displayAdmins = Object.values(result.displayAdministrateurs);
                                    this.displayRefs = Object.values(result.displayReferences);
                                    this.refs.splice(this.getAdminIndex(Constants_1.Constants.admin, this.admins), 1);
                                    this.displayAdmins.splice(this.getAdminIndex(Constants_1.Constants.admin, this.admins), 1);
                                    this.displayRefs.splice(this.getAdminIndex(Constants_1.Constants.admin, this.admins), 1);
                                    this.admins.splice(this.getAdminIndex(Constants_1.Constants.admin, this.admins), 1);
                                    for (i = 0; i < this.displayAdmins.length; i++) {
                                        this.displayAdmins[i] = this.createNewBlankAdmin(i).admin;
                                        this.displayRefs[i] = this.createNewBlankAdmin(i).ref;
                                        this.adminsColor[i] = 'light';
                                    }
                                }
                                else {
                                    for (i = 0; i < this.listeadmins.length; i++) {
                                        if (this.listeadmins[i].userName == search) {
                                            this.admins[this.admins.length] = this.listeadmins[i];
                                            this.displayAdmins[this.admins.length] = this.listeadmins[i];
                                        }
                                    }
                                }
                                this.isLoading = false;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        AdminListComponent.prototype.createNewBlankAdmin = function (index) {
            var admin = this.displayAdmins[index];
            var ref = this.displayRefs[index];
            if (admin.phoneNumber)
                admin.phoneNumber = "***************";
            ref.email = "***************";
            return { admin: admin, ref: ref };
        };
        AdminListComponent.prototype.adminClicked = function (index) {
            this.adminsColor.fill('light');
            this.adminsColor[index] = "primary";
            this.adminIndex = index;
            this.clickedAdmin = this.admins[index];
            this.clickedRef = this.displayRefs[index];
            if (this.clickedAdmin.isMaster && !Constants_1.Constants.admin.isMaster) {
                this.adminCanBlockUnblock = !this.clickedAdmin.isMaster;
                this.adminCanChangeRoles = !this.clickedAdmin.isMaster;
            }
            else {
                this.verifyRoles();
            }
        };
        AdminListComponent.prototype.getAdminIndex = function (admin, tab) {
            var i = 0;
            var index = -1;
            var repeat = true;
            while (i < tab.length && repeat) {
                if (admin.id == tab[i].id) {
                    index = i;
                    repeat = !repeat;
                }
                i++;
            }
            return index;
        };
        AdminListComponent.prototype.refresh = function () {
            this.isLoading = true;
            this.getAllAdmin();
        };
        AdminListComponent.prototype.getRef = function (index) {
            return this.refs[index];
        };
        AdminListComponent.prototype.editRoles = function () {
            var admin = this.admins[this.adminIndex];
            RoleService_1.RoleService.initializeRole(admin);
        };
        AdminListComponent.prototype.saveChanges = function (editRolesPop) {
            var _this = this;
            this.showAlert("info", "Mise à jour " + this.refs[this.adminIndex].email + " ...");
            var admin = this.admins[this.adminIndex];
            this.clickedAdmin.rolesGroupe = this.adminRoles;
            admin.rolesGroupe = this.adminRoles;
            Admin_Profile_Service_1.AdminProfileService.updateAdminProfile(this.http, admin, this.refs[this.adminIndex].adminUID).then(function (res) {
                if (res.status) {
                    _this.showAlert("success", "Mise à jour " + _this.refs[_this.adminIndex].email + " terminée avec succès");
                }
                else {
                    _this.showAlert("danger", "Mise à jour " + _this.refs[_this.adminIndex].email + " terminée avec échec");
                }
            });
            editRolesPop.hide();
        };
        AdminListComponent.prototype.showAlert = function (type, text) {
            this.type = type;
            this.alertText = text;
            if (document.getElementById("alert"))
                document.getElementById("alert").hidden = false;
        };
        AdminListComponent.prototype.blockOrUnblockAdmin = function (event) {
            var _this = this;
            event.target.disabled = true;
            if (this.clickedAdmin.accountStatut == 1) {
                this.showAlert("info", "Blocage " + this.refs[this.adminIndex].email + " ...");
            }
            else {
                this.showAlert("info", "Déblocage " + this.refs[this.adminIndex].email + " ...");
            }
            this.clickedAdmin.accountStatut = this.clickedAdmin.accountStatut == 1 ? 2 : 1;
            this.displayAdmins[this.adminIndex] = this.clickedAdmin;
            this.admins[this.adminIndex].accountStatut = this.clickedAdmin.accountStatut;
            Admin_Profile_Service_1.AdminProfileService.updateAdminProfile(this.http, this.admins[this.adminIndex], this.refs[this.adminIndex].adminUID).then(function (res) {
                if (res.status) {
                    if (_this.clickedAdmin.accountStatut === 1) {
                        _this.showAlert("success", "Déblocage " + _this.refs[_this.adminIndex].email + " terminé avec succès");
                    }
                    else {
                        _this.showAlert("success", "Blocage " + _this.refs[_this.adminIndex].email + " terminé avec succès");
                    }
                }
                else {
                    if (_this.clickedAdmin.accountStatut === 2) {
                        _this.showAlert("danger", "blocage " + _this.refs[_this.adminIndex].email + " terminé avec échec");
                    }
                    else {
                        _this.showAlert("danger", "Déblocage " + _this.refs[_this.adminIndex].email + " terminé avec échec");
                    }
                }
            }).finally(function () {
                event.target.disabled = false;
            });
        };
        AdminListComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        AdminListComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        AdminListComponent.prototype.getAdminStatus = function () {
            var image = "";
            var title = "";
            if (this.admins[this.adminIndex].accountStatut === 2) {
                image = "assets/images/unblock.png";
                title = "unblock";
            }
            else {
                image = "assets/images/block.png";
                title = "block";
            }
            return { image: image, title: title };
        };
        AdminListComponent.prototype.getAdminImage = function (adminIndex) {
            var admin = this.admins[adminIndex];
            var imageUrl = "assets/images/user/anonymous.png";
            if (admin.profileImgUrl != null && admin.profileImgUrl != undefined) {
                imageUrl = admin.profileImgUrl;
            }
            return imageUrl;
        };
        AdminListComponent.prototype.justifying = function (propertie, table, justificationModal, justification, justifyingImage) {
            justification.value = "";
            justificationModal.show();
            this.propertie = propertie;
            this.justifyingImage = justifyingImage;
            this.table = table;
        };
        AdminListComponent.prototype.justify = function (justificationModal, justify) {
            var _this = this;
            if (justify.value !== "") {
                var justification = new Justification_1.Justification();
                justification.attribute = this.propertie;
                justification.description = justify.value;
                justification.interface = "Consulter Demandes";
                justification.fromCollection = "demandes";
                this.justifyingImage.src = "assets/images/loading.gif";
                Service_1.Service.sendJustification(this.http, justification).then(function (result) {
                    if (result.status) {
                        if (_this.table === "admin") {
                            _this.clickedAdmin[_this.propertie] = _this.admins[_this.adminIndex][_this.propertie];
                        }
                        else if (_this.table === "ref") {
                            _this.clickedRef[_this.propertie] = _this.refs[_this.adminIndex][_this.propertie];
                        }
                    }
                }).finally(function () {
                    _this.justifyingImage.src = "assets/images/showInfo.png";
                });
                justificationModal.hide();
            }
        };
        AdminListComponent.prototype.hoverOn = function (adminIndex) {
            if (adminIndex !== this.adminIndex)
                this.adminsColor[adminIndex] = "dark";
        };
        AdminListComponent.prototype.hoverOff = function (adminIndex) {
            if (adminIndex === this.adminIndex) {
                this.adminsColor[adminIndex] = "primary";
            }
            else {
                this.adminsColor[adminIndex] = "light";
            }
        };
        /* ============================ function searsh ========================== */
        AdminListComponent.prototype.Search = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var search;
                return tslib_1.__generator(this, function (_a) {
                    search = document.getElementById('m-search').value;
                    if (search !== "") {
                        this.searching = true;
                        this.getAllAdmin(search);
                    }
                    return [2 /*return*/];
                });
            });
        };
        AdminListComponent.prototype.verifyingSearch = function (event) {
            var search = document.getElementById('m-search').value;
            if (search == "") {
                this.searching = false;
                this.getAllAdmin(search);
            }
            else {
                if (event.key == "Enter")
                    this.Search();
            }
        };
        AdminListComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient },
            { type: platform_browser_1.Title }
        ]; };
        AdminListComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-admins-list',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./admins-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/admins-list/admins-list.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./admins-list.component.scss */ "./src/app/demo/dashboard/admins-list/admins-list.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
                platform_browser_1.Title])
        ], AdminListComponent);
        return AdminListComponent;
    }());
    exports.AdminListComponent = AdminListComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admins-list/admins-list.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/admins-list/admins-list.module.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./admins-list.component */ "./src/app/demo/dashboard/admins-list/admins-list.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! ./admins-list-routing.module */ "./src/app/demo/dashboard/admins-list/admins-list-routing.module.ts"), __webpack_require__(/*! ../roles/roles.module */ "./src/app/demo/dashboard/roles/roles.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, admins_list_component_1, shared_module_1, ng_bootstrap_1, admins_list_routing_module_1, roles_module_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminsListModule = /** @class */ (function () {
        function AdminsListModule() {
        }
        AdminsListModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    admins_list_routing_module_1.AdminsListRoutingModule,
                    shared_module_1.SharedModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    // FormsModule,
                    // ReactiveFormsModule,
                    // NgbProgressbarModule,
                    // NgbPopoverModule,
                    // NgbTooltipModule
                    roles_module_1.RolesModule,
                    http_1.HttpClientModule
                ],
                declarations: [
                    admins_list_component_1.AdminListComponent,
                ]
            })
        ], AdminsListModule);
        return AdminsListModule;
    }());
    exports.AdminsListModule = AdminsListModule;
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
//# sourceMappingURL=7.js.map