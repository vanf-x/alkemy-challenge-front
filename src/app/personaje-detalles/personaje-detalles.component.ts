import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeServiceService } from '../personaje-service.service';
import { PersonajeComponent } from '../personaje/personaje.component';

@Component({
  selector: 'app-personaje-detalles',
  templateUrl: './personaje-detalles.component.html',
  styleUrls: ['./personaje-detalles.component.css'],
})
export class PersonajeDetallesComponent implements OnInit {
  id: number;
  personaje: PersonajeComponent;
  constructor(
    private router: ActivatedRoute,
    private personajeService: PersonajeServiceService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.personaje = new PersonajeComponent();
    this.personajeService.obtenerPersonajePorId(this.id).subscribe(data=>{
      this.personaje = data;
    })
  }
}
