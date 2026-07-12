const {
  parseEvents
} = require("../parsers/eventParser");

function handleWebhook(body) {

  const events = parseEvents(body);

  console.log("イベント数：" + events.length);

  events.forEach(function(event, index) {

    console.log("----- Event " + (index + 1) + " -----");
    console.log(JSON.stringify(event, null, 2));

  });

}

module.exports = {
  handleWebhook
};