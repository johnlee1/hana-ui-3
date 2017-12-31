import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
// import { Subject } from 'rxjs/Subject';
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

    loading: boolean;

    showSidebarMain: boolean = true;
    showSidebarPages: boolean;
    showSidebarPost: boolean;

    showContentCreatePage: boolean;
    showContentPage: boolean;
    showContentPost: boolean;
    showContentSearch: boolean;

    constructor(private pageService: PageService,
                private postService: PostService) {}

    ngOnInit() {}

    getCreatePage() {
        this.setAllContentPropertiesToFalse();
        this.showContentCreatePage = true;
    }

    getMain() {
        this.showSidebarPages = false;
        this.showSidebarMain = true;
    }

    getPage(page_id: string) {
        this.setAllContentPropertiesToFalse();
        this.showContentPost = false;
        this.showContentSearch = false;
        this.pageService
            .getPage(page_id)
            .subscribe(res => {
                this.page = res.page;
                this.posts = res.page.posts;
                this.showContentPage = true;

            });
    }

    getPages() {
        this.loading = true;
        this.showSidebarMain = false;
        this.pageService
            .getPages()
            .subscribe(pages => {
                this.loading = false;
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

    showSearch() {
        this.showContentPage = false;
        this.showContentPost = false;
        this.showContentSearch = true;
    }

    setAllContentPropertiesToFalse() {
        this.showContentCreatePage = false;
        this.showContentPage = false;
        this.showContentPost = false;
        this.showContentSearch = false;
    }
}
