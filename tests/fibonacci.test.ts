import { describe, expect, test } from '@jest/globals';
import Fibonacci from '../src/fibonacci';

describe('fibonacci class', () => {
    test('should calculate the correct fibonacci sequence', () => {
        expect(Fibonacci.calculate(100)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
        expect(Fibonacci.calculate(1000)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597]);
    });

    test('should return the correct next fibonacci number', () => {
        expect(Fibonacci.next(1, 1)).toEqual(2);
        expect(Fibonacci.next(610, 987)).toEqual(1597);
    });

    test("should correctly determine if a number is in the Fibonacci sequence", () => {
        expect(Fibonacci.isInSequence(1)).toBeTruthy();
        expect(Fibonacci.isInSequence(144)).toBeTruthy();
        expect(Fibonacci.isInSequence(980)).toBeFalsy();
    });
});
