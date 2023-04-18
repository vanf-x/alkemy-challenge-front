import { Component, OnInit } from '@angular/core';
import { GeneroComponent } from '../genero/genero.component';
import { GeneroServiceService } from '../genero-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-genero-formulario',
  templateUrl: './crear-genero-formulario.component.html',
  styleUrls: ['./crear-genero-formulario.component.css'],
})
export class CrearGeneroFormularioComponent implements OnInit {
  
  genero: GeneroComponent = new GeneroComponent();

  constructor(
    private generoService: GeneroServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  crearGenero() {
    this.generoService.crearNuevoGenero(this.genero).subscribe((data) => {
      alert('Género creado con éxito');
      this.irAlListadoDeGeneros();
    });
  }

  irAlListadoDeGeneros(){
    this.router.navigate(['/generos']);
  }

  onSubmit(){
    this.crearGenero();
  }
}
