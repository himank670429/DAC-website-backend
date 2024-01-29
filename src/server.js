const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

// middlewares
app.use(
	cors(
		process.env.MODE === "development"
			? null
			: {
					origin: ["https://dataanalyticsclub.onrender.com"],
			  }
	)
);

app.use(require("./middleware/auth"));

const { team, events, gallery } = require("./controller/controller"); 

// controllers
app.get("/api/team", team);
app.get("/api/gallery", gallery);
app.get("/api/events", events);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
