import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Post } from './../post/post';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

    @Input()
    set currentPage(currentPage: string) {
        this.setAllToFalse();
        this.showPosts = true;
        this.page = currentPage;
    }

    page;
    post: Post;
    showCreatePost: boolean;
    showPost: boolean;
    showPosts: boolean = true;;

    // quill
    emptyArray: any[] = [];
    newPostSubject;
    newPostStory;
    newPostPrayer;
    subjectModules = {
        toolbar: [
            ['italic', 'strike'],        // toggled buttons
        ]
    };
    storyModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote'],
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': this.emptyArray.slice() }],
            ['clean'],                                        // remove formatting button
            ['link', 'image']                                 // link and image, video
        ]
    };
    prayerModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': this.emptyArray.slice() }],
            ['clean'],                                        // remove formatting button
        ]
    };

    constructor(private renderer2: Renderer2, private postService: PostService) { }

    ngOnInit() {}

    createPost() {
        this.setAllToFalse();
        this.showCreatePost = true;
    }

    returnToPage() {
        this.setAllToFalse();
        this.showPosts = true;
    }

    setFocus(editor) {
        editor.focus()
    }

    subjectContentChanged(quill) {
        if (quill.editor.getLength() >= 280)
            quill.editor.deleteText(280, quill.editor.getLength())
    }

    submitPost() {
        let newPost = {};
        newPost["id"] = this.page._id;
        newPost["subject"] = this.newPostSubject;
        newPost["story"] = this.newPostStory;
        newPost["prayer"] = this.newPostPrayer
        this.postService.createPost(newPost)
                        .subscribe(res => {
                            console.log(res);
                        });
    }

    viewPost(post_id) {
        this.setAllToFalse();
        this.showPost = true;
        this.post = this.page.posts.find(post => post._id === post_id);
    }


    // util

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
     }
     
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }

    setAllToFalse() {
        this.showCreatePost = false;
        this.showPost = false;
        this.showPosts = false;
    }
}
