(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-card [options]=\"false\" cardTitle=\"Demande Details\">\r\n    <perfect-scrollbar [style.max-height]=\"(window.innerHeight-350)+'px'\" [style.min-height]=\"(window.innerHeight-350)+'px'\">\r\n        <div>\r\n            <div class=\"row\" *ngIf=\"demandeTypeSelected[0]\">\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-10\">\r\n                        <app-alert type=\"light\"><i>Position sur Maps et Photo</i> </app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"consultAgree(MapsAndPhoto)\">Voir</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id de la Demande</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.id}}</i></app-alert>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.idUser}}</i></app-alert>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Email de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.parametreDemande.email}}</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage1 (click)=\"justifying('email',justificationModal,justification,justifyingImage1)\">\r\n                        </app-alert>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Numéro de téléphone de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.parametreDemande.phoneNumber}}</i>\r\n                        </app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage2 (click)=\"justifying('phoneNumber',justificationModal,justification,justifyingImage2)\">\r\n                        </app-alert>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngIf=\"clickedDisplayDemande.status\">\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===1 || clickedDisplayDemande.status===2) ? \"Oui\" : \"Non\"}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité le </i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{timestampToDate(clickedDisplayDemande.traitedTime)}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Décision</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===1 ) ? \"Acceptée\" : (clickedDisplayDemande.status===2 ? \"Refusée\":\"Error\")}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"clickedDisplayDemande.status===2\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Description</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===2) ? clickedDisplayDemande.raison : \"\"}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité par</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{clickedDisplayDemande.traitedBy}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage3 (click)=\"justifying('traitedBy',justificationModal,justification,justifyingImage3)\">\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"demandeTypeSelected[1]\">\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-10\">\r\n                        <app-alert type=\"light\"><i>Photo de vérification</i> </app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"VerificationIdentity.show();consultPhoto()\">Voir</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id de la Demande</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.id}}</i></app-alert>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\"\r\n                                    (click)=\"justifying('id',justificationModal,justification)\"></app-alert>\r\n                        </div> -->\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.idUser}}</i></app-alert>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\"\r\n                                    (click)=\"justifying('idUser',justificationModal,justification)\"></app-alert>\r\n                        </div> -->\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Email de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.parametreDemande.email}}</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage4 (click)=\"justifying('email',justificationModal,justification,justifyingImage4)\">\r\n                        </app-alert>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Numéro de téléphone de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.parametreDemande.phoneNumber}}</i>\r\n                        </app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage5 (click)=\"justifying('phoneNumber',justificationModal,justification,justifyingImage5)\">\r\n                        </app-alert>\r\n                    </div>\r\n                </div>\r\n                <ng-container *ngIf=\"clickedDisplayDemande.status\">\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===1 || clickedDisplayDemande.status===2) ? \"Oui\" : \"Non\"}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité le </i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{timestampToDate(clickedDisplayDemande.traitedTime)}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Décision</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===1 ) ? \"Acceptée\" : (clickedDisplayDemande.status===2 ? \"Refusée\":\"Error\")}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"clickedDisplayDemande.status===2\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Description</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===2) ? clickedDisplayDemande.raison : \"\"}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité par</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{clickedDisplayDemande.traitedBy}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage6 (click)=\"justifying('traitedBy',justificationModal,justification,justifyingImage5)\">\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"demandeTypeSelected[2]\">\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id de la Demande</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.id}}</i></app-alert>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\"\r\n                                    (click)=\"justifying('id',justificationModal,justification)\"></app-alert>\r\n                        </div> -->\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Id de l'Utilisateur</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{clickedDisplayDemande.idUser}}</i></app-alert>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\"\r\n                                    (click)=\"justifying('idUser',justificationModal,justification)\"></app-alert>\r\n                        </div> -->\r\n                </div>\r\n                <div class=\"row\" style=\"width: 100%\">\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>Type Portfeuille</i></app-alert>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <app-alert type=\"light\"><i>{{walletType[clickedDisplayDemande.parametreDemande.type]}}</i>\r\n                        </app-alert>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\"\r\n                                    (click)=\"justifying('idUser',justificationModal,justification)\"></app-alert>\r\n                        </div> -->\r\n                </div>\r\n                <perfect-scrollbar>\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i></i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>En Cours</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>Limit</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>Totals</i></app-alert>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>Operation</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.operation}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{this.clickedDisplayDemande.parametreDemande.operationLimit}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.operations}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>Periode</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.period}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.periodLimit}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.periods}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>Transfer</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.transfer}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{this.clickedDisplayDemande.parametreDemande.transferLimit}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.transfers}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>Retrait</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.withdrawal}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{this.clickedDisplayDemande.parametreDemande.withdrawalLimit}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <app-alert type=\"light\"><i>{{this.clickedDisplayDemande.parametreDemande.withdrawals}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n                </perfect-scrollbar>\r\n                <ng-container *ngIf=\"this.clickedDisplayDemande.status\">\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité le </i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{timestampToDate(clickedDisplayDemande.traitedTime)}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===1 || clickedDisplayDemande.status===2) ? \"Oui\" : \"Non\"}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Décision</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===1 ) ? \"Acceptée\" : (clickedDisplayDemande.status===2 ? \"Refusée\":\"Error\")}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\" *ngIf=\"clickedDisplayDemande.status===2\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Description</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{(clickedDisplayDemande.status===2) ? clickedDisplayDemande.raison : \"\"}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\" style=\"width: 100%\">\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\"><i>Traité par</i></app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-5\">\r\n                            <app-alert type=\"light\">\r\n                                <i>{{clickedDisplayDemande.traitedBy}}</i>\r\n                            </app-alert>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <app-alert type=\"light\"><img src=\"assets/images/showInfo.png\" #justifyingImage6 (click)=\"justifying('traitedBy',justificationModal,justification,justifyingImage6)\">\r\n                            </app-alert>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </div>\r\n        </div>\r\n    </perfect-scrollbar>\r\n    <div class=\"row\" *ngIf=\"adminCanTraitDemande\">\r\n        <div class=\"col-md-12 text-center\">\r\n            <!--  -->\r\n            <div *ngIf=\"clickedIndex!==-1 && clickedDisplayDemande.status !== 1 && clickedDisplayDemande.status !== 2 && clickedDisplayDemande.typeDemande !== 3\">\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"confirmeDemande()\">Confirmer</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"justificationRefuseModal.show()\">Rejeter</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-card>\r\n<app-ui-modal #MapsAndPhoto [dialogClass]=\"'modal-xl'\" [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Position et Photo de l'agréé</h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <app-map></app-map>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <app-agree-details></app-agree-details>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"MapsAndPhoto.hide();removeAllMarkers()\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n\r\n\r\n\r\n<app-ui-modal #VerificationIdentity [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Photo de vérification</h5>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <img src=\"\" alt=\"Photo de vérification\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"VerificationIdentity.hide()\">Fermer</button>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n<app-ui-modal #justificationModal [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Justification pour voir la donnée cachée </h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationModal.hide()\"><span aria-hidden=\"true\">&times;</span></button>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <input type=\"text\" class=\"form-control\" #justification placeholder=\"Justification\">\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationModal.hide();justification.value=''\">Fermer</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"justify(justificationModal,justification)\">Justifier</button>\r\n    </div>\r\n</app-ui-modal>\r\n\r\n<app-ui-modal #justificationRefuseModal [containerClick]=\"false\">\r\n    <div class=\"app-modal-header\">\r\n        <h5 class=\"modal-title\">Justification pour Refuser la demande </h5>\r\n        <button type=\"button\" class=\"close basic-close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"justificationRefuseModal.hide()\"><span>&times;</span></button>\r\n    </div>\r\n    <div class=\"app-modal-body\">\r\n        <div class=\"col-md-12\">\r\n            <input type=\"text\" class=\"form-control\" #refuseJustification placeholder=\"Justification\">\r\n        </div>\r\n    </div>\r\n    <div class=\"app-modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"justificationRefuseModal.hide();justification.value=''\">Fermer</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"justifyRefusing(justificationRefuseModal,refuseJustification)\">Rejeter</button>\r\n    </div>\r\n</app-ui-modal>");

