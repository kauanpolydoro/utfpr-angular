import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css']
})
export class ConsultaSaldoComponent implements OnInit {

  public cliente: Cliente = new Cliente(
    12,
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
   * * `zero` se o valor for entre -0.005 e 0.005
   * * `positivo` se o valor for maior ou igual a 0.005
   * * `negativo` se o valor for menor ou igual a -0.005
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
