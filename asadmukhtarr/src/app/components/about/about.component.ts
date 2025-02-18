import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [UpperCasePipe,DatePipe,CurrencyPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private dataservice:ServiceService){
    dataservice.getCheck();
  }
  title:string = "about component";
  today:any = new Date();
  price:any = 200;
  abc(){
    console.log('worker for boys');
  }
}
