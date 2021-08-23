import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { SharedTestModule } from '../shared-test/shared-test.module';
import { ProviderModule } from '../provider/provider.module';



@NgModule({
  declarations: [
    Client1Component,
    Client2Component
  ],
  imports: [
    CommonModule,
    SharedTestModule,
    ProviderModule
  ],
  exports: [
    Client1Component,
    Client2Component,
    SharedTestModule,
    ProviderModule
  ]
})
export class ClientModule { }
