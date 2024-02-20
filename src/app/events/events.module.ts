import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsAndSummitComponent } from './events-and-summit/events-and-summit.component';


@NgModule({
  declarations: [
    EventsAndSummitComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  exports: [
    EventsAndSummitComponent
  ]
})
export class EventsModule { }
