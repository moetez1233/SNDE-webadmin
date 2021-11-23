(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-releveur/releveur.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-releveur/releveur.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <input type=\"text\" style=\"width: 97%;margin-left: 1.5%;\" id=\"newsearch\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" (click)=\"myFunction()\" (keyup)=\"filterFunction()\" value=\"{{clickedUserRelev.phoneNumber}}\">\r\n\r\n        <div class=\"dropdown\">\r\n\r\n            <!--\r\n        <input type=\"text\" placeholder=\"Search..\" id=\"newsearch\" style=\"width: 1020px;\" (click)=\"myFunction()\" (keyup)=\"filterFunction()\" value=\"{{PhoneUser}}\">\r\n    -->\r\n\r\n            <div id=\"myDropdown\" class=\"dropdown-content\" style=\"width: 400px;\">\r\n\r\n\r\n                <perfect-scrollbar style=\"min-height: 10px;max-height: 280px;\">\r\n\r\n                    <dl *ngFor=\"let chaqueUserRelev of usersIsReleve;let releveIndex=index;\">\r\n\r\n\r\n\r\n                        <dt style=\"padding-left: 2%;\" id=\"liste\" (click)=\"UserRelevClick(releveIndex)\"> {{chaqueUserRelev.phoneNumber}}</dt>\r\n\r\n                    </dl>\r\n\r\n                </perfect-scrollbar>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <app-ui-modal #myPersistenceModal [containerClick]=\"false\">\r\n        <div class=\"app-modal-header\">\r\n            <h5 class=\"modal-title\">information du releve</h5>\r\n        </div>\r\n        <div class=\"app-modal-body\">\r\n\r\n            <div class=\"row\" style=\"width: 100%\">\r\n                <div class=\"col-md-5\">\r\n                    <app-alert type=\"light\"><i>nom  client</i></app-alert>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <app-alert type=\"light\"><i id=\"demo01\"></i></app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"width: 100%\">\r\n                <div class=\"col-md-5\">\r\n                    <app-alert type=\"light\"><i>Index</i></app-alert>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <app-alert type=\"light\"><i>{{clickedReleve.indexe}}</i></app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"width: 100%\">\r\n                <div class=\"col-md-5\">\r\n                    <app-alert type=\"light\"><i>identifiant </i></app-alert>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <app-alert type=\"light\"><i id=\"demo1\"></i></app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"width: 100%\">\r\n                <div class=\"col-md-5\">\r\n                    <app-alert type=\"light\"><i>Adress</i></app-alert>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <app-alert type=\"light\"><i id=\"demo2\"></i></app-alert>\r\n                </div>\r\n            </div>\r\n\r\n            <!--\r\n\r\n     \r\n       \r\n        <div class=\"row\" style=\"width: 100%\" >\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Nom Client</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n                <app-alert type=\"light\"><i id=\"demo\">{{clickedReleve.point.identifiant}}</i></app-alert>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\" >\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Numero Compteur</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n                <app-alert type=\"light\"><i id=\"demo\">{{clickedReleve.point.numeroCompteur}}</i></app-alert>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Adress</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n                <app-alert type=\"light\"><i>{{clickedReleve.point.location}}</i></app-alert>\r\n            </div>\r\n        </div>\r\n    -->\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"myPersistenceModal.hide()\">Close</button>\r\n        </div>\r\n    </app-ui-modal>\r\n    <app-ui-modal #myPersistenceModal1 [hideFooter]=\"true\" [dialogClass]=\"'modal-lg'\">\r\n        <div class=\"app-modal-header\">\r\n            <h5 class=\"modal-title\">info et position du releve</h5>\r\n        </div>\r\n        <div class=\"app-modal-body\">\r\n\r\n\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <app-map></app-map>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>id user</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-7\">\r\n                                <app-alert type=\"light\"><i> {{claimclick.idUser}}</i></app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Reclamations </i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\" style=\"margin-top: 2%;\">\r\n                                <perfect-scrollbar style=\"min-height: 5px;max-height: 100px;\">\r\n\r\n                                    <div *ngFor=\"let tag of claimTags;let userIndex=index\">\r\n                                        <i style=\"padding-left: 10px;\">{{tag}}</i>\r\n                                    </div>\r\n                                </perfect-scrollbar>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"app-modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"myPersistenceModal1.hide()\">Close</button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </app-ui-modal>\r\n\r\n    <app-ui-modal #myPersistenceModal2 [containerClick]=\"false\">\r\n        <div class=\"app-modal-header\">\r\n            <h5 class=\"modal-title\">Points Releveurs</h5>\r\n\r\n        </div>\r\n        <div class=\"app-modal-body\" id=\"refrechdiv\">\r\n            <form action=\"javascript:\">\r\n                <app-alert type=\"{{type}}\" id=\"alert\">{{alertText}}</app-alert>\r\n\r\n\r\n                <perfect-scrollbar style=\"min-height: 10px;max-height: 280px;\">\r\n                    <div id=\"revlevsaved\">\r\n\r\n                        <app-alert type=\"light\"><i id=\"clicksave\">  click sur + pour ajouter nouvelle reference</i></app-alert>\r\n\r\n                        <div style=\"padding-left: 5%;\" class=\"showInputField\" id=\"oInput\"></div>\r\n                    </div>\r\n\r\n\r\n                </perfect-scrollbar>\r\n\r\n            </form>\r\n        </div>\r\n        <div class=\"app-modal-footer\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" id=\"addRelev\" (click)=\"add()\">+ </button>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" id=\"saveRelev\" (click)=\" save()\">Save </button>\r\n\r\n                    </div>\r\n                    <div class=\"col-sm\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"myPersistenceModal2.hide()\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </app-ui-modal>\r\n\r\n\r\n\r\n    <div class=\"col-md-12\">\r\n\r\n        <div class=\"col-sm-12\">\r\n            <app-card [options]=\"false\" cardTitle=\"Information du releve\">\r\n                <div id=\"contenuUtlisateur\">\r\n                    <div style=\"height: 300px;\">\r\n                        <ngb-tabset>\r\n                            <ngb-tab title=\"Info\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <app-alert type=\"light\"><i>Id User releveur</i></app-alert>\r\n                                        </div>\r\n                                        <div class=\"col-md-7\">\r\n                                            <app-alert type=\"light\"><i id=\"demo\">{{clickedUserRelev.id}}</i></app-alert>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <app-alert type=\"light\"><i>Language</i></app-alert>\r\n                                        </div>\r\n                                        <div class=\"col-md-7\">\r\n                                            <app-alert type=\"light\"><i>{{clickedUserRelev.currentLanguage}}</i></app-alert>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <app-alert type=\"light\"><i>Phone number</i></app-alert>\r\n                                        </div>\r\n                                        <div class=\"col-md-7\">\r\n                                            <app-alert type=\"light\"><i>{{clickedUserRelev.phoneNumber}}</i></app-alert>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                        <button style=\"margin-top: 3%;\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" id=\"pointRelev\" (click)=\"myPersistenceModal2.show()\">Ajouter des reférences</button>\r\n\r\n                                    </div>\r\n\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Releveur\">\r\n                                <ng-template ngbTabContent>\r\n\r\n                                    <perfect-scrollbar style=\"min-height: 5px;max-height: 300px;\">\r\n                                        <div *ngFor=\"let chaquereleve of ListeReleve;let chaqueRelevindex=index\">\r\n                                            <div class=\"row\" id=\"bordrelev\" (click)=\"releverClick(chaqueRelevindex);ReclamAdmininstration1(myPersistenceModal)\">\r\n                                                <i class=\"col-md-6 text-left\">\r\n    \r\n                                            {{chaquereleve.point.identifiant}}\r\n                                                </i>\r\n                                                <i class=\"col-md-6 text-right\"> {{timestampToDate(chaquereleve.dateReleve)}}</i>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </perfect-scrollbar>\r\n\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Reclamtion\">\r\n                                <ng-template ngbTabContent>\r\n                                    <perfect-scrollbar [style.max-height]=\"(window.innerHeight-410)+'px'\" [style.min-height]=\"(window.innerHeight-410)+'px'\">\r\n\r\n                                        <div *ngFor=\"let chaquecalim of listReclamation;let chaqueClaimindex=index\">\r\n                                            <div class=\"row\" id=\"bordrelev\" (click)=\"claimClick(chaqueClaimindex);Reclam(myPersistenceModal1)\">\r\n                                                <i class=\"col-md-6 text-left\">\r\n    \r\n                                            {{chaquecalim.idUser}}\r\n                                                </i>\r\n                                                <i class=\"col-md-6 text-right\"> {{timestampToDate(chaquecalim.created)}}</i>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </perfect-scrollbar>\r\n\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n    <!--\r\n    <div class=\"col-md-5\">\r\n        <div class=\"col-sm-12\">\r\n            <app-card [hidHeader]=\"true\" cardClass=\"tab-card\">\r\n                <h5 class=\"mb-3\">Basic Pills</h5>\r\n                <ngb-tabset type=\"pills\">\r\n                    <ngb-tab title=\"HOME\" class=\"mb-3\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>1</p>\r\n                            <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                <div class=\"col-md-5\">\r\n                                    <app-alert type=\"light\"><i>Id User releveur</i></app-alert>\r\n                                </div>\r\n                                <div class=\"col-md-7\">\r\n                                    <app-alert type=\"light\"><i id=\"demo\">{{clickedUserRelev.id}}</i></app-alert>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                <div class=\"col-md-5\">\r\n                                    <app-alert type=\"light\"><i>Language</i></app-alert>\r\n                                </div>\r\n                                <div class=\"col-md-7\">\r\n                                    <app-alert type=\"light\"><i>{{clickedUserRelev.currentLanguage}}</i></app-alert>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                                <div class=\"col-md-5\">\r\n                                    <app-alert type=\"light\"><i>Phone number</i></app-alert>\r\n                                </div>\r\n                                <div class=\"col-md-7\">\r\n                                    <app-alert type=\"light\"><i>{{clickedUserRelev.phoneNumber}}</i></app-alert>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"PROFILE\">\r\n                        <ng-template ngbTabContent>\r\n\r\n                            <div *ngFor=\"let chaquereleve of ListeReleve;let chaqueRelevindex=index\">\r\n                                <div class=\"row\" id=\"bordrelev\" (click)=\"releverClick(chaqueRelevindex);ReclamAdmininstration1(myPersistenceModal)\">\r\n                                    <i class=\"col-md-6 text-left\">\r\n\r\n                                {{chaquereleve.point.identifiant}}\r\n                                    </i>\r\n                                    <i class=\"col-md-6 text-right\"> {{timestampToDate(chaquereleve.dateReleve)}}</i>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"CONTACT\">\r\n                        <ng-template ngbTabContent>\r\n                            <p>3</p>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n            </app-card>\r\n        </div>\r\n    </div>\r\n-->\r\n    <!--\r\n    <div class=\"col-md-5\">\r\n        <app-card [options]=\"false\" cardTitle=\"information \">\r\n            <div style=\"height: 300px;\">\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Nom Client</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <app-alert type=\"light\"><i>{{clickedReleve.point.identifiant}}</i></app-alert>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Numero Compteur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <app-alert type=\"light\"><i>{{clickedReleve.point.numeroCompteur}}</i></app-alert>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Adress</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <app-alert type=\"light\"><i>{{clickedReleve.point.location}}</i></app-alert>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </app-card>\r\n\r\n    </div>\r\n-->\r\n\r\n</div>");

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

