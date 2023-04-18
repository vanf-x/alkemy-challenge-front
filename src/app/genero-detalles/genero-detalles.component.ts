import { Component, OnInit } from '@angular/core';
import { GeneroComponent } from '../genero/genero.component';
import { GeneroServiceService } from '../genero-service.service';

@Component({
  selector: 'app-genero-detalles',
  templateUrl: './genero-detalles.component.html',
  styleUrls: ['./genero-detalles.component.css']
})
export class GeneroDetallesComponent implements OnInit {

  private id:number;
  private genero:GeneroComponent;

  constructor(generoService: GeneroServiceService) { }

  ngOnInit(): void {
  }


  
}
