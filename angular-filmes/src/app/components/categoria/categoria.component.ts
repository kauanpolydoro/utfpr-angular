import { Component, OnInit, Input } from '@angular/core';
import { CategoriaDetalhes } from 'src/app/models/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input()
  public categoria!: CategoriaDetalhes;

  constructor() { }

  ngOnInit(): void {}

}