/***/ }),

/***/ "./src/Models/demande.ts":
/*!*******************************!*\
  !*** ./src/Models/demande.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Demande = /** @class */ (function () {
        function Demande() {
            this.id = "";
            this.idUser = "";
            this.created = 0;
            this.typeDemande = 0;
            this.updated = 0;
        }
        return Demande;
    }());
    exports.Demande = Demande;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/Consulter-Demandes.Service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/Consulter-Demandes.Service.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Service_1, Constants_1, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConsulterDemandesServices = /** @class */ (function () {
        function ConsulterDemandesServices() {
        }
        ConsulterDemandesServices.setDemande = function (demande, displayDemande) {
            this.fire.emit({ "demande": demande, "displayDemande": displayDemande });
        };
        ConsulterDemandesServices.getData = function () {
            return this.fire;
        };
        ConsulterDemandesServices.getDemandes = function (http) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.get(Constants_1.URLS.getDemandes, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        ConsulterDemandesServices.confirmeDemande = function (http, idUser, dataUser, idDemande, dataDemande) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.confirmeDemande, {
                                    "idUser": idUser,
                                    "dataUser": dataUser,
                                    "idDemande": idDemande,
                                    "dataDemande": dataDemande,
                                }, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        ConsulterDemandesServices.rejectDemande = function (http, idUser, idDemande, dataDemande) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, result;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Service_1.Service.getHeadersWithIdToken()];
                        case 1:
                            options = _a.sent();
                            return [4 /*yield*/, http.post(Constants_1.URLS.rejectDemande, {
                                    "idUser": idUser,
                                    "idDemande": idDemande,
                                    "dataDemande": dataDemande,
                                }, options).toPromise()];
                        case 2:
                            result = (_a.sent());
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        ConsulterDemandesServices.fire = new core_1.EventEmitter();
        tslib_1.__decorate([
            core_1.Output(),
            tslib_1.__metadata("design:type", core_1.EventEmitter)
        ], ConsulterDemandesServices, "fire", void 0);
        ConsulterDemandesServices = tslib_1.__decorate([
            core_1.Injectable()
        ], ConsulterDemandesServices);
        return ConsulterDemandesServices;
    }());
    exports.ConsulterDemandesServices = ConsulterDemandesServices;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {\n  color: black;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.app-alert.alert {\n  color: black;\n}\n\nimg {\n  width: 25px;\n  cursor: pointer;\n}\n\n.row {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLWRlbWFuZGVzL2RldGFpbHMtZGVtYW5kZS9EOlxcZXRhYWlpXFxwcm9qZWN0MlxcU05ERVxcU05ERS13ZWJhZG1pbi9zcmNcXGFwcFxcZGVtb1xcZGFzaGJvYXJkXFxjb25zdWx0ZXItZGVtYW5kZXNcXGRldGFpbHMtZGVtYW5kZVxcZGV0YWlscy1kZW1hbmRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2Rhc2hib2FyZC9jb25zdWx0ZXItZGVtYW5kZXMvZGV0YWlscy1kZW1hbmRlL2RldGFpbHMtZGVtYW5kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUk7RUFDSSxZQUFBO0FDQ1I7O0FERUE7RUFDRyxXQUFBO0VBQ0EsZUFBQTtBQ0NIOztBRENBO0VBQ0ksV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvZGVtby9kYXNoYm9hcmQvY29uc3VsdGVyLWRlbWFuZGVzL2RldGFpbHMtZGVtYW5kZS9kZXRhaWxzLWRlbWFuZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXBwLWFsZXJ0e1xyXG4gICAgJi5hbGVydHtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxufVxyXG5pbWcge1xyXG4gICB3aWR0aDoyNXB4OyBcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSIsImkge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHAtYWxlcnQuYWxlcnQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! src/Models/demande */ "./src/Models/demande.ts"), __webpack_require__(/*! ../Consulter-Demandes.Service */ "./src/app/demo/dashboard/consulter-demandes/Consulter-Demandes.Service.ts"), __webpack_require__(/*! src/Models/Justification */ "./src/Models/Justification.ts"), __webpack_require__(/*! ../../map/MapServices */ "./src/app/demo/dashboard/map/MapServices.ts"), __webpack_require__(/*! src/Services/Service */ "./src/Services/Service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! src/Constants/Constants */ "./src/Constants/Constants.ts"), __webpack_require__(/*! src/Models/Agree */ "./src/Models/Agree.ts"), __webpack_require__(/*! ../../map-new/MapNewService */ "./src/app/demo/dashboard/map-new/MapNewService.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, demande_1, Consulter_Demandes_Service_1, Justification_1, MapServices_1, Service_1, http_1, Constants_1, Agree_1, MapNewService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailsDemandeComponent = /** @class */ (function () {
        function DetailsDemandeComponent(http) {
            this.http = http;
            this.url = "https://firebasestorage.googleapis.com/v0/b/webadmin-20dc7.appspot.com/o/Agrees%2Fimages%2Fd16fbd07-c0af-4931-90d7-52b7a5786d34.jpg?alt=media&token=05819b98-19a5-49c9-a80c-7fdc9c2e8ba3";
            this.window = window;
            this.demandeTypeSelected = [false, false, false];
            this.clickedDemande = new demande_1.Demande();
            this.clickedDisplayDemande = new demande_1.Demande();
            this.clickedIndex = -1;
            this.walletType = ["Without App", "Classique", "Pending Argent", "Argent", "Pending Or", "Or", "Pending Platinuim", "Platinuim"];
            this.adminCanTraitDemande = false;
            if (Constants_1.Constants.admin.rolesGroupe.indexOf(Constants_1.RolesId.Dem_Traitement) !== -1) {
                this.adminCanTraitDemande = true;
            }
        }
        DetailsDemandeComponent.prototype.ngOnInit = function () {
            var _this = this;
            Consulter_Demandes_Service_1.ConsulterDemandesServices.getData().subscribe(function (item) {
                if (item.demande && item.displayDemande) {
                    _this.clickedDemande = item.demande;
                    _this.clickedDisplayDemande = item.displayDemande;
                    _this.demandeTypeSelected.fill(false);
                    _this.demandeTypeSelected[_this.clickedDemande.typeDemande] = true;
                    _this.clickedIndex = 0;
                }
            });
        };
        DetailsDemandeComponent.prototype.consultAgree = function (MapsAndPhoto) {
            MapsAndPhoto.show();
            var justification = new Justification_1.Justification();
            justification.description = "Cliquer sur le boutton pour voir la position et la photo de l'agréé";
            justification.interface = "Consulter Demandes";
            MapServices_1.MapServices.addMarker([
                this.clickedDemande.parametreDemande.ag_latitude,
                this.clickedDemande.parametreDemande.ag_longitude
            ], true, -1, this.clickedDemande.idUser);
            var clickedAgree = new Agree_1.Agree();
            var clickedDisplayAgree = new Agree_1.Agree();
            clickedAgree.id = this.clickedDemande.parametreDemande.id;
            clickedAgree.activity = this.clickedDemande.parametreDemande.activity;
            clickedAgree.phoneNumber = this.clickedDemande.parametreDemande.phoneNumber;
            clickedAgree.updated = this.clickedDemande.parametreDemande.updated;
            clickedDisplayAgree.id = this.clickedDisplayDemande.parametreDemande.id;
            clickedDisplayAgree.activity = this.clickedDisplayDemande.parametreDemande.activity;
            clickedDisplayAgree.phoneNumber = "***************";
            clickedDisplayAgree.updated = this.clickedDisplayDemande.parametreDemande.updated;
            setTimeout(function () { MapNewService_1.MapNewService.setAgree(clickedAgree, clickedDisplayAgree); }, 200);
            setTimeout(function () { MapServices_1.MapServices.resize(); }, 200);
            Service_1.Service.sendJustification(this.http, justification);
        };
        DetailsDemandeComponent.prototype.removeAllMarkers = function () {
            MapServices_1.MapServices.removeAllMarkers();
        };
        DetailsDemandeComponent.prototype.focusOnMarker = function () {
            MapServices_1.MapServices.focusMarker();
        };
        DetailsDemandeComponent.prototype.justifying = function (propertie, justificationModal, justification, justifyingImage) {
            justification.value = "";
            justificationModal.show();
            this.propertie = propertie;
            this.justifyingImage = justifyingImage;
        };
        DetailsDemandeComponent.prototype.justify = function (justificationModal, justify) {
            var _this = this;
            if (justify.value !== "") {
                var justification = new Justification_1.Justification();
                justification.attribute = this.propertie;
                justification.description = justify.value;
                justification.interface = "Consulter Demandes";
                justification.fromCollection = "demandes";
                justification.idObject = this.clickedDemande.id;
                this.justifyingImage.src = "assets/images/loading.gif";
                Service_1.Service.sendJustification(this.http, justification).then(function (result) {
                    if (result.status) {
                        if (_this.clickedDisplayDemande[_this.propertie]) {
                            _this.clickedDisplayDemande[_this.propertie] = _this.clickedDemande[_this.propertie];
                        }
                        else if (_this.clickedDisplayDemande.parametreDemande[_this.propertie]) {
                            _this.clickedDisplayDemande.parametreDemande[_this.propertie] = _this.clickedDemande.parametreDemande[_this.propertie];
                        }
                    }
                }).finally(function () {
                    _this.justifyingImage.src = "assets/images/showInfo.png";
                });
                justificationModal.hide();
            }
        };
        DetailsDemandeComponent.prototype.confirmeDemande = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var updatedTime, idUser, idDemande, dataUser, dataDemande;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.clickedIndex = -1;
                            updatedTime = new Date().getTime();
                            idUser = this.clickedDemande.idUser;
                            idDemande = this.clickedDemande.id;
                            dataUser = {};
                            dataDemande = {};
                            if (this.demandeTypeSelected[0]) {
                                dataUser = {
                                    approved: 2,
                                    updated: updatedTime
                                };
                            }
                            else if (this.demandeTypeSelected[1]) {
                                dataUser = {
                                    wallet: {
                                        type: this.clickedDemande.parametreDemande.type + 1
                                    },
                                    updated: updatedTime
                                };
                            }
                            else if (this.demandeTypeSelected[2]) {
                                dataUser = {
                                    wallet: {
                                        type: this.clickedDemande.parametreDemande.type + 1
                                    },
                                    updated: updatedTime
                                };
                            }
                            dataDemande = {
                                status: Constants_1.DemandeTraited.DEMANDE_ACCEPTED,
                                traitedBy: Constants_1.Constants.admin.id,
                                updated: updatedTime,
                                traitedTime: updatedTime,
                            };
                            this.clickedDisplayDemande.status = Constants_1.DemandeTraited.DEMANDE_ACCEPTED;
                            this.clickedDisplayDemande.traitedBy = "***************";
                            this.clickedDemande.traitedBy = Constants_1.Constants.admin.id;
                            this.clickedDisplayDemande.updated = updatedTime;
                            this.clickedDisplayDemande.traitedTime = updatedTime;
                            return [4 /*yield*/, Consulter_Demandes_Service_1.ConsulterDemandesServices.confirmeDemande(this.http, idUser, dataUser, idDemande, dataDemande)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DetailsDemandeComponent.prototype.timestampToDate = function (timestamp) {
            var date = new Date(timestamp);
            return this.valueOf(date.getDate()) + "/" + this.valueOf(date.getMonth().valueOf() + 1) + "/" + date.getFullYear() + " - " + this.valueOf(date.getHours()) + ":" + this.valueOf(date.getMinutes()) + ":" + this.valueOf(date.getSeconds());
        };
        DetailsDemandeComponent.prototype.valueOf = function (i) {
            if (i < 10) {
                return "0" + i;
            }
            return i.toString();
        };
        DetailsDemandeComponent.prototype.rejectDemande = function (raison) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var updatedTime, idUser, idDemande, dataDemande;
                return tslib_1.__generator(this, function (_a) {
                    updatedTime = new Date().getTime();
                    idUser = this.clickedDemande.idUser;
                    idDemande = this.clickedDemande.id;
                    dataDemande = {
                        status: Constants_1.DemandeTraited.DEMANDE_REJECTED,
                        traitedBy: Constants_1.Constants.admin.id,
                        updated: updatedTime,
                        raison: raison,
                        traitedTime: updatedTime,
                    };
                    this.clickedDemande = new demande_1.Demande();
                    this.demandeTypeSelected.fill(false);
                    Consulter_Demandes_Service_1.ConsulterDemandesServices.rejectDemande(this.http, idUser, idDemande, dataDemande);
                    return [2 /*return*/];
                });
            });
        };
        DetailsDemandeComponent.prototype.justifyRefusing = function (justificationRefuseModal, refuseJustification) {
            if (refuseJustification.value !== "") {
                this.rejectDemande(refuseJustification.value);
                justificationRefuseModal.hide();
            }
        };
        DetailsDemandeComponent.prototype.consultPhoto = function () {
            var justification = new Justification_1.Justification();
            justification.description = "Cliquer sur le boutton pour voir la photo de vérification";
            justification.interface = "Consulter Demandes";
            Service_1.Service.sendJustification(this.http, justification);
        };
        DetailsDemandeComponent.ctorParameters = function () { return [
            { type: http_1.HttpClient }
        ]; };
        DetailsDemandeComponent = tslib_1.__decorate([
            core_1.Component({
                selector: 'app-details-demande',
                template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./details-demande.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.html")).default,
                styles: [tslib_1.__importDefault(__webpack_require__(/*! ./details-demande.component.scss */ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.scss")).default]
            }),
            tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
        ], DetailsDemandeComponent);
        return DetailsDemandeComponent;
    }());
    exports.DetailsDemandeComponent = DetailsDemandeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.module.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ./details-demande.component */ "./src/app/demo/dashboard/consulter-demandes/details-demande/details-demande.component.ts"), __webpack_require__(/*! src/app/theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js"), __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js"), __webpack_require__(/*! ../../map/map.module */ "./src/app/demo/dashboard/map/map.module.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ../../map-new/agree-details/agree-details.module */ "./src/app/demo/dashboard/map-new/agree-details/agree-details.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, core_1, common_1, details_demande_component_1, shared_module_1, forms_1, ng_bootstrap_1, angular_webstorage_service_1, map_module_1, http_1, agree_details_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DetailsDemandeModule = /** @class */ (function () {
        function DetailsDemandeModule() {
        }
        DetailsDemandeModule = tslib_1.__decorate([
            core_1.NgModule({
                declarations: [
                    details_demande_component_1.DetailsDemandeComponent,
                ],
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
                    map_module_1.MapModule,
                    http_1.HttpClientModule,
                    agree_details_module_1.AgreeDetailsModule
                ],
                exports: [
                    details_demande_component_1.DetailsDemandeComponent,
                ]
            })
        ], DetailsDemandeModule);
        return DetailsDemandeModule;
    }());
    exports.DetailsDemandeModule = DetailsDemandeModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=4.js.map