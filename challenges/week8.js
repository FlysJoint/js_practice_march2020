const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n && i !== nums.length - 1) return nums[i + 1];
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let binary = {
    1: 0,
    0: 0
  }

  for (let i = 0; i < str.length; i++) {
    if(str[i] === '1') binary['1']++;
    else if (str[i] === '0') binary['0']++;
  }

  return binary;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  return parseInt(n.toString().split('').reverse().join(''));

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  let count = 0;

  for (let i = 0; i < arrs.length; i++) {

    for (let s = 0; s < arrs[i].length; s++) {
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
