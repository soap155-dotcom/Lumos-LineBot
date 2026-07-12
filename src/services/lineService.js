function handleWebhook(body) {

  console.log("===== LINE EVENT =====");
  console.log(JSON.stringify(body, null, 2));

}

module.exports = {
  handleWebhook
};