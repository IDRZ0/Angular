import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdTestComponent } from './third-test.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BitcoinService } from './services/bitcoin.service';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ThirdTestComponent,
    TransactionComponent,
    WalletComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ThirdTestComponent
  ]
})
export class ThirdTestModule { }
