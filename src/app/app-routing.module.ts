import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { PeliculaDetallesComponent } from './pelicula-detalles/pelicula-detalles.component';
import { PersonajeDetallesComponent } from './personaje-detalles/personaje-detalles.component';

const routes: Routes = [
  {path: 'personajes', component: ListaPersonajesComponent},
  {path:'home', component: HomeComponent},
  {path: 'peliculas', component: ListaPeliculasComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'peliculas/:id', component: PeliculaDetallesComponent},
  {path: 'personajes/:id', component: PersonajeDetallesComponent},
  {path: '**', component: PaginaErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
