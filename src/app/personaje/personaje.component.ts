import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {

  constructor() { }
id:number;
nombre:string;
imagen:string;
edad:number;
peso:number;
historia:string;
activo: boolean;
peliculas:string[] = [];
}
