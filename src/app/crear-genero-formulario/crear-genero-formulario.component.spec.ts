import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGeneroFormularioComponent } from './crear-genero-formulario.component';

describe('CrearGeneroFormularioComponent', () => {
  let component: CrearGeneroFormularioComponent;
  let fixture: ComponentFixture<CrearGeneroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearGeneroFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearGeneroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
