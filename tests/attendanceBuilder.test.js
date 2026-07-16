const { buildAttendance } = require("../src/services/attendanceBuilder");

const records = buildAttendance({

    employees: [
        {
            name: "山下"
        },
        {
            name: "珠紀"
        }
    ],

    site: {
        code: "GEN001",
        name: "ドコモショップ大元店"
    },

    event: "START"

}, Date.now());

console.log(JSON.stringify(records, null, 2));