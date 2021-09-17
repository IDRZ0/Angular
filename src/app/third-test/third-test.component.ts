import { Component, OnInit } from '@angular/core';
import { BitcoinService } from './services/bitcoin.service';

@Component({
  selector: 'app-third-test',
  templateUrl: './third-test.component.html',
  styleUrls: ['./third-test.component.scss']
})
export class ThirdTestComponent implements OnInit {

  constructor(private bitcoin: BitcoinService) { }

  transactions: any[] = [];
  wallets: any[] = [];

  btc: number = 0;
  eth: number = 0;

  ngOnInit(): void {
    this.getTransactions();
    this.getWallets();
  }

  getTransactions() {
    this.bitcoin.getTransactions().subscribe(res => {
      for (var _i = 0; _i < Object.keys(res).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(res)[_i]));
        aux.id = Object.keys(res)[_i];
        this.transactions.push(aux);
      }
    });
  }

  getWallets() {
    this.bitcoin.getWallets().subscribe(res => {
      for (var _i = 0; _i < Object.keys(res).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(res)[_i]));
        aux.id = Object.keys(res)[_i];
        this.wallets.push(aux);
      }
      this.totalCoins();
    });
  }

  totalCoins() {
    let totalbtc = 0;
    let totaleth = 0;
    for (let w of this.wallets) {
      totalbtc = totalbtc + w.btc;
      totaleth = totaleth + w.eth;
    }
    this.btc = totalbtc;
    this.eth = totaleth;
  }

  mine(event: any) {
    let id = event;
    let t = this.transactions.find(t => t.id === id);
    let tq = t.quantity;
    let from = this.wallets.find(w => w.wallet === t.from);
    let to = this.wallets.find(w => w.wallet === t.to);
    if (t.moneyType === "btc") {
      let less = from.btc - tq;
      this.bitcoin.updateWallet(from.id, { 'btc': less }).subscribe();
      let plus = to.btc + tq;
      this.bitcoin.updateWallet(to.id, { 'btc': plus }).subscribe();
    } else {
      let less = from.eth - tq;
      this.bitcoin.updateWallet(from.id, { 'eth': less }).subscribe();
      let plus = to.eth + tq;
      this.bitcoin.updateWallet(to.id, { 'eth': plus }).subscribe();
    }
    this.bitcoin.deleteTransactions(id).subscribe();
  }

}
