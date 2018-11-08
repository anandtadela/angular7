import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { WelcomeComponent } from '../home/welcome/welcome.component';
const appRouts: Routes = [
  {path:'welcome', component:WelcomeComponent},
  {path:'', component:WelcomeComponent},
  {path:'**', component:WelcomeComponent}   
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
