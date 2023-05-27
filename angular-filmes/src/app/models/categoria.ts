import { Filme } from "./filme";

export class Categoria {

  constructor(
    public id: string,
    public nome: string
  ) {
  }

}

export class CategoriaDetalhes extends Categoria {

  constructor(
    public override id: string,
    public override nome: string,
    public descricao: string,
    public filmes: Filme[]
  ) {
    super(id, nome);
  }

}
