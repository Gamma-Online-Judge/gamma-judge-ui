export class Contest {
    constructor(data: any = {}) {
        const problems = data.problems || []
        this.id = data.id || ''
        this.customId = data.customId || ''
        this.name = data.name || ''
        this.date = new Date(data.date) || new Date()
        this.problems = problems.map((contestProblem: any) => new ContestProblem(contestProblem))
    }
    id: string;
    customId: string
    name: string;
    date: Date;
    problems: ContestProblem[]
}

export class ContestProblem {
    constructor(data: any = {}) {
        this.customId = data.customId || ''
        this.identifier = data.identifier || ''
    }
    toString() { // To use sort
        return this.identifier
    }
    customId: string;
    identifier: string;
}