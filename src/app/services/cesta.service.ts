import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cestaItem } from '../interfaces/cestaItem';


@Injectable({
  providedIn: 'root'
})



export class CestaService {
  
  productos: cestaItem[] = localStorage.getItem('arrayCesta') ?  JSON.parse(localStorage.getItem('arrayCesta'))    :  [];
  
  private importeObservable = new BehaviorSubject<number>( localStorage.getItem('importePagar') ? parseInt(localStorage.getItem('importePagar')) :    0); /// creo el observable;
  importeFinal$ = this.importeObservable.asObservable(); // aqui es donde me voy a tener que subscribir;

  
  cambiarTotalAPagar(importeFinal){
    this.importeObservable.next(importeFinal);
  }

  precioFinal(cestaItem: any){
    return cestaItem.precioOferta || cestaItem.precio
  }

 
  getProductos(): cestaItem[]{
    // obtener productos
    
    return this.productos
  }


  setProductos(productos: cestaItem[]){
    // establecer productos
    this.productos = [...productos];
  }

  calcularImporteFinal():number{
      let sumatorio = 0;
      this.productos.forEach((producto: cestaItem)=>{
        sumatorio += ( this.precioFinal(producto) * producto.cantidad )     ///producto.
      })
      return sumatorio
  }

 

  addProductoToArray(producto: cestaItem ){
    // añadir producto
    
    // aqui hay que hacer alguna logica para sumar el precio;
    
    // 1 primero tenemos que buscar si en el array coinciden las 2 ids
     
      const indiceConFind = this.productos.findIndex((productoParam:cestaItem)=> `${productoParam.color}-${productoParam.id}` === `${producto.color}-${producto.id}`)
      console.log('indice con metodo find', indiceConFind)
      //const indice: number = this.productos.indexOf(producto); // si no esta devolvera -1, 
     // console.log('INDICE COINCIDE', indice)
      if( indiceConFind >= 0   ){
        // elemento existe en el erray
        // si coinciden, cojo ese elemento del array y en cantidad le sumo lo que me vien en el parametro
        this.productos[indiceConFind].cantidad += producto.cantidad
      }else{
        // no coincides las 2 ids
        this.productos.push(producto);
      } 

    // añadir el importe final
    this.cambiarTotalAPagar( this.calcularImporteFinal() )
  }

 


  deleteProductOfArray(item: cestaItem){

    // splice quita el elemento del array
    this.productos.splice(this.productos.indexOf(item), 1)
    this.cambiarTotalAPagar( this.calcularImporteFinal() )
    // aqui habra que hacer alguna logica para restar el precio;
 


  }


  


}
