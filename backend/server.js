const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/tradelink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// Model Import
const Investor = require("./models/Investor");

// Routes
app.post("/api/investor/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const investor = new Investor({ name, email, password });
    await investor.save();
    res.json({ message: "Investor registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error registering investor" });
  }
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));