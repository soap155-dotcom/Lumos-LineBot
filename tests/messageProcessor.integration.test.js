const { process } = require("../src/services/messageProcessor");

const records = process({

    text: `天満屋ポートプラザ
山下さん、珠紀さん
到着しました`,

    timestamp: Date.now()

});

console.log(JSON.stringify(records, null, 2));