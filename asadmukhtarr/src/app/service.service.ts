import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getCheck(){
    console.log('working from your first service');
  }
}
