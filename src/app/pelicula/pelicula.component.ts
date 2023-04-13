import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent  {

id: number;
imagen: string;
titulo: string;
fechaDeCreacion: Date;
calificacion: number;
genero: string = "Otro";
activo: boolean;

  constructor() { }

}
