const express = require("express");
const webhookRoute = require("./routes/webhook");

const app = express();

const PORT = process.env.PORT || 8080;

// JSONを受け取る
app.use(express.json());

// 動作確認
app.get("/", (req, res) => {
  res.send("Lumos LINE Bot is running.");
});

// Webhook
app.use("/webhook", webhookRoute);

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server started : ${PORT}`);
});