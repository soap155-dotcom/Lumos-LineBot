const {
  getEmployees
} = require("./masterService");

/**
 * メッセージから社員を特定
 *
 * @param {String} text
 * @returns {Array}
 */
function resolveEmployees(text) {

  const employees = getEmployees();

  // まだ判定はしない
  console.log("社員マスタ件数：" + employees.length);

  return [];

}

module.exports = {
  resolveEmployees
};