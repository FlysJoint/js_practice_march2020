const { 
    sumMultiples 
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

    const arr = [4, 17, 32, 15];

    test('throws if no parameters', () => {
        expect(sumMultiples(arr)).toBe(15);
    });

});