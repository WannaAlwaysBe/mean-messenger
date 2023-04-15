import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadResolver } from '@common';
import { AuthGuard } from '@common';

import { MainPageComponent } from './pages/main/main-page.component';
import { ChatPageComponent } from './pages/chat/chat-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { SignupPageComponent } from './pages/signup/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: MainPageComponent,
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
    path: 'sign-up',
    component: SignupPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
