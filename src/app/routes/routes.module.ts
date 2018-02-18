import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './../about/about.component';
import { ConfirmComponent } from './../confirm/confirm.component';
import { JoinPageComponent } from './../join-page/join-page.component';
import { LandingComponent } from './../landing/landing.component';
import { ListComponent } from './../list/list.component';
import { LoginComponent } from './../login/login.component';
import { MainComponent } from './../main/main.component';
import { PageComponent } from './../page/page.component';
import { SignupComponent } from './../signup/signup.component';

// import { AuthRoutes } from './../components/auth/auth.routes';
// import { CircleRoutes } from './../components/circle/circle.routes';
// import { DonateRoutes } from './../components/donate/donate.routes';
// import { PageRoutes } from './../components/page/page.routes';
// import { PeopleRoutes } from './../components/people/people.routes';
// import { PostRoutes } from './../components/post/post.routes';
// import { ProfileRoutes } from './../components/profile/profile.routes';
// import { SearchRoutes } from './../components/search/search.routes';
// import { SettingsRoutes } from './../components/settings/settings.routes';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'confirm/:token', component: ConfirmComponent },
    { path: 'join_page/:page_id/:page_code', component: JoinPageComponent },
    { path: 'list/:list_id', component: ListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pages/:page_id', component: MainComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'search/:query', component: MainComponent },
//   { path: '', component: MainComponent },
//   ...AuthRoutes,
//   ...CircleRoutes,
//   ...DonateRoutes,
//   ...PageRoutes,
//   ...PeopleRoutes,
//   ...PostRoutes,
//   ...ProfileRoutes,
//   ...SearchRoutes,
//   ...SettingsRoutes,
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
