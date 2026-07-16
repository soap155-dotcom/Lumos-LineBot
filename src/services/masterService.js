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
 *
 * ※ 今後Google Sheetsから取得する
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

/**
 * 現場マスタ取得
 *
 * ※ 今後Google Sheetsから取得する
 */
function getSites() {

    return [

        {
            code: "GEN001",
            name: "ドコモショップ大元店",
            aliases: [
                "大元",
                "ドコモショップ大元",
                "大元店"
            ]
        },

        {
            code: "GEN002",
            name: "天満屋ポートプラザ",
            aliases: [
                "ポートプラザ",
                "天満屋ポートプラザ"
            ]
        },

        {
            code: "GEN003",
            name: "ドコモショップイオン倉敷",
            aliases: [
                "イオン倉敷",
                "ドコモショップイオン倉敷"
            ]
        }

    ];

}

module.exports = {
    getEmployees,
    getSites,
    getRules
};