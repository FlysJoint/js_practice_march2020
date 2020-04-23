function getSquares(nums, extraParam) {
  if (nums === undefined) throw new Error("nums is required");
  if (extraParam !== undefined) throw new Error('too many arguments');
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') throw new Error('array of numbers required');
  }

  let squares = nums.map(x => x * x);
return squares;
}

function camelCaseWords(words, extraParam) {

  if (extraParam !== undefined) throw new Error('too many arguments');

  let capitalised = [];

  for (let i = 0; i < words.length; i++) {
      if (typeof words[i] !== 'string') throw new Error('words must be strings only');

      for (let j = 0; j < words[i].length; j++) {
        if (j === 0 && i !== 0) capitalised.push(words[i][j].toUpperCase());
        else capitalised.push(words[i][j].toLowerCase());
      }
  }
    if (capitalised.join('').search(/[^a-zA-Z]+/) === -1) return capitalised.join('');
    else throw new Error('Unexpected symbols in string');

  }

function getTotalSubjects(people, extraParam) {
  if (typeof people !== 'object') throw new Error("people is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');

  let sSubjects = 0;

  for (let i = 0; i < people.length; i++) {
    if (Array.isArray(people[i].subjects) === false) throw new Error('subjects not an array: ' + typeof people[i].subjects);
    for (let s = 0; s < people[i].subjects.length; s++) {
      if (typeof people[i].subjects[s] !== 'string' && people[i].subjects[s] !== null && people[i].subjects[s] !== undefined) throw new Error('subject element not a string');
    }
    sSubjects += people[i].subjects.length;
  }
  
  return sSubjects;
}

function checkIngredients(menu, ingredient, extraParam) {
  
  if (typeof menu !== 'object') throw new Error("menu is required");
  else if (extraParam !== undefined) throw new Error ('too many arguments');
  
  //if (!ingredient) throw new Error("ingredient is required");

  for (let i = 0; i < menu.length; i++) {
    if (Array.isArray(menu[i].ingredients) === false) throw new Error('ingredients is not an array');
    for (let j = 0; j < menu[i].ingredients.length; j++) {
      if (typeof menu[i].ingredients[j] !== 'string' && menu[i].ingredients[j] !== null && menu[i].ingredients[j] !== undefined) throw new Error('ingredients element not a string');
    }

    if (menu[i].ingredients.includes(ingredient)) return true;
  }
  
  return false;
}

function duplicateNumbers(arr1, arr2, extraParam) {


  if (Array.isArray(arr1) === false) throw new Error("array arr1 is required");
  else if (Array.isArray(arr2) === false) throw new Error("array arr2 is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');

  let duplicates = [];

  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== 'number') throw new Error('all elements must be numbers');
    for (let j = 0; j < arr2.length; j++) {
      if (typeof arr2[j] !== 'number') throw new Error('all elements must be numbers');
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
