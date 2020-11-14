import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { CardService } from '../shared/services/card.service';
import * as gameActions from './game.actions';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private gameService: CardService // private store: Store<RootState>
  ) {}

  @Effect()
  fetchAllCards$ = this.actions$.pipe(
    ofType(gameActions.fetchAllCards),
    mergeMap((action) => {
      return this.gameService.getAllCards();
    }),
    mergeMap((resp) => {
      return of(gameActions.fetchAllCardsSuccess({ payload: resp }));
    })
  );
}
