const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require('../challenges/week10');

describe('sumDigits', () => {

    test('throws if no parameters', () => {
        expect(() => sumDigits()).toThrow();
    });

    test('throws if too many parameters', () => {
        expect(() => sumDigits(123, 6)).toThrow();
        expect(() => sumDigits(123, '7')).toThrow();
        expect(() => sumDigits(123, null)).toThrow();
        expect(() => sumDigits(123, true)).toThrow();
        expect(() => sumDigits(123, [6, 9])).toThrow();
        expect(() => sumDigits(123, {num: 5})).toThrow();
        expect(() => sumDigits(123, undefined)).not.toThrow();
    });

    test('throws if n not a number', () => {
        expect(() => sumDigits(123)).not.toThrow();
        expect(() => sumDigits('7')).toThrow();
        expect(() => sumDigits(null)).toThrow();
        expect(() => sumDigits(true)).toThrow();
        expect(() => sumDigits([6, 9])).toThrow();
        expect(() => sumDigits({num: 5})).toThrow();
        expect(() => sumDigits(undefined)).toThrow();
    });

    test('returns sum of digits', () => {
        expect(sumDigits(64)).toBe(10);
        expect(sumDigits(348)).toBe(15);
        expect(sumDigits(9999)).toBe(36);
        expect(sumDigits(101)).toBe(2);
        expect(sumDigits(42)).toBe(6);
    });

    test('returns sum of digits of negative number', () => {
        expect(sumDigits(-23)).toBe(5);
        expect(sumDigits(-244)).toBe(10);
        expect(sumDigits(-869)).toBe(23);
    });

    test('returns 0 when passed 0', () => {
        expect(sumDigits(0)).toBe(0);
    });
});

describe('createRange', () => {

    test('throws if no parameters', () => {
        expect(() => createRange()).toThrow();
    });

    test('throws if too many parameters', () => {
        expect(() => createRange(3, 11, 2, 5)).toThrow();
        expect(() => createRange(3, 11, 2, '5')).toThrow();
        expect(() => createRange(3, 11, 2, true)).toThrow();
        expect(() => createRange(3, 11, 2, null)).toThrow();
        expect(() => createRange(3, 11, 2, [5, 7, 3])).toThrow();
        expect(() => createRange(3, 11, 2, {num: 5})).toThrow();
        expect(() => createRange(3, 11, 2, undefined)).not.toThrow();
    });

    test('throws if start not a number', () => {
        expect(() => createRange('5', 11, 2)).toThrow();
        expect(() => createRange(true, 11, 2)).toThrow();
        expect(() => createRange(null, 11, 2)).toThrow();
        expect(() => createRange([5, 7, 3], 11, 2)).toThrow();
        expect(() => createRange({num: 5}, 11, 2)).toThrow();
        expect(() => createRange(undefined, 11, 2)).toThrow();
    });

    test('throws if end not a number', () => {
        expect(() => createRange(3, '5', 2)).toThrow();
        expect(() => createRange(3, true, 2)).toThrow();
        expect(() => createRange(3, null, 2)).toThrow();
        expect(() => createRange(3, [5, 7, 3], 2)).toThrow();
        expect(() => createRange(3, {num: 5}, 2)).toThrow();
        expect(() => createRange(3, undefined, 2)).toThrow();
    });

    test('throws if step not a number', () => {
        expect(() => createRange(3, 11, '5')).toThrow();
        expect(() => createRange(3, 11, true)).toThrow();
        expect(() => createRange(3, 11, null)).toThrow();
        expect(() => createRange(3, 11, [5, 7, 3])).toThrow();
        expect(() => createRange(3, 11, {num: 5})).toThrow();
        expect(() => createRange(3, 11, undefined)).not.toThrow();
    });

    test('returns array starting at start, ending at end with steps of step', () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(15, 35, 5)).toEqual([15, 20, 25, 30, 35]);
        expect(createRange(42, 56, 7)).toEqual([42, 49, 56]);
    });

    test('returns array starting at start, ending at end with steps of 1', () => {
        expect(createRange(3, 7, 1)).toEqual([3, 4, 5, 6, 7]);
        expect(createRange(0, 3, 1)).toEqual([0, 1, 2, 3]);
        expect(createRange(98, 101, 1)).toEqual([98, 99, 100, 101]);
    });

    test('returns array starting at start, ending at end with default step of 1', () => {
        expect(createRange(6, 12)).toEqual([6, 7, 8, 9, 10, 11, 12]);
        expect(createRange(47, 53)).toEqual([47, 48, 49, 50, 51, 52, 53]);
        expect(createRange(1001, 1004)).toEqual([1001, 1002, 1003, 1004]);
    });

    test('returns descending array where end < start with default step of 1', () => {
        expect(createRange(12, 6)).toEqual([12, 11, 10, 9, 8, 7, 6]);
        expect(createRange(53, 50)).toEqual([53, 52, 51, 50]);
        expect(createRange(1001, 999)).toEqual([1001, 1000, 999]);
    });

    test('returns descending array where end < start with step of 1', () => {
        expect(createRange(1, -1, 1)).toEqual([1, 0, -1]);
        expect(createRange(5, 0, 1)).toEqual([5, 4, 3, 2, 1, 0]);
        expect(createRange(1001, 999, 1)).toEqual([1001, 1000, 999]);
    });

    test('returns descending array where end < start with step of step', () => {
        expect(createRange(15, -5, 5)).toEqual([15, 10, 5, 0, -5]);
        expect(createRange(42, 30, 6)).toEqual([42, 36, 30]);
        expect(createRange(1001, 999, 1)).toEqual([1001, 1000, 999]);
    });

    test('throws if end not exactly x steps away from start (same test covers for step + start being larger than end)', () => {
        expect(() => createRange(0, 3, 2)).toThrow();
        expect(() => createRange(5, 12, 5)).toThrow();
        expect(() => createRange(2, -4, 7)).toThrow();
    });
});

