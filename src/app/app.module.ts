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

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    ListaPersonajesComponent,
    HomeComponent,
    PeliculaComponent,
    GeneroComponent,
    ListaPeliculasComponent
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
