import { describe, expect, test } from '@jest/globals';
import MonthlyRevenue from '../src/monthly-revenue';

describe('monthly revenue class', () => {
    test('should getStates returns the correct list of states and revenues', () => {
        const data = {'SP': 1000, 'PR': 2000, 'BA': 3000};
        const monthlyRevenue = new MonthlyRevenue(data);
        const states = monthlyRevenue.getStates();
        expect(states).toEqual(new Map([['SP', 1000], ['PR', 2000], ['BA', 3000]]));
    });

    test('should getStatePercentage returns the correct percentage for a given state', () => {
        const data = {'SP': 1000, 'PR': 2000, 'BA': 3000};
        const monthlyRevenue = new MonthlyRevenue(data);
        const percentage = monthlyRevenue.getStatePercentage('BA');
        expect(percentage).toEqual(50);
    });

    test('should getStatePercentage returns the correct percentage for a given state', () => {
        const data = {'SP': 1000, 'PR': 2000, 'BA': 3000};
        const monthlyRevenue = new MonthlyRevenue(data);
        const percentage = monthlyRevenue.getStatePercentage('BA');
        expect(percentage).toEqual(50);
    });

    test('should getStatePercentage returns 0 for a state that does not exist in the list', () => {
        const data = {'SP': 1000, 'PR': 2000, 'BA': 3000};
        const monthlyRevenue = new MonthlyRevenue(data);
        const percentage = monthlyRevenue.getStatePercentage('CE');
        expect(percentage).toEqual(0);
    });

    test('should getStatePercentage returns 0 for an empty list of states', () => {
        const data: {[key: string]: number} = {};
        const monthlyRevenue = new MonthlyRevenue(data);
        const percentage = monthlyRevenue.getStatePercentage('SP');
        expect(percentage).toEqual(0);
    });
});
