import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home1',
        component: Home1Component
      },
      {
        path: 'home2',
        component: Home2Component
      },
    ]
  },
]

@NgModule({
  declarations: [
    HomeComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
