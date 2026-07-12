const {
  parseEvents
} = require("../parsers/eventParser");

const {
  parseMessage
} = require("../parsers/messageParser");

const {
  resolveEmployees
} = require("./employeeResolver");

const {
  sendAttendance
} = require("./attendanceApi");

function handleWebhook(body) {

  const events = parseEvents(body);

  console.log("イベント数：" + events.length);

  events.forEach(function(event) {

    const message = parseMessage(event);

    if (!message) {
      return;
    }

    const employees = resolveEmployees(message.text);

    console.log("社員一覧");
    console.log(employees);

    console.log("===== MESSAGE =====");
    console.log(message);

  });

}

module.exports = {
  handleWebhook
};