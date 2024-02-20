import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorPathComponent } from './error-path/error-path.component';


@NgModule({
  declarations: [
    ErrorPathComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
