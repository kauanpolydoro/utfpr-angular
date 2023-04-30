export class Cliente {

  constructor(
    /**
     * Nome completo do cliente (nome e sobrenome)
     */
    public nome: string,

    /**
     * Saldo em reais do cliente
     */
    public saldo: number,

    /**
     * Data do último acesso (último login) do cliente
     */
    public ultimoLogin: Date) {

  }

  /**
   * Crédito pré-aprovado automaticamente para o cliente em função de seu saldo.
   * @returns Crédito pré-aprovado
   * * `0` se o saldo for menor que 10000
   * * `20000` se o saldo for maior ou igual a 10000
   */
  public get creditoPreAprovado(): number {

    if (this.saldo >= 10000) { return 20000 }

    return 0;

  }
}
