import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitAndValueSelectComponent } from './suit-and-value-select.component';

describe('SuitAndValueSelectComponent', () => {
  let component: SuitAndValueSelectComponent;
  let fixture: ComponentFixture<SuitAndValueSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuitAndValueSelectComponent]
    });
    fixture = TestBed.createComponent(SuitAndValueSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