describe('getScreentimeAlertList', () => {

    test('throws if no parameters', () => {
        expect(() => getScreentimeAlertList()).toThrow();
    });

const users = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
    {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
    },
    {
        username: "rick_sanchez404",
        name: "Rick Sanchez",
        screenTime: [
            { date: "2019-05-04", usage: { mapMyRun: 0, codewars: 220, facebook: 0, safari: 10} },
            { date: "2019-05-05", usage: { mapMyRun: 0, codewars: 99, facebook: 0, safari: 16} },
            { date: "2019-05-06", usage: { mapMyRun: 39, codewars: 30, facebook: 0, safari: 31} },
        ]
    },
    {
        username: "gordons_alive",
        name: "Flash Gordon",
        screenTime: [
            { date: "2019-05-04", usage: { mapMyRun: 0, twitter: 50, facebook: 41, safari: 10} },
            { date: "2019-05-05", usage: { mapMyRun: 0, twitter: 83, facebook: 0, safari: 16} },
            { date: "2019-05-06", usage: { mapMyRun: 39, twitter: 30, facebook: 0, safari: 31} },
        ]
    },
]

    test('throws if too many parameters', () => {
        expect(() => getScreentimeAlertList(users, "2019-05-02", 1)).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-02", '2')).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-02", true)).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-02", null)).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-02", [4, 5, 7])).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-02", { num: 6 })).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-02", undefined)).not.toThrow();
    });

    test('throws if users not an array', () => {
        expect(() => getScreentimeAlertList(1, '2019-06-06')).toThrow();
        expect(() => getScreentimeAlertList('users', '2019-06-06')).toThrow();
        expect(() => getScreentimeAlertList(null, '2019-06-06')).toThrow();
        expect(() => getScreentimeAlertList(false, '2019-06-06')).toThrow();
        expect(() => getScreentimeAlertList(['users', 3], '2019-06-06')).toThrow();
        expect(() => getScreentimeAlertList(undefined, '2019-06-06')).toThrow();
    });

