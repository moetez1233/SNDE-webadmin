import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AddReleveurComponent} from'./add-releveur.component'
import {addreleveurRoutingModule} from'./add-releveurs-routing.module'
import { NgbProgressbarModule, NgbPopoverModule, NgbTooltipModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesModule } from '../roles/roles.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  
  declarations: [AddReleveurComponent],
  imports: [
    CommonModule,
    addreleveurRoutingModule,
    SharedModule,
    NgbPopoverModule,
    NgbTabsetModule,
     FormsModule,
     ReactiveFormsModule,
    NgbProgressbarModule,
     NgbPopoverModule,
     NgbTooltipModule,
    
    
    RolesModule,
    HttpClientModule
  ]
})
export class AddReleveurModule { }
