import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Post } from './../post/post';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

    @Input() queue;

    post: Post;
    showPost: boolean;

    constructor(private renderer2: Renderer2) {}

    ngOnInit() {}

    viewPost(post) {
        this.showPost = true;
        this.post = post;
    }

    // util

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
        }
        
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }

}
