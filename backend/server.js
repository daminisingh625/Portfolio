// backend/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userAuth = require("./routes/userAuth")

const app = express();
app.use(express.json());
app.use(cors());

app.use(cors({ origin: "http://localhost:5173" }));
// MongoDB Connection
mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/portfolio")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  name: String,
  role: String,
  about: String,
  skills: [String],
  projects: [{ title: String, description: String, link: String }],
});
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

// API Routes
app.get("/api/portfolio", async (req, res) => {
  const data = await Portfolio.findOne();
  res.json(data);
});

app.post("/api/portfolio", async (req, res) => {
  const newData = new Portfolio(req.body);
  await newData.save();
  res.json({ message: "Portfolio saved!" });
});

app.use("/admin", userAuth);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

