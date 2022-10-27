import { Card } from "../@types/deck";

export const drawFromDeck = (deck: Array<Card>, amount: number) => {
  const drawn = deck.splice(0, amount);
  return {
    deck,
    drawn,
  };
};
