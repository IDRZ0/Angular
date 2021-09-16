import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  @Input() date: string = "";
  @Input() from: string = "";
  @Input() miner: number = 0;
  @Input() mineType: string = "";
  @Input() moneyType: string = "";
  @Input() quantity: number = 0;
  @Input() to: string = "";

  constructor() { }

  color: string = "yellow";

  ngOnInit(): void {
    this.checkColor();
  }

  checkColor() {
    if (this.mineType === "PoS") {
      this.color = "green";
    }
  }

}
