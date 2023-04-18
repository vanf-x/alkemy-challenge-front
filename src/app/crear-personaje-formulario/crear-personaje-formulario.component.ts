import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PeliculaServiceService } from '../pelicula-service.service';
import { PersonajeServiceService } from '../personaje-service.service';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-crear-personaje-formulario',
  templateUrl: './crear-personaje-formulario.component.html',
  styleUrls: ['./crear-personaje-formulario.component.css'],
})
export class CrearPersonajeFormularioComponent implements OnInit {
  personaje: PersonajeComponent = new PersonajeComponent();
  listaPeliculas: string[];

  constructor(
    private pesonajeService: PersonajeServiceService,
    private router: Router,
    private peliculaService: PeliculaServiceService
  ) {}

  ngOnInit(): void {
    this.cargarListaDePeliculas();
  }

  crearPersonaje() {
    this.pesonajeService
      .crearNuevoPersonaje(this.personaje)
      .subscribe((data) => {
        console.log(data);
        alert('Personaje creado con éxito');
        this.irAlListadoDePersonajes();
      });
  }

  irAlListadoDePersonajes() {
    this.router.navigate(['/personajes']);
  }

  onSubmit() {
    this.crearPersonaje();
  }

  cargarListaDePeliculas(){
    this.peliculaService.obtenerListaDePeliculas().subscribe(data=>{
      let titulos:string[] = [];
      data.map(el=>{
        titulos.push(el.titulo);
        console.log(titulos);
      })
      this.listaPeliculas = titulos;
    })
  }
}
