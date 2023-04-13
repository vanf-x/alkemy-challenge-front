import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaFormularioComponent } from './crear-pelicula-formulario/crear-pelicula-formulario.component';
import { CrearPersonajeFormularioComponent } from './crear-personaje-formulario/crear-personaje-formulario.component';
import { EditarPersonajeFormularioComponent } from './editar-personaje-formulario/editar-personaje-formulario.component';
import { GeneroDetallesComponent } from './genero-detalles/genero-detalles.component';
import { HomeComponent } from './home/home.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { PeliculaDetallesComponent } from './pelicula-detalles/pelicula-detalles.component';
import { PersonajeDetallesComponent } from './personaje-detalles/personaje-detalles.component';
import { EditarPeliculaFormularioComponent } from './editar-pelicula-formulario/editar-pelicula-formulario.component';

const routes: Routes = [
  { path: 'personajes', component: ListaPersonajesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: ListaPeliculasComponent },
  { path: 'peliculas/crear', component: CrearPeliculaFormularioComponent },
  { path: 'peliculas/editar/:id', component: EditarPeliculaFormularioComponent },
  { path: 'peliculas/:id', component: PeliculaDetallesComponent },
  { path: 'personajes/crear', component: CrearPersonajeFormularioComponent },
  { path: 'personajes/editar/:id', component: EditarPersonajeFormularioComponent },
  { path: 'personajes/:id', component: PersonajeDetallesComponent },
  { path: 'generos', component: ListaGenerosComponent },
  { path: 'generos/:id', component: GeneroDetallesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PaginaErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
