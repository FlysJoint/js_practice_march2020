/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = (arr, extraParam) => {
  if (arr === undefined) throw new Error("arr is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i]) === false) throw new Error('array elements must be numbers');
  }

  let multiple = arr.filter(num => num % 3 === 0 || num % 5 === 0);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return multiple.reduce(reducer);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = (str, extraParam) => {
  if (str === undefined) throw new Error("str is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  return str.length > 0 ? /^[CGTA]*$/g.test(str) : false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  // running it through isValidDNA first which will do many of the appropriate checks

  let compDNA = [];

  if (isValidDNA(str)) {
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case 'A':
          compDNA.push('T');
          break;
        case 'T':
          compDNA.push('A');
          break;
        case 'C':
          compDNA.push('G');
          break;
        case 'G':
          compDNA.push('C');
          break;
      }
    }
  }
  else throw new Error ('Invalid DNA string');
  return compDNA.join('');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = (n, extraParam) => {
  if (Number.isInteger(n) !== true) throw new Error("number n is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  for (let i = 2; i < Math.floor(n / 2); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill, extraParam) => {
  if (Number.isInteger(n) !== true) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  let matrix = [];

  for (let x = 0; x < n; x++) {

    matrix.push([]);

    for (let y = 0; y < n; y++) {

      matrix[x].push(fill);

    }
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day, extraParam) => {
  if (staff === undefined) throw new Error("staff is required");
  if (typeof day !== 'string') throw new Error("day is required");
  if (extraParam !== undefined) throw new Error('too many arguments');



  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (days.includes(day) !== true) throw new Error('invalid day');  

  let cover = 0;

  for (let i = 0; i < staff.length; i++) {
    if (typeof staff[i].name !== 'string') throw new Error('invalid staff name');
    if (Object.keys(staff[i]).includes('rota') !== true) throw new Error('rota key not present');
    if (Array.isArray(staff[i].rota) !== true) throw new Error('invalid rota');
    
    for (let j = 0; j < staff[i].rota.length; j++) {
      if (days.includes(staff[i].rota[j]) !== true) throw new Error('rota contains invalid day');
      if (staff[i].rota.indexOf(day) !== staff[i].rota.lastIndexOf(day)) throw new Error('duplicate day in rota');
      if (staff[i].rota[j] === day) cover++;
    }
  }

  const staffRequired = 3;

  return cover >= staffRequired ? true : false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
