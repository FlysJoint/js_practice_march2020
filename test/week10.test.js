const {
    sumDigits,
    createRange
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

    test('throws if end not exactly x steps away from start', () => {
        expect(() => createRange(0, 3, 2)).toThrow();
        expect(() => createRange(5, 12, 5)).toThrow();
        expect(() => createRange(2, -4, 7)).toThrow();
    });
});
