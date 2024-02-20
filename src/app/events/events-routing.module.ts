import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsAndSummitComponent } from './events-and-summit/events-and-summit.component';

const routes: Routes = [
  {path:"",component:EventsAndSummitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
