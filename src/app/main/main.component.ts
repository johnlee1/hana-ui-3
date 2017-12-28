import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { PageService } from './../services/page.service';
import { Post } from './../post/post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    adminPages;
    memberPages;
    page;
    post: Post;
    posts: Post[];

    showSidebarMain: boolean = true;
    showSidebarPage: boolean;
    showSidebarPages: boolean;
    showSidebarPost: boolean;

    showContentPage: boolean;
    showContentPost: boolean;

    constructor(private pageService: PageService,
                private postService: PostService) { }

    ngOnInit() {}

    getMain() {
        this.showSidebarMain = true;
        this.showSidebarPages = false;
    }

    getPage(page_id: string) {
        this.showSidebarPages = false;
        this.showContentPost = false;
        this.pageService
            .getPage(page_id)
            .subscribe(res => {
                this.page = res.page;
                this.posts = res.page.posts;
                this.showSidebarPage = true;
                this.showContentPage = true;

            });
    }

    getContentPage() {
        this.showContentPost = false;
        this.showContentPage = true;
    }

    getPages() {
        this.showSidebarMain = false;
        this.showSidebarPage = false;
        this.pageService
            .getPages()
            .subscribe(pages => {
                this.adminPages = pages.adminPages;
                this.memberPages = pages.memberPages;
                this.showSidebarPages = true;
            });
    }

    getPost(post_id) {
        this.showContentPage = false;
        this.postService
            .getPost(post_id)
            .subscribe(post => {
                this.post = post;
                this.showContentPost = true;
            });
    }
}
