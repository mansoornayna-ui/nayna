
var reverse = function(x) {
    let rev = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = Math.trunc(x / 10);

        rev = rev * 10 + digit;

        if (rev < -2147483648 || rev > 2147483647) {
            return 0;
        }
    }

    return rev;
};
