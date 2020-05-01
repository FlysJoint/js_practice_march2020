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

function findVerbs(words, extraParam) {
  if (Array.isArray(words) !== true) throw new Error("words is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');

  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') throw new Error('words must contain strings only');
  }

  return words.filter(x => x.startsWith('to '));
}

function getIntegers(nums, extraParam) {
  if ((Array.isArray(nums) === false)) throw new Error("nums is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
 
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') throw new Error('nums must contain numbers only');
  }

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

function getSquareRoots(nums, extraParam) {
  if ((Array.isArray(nums) === false)) throw new Error("nums is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
 
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') throw new Error('nums must contain numbers only');
  }

  return nums.map(x => Number(Math.sqrt(x).toFixed(2)));
}

function findSentencesContaining(sentences, str, extraParam) {
  if (Array.isArray(sentences) !== true) throw new Error("sentences is required");
  else if (typeof str !== 'string') throw new Error("str is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');


  let matches = [];
  let match = str;
  let regex = new RegExp(match,"gi");

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].match(regex)) matches.push(sentences[i]);
  }
  return matches;
}

function getLongestSides(triangles, extraParam) {
  if ((Array.isArray(triangles) === false)) throw new Error("triangles is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
 
  for (let i = 0; i < triangles.length; i++) {
    if (Array.isArray(triangles[i]) === false) throw new Error('triangles must contain arrays only');

    for (let j = 0; j < triangles[i].length; j++) {
      if (Number.isInteger(triangles[i][j]) === false) throw new Error('triangles arrays must contain positive numbers only');
      else if (triangles[i][j] <= 0) throw new Error('triangles arrays must contain positive numbers only');
    }
  }

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
