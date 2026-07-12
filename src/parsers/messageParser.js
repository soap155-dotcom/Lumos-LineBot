/**
 * LINEイベントから必要情報を取得
 *
 * @param {Object} event
 * @returns {Object|null}
 */
function parseMessage(event) {

  // メッセージイベント以外は無視
  if (event.type !== "message") {
    return null;
  }

  // テキスト以外は無視
  if (event.message.type !== "text") {
    return null;
  }

  return {

    text: event.message.text,

    userId: event.source.userId || "",

    groupId: event.source.groupId || "",

    timestamp: event.timestamp

  };

}

module.exports = {
  parseMessage
};