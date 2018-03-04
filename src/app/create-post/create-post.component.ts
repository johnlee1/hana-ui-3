import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

    @Input() pageId: string;
    @Input() pageName: string;

    resolved: boolean = false; // must initialize for sending http request
    resolution = " ";
    urgent: boolean = false; // must initialize

    emptyArray: any[] = [];
    newPostSubject;
    newPostStory;
    newPostPrayer;

    // util
    toolTipPos: string = 'right';

    constructor(private router: Router, private postService: PostService) {}

    ngOnInit() {}

    submitPost() {
        let newPost = {};
        newPost["id"] = this.pageId;
        newPost["subject"] = this.newPostSubject;
        newPost["story"] = this.newPostStory;
        newPost["prayer"] = this.newPostPrayer;
        newPost["resolved"] = this.resolved;
        newPost["resolution"] = this.resolution;
        newPost["urgent"] = this.urgent;
        newPost["authorName"] = localStorage.getItem('hanausername');
        newPost["pageName"] = this.pageName;
        this.postService.createPost(newPost)
                        .subscribe(res => {
                            this.router.navigate(['/page/', this.pageId]);
                        });
    }

}
