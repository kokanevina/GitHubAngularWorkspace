import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/* Route Configuration */
const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'home',component:HomeComponent },
  { path:'login/:user',component:LoginComponent },
  { path:'showemployees',component:EmployeesComponent },
  { path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
