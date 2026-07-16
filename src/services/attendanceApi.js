const config = require("../config/config");

async function sendAttendance(data) {

  console.log("★★ sendAttendanceに入りました ★★");

  try {

    const response = await fetch(config.attendanceApiUrl, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)

    });

    console.log("HTTPステータス：" + response.status);

    const text = await response.text();

    console.log(text);

  } catch (e) {

    console.error("送信エラー");
    console.error(e);

  }

}

module.exports = {
  sendAttendance
};