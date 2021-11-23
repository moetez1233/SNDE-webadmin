(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\r\n  <app-spinner></app-spinner>\r\n</router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/page-loader/page-loader.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/page-loader/page-loader.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\r\n    <div class='loader'>\r\n      <div class='loader--dot'></div>\r\n      <div class='loader--dot'></div>\r\n      <div class='loader--dot'></div>\r\n      <div class='loader--dot'></div>\r\n      <div class='loader--dot'></div>\r\n      <div class='loader--dot'></div>\r\n      <div class='loader--text'></div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\r\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\r\n<div class=\"pcoded-main-container\">\r\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n    <div class=\"pcoded-content\">\r\n      <div class=\"pcoded-inner-content\">\r\n        <div class=\"main-body\">\r\n          <div class=\"page-wrapper\">\r\n            <app-breadcrumb></app-breadcrumb>\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-configuration></app-configuration>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\r\n    <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\r\n</div>\r\n<ng-template #mainHeader>\r\n    <div class=\"m-header\">\r\n        <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\r\n        <a [routerLink]=\"['/dashboard']\" class=\"b-brand\">\r\n            <img id=\"main-logo\" src=\"assets/images/circle-cropped.png\" style=\"width: 60px;margin-left: 50px;\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor !== 'brand-default' || this.nextConfig.headerBackColor !== 'header-default'\">\r\n            <!-- <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor === 'brand-default' && this.nextConfig.headerBackColor === 'header-default'\">\r\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\"> -->\r\n        </a>\r\n        <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\r\n        <app-nav-left class=\"mr-auto\"></app-nav-left>\r\n        <app-nav-right class=\"ml-auto\"></app-nav-right>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav mr-auto\">\r\n  <li class=\"nav-item\">\r\n    <app-nav-search></app-nav-search>\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main-search\" class=\"main-search open\">\r\n \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav ml-auto\">\r\n  <li>\r\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\r\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\r\n        <i class=\"icon feather icon-user\"></i>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification \" ngbDropdownMenu>\r\n        <div class=\"pro-head\">\r\n          <img src=\"{{imgsrc}}\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n          <span >{{user}}</span>\r\n        </div>\r\n        <ul class=\"pro-body\">\r\n          <li><a (click)=\"profile()\" class=\"dropdown-item\" title=\"Mon Profile\" style=\"cursor: pointer;\"><i class=\"feather icon-user\"></i>Mon Profile</a></li>\r\n          <li><a (click)=\"logout()\" class=\"dropdown-item\" title=\"Déconnexion\" style=\"cursor: pointer;\"><i class=\"feather icon-log-out\"></i>Déconnexion</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\r\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\r\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\r\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <ng-template #itemContent>\r\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\r\n        <i class=\"{{item.icon}}\"></i>\r\n      </span>\r\n      <span class=\"pcoded-mtext\">{{item.title}}\r\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n          {{item.badge.title}}\r\n        </span>\r\n      </span>\r\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n        {{item.badge.title}}\r\n      </span>\r\n  </ng-template>\r\n  <ng-template #subMenuContent>\r\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\r\n      <ng-container *ngFor=\"let item of item.children\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </ng-template>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<perfect-scrollbar *ngIf=\"this.nextConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-next\" ngClass=\"next-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\" [disabled]=\"null\">\r\n  <div class=\"navbar-content\">\r\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\r\n      <ng-container *ngFor=\"let item of navigation\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n    \r\n  </div>\r\n</perfect-scrollbar>\r\n\r\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\r\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\r\n  <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\r\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\r\n      <ng-container *ngFor=\"let item of navigation\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </div>\r\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\r\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\r\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\r\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\r\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n      <ng-template #directTitle>\r\n        {{item.title}}\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n    </a>\r\n  </li>\r\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\r\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\r\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\r\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n      <ng-template #directTitle>\r\n        {{item.title}}\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n    </a>\r\n  </li>\r\n  <ng-template #itemIcon>\r\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\r\n  </ng-template>\r\n  <ng-template #itemBadge>\r\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n  </ng-template>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/alert/alert.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/alert/alert.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #alert class=\"alert alert-{{type}}\" role=\"alert\" [ngClass]=\"{'alert-dismissible': dismiss}\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"dismiss\" (click)=\"dismissAlert(alert)\" type=\"button\" class=\"close\" data-dismiss=\"alert\"\r\n    aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.navigationList\">\r\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\r\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"page-header-title\">\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h4 class=\"m-b-10\" *ngIf=\"last\"><i class=\"{{breadcrumb.icon}}\"></i> {{breadcrumb.title}}</h4></ng-container>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\r\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\r\n    <h4 *ngIf=\"!customHeader\" class=\"title\">{{ cardTitle }}</h4>\r\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\r\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\r\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\r\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\r\n          <i class=\"feather icon-more-horizontal\"></i>\r\n        </button>\r\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\r\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\r\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\r\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\r\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\r\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\r\n  </div>\r\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </div>\r\n  <ng-template #subMenuContent>\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\r\n    <ng-content select=\".app-card-footer\"></ng-content>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"{{this.chartID}}\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\r\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\r\n<ng-template #backDropOver>\r\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\r\n  <div class=\"modal-dialog\" role=\"document\" [ngClass]=\"dialogClass\">\r\n    <div class=\"modal-content\">\r\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\r\n        <ng-content select=\".app-modal-header\"></ng-content>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ng-content select=\".app-modal-body\"></ng-content>\r\n      </div>\r\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\r\n        <ng-content select=\".app-modal-footer\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <!-- material-line -->\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/Constants/Constants.ts":
/*!************************************!*\
  !*** ./src/Constants/Constants.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Constants = /** @class */ (function () {
        function Constants() {
        }
        Constants.imageStorageRef = "/Admins/images/";
        Constants.redirect = true;
        Constants.addingNewAdmin = false;
        return Constants;
    }());
    exports.Constants = Constants;
    var DbConfigConstants = /** @class */ (function () {
        function DbConfigConstants() {
        }
        DbConfigConstants.Administrateurs_Path = "admin";
        DbConfigConstants.Agrees_Path = "agrees";
        DbConfigConstants.Administration_Path = "administration"; // ajouter par Moetez
        DbConfigConstants.Categorie_Path = "categorie"; //ajouter par moetez
        DbConfigConstants.ClaimRECLAMATION_PATH = "claim"; //ajouter par moetez
        DbConfigConstants.Points_Path = "points"; // ajouter par ismail
        DbConfigConstants.configurations_Path = "configurations"; // ajouter par ismail
        DbConfigConstants.Releves_Path = "releves"; // ajouter par ismail
        DbConfigConstants.Demandes_Path = "demandes";
        DbConfigConstants.MetaData_Path = "metadata";
        DbConfigConstants.Notifications_Path = "notifications";
        DbConfigConstants.References_Path = "references";
        DbConfigConstants.Roles_Path = "roles";
        DbConfigConstants.Services_Path = "services";
        DbConfigConstants.Service_Path = "service";
        DbConfigConstants.Trace_Path = "trace";
        DbConfigConstants.Transactions_Path = "transactions";
        DbConfigConstants.Users_Path = "users";
        DbConfigConstants.SiteConfig = "SiteConfig";
        return DbConfigConstants;
    }());
    exports.DbConfigConstants = DbConfigConstants;
    var DemandeType = /** @class */ (function () {
        function DemandeType() {
        }
        DemandeType.DEMANDE_APPROVED = 0;
        DemandeType.DEMANDE_IDENTITY = 1;
        DemandeType.DEMANDE_TYPE_PORTFEUILLE = 2;
        DemandeType.DEMANDE_AGREE_PROCHE = 3;
        return DemandeType;
    }());
    exports.DemandeType = DemandeType;
    var DemandeTraited = /** @class */ (function () {
        function DemandeTraited() {
        }
        DemandeTraited.DEMANDE_ACCEPTED = 1;
        DemandeTraited.DEMANDE_REJECTED = 2;
        return DemandeTraited;
    }());
    exports.DemandeTraited = DemandeTraited;
    var URLS = /** @class */ (function () {
        function URLS() {
        }
        URLS.serverPath = "https://us-central1-test-isnde.cloudfunctions.net";
        URLS.getAdminAndRefByUID = URLS.serverPath + "/getAdminAndRefByUID";
        URLS.updateAdminProfile = URLS.serverPath + "/updateAdminProfile";
        URLS.getAllRoles = URLS.serverPath + "/getAllRoles";
        URLS.createNewAdmin = URLS.serverPath + "/createNewAdmin";
        URLS.getDemandes = URLS.serverPath + "/getDemandes";
        URLS.sendJustification = URLS.serverPath + "/sendJustification";
        URLS.addReleveur = URLS.serverPath + "/AddReleveur";
        URLS.addPointsReleveur = URLS.serverPath + "/AddPointsReleveur";
        URLS.confirmeDemande = URLS.serverPath + "/confirmeDemande";
        URLS.rejectDemande = URLS.serverPath + "/rejectDemande";
        URLS.getDemandesByUserId = URLS.serverPath + "/getDemandesByUserId";
        URLS.getUsers = URLS.serverPath + "/getUsers";
        URLS.getAgrees = URLS.serverPath + "/getAgrees";
        URLS.getAdministration = URLS.serverPath + "/getAdministration";
        URLS.getPoints = URLS.serverPath + "/getPoints";
        URLS.getReleves = URLS.serverPath + "/getReleves";
        /*Start_getConfigurations*/
        URLS.getConfigurations = URLS.serverPath + "/getConfigurations";
        /*End_getConfigurations*/
        URLS.getAdminsAndRefs = URLS.serverPath + "/getAdminsAndRefs";
        URLS.getClaims = URLS.serverPath + "/getClaims";
        URLS.confirmeClaim = URLS.serverPath + "/confirmeClaim";
        URLS.getCategories = URLS.serverPath + "/getCategories";
        URLS.getClaim = URLS.serverPath + "/getClaim";
        URLS.getClaimByUserId = URLS.serverPath + "/getClaimByUserId";
        URLS.getChaqueClaim = URLS.serverPath + "/getChaqueClaims";
        URLS.getChaqueReleveurs = URLS.serverPath + "/getReleves";
        return URLS;
    }());
    exports.URLS = URLS;
    var RolesId = /** @class */ (function () {
        function RolesId() {
        }
        RolesId.add_admin = "add-admin";
        RolesId.admin_Consultation = "admin-Consultation";
        RolesId.block_unblock_admin = "block-unblock-admin";
        RolesId.consulter_agree = "consulter-agree";
        RolesId.consulter_releveur = "consulter-releveur";
        RolesId.Edit_Admin_Roles = "Edit-Admin-Roles";
        RolesId.consulter_demandes = "consulter-demandes";
        RolesId.Notif_Consultation = "Notif-Consultation";
        RolesId.Affect_Role_To_Admin = "Affect-Role-To-Admin";
        RolesId.Users_Consultation = "consulter-users";
        RolesId.Dashbord_Manager = "Dashbord-Manager";
        RolesId.Dashbord_Traceability = "Dashbord-Traceability";
        RolesId.Dem_Traitement = "Dem-Traitement";
        return RolesId;
    }());
    exports.RolesId = RolesId;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Services/Service.ts":
/*!*********************************!*\
  !*** ./src/Services/Service.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, firebase, http_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Service = /** @class */ (function () {
        function Service() {
        }
        Service.getHeadersWithIdToken = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, _a, _b, _c, _d;
                return tslib_1.__generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            _a = {};
                            _b = http_1.HttpHeaders.bind;
                            _c = {};
                            _d = "authorisation";
                            return [4 /*yield*/, this.getIdToken()];
                        case 1:
                            options = (_a.headers = new (_b.apply(http_1.HttpHeaders, [void 0, (_c[_d] = _e.sent(),
                                    _c)]))(),
                                _a);
                            return [2 /*return*/, options];
                    }
                });
            });
        };
        Service.getIdToken = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, firebase.auth().currentUser.getIdToken()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Service.sendJustification = function (http, justification) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.sendJustification, { justification: justification }, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        Service.sendReleveur = function (http, Userreleveur) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.addReleveur, { Userreleveur: Userreleveur }, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        Service.sendPointreleveur = function (http, pointReleve) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.addPointsReleveur, { pointReleve: pointReleve }, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return Service;
    }());
    exports.Service = Service;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/Services/SpinnerService.ts":
