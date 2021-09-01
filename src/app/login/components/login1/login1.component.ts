import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  send(): void {
    this.utilsService.setData(this.utilsService.getData() + 1);
  }

}
