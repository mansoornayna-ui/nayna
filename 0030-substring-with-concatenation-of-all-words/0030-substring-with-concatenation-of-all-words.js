var findSubstring = function(s, words) {
    if (!s.length || !words.length) return [];

    let wordLen = words[0].length;
    let totalLen = wordLen * words.length;

    let wordMap = new Map();

    for (let word of words) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }

    let result = [];

    for (let i = 0; i <= s.length - totalLen; i++) {
        let seen = new Map();
        let j = 0;

        while (j < words.length) {
            let word = s.substring(
                i + j * wordLen,
                i + (j + 1) * wordLen
            );

            if (!wordMap.has(word)) {
                break;
            }

            seen.set(word, (seen.get(word) || 0) + 1);

            if (seen.get(word) > wordMap.get(word)) {
                break;
            }

            j++;
        }

        if (j === words.length) {
            result.push(i);
        }
    }

    return result;
};