const users2 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
    {
        name: "Sam Jones",
        screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
        ]
    },
    {
        username: "rick_sanchez404",
        name: "Rick Sanchez",
        screenTime: [
            { date: "2019-05-04", usage: { mapMyRun: 0, codewars: 220, facebook: 0, safari: 10} },
            { date: "2019-05-05", usage: { mapMyRun: 0, codewars: 99, facebook: 0, safari: 16} },
            { date: "2019-05-06", usage: { mapMyRun: 39, codewars: 30, facebook: 0, safari: 31} },
        ]
    },
    {
        username: "gordons_alive",
        name: "Flash Gordon",
        screenTime: [
            { date: "2019-05-04", usage: { mapMyRun: 0, twitter: 50, facebook: 41, safari: 10} },
            { date: "2019-05-05", usage: { mapMyRun: 0, twitter: 83, facebook: 0, safari: 16} },
            { date: "2019-05-06", usage: { mapMyRun: 39, twitter: 30, facebook: 0, safari: 31} },
        ]
    },
]

    test('throws if username key does not exist', () => {
        expect(() => getScreentimeAlertList(users2, '2019-06-06')).toThrow();
    });

const users3 = [
    {
        username: "gordons_alive",
        name: "Flash Gordon",
        timeOnScreen: [
            { date: "2019-05-04", usage: { mapMyRun: 0, twitter: 50, facebook: 41, safari: 10} },
            { date: "2019-05-05", usage: { mapMyRun: 0, twitter: 83, facebook: 0, safari: 16} },
            { date: "2019-05-06", usage: { mapMyRun: 39, twitter: 30, facebook: 0, safari: 31} },
        ]
    },
]
const users4 = [
    {
        username: "gordons_alive",
        name: "Flash Gordon",
        screenTime: { date: "2019-05-04", usage: { mapMyRun: 0, twitter: 50, facebook: 41, safari: 10} },
    },
]

    test('throws if screenTime key does not exist', () => {
        expect(() => getScreentimeAlertList(users3, '2019-05-06')).toThrow();
        expect(() => getScreentimeAlertList(users4, '2019-05-06')).toThrow();
    });

const users5 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
]
const users6 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { today: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { today: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { today: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
]

    test('throws if date key does not exist', () => {
        expect(() => getScreentimeAlertList(users5, '2019-05-06')).toThrow();
        expect(() => getScreentimeAlertList(users6, '2019-05-06')).toThrow();
    });

const users7 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01" },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
]
const users8 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", amount: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
]

    test('throws if usage key does not exist', () => {
        expect(() => getScreentimeAlertList(users7, '2019-05-06')).toThrow();
        expect(() => getScreentimeAlertList(users8, '2019-05-06')).toThrow();
    });

const users9 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: '88', facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
    },
]

    test('throws if usage value not a number', () => {
        expect(() => getScreentimeAlertList(users9, '2019-05-03')).toThrow();
    });

    test('throws if date not a string', () => {
        expect(() => getScreentimeAlertList(users, 20191202)).toThrow();
        expect(() => getScreentimeAlertList(users, null)).toThrow();
        expect(() => getScreentimeAlertList(users, true)).toThrow();
        expect(() => getScreentimeAlertList(users, undefined)).toThrow();
        expect(() => getScreentimeAlertList(users, [2020, 6, 6])).toThrow();
        expect(() => getScreentimeAlertList(users, {date: '2020-06-06'})).toThrow();
        expect(() => getScreentimeAlertList(users, "date")).toThrow();
    });

    test('throws if date not in valid format', () => {
        expect(() => getScreentimeAlertList(users, "2019-13-02")).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-02-32")).toThrow();
        expect(() => getScreentimeAlertList(users, "02-02-2019")).toThrow();
        expect(() => getScreentimeAlertList(users, "02-02-2021")).toThrow();
        expect(() => getScreentimeAlertList(users, "2021-05-02")).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-00-02")).toThrow();
        expect(() => getScreentimeAlertList(users, "2019-05-00")).toThrow();
        expect(() => getScreentimeAlertList(users, "1980-02-02")).toThrow();
        expect(() => getScreentimeAlertList(users, "1066-10-14")).toThrow();
        expect(() => getScreentimeAlertList(users, "1945-06-06")).toThrow();
        expect(() => getScreentimeAlertList(users, "1588-08-01")).toThrow();
    });

    test('returns usernames of those using over screen time limit on that date', () => {
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "rick_sanchez404", "gordons_alive"]);
        expect(getScreentimeAlertList(users, "2019-05-05")).toEqual(["rick_sanchez404"]);
    });

    test('returns empty if no usernames over the limit on that date', () => {
        expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-05-07")).toEqual([]);
        expect(getScreentimeAlertList(users, "2019-12-25")).toEqual([]);
    });

});

