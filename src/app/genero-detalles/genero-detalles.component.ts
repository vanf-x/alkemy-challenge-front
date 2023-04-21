import { Component, OnInit } from '@angular/core';
import { GeneroComponent } from '../genero/genero.component';
import { GeneroServiceService } from '../genero-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-genero-detalles',
  templateUrl: './genero-detalles.component.html',
  styleUrls: ['./genero-detalles.component.css'],
})
export class GeneroDetallesComponent implements OnInit {
  private id: number;
   genero: GeneroComponent;

  constructor(
    private generoService: GeneroServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setearID();
    this.inicializarGenero();
    this.obtenerGeneroPorId();
  }

  setearID(): void {
    this.id = this.route.snapshot.params['id'];
  }
  inicializarGenero(): void {
    this.genero = new GeneroComponent();
  }
  obtenerGeneroPorId() {
    return this.generoService.obtenerGeneroPorId(this.id).subscribe((data) => {
      this.genero = data;
    });
  }

  irAEditarGenero(){
    this.router.navigate(['/generos/editar']);
  }

irAlListadoDeGeneros(){
  this.router.navigate(['/generos']);
}

  onClickEliminar() {
    this.eliminarGenero();
  }

  eliminarGenero() {
    this.generoService
      .eliminarGenero(this.genero.id, this.genero)
      .subscribe(() => {
        this.irAlListadoDeGeneros();
      });
  }
}
