import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {}

    signout() {
        this.authService.logout();
        // this.router.navigate(['/']);
    }

}
