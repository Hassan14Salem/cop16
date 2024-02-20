import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitorsComComponent } from './exhibitors-com/exhibitors-com.component';

const routes: Routes = [
  {path:"ex",component:ExhibitorsComComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitorsRoutingModule { }
