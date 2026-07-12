const {
  handleWebhook
} = require("../services/lineService");

function receiveWebhook(req, res) {

  handleWebhook(req.body);

  res.sendStatus(200);

}

module.exports = {
  receiveWebhook
};