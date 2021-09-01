import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.utilsService.current().subscribe(s => console.log(s));
  }

  send(): void {
    this.utilsService.setData(this.utilsService.getData() + 1);
  }

}