/***/ "./src/Models/Releveur.ts":
/*!********************************!*\
  !*** ./src/Models/Releveur.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Releveur = /** @class */ (function () {
        function Releveur() {
        }
        return Releveur;
    }());
    exports.Releveur = Releveur;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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

/***/ "./src/Models/claim.ts":
/*!*****************************!*\
  !*** ./src/Models/claim.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Claim = /** @class */ (function () {
        function Claim() {
        }
        return Claim;
    }());
    exports.Claim = Claim;
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

/***/ "./src/Models/pointsReleveur.ts":
/*!**************************************!*\
  !*** ./src/Models/pointsReleveur.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pointsReleveur = /** @class */ (function () {
        function pointsReleveur() {
        }
        return pointsReleveur;
    }());
    exports.pointsReleveur = pointsReleveur;
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

/***/ "./src/app/demo/dashboard/consulter-releveur/consulter-releveurs-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-releveur/consulter-releveurs-routing.module.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./releveur.component */ "./src/app/demo/dashboard/consulter-releveur/releveur.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, releveur_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: releveur_component_1.ReleveurComponent
        }
    ];
    var releveurRoutingModule = /** @class */ (function () {
        function releveurRoutingModule() {
        }
        releveurRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], releveurRoutingModule);
        return releveurRoutingModule;
    }());
    exports.releveurRoutingModule = releveurRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-releveur/releveur.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-releveur/releveur.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#bordrelev {\n  border: 2px solid black;\n  border-radius: 8px;\n  margin-left: 3%;\n  margin-right: 3%;\n  margin-top: 2%;\n}\n\n/* ========================== auto complet ===============*/\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n  margin-left: 0.5%;\n}\n\n/*\n.dropdown-content {\n    display: none;\n    position: relative;\n    background-color: #f6f6f6;\n    min-width: 230px;\n    overflow: auto;\n    border: 1px solid #ddd;\n    z-index: 1;\n}*/\n\n/*\n#newsearch {\n    width: 1002px;\n    box-sizing: border-box;\n    background-position: 14px 12px;\n    background-repeat: no-repeat;\n    font-size: 16px;\n    //border-radius: 5px;\n    //border-bottom: 1px solid #ddd;\n    padding-bottom: 10px;\n    border: 2px solid #bbbbbb;\n    border-radius: 8px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    margin-bottom: 10px;\n    //padding: 14px 770px 12px 45px;\n}*/\n\n.dropdown-content {\n  background-color: #ddd;\n  display: none;\n  position: absolute;\n  background-color: #f6f6f6;\n  margin-left: 10px;\n  margin-top: -10px;\n  overflow: auto;\n  border: 2px solid #bbbbbb;\n  border-radius: 8px;\n  z-index: 1;\n}\n\n.dropdown-content dt {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown dt:hover {\n  background-color: #ddd;\n}\n\n.show {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLXJlbGV2ZXVyL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFxkZW1vXFxkYXNoYm9hcmRcXGNvbnN1bHRlci1yZWxldmV1clxccmVsZXZldXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2NvbnN1bHRlci1yZWxldmV1ci9yZWxldmV1ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0EsMkRBQUE7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURLQTs7Ozs7Ozs7O0VBQUE7O0FBWUE7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztBQWlCQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0FDTko7O0FEU0E7RUFDSSxzQkFBQTtBQ05KOztBRFNBO0VBQ0ksY0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLXJlbGV2ZXVyL3JlbGV2ZXVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JvcmRyZWxldiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09IGF1dG8gY29tcGxldCA9PT09PT09PT09PT09PT0qL1xyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjUlO1xyXG59XHJcblxyXG5cclxuLypcclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxufSovXHJcblxyXG5cclxuLypcclxuI25ld3NlYXJjaCB7XHJcbiAgICB3aWR0aDogMTAwMnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiYmJiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAvL3BhZGRpbmc6IDE0cHggNzcwcHggMTJweCA0NXB4O1xyXG59Ki9cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiYmJiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBkdCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAvL3BhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24gZHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCIjYm9yZHJlbGV2IHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT0gYXV0byBjb21wbGV0ID09PT09PT09PT09PT09PSovXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDAuNSU7XG59XG5cbi8qXG4uZHJvcGRvd24tY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgei1pbmRleDogMTtcbn0qL1xuLypcbiNuZXdzZWFyY2gge1xuICAgIHdpZHRoOiAxMDAycHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmJiYmJiO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vcGFkZGluZzogMTRweCA3NzBweCAxMnB4IDQ1cHg7XG59Ki9cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYmJiYmJiO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGR0IHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24gZHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-releveur/releveur.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-releveur/releveur.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./releveur.service */ "./src/app/demo/dashboard/consulter-releveur/releveur.service.ts"), __webpack_require__(/*! src/Models/Releveur */ "./src/Models/Releveur.ts"), __webpack_require__(/*! src/Models/User */ "./src/Models/User.ts"), __webpack_require__(/*! ../map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! src/Models/claim */ "./src/Models/claim.ts"), __webpack_require__(/*! src/Models/pointsReleveur */ "./src/Models/pointsReleveur.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, http_1, releveur_service_1, Releveur_1, User_1, MapServices_1, Constants_1, common_1, storage_1, claim_1, pointsReleveur_1, Service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReleveurComponent = /** @class */ (function () {
        function ReleveurComponent(Location, http, titleService, storage) {
            this.Location = Location;
            this.http = http;
            this.titleService = titleService;
            this.storage = storage;
            this.click = 0;
            this.c = -1;
            this.adminGotTheRole = false;
            this.Releveur = [];
            this.ListeReleve = [];
            this.listReclamation = [];
            this.claimTags = [];
            this.administrations = [];
            this.recalmtions = [];
            this.users = [];
            this.usersIsReleve = [];
            //usersReleveur: User= new User();
            this.releveIndex = -1;
            this.clickedreleveIndex = -1;
            this.clickedClaimIndex = -1;
            this.ClickedUserIndex = -1;
            this.clickedReleve = new Releveur_1.Releveur();
            this.claimclick = new claim_1.Claim();
            this.clickedUserRelev = new User_1.User();
            this.initializing = false;
            this.serchvalid = false;
            this.initUsers = false;
            this.releveColor = [];
            this.tabrelev = [];
            this.clickSave = 0;
            this.alertText = "";
            this.type = "";
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.consulter_releveur) !== -1) {
                this.adminGotTheRole = true;
            }
        }
        ReleveurComponent.prototype.ngOnInit = function () {
            this.initializeReleveur();
            //this.initializeAdministration()
            this.initializeReclamation();
            this.initializeUsers();
            //this.verifsave()
        };
        ReleveurComponent.prototype.initializeReleveur = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.Releveur = [];
                            //this.searching = false;
                            return [4 /*yield*/, releveur_service_1.ReleveurService.getReleveur(this.http).then(function (result) {
                                    var releveur = result.releves;
                                    var displayreleveur = result.releves;
                                    _this.Releveur = (releveur ? Object.values(releveur) : []);
                                })];
                        case 1:
                            //this.searching = false;
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ReleveurComponent.prototype.initializeUsers = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var result, users, displayUsers, i;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.initUsers = true;
                            this.users = [];
                            return [4 /*yield*/, releveur_service_1.ReleveurService.getUsers(this.http)];
                        case 1:
                            result = (_a.sent());
                            this.users = [];
                            this.usersIsReleve = [];
                            users = Object.values(result.users);
                            displayUsers = result.displayUsers;
                            users = (users ? Object.values(users) : []);
                            this.users = Object.values(result.users);
                            ;
                            for (i = 0; i < users.length; i++) {
                                if (this.users[i].isreleveur == 1) {
                                    this.usersIsReleve.push(this.users[i]);
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        ReleveurComponent.prototype.initializeAdministration = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.administrations = [];
                            //this.searching = false;
                            return [4 /*yield*/, releveur_service_1.ReleveurService.getAdministrations(this.http).then(function (result) {
                                    var administrations = result.administrations;
                                    var displayadministrations = result.displayadministrations;
                                    _this.administrations = (administrations ? Object.values(administrations) : []);
                                })];
                        case 1:
                            //this.searching = false;
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ReleveurComponent.prototype.initializeReclamation = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.recalmtions = [];
                            return [4 /*yield*/, releveur_service_1.ReleveurService.getreclamation(this.http).then(function (result) {
                                    var recalmtions = result.claims;
                                    _this.recalmtions = (recalmtions ? Object.values(recalmtions) : []);
                                    console.log("claims " + _this.recalmtions[0].idUser);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ReleveurComponent.prototype.refrech = function () {
            this.tabrelev = [];
            var xx = document.getElementById("alert");
            //document.getElementById("clicksave").innerHTML="";
            document.getElementById("clicksave").innerHTML = "click sur + pour ajouter nouvelle reference";
            if (xx.style.display === "bloc") {
                xx.style.display = "block";
            }
            else {
                xx.style.display = "none";
            }
            var x = document.getElementById("saveRelev");
            var x1 = document.getElementById("addRelev");
            x1.disabled = false;
            x.disabled = false;
        };
        ReleveurComponent.prototype.UserRelevClick = function (releveIndex) {
            this.refrech();
            this.clickedUserRelev = new User_1.User();
            if (this.ClickedUserIndex !== releveIndex) {
                this.clickedUserRelev = this.usersIsReleve[releveIndex];
                //alert(this.clickedUserRelev.phoneNumber)
                this.initializing = true;
                //document.getElementById("myDropdown").classList.toggle("show");
                this.releveColor.fill('light');
                this.releveColor[releveIndex] = "primary";
            }
            this.ListeReleve = [];
            for (var i = 0; i < this.Releveur.length; i++) {
                if (this.Releveur[i].idReleveur == this.clickedUserRelev.id) {
                    this.ListeReleve.push(this.Releveur[i]); //remplir un tableau de user clicker qui on plusieur relev
                }
            }
            this.listReclamation = [];
            for (var i = 0; i < this.recalmtions.length; i++) {
                if (this.recalmtions[i].idUser == this.clickedUserRelev.id) {
                    this.listReclamation.push(this.recalmtions[i]);
                }
            }
            this.myFunction();
            this.serchvalid = false;
        };
        ReleveurComponent.prototype.releverClick = function (chaqueRelevindex) {
            //this.clickedReleve = new Releveur();
            if (this.clickedreleveIndex !== chaqueRelevindex) {
                this.clickedReleve = this.ListeReleve[chaqueRelevindex];
                //console.log("liste de releve de ce user clicker "+this.ListeReleve[0].point.identifiant);
                //alert(this.clickedClicked.indexe)
                // this.initializing = true;
                // alert(chaqueRelevindex)
                //alert(this.ListeReleve[0].point.identifiant)
                document.getElementById("demo01").innerHTML = this.clickedReleve.point.nomClient;
                //document.getElementById("demo01").innerHTML =this.clickedReleve.point.numeroCompteur ;
                document.getElementById("demo1").innerHTML = this.clickedReleve.point.identifiant;
                document.getElementById("demo2").innerHTML = this.clickedReleve.point.location;
                //document.getElementById("demo").style.color = "black";
            }
        };
        ReleveurComponent.prototype.claimClick = function (chaqueClaimindex) {
            //this.clickedReleve = new Releveur();
            if (this.clickedClaimIndex !== chaqueClaimindex) {
                this.claimclick = this.listReclamation[chaqueClaimindex];
                this.claimTags = this.listReclamation[chaqueClaimindex].tags;
            }
        };
        ReleveurComponent.prototype.alerttest = function (chaqueRelevindex) {
            alert(this.ListeReleve[chaqueRelevindex].indexe);
        };
        ReleveurComponent.prototype.ReclamAdmininstration1 = function (myPersistenceModal) {
            myPersistenceModal.show();
        };
        ReleveurComponent.prototype.Reclam = function (myPersistenceModal1) {
            myPersistenceModal1.show();
            MapServices_1.MapServices.addMarker([
                this.claimclick.position.lat,
                this.claimclick.position.lon,
            ], true, -1, this.claimclick.idUser);
        };
        ReleveurComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        ReleveurComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        ReleveurComponent.prototype.hoverOn = function (releveIndex) {
            if (releveIndex !== this.releveIndex)
                this.releveColor[releveIndex] = "dark";
        };
        ReleveurComponent.prototype.mouseOut = function () {
            document.getElementById("demo").style.color = "black";
        };
        ReleveurComponent.prototype.hoverOff = function (releveIndex) {
            if (releveIndex === this.releveIndex) {
                this.releveColor[releveIndex] = "primary";
            }
            else {
                this.releveColor[releveIndex] = "light";
            }
        };
        ReleveurComponent.prototype.myFunction = function () {
            document.getElementById("myDropdown").classList.toggle("show");
            var x = document.getElementById("contenuUtlisateur");
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        };
        ReleveurComponent.prototype.filterFunction = function () {
            var input, output, filter, ul, li, a, i, administrations, j;
            input = document.getElementById("newsearch");
            // output=document.getElementById("choix");
            filter = input.value.toUpperCase();
            var div = document.getElementById("myDropdown");
            i = div.getElementsByTagName("dt");
            for (j = 0; j < i.length; j++) {
                var txtValue = i[j].textContent || i[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    i[j].style.display = "";
                    //output=i[j]
                }
                else {
                    i[j].style.display = "none";
                    //output=i[j]
                }
            }
        };
        ReleveurComponent.prototype.add = function () {
            this.click = this.click + 1;
            this.xElement = document.createElement('div');
            this.xElement.className = 'row';
            this.xElement.innerHTML = " \n          <br> \n          <div class=\"form-group row\" id=\"oInput\">\n                        <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label\">refrence </label>\n                        <div class=\"col-sm-6\">\n                            <input type=\"nom\" class=\"form-control\" id=\"moetez\" value=\"\" placeholder=\"refrence\">\n                        </div>\n                    </div>";
            document.querySelector('.showInputField').appendChild(this.xElement);
        };
        ReleveurComponent.prototype.save = function () {
            this.c = document.getElementById("oInput").childNodes.length;
            this.clickSave = this.clickSave + 1;
            if (this.clickSave != 0 && this.c != 0) {
                var x = document.getElementById("saveRelev");
                var x1 = document.getElementById("addRelev");
                x1.disabled = true;
                x.disabled = true;
                this.click = 0;
            }
            for (var i = 0; i <= this.c; i++) {
                if (document.getElementsByTagName("input")[i].value != "") {
                    this.tabrelev.push(document.getElementsByTagName("input")[i].value);
                }
            }
            this.tabrelev.shift(); //delete the first item in array
            var json = Object.assign({}, this.tabrelev); // convert an array to json
            this.showAlert("success", "Reférences ajouter");
            document.getElementById("clicksave").innerHTML = "";
            var pointReleve = new pointsReleveur_1.pointsReleveur();
            pointReleve.id = this.clickedUserRelev.id;
            pointReleve.references = json;
            /* ============== codage id et timestemps ===============  */
            var temp = Math.round(new Date().getTime() / 1000); //return timestemp
            var tempcod = btoa(temp.toString()); //code le timestemp
            var idcode = btoa(this.clickedUserRelev.id);
            pointReleve.idTemps = idcode.concat(tempcod).slice(0, idcode.concat(tempcod).search("="));
            /* ============== end codage ============================ */
            Service_1.Service.sendPointreleveur(this.http, pointReleve).then(function (result) {
                if (result.status) {
                    console.log('add success');
                }
            });
        };
        ReleveurComponent.prototype.showAlert = function (type, text) {
            this.type = type;
            this.alertText = text;
            var x = document.getElementById("alert");
            if (x.style.display === "block") {
                x.style.display = "none";
            }
            else {
                x.style.display = "block";
            }
            var div = document.getElementById("oInput");
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        };
        ReleveurComponent.ctorParameters = function () { return [
            { type: common_1.Location },
            { type: http_1.HttpClient },
            { type: platform_browser_1.Title },
            { type: storage_1.AngularFireStorage }
        ]; };
        ReleveurComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-releveur',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./releveur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-releveur/releveur.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./releveur.component.scss */ "./src/app/demo/dashboard/consulter-releveur/releveur.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [common_1.Location,
                http_1.HttpClient,
                platform_browser_1.Title,
                storage_1.AngularFireStorage])
        ], ReleveurComponent);
        return ReleveurComponent;
    }());
    exports.ReleveurComponent = ReleveurComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-releveur/releveur.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-releveur/releveur.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./releveur.component */ "./src/app/demo/dashboard/consulter-releveur/releveur.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! ../roles/roles.module */ "./src/app/demo/dashboard/roles/roles.module.ts"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! src/app/demo/dashboard/map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! ./consulter-releveurs-routing.module */ "./src/app/demo/dashboard/consulter-releveur/consulter-releveurs-routing.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, releveur_component_1, shared_module_1, forms_1, ng_bootstrap_1, roles_module_1, ng_bootstrap_2, map_module_1, consulter_releveurs_routing_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReleveurModule = /** @class */ (function () {
        function ReleveurModule() {
        }
        ReleveurModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [releveur_component_1.ReleveurComponent],
                imports: [
                    common_1.CommonModule,
                    // AppRoutingModule,
                    shared_module_1.SharedModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    map_module_1.MapModule,
                    ng_bootstrap_2.NgbCollapseModule,
                    ng_bootstrap_2.NgbAccordionModule,
                    consulter_releveurs_routing_module_1.releveurRoutingModule,
                    roles_module_1.RolesModule,
                ]
            })
        ], ReleveurModule);
        return ReleveurModule;
    }());
    exports.ReleveurModule = ReleveurModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-releveur/releveur.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-releveur/releveur.service.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Service_1, Constants_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReleveurService = /** @class */ (function () {
        function ReleveurService() {
        }
        /*
          @Output() static fire: EventEmitter<any> = new EventEmitter();
        
          static setReclamation(claim: Claim, displayclaim: Claim) {
              this.fire.emit({ "claim": claim, "displayclaim": displayclaim });
          }
        
          static getData() {
              return this.fire
          }*/
        //constructor() { }
        ReleveurService.getReleveur = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getChaqueReleveurs, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        ReleveurService.getAdministrations = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getAdministration, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        /* ================== users ====================== */
        ReleveurService.getUsers = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getUsers, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        /* ======================== claim ============= */
        ReleveurService.getreclamation = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getClaims, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        ReleveurService = tslib_1.__decorate([
            core_1.Injectable({
                providedIn: 'root'
            })
        ], ReleveurService);
        return ReleveurService;
    }());
    exports.ReleveurService = ReleveurService;
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
//# sourceMappingURL=6.js.map