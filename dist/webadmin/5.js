(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@angular/fire/functions/functions.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/fire/functions/functions.js ***!
  \***********************************************************/
/*! exports provided: FunctionsRegionToken, FUNCTIONS_REGION, FUNCTIONS_ORIGIN, ORIGIN, REGION, AngularFireFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegionToken", function() { return FunctionsRegionToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS_REGION", function() { return FUNCTIONS_REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS_ORIGIN", function() { return FUNCTIONS_ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIGIN", function() { return ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGION", function() { return REGION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireFunctions", function() { return AngularFireFunctions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FunctionsRegionToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.functions.region');
var FUNCTIONS_REGION = FunctionsRegionToken;
var FUNCTIONS_ORIGIN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.functions.origin');
var ORIGIN = FUNCTIONS_ORIGIN;
var REGION = FunctionsRegionToken;
var AngularFireFunctions = (function () {
    function AngularFireFunctions(options, nameOrConfig, platformId, zone, region, origin) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.functions = zone.runOutsideAngular(function () {
            var app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["_firebaseAppFactory"])(options, zone, nameOrConfig);
            return app.functions(region || undefined);
        });
        if (origin) {
            this.functions.useFunctionsEmulator(origin);
        }
    }
    AngularFireFunctions.prototype.httpsCallable = function (name) {
        var _this = this;
        var callable = this.functions.httpsCallable(name);
        return function (data) {
            var callable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(callable(data));
            return callable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(_this.schedulers.outsideAngular), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return r.data; }));
        };
    };
    AngularFireFunctions = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"])),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(REGION)),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(ORIGIN)),
        __metadata("design:paramtypes", [Object, Object, Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], Object, Object])
    ], AngularFireFunctions);
    return AngularFireFunctions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/functions/functions.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/fire/functions/functions.module.js ***!
  \******************************************************************/
/*! exports provided: AngularFireFunctionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireFunctionsModule", function() { return AngularFireFunctionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./node_modules/@angular/fire/functions/functions.js");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/functions */ "./node_modules/firebase/functions/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularFireFunctionsModule = (function () {
    function AngularFireFunctionsModule() {
    }
    AngularFireFunctionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_functions__WEBPACK_IMPORTED_MODULE_1__["AngularFireFunctions"]]
        })
    ], AngularFireFunctionsModule);
    return AngularFireFunctionsModule;
}());

//# sourceMappingURL=functions.module.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/functions/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/fire/functions/index.js ***!
  \*******************************************************/
/*! exports provided: FunctionsRegionToken, FUNCTIONS_REGION, FUNCTIONS_ORIGIN, ORIGIN, REGION, AngularFireFunctions, AngularFireFunctionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/@angular/fire/functions/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegionToken", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FunctionsRegionToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS_REGION", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FUNCTIONS_REGION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS_ORIGIN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["FUNCTIONS_ORIGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIGIN", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ORIGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGION", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["REGION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireFunctions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireFunctions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireFunctionsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireFunctionsModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@angular/fire/functions/public_api.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/fire/functions/public_api.js ***!
  \************************************************************/
/*! exports provided: FunctionsRegionToken, FUNCTIONS_REGION, FUNCTIONS_ORIGIN, ORIGIN, REGION, AngularFireFunctions, AngularFireFunctionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./node_modules/@angular/fire/functions/functions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionsRegionToken", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["FunctionsRegionToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS_REGION", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["FUNCTIONS_REGION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS_ORIGIN", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["FUNCTIONS_ORIGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIGIN", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["ORIGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGION", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["REGION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireFunctions", function() { return _functions__WEBPACK_IMPORTED_MODULE_0__["AngularFireFunctions"]; });

/* harmony import */ var _functions_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.module */ "./node_modules/@angular/fire/functions/functions.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireFunctionsModule", function() { return _functions_module__WEBPACK_IMPORTED_MODULE_1__["AngularFireFunctionsModule"]; });



