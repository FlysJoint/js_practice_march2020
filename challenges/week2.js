function getFillings(sandwich, extraParam) {

//if (sandwich === undefined) throw new Error("ingredients is required");
  if (typeof sandwich !== 'object') throw new Error("Object argument required");
  if (extraParam !== undefined) throw new Error('Too many arguments');
  

  if (Object.keys(sandwich).includes('fillings') === true) {
    console.log('fillings');

    return sandwich.fillings;
  }
  else {

    console.log('no fillings');
    throw new Error('Fillings property not found');

  }


// Your code here!



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
