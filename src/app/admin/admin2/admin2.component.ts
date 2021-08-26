import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.scss']
})
export class Admin2Component implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.params.subscribe(p => {
    //   console.log('PARAMS', p);
    // });
    console.log('Snapshot', this.router.snapshot.params);
  }

}
