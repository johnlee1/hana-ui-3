import { Component, Input, OnInit } from '@angular/core';
import { ListService } from './../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    @Input() list;

    showPost: boolean;
    showPosts: boolean = true;;

    constructor(private listService: ListService) { }

    ngOnInit() {}

}
