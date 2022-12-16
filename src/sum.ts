export default class Sum {
    static makeSum(index: number, sum: number, k: number) : number {
        while (k < index) {
            k += 1;
            sum += k;
        }

        return sum;
    }
}
