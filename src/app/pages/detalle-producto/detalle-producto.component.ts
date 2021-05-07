import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { cestaItem } from '../../interfaces/cestaItem';
import { CestaService } from '../../services/cesta.service';
import { producto } from 'src/app/interfaces/producto';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss',
  
],
animations: [
  trigger('openClose', [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),
],
})
export class DetalleProductoComponent implements OnInit {

  isOpen = true;
  idProducto: string;
  producto: producto; 
  color: string;
  cantidad: number = 0; // que consultara si ya hay algo en cesta de este producto y este color
  showAgregar: boolean = false;
  showPagar: boolean = false;
  stocks: any;
  propiedad;


  constructor(
    private router: Router, 
    private afs: AngularFirestore,
    private cestaServ: CestaService,
    private _snackBar: MatSnackBar,
    private colorServ: ColorService
    ) { 
     
    }
    orientation = ''
    actualPosition = [1, 5]

  

  ngOnInit(): void {

    console.log('color seleccionado', this.colorServ.getColor());
    if( this.colorServ.getColor() ){
      this.color = this.colorServ.getColor()
    }






    localStorage.setItem('colorDetalle',this.color)
    
    this.idProducto = this.router.url.split('/')[2];
    this.afs.collection('productos').doc(this.idProducto).get().toPromise().then((productoDelaBaseDeDatos)=>{
      this.producto = productoDelaBaseDeDatos.data() as producto;
    })

    this.cestaServ.importeFinal$.subscribe(( importeFinal: number )=>{
      this.showPagar =  ( importeFinal > 0  ) ? true : false;
    })

    this.afs.collection('stocks').doc(this.idProducto).get().toPromise().then((res)=>{
      console.log('stocks', res.data());
      this.stocks = res.data();
    })
  }

  comprobarSiImgCoincideColor(img: string){
    
    const colorjpeg = img.split('_')[1];
    const color = colorjpeg.split('.')[0];
    const coincide = ( color === this.color );
    console.log('COINCIDE', coincide);
    return coincide

  }

  volver(){ 
    this.router.navigateByUrl('productos');
  }

  pagar(){
    this.router.navigateByUrl('pasarela');
  }

  seleccionoColor(color:string){
    this.color = color;
    /// primero miro si en la cesta ya habia algun elemento de esa id y
    this.showAgregarF()
  }

  showAgregarF(){
    if(this.cantidad > 0){
      this.showAgregar = true;
    }else{
      this.showAgregar = false;
    }
  }

  agregar(){
    const item: cestaItem = {
      id: this.idProducto,
      color: this.color,
      cantidad: this.cantidad,
      precio: this.producto.precio,
      precioOferta: this.producto.precioOferta
    }

   // JSON.stringify()

   // primero necesito saber cuantos elementos hay previamente en la cesta
   const cestaProductos = this.cestaServ.getProductos();

   const elementoPrevioEnCesta =  cestaProductos.find((item:cestaItem)=>{
    return ( item.color === this.color) && (item.id === this.idProducto )
   })
 
   const elementosMaximosStock = this.stocks[ this.color ];
   // cuantos elementos maximos de este producto hay en stock;
   const totalCantidad = elementoPrevioEnCesta ? ( elementoPrevioEnCesta.cantidad + this.cantidad ) : this.cantidad;
   
   const hayElementosSuficientesEnStock: boolean = (( totalCantidad ) <= elementosMaximosStock   )
    
    if( !    hayElementosSuficientesEnStock    ){
      // si no  tengo suficientes elementos en stock
      this._snackBar.open('No hay suficientes elementos en stock contactenos para saber existencias', null, {
        duration: 1000
      });
    }else{
      // si que hay suficientes elementos en stock
      this.cestaServ.addProductoToArray(item);
      this.guardarLocalStorage();
      this._snackBar.open('¡Producto añadido exitosamente!', null, {
        duration: 1000
      });
    }

  }


  guardarLocalStorage(){
    const arrayCesta = this.cestaServ.getProductos();
    console.log('STRINGIFIED ARRAYCESTA', JSON.stringify(arrayCesta));
    localStorage.setItem('arrayCesta', JSON.stringify(arrayCesta));
  }

  add(){
    // si de ese elemento quedan mas items en el stock, te dejo añadir //si no, 
    // idProducto
    // 
    
    
    const cantidadDeEsteProductoEnStock = this.stocks[ this.color ]; //4
    console.log('CANTIDAD DE ESTE PRODUCTO EN STOCK', cantidadDeEsteProductoEnStock)
    const hayMasElementos: boolean = ( cantidadDeEsteProductoEnStock > this.cantidad  )
    if( hayMasElementos){

      this.cantidad += 1;
      this.showAgregarF();
    }else{
      this._snackBar.open('No hay más productos de esa selección', null, {duration: 1000})
    }
  }

  remove(){
    this.cantidad === 0 ? null : this.cantidad -=1
    this.showAgregarF();
    console.log('REMOVE',)
    this._snackBar.open('¡Producto quitado!', null, {
      duration:1000
    });
  }


}


