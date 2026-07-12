const config = require("../config/config");

console.log(config);

async function sendAttendance(data) {

  console.log("★★ sendAttendanceに入りました ★★");

  if (!config.attendanceApiUrl) {

    console.log("ATTENDANCE_API_URL 未設定");

    console.log(JSON.stringify(data, null, 2));

    return;

  }

  console.log("送信先：" + config.attendanceApiUrl);

}

module.exports = {
  sendAttendance
};