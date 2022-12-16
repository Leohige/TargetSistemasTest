import { question, questionInt } from 'readline-sync';
import Sum from "./sum";
import Fibonacci from "./fibonacci";
import DailyRevenue from "./daily-revenue";
import dailyRevenueData from './data/daily-revenue-data.json';
import MonthlyRevenue from './monthly-revenue';
import monthlyRevenueData from './data/monthly-revenue-data.json';
import StringReverser from "./string-reverser";

function sum() : void {
    const index: number = questionInt('Enter a integer number to \'index\' (default 13): ', { defaultInput: '13' });
    const sum: number = questionInt('Enter a integer number to \'sum\' (default 0): ', { defaultInput: '0' });
    const key: number = questionInt('Enter a integer number to \'k\' (default 0): ', { defaultInput: '0' });

    const result = Sum.makeSum(index, sum, key);

    console.log(result);
}

function fibonacci() : void {
    const number = questionInt('Enter a number to check if it belongs to Fibonacci sequence: ');

    const isInSequence = Fibonacci.isInSequence(number);
    if (isInSequence) {
        console.log('Belongs to the sequence.');
    } else {
        console.log('Do not belongs to the sequence');
    }
}

function dailyRevenue() : void {
    const revenue = new DailyRevenue(dailyRevenueData);

    console.log(`Min revenue in a day: ${revenue.getMinRevenue()}`);
    console.log(`Max revenue in a day: ${revenue.getMaxRevenue()}`);
    console.log(`Days with above average revenue: ${revenue.daysWithAboveAverageRevenue()}`);
}

function monthlyRevenue() : void {
    const revenue = new MonthlyRevenue(monthlyRevenueData);
    const states = revenue.getStates();

    for (const state of states.keys()) {
        const percentage = revenue.getStatePercentage(state).toFixed(2);

        console.log(`The state '${state}' represents ${percentage}% of total monthly revenue.`)
    }
}

function reverseString() : void {
    const str = question('Enter a string to reverse: ');

    const reversed = StringReverser.reverse(str);

    console.log(reversed);
}

function menu() : void {
    while (true) {
        console.log('\nMenu:');
        console.log('1. Sum');
        console.log('2. Fibonacci');
        console.log('3. Daily Revenue');
        console.log('4. Monthly Revenue');
        console.log('5. Reverse String');
        console.log('0. Exit');
        
        const option = questionInt('\nChoose an option: ');
        
        switch (option) {
            case 1:
                sum();
                break;
            case 2:
                fibonacci();
                break;
            case 3:
                dailyRevenue();
                break;
            case 4:
                monthlyRevenue();
                break;
            case 5:
                reverseString();
                break;
            case 0:
                console.log('Exiting...');
                process.exit(0);
            default:
                console.log('Invalid option. Try again.');
                break;
        }
    }
}

menu();
