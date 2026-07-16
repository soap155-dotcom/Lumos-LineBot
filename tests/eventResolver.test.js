const { resolveEvent } = require("../src/services/eventResolver");

function test(text) {

    console.log("====================");
    console.log(text);
    console.log(resolveEvent(text));

}

test("山下到着しました");
test("岡本退店します");
test("宮地有給です");
test("山下欠勤です");
test("会議のため遅れます");
test("今日は雑談です");