import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss']
})
export class JoinPageComponent implements OnInit {

    constructor(private pageService: PageService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params
            .subscribe((params) => {
                const page_id = params["page_id"];
                const page_code = params["page_code"]
                this.pageService
                    .joinPage(page_id, page_code)
                    .subscribe(res => {
                        if (res.message === 'success') {
                            this.router.navigate(['/page/', page_id]);
                        } else {
                            this.router.navigate(['/login']);
                        }
                    });
            });
    }
}
