const { resolveEmployees } = require("./employeeResolver");

/**
 * メッセージ解析
 *
 * @param {Object} message
 * @returns {Object}
 */
function process(message) {

    const text = message.text;

    // 今後ここで分割する
    const reports = [
        {
            text
        }
    ];

    return reports.map(report => {

        const employees = resolveEmployees(report.text);

        return {
            text: report.text,
            employees,
            event: null,
            site: null
        };

    });

}

module.exports = {
    process
};