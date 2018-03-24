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

    newPostStory;
    // resolved: boolean = false; // must initialize for sending http request
    // resolution;
    share: boolean = false;
    urgent: boolean = false; // must initialize

    // util
    toolTipPos: string = 'left';

    // quill
    storyModules = {
        toolbar: [
            ['bold', 'italic'],
            [{ 'header': 1 }, 'blockquote'],
            ['link', 'image']
        ]
    };

    constructor(private router: Router, private postService: PostService) {}

    ngOnInit() {}

    submitPost() {
        // if (this.resolution === "" || this.resolution === undefined)
        //     this.resolution = " ";
        let newPost = {};
        newPost["id"] = this.pageId;
        newPost["story"] = this.newPostStory;
        // newPost["resolved"] = this.resolved;
        // newPost["resolution"] = this.resolution;
        newPost["urgent"] = this.urgent;
        newPost["authorName"] = localStorage.getItem('hanausername');
        newPost["pageName"] = this.pageName;
        this.postService.createPost(newPost).subscribe(res => {
            this.router.navigate(['/page/', this.pageId]);
        });
    }

    // utils
    setFocus(editor) {
        editor.focus();
    }
}
