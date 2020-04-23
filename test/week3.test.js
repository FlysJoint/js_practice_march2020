const {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
} = require("../challenges/week3");

describe("camelCaseWords", () => {

  test("throw if no argument", () => {
    expect(() => camelCaseWords().toThrow());
  });

  test("throw if too many arguments", () => {
    expect(() => camelCaseWords(["my"], ["variable"]).toThrow());
    expect(() => camelCaseWords(["my", "variable"], "variable").toThrow());
    expect(() => camelCaseWords(["my"], 2).toThrow());
    expect(() => camelCaseWords(["my"], false).toThrow());
    expect(() => camelCaseWords(["my"], {name: 'variable'}).toThrow());
    expect(() => camelCaseWords(["my"], null).toThrow());
    expect(() => camelCaseWords(["my"], undefined).not.toThrow());
  });

  test("throw if array not just strings", () => {
    expect(() => camelCaseWords(["my", "strings"]).not.toThrow());
    expect(() => camelCaseWords(["my", ["variable"]]).toThrow());
    expect(() => camelCaseWords(["my", 2]).toThrow());
    expect(() => camelCaseWords(["my", false]).toThrow());
    expect(() => camelCaseWords(["my", {name: 'variable'}]).toThrow());
    expect(() => camelCaseWords(["my", null]).toThrow());
    expect(() => camelCaseWords(["my", undefined]).toThrow());
  });

  test("camel cases a single word (i.e. no capital letter at beginning)", () => {
    expect(camelCaseWords(["my"])).toBe("my");
  });

  test("camel cases two words (i.e. second word is capitalized)", () => {
    expect(camelCaseWords(["my", "variable"])).toBe("myVariable");
  });

  test("camel cases two+ words (i.e. all words after 1st are capitalized)", () => {
    expect(camelCaseWords(["my", "variable"])).toBe("myVariable");
    expect(camelCaseWords(["my", "variable", "name"])).toBe("myVariableName");
    expect(camelCaseWords(["is", "unique"])).toBe("isUnique");
    expect(camelCaseWords(["is", "higher", "than", "min", "number"])).toBe(
      "isHigherThanMinNumber"
    );
  });

  test("test capitals work", () => {
    expect(camelCaseWords(["MY", "VARIABLE"])).toBe("myVariable");
    expect(camelCaseWords(["MY", "VARIABLE", "NAME"])).toBe("myVariableName");
    expect(camelCaseWords(["IS", "UNIQUE"])).toBe("isUnique");
    expect(camelCaseWords(["IS", "HIGHER", "THAN", "MIN", "NUMBER"])).toBe(
      "isHigherThanMinNumber"
    );
  });

  test("test lowercase and uppercase mixed words work", () => {
    expect(camelCaseWords(["MY", "variable"])).toBe("myVariable");
    expect(camelCaseWords(["MY", "variable", "NAME"])).toBe("myVariableName");
    expect(camelCaseWords(["is", "UNIQUE"])).toBe("isUnique");
    expect(camelCaseWords(["is", "HIGHER", "THAN", "min", "NUMBER"])).toBe(
      "isHigherThanMinNumber"
    );
  });

  test("test lowercase and uppercase mixed letters work", () => {
    expect(camelCaseWords(["My", "vaRiaBle"])).toBe("myVariable");
    expect(camelCaseWords(["mY", "vAriAble", "NaME"])).toBe("myVariableName");
    expect(camelCaseWords(["iS", "UniQUe"])).toBe("isUnique");
    expect(camelCaseWords(["Is", "HiGhEr", "ThaN", "mIn", "NuMbEr"])).toBe(
      "isHigherThanMinNumber"
    );
  });

  test("throw if string not letters only", () => {
    expect(() => camelCaseWords(["my ", "variable"])).toThrow();
    expect(() => camelCaseWords(["m!y", "variable"])).toThrow();
    expect(() => camelCaseWords(["my", "vari4ble"])).toThrow();
  });

});

