import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.scss']
})
export class FirstTestComponent implements OnInit {

  @Input() name: string;
  @Input() age: number;
  @Input() date: string;
  @Input() disease: boolean;
  @Input() vaccineType: string;
  @Input() vaccined: number;
  @Input() doses: number;
  @Output() vaccinate = new EventEmitter();

  color: string;

  constructor() { }

  ngOnInit(): void {
    this.color = (this.vaccined == 0) ? "orange" : "yellowgreen";
  }

  vaccinateM() {
    this.vaccinate.emit(this.name);
  }

}
