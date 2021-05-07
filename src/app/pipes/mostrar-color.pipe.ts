import { Pipe, PipeTransform } from '@angular/core';
import { producto } from '../interfaces/producto';

@Pipe({
  name: 'mostrarColor'
})
export class MostrarColorPipe implements PipeTransform {

  transform(value: producto, ...args: unknown[]): unknown {
   
    const producto = value;
    const colorSeleccionado = args[0]

      if(colorSeleccionado === 'todos'){
        return producto.img[0]
      }else{
        return `${producto.url}_${colorSeleccionado}.jpeg`
      }
  }

}
