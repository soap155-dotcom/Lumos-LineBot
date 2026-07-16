const { resolveEmployees } = require("../src/services/employeeResolver");

function test(title, text) {

    console.log("=================================");
    console.log(title);
    console.log("入力:", text);

    const result = resolveEmployees(text);

    console.log("結果:");

    result.forEach(employee => {
        console.log("-", employee.name);
    });

    console.log("");

}

test(
    "単独報告",
    "山下到着しました"
);

test(
    "複数人報告",
    "山下さん、珠紀さん到着しました"
);

test(
    "代理報告",
    `天満屋ポートプラザ
山下さん、珠紀さん、岡本
退店します`
);