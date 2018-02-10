import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ListService } from './../services/list.service';
import { Post } from './../post/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list;

    showPost: boolean;
    showPosts: boolean = true;;

    post: Post;

    constructor(private renderer2: Renderer2, private listService: ListService) { }

    ngOnInit() {
        console.log(this.list);
    }

    postRemovedFromList(postId: string) {
        this.showPost = false;
        this.list.posts = this.list.posts.filter((post) => post._id != postId);
        this.showPosts = true;
    }

    viewPost(postId) {
        this.showPosts = false;
        this.post = this.list.posts.find(post => post._id === postId);
        this.showPost = true;
    }

    // utils

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
     }
     
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }

}
