import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadResolver } from '@common';
import { AuthGuard } from '@common';

import { HomePageComponent } from './pages/home/home-page.component';
import { ChatPageComponent } from './pages/chat/chat-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { RegisterPageComponent } from './pages/register/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: ':chatId', component: ChatPageComponent },
      { path: 'newChat/:userId', component: ChatPageComponent },
    ],
    resolve: [PreloadResolver],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
