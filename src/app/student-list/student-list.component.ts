import { StudentService } from './../api/student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student:Student[];
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent(){
    this.studentService.getStudentList().subscribe(data => {
      this.student = data;
    });
  }

  studentDetails(id: number){
    this.router.navigate(['studentDetails', id]);
  }

  updateStudent(id: number){
    this.router.navigate(['updateStudent', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudent();
    })
  }

}
