const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// JSONを受け取る
app.use(express.json());

// 動作確認
app.get("/", (req, res) => {
  res.send("Lumos LINE Bot is running.");
});

// Webhook
app.post("/webhook", (req, res) => {

  console.log("========== WEBHOOK ==========");
  console.log(req.body);
  console.log("=============================");

  res.sendStatus(200);

});

app.listen(PORT, () => {
  console.log(`Server started : ${PORT}`);
});