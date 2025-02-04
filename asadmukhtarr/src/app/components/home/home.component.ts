import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isVisible = true;
  clicked(){
    this.isVisible = false;
  }
  clickAgain() {
    this.isVisible = true;
  }
  clicker() {
    if(this.isVisible == true){
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }
}
