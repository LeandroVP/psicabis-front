import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonationsComponent } from './donations.component';

const donationsRoutes: Routes = [
  {
    path: '',
    component: DonationsComponent,
  },
  // {
  //   path: 'new',
  //   component: UserFormComponent,
  //   resolve: {
  //     roles: RolesResolver,
  //     reportTypes: ReportTypesResolver
  //   },
  // },
  // {
  //   path: ':id',
  //   component: UserFormComponent,
  //   resolve: {
  //     user: UserResolver,
  //     roles: RolesResolver,
  //     reportTypes: ReportTypesResolver
  //   },
  // },
  // {
  //   path: ':id/view',
  //   component: UserFormComponent,
  //   resolve: {
  //     user: UserResolver,
  //     roles: RolesResolver,
  //     reportTypes: ReportTypesResolver
  //   },
  // },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(donationsRoutes)],
  exports: [RouterModule]
})
export class DonationsRoutingModule { }
