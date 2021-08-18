import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buy2Component } from './buy2/buy2.component';
import { Buy1Component } from './buy1/buy1.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    Buy1Component,
    Buy2Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BuyModule { }
