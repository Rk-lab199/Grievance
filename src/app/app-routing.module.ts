// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { WelcomeComponent } from './pages/welcome/welcome.component';
// import { LoginComponent } from './pages/login/login.component';
// import { GrievanceFormComponent } from './pages/grievance-form/grievance-form.component';
// import { ThankYouComponent } from './pages/thank-you/thank-you.component';

// const routes: Routes = [
//   { path: '', component: WelcomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'grievance', component: GrievanceFormComponent },
//   { path: 'thank-you', component: ThankYouComponent },
//   { path: '**', redirectTo: '' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { GrievanceFormComponent } from './pages/grievance-form/grievance-form.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

import { authGuard } from './auth.guard';  // import new guard function

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'grievance',
    component: GrievanceFormComponent,
    canActivate: [authGuard],  // use functional guard
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
