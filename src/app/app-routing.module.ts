import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // canActivateChild: [AuthenticationGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/donations' },
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      // {
      //   path: '',
      //   component: BaseComponent,
      //   canActivateChild: [AuthorizationGuard, BaseDataGuard],
      //   children: [
      // {
      //   path: 'donations',
      //   component: DonationsComponent,
      // },
      {
        path: '',
        loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule)
      },
      { path: '**', redirectTo: '' }
    ]
    // },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
