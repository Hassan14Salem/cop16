import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffortsRoutingModule } from './efforts-routing.module';
import { SaudiArabiaEffortsComponent } from './saudi-arabia-efforts/saudi-arabia-efforts.component';


@NgModule({
  declarations: [
    SaudiArabiaEffortsComponent
  ],
  imports: [
    CommonModule,
    EffortsRoutingModule
  ] ,
  exports:
  [SaudiArabiaEffortsComponent]
})
export class EffortsModule { }
