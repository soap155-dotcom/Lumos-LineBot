const lineService = require("../services/lineService");

console.log("lineService =", lineService);

async function receiveWebhook(req, res) {

  console.log("===== WEBHOOK受信 =====");
  console.log(JSON.stringify(req.body, null, 2));

  await lineService.handleWebhook(req.body);

  res.sendStatus(200);

}

module.exports = {
  receiveWebhook
};