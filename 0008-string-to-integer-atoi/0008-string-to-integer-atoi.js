var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Ignore leading spaces
    while (s[i] === ' ') {
        i++;
    }

    // 2. Check sign
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // 3. Convert digits manually
    while (s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        result = result * 10 + digit;

        // 4. Handle 32-bit integer overflow
        if (sign * result >= INT_MAX) {
            return INT_MAX;
        }

        if (sign * result <= INT_MIN) {
            return INT_MIN;
        }

        i++;
    }

    return sign * result;
};