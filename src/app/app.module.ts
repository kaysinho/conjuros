import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { BotonWhatsappComponent } from './componentes/boton-whatsapp/boton-whatsapp.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PageComponent } from './pages/page/page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { UrlPipe } from './pipes/url.pipe';
import { AnuncioComponent } from './componentes/anuncio/anuncio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    ServiciosComponent,
    BotonWhatsappComponent,
    FooterComponent,
    HomeComponent,
    PageComponent,
    ContactComponent,
    TestimoniosComponent,
    TarjetasComponent,
    UrlPipe,
    AnuncioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
