import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';

const routes: Routes = [
  {path: 'personajes', component: ListaPersonajesComponent},
  {path:'home', component: HomeComponent},
  {path: 'peliculas', component: ListaPeliculasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
