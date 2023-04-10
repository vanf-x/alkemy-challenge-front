import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PersonajeServiceService } from '../personaje-service.service';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-crear-personaje-formulario',
  templateUrl: './crear-personaje-formulario.component.html',
  styleUrls: ['./crear-personaje-formulario.component.css']
})
export class CrearPersonajeFormularioComponent implements OnInit {

personaje: PersonajeComponent = new PersonajeComponent();

  constructor(private pesonajeService:PersonajeServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  crearPersonaje(){
    this.pesonajeService.crearNuevoPersonaje(this.personaje).subscribe(data=>{
      console.log(data);
      this.irAlListadoDePersonajes();
    })
  }

  irAlListadoDePersonajes(){
    this.router.navigate(['/personajes']);
  }

  onSubmit(){
    this.crearPersonaje();
  }
}
