import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { GeneroComponent } from './genero/genero.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { PeliculaDetallesComponent } from './pelicula-detalles/pelicula-detalles.component';
import { PersonajeDetallesComponent } from './personaje-detalles/personaje-detalles.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { GeneroDetallesComponent } from './genero-detalles/genero-detalles.component';
import { ListaGenerosComponent } from './lista-generos/lista-generos.component';
import { CrearPersonajeFormularioComponent } from './crear-personaje-formulario/crear-personaje-formulario.component';
import { EditarPersonajeFormularioComponent } from './editar-personaje-formulario/editar-personaje-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    ListaPersonajesComponent,
    HomeComponent,
    PeliculaComponent,
    GeneroComponent,
    ListaPeliculasComponent,
    PeliculaDetallesComponent,
    PersonajeDetallesComponent,
    PaginaErrorComponent,
    GeneroDetallesComponent,
    ListaGenerosComponent,
    CrearPersonajeFormularioComponent,
    EditarPersonajeFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
