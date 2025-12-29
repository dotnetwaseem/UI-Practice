import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AddemployeeComponent } from './employees/addemployee/addemployee.component';
import { EmployeedeatilsComponent } from './employees/employeedeatils/employeedeatils.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
  { path: 'dashboard',canActivate: [AuthGuard], component: DashboardComponent },
{ path: 'employees/add', component: AddemployeeComponent },
  { path: 'employees/list', component: EmployeedeatilsComponent },
//     {
//   path: 'dashboard',
//   //canActivate: [AuthGuard],
//   component: DashboardComponent
// }

];
