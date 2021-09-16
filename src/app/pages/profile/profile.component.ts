import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { PublicationService } from '../shared/services/publication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private publicationService: PublicationService, private authService: AuthService, private matDialog: MatDialog) { }

  publications: any[] = [];

  ngOnInit(): void {
    const id = this.authService.getUserId();
    console.log('id', id);
    if (id) {
      this.publicationService.getAllById(id).subscribe(res => {
        console.log('profile', res);
        for (var _i = 0; _i < Object.keys(res).length; _i++) {
          var aux = JSON.parse(JSON.stringify(Object.values(res)[_i]));
          aux.id = Object.keys(res)[_i];
          this.publications.push(aux);
        }
      });
    }
  }

}
