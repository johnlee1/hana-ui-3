import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { PageService } from './../services/page.service';
import { Post } from './../post/post';
import { PostService } from './../services/post.service';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    adminPages;
    memberPages;
    page;
    post: Post;
    posts: Post[];
    queue;

    loading: boolean;

    showSidebarMain: boolean = true;
    showSidebarPages: boolean;
    showSidebarPost: boolean;

    showContentCreatePage: boolean;
    showContentEnterPageCode: boolean;
    showContentPage: boolean;
    showContentPost: boolean;
    showContentQueue: boolean;
    showContentSearch: boolean;

    constructor(private pageService: PageService,
                private postService: PostService,
                private userService: UserService) {}

    ngOnInit() {}

    getCreatePage() {
        this.setAllContentPropertiesToFalse();
        this.showContentCreatePage = true;
    }

    getEnterPageCode() {
        this.setAllContentPropertiesToFalse();
        this.showContentEnterPageCode = true;
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
        this.pageService.getPages()
                        .subscribe(pages => {
                            this.loading = false;
                            this.adminPages = pages.adminPages;
                            this.memberPages = pages.memberPages;
                            this.showSidebarPages = true;
                        });
    }

    getPost(post_id) {
        this.setAllContentPropertiesToFalse();
        this.postService.getPost(post_id)
                        .subscribe(post => {
                            this.post = post;
                            this.showContentPost = true;
                        });
    }

    getQueue() {
        this.setAllContentPropertiesToFalse();
        this.userService.getQueue()
                        .subscribe(queue => {
                            this.queue = queue;
                            this.showContentQueue = true;
                        })
    }

    showSearch() {
        this.showContentPage = false;
        this.showContentPost = false;
        this.showContentSearch = true;
    }

    // util

    setAllContentPropertiesToFalse() {
        this.showContentCreatePage = false;
        this.showContentEnterPageCode = false;
        this.showContentPage = false;
        this.showContentPost = false;
        this.showContentQueue = false;
        this.showContentSearch = false;
    }
}
