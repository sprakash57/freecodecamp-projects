/**
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

/**
 * @param {string} str
 */
function palindrome(str) {
    //If string is empty or having only one character then return true.
    if (str.length < 2) return true;

    //Remove everything apart from alphanumerics then convet the string to lowercase.
    const newStr = str.replace(/[^A-Z0-9]+/gi, "").toLowerCase();

    //Reverse the string.
    const reversed = [...newStr].reverse().join("");

    return reversed === newStr;
}