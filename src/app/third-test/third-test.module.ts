import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdTestComponent } from './third-test.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BitcoinService } from './services/bitcoin.service';

@NgModule({
  declarations: [
    ThirdTestComponent,
    TransactionComponent,
    WalletComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThirdTestComponent
  ]
})
export class ThirdTestModule { }
