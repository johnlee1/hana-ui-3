import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuillModule } from 'ngx-quill'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ListService } from './services/list.service';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';
import { QueueComponent } from './queue/queue.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AccountComponent } from './account/account.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { AddListDialog } from './post/post.component';
import { ShareableDialog } from './edit-page/edit-page.component';
import { NewDialog } from './main/main.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { ListComponent } from './list/list.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PostComponent,
    PageComponent,
    SearchComponent,
    QueueComponent,
    EditPageComponent,
    CreatePostComponent,
    AccountComponent,
    LandingComponent,
    SignupComponent,
    AboutComponent,
    ShareableDialog,
    JoinPageComponent,
    NewDialog,
    ListComponent,
    AddListDialog,
    ConfirmComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule,
    QuillModule,
    MatInputModule,
    InfiniteScrollModule
  ],
  entryComponents: [AddListDialog, NewDialog, ShareableDialog],
  providers: [AuthService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
