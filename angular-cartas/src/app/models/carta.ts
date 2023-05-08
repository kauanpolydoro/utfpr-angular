type Naipe = "espada" | "paus" | "copas" | "ouros";
type Valor = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";

class Carta {

  constructor(
    /**
     * Naipe da carta
     */
    public naipe: Naipe,

    /**
     * Valor da carta
     */
    public valor: Valor,
  ) { }

  public get cor(): "preto" | "vermelho" {

    if (this.naipe === "espada" || this.naipe === "paus") {
      return "preto";
    }

    return "vermelho";

  }

}

export { Carta };
