import { expect } from "chai";
import { Card } from "../src/@types/deck";
import {
  fullCardValues,
  shortCardValues,
  suits,
} from "../src/constants/constants";
import { drawFromDeck, generateCards } from "../src/utils";

describe("Testing Utils", () => {
  it("drawFromDeck should return drawn cards", () => {
    let deck = {
      deckId: "a4241d0d-5a6d-4453-b3e9-b0c0e65cc0eb",
      type: ["SHORT"],
      shuffled: true,
      remainingCards: [
        { value: 8, suit: "SPADES", code: "8S" },
        { value: "KING", suit: "SPADES", code: "KS" },
        { value: 9, suit: "HEARTS", code: "9H" },
        { value: 9, suit: "CLUBS", code: "9C" },
      ],
    };
    const threeDrawn = drawFromDeck(deck.remainingCards as Array<Card>, 3);
    expect(threeDrawn.drawn.length).to.equal(3);
  });

  it("generateCard should generate full deck", () => {
    const generatedCards = generateCards(suits, fullCardValues, false);
    expect(generatedCards.length).to.equal(52);
  });

  it("generateCard should generate full deck", () => {
    const generatedCards = generateCards(suits, shortCardValues, false);
    expect(generatedCards.length).to.equal(32);
  });
});
