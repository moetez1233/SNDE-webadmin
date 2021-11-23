(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <!-- <div class=\"col-sm-12 m-b-15\" *ngIf=\"notConsulting\">\r\n        <div id=\"main-search\" class=\"main-search open\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" id=\"m-search\" class=\"form-control\" #search placeholder=\"Search . . .\"\r\n                    autocomplete=\"off\">\r\n                <span class=\"input-group-append search-btn btn btn-primary feather icon-search input-group-text\"\r\n                    (click)=\"Search()\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"col-md-4\">\r\n        <app-card [options]=\"false\" cardTitle=\"Liste des Demandes\">\r\n            <div class=\"col-md-12 text-left\" *ngIf=\"initializing\">\r\n                <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\">\r\n                </ngb-progressbar>\r\n            </div>\r\n            <div class=\"col-md-12 text-center\" *ngIf=\"demandes.length==0 && !initializing\">\r\n                <app-alert type=\"danger\">Aucune donnée trouvée\r\n                    {{ search ? (search.value==\"\" ? \"\" : \"pour \" + \"'\"+search.value+\"'\") : \"\"}}\r\n                </app-alert>\r\n            </div>\r\n            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\"\r\n                [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n                <div class=\"col-md-12\">\r\n                    <ng-container>\r\n                        <ng-container *ngFor=\"let demand of demandes;let demindex=index\">\r\n                            <app-alert (mouseenter)=\"hoverOn(demindex)\" (mouseleave)=\"hoverOff(demindex)\"\r\n                                (click)=\"demClicked(demindex)\" style=\"cursor: pointer;\"\r\n                                [type]=\"demandesColor[demindex]\">\r\n                                <div class=\"row\" style=\"margin-left: -20px;margin-right: -10px;\">\r\n                                    <i class=\"col-md-6 text-left\">\r\n                                        <img [src]=\" demand.status ? (demand.status==1 ? 'assets/images/IconAccept.png' : 'assets/images/IconRefused.png') : 'assets/images/IconInProgress.png'\"\r\n                                            [title]=\"demand.status ? (demand.status==1 ? 'Acceptée' : 'Refusée') : 'En Cours'\">\r\n                                        {{demandeType[demand.typeDemande]}}\r\n                                    </i>\r\n                                    <i class=\"col-md-6 text-right\"> {{timestampToDate(demand.created)}}</i>\r\n                                </div>\r\n                            </app-alert>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </app-card>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <app-details-demande></app-details-demande>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/consulter-demandes-routing.module.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./consulter-demandes.component */ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, consulter_demandes_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: consulter_demandes_component_1.ConsulterDemandesComponent
        }
    ];
    var ConsulterDemandesRoutingModule = /** @class */ (function () {
        function ConsulterDemandesRoutingModule() {
        }
        ConsulterDemandesRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], ConsulterDemandesRoutingModule);
        return ConsulterDemandesRoutingModule;
    }());
    exports.ConsulterDemandesRoutingModule = ConsulterDemandesRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\nimg {\n  width: 15px;\n  cursor: pointer;\n}\n\n.row {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLWRlbWFuZGVzL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFxkZW1vXFxkYXNoYm9hcmRcXGNvbnN1bHRlci1kZW1hbmRlc1xcY29uc3VsdGVyLWRlbWFuZGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItZGVtYW5kZXMvY29uc3VsdGVyLWRlbWFuZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFSTtFQUNJLFlBQUE7QUNDUjs7QURFQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0FDQ0g7O0FEQ0E7RUFDSSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItZGVtYW5kZXMvY29uc3VsdGVyLWRlbWFuZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFwcC1hbGVydHtcclxuICAgICYuYWxlcnR7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICB9XHJcbn1cclxuaW1nIHtcclxuICAgd2lkdGg6MTVweDsgXHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucm93e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iLCJpIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYXBwLWFsZXJ0LmFsZXJ0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/demande */ "./src/Models/demande.ts"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! ./Consulter-Demandes.Service */ "./src/app/demo/dashboard/consulter-demandes/Consulter-Demandes.Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, demande_1, platform_browser_1, Consulter_Demandes_Service_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterDemandesComponent = /** @class */ (function () {
        function ConsulterDemandesComponent(titleService, http) {
            this.titleService = titleService;
            this.http = http;
            this.initializing = true;
            this.demandeType = ["Approuvé", "Identité", " Portefeuille", "Plus Proche Agréé"];
            this.demandesColor = [];
            this.clickedIndex = -1;
            this.demandes = [];
            this.displayDemandes = [];
            this.window = window;
        }
        ConsulterDemandesComponent.prototype.ngOnInit = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.titleService.setTitle("Consulter les Demandes");
                    //this.firebase.list("demandes").snapshotChanges().subscribe(async () => {
                    this.initializeDemandes();
                    return [2 /*return*/];
                });
            });
        };
        ConsulterDemandesComponent.prototype.initializeDemandes = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.initializing = true;
                            this.clickedIndex = -1;
                            return [4 /*yield*/, Consulter_Demandes_Service_1.ConsulterDemandesServices.getDemandes(this.http).then(function (result) {
                                    _this.demandes = result.demandes;
                                    console.log("demande id " + _this.demandes[0].typeDemande);
                                    _this.displayDemandes = result.displayDemandes;
                                    _this.demandesColor = [];
                                    for (var i = 0; i < _this.demandes.length; i++) {
                                        _this.displayDemandes[i] = _this.createNewBlankDemande(_this.displayDemandes[i]);
                                        _this.demandesColor[i] = "light";
                                    }
                                })];
                        case 1:
                            _a.sent();
                            this.initializing = false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsulterDemandesComponent.prototype.ngAfterViewInit = function () { };
        ConsulterDemandesComponent.prototype.createNewBlankDemande = function (demande) {
            var dem = new demande_1.Demande();
            dem = demande;
            if (dem.parametreDemande.email)
                dem.parametreDemande.email = "***************";
            if (dem.parametreDemande.phoneNumber)
                dem.parametreDemande.phoneNumber = "***************";
            if (demande.status) {
                dem.traitedBy = "***************";
            }
            return dem;
        };
        ConsulterDemandesComponent.prototype.demClicked = function (demindex) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var clickedDisplayDemande, clickedDemande;
                return tslib_1.__generator(this, function (_a) {
                    this.demandesColor.fill('light');
                    this.demandesColor[demindex] = "primary";
                    this.clickedIndex = demindex;
                    clickedDisplayDemande = this.displayDemandes[demindex];
                    clickedDemande = this.demandes[demindex];
                    Consulter_Demandes_Service_1.ConsulterDemandesServices.setDemande(clickedDemande, clickedDisplayDemande);
                    return [2 /*return*/];
                });
            });
        };
        ConsulterDemandesComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        ConsulterDemandesComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        ConsulterDemandesComponent.prototype.hoverOn = function (demindex) {
            if (demindex !== this.clickedIndex)
                this.demandesColor[demindex] = "dark";
        };
        ConsulterDemandesComponent.prototype.hoverOff = function (demindex) {
            if (demindex === this.clickedIndex) {
                this.demandesColor[demindex] = "primary";
            }
            else {
                this.demandesColor[demindex] = "light";
            }
        };
        ConsulterDemandesComponent.ctorParameters = function () { return [
            { type: platform_browser_1.Title },
            { type: http_1.HttpClient }
        ]; };
        ConsulterDemandesComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-consulter-demandes',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./consulter-demandes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./consulter-demandes.component.scss */ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [platform_browser_1.Title,
                http_1.HttpClient])
        ], ConsulterDemandesComponent);
        return ConsulterDemandesComponent;
    }());
    exports.ConsulterDemandesComponent = ConsulterDemandesComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/consulter-demandes.module.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! ./consulter-demandes-routing.module */ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes-routing.module.ts"), __webpack_require__(/*! ./consulter-demandes.component */ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.component.ts"), __webpack_require__(/*! ../map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./details-demande/details-demande.module */ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1, consulter_demandes_routing_module_1, consulter_demandes_component_1, map_module_1, http_1, details_demande_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterDemandesModule = /** @class */ (function () {
        function ConsulterDemandesModule() {
        }
        ConsulterDemandesModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    consulter_demandes_routing_module_1.ConsulterDemandesRoutingModule,
                    shared_module_1.SharedModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    angular_webstorage_service_1.StorageServiceModule,
                    ng_bootstrap_1.NgbCollapseModule,
                    map_module_1.MapModule,
                    http_1.HttpClientModule,
                    details_demande_module_1.DetailsDemandeModule
                ],
                declarations: [
                    consulter_demandes_component_1.ConsulterDemandesComponent,
                ],
                providers: [],
            })
        ], ConsulterDemandesModule);
        return ConsulterDemandesModule;
    }());
    exports.ConsulterDemandesModule = ConsulterDemandesModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=13.js.map