export enum DECK_TYPE {
  FULL = "FULL",
  SHORT = "SHORT",
}

export enum CARD_SPECIAL_VALUES {
  ACE = "ACE",
  KING = "KING",
  QUEEN = "QUEEN",
  JACK = "JACK",
}

export enum CARD_SUITS {
  SPADES = "SPADES",
  CLUBS = "CLUBS",
  DIAMONDS = "DIAMONDS",
  HEARTS = "HEARTS",
}

export interface Card {
  value: CARD_SPECIAL_VALUES | number;
  suit: CARD_SUITS;
  code: string;
}
