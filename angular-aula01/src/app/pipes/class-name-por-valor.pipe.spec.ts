import { ClassNamePorValorPipe } from './class-name-por-valor.pipe';

describe('ClassNamePorValorPipe', () => {

  let pipe = new ClassNamePorValorPipe();

  beforeEach(() => {
    pipe = new ClassNamePorValorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('should return "positivo" when value is greater or equal than 0.005', () => {
      expect(pipe.transform(0.005)).toBe("positivo");
      expect(pipe.transform(1)).toBe("positivo");

      expect(pipe.transform(0.004)).not.toBe("positivo");
      expect(pipe.transform(-1)).not.toBe("positivo");
    });

    it('should return "negativo" when value is less or equal than -0.005', () => {
      expect(pipe.transform(-0.005)).toBe("negativo");
      expect(pipe.transform(-1)).toBe("negativo");

      expect(pipe.transform(0.004)).not.toBe("negativo");
      expect(pipe.transform(1)).not.toBe("negativo");
    });

    it('should return "zero" when value is between -0.005 and 0.005', () => {
      expect(pipe.transform(0)).toBe("zero");
      expect(pipe.transform(-0.004)).toBe("zero");
      expect(pipe.transform(0.004)).toBe("zero");

      expect(pipe.transform(0.005)).not.toBe("zero");
      expect(pipe.transform(-0.005)).not.toBe("zero");
    });

  });
});
