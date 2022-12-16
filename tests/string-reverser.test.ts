import { describe, expect, test } from '@jest/globals';
import StringReverser from '../src/string-reverser';

describe('string reverser class', () => {
    test('should reverse all string characters', () => {
        expect(StringReverser.reverse("Target Sistemas")).toEqual("sametsiS tegraT");
    });
});
