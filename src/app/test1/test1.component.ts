import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ignacio',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {

  @Input('status') statusTest: string = "work";

  constructor() { }

  

}
