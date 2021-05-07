import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public color =  localStorage.getItem('colorDetalle') ? localStorage.getItem('colorDetalle') : null

  getColor(){
    return this.color
  }

  setColor(color: string){
    this.color = color;
    localStorage.setItem('colorDetalle', color);
  }

  constructor() { }
}
