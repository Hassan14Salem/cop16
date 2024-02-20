import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadToRiyadhComponent } from './road-to-riyadh/road-to-riyadh.component';

const routes: Routes = [
  {path:"",component:RoadToRiyadhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadToRoutingModule { }
