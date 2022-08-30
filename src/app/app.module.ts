import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ListadoTarjetasComponent } from './listado-tarjetas/listado-tarjetas.component';
import { ListadoNombresComponent } from './listado-nombres/listado-nombres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetasComponent,
    ListadoTarjetasComponent,
    ListadoNombresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
