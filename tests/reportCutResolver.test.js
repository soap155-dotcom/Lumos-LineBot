const { resolveReports } = require("../src/services/reportCutResolver");

const text = `

お疲れ様です。

天満屋ポートプラザ
山下さん到着しました

最近暑いですね。

岡本退店します

`;

const reports = resolveReports(text);

console.log(JSON.stringify(reports, null, 2));