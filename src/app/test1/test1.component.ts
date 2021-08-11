import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ignacio',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  name: string = "";
  lastName: string = "";
  people:Array<any> = [];

  @Input('status') statusTest: string = "work";
  @Input('styleVar') style: number = 0;

  @Output('onSendData') sendData = new EventEmitter();

  constructor() { }

  onClickTest(event: any) {
    console.log('EVENT CLICK: ', event);
    this.sendData.emit({
      name: 'Ignacio',
      status: 'working'
    });
  }

  addPerson(event:any) {
    this.people.push({
      name: this.name,
      lastName: this.lastName
    });
  }

}
