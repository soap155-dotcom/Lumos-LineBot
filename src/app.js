const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Lumos LINE Bot is running.");
});

app.listen(PORT, () => {
  console.log(`Server started : ${PORT}`);
});