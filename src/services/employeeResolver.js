const employeeRepository = require("../repositories/employeeRepository");

/**
 * メッセージから社員を特定
 */
async function resolveEmployees(text) {

 const employees =
  await employeeRepository.getEmployees();

console.log("社員マスタ");
console.log(JSON.stringify(employees, null, 2));
  const result = [];

  employees.forEach(employee => {

    const hit = employee.aliases.some(alias =>
      text.includes(alias)
    );

    if (!hit) return;

    // 重複防止
    if (result.some(e => e["社員ID"] === employee["社員ID"])) {
      return;
    }

    result.push(employee);

  });

  return result;

}

module.exports = {
  resolveEmployees
};