import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionesListadoComponent } from './comunicaciones.component';

describe('ComunicacionesComponent', () => {
  let component: ComunicacionesListadoComponent;
  let fixture: ComponentFixture<ComunicacionesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
