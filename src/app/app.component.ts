import { Component } from '@angular/core';
import { PageService } from './services/page.service';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageService, PostService, UserService]
})
export class AppComponent {
//   title = 'app';
}
