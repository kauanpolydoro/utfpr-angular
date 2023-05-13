import { Disciplina } from "./disciplina";
import { Aluno } from "./aluno";

export class Turma {

  constructor(
    public disciplina: Disciplina,
    public ano: number,
    public periodo: number,
    public alunos: Aluno[]
  ) {

  }

  public get nome(): string {
    return `${this.disciplina.codigo}-${this.ano}`;
  }

}
