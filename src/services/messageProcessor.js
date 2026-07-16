const { resolveReports } = require("./reportCutResolver");
const { resolveEmployees } = require("./employeeResolver");
const { resolveEvent } = require("./eventResolver");
const { resolveSite } = require("./siteResolver");
const { buildAttendance } = require("./attendanceBuilder");

/**
 * メッセージ解析
 *
 * @param {Object} message
 * @returns {Array}
 */
function process(message) {

    const reports = resolveReports(message.text);

    const records = [];

    reports.forEach(report => {

        const employees = resolveEmployees(report.text);
        const event = resolveEvent(report.text);
        const site = resolveSite(report.text);

        const attendanceRecords = buildAttendance({

            employees,
            event,
            site

        }, message.timestamp);

        records.push(...attendanceRecords);

    });

    return records;

}

module.exports = {
    process
};