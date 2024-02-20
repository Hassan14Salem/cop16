import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaudiArabiaEffortsComponent } from './saudi-arabia-efforts/saudi-arabia-efforts.component';

const routes: Routes = [
  {path:"",component:SaudiArabiaEffortsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffortsRoutingModule { }
