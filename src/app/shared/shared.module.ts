import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { ExponentPipe } from './pipes/exponent.pipe';



@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    PurePipe,
    ImpurePipe
  ]
})
export class SharedModule { }
