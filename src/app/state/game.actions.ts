import { createAction, props } from '@ngrx/store';

import { Card } from './game.models';

export const fetchAllCards = createAction(
  '[Map component] Fetch all cards'
);
export const fetchAllCardsSuccess = createAction(
  '[Map component] Fetch all cards',
  props<{ payload: Card[] }>()
);
