import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { forkJoin, of } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

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
    switchMap((action) => {
      return forkJoin([of(action), this.gameService.getAllCards()]);
    }),
    mergeMap(([action, resp]) => {
      return [gameActions.fetchAllCardsSuccess({ payload: resp })];
    })
  );

  @Effect()
  fetchAllCardsSuccess$ = this.actions$.pipe(
    ofType(gameActions.fetchAllCardsSuccess),
    switchMap((action) => {
      let totalCardArray = action.payload.slice();
      let paylaodA = [];
      let payloadB = [];

      for (let i = 0; i < 8; i++) {
        let randomNumber = Math.floor(Math.random() * totalCardArray.length);
        let removedCard = totalCardArray.splice(randomNumber - 1, 1).pop();
        paylaodA.push(removedCard);
      }

      for (let j = 0; j < 7; j++) {
        let randomNumberB = Math.floor(Math.random() * totalCardArray.length);
        let removedCardB = totalCardArray.splice(randomNumberB - 1, 1).pop();
        payloadB.push(removedCardB);
      }

      return [
        gameActions.setTeamACards({ payload: paylaodA }),
        gameActions.setTeamBCards({ payload: payloadB }),
      ];
    })
  );
}
