import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  studentId: any = null;
  student: any = {
    name: '',
    email: '',
    city: '',
    whatsapp: ''
  };
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(){
    this.studentId = this.route.snapshot.paramMap.get('id');
    let url = `https://67acb30c3f5a4e1477db8d92.mockapi.io/students/students/${this.studentId}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.student = data
    });
  }
  updateData = () => {
    let url = `https://67acb30c3f5a4e1477db8d92.mockapi.io/students/students/${this.studentId}`
    fetch(url,{
      method:"PUT",
      headers:{
        "content-type" : "application/json"
      },
      body:JSON.stringify(this.student)
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }
}
