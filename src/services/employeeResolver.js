const {
  getEmployees
} = require("./masterService");

/**
 * メッセージから社員を特定
 */
function resolveEmployees(text) {

  const employees = getEmployees();

  const result = [];

  employees.forEach(employee => {

    const hit = employee.aliases.some(alias =>
      text.includes(alias)
    );

    if (!hit) return;

    // 重複防止
    if (result.some(e => e.name === employee.name)) {
      return;
    }

    result.push(employee);

  });

  return result;

}

module.exports = {
  resolveEmployees
};