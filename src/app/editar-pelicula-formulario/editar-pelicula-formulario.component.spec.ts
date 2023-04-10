import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPeliculaFormularioComponent } from './editar-pelicula-formulario.component';

describe('EditarPeliculaFormularioComponent', () => {
  let component: EditarPeliculaFormularioComponent;
  let fixture: ComponentFixture<EditarPeliculaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPeliculaFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeliculaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
