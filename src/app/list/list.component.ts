import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ListService } from './../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list;

    showPost: boolean;
    showPosts: boolean = true;;

    constructor(private renderer2: Renderer2, private listService: ListService) { }

    ngOnInit() {
        console.log(this.list);
    }

    // utils

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
     }
     
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }

}