//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/firebase/functions/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/functions/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/functions */ "./node_modules/@firebase/functions/dist/index.cjs.js");
/* harmony import */ var _firebase_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_functions__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\">\r\n  \r\n    \r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Reférence</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplaypoints.identifiant}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>nomClient</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplaypoints.nomClient}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Activité</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedCategorie.activite}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Adresse</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplaypoints.adresse}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Numéro Compteur</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplaypoints.numeroCompteur}}</i>\r\n            </app-alert>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Date de la dérniere réleve</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{timestampToDate(clickedDisplaypoints.dateDernierReleve)}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n</perfect-scrollbar>\r\n\r\n\r\n<app-ui-modal #justificationModal [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Justification pour voir la donnée cachée </h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <input type=\"text\" class=\"form-control\" #justification placeholder=\"Justification\">\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal.hide();justification.value=''\">Fermer</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"justify(justificationModal,justification)\">Justifier</button>\r\n    </div>\r\n</app-ui-modal>\r\n<app-ui-modal #justificationModal1 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Image </h5>\r\n        <img src=\"{{url}}\" style=\"width: 50%;\">\r\n\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal1.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal1.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-agree/mapAgree.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-agree/mapAgree.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!adminGotTheRole\" class=\"col-sm-12\">\r\n    <app-alert type=\"danger\" dismiss=\"true\" class=\"alert\">\r\n        <h3>Vous ne posséde pas la permission de consulter les agences!<br> Veusillez contacter votre administrateur pour cette permission</h3>\r\n    </app-alert>\r\n</div>\r\n<div id=\"child4\" class=\"col-sm-12 m-b-15\">\r\n    <div id=\"main-search\" class=\"main-search open\">\r\n        <div class=\"input-group\">\r\n\r\n            <div class=\"dropdown\">\r\n                <input type=\"text\" placeholder=\"search\" id=\"newsearch\" (click)=\"myFunction()\" (keyup)=\"filterFunctionPoints()\" value=\"{{Nomfrcategori}}\">\r\n                \r\n\r\n\r\n                <div id=\"myDropdown\" class=\"dropdown-content\">\r\n                    <perfect-scrollbar [style.max-height]=\"(window.innerHeight-500)+'px'\">\r\n                        <dl *ngFor=\"let points of points;let pointsIndex=index;\">\r\n                            <dt style=\"padding-left: 2%;\" id=\"liste\" (click)=\"clickedNomfr(pointsIndex);deuxiemClick(pointsIndex)\">{{points.nomClient}}</dt>\r\n                           \r\n\r\n                        </dl>\r\n                        <dl *ngFor=\"let categorie of categories;let categorieIndex=index;\">\r\n                            <dt style=\"padding-left: 2%;\" id=\"liste\" (click)=\"myFunction();clickedcaegories(categorieIndex)\">{{categorie.nomClient}}</dt>\r\n                        </dl>\r\n                    </perfect-scrollbar>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"parent4\" *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div id=\"initialmap\" class=\"{{clickedIndex!==-1 ? 'col-sm-6' : 'col-sm-12'}}\">\r\n        <app-map></app-map>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\" *ngIf=\"clickedIndex!==-1\" style=\"padding-bottom:70%;\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <app-card [options]=\"false\" cardTitle=\"Details de l'agence\">\r\n                <div style=\"height: 280px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-11\">\r\n\r\n                        </div>\r\n                        <div class=\"col-md-1\"> <img src=\"assets/images/close.png\" (click)=\"close()\" id=\"closeboutton\">\r\n                        </div>\r\n                    </div>\r\n                    <app-agree-details></app-agree-details>\r\n                </div>\r\n\r\n            </app-card>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/Models/Agree.ts":
/*!*****************************!*\
  !*** ./src/Models/Agree.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*export class Agree {
      id?: string;
        categorie?: number;
        Lat?: number;
        Long?: number;
        idUser?: string;
        imagefacade?: string;
        contact?: number;
        adresse?:string;
        nip?:string;
        nomfr?:string;
        update?:number
    }*/
    var Agree = /** @class */ (function () {
        function Agree() {
        }
        return Agree;
    }());
    exports.Agree = Agree;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Models/Categorie.ts":
/*!*********************************!*\
  !*** ./src/Models/Categorie.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Categorie = /** @class */ (function () {
        function Categorie() {
        }
        return Categorie;
    }());
    exports.Categorie = Categorie;
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

