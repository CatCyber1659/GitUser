import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyFaqComponent } from './policy-faq.component';

describe('PolicyFaqComponent', () => {
  let component: PolicyFaqComponent;
  let fixture: ComponentFixture<PolicyFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
