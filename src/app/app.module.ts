import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ImportePagarComponent } from './components/importe-pagar/importe-pagar.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FiltrosComponent } from './components/filtros/filtros.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { ComprobarSeleccionadoPipe } from './pipes/comprobar-seleccionado.pipe';
import { MostrarColorPipe } from './pipes/mostrar-color.pipe';
import { HttpPageComponent } from './pages/http-page/http-page.component';
import { AnimacionesComponent } from './pages/animaciones/animaciones.component';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleProductoComponent,
    PasarelaComponent,
    ContactoComponent,
    CarritoComponent,
    ImportePagarComponent,
    HeaderComponent,
    FiltrosComponent,
    ComprobarSeleccionadoPipe,
    MostrarColorPipe,
    HttpPageComponent,
    AnimacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IMPORTS DE ANGULAR FIRE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatListModule,
    MatChipsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxSliderModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
