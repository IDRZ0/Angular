import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'admin1',
        component: Admin1Component
      },
      {
        path: 'admin2',
        component: Admin2Component
      },
    ]
  },
]

@NgModule({
  declarations: [
    AdminComponent,
    Admin1Component,
    Admin2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
