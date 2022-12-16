export default class Fibonacci {
    static calculate(n: number): number[] {
        let sequence: number[] = [0, 1];
        
        while (sequence[sequence.length - 1] < n) {
            let next = this.next(sequence[sequence.length - 1], sequence[sequence.length - 2]);
            sequence.push(next);
        }
        
        return sequence;
    }

    static next(last: number, secondLast: number): number {
        return last + secondLast;
    }

    static isInSequence(n: number): boolean {
        const fibonacci = this.calculate(n);
        return fibonacci.includes(n);
    }
}
