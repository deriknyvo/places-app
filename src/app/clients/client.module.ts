import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Material Design
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ClientsModule { }
