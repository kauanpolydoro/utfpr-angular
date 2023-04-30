import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css']
})
export class ConsultaSaldoComponent implements OnInit {

  public cliente: Cliente = new Cliente(
    "Jhon Doe",
    99.99,
    new Date(),
  )

  constructor() {
  }

  public ngOnInit(): void {
  }

  /**
   * Retorna a classe CSS de acordo com o valor do saldo
   * @param valor Valor do saldo
   * @returns Classe CSS
   * @example classNamePorFavor(1) // "positivo"
   * @example classNamePorFavor(-1) // "negativo"
   * @example classNamePorFavor(0) // "zero"
   */
  public classNamePorValor(valor: number): "positivo" | "negativo" | "zero" {

    if (valor >= 0.005) {
      return "positivo"
    }

    if (valor <= -0.005) {
      return "negativo"
    }

    return "zero"
  }

}
