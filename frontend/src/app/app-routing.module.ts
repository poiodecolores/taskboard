import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { SignupComponent } from './home/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: ListTaskComponent
  },
  {
    path: 'create',
    component: CreateTaskComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
