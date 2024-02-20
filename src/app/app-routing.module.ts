import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffortsModule } from './efforts/efforts.module';

const routes: Routes = [
  {path:"",redirectTo:"saudiArabiaEfforts",pathMatch:'full'},
  {path:"saudiArabiaEfforts",loadChildren:()=> import('./efforts/efforts.module').then(efforts => efforts.EffortsModule)},
  {path:'events',loadChildren:()=>import('./events/events.module').then(events => events.EventsModule)},
  {path:"roadToRiyadh",loadChildren:()=>import('./road-to/road-to.module').then(road=>road.RoadToModule)},
  {path:"planYourVisit",loadChildren:()=>import('./visits/visits.module').then(visits=>visits.VisitsModule)},
  {path:"",loadChildren:()=>import('./shared-modules/shared-modules.module').then(shared=>shared.SharedModulesModule)},
  {path:'',loadChildren:()=>import('./exhibitors/exhibitors.module').then(ex=>ex.ExhibitorsModule)},

  {path:"**",loadChildren:()=>import('./error/error.module').then(error=>error.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
