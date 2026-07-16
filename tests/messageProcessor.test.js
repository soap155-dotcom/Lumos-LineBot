const { process } = require("../src/services/messageProcessor");

const result = process({

    text: `天満屋ポートプラザ
山下さん、珠紀さん
到着しました`

});

console.log(JSON.stringify(result, null, 2));