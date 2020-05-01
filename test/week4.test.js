const {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
} = require("../challenges/week4");

describe("findSmallNums", () => {

  test("throws if no arguments", () => {
    expect(() => findSmallNums()).toThrow();
  });

  test("throws if too many arguments", () => {
    expect(() => findSmallNums([1, 2, 3], [1, 2, 3])).toThrow();
    expect(() => findSmallNums([1, 2, 3], 'a string')).toThrow();
    expect(() => findSmallNums([1, 2, 3], {number: 4})).toThrow();
    expect(() => findSmallNums([1, 2, 3], null)).toThrow();
    expect(() => findSmallNums([1, 2, 3], true)).toThrow();
    expect(() => findSmallNums([1, 2, 3], 5)).toThrow();
    expect(() => findSmallNums([1, 2, 3], undefined)).not.toThrow();
  });

  test("throws if elements not numbers", () => {
    expect(() => findSmallNums([1, 'two', 3])).toThrow();
    expect(() => findSmallNums([1, true, 3])).toThrow();
    expect(() => findSmallNums([1, null, 3])).toThrow();
    expect(() => findSmallNums([1, undefined, 3])).toThrow();
    expect(() => findSmallNums([1, [2], 3])).toThrow();
    expect(() => findSmallNums([1, {number: 2}, 3])).toThrow();
  });

  test("returns an array of numbers smaller than 1", () => {
    expect(findSmallNums([8, 1, 1.3, 0.9, 0.4, -1])).toEqual([0.9, 0.4, -1]);
    expect(findSmallNums([-7, -243])).toEqual([-7, -243]);
    expect(findSmallNums([100, 88])).toEqual([]);
    expect(findSmallNums([])).toEqual([]);
  });
});

describe("findNamesBeginningWith", () => {

  test("throws if no arguments", () => {
    expect(() => findNamesBeginningWith()).toThrow();
  });

  test("throws if too many arguments", () => {
    const names = ['Allie', 'Billy', 'Charlie'];
    expect(() => findNamesBeginningWith(names, 'A', [1, 2, 3])).toThrow();
    expect(() => findNamesBeginningWith(names, 'A', 'a string')).toThrow();
    expect(() => findNamesBeginningWith(names, 'A', {number: 4})).toThrow();
    expect(() => findNamesBeginningWith(names, 'A', null)).toThrow();
    expect(() => findNamesBeginningWith(names, 'A', true)).toThrow();
    expect(() => findNamesBeginningWith(names, 'A', 5)).toThrow();
    expect(() => findNamesBeginningWith(names, 'A', undefined)).not.toThrow();
  });

  test("throws if names not an array", () => {
    const names1 = 1;
    const names2 = true;
    const names3 = 'two';
    const names4 = {name: 'Bob'};
    const names5 = null;
    const names6 = undefined;
    expect(() => findNamesBeginningWith(names1, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names2, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names3, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names4, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names5, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names6, 'A')).toThrow();
  });

  test("throws if names elements not strings", () => {
    const names1 = ['Alan', 1, 'Chuck'];
    const names2 = ['Alan', true, 'Chuck'];
    const names3 = ['Alan', ['Bily'], 'Chuck'];
    const names4 = ['Alan', {name: 'Bob'}, 'Chuck'];
    const names5 = ['Alan', null, 'Chuck'];
    const names6 = ['Alan', undefined, 'Chuck'];
    expect(() => findNamesBeginningWith(names1, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names2, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names3, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names4, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names5, 'A')).toThrow();
    expect(() => findNamesBeginningWith(names6, 'A')).toThrow();
  });

  test("throws if char not a string", () => {
    const names = ['Allie', 'Billy', 'Charlie'];
    expect(() => findNamesBeginningWith(names, 1)).toThrow();
    expect(() => findNamesBeginningWith(names, true)).toThrow();
    expect(() => findNamesBeginningWith(names, {number: 6})).toThrow();
    expect(() => findNamesBeginningWith(names, null)).toThrow();
    expect(() => findNamesBeginningWith(names, undefined)).toThrow();
    expect(() => findNamesBeginningWith(names, ['C'])).toThrow();
  });

  test("returns an array of names beginning with the specified character", () => {
    const names = ["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"];
    expect(findNamesBeginningWith(names, "S")).toEqual([
      "Sally",
      "Susan",
      "Sam"
    ]);
    expect(findNamesBeginningWith(names, "D")).toEqual(["Dave"]);
    expect(findNamesBeginningWith(names, "F")).toEqual([]);
  });
});

