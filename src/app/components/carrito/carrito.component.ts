import { Component, Input, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.service';
import { cestaItem } from '../../interfaces/cestaItem';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor( private cestaServ: CestaService ) { }

  productos: cestaItem[] = []

  ngOnInit(): void {
    this.productos = this.cestaServ.getProductos();
    //console.log('THIS.PRODUCTOS' , this.productos);
  }


  deleteItem(cestaItem: cestaItem){
  // 1, en la vista he llamado al delete item yle he pasado el item
  // 2. en esta llamo al delte product of array y le paso el item
    
    this.cestaServ.deleteProductOfArray( cestaItem );
    this.guardarLocalStorage();
    
  }

  guardarLocalStorage(){
    
    const arrayCesta = this.cestaServ.getProductos();
    console.log('STRINGIFIED ARRAYCESTA', JSON.stringify(arrayCesta));
    localStorage.setItem('arrayCesta', JSON.stringify(arrayCesta))
  }

}
