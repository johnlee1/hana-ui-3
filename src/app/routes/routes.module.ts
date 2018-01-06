import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './../landing/landing.component';
import { LoginComponent } from './../login/login.component';
import { MainComponent } from './../main/main.component';

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
    { path: 'signup', component: LoginComponent },
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
