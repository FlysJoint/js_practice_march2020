const {
    sumDigits
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