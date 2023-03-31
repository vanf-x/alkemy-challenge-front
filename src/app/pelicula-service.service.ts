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
}
