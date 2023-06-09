import { Component } from '@angular/core';
import { Turma } from './models/turma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public turma?: Turma;

  public exibeTurma(turma: Turma): void {
    this.turma = turma;
  }

}
