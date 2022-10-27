import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import DeckRouter from "./routes/deck";
import * as dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler";

const env = dotenv.config().parsed || {};

mongoose.connect(env.DATABASE_URL || "mongodb://localhost:27017/decks");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler);

app.use("/", DeckRouter);

// start the server
app.listen(env.PORT);
console.log("Server started! At http://localhost:" + env.PORT);
