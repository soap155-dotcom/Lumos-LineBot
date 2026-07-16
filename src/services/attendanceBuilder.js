/**
 * 勤怠レコード生成
 *
 * @param {Object} report
 * @param {number} timestamp
 * @returns {Array}
 */
function buildAttendance(report, timestamp) {

    const records = [];

    report.employees.forEach(employee => {

        records.push({

            employee,

            site: report.site,

            event: report.event,

            timestamp

        });

    });

    return records;

}

module.exports = {
    buildAttendance
};