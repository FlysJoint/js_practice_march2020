const {
  getFillings,
  isFromManchester,
  getBusNumbers,
  countSheep,
  hasMPostCode
} = require("../challenges/week2");

describe("getFillings", () => {

  // too many arguments
  test("throw error if too many arguments", () => {
    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
    expect(() => {
      getFillings(sandwich, sandwich2);
    }).toThrow(); // 'Too many arguments'
    expect(() => {
      getFillings(sandwich, 2);
    }).toThrow(); // 'Too many arguments'
    expect(() => {
      getFillings(sandwich, null);
    }).toThrow(); // 'Too many arguments'
    expect(() => {
      getFillings(sandwich, 'extra');
    }).toThrow(); // 'Too many arguments'
    expect(() => {
      getFillings(sandwich, false);
    }).toThrow(); // 'Too many arguments'
  });

  // test sandwich is object
  test("throw argument isn't an object", () => {
    const sandwich1 = 4;
    const sandwich2 = 'not a sandwich';
    const sandwich3 = null;
    const sandwich4 = undefined;
    const sandwich5 = true;
    expect(() => getFillings()).toThrow(); // 'No arguments'
    expect(() => getFillings(sandwich1)).toThrow(); // argument not an object
    expect(() => getFillings(sandwich2)).toThrow(); // argument not an object
    expect(() => getFillings(sandwich3)).toThrow(); // argument not an object
    expect(() => getFillings(sandwich4)).toThrow(); // argument not an object
    expect(() => getFillings(sandwich5)).toThrow(); // argument not an object
  });

  // test fillings property exists
  test("test sandwich has fillings property", () => {

    const sandwich2 = {
      bread: "Hovis",
      accompaniment: "bleach"
    };
    const sandwich3 = {
      bread: "Hovis",
      filings: ['iron', 'tax'],
      accompaniment: "bleach"
    };
    const sandwich4 = {
      bread: "Hovis",
      fillings: ['pickle', 'beetroot'],
      accompaniment: 5
    };
    
    expect(() => getFillings(sandwich2)).toThrow(); // fillings property not found
    expect(() => getFillings(sandwich3)).toThrow(); // fillings property not found
    expect(() => getFillings(sandwich4)).not.toThrow(); // fillings property found
});

  // test fillings is an array
  test("test sandwich fillings property is an array", () => {

    const sandwich2 = {
      bread: 'baguette',
      fillings: 'boursin',
      accompaniment: 'red wine'
    };
    const sandwich3 = {
      bread: 'baguette',
      fillings: 5,
      accompaniment: 'red wine'
    };
    const sandwich4 = {
      bread: 'baguette',
      fillings: true,
      accompaniment: 'red wine'
    };
    const sandwich5 = {
      bread: 'baguette',
      fillings: null,
      accompaniment: 'red wine'
    };
    const sandwich6 = {
      bread: 'baguette',
      fillings: {veg: ['lettuce', 'tomato']},
      accompaniment: 'red wine'
    };
    const sandwich7 = {
      bread: 'baguette',
      fillings: undefined,
      accompaniment: 'red wine'
    };
    const sandwich8 = {
      bread: 'baguette',
      fillings: ['boursin'],
      accompaniment: 'red wine'
    };

    expect(() => getFillings(sandwich2)).toThrow(); // fillings value not an array
    expect(() => getFillings(sandwich3)).toThrow(); // fillings value not an array
    expect(() => getFillings(sandwich4)).toThrow(); // fillings value not an array
    expect(() => getFillings(sandwich5)).toThrow(); // fillings value not an array
    expect(() => getFillings(sandwich6)).toThrow(); // fillings value not an array
    expect(() => getFillings(sandwich7)).toThrow(); // fillings value not an array
    expect(() => getFillings(sandwich8)).not.toThrow(); // fillings value IS an array
});
    
  // test fillings array contains only strings
  test("test sandwich fillings array contains only strings", () => {

    // fillings empty
    const sandwich1 = {
      bread: "Hovis",
      fillings: [],
      accompaniment: "bleach"
    };

    // all items in array are invalid
    const sandwich2 = {
      bread: "Hovis",
      fillings: [6, 23],
      accompaniment: "vodka"
    };
    const sandwich3 = {
      bread: "Kingsmill",
      fillings: [true, false],
      accompaniment: "vodka"
    };
    const sandwich4 = {
      bread: "White",
      fillings: [null],
      accompaniment: "vodka"
    };
    const sandwich5 = {
      bread: "White",
      fillings: [undefined],
      accompaniment: "vodka"
    };
    const sandwich6 = {
      bread: "White",
      fillings: [['lettuce', 'tomato'],['mayo']],
      accompaniment: "vodka"
    };
    const sandwich7 = {
      bread: "White",
      fillings: [{ veg: 'lettuce', sauce: 'mayo'}],
      accompaniment: "vodka"
    };

    // array valid
    const sandwich8 = {
      bread: "White",
      fillings: ['lettuce'],
      accompaniment: "vodka"
    };

    // some items in array invalid
    const sandwich9 = {
      bread: "White",
      fillings: ['butter', 8],
      accompaniment: "vodka"
    };
    const sandwich10 = {
      bread: "White",
      fillings: ['butter', true],
      accompaniment: "vodka"
    };
    const sandwich11 = {
      bread: "White",
      fillings: ['butter', null], // throw?
      accompaniment: "vodka"
    };
    const sandwich12 = {
      bread: "White",
      fillings: ['butter', undefined],
      accompaniment: "vodka"
    };
    const sandwich12a = {
      bread: "White",
      fillings: [undefined, 'butter', undefined],
      accompaniment: "vodka"
    };
    const sandwich12b = {
      bread: "White",
      fillings: [undefined, undefined, undefined, undefined, 'butter', undefined],
      accompaniment: "vodka"
    };
    const sandwich12c = {
      bread: "White",
      fillings: ['butter', 'butter', 'butter', 'butter', 'butter',  'butter', undefined, 1],
      accompaniment: "vodka"
    };
    const sandwich12d = {
      bread: "White",
      fillings: [true, 'butter', 'butter', 'butter', 'butter', 'butter',  'butter', undefined, 'butter', 'butter', 'butter', 'butter',  'butter'],
      accompaniment: "vodka"
    };
    const sandwich13 = {
      bread: "White",
      fillings: ['butter', ['what', 'about', 'this?']],
      accompaniment: "vodka"
    };
    const sandwich14 = {
      bread: "White",
      fillings: ['butter', {sauce: 'mayo'}],
      accompaniment: "vodka"
    };

    // all items in array valid
    const sandwich15 = {
      bread: "White",
      fillings: ['bacon', 'lettuce', 'tomato'],
      accompaniment: "vodka"
    };

    expect(() => getFillings(sandwich1)).toThrow(); // fillings array empty
    expect(() => getFillings(sandwich2)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich3)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich4)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich5)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich6)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich7)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich8)).not.toThrow(); // fillings array contains only strings

    expect(() => getFillings(sandwich9)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich10)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich11)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich12)).not.toThrow(); // fillings array doesn't contain only strings, but it's not invalid
    expect(() => getFillings(sandwich12a)).not.toThrow(); // fillings array doesn't contain only strings, but it's not invalid
    expect(() => getFillings(sandwich12b)).not.toThrow(); // fillings array doesn't contain only strings, but it's not invalid
    expect(() => getFillings(sandwich12c)).toThrow(); // fillings array doesn't contain only strings, but at least one is invalid
    expect(() => getFillings(sandwich12d)).toThrow(); // fillings array doesn't contain only strings, but at least one is invalid
    
    expect(() => getFillings(sandwich13)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich14)).toThrow(); // fillings array doesn't contain only strings
    expect(() => getFillings(sandwich15)).not.toThrow(); // fillings array contains only strings
});

