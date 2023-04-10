import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculaComponent } from './pelicula/pelicula.component';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

  constructor(private httpClient: HttpClient) { }
  private baseURL = "http://localhost:8080/api/v1/peliculas";

  obtenerListaDePeliculas(): Observable<PeliculaComponent[]>{
    return this.httpClient.get<PeliculaComponent[]>(`${this.baseURL}`);
  }

  obtenerPeliculaPorId(id:number):Observable<PeliculaComponent>{
    return this.httpClient.get<PeliculaComponent>(`${this.baseURL}/${id}`);
  }

  crearNuevaPelicula(pelicula: PeliculaComponent): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, pelicula);
  }

  editarPelicula(id:number, pelicula: PeliculaComponent): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, pelicula);
  }

eliminarPelicula(id:number, pelicula: PeliculaComponent):Observable<Object>{
  const peliculaModificada = {... pelicula, activo:false};
  return this.httpClient.put(`${this.baseURL}/${id}`, peliculaModificada);
}
}
