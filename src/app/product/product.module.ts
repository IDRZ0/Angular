import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { SharedTestModule } from '../shared-test/shared-test.module';



@NgModule({
  declarations: [
    Product1Component,
    Product2Component
  ],
  imports: [
    CommonModule,
    SharedTestModule
  ],
  exports: [
    Product1Component,
    Product2Component,
    SharedTestModule
  ]
})
export class ProductModule { }
