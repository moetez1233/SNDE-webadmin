(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/app/demo/pages/maintenance/maintenance-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/maintenance-routing.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            children: [
            // {
            //   path: 'coming-soon',
            //   loadChildren: () => import('./mainten-coming-soon/mainten-coming-soon.module').then(module => module.MaintenComingSoonModule)
            // },
            // {
            //   path: 'error',
            //   loadChildren: () => import('./mainten-error/mainten-error.module').then(module => module.MaintenErrorModule)
            // }
            ]
        }
    ];
    var MaintenanceRoutingModule = /** @class */ (function () {
        function MaintenanceRoutingModule() {
        }
        MaintenanceRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], MaintenanceRoutingModule);
        return MaintenanceRoutingModule;
    }());
    exports.MaintenanceRoutingModule = MaintenanceRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/maintenance/maintenance.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/demo/pages/maintenance/maintenance.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./maintenance-routing.module */ "./src/app/demo/pages/maintenance/maintenance-routing.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, maintenance_routing_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MaintenanceModule = /** @class */ (function () {
        function MaintenanceModule() {
        }
        MaintenanceModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    maintenance_routing_module_1.MaintenanceRoutingModule
                ],
                declarations: []
            })
        ], MaintenanceModule);
        return MaintenanceModule;
    }());
    exports.MaintenanceModule = MaintenanceModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=22.js.map