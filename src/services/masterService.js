/**
 * 社員マスタ取得
 *
 * ※ 今後Google Sheetsから取得する
 */
function getEmployees() {

  return [

    {
      name: "岡本",
      aliases: ["岡本"]
    },

    {
      name: "宮地",
      aliases: ["宮地"]
    },

    {
      name: "山下",
      aliases: ["山下"]
    },

    {
      name: "珠紀",
      aliases: ["珠紀"]
    }

  ];

}

/**
 * LINE解析ルール取得
 */
function getRules() {

  return [

    {
      event: "START",
      keywords: [
        "到着",
        "入店",
        "到着しました",
        "到着しております"
      ]
    },

    {
      event: "END",
      keywords: [
        "退店",
        "退勤"
      ]
    },

    {
      event: "PAID",
      keywords: [
        "有給"
      ]
    },

    {
      event: "ABSENCE",
      keywords: [
        "欠勤"
      ]
    },

    {
      event: "LATE",
      keywords: [
        "遅刻",
        "遅れます"
      ]
    },

    {
      event: "EARLY",
      keywords: [
        "早退"
      ]
    }

  ];

}

module.exports = {
  getRules
};
