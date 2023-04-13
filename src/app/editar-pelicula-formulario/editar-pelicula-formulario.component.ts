import { Component, OnInit } from '@angular/core';
import { PeliculaComponent } from '../pelicula/pelicula.component';
import { PeliculaServiceService } from '../pelicula-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pelicula-formulario',
  templateUrl: './editar-pelicula-formulario.component.html',
  styleUrls: ['./editar-pelicula-formulario.component.css']
})
export class EditarPeliculaFormularioComponent implements OnInit {

  id: number;
  pelicula: PeliculaComponent = new PeliculaComponent();

  constructor(private peliculaService: PeliculaServiceService,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.peliculaService.obtenerPeliculaPorId(this.id).subscribe(
      (data) => {
        this.pelicula = data;
      },
      (error) => {
      console.log("Ocurrió un error accediendo a la película");
        //this.router.navigate(['/**']);
      }
    );
  }

  irAlListadoDePeliculas(){
    this.router.navigate(['/peliculas']);
    alert('Actualización exitosa');
  }

  onSubmit() {
    this.peliculaService.editarPelicula(this.id, this.pelicula).subscribe(
      (data) => {
        this.irAlListadoDePeliculas();
      },
      (error) => {
        //this.router.navigate(['/**']);
      }
    );
  }

}
