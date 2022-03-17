import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path:'student',component:StudentListComponent
  },
  {
    path:'createStudent',component:CreateStudentComponent
  },
  {
    path:'',redirectTo:'student',pathMatch:'full'
  },
  {
    path:'updateStudent/:id',component:UpdateStudentComponent
  },
  {
    path:'studentDetails/:id',component:StudentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
