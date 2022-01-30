import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { DonationsComponent } from './donations.component';
import { DonationsRoutingModule } from './donations-routing.module';



@NgModule({
  imports: [
    SharedModule,
    DonationsRoutingModule,
  ],
  declarations: [
    DonationsComponent
  ],
})
export class DonationsModule { }
