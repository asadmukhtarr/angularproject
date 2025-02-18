import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  constructor(){
    this.fetchStudents();
  }
  title:any = "Hello Users Component";
  users:number = 342;
  myClass:string = "bg-info p-5";
  myType:string  = "number";
  students:any = [];
  fetchStudents(){
    fetch("https://67acb30c3f5a4e1477db8d92.mockapi.io/students/students")
    .then(response => response.json())
    .then(data => {
      this.students = data;
    })
    .catch(error => console.error("Error fetching students:", error));
  }
  deleteStudent (id:number) {
    if(confirm("Are you sure? You Want To Delete it?") == true){
      let url = `https://67acb30c3f5a4e1477db8d92.mockapi.io/students/students/${id}`;
      fetch(url,{
        method:"DELETE"
      })
      .then(response => response.json())
      .then(
        data => {
          console.log("Delete:", data);
          this.fetchStudents();
        }
      );
    }
  }
}
