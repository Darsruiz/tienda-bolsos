import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comprobarSeleccionado'
})
export class ComprobarSeleccionadoPipe implements PipeTransform {

  transform(elementosFavoritos: string[], ...filtrosAplicar: unknown[]): unknown {

   // const arrayDeTodosLosFavoritos;
   // const elIdDeEsteProducto;

    let arrayDeElementosFavoritos = elementosFavoritos;
    let idProducto = filtrosAplicar[0] as string;
    let favorito = filtrosAplicar[1];
    
    console.log('PARAMETROS DEL PIPE', {
       arrayDeElementosFavoritos, idProducto
    })

    return ( arrayDeElementosFavoritos.indexOf( idProducto ) >= 0 ) ? favorito : !favorito
  }

}
