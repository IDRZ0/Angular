import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.scss']
})
export class FirstTestComponent implements OnInit {

  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() date: string = "";
  @Input() disease: boolean = false;
  @Input() vaccineType: string = "";
  @Input() vaccined: number = 0;
  @Input() doses: number = 0;
  @Output() vaccinate = new EventEmitter();

  color: string = (this.vaccined == 0) ? "orange" : "green";

  constructor() { }

  ngOnInit(): void {
  }

  vaccinateM() {
    this.vaccinate.emit(this.name);
  }

}
