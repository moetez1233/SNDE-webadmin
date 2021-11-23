import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./index/index.module').then(module => module.IndexModule)
      },
      {
        path: 'manager',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(module => module.DashAnalyticsModule)
      },
      {
        path: 'add-releveur',
        loadChildren: () => import('./add-releveur/add-releveur.module').then(module => module.AddReleveurModule)
      },
      {
        path: 'traceability',
        loadChildren: () => import('./dashboard-traceability/dashboard-traceability.module').then(module => module.DashboardTraceabilityModule)
      },
      {
        path: 'add-new-admin',
        loadChildren: () => import('./add-new-admin/add-new-admin.module').then(module => module.AddNewAdminModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./admin-profile/admin-profile.module').then(module => module.AdminProfileModule)
      },
      {
        path: 'admins-list',
        loadChildren: () => import('./admins-list/admins-list.module').then(module => module.AdminsListModule)
      },
      {
        path: 'consult-demandes',
        loadChildren: () => import('./consulter-demandes/consulter-demandes.module').then(module => module.ConsulterDemandesModule)
      },
      {
        path: 'consult-reclamtions',
        loadChildren: () => import('./consulter-reclamation/consulter-reclamation.module').then(module => module.ConsulterReclamationModule)
      },
      {
        path: 'consult-users',
        loadChildren: () => import('./consulter-users/consulter-users.module').then(module => module.ConsulterUsersModule)
      },


      {
        path: 'consult-agree',
        loadChildren: () => import('./map-new/mapAgree.module').then(module => module.MapAgreeModule)
      },
      {
        path: 'consult-points',
        loadChildren: () => import('./map-agree/mapAgree.module').then(module => module.MapAgreeModule)
      },
      {
        path: 'consulter-releveur',
        loadChildren: () => import('./consulter-releveur/releveur.module').then(module => module.ReleveurModule  )
      },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
