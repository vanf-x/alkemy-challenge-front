import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaServiceService } from '../pelicula-service.service';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css'],
})
export class ListaPeliculasComponent implements OnInit {
  peliculas: PeliculaComponent[];
  constructor(
    private peliculaService: PeliculaServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }
  private obtenerPeliculas() {
    this.peliculaService.obtenerListaDePeliculas().subscribe((data) => {
      this.peliculas = data;
    });
  }
  verDetallesPelicula(id:number){
    this.router.navigate(['peliculas', id])
  }
}
