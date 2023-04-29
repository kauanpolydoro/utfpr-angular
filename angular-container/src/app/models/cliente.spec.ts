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
});
