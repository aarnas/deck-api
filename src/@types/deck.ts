import mongoose from "mongoose";
import { CARD_SUITS, CARD_SPECIAL_VALUES, DECK_TYPE } from "../constants/enums";

export interface Deck {
  deckId: mongoose.Types.ObjectId;
  type: DECK_TYPE;
  shuffled: boolean;
  totalCardsRemaining: number;
  remainingCards: Array<Card>;
}

export interface Card {
  value: CARD_SPECIAL_VALUES | number;
  suit: CARD_SUITS;
  code: string;
}
