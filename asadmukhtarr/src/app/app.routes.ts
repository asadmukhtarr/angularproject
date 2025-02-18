import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'students',
        component:StudentsComponent
    },
    {
        path:'edit/:id',
        component:EditStudentComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];
