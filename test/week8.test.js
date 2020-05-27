const {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
} = require("../challenges/week8");

describe("findNextNumber", () => {

  test("throws if no parameters", () => {
    expect(() => findNextNumber()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, 5)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, 'five')).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, true)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, null)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, [3, 4])).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, {number: 5})).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7, undefined)).not.toThrow();
  });

  test("throws if nums not an array", () => {
    expect(() => findNextNumber(12, 7)).toThrow();
    expect(() => findNextNumber('five', 7)).toThrow();
    expect(() => findNextNumber(false, 7)).toThrow();
    expect(() => findNextNumber(null, 7)).toThrow();
    expect(() => findNextNumber({array: [6, 7, 9]}, 7)).toThrow();
    expect(() => findNextNumber(undefined, 7)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7)).not.toThrow();
  });

  test("throws if nums elements not integers", () => {
    expect(() => findNextNumber([5, 3, [5, 7], 8, 1, 10], 7)).toThrow();
    expect(() => findNextNumber([5, 3, 'five', 8, 1, 10], 7)).toThrow();
    expect(() => findNextNumber([5, 3, false, 8, 1, 10], 7)).toThrow();
    expect(() => findNextNumber([5, 3, null, 8, 1, 10], 7)).toThrow();
    expect(() => findNextNumber([5, 3, {array: [6, 7, 9]}, 8, 1, 10], 7)).toThrow();
    expect(() => findNextNumber([5, 3, undefined, 8, 1, 10], 7)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7)).not.toThrow();
  });

  test("throws if n not a number", () => {
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], [7])).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], '5')).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], true)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], null)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], {array: [6, 7, 9]})).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10],undefined)).toThrow();
    expect(() => findNextNumber([5, 3, 7, 8, 1, 10], 7)).not.toThrow();
  });

  test("returns the next number after the given number in the array", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 1)).toBe(10);
    expect(findNextNumber([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
    expect(findNextNumber([5, 3, -7, 8, 1, 10], -7)).toBe(8);
    expect(findNextNumber([5, 3, 7, 0, 1, 10], 0)).toBe(1);
    expect(findNextNumber([5, 3, 7, 1, 1, 10], 1)).toBe(1);
  });

  test("if the number is not found in the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  });

  test("if the number is found more than once, returns the number after the first instance", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
    expect(findNextNumber([5, 3, 7, 1, 1, 10], 1)).toBe(1);
  });

  test("if the number is found in the final index position of the array, returns null", () => {
    expect(findNextNumber([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  });
});

describe("count1sand0s", () => {

  test("throws if no parameters", () => {
    expect(() => count1sand0s()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => count1sand0s("11000", "11000")).toThrow();
    expect(() => count1sand0s("11000", 11000)).toThrow();
    expect(() => count1sand0s("11000", null)).toThrow();
    expect(() => count1sand0s("11000", true)).toThrow();
    expect(() => count1sand0s("11000", ['110', '0011'])).toThrow();
    expect(() => count1sand0s("11000", {bin: "11000"})).toThrow();
    expect(() => count1sand0s("11000", undefined)).not.toThrow();
  });

  test("throws if str not a string", () => {
    expect(() => count1sand0s(11000)).toThrow();
    expect(() => count1sand0s(null)).toThrow();
    expect(() => count1sand0s(true)).toThrow();
    expect(() => count1sand0s(['110', '011'])).toThrow();
    expect(() => count1sand0s({bin: '1101'})).toThrow();
    expect(() => count1sand0s(undefined)).toThrow();
    expect(() => count1sand0s("11000")).not.toThrow();
  });

  test("throws if str not exclusively 1s or 0s", () => {
    expect(() => count1sand0s("11020")).toThrow();
    expect(() => count1sand0s("110l0")).toThrow();
    expect(() => count1sand0s("110*0")).toThrow();
    expect(() => count1sand0s("110 0")).toThrow();
    expect(() => count1sand0s("11000")).not.toThrow();
  });

  test("returns an object with the count of 1s and 0s in a string", () => {

    expect(count1sand0s("")).toEqual({
      1: 0,
      0: 0
    });

    expect(count1sand0s("11000")).toEqual({
      1: 2,
      0: 3
    });

    expect(count1sand0s("0101010111")).toEqual({
      1: 6,
      0: 4
    });

    expect(count1sand0s("1111111")).toEqual({
      1: 7,
      0: 0
    });

    expect(count1sand0s("0111")).toEqual({
      1: 3,
      0: 1
    });
  });
});

describe("reverseNumber", () => {

  test("throws if no parameters", () => {
    expect(() => reverseNumber()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => reverseNumber(12345, 56)).toThrow();
    expect(() => reverseNumber(12345, 'five')).toThrow();
    expect(() => reverseNumber(12345, null)).toThrow();
    expect(() => reverseNumber(12345, true)).toThrow();
    expect(() => reverseNumber(12345, {num: 56})).toThrow();
    expect(() => reverseNumber(12345, [5, 6])).toThrow();
    expect(() => reverseNumber(12345, undefined)).not.toThrow();
  });

  test("throws if n not a number", () => {
    expect(() => reverseNumber([123, 45])).toThrow();
    expect(() => reverseNumber('five')).toThrow();
    expect(() => reverseNumber(null)).toThrow();
    expect(() => reverseNumber(true)).toThrow();
    expect(() => reverseNumber({num: 56})).toThrow();
    expect(() => reverseNumber(undefined)).toThrow();
    expect(() => reverseNumber(12345)).not.toThrow();
  });

// are negatives allowed? client feedback required
  test("throws if n is negative", () => {
    expect(() => reverseNumber(-5)).toThrow();
    expect(() => reverseNumber(-124)).toThrow();
    expect(() => reverseNumber(-100)).toThrow();
    expect(() => reverseNumber(0)).not.toThrow();
  });

  test("reverses the digits of a number", () => {
    expect(reverseNumber(5)).toBe(5);
    expect(reverseNumber(104)).toBe(401);
    expect(reverseNumber(12345)).toBe(54321);
    expect(reverseNumber(100)).toBe(1); // No leading 0 necessary // so assuming only integers allowed
  });
});

describe("sumArrays", () => {

  test("throws if no parameters", () => {
    expect(() => sumArrays()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], [[1, 2, 3], [6, 3, 1]])).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], {array: [123]})).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], true)).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], null)).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], '6, 9, 4')).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], 54)).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]], undefined)).not.toThrow();
  });

  test("throws if not array", () => {
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]])).not.toThrow();
    expect(() => sumArrays({array: [123]})).toThrow();
    expect(() => sumArrays(true)).toThrow();
    expect(() => sumArrays(null)).toThrow();
    expect(() => sumArrays('6, 9, 4')).toThrow();
    expect(() => sumArrays(54)).toThrow();
    expect(() => sumArrays(undefined)).toThrow();
  });

  test("throws if array elements arent arrays", () => {
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]])).not.toThrow();
    expect(() => sumArrays([[1, 2, 3], {array: [123]}])).toThrow();
    expect(() => sumArrays([[1, 2, 3], true])).toThrow();
    expect(() => sumArrays([[1, 2, 3], null])).toThrow();
    expect(() => sumArrays([[1, 2, 3], '6, 3, 1'])).toThrow();
    expect(() => sumArrays([[1, 2, 3], 54])).toThrow();
    expect(() => sumArrays([[1, 2, 3], undefined])).toThrow();
  });

  test("throws if sub-array elements arent integers", () => {
    expect(() => sumArrays([[1, 2, 3], [6, 3, 1]])).not.toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, {array: [123]}, 1]])).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, true, 1]])).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, null, 1]])).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, '3', 1]])).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, [6, 3, 1], 1]])).toThrow();
    expect(() => sumArrays([[1, 2, 3], [6, undefined, 1]])).toThrow();
  });

  test("returns the total of the numbers in all sub arrays", () => {
    const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
    expect(sumArrays(arrs)).toBe(44);
  });
});

