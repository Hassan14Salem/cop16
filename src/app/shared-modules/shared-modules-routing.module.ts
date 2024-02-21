import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';

const routes: Routes = [
  {path:"footer",component:FooterComponent},
  {path:"forms",component:FormLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedModulesRoutingModule { }
