/**
 * LINE Webhookイベントを取得
 *
 * @param {Object} body
 * @returns {Array}
 */
function parseEvents(body) {

  if (!body || !Array.isArray(body.events)) {
    return [];
  }

  return body.events;

}

module.exports = {
  parseEvents
};