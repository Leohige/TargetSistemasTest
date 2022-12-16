import { describe, expect, test } from '@jest/globals';
import Sum from '../src/sum';

describe('sum class', () => {
    test('should makeSum return the correct sum', () => {
        expect(Sum.makeSum(13, 0, 0)).toEqual(91);
    });
});
