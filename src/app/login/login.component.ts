import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    console.log('IGNACIO DEL RIO');
  }

  login(form: any) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(res => {
      console.log('RES', res);
      this.router.navigate(['pages']);
    });
  }

  onCreateNewAccount() {
    this.matDialog.open(RegisterComponent);
  }

}
