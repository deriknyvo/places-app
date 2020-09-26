import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialDesignModule } from '../material-design/material-design.module';

import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  { path: '', component: ClientListComponent },
  { path: 'create', component: ClientCreateComponent },
];

@NgModule({
  declarations: [
    ClientCreateComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignModule
  ]
})
export class ClientsModule { }
