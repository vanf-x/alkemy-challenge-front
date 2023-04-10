import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServiceService } from '../pelicula-service.service';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  selector: 'app-crear-pelicula-formulario',
  templateUrl: './crear-pelicula-formulario.component.html',
  styleUrls: ['./crear-pelicula-formulario.component.css'],
})
export class CrearPeliculaFormularioComponent implements OnInit {
  constructor(private router: Router, private peliculaService: PeliculaServiceService) {}
pelicula: PeliculaComponent = new PeliculaComponent();
  ngOnInit(): void {}

  crearPelicula(){
    this.peliculaService.crearNuevaPelicula(this.pelicula).subscribe(data=>{
      console.log(data);
      this.irAlListadoDePeliculas();
    })
  }

  irAlListadoDePeliculas(){
    this.router.navigate(['/peliculas']);
  }

  onSubmit(){
    this.crearPelicula();
  }

}
