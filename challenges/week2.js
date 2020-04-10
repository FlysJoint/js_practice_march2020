function getFillings(sandwich, extraParam) {

  if (typeof sandwich !== 'object') throw new Error("Object argument required");
  else if (extraParam !== undefined) throw new Error('Too many arguments');
  else if (Object.keys(sandwich).includes('fillings') === false) throw new Error('Fillings property not found');
  else if (Array.isArray(sandwich.fillings) !== true) throw new Error('Fillings property must be an array');
  else if (sandwich.fillings.length === 0) throw new Error('fillings array must not be empty');
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

function isFromManchester(person, extraParam) {
  if (extraParam !== undefined) throw new Error('too many arguments');
  else if (typeof person !== 'object' || Array.isArray(person)) throw new Error('non-array person object required');
  else if (Object.keys(person).includes('city') === false) throw new Error('City property not found');
  else if (typeof person.city !== 'string') throw new Error('City value not a string');  
  else if (person.city === '') throw new Error('City value is empty!');  
  else return person.city === 'Manchester';
}

function getBusNumbers(people, extraParam) {

  if (typeof people !== 'number') throw new Error("number of people is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
  else if (people < 0) throw new Error ('people value cant be negative!');

  else if (Number.isInteger(people) === false) throw new Error('people value must be whole number');
  // else if (Math.ceil(people) !== people) throw new Error('people value must be whole number');
  // else if (people.toString().includes('.')) throw new Error('people value must be whole number');
  // else if (people.toFixed() === people) throw new Error('people value must be whole number');
  // else if (people === 42) throw new Error('people value must be whole number');
  else  {
    const busLimit = 40; // use variable rather than magic number
    return people > 0 ? Math.ceil(people / busLimit) : 0;
  }
}

function countSheep(arr, extraParam) {
  if (typeof arr !== 'object') throw new Error("Array is required");
  else if (extraParam !== undefined) throw new Error('too many arguments');
  else {

    for (let i = 0; i < arr.length; i++) {
      if ( typeof arr[i] !== 'string') throw new Error ('Invalid array element: ' + arr[i]);
    }

    const numOfSheep = arr.filter(word => word === 'sheep');

    return numOfSheep.length;
  }
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
