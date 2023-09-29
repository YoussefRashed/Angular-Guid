import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirectivesComponent } from './custom-directives.component';

const routes: Routes = [{ path: '', component: CustomDirectivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectivesRoutingModule { }
