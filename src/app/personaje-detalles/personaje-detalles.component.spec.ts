import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeDetallesComponent } from './personaje-detalles.component';

describe('PersonajeDetallesComponent', () => {
  let component: PersonajeDetallesComponent;
  let fixture: ComponentFixture<PersonajeDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
