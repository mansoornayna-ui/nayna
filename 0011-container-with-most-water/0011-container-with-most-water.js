
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
