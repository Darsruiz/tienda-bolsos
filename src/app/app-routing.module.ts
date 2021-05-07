import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { HttpPageComponent } from './pages/http-page/http-page.component';
import { AnimacionesComponent } from './pages/animaciones/animaciones.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'productos',
    pathMatch:'full'
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'pasarela',
    component: PasarelaComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'animaciones',
    component: AnimacionesComponent
  },
  {
    path:'httpclient',
    component: HttpPageComponent
  },
  {
    path:'detalle-producto/:id',
    component: DetalleProductoComponent
  },
  {
    path:'**',
    redirectTo: 'productos',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
