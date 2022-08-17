import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path:"home",component:HomeComponent},
  { path:"login",component:LoginComponent},
  { path:"user/dashboard",component:UserDashboardComponent},
  { path:"manager/dashboard",component:ManagerDashboardComponent},
  { path:"create/task",component:CreateTaskComponent},
  { path:"task/details",component:TaskDetailsComponent},
  { path:"register",component:RegisterComponent},
  { path:"manager/dashboard/graph", component:GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
