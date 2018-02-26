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

    // quill
    emptyArray: any[] = [];
    newPostSubject;
    newPostStory;
    newPostPrayer;
    // subjectModules = {
    //     toolbar: [
    //         ['italic', 'strike'],        // toggled buttons
    //     ]
    // };
    storyModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote'],
            [{ 'header': 1 }],                                // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': this.emptyArray.slice() }],
            ['clean'],                                        // remove formatting button
            ['link', 'image']                                 // link and image, video
        ]
    };
    prayerModules = {
        toolbar: [
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': this.emptyArray.slice() }],
            ['clean'],                                        // remove formatting button
        ]
    };

    // util
    toolTipPos: string = 'right';

    constructor(private router: Router, private postService: PostService) {}

    ngOnInit() {}

    subjectContentChanged(quill) {
        if (quill.editor.getLength() >= 200)
            quill.editor.deleteText(200, quill.editor.getLength())
    }

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

    // utils

    setFocus(editor) {
        editor.focus();
    }
}
