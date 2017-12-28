import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { SidebarMainComponent } from './sidebar/sidebar-main/sidebar-main.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SidebarMainComponent,
    PostComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
