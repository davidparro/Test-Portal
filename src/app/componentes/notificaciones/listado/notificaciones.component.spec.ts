import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesListadoComponent } from './notificaciones.component';

describe('NotificacionesComponent', () => {
  let component: NotificacionesListadoComponent;
  let fixture: ComponentFixture<NotificacionesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificacionesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
