interface Revenue {
    dia: number,
    valor: number
}

export default class DailyRevenue {
    private revenue: number[];
    
    constructor(data: Revenue[]) {
        this.revenue = [];

        for (const item of data) {
            if (item.valor === 0) continue;
            this.revenue.push(item.valor);
        }
    }
    
    public getMinRevenue(): number {
        return Math.min(...this.revenue);
    }
    
    public getMaxRevenue(): number {
        return Math.max(...this.revenue);
    }

    public daysWithAboveAverageRevenue(): number {
        if (!this.revenue.length) return 0;

        const averageRevenue = this.revenue.reduce((a, b) => a + b) / this.revenue.length;
        
        let daysWithAboveAverageRevenue = 0;
        for (const value of this.revenue) {
            if (value > averageRevenue) {
                daysWithAboveAverageRevenue++;
            }
        }
        
        return daysWithAboveAverageRevenue;
    }
}
