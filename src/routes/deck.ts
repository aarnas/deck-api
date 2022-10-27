import express from "express";
import {
  createNewDeck,
  drawByDeckId,
  findOneByDeckId,
} from "../controllers/deck";

const router = express.Router();

router.post("/create", async (req: express.Request, res: express.Response) => {
  const data = req.body;
  const newDeck = await createNewDeck(data.type, data.shuffled);
  res.send(newDeck);
});

router.get(
  "/open/:deckId",
  async (req: express.Request, res: express.Response) => {
    const deck = await findOneByDeckId(req.params.deckId);
    res.send(deck);
  }
);

router.get(
  "/draw/:deckId/:amount",
  async (req: express.Request, res: express.Response) => {
    const drawn = await drawByDeckId(
      req.params.deckId,
      Number(req.params.amount)
    );
    res.send(drawn);
  }
);

export default router;