describe("findVerbs", () => {

  test("throws if no arguments", () => {
    expect(() => findVerbs()).toThrow();
  });

  test("throws if too many arguments", () => {
    const words = [
      "to eat",
      "fajita",
      "mouse",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(() => findVerbs(words, [1, 2, 3])).toThrow();
    expect(() => findVerbs(words, 'a string')).toThrow();
    expect(() => findVerbs(words, {number: 4})).toThrow();
    expect(() => findVerbs(words, null)).toThrow();
    expect(() => findVerbs(words, true)).toThrow();
    expect(() => findVerbs(words, 5)).toThrow();
    expect(() => findVerbs(words, undefined)).not.toThrow();
  });

  test("returns an array of words that are considered verbs (because they begin with 'to ')", () => {
    const words = [
      "to eat",
      "fajita",
      "mouse",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(findVerbs(words)).toEqual(["to eat", "to sneak", "to squeak"]);
    expect(findVerbs(["bottle", "fish", "grain"])).toEqual([]);
  });

  test("does not mistake words that include 'to' elsewhere", () => {
    const words = [
      "to eat",
      "tower",
      "monitor",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(findVerbs(words)).toEqual(["to eat", "to sneak", "to squeak"]);
  });
});

describe("getIntegers", () => {

  test("throws if no arguments", () => {
    expect(() => getIntegers()).toThrow();
  });

  test("throws if too many arguments", () => {
    const nums = [1, 3.5, 2.1, 1, 4, 9];
    expect(() => getIntegers(nums, [1, 2, 3])).toThrow();
    expect(() => getIntegers(nums, 'a string')).toThrow();
    expect(() => getIntegers(nums, {number: 4})).toThrow();
    expect(() => getIntegers(nums, null)).toThrow();
    expect(() => getIntegers(nums, true)).toThrow();
    expect(() => getIntegers(nums, 5)).toThrow();
    expect(() => getIntegers(nums, undefined)).not.toThrow();
  });

  test("throws if nums contains non-numbers", () => {
    const nums1 = [1, 'two', 2.1, 1, 4, 9];
    const nums2 = [1, true, 2.1, 1, 4, 9];
    const nums3 = [1, null, 2.1, 1, 4, 9];
    const nums4 = [1, undefined, 2.1, 1, 4, 9];
    const nums5 = [1, [2], 2.1, 1, 4, 9];
    const nums6 = [1, {number: 2}, 2.1, 1, 4, 9];
    expect(() => getIntegers(nums1)).toThrow();
    expect(() => getIntegers(nums2)).toThrow();
    expect(() => getIntegers(nums3)).toThrow();
    expect(() => getIntegers(nums4)).toThrow();
    expect(() => getIntegers(nums5)).toThrow();
    expect(() => getIntegers(nums6)).toThrow();
  });

  test("returns an array containing only integers", () => {
    const nums = [1, 3.5, 2.1, 1, 4, 9];
    expect(getIntegers(nums)).toEqual([1, 1, 4, 9]);
    expect(getIntegers([])).toEqual([]);
    expect(getIntegers([4.9, 9.33, 12.4])).toEqual([]);
  });
});

describe("getCities", () => {

  test("throws if no arguments", () => {
    expect(() => getCities()).toThrow();
  });

  test("throws if too many arguments", () => {
    const users = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users, [1, 2, 3])).toThrow();
    expect(() => getCities(users, 'a string')).toThrow();
    expect(() => getCities(users, {number: 4})).toThrow();
    expect(() => getCities(users, null)).toThrow();
    expect(() => getCities(users, true)).toThrow();
    expect(() => getCities(users, 5)).toThrow();
    expect(() => getCities(users, undefined)).not.toThrow();
  });

  test("throws if users not an object", () => {
    const users1 = 1;
    const users2 = 'object';
    const users3 = true;
    const users4 = null;
    const users5 = undefined;
    const users6 = ['Liverpool', 'Manchester'];
    expect(() => getCities(users1)).toThrow();
    expect(() => getCities(users2)).toThrow();
    expect(() => getCities(users3)).toThrow();
    expect(() => getCities(users4)).toThrow();
    expect(() => getCities(users5)).toThrow();
    expect(() => getCities(users6)).toThrow();
  });

  test("throws if displayname not string", () => {
    const users1 = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: 2
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users1)).toThrow();
    const users2 = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: true
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users2)).toThrow();
    const users3 = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: null
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users3)).toThrow();
    const users4 = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: undefined
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users4)).toThrow();
    const users5 = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: ['LVP', 'GLW']
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users5)).toThrow();
    const users6 = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: {city: 'LVP'}
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(() => getCities(users6)).toThrow();
  });

  test("returns an array of the cities of each user", () => {
    const users = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(getCities(users)).toEqual(["MCR", "LVP", "LVP", "GLW"]);
  });
});

