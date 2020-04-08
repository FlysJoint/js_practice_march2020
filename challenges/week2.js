function getFillings(sandwich, extraParam) {

  if (typeof sandwich !== 'object') throw new Error("Object argument required");
  if (extraParam !== undefined) throw new Error('Too many arguments');

  if (Object.keys(sandwich).includes('fillings') === false) {
    throw new Error('Fillings property not found');
  }
  else if (Array.isArray(sandwich.fillings) !== true) {
    throw new Error('Fillings property must be an array');
  }
  else if (sandwich.fillings.length === 0) {
    throw new Error('fillings array must not be empty');
  }
  else {

    let stringScore = 0;

    for (let i = 0; i < sandwich.fillings.length; i++) {
      if (typeof sandwich.fillings[i] === 'string') { // so undefined is ok so long as there's at least one string too
        stringScore += 2;
      }
      else if (sandwich.fillings[i] === undefined) {
        stringScore++;
      }
      else { // if this is triggered it needs to ensure stringScore will not finish above 0 no matter the array config
        stringScore = -1;
        break;
      }
    }

    if (stringScore <= sandwich.fillings.length) throw new Error('fillings must be strings'); 

    return sandwich.fillings;
  }
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  //do pertinent error messages

  return person.city === 'Manchester';
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

  //do pertinent error messages
  const busLimit = 40; // use variable rather than magic number
  return Math.ceil(people / busLimit);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!

  // do pertinent error messages

  const numOfSheep = arr.filter(word => word === 'sheep');

  return numOfSheep.length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!

  //do pertinent error messages

  return person.address.postCode.startsWith('M') && person.address.postCode.length === 7; // if this not strong enough, check 2nd char is a number
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
