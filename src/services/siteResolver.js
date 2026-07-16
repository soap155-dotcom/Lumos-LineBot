const { getSites } = require("./masterService");

/**
 * メッセージから現場判定
 *
 * @param {string} text
 * @returns {Object|null}
 */
function resolveSite(text) {

    const sites = getSites();

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