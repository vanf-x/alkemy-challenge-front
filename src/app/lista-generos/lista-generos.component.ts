import { Component, OnInit } from '@angular/core';
import { GeneroComponent } from '../genero/genero.component';
import { GeneroServiceService } from '../genero-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-generos',
  templateUrl: './lista-generos.component.html',
  styleUrls: ['./lista-generos.component.css'],
})
export class ListaGenerosComponent implements OnInit {
  private id: number;
  generos: GeneroComponent[];
  constructor(private generoService: GeneroServiceService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerGeneros();
  }

  private obtenerGeneros() {
    this.generoService.obtenerListaDeGeneros().subscribe((data) => {
      this.generos = data;
      console.log(data);
    });
  }

  verDetallesGenero(id:number){
    this.router.navigate(['generos', id]);
    }
}
