import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitButtonComponent } from './suit-button.component';

describe('SuitButtonComponent', () => {
  let component: SuitButtonComponent;
  let fixture: ComponentFixture<SuitButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuitButtonComponent]
    });
    fixture = TestBed.createComponent(SuitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
