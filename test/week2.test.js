const {
  getFillings,
  isFromManchester,
  getBusNumbers,
  countSheep,
  hasMPostCode
} = require("../challenges/week2");

describe("getFillings", () => {

  // too many arguments
  test("throw error if no arguments", () => {
    expect(() => {
      getFillings();
    }).toThrow(); // 'No arguments'
  });

  // too many arguments
  test("throw error if too many arguments", () => {
    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
    const sandwich2 = {
      bread: "Sourdough",
      fillings: ["crisps", "cheese", "HP Sauce"],
      accompaniment: "brie"
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
    expect(() => {
      getFillings(sandwich, undefined);
    }).not.toThrow(); // 'Too many arguments'
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
  
  test("throws error if no arguments", () => {
    expect(() => isFromManchester()).toThrow();
  });

  test("throws error if too many arguments", () => {
    const person = {
      name: "Mohammed",
      city: "Manchester",
      age: 23
    };
    const plusOne = {
      name: "Ken",
      city: "Manchester",
      age: 75
    };
    const plusTwo = undefined;
    expect(() => isFromManchester(person, plusOne)).toThrow();
    expect(() => isFromManchester(person, plusTwo)).not.toThrow();
  });

  test("throws error if person not an object", () => {
    const person1 = 4;
    const person2 = true;
    const person3 = null;
    const person4 = undefined;
    const person5 = 'Mohammed';
    const person6 = ['Mohammed', 'Manchester'];
    const person7 = [['name:', 'Mohammed'], ['city:', 'Manchester']];

    expect(() => isFromManchester(person1)).toThrow();      // because not an object
    expect(() => isFromManchester(person2)).toThrow();      // because not an object
    expect(() => isFromManchester(person3)).toThrow();      // because not an object
    expect(() => isFromManchester(person4)).toThrow();      // because not an object
    expect(() => isFromManchester(person5)).toThrow();      // because not an object
    expect(() => isFromManchester(person6)).toThrow();      // because arrays are objects, but not object required
    expect(() => isFromManchester(person7)).toThrow();      // because arrays are objects, but not object required

  });

  // test city property exists
  test("test person has city property", () => {

    const person2 = {};
    const person3 = {
      name: "Mohammed",
      age: 23
    };
    const person4 = {
      name: "Dave",
      town: 'Macclesfield',
      age: 64
    };
    const person5 = {
      city: 'Liverpool',
      name: "Paul",
      age: 32
    };
    
    expect(() => isFromManchester(person2)).toThrow(); // city property not found
    expect(() => isFromManchester(person3)).toThrow(); // city property not found
    expect(() => isFromManchester(person4)).toThrow(); // city property not found
    expect(() => isFromManchester(person5)).not.toThrow(); // city property found, but in unusual position
  });

  // test city value is string
  test("test city value is string", () => {

    const person2 = {
      city: 1,
      name: "Paul",
      age: true
    };
    const person3 = {
      name: "Paul",
      city: true,
      age: null
    };
    const person4 = {
      name: "Paul",
      age: 32,
      city: null
    };
    const person5 = {
      name: "Max",
      city: undefined,
      age: 'sixteen'
    };
    const person6 = {
      name: false,
      city: ['Kingston', '-upon-', 'Thames'],
      age: undefined
    };
    const person7 = {
      name: 'Deirdre',
      city: {suburb: 'Trafford'},
      age: 56
    };
    const person8 = {
      name: 'Pierre',
      city: 'Paris',
      age: 40  
    };
    
    expect(() => isFromManchester(person2)).toThrow(); // city value not a string
    expect(() => isFromManchester(person3)).toThrow(); // city value not a string
    expect(() => isFromManchester(person4)).toThrow(); // city value not a string
    expect(() => isFromManchester(person5)).toThrow(); // city value not a string
    expect(() => isFromManchester(person6)).toThrow(); // city value not a string
    expect(() => isFromManchester(person7)).toThrow(); // city value not a string
    expect(() => isFromManchester(person8)).not.toThrow(); // city value IS a string
  });

  // test city value isn't empty
  test("test city value isn't empty", () => {

    const person2 = {
      name: 'Peter',
      city: '',
      age: 50  
    };
    const person3 = {
      name: 'Peter',
      city: 'M4nc435t3r',
      age: 50  
    };

    expect(() => isFromManchester(person2)).toThrow(); // city value empty
    expect(() => isFromManchester(person3)).not.toThrow(); // city value isn't empty
  });

  test("returns true if the person is from Manchester", () => {
    const person2 = {
      name: "Mohammed",
      city: "Manchester",
      age: 23
    };
    const person3 = {
      name: "Mohammed",
      city: "Manchester, England",
      age: 23
    };
    const person4 = {
      name: "Mohammed",
      city: "Manchester, Australia",
      age: 23
    };
    expect(isFromManchester(person2)).toBe(true);
    expect(isFromManchester(person3)).toBe(false); // should this be true? Client input required
    expect(isFromManchester(person4)).toBe(false); // this should be false, but if the above is 'fixed' this may be a false positive. Additional nation property required?
  });

  test("returns false if the person is not Manchester", () => {
    const person2 = {
      name: "Anisa",
      city: "Leeds",
      age: 39
    };
    const person3 = {
      name: "Bill",
      city: "Winston-Salem", // any additional parsing has to be careful not to exclude valid placenames
      age: 256
    };
    const person4 = {
      name: "Farmer Giles",
      city: "Westward Ho!", // any additional parsing has to be careful not to exclude valid placenames
      age: 62
    };
    expect(isFromManchester(person2)).toBe(false);
    expect(isFromManchester(person3)).toBe(false);
    expect(isFromManchester(person4)).toBe(false);
  });

  // what if another object also has a city value?
  test("returns true if the object has a valid city value", () => {
    const footballClub1 = {
      name: "Manchester United",
      city: "Manchester",
      manager: 'Ole Gunnar Solskjaer'
    };
    const footballClub2 = {
      name: "Manchester City",
      city: "Manchester",
      manager: 'Josep Guardiola'
    };
    expect(isFromManchester(footballClub1)).toBe(true); // false positive
    expect(isFromManchester(footballClub2)).toBe(true); // false positive

  });
});

describe.only("getBusNumbers", () => {
  // A bus can hold 40 people. This function should return how many buses are required for the number of people
  
  // no arguments
  test("throws error if no arguments", () => {
    expect(() => getBusNumbers()).toThrow();
  });

  // too many arguments
  test("throws error if too many arguments", () => {
    expect(() => getBusNumbers(46, 58)).toThrow();
    expect(() => getBusNumbers(46, '12')).toThrow();
    expect(() => getBusNumbers(46, undefined)).not.toThrow();
  });

  // wrong arguments
  test("throws error if argument is wrong type", () => {
    expect(() => getBusNumbers(null)).toThrow();
    expect(() => getBusNumbers(false)).toThrow();
    expect(() => getBusNumbers(undefined)).toThrow();
    expect(() => getBusNumbers([67, 87])).toThrow();
    expect(() => getBusNumbers({amount: 67})).toThrow();
    expect(() => getBusNumbers('six')).toThrow();
    expect(() => getBusNumbers(7)).not.toThrow();
  });

  // negative value throw
  test("throws error if argument is negative", () => {
    expect(() => getBusNumbers(-12)).toThrow();
    expect(() => getBusNumbers(-34)).toThrow();
    expect(() => getBusNumbers(-40)).toThrow();
    expect(() => getBusNumbers(-42)).toThrow();
    expect(() => getBusNumbers(-86)).toThrow();
    expect(() => getBusNumbers(-123)).toThrow();
    expect(() => getBusNumbers(-675)).toThrow();
  });

  // decimal value throw
  test("throws error if argument is not integer", () => {
    expect(() => getBusNumbers(5.6)).toThrow();
    expect(() => getBusNumbers(24.76)).toThrow();
    expect(() => getBusNumbers(40.2)).toThrow();
    expect(() => getBusNumbers(42.0)).toThrow();
    expect(() => getBusNumbers(98.99)).toThrow();
    expect(() => getBusNumbers(-123.23)).toThrow();
    expect(() => getBusNumbers(-675.99)).toThrow();
  });

  // 0 shouldn't break
  xtest("0 is valid input", () => {
    expect(() => getBusNumbers(0)).toBe(0);
  });

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
    expect(getBusNumbers(79)).toBe(2);
    expect(getBusNumbers(80)).toBe(2);
  });

  test("returns 3 if 3 buses are required", () => {
    expect(getBusNumbers(81)).toBe(3);
    expect(getBusNumbers(85)).toBe(3);
    expect(getBusNumbers(100)).toBe(3);
    expect(getBusNumbers(119)).toBe(3);
    expect(getBusNumbers(120)).toBe(3);
  });

  xtest("returns the correct number of buses for larger numbers of people", () => {
    expect(getBusNumbers(43728)).toBe(1094);
    expect(getBusNumbers(39999999)).toBe(3);
    expect(getBusNumbers(40000000)).toBe(3);
    expect(getBusNumbers(40000001)).toBe(3);
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
