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
}
