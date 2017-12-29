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

    showSidebarMain: boolean = true;
    showSidebarPage: boolean;
    showSidebarPages: boolean;
    showSidebarPost: boolean;

    showContentPage: boolean;
    showContentPost: boolean;
    showContentSearch: boolean;

    // search
    // searchPages;
    // pages_msg: String;
    // searchTerm$ = new Subject<string>();

    constructor(private pageService: PageService,
                private postService: PostService) { 
        // this.pageService.search(this.searchTerm$)
        //     .subscribe(pages => {
        //         this.searchPages = pages;
        //         this.pages_msg = '';
        //         if (pages.length < 1) {
        //             this.pages_msg = 'No pages found.';
        //         }       
        //     })
    }

    ngOnInit() {}

    getMain() {
        this.showSidebarMain = true;
        this.showSidebarPages = false;
    }

    getPage(page_id: string) {
        this.showContentPost = false;
        this.showContentSearch = false;
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

    showSearch() {
        this.showContentPage = false;
        this.showContentPost = false;
        this.showContentSearch = true;
    }
}
