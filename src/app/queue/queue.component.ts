import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Post } from './../post/post';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

    @Input() queue;
    @Input() queueScrollCount

    post: Post;
    showPost: boolean;

    constructor(private renderer2: Renderer2) {}

    ngOnInit() {}

    ngOnChanges(changes) {
        console.log(changes);
    }

    returnToQueue() {
        this.showPost = false;
    }

    viewPost(post) {
        this.showPost = true;
        this.post = post;
    }

}
