import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "./core/core.module";
import { AuthGuard } from './core/guards/auth.guard';
import { ThirdTestModule } from './third-test/third-test.module';
import { BitcoinService } from './third-test/services/bitcoin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThirdTestModule,
    HttpClientModule
  ],
  exports: [
    ThirdTestModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
