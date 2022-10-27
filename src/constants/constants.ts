import { CARD_SPECIAL_VALUES, CARD_SUITS, DECK_TYPE } from "./enums";

export const deckTypes = Object.values(DECK_TYPE);

export const suits = Object.keys(CARD_SUITS);

export const shortCardValues = [
  ...Object.values(CARD_SPECIAL_VALUES),
  7,
  8,
  9,
  10,
];

export const fullCardValues = [
  ...Object.values(CARD_SPECIAL_VALUES),
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];
