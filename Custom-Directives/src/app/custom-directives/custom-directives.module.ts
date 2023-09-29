import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectivesRoutingModule } from './custom-directives-routing.module';
import { CustomDirectivesComponent } from './custom-directives.component';


@NgModule({
  declarations: [
    CustomDirectivesComponent
  ],
  imports: [
    CommonModule,
    CustomDirectivesRoutingModule
  ]
})
export class CustomDirectivesModule { }
