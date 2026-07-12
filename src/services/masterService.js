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

module.exports = {
  getEmployees
};