import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceReactiveForms } from './advance-reactive-forms';

describe('AdvanceReactiveForms', () => {
  let component: AdvanceReactiveForms;
  let fixture: ComponentFixture<AdvanceReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceReactiveForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
