(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/index/index.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/index/index.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>index works!</p>\r\n");

/***/ }),

/***/ "./src/app/demo/dashboard/index/index-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/dashboard/index/index-routing.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./index.component */ "./src/app/demo/dashboard/index/index.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, index_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: index_component_1.IndexComponent
        }
    ];
    var IndexRoutingModule = /** @class */ (function () {
        function IndexRoutingModule() {
        }
        IndexRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], IndexRoutingModule);
        return IndexRoutingModule;
    }());
    exports.IndexRoutingModule = IndexRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/index/index.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/demo/dashboard/index/index.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/demo/dashboard/index/index.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo/dashboard/index/index.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IndexComponent = /** @class */ (function () {
        function IndexComponent(titleService) {
            this.titleService = titleService;
        }
        IndexComponent.prototype.ngOnInit = function () {
            this.titleService.setTitle("Web Admin For COLFIN");
        };
        IndexComponent.ctorParameters = function () { return [
            { type: platform_browser_1.Title }
        ]; };
        IndexComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-index',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/index/index.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./index.component.scss */ "./src/app/demo/dashboard/index/index.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [platform_browser_1.Title])
        ], IndexComponent);
        return IndexComponent;
    }());
    exports.IndexComponent = IndexComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/index/index.module.ts":
/*!******************************************************!*\
  !*** ./src/app/demo/dashboard/index/index.module.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./index.component */ "./src/app/demo/dashboard/index/index.component.ts"), __webpack_require__(/*! ./index-routing.module */ "./src/app/demo/dashboard/index/index-routing.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, index_component_1, index_routing_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IndexModule = /** @class */ (function () {
        function IndexModule() {
        }
        IndexModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [index_component_1.IndexComponent],
                imports: [
                    common_1.CommonModule,
                    index_routing_module_1.IndexRoutingModule,
                ],
                exports: [
                    index_component_1.IndexComponent
                ]
            })
        ], IndexModule);
        return IndexModule;
    }());
    exports.IndexModule = IndexModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=15.js.map