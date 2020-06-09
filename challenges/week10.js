/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = (n, extraParam) => {
  if (Number.isInteger(n) !== true) throw new Error("number n is required");
  if (extraParam !== undefined) throw new Error('too many parameters');

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return Math.abs(n).toString().split('').map(x => parseInt(x)).reduce(reducer);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step, extraParam) => {
  if (Number.isInteger(start) !== true) throw new Error("number start is required");
  if (Number.isInteger(end) !== true) throw new Error("number end is required");
  if (Number.isInteger(step) !== true && step !== undefined) throw new Error('step must be number if present');

  if (extraParam !== undefined) throw new Error('too many parameters');

  let arr = [];

  step = step || 1;

  if (start > end) {
    for (let i = start; i >= end; i = i - step) {
      arr.push(i);
    }
  }
  else {
    for (let i = start; i <= end; i = i + step) {
      arr.push(i);
    }
  }

  if(arr[arr.length - 1] !== end) throw new Error('impossible step amount used');
  
  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date, extraParam) => {
  if (typeof users !== 'object') throw new Error("object users is required");
  if (date === undefined) throw new Error("date is required");
  if (extraParam !== undefined) throw new Error('too many parameters');

  if (/^(((199|200|201)\d)|(2020))-((0[1-9])|(1[0-2]))-((0[1-9])|([12]\d)|(3[01]))$/.test(date) !== true) throw new Error('date is invalid format');

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let scrnLimit = 100; // to avoid magic numbers

  let sqEyes = [];

  for (let u = 0; u < users.length; u++) {

    if (typeof users[u].username !== 'string') throw new Error('string username required');
    if (Array.isArray(users[u].screenTime) !== true) throw new Error('array screenTime required');

    scrnMins = 0;

    for (let d = 0; d < users[u].screenTime.length; d++) {

      if (typeof users[u].screenTime[d]['date'] !== 'string') throw new Error('string date required'); 
      if (typeof users[u].screenTime[d]['usage'] !== 'object') throw new Error('object usage required'); 

      if (users[u].screenTime[d]['date'] === date) {

        let usageErrors = Object.values(users[u].screenTime[d]['usage']).filter(x => Number.isInteger(x) !== true)
        if (usageErrors.length > 0) throw new Error('usage values must be numbers');

        let scrnMins = Object.values(users[u].screenTime[d]['usage']).filter(x => Number.isInteger(x)).reduce(reducer);
        if (scrnMins > scrnLimit) sqEyes.push(users[u].username);
        break;
      }
    }
  }
  return sqEyes;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = (hexStr, extraParam) => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (extraParam !== undefined) throw new Error('too many parameters');
  if (/^#([\dA-F]){6}$/.test(hexStr) === false) throw new Error('invalid hex code'); // as the format was defined without mention of lowercase, lowercase is classed as invalid

  let hex = hexStr.split('');
  let rgb = [];

  for (let i = 1; i < hex.length; i++) {

    switch (hex[i]) {
      case 'A':
        rgb.push(10);
        break;
      case 'B':
        rgb.push(11);
        break;
      case 'C':
        rgb.push(12);
        break;
      case 'D':
        rgb.push(13);
        break;
      case 'E':
        rgb.push(14);
        break;
      case 'F':
        rgb.push(15);
        break;
      default:
        rgb.push(parseInt(hex[i]));
        break;
    }
  }
  return `rgb(${rgb[0] * 16 + rgb[1]},${rgb[2] * 16 + rgb[3]},${rgb[4] * 16 + rgb[5]})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = (board, extraParam) => {
  if (Array.isArray(board) !== true) throw new Error("array board is required");
  if (extraParam !== undefined) throw new Error('too many arguments');

  if (board.length !== 3) throw new Error('board array should have 3 elements');

  let noughts = 0;
  let crosses = 0;

  for (let i = 0; i < board.length; i++) {
    if (Array.isArray(board[i]) !== true) throw new Error('board elements must be arrays');
    if (board[i].length !== 3) throw new Error('board sub arrays must have 3 elements');

    for (let j = 0; j < 3; j++) {

      if (board[i][j] === "X") crosses++;
      else if (board[i][j] === "0") noughts++;
      else if (board[i][j] !== null) throw new Error('invalid board character');
    }
  }

  if (noughts > crosses + 1) throw new Error('Noughts has been cheating!');
  else if (crosses > noughts + 1) throw new Error('Crosses has been cheating!');

  let winner = '';

  if (board[0][0] + board[1][0] + board[2][0] === 'XXX' || board[0][0] + board[1][0] + board[2][0] === '000') winner += board[0][0]; // column 1 win
  if (board[0][1] + board[1][1] + board[2][1] === 'XXX' || board[0][1] + board[1][1] + board[2][1] === '000') winner += board[0][1]; // column 2 win
  if (board[0][2] + board[1][2] + board[2][2] === 'XXX' || board[0][2] + board[1][2] + board[2][2] === '000') winner += board[0][2]; // column 3 win

  if (board[0][0] + board[0][1] + board[0][2] === 'XXX' || board[0][0] + board[0][1] + board[0][2] === '000') winner += board[0][0]; // top row win
  if (board[1][0] + board[1][1] + board[1][2] === 'XXX' || board[1][0] + board[1][1] + board[1][2] === '000') winner += board[1][0]; // middle row win
  if (board[2][0] + board[2][1] + board[2][2] === 'XXX' || board[2][0] + board[2][1] + board[2][2] === '000') winner += board[2][0]; // bottom row win

  if (board[0][0] + board[1][1] + board[2][2] === 'XXX' || board[0][0] + board[1][1] + board[2][2] === '000') winner += board[1][1]; // top row win
  if (board[0][2] + board[1][1] + board[2][0] === 'XXX' || board[0][2] + board[1][1] + board[2][0] === '000') winner += board[1][1]; // middle row win

  if (winner.includes('X') && winner.includes('0')) throw new Error('invalid board: 2 winners');

  return winner.length === 0 ? null : winner;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
