import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Input() query: string;

    level;
    page;
    pages;
    pages_msg: String;
    searchTerm$ = new Subject<string>();
    showResults: boolean = true;
    showPage: boolean;

    constructor(private renderer2: Renderer2, private location: Location, private router: Router, 
                private pageService: PageService) {
        this.pageService.search(this.searchTerm$)
                        .subscribe(pages => {
                            this.showPage = false;
                            this.location.go('search/' + this.query);
                            this.pages = pages;
                            this.pages_msg = '';
                            if (pages.length < 1)
                                this.pages_msg = 'No pages found.';
                        })
     }

    ngOnInit() {
        this.pageService.searchPages(this.query)
                        .subscribe(pages => {
                            this.pages = pages;
                            this.pages_msg = '';
                            if (pages.length < 1)
                                this.pages_msg = 'No pages found.';
                        })
    }

    viewPage(page): void {
        this.router.navigate(['/pages/', page._id]);
    }

    // utils

    mouseenter (event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
     }
     
    mouseleave (event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }
}