describe("arrShift", () => {

  test("throws if no parameters", () => {
    expect(() => arrShift()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => arrShift([1, 2], 3)).toThrow();
    expect(() => arrShift([1, 2], '3')).toThrow();
    expect(() => arrShift([1, 2], null)).toThrow();
    expect(() => arrShift([1, 2], false)).toThrow();
    expect(() => arrShift([1, 2], [3, 6])).toThrow();
    expect(() => arrShift([1, 2], {num: 8})).toThrow();
    expect(() => arrShift([1, 2], undefined)).not.toThrow();
  });

  test("throws if arr not an array", () => {
    expect(() => arrShift(3)).toThrow();
    expect(() => arrShift('3')).toThrow();
    expect(() => arrShift(null)).toThrow();
    expect(() => arrShift(false)).toThrow();
    expect(() => arrShift([1, 2], [3, 6])).toThrow();
    expect(() => arrShift({num: 8})).toThrow();
    expect(() => arrShift(undefined)).toThrow();
    expect(() => arrShift([1, 2, 3, 6])).not.toThrow();
  });

  test("returns an array with the first and last items swapped", () => {
    expect(arrShift([1, 2])).toEqual([2, 1]);
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
  });

// test didn't specify integers only so testing with other types
  test("returns an array with the first and last items swapped", () => {
    expect(arrShift(['one', [2]])).toEqual([[2], 'one']);
    expect(arrShift([null, 2, undefined])).toEqual([undefined, 2, null]);
    expect(arrShift([{first: true}, null, 'six', {first: false}])).toEqual([{first: false}, null, 'six', {first: true}]);
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]);
    expect(arrShift([])).toEqual([]);
  });
});