describe("getSquares", () => {
  test("returns an empty array if empty array passed", () => {
    expect(getSquares([])).toEqual([]);
  });

  test("throws if additional parameters are defined", () => {
    expect(() => getSquares([2, 4, 6], 'throw me')).toThrow();
    expect(() => getSquares([2, 4, 6], null)).toThrow();
    expect(() => getSquares([2, 4, 6], 6)).toThrow();
    expect(() => getSquares([2, 4, 6], {num : 6})).toThrow();
    expect(() => getSquares([2, 4, 6], [2, 4, 6])).toThrow();
    expect(() => getSquares([2, 4, 6], undefined)).not.toThrow();
  });

  test("throws if argument isn't an array", () => {
    expect(() => getSquares('throw me')).toThrow();
    expect(() => getSquares(null)).toThrow();
    expect(() => getSquares(6)).toThrow();
    expect(() => getSquares({num : 6})).toThrow();
    expect(() => getSquares(undefined)).toThrow();
  });

  test("throws if argument isn't an array of numbers", () => {
    expect(() => getSquares([6, 'throw', 'me'])).toThrow();
    expect(() => getSquares([1, null])).toThrow();
    expect(() => getSquares([2, 4, 6, {num : 6}])).toThrow();
    expect(() => getSquares([5, [2, 4, 6], [2, 4, 6]])).toThrow();
    expect(() => getSquares([2, 4, 6, undefined])).toThrow();
  });

  test("returns an array of squares of the original numbers", () => {
    expect(getSquares([2, 4, 6])).toEqual([4, 16, 36]);
    expect(getSquares([2, 4, 6, 1])).toEqual([4, 16, 36, 1]);
    expect(getSquares([2, 3, 6, 7, 12, 4])).toEqual([4, 9, 36, 49, 144, 16]);
    expect(getSquares([54, 24, 5, 66, 992])).toEqual([
      2916,
      576,
      25,
      4356,
      984064
    ]);
    expect(getSquares([-2, 0, -6])).toEqual([4, 0, 36]);
    expect(getSquares([0.5, 1.2, 2.5])).toEqual([0.25, 1.44, 6.25]);
  });
});

describe.only("getTotalSubjects", () => {

// empty arguments
  test("throw if no arguments", () => {
    expect(() => getTotalSubjects()).toThrow();
  });
// too many arguments
  test("throw if too many arguments", () => {
    const people = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths'] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    expect(() => getTotalSubjects(people, 1)).toThrow();
    expect(() => getTotalSubjects(people, 'two')).toThrow();
    expect(() => getTotalSubjects(people, true)).toThrow();
    expect(() => getTotalSubjects(people, {name: 'name'})).toThrow();
    expect(() => getTotalSubjects(people, [people, people])).toThrow();
    expect(() => getTotalSubjects(people, null)).toThrow();
    expect(() => getTotalSubjects(people, undefined)).not.toThrow();
  });

  test("throw if people not an object", () => {
    const people = 3;
    const people2 = 'two';
    const people3 = false;
    const people4 = null;
    const people5 = undefined;
    const people6 = ['chemistry', 'maths'];
    expect(() => getTotalSubjects(people)).toThrow();
    expect(() => getTotalSubjects(people2)).toThrow();
    expect(() => getTotalSubjects(people3)).toThrow();
    expect(() => getTotalSubjects(people4)).toThrow();
    expect(() => getTotalSubjects(people5)).toThrow();
    expect(() => getTotalSubjects(people6)).toThrow();
  });

  test("throw if subjects not an array", () => {
    const people = [
      { name: "Billy"}
    ];
    const people2 = [
      { name: "Aneeta", subjects: 4 }
    ];
    const people3 = [
      { name: "Billy", subjects: true }
    ];
    const people4 = [
      { name: "Billy", subjects: null }
    ];
    const people5 = [
      { name: "Claude", subjects: {name: 'chemistry'}}
    ];
    expect(() => getTotalSubjects(people)).toThrow();
    expect(() => getTotalSubjects(people2)).toThrow();
    expect(() => getTotalSubjects(people3)).toThrow();
    expect(() => getTotalSubjects(people4)).toThrow();
    expect(() => getTotalSubjects(people5)).toThrow();
  });

  test("throw if any subject elements not a string", () => {
    const people = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths', false] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    const people2 = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths', 3, 'English'] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    const people3 = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths', null, 'English'] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    const people4 = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths', ['geography', 'history'], 'English'] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    const people5 = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths', {subjects: 'history'}, 'English'] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    const people6 = [
      { name: "Billy", subjects: ['geography'] },
      { name: "Claude", subjects: ['maths', undefined, 'English'] },
      { name: "Aneeta", subjects: ['history'] }
    ];
    expect(() => getTotalSubjects(people)).toThrow();
    expect(() => getTotalSubjects(people2)).toThrow();
    expect(() => getTotalSubjects(people3)).not.toThrow();
    expect(() => getTotalSubjects(people4)).toThrow();
    expect(() => getTotalSubjects(people5)).toThrow();
    expect(() => getTotalSubjects(people6)).not.toThrow();
  });

