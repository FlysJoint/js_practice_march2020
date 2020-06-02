const { 
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require('../challenges/week9');

describe('sumMultiples', () => {

    test('throws if no parameters', () => {
        expect(() => sumMultiples()).toThrow();
    });

    test('throws if too many parameters', () => {
        expect(() => sumMultiples([4, 17, 32, 15], 5)).toThrow();
        expect(() => sumMultiples([4, 17, 32, 15], 'six')).toThrow();
        expect(() => sumMultiples([4, 17, 32, 15], false)).toThrow();
        expect(() => sumMultiples([4, 17, 32, 15], null)).toThrow();
        expect(() => sumMultiples([4, 17, 32, 15], [87, 56, 55])).toThrow();
        expect(() => sumMultiples([4, 17, 32, 15], {num: 6})).toThrow();
        expect(() => sumMultiples([4, 17, 32, 15], undefined)).not.toThrow();
    });

    test('throws if argument not an array', () => {
        expect(() => sumMultiples(5)).toThrow();
        expect(() => sumMultiples('five')).toThrow();
        expect(() => sumMultiples(null)).toThrow();
        expect(() => sumMultiples(undefined)).toThrow();
        expect(() => sumMultiples(false)).toThrow();
        expect(() => sumMultiples({num: 5})).toThrow();
        expect(() => sumMultiples([98, 60, 40])).not.toThrow();
    });

    test('throws if any array element is not a number', () => {
        expect(() => sumMultiples([5, 10, '15', 20])).toThrow();
        expect(() => sumMultiples([5, 10, true, 37])).toThrow();
        expect(() => sumMultiples([13, 25, null, 36])).toThrow();
        expect(() => sumMultiples([15, 19, {num: 15}, 25])).toThrow();
        expect(() => sumMultiples([24, 40, [45, 15, 5]])).toThrow();
        expect(() => sumMultiples([5, 105, undefined, 50])).toThrow();
        expect(() => sumMultiples([5, 10, 15, 20])).not.toThrow();
    });

    const arr = [4, 17, 32, 15];
    const arr2 = [4, 0, 32, 25, 9];

    test('returns the sum of any number divisible by 3 or 5', () => {
        expect(sumMultiples(arr)).toBe(15);
        expect(sumMultiples(arr2)).toBe(34);
    });

    const arr3 = [4, 17, -33, -15];
    const arr4 = [4, 17, -33, -15, 66, 30];

    test('returns the sum of any number divisible by 3 or 5 even if negative', () => {
        expect(sumMultiples(arr3)).toBe(-48);
        expect(sumMultiples(arr4)).toBe(48);
    });

});

describe('isValidDNA', () => {

    test('throw if no parameters', () => {
        expect(() => isValidDNA()).toThrow();
    });

    test('throw if too many parameters', () => {
        expect(() => isValidDNA('GATTACA', 6)).toThrow();
        expect(() => isValidDNA('GATTACA', 'six')).toThrow();
        expect(() => isValidDNA('GATTACA', 'true')).toThrow();
        expect(() => isValidDNA('GATTACA', null)).toThrow();
        expect(() => isValidDNA('GATTACA', {DNA: 'GATTACA'})).toThrow();
        expect(() => isValidDNA('GATTACA', ['G', 'A', 'T'])).toThrow();
        expect(() => isValidDNA('GATTACA', undefined)).not.toThrow();
    });

    test('returns true if string contains only C G T or A', () => {
        expect(isValidDNA('CGTA')).toBe(true);
        expect(isValidDNA('GATTACA')).toBe(true);
        expect(isValidDNA('T')).toBe(true);
        expect(isValidDNA('GATTACAGATTACAGATTACA')).toBe(true);
    });

    test('returns false if string is empty', () => {
        expect(isValidDNA('')).toBe(false);
    });

    test('returns false if string does not contain only C G T or A', () => {
        expect(isValidDNA('GATTXCA')).toBe(false);
        expect(isValidDNA('GATT ACA')).toBe(false);
        expect(isValidDNA('GATTACA!')).toBe(false);
    });

    test('returns false if string is not entirely uppercase', () => {
        expect(isValidDNA('gattaca')).toBe(false);
        expect(isValidDNA('cgat')).toBe(false);
        expect(isValidDNA('GATTACAGATTACaGATTACA')).toBe(false);
        expect(isValidDNA('TaG')).toBe(false);

    });
});

describe('getComplementaryDNA', () => {

    test('throws if no parameters', () => {
        expect(() => getComplementaryDNA()).toThrow();
    });

    test('throw if too many parameters', () => {
        expect(() => getComplementaryDNA('GATTACA', 6)).not.toThrow;
        expect(() => getComplementaryDNA('GATTACA', 'six')).not.toThrow;
        expect(() => getComplementaryDNA('GATTACA', 'true')).toThrow;
        expect(() => getComplementaryDNA('GATTACA', null)).toThrow;
        expect(() => getComplementaryDNA('GATTACA', {DNA: 'GATTACA'})).toThrow;
        expect(() => getComplementaryDNA('GATTACA', ['G', 'A', 'T'])).toThrow;
        expect(() => getComplementaryDNA('GATTACA', undefined)).not.toThrow;
    });

    test('throw if string is empty', () => {
        expect(() => getComplementaryDNA('')).toThrow();
    });

    test('returns complentaryDNA from DNA string', () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
        expect(getComplementaryDNA('GATTACA')).toBe('CTAATGT');
    });

    test('throw if string not valid DNA', () => {
        expect(() => getComplementaryDNA('GHSDFYF')).toThrow();
        expect(() => getComplementaryDNA('GATTAF')).toThrow();
        expect(() => getComplementaryDNA('gattaca')).toThrow();
        expect(() => getComplementaryDNA('123')).toThrow();
        expect(() => getComplementaryDNA('GATT ACA')).toThrow();
    });

});

