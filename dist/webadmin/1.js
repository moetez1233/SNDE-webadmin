(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-new/agree-details/agree-details.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-new/agree-details/agree-details.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\">\r\n  \r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>image d'agence</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-2\">\r\n            <app-alert type=\"light\"><img src=\"assets/images/showimage.png\" #justifyingImage (click)=\"justifying('phoneNumber',justificationModal1,justification,justifyingImage)\">\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Id Agence</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplayadministration.id}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Nip</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplayadministration.nip}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Categorie</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedCategorie.nomfr}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Adresse</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplayadministration.Adresse}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Numéro Téléphone</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{clickedDisplayadministration.contact}}</i>\r\n            </app-alert>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\" style=\"width: 100%\">\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>Derniere mise à jour</i></app-alert>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n            <app-alert type=\"light\"><i>{{timestampToDate(clickedDisplayadministration.update)}}</i>\r\n            </app-alert>\r\n        </div>\r\n    </div>\r\n</perfect-scrollbar>\r\n\r\n\r\n<app-ui-modal #justificationModal [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Justification pour voir la donnée cachée </h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <input type=\"text\" class=\"form-control\" #justification placeholder=\"Justification\">\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal.hide();justification.value=''\">Fermer</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"justify(justificationModal,justification)\">Justifier</button>\r\n    </div>\r\n</app-ui-modal>\r\n<app-ui-modal #justificationModal1 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Image </h5>\r\n        <img src=\"{{url}}\" style=\"width: 50%;\">\r\n\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal1.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal1.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>");

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

/***/ "./src/Models/administration.ts":
/*!**************************************!*\
  !*** ./src/Models/administration.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Administration = /** @class */ (function () {
        function Administration() {
        }
        return Administration;
    }());
    exports.Administration = Administration;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/map-new/agree-details/agree-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/agree-details/agree-details.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n\n.row {\n  margin: 0px;\n}\n\n.alert-border {\n  border: solid lightgrey 1px;\n  border-radius: 10px;\n  padding: 2px;\n}\n\n.card.ng-star-inserted {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvbWFwLW5ldy9hZ3JlZS1kZXRhaWxzL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFxkZW1vXFxkYXNoYm9hcmRcXG1hcC1uZXdcXGFncmVlLWRldGFpbHNcXGFncmVlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL21hcC1uZXcvYWdyZWUtZGV0YWlscy9hZ3JlZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREtJO0VBQ0ksa0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL21hcC1uZXcvYWdyZWUtZGV0YWlscy9hZ3JlZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFwcC1hbGVydCB7XHJcbiAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmFsZXJ0LWJvcmRlciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIGxpZ2h0Z3JleSAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICAmLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxufSIsImkge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHAtYWxlcnQuYWxlcnQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFsZXJ0LWJvcmRlciB7XG4gIGJvcmRlcjogc29saWQgbGlnaHRncmV5IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY2FyZC5uZy1zdGFyLWluc2VydGVkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/dashboard/map-new/agree-details/agree-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/agree-details/agree-details.component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/Agree */ "./src/Models/Agree.ts"), __webpack_require__(/*! ../MapNewService */ "./src/app/demo/dashboard/map-new/MapNewService.ts"), __webpack_require__(/*! src/Models/Justification */ "./src/Models/Justification.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/Models/administration */ "./src/Models/administration.ts"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! src/Models/Categorie */ "./src/Models/Categorie.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, Agree_1, MapNewService_1, Justification_1, Service_1, http_1, administration_1, storage_1, Categorie_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AgreeDetailsComponent = /** @class */ (function () {
        function AgreeDetailsComponent(http, storage) {
            this.http = http;
            this.storage = storage;
            this.window = window;
            this.clickedDisplayAgree = new Agree_1.Agree();
            this.clickedAgree = new Agree_1.Agree();
            this.clickedDisplayadministration = new administration_1.Administration();
            this.clickedadministration = new administration_1.Administration();
            this.clickedCategorie = new Categorie_1.Categorie();
            this.clickedIndex = -1;
            this.categories = [];
        }
        AgreeDetailsComponent.prototype.ngOnInit = function () {
            var _this = this;
            MapNewService_1.MapNewService.get().subscribe(function (item) {
                if (item.clickedDisplayadministration && item.clickedadministration) {
                    _this.clickedDisplayadministration = item.clickedDisplayadministration;
                    _this.clickedadministration = item.clickedadministration;
                    console.log("contact : " + _this.clickedDisplayadministration.contact);
                    console.log(_this.clickedDisplayadministration.nomfr);
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
                            return [4 /*yield*/, MapNewService_1.MapNewService.getCategories(this.http).then(function (result) {
                                    var categories = result.categories;
                                    var displaycategories = result.displaycategories;
                                    _this.categories = (categories ? Object.values(categories) : []);
                                    for (var i = 0; i < _this.categories.length; i++) {
                                        if (_this.categories[i].id == _this.clickedDisplayadministration.categorie) {
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
                            imgAdminnistration = this.clickedDisplayadministration.imagefacade;
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
                justification.idObject = this.clickedDisplayadministration.id;
                this.justifyingImage.src = "assets/images/loading.gif";
                Service_1.Service.sendJustification(this.http, justification).then(function (result) {
                    if (result.status) {
                        _this.clickedDisplayadministration[_this.propertie] = _this.clickedadministration[_this.propertie];
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
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./agree-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/map-new/agree-details/agree-details.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./agree-details.component.scss */ "./src/app/demo/dashboard/map-new/agree-details/agree-details.component.scss")).default]
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

/***/ "./src/app/demo/dashboard/map-new/agree-details/agree-details.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/dashboard/map-new/agree-details/agree-details.module.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./agree-details.component */ "./src/app/demo/dashboard/map-new/agree-details/agree-details.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, agree_details_component_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1) {
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


/***/ })

}]);
//# sourceMappingURL=1.js.map