var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    let map = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    let result = [""];

    for (let digit of digits) {
        let newResult = [];

        for (let combination of result) {
            for (let letter of map[digit]) {
                newResult.push(combination + letter);
            }
        }

        result = newResult;
    }

    return result;
};