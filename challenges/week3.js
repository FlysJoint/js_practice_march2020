function getSquares(nums, extraParam) {
  if (nums === undefined) throw new Error("nums is required");
  if (extraParam !== undefined) throw new Error('too many arguments');
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') throw new Error('array of numbers required');
  }

  let squares = nums.map(x => x * x);
return squares;
}

function camelCaseWords(words) {

let capitalised = [];
  
for (let i = 0; i < words.length; i++) {

  for (let j = 0; j < words[i].length; j++) {
    if (j === 0 && i !== 0) capitalised.push(words[i][j].toUpperCase());
    else capitalised.push(words[i][j].toLowerCase());
  }
}

return capitalised.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let subjects = 0;

  for (let i = 0; i < people.length; i++) {
    subjects += people[i].subjects.length;
  }
  
  return subjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let subjects = 0;

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) return true;
  }
  
  return false;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicates = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && duplicates.indexOf(arr1[i]) === -1) duplicates.push(arr1[i]);
    }
  }
  return duplicates.sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
