import { Component, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    pages;
    pages_msg: String;
    searchTerm$ = new Subject<string>();

    constructor(private pageService: PageService,
                private renderer2: Renderer2) {
        this.pageService.search(this.searchTerm$)
                        .subscribe(pages => {
                            this.pages = pages;
                            this.pages_msg = '';
                            if (pages.length < 1) {
                              this.pages_msg = 'No pages found.';
                            }       
                        })
     }

    ngOnInit() {}

    mouseenter (event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
     }
     
    mouseleave (event) {
    this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }
}
