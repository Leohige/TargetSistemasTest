export default class MonthlyRevenue {
    private states: Map<string, number>;
    private total: number;
    
    constructor(data: {[key: string]: number}) {
        this.states = new Map();
        this.total = 0;
        
        for (const state of Object.keys(data)) {
            this.states.set(state, data[state]);
            this.total += data[state];
        }
    }

    public getStates() : Map<string, number> {
        return this.states;
    }
    
    public getStatePercentage(state: string): number {
        if (!this.states.size) return 0;

        return ((this.states.get(state)?? 0) / this.total) * 100;
    }
}
