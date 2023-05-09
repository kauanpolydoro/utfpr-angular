import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classNamePorNaipe'
})
class ClassNamePorNaipePipe implements PipeTransform {

  /**
   * Recebe um naipe e retorna a classe CSS correspondente.
   * @param value Valor do naipe.
   * @returns Classe CSS correspondente.
   * @example
   * transform("espada") // "preto"
   * transform("paus") // "preto"
   * transform("copas") // "verelho"
   * transform("ouros") // "verelho"
   */
  transform(value?: string): "botao-naipe vermelho" | "botao-naipe preto" {

    if (value === "copas" || value === "ouros") {
      return "botao-naipe vermelho";
    }

    return "botao-naipe preto";

  }

}

export { ClassNamePorNaipePipe }
