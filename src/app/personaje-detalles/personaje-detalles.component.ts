import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PersonajeServiceService } from '../personaje-service.service';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-personaje-detalles',
  templateUrl: './personaje-detalles.component.html',
  styleUrls: ['./personaje-detalles.component.css'],
})
export class PersonajeDetallesComponent implements OnInit {
  id: number;
  personaje: PersonajeComponent;
  constructor(
    private route: ActivatedRoute,
    private personajeService: PersonajeServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaje = new PersonajeComponent();
    this.personajeService.obtenerPersonajePorId(this.id).subscribe((data) => {
      this.personaje = data;
    });
  }



  irAlListadoDePersonajes() {
    this.router.navigate(['/personajes']);
    alert('Personaje eliminado con éxito');
  }

  onClickEliminar() {
    this.eliminarPersonaje();
  }

  eliminarPersonaje() {
    this.personajeService
      .eliminarPersonaje(this.personaje.id, this.personaje)
      .subscribe(() => {
        this.irAlListadoDePersonajes();
      });
  }
}
