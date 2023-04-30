import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorValor'
})
export class ClassNamePorValorPipe implements PipeTransform {

  /**
   * Retorna a classe CSS de acordo com o valor do saldo
   * @param valor Valor do saldo
   * @returns Classe CSS
   * * `zero` se o valor for entre -0.005 e 0.005
   * * `positivo` se o valor for maior ou igual a 0.005
   * * `negativo` se o valor for menor ou igual a -0.005
  */
  public transform(
    valor: number,
  ): "positivo" | "negativo" | "zero" {
    if (valor >= 0.005) {
      return "positivo"
    }

    if (valor <= -0.005) {
      return "negativo"
    }

    return "zero"
  }

}
