import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email: string;
    error: string;
    password: string;
  
    constructor(private authService: AuthService,
                private router: Router) {}
  
    ngOnInit() {
      if (localStorage.getItem('hanaauthtoken') && localStorage.getItem('hanauserid')) {
        this.router.navigate(['/main', localStorage.getItem('hanauserid')]);
      }
    }
  
    login(input) {
      this.authService
          .login(input)
          .subscribe(res => {
            if (res.token)
                this.router.navigate(['/main', localStorage.getItem('hanauserid')]);
            else
                this.error = res.error;
          });
    }

}
