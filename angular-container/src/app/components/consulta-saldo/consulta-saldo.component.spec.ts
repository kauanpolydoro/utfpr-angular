import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('classNamePorValor', () => {

    it('should return "positivo" when value is greater or equal than 0.005', () => {
      expect(component.classNamePorValor(0.005)).toBe("positivo");
      expect(component.classNamePorValor(1)).toBe("positivo");

      expect(component.classNamePorValor(0.004)).not.toBe("positivo");
      expect(component.classNamePorValor(-1)).not.toBe("positivo");
    });

    it('should return "negativo" when value is less or equal than -0.005', () => {
      expect(component.classNamePorValor(-0.005)).toBe("negativo");
      expect(component.classNamePorValor(-1)).toBe("negativo");

      expect(component.classNamePorValor(0.004)).not.toBe("negativo");
      expect(component.classNamePorValor(1)).not.toBe("negativo");
    });

    it('should return "zero" when value is between -0.005 and 0.005', () => {
      expect(component.classNamePorValor(0)).toBe("zero");
      expect(component.classNamePorValor(-0.004)).toBe("zero");
      expect(component.classNamePorValor(0.004)).toBe("zero");

      expect(component.classNamePorValor(0.005)).not.toBe("zero");
      expect(component.classNamePorValor(-0.005)).not.toBe("zero");
    });

  });

});