describe('hexToRGB', () => {

    test('throws if no parameters', () => {
        expect(() => hexToRGB()).toThrow();
    });

    test('throws if too many parameters', () => {
        expect(() => hexToRGB('#FF1133', 1)).toThrow();
        expect(() => hexToRGB('#FF1133', 'e')).toThrow();
        expect(() => hexToRGB('#FF1133', true)).toThrow();
        expect(() => hexToRGB('#FF1133', null)).toThrow();
        expect(() => hexToRGB('#FF1133', ['FF', 13, 15])).toThrow();
        expect(() => hexToRGB('#FF1133', { num: 45 })).toThrow();
        expect(() => hexToRGB('#FF1133', undefined)).not.toThrow();
    });

    test('throws if argument not a string', () => {
        expect(() => hexToRGB(1)).toThrow();
        expect(() => hexToRGB(undefined)).toThrow();
        expect(() => hexToRGB(true)).toThrow();
        expect(() => hexToRGB(null)).toThrow();
        expect(() => hexToRGB([16, 45, 37])).toThrow();
        expect(() => hexToRGB({hex: '#FF1133'})).toThrow();
    });

    test('throws if argument not correctly formatted', () => {
        expect(() => hexToRGB('#FF#133')).toThrow();
        expect(() => hexToRGB('#FF1G33')).toThrow();
        expect(() => hexToRGB('FF1133')).toThrow();
        expect(() => hexToRGB('#-1F1133')).toThrow();
        expect(() => hexToRGB('#FF113368')).toThrow();
        expect(() => hexToRGB('# FF 11 33')).toThrow();
        expect(() => hexToRGB('#ff1133')).toThrow();
    });

    test('returns the hex in rbg', () => {
        expect(hexToRGB('#FF1133')).toBe("rgb(255,17,51)");
        expect(hexToRGB('#01DC17')).toBe("rgb(1,220,23)");
        expect(hexToRGB('#C54D7B')).toBe("rgb(197,77,123)");
    });

});

