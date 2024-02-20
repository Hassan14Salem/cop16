import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanYourVisitComponent } from './plan-your-visit/plan-your-visit.component';

const routes: Routes = [
  {path:"",component:PlanYourVisitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
