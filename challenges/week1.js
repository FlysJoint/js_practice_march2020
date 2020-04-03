function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  let output = '';

  for (let i = 0; i < word.length; i++) {
    i === 0 ? output += word[0].toUpperCase() : output += word[i];
  }
  return output;
}

function generateInitials(firstName, lastName) {
  let middle = '.';

  if (firstName === undefined) throw new Error("firstName is required"); //don't throw an error, just update the error msg because capitalize() will take care of throwing the error?
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  const connectors = ['van ', 'VAN ', 'Van', 'de ', 'DE ', 'De ', 'von ', 'VON ', 'Von']; // add others as they occur // drupal.org/project/biblio/issues/504530
  
  connectors.forEach(element => { // to find dutch/french/german-style connectors
    if (lastName.includes(element)) {
      middle = element[0];
      lastName = lastName.substring(element.length);
    }
  });

  for (let i = 0; i < firstName.length; i++) { // to find invalid chars
    let together = firstName.trim() + lastName.trim();
  
    if (together.charCodeAt(i) < 45 ||
      (together.charCodeAt(i) > 45 && together.charCodeAt(i) < 65) || 
      (together.charCodeAt(i) > 90 && together.charCodeAt(i) < 97) || 
      (together.charCodeAt(i) > 122 && together.charCodeAt(i) < 192) ||
      together.charCodeAt(i) === 215 || together.charCodeAt(i) === 247)
    {
      throw new Error('no symbols except hyphens please: ' + together.charCodeAt(i));
    }
  }

  if (lastName.indexOf('-') > 0 && lastName.indexOf('-') === lastName.lastIndexOf('-')) {// this is a bit fragile because how to check it's a bona fide double barrel versus a hyphen within strings?
/*  no other symbols besides hyphen
    only one hyphen (not true, triple barrels exist)
    string before hyphen and string after
    whitespace allowed between end of first barrel and hyphen, and hypen and start of second barrel
    2nd barrel starts at index of '-' + 1 */

    return `${capitalize(firstName[0])}${capitalize(lastName[0])}-${capitalize(lastName[lastName.indexOf('-') + 1])}`;
  }

  return `${capitalize(firstName[0])}${middle.toLowerCase()}${capitalize(lastName[0])}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined || vatRate < 0) throw new Error("non-negative vatRate is required");
  // Add your code here!
  if (typeof originalPrice === 'number' && typeof vatRate === 'number') {
    return Math.round(originalPrice * (vatRate + 100)) / 100;
  }
  else {
    throw new Error('input must be numbers');
  }
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return Math.round(originalPrice * (100 - reduction)) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
