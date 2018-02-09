import { Component } from '@angular/core';
import { ListService } from './services/list.service';
import { PageService } from './services/page.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService, PageService, PostService, UserService]
})
export class AppComponent {
//   title = 'app';
}