describe('isItPrime', () => {

    test('throws if no parameter', () => {
        expect(() => isItPrime()).toThrow();
    });

    test('throws if too many parameters', () => {
        expect(() => isItPrime(4, 5)).toThrow();
        expect(() => isItPrime(4, '5')).toThrow();
        expect(() => isItPrime(4, true)).toThrow();
        expect(() => isItPrime(4, null)).toThrow();
        expect(() => isItPrime(4, [5, 6])).toThrow();
        expect(() => isItPrime(4, { num: 37 })).toThrow();
        expect(() => isItPrime(4, undefined)).not.toThrow();
    });

    test('throws if argument not a number', () => {
        expect(() => isItPrime('5')).toThrow();
        expect(() => isItPrime(true)).toThrow();
        expect(() => isItPrime(null)).toThrow();
        expect(() => isItPrime([5, 6])).toThrow();
        expect(() => isItPrime( { num: 37 } )).toThrow();
        expect(() => isItPrime(undefined)).toThrow();
    });

    test('returns true if number is prime', () => {
        expect(isItPrime(19)).toBe(true);
        expect(isItPrime(89)).toBe(true);
        expect(isItPrime(71)).toBe(true);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(41)).toBe(true);
    });

    test('returns false if number is not prime', () => {
        expect(isItPrime(144)).toBe(false);
        expect(isItPrime(48)).toBe(false);
        expect(isItPrime(54)).toBe(false);
        expect(isItPrime(56)).toBe(false);
        expect(isItPrime(81)).toBe(false);
    });
});

describe('createMatrix', () => {

    test('throws if no arguments', () => {
        expect(() => createMatrix()).toThrow();
    });

    test('throws if too many arguments', () => {
        expect(() => createMatrix(4, 'stuff', 3)).toThrow();
        expect(() => createMatrix(4, 'stuff', 'things')).toThrow();
        expect(() => createMatrix(4, 'stuff', true)).toThrow();
        expect(() => createMatrix(4, 'stuff', { obj: 5})).toThrow();
        expect(() => createMatrix(4, 'stuff', [4, 6, 5])).toThrow();
        expect(() => createMatrix(4, 'stuff', null)).toThrow();
        expect(() => createMatrix(4, 'stuff', undefined)).not.toThrow();
    });

    test('throws if n not a number', () => {
        expect(() => createMatrix('2', 'II')).toThrow();
        expect(() => createMatrix(null, 'II')).toThrow();
        expect(() => createMatrix(true, 'II')).toThrow();
        expect(() => createMatrix([2, 6], 'II')).toThrow();
        expect(() => createMatrix({ num: 4 }, 'II')).toThrow();
        expect(() => createMatrix(undefined, 'II')).toThrow();
        expect(() => createMatrix(2, 'II')).not.toThrow();
    });

    test('tests working with any type as fill', () => {
        expect(createMatrix(2, 6)).toEqual([[6, 6], [6, 6]]);
        expect(createMatrix(2, null)).toEqual([[null, null], [null, null]]);
        expect(createMatrix(2, 'two')).toEqual([['two', 'two'], ['two', 'two']]);
        expect(createMatrix(2, [2, 6])).toEqual([[[2, 6], [2, 6]], [[2, 6], [2, 6]]]);
        expect(createMatrix(2, { num: 4 })).toEqual([[{ num: 4 }, { num: 4 }], [{ num: 4 }, { num: 4 }]]);
        expect(() => createMatrix(2, undefined)).toThrow(); // any type except this one
    });

    test('returns matrix filled with something', () => {
        expect(createMatrix(1, 'things')).toEqual([['things']]);
        expect(createMatrix(2, 'stuff')).toEqual([['stuff', 'stuff'], ['stuff', 'stuff']]);
        expect(createMatrix(5, 'V')).toEqual([['V', 'V', 'V', 'V', 'V'], ['V', 'V', 'V', 'V', 'V'], ['V', 'V', 'V', 'V', 'V'], ['V', 'V', 'V', 'V', 'V'], ['V', 'V', 'V', 'V', 'V']]);
        expect(() => createMatrix(100, 'C')).not.toThrow();
    });
});