/*!****************************************!*\
  !*** ./src/Services/SpinnerService.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinnerService = /** @class */ (function () {
        function SpinnerService() {
        }
        SpinnerService.showSpinner = function (show) {
            this.fire.emit({ show: show });
        };
        SpinnerService.getEmittedValue = function () {
            return this.fire;
        };
        SpinnerService.fire = new core_1.EventEmitter();
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], SpinnerService, "fire", void 0);
        SpinnerService = tslib_1.__decorate([
            core_1.Injectable(),
            tslib_1.__metadata("design:paramtypes", [])
        ], SpinnerService);
        return SpinnerService;
    }());
    exports.SpinnerService = SpinnerService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NextConfig = /** @class */ (function () {
        function NextConfig() {
        }
        NextConfig.config = {
            layout: 'vertical',
            subLayout: '',
            collapseMenu: false,
            layoutType: 'menu-light',
            headerBackColor: 'header-blue',
            navBrandColor: 'brand-default',
            rtlLayout: false,
            navFixedLayout: true,
            headerFixedLayout: true,
            boxLayout: false,
        };
        return NextConfig;
    }());
    exports.NextConfig = NextConfig;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts"), __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts"), __webpack_require__(/*! ./demo/pages/page-loader/page-loader.component */ "./src/app/demo/pages/page-loader/page-loader.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, admin_component_1, auth_component_1, page_loader_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: 'error',
            loadChildren: function () { return new Promise(function (resolve_1, reject_1) { __webpack_require__.e(/*! AMD require */ 19).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./demo/pages/maintenance/mainten-error/mainten-error.module */ "./src/app/demo/pages/maintenance/mainten-error/mainten-error.module.ts")]; (resolve_1).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_1.bind(this)); }).then(function (module) { return module.MaintenErrorModule; }); }
        },
        {
            path: 'maintenance',
            loadChildren: function () { return new Promise(function (resolve_2, reject_2) { __webpack_require__.e(/*! AMD require */ 18).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./demo/pages/maintenance/mainten-coming-soon/mainten-coming-soon.module */ "./src/app/demo/pages/maintenance/mainten-coming-soon/mainten-coming-soon.module.ts")]; (resolve_2).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_2.bind(this)); }).then(function (module) { return module.MaintenComingSoonModule; }); }
        },
        {
            path: '',
            component: page_loader_component_1.PageLoaderComponent,
            pathMatch: "full"
        },
        {
            path: '',
            component: admin_component_1.AdminComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'dashboard/manager',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    loadChildren: function () { return new Promise(function (resolve_3, reject_3) { __webpack_require__.e(/*! AMD require */ 20).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./demo/dashboard/dashboard.module */ "./src/app/demo/dashboard/dashboard.module.ts")]; (resolve_3).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_3.bind(this)); }).then(function (module) { return module.DashboardModule; }); }
                },
            ]
        },
        {
            path: '',
            component: auth_component_1.AuthComponent,
            children: [
                {
                    path: 'auth',
                    loadChildren: function () { return new Promise(function (resolve_4, reject_4) { __webpack_require__.e(/*! AMD require */ 21).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./demo/pages/authentication/authentication.module */ "./src/app/demo/pages/authentication/authentication.module.ts")]; (resolve_4).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_4.bind(this)); }).then(function (module) { return module.AuthenticationModule; }); }
                },
                {
                    path: 'maintenance',
                    loadChildren: function () { return new Promise(function (resolve_5, reject_5) { __webpack_require__.e(/*! AMD require */ 22).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./demo/pages/maintenance/maintenance.module */ "./src/app/demo/pages/maintenance/maintenance.module.ts")]; (resolve_5).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(reject_5.bind(this)); }).then(function (module) { return module.MaintenanceModule; }); }
                }
            ]
        }
    ];
    var AppRoutingModule = /** @class */ (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule]
            })
        ], AppRoutingModule);
        return AppRoutingModule;
    }());
    exports.AppRoutingModule = AppRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, common_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = /** @class */ (function () {
        function AppComponent(router, location) {
            this.router = router;
            this.location = location;
        }
        AppComponent.prototype.ngOnInit = function () {
            this.router.events.subscribe(function (evt) {
                if (!(evt instanceof router_1.NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            });
            Constants_1.Constants.route = this.location.path();
            Constants_1.Constants.redirect = true;
            this.router.navigateByUrl('');
        };
        AppComponent.ctorParameters = function () { return [
            { type: router_1.Router },
            { type: common_1.Location }
        ]; };
        AppComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-root',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [router_1.Router, common_1.Location])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts"), __webpack_require__(/*! ./theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts"), __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts"), __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts"), __webpack_require__(/*! ./theme/layout/admin/navigation/navigation.component */ "./src/app/theme/layout/admin/navigation/navigation.component.ts"), __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-content.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts"), __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts"), __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts"), __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts"), __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-bar.component */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts"), __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts"), __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts"), __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts"), __webpack_require__(/*! ./theme/layout/admin/configuration/configuration.component */ "./src/app/theme/layout/admin/configuration/configuration.component.ts"), __webpack_require__(/*! ./theme/shared/full-screen/toggle-full-screen */ "./src/app/theme/shared/full-screen/toggle-full-screen.ts"), __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js"), __webpack_require__(/*! ./theme/layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! ./demo/pages/page-loader/page-loader.component */ "./src/app/demo/pages/page-loader/page-loader.component.ts"), __webpack_require__(/*! @angular/fire/auth/auth */ "./node_modules/@angular/fire/auth/auth.js"), __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js"), __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js"), __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, platform_browser_1, animations_1, core_1, app_routing_module_1, shared_module_1, app_component_1, admin_component_1, auth_component_1, navigation_component_1, nav_content_component_1, nav_group_component_1, nav_collapse_component_1, nav_item_component_1, nav_bar_component_1, nav_left_component_1, nav_search_component_1, nav_right_component_1, configuration_component_1, toggle_full_screen_1, fire_1, navigation_1, ng_bootstrap_1, page_loader_component_1, auth_1, auth_2, database_1, environment_1, storage_1, angular_webstorage_service_1, http_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [
                    page_loader_component_1.PageLoaderComponent,
                    app_component_1.AppComponent,
                    admin_component_1.AdminComponent,
                    auth_component_1.AuthComponent,
                    navigation_component_1.NavigationComponent,
                    nav_content_component_1.NavContentComponent,
                    nav_group_component_1.NavGroupComponent,
                    nav_collapse_component_1.NavCollapseComponent,
                    nav_item_component_1.NavItemComponent,
                    nav_bar_component_1.NavBarComponent,
                    nav_left_component_1.NavLeftComponent,
                    nav_search_component_1.NavSearchComponent,
                    nav_right_component_1.NavRightComponent,
                    configuration_component_1.ConfigurationComponent,
                    toggle_full_screen_1.ToggleFullScreenDirective,
                ],
                imports: [
                    fire_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                    database_1.AngularFireDatabaseModule,
                    http_1.HttpClientModule,
                    auth_2.AngularFireAuthModule,
                    platform_browser_1.BrowserModule,
                    app_routing_module_1.AppRoutingModule,
                    animations_1.BrowserAnimationsModule,
                    shared_module_1.SharedModule,
                    ng_bootstrap_1.NgbDropdownModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    ng_bootstrap_1.NgbButtonsModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    storage_1.AngularFireStorageModule,
                    angular_webstorage_service_1.StorageServiceModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule
                ],
                providers: [navigation_1.NavigationItem, auth_1.AngularFireAuth],
                bootstrap: [app_component_1.AppComponent]
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/admin-profile/Admin-Profile-Service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dashboard/admin-profile/Admin-Profile-Service.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Constants_1, core_1, Service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminProfileService = /** @class */ (function () {
        function AdminProfileService() {
        }
        AdminProfileService.updateAdminProfile = function (http, admin, uid) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.updateAdminProfile, { "admin": admin, "uid": uid }, options).toPromise()];
                        case 2: return [2 /*return*/, (_a.sent())];
                    }
                });
            });
        };
        AdminProfileService.sendResetPassword = function (AUTH) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, AUTH.auth.sendPasswordResetEmail(Constants_1.Constants.authAdmin.email)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        AdminProfileService.updateNameandUrl = function (name, url) {
            this.details.emit({ name: name, url: url });
        };
        AdminProfileService.getAdminDetails = function () {
            return this.details;
        };
        AdminProfileService.details = new core_1.EventEmitter();
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], AdminProfileService, "details", void 0);
        AdminProfileService = tslib_1.__decorate([
            core_1.Injectable()
        ], AdminProfileService);
        return AdminProfileService;
    }());
    exports.AdminProfileService = AdminProfileService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/page-loader/Page-Loader-service.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/pages/page-loader/Page-Loader-service.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Constants_1, Service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageLoaderService = /** @class */ (function () {
        function PageLoaderService() {
        }
        PageLoaderService.getUserDetails = function (http, uid) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.getAdminAndRefByUID, { "uid": uid }, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return PageLoaderService;
    }());
    exports.PageLoaderService = PageLoaderService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/pages/page-loader/page-loader.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/demo/pages/page-loader/page-loader.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100vh;\n  width: 100vw;\n  font-family: Helvetica;\n}\n\n.loader {\n  height: 20px;\n  width: 250px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.loader--dot {\n  -webkit-animation-name: loader;\n          animation-name: loader;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  background-color: black;\n  position: absolute;\n  border: 2px solid white;\n}\n\n.loader--dot:first-child {\n  background-color: #8cc759;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n.loader--dot:nth-child(2) {\n  background-color: #8c6daf;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.loader--dot:nth-child(3) {\n  background-color: #ef5d74;\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n\n.loader--dot:nth-child(4) {\n  background-color: #f9a74b;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n\n.loader--dot:nth-child(5) {\n  background-color: #60beeb;\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\n.loader--dot:nth-child(6) {\n  background-color: #fbef5a;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.loader--text {\n  position: absolute;\n  top: 200%;\n  left: 0;\n  right: 0;\n  width: 20rem;\n  margin: auto;\n}\n\n.loader--text:after {\n  content: \"Veuillez patienter. Chargement en cours\";\n  font-weight: bold;\n  -webkit-animation-name: loading-text;\n          animation-name: loading-text;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n\n@-webkit-keyframes loading-text {\n  0% {\n    content: \"Veuillez patienter. Chargement en cours .\";\n  }\n  25% {\n    content: \"Veuillez patienter. Chargement en cours ..\";\n  }\n  50% {\n    content: \"Veuillez patienter. Chargement en cours ...\";\n  }\n  75% {\n    content: \"Veuillez patienter. Chargement en cours ....\";\n  }\n}\n\n@keyframes loading-text {\n  0% {\n    content: \"Veuillez patienter. Chargement en cours .\";\n  }\n  25% {\n    content: \"Veuillez patienter. Chargement en cours ..\";\n  }\n  50% {\n    content: \"Veuillez patienter. Chargement en cours ...\";\n  }\n  75% {\n    content: \"Veuillez patienter. Chargement en cours ....\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9wYWdlcy9wYWdlLWxvYWRlci9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcZGVtb1xccGFnZXNcXHBhZ2UtbG9hZGVyXFxwYWdlLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVtby9wYWdlcy9wYWdlLWxvYWRlci9wYWdlLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ0dKOztBRERFO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDSUo7O0FERkU7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNLSjs7QURIRTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ01KOztBREpFO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDT0o7O0FETEU7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNRSjs7QURORTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNTSjs7QURQRTtFQUNFLGtEQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNVSjs7QURQRTtFQUNFO0lBQ0Usd0JBQUE7RUNVSjtFRFJFO0lBQ0UsNEJBQUE7RUNVSjtFRFJFO0lBQ0UsNEJBQUE7RUNVSjtFRFJFO0lBQ0Usd0JBQUE7RUNVSjtBQUNGOztBRHRCRTtFQUNFO0lBQ0Usd0JBQUE7RUNVSjtFRFJFO0lBQ0UsNEJBQUE7RUNVSjtFRFJFO0lBQ0UsNEJBQUE7RUNVSjtFRFJFO0lBQ0Usd0JBQUE7RUNVSjtBQUNGOztBRFJFO0VBQ0U7SUFDRSxvREFBQTtFQ1VKO0VEUkU7SUFDRSxxREFBQTtFQ1VKO0VEUkU7SUFDRSxzREFBQTtFQ1VKO0VEUkU7SUFDRSx1REFBQTtFQ1VKO0FBQ0Y7O0FEdEJFO0VBQ0U7SUFDRSxvREFBQTtFQ1VKO0VEUkU7SUFDRSxxREFBQTtFQ1VKO0VEUkU7SUFDRSxzREFBQTtFQ1VKO0VEUkU7SUFDRSx1REFBQTtFQ1VKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kZW1vL3BhZ2VzL3BhZ2UtbG9hZGVyL3BhZ2UtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRlciB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5sb2FkZXItLWRvdCB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuICAubG9hZGVyLS1kb3Q6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhjYzc1OTtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICB9XHJcbiAgLmxvYWRlci0tZG90Om50aC1jaGlsZCgyKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM2ZGFmO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICAubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDMpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjVkNzQ7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XHJcbiAgfVxyXG4gIC5sb2FkZXItLWRvdDpudGgtY2hpbGQoNCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTc0YjtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcbiAgLmxvYWRlci0tZG90Om50aC1jaGlsZCg1KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBiZWViO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxuICAubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDYpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmVmNWE7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxuICAubG9hZGVyLS10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAyMHJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmxvYWRlci0tdGV4dDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlZldWlsbGV6IHBhdGllbnRlci4gQ2hhcmdlbWVudCBlbiBjb3Vyc1wiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbG9hZGluZy10ZXh0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgICAxNSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbiAgICA0NSUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjMwcHgpO1xyXG4gICAgfVxyXG4gICAgNjUlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KTtcclxuICAgIH1cclxuICAgIDk1JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsb2FkaW5nLXRleHQge1xyXG4gICAgMCUge1xyXG4gICAgICBjb250ZW50OiBcIlZldWlsbGV6IHBhdGllbnRlci4gQ2hhcmdlbWVudCBlbiBjb3VycyAuXCI7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICBjb250ZW50OiBcIlZldWlsbGV6IHBhdGllbnRlci4gQ2hhcmdlbWVudCBlbiBjb3VycyAuLlwiO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgY29udGVudDogXCJWZXVpbGxleiBwYXRpZW50ZXIuIENoYXJnZW1lbnQgZW4gY291cnMgLi4uXCI7XHJcbiAgICB9XHJcbiAgICA3NSUge1xyXG4gICAgICBjb250ZW50OiBcIlZldWlsbGV6IHBhdGllbnRlci4gQ2hhcmdlbWVudCBlbiBjb3VycyAuLi4uXCI7XHJcbiAgICB9XHJcbiAgfSIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG5cbi5sb2FkZXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmxvYWRlci0tZG90IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRlcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmxvYWRlci0tZG90OmZpcnN0LWNoaWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjYzc1OTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG4ubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjNmRhZjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4ubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNWQ3NDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4ubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5YTc0YjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYmVlYjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ubG9hZGVyLS1kb3Q6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZWY1YTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmxvYWRlci0tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDIwcmVtO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2FkZXItLXRleHQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlZldWlsbGV6IHBhdGllbnRlci4gQ2hhcmdlbWVudCBlbiBjb3Vyc1wiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRpbmctdGV4dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVyIHtcbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjMwcHgpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KTtcbiAgfVxuICA5NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyBsb2FkaW5nLXRleHQge1xuICAwJSB7XG4gICAgY29udGVudDogXCJWZXVpbGxleiBwYXRpZW50ZXIuIENoYXJnZW1lbnQgZW4gY291cnMgLlwiO1xuICB9XG4gIDI1JSB7XG4gICAgY29udGVudDogXCJWZXVpbGxleiBwYXRpZW50ZXIuIENoYXJnZW1lbnQgZW4gY291cnMgLi5cIjtcbiAgfVxuICA1MCUge1xuICAgIGNvbnRlbnQ6IFwiVmV1aWxsZXogcGF0aWVudGVyLiBDaGFyZ2VtZW50IGVuIGNvdXJzIC4uLlwiO1xuICB9XG4gIDc1JSB7XG4gICAgY29udGVudDogXCJWZXVpbGxleiBwYXRpZW50ZXIuIENoYXJnZW1lbnQgZW4gY291cnMgLi4uLlwiO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/demo/pages/page-loader/page-loader.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/pages/page-loader/page-loader.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! @angular/fire/auth/auth */ "./node_modules/@angular/fire/auth/auth.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./Page-Loader-service */ "./src/app/demo/pages/page-loader/Page-Loader-service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, auth_1, Constants_1, http_1, Page_Loader_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageLoaderComponent = /** @class */ (function () {
        function PageLoaderComponent(router, AUTH, http) {
            this.router = router;
            this.AUTH = AUTH;
            this.http = http;
        }
        PageLoaderComponent.prototype.ngOnInit = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.initWebSite();
                    return [2 /*return*/];
                });
            });
        };
        PageLoaderComponent.prototype.initWebSite = function () {
            var _this = this;
            var rout = Constants_1.Constants.route;
            if (Constants_1.Constants.redirect) {
                this.AUTH.authState.subscribe(function (user) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var details;
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(user === null)) return [3 /*break*/, 1];
                                if (rout.indexOf("/auth") == -1)
                                    rout = "/auth/signin";
                                this.router.navigateByUrl(rout);
                                Constants_1.Constants.authAdmin = null;
                                Constants_1.Constants.refAdmin = null;
                                Constants_1.Constants.admin = null;
                                return [3 /*break*/, 3];
                            case 1:
                                Constants_1.Constants.authAdmin = user;
                                return [4 /*yield*/, Page_Loader_service_1.PageLoaderService.getUserDetails(this.http, user.uid)];
                            case 2:
                                details = _a.sent();
                                Constants_1.Constants.refAdmin = details.ref;
                                Constants_1.Constants.admin = details.admin;
                                if (!Constants_1.Constants.admin.rolesGroupe) {
                                    Constants_1.Constants.admin.rolesGroupe = [];
                                }
                                if (Constants_1.Constants.admin.profileImgUrl) {
                                    Constants_1.Constants.imgsrc = Constants_1.Constants.admin.profileImgUrl;
                                }
                                else {
                                    Constants_1.Constants.imgsrc = "assets/images/user/anonymous.png";
                                }
                                if (Constants_1.Constants.redirect) {
                                    if (rout === "" || rout === "/auth/signin" || rout === "/auth/reset-password" || rout === "/error" || rout === "/maintenance")
                                        rout = '/dashboard';
                                    this.router.navigateByUrl(rout).catch(function (e) {
                                        // console.log(e);
                                        _this.router.navigateByUrl("error");
                                    });
                                }
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
            }
        };
        PageLoaderComponent.ctorParameters = function () { return [
            { type: router_1.Router },
            { type: auth_1.AngularFireAuth },
            { type: http_1.HttpClient }
        ]; };
        PageLoaderComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-page-loader',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./page-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/page-loader/page-loader.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./page-loader.component.scss */ "./src/app/demo/pages/page-loader/page-loader.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [router_1.Router, auth_1.AngularFireAuth, http_1.HttpClient])
        ], PageLoaderComponent);
        return PageLoaderComponent;
    }());
    exports.PageLoaderComponent = PageLoaderComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../app-config */ "./src/app/app-config.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, app_config_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AdminComponent = /** @class */ (function () {
        function AdminComponent(zone, location) {
            this.zone = zone;
            this.location = location;
            this.nextConfig = app_config_1.NextConfig.config;
            var currentURL = this.location.path();
            var baseHerf = this.location['_baseHref'];
            if (baseHerf) {
                currentURL = baseHerf + this.location.path();
            }
            this.windowWidth = window.innerWidth;
            if (currentURL === baseHerf + '/layout/collapse-menu'
                || currentURL === baseHerf + '/layout/box'
                || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
                this.nextConfig.collapseMenu = true;
            }
            this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
            this.navCollapsedMob = false;
        }
        AdminComponent.prototype.ngOnInit = function () {
            if (this.windowWidth < 992) {
                this.nextConfig.layout = 'vertical';
                setTimeout(function () {
                    document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                    document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
                }, 500);
            }
        };
        AdminComponent.prototype.navMobClick = function () {
            var _this = this;
            if (this.windowWidth < 992) {
                if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                    this.navCollapsedMob = !this.navCollapsedMob;
                    setTimeout(function () {
                        _this.navCollapsedMob = !_this.navCollapsedMob;
                    }, 100);
                }
                else {
                    this.navCollapsedMob = !this.navCollapsedMob;
                }
            }
        };
        AdminComponent.ctorParameters = function () { return [
            { type: core_1.NgZone },
            { type: common_1.Location }
        ]; };
        AdminComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-admin',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./admin.component.scss */ "./src/app/theme/layout/admin/admin.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [core_1.NgZone, common_1.Location])
        ], AdminComponent);
        return AdminComponent;
    }());
    exports.AdminComponent = AdminComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.next-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.next-dark .menu-styler h1,\nbody.next-dark .menu-styler h2,\nbody.next-dark .menu-styler h3,\nbody.next-dark .menu-styler h4,\nbody.next-dark .menu-styler h5,\nbody.next-dark .menu-styler p,\nbody.next-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vRDpcXGV0YWFpaVxccHJvamVjdDJcXFNOREVcXFNOREUtd2ViYWRtaW4vc3JjXFxhcHBcXHRoZW1lXFxsYXlvdXRcXGFkbWluXFxjb25maWd1cmF0aW9uXFxjb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRE1JO0VBQ0UsbUNBQUE7QUNITjs7QURLSTs7Ozs7OztFQU9FLFdBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zdHlsZXIge1xyXG4gIC5uYXYtcGlsbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbmJvZHkubmV4dC1kYXJre1xyXG4gIC5tZW51LXN0eWxlcntcclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBwLFxyXG4gICAgaDZ7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWVudS1zdHlsZXIgLm5hdi1waWxscyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xufVxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGgxLFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGgyLFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGgzLFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGg0LFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGg1LFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIHAsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDYge1xuICBjb2xvcjogIzIyMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, app_config_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfigurationComponent = /** @class */ (function () {
        function ConfigurationComponent(zone, location) {
            var _this = this;
            this.zone = zone;
            this.location = location;
            this.scroll = function () {
                if (_this.headerFixedLayout === false) {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
                    var el = document.querySelector('.pcoded-navbar.menupos-fixed');
                    var scrollPosition = window.pageYOffset;
                    if (scrollPosition > 60) {
                        el.style.position = 'fixed';
                        el.style.transition = 'none';
                        el.style.marginTop = '0';
                    }
                    else {
                        el.style.position = 'absolute';
                        el.style.marginTop = '60px';
                    }
                }
                else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
                    document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
                }
            };
            this.nextConfig = app_config_1.NextConfig.config;
            this.setThemeLayout();
        }
        ConfigurationComponent.prototype.ngOnInit = function () {
            this.styleSelectorToggle = false;
            this.layoutType = this.nextConfig.layoutType;
            this.setLayout(this.layoutType);
            this.headerBackgroundColor = this.nextConfig.headerBackColor;
            this.brandBackgroundColor = this.nextConfig.navBrandColor;
            this.setHeaderBackground(this.headerBackgroundColor);
            this.setBrandBackground(this.brandBackgroundColor);
            this.rtlLayout = this.nextConfig.rtlLayout;
            this.changeRtlLayout(this.rtlLayout);
            this.menuFixedLayout = this.nextConfig.navFixedLayout;
            if (this.nextConfig.layout === 'vertical') {
                this.changeMenuFixedLayout(this.menuFixedLayout);
            }
            this.headerFixedLayout = this.nextConfig.headerFixedLayout;
            this.changeHeaderFixedLayout(this.headerFixedLayout);
            this.boxLayout = this.nextConfig.boxLayout;
            this.changeBoxLayout(this.boxLayout);
        };
        ConfigurationComponent.prototype.setThemeLayout = function () {
            var currentURL = this.location.path();
            var baseHref = this.location['_baseHref'];
            if (baseHref) {
                currentURL = baseHref + this.location.path();
            }
            switch (currentURL) {
                case baseHref + '/layout/static':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.navFixedLayout = false;
                    this.nextConfig.headerFixedLayout = false;
                    break;
                case baseHref + '/layout/fixed':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.navFixedLayout = true;
                    this.nextConfig.headerFixedLayout = true;
                    break;
                case baseHref + '/layout/nav-fixed':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.navFixedLayout = true;
                    this.nextConfig.headerFixedLayout = false;
                    break;
                case baseHref + '/layout/collapse-menu':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.collapseMenu = true;
                    break;
                case baseHref + '/layout/vertical-rtl':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.rtlLayout = true;
                    break;
                case baseHref + '/layout/horizontal':
                    this.nextConfig.layout = 'horizontal';
                    this.nextConfig.navFixedLayout = false;
                    this.nextConfig.headerFixedLayout = false;
                    break;
                case baseHref + '/layout/horizontal-l2':
                    this.nextConfig.layout = 'horizontal';
                    this.nextConfig.subLayout = 'horizontal-2';
                    this.nextConfig.navFixedLayout = false;
                    this.nextConfig.headerFixedLayout = false;
                    break;
                case baseHref + '/layout/horizontal-rtl':
                    this.nextConfig.layout = 'horizontal';
                    this.nextConfig.subLayout = 'horizontal-2';
                    this.nextConfig.navFixedLayout = false;
                    this.nextConfig.headerFixedLayout = false;
                    this.nextConfig.rtlLayout = true;
                    break;
                case baseHref + '/layout/box':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.boxLayout = true;
                    this.nextConfig.headerFixedLayout = false;
                    this.nextConfig.collapseMenu = true;
                    break;
                case baseHref + '/layout/light':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.layoutType = 'menu-light';
                    this.nextConfig.headerBackColor = 'header-default';
                    break;
                case baseHref + '/layout/dark':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.layoutType = 'dark';
                    this.nextConfig.headerBackColor = 'header-blue';
                    break;
                case baseHref + '/layout/nav-color':
                    this.nextConfig.layout = 'vertical';
                    this.nextConfig.layoutType = 'menu-light';
                    this.nextConfig.headerBackColor = 'header-info';
                    this.nextConfig.navBrandColor = 'brand-info';
                    this.nextConfig.navFixedLayout = true;
                    this.nextConfig.headerFixedLayout = true;
                    break;
                default:
                    break;
            }
        };
        ConfigurationComponent.prototype.setHeaderBackColor = function (color) {
            this.headerBackColor = color;
            document.querySelector('body').style.background = color;
        };
        // change main layout
        ConfigurationComponent.prototype.setLayout = function (layout) {
            this.isConfig = true;
            this.setBrandBackground(this.nextConfig.navBrandColor);
            document.querySelector('.pcoded-navbar').classList.remove('menu-light');
            document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
            document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
            document.querySelector('body').classList.remove('next-dark');
            this.layoutType = layout;
            if (layout === 'menu-light') {
                this.setBrandBackground(this.brandBackgroundColor);
                document.querySelector('.pcoded-navbar').classList.add(layout);
            }
            if (layout === 'dark') {
                document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
                document.querySelector('.pcoded-navbar').classList.add('brand-dark');
                this.setBrandBackground('brand-blue');
                this.setHeaderBackground('header-blue');
                document.querySelector('body').classList.add('next-dark');
            }
            if (layout === 'reset') {
                this.reset();
            }
        };
        ConfigurationComponent.prototype.reset = function () {
            document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
            this.ngOnInit();
        };
        ConfigurationComponent.prototype.setRtlLayout = function (e) {
            var flag = !!(e.target.checked);
            this.changeRtlLayout(flag);
        };
        ConfigurationComponent.prototype.changeRtlLayout = function (flag) {
            if (flag) {
                document.querySelector('body').classList.add('next-rtl');
            }
            else {
                document.querySelector('body').classList.remove('next-rtl');
            }
        };
        ConfigurationComponent.prototype.setMenuFixedLayout = function (e) {
            var flag = !!(e.target.checked);
            this.changeMenuFixedLayout(flag);
        };
        ConfigurationComponent.prototype.changeMenuFixedLayout = function (flag) {
            var _this = this;
            setTimeout(function () {
                if (flag) {
                    document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                    document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
                    if (_this.nextConfig.layout === 'vertical') {
                        document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                    }
                    window.addEventListener('scroll', _this.scroll, true);
                    window.scrollTo(0, 0);
                }
                else {
                    document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                    document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
                    if (_this.nextConfig.layout === 'vertical') {
                        document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                    }
                    if (_this.nextConfig.layout === 'vertical') {
                        window.removeEventListener('scroll', _this.scroll, true);
                    }
                }
            }, 100);
        };
        ConfigurationComponent.prototype.setHeaderFixedLayout = function (e) {
            var flag = !!(e.target.checked);
            this.changeHeaderFixedLayout(flag);
        };
        ConfigurationComponent.prototype.changeHeaderFixedLayout = function (flag) {
            if (flag) {
                document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
            }
            else {
                document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
                // static
                if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                    window.addEventListener('scroll', this.scroll, true);
                    window.scrollTo(0, 0);
                }
                else {
                    window.removeEventListener('scroll', this.scroll, true);
                }
            }
        };
        ConfigurationComponent.prototype.setBoxLayout = function (e) {
            var flag = !!(e.target.checked);
            this.changeBoxLayout(flag);
        };
        ConfigurationComponent.prototype.changeBoxLayout = function (flag) {
            if (flag) {
                document.querySelector('body').classList.add('container');
                document.querySelector('body').classList.add('box-layout');
            }
            else {
                document.querySelector('body').classList.remove('box-layout');
                document.querySelector('body').classList.remove('container');
            }
        };
        ConfigurationComponent.prototype.setHeaderBackground = function (background) {
            this.headerBackgroundColor = background;
            this.nextConfig.headerBackColor = background;
            document.querySelector('.pcoded-header').classList.remove('header-blue');
            document.querySelector('.pcoded-header').classList.remove('header-red');
            document.querySelector('.pcoded-header').classList.remove('header-purple');
            document.querySelector('.pcoded-header').classList.remove('header-info');
            document.querySelector('.pcoded-header').classList.remove('header-dark');
            if (background !== 'header-default') {
                document.querySelector('.pcoded-header').classList.add(background);
            }
        };
        ConfigurationComponent.prototype.setBrandBackground = function (background) {
            this.brandBackgroundColor = background;
            this.nextConfig.navBrandColor = background;
            document.querySelector('.pcoded-header').classList.remove('brand-blue');
            document.querySelector('.pcoded-header').classList.remove('brand-red');
            document.querySelector('.pcoded-header').classList.remove('brand-purple');
            document.querySelector('.pcoded-header').classList.remove('brand-info');
            document.querySelector('.pcoded-header').classList.remove('brand-dark');
            document.querySelector('.pcoded-header').classList.remove('brand-default');
            document.querySelector('.pcoded-header').classList.add(background);
        };
        ConfigurationComponent.ctorParameters = function () { return [
            { type: core_1.NgZone },
            { type: common_1.Location }
        ]; };
        ConfigurationComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-configuration',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html")).default,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./configuration.component.scss */ "./src/app/theme/layout/admin/configuration/configuration.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [core_1.NgZone, common_1.Location])
        ], ConfigurationComponent);
        return ConfigurationComponent;
    }());
    exports.ConfigurationComponent = ConfigurationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBarComponent = /** @class */ (function () {
        function NavBarComponent() {
            this.onNavCollapse = new core_1.EventEmitter();
            this.onNavHeaderMobCollapse = new core_1.EventEmitter();
            this.nextConfig = app_config_1.NextConfig.config;
            this.menuClass = false;
            this.collapseStyle = 'none';
            this.windowWidth = window.innerWidth;
        }
        NavBarComponent.prototype.ngOnInit = function () { };
        NavBarComponent.prototype.toggleMobOption = function () {
            this.menuClass = !this.menuClass;
            this.collapseStyle = (this.menuClass) ? 'block' : 'none';
        };
        NavBarComponent.prototype.navCollapse = function () {
            if (this.windowWidth >= 992) {
                this.onNavCollapse.emit();
            }
            else {
                this.onNavHeaderMobCollapse.emit();
            }
        };
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", Object)
        ], NavBarComponent.prototype, "onNavCollapse", void 0);
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", Object)
        ], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
        NavBarComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-bar',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], NavBarComponent);
        return NavBarComponent;
    }());
    exports.NavBarComponent = NavBarComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavLeftComponent = /** @class */ (function () {
        function NavLeftComponent() {
        }
        NavLeftComponent.prototype.ngOnInit = function () {
        };
        NavLeftComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-left',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-left.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-left.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], NavLeftComponent);
        return NavLeftComponent;
    }());
    exports.NavLeftComponent = NavLeftComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavSearchComponent = /** @class */ (function () {
        function NavSearchComponent() {
        }
        NavSearchComponent.prototype.ngOnInit = function () { };
        NavSearchComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-search',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-search.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], NavSearchComponent);
        return NavSearchComponent;
    }());
    exports.NavSearchComponent = NavSearchComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! ../../../../../demo/dashboard/admin-profile/Admin-Profile-Service */ "./src/app/demo/dashboard/admin-profile/Admin-Profile-Service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, ng_bootstrap_1, auth_1, router_1, Constants_1, Admin_Profile_Service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavRightComponent = /** @class */ (function () {
        function NavRightComponent(AUTH, router) {
            this.AUTH = AUTH;
            this.router = router;
            var currentUser = Constants_1.Constants.admin;
            this.user = currentUser.prenom + " " + currentUser.nom;
            var url = Constants_1.Constants.imgsrc;
            if (currentUser.profileImgUrl)
                url = currentUser.profileImgUrl;
            this.imgsrc = url;
        }
        NavRightComponent.prototype.ngOnInit = function () {
            var _this = this;
            Admin_Profile_Service_1.AdminProfileService.getAdminDetails()
                .subscribe(function (item) { _this.user = item.name; _this.imgsrc = item.url; });
        };
        NavRightComponent.prototype.profile = function () {
            Constants_1.Constants.redirect = true;
            this.router.navigateByUrl('/dashboard/profile');
        };
        NavRightComponent.prototype.logout = function () {
            Constants_1.Constants.redirect = true;
            this.AUTH.auth.signOut();
            this.router.navigateByUrl('');
        };
        NavRightComponent.ctorParameters = function () { return [
            { type: auth_1.AngularFireAuth },
            { type: router_1.Router }
        ]; };
        NavRightComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-right',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-right.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html")).default,
                providers: [ng_bootstrap_1.NgbDropdownConfig],
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-right.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [auth_1.AngularFireAuth, router_1.Router])
        ], NavRightComponent);
        return NavRightComponent;
    }());
    exports.NavRightComponent = NavRightComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts"), __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js"), __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, navigation_1, animations_1, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavCollapseComponent = /** @class */ (function () {
        function NavCollapseComponent() {
            this.visible = false;
            this.nextConfig = app_config_1.NextConfig.config;
            this.themeLayout = this.nextConfig.layout;
        }
        NavCollapseComponent.prototype.ngOnInit = function () {
        };
        NavCollapseComponent.prototype.navCollapse = function (e) {
            this.visible = !this.visible;
            var parent = e.target;
            if (this.themeLayout === 'vertical') {
                parent = parent.parentElement;
            }
            var sections = document.querySelectorAll('.pcoded-hasmenu');
            for (var i = 0; i < sections.length; i++) {
                if (sections[i] !== parent) {
                    sections[i].classList.remove('pcoded-trigger');
                }
            }
            var firstParent = parent.parentElement;
            var preParent = parent.parentElement.parentElement;
            if (firstParent.classList.contains('pcoded-hasmenu')) {
                do {
                    firstParent.classList.add('pcoded-trigger');
                    // firstParent.parentElement.classList.toggle('pcoded-trigger');
                    firstParent = firstParent.parentElement.parentElement.parentElement;
                } while (firstParent.classList.contains('pcoded-hasmenu'));
            }
            else if (preParent.classList.contains('pcoded-submenu')) {
                do {
                    preParent.parentElement.classList.add('pcoded-trigger');
                    preParent = preParent.parentElement.parentElement.parentElement;
                } while (preParent.classList.contains('pcoded-submenu'));
            }
            parent.classList.toggle('pcoded-trigger');
        };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", navigation_1.NavigationItem)
        ], NavCollapseComponent.prototype, "item", void 0);
        NavCollapseComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-collapse',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-collapse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html")).default,
                animations: [
                    animations_1.trigger('slideInOut', [
                        animations_1.transition(':enter', [
                            animations_1.style({ transform: 'translateY(-100%)', display: 'block' }),
                            animations_1.animate('250ms ease-in', animations_1.style({ transform: 'translateY(0%)' }))
                        ]),
                        animations_1.transition(':leave', [
                            animations_1.animate('250ms ease-in', animations_1.style({ transform: 'translateY(-100%)' }))
                        ])
                    ])
                ],
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-collapse.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], NavCollapseComponent);
        return NavCollapseComponent;
    }());
    exports.NavCollapseComponent = NavCollapseComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts"), __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, navigation_1, app_config_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavContentComponent = /** @class */ (function () {
        function NavContentComponent(nav, zone, location) {
            this.nav = nav;
            this.zone = zone;
            this.location = location;
            this.onNavMobCollapse = new core_1.EventEmitter();
            this.nextConfig = app_config_1.NextConfig.config;
            this.windowWidth = window.innerWidth;
            this.navigation = this.nav.get();
            this.prevDisabled = 'disabled';
            this.nextDisabled = '';
            this.scrollWidth = 0;
            this.contentWidth = 0;
        }
        NavContentComponent.prototype.ngOnInit = function () {
            if (this.windowWidth < 992) {
                this.nextConfig['layout'] = 'vertical';
                setTimeout(function () {
                    document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                    document.querySelector('#nav-ps-next').style.maxHeight = '100%';
                }, 500);
            }
        };
        NavContentComponent.prototype.ngAfterViewInit = function () {
            if (this.nextConfig['layout'] === 'horizontal') {
                this.contentWidth = this.navbarContent.nativeElement.clientWidth;
                this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
            }
        };
        NavContentComponent.prototype.scrollPlus = function () {
            this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
            if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
                this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
                this.nextDisabled = 'disabled';
            }
            this.prevDisabled = '';
            if (this.nextConfig.rtlLayout) {
                document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            }
            else {
                document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
        };
        NavContentComponent.prototype.scrollMinus = function () {
            this.scrollWidth = this.scrollWidth - this.wrapperWidth;
            if (this.scrollWidth < 0) {
                this.scrollWidth = 0;
                this.prevDisabled = 'disabled';
            }
            this.nextDisabled = '';
            if (this.nextConfig.rtlLayout) {
                document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            }
            else {
                document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
        };
        NavContentComponent.prototype.fireLeave = function () {
            var sections = document.querySelectorAll('.pcoded-hasmenu');
            for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
                sections[i].classList.remove('pcoded-trigger');
            }
            var current_url = this.location.path();
            if (this.location['_baseHref']) {
                current_url = this.location['_baseHref'] + this.location.path();
            }
            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);
            if (ele !== null && ele !== undefined) {
                var parent_1 = ele.parentElement;
                var up_parent = parent_1.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                if (parent_1.classList.contains('pcoded-hasmenu')) {
                    parent_1.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    last_parent.classList.add('active');
                }
            }
        };
        NavContentComponent.prototype.navMob = function () {
            if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                this.onNavMobCollapse.emit();
            }
        };
        NavContentComponent.prototype.fireOutClick = function () {
            var current_url = this.location.path();
            if (this.location['_baseHref']) {
                current_url = this.location['_baseHref'] + this.location.path();
            }
            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);
            if (ele !== null && ele !== undefined) {
                var parent_2 = ele.parentElement;
                var up_parent = parent_2.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                if (parent_2.classList.contains('pcoded-hasmenu')) {
                    if (this.nextConfig['layout'] === 'vertical') {
                        parent_2.classList.add('pcoded-trigger');
                    }
                    parent_2.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    if (this.nextConfig['layout'] === 'vertical') {
                        up_parent.classList.add('pcoded-trigger');
                    }
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    if (this.nextConfig['layout'] === 'vertical') {
                        last_parent.classList.add('pcoded-trigger');
                    }
                    last_parent.classList.add('active');
                }
            }
        };
        NavContentComponent.ctorParameters = function () { return [
            { type: navigation_1.NavigationItem },
            { type: core_1.NgZone },
            { type: common_1.Location }
        ]; };
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", Object)
        ], NavContentComponent.prototype, "onNavMobCollapse", void 0);
        tslib_1.__decorate([
            core_1.ViewChild('navbarContent', { static: true }),
            tslib_1.__metadata("design:type", core_1.ElementRef)
        ], NavContentComponent.prototype, "navbarContent", void 0);
        tslib_1.__decorate([
            core_1.ViewChild('navbarWrapper', { static: true }),
            tslib_1.__metadata("design:type", core_1.ElementRef)
        ], NavContentComponent.prototype, "navbarWrapper", void 0);
        NavContentComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-content',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-content.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [navigation_1.NavigationItem, core_1.NgZone, common_1.Location])
        ], NavContentComponent);
        return NavContentComponent;
    }());
    exports.NavContentComponent = NavContentComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, navigation_1, common_1, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavGroupComponent = /** @class */ (function () {
        function NavGroupComponent(zone, location) {
            this.zone = zone;
            this.location = location;
            this.layout1 = false;
            this.nextConfig = app_config_1.NextConfig.config;
        }
        NavGroupComponent.prototype.ngOnInit = function () {
            // at reload time active and trigger link
            var current_url = this.location.path();
            if (this.location['_baseHref']) {
                current_url = this.location['_baseHref'] + this.location.path();
            }
            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);
            if (ele !== null && ele !== undefined) {
                var parent_1 = ele.parentElement;
                var up_parent = parent_1.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                if (parent_1.classList.contains('pcoded-hasmenu')) {
                    if (this.nextConfig['layout'] === 'vertical') {
                        parent_1.classList.add('pcoded-trigger');
                    }
                    parent_1.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    if (this.nextConfig['layout'] === 'vertical') {
                        up_parent.classList.add('pcoded-trigger');
                    }
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    if (this.nextConfig['layout'] === 'vertical') {
                        last_parent.classList.add('pcoded-trigger');
                    }
                    last_parent.classList.add('active');
                }
            }
        };
        NavGroupComponent.ctorParameters = function () { return [
            { type: core_1.NgZone },
            { type: common_1.Location }
        ]; };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", navigation_1.NavigationItem)
        ], NavGroupComponent.prototype, "item", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Boolean)
        ], NavGroupComponent.prototype, "layout1", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], NavGroupComponent.prototype, "activeId", void 0);
        NavGroupComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-group',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-group.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [core_1.NgZone, common_1.Location])
        ], NavGroupComponent);
        return NavGroupComponent;
    }());
    exports.NavGroupComponent = NavGroupComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts"), __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, navigation_1, app_config_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavItemComponent = /** @class */ (function () {
        function NavItemComponent(location) {
            this.location = location;
            this.nextConfig = app_config_1.NextConfig.config;
            this.themeLayout = this.nextConfig['layout'];
        }
        NavItemComponent.prototype.ngOnInit = function () {
        };
        NavItemComponent.prototype.closeOtherMenu = function (event) {
            var _this = this;
            if (this.nextConfig['layout'] === 'vertical') {
                var ele = event.target;
                if (ele !== null && ele !== undefined) {
                    var parent_1 = ele.parentElement;
                    var up_parent = parent_1.parentElement.parentElement;
                    var last_parent = up_parent.parentElement;
                    var sections = document.querySelectorAll('.pcoded-hasmenu');
                    for (var i = 0; i < sections.length; i++) {
                        sections[i].classList.remove('active');
                        sections[i].classList.remove('pcoded-trigger');
                    }
                    if (parent_1.classList.contains('pcoded-hasmenu')) {
                        parent_1.classList.add('pcoded-trigger');
                        parent_1.classList.add('active');
                    }
                    else if (up_parent.classList.contains('pcoded-hasmenu')) {
                        up_parent.classList.add('pcoded-trigger');
                        up_parent.classList.add('active');
                    }
                    else if (last_parent.classList.contains('pcoded-hasmenu')) {
                        last_parent.classList.add('pcoded-trigger');
                        last_parent.classList.add('active');
                    }
                }
                if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                    document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
                }
            }
            else {
                setTimeout(function () {
                    var sections = document.querySelectorAll('.pcoded-hasmenu');
                    for (var i = 0; i < sections.length; i++) {
                        sections[i].classList.remove('active');
                        sections[i].classList.remove('pcoded-trigger');
                    }
                    var current_url = _this.location.path();
                    if (_this.location['_baseHref']) {
                        current_url = _this.location['_baseHref'] + _this.location.path();
                    }
                    var link = "a.nav-link[ href='" + current_url + "' ]";
                    var ele = document.querySelector(link);
                    if (ele !== null && ele !== undefined) {
                        var parent_2 = ele.parentElement;
                        var up_parent = parent_2.parentElement.parentElement;
                        var last_parent = up_parent.parentElement;
                        if (parent_2.classList.contains('pcoded-hasmenu')) {
                            parent_2.classList.add('active');
                        }
                        else if (up_parent.classList.contains('pcoded-hasmenu')) {
                            up_parent.classList.add('active');
                        }
                        else if (last_parent.classList.contains('pcoded-hasmenu')) {
                            last_parent.classList.add('active');
                        }
                    }
                }, 500);
            }
        };
        NavItemComponent.ctorParameters = function () { return [
            { type: common_1.Location }
        ]; };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", navigation_1.NavigationItem)
        ], NavItemComponent.prototype, "item", void 0);
        NavItemComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-nav-item',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [common_1.Location])
        ], NavItemComponent);
        return NavItemComponent;
    }());
    exports.NavItemComponent = NavItemComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigationComponent = /** @class */ (function () {
        function NavigationComponent() {
            this.onNavMobCollapse = new core_1.EventEmitter();
            this.nextConfig = app_config_1.NextConfig.config;
            this.windowWidth = window.innerWidth;
        }
        NavigationComponent.prototype.ngOnInit = function () { };
        NavigationComponent.prototype.navMobCollapse = function () {
            if (this.windowWidth < 992) {
                this.onNavMobCollapse.emit();
            }
        };
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", Object)
        ], NavigationComponent.prototype, "onNavMobCollapse", void 0);
        NavigationComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-navigation',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/theme/layout/admin/navigation/navigation.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], NavigationComponent);
        return NavigationComponent;
    }());
    exports.NavigationComponent = NavigationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavigationItems = [
        {
            id: "admin-space",
            title: 'Espace Admininstrateur',
            type: 'group',
            icon: 'feather icon-monitor',
            children: [
                {
                    id: 'my-profile',
                    title: 'Mon Profile',
                    type: 'item',
                    url: '/dashboard/profile',
                    icon: 'feather icon-user'
                }
            ]
        },
        {
            id: 'dashboard',
            title: 'Tableau de bord',
            type: 'group',
            icon: 'feather icon-monitor',
            children: [
                {
                    id: 'dashboard-manager',
                    title: 'Dashboard Manager',
                    type: 'item',
                    url: '/dashboard/manager',
                    icon: 'feather icon-monitor'
                },
                {
                    id: 'dashboard-traceability',
                    title: 'Dashboard Traceability',
                    type: 'item',
                    url: '/dashboard/traceability',
                    icon: 'feather icon-monitor'
                },
            ]
        },
        {
            id: 'Admin-Manager',
            title: 'Gestion des Administrateurs',
            type: 'group',
            icon: 'feather icon-monitor',
            children: [
                {
                    id: 'add-admin',
                    title: 'Ajouter un nouvel Admin',
                    type: 'item',
                    url: '/dashboard/add-new-admin',
                    icon: 'feather icon-user-plus'
                },
                {
                    id: 'Add-Releveur',
                    title: 'Ajouter un nouvel releveur',
                    type: 'item',
                    url: '/dashboard/add-releveur',
                    icon: 'feather icon-user-plus'
                },
                {
                    id: 'admin-Consultation',
                    title: 'Les Administrateurs',
                    type: 'item',
                    url: '/dashboard/admins-list',
                    icon: 'feather icon-users'
                }
            ]
        },
        {
            id: 'consultation',
            title: 'Consultation',
            type: 'group',
            icon: 'feather icon-monitor',
            children: [
                {
                    id: 'consulter-agree',
                    title: 'Les Centres',
                    type: 'item',
                    url: '/dashboard/consult-agree',
                    icon: 'feather icon-map-pin'
                },
                {
                    id: 'consulter-agree',
                    title: 'Les Points',
                    type: 'item',
                    url: '/dashboard/consult-points',
                    icon: 'feather icon-map-pin'
                },
                {
                    id: 'consulter-releveur',
                    title: 'Les releveurs',
                    type: 'item',
                    url: '/dashboard/consulter-releveur',
                    icon: 'feather icon-map-pin'
                },
                {
                    id: 'consulter-users',
                    title: 'les Utilisateurs',
                    type: 'item',
                    url: '/dashboard/consult-users',
                    icon: 'feather icon-users'
                },
                {
                    id: 'consulter-demandes',
                    title: 'les Demandes',
                    type: 'item',
                    url: '/dashboard/consult-demandes',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'consulter-agree',
                    title: 'Les réclamations',
                    type: 'item',
                    url: '/dashboard/consult-reclamtions',
                    icon: 'feather icon-alert-triangle'
                }
            ]
        },
    ];
    var child = /** @class */ (function () {
        function child() {
        }
        return child;
    }());
    exports.child = child;
    var role = /** @class */ (function () {
        function role() {
            this.id = "";
            this.title = "";
            this.type = "";
            this.icon = "";
            this.children = [];
        }
        return role;
    }());
    exports.role = role;
    var NavigationItem = /** @class */ (function () {
        function NavigationItem() {
        }
        NavigationItem.prototype.get = function () {
            var adminAllRoles = [];
            //admin-space
            adminAllRoles[adminAllRoles.length] = NavigationItems[0];
            if (Constants_1.Constants.admin.rolesGroupe) {
                var adminRole = void 0;
                for (var i = 1; i < NavigationItems.length; i++) {
                    adminRole = new role();
                    adminRole.id = NavigationItems[i].id;
                    adminRole.title = NavigationItems[i].title;
                    adminRole.type = NavigationItems[i].type;
                    adminRole.icon = NavigationItems[i].icon;
                    for (var j = 0; j < NavigationItems[i].children.length; j++) {
                        if (Constants_1.Constants.admin.rolesGroupe.indexOf(NavigationItems[i].children[j].id) !== -1) {
                            adminRole.children[adminRole.children.length] = NavigationItems[i].children[j];
                        }
                    }
                    if (adminRole.children.length !== 0) {
                        adminAllRoles[adminAllRoles.length] = adminRole;
                    }
                }
            }
            return adminAllRoles;
        };
        NavigationItem = tslib_1.__decorate([
            core_1.Injectable()
        ], NavigationItem);
        return NavigationItem;
    }());
    exports.NavigationItem = NavigationItem;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthComponent = /** @class */ (function () {
        function AuthComponent() {
        }
        AuthComponent.prototype.ngOnInit = function () {
        };
        AuthComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-auth',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./auth.component.scss */ "./src/app/theme/layout/auth/auth.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], AuthComponent);
        return AuthComponent;
    }());
    exports.AuthComponent = AuthComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
        }
        AlertComponent.prototype.dismissAlert = function (element) {
            element.parentElement.hidden = true;
        };
        AlertComponent.prototype.ngOnInit = function () {
        };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], AlertComponent.prototype, "type", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], AlertComponent.prototype, "dismiss", void 0);
        AlertComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-alert',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/alert/alert.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./alert.component.scss */ "./src/app/theme/shared/components/alert/alert.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], AlertComponent);
        return AlertComponent;
    }());
    exports.AlertComponent = AlertComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/alert/alert.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./alert.component */ "./src/app/theme/shared/components/alert/alert.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, alert_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                declarations: [alert_component_1.AlertComponent],
                exports: [alert_component_1.AlertComponent]
            })
        ], AlertModule);
        return AlertModule;
    }());
    exports.AlertModule = AlertModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, navigation_1, router_1, platform_browser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(route, nav, titleService) {
            this.route = route;
            this.nav = nav;
            this.titleService = titleService;
            this.breadcrumbList = [];
            this.navigationList = [];
            this.navigation = this.nav.get();
            this.type = 'theme2';
            this.setBreadcrumb();
        }
        BreadcrumbComponent.prototype.ngOnInit = function () {
            var routerUrl;
            routerUrl = this.route.url;
            if (routerUrl && typeof routerUrl === 'string') {
                this.filterNavigation(routerUrl);
            }
        };
        BreadcrumbComponent.prototype.setBreadcrumb = function () {
            var _this = this;
            var routerUrl;
            this.route.events.subscribe(function (router) {
                routerUrl = router.urlAfterRedirects;
                if (routerUrl && typeof routerUrl === 'string') {
                    _this.breadcrumbList.length = 0;
                    var activeLink = router.url;
                    _this.filterNavigation(activeLink);
                }
            });
        };
        BreadcrumbComponent.prototype.filterNavigation = function (activeLink) {
            var result = [];
            var title = '';
            this.navigation.forEach(function (a) {
                if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                    result = [
                        {
                            url: ('url' in a) ? a.url : false,
                            title: a.title,
                            breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
                            type: a.type,
                            icon: a.icon,
                        }
                    ];
                    title = a.title;
                }
                else {
                    if (a.type === 'group' && 'children' in a) {
                        a.children.forEach(function (b) {
                            if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                                result = [
                                    {
                                        url: ('url' in b) ? b.url : false,
                                        title: b.title,
                                        breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                        type: b.type,
                                        icon: b.icon,
                                    }
                                ];
                                title = b.title;
                            }
                            else {
                                if (b.type === 'collapse' && 'children' in b) {
                                    b.children.forEach(function (c) {
                                        if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                                            result = [
                                                {
                                                    url: ('url' in b) ? b.url : false,
                                                    title: b.title,
                                                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                    type: b.type,
                                                    icon: b.icon,
                                                },
                                                {
                                                    url: ('url' in c) ? c.url : false,
                                                    title: c.title,
                                                    breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                    type: c.type,
                                                    icon: c.icon,
                                                }
                                            ];
                                            title = c.title;
                                        }
                                        else {
                                            if (c.type === 'collapse' && 'children' in c) {
                                                c.children.forEach(function (d) {
                                                    if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                                        result = [
                                                            {
                                                                url: ('url' in b) ? b.url : false,
                                                                title: b.title,
                                                                breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                                type: b.type,
                                                                icon: b.icon,
                                                            },
                                                            {
                                                                url: ('url' in c) ? c.url : false,
                                                                title: c.title,
                                                                breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                                type: c.type,
                                                                icon: c.icon,
                                                            },
                                                            {
                                                                url: ('url' in d) ? d.url : false,
                                                                title: d.title,
                                                                breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
                                                                type: d.type,
                                                                icon: d.icon,
                                                            }
                                                        ];
                                                        title = d.title;
                                                    }
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
            this.navigationList = result;
            this.titleService.setTitle(title);
        };
        BreadcrumbComponent.ctorParameters = function () { return [
            { type: router_1.Router },
            { type: navigation_1.NavigationItem },
            { type: platform_browser_1.Title }
        ]; };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], BreadcrumbComponent.prototype, "type", void 0);
        BreadcrumbComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-breadcrumb',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [router_1.Router, navigation_1.NavigationItem, platform_browser_1.Title])
        ], BreadcrumbComponent);
        return BreadcrumbComponent;
    }());
    exports.BreadcrumbComponent = BreadcrumbComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./breadcrumb.component */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, breadcrumb_component_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    router_1.RouterModule
                ],
                declarations: [breadcrumb_component_1.BreadcrumbComponent],
                exports: [breadcrumb_component_1.BreadcrumbComponent]
            })
        ], BreadcrumbModule);
        return BreadcrumbModule;
    }());
    exports.BreadcrumbModule = BreadcrumbModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/card/card.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n\n.title {\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcY2FyZFxcY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC5mdWxsLWNhcmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHdpZHRoOiBjYWxjKDEwMHZ3KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxufVxyXG4udGl0bGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiLmNhcmQuZnVsbC1jYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/shared/components/card/card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js"), __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, ng_bootstrap_1, css_animator_1, animations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardComponent = /** @class */ (function () {
        function CardComponent(animationService, config) {
            config.placement = 'bottom-right';
            this.customHeader = false;
            this.options = true;
            this.hidHeader = false;
            this.isCardFooter = false;
            this.cardTitle = '';
            this.animator = animationService.builder();
            this.animators = animationService.builder();
            this.animator.useVisibility = true;
            this.fullIcon = 'icon-maximize';
            this.isAnimating = false;
            this.collapsedCard = 'expanded';
            this.collapsedIcon = 'icon-minus';
            this.loadCard = false;
            this.cardRemove = 'open';
        }
        CardComponent.prototype.ngOnInit = function () {
            if (this.hidHeader) {
                this.options = false;
            }
            if (!this.options || this.hidHeader || this.customHeader) {
                this.collapsedCard = 'false';
            }
        };
        CardComponent.prototype.fullCardToggle = function (element, animation, status) {
            var _this = this;
            animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
            this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
            // const duration = this.cardClass === 'full-card' ? 300 : 600;
            this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
            if (status) {
                this.animation = animation;
            }
            this.isAnimating = true;
            this.animators
                .setType(this.animation)
                .setDuration(500)
                .setDirection('alternate')
                .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
                .animate(element)
                .then(function () {
                _this.isAnimating = false;
            })
                .catch(function () {
                _this.isAnimating = false;
            });
            setTimeout(function () {
                _this.cardClass = animation === 'zoomOut' ? '' : _this.cardClass;
                if (_this.cardClass === 'full-card') {
                    document.querySelector('body').style.overflow = 'hidden';
                }
                else {
                    document.querySelector('body').removeAttribute('style');
                }
            }, 500);
        };
        CardComponent.prototype.collapsedCardToggle = function () {
            this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
            this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
        };
        CardComponent.prototype.cardRefresh = function () {
            var _this = this;
            this.loadCard = true;
            this.cardClass = 'card-load';
            setTimeout(function () {
                _this.loadCard = false;
                _this.cardClass = 'expanded';
            }, 3000);
        };
        CardComponent.prototype.cardRemoveAction = function () {
            this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
        };
        CardComponent.ctorParameters = function () { return [
            { type: css_animator_1.AnimationService },
            { type: ng_bootstrap_1.NgbDropdownConfig }
        ]; };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "cardTitle", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "cardClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "blockClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "headerClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Boolean)
        ], CardComponent.prototype, "options", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Boolean)
        ], CardComponent.prototype, "hidHeader", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Boolean)
        ], CardComponent.prototype, "customHeader", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "cardCaption", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "captionClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Boolean)
        ], CardComponent.prototype, "isCardFooter", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], CardComponent.prototype, "footerClass", void 0);
        CardComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-card',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html")).default,
                providers: [ng_bootstrap_1.NgbDropdownConfig],
                animations: [
                    animations_1.trigger('collapsedCard', [
                        animations_1.state('collapsed, void', animations_1.style({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        animations_1.state('expanded', animations_1.style({
                            overflow: 'hidden',
                            height: animations_1.AUTO_STYLE,
                        })),
                        animations_1.transition('collapsed <=> expanded', [
                            animations_1.animate('400ms ease-in-out')
                        ])
                    ]),
                    animations_1.trigger('cardRemove', [
                        animations_1.state('open', animations_1.style({
                            opacity: 1
                        })),
                        animations_1.state('closed', animations_1.style({
                            opacity: 0,
                            display: 'none'
                        })),
                        animations_1.transition('open <=> closed', animations_1.animate('400ms')),
                    ])
                ],
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./card.component.scss */ "./src/app/theme/shared/components/card/card.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [css_animator_1.AnimationService, ng_bootstrap_1.NgbDropdownConfig])
        ], CardComponent);
        return CardComponent;
    }());
    exports.CardComponent = CardComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/card/card.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./card.component */ "./src/app/theme/shared/components/card/card.component.ts"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, card_component_1, ng_bootstrap_1, css_animator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardModule = /** @class */ (function () {
        function CardModule() {
        }
        CardModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    ng_bootstrap_1.NgbDropdownModule,
                    css_animator_1.AnimatorModule
                ],
                declarations: [card_component_1.CardComponent],
                exports: [card_component_1.CardComponent],
                providers: [css_animator_1.AnimationService]
            })
        ], CardModule);
        return CardModule;
    }());
    exports.CardModule = CardModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! apexcharts/dist/apexcharts.common.js */ "./node_modules/apexcharts/dist/apexcharts.common.js"), __webpack_require__(/*! ./apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, apexcharts_common_js_1, apex_chart_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApexChartComponent = /** @class */ (function () {
        function ApexChartComponent(apexEvent) {
            this.apexEvent = apexEvent;
        }
        ApexChartComponent.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.chart = new apexcharts_common_js_1.default(document.querySelector('#' + _this.chartID), _this.chartConfig);
                _this.chart.render();
            });
            this.apexEvent.changeTimeRange.subscribe(function () {
                if (_this.xAxis) {
                    _this.chart.updateOptions({
                        xaxis: _this.xAxis
                    });
                }
            });
            this.apexEvent.changeSeriesData.subscribe(function () {
                if (_this.newData) {
                    _this.chart.updateSeries([{
                            data: _this.newData
                        }]);
                }
            });
        };
        ApexChartComponent.ctorParameters = function () { return [
            { type: apex_chart_service_1.ApexChartService }
        ]; };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], ApexChartComponent.prototype, "chartID", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], ApexChartComponent.prototype, "chartConfig", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], ApexChartComponent.prototype, "xAxis", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], ApexChartComponent.prototype, "newData", void 0);
        ApexChartComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-apex-chart',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./apex-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./apex-chart.component.scss */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [apex_chart_service_1.ApexChartService])
        ], ApexChartComponent);
        return ApexChartComponent;
    }());
    exports.ApexChartComponent = ApexChartComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApexChartService = /** @class */ (function () {
        function ApexChartService() {
            this.changeTimeRange = new core_1.EventEmitter();
            this.changeSeriesData = new core_1.EventEmitter();
        }
        ApexChartService.prototype.eventChangeTimeRange = function () {
            this.changeTimeRange.emit();
        };
        ApexChartService.prototype.eventChangeSeriesData = function () {
            this.changeSeriesData.emit();
        };
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], ApexChartService.prototype, "changeTimeRange", void 0);
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], ApexChartService.prototype, "changeSeriesData", void 0);
        ApexChartService = tslib_1.__decorate([
            core_1.Injectable(),
            tslib_1.__metadata("design:paramtypes", [])
        ], ApexChartService);
        return ApexChartService;
    }());
    exports.ApexChartService = ApexChartService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/data-table/data-filter.pipe.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, _, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DataFilterPipe = /** @class */ (function () {
        function DataFilterPipe() {
        }
        DataFilterPipe.prototype.transform = function (array, query) {
            if (query) {
                return _.filter(array, function (row) { return row.name.indexOf(query) > -1; });
            }
            return array;
        };
        DataFilterPipe = tslib_1.__decorate([
            core_1.Pipe({
                name: 'dataFilter'
            })
        ], DataFilterPipe);
        return DataFilterPipe;
    }());
    exports.DataFilterPipe = DataFilterPipe;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/shared/components/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! ./alert/alert.module */ "./src/app/theme/shared/components/alert/alert.module.ts"), __webpack_require__(/*! ./card/card.module */ "./src/app/theme/shared/components/card/card.module.ts"), __webpack_require__(/*! ./breadcrumb/breadcrumb.module */ "./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts"), __webpack_require__(/*! ./modal/modal.module */ "./src/app/theme/shared/components/modal/modal.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, alert_module_1, card_module_1, breadcrumb_module_1, modal_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tslib_1.__exportStar(alert_module_1, exports);
    tslib_1.__exportStar(card_module_1, exports);
    tslib_1.__exportStar(breadcrumb_module_1, exports);
    tslib_1.__exportStar(modal_module_1, exports);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  perspective: 600px;\n}\n.container {\n  min-height: 100%;\n}\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n.md-show {\n  visibility: visible;\n}\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  transition: all 0.3s;\n}\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n/* Content styles */\n.md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n.md-content h3 {\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  opacity: 0.8;\n  color: #fff;\n  border-radius: 3px 3px 0 0;\n}\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n}\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n  line-height: 1.5;\n}\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n.md-content > div ul li {\n  padding: 5px 0;\n}\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n/* Individual modal styles with animations/transitions */\n/* Effect 1: Fade in and scale up */\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 2: Slide from the right */\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n/* Effect 3: Slide from the bottom */\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 4: Newspaper */\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 5: fall */\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 6: side fall */\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n/* Effect 7:  slide and stick to top */\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n/* Effect 8: 3D flip horizontal */\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 9: 3D flip vertical */\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 10: 3D sign */\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 11: Super scaled */\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 12:  Just me */\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent;\n}\n.md-effect-12 .md-content h3 {\n  background: transparent;\n}\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n/* Effect 13: 3D slit */\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit 0.7s forwards ease-out;\n  animation: slit 0.7s forwards ease-out;\n}\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: 0.5;\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n/* Effect 14:  3D Rotate from bottom */\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n/* Effect 15:  3D Rotate in from left */\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n/* Effect 16:  Blur */\nbody.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n/* Effect 17:  Slide in from bottom with perspective on container */\nbody.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\nbody.modal-17 > header {\n  height: 70px;\n}\nbody.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n}\nbody.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\nbody.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none;\n}\nbody.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n/* Effect 18:  Slide from right with perspective on container */\nbody.modal-18 {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-18 ~ .md-overlay {\n  transition: all 0.5s;\n}\nbody.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none;\n}\nbody.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\nbody.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n  }\n}\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n/* Effect 19:  Slip in from the top with perspective on container */\nbody.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none;\n}\nbody.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\nbody.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n}\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFx0aGVtZVxcc2hhcmVkXFxjb21wb25lbnRzXFxtb2RhbFxcYW5pbWF0aW9uLW1vZGFsXFxhbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUVBLDRDQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBRUEsb0JBQUE7QUNDRjtBREVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQSxtQkFBQTtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FEQ0U7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ0NKO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VOO0FEQUk7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUNFTjtBRERNO0VBQ0UsY0FBQTtBQ0dSO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURHQSx3REFBQTtBQUVBLG1DQUFBO0FBRUE7RUFFRSxxQkFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQ0ZGO0FES0E7RUFFRSxtQkFBQTtFQUNBLFVBQUE7QUNGRjtBREtBLG1DQUFBO0FBRUE7RUFFRSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxzREFBQTtBQ0hGO0FETUE7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUNIRjtBRE1BLG9DQUFBO0FBRUE7RUFFRSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxvQkFBQTtBQ0pGO0FET0E7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUNKRjtBRE9BLHdCQUFBO0FBRUE7RUFJRSxrQ0FBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBR0Usb0JBQUE7QUNMRjtBRFFBO0VBSUUsZ0NBQUE7RUFDQSxVQUFBO0FDTEY7QURRQSxtQkFBQTtBQUdFO0VBR0UsbUJBQUE7QUNQSjtBRFNFO0VBR0UsNEJBQUE7RUFJQSwyQ0FBQTtFQUNBLFVBQUE7QUNQSjtBRFdBO0VBR0UsNEJBQUE7RUFJQSx3Q0FBQTtFQUNBLFVBQUE7QUNSRjtBRFdBLHdCQUFBO0FBR0U7RUFHRSxtQkFBQTtBQ1ZKO0FEWUU7RUFHRSw0QkFBQTtFQUlBLHlEQUFBO0VBQ0EsVUFBQTtBQ1ZKO0FEY0E7RUFHRSw0QkFBQTtFQUlBLG1EQUFBO0VBQ0EsVUFBQTtBQ1hGO0FEY0Esc0NBQUE7QUFFQTtFQUNFLE1BQUE7RUFJQSwyQkFBQTtBQ1pGO0FEYUU7RUFJRSw0QkFBQTtFQUdBLG9CQUFBO0VBQ0EsVUFBQTtBQ1hKO0FEZUE7RUFJRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ1pGO0FEZUEsaUNBQUE7QUFHRTtFQUdFLG1CQUFBO0FDZEo7QURnQkU7RUFHRSw0QkFBQTtFQUlBLDBCQUFBO0VBR0Esb0JBQUE7RUFDQSxVQUFBO0FDZEo7QURrQkE7RUFJRSx3QkFBQTtFQUNBLFVBQUE7QUNmRjtBRGtCQSwrQkFBQTtBQUdFO0VBR0UsbUJBQUE7QUNqQko7QURtQkU7RUFHRSw0QkFBQTtFQUlBLDBCQUFBO0VBR0Esb0JBQUE7RUFDQSxVQUFBO0FDakJKO0FEcUJBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0FDbEJGO0FEcUJBLHVCQUFBO0FBR0U7RUFHRSxtQkFBQTtBQ3BCSjtBRHNCRTtFQUdFLDRCQUFBO0VBSUEsMEJBQUE7RUFHQSx1QkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQ3BCSjtBRHdCQTtFQUlFLHdCQUFBO0VBQ0EsVUFBQTtBQ3JCRjtBRHdCQSw0QkFBQTtBQUVBO0VBSUUsbUJBQUE7RUFDQSxVQUFBO0VBR0Esb0JBQUE7QUN0QkY7QUR5QkE7RUFJRSxtQkFBQTtFQUNBLFVBQUE7QUN0QkY7QUR5QkEsd0JBQUE7QUFFQTtFQUlFLHFCQUFBO0VBQ0EsVUFBQTtFQUdBLG9CQUFBO0VBQ0EsV0FBQTtFQUlBLHVCQUFBO0FDMUJGO0FEdUJFO0VBQ0UsdUJBQUE7QUNyQko7QUQwQkE7RUFJRSxtQkFBQTtFQUNBLFVBQUE7QUN2QkY7QUQwQkEsdUJBQUE7QUFHRTtFQUdFLG1CQUFBO0FDekJKO0FEMkJFO0VBR0UsNEJBQUE7RUFJQSw2Q0FBQTtFQUNBLFVBQUE7QUN6Qko7QUQ2QkE7RUFDRSw4Q0FBQTtFQUVBLHNDQUFBO0FDMUJGO0FENkJBO0VBQ0U7SUFDRSxvREFBQTtJQUNBLFlBQUE7SUFDQSwyQ0FBQTtFQzFCRjtFRDZCQTtJQUNFLDhDQUFBO0lBQ0EsVUFBQTtFQzNCRjtBQUNGO0FENkNBO0VBQ0U7SUFDRSw0Q0FBQTtJQUNBLFVBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0VDaENGO0VEbUNBO0lBQ0Usc0NBQUE7SUFDQSxVQUFBO0VDakNGO0FBQ0Y7QURxQ0Esc0NBQUE7QUFHRTtFQUdFLG1CQUFBO0FDckNKO0FEdUNFO0VBR0UsNEJBQUE7RUFJQSwwQ0FBQTtFQUdBLHdCQUFBO0VBQ0EsVUFBQTtFQUdBLDZCQUFBO0FDckNKO0FEeUNBO0VBSUUsdUNBQUE7RUFDQSxVQUFBO0FDdENGO0FEeUNBLHVDQUFBO0FBR0U7RUFHRSxtQkFBQTtBQ3hDSjtBRDBDRTtFQUdFLDRCQUFBO0VBSUEsNERBQUE7RUFHQSx3QkFBQTtFQUNBLFVBQUE7RUFHQSxvQkFBQTtBQ3hDSjtBRDRDQTtFQUlFLHVEQUFBO0VBQ0EsVUFBQTtBQ3pDRjtBRDRDQSxxQkFBQTtBQUdFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQzNDSjtBRCtDQTtFQUVFLDBCQUFBO0VBQ0EsVUFBQTtBQzVDRjtBRCtDQTtFQUVFLG9CQUFBO0FDNUNGO0FEK0NBO0VBRUUsd0JBQUE7RUFDQSxVQUFBO0FDNUNGO0FEK0NBLG1FQUFBO0FBR0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSwwQkFBQTtBQzlDSjtBRGtEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUdBLDBCQUFBO0FDL0NGO0FEb0RJO0VBQ0UsWUFBQTtBQ2pETjtBRG1ESTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUNqRE47QURvREU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBRUEseUJBQUE7RUFFQSx3QkFBQTtFQUVBLDRCQUFBO0FDbERKO0FEcURJO0VBQ0UsYUFBQTtBQ25ETjtBRHVESTtFQUVFLHlCQUFBO0VBRUEsd0JBQUE7RUFFQSw0QkFBQTtBQ3JETjtBRDBEQTtFQUNFLFVBQUE7RUFFQSwyQkFBQTtBQ3ZERjtBRDBEQTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtFQUdBLHlCQUFBO0FDdkRGO0FEMERBLCtEQUFBO0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUN4REY7QUQyREE7RUFFRSxvQkFBQTtBQ3hERjtBRDZESTtFQUNFLGFBQUE7QUMxRE47QUQ2REU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FDM0RKO0FEOERJO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFEQUFBO0FDNUROO0FEaUVBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLDJDQUFBO0VDOURGO0VEaUVBO0lBQ0UscUNBQUE7RUMvREY7QUFDRjtBRG1FQTtFQUNFO0lBQ0UsMENBQUE7SUFDQSwyQ0FBQTtZQUFBLG1DQUFBO0VDakVGO0VEb0VBO0lBQ0UsNkJBQUE7RUNsRUY7QUFDRjtBRHNFQTtFQUVFLDJCQUFBO0VBQ0EsVUFBQTtBQ3BFRjtBRHdFRTtFQUVFLHdCQUFBO0VBQ0EsVUFBQTtFQUVBLHlCQUFBO0FDckVKO0FEd0VJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDdEVOO0FEd0VJO0VBR0Usb0JBQUE7QUN0RU47QUQyRUEsbUVBQUE7QUFJSTtFQUNFLGFBQUE7QUMzRU47QUQ4RUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FDNUVKO0FEK0VJO0VBQ0Usb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0FDN0VOO0FEa0ZBO0VBQ0U7SUFDRSxpQ0FBQTtJQUNBLDJDQUFBO0VDL0VGO0FBQ0Y7QUQyRkE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtFQ25GRjtBQUNGO0FEdUZBO0VBSUUsNEJBQUE7RUFDQSxVQUFBO0FDckZGO0FEd0ZBO0VBSUUsd0JBQUE7RUFDQSxVQUFBO0VBR0EseUJBQUE7QUNyRkY7QUR3RkE7RUFDRTtJQUNFLGNBQUE7RUNyRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcGVyc3BlY3RpdmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1kLW1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgc3R5bGVzICovXHJcblxyXG4ubWQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICB9XHJcbiAgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEluZGl2aWR1YWwgbW9kYWwgc3R5bGVzIHdpdGggYW5pbWF0aW9ucy90cmFuc2l0aW9ucyAqL1xyXG5cclxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXHJcblxyXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cclxuXHJcbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cclxuXHJcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC01IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC02IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xyXG5cclxuLm1kLWVmZmVjdC03IHtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cclxuXHJcbi5tZC1lZmZlY3QtOCB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXHJcblxyXG4ubWQtZWZmZWN0LTkge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTAge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMTogU3VwZXIgc2NhbGVkICovXHJcblxyXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGgzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXHJcblxyXG4ubWQtZWZmZWN0LTEzIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxuICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTQge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXHJcblxyXG4ubWQtZWZmZWN0LTE1IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNjogIEJsdXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTYgPiB7XHJcbiAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLCAubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG5cclxuYm9keS5tb2RhbC0xNyA+IHtcclxuICBuYXYsIHNlY3Rpb24sIC5tZC1vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtMTcge1xyXG4gID4ge1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiB7XHJcbiAgICBuYXYsIC5tZC1vdmVybGF5LCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTgge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuYm9keS5tb2RhbC0xOCB7XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIH1cclxuICAmLm1kLWVmZmVjdC0xOSB+IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubWQtb3ZlcmxheSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTkge1xyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuICA+IHtcclxuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9XHJcbn1cclxuIiwiLm1kLXBlcnNwZWN0aXZlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1kLXBlcnNwZWN0aXZlIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xuICBwZXJzcGVjdGl2ZTogNjAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWQtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNjMwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMjAwMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm1kLXNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubWQtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMzA7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41NSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogQ29udGVudCBzdHlsZXMgKi9cbi5tZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1kLWNvbnRlbnQgaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuNGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xufVxuLm1kLWNvbnRlbnQgPiBkaXYge1xuICBwYWRkaW5nOiAxNXB4IDQwcHggMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuLm1kLWNvbnRlbnQgPiBkaXYgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLm1kLWNvbnRlbnQgPiBkaXYgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAzMHB4IDIwcHg7XG59XG4ubWQtY29udGVudCA+IGRpdiB1bCBsaSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLm1kLWNvbnRlbnQgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4vKiBJbmRpdmlkdWFsIG1vZGFsIHN0eWxlcyB3aXRoIGFuaW1hdGlvbnMvdHJhbnNpdGlvbnMgKi9cbi8qIEVmZmVjdCAxOiBGYWRlIGluIGFuZCBzY2FsZSB1cCAqL1xuLm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAzOiBTbGlkZSBmcm9tIHRoZSBib3R0b20gKi9cbi5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNDogTmV3c3BhcGVyICovXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA1OiBmYWxsICovXG4ubWQtZWZmZWN0LTUubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC01IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgcm90YXRlWCgwZGVnKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xuLm1kLWVmZmVjdC02Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMCUpIHRyYW5zbGF0ZVooNjAwcHgpIHJvdGF0ZSgxMGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNzogIHNsaWRlIGFuZCBzdGljayB0byB0b3AgKi9cbi5tZC1lZmZlY3QtNyB7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4ubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cbi5tZC1lZmZlY3QtOC5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC04IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtOCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xuLm1kLWVmZmVjdC05Lm1kLW1vZGFsIHtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG4ubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTcwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMDogM0Qgc2lnbiAqL1xuLm1kLWVmZmVjdC0xMC5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC0xMCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMCAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTE6IFN1cGVyIHNjYWxlZCAqL1xuLm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDEyOiAgSnVzdCBtZSAqL1xuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCBoMyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMzogM0Qgc2xpdCAqL1xuLm1kLWVmZmVjdC0xMy5tZC1tb2RhbCB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuLm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMDBweCkgcm90YXRlWSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEzIC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaXQgMC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgLW1vei1hbmltYXRpb246IHNsaXQgMC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uOiBzbGl0IDAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGl0IHtcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNsaXQge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cbi5tZC1lZmZlY3QtMTQubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtMTQgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxNTogIDNEIFJvdGF0ZSBpbiBmcm9tIGxlZnQgKi9cbi5tZC1lZmZlY3QtMTUubWQtbW9kYWwge1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XG4gIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cbi5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE1IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTY6ICBCbHVyICovXG5ib2R5Lm1vZGFsLTE2ID4gbmF2LCBib2R5Lm1vZGFsLTE2ID4gaGVhZGVyLCBib2R5Lm1vZGFsLTE2ID4gc2VjdGlvbiB7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4ubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIsIC5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE3OiAgU2xpZGUgaW4gZnJvbSBib3R0b20gd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cbmJvZHkubW9kYWwtMTcgPiBuYXYsIGJvZHkubW9kYWwtMTcgPiBzZWN0aW9uLCBib2R5Lm1vZGFsLTE3ID4gLm1kLW92ZXJsYXkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE3IH4gLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG5ib2R5Lm1vZGFsLTE3ID4gaGVhZGVyIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuYm9keS5tb2RhbC0xNyA+IG5hdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xufVxuYm9keS5tb2RhbC0xNyAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuYm9keS5tb2RhbC0xNyA+IC5oZWFkZXItY2hhdCwgYm9keS5tb2RhbC0xNyA+IC5oZWFkZXItdXNlci1saXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkubW9kYWwtMTcgPiBuYXYsIGJvZHkubW9kYWwtMTcgPiAubWQtb3ZlcmxheSwgYm9keS5tb2RhbC0xNyA+IHNlY3Rpb24ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMmRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xufVxuXG4vKiBFZmZlY3QgMTg6ICBTbGlkZSBmcm9tIHJpZ2h0IHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG5ib2R5Lm1vZGFsLTE4IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG5ib2R5Lm1vZGFsLTE4ID4gLmhlYWRlci1jaGF0LCBib2R5Lm1vZGFsLTE4ID4gLmhlYWRlci11c2VyLWxpc3Qge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keS5tb2RhbC0xOCAucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG59XG5ib2R5Lm1vZGFsLTE4ID4gbmF2LCBib2R5Lm1vZGFsLTE4ID4gaGVhZGVyLCBib2R5Lm1vZGFsLTE4ID4gc2VjdGlvbiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcbiAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XG4gIH1cbn1cbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG59XG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1kLXNob3cubWQtZWZmZWN0LTE5IH4gLm1kLW92ZXJsYXkge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cbmJvZHkubW9kYWwtMTkgPiAuaGVhZGVyLWNoYXQsIGJvZHkubW9kYWwtMTkgPiAuaGVhZGVyLXVzZXItbGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5Lm1vZGFsLTE5IC5wY29kZWQtbWFpbi1jb250YWluZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbn1cbmJvZHkubW9kYWwtMTkgPiBuYXYsIGJvZHkubW9kYWwtMTkgPiBoZWFkZXIsIGJvZHkubW9kYWwtMTkgPiBzZWN0aW9uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIE9wZW5Ub3Age1xuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgT3BlblRvcCB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxufVxuLm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE5IC5tZC1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogNzUlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AnimationModalComponent = /** @class */ (function () {
        function AnimationModalComponent() {
            this.backDrop = false;
        }
        AnimationModalComponent.prototype.close = function (event) {
            document.querySelector('#' + event).classList.remove('md-show');
        };
        AnimationModalComponent.prototype.ngOnInit = function () { };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], AnimationModalComponent.prototype, "modalClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], AnimationModalComponent.prototype, "contentClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], AnimationModalComponent.prototype, "modalID", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], AnimationModalComponent.prototype, "backDrop", void 0);
        AnimationModalComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-animation-modal',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./animation-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html")).default,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./animation-modal.component.scss */ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], AnimationModalComponent);
        return AnimationModalComponent;
    }());
    exports.AnimationModalComponent = AnimationModalComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/modal/modal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./ui-modal/ui-modal.component */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts"), __webpack_require__(/*! ./animation-modal/animation-modal.component */ "./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, ui_modal_component_1, animation_modal_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ModalModule = /** @class */ (function () {
        function ModalModule() {
        }
        ModalModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                declarations: [ui_modal_component_1.UiModalComponent, animation_modal_component_1.AnimationModalComponent],
                exports: [ui_modal_component_1.UiModalComponent, animation_modal_component_1.AnimationModalComponent]
            })
        ], ModalModule);
        return ModalModule;
    }());
    exports.ModalModule = ModalModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvRDpcXGV0YWFpaVxccHJvamVjdDJcXFNOREVcXFNOREUtd2ViYWRtaW4vc3JjXFxhcHBcXHRoZW1lXFxzaGFyZWRcXGNvbXBvbmVudHNcXG1vZGFsXFx1aS1tb2RhbFxcdWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL3VpLW1vZGFsL3VpLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUNBSjtBREVFO0VBQ0UsVUFBQTtFQUdBLGdDQUFBO0FDQUo7QURDSTtFQUNFLFVBQUE7QUNDTjtBREdJO0VBSUUsMEJBQUE7QUNETjtBREdJO0VBR0UsNkJBQUE7RUFJQSw2QkFBQTtBQ0ROO0FESUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDRko7QURJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC91aS1tb2RhbC91aS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgJi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJi5mYWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgICYuaW4ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1vZGFsLmZhZGUge1xyXG4gICAgJi5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiIsIi5iYXNpYy5tb2RhbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIG91dGxpbmU6IDA7XG59XG4uYmFzaWMuZmFkZSB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGxpbmVhcjtcbn1cbi5iYXNpYy5mYWRlLmluIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5iYXNpYy5tb2RhbC5mYWRlLmluIC5tb2RhbC1kaWFsb2cge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbn1cbi5iYXNpYy5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xufVxuLmJhc2ljIC5iYXNpYy1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogMTZweDtcbn1cbi5iYXNpYyAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zMXB4O1xuICByaWdodDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UiModalComponent = /** @class */ (function () {
        function UiModalComponent() {
            this.hideHeader = false;
            this.hideFooter = false;
            this.containerClick = true;
            this.visible = false;
            this.visibleAnimate = false;
        }
        UiModalComponent.prototype.ngOnInit = function () {
        };
        UiModalComponent.prototype.show = function () {
            var _this = this;
            this.visible = true;
            setTimeout(function () { return _this.visibleAnimate = true; }, 100);
            document.querySelector('body').classList.add('modal-open');
        };
        UiModalComponent.prototype.hide = function () {
            var _this = this;
            this.visibleAnimate = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            document.querySelector('body').classList.remove('modal-open');
        };
        UiModalComponent.prototype.onContainerClicked = function (event) {
            if (event.target.classList.contains('modal') && this.containerClick === true) {
                this.hide();
            }
        };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", String)
        ], UiModalComponent.prototype, "dialogClass", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], UiModalComponent.prototype, "hideHeader", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], UiModalComponent.prototype, "hideFooter", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], UiModalComponent.prototype, "containerClick", void 0);
        UiModalComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-ui-modal',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./ui-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html")).default,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./ui-modal.component.scss */ "./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], UiModalComponent);
        return UiModalComponent;
    }());
    exports.UiModalComponent = UiModalComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0);\n  }\n  40% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3BpbmtpdC1jc3NcXHNrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUVBQUE7RUFDQSwyREFBQTtBQ0NKOztBREVBO0VBQ0k7SUFFSSxvQkFBQTtFQ0NOO0VEQ0U7SUFFSSxvQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUVJLG9CQUFBO0VDQU47RURFRTtJQUVJLG9CQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDREo7O0FESUE7RUFDSSx5Q0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICB0b3A6IDAgIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG59XHJcblxyXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcclxufVxyXG4iLCIuc2stbGluZS1tYXRlcmlhbCB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuI2h0dHAtbG9hZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxODgsIDE1NiwgMC44KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinkits.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spinkit = {
        skChasingDots: 'sk-chasing-dots',
        skCubeGrid: 'sk-cube-grid',
        skDoubleBounce: 'sk-double-bounce',
        skRotatingPlane: 'sk-rotationg-plane',
        skSpinnerPulse: 'sk-spinner-pulse',
        skThreeBounce: 'sk-three-bounce',
        skWanderingCubes: 'sk-wandering-cubes',
        skWave: 'sk-wave',
        skLine: 'sk-line-material'
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinner.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcdGhlbWVcXHNoYXJlZFxcY29tcG9uZW50c1xcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLmxvYWRlci1iZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG4iLCIjaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/theme/shared/components/spinner/spinner.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ./spinkits */ "./src/app/theme/shared/components/spinner/spinkits.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! src/Services/SpinnerService */ "./src/Services/SpinnerService.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, spinkits_1, router_1, common_1, SpinnerService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent(router, document) {
            var _this = this;
            this.router = router;
            this.document = document;
            this.isSpinnerVisible = true;
            this.Spinkit = spinkits_1.Spinkit;
            this.backgroundColor = '#2196f3';
            this.spinner = spinkits_1.Spinkit.skLine;
            this.router.events.subscribe(function (event) {
                if (event instanceof router_1.NavigationStart) {
                    _this.isSpinnerVisible = true;
                }
                else if (event instanceof router_1.NavigationEnd || event instanceof router_1.NavigationCancel || event instanceof router_1.NavigationError) {
                    _this.isSpinnerVisible = false;
                }
            }, function () {
                _this.isSpinnerVisible = false;
            });
            SpinnerService_1.SpinnerService.getEmittedValue().subscribe(function (item) {
                _this.isSpinnerVisible = item.show;
            });
        }
        SpinnerComponent.prototype.ngOnDestroy = function () {
            this.isSpinnerVisible = false;
        };
        SpinnerComponent.ctorParameters = function () { return [
            { type: router_1.Router },
            { type: Document, decorators: [{ type: core_1.Inject, args: [common_1.DOCUMENT,] }] }
        ]; };
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], SpinnerComponent.prototype, "backgroundColor", void 0);
        tslib_1.__decorate([
            core_1.Input(),
            tslib_1.__metadata("design:type", Object)
        ], SpinnerComponent.prototype, "spinner", void 0);
        SpinnerComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-spinner',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html")).default,
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./spinner.component.scss */ "./src/app/theme/shared/components/spinner/spinner.component.scss")).default, tslib_1.__importDefault(__webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss")).default]
            }),
            tslib_1.__param(1, core_1.Inject(common_1.DOCUMENT)),
            tslib_1.__metadata("design:paramtypes", [router_1.Router, Document])
        ], SpinnerComponent);
        return SpinnerComponent;
    }());
    exports.SpinnerComponent = SpinnerComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, screenfull) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToggleFullScreenDirective = /** @class */ (function () {
        function ToggleFullScreenDirective(elements) {
            this.elements = elements;
        }
        ToggleFullScreenDirective.prototype.onClick = function () {
            /*if (screenfull.enabled) {
              (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
              (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
              screenfull.toggle();
            }*/
            if (isScreenFull(screenfull)) {
                if (screenfull.isFullscreen) {
                    screenfull.exit();
                }
                else {
                    screenfull.request();
                }
            }
        };
        ToggleFullScreenDirective.ctorParameters = function () { return [
            { type: core_1.ElementRef }
        ]; };
        tslib_1.__decorate([
            core_1.HostListener('click'),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", []),
            tslib_1.__metadata("design:returntype", void 0)
        ], ToggleFullScreenDirective.prototype, "onClick", null);
        ToggleFullScreenDirective = tslib_1.__decorate([
            core_1.Directive({
                selector: '[appToggleFullScreen]'
            }),
            tslib_1.__metadata("design:paramtypes", [core_1.ElementRef])
        ], ToggleFullScreenDirective);
        return ToggleFullScreenDirective;
    }());
    exports.ToggleFullScreenDirective = ToggleFullScreenDirective;
    function isScreenFull(sf) {
        return sf.isFullscreen;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/theme/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./components */ "./src/app/theme/shared/components/index.ts"), __webpack_require__(/*! ./components/data-table/data-filter.pipe */ "./src/app/theme/shared/components/data-table/data-filter.pipe.ts"), __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js"), __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js"), __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/theme/shared/components/spinner/spinner.component.ts"), __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.component */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts"), __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.service */ "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, forms_1, components_1, data_filter_pipe_1, ngx_perfect_scrollbar_1, ng_click_outside_1, spinner_component_1, apex_chart_component_1, apex_chart_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
    };
    var SharedModule = /** @class */ (function () {
        function SharedModule() {
        }
        SharedModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    components_1.AlertModule,
                    components_1.CardModule,
                    components_1.BreadcrumbModule,
                    components_1.ModalModule,
                    ng_click_outside_1.ClickOutsideModule
                ],
                exports: [
                    common_1.CommonModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    components_1.AlertModule,
                    components_1.CardModule,
                    components_1.BreadcrumbModule,
                    components_1.ModalModule,
                    data_filter_pipe_1.DataFilterPipe,
                    ng_click_outside_1.ClickOutsideModule,
                    spinner_component_1.SpinnerComponent,
                    apex_chart_component_1.ApexChartComponent
                ],
                declarations: [
                    data_filter_pipe_1.DataFilterPipe,
                    spinner_component_1.SpinnerComponent,
                    apex_chart_component_1.ApexChartComponent
                ],
                providers: [
                    {
                        provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    apex_chart_service_1.ApexChartService
                ]
            })
        ], SharedModule);
        return SharedModule;
    }());
    exports.SharedModule = SharedModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = {
        production: true,
        firebaseConfig: {
            apiKey: "AIzaSyAgVi9_njw5Q-IG1fDyRVVy8arLKI-pkrA",
            authDomain: "test-isnde.firebaseapp.com",
            databaseURL: "https://test-isnde-default-rtdb.firebaseio.com",
            projectId: "test-isnde",
            storageBucket: "test-isnde.appspot.com",
            messagingSenderId: "68951809319",
            appId: "1:68951809319:web:265152e04459fa5111dd02",
            measurementId: "G-5T183R8SGW"
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js"), __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts"), __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, platform_browser_dynamic_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
        .catch(function (err) { return console.error(err); });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\etaaii\project2\SNDE\SNDE-webadmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map