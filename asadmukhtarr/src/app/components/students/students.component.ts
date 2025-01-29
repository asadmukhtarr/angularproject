import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  title:any = "Hello Users Component";
  users:number = 342;
  myClass:string = "bg-info p-5";
  myType:string  = "number";
}
