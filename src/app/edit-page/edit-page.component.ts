import { Component, Inject, Input, OnInit } from '@angular/core';
import { Page } from './../page/page';
// import { PageService } from './../services/page.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

    @Input()
    set editPage(editPage: Page) {
        this.admins = editPage.admins;
        this.contributors = editPage.contributors;
        this.description = editPage.description;
        this.name = editPage.name;
        this.adminPageCode = environment.host + 'join_page/' + editPage._id + '/' + editPage.admin_code;
        this.contributorPageCode = environment.host + 'join_page/' + editPage._id + '/' + editPage.contributor_code;
        this.page = editPage;
    }

    admins;
    contributors;
    description: string;
    name: string;
    page: Page;
    adminPageCode: string;
    contributorPageCode: string;

    constructor(public dialog: MatDialog) {}

    ngOnInit() {}

    openDialog(): void {
        let dialogRef = this.dialog.open(ShareableDialog, {
            width: '40%',
            data: { adminPageCode: this.adminPageCode, contributorPageCode: this.contributorPageCode }
        });
    
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    // refreshCode() {
    //     this.pageService.refreshCode(this.page._id)
    //                     .subscribe(res => {
    //                         this.page_code = res.code;
    //                     })
    // }

    // utils

    descriptionContentChanged(quill): void {
        if (quill.editor.getLength() >= 2000)
            quill.editor.deleteText(2000, quill.editor.getLength())
    }

    nameContentChanged(quill): void {
        if (quill.editor.getLength() >= 200)
            quill.editor.deleteText(200, quill.editor.getLength())
    }

    setFocus(editor) {
        editor.focus()
    }

}

@Component({
    selector: 'shareable-dialog',
    templateUrl: 'shareable-dialog.html',
    styleUrls: ['./edit-page.component.scss']
})
export class ShareableDialog {

    adminPageCode: string;
    contributorPageCode: string;
    notification: boolean = false;
    selected;

    constructor(
        public dialogRef: MatDialogRef<ShareableDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { 
            this.adminPageCode = data.adminPageCode;
            this.contributorPageCode = data.contributorPageCode;
            this.selected = 'contributor';
        }

    copyLink() {
        var txtArea = document.createElement("textarea");
        txtArea.style.position = 'fixed';
        txtArea.style.top = '0';
        txtArea.style.left = '0';
        txtArea.style.opacity = '0';
        txtArea.value = this.selected == 'admin' ? this.adminPageCode : this.contributorPageCode;
        document.body.appendChild(txtArea);
        txtArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
            if (successful) {
                this.notification = true;
                return true;
            }
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(txtArea);
        return false;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    selectionUpdated() {
        console.log("test");
    }
}
