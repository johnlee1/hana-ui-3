import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.map(params => params['token']).subscribe((id) => {
            this.authService.confirm(id).subscribe(res => {
                if (res.message === 'success') {
                    localStorage.setItem('hanaauthtoken', res.token);
                    localStorage.setItem('hanauserid', res.user_id);
                } else {
                    this.router.navigate(['/login']);
                }
            });
        });
  }

}
