import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Post } from './post';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListService } from './../services/list.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() post: Post;

    constructor(public dialog: MatDialog) { }

    ngOnInit() {}

    addToList(): void{
        let dialogRef = this.dialog.open(AddListDialog, {
            width: '40%',
            data: { postId: this.post._id}
        });
    
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}

@Component({
    selector: 'add-list-dialog',
    templateUrl: 'add-list-dialog.html',
    styleUrls: ['./post.component.scss']
})
export class AddListDialog {

    postId;
    lists;

    constructor(public dialogRef: MatDialogRef<AddListDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private listService: ListService, private renderer2: Renderer2) { 
        this.postId = data.postId;
    }

    ngOnInit() {
        this.listService.getLists()
                        .subscribe(lists => {
                            this.lists = lists;
                        });
    }

    addToList(listId): void {
        let input = {};
        input["post_id"] = this.postId;
        this.listService.addPost(input, listId)
            .subscribe(list => {
            });
    }

    onNoClick(): void {}

    // utils

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
        }
        
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }
}
