import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';


@NgModule({
  declarations: [
    FooterComponent,
    FormLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
