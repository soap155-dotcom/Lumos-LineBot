const axios = require("axios");

const config = require("../config/config");

let cache = null;
let cacheTime = 0;

const CACHE_TIME = 5 * 60 * 1000; // 5分

/**
 * 社員マスタ取得
 */
async function getEmployees() {

  if (
    cache &&
    Date.now() - cacheTime < CACHE_TIME
  ) {
    return cache;
  }

  const url =
    config.attendanceApiUrl +
    "?type=employees";

  const response = await axios.get(url);

  cache = response.data
    .filter(employee => {

      // 取込対象のみ
      return String(employee["取込対象"]).toUpperCase() === "TRUE";

    })
    .map(employee => ({

      ...employee,

      aliases: String(employee["LINE名称"] || "")
        .split(",")
        .map(alias => alias.trim())
        .filter(alias => alias)

    }));

  cacheTime = Date.now();

  return cache;

}

module.exports = {
  getEmployees
};