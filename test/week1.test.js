const {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
} = require("../challenges/week1");

describe("capitalize", () => {

  test("does nothing if there is no input", () => {
    expect(capitalize("")).toBe("");
  });

  test("throws an error if no argument", () => {
    expect(capitalize).toThrow(new Error("word is required"));

    expect(() => {
      generateInitials("FirstNameOnly", "");
    }).toThrow();
  });

  test("throws an error if too many arguments", () => {

    expect(() => {
      generateInitials("Too", "Many", "Names");
    }).toThrow();
  });

  test("returns a capitalized string", () => {
    expect(capitalize("single")).toBe("Single");
    expect(capitalize("multiple words in string")).toBe("Multiple words in string");
    expect(capitalize("multiple words with symbols!!!")).toBe("Multiple words with symbols!!!");
    expect(capitalize("l")).toBe("L");
    //expect(capitalize("e acute")).toBe("E ACUTE");
  });

  test("does nothing if the string is already capitalized" /* does nothing is not the same as return a capitalised string!*/, () => {
    expect(capitalize("Capitalised")).toBe("Capitalised");
    expect(capitalize("X")).toBe("X");
  });

  /* There's no way to know whether to capitalise the first capitalisable letter if it's
     later in the string as it depends on the context so I chose to only capitalise if it
     was the very first character in the string otherwise leave it alone. */
  test("does nothing if first char not capitalisable", () => {
    expect(capitalize("1. Need more client input")).toBe("1. Need more client input");
    expect(capitalize("(because there is no way to know)")).toBe("(because there is no way to know)");
    expect(capitalize(" about handling capitalisation later in string")).toBe(" about handling capitalisation later in string");
  });
});

describe("generateInitials", () => {

  test("throws error if arguments are missing", () => {
    expect(generateInitials).toThrow();
    expect(() => {
      generateInitials("OneNameOnly");
    }).toThrow(); // because it will assume one argument is first argument
    
    expect(() => {
      generateInitials("FirstNameOnly", "");
    }).toThrow();
    
    expect(() => {
      generateInitials("", "LastNameOnly");
    }).toThrow();
  });

  test("throws error if too many arguments", () => {
    
    expect(() => {
      generateInitials("Too", "Many", "Names");
    }).toThrow();
  });

  test("throws error if not a string", () => { // I wasn't expecting these to pass as I hadn't explicitly written the code for them.
    expect(() => {
      generateInitials(123, 456);
    }).toThrow();
    
    expect(() => {
      generateInitials(null, null);
    }).toThrow();
    
    expect(() => {
      generateInitials(true, false);
    }).toThrow();
  });

  test("throws error if anything other than letters and hyphens", () => {
    
    expect(() => {
      generateInitials("B0r!s", "John5on");
    }).toThrow();
    
    expect(() => {
      generateInitials("M4tt", "hanc0ck");
    }).toThrow();
    
    expect(() => {
      generateInitials("4dr!an", "m0!3");
    }).toThrow();

    expect(() => {
      generateInitials("[@", "`{");
    }).toThrow();
  });

  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
    expect(generateInitials("Terry", "Thomas")).toBe("T.T");
    expect(generateInitials("Zygote", "Derriere")).toBe("Z.D");
    expect(generateInitials("Éowyn", "Österreich")).toBe("É.Ö");
  });

  test("returns the initials of a firstname and double-barrelled surname", () => {
    expect(generateInitials("Balthazar", "Farquar-Smith")).toBe("BF-S");
    expect(generateInitials("Henry", "Rolls-Royce")).toBe("HR-R");
    expect(generateInitials("Lobelia", "Sackville-Baggins")).toBe("LS-B");
    expect(() => {
      generateInitials("-g-ty-sdf-hgfj-", "HJF-szg-nbsd-"); // coder skill limitations :(
    }).not.toThrow();    
  });

  test("returns the initials of a firstname and complex surname", () => {
    expect(generateInitials("Maria", "von Trapp")).toBe("MvT");
    expect(generateInitials("Ruud", "van Nistelrooy")).toBe("RvN");
    expect(generateInitials("Kevin", "de Bruyne")).toBe("KdB");
    expect(generateInitials("John", "le Carre")).toBe("JlC"); // will fail because I've not added all possible connectors to the array, see drupal link in function
  });

  test("returns the capitalized initials of a firstname and surname", () => {
    expect(generateInitials("frederic", "bonneville")).toBe("F.B");
    expect(generateInitials("terry", "thomas")).toBe("T.T");
    expect(generateInitials("zygote", "derriere")).toBe("Z.D");
    expect(generateInitials("éowyn", "österreich")).toBe("É.Ö");


  });

  test("returns the capitalized initials of a firstname and double-barrelled surname", () => {
    expect(generateInitials("balthazar", "Farquar-smith")).toBe("BF-S");
    expect(generateInitials("Henry", "rolls-royce")).toBe("HR-R");
    expect(generateInitials("lobelia", "sackville-Baggins")).toBe("LS-B");
  });

  test("returns the capitalised initials of a firstname and complex surname", () => {
    expect(generateInitials("maria", "von Trapp")).toBe("MvT");
    expect(generateInitials("Ruud", "van nistelrooy")).toBe("RvN");
    expect(generateInitials("kevin", "De bruyne")).toBe("KdB");
  });

