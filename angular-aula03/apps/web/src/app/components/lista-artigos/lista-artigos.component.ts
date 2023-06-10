import { Component, OnInit } from '@angular/core';
import { Artigo } from '@cefwm-angular/common';
import { Observable } from 'rxjs';
import { ArtigoService } from '../../services/artigo/artigo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cefwm-angular-lista-artigos',
  templateUrl: './lista-artigos.component.html',
  styleUrls: ['./lista-artigos.component.css']
})
export class ListaArtigosComponent implements OnInit {

  public artigos$: Observable<Artigo[]> = this.artigoService.getAll();

  constructor(
    private artigoService: ArtigoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  //Recebe o artigo e o evento do JavaScript
  public editaArtigo(artigo: Artigo, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.router.navigate(['home/artigo-edicao']);
  }

}
