import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { BotonWhatsappComponent } from './componentes/boton-whatsapp/boton-whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    ServiciosComponent,
    BotonWhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
