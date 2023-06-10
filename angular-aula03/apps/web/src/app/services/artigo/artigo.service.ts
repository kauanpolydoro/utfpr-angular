import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Artigo, IArtigo } from "@cefwm-angular/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ArtigoService {

  constructor(
    private httpClient: HttpClient,
    @Inject("API_BASE_URL") private apiBaseUrl: string,
  ) {

  }

  public getAll(): Observable<Artigo[]> {

    return this.httpClient.get<IArtigo[]>(`${this.apiBaseUrl}/artigos`)
      .pipe(
        map((iArtigos: IArtigo[]) => {
          return iArtigos.map((iArtigo: IArtigo) => {
            return new Artigo(
              iArtigo._id,
              iArtigo.imagem,
              iArtigo.titulo,
              iArtigo.descricao,
              iArtigo.url,
            );
          });
        })
      );
  }
}
