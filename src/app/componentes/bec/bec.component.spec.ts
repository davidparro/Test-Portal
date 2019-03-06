import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecComponent } from './bec.component';

describe('BecComponent', () => {
  let component: BecComponent;
  let fixture: ComponentFixture<BecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
