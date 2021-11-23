(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-new/mapAgree.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-new/mapAgree.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!adminGotTheRole\" class=\"col-sm-12\">\r\n    <app-alert type=\"danger\" dismiss=\"true\" class=\"alert\">\r\n        <h3>Vous ne posséde pas la permission de consulter les agences!<br> Veusillez contacter votre administrateur pour cette permission</h3>\r\n    </app-alert>\r\n</div>\r\n<div id=\"child4\" class=\"col-sm-12 m-b-15\">\r\n    <div id=\"main-search\" class=\"main-search open\">\r\n        <div class=\"input-group\">\r\n\r\n            <div class=\"dropdown\">\r\n                <input type=\"text\" placeholder=\"search\" id=\"newsearch\" (click)=\"myFunction()\" (keyup)=\"filterFunctionAdministration()\" value=\"{{Nomfrcategori}}\">\r\n                \r\n\r\n\r\n                <div id=\"myDropdown\" class=\"dropdown-content\">\r\n                    <perfect-scrollbar [style.max-height]=\"(window.innerHeight-500)+'px'\">\r\n                        <dl *ngFor=\"let administration of administrations;let administrationIndex=index;\">\r\n                            <dt style=\"padding-left: 2%;\" id=\"liste\" (click)=\"clickedNomfr(administrationIndex);deuxiemClick(administrationIndex)\">{{administration.nip}}</dt>\r\n                           \r\n\r\n                        </dl>\r\n                        <dl *ngFor=\"let categorie of categories;let categorieIndex=index;\">\r\n                            <dt style=\"padding-left: 2%;\" id=\"liste\" (click)=\"myFunction();clickedcaegories(categorieIndex)\">{{categorie.nomfr}}</dt>\r\n                        </dl>\r\n                    </perfect-scrollbar>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"parent4\" *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div id=\"initialmap\" class=\"{{clickedIndex!==-1 ? 'col-sm-6' : 'col-sm-12'}}\">\r\n        <app-map></app-map>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\" *ngIf=\"clickedIndex!==-1\" style=\"padding-bottom:70%;\">\r\n\r\n        <div class=\"col-md-12\">\r\n            <app-card [options]=\"false\" cardTitle=\"Details de l'agence\">\r\n                <div style=\"height: 280px;\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-11\">\r\n\r\n                        </div>\r\n                        <div class=\"col-md-1\"> <img src=\"assets/images/close.png\" (click)=\"close()\" id=\"closeboutton\">\r\n                        </div>\r\n                    </div>\r\n                    <app-agree-details></app-agree-details>\r\n                </div>\r\n\r\n            </app-card>\r\n        </div>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/demo/dashboard/map-new/mapAgree-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/mapAgree-routing.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./mapAgree.component */ "./src/app/demo/dashboard/map-new/mapAgree.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, mapAgree_component_1) {
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

/***/ "./src/app/demo/dashboard/map-new/mapAgree.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/mapAgree.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.map-border {\n  position: relative;\n  height: 662px;\n}\n#map {\n  height: 100%;\n}\n#initialmap {\n  padding-right: 3%;\n}\ni {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n.app-alert.alert {\n  color: black;\n}\n#closeboutton {\n  width: 20px;\n  margin-top: -145px;\n  margin-left: 20px;\n  border-radius: 50%;\n}\n@media all and (min-width: 800px) and (max-width: 1280px) {\n  /* Rédigez vos propriétés CSS ici */\n  #closeboutton {\n    margin-left: 290px;\n  }\n}\n#closeboutton:hover {\n  background-color: #60beeb;\n}\n.row {\n  margin: 0px;\n}\n.alert-border {\n  border: solid lightgrey 1px;\n  border-radius: 10px;\n  padding: 2px;\n}\n.card.ng-star-inserted {\n  margin-bottom: 0px;\n}\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  cursor: pointer;\n}\n.dropbtn:hover,\n.dropbtn:focus {\n  background-color: #3e8e41;\n}\n/* #search {\n      box-sizing: border-box;\n      //background-image: url('https://www.google.com/search?q=searchicon.png&sxsrf=ALeKk0234ozOJ5KngcQW5UzpH2tx_g8-0A:1595842757473&tbm=isch&source=iu&ictx=1&fir=SJw1IPNPPPGzAM%252CPvR_3Sag1dGzWM%252C_&vet=1&usg=AI4_-kR_YjWjXQq11qZwf5SGPcua4mRDwA&sa=X&ved=2ahUKEwjztbTFke3qAhVM4aQKHcyDBf0Q9QEwCHoECAoQFA&biw=1366&bih=625#imgrc=SJw1IPNPPPGzAM');\n      background-position: 14px 12px;\n      background-repeat: no-repeat;\n      font-size: 16px;\n      //padding: 14px 770px 12px 45px;\n      border-radius: 5px;\n      border-bottom: 1px solid #ddd;\n      // font-family: Verdana;\n      //background-color: red($color: #000000);\n  }*/\n#newsearch {\n  width: 963px;\n  box-sizing: border-box;\n  background-position: 14px 12px;\n  background-repeat: no-repeat;\n  font-size: 16px;\n  padding-bottom: 10px;\n  border: 2px solid #bbbbbb;\n  border-radius: 8px;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  margin-bottom: -10px;\n}\n#search::-webkit-input-placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#search::-moz-placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#search::-ms-input-placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#search::placeholder {\n  font-style: italic;\n  margin-right: 220px;\n}\n#liste:hover,\n#liste:focus {\n  background-color: #bdc3c7;\n}\n#search:focus {\n  outline: 3px solid #ddd;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content {\n  display: none;\n  position: relative;\n  background-color: #f6f6f6;\n  min-width: 230px;\n  overflow: auto;\n  border: 1px solid #ddd;\n  z-index: 1;\n}\n/*.dropdown-content i {\n      color: black;\n      padding: 12px 16px;\n      text-decoration: none;\n      //display: block;\n  }\n\n  .dropdown i:hover {\n      background-color: #ddd;\n  }*/\n.show {\n  display: block;\n}\n#parent4 {\n  margin-top: 5%;\n  width: 75%;\n  position: fixed;\n}\n#child4 {\n  position: absolute;\n}\n#grandParent {\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvbWFwLW5ldy9tYXBBZ3JlZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvbWFwLW5ldy9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcZGVtb1xcZGFzaGJvYXJkXFxtYXAtbmV3XFxtYXBBZ3JlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtBREVKO0FDRUE7RUFFSSxpQkFBQTtBREFKO0FDR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBREFKO0FDSUk7RUFDSSxZQUFBO0FERFI7QUNLQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURISjtBQ01BO0VBQ0ksbUNBQUE7RUFDQTtJQUVJLGtCQUFBO0VESk47QUFDRjtBQ09BO0VBQ0kseUJBQUE7QURMSjtBQ1FBO0VBQ0ksV0FBQTtBRExKO0FDUUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRExKO0FDU0k7RUFDSSxrQkFBQTtBRE5SO0FDVUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QURSSjtBQ1dBOztFQUVJLHlCQUFBO0FEUko7QUNZQTs7Ozs7Ozs7Ozs7SUFBQTtBQWFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFHQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLG9CQUFBO0FEWko7QUNnQkE7RUFDSSxrQkFBQTtFQUVBLG1CQUFBO0FEZEo7QUNXQTtFQUNJLGtCQUFBO0VBRUEsbUJBQUE7QURkSjtBQ1dBO0VBQ0ksa0JBQUE7RUFFQSxtQkFBQTtBRGRKO0FDV0E7RUFDSSxrQkFBQTtFQUVBLG1CQUFBO0FEZEo7QUNtQkE7O0VBRUkseUJBQUE7QURoQko7QUNvQkE7RUFDSSx1QkFBQTtBRGpCSjtBQ3NCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QURuQko7QUNzQkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBRG5CSjtBQ3VCQTs7Ozs7Ozs7O0lBQUE7QUFXQTtFQUNJLGNBQUE7QURyQko7QUN3QkE7RUFDSSxjQUFBO0VBR0EsVUFBQTtFQUNBLGVBQUE7QUR2Qko7QUMwQkE7RUFDSSxrQkFBQTtBRHZCSjtBQzJCQTtFQUNJLGVBQUE7QUR4QkoiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9tYXAtbmV3L21hcEFncmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1hcC1ib3JkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjYycHg7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNpbml0aWFsbWFwIHtcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbmkge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHAtYWxlcnQuYWxlcnQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNjbG9zZWJvdXR0b24ge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTE0NXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAvKiBSw6lkaWdleiB2b3MgcHJvcHJpw6l0w6lzIENTUyBpY2kgKi9cbiAgI2Nsb3NlYm91dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDI5MHB4O1xuICB9XG59XG4jY2xvc2Vib3V0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYmVlYjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWxlcnQtYm9yZGVyIHtcbiAgYm9yZGVyOiBzb2xpZCBsaWdodGdyZXkgMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5jYXJkLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyb3BidG46aG92ZXIsXG4uZHJvcGJ0bjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG59XG5cbi8qICNzZWFyY2gge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXNlYXJjaGljb24ucG5nJnN4c3JmPUFMZUtrMDIzNG96T0o1S25nY1FXNVV6cEgydHhfZzgtMEE6MTU5NTg0Mjc1NzQ3MyZ0Ym09aXNjaCZzb3VyY2U9aXUmaWN0eD0xJmZpcj1TSncxSVBOUFBQR3pBTSUyNTJDUHZSXzNTYWcxZEd6V00lMjUyQ18mdmV0PTEmdXNnPUFJNF8ta1JfWWpXalhRcTExcVp3ZjVTR1BjdWE0bVJEd0Emc2E9WCZ2ZWQ9MmFoVUtFd2p6dGJURmtlM3FBaFZNNGFRS0hjeURCZjBROVFFd0NIb0VDQW9RRkEmYml3PTEzNjYmYmloPTYyNSNpbWdyYz1TSncxSVBOUFBQR3pBTScpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTRweCAxMnB4O1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIC8vcGFkZGluZzogMTRweCA3NzBweCAxMnB4IDQ1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICAgIC8vIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQoJGNvbG9yOiAjMDAwMDAwKTtcbiAgfSovXG4jbmV3c2VhcmNoIHtcbiAgd2lkdGg6IDk2M3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiYmJiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG5cbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tcmlnaHQ6IDIyMHB4O1xufVxuXG4jbGlzdGU6aG92ZXIsXG4jbGlzdGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjM2M3O1xufVxuXG4jc2VhcmNoOmZvY3VzIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkICNkZGQ7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qLmRyb3Bkb3duLWNvbnRlbnQgaSB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAvL2Rpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmRyb3Bkb3duIGk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgfSovXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jcGFyZW50NCB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogNzUlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNjaGlsZDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNncmFuZFBhcmVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn0iLCIubWFwLWJvcmRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDY2MnB4O1xyXG59XHJcblxyXG4jbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbiNpbml0aWFsbWFwIHtcclxuICAgIC8vcmlnaHQ6IC0xMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuaSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFwcC1hbGVydCB7XHJcbiAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjbG9zZWJvdXR0b24ge1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLyogUsOpZGlnZXogdm9zIHByb3ByacOpdMOpcyBDU1MgaWNpICovXHJcbiAgICAjY2xvc2Vib3V0dG9uIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI5MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4jY2xvc2Vib3V0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGJlZWI7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5hbGVydC1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiBzb2xpZCBsaWdodGdyZXkgMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgJi5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy9ib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wYnRuOmhvdmVyLFxyXG4uZHJvcGJ0bjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG59XHJcblxyXG5cclxuLyogI3NlYXJjaCB7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPXNlYXJjaGljb24ucG5nJnN4c3JmPUFMZUtrMDIzNG96T0o1S25nY1FXNVV6cEgydHhfZzgtMEE6MTU5NTg0Mjc1NzQ3MyZ0Ym09aXNjaCZzb3VyY2U9aXUmaWN0eD0xJmZpcj1TSncxSVBOUFBQR3pBTSUyNTJDUHZSXzNTYWcxZEd6V00lMjUyQ18mdmV0PTEmdXNnPUFJNF8ta1JfWWpXalhRcTExcVp3ZjVTR1BjdWE0bVJEd0Emc2E9WCZ2ZWQ9MmFoVUtFd2p6dGJURmtlM3FBaFZNNGFRS0hjeURCZjBROVFFd0NIb0VDQW9RRkEmYml3PTEzNjYmYmloPTYyNSNpbWdyYz1TSncxSVBOUFBQR3pBTScpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgLy9wYWRkaW5nOiAxNHB4IDc3MHB4IDEycHggNDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgLy8gZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkKCRjb2xvcjogIzAwMDAwMCk7XHJcbiAgfSovXHJcblxyXG4jbmV3c2VhcmNoIHtcclxuICAgIHdpZHRoOiA5NjNweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmJiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIC8vcGFkZGluZzogMTRweCA3NzBweCAxMnB4IDQ1cHg7XHJcbn1cclxuXHJcbiNzZWFyY2g6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIC8vcGFkZGluZy1sZWZ0OiAyMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjIwcHg7XHJcbiAgICAvL3BhZGRpbmc6IDE0cHggNzcwcHggMzBweCA0NXB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNHB4IDEycHg7XHJcbn1cclxuXHJcbiNsaXN0ZTpob3ZlcixcclxuI2xpc3RlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG59XHJcblxyXG4jc2VhcmNoOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDNweCBzb2xpZCAjZGRkO1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IC04MCU7XHJcbiAgICAvL3dpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4vKi5kcm9wZG93bi1jb250ZW50IGkge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAvL2Rpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24gaTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgfSovXHJcblxyXG4uc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3BhcmVudDQge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAvL2xlZnQ6IC0yNXB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbiNjaGlsZDQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4jZ3JhbmRQYXJlbnQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/demo/dashboard/map-new/mapAgree.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/mapAgree.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./MapNewService */ "./src/app/demo/dashboard/map-new/MapNewService.ts"), __webpack_require__(/*! ../map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! src/Models/administration */ "./src/Models/administration.ts"), __webpack_require__(/*! src/Models/Categorie */ "./src/Models/Categorie.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1, http_1, MapNewService_1, MapServices_1, Constants_1, administration_1, Categorie_1, common_1, storage_1) {
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
            this.administrations = [];
            this.displayadministrations = [];
            this.categories = [];
            this.displaycategories = [];
            this.searching = false;
            this.clickedNomfre = new administration_1.Administration();
            this.ClikedCat = new administration_1.Administration();
            this.clickNomfrCategorie = new Categorie_1.Categorie();
            this.adminsColor = [];
            this.administrationIndex = -1;
            this.categorieIndex = -1;
            this.deuxiemeClick = 0;
            this.clickedIndex = -1;
            this.adminGotTheRole = false;
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.consulter_agree) !== -1) {
                this.adminGotTheRole = true;
            }
        }
        MapAgreeComponent.prototype.ngOnInit = function () {
            this.titleService.setTitle("Consulter les Administrations");
            this.initializeAdministration();
        };
        MapAgreeComponent.prototype.createNewBlankAgree = function (agree) {
            agree.id = "***************";
            return agree;
        };
        MapAgreeComponent.prototype.administrationClick = function (index, marker) {
            var _this = this;
            var clickedAdministration = this.administrations[index];
            this.clickedIndex = index;
            setTimeout(function () { MapNewService_1.MapNewService.setAdministration(_this.administrations[index], _this.administrations[index]); }, 200);
            MapServices_1.MapServices.setNewView([
                clickedAdministration.Lat,
                clickedAdministration.Long,
            ], 20, marker);
            this.resize();
        };
        MapAgreeComponent.prototype.initializeAdministration = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var s;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.administrations = [];
                            this.searching = false;
                            return [4 /*yield*/, MapNewService_1.MapNewService.getAdministrations(this.http).then(function (result) {
                                    console.log("Voici notre resultat" + result.administrations);
                                    var administrations = result.administrations;
                                    var displayadministrations = result.displayadministrations;
                                    _this.administrations = (administrations ? Object.values(administrations) : []);
                                    _this.displayadministrations = (displayadministrations ? Object.values(displayadministrations) : []);
                                    console.log(_this.administrations.length);
                                    for (var i = 0; i < _this.administrations.length; i++) {
                                        MapServices_1.MapServices.addMarker([
                                            _this.administrations[i].Lat,
                                            _this.administrations[i].Long,
                                        ], false, i, _this.administrations[i].nip);
                                        console.log("helllo" + _this.administrations[i].Lat);
                                    }
                                })];
                        case 1:
                            _a.sent();
                            this.categories = [];
                            return [4 /*yield*/, MapNewService_1.MapNewService.getCategories(this.http).then(function (result) {
                                    var categories = result.categories;
                                    var displaycategories = result.displaycategories;
                                    _this.categories = (categories ? Object.values(categories) : []);
                                    displaycategories = (displaycategories ? Object.values(categories) : []);
                                })];
                        case 2:
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
                        this.initializeAdministration();
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
                this.initializeAdministration();
            }
            else {
                if (event.key == "Enter")
                    this.Search();
            }
        };
        MapAgreeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.resize();
            this.initializeAdministration();
            MapNewService_1.MapNewService.get().subscribe(function (item) {
                if (item.administrationClicked) {
                    _this.administrationClick(item.index, item.marker);
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
        MapAgreeComponent.prototype.filterFunctionAdministration = function () {
            var input, output, filter, ul, li, a, i, administrations, j;
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
            var input, output, filter, ul, li, a, i1, administrations, j;
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
            var input, output, filter, ul, li, a, i2, administrations, j;
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
        MapAgreeComponent.prototype.hoverOn = function (administrationIndex) {
            if (administrationIndex !== this.administrationIndex)
                this.adminsColor[administrationIndex] = "dark";
        };
        MapAgreeComponent.prototype.hoverOff = function (administrationIndex) {
            if (administrationIndex === this.administrationIndex) {
                this.adminsColor[administrationIndex] = "primary";
            }
            else {
                this.adminsColor[administrationIndex] = "light";
            }
        };
        MapAgreeComponent.prototype.clickedNomfr = function (index) {
            var input;
            this.adminsColor.fill('light');
            this.adminsColor[index] = "primary";
            this.administrationIndex = index;
            this.clickedNomfre = this.administrations[index];
            this.Nomfrcategori = this.clickedNomfre.nip;
            console.log(this.clickedNomfre.nomfr);
            this.myFunction();
            MapServices_1.MapServices.removeAllMarkers();
            MapServices_1.MapServices.addMarker([
                this.clickedNomfre.Lat,
                this.clickedNomfre.Long,
            ], false, index, this.clickedNomfre.nip);
            MapServices_1.MapServices.setNewView([
                this.clickedNomfre.Lat,
                this.clickedNomfre.Long,
            ], 20);
            MapServices_1.MapServices.resize();
        };
        MapAgreeComponent.prototype.clickedcaegories = function (index) {
            this.adminsColor.fill('light');
            this.adminsColor[index] = "primary";
            this.categorieIndex = index;
            console.log(this.categories[index].id);
            this.Nomfrcategori = this.categories[index].nomfr;
            for (var i = 0; i < this.administrations.length; i++) {
                if (this.administrations[i].categorie == this.categories[index].id) {
                    index = i;
                    console.log(index);
                    this.ClikedCat = this.administrations[index];
                    console.log('hello ' + this.administrations[i].nomfr);
                    document.getElementById("myDropdown").classList.toggle("hide");
                    console.log(this.administrations[i].Lat);
                    console.log(this.administrations[i].Long);
                    MapServices_1.MapServices.removeAllMarkers();
                    MapServices_1.MapServices.addMarker([
                        this.ClikedCat.Lat,
                        this.ClikedCat.Long,
                    ], false, index, this.ClikedCat.nip);
                    MapServices_1.MapServices.setNewView([
                        this.administrations[i].Lat,
                        this.administrations[i].Long,
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
                            if (!(i < this.administrations.length)) return [3 /*break*/, 4];
                            imgAdminnistration = this.administrations[i].imagefacade;
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
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./mapAgree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-new/mapAgree.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./mapAgree.component.scss */ "./src/app/demo/dashboard/map-new/mapAgree.component.scss")).default]
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

/***/ "./src/app/demo/dashboard/map-new/mapAgree.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/mapAgree.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! ./mapAgree-routing.module */ "./src/app/demo/dashboard/map-new/mapAgree-routing.module.ts"), __webpack_require__(/*! ./mapAgree.component */ "./src/app/demo/dashboard/map-new/mapAgree.component.ts"), __webpack_require__(/*! ../map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js"), __webpack_require__(/*! ./agree-details/agree-details.module */ "./src/app/demo/dashboard/map-new/agree-details/agree-details.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1, mapAgree_routing_module_1, mapAgree_component_1, map_module_1, http_1, functions_1, agree_details_module_1) {
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
//# sourceMappingURL=3.js.map