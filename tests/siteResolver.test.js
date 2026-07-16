const { resolveSite } = require("../src/services/siteResolver");

function test(text) {

    console.log("====================");
    console.log(text);
    console.log(resolveSite(text));

}

test("大元到着しました");
test("天満屋ポートプラザ 山下到着");
test("イオン倉敷退店");
test("今日は休みです");