describe('areWeCovered', () => {
    test('throw if no arguments', () => {
        expect(() => areWeCovered()).toThrow();
    });

    const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];

    test('throw if too many arguments', () => {
        expect(() => areWeCovered(staff, 'Monday', 1)).toThrow();
        expect(() => areWeCovered(staff, 'Monday', 'is')).toThrow();
        expect(() => areWeCovered(staff, 'Monday', null)).toThrow();
        expect(() => areWeCovered(staff, 'Monday', [5, 7])).toThrow();
        expect(() => areWeCovered(staff, 'Monday', { holiday: true })).toThrow();
        expect(() => areWeCovered(staff, 'Monday', false)).toThrow();
        expect(() => areWeCovered(staff, 'Monday', undefined)).not.toThrow();
    });

    test('throw if day not a string', () => {
        expect(() => areWeCovered(staff, 1)).toThrow();
        expect(() => areWeCovered(staff, null)).toThrow();
        expect(() => areWeCovered(staff, [5, 8])).toThrow();
        expect(() => areWeCovered(staff, { holiday: true })).toThrow();
        expect(() => areWeCovered(staff, true)).toThrow();
        expect(() => areWeCovered(staff, undefined)).toThrow();
    });

    test('throw if day not in days array', () => {
        expect(() => areWeCovered(staff, 'Sunday')).not.toThrow();
        expect(() => areWeCovered(staff, 'Monday')).not.toThrow();
        expect(() => areWeCovered(staff, 'Happy Days')).toThrow();
        expect(() => areWeCovered(staff, 'Saturday')).not.toThrow();
        expect(() => areWeCovered(staff, 'What a day')).toThrow();
    });

    const staff2 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: 5, rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff3 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: true, rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff4 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: null, rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff5 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: undefined, rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff6 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: ['Billy', 'Bob'], rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff7 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: {first: 'Billy'}, rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];

    const staff8 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { firstName: 'Billy', rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff9 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];

    test('throws if name key not present in staff', () => {
        expect(() => areWeCovered(staff8, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff9, 'Sunday')).toThrow();
    });

    test('throws if employee name not a string', () => {
        expect(() => areWeCovered(staff2, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff3, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff4, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff5, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff6, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff7, 'Sunday')).toThrow();
    });

    const staff10 = [
        { name: "Sally", schedule: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff11 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil"}
    ];

    test('throws if rota key not present in staff', () => {
        expect(() => areWeCovered(staff10, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff11, 'Sunday')).toThrow();
    });

    const staff12 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Everyday"] }
    ];
    const staff13 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Funday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];

    test('throws if rota elements not in days array', () => {
        expect(() => areWeCovered(staff12, 'Sunday')).toThrow();
        expect(() => areWeCovered(staff13, 'Sunday')).toThrow();
    });

    const staff14 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] },
        { name: "Simon", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Niamh",  rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Susan", rota: ["Friday"] }
    ];

    test('returns true if enough staff members are working on the day', () => {
        expect(areWeCovered(staff14, 'Monday')).toBe(true);
    });

    test('returns false if not enough staff members are working on the day', () => {
        expect(areWeCovered(staff14, 'Thursday')).toBe(false);
    });

    const staff15 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Saturday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday"] }
    ];
    const staff16 = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Dave",  rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
        { name: "Phil", rota: ["Sunday", "Sunday", "Sunday"] }
    ];

    test('throws if selected day is duplicated in rota', () => {
        expect(() => areWeCovered(staff15, 'Monday')).not.toThrow(); // Saturday is duplicated but wont throw unless it is the day that is checked, at which point it will throw and the user can remove the duplicate(s)
        expect(() => areWeCovered(staff16, 'Sunday')).toThrow();
    });

});