// ff needs to stay lowercase? Are both letters included as one initial?
});

describe("addVAT", () => {
  test("throws error if missing arguments", () => {
    expect(() => {
      addVAT();
    }).toThrow();

    expect(() => {
      addVAT(100);
    }).toThrow();
  });  

  test("throws error if too many arguments", () => {

    expect(() => {
      addVAT(100, 54, 76);
    }).toThrow();
  });  

  test("throws error when arguments aren't numbers", () => {
    expect(() => {
      addVAT('100');
    }).toThrow();

    expect(() => {
      addVAT('100', 20);
    }).toThrow();

    expect(() => {
      addVAT(100, '20');
    }).toThrow();

    expect(() => {
      addVAT('100', '20');
    }).toThrow();
  });

  test("throw error if vat is negative", () => {
    expect(() => {
      addVAT(50 + 50, -200);
    }).toThrow();

    expect(() => {
      addVAT(100, -200);
    }).toThrow();
    
    expect(() => {
      addVAT(100, -20);
    }).toThrow();
  });

  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
    expect(addVAT(33.5, 17.5)).not.toBeGreaterThan(39.36);
    expect(addVAT(33.5, 17.5)).toBeCloseTo(39.36);
  });

  test("adds a VAT of 13.6% to a price of 32.47", () => {
    expect(addVAT(32.47, 13.6)).toBe(36.89);
    expect(addVAT(32.47, 13.6)).not.toBeGreaterThan(36.89);
    expect(addVAT(32.47, 13.6)).toBeCloseTo(36.89);
  });

  test("adds a VAT of 9.99% to a price of 77.77", () => {
    expect(addVAT(77.77, 9.99)).toBe(85.54);
    expect(addVAT(77.77, 9.99)).not.toBeGreaterThan(85.54);
    expect(addVAT(77.77, 9.99)).toBeCloseTo(85.54);
  });

  test("adds a VAT of 0% to a price", () => {
    expect(addVAT(25, 0)).toBe(25);
    expect(addVAT(0, 0)).toBe(0);
    expect(addVAT(-25, 0)).toBe(-25);
  });

  test("adds a VAT to a price of 0", () => {
    expect(addVAT(0, 10)).toBe(0);
    expect(addVAT(0, 20)).not.toBeGreaterThan(0);
    expect(addVAT(0, 20)).toBeLessThanOrEqual(0);
  });

  test("adds a VAT to a sum", () => {
    expect(addVAT(50 + 50, 20)).toBe(120);
    expect(addVAT(-100 + 200, 20)).toBe(120);
    expect(addVAT(200 + -100, 20)).toBe(120);
  });
});

describe("getSalePrice", () => {

  test("throws error if missing arguments", () => {
    expect(() => {
      getSalePrice();
    }).toThrow();

    expect(() => {
      getSalePriceT(100);
    }).toThrow();
  });  

  test("throws error if too many arguments", () => {
    expect(() => {
      getSalePriceT(100, 75, 50);
    }).toThrow();
  }); 

  test("throws error when arguments aren't numbers", () => {
    expect(() => {
      getSalePrice('100');
    }).toThrow();

    expect(() => {
      getSalePrice('six', 20);
    }).toThrow();

    expect(() => {
      getSalePrice(100, true);
    }).toThrow();

    expect(() => {
      getSalePrice('100', '20');
    }).toThrow();
  });

  test("throw error if numbers are negative", () => {
    expect(() => {
      getSalePrice(-50, -200);
    }).toThrow();

    expect(() => {
      getSalePrice(100, -200);
    }).toThrow();
    
    expect(() => {
      getSalePrice(-100, 50);
    }).toThrow();
  });

  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
    expect(getSalePrice(100, 33.3)).not.toBeLessThan(66.7);
    expect(getSalePrice(100, 33.3)).toBeCloseTo(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
    expect(getSalePrice(79.99, 15)).not.toBeLessThan(67.99);
    expect(getSalePrice(79.99, 15)).toBeCloseTo(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });

  test("doesn't reduce a price lower than 0", () => {
    expect(getSalePrice(100, 100)).toBe(0);
    expect(getSalePrice(100, 101)).toBe(0);
    expect(getSalePrice(100, 200)).toBe(0);
    expect(getSalePrice(5, 150)).toBe(0);
  });

});

