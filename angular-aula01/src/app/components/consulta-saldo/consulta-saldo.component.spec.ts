import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

import { ConsultaSaldoComponent } from './consulta-saldo.component';


@Pipe({
  name: 'classNamePorValor'
})
export class ClassNamePorValorPipeMock implements PipeTransform {
  public transform(value: any, ...args: any[]) {
    return '';
  }
}

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConsultaSaldoComponent,
        ClassNamePorValorPipeMock,
      ]
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

});
