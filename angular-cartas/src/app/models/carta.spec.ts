import { Carta } from './carta';

describe('Carta', () => {
  it('should create an instance', () => {
    expect(new Carta("espada", "10")).toBeTruthy();
  });
});
