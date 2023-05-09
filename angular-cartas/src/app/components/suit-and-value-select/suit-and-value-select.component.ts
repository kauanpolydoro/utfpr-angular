import { Component, OnInit } from '@angular/core';
import { Naipe } from 'src/app/models/naipe';

@Component({
  selector: 'app-suit-and-value-select',
  templateUrl: './suit-and-value-select.component.html',
  styleUrls: ['./suit-and-value-select.component.css']
})
export class SuitAndValueSelectComponent implements OnInit {

  public ouros: Naipe = new Naipe("ouros", "♦");
  public copas: Naipe = new Naipe("copas", "♥");
  public espada: Naipe = new Naipe("espada", "♠");
  public paus: Naipe = new Naipe("paus", "♣");

  public naipes: Naipe[] = [
    this.ouros,
    this.copas,
    this.espada,
    this.paus
  ];

  public naipeSelecionado?: Naipe;

  constructor() {

  }

  /**
   * Função que reseta o naipe selecionado pelo o usuário
   * @returns void
   */
  public resetNaipeSelecionado(): void {
    this.naipeSelecionado = undefined;
  }

  public getClass(naipe: Naipe): string {
    return `botao-naipe ${naipe.color}`
  }

  ngOnInit(): void {

  }

}
