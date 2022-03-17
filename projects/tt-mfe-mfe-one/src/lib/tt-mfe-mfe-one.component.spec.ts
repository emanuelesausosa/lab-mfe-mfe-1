import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtMfeMfeOneComponent } from './tt-mfe-mfe-one.component';

describe('TtMfeMfeOneComponent', () => {
  let component: TtMfeMfeOneComponent;
  let fixture: ComponentFixture<TtMfeMfeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtMfeMfeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtMfeMfeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
