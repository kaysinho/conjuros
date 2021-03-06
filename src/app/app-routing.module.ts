import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { TestimoniosComponent } from './componentes/testimonios/testimonios.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageComponent } from './pages/page/page.component';


const routes: Routes = [
  { path: '',   redirectTo: '/inicio/index', pathMatch: 'full' },
  { component: HomeComponent, path: 'inicio/:section' },
  { component: PageComponent, path: 'page/:type/:pageId' },
  { component: ContactComponent, path: 'contacto' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
