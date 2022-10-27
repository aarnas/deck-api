import { Schema, model, models } from "mongoose";
import { Card } from "../@types/deck";
import { v4 as uuidv4 } from "uuid";
import { deckTypes } from "../constants/constants";

const deckSchema = new Schema(
  {
    deckId: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4(),
    },
    type: { type: deckTypes, required: true },
    shuffled: { type: Boolean, required: true },
    totalCardsRemaining: { type: Number, default: 52 },
    remainingCards: { type: Array<Card>, required: true },
  },
  {}
);

const Deck = models.Deck || model("Deck", deckSchema);

export default Deck;
