import { Component } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private dataservice:ServiceService){
      dataservice.getCheck();
  }
}
