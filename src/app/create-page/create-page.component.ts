import { Component, OnInit } from '@angular/core';
import { PageService } from './../services/page.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

    newPageDescription;
    newPageName;

    nameModules = {
        toolbar: [
            ['italic', 'strike'],
        ]
    };
    descriptionModules = {
        toolbar: [
            ['bold', 'italic', 'strike'],
        ]
    };

    constructor(private pageService: PageService) {}

    ngOnInit() {}

    createPage() {
        let newPage = {};
        newPage["name"] = this.newPageName;
        newPage["description"] = this.newPageDescription;
        this.pageService
            .createPage(newPage)
            .subscribe(page => {
                console.log(page);
                // this.router.navigate(['/page', page._id]);
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
