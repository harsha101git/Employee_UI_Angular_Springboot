
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdataComponent } from './components/userdata/userdata.component';
import { CreateEmployeesComponent } from './components/create-employees/create-employees.component';
import { UpdateEmployeesComponent } from './components/update-employees/update-employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


const routes: Routes = [
  
   { path: '', redirectTo: '/list', pathMatch: 'full' },

   { path: 'list',          component: UserdataComponent },
   
   { path: 'add',           component: CreateEmployeesComponent },

   { path: 'update/:id',    component: UpdateEmployeesComponent },

   { path: 'detail/:id',    component: EmployeeDetailsComponent }

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
