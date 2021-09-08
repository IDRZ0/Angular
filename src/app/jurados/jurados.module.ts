import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jurados1Component } from './jurados1/jurados1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Jurados1Component
  },
];

@NgModule({
  declarations: [
    Jurados1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SharedModule
  ]
})
export class JuradosModule { }