// Do we care about repetitions? Client input requested

  test("returns the fillings of a sandwich", () => {
    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
    expect(getFillings(sandwich)).toEqual(["brie", "relish", "lettuce"]);

    const sandwich2 = {
      bread: "Rye",
      fillings: ["smoked salmon", "dill"],
      accompaniment: "wedges"
    };
    expect(getFillings(sandwich2)).toEqual(["smoked salmon", "dill"]);

    const sandwich3 = {
      bread: "brown bread",
      fillings: ['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'and Spam'],
      accompaniment: "baked beans"
    };
    expect(getFillings(sandwich3)).toEqual(['Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'and Spam']);
  });
});

describe("isFromManchester", () => {
  test("returns true if the person is from Manchester", () => {
    const person = {
      name: "Mohammed",
      city: "Manchester",
      age: 23
    };
    expect(isFromManchester(person)).toBe(true);
  });

  test("returns false if the person is not Manchester", () => {
    const person = {
      name: "Anisa",
      city: "Leeds",
      age: 39
    };
    expect(isFromManchester(person)).toBe(false);
  });
});

describe("getBusNumbers", () => {
  // A bus can hold 40 people. This function should return how many buses are required for the number of people
  test("returns 1 if all the people fit in 1 bus", () => {
    expect(getBusNumbers(1)).toBe(1);
    expect(getBusNumbers(10)).toBe(1);
    expect(getBusNumbers(25)).toBe(1);
    expect(getBusNumbers(39)).toBe(1);
    expect(getBusNumbers(40)).toBe(1);
  });

  test("returns 2 if 2 buses are required", () => {
    expect(getBusNumbers(41)).toBe(2);
    expect(getBusNumbers(50)).toBe(2);
    expect(getBusNumbers(55)).toBe(2);
    expect(getBusNumbers(80)).toBe(2);
  });

  test("returns 3 if 3 buses are required", () => {
    expect(getBusNumbers(81)).toBe(3);
    expect(getBusNumbers(85)).toBe(3);
    expect(getBusNumbers(100)).toBe(3);
    expect(getBusNumbers(120)).toBe(3);
  });

  test("returns the correct number of buses for larger numbers of people", () => {
    expect(getBusNumbers(43728)).toBe(1094);
  });
});

describe("countSheep", () => {
  test("returns 0 if there are 0 sheep in the array", () => {
    const arr = ["dog", "badger", "dog", "dog", "chicken"];
    expect(countSheep(arr)).toBe(0);
  });

  test("returns 1 if there is 1 sheep in the array", () => {
    const arr = ["dog", "sheep", "dog", "dog", "chicken"];
    expect(countSheep(arr)).toBe(1);
  });

  test("returns 2 if there are 2 sheep in the array", () => {
    const arr = ["dog", "sheep", "dog", "sheep", "chicken"];
    expect(countSheep(arr)).toBe(2);
  });

  test("returns 5 if there are 5 sheep in the array", () => {
    const arr = [
      "dog",
      "sheep",
      "dog",
      "sheep",
      "chicken",
      "sheep",
      "hare",
      "sheep",
      "sheep"
    ];
    expect(countSheep(arr)).toBe(5);
  });
});

describe("hasMPostCode", () => {
  test("returns true if the person has a postcode starting with M", () => {
    const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        city: "Manchester",
        postCode: "M16 8DR"
      }
    };
    expect(hasMPostCode(person)).toBe(true);
  });

  test("returns false if the person does not have a postcode starting with M", () => {
    const person = {
      name: "Anisa",
      age: 39,
      address: {
        line1: "44 Bridge Street",
        city: "Leeds",
        postCode: "LS11 6BT"
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });

  test("returns false if the postcode starts with M but is not for Manchester", () => {
    const person = {
      name: "Jahin",
      age: 55,
      address: {
        line1: "11 Stone Street",
        city: "Maidstone",
        postCode: "ME20 5BR"
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });
});
