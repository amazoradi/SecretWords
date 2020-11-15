import { Component, Inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Card } from '../state/game.models';
import { GameState } from '../state/game.reducer';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public card: Card;
  constructor(private store: Store<GameState>) {}

  ngOnInit(): void {}

  cardSelected(card: Card) {
    this.card = Object.assign({}, card, card.isFlipped = true);
    console.log(this.card);
  }
}
