import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

const getGameFeatureState = createFeatureSelector<GameState>('game');

export const getAllcards = createSelector(
  getGameFeatureState,
  (gameState) => gameState.allCards
);
