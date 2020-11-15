import { createAction, props } from '@ngrx/store';

import { Card } from './game.models';

export const fetchAllCards = createAction(
  '[Map component] Fetch all cards'
);

export const fetchAllCardsSuccess = createAction(
  '[Game Effect] Fetch all cards Success',
  props<{ payload: Card[] }>()
);

export const setTeamACards = createAction(
  '[Game Effect] Set Team A Cards',
  props<{ payload: Card[] }>()
);

export const setTeamBCards = createAction(
  '[Game Effect] Set Team B Cards',
  props<{ payload: Card[] }>()
);

export const setAssissinCard = createAction(
  '[Game Effect] Set Assisin Card',
  props<{ payload: Card }>()
);
