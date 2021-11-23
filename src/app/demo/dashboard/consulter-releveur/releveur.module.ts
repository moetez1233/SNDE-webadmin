import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReleveurComponent} from'./releveur.component'
//import {AppRoutingModule} from 'src/app/demo/dashboard/consulter-releveur/app-routing./app-routing.module'
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesModule } from '../roles/roles.module';
import { NgbCollapseModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MapModule } from 'src/app/demo/dashboard/map/map.module';
import { releveurRoutingModule } from './consulter-releveurs-routing.module';
import { BasicAlertComponent } from 'src/app/demo/ui-elements/ui-basic/basic-alert/basic-alert.component';


@NgModule({
  declarations: [ReleveurComponent],
  imports: [
    CommonModule,
   // AppRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTabsetModule,
     FormsModule,
     ReactiveFormsModule,
    NgbProgressbarModule,
     NgbPopoverModule,
     NgbTooltipModule,
     SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgbPopoverModule,
    NgbTabsetModule,
    MapModule ,
    NgbCollapseModule,
    NgbAccordionModule,
    releveurRoutingModule,
    
    
    RolesModule,
  ]
})
export class ReleveurModule { }
