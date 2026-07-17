const lineService = require("../services/lineService");

console.log("lineService =", lineService);

async function receiveWebhook(req, res) {

  try {

    console.log("===== WEBHOOK受信 =====");
    console.log(JSON.stringify(req.body, null, 2));

    await lineService.handleWebhook(req.body);

    res.sendStatus(200);

  } catch (err) {

    console.error(err);

    res.sendStatus(500);

  }

}

module.exports = {
  receiveWebhook
};