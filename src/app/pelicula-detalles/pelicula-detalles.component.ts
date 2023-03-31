import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaServiceService } from '../pelicula-service.service';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  selector: 'app-pelicula-detalles',
  templateUrl: './pelicula-detalles.component.html',
  styleUrls: ['./pelicula-detalles.component.css'],
})
export class PeliculaDetallesComponent implements OnInit {
  id: number;
  pelicula: PeliculaComponent;

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculaServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pelicula = new PeliculaComponent();
    this.peliculaService.obtenerPeliculaPorId(this.id).subscribe(data=>{
      this.pelicula = data;
    })
  }
}