// as subjects is probably finite could check subjects against a const list

  test("returns 0 if no people have subjects", () => {
    const people = [
      { name: "Billy", subjects: [] },
      { name: "Claude", subjects: [] },
      { name: "Aneeta", subjects: [] }
    ];
    expect(getTotalSubjects(people)).toBe(0);
  });

  test("returns 1 if 1 person has a subject", () => {
    const people = [
      { name: "Billy", subjects: [] },
      { name: "Claude", subjects: ["chemistry"] },
      { name: "Aneeta", subjects: [] }
    ];
    expect(getTotalSubjects(people)).toBe(1);
  });

  test("returns the correct number of subjects studied in total for all people", () => {
    const people = [
      { name: "Billy", subjects: ["welsh", "spanish"] },
      { name: "Claude", subjects: ["chemistry", "biology", "music"] },
      { name: "Aneeta", subjects: ["physics", "maths", "computing", "music"] }
    ];
    expect(getTotalSubjects(people)).toBe(9);
  });
});

describe("checkIngredients", () => {

  // empty arguments
  test("throw if no arguments", () => {
    expect(() => checkIngredients()).toThrow();
  });

// too many arguments
// menu is not an object
// menu[i].ingredients does not exist
// menu[i].ingredients is not an array
// menu[i].ingredients is not an array of only strings

  test("returns false if no menu items include the specified ingredient", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      },
      {
        name: "black bean curry",
        ingredients: ["black beans", "garam masala", "rice"]
      },
      {
        name: "chocolate tiffin",
        ingredients: [
          "dark chocolate",
          "egg",
          "flour",
          "brown sugar",
          "vanilla essence"
        ]
      },
      {
        name: "hummus",
        ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
      }
    ];

    expect(checkIngredients(menu, "milk")).toBe(false);
  });

  test("returns true if a menu item includes the specified ingredient", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      },
      {
        name: "black bean curry",
        ingredients: ["black beans", "garam masala", "rice"]
      },
      {
        name: "chocolate tiffin",
        ingredients: [
          "dark chocolate",
          "egg",
          "flour",
          "brown sugar",
          "vanilla essence"
        ]
      },
      {
        name: "hummus",
        ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
      }
    ];

    expect(checkIngredients(menu, "dark chocolate")).toBe(true);
  });
});

describe("duplicateNumbers", () => {
  test("returns an array of numbers which appear in both arr1 and arr2", () => {
    let arr1 = [1, 55, 4, 3, 7, 8];
    let arr2 = [55, 23, 65, 0];
    expect(duplicateNumbers(arr1, arr2)).toEqual([55]);

    arr1 = [6, 4, 2, 4, 1, 9];
    arr2 = [1];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1]);
  });

  test("returns the duplicate numbers in ascending order", () => {
    let arr1 = [1, 55, 4, 3, 7, 8];
    let arr2 = [55, 23, 65, 0, 1];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 55]);

    arr1 = [1, 5, 88, 6, 7, 3, 2];
    arr2 = [4, 1, 7, 3, 2];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 2, 3, 7]);
  });

  test("returns each number only once, even if it appears in one array multiple times", () => {
    let arr1 = [1, 2, 2, 2, 3, 4, 5];
    let arr2 = [1, 2, 6, 7];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 2]);

    arr1 = [1, 2, 3];
    arr2 = [3, 3, 3, 4, 5];
    expect(duplicateNumbers(arr1, arr2)).toEqual([3]);
  });
});
