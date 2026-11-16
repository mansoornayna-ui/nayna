var divide = function(dividend, divisor) {
    let a = BigInt(Math.abs(dividend));
    let b = BigInt(Math.abs(divisor));

    let quotient = 0n;

    while (a >= b) {
        let temp = b;
        let multiple = 1n;

        while (a >= (temp << 1n)) {
            temp = temp << 1n;
            multiple = multiple << 1n;
        }

        a = a - temp;
        quotient = quotient + multiple;
    }

    if ((dividend < 0) !== (divisor < 0)) {
        quotient = -quotient;
    }

    const MAX = 2147483647n;
    const MIN = -2147483648n;

    if (quotient > MAX) return 2147483647;
    if (quotient < MIN) return -2147483648;

    return Number(quotient);
};