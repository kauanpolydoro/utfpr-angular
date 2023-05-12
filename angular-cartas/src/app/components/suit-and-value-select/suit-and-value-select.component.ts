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

  public valores: string[] = [
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "J", "Q", "K"
  ]

  public naipeSelecionado?: Naipe;
  public valorSelecionado?: string;

  constructor() {

  }

  /**
   * Função que reseta os valores selecionados pelo usuário
   * @returns void
   */
  public reset(): void {
    this.naipeSelecionado = undefined;
    this.valorSelecionado = undefined;
  }

  public getClass(naipe: Naipe): string {
    return `botao-naipe ${naipe.color}`
  }

  ngOnInit(): void {

  }

}
