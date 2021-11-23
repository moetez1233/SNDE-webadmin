(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/app/demo/dashboard/dashboard-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            children: [
                {
                    path: '',
                    loadChildren: function () { return new Promise(function (resolve_1, reject_1) { __webpack_require__.e(/*! AMD require */ 15).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./index/index.module */ "./src/app/demo/dashboard/index/index.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then(function (module) { return module.IndexModule; }); }
                },
                {
                    path: 'manager',
                    loadChildren: function () { return new Promise(function (resolve_2, reject_2) { __webpack_require__.e(/*! AMD require */ 11).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./dash-analytics/dash-analytics.module */ "./src/app/demo/dashboard/dash-analytics/dash-analytics.module.ts")]; (resolve_2).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_2.bind(this)); }).then(function (module) { return module.DashAnalyticsModule; }); }
                },
                {
                    path: 'add-releveur',
                    loadChildren: function () { return new Promise(function (resolve_3, reject_3) { __webpack_require__.e(/*! AMD require */ 8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./add-releveur/add-releveur.module */ "./src/app/demo/dashboard/add-releveur/add-releveur.module.ts")]; (resolve_3).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_3.bind(this)); }).then(function (module) { return module.AddReleveurModule; }); }
                },
                {
                    path: 'traceability',
                    loadChildren: function () { return new Promise(function (resolve_4, reject_4) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(14)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./dashboard-traceability/dashboard-traceability.module */ "./src/app/demo/dashboard/dashboard-traceability/dashboard-traceability.module.ts")]; (resolve_4).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_4.bind(this)); }).then(function (module) { return module.DashboardTraceabilityModule; }); }
                },
                {
                    path: 'add-new-admin',
                    loadChildren: function () { return new Promise(function (resolve_5, reject_5) { __webpack_require__.e(/*! AMD require */ 9).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./add-new-admin/add-new-admin.module */ "./src/app/demo/dashboard/add-new-admin/add-new-admin.module.ts")]; (resolve_5).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_5.bind(this)); }).then(function (module) { return module.AddNewAdminModule; }); }
                },
                {
                    path: 'profile',
                    loadChildren: function () { return new Promise(function (resolve_6, reject_6) { __webpack_require__.e(/*! AMD require */ 12).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./admin-profile/admin-profile.module */ "./src/app/demo/dashboard/admin-profile/admin-profile.module.ts")]; (resolve_6).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_6.bind(this)); }).then(function (module) { return module.AdminProfileModule; }); }
                },
                {
                    path: 'admins-list',
                    loadChildren: function () { return new Promise(function (resolve_7, reject_7) { __webpack_require__.e(/*! AMD require */ 7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./admins-list/admins-list.module */ "./src/app/demo/dashboard/admins-list/admins-list.module.ts")]; (resolve_7).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_7.bind(this)); }).then(function (module) { return module.AdminsListModule; }); }
                },
                {
                    path: 'consult-demandes',
                    loadChildren: function () { return new Promise(function (resolve_8, reject_8) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(13)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./consulter-demandes/consulter-demandes.module */ "./src/app/demo/dashboard/consulter-demandes/consulter-demandes.module.ts")]; (resolve_8).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_8.bind(this)); }).then(function (module) { return module.ConsulterDemandesModule; }); }
                },
                {
                    path: 'consult-reclamtions',
                    loadChildren: function () { return new Promise(function (resolve_9, reject_9) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./consulter-reclamation/consulter-reclamation.module */ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.module.ts")]; (resolve_9).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_9.bind(this)); }).then(function (module) { return module.ConsulterReclamationModule; }); }
                },
                {
                    path: 'consult-users',
                    loadChildren: function () { return new Promise(function (resolve_10, reject_10) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(3), __webpack_require__.e("common"), __webpack_require__.e(10)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./consulter-users/consulter-users.module */ "./src/app/demo/dashboard/consulter-users/consulter-users.module.ts")]; (resolve_10).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_10.bind(this)); }).then(function (module) { return module.ConsulterUsersModule; }); }
                },
                {
                    path: 'consult-agree',
                    loadChildren: function () { return new Promise(function (resolve_11, reject_11) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./map-new/mapAgree.module */ "./src/app/demo/dashboard/map-new/mapAgree.module.ts")]; (resolve_11).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_11.bind(this)); }).then(function (module) { return module.MapAgreeModule; }); }
                },
                {
                    path: 'consult-points',
                    loadChildren: function () { return new Promise(function (resolve_12, reject_12) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(5)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./map-agree/mapAgree.module */ "./src/app/demo/dashboard/map-agree/mapAgree.module.ts")]; (resolve_12).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_12.bind(this)); }).then(function (module) { return module.MapAgreeModule; }); }
                },
                {
                    path: 'consulter-releveur',
                    loadChildren: function () { return new Promise(function (resolve_13, reject_13) { Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./consulter-releveur/releveur.module */ "./src/app/demo/dashboard/consulter-releveur/releveur.module.ts")]; (resolve_13).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_13.bind(this)); }).then(function (module) { return module.ReleveurModule; }); }
                },
            ]
        }
    ];
    var DashboardRoutingModule = /** @class */ (function () {
        function DashboardRoutingModule() {
        }
        DashboardRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], DashboardRoutingModule);
        return DashboardRoutingModule;
    }());
    exports.DashboardRoutingModule = DashboardRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/dashboard.module.ts":
/*!****************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/demo/dashboard/dashboard-routing.module.ts"), __webpack_require__(/*! ../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, dashboard_routing_module_1, shared_module_1, ng_bootstrap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //import { ConsulterReclamationComponent } from './consulter-reclamation/consulter-reclamation.component';
    var DashboardModule = /** @class */ (function () {
        function DashboardModule() {
        }
        DashboardModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    dashboard_routing_module_1.DashboardRoutingModule,
                    shared_module_1.SharedModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                ],
            })
        ], DashboardModule);
        return DashboardModule;
    }());
    exports.DashboardModule = DashboardModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=20.js.map