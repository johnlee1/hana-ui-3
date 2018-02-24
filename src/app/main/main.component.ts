import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSidenavModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';

import { Page } from './../page/page';
import { Post } from './../post/post';

import { PageService } from './../services/page.service';
import { ListService } from './../services/list.service';
import { PostService } from './../services/post.service';
import { UserService } from './../services/user.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    adminPages;
    contributorPages;
    memberPages;

    level: string; // page level
    list;
    lists;
    page: Page;
    post: Post;
    queue;
    query: string; // search query

    queueScrollCount: number = 1; // for infinite scroll pagination of feed 

    loading: boolean;

    loggedIn: boolean = localStorage.getItem('hanaauthtoken') != null;

    showSidebar: boolean = true;
    showSidebarLists: boolean;
    showSidebarMain: boolean = true;
    showSidebarPages: boolean;
    showSidebarPost: boolean;

    showContentAccount: boolean;
    showContentCreateList: boolean;
    showContentCreatePage: boolean;
    showContentEnterPageCode: boolean;
    showContentList: boolean;
    showContentPage: boolean;
    showContentPost: boolean;
    showContentQueue: boolean;
    showContentSearch: boolean;

    constructor(public dialog: MatDialog, private location: Location, private route: ActivatedRoute, private router: Router,
                private listService: ListService,
                private pageService: PageService,
                private postService: PostService,
                private userService: UserService) {}

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const page_id = params["page_id"];
            const query = params["query"];
            if (this.router.url.includes("/pages/") && page_id != null)
                this.getPageInitial(page_id);
            else if (this.router.url.includes("/search/") && query != null) {
                console.log("gottem");
                this.query = query;
                this.showSearch();
            }
            else
                this.getQueue();
        });
    }

    getAccount() {
        this.setAllContentPropertiesToFalse();
        this.showContentAccount = true;
    }

    getCreateList() {
        this.setAllContentPropertiesToFalse();
        this.showContentCreateList = true;
    }

    // getCreatePage() {
    //     this.setAllContentPropertiesToFalse();
    //     this.showContentCreatePage = true;
    // }

    getEnterPageCode(): void {
        this.setAllContentPropertiesToFalse();
        this.showContentEnterPageCode = true;
    }

    getList(list_id: string): void {
        this.setAllContentPropertiesToFalse();
        this.listService.getList(list_id)
                        .subscribe(res => {
                            this.list = res;
                            this.showContentList = true;
                        });
    }

    getLists() {
        this.loading = true;
        this.showSidebarMain = false;
        this.listService.getLists()
                        .subscribe(lists => {
                            this.loading = false;
                            this.lists = lists;
                            this.showSidebarLists = true;
                        });
    }

    getMain() {
        this.showSidebarPages = false;
        this.showSidebarLists = false;
        this.showSidebarMain = true;
    }

    // when getting page from click on sidebar
    getPage(page_id: string) {
        this.setAllContentPropertiesToFalse();
        this.pageService.getPage(page_id)
                        .subscribe(res => {
                            this.page = res.page;
                            this.level = res.level;
                            this.location.go('pages/' + this.page._id);
                            this.showContentPage = true;
                        });
    }

    // when getting page from url
    getPageInitial(page_id: string) {
        this.setAllContentPropertiesToFalse();
        this.pageService.getPage(page_id)
                        .subscribe(res => {
                            this.page = res.page;
                            this.level = res.level;
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
                            this.contributorPages = pages.contributorPages;
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

    getQueue(): void {
        this.setAllContentPropertiesToFalse();
        this.userService.getQueue()
                        .subscribe(queue => {
                            this.queue = queue;
                            this.showContentQueue = true;
                        })
    }

    openDialogCreatePage(): void {
        let dialogRef = this.dialog.open(NewDialog, {
            width: '50%',
            data: { showCreatePage: true, showCreateList: false}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            let newPage = {};
            newPage["name"] = result.name;
            newPage["description"] = result.description;
            newPage["private"] = result.private;
            this.pageService
                .createPage(newPage)
                .subscribe(page => {
                    console.log(page.name);
                });
            console.log('The dialog was closed');
        });
    }

    openDialogCreateList(): void {
        let dialogRef = this.dialog.open(NewDialog, {
            width: '50%',
            data: { showCreatePage: false, showCreateList: true}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            let newList = {};
            console.log(result);
            newList["name"] = result.name;
            this.listService
                .createList(newList)
                .subscribe(list => {
                    this.lists.push(list);
                });
        });
    }

    pageCreated(page: Page) {
        this.setAllContentPropertiesToFalse();
        this.page = page;
        this.level = 'admin';
        this.showContentPage = true; 
    }

    showSearch() {
        this.setAllContentPropertiesToFalse()
        this.showContentSearch = true;
    }

    toggleSidebar() {}

    // util

    onScroll() {
        this.queueScrollCount += 1;
        console.log("scrolled");
        console.log(this.queueScrollCount);
    }

    setAllContentPropertiesToFalse() {
        this.showContentAccount = false;
        this.showContentCreatePage = false;
        this.showContentEnterPageCode = false;
        this.showContentList = false;
        this.showContentPage = false;
        this.showContentPost = false;
        this.showContentQueue = false;
        this.showContentSearch = false;
    }
}

@Component({
    selector: 'new-dialog',
    templateUrl: 'new-dialog.html',
    styleUrls: ['./main.component.scss']
})
export class NewDialog {

    description: string;
    name: string;
    visibility: string;
    showCreatePage: boolean;
    showCreateList: boolean;

    constructor(public dialogRef: MatDialogRef<NewDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { 
            this.showCreatePage = data.showCreatePage;
            this.showCreateList = data.showCreateList;
            this.visibility = "public";
        }

    onNoClick(): void {
        this.dialogRef.close({name: this.name, description: this.description, private: this.visibility});
    }
}
