import { createAction, props } from '@ngrx/store';

import { Card } from './game.models';

export const fetchAllCards = createAction(
  '[Map component] Fetch all cards'
);

export const fetchAllCardsSuccess = createAction(
  '[Map component] Fetch all cards Success',
  props<{ payload: Card[] }>()
);

export const setTeamACards = createAction(
  '[Map component] Set Team A Cards',
  props<{ payload: Card[] }>()
);

export const setTeamBCards = createAction(
  '[Map component] Set Team B Cards',
  props<{ payload: Card[] }>()
);