describe("getMiddleCharacter", () => {

  test("throw error if not a string", () => {

    expect(() => {
      getMiddleCharacter();
    }).toThrow();

    expect(() => {
      getMiddleCharacter(true);
    }).toThrow();

    expect(() => {
      getMiddleCharacter(null);
    }).toThrow();

    expect(() => {
      getMiddleCharacter(undefined);
    }).toThrow();

    expect(() => {
      getMiddleCharacter(146);
    }).toThrow();

    expect(() => {
      getMiddleCharacter('too many ', 'arguments');
    }).toThrow();

  });

  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("abcde")).toBe("c");
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
    expect(getMiddleCharacter("Do geese see God?")).toBe(" ");
    expect(getMiddleCharacter("1")).toBe("1"); // string length same as return
    expect(getMiddleCharacter("123")).toBe("2");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("fghijk")).toBe("hi");
    expect(getMiddleCharacter("help!!")).toBe("lp");
    expect(getMiddleCharacter("pocket-handkerchief!")).toBe("nd");
    expect(getMiddleCharacter("II")).toBe("II"); // string length same length as return
    expect(getMiddleCharacter("")).toBe(""); // string length less than return
  });

  // I feel like there's more edge cases I'm not anticipating
});

describe("reverseWord", () => {
  
  test("throw error if not a string", () => {

    expect(() => {
      reverseWord();
    }).toThrow();

    expect(() => {
      reverseWord(true);
    }).toThrow();

    expect(() => {
      reverseWord(null);
    }).toThrow();

    expect(() => {
      reverseWord(undefined);
    }).toThrow();

    expect(() => {
      reverseWord(146);
    }).toThrow();

    expect(() => {
      reverseWord('too', 'many', 'arguments');
    }).toThrow();



  });

  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
    expect(reverseWord("12345")).toBe("54321");
    expect(reverseWord("kayak")).toBe("kayak");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
    expect(reverseWord("do geese see god")).toBe("dog ees eseeg od");
  });
});

describe("reverseAllWords", () => {


  test("throw error if not an array", () => {

    expect(() => {
      reverseAllWords();
    }).toThrow();

    expect(() => {
      reverseAllWords(true);
    }).toThrow();

    expect(() => {
      rreverseAllWords(null);
    }).toThrow();

    expect(() => {
      reverseAllWords(undefined);
    }).toThrow();

    expect(() => {
      reverseAllWords(146);
    }).toThrow();
  });

  test("throw error if not an array of strings", () => { // I wasn't expecting this test to pass. Is it because reverseWord() is handling it?

    expect(() => {
      reverseAllWords([true, false, true]);
    }).toThrow();

    expect(() => {
      reverseAllWords([null, null, null]);
    }).toThrow();

    expect(() => {
      reverseAllWords([undefined, undefined, undefined]);
    }).toThrow();

    expect(() => {
      reverseAllWords(['looking', 'over', 'a', 4, 'leaf', 'clover']);
    }).toThrow();

    expect(() => {
      reverseAllWords([1, 2, 3]);
    }).toThrow();
  });

  test("throw error if too many arguments", () => {
     expect(() => {
      reverseAllWords(['too', 'many'], ['arguments']);
    }).toThrow();
  });

  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });
});

describe.only("countLinuxUsers", () => {
  
  test("throw error if users not an object", () => {
    const users = 'I am not the object you are looking for!';
    expect(() => {
      countLinuxUsers(users);
    }).toThrow();

  });

  test("throw error if no users", () => {
    const users = [];
    expect(() => {
      countLinuxUsers(users);
    }).toThrow();
  });

  test("throw error if a user has no type property", () => {
    const users = [
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Heather", colour: "Red", car: "Ferrari" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(() => {
      countLinuxUsers(users);
    }).toThrow();
  });

  test("throw error if type property has no string value", () => {
    const users = [
      { name: "Paul", OS: "Firefox OS", type: true },
      { name: "Sheila", OS: "Windows 10", type: undefined },
      { name: "Heather", OS: "Ubuntu 18.04", type: 18.04  },
      { name: "Pedro", OS: "Windows 95", type: null }
    ];
    expect(() => {
      countLinuxUsers(users);
    }).toThrow();
  });


// error if type value not a single string
// check the os is compatible with the type (not an error as the bug might be os not type)


  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });
});

xdescribe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });
});

xdescribe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });
});
