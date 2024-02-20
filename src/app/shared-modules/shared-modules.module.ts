import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ]
})
export class SharedModulesModule { }
