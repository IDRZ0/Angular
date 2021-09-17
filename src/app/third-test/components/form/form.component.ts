import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private bitcoin: BitcoinService) { }

  ngOnInit(): void {
  }

  onCreate(form: any) {
    let time = new Date();
    this.bitcoin.createTransactions({
      date: time,
      ...form.value
    }).subscribe();
  }

}
