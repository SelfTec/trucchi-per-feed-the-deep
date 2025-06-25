/**
 * SelftecArray - Basic Array Utilities
 * Author: Selftec
 * License: Custom
 */

const SelftecArray = {
    /**
     * Removes duplicate values from an array.
     * @param {Array} arr - The array to process.
     * @returns {Array} - New array with unique values.
     */
    unique(arr) {
        if (!Array.isArray(arr)) {
            console.error('[SelftecArray] Invalid input.');
            return [];
        }
        return [...new Set(arr)];
    },

    /**
     * Returns the intersection of two arrays.
     * @param {Array} arr1 - First array.
     * @param {Array} arr2 - Second array.
     * @returns {Array} - Array of common elements.
     */
    intersection(arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
            console.error('[SelftecArray] Invalid inputs.');
            return [];
        }
        return arr1.filter(value => arr2.includes(value));
    }
};

// Example usage:
// console.log(SelftecArray.unique([1, 2, 2, 3, 3, 3])); // Output: [1, 2, 3]
// console.log(SelftecArray.intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

module.exports = SelftecArray;
