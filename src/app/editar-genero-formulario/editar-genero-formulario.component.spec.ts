import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGeneroFormularioComponent } from './editar-genero-formulario.component';

describe('EditarGeneroFormularioComponent', () => {
  let component: EditarGeneroFormularioComponent;
  let fixture: ComponentFixture<EditarGeneroFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarGeneroFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGeneroFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
