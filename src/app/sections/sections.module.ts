import { NavMenuComponent } from './../shared/nav-menu/nav-menu.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections.component';



@NgModule({
  declarations: [
    SectionsComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SectionsRoutingModule
  ]
})
export class SectionsModule { }
