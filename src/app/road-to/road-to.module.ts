import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadToRoutingModule } from './road-to-routing.module';
import { RoadToRiyadhComponent } from './road-to-riyadh/road-to-riyadh.component';


@NgModule({
  declarations: [
    RoadToRiyadhComponent
  ],
  imports: [
    CommonModule,
    RoadToRoutingModule
  ],
  exports:[
    RoadToRiyadhComponent
  ]
})
export class RoadToModule { }
