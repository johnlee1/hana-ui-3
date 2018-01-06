import { Component, Input, OnInit } from '@angular/core';
import { Page } from './../page/page';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

    @Input()
    set editPage(editPage: Page) {
        this.description = editPage.description;
        this.name = editPage.name;
        this.page_code = editPage.code;
        this.page = editPage;
    }

    description: string;
    name: string;
    page: Page;
    page_code: string;

    constructor(private pageService: PageService) {}

    ngOnInit() {}

    refreshCode() {
        this.pageService.refreshCode(this.page._id)
                        .subscribe(res => {
                            this.page_code = res.code;
                        })
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
