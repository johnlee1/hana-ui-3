import { Component, OnInit } from '@angular/core';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-page-code',
  templateUrl: './page-code.component.html',
  styleUrls: ['./page-code.component.scss']
})
export class PageCodeComponent implements OnInit {

    pageCode: string;
    result;

    constructor(private pageService: PageService) {}

    ngOnInit() {}

    enterPageCode() {
        this.pageService.searchCode(this.pageCode)
                        .subscribe(res => {
                            this.result = res;
                        });
    }

}
