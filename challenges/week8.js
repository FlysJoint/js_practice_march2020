const findNextNumber = (nums, n, extraParam) => {
  if (Array.isArray(nums) !== true) throw new Error("array nums is required");
  if (Number.isInteger(n) !== true) throw new Error("integer n is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i]) !== true) throw new Error('nums elements must be integers');
    if (nums[i] === n && i !== nums.length - 1) return nums[i + 1];
  }
  return null;
};

const count1sand0s = (str, extraParam) => {
  if (typeof str !== 'string') throw new Error("string str is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  let binary = {
    1: 0,
    0: 0
  }

  for (let i = 0; i < str.length; i++) {
    if(str[i] === '1') binary['1']++;
    else if (str[i] === '0') binary['0']++;
    else throw new Error('str must be binary only');
  }

  return binary;
};

const reverseNumber = (n, extraParam) => {
  if (Number.isInteger(n) !== true) throw new Error("n is required");
  if (extraParam !== undefined) throw new Error('too many arguments');
  if (n < 0) throw new Error('n must be positive');

  return parseInt(n.toString().split('').reverse().join(''));

};

const sumArrays = (arrs, extraParam) => {
  if (Array.isArray(arrs) !== true) throw new Error("array arrs is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  let count = 0;

  for (let i = 0; i < arrs.length; i++) {

    if (Array.isArray(arrs[i]) !== true) throw new Error('arrs elements must be arrays');

    for (let s = 0; s < arrs[i].length; s++) {
      if (Number.isInteger(arrs[i][s]) !== true) throw new Error('sub array elements must be integers');
      count += arrs[i][s];
    }

  }
  return count;
};

const arrShift = arr => {

  if (arr.length >= 2) {
    let tempStart = arr.shift();
    let tempEnd = arr.pop();
    
    arr.push(tempStart);
    arr.unshift(tempEnd);
    return arr;
  }

  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let regex = new RegExp(searchTerm, 'gi');
  let possibleNeedles = Object.values(haystack);

  for (let i = 0; i < possibleNeedles.length; i++) {
    if (typeof possibleNeedles[i] === 'string' && regex.test(possibleNeedles[i]) === true) return true;
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  let frequencies = {};
  let regex = /[^a-z]/gi

  let answer = {};

  str = str.toLowerCase().replace(regex, ' ').split(' ');

  for (let i = 0; i < str.length; i++) {
    if (Object.keys(answer).includes(str[i]) === false && str[i].length > 0) {
      answer[str[i]] = 1;
    }
    else if (Object.keys(answer).includes(str[i]) === true) {
      answer[str[i]] += 1;
    }
  }
  return answer;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
