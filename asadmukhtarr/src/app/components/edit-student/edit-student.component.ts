import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  studentId: any = null;
  student: any = null;
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
    let url = `https://67acb30c3f5a4e1477db8d92.mockapi.io/students/students/${this.studentId}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.student = data,
      console.log(this.student)
    });
  }
}
