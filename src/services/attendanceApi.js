/**
 * 勤怠システムへ送信
 *
 * 今後Apps Script Web APIを呼び出す
 */
async function sendAttendance(data) {

  console.log("送信予定");

  console.log(JSON.stringify(data, null, 2));

}

module.exports = {
  sendAttendance
};