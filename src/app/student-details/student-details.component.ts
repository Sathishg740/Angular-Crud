import { Component, OnInit } from '@angular/core';
import { StudentService } from './../api/student.service';
import { Student } from './../student';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: any
  student: Student
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentService.getStudentId(this.id).subscribe( data => {
      this.student = data;
    });
  }
  }


