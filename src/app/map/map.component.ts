import { Component, OnInit } from '@angular/core';
import { Card } from '../state/game.models';
import { select, Store } from '@ngrx/store';
import { GameState } from '../state/game.reducer';
import { Observable, of } from 'rxjs';

import * as gameActions from '../state/game.actions';
import * as fromGame from '../state/game.selectors';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  allCards$: Observable<Card[]> = of([]);

  constructor(private store: Store<GameState>) {}

  ngOnInit() {}

  setColor(card: Card) {
    console.log("in ngclass")
  }

  cardClick(card: Card) {
    console.log(card);
    card.isFlipped = true;

    // TODO: figure out if the card is in their list, change color and/or turn
  }

  newGame() {
    this.store.dispatch(gameActions.fetchAllCards());
    this.allCards$ = this.store.pipe(select(fromGame.getAllcards));
  }

  viewMapCard(){
    //TODO: add a popup with a colored graphic
  }
}
