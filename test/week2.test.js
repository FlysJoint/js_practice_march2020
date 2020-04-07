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

  // test fillings array exists
  test("test sandwich has fillings property", () => {

    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
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
      fillings: true,
      accompaniment: "knife"
    };
    const sandwich5 = {
      bread: "yes",
      fillings: null,
      accompaniment: "knife"
    };
    const sandwich6 = {
      bread: "seeded",
      fillings: 5,
      accompaniment: "another sandwich"
    };
    
    expect(() => getFillings(sandwich)).not.toThrow(); // fillings property not found
    expect(() => getFillings(sandwich2)).toThrow(); // fillings property not found
    expect(() => getFillings(sandwich3)).toThrow(); // fillings property not found
    expect(() => getFillings(sandwich4)).not.toThrow(); // fillings property not found
    expect(() => getFillings(sandwich5)).not.toThrow(); // fillings property not found
    expect(() => getFillings(sandwich6)).not.toThrow(); // fillings property not found
});


  // test array isn't empty
  // test fillings exist
  xtest("test sandwich fillings array has strings", () => {

    const expected = { 
      bread: expect.any(String),
      fillings: expect.any(Array),// expect any strings? [expect.any(String)]
      accompaniment: expect.any(String)
    };

    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
    const sandwich2 = {
      bread: "Hovis",
      fillings: [],
      accompaniment: "bleach"
    };
    const sandwich3 = {
      bread: "Hovis",
      fillings: [6, 23],
      accompaniment: "vodka"
    };
    const sandwich4 = {
      bread: "Kingsmill",
      fillings: [true, false],
      accompaniment: "vodka"
    };
    const sandwich5 = {
      bread: "White",
      fillings: [null],
      accompaniment: "vodka"
    };
  
    expect(sandwich).toEqual(expect.objectContaining(expected));
    expect(sandwich2).toEqual(expect.objectContaining(expected));
    expect(sandwich3).not.toEqual(expect.objectContaining(expected));
});
    // test array has strings in it
  // test all ingredients are unique - don't throw, just count uniques

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
