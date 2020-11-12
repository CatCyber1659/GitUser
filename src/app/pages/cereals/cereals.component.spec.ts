import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealsComponent } from './cereals.component';

describe('CerealsComponent', () => {
  let component: CerealsComponent;
  let fixture: ComponentFixture<CerealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
