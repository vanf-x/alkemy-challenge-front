import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroDetallesComponent } from './genero-detalles.component';

describe('GeneroDetallesComponent', () => {
  let component: GeneroDetallesComponent;
  let fixture: ComponentFixture<GeneroDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneroDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
