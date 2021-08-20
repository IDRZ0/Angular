import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';



@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent,
    ExponentPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    LoaderComponent,
    ExponentPipe
  ]
})
export class SharedModule { }
