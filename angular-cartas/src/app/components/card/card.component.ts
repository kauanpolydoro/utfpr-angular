import { Component, Input } from '@angular/core';
import { Naipe } from 'src/app/models/naipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public valorDaCarta?: string;

  @Input()
  public naipeDaCarta?: Naipe;

}
