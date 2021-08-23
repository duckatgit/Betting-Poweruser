import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeatePoweruserComponent } from './ceate-poweruser.component';

describe('CeatePoweruserComponent', () => {
  let component: CeatePoweruserComponent;
  let fixture: ComponentFixture<CeatePoweruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeatePoweruserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeatePoweruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
