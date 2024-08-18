import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Cards from "./models/dbCards.js";

/* ------------------------------- App config ------------------------------- */

const app = express();
const PORT = process.env.PORT || 8080;
const connection_url =
	"mongodb+srv://petrit:pass123123@tinder.ahfc1.mongodb.net/tinderDB?retryWrites=true&w=majority";

/* ------------------------------- Middleware ------------------------------- */
app.use(express.json());
app.use(cors());

/* -------------------------------- DB config ------------------------------- */

mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

/* ------------------------------ API endpoints ----------------------------- */

app.get("/", (req, res) => {
	res.status(200).send("howdy");
});

app.post("/tinder/cards", (req, res) => {
	const dbCard = req.body;
	Cards.create(dbCard, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get("/tinder/cards", (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});
// Listener
app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});
