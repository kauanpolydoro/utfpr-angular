import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  templateUrl: './consulta-saldo.component.html',
  styleUrls: ['./consulta-saldo.component.css']
})
export class ConsultaSaldoComponent implements OnInit {

  public jhon: Cliente = new Cliente(
    12,
    "Jhon Doe",
    99999.99,
    new Date(),
  );

  public marie: Cliente = new Cliente(
    1,
    "Marie Doe",
    9999.99,
    new Date(),
  );

  public clientes: Cliente[] = [
    this.jhon,
    this.marie,
  ];
  public clienteSelecionado?: Cliente;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
