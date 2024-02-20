import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitsRoutingModule } from './visits-routing.module';
import { PlanYourVisitComponent } from './plan-your-visit/plan-your-visit.component';


@NgModule({
  declarations: [
    PlanYourVisitComponent
  ],
  imports: [
    CommonModule,
    VisitsRoutingModule
  ]
})
export class VisitsModule { }
