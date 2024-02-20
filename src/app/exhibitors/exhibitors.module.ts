import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitorsRoutingModule } from './exhibitors-routing.module';
import { ExhibitorsComComponent } from './exhibitors-com/exhibitors-com.component';


@NgModule({
  declarations: [
    ExhibitorsComComponent
  ],
  imports: [
    CommonModule,
    ExhibitorsRoutingModule
  ]
})
export class ExhibitorsModule { }
