import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuillModule } from 'ngx-quill'

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { SearchComponent } from './search/search.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { QueueComponent } from './queue/queue.component';
import { PageCodeComponent } from './page-code/page-code.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PostComponent,
    PageComponent,
    SearchComponent,
    CreatePageComponent,
    QueueComponent,
    PageCodeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule,
    QuillModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
