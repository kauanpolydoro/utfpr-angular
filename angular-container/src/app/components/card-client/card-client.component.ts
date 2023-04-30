import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

const CLASSES = {
  positivo: 'credito positivo'
}

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {

  @Input()
  public cliente?: Cliente;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  public get clss(): Partial<{
    positivo: string;
    negativo: string;
    zero: string;
  }> {
    return CLASSES;
  };

}
