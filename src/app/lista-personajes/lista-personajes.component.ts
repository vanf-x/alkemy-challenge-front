import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeServiceService } from '../personaje-service.service';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css'],
})
export class ListaPersonajesComponent implements OnInit {
  personajes: PersonajeComponent[];
  constructor(
    private personajeService: PersonajeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPersonajes();
  }
  private obtenerPersonajes() {
    this.personajeService.obtenerListaDePersonajes().subscribe((data) => {
      //console.log(data);
      this.personajes = data;
    });
    }
    verDetallesPersonaje(id:number){
      this.router.navigate(['personajes', id])
  }
}
