import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReleveurComponent } from './add-releveur.component';

const routes: Routes = [
  {
    path: '',
    component: AddReleveurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addreleveurRoutingModule { }
