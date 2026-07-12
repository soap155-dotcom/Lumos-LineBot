const lineService = require("../services/lineService");

console.log("lineService =", lineService);

async function receiveWebhook(req, res) {

  await lineService.handleWebhook(req.body);

  res.sendStatus(200);

}

module.exports = {
  receiveWebhook
};