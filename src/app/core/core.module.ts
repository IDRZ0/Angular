import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Core1Component } from './core1/core1.component';
import { LayoutModule } from '../pages/layout/layout.module';



@NgModule({
  declarations: [
    Core1Component
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    Core1Component,
    LayoutModule
  ]
})
export class CoreModule { }
