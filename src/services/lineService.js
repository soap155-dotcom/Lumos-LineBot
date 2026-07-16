const {
  parseEvents
} = require("../parsers/eventParser");

const {
  parseMessage
} = require("../parsers/messageParser");



const {
  sendAttendance
} = require("./attendanceApi");

const {
  process
} = require("./messageProcessor");

async function handleWebhook(body) {

  const events = parseEvents(body);

  console.log("イベント数：" + events.length);

  for (const event of events) {

    const message = parseMessage(event);

    if (!message) {
      continue;
    }

    const records = process(message);
    
    console.log("===== RECORDS =====");
    console.log(JSON.stringify(records, null, 2));
    
    for (const record of records) {
      
      console.log("① sendAttendanceを呼びます");
      
      await sendAttendance(record);
      
      console.log("② sendAttendanceが終わりました");
    
    }
   

  }


}

module.exports = {
  handleWebhook
};