import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria, CategoriaDetalhes } from '../models/categoria';
import { ICategoria } from '../interfaces/categoria';
import { map } from 'rxjs/operators';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    public httpClient: HttpClient
  ) { }

  public get(): Observable<Categoria[]> {
    return this.httpClient.get<ICategoria[]>(
      'http://localhost:3000/api/categorias/',
    ).pipe(
      map((x) => x.map((categoria: ICategoria) => new Categoria(
        categoria.id,
        categoria.nome,
      )))
    );
  }

  public getDetalhes(id: string): Observable<CategoriaDetalhes> {

    console.log(id);

    return this.httpClient.get<CategoriaDetalhes>(
      'http://localhost:3000/api/categorias/' + id,
    ).pipe(
      map((x) => new CategoriaDetalhes(
        x.id,
        x.nome,
        x.descricao,
        x.filmes.map(filme => new Filme(
          filme.id,
          filme.titulo,
          filme.ano,
          filme.diretor,
          filme.sinopse,
          filme.classificacao,
        )))),
    );
  }
}
