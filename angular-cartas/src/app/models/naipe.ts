export class Naipe {

  constructor(
    public suit?: "espada" | "paus" | "copas" | "ouros",
    public suitSymbol?: "♣" | "♠" | "♦" | "♥"
  ) { }

  public get color(): "vermelho" | "preto" {

    if (this.suit === "copas" || this.suit === "ouros") {
      return "vermelho";
    }

    return "preto";
  }

}
