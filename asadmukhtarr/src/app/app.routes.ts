import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StudentsComponent } from './components/students/students.component';
import { ContactComponent } from './components/contact/contact.component';

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
        path:'contact',
        component:ContactComponent
    }
];
