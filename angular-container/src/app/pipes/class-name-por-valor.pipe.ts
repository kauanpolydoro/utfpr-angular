import { Pipe, PipeTransform } from '@angular/core';

const CLASSES_PADRAO = {
  positivo: "positivo",
  negativo: "negativo",
  zero: "zero",
}

export type ClassNamesDeValor = Partial<typeof CLASSES_PADRAO>;

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
    classes: ClassNamesDeValor = CLASSES_PADRAO,
  ): string {
    if (valor >= 0.005) {
      return classes.positivo || "positivo"
    }

    if (valor <= -0.005) {
      return classes.negativo || "negativo"
    }

    return classes.zero || "zero"
  }

}
