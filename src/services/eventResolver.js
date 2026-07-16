const { getRules } = require("./masterService");

/**
 * メッセージからイベント判定
 *
 * @param {string} text
 * @returns {string|null}
 */
function resolveEvent(text) {

    const rules = getRules();

    for (const rule of rules) {

        const hit = rule.keywords.some(keyword =>
            text.includes(keyword)
        );

        if (hit) {
            return rule.event;
        }

    }

    return null;

}

module.exports = {
    resolveEvent
};