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

  cardClick(card: Card) {
    console.log(card);
    // TODO: figure out if the card is in their list, change color and/or turn
  }

  newGame() {
    this.store.dispatch(gameActions.fetchAllCards());
    this.allCards$ = this.store.pipe(select(fromGame.getAllcards));

    // TODO: figure out the map board and which cards go where
  }
}
