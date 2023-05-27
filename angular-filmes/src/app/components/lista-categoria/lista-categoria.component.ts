import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  @Output()
  public categoriaSelecionada: EventEmitter<Categoria> = new EventEmitter<Categoria>();

  public categorias: Categoria[] = [];

  constructor(
    public categoriaService: CategoriaService
  ) {

  }

  ngOnInit(): void {
    this.categoriaService.get().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  public selecionaCategoria(categoria: Categoria): void {
    this.categoriaSelecionada.emit(categoria);
    console.log(this.categoriaSelecionada)
  }

}
