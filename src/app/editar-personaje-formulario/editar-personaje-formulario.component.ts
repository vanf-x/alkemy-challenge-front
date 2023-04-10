import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeServiceService } from '../personaje-service.service';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-editar-personaje-formulario',
  templateUrl: './editar-personaje-formulario.component.html',
  styleUrls: ['./editar-personaje-formulario.component.css'],
})
export class EditarPersonajeFormularioComponent implements OnInit {
  id: number;
  personaje: PersonajeComponent = new PersonajeComponent();
  constructor(
    private personajeService: PersonajeServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personajeService.obtenerPersonajePorId(this.id).subscribe(
      (data) => {
        this.personaje = data;
      },
      (error) => {
        //this.router.navigate(['/**']);
      }
    );
  }

  irAlListadoDePersonajes() {
    this.router.navigate(['/personajes']);
    alert('Actualización exitosa');
  }

  onSubmit() {
    this.personajeService.editarPersonaje(this.id, this.personaje).subscribe(
      (data) => {
        this.irAlListadoDePersonajes();
      },
      (error) => {
        //this.router.navigate(['/**']);
      }
    );
  }


}
