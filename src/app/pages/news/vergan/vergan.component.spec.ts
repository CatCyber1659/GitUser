import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerganComponent } from './vergan.component';

describe('VerganComponent', () => {
  let component: VerganComponent;
  let fixture: ComponentFixture<VerganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
