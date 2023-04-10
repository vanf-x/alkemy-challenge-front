import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonajeComponent } from './personaje/personaje.component';

@Injectable({
  providedIn: 'root'
})
export class PersonajeServiceService {
private baseURL = "http://localhost:8080/api/v1/personajes";
  constructor(private httpClient: HttpClient) { }
  obtenerListaDePersonajes(): Observable<PersonajeComponent[]>{
    return this.httpClient.get<PersonajeComponent[]>(`${this.baseURL}`);
  }
  obtenerPersonajePorId(id:number):Observable<PersonajeComponent>{
    return this.httpClient.get<PersonajeComponent>(`${this.baseURL}/${id}`);
  }
  crearNuevoPersonaje(personaje: PersonajeComponent):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, personaje);
  }
  editarPersonaje(id:number, personaje:PersonajeComponent) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, personaje);
  }
  eliminarPersonaje(id: number, personaje: PersonajeComponent): Observable<Object>{
    const personajeModificado = { ...personaje, activo: false };
    return this.httpClient.put(`${this.baseURL}/${id}`, personajeModificado);
  }
}
