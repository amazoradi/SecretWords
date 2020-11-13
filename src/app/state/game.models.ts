export interface Card {
  id: number;
  cardText: string;
  cardType?: string;
  isFlipped: boolean;
}

export interface Map {
  cards: Card[];
  turnA: boolean;
  scoreA: number;
  scoreB: number;
}
