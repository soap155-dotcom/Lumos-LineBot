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
async function process(message) {

    const reports = resolveReports(message.text);

    const records = [];

    for (const report of reports) {

        const employees = await resolveEmployees(report.text);
        const event = resolveEvent(report.text);
        const site = await resolveSite(report.text);

        const attendanceRecords = buildAttendance({

            employees,
            event,
            site

        }, message.timestamp);

        records.push(...attendanceRecords);

    }

    return records;

}

module.exports = {
    process
};
async function process(message) {

    const reports = resolveReports(message.text);

    console.log("reports:");
    console.log(reports);

    const records = [];

    for (const report of reports) {

        const employees = await resolveEmployees(report.text);

        console.log("employees:");
        console.log(employees);

        const event = resolveEvent(report.text);

        console.log("event:");
        console.log(event);

        const site = await resolveSite(report.text);

        console.log("site:");
        console.log(site);

        const attendanceRecords = buildAttendance({

            employees,
            event,
            site

        }, message.timestamp);

        console.log("attendanceRecords:");
        console.log(attendanceRecords);

        records.push(...attendanceRecords);

    }

    return records;

}