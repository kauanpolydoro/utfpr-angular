import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      "Kauan Polydoro",
      1000,
      new Date("2023-04-29T10:38:00"),
    );
  });

  it('should create an instance', () => {

    expect(cliente).toBeTruthy();

  });

  describe('creditoPreAprovado', () => {

    it("Não deve liberar crédito para clientes com baixo saldo", () => {
      cliente.saldo = 9999.99;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

    it("Deve liberar R$20.000 de crédito para clientes de alto saldo", () => {
      cliente.saldo = 10000;
      expect(cliente.creditoPreAprovado).toBe(20000);
    });

  });

});
