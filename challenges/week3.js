function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
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
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
