import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneroComponent } from './genero/genero.component';

@Injectable({
  providedIn: 'root'
})
export class GeneroServiceService {
  private baseURL = 'http://localhost:8080/api/v1/generos';
  constructor(private httpClient: HttpClient) { }

  obtenerListaDeGeneros():Observable<GeneroComponent[]>{
    return this.httpClient.get<GeneroComponent[]>(`${this.baseURL}`);
  }

  obtenerGeneroPorId(id:number):Observable<GeneroComponent>{
    return this.httpClient.get<GeneroComponent>(`${this.baseURL}/${id}`);
  }

  crearNuevoGenero(genero:GeneroComponent): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, genero);
  }
  eliminarGenero(id:number, genero: GeneroComponent):Observable<Object>{
    const generoModificado = {...genero, activo: false};
    return this.httpClient.put(`${this.baseURL}/${id}`, generoModificado);
  }
}
