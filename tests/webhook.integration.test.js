const { handleWebhook } = require("../src/services/lineService");

const body = {
  events: [
    {
      type: "message",
      timestamp: Date.now(),
      source: {
        userId: "U123456789",
        groupId: "C123456789"
      },
      message: {
        type: "text",
        text: `天満屋ポートプラザ
山下さん、珠紀さん
到着しました`
      }
    }
  ]
};

handleWebhook(body)
  .then(() => {
    console.log("テスト終了");
  })
  .catch(console.error);