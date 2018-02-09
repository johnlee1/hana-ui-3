import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageService } from './../services/page.service';
import { Page } from './../page/page';

// THIS COMPONENT CAN BE DELETED


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

    @Output() pageCreated = new EventEmitter<Page>();

    newPageDescription;
    newPageName;

    quillModule = {
        toolbar: false
    };

    constructor(private pageService: PageService) {}

    ngOnInit() {}

    createPage() {
        let newPage = {};
        newPage["name"] = this.newPageName.substr(0, this.newPageName.length-4).substr(3); // maybe theres a better way than doing this?
        newPage["description"] = this.newPageDescription.substr(0, this.newPageName.length-4).substr(3);
        this.pageService
            .createPage(newPage)
            .subscribe(page => {
                console.log(page.name);
                this.pageCreated.emit(page);
            });
    }

    // utils

    descriptionContentChanged(quill) {
        if (quill.editor.getLength() >= 2000)
            quill.editor.deleteText(2000, quill.editor.getLength())
    }

    nameContentChanged(quill) {
        if (quill.editor.getLength() >= 200)
            quill.editor.deleteText(200, quill.editor.getLength())
    }

    setFocus(editor) {
        editor.focus()
    }

}
