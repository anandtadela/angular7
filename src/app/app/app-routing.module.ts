import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { WelcomeComponent } from '../home/welcome/welcome.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';
const appRouts: Routes = [
  {path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: LoginComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
