import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    Home1Component,
    Home2Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
