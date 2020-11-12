import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsSeedsComponent } from './nuts-seeds.component';

describe('NutsSeedsComponent', () => {
  let component: NutsSeedsComponent;
  let fixture: ComponentFixture<NutsSeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutsSeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutsSeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
