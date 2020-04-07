function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!

// do pertinent error messages

  return sandwich.fillings;

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
