import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { Filtro } from '../../interfaces/filtro';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  

  colores = [ 'todos', 'rojo', 'azul', 'negro', 'marron', 'bordo', 'blanco', 'verde' ];
  tipos = ['todos', 'billetera', 'bolso', 'neceser' ];

  @Output() filtrarProductos = new EventEmitter<Filtro>();


  value: number = 0;
  highValue: number = 100;
  texto;

  filtro: Filtro = {
    precio: {
      precioMaximo: this.highValue,
      precioMinimo: this.value
    },
    texto: '',
    color: 'todos',
    tipo: 'todos'
   }

  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() { }

  ngOnInit(): void {
    this.filtro.precio.precioMaximo = localStorage.getItem('precioMaximo') ? parseInt(localStorage.getItem('precioMaximo')) : this.highValue;
   
    this.highValue = this.filtro.precio.precioMaximo;

    this.filtro.precio.precioMinimo = localStorage.getItem('precioMinimo') ? parseInt(localStorage.getItem('precioMinimo')) : this.value;
    
    this.value = this.filtro.precio.precioMinimo;

    this.filtro.texto = localStorage.getItem('texto') ? localStorage.getItem('texto') : this.filtro.texto;
    this.texto = this.filtro.texto;
    this.filtro.color = localStorage.getItem('color') ? localStorage.getItem('color') : this.filtro.color;

    this.filtro.tipo = localStorage.getItem('tipo') ? localStorage.getItem('tipo') : this.filtro.tipo;

    
    console.log('PRECIO CARGADO', this.filtro)
  }


  changeSlideUperPrice(ev){
    console.log('EV', ev);
    this.filtro.precio.precioMaximo = ev;
    this.filtrarProductos.emit(this.filtro);
    localStorage.setItem('precioMaximo', this.filtro.precio.precioMaximo.toString());
    

  }

  changeSlideLowerPrice(ev){
    console.log('ev', ev);
    this.filtro.precio.precioMinimo = ev;
    this.filtrarProductos.emit(this.filtro);
    localStorage.setItem('precioMinimo', this.filtro.precio.precioMinimo.toString());

  }

  changeColor(ev){
    console.log('color', ev.value);
    this.filtro.color = ev.value;
    this.filtrarProductos.emit(this.filtro);
    localStorage.setItem('color', this.filtro.color);

  }

  changeProductType(ev){
    console.log('product type', ev.value);
    this.filtro.tipo = ev.value;
    this.filtrarProductos.emit(this.filtro);
    localStorage.setItem('tipo', this.filtro.tipo);
  }

  changeText(ev){
    this.filtro.texto = this.texto;
    this.filtrarProductos.emit(this.filtro);
    localStorage.setItem('texto', this.texto);
  }
 


  



}
