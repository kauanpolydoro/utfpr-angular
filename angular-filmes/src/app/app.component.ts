import { Component } from '@angular/core';
import { CategoriaService } from './services/categoria.service';
import { Categoria, CategoriaDetalhes } from './models/categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-filmes';

  constructor(
    public categoriaService: CategoriaService
  ) { }

  public categoria?: CategoriaDetalhes;

  public exibeCategoria(categoria: Categoria): void {
    this.categoriaService.getDetalhes(categoria.id).subscribe((categoria: CategoriaDetalhes) => {
      this.categoria = categoria;
    });
  }

}
