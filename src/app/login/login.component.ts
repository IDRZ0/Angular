import { Component, OnInit } from '@angular/core';
import { SingletonService } from './services/singleton.service';
import { Test1Service } from './services/test1.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private test1Service: Test1Service, private singleton: SingletonService) {
    this.singleton.setMsg("locura");
  }

  ngOnInit(): void {
    console.log(this.test1Service.getItems());
  }

}
