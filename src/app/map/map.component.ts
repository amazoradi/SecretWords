import { Component, OnInit } from '@angular/core';
import { Card } from '../state/game.models';
import { select, Store } from '@ngrx/store';
import { GameState } from '../state/game.reducer';
import { Observable, of, Subscription } from 'rxjs';

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

  ngOnInit() {
    console.log('on map');
    
  }

  newGame() {
    // this.allCards$ =
    this.store.dispatch(gameActions.fetchAllCards());
    this.allCards$ = this.store.pipe(select(fromGame.getAllcards));
    console.log("hello", this.allCards$);
  }
}
