(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-users/consulter-users.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-users/consulter-users.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Contenue du chaque reclamation -->\r\n<app-ui-modal #justificationModal2 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">les informations d'utilisateur </h5>\r\n    </div>\r\n\r\n\r\n    <div class=\"app-modal-body\">\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Id User</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i id=\"demo\" (click)=\"justificationModal4.show()\">{{clickedclaimUser.idUser}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Administration</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i id=\"demo\" (click)=\"ReclamAdmininstration(MapsAndPhoto)\">{{clickedAdministration.nomfr}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Satisfaction</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedclaimUser.satisfaction}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Image</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><img src=\"assets/images/showimage.png\" #justifyingImage (click)=\"justificationModal3.show();affichimage()\">\r\n                </app-alert>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>les reclamations</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <perfect-scrollbar style=\"min-height: 5px;max-height: 100px;\">\r\n\r\n                    <div *ngFor=\"let tag of claimTags;let userIndex=index\">\r\n                        <i style=\"padding-left: 10px;\">{{tag}}</i>\r\n                    </div>\r\n                </perfect-scrollbar>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal2.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n\r\n</app-ui-modal>\r\n<!-- contenue d'administaration du reclamation -->\r\n<app-ui-modal #MapsAndPhoto [dialogClass]=\"'modal-xl'\" [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Position et Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <app-map></app-map>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <app-card [options]=\"false\" cardTitle=\"Details de l'agence\">\r\n\r\n                    <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\">\r\n\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>image d'agence</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <app-alert type=\"light\"><img src=\"assets/images/showimage.png\" #justifyingImage (click)=\"justificationModal1.show();affichimage()\">\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Id Agence</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.id}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Nip</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.nip}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Nom froncais</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.nomfr}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Adresse</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.adresse}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Numéro Téléphone</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.contact}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Derniere mise à jour</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{timestampToDate(clickedAdministration.update)}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                    </perfect-scrollbar>\r\n                </app-card>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"MapsAndPhoto.hide();removeAllMarkers()\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n<!--end affichage contenue d'administaration du reclamation  -->\r\n<div *ngIf=\"!adminGotTheRole\" class=\"col-sm-12\">\r\n    <app-alert type=\"danger\" dismiss=\"true\" class=\"alert\">\r\n        <h3>Vous ne posséde pas la permission de consulter les utilisateurs!<br> Veuillez contacter votre administrateur pour cette permission</h3>\r\n    </app-alert>\r\n</div>\r\n\r\n<div *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div class=\"col-sm-12 m-b-15\">\r\n        <div id=\"main-search\" class=\"main-search open\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" (keyup)=\"verifyingSearch($event)\">\r\n                <span class=\"input-group-append search-btn btn btn-primary feather icon-search input-group-text\" (click)=\"Search()\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <app-card [options]=\"false\" cardTitle=\"Liste des Utilisateurs\">\r\n            <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\" *ngIf=\"initUsers\">\r\n            </ngb-progressbar>\r\n            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\" [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n                <ng-container *ngFor=\"let user of users;let userIndex=index\">\r\n                    <ng-container *ngIf=\"phoneNumberIsService(user.phoneNumber)\">\r\n                        <app-alert style=\"cursor: pointer;\" [type]=\"usersColor[userIndex]\" (mouseenter)=\"hoverOnUsers(userIndex)\" (mouseleave)=\"hoverOffUsers(userIndex)\" (click)=\"userClicked(userIndex);clickedadministration(userIndex)\">\r\n                            <div class=\"row\">\r\n                                <i class=\"col-md-12\"> {{user.phoneNumber}}</i>\r\n\r\n                            </div>\r\n                        </app-alert>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </perfect-scrollbar>\r\n        </app-card>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        <app-card [options]=\"false\" cardTitle=\"Détails de l'Utilisateur\">\r\n            <div [style.max-height]=\"(window.innerHeight-350)+'px'\" [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n                <div id=\"loading\">\r\n                    <!-- <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\" *ngIf=\"initDems || initTrans\">\r\n                    </ngb-progressbar> -->\r\n                </div>\r\n                <ngb-tabset *ngIf=\"clickedUserIndex!==-1\">\r\n                    <ngb-tab title=\"Informations\">\r\n                        <ng-template ngbTabContent>\r\n\r\n                            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-410)+'px'\" [style.min-height]=\"(window.innerHeight-410)+'px'\">\r\n                                <div class=\"row\" style=\"width: 100%\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Id User</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.id}}</i></app-alert>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"row\" style=\"width: 100%\" *ngIf=\"clickedUser.fullName\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Nom et Prénom</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.fullName}}</i></app-alert>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"width: 100%\" *ngIf=\"clickedUser.fullName\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Numéro de Téléphone</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.phoneNumber}}</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\">\r\n                                        <app-alert type=\"light\"><img #justificationImg [src]=\"'assets/images/showInfo.png'\" (click)=\"justifying('phoneNumber',justificationModal,justification,justificationImg)\">\r\n                                        </app-alert>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"row\" style=\"width: 100%\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Solde</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.balance}}</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\">\r\n                                        <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justificationImg (click)=\"justifying('balance',justificationModal,justification,justificationImg)\">\r\n                                        </app-alert>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" style=\"width: 100%\" *ngIf=\"clickedUser.email\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Email</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.email}}</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-2\">\r\n                                        <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justificationImg (click)=\"justifying('email',justificationModal,justification,justificationImg)\">\r\n                                        </app-alert>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"width: 100%\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Approuvé</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.approved == 2 ? 'OUI' : 'NON' }}</i>\r\n                                        </app-alert>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"row\" style=\"width: 100%\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>Statut</i></app-alert>\r\n                                    </div>\r\n                                    <div class=\"col-md-5\">\r\n                                        <app-alert type=\"light\"><i>{{clickedUser.status}}</i>\r\n                                        </app-alert>\r\n                                    </div>\r\n\r\n                                </div>\r\n\r\n\r\n                            </perfect-scrollbar>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Demandes\" *ngIf=\"adminCanSeeDemandes\">\r\n                        <ng-template ngbTabContent>\r\n                            <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\" *ngIf=\"initDems\">\r\n                            </ngb-progressbar>\r\n                            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-410)+'px'\" [style.min-height]=\"(window.innerHeight-410)+'px'\">\r\n                                <div class=\"alert-border m-t-5\" *ngFor=\"let demande of userLastDemandes;let demindex=index\">\r\n                                    <app-alert style=\"cursor: pointer;margin-top: 10px;\" [type]=\"'light'\" (click)=\"DemandeDetails.show()\" (click)=\"showDemandeDetails(demindex)\">\r\n                                        <!-- (click)=\"navigate('dashboard/consult-demande',demande.idUser,demande.id)\" -->\r\n                                        <div class=\"row\">\r\n                                            <i class=\"col-md-6 text-left\">\r\n                                                <img [src]=\" demande.status ? (demande.status==1 ? 'assets/images/IconAccept.png' : 'assets/images/IconRefused.png') : 'assets/images/IconInProgress.png'\"\r\n                                                    [title]=\"demande.status ? (demande.status==1 ? 'Acceptée' : 'Refusée') : 'En Cours'\">\r\n                                                {{demandeType[demande.typeDemande]}}\r\n                                            </i>\r\n                                            <i class=\"col-md-6 text-right\"> {{timestampToDate(demande.created)}}</i>\r\n                                        </div>\r\n                                    </app-alert>\r\n                                </div>\r\n                            </perfect-scrollbar>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                    <ngb-tab title=\"Reclamation\" *ngIf=\"adminCanSeeDemandes\">\r\n                        <ng-template ngbTabContent>\r\n                            <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\" *ngIf=\"initClaim\">\r\n                            </ngb-progressbar>\r\n\r\n                            <perfect-scrollbar [style.max-height]=\"(window.innerHeight-410)+'px'\" [style.min-height]=\"(window.innerHeight-410)+'px'\">\r\n                                <div class=\"alert-border m-t-5\" *ngFor=\"let userLastClaim of userLastClaims;let demindex=index\">\r\n                                    <div class=\"row\">\r\n                                        <i class=\"col-md-6 text-left\" (click)=\"clickedReclamUser(demindex);ReclamAdmininstration2(justificationModal2)\">\r\n    \r\n                                        {{userLastClaim.idUser}}-{{userLastClaim.created}}\r\n                                    </i>\r\n                                        <i class=\"col-md-6 text-right\"> {{timestampToDate(userLastClaim.created)}}</i>\r\n                                    </div>\r\n                                </div>\r\n                            </perfect-scrollbar>\r\n                        </ng-template>\r\n                    </ngb-tab>\r\n                </ngb-tabset>\r\n            </div>\r\n        </app-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- ============================= pour afficher le contenu du demande =================== -->\r\n<app-ui-modal #DemandeDetails [dialogClass]=\"'modal-xl'\" [containerClick]=\"false\">\r\n    <div class=\"app-modal-body\">\r\n        <app-details-demande></app-details-demande>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"DemandeDetails.hide()\">Fermer</button>\r\n\r\n    </div>\r\n</app-ui-modal>\r\n<!-- ============================== end affichchage contenu demande =======================-->\r\n\r\n\r\n\r\n\r\n<!-- afficher l'image de l'administration -->\r\n<app-ui-modal #justificationModal1 [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Image </h5>\r\n        <img src=\"{{url}}\" style=\"width: 60%;\">\r\n\r\n\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal1.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal1.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n<!-- afficher l'image de l'administration -->\r\n<app-ui-modal #justificationModal3 [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Image </h5>\r\n        <img src=\"{{url1}}\" style=\"width: 60%;\">\r\n    </div>\r\n\r\n\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal3.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n<!--end affichage d'image du administrateur -->\r\n<!-- l'affiche user reclamation -->\r\n<app-ui-modal #justificationModal4 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">les informations d'utilisateur </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Id User</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.id}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Nom et Prénom</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.fullName}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Numéro de Téléphone</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.phoneNumber}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Solde</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.balance}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Email</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.email}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Approuvé</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.approved == 2 ? 'OUI' : 'NON' }}</i>\r\n                </app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Statut</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedUser.status}}</i>\r\n                </app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"app-modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal4.hide();justification.value=''\">Fermer</button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>\r\n<!--  end l'affiche d-user reclamation -->");

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

/***/ "./src/app/demo/dashboard/consulter-users/ConsulterUsersService.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-users/ConsulterUsersService.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Service_1, Constants_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterUsersService = /** @class */ (function () {
        function ConsulterUsersService() {
        }
        ConsulterUsersService.getDemandesByUserId = function (http, idUser) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, data, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            data = { idUser: idUser };
                            return [4 /*yield*/, http.post(Constants_1.URLS.getDemandesByUserId, data, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        ConsulterUsersService.getUsers = function (http) {
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
        /* ================================   get reclamation ==================================== */
        /* afficher tous les claim  */
        ConsulterUsersService.getreclamation = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getClaim, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        /* methode nous donne juste la raclamation distingue par id user  */
        ConsulterUsersService.getClaimByUserId = function (http, idUser) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, data, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            data = { idUser: idUser };
                            return [4 /*yield*/, http.post(Constants_1.URLS.getClaimByUserId, data, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        /* methode d'affichage les reclamation par tableau dans tableau (voir fnct dans le back) */
        ConsulterUsersService.getChaqueClaim = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getChaqueClaim, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        return ConsulterUsersService;
    }());
    exports.ConsulterUsersService = ConsulterUsersService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-users/consulter-users-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-users/consulter-users-routing.module.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./consulter-users.component */ "./src/app/demo/dashboard/consulter-users/consulter-users.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, consulter_users_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: consulter_users_component_1.ConsulterUsersComponent
        }
    ];
    var ConsulterUsersRoutingModule = /** @class */ (function () {
        function ConsulterUsersRoutingModule() {
        }
        ConsulterUsersRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], ConsulterUsersRoutingModule);
        return ConsulterUsersRoutingModule;
    }());
    exports.ConsulterUsersRoutingModule = ConsulterUsersRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-users/consulter-users.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-users/consulter-users.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n\n.row {\n  margin: 0px;\n}\n\n.alert-border {\n  border: solid lightgrey 1px;\n  border-radius: 10px;\n  padding: 2px;\n}\n\n.card.ng-star-inserted {\n  margin-bottom: 0px;\n}\n\n#demo {\n  color: blue;\n  font-size: 13px;\n  text-decoration: underline;\n}\n\n#demo:hover {\n  text-decoration: underline;\n  color: blue;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLXVzZXJzL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFxkZW1vXFxkYXNoYm9hcmRcXGNvbnN1bHRlci11c2Vyc1xcY29uc3VsdGVyLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItdXNlcnMvY29uc3VsdGVyLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREtJO0VBQ0ksa0JBQUE7QUNGUjs7QURNQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNISjs7QURNQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGFzaGJvYXJkL2NvbnN1bHRlci11c2Vycy9jb25zdWx0ZXItdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXBwLWFsZXJ0IHtcclxuICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYWxlcnQtYm9yZGVyIHtcclxuICAgIGJvcmRlcjogc29saWQgbGlnaHRncmV5IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgICYubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4jZGVtbyB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4jZGVtbzpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59IiwiaSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1hbGVydC5hbGVydCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWxlcnQtYm9yZGVyIHtcbiAgYm9yZGVyOiBzb2xpZCBsaWdodGdyZXkgMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5jYXJkLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbiNkZW1vIHtcbiAgY29sb3I6IGJsdWU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbiNkZW1vOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-users/consulter-users.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-users/consulter-users.component.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/User */ "./src/Models/User.ts"), __webpack_require__(/*! src/Models/demande */ "./src/Models/demande.ts"), __webpack_require__(/*! src/Models/Justification */ "./src/Models/Justification.ts"), __webpack_require__(/*! src/Models/claim */ "./src/Models/claim.ts"), __webpack_require__(/*! src/Models/administration */ "./src/Models/administration.ts"), __webpack_require__(/*! src/Models/points */ "./src/Models/points.ts"), __webpack_require__(/*! src/app/demo/dashboard/map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! ./ConsulterUsersService */ "./src/app/demo/dashboard/consulter-users/ConsulterUsersService.ts"), __webpack_require__(/*! ../consulter-demandes/Consulter-Demandes.Service */ "./src/app/demo/dashboard/consulter-demandes/Consulter-Demandes.Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! src/app/demo/dashboard/map-new/MapNewService */ "./src/app/demo/dashboard/map-new/MapNewService.ts"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, User_1, demande_1, Justification_1, claim_1, administration_1, points_1, MapServices_1, Service_1, ConsulterUsersService_1, Consulter_Demandes_Service_1, http_1, platform_browser_1, Constants_1, MapNewService_1, storage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterUsersComponent = /** @class */ (function () {
        function ConsulterUsersComponent(http, titleService, storage) {
            this.http = http;
            this.titleService = titleService;
            this.storage = storage;
            this.window = window;
            this.propertie = "";
            this.users = [];
            this.listeUsers = [];
            this.displayUsers = [];
            this.usersColor = [];
            this.claims = []; //new
            this.clickedClaims = [];
            this.chaqueClaims = []; //new 
            this.administrations = [];
            this.points = [];
            this.clickedUserIndex = -1;
            this.clickedUser = new User_1.User();
            this.clickedUserClaim = new claim_1.Claim();
            this.clickedclaimUser = new claim_1.Claim();
            this.clickedAdministration = new administration_1.Administration();
            this.clickedPoints = new points_1.Points();
            this.userLastDemandes = [];
            this.userLastDisplayDemandes = [];
            this.userLastClaims = [];
            this.userLastDisplaytClaims = [];
            this.claimComponent = [];
            this.CliamUsers = [];
            this.demandeType = ["Approuvé", "Identité", " Portefeuille"];
            this.searching = false;
            this.verifReclam = false;
            this.initDems = false;
            this.initClaim = false;
            this.initUsers = false;
            this.adminGotTheRole = false;
            this.adminCanSeeDemandes = false;
            this.adminCanSeeReclamation = false;
            this.claimTags = [];
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.Users_Consultation) !== -1) {
                this.adminGotTheRole = true;
                if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.consulter_demandes) !== -1) {
                    this.adminCanSeeDemandes = true;
                }
                if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.consulter_demandes) !== -1) {
                    this.adminCanSeeReclamation = true;
                }
            }
        }
        ConsulterUsersComponent.prototype.ngOnInit = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.titleService.setTitle("Consulter les Utilisateurs");
                    if (this.adminGotTheRole) {
                        this.getClaim();
                        this.initializeUsers();
                        //this.getClaim()
                        this.getAdministartion();
                        //this.getClaimComponent()
                        //this.getCliamByUserid()
                        //this.affichimage()
                    }
                    return [2 /*return*/];
                });
            });
        };
        ConsulterUsersComponent.prototype.initializeUsers = function (search) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var result, users, displayUsers, i, i;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.initUsers = true;
                            //this.users = []
                            this.displayUsers = [];
                            this.clickedUserIndex = -1;
                            return [4 /*yield*/, ConsulterUsersService_1.ConsulterUsersService.getUsers(this.http)];
                        case 1:
                            result = (_a.sent());
                            //let listeUsers:User[] = [];
                            this.users = [];
                            this.listeUsers = Object.values(result.users);
                            if (!this.searching) {
                                users = Object.values(result.users);
                                displayUsers = result.displayUsers;
                                users = (users ? Object.values(users) : []);
                                displayUsers = (displayUsers ? Object.values(displayUsers) : []);
                                for (i = 0; i < users.length; i++) {
                                    displayUsers[i] = this.createNewBlankUser(displayUsers[i]);
                                    this.usersColor[this.usersColor.length] = "light";
                                }
                                this.users = Object.values(result.users);
                                ;
                                this.displayUsers = displayUsers;
                                this.initUsers = false;
                            }
                            else {
                                for (i = 0; i < this.listeUsers.length; i++) {
                                    this.displayUsers = [];
                                    if (this.listeUsers[i].phoneNumber == search) {
                                        // this.displayUsers=[];
                                        this.users[this.users.length] = this.listeUsers[i];
                                        this.displayUsers[this.users.length] = this.listeUsers[i];
                                    }
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /*================================ administration =====================================*/
        ConsulterUsersComponent.prototype.getAdministartion = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.administrations = [];
                            return [4 /*yield*/, MapNewService_1.MapNewService.getAdministrations(this.http).then(function (result) {
                                    var administrations = result.administrations;
                                    var displayadministrations = result.displayadministrations;
                                    _this.administrations = (administrations ? Object.values(administrations) : []);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsulterUsersComponent.prototype.getPoints = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.points = [];
                            return [4 /*yield*/, MapNewService_1.MapNewService.getPoints(this.http).then(function (result) {
                                    var points = result.points;
                                    var displaypoints = result.displaypoints;
                                    _this.points = (points ? Object.values(points) : []);
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* ==================================end administration ===============================*/
        /* ============================= Claim function =========================== */
        ConsulterUsersComponent.prototype.getClaim = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ConsulterUsersService_1.ConsulterUsersService.getreclamation(this.http).then(function (result) {
                                _this.claims = [];
                                _this.chaqueClaims = [];
                                var claims = result.claims;
                                //let displayclaims :Claim[]= result.displayclaim;
                                _this.claims = (claims ? Object.values(claims) : []);
                                // tableau parent 
                                // for (let i=0;i<this.claims.length;i++) {
                                //   //this.chaqueClaims[this.chaqueClaims.length]=this.claims[i];// en met les parents dans un tableau
                                //   let chaqueClaims = Object.values(this.claims[i])
                                //   for (let j=0;j<chaqueClaims.length;j++){
                                //     this.chaqueClaims[this.chaqueClaims.length]=chaqueClaims[j];
                                //   }
                                //   //console.log(this.chaqueClaims[i].idUser);
                                // }
                                console.log(_this.chaqueClaims);
                                for (var i = 0; i < _this.claims.length; i++) {
                                    var clickedClaims = _this.claims[i] ? Object.values(_this.claims[i]) : [];
                                    for (var j = 0; j < clickedClaims.length; j++) {
                                        _this.CliamUsers[_this.CliamUsers.length] = clickedClaims[j];
                                    }
                                }
                                console.log(_this.CliamUsers[0].satisfaction);
                                console.log(_this.CliamUsers);
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsulterUsersComponent.prototype.initializeReclamation = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        //this.initializing = true;
                        //this.clickedIndex = -1;
                        return [4 /*yield*/, ConsulterUsersService_1.ConsulterUsersService.getChaqueClaim(this.http).then(function (result) {
                                _this.claims = result.claims;
                                console.log(_this.claims);
                                console.log("hello " + _this.claims[0].satisfaction);
                            })];
                        case 1:
                            //this.initializing = true;
                            //this.clickedIndex = -1;
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* =============================== end claim functions ======================= */
        /*clickedadministration(userIndex){
          this.clickedAdministration=this.administrations[userIndex]
          for(let i=0;i<this.claims.length;i++){
            //console.log("claim idAdmiistration : "+this.claims[i].idAdministration)
            if(this.claims[i].idAdministration===this.clickedAdministration.id){
              console.log("administrationclicked : "+this.clickedAdministration.id);
      
            }
      
          }
      
          
        
        }*/
        ConsulterUsersComponent.prototype.createNewBlankUser = function (user) {
            user.balance = "***************";
            user.email = "***************";
            user.phoneNumber = "***************";
            return user;
        };
        ConsulterUsersComponent.prototype.hoverOnUsers = function (userIndex) {
            if (userIndex !== this.clickedUserIndex)
                this.usersColor[userIndex] = "dark";
        };
        ConsulterUsersComponent.prototype.hoverOffUsers = function (userIndex) {
            if (userIndex === this.clickedUserIndex) {
                this.usersColor[userIndex] = "primary";
            }
            else {
                this.usersColor[userIndex] = "light";
            }
        };
        ConsulterUsersComponent.prototype.userClicked = function (userIndex) {
            this.clickedUserClaim = new claim_1.Claim(); /* traja3ilna tableau fari8 ken l id user != id claim */
            this.claimTags = []; //pour traja3 tableau tag fera8
            //this.clickedAdministration=new Administration
            if (this.clickedUserIndex !== userIndex) {
                this.clickedUser = this.users[userIndex];
                this.usersColor.fill('light');
                this.clickedUserIndex = userIndex;
                this.usersColor[userIndex] = "primary";
                this.initializeDemandes();
                this.getCliamByUserid();
                this.affichimage();
                //this.initializeReclamation()
                // this.getIduser()
            }
        };
        /* pour l'affichage d'image de l'administration  */
        /* end affichage de l'image  */
        ConsulterUsersComponent.prototype.phoneNumberIsService = function (phoneNumber) {
            if (phoneNumber)
                return Number.parseInt(phoneNumber.substr(4, phoneNumber.length)).toString().length >= 8;
            return false;
        };
        ConsulterUsersComponent.prototype.getCliamByUserid = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var result, userLastClaims, userLastDisplaytClaims;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.initClaim = true;
                            if (!(this.clickedUserIndex != -1)) return [3 /*break*/, 2];
                            this.userLastClaims = [];
                            this.userLastDisplaytClaims = [];
                            this.clickedAdministration = new administration_1.Administration;
                            return [4 /*yield*/, ConsulterUsersService_1.ConsulterUsersService.getClaimByUserId(this.http, this.clickedUser.id)];
                        case 1:
                            result = (_a.sent());
                            userLastClaims = result.chaqueclaims;
                            userLastDisplaytClaims = result.chaqueclaims;
                            this.userLastClaims = (userLastClaims ? Object.values(userLastClaims) : []);
                            //  console.log("claim clicked user "+this.clickedUser.id)
                            this.userLastDisplaytClaims = (userLastDisplaytClaims ? Object.values(userLastDisplaytClaims) : []);
                            _a.label = 2;
                        case 2:
                            this.initClaim = false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsulterUsersComponent.prototype.clickedReclamUser = function (index) {
            this.claimTags = [];
            this.clickedclaimUser = this.userLastClaims[index];
            this.claimTags = this.userLastClaims[index].tags;
            console.log(this.claimTags);
            console.log(this.clickedclaimUser.idAdministration);
            for (var i = 0; i < this.administrations.length; i++) {
                if (this.administrations[i].id == this.clickedclaimUser.idAdministration) {
                    this.clickedAdministration = this.administrations[i];
                }
            }
            this.affichimgreclam();
        };
        ConsulterUsersComponent.prototype.affichimage = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var imgAdminnistration, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            imgAdminnistration = this.clickedAdministration.imagefacade;
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
        ConsulterUsersComponent.prototype.affichimgreclam = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var imgAdminnistration, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            imgAdminnistration = this.clickedclaimUser.urlImage;
                            _a = this;
                            return [4 /*yield*/, this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()];
                        case 1:
                            _a.images1 = _b.sent();
                            this.url1 = this.images1;
                            console.log(this.url1);
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsulterUsersComponent.prototype.initializeDemandes = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var result, userLastDemandes, userLastDisplayDemandes, i, j;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.initDems = true;
                            if (!(this.clickedUserIndex != -1)) return [3 /*break*/, 2];
                            this.userLastDemandes = [];
                            this.userLastDisplayDemandes = [];
                            return [4 /*yield*/, ConsulterUsersService_1.ConsulterUsersService.getDemandesByUserId(this.http, this.clickedUser.id)];
                        case 1:
                            result = (_a.sent());
                            userLastDemandes = result.demandes;
                            userLastDisplayDemandes = result.displayDemandes;
                            userLastDemandes = (userLastDemandes ? Object.values(userLastDemandes) : []);
                            userLastDisplayDemandes = (userLastDisplayDemandes ? Object.values(userLastDisplayDemandes) : []);
                            i = 0;
                            j = 0;
                            while (i < 10 && j < userLastDemandes.length) {
                                if (userLastDemandes[userLastDemandes.length - j - 1].typeDemande == 0 ||
                                    userLastDemandes[userLastDemandes.length - j - 1].typeDemande == 1 ||
                                    userLastDemandes[userLastDemandes.length - j - 1].typeDemande == 2) {
                                    this.userLastDemandes[this.userLastDemandes.length] = userLastDemandes[userLastDemandes.length - j - 1];
                                    //console.log("la demande clicked : "+this.userLastDemandes[0].id)
                                    this.userLastDisplayDemandes[this.userLastDisplayDemandes.length] = this.createNewBlankDemande(userLastDisplayDemandes[userLastDisplayDemandes.length - j - 1]);
                                    i++;
                                }
                                j++;
                            }
                            _a.label = 2;
                        case 2:
                            this.initDems = false;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ConsulterUsersComponent.prototype.createNewBlankDemande = function (demande) {
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
        ConsulterUsersComponent.prototype.showDemandeDetails = function (index) {
            Consulter_Demandes_Service_1.ConsulterDemandesServices.setDemande(this.userLastDemandes[index], this.userLastDisplayDemandes[index]);
        };
        ConsulterUsersComponent.prototype.showClaimDetails = function (index) {
            MapNewService_1.MapNewService.setAdministration(this.clickedAdministration[index], this.clickedAdministration[index]);
        };
        ConsulterUsersComponent.prototype.ReclamAdmininstration = function (MapsAndPhoto) {
            MapsAndPhoto.show();
            var justification = new Justification_1.Justification();
            justification.description = "Cliquer sur le boutton pour voir la position et la photo de l'agréé";
            justification.interface = "Consulter Demandes";
            console.log(this.clickedAdministration.Lat);
            MapServices_1.MapServices.addMarker([
                this.clickedAdministration.Lat,
                this.clickedAdministration.Long
            ], true, -1, this.clickedAdministration.nip);
        };
        ConsulterUsersComponent.prototype.ReclamAdmininstration2 = function (justificationModal2) {
            justificationModal2.show();
        };
        ConsulterUsersComponent.prototype.ngAfterViewInit = function () {
        };
        ConsulterUsersComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        ConsulterUsersComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        ConsulterUsersComponent.prototype.justifying = function (propertie, justificationModal, justificationModal1, justification, justifyingImage) {
            justification.value = "";
            justificationModal.show();
            justificationModal1.show();
            this.propertie = propertie;
            this.justifyingImage = justifyingImage;
        };
        ConsulterUsersComponent.prototype.justify = function (justificationModal, justify) {
            var _this = this;
            if (justify.value !== "") {
                var justification = new Justification_1.Justification();
                justification.attribute = this.propertie;
                justification.description = justify.value;
                justification.interface = "Consulter Utilisateur";
                justification.fromCollection = "user";
                justification.idObject = this.users[this.clickedUserIndex].id;
                this.justifyingImage.src = "assets/images/loading.gif";
                Service_1.Service.sendJustification(this.http, justification).then(function (result) {
                    if (result.status) {
                        _this.clickedUser[_this.propertie] = _this.users[_this.clickedUserIndex][_this.propertie];
                    }
                }).finally(function () {
                    _this.justifyingImage.src = "assets/images/showInfo.png";
                });
                justificationModal.hide();
            }
        };
        /* ============================ function searsh ========================== */
        ConsulterUsersComponent.prototype.Search = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var search;
                return tslib_1.__generator(this, function (_a) {
                    search = document.getElementById('m-search').value;
                    if (search !== "") {
                        this.searching = true;
                        this.initializeUsers(search);
                    }
                    return [2 /*return*/];
                });
            });
        };
        ConsulterUsersComponent.prototype.verifyingSearch = function (event) {
            var search = document.getElementById('m-search').value;
            if (search == "") {
                this.searching = false;
                this.initializeUsers(search);
            }
            else {
                if (event.key == "Enter")
                    this.Search();
            }
        };
        ConsulterUsersComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient },
            { type: platform_browser_1.Title },
            { type: storage_1.AngularFireStorage }
        ]; };
        ConsulterUsersComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-consulter-users',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./consulter-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-users/consulter-users.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./consulter-users.component.scss */ "./src/app/demo/dashboard/consulter-users/consulter-users.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
                platform_browser_1.Title,
                storage_1.AngularFireStorage])
        ], ConsulterUsersComponent);
        return ConsulterUsersComponent;
    }());
    exports.ConsulterUsersComponent = ConsulterUsersComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-users/consulter-users.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-users/consulter-users.module.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! ./consulter-users-routing.module */ "./src/app/demo/dashboard/consulter-users/consulter-users-routing.module.ts"), __webpack_require__(/*! ./consulter-users.component */ "./src/app/demo/dashboard/consulter-users/consulter-users.component.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/functions/index.js"), __webpack_require__(/*! ../consulter-demandes/details-demande/details-demande.module */ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.module.ts"), __webpack_require__(/*! src/app/demo/dashboard/map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! src/app/demo/dashboard/map-new/agree-details/agree-details.module */ "./src/app/demo/dashboard/map-new/agree-details/agree-details.module.ts"), __webpack_require__(/*! src/app/demo/dashboard/map-new/mapAgree.module */ "./src/app/demo/dashboard/map-new/mapAgree.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1, consulter_users_routing_module_1, consulter_users_component_1, http_1, functions_1, details_demande_module_1, map_module_1, agree_details_module_1, mapAgree_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterUsersModule = /** @class */ (function () {
        function ConsulterUsersModule() {
        }
        ConsulterUsersModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    consulter_users_routing_module_1.ConsulterUsersRoutingModule,
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
                    map_module_1.MapModule,
                    details_demande_module_1.DetailsDemandeModule,
                    agree_details_module_1.AgreeDetailsModule,
                    mapAgree_module_1.MapAgreeModule
                ],
                declarations: [
                    consulter_users_component_1.ConsulterUsersComponent,
                ],
                providers: [],
            })
        ], ConsulterUsersModule);
        return ConsulterUsersModule;
    }());
    exports.ConsulterUsersModule = ConsulterUsersModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=10.js.map