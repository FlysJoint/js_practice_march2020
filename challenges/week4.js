function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(x => x < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
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
  return 0;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  console.log(nums.map(x => Math.sqrt(x).toFixed(2)));
  return nums.map(x => Math.sqrt(x).toFixed(2));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
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
