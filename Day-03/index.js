const express = require("express");
const app = express();

app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: " API is working 🚀" });
});

app.post("/data", (req, res) => {
  res.json({
    status: "success",
    received: req.body
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
