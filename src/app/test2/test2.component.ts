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

  constructor() { }

  onClickSend() {
    this.sendData.emit('general data ' + this.name + ' ' + this.lastName);
  }
}
