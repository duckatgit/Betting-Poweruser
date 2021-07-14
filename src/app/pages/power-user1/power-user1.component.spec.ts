import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerUser1Component } from './power-user1.component';

describe('PowerUser1Component', () => {
  let component: PowerUser1Component;
  let fixture: ComponentFixture<PowerUser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerUser1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
