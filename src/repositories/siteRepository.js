const axios = require("axios");

const config = require("../config/config");

let cache = null;
let cacheTime = 0;

const CACHE_TIME = 5 * 60 * 1000;

/**
 * 現場マスタ取得
 */
async function getSites() {

  if (
    cache &&
    Date.now() - cacheTime < CACHE_TIME
  ) {
    return cache;
  }

  const url =
    config.attendanceApiUrl +
    "?type=sites";

  const response = await axios.get(url);

  cache = response.data
    .filter(site =>
      String(site["有効"]).toUpperCase() === "TRUE"
    )
    .map(site => ({

      ...site,

      aliases: String(site["LINE名称"] || "")
        .split(",")
        .map(alias => alias.trim())
        .filter(alias => alias)

    }));

  cacheTime = Date.now();

  return cache;

}

module.exports = {
  getSites
};