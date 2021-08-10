import { AfterViewInit } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {

  name = "Ignacio";
  lastName = "del Rio";

  @Input() myvar: string = "";

  constructor() {
    console.log("Contructor");
  }

  ngOnInit() {
    console.log("Init");
  }

  ngOnChanges(changes: any) {
    console.log("Changes: ", changes);
  }

  ngDoCheck() {
    console.log("Check");
  }

  ngAfterContentInit() {
    console.log("Content Init")
  }

  ngAfterContentChecked() {
    console.log("Content Check")
  }

  ngAfterViewInit() {
    console.log("View Init")
  }

  ngAfterViewChecked() {
    console.log("View Check")
  }

  ngOnDestroy() {
    console.log("Destroy");
  }

  test0(event: any) {
    console.log("Nombre: ", this.name + ' ' + this.lastName);
  }

}
