import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// Feature components
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { SearchComponent } from './search/components/search/search.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { UsersComponent } from './users/components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
      { path: 'user', component: UsersComponent, canActivate: [AuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
