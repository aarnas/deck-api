import {
  deckTypes,
  fullCardValues,
  shortCardValues,
  suits,
} from "../constants/constants";
import { DECK_TYPE } from "../constants/enums";
import { generateCards, drawFromDeck } from "../utils";
import Deck from "../models/deck";

export const createNewDeck = async (type: DECK_TYPE, shuffled: boolean) => {
  if (!deckTypes.includes(type))
    return {
      error: 404,
      message: "Unsupported type",
    };
  const values = type === DECK_TYPE.SHORT ? shortCardValues : fullCardValues;
  const cards = generateCards(suits, values, shuffled);
  const newDeck = await Deck.create({
    type,
    shuffled,
    totalCardsRemaining: cards.length,
    remainingCards: cards,
  });
  const response = {
    deckId: newDeck.deckId,
    type: newDeck.type,
    shuffled: newDeck.shuffled,
    remaining: newDeck.totalCardsRemaining,
  };
  return response;
};

export const findOneByDeckId = async (uuid: string) => {
  const deck = await Deck.findOne({ deckId: uuid });
  return deck ? deck : { error: 404, message: "Deck by this UUID not found" };
};

export const drawByDeckId = async (uuid: string, amount: number) => {
  const deck = await Deck.findOne({ deckId: uuid });
  if (!deck)
    return {
      error: 404,
      message: "Deck by this UUID not found",
    };
  if (deck.totalCardsRemaining < amount)
    return {
      error: 406,
      message: "Not enough cards to draw",
    };
  const deckChanges = drawFromDeck(deck.remainingCards, amount);
  await Deck.findOneAndUpdate(
    { deckId: uuid },
    {
      remainingCards: deckChanges.deck,
      totalCardsRemaining: deckChanges.deck.length,
    }
  );
  return {
    cards: deckChanges.drawn,
  };
};
