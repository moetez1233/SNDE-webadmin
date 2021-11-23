(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- poisition et photo du point financier-->\r\n<app-ui-modal #MapsAndPhoto [dialogClass]=\"'modal-xl'\" [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Position et Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n\r\n\r\n        <div class=\"row\" id=\"text\">\r\n            <div class=\"{{clickedIndex!==-1 ? 'col-sm-6' : 'col-sm-10'}}\">\r\n                <app-map></app-map>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <app-card [options]=\"false\" cardTitle=\"Details de l'agence\">\r\n                    <perfect-scrollbar>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i id=\"text\">image d'agence</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <app-alert type=\"light\"><img src=\"assets/images/showimage.png\" #justifyingImage (click)=\"ReclamAdmininstration1(justificationModal3)\">\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Id Agence</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.id}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Nip</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.nip}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Nom froncais</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.nomfr}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Numéro Téléphone</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{clickedAdministration.contact}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" style=\"width: 100%\">\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>Derniere mise à jour</i></app-alert>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <app-alert type=\"light\"><i>{{timestampToDate(clickedAdministration.update)}}</i>\r\n                                </app-alert>\r\n                            </div>\r\n                        </div>\r\n                    </perfect-scrollbar>\r\n                </app-card>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"MapsAndPhoto.hide();removeAllMarkers()\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n<!-- ====================user information=========== -->\r\n<app-ui-modal #justificationModal [containerClick]=\"false\" style=\"width: 95%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <app-map></app-map>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"app-modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal.hide();justification.value=''\">Fermer</button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>\r\n<!-- ===========================end popup user==================== -->\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"adminGotTheRole\" class=\"row\">\r\n    <div class=\"col-sm-12 m-b-15\">\r\n        <div id=\"main-search\" class=\"main-search open\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\">\r\n                <span class=\"input-group-append search-btn btn btn-primary feather icon-search input-group-text\">\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <app-card [options]=\"false\" cardTitle=\"Liste des reclamations\">\r\n            <div style=\"height: 300px;\">\r\n                <div class=\"col-md-12\">\r\n                    <perfect-scrollbar style=\"min-height: 10px;max-height: 280px;\">\r\n                        <ng-container *ngFor=\"let CliamUser of CliamUsers;let adminIndex=index;\">\r\n                            <app-alert style=\"cursor: pointer;\" [type]=\"adminsColor[adminIndex]\" (mouseenter)=\"hoverOn(adminIndex)\" (mouseleave)=\"hoverOff(adminIndex)\" (click)=\"ClaimClicked(adminIndex)\">\r\n                                <div class=\"row\" style=\"margin-left: -20px;margin-right: -10px;\">\r\n                                    <i class=\"col-md-6 text-left\"> \r\n                                        {{CliamUser.idUser}}\r\n                                    </i>\r\n                                    <i class=\"col-md-6 text-right\"> {{timestampToDate(CliamUser.created)}}</i>\r\n                                </div>\r\n                            </app-alert>\r\n                        </ng-container>\r\n                    </perfect-scrollbar>\r\n\r\n                </div>\r\n            </div>\r\n        </app-card>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"col-md-7\">\r\n        <app-card [options]=\"false\" cardTitle=\"Details du reclamations\">\r\n            <div style=\"height: 300px;\">\r\n\r\n                <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id Claim</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-7\">\r\n                        <app-alert type=\"light\"><i id=\"demo\" (click)=\"ReclamAdmininstration3(justificationModal2)\">{{clickedClaimParent.idUser}}-{{clickedClaimParent.created}}</i></app-alert>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i> Administration</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i id=\"demo\" (click)=\"ReclamAdmininstration2(MapsAndPhoto)\">{{clickedAdministration.nomfr}}</i></app-alert>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Image de reclamation </i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><img src=\"assets/images/showimage.png\" #justifyingImage (click)=\"ReclamAdmininstration1(justificationModal1)\">\r\n                        </app-alert>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Satisfaction</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedClaimParent.satisfaction}}</i></app-alert>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"initializing\">\r\n\r\n                    <perfect-scrollbar style=\"min-height: 5px;max-height: 90px;\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                                <i style=\"padding-left: 10px;\">Cotenu du reclamation</i>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <div *ngFor=\"let tag of claimTags;let userIndex=index\">\r\n\r\n\r\n                                    <i style=\"padding-left: 10px;\">{{tag}}</i>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-1\">\r\n                                <div *ngFor=\"let type of icones\"><img src=\"{{type}}\"></div>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <!--\r\n                        <div class=\"col-md-5\">\r\n\r\n\r\n                            <div *ngFor=\"let tag of claimTags;let userIndex=index\">\r\n\r\n\r\n                                <i style=\"padding-left: 10px;\">{{tag}}</i>\r\n\r\n                            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n\r\n                            <div *ngFor=\"let type of icones\"><img src=\"{{type}}\"></div>\r\n\r\n                        </div>\r\n                    -->\r\n                    </perfect-scrollbar>\r\n                    <!--\r\n                    <div class=\"col-md-2\">\r\n                        <perfect-scrollbar style=\"min-height: 5px;max-height: 100px;\">\r\n                            <img src=\"{{img0}}\"><br>\r\n                            <img src=\"{{img1}}\"><br>\r\n                            <img src=\"{{img2}}\"><br>\r\n                            <img src=\"{{img3}}\"><br>\r\n                            <img src=\"{{img4}}\"><br>\r\n                            <img src=\"{{img5}}\"><br>\r\n                            <img src=\"{{img6}}\"><br>\r\n\r\n\r\n                        </perfect-scrollbar>\r\n\r\n\r\n\r\n                    </div>\r\n                -->\r\n\r\n                    <!--\r\n                    <div class=\"col-md-2\">\r\n                      <perfect-scrollbar style=\"min-height: 5px;max-height: 100px;\">\r\n                      <img src=\"{{icone0}}\">\r\n                      <img src=\"{{icone1}}\">\r\n                      <img src=\"{{icone2}}\">\r\n                      <img src=\"{{icone3}}\">\r\n                      <img src=\"{{icone4}}\">\r\n                      <img src=\"{{icone5}}\">\r\n                      <img src=\"{{icone6}}\">\r\n                      </perfect-scrollbar>\r\n                              \r\n                              \r\n\r\n                    </div>\r\n                    -->\r\n                </div>\r\n\r\n            </div>\r\n        </app-card>\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n<!--\r\n<app-ui-modal #justificationModal2 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"col-md-6\">\r\n                    <app-map></app-map>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"app-modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal2.hide();justification.value=''\">Fermer</button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>\r\n-->\r\n\r\n\r\n\r\n<app-ui-modal #justificationModal1 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <img src=\"{{url}}\" style=\"width: 50%;\">\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal1.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n<app-ui-modal #justificationModal3 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <img src=\"{{url1}}\" style=\"width: 50%;\">\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal3.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n<app-ui-modal #justificationModal2 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">les informations d'utilisateur </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Id User</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.id}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Nom et Prénom</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.fullName}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Numéro de Téléphone</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.phoneNumber}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Solde</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.balance}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Email</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.email}}</i></app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Approuvé</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.approved == 2 ? 'OUI' : 'NON' }}</i>\r\n                </app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Statut</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimUser.status}}</i>\r\n                </app-alert>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"app-modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal2.hide();justification.value=''\">Fermer</button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n<div *ngIf=\"adminGotTheRole\" class=\"row\">\r\n   \r\n\r\n    <div class=\"col-md-7\">\r\n        <app-card [options]=\"false\" cardTitle=\"Details du reclamations\">\r\n            <div class=\"row\" style=\"width: 100%\">\r\n                <div class=\"col-md-5\">\r\n                    <app-alert type=\"light\"><i>Id Claim</i></app-alert>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <app-alert type=\"light\"><i>{{clickedClaim .idUser}}</i></app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"width: 100%\">\r\n                <div class=\"col-md-5\">\r\n                    <app-alert type=\"light\"><i>id administration</i></app-alert>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <app-alert type=\"light\"><i>{{clickedClaim.idAdministration}}</i></app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <i>Cotenu du reclamation</i>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <div *ngFor=\"let tag of claimTags;let userIndex=index\">\r\n                        <i>{{tag}}</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n        </app-card>\r\n    </div>\r\n</div>\r\n-->\r\n<!--\r\n<h1>teste </h1>\r\n<div class=\"col-md-4\">\r\n    <app-card [options]=\"false\" cardTitle=\"Liste des Utilisateurs\">\r\n        <ngb-progressbar [value]=\"100\" [striped]=\"true\" [animated]=\"true\" *ngIf=\"initUsers\">\r\n        </ngb-progressbar>\r\n        <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\" [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n\r\n            <ng-container *ngFor=\"let CliamUser of CliamUsers;let userIndex=index\">\r\n                <ng-container>\r\n                    <app-alert style=\"cursor: pointer;\" [type]=\"usersColor[userIndex]\" (mouseenter)=\"hoverOnUsers(userIndex)\" (mouseleave)=\"hoverOffUsers(userIndex)\" (click)=\"userClicked(userIndex);clickedadministration(userIndex)\">\r\n                        <div class=\"row\">\r\n                            <i class=\"col-md-12\"> {{CliamUser.idUser}}</i>\r\n\r\n                        </div>\r\n                    </app-alert>\r\n                </ng-container>\r\n            </ng-container>\r\n\r\n        </perfect-scrollbar>\r\n    </app-card>\r\n</div>\r\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card [options]=\"false\" cardTitle=\"Details du reclamations\">\r\n\r\n\r\n    <div style=\"height: 300px;\">\r\n\r\n        <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Id Claim</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n                <app-alert type=\"light\"><i>{{clickedClaimParent.idUser}}</i></app-alert>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i> Administration</i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i (click)=\"ReclamAdmininstration(justificationModal)\">{{clickedAdministration.nomfr}}</i></app-alert>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Image de reclamation </i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><img src=\"assets/images/showimage.png\" #justifyingImage>\r\n                </app-alert>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"width: 100%\" *ngIf=\"initializing\">\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><i>Position </i></app-alert>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <app-alert type=\"light\"><img src=\"assets/images/map.png\" #justifyingImage>\r\n                </app-alert>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"initializing\">\r\n            <div class=\"col-md-5\">\r\n                <i>Cotenu du reclamation</i>\r\n            </div>\r\n\r\n            <div class=\"col-md-5\">\r\n                <perfect-scrollbar style=\"min-height: 5px;max-height: 100px;\">\r\n                    <div *ngFor=\"let tag of claimTags;let userIndex=index\">\r\n\r\n                        <i>{{tag}}</i>\r\n                    </div>\r\n\r\n                </perfect-scrollbar>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</app-card>\r\n<app-ui-modal #justificationModal [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <app-map></app-map>\r\n        </div>\r\n\r\n\r\n        <div class=\"app-modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal.hide();justification.value=''\">Fermer</button>\r\n        </div>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n<app-ui-modal #justificationModal1 [containerClick]=\"false\" style=\"width: 70%;\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo du point Financier </h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <img src=\"{{url}}\" style=\"width: 50%;\">\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal1.hide();justification.value=''\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>");

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

/***/ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\n.row {\n  margin: 0px;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n\n#demo {\n  color: blue;\n  font-size: 13px;\n  text-decoration: underline;\n}\n\n#demo:hover {\n  text-decoration: underline;\n  color: blue;\n  font-size: 14px;\n}\n\n#iconeimg {\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLXJlY2xhbWF0aW9uL0Q6XFxldGFhaWlcXHByb2plY3QyXFxTTkRFXFxTTkRFLXdlYmFkbWluL3NyY1xcYXBwXFxkZW1vXFxkYXNoYm9hcmRcXGNvbnN1bHRlci1yZWNsYW1hdGlvblxcY29uc3VsdGVyLXJlY2xhbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItcmVjbGFtYXRpb24vY29uc3VsdGVyLXJlY2xhbWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDREo7O0FESUE7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItcmVjbGFtYXRpb24vY29uc3VsdGVyLXJlY2xhbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFwcC1hbGVydCB7XHJcbiAgICAmLmFsZXJ0IHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2RlbW8ge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI2RlbW86aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuI2ljb25laW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59IiwiaSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1hbGVydC5hbGVydCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZGVtbyB7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4jZGVtbzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jaWNvbmVpbWcge1xuICB3aWR0aDogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/claim */ "./src/Models/claim.ts"), __webpack_require__(/*! ./reclamations.service */ "./src/app/demo/dashboard/consulter-reclamation/reclamations.service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! ../roles/RoleService */ "./src/app/demo/dashboard/roles/RoleService.ts"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! src/app/demo/dashboard/map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Models/administration */ "./src/Models/administration.ts"), __webpack_require__(/*! src/app/demo/dashboard/map-new/MapNewService */ "./src/app/demo/dashboard/map-new/MapNewService.ts"), __webpack_require__(/*! src/app/demo/dashboard/consulter-users/ConsulterUsersService */ "./src/app/demo/dashboard/consulter-users/ConsulterUsersService.ts"), __webpack_require__(/*! src/Models/User */ "./src/Models/User.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, claim_1, reclamations_service_1, http_1, Constants_1, platform_browser_1, RoleService_1, storage_1, MapServices_1, administration_1, MapNewService_1, ConsulterUsersService_1, User_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterReclamationComponent = /** @class */ (function () {
        function ConsulterReclamationComponent(http, titleService, storage) {
            this.http = http;
            this.titleService = titleService;
            this.storage = storage;
            this.claims = [];
            this.users = [];
            this.claimTags = [];
            this.initializing = false;
            this.adminGotTheRole = false;
            this.adminCanSeeDemandes = false;
            this.adminCanSeeReclamation = false;
            this.adminIndex = -1;
            this.clickedClaimIndex = -1;
            this.adminsColor = [];
            this.adminRoles = [];
            this.clickedClaimParent = new claim_1.Claim();
            this.clickedAdministration = new administration_1.Administration();
            this.clickedClaimUser = new User_1.User();
            this.administrations = [];
            this.clickedIndex = -1;
            this.clickedClaims = [];
            this.chaqueClaims = []; //new
            this.CliamUsers = [];
            this.IconType = ["assets/images/tags/0.png", "assets/images/tags/1.png", " assets/images/tags/2.png", "assets/images/tags/3.png", "assets/images/tags/4.png", "assets/images/tags/5.png", "assets/images/tags/6.png"];
            this.Grouptags = ["Fermeture des locaux", "Espace non hygienne", "Injustice", "Corruption", "Discrimination", "Blocage administratif", "Mauvais service"];
            this.icones = new Array();
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.admin_Consultation) !== -1) {
                this.adminGotTheRole = true;
            }
        }
        ConsulterReclamationComponent.prototype.ngOnInit = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    this.titleService.setTitle("Consulter les reclamation");
                    // this.clickedIndex=-1
                    this.getClaim();
                    this.getAdministartion();
                    this.initializeUsers();
                    return [2 /*return*/];
                });
            });
        };
        ConsulterReclamationComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.adminGotTheRole) {
                RoleService_1.RoleService.get().subscribe(function (item) {
                    if (item.setAdminRoles) {
                        _this.adminRoles = item.adminRoles;
                    }
                });
            }
        };
        /* ========================= liste des claim ================================== */
        ConsulterReclamationComponent.prototype.getClaim = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, reclamations_service_1.ReclamationsService.getreclamation(this.http).then(function (result) {
                                _this.claims = [];
                                _this.chaqueClaims = [];
                                var claims = result.claims;
                                //let displayclaims :Claim[]= result.displayclaim;
                                _this.claims = (claims ? Object.values(claims) : []);
                                for (var i = 0; i < _this.claims.length; i++) {
                                    var clickedClaims = _this.claims[i] ? Object.values(_this.claims[i]) : [];
                                    for (var j = 0; j < clickedClaims.length; j++) {
                                        _this.CliamUsers[_this.CliamUsers.length] = clickedClaims[j];
                                    }
                                }
                                //console.log(this.CliamUsers[0].satisfaction);
                                //console.log(this.CliamUsers);
                            })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* ========================= end liste des claim ================================== */
        /* ========================= liste des administrations  ================================== */
        ConsulterReclamationComponent.prototype.getAdministartion = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.administrations = [];
                            //this.searching = false;
                            return [4 /*yield*/, MapNewService_1.MapNewService.getAdministrations(this.http).then(function (result) {
                                    var administrations = result.administrations;
                                    //console.log(administrations)
                                    var displayadministrations = result.displayadministrations;
                                    //console.log("displayadministrations "+this.displayadministrations)
                                    _this.administrations = (administrations ? Object.values(administrations) : []);
                                    //console.log(this.administrations);
                                    //console.log("administration 1 "+this.administrations)
                                    //this.displayadministrations = (displayadministrations ? Object.values(displayadministrations) : [])
                                    //console.log("displayadministration1 "+this.displayadministrations)
                                    //   console.log("administartion : "+this.administrations[0].id)
                                })];
                        case 1:
                            //this.searching = false;
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* ========================= end liste des administration ================================== */
        /* ========================= chaque claim clicked ================================== */
        ConsulterReclamationComponent.prototype.ClaimClicked = function (adminIndex, justificationModal) {
            this.claims = [];
            this.adminsColor.fill('light');
            this.adminsColor[adminIndex] = "primary";
            this.clickedAdministration = new administration_1.Administration();
            // this.clickedUserClaim = new Claim(); /* traja3ilna tableau fari8 ken l id user != id claim */
            this.claimTags = []; //pour traja3 tableau tag fera8
            this.clickedClaimUser = new User_1.User();
            if (this.clickedClaimIndex !== adminIndex) {
                this.clickedIndex = adminIndex;
                this.initializing = true;
                this.clickedClaimParent = this.CliamUsers[adminIndex];
                //console.log(this.clickedClaimParent.idUser)
                for (var i = 0; i < this.administrations.length; i++) {
                    if (this.administrations[i].id == this.clickedClaimParent.idAdministration) {
                        this.clickedAdministration = this.administrations[i];
                        //console.log(this.clickedAdministration.nomfr);
                    }
                }
                // console.log(this.clickedAdministration.imagefacade)
                for (var i = 0; i < this.users.length; i++) {
                    if (this.users[i].id == this.clickedClaimParent.idUser) {
                        this.clickedClaimUser = this.users[i];
                    }
                }
                reclamations_service_1.ReclamationsService.setReclamation(this.clickedClaimParent, this.clickedClaimParent);
                this.claimTags = this.clickedClaimParent.tags;
                /** ============================= icone tages ======================================= */
                for (var i = 0; i < this.claimTags.length; i++) {
                    /*if(this.claimTags[i]==this.Grouptags[0])
                   {this.icone0=this.IconType[0]
                         //console.log(this.icone0)
                         }
             
                   else  if(this.claimTags[i]==this.Grouptags[1])
                   {this.icone1=this.IconType[1]
                   //console.log(this.icone1)
                   }
                    else  if(this.claimTags[i]==this.Grouptags[2])
                  {  this.icone2=this.IconType[2]
                   //console.log(this.icone2)
                   }
                    else  if(this.claimTags[i]==this.Grouptags[3])
                   { this.icone3=this.IconType[3]
                   //console.log(this.icone3)
                   }
                    else  if(this.claimTags[i]==this.Grouptags[4])
                   { this.icone4=this.IconType[4]
                   //console.log(this.icone4)
                   }
                    else  if(this.claimTags[i]==this.Grouptags[5])
                   { this.icone5=this.IconType[5]
                   //console.log(this.icone5)
                   }*/
                    /*else  if(this.claimTags[i]==this.Grouptags[6])
                   { this.icone6=this.IconType[6]
                   //console.log(this.icone6)
                    }*/
                }
                //this.icones = Array(this.icone0,this.icone1, this.icone2,this.icone3,this.icone4,this.icone5,this.icone6);
                //console.log(this.icones)
                /* =============================== end icone tags =================================== */
                //console.log("tags :"+this.claimTags[1])
                //console.log(this.clickedClaimParent);
                // document.getElementById('valeur1').innerHTML="**********";
                this.adminsColor.fill('light');
                this.clickedClaimIndex = adminIndex;
                this.adminsColor[adminIndex] = "primary";
                //this.initializeDemandes();
            }
            this.affichimage();
            this.affichimageAgence();
            this.iconeTags();
            /*
            var text =document.getElementById('text').style.marginRight='12%';
            var text =document.getElementById('text').style.marginLeft='12%';
        
        
            
             
          
              setTimeout(
                () => {
             var text =document.getElementById('text').style.marginRight='1%';
             var text =document.getElementById('text').style.marginLeft='1%';
        
        
                }, 3000
                
                
              );*/
        };
        /* ========================= end chaque claim clicked  ================================== */
        /* ========================= affichage d'image de claim  ================================== */
        ConsulterReclamationComponent.prototype.affichimage = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var imgAdminnistration, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            imgAdminnistration = this.clickedClaimParent.urlImage;
                            //console.log(imgAdminnistration)
                            _a = this;
                            return [4 /*yield*/, this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()];
                        case 1:
                            //console.log(imgAdminnistration)
                            _a.images = _b.sent();
                            this.url = this.images;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* ========================= end affichage d'image de claim  ================================== */
        /* ========================= affichage d'image d'admiistration ================================== */
        ConsulterReclamationComponent.prototype.affichimageAgence = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var imgAdminnistration1, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            imgAdminnistration1 = this.clickedAdministration.imagefacade;
                            //console.log(imgAdminnistration)
                            _a = this;
                            return [4 /*yield*/, this.storage.storage.refFromURL(imgAdminnistration1).getDownloadURL()];
                        case 1:
                            //console.log(imgAdminnistration)
                            _a.images1 = _b.sent();
                            this.url1 = this.images1;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* ========================= end affichage d'image d'admiistration ================================== */
        ConsulterReclamationComponent.prototype.ReclamAdmininstration = function (justificationModal) {
            justificationModal.show();
            //let justification: Justification = new Justification();
            //justification.description = "Cliquer sur le boutton pour voir la position et la photo de l'agréé";
            //justification.interface = "Consulter Demandes"
            //console.log(this.clickedAdministration.Lat)
            MapServices_1.MapServices.addMarker([
                this.clickedClaimParent.position.lat,
                this.clickedClaimParent.position.lon,
            ], true, -1, this.clickedClaimParent.idUser);
        };
        ConsulterReclamationComponent.prototype.ReclamAdmininstration1 = function (justificationModal1) {
            justificationModal1.show();
        };
        ConsulterReclamationComponent.prototype.ReclamAdmininstration2 = function (MapsAndPhoto) {
            MapsAndPhoto.show();
            MapServices_1.MapServices.addMarker([
                this.clickedAdministration.Lat,
                this.clickedAdministration.Long,
            ], true, -1, this.clickedAdministration.nip);
        };
        ConsulterReclamationComponent.prototype.ReclamAdmininstration3 = function (justificationModal3) {
            justificationModal3.show();
        };
        ConsulterReclamationComponent.prototype.hoverOn = function (adminIndex) {
            if (adminIndex !== this.adminIndex)
                this.adminsColor[adminIndex] = "dark";
        };
        ConsulterReclamationComponent.prototype.mouseOut = function () {
            document.getElementById("demo").style.color = "black";
        };
        ConsulterReclamationComponent.prototype.hoverOff = function (adminIndex) {
            if (adminIndex === this.adminIndex) {
                this.adminsColor[adminIndex] = "primary";
            }
            else {
                this.adminsColor[adminIndex] = "light";
            }
        };
        ConsulterReclamationComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        ConsulterReclamationComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        ConsulterReclamationComponent.prototype.justifying = function (propertie, justificationModal, justificationModal1, justification, justifyingImage) {
            justification.value = "";
            justificationModal.show();
            justificationModal1.show();
            //MapsAndPhoto.show()
            this.propertie = propertie;
            this.justifyingImage = justifyingImage;
        };
        /* ==============================  user function ========================================= */
        ConsulterReclamationComponent.prototype.initializeUsers = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var result, users, displayUsers;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ConsulterUsersService_1.ConsulterUsersService.getUsers(this.http)];
                        case 1:
                            result = (_a.sent());
                            //let listeUsers:User[] = [];
                            this.users = [];
                            users = Object.values(result.users);
                            displayUsers = result.displayUsers;
                            users = (users ? Object.values(users) : []);
                            displayUsers = (displayUsers ? Object.values(displayUsers) : []);
                            this.users = Object.values(result.users);
                            this.clickedClaimUser = new User_1.User();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /* ================================ end user function ===================================== */
        /* ================================ Icone Tags ============================================ */
        ConsulterReclamationComponent.prototype.iconeTags = function () {
            this.icones = new Array();
            // this.tabes=new Array()
            for (var i = 0; i < this.claimTags.length; i++) {
                if (this.claimTags[i] == this.Grouptags[0]) {
                    this.icone0 = this.IconType[0];
                    console.log(this.icone0);
                    this.icones.push(this.IconType[0]);
                }
                else if (this.claimTags[i] == this.Grouptags[1]) {
                    this.icone1 = this.IconType[1];
                    this.icones.push(this.IconType[1]);
                    console.log(this.icone1);
                }
                else if (this.claimTags[i] == this.Grouptags[2]) {
                    this.icone2 = this.IconType[2];
                    this.icones.push(this.IconType[2]);
                    console.log(this.icone2);
                }
                else if (this.claimTags[i] == this.Grouptags[3]) {
                    this.icone3 = this.IconType[3];
                    this.icones.push(this.IconType[3]);
                    console.log(this.icone3);
                }
                else if (this.claimTags[i] == this.Grouptags[4]) {
                    this.icone4 = this.IconType[4];
                    this.icones.push(this.IconType[4]);
                    console.log(this.icone4);
                }
                else if (this.claimTags[i] == this.Grouptags[5]) {
                    this.icone5 = this.IconType[5];
                    this.icones.push(this.IconType[5]);
                    console.log(this.icone5);
                }
                else if (this.claimTags[i] == this.Grouptags[6]) {
                    this.icone6 = this.IconType[6];
                    this.icones.push(this.IconType[6]);
                    console.log(this.icone6);
                }
            }
            console.log(this.icones);
            //this.tabes=this.icones
            /* document.getElementById("0").innerHTML = this.icones[0];
         document.getElementById("1").innerHTML = this.icones[1];
         document.getElementById("2").innerHTML = this.icones[2];
         document.getElementById("3").innerHTML = this.icones[3];
         document.getElementById("4").innerHTML = this.icones[4];
         document.getElementById("5").innerHTML = this.icones[5];
         document.getElementById("6").innerHTML = this.icones[6];
         */
            this.img0 = this.icones[0];
            this.img1 = this.icones[1];
            this.img2 = this.icones[2];
            this.img3 = this.icones[3];
            this.img4 = this.icones[4];
            this.img5 = this.icones[5];
            this.img6 = this.icones[6];
            //this.icones = Array(this.icone0,this.icone1, this.icone2,this.icone3,this.icone4,this.icone5,this.icone6);
            //console.log(this.icones)
        };
        ConsulterReclamationComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient },
            { type: platform_browser_1.Title },
            { type: storage_1.AngularFireStorage }
        ]; };
        ConsulterReclamationComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-consulter-reclamation',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./consulter-reclamation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./consulter-reclamation.component.scss */ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
                platform_browser_1.Title,
                storage_1.AngularFireStorage])
        ], ConsulterReclamationComponent);
        return ConsulterReclamationComponent;
    }());
    exports.ConsulterReclamationComponent = ConsulterReclamationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.module.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./consulter-reclamations-routing.module */ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamations-routing.module.ts"), __webpack_require__(/*! ./consulter-reclamation.component */ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! ../roles/roles.module */ "./src/app/demo/dashboard/roles/roles.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/app/demo/dashboard/map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! ./detail-reclamation/detail-reclamation.component */ "./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, consulter_reclamations_routing_module_1, consulter_reclamation_component_1, shared_module_1, forms_1, ng_bootstrap_1, roles_module_1, http_1, map_module_1, detail_reclamation_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterReclamationModule = /** @class */ (function () {
        function ConsulterReclamationModule() {
        }
        ConsulterReclamationModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [
                    consulter_reclamation_component_1.ConsulterReclamationComponent,
                    detail_reclamation_component_1.DetailReclamationComponent,
                ],
                imports: [
                    common_1.CommonModule,
                    consulter_reclamations_routing_module_1.ConsulterReclamationsRoutingModule,
                    common_1.CommonModule,
                    //AdminsListRoutingModule,
                    shared_module_1.SharedModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTabsetModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    ng_bootstrap_1.NgbProgressbarModule,
                    ng_bootstrap_1.NgbPopoverModule,
                    ng_bootstrap_1.NgbTooltipModule,
                    map_module_1.MapModule,
                    roles_module_1.RolesModule,
                    http_1.HttpClientModule
                ], exports: [consulter_reclamation_component_1.ConsulterReclamationComponent]
            })
        ], ConsulterReclamationModule);
        return ConsulterReclamationModule;
    }());
    exports.ConsulterReclamationModule = ConsulterReclamationModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamations-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/consulter-reclamations-routing.module.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./consulter-reclamation.component */ "./src/app/demo/dashboard/consulter-reclamation/consulter-reclamation.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, router_1, consulter_reclamation_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            component: consulter_reclamation_component_1.ConsulterReclamationComponent
        }
    ];
    var ConsulterReclamationsRoutingModule = /** @class */ (function () {
        function ConsulterReclamationsRoutingModule() {
        }
        ConsulterReclamationsRoutingModule = tslib_1.__decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], ConsulterReclamationsRoutingModule);
        return ConsulterReclamationsRoutingModule;
    }());
    exports.ConsulterReclamationsRoutingModule = ConsulterReclamationsRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\n.row {\n  margin: 0px;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLXJlY2xhbWF0aW9uL2RldGFpbC1yZWNsYW1hdGlvbi9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcZGVtb1xcZGFzaGJvYXJkXFxjb25zdWx0ZXItcmVjbGFtYXRpb25cXGRldGFpbC1yZWNsYW1hdGlvblxcZGV0YWlsLXJlY2xhbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItcmVjbGFtYXRpb24vZGV0YWlsLXJlY2xhbWF0aW9uL2RldGFpbC1yZWNsYW1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FER0k7RUFDSSxZQUFBO0FDQVI7O0FESUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLXJlY2xhbWF0aW9uL2RldGFpbC1yZWNsYW1hdGlvbi9kZXRhaWwtcmVjbGFtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYXBwLWFsZXJ0IHtcclxuICAgICYuYWxlcnQge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiaSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcC1hbGVydC5hbGVydCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/claim */ "./src/Models/claim.ts"), __webpack_require__(/*! ../reclamations.service */ "./src/app/demo/dashboard/consulter-reclamation/reclamations.service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js"), __webpack_require__(/*! src/app/demo/dashboard/map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Models/administration */ "./src/Models/administration.ts"), __webpack_require__(/*! src/app/demo/dashboard/map-new/MapNewService */ "./src/app/demo/dashboard/map-new/MapNewService.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, claim_1, reclamations_service_1, http_1, Constants_1, platform_browser_1, storage_1, MapServices_1, administration_1, MapNewService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailReclamationComponent = /** @class */ (function () {
        function DetailReclamationComponent(http, titleService, storage) {
            this.http = http;
            this.titleService = titleService;
            this.storage = storage;
            this.adminGotTheRole = false;
            this.clickedClaimParent = new claim_1.Claim();
            this.clickedAdministration = new administration_1.Administration();
            this.administrations = [];
            this.clickedIndex = -1;
            this.initializing = false;
            this.claimTags = [];
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.admin_Consultation) !== -1) {
                this.adminGotTheRole = true;
            }
        }
        DetailReclamationComponent.prototype.ngOnInit = function () {
            var _this = this;
            reclamations_service_1.ReclamationsService.getData().subscribe(function (item) {
                if (item.claim && item.claim) {
                    _this.clickedClaimParent = item.claim;
                    _this.claimTags = _this.clickedClaimParent.tags;
                    //console.log(this.claimTags)
                    console.log(_this.clickedClaimParent.idUser);
                    _this.initializing = true;
                    //this.clickedDisplayDemande = item.displayDemande;
                    //this.demandeTypeSelected.fill(false)
                    //this.demandeTypeSelected[this.clickedDemande.typeDemande] = true;
                    _this.clickedIndex = 0;
                    _this.getAdministartion();
                }
            });
        };
        DetailReclamationComponent.prototype.getAdministartion = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var i;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.administrations = [];
                            this.clickedAdministration = new administration_1.Administration();
                            //this.searching = false;
                            return [4 /*yield*/, MapNewService_1.MapNewService.getAdministrations(this.http).then(function (result) {
                                    var administrations = result.administrations;
                                    //console.log(this.administrations)
                                    var displayadministrations = result.displayadministrations;
                                    //console.log("displayadministrations "+this.displayadministrations)
                                    _this.administrations = (administrations ? Object.values(administrations) : []);
                                    //console.log(this.administrations[0].id);
                                    //console.log("administration 1 "+this.administrations)
                                    //this.displayadministrations = (displayadministrations ? Object.values(displayadministrations) : [])
                                    //console.log("displayadministration1 "+this.displayadministrations)
                                    //   console.log("administartion : "+this.administrations[0].id)
                                })];
                        case 1:
                            //this.searching = false;
                            _a.sent();
                            for (i = 0; i < this.administrations.length; i++) {
                                if (this.administrations[i].id == this.clickedClaimParent.idAdministration) {
                                    this.clickedAdministration = this.administrations[i];
                                    console.log(this.clickedAdministration.id);
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        DetailReclamationComponent.prototype.ReclamAdmininstration = function (justificationModal) {
            justificationModal.show();
            //let justification: Justification = new Justification();
            //justification.description = "Cliquer sur le boutton pour voir la position et la photo de l'agréé";
            //justification.interface = "Consulter Demandes"
            //console.log(this.clickedAdministration.Lat)
            MapServices_1.MapServices.addMarker([
                this.clickedClaimParent.position.lat,
                this.clickedClaimParent.position.lon,
            ], true, -1, this.clickedClaimParent.idUser);
        };
        DetailReclamationComponent.prototype.ReclamAdmininstrationimag = function (justificationModal1) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var imgAdminnistration, _a;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            justificationModal1.show();
                            imgAdminnistration = this.clickedClaimParent.urlImage;
                            //console.log(imgAdminnistration)
                            _a = this;
                            return [4 /*yield*/, this.storage.storage.refFromURL(imgAdminnistration).getDownloadURL()];
                        case 1:
                            //console.log(imgAdminnistration)
                            _a.images = _b.sent();
                            this.url = this.images;
                            return [2 /*return*/];
                    }
                });
            });
        };
        DetailReclamationComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient },
            { type: platform_browser_1.Title },
            { type: storage_1.AngularFireStorage }
        ]; };
        DetailReclamationComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-detail-reclamation',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./detail-reclamation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./detail-reclamation.component.scss */ "./src/app/demo/dashboard/consulter-reclamation/detail-reclamation/detail-reclamation.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
                platform_browser_1.Title,
                storage_1.AngularFireStorage])
        ], DetailReclamationComponent);
        return DetailReclamationComponent;
    }());
    exports.DetailReclamationComponent = DetailReclamationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-reclamation/reclamations.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-reclamation/reclamations.service.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Service_1, Constants_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReclamationsService = /** @class */ (function () {
        function ReclamationsService() {
        }
        ReclamationsService.setReclamation = function (claim, displayclaim) {
            this.fire.emit({ "claim": claim, "displayclaim": displayclaim });
        };
        ReclamationsService.getData = function () {
            return this.fire;
        };
        //constructor() { }
        ReclamationsService.getreclamation = function (http) {
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
        ReclamationsService.fire = new core_1.EventEmitter();
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], ReclamationsService, "fire", void 0);
        ReclamationsService = tslib_1.__decorate([
            core_1.Injectable({
                providedIn: 'root'
            })
        ], ReclamationsService);
        return ReclamationsService;
    }());
    exports.ReclamationsService = ReclamationsService;
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
//# sourceMappingURL=2.js.map