import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    CommonModule,
    ScrollingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ScrollingModule
  ]
})
export class SharedModule { }
