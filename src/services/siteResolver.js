const siteRepository = require("../repositories/siteRepository");

/**
 * メッセージから現場判定
 *
 * @param {string} text
 * @returns {Object|null}
 */
async function resolveSite(text) {

  const sites =
  await siteRepository.getSites();

console.log("現場マスタ");
console.log(JSON.stringify(sites, null, 2));

  for (const site of sites) {

    const hit = site.aliases.some(alias =>
      text.includes(alias)
    );

    if (hit) {
      return site;
    }

  }

  return null;

}

module.exports = {
  resolveSite
};