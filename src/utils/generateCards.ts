import { Card } from "../@types/deck";
import { shuffleArray } from "./index";

export const generateCards = (
  suits: Array<string>,
  values: Array<string | number>,
  shuffled: boolean
) => {
  let cards: Array<Card> = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      const card = {
        value,
        suit,
        code:
          (Number(value) > 9 ? value : value.toString()[0]) + suit.charAt(0),
      };
      cards.push(card as Card);
    });
  });
  return shuffled ? shuffleArray(cards) : cards;
};
