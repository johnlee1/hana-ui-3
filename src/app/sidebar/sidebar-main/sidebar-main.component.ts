import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageService } from './../../services/page.service';
import { Post } from './../../post/post';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.css']
})
export class SidebarMainComponent implements OnInit {

    adminPages;
    memberPages;
    posts: Post[];

    showMain: boolean = true;
    showPages: boolean;
    showPosts: boolean;

    postSubject;
    postStory;
    postPrayer;

    @Output() sidebarLocation = new EventEmitter<string>();

    constructor(private pageService: PageService,
                private postService: PostService,) { }

    ngOnInit() {
    }

    getPage(page_id: string) {
        this.showPages = false;
        this.showPosts = true;
        this.pageService
            .getPage(page_id)
            .subscribe(res => {
                this.posts = res.page.posts;
            });
    }

    getPages() {
        this.pageService
            .getPages()
            .subscribe(pages => {
              this.adminPages = pages.adminPages;
              this.memberPages = pages.memberPages;
            });
    }

    getPost(post_id) {
        this.postService
            .getPost(post_id)
            .subscribe(post => {
                this.postSubject = post.subject;
                this.postStory = post.story;
                this.postPrayer = post.prayer;
            });
    }

    displayPages() {
        this.showMain = false;
        this.showPages = true;
        this.getPages();
    }

}
