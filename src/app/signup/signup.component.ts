import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    email: string;
    error: string;
    name: string;
    password: string;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit() {}

    register(input) {
        this.authService.register(input)
                        .subscribe(
                            res => {
                                if (res.token)
                                    this.router.navigate(['/home']);
                                else
                                    this.error = res.error;
                            },
                            err => {
                                this.error = 'Please try a different password.';
                            }
                        );
    }

}
