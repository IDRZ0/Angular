import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {

  @Input() name: string = "";
  @Input() lastName: string = "";

  @Output() sendData = new EventEmitter();

  myvar1 = 4;
  myvar2 = 5;

  constructor() { }

  onClickSend() {
    this.sendData.emit('general data ' + this.name + ' ' + this.lastName);
  }

  test0(event: any) {
    console.log("click", event);
    console.log("suma: ", this.myvar1 + this.myvar2);
  }

  test1(event: any) {
    console.log("blur", event);
  }

  test2(event: any) {
    console.log("double", event);
  }
}
