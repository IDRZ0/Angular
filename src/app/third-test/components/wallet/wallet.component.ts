import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() btc: number = 0;
  @Input() eth: number = 0;
  @Input() name: string = "";
  @Input() wallet: string = "";


  constructor() { }

  color: string = "white";

  ngOnInit(): void {
    this.checkColor();
  }

  checkColor() {
    let monto = this.btc + this.eth;
    if (monto > 7) {
      this.color = "brown";
    } else if (monto < 1) {
      this.color = "grey"
    } else {

    }
  }

}
