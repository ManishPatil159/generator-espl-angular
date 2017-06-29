import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { <%- Title %>Component } from './components/<%- Component %>.component';
import { AuthGuard } from '../../app/core/index'

const routes: Routes = [
  {
    path: '',
    component: <%- Title %>Component,
    data: {
    },
     canActivate: [AuthGuard],
  }
];

export const routedComponents = [<%- Title %>Component];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%- Title %>Routing { }