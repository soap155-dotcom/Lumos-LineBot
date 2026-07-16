/**
 * 勤怠報告候補を抽出
 *
 * @param {string} text
 * @returns {Array<{text: string}>}
 */
function resolveReports(text) {

    const reports = [];

    const blocks = text
        .split(/\n\s*\n/)
        .map(block => block.trim())
        .filter(Boolean);

    blocks.forEach(block => {

        // 勤怠っぽいキーワードが無ければ無視
        if (!isAttendanceReport(block)) {
            return;
        }

        reports.push({
            text: block
        });

    });

    return reports;

}

/**
 * 勤怠報告判定
 *
 * 今後LINE解析ルールマスタへ移行予定
 */
function isAttendanceReport(text) {

    const keywords = [
        "到着",
        "入店",
        "退店",
        "出勤",
        "退勤",
        "有給",
        "欠勤",
        "遅刻",
        "早退"
    ];

    return keywords.some(keyword => text.includes(keyword));

}

module.exports = {
    resolveReports
};