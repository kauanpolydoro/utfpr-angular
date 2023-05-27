export class Filme {
  constructor(
    public readonly id: string,
    public readonly titulo: string,
    public readonly ano: number,
    public readonly diretor: string,
    public readonly sinopse: string,
    public readonly classificacao: number,
  ) {}
}
