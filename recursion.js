/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if (nums.length === idx) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, longestWord=0) {
  if (words.length === i) return longestWord;
  longestWord = Math.max(words[i].length, longestWord);
  return longest(words, i + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr = "") {
  if (i === str.length) return newStr;
  if (i % 2 === 0){
    newStr += str[i];
  } 
  return everyOther(str, i + 1, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let leftIdx = i;
  let rightIdx = str.length - i - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[i] !== str[rightIdx]) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, reverseStr = "") {
  if (i < 0) return reverseStr;
  reverseStr += str[i];
  return revString(str, i - 1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strArr = []) {
  for (let key in obj){
    if (typeof obj[key] === "string") strArr.push(obj[key]);
    if (typeof obj[key] === "object") strArr.push(...gatherStrings(obj[key]))
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if (left > right) return -1;
  let mid = Math.floor((left + right)/2);
  if (arr[mid] === val) return mid;
  if (arr[mid] < val){
    return binarySearch(arr, val, mid + 1, right);
  } else {
    return binarySearch(arr, val, left, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
