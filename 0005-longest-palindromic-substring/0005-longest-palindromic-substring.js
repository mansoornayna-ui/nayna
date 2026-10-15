
var longestPalindrome = function(s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;

        // Odd-length palindrome
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        let odd = s.slice(left + 1, right);

        left = i;
        right = i + 1;

        // Even-length palindrome
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        let even = s.slice(left + 1, right);

        if (odd.length > result.length) {
            result = odd;
        }

        if (even.length > result.length) {
            result = even;
        }
    }

    return result;
};
