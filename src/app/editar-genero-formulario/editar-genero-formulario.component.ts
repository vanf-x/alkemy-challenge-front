import { Component, OnInit } from '@angular/core';
import { GeneroComponent } from '../genero/genero.component';
import { GeneroServiceService } from '../genero-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero-formulario',
  templateUrl: './editar-genero-formulario.component.html',
  styleUrls: ['./editar-genero-formulario.component.css'],
})
export class EditarGeneroFormularioComponent implements OnInit {
  id: number;
  genero: GeneroComponent = new GeneroComponent();

  constructor(
    private generoService: GeneroServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.generoService.obtenerGeneroPorId(this.id).subscribe(data=>{
      this.genero = data;
      console.log(data);
      console.log(this.genero);
    })
  }

  irAlListadoDeGeneros(){
    this.router.navigate(['/generos']);
  }

  onSubmit(){
    //this.generoService.edit
  }
}
