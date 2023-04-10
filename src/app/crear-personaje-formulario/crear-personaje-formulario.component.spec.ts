import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPersonajeFormularioComponent } from './crear-personaje-formulario.component';

describe('CrearPersonajeFormularioComponent', () => {
  let component: CrearPersonajeFormularioComponent;
  let fixture: ComponentFixture<CrearPersonajeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonajeFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonajeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
