export class Contest {
    constructor(data: any = {}) {
        this.id = data.id || ""
        this.name = data.name || ""
        this.date = new Date(data.date) || ""
    }
    id: string;
    name: string;
    date: Date;
}
