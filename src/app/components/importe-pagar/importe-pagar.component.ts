import { Component, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.service';
import { producto } from '../../interfaces/producto';

@Component({
  selector: 'app-importe-pagar',
  templateUrl: './importe-pagar.component.html',
  styleUrls: ['./importe-pagar.component.scss']
})
export class ImportePagarComponent implements OnInit {

  importePagar: number; 
  
  constructor( private cestaServ: CestaService) { }

  ngOnInit(): void {
    /// me voy a subscribir al observable que me va a notificar de los cambios del importe a pagar:
    this.cestaServ.importeFinal$.subscribe((imp: number)=>{

      
      this.importePagar = imp as any;
      localStorage.setItem('importePagar', imp.toString()  )
    })
  }

}
