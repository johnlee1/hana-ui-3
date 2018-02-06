import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Page } from './../page/page';
import { Post } from './../post/post';
import { PostService } from './../services/post.service';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    @Input() level: string;

    @Input()
    set currentPage(currentPage: Page) {
        this.setAllPropertiesToFalse();
        this.showPosts = true;
        this.page = currentPage;
        console.log(this.page);
    }

    page;
    post: Post;
    showCreatePost: boolean;
    showEditPage: boolean;
    showPost: boolean;
    showPosts: boolean = true;;

    // util
    toolTipPos: string = 'right';

    constructor(private renderer2: Renderer2, private pageService: PageService,
                                              private postService: PostService) { }

    ngOnInit() {}

    createPost() {
        this.setAllPropertiesToFalse();
        this.showCreatePost = true;
    }

    editPage() {
        this.setAllPropertiesToFalse();
        this.showEditPage = true;
    }

    getPage() {
        this.pageService.getPage(this.page._id)
                        .subscribe(res => {
                            this.page = res.page;
                            this.level = res.level;
                        })
    }

    returnToPage() {
        this.setAllPropertiesToFalse();
        this.showPosts = true;
    }

    subjectContentChanged(quill) {
        if (quill.editor.getLength() >= 200)
            quill.editor.deleteText(200, quill.editor.getLength())
    }

    viewPost(post_id) {
        this.setAllPropertiesToFalse();
        this.showPost = true;
        this.post = this.page.posts.find(post => post._id === post_id);
    }

    // utils

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
     }
     
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }

    setAllPropertiesToFalse() {
        this.showCreatePost = false;
        this.showPost = false;
        this.showPosts = false;
    }

    setFocus(editor) {
        editor.focus()
    }

    toggle(event) {
        event.target.checked = !event.target.checked;
    }
}
