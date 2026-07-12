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

    const hit = employee.aliases.some(alias => {

      return text.includes(alias);

    });

    if (hit) {

      result.push(employee.name);

    }

  });

  return result;

}

module.exports = {
  resolveEmployees
};