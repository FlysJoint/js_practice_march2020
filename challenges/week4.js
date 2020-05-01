function findSmallNums(nums, extraParam) {
  if ((Array.isArray(nums) === false)) throw new Error("nums is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
 
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') throw new Error('nums must contain numbers only');
  }

  return nums.filter(x => x < 1);
}

function findNamesBeginningWith(names, char, extraParam) {
  if (Array.isArray(names) !== true) throw new Error("names is required");
  else if (typeof char !== 'string') throw new Error("char is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
  
  return names.filter(x => x.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(x => x.startsWith('to '));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x => Number.isInteger(x));
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(x => Number(Math.sqrt(x).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  let matches = [];
  let match = str;
  let regex = new RegExp(match,"gi");

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].match(regex)) matches.push(sentences[i]);
  }
  return matches;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(x => Math.max(...x));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
