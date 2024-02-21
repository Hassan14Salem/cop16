import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { ExForm1Component } from './ex-form1/ex-form1.component';
import { ExForm2Component } from './ex-form2/ex-form2.component';
import { ExForm3Component } from './ex-form3/ex-form3.component';


@NgModule({
  declarations: [
    FooterComponent,
    FormLayoutComponent,
    ExForm1Component,
    ExForm2Component,
    ExForm3Component
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
