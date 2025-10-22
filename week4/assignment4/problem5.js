function reverseArray(arr) {
    // Return a new array with elements in reverse order
    // Don't use the built-in reverse() method!
    // Don't modify the original array
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

function removeDuplicates(arr) {
    // Return a new array with duplicates removed
    // Maintain original order of first occurrence
    const seen = new Set();
    const result = [];
    for (let item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }
    return result;
}

function rotateArray(arr, positions) {
    // Rotate array to the right by 'positions'
    // Handle positions larger than array length
    if (arr.length === 0) return [];
    const len = arr.length;
    const shift = positions % len;
    if (shift === 0) return [...arr];
    return arr.slice(-shift).concat(arr.slice(0, len - shift));
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values
    const unique = Array.from(new Set(numbers));
    if (unique.length < 2) return null;
    unique.sort((a, b) => b - a);
    return unique[1];
}