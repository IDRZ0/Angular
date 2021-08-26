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
     this.router.params.subscribe(p => {
       console.log('PARAMS', p);
     });

     this.router.queryParams.subscribe(q => {
      console.log('Q-PARAMS', q);
    });
    
    //console.log('Snapshot', this.router.snapshot.params);
    
    //console.log('Snapshot Q', this.router.snapshot.queryParams);
  }

}
