import { Component, OnInit } from '@angular/core';
import { SingletonService } from 'src/app/login/services/singleton.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private singleton: SingletonService) { }

  ngOnInit(): void {
    console.log(this.singleton.getMsg());
  }

}