/***/ "./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n\n.row {\n  margin: 0px;\n}\n\n.alert-border {\n  border: solid lightgrey 1px;\n  border-radius: 10px;\n  padding: 2px;\n}\n\n.card.ng-star-inserted {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvbWFwLWFncmVlL2FncmVlLWRldGFpbHMvRDpcXGV0YWFpaVxccHJvamVjdDJcXFNOREVcXFNOREUtd2ViYWRtaW4vc3JjXFxhcHBcXGRlbW9cXGRhc2hib2FyZFxcbWFwLWFncmVlXFxhZ3JlZS1kZXRhaWxzXFxhZ3JlZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9tYXAtYWdyZWUvYWdyZWUtZGV0YWlscy9hZ3JlZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREtJO0VBQ0ksa0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL21hcC1hZ3JlZS9hZ3JlZS1kZXRhaWxzL2FncmVlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXBwLWFsZXJ0IHtcclxuICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYWxlcnQtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogc29saWQgbGlnaHRncmV5IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgICYubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59IiwiaSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1hbGVydC5hbGVydCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWxlcnQtYm9yZGVyIHtcbiAgYm9yZGVyOiBzb2xpZCBsaWdodGdyZXkgMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5jYXJkLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/Agree */ "./src/Models/Agree.ts"), __webpack_require__(/*! ../MapAgreeService */ "./src/app/demo/dashboard/map-agree/MapAgreeService.ts"), __webpack_require__(/*! src/Models/Justification */ "./src/Models/Justification.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/Models/points */ "./src/Models/points.ts"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! src/Models/Categorie */ "./src/Models/Categorie.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, Agree_1, MapAgreeService_1, Justification_1, Service_1, http_1, points_1, storage_1, Categorie_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AgreeDetailsComponent = /** @class */ (function () {
        function AgreeDetailsComponent(http, storage) {
            this.http = http;
            this.storage = storage;
            this.window = window;
            this.clickedDisplayAgree = new Agree_1.Agree();
            this.clickedAgree = new Agree_1.Agree();
            this.clickedDisplaypoints = new points_1.Points();
            this.clickedpoints = new points_1.Points();
            this.clickedCategorie = new Categorie_1.Categorie();
            this.clickedIndex = -1;
            this.categories = [];
        }
        AgreeDetailsComponent.prototype.ngOnInit = function () {
            var _this = this;
            MapAgreeService_1.MapAgreeService.get().subscribe(function (item) {
                if (item.clickedDisplaypoints && item.clickedpoints) {
                    _this.clickedDisplaypoints = item.clickedDisplaypoints;
                    _this.clickedpoints = item.clickedpoints;
                    console.log("contact : " + _this.clickedDisplaypoints.numeroCompteur);
                    console.log(_this.clickedDisplaypoints.nomClient);
                    _this.affichimage();
                    _this.categorie();
                }
            });
        };
        AgreeDetailsComponent.prototype.categorie = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.clickedCategorie = new Categorie_1.Categorie();
                            this.categories = [];
                            return [4 /*yield*/, MapAgreeService_1.MapAgreeService.getCategories(this.http).then(function (result) {
                                    var categories = result.categories;
                                    var displaycategories = result.displaycategories;
                                    _this.categories = (categories ? Object.values(categories) : []);
                                    for (var i = 0; i < _this.categories.length; i++) {
                                        if (_this.categories[i].id == _this.clickedDisplaypoints.numeroCompteur) {
                                            _this.clickedCategorie = _this.categories[i];
                                        }
                                    }
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        AgreeDetailsComponent.prototype.affichimage = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var imgAdminnistration, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            imgAdminnistration = this.clickedDisplaypoints.nomClient;
                            _a = this;
                            return [4 /*yield*/, this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()];
                        case 1:
                            _a.images = _b.sent();
                            this.url = this.images;
                            console.log(this.url);
                            return [2 /*return*/];
                    }
                });
            });
        };
        AgreeDetailsComponent.prototype.justifying = function (propertie, justificationModal, justificationModal1, justification, justifyingImage) {
            justification.value = "";
            justificationModal.show();
            justificationModal1.show();
            this.propertie = propertie;
            this.justifyingImage = justifyingImage;
        };
        AgreeDetailsComponent.prototype.justify = function (justificationModal, justify) {
            var _this = this;
            if (justify.value !== "") {
                var justification = new Justification_1.Justification();
                justification.attribute = this.propertie;
                justification.description = justify.value;
                justification.interface = "Consulter agence";
                justification.fromCollection = "user";
                justification.idObject = this.clickedDisplaypoints.identifiant;
                this.justifyingImage.src = "assets/images/loading.gif";
                Service_1.Service.sendJustification(this.http, justification).then(function (result) {
                    if (result.status) {
                        _this.clickedDisplaypoints[_this.propertie] = _this.clickedpoints[_this.propertie];
                    }
                }).finally(function () {
                    _this.justifyingImage.src = "assets/images/showInfo.png";
                });
                justificationModal.hide();
            }
        };
        AgreeDetailsComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        AgreeDetailsComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        AgreeDetailsComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient },
            { type: storage_1.AngularFireStorage }
        ]; };
        AgreeDetailsComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-agree-details',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./agree-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./agree-details.component.scss */ "./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
                storage_1.AngularFireStorage])
        ], AgreeDetailsComponent);
        return AgreeDetailsComponent;
    }());
    exports.AgreeDetailsComponent = AgreeDetailsComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/map-agree/agree-details/agree-details.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/agree-details/agree-details.module.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./agree-details.component */ "./src/app/demo/dashboard/map-agree/agree-details/agree-details.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, agree_details_component_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AgreeDetailsModule = /** @class */ (function () {
        function AgreeDetailsModule() {
        }
        AgreeDetailsModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [agree_details_component_1.AgreeDetailsComponent],
                imports: [
                    common_1.CommonModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    angular_webstorage_service_1.StorageServiceModule,
                    ng_bootstrap_1.NgbCollapseModule,
                    ng_bootstrap_1.NgbAccordionModule,
                ],
                exports: [
                    agree_details_component_1.AgreeDetailsComponent
                ]
            })
        ], AgreeDetailsModule);
        return AgreeDetailsModule;
    }());
    exports.AgreeDetailsModule = AgreeDetailsModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/map-agree/mapAgree-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/mapAgree-routing.module.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./mapAgree.component */ "./src/app/demo/dashboard/map-agree/mapAgree.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, mapAgree_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: mapAgree_component_1.MapAgreeComponent
        }
    ];
    var MapAgreeRoutingModule = /** @class */ (function () {
        function MapAgreeRoutingModule() {
        }
        MapAgreeRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], MapAgreeRoutingModule);
        return MapAgreeRoutingModule;
    }());
    exports.MapAgreeRoutingModule = MapAgreeRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/map-agree/mapAgree.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/mapAgree.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.map-border {\n  position: relative;\n  height: 662px;\n}\n#map {\n  height: 100%;\n}\n#initialmap {\n  padding-right: 3%;\n}\ni {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n.app-alert.alert {\n  color: black;\n}\n#closeboutton {\n  width: 20px;\n  margin-top: -145px;\n  margin-left: 20px;\n  border-radius: 50%;\n}\n@media all and (min-width: 800px) and (max-width: 1280px) {\n  /* Rédigez vos propriétés CSS ici */\n  #closeboutton {\n    margin-left: 290px;\n  }\n}\n#closeboutton:hover {\n  background-color: #60beeb;\n}\n.row {\n  margin: 0px;\n}\n.alert-border {\n  border: solid lightgrey 1px;\n  border-radius: 10px;\n  padding: 2px;\n}\n.card.ng-star-inserted {\n  margin-bottom: 0px;\n}\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  cursor: pointer;\n}\n.dropbtn:hover,\n.dropbtn:focus {\n  background-color: #3e8e41;\n}\n/* #search {\n      box-sizing: border-box;\n      //background-image: url('https://www.google.com/search?q=searchicon.png&sxsrf=ALeKk0234ozOJ5KngcQW5UzpH2tx_g8-0A:1595842757473&tbm=isch&source=iu&ictx=1&fir=SJw1IPNPPPGzAM%252CPvR_3Sag1dGzWM%252C_&vet=1&usg=AI4_-kR_YjWjXQq11qZwf5SGPcua4mRDwA&sa=X&ved=2ahUKEwjztbTFke3qAhVM4aQKHcyDBf0Q9QEwCHoECAoQFA&biw=1366&bih=625#imgrc=SJw1IPNPPPGzAM');\n      background-position: 14px 12px;\n      background-repeat: no-repeat;\n      font-size: 16px;\n      //padding: 14px 770px 12px 45px;\n      border-radius: 5px;\n      border-bottom: 1px solid #ddd;\n      // font-family: Verdana;\n      //background-color: red($color: #000000);\n  }*/\n#newsearch {\n  width: 963px;\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding-bottom: 10px;\n  border: 2px solid #bbbbbb;\n  border-radius: 8px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-bottom: -10px;\n}\n#search::-webkit-input-placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#search::-moz-placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#search::-ms-input-placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#search::placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#liste:hover,\n#liste:focus {\n  background-color: #bdc3c7;\n}\n#search:focus {\n  outline: 3px solid #ddd;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content {\n  display: none;\n  position: relative;\n  background-color: #f6f6f6;\n  min-width: 230px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/*.dropdown-content i {\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      //display: block;\n  }\n\n  .dropdown i:hover {\n      background-color: #ddd;\n  }*/\n.show {\n  display: block;\n}\n#parent4 {\n  margin-top: 5%;\n  width: 75%;\n  position: fixed;\n}\n#child4 {\n  position: absolute;\n}\n#grandParent {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvbWFwLWFncmVlL21hcEFncmVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9tYXAtYWdyZWUvRDpcXGV0YWFpaVxccHJvamVjdDJcXFNOREVcXFNOREUtd2ViYWRtaW4vc3JjXFxhcHBcXGRlbW9cXGRhc2hib2FyZFxcbWFwLWFncmVlXFxtYXBBZ3JlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtBREVKO0FDRUE7RUFFSSxpQkFBQTtBREFKO0FDR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREFKO0FDSUk7RUFDSSxZQUFBO0FERFI7QUNLQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURISjtBQ01BO0VBQ0ksbUNBQUE7RUFDQTtJQUVJLGtCQUFBO0VESk47QUFDRjtBQ09BO0VBQ0kseUJBQUE7QURMSjtBQ1FBO0VBQ0ksV0FBQTtBRExKO0FDUUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRExKO0FDU0k7RUFDSSxrQkFBQTtBRE5SO0FDVUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QURSSjtBQ1dBOztFQUVJLHlCQUFBO0FEUko7QUNZQTs7Ozs7Ozs7Ozs7SUFBQTtBQWFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFHQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLG9CQUFBO0FEWko7QUNnQkE7RUFDSSxrQkFBQTtFQUVBLG1CQUFBO0FEZEo7QUNXQTtFQUNJLGtCQUFBO0VBRUEsbUJBQUE7QURkSjtBQ1dBO0VBQ0ksa0JBQUE7RUFFQSxtQkFBQTtBRGRKO0FDV0E7RUFDSSxrQkFBQTtFQUVBLG1CQUFBO0FEZEo7QUNtQkE7O0VBRUkseUJBQUE7QURoQko7QUNvQkE7RUFDSSx1QkFBQTtBRGpCSjtBQ3NCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QURuQko7QUNzQkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBRG5CSjtBQ3VCQTs7Ozs7Ozs7O0lBQUE7QUFXQTtFQUNJLGNBQUE7QURyQko7QUN3QkE7RUFDSSxjQUFBO0VBR0EsVUFBQTtFQUNBLGVBQUE7QUR2Qko7QUMwQkE7RUFDSSxrQkFBQTtBRHZCSjtBQzJCQTtFQUNJLGVBQUE7QUR4QkoiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9tYXAtYWdyZWUvbWFwQWdyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFwLWJvcmRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NjJweDtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2luaXRpYWxtYXAge1xuICBwYWRkaW5nLXJpZ2h0OiAzJTtcbn1cblxuaSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1hbGVydC5hbGVydCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2Nsb3NlYm91dHRvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC8qIFLDqWRpZ2V6IHZvcyBwcm9wcmnDqXTDqXMgQ1NTIGljaSAqL1xuICAjY2xvc2Vib3V0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjkwcHg7XG4gIH1cbn1cbiNjbG9zZWJvdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiZWViO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hbGVydC1ib3JkZXIge1xuICBib3JkZXI6IHNvbGlkIGxpZ2h0Z3JleSAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNhcmQubmctc3Rhci1pbnNlcnRlZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGJ0bjpob3Zlcixcbi5kcm9wYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbn1cblxuLyogI3NlYXJjaCB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2VhcmNoaWNvbi5wbmcmc3hzcmY9QUxlS2swMjM0b3pPSjVLbmdjUVc1VXpwSDJ0eF9nOC0wQToxNTk1ODQyNzU3NDczJnRibT1pc2NoJnNvdXJjZT1pdSZpY3R4PTEmZmlyPVNKdzFJUE5QUFBHekFNJTI1MkNQdlJfM1NhZzFkR3pXTSUyNTJDXyZ2ZXQ9MSZ1c2c9QUk0Xy1rUl9ZaldqWFFxMTFxWndmNVNHUGN1YTRtUkR3QSZzYT1YJnZlZD0yYWhVS0V3anp0YlRGa2UzcUFoVk00YVFLSGN5REJmMFE5UUV3Q0hvRUNBb1FGQSZiaXc9MTM2NiZiaWg9NjI1I2ltZ3JjPVNKdzFJUE5QUFBHekFNJyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgLy9wYWRkaW5nOiAxNHB4IDc3MHB4IDEycHggNDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgLy8gZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZCgkY29sb3I6ICMwMDAwMDApO1xuICB9Ki9cbiNuZXdzZWFyY2gge1xuICB3aWR0aDogOTYzcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2JiYmJiYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1yaWdodDogMjIwcHg7XG59XG5cbiNsaXN0ZTpob3ZlcixcbiNsaXN0ZTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG59XG5cbiNzZWFyY2g6Zm9jdXMge1xuICBvdXRsaW5lOiAzcHggc29saWQgI2RkZDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBtaW4td2lkdGg6IDIzMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgei1pbmRleDogMTtcbn1cblxuLyouZHJvcGRvd24tY29udGVudCBpIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIC8vZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZHJvcGRvd24gaTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB9Ki9cbi5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNwYXJlbnQ0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIHdpZHRoOiA3NSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuI2NoaWxkNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2dyYW5kUGFyZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xufSIsIi5tYXAtYm9yZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjYycHg7XHJcbn1cclxuXHJcbiNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDI1JTtcclxufVxyXG5cclxuI2luaXRpYWxtYXAge1xyXG4gICAgLy9yaWdodDogLTEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG59XHJcblxyXG5pIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXBwLWFsZXJ0IHtcclxuICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuI2Nsb3NlYm91dHRvbiB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAvKiBSw6lkaWdleiB2b3MgcHJvcHJpw6l0w6lzIENTUyBpY2kgKi9cclxuICAgICNjbG9zZWJvdXR0b24ge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjkwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjbG9zZWJvdXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwYmVlYjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmFsZXJ0LWJvcmRlciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGxpZ2h0Z3JleSAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICAmLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvL2JvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3BidG46aG92ZXIsXHJcbi5kcm9wYnRuOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbn1cclxuXHJcblxyXG4vKiAjc2VhcmNoIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2VhcmNoaWNvbi5wbmcmc3hzcmY9QUxlS2swMjM0b3pPSjVLbmdjUVc1VXpwSDJ0eF9nOC0wQToxNTk1ODQyNzU3NDczJnRibT1pc2NoJnNvdXJjZT1pdSZpY3R4PTEmZmlyPVNKdzFJUE5QUFBHekFNJTI1MkNQdlJfM1NhZzFkR3pXTSUyNTJDXyZ2ZXQ9MSZ1c2c9QUk0Xy1rUl9ZaldqWFFxMTFxWndmNVNHUGN1YTRtUkR3QSZzYT1YJnZlZD0yYWhVS0V3anp0YlRGa2UzcUFoVk00YVFLSGN5REJmMFE5UUV3Q0hvRUNBb1FGQSZiaXc9MTM2NiZiaWg9NjI1I2ltZ3JjPVNKdzFJUE5QUFBHekFNJyk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAvL3BhZGRpbmc6IDE0cHggNzcwcHggMTJweCA0NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAvLyBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQoJGNvbG9yOiAjMDAwMDAwKTtcclxuICB9Ki9cclxuXHJcbiNuZXdzZWFyY2gge1xyXG4gICAgd2lkdGg6IDk2M3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiYmJiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgLy9wYWRkaW5nOiAxNHB4IDc3MHB4IDEycHggNDVweDtcclxufVxyXG5cclxuI3NlYXJjaDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgLy9wYWRkaW5nLWxlZnQ6IDIyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMjBweDtcclxuICAgIC8vcGFkZGluZzogMTRweCA3NzBweCAzMHB4IDQ1cHg7XHJcbiAgICAvL2JhY2tncm91bmQtcG9zaXRpb246IDE0cHggMTJweDtcclxufVxyXG5cclxuI2xpc3RlOmhvdmVyLFxyXG4jbGlzdGU6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbiNzZWFyY2g6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkICNkZGQ7XHJcbiAgICAvL21hcmdpbi1yaWdodDogLTgwJTtcclxuICAgIC8vd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBtaW4td2lkdGg6IDIzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi8qLmRyb3Bkb3duLWNvbnRlbnQgaSB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIC8vZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93biBpOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICB9Ki9cclxuXHJcbi5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jcGFyZW50NCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIC8vbGVmdDogLTI1cHg7XHJcbiAgICAvL21hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuI2NoaWxkNCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbn1cclxuXHJcbiNncmFuZFBhcmVudCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/dashboard/map-agree/mapAgree.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/mapAgree.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./MapAgreeService */ "./src/app/demo/dashboard/map-agree/MapAgreeService.ts"), __webpack_require__(/*! ../map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! src/Models/points */ "./src/Models/points.ts"), __webpack_require__(/*! src/Models/Categorie */ "./src/Models/Categorie.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, http_1, MapAgreeService_1, MapServices_1, Constants_1, points_1, Categorie_1, common_1, storage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapAgreeComponent = /** @class */ (function () {
        function MapAgreeComponent(Location, http, titleService, storage) {
            this.Location = Location;
            this.http = http;
            this.titleService = titleService;
            this.storage = storage;
            this.window = window;
            this.agrees = [];
            this.displayAgrees = [];
            this.points = [];
            this.displaypoints = [];
            this.categories = [];
            this.displaycategories = [];
            this.searching = false;
            this.clickedNomfre = new points_1.Points();
            this.ClikedCat = new points_1.Points();
            this.clickNomfrCategorie = new Categorie_1.Categorie();
            this.releves = [];
            this.pointReleve = [];
            this.configurations = [];
            this.ourconfig = [];
            this.adminsColor = [];
            this.pointsIndex = -1;
            this.categorieIndex = -1;
            this.deuxiemeClick = 0;
            this.clickedIndex = -1;
            this.adminGotTheRole = false;
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.consulter_agree) !== -1) {
                this.adminGotTheRole = true;
            }
        }
        MapAgreeComponent.prototype.ngOnInit = function () {
            this.titleService.setTitle("Consulter les Points");
            this.initializePoints();
            // console.log(this.ngOnInit);
        };
        MapAgreeComponent.prototype.createNewBlankAgree = function (agree) {
            agree.id = "***************";
            return agree;
        };
        MapAgreeComponent.prototype.pointsClick = function (index, marker) {
            var _this = this;
            var clickedPoints = this.points[index];
            this.clickedIndex = index;
            setTimeout(function () { MapAgreeService_1.MapAgreeService.setPoints(_this.points[index], _this.points[index]); }, 200);
            MapServices_1.MapServices.setNewView([
                clickedPoints.geoPoint.latitude,
                clickedPoints.geoPoint.longitude,
            ], 20, marker);
            this.resize();
        };
        MapAgreeComponent.prototype.initializePoints = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var s;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.points = [];
                            this.searching = false;
                            return [4 /*yield*/, MapAgreeService_1.MapAgreeService.getConfigurations(this.http).then(function (result) {
                                    // this.limiteReleveEnSecond = result
                                    //let con: config[] = result.config;
                                    //this.limiteReleveEnSecond = con[0].limiteReleveEnSec
                                    //this.limiteReleveEnSecond = this.ourconfig[0].limiteReleveEnSec
                                    // console.log("Voici notre resultat de la configuration "+result);
                                    var confu = result.configurations;
                                    _this.configurations = (confu ? Object.values(confu) : []);
                                    console.log("this is our confu", _this.configurations);
                                })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, MapAgreeService_1.MapAgreeService.getReleveurs(this.http).then(function (result) {
                                    console.log("Voici notre resultat releves " + result.releves);
                                    var relv = result.releves;
                                    _this.pointReleve = (relv ? Object.values(relv) : []);
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, MapAgreeService_1.MapAgreeService.getPoints(this.http).then(function (result) {
                                    console.log("Voici notre resultat----------------------------------------------------------" + result.points);
                                    var points = result.points;
                                    var displaypoints = result.displaypoints;
                                    _this.points = (points ? Object.values(points) : []);
                                    _this.displaypoints = (displaypoints ? Object.values(displaypoints) : []);
                                    console.log(_this.points.length);
                                    //console.log("**** rel ***** "+this.pointReleve.length);
                                    for (var i = 0; i < _this.points.length; i++) {
                                        MapServices_1.MapServices.addMarker([
                                            _this.points[i].geoPoint.latitude,
                                            _this.points[i].geoPoint.longitude,
                                        ], false, i, _this.points[i].nomClient);
                                        var testno = "" + _this.configurations[5];
                                        //parseInt(testno)
                                        _this.limiteReleveEnSecond = +testno;
                                        var time = new Date().getTime();
                                        for (var j = 0; j < _this.pointReleve.length; j++) {
                                            if (_this.pointReleve[j].point.identifiant.includes(_this.points[i].identifiant)) { //verify the existance of each point in releves
                                                var delai = time - _this.pointReleve[j].dateReleve;
                                                console.log("voici le delai", delai);
                                                console.log("voici le limiteReleveEnSecond", _this.limiteReleveEnSecond);
                                                console.log("time", time);
                                                console.log("voici la date releve", _this.pointReleve[j].dateReleve);
                                                if (delai < _this.limiteReleveEnSecond) {
                                                    console.log("");
                                                    MapServices_1.MapServices.addMarkerPointreleve([
                                                        _this.points[i].geoPoint.latitude,
                                                        _this.points[i].geoPoint.longitude,
                                                    ], false, i, _this.points[i].nomClient);
                                                }
                                            }
                                        }
                                    }
                                })];
                        case 3:
                            _a.sent();
                            console.log("voici notre temps limite", this.limiteReleveEnSecond);
                            this.categories = [];
                            return [4 /*yield*/, MapAgreeService_1.MapAgreeService.getCategories(this.http).then(function (result) {
                                    var categories = result.categories;
                                    var displaycategories = result.displaycategories;
                                    _this.categories = (categories ? Object.values(categories) : []);
                                    displaycategories = (displaycategories ? Object.values(categories) : []);
                                })];
                        case 4:
                            _a.sent();
                            s = 0;
                            return [2 /*return*/];
                    }
                });
            });
        };
        MapAgreeComponent.prototype.Search = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var numbersearch, search;
                return tslib_1.__generator(this, function (_a) {
                    numbersearch = 0;
                    search = document.getElementById('m-search').value;
                    console.log(search.length);
                    if (search.length === 0) {
                        console.log(search.length);
                        this.searching = false;
                        this.initializePoints();
                        numbersearch = 1;
                    }
                    else {
                        numbersearch = 2;
                    }
                    return [2 /*return*/];
                });
            });
        };
        MapAgreeComponent.prototype.verifyingSearch = function (event) {
            var search = document.getElementById('m-search').value;
            if (search == "") {
                this.searching = false;
                this.initializePoints();
            }
            else {
                if (event.key == "Enter")
                    this.Search();
            }
        };
        MapAgreeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.resize();
            this.initializePoints();
            MapAgreeService_1.MapAgreeService.get().subscribe(function (item) {
                if (item.pointsClicked) {
                    _this.pointsClick(item.index, item.marker);
                }
            });
        };
        MapAgreeComponent.prototype.resize = function () {
            setTimeout(function () { MapServices_1.MapServices.resize(); }, 400);
        };
        MapAgreeComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        MapAgreeComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        MapAgreeComponent.prototype.numbersearch = function (numbersearch) {
        };
        MapAgreeComponent.prototype.myFunction = function () {
            document.getElementById("myDropdown").classList.toggle("show");
        };
        MapAgreeComponent.prototype.filterFunctionPoints = function () {
            var input, output, filter, ul, li, a, i, points, j;
            input = document.getElementById("newsearch");
            filter = input.value.toUpperCase();
            var div = document.getElementById("myDropdown");
            i = div.getElementsByTagName("dt");
            for (j = 0; j < i.length; j++) {
                var txtValue = i[j].textContent || i[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    i[j].style.display = "";
                }
                else {
                    i[j].style.display = "none";
                }
            }
        };
        MapAgreeComponent.prototype.filterFunctionCategorie = function () {
            var input, output, filter, ul, li, a, i1, points, j;
            input = document.getElementById("newsearch");
            filter = input.value.toUpperCase();
            var div = document.getElementById("myDropdown");
            i1 = div.getElementsByTagName("dt");
            for (j = 0; j < i1.length; j++) {
                var txtValue = i1[j].textContent || i1[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    i1[j].style.display = "";
                }
                else {
                    i1[j].style.display = "none";
                }
            }
            document.getElementById("myDropdown").classList.toggle("hide");
        };
        MapAgreeComponent.prototype.filterFunctionAdress = function () {
            var input, output, filter, ul, li, a, i2, points, j;
            input = document.getElementById("newsearch");
            filter = input.value.toUpperCase();
            var div = document.getElementById("myDropdown");
            i2 = div.getElementsByTagName("dt");
            for (j = 0; j < i2.length; j++) {
                var txtValue = i2[j].textContent || i2[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    i2[j].style.display = "";
                }
                else {
                    i2[j].style.display = "none";
                }
            }
        };
        MapAgreeComponent.prototype.hoverOn = function (pointsIndex) {
            if (pointsIndex !== this.pointsIndex)
                this.adminsColor[pointsIndex] = "dark";
        };
        MapAgreeComponent.prototype.hoverOff = function (pointsIndex) {
            if (pointsIndex === this.pointsIndex) {
                this.adminsColor[pointsIndex] = "primary";
            }
            else {
                this.adminsColor[pointsIndex] = "light";
            }
        };
        MapAgreeComponent.prototype.clickedNomfr = function (index) {
            var input;
            this.adminsColor.fill('light');
            this.adminsColor[index] = "primary";
            this.pointsIndex = index;
            this.clickedNomfre = this.points[index];
            this.Nomfrcategori = this.clickedNomfre.nomClient;
            console.log(this.clickedNomfre.nomClient);
            this.myFunction();
            MapServices_1.MapServices.removeAllMarkers();
            MapServices_1.MapServices.addMarker([
                this.clickedNomfre.geoPoint.latitude,
                this.clickedNomfre.geoPoint.longitude,
            ], false, index, this.clickedNomfre.identifiant);
            MapServices_1.MapServices.setNewView([
                this.clickedNomfre.geoPoint.latitude,
                this.clickedNomfre.geoPoint.longitude,
            ], 20);
            MapServices_1.MapServices.resize();
        };
        MapAgreeComponent.prototype.clickedcaegories = function (index) {
            this.adminsColor.fill('light');
            this.adminsColor[index] = "primary";
            this.categorieIndex = index;
            console.log(this.categories[index].id);
            this.Nomfrcategori = this.categories[index].nomfr;
            for (var i = 0; i < this.points.length; i++) {
                if (this.points[i].numeroCompteur == this.categories[index].id) {
                    index = i;
                    console.log(index);
                    this.ClikedCat = this.points[index];
                    console.log('hello ' + this.points[i].nomClient);
                    document.getElementById("myDropdown").classList.toggle("hide");
                    console.log(this.points[i].geoPoint.latitude);
                    console.log(this.points[i].geoPoint.longitude);
                    MapServices_1.MapServices.removeAllMarkers();
                    MapServices_1.MapServices.addMarker([
                        this.ClikedCat.geoPoint.latitude,
                        this.ClikedCat.geoPoint.longitude,
                    ], false, index, this.ClikedCat.nomClient);
                    MapServices_1.MapServices.setNewView([
                        this.points[i].geoPoint.latitude,
                        this.points[i].geoPoint.longitude,
                    ], 20);
                    MapServices_1.MapServices.resize();
                }
            }
        };
        MapAgreeComponent.prototype.close = function () {
            this.clickedIndex = -1;
        };
        MapAgreeComponent.prototype.affichImg = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var i, imgAdminnistration, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            i = 0;
                            _b.label = 1;
                        case 1:
                            if (!(i < this.points.length)) return [3 /*break*/, 4];
                            imgAdminnistration = this.points[i].nomClient;
                            _a = this;
                            return [4 /*yield*/, this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()];
                        case 2:
                            _a.images = _b.sent();
                            console.log("storegeRef : " + this.images);
                            _b.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        MapAgreeComponent.ctorParameters = function () { return [
            { type: common_1.Location },
            { type: http_1.HttpClient },
            { type: platform_browser_1.Title },
            { type: storage_1.AngularFireStorage }
        ]; };
        MapAgreeComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-map-agree',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./mapAgree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-agree/mapAgree.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./mapAgree.component.scss */ "./src/app/demo/dashboard/map-agree/mapAgree.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [common_1.Location,
                http_1.HttpClient,
                platform_browser_1.Title,
                storage_1.AngularFireStorage])
        ], MapAgreeComponent);
        return MapAgreeComponent;
    }());
    exports.MapAgreeComponent = MapAgreeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/map-agree/mapAgree.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/dashboard/map-agree/mapAgree.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! ./mapAgree-routing.module */ "./src/app/demo/dashboard/map-agree/mapAgree-routing.module.ts"), __webpack_require__(/*! ./mapAgree.component */ "./src/app/demo/dashboard/map-agree/mapAgree.component.ts"), __webpack_require__(/*! ../map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js"), __webpack_require__(/*! ./agree-details/agree-details.module */ "./src/app/demo/dashboard/map-agree/agree-details/agree-details.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1, mapAgree_routing_module_1, mapAgree_component_1, map_module_1, http_1, functions_1, agree_details_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MapAgreeModule = /** @class */ (function () {
        function MapAgreeModule() {
        }
        MapAgreeModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    mapAgree_routing_module_1.MapAgreeRoutingModule,
                    map_module_1.MapModule,
                    common_1.CommonModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    angular_webstorage_service_1.StorageServiceModule,
                    ng_bootstrap_1.NgbCollapseModule,
                    ng_bootstrap_1.NgbAccordionModule,
                    http_1.HttpClientModule,
                    functions_1.AngularFireFunctionsModule,
                    agree_details_module_1.AgreeDetailsModule,
                ],
                declarations: [
                    mapAgree_component_1.MapAgreeComponent,
                ],
                providers: [],
            })
        ], MapAgreeModule);
        return MapAgreeModule;
    }());
    exports.MapAgreeModule = MapAgreeModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=5.js.map