describe("getSquareRoots", () => {

  test("throws if no arguments", () => {
    expect(() => getSquareRoots()).toThrow();
  });

  test("throws if too many arguments", () => {
    const nums = [36, 77, 12, 355, 92, 5];
    expect(() => getSquareRoots(nums, [1, 2, 3])).toThrow();
    expect(() => getSquareRoots(nums, 'a string')).toThrow();
    expect(() => getSquareRoots(nums, {number: 4})).toThrow();
    expect(() => getSquareRoots(nums, null)).toThrow();
    expect(() => getSquareRoots(nums, true)).toThrow();
    expect(() => getSquareRoots(nums, 5)).toThrow();
    expect(() => getSquareRoots(nums, undefined)).not.toThrow();
  });

  test("throws if nums contains non-numbers", () => {
    const nums1 = [1, 'two', 12, 355, 92, 5];
    const nums2 = [1, true, 12, 355, 92, 5];
    const nums3 = [1, null, 12, 355, 92, 5];
    const nums4 = [1, undefined, 12, 355, 92, 5];
    const nums5 = [1, [2], 12, 355, 92, 5];
    const nums6 = [1, {number: 2}, 12, 355, 92, 5];
    expect(() => getSquareRoots(nums1)).toThrow();
    expect(() => getSquareRoots(nums2)).toThrow();
    expect(() => getSquareRoots(nums3)).toThrow();
    expect(() => getSquareRoots(nums4)).toThrow();
    expect(() => getSquareRoots(nums5)).toThrow();
    expect(() => getSquareRoots(nums6)).toThrow();
  });

  test("gets the square root of each number to 2 decimal places", () => {
    const nums = [36, 77, 12, 355, 92, 5];
    expect(getSquareRoots(nums)).toEqual([6, 8.77, 3.46, 18.84, 9.59, 2.24]);
  });
});

describe("findSentencesContaining", () => {

  test("throws if no arguments", () => {
    expect(() => findSentencesContaining()).toThrow();
  });

  test("throws if too many arguments", () => {
  const sentencesAboutPackageJson = [
    "You should specify a license for your package so that people know how they are permitted to use it",
    "The main field is a module ID that is the primary entry point to your program",
    "The repository field should specify the place where your code lives",
    "The 'scripts' property is a dictionary containing script commands that are run at various times in the lifecycle of your package",
    "Dependencies are specified in a simple object that maps a package name to a version range",
    "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object",
    "If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required",
    "If you don’t plan to publish your package, the name and version fields are optional",
    "Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search",
    "The bugs field should hold the url to your project’s issue tracker and / or the email address to which issues should be reported."
  ];
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", [1, 2, 3])).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", 'a string')).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", {number: 4})).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", null)).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", true)).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", 5)).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, "license", undefined)).not.toThrow();
  });

  test("throws if sentences not an array", () => {
  const sentences1 = 1;
  const sentences2 = true;
  const sentences3 = 'two';
  const sentences4 = {name: 'Bob'};
  const sentences5 = null;
  const sentences6 = undefined;
    expect(() => findSentencesContaining(sentences1, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences2, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences3, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences4, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences5, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences6, 'license')).toThrow();
  });

  test("throws if sentences elements not strings", () => {
  const sentences1 = [1];
  const sentences2 = [true];
  const sentences3 = [['two']];
  const sentences4 = [{name: 'Bob'}];
  const sentences5 = [null];
  const sentences6 = [undefined];
    expect(() => findSentencesContaining(sentences1, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences2, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences3, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences4, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences5, 'license')).toThrow();
    expect(() => findSentencesContaining(sentences6, 'license')).toThrow();
  });

  test("throws if str not a string", () => {
  const sentencesAboutPackageJson = [
    "You should specify a license for your package so that people know how they are permitted to use it",
    "The main field is a module ID that is the primary entry point to your program",
    "The repository field should specify the place where your code lives",
    "The 'scripts' property is a dictionary containing script commands that are run at various times in the lifecycle of your package",
    "Dependencies are specified in a simple object that maps a package name to a version range",
    "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object",
    "If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required",
    "If you don’t plan to publish your package, the name and version fields are optional",
    "Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search",
    "The bugs field should hold the url to your project’s issue tracker and / or the email address to which issues should be reported."
  ];
    expect(() => findSentencesContaining(sentencesAboutPackageJson, [1, 2, 3])).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, {number: 4})).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, null)).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, true)).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, 5)).toThrow();
    expect(() => findSentencesContaining(sentencesAboutPackageJson, undefined)).toThrow();
  });

  const sentencesAboutPackageJson = [
    "You should specify a license for your package so that people know how they are permitted to use it",
    "The main field is a module ID that is the primary entry point to your program",
    "The repository field should specify the place where your code lives",
    "The 'scripts' property is a dictionary containing script commands that are run at various times in the lifecycle of your package",
    "Dependencies are specified in a simple object that maps a package name to a version range",
    "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object",
    "If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required",
    "If you don’t plan to publish your package, the name and version fields are optional",
    "Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search",
    "The bugs field should hold the url to your project’s issue tracker and / or the email address to which issues should be reported."
  ];
  test("returns only the sentences containing the specified string", () => {
    expect(
      findSentencesContaining(sentencesAboutPackageJson, "license")
    ).toEqual([
      "You should specify a license for your package so that people know how they are permitted to use it"
    ]);

    expect(
      findSentencesContaining(sentencesAboutPackageJson, "binary")
    ).toEqual([]);
  });

  test("it should not be case sensitive", () => {
    expect(
      findSentencesContaining(sentencesAboutPackageJson, "dependencies")
    ).toEqual([
      "Dependencies are specified in a simple object that maps a package name to a version range",
      "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object"
    ]);
  });
});

describe("getLongestSides", () => {

  test("throws if no arguments", () => {
    expect(() => getLongestSides()).toThrow();
  });

  test("throws if too many arguments", () => {
    const data = [[6, 7, 10], [9, 3, 6], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(() => getLongestSides(data, [1, 2, 3])).toThrow();
    expect(() => getLongestSides(data, 'a string')).toThrow();
    expect(() => getLongestSides(data, {number: 4})).toThrow();
    expect(() => getLongestSides(data, null)).toThrow();
    expect(() => getLongestSides(data, true)).toThrow();
    expect(() => getLongestSides(data, 5)).toThrow();
    expect(() => getLongestSides(data, undefined)).not.toThrow();
  });

  test("throws if data is not an array", () => {
    const data1 = 'string';
    const data2 = 6;
    const data3 = {numbers: [6, 7, 10]};
    const data4 = true;
    const data5 = null;
    const data6 = undefined;
    expect(() => getLongestSides(data1)).toThrow();
    expect(() => getLongestSides(data2)).toThrow();
    expect(() => getLongestSides(data3)).toThrow();
    expect(() => getLongestSides(data4)).toThrow();
    expect(() => getLongestSides(data5)).toThrow();
    expect(() => getLongestSides(data6)).toThrow();
  });

  test("throws if data contains non-arrays", () => {
    const data1 = [1];
    const data2 = ['two'];
    const data3 = [{number: 6}];
    const data4 = [null];
    const data5 = [false];
    const data6 = [undefined];
    expect(() => getLongestSides(data1)).toThrow();
    expect(() => getLongestSides(data2)).toThrow();
    expect(() => getLongestSides(data3)).toThrow();
    expect(() => getLongestSides(data4)).toThrow();
    expect(() => getLongestSides(data5)).toThrow();
    expect(() => getLongestSides(data6)).toThrow();
  });

  test("throws if arrays in data contains non-numbers", () => {
    const data1 = [[6, 7, 10], ['nine', 'three', 'six'], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    const data2 = [[6, 7, 10], [{numbers: [6, 4, 10]}], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    const data3 = [[6, 7, 10], [null], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    const data4 = [[6, 7, 10], [false], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    const data5 = [[6, 7, 10], [undefined], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    const data6 = [[6, 7, 10], [[4, 6, 8], [6, 3, 5]], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(() => getLongestSides(data1)).toThrow();
    expect(() => getLongestSides(data2)).toThrow();
    expect(() => getLongestSides(data3)).toThrow();
    expect(() => getLongestSides(data4)).toThrow();
    expect(() => getLongestSides(data5)).toThrow();
    expect(() => getLongestSides(data6)).toThrow();
  });

  test("throws if any sides are 0 or less", () => {
    const data1 = [[6, 7, 10], [9, 0, 6], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    const data2 = [[6, 7, 10], [9, 3, 6], [6, 3, 5], [-6, 13, 12], [7, 12, 8]];
    expect(() => getLongestSides(data1)).toThrow();
    expect(() => getLongestSides(data2)).toThrow();
  });

  test("returns the longest side of each set of triangle data", () => {
    const data = [[6, 7, 10], [9, 3, 6], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(getLongestSides(data)).toEqual([10, 9, 6, 13, 12]);

    const data2 = [[6, 7, 7], [9, 3, 9], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(getLongestSides(data2)).toEqual([7, 9, 6, 13, 12]);
  });
});