describe("findNeedle", () => {

  test("throws if no parameters", () => {
    expect(() => findNeedle()).toThrow();
  });

  test("throws if too many arguments", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(() => findNeedle(obj1, "table", 1)).toThrow();
    expect(() => findNeedle(obj1, "table", '1')).toThrow();
    expect(() => findNeedle(obj1, "table", null)).toThrow();
    expect(() => findNeedle(obj1, "table", true)).toThrow();
    expect(() => findNeedle(obj1, "table", [1, 6, 7])).toThrow();
    expect(() => findNeedle(obj1, "table", {thing: true})).toThrow();
    expect(() => findNeedle(obj1, "table", undefined)).not.toThrow();
  });

  test("throws if haystack not an object", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(() => findNeedle(1, "table")).toThrow();
    expect(() => findNeedle('1', "table")).toThrow();
    expect(() => findNeedle(null, "table")).toThrow();
    expect(() => findNeedle(true, "table")).toThrow();
    expect(() => findNeedle([1, 6, 7], "table")).toThrow();
    expect(() => findNeedle(undefined, "table")).toThrow();
    expect(() => findNeedle({thing: true}, "table")).not.toThrow();
  });

  test("throws if needle not a string", () => { // as inferred by following test
    const obj1 = {
      name: true,
      description: ['small', 'round', 'table'],
      price: 31.89,
      store: null,
      code: undefined,
      another: { object: true }
    };
    expect(() => findNeedle(obj1, 31.89)).toThrow();
    expect(() => findNeedle(obj1, null)).toThrow();
    expect(() => findNeedle(obj1, undefined)).toThrow();
    expect(() => findNeedle(obj1, ['small', 'round', 'table'])).toThrow();
    expect(() => findNeedle(obj1, true)).toThrow();
    expect(() => findNeedle(obj1, { object: true })).toThrow();
    expect(() => findNeedle(obj1, "table")).not.toThrow();
  });

  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true
    };
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true
    };
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872
    };

    expect(findNeedle(obj1, "warrington")).toBe(true);
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
});

describe("getWordFrequencies", () => {

  test("throws if no parameters", () => {
    expect(() => getWordFrequencies()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => getWordFrequencies("hello world", 1)).toThrow();
    expect(() => getWordFrequencies("hello world", 'two')).toThrow();
    expect(() => getWordFrequencies("hello world", [1, 4, 8])).toThrow();
    expect(() => getWordFrequencies("hello world", null)).toThrow();
    expect(() => getWordFrequencies("hello world", false)).toThrow();
    expect(() => getWordFrequencies("hello world", {'hello': 'world'})).toThrow();
    expect(() => getWordFrequencies("hello world", undefined)).not.toThrow();
  });

  test("throws if str not a string", () => {
    expect(() => getWordFrequencies(1)).toThrow();
    expect(() => getWordFrequencies([1, 4, 8])).toThrow();
    expect(() => getWordFrequencies(null)).toThrow();
    expect(() => getWordFrequencies(false)).toThrow();
    expect(() => getWordFrequencies({'hello': 'world'})).toThrow();
    expect(() => getWordFrequencies(undefined)).toThrow();
    expect(() => getWordFrequencies('two')).not.toThrow();
  });

  test("returns the frequencies of each word in a string", () => {
    expect(getWordFrequencies("hello world")).toEqual({
      hello: 1,
      world: 1
    });

    expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
      the: 2,
      cat: 1,
      is: 1,
      hairier: 1,
      than: 1,
      rat: 1
    });

    expect(getWordFrequencies("hello hello hello")).toEqual({
      hello: 3
    });
  });

  test("ignores capitalisation", () => {
    expect(getWordFrequencies("Hello hello hello")).toEqual({
      hello: 3
    });
  });

  test("ignores punctuation", () => {
    // Hint: Google "JavaScript remove special characters from string" to get some ideas!
    expect(
      getWordFrequencies("Hello, hello hello! What have we here?")
    ).toEqual({
      hello: 3,
      what: 1,
      have: 1,
      we: 1,
      here: 1
    });
  });

  // what about hyphenated words and words with apostrophes - client feedback required

});
