export interface ICategoria {
  id: string;
  nome: string;
  descricao: string;
}

export interface IFilme {
  id: string;
  titulo: string;
  ano: number;
  diretor: string;
  sinopse: string;
  classificacao: number;
}

export interface ICategoriaDetalhes {
  id: string;
  nome: string;
  descricao: string;
  filmes: IFilme[];
}
