import { createReducer, on, State } from '@ngrx/store';
import { Card } from './game.models';

import * as gameActions from './game.actions';
import { state } from '@angular/animations';

export interface GameState {
  allCards: Card[];
  teamACards: Card[];
  teamBCards: Card[];
  assasinCard: Card;
  scoreTeamA: number;
  scoreTeamB: number;
  colorTeamA: string;
  colorTeamB: string;
  teamATurn: boolean;
}

const intialState: GameState = {
  allCards: null,
  teamACards: null,
  teamBCards: null,
  assasinCard: null,
  scoreTeamA: 0,
  scoreTeamB: 0,
  colorTeamA: 'Red',
  colorTeamB: 'Blue',
  teamATurn: true,
};

export const gameReducer = createReducer(
  intialState,
  on(gameActions.fetchAllCardsSuccess, (state, { payload }) => ({
    ...state,
    allCards: payload,
  })),
  on(gameActions.setTeamACards, (state, { payload }) => ({
    ...state,
    teamACards: payload,
  })),
  on(gameActions.setTeamBCards, (state, { payload }) => ({
    ...state,
    teamBCards: payload,
  })),
  on(gameActions.setAssissinCard, (state, { payload }) => ({
    ...state,
    assasinCard: payload,
  }))
);

export function GameReducer(state: GameState | undefined, action) {
  return gameReducer(state, action);
}
