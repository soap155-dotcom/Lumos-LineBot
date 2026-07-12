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

async function handleWebhook(body) {

  const events = parseEvents(body);

  console.log("イベント数：" + events.length);

  for (const event of events) {

    const message = parseMessage(event);

    if (!message) {
      continue;
    }

    const employees = resolveEmployees(message.text);

    console.log("社員一覧");
    console.log(employees);

    console.log("===== MESSAGE =====");
    console.log(message);

    console.log("① sendAttendanceを呼びます");

    await sendAttendance({
      message,
      employees
    });

    console.log("② sendAttendanceが終わりました");

  }


}

module.exports = {
  handleWebhook
};