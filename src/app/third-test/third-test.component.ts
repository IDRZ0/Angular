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

  ngOnInit(): void {
    this.bitcoin.getTransactions().subscribe(res => {
      for (var _i = 0; _i < Object.keys(res).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(res)[_i]));
        aux.id = Object.keys(res)[_i];
        this.transactions.push(aux);
      }
    });
    this.bitcoin.getWallets().subscribe(res => {
      for (var _i = 0; _i < Object.keys(res).length; _i++) {
        var aux = JSON.parse(JSON.stringify(Object.values(res)[_i]));
        aux.id = Object.keys(res)[_i];
        this.wallets.push(aux);
      }
    });
  }

}
