import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections.component';

const routes: Routes = [
  {
    path: '',
    component: SectionsComponent,
    children: [
      {
        path: 'donations',
        // data: { permit: 'data-import' },
        loadChildren: () => import('./donations/donations.module').then(m => m.DonationsModule)
      },
      // {
      //   path: 'users',
      //   data: { permit: 'users' },
      //   loadChildren: () => import('./users-section/users.module').then(m => m.UsersModule)
      // },
      // {
      //   path: 'questionnaire-configurator',
      //   data: { permit: 'questionnaire' },
      //   loadChildren: () => import('./questionnaire-section/questionnaire.module').then(m => m.QuestionnaireModule)
      // },
      // {
      //   path: 'sar-data',
      //   data: { permit: 'SARdata' },
      //   loadChildren: () => import('./sar-data-section/sar-data.module').then(m => m.SarDataModule)
      // },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
