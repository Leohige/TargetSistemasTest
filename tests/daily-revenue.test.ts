import { describe, expect, test } from '@jest/globals';
import DailyRevenue from '../src/daily-revenue';

describe('daily revenue class', () => {
    test('should getMinRevenue returns the correct minimum revenue', () => {
        const data = [{dia: 1, valor: 10}, {dia: 2, valor: 20}, {dia: 3, valor: 15}, {dia: 4, valor: 0}];
        const dailyRevenue = new DailyRevenue(data);
        const minRevenue = dailyRevenue.getMinRevenue();
        expect(minRevenue).toEqual(10);
    });

    test('should getMaxRevenue returns the correct maximum revenue', () => {
        const data = [{dia: 1, valor: 10}, {dia: 2, valor: 20}, {dia: 3, valor: 15}, {dia: 4, valor: 0}];
        const dailyRevenue = new DailyRevenue(data);
        const maxRevenue = dailyRevenue.getMaxRevenue();
        expect(maxRevenue).toEqual(20);
    });

    test('should daysWithAboveAverageRevenue returns the correct number of days with above average revenue', () => {
        const data = [{dia: 1, valor: 10}, {dia: 2, valor: 20}, {dia: 3, valor: 15}, {dia: 4, valor: 0}];
        const dailyRevenue = new DailyRevenue(data);
        const daysWithAboveAverageRevenue = dailyRevenue.daysWithAboveAverageRevenue();
        expect(daysWithAboveAverageRevenue).toEqual(1);
    });

    test('should daysWithAboveAverageRevenue returns 0 when there are no revenue values', () => {
        const data = [];
        const dailyRevenue = new DailyRevenue(data);
        const daysWithAboveAverageRevenue = dailyRevenue.daysWithAboveAverageRevenue();
        expect(daysWithAboveAverageRevenue).toEqual(0);
    });
});
