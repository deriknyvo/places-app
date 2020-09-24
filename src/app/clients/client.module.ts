import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Material Design
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ClientsComponent } from './clients.component';

const routes: Routes = [
  { path: '', component: ClientsComponent }
];

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ClientsModule { }
