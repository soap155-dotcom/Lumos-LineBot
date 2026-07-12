const {
  parseEvents
} = require("../parsers/eventParser");

const {
  parseMessage
} = require("../parsers/messageParser");

function handleWebhook(body) {

  const events = parseEvents(body);

  console.log("イベント数：" + events.length);

  events.forEach(function(event) {

    const message = parseMessage(event);

    if (!message) {
      return;
    }

    console.log("===== MESSAGE =====");

    console.log(message);

  });

}

module.exports = {
  handleWebhook
};