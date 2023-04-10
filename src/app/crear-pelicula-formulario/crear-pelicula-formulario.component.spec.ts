import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPeliculaFormularioComponent } from './crear-pelicula-formulario.component';

describe('CrearPeliculaFormularioComponent', () => {
  let component: CrearPeliculaFormularioComponent;
  let fixture: ComponentFixture<CrearPeliculaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPeliculaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPeliculaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
