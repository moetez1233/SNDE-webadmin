import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleveurComponent } from './releveur.component';

const routes: Routes = [
  {
    path: '',
    component: ReleveurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class releveurRoutingModule { }
