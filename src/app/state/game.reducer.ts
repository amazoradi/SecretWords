import { createReducer, on, State } from '@ngrx/store';
import { Card } from './game.models';

import * as gameActions from './game.actions';

export interface GameState {
  allCards: Card[];
  scoreTeamA: number;
  scoreTeamB: number;
  colorTeamA: string;
  colorTeamB: string;
}

const intialState: GameState = {
  allCards: null,
  scoreTeamA: 0,
  scoreTeamB: 0,
  colorTeamA: 'Red',
  colorTeamB: 'Blue',
};

export const gameReducer = createReducer(
  intialState,
  on(gameActions.fetchAllCardsSuccess, (state, { payload }) => ({
    ...state,
    allCards: payload,
  }))
);

export function GameReducer(state: GameState | undefined, action) {
  return gameReducer(state, action);
}
