import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonajeFormularioComponent } from './editar-personaje-formulario.component';

describe('EditarPersonajeFormularioComponent', () => {
  let component: EditarPersonajeFormularioComponent;
  let fixture: ComponentFixture<EditarPersonajeFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPersonajeFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPersonajeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
