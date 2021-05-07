import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(  private route: Router){
  }

  title = 'Tienda Bolsos';
  
  pasarela(){
  this.route.navigateByUrl("pasarela");

  }

  home(){
  this.route.navigateByUrl("productos");
  }

}
