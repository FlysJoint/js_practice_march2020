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

function hasMPostCode(person, extraParam) {

  if (extraParam !== undefined) throw new Error('too many arguments');
  else if (typeof person !== 'object') throw new Error('person must be an object');
  else if (Object.keys(person).includes('address') === false) throw new Error('Address property not found');
  else if (typeof person.address !== 'object') throw new Error('Address value not an object') // this line doesn't do what I hoped
  else if (Object.keys(person.address).includes('postCode') === false) throw new Error('PostCode property not found');
  else if (typeof person.address.postCode !== 'string') throw new Error('PostCode value not a string');  
  else if (person.address.postCode.length === 0) throw new Error('PostCode value is empty!');  

  function validatePostCode(){

  let pc = person.address.postCode.split(' ').join('');
  let postCodeValidated = false;
  // LN   NLL -correct formatting, could be Manchester
  // LLN  NLL -correct formatting, definitely not Manchester
  // LNN  NLL -correct formatting, could be Manchester
  // LLNN NLL -correct formatting, definitely not Manchester
  let pc1 = "";
  let pc2 = pc.substr(pc.length - 3, pc.length);
  let isALetter =  new RegExp(/[A-Z]/gi);
  let isANumber =  new RegExp(/[0-9]/g);

  //if (pc.length < 5 || pc.length > 7) throw new Error ('invalid postcode format'); // I know what I want to do but I'm being beaten by screen size. This is very unwieldy.

  switch (pc.length) {
    case 5:
      pc1 = pc.substr(0, 2);
      if (testChar(pc1[0], 'l') !== true || testChar(pc1[1], 'n') !== true) postCodeValidated = false;
      break;
    case 6:
      pc1 = pc.substr(0, 3);
      if (testChar(pc1[0], 'l') !== true || (testChar(pc1[1], 'n') !== true && testChar(pc1[1], 'l') !== true) || testChar(pc1[2], 'n') !== true) postCodeValidated = false;
      break;
    case 7:
      pc1 = pc.substr(0, 4)
      if (testChar(pc1[0], 'l') !== true || testChar(pc1[1], 'l') !== true || testChar(pc1[1], 'n') !== true || testChar(pc1[1], 'n') !== true) postCodeValidated = false;
      break;
    default:
      throw new Error ('invalid postcode format');
  }

function testChar(charToTest, testType) {

  let valid = false;

  switch (testType) {
    case 'n':
      if (isANumber.test(charToTest) === true) valid = true;
      isANumber =  new RegExp(/[0-9]/g);
      break;
    case 'l':
      if (isALetter.test(charToTest) === true) valid = true;
      isALetter =  new RegExp(/[A-Z]/gi);
      break;
    default:
      return 'testChar error';
  }
  return valid;
}

for (let i = 0; i < pc2.length;i ++) {
  if (testChar(pc2[i]) !== true) postCodeValidated = false;
}
  
}
//validatePostCode();

return person.address.postCode[0] === 'M';


}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
