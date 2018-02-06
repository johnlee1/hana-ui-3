import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-page-code',
  templateUrl: './page-code.component.html',
  styleUrls: ['./page-code.component.scss']
})
export class PageCodeComponent implements OnInit {

    pageCode: string;
    page;

    constructor(private router: Router, private pageService: PageService) {}

    ngOnInit() {}

    enterPageCode() {
        this.pageService.searchCode(this.pageCode)
                        .subscribe(res => {
                            this.page = res.page;
                        });
    }

    joinPage() {
        this.pageService.joinPage(this.page._id, this.pageCode)
                        .subscribe(res => {
                            this.router.navigate(['/page', this.page._id]);
                        });
    }

}
