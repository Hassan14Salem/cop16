import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { ExForm1Component } from './ex-form1/ex-form1.component';
import { ExForm2Component } from './ex-form2/ex-form2.component';
import { ExForm3Component } from './ex-form3/ex-form3.component';

const routes: Routes = [
  {path:"footer",component:FooterComponent},
  {path:"forms",component:FormLayoutComponent},
  {path:"exform1",component:ExForm1Component},
  {path:"exform2",component:ExForm2Component},
  {path:"exform3",component:ExForm3Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModulesRoutingModule { }
