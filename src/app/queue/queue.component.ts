import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

    @Input() queue;

    constructor(private renderer2: Renderer2) {}

    ngOnInit() {}

    // util

    mouseenter(event) {
        this.renderer2.addClass(event.target, 'mat-elevation-z5')
        }
        
    mouseleave(event) {
        this.renderer2.removeClass(event.target, 'mat-elevation-z5')
    }

}