describe('findWinner', () => {

    test('throw if no parameters', () => {
        expect(() => findWinner()).toThrow();
    });

    const board = [
                    ["0", "X", null],
                    ["0", null, "X"],
                    ["0", null, "X"]
    ];

    test('throw if too many parameters', () => {
        expect(() => findWinner(board, 1)).toThrow();
        expect(() => findWinner(board, '1')).toThrow();
        expect(() => findWinner(board, null)).toThrow();
        expect(() => findWinner(board, true)).toThrow();
        expect(() => findWinner(board, [3,4,4])).toThrow();
        expect(() => findWinner(board, {winner: 'X'})).toThrow();
        expect(() => findWinner(board, undefined)).not.toThrow();
    });

    test('throw if board not an array', () => {
        expect(() => findWinner(1)).toThrow();
        expect(() => findWinner('1')).toThrow();
        expect(() => findWinner(null)).toThrow();
        expect(() => findWinner(true)).toThrow();
        expect(() => findWinner({winner: 'X'})).toThrow();
        expect(() => findWinner(undefined)).toThrow();
    });

    const board2 = [
                    ["X", "0", null],
                    ["X", null, "0"]
    ];

    const board4 = [
                    ["X", "0", null],
                    ["X", "0", null],
                    ["X", "0", null],
                    ["X", null, "0"]
    ];

    test('throw if board does not contain 3 elements', () => {
        expect(() => findWinner(board2)).toThrow();
        expect(() => findWinner(board4)).toThrow();
    });

    const board5 = [
                    ["X", "0", null],
                    "X",
                    ["X", "0", null]
    ];

    const board6 = [
                    ["X", "0", null],
                    [null, "X"],
                    null
    ];

    test('throw if board elements are not all arrays', () => {
        expect(() => findWinner(board5)).toThrow();
        expect(() => findWinner(board6)).toThrow();
    });

    const board7 = [
                    ["X", "0", null],
                    ["X", "0", null, "X"],
                    ["X", "0", null]
    ];

    const board8 = [
                    ["X", "0", null],
                    [null, "X"],
                    ["X", "0", null]
    ];

    test('throw if board sub arrays do not contain 3 elements', () => {
        expect(() => findWinner(board7)).toThrow();
        expect(() => findWinner(board8)).toThrow();
    });

    const board9 = [
                    ["X", "0", null],
                    ["0", null, "X"],
                    ["X", "5", null]
    ];

    const board10 = [
                    ["X", "0", null],
                    ["0", undefined, "X"],
                    ["X", "0", null]
    ];

    const board11 = [
                    ["X", "0", null],
                    ["0", 0, "X"],
                    ["X", "X", null]
    ];

    const board12 = [
                    ["X", "0", null],
                    ["0", 0, "X"],
                    ["X", "0X", null]
    ];

    test('throw if board sub arrays elements are not "X", "0" or null', () => {
        expect(() => findWinner(board9)).toThrow();
        expect(() => findWinner(board10)).toThrow();
        expect(() => findWinner(board11)).toThrow();
        expect(() => findWinner(board12)).toThrow();
    });

    const board13 = [
                    ["X", "0", null],
                    ["0", "X", "X"],
                    ["X", "X", null]
    ];

    const board14 = [
                    ["0", "0", null],
                    ["0", "0", "X"],
                    ["X", "X", "0"]
    ];

    test('throw if the board has too many Xs or 0s', () => {
        expect(() => findWinner(board13)).toThrow();
        expect(() => findWinner(board14)).toThrow();
    });

    const board16 = [
                    ["X", "0", null],
                    ["X", "0", null],
                    ["X", "0", null]
    ];

    test('throw if the board has more than one winner', () => {
        expect(() => findWinner(board16)).toThrow();
    });

    const board17 = [
                    ["0", "0", null],
                    ["0", "X", "X"],
                    ["0", "X", "X"]
    ];

    const board18 = [
                    ["0", "X", null],
                    ["0", "X", "X"],
                    [null, "X", "0"]
    ];

    const board19 = [
                    ["0", "0", "X"],
                    ["0", "X", "X"],
                    [null, "0", "X"]
    ];

    test('returns the winner of a vertical win', () => {
        expect(findWinner(board17)).toBe('0');
        expect(findWinner(board18)).toBe('X');
        expect(findWinner(board19)).toBe('X');
    });

    const board20 = [
                    ["0", "0", "0"],
                    [null, "X", "X"],
                    ["0", "X", "X"]
    ];

    const board21 = [
                    ["0", "X", null],
                    ["X", "X", "X"],
                    [null, "0", "0"]
    ];

    const board22 = [
                    ["0", "0", "X"],
                    ["0", null, "0"],
                    ["X", "X", "X"]
    ];

    test('returns the winner of a horizontal win', () => {
        expect(findWinner(board20)).toBe('0');
        expect(findWinner(board21)).toBe('X');
        expect(findWinner(board22)).toBe('X');
    });

    const board23 = [
                    ["0", "X", null],
                    ["X", "0", "X"],
                    [null, "0", "0"]
    ];

    const board24 = [
                    ["0", "0", "X"],
                    ["0", "X", "0"],
                    ["X", "0", "X"]
    ];

    test('returns the winner of a diagonal win', () => {
        expect(findWinner(board23)).toBe('0');
        expect(findWinner(board24)).toBe('X');
    });

    const board25 = [
                    ["0", "0", "X"],
                    [null, null, "0"],
                    ["X", "0", "X"]
    ];

    const board26 = [
                    ["0", "0", "X"],
                    ["0", null, "0"],
                    ["X", null, "X"]
    ];

    const board27 = [
                    ["0", "X", null],
                    ["0", null, "X"],
                    [null, "X", "0"]
    ];

    test('returns null if no winner', () => {
        expect(findWinner(board25)).toBe(null);
        expect(findWinner(board26)).toBe(null);
        expect(findWinner(board27)).toBe(null);
    });

});