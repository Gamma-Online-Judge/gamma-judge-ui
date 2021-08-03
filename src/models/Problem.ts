export class Problem {
  constructor(data: any = {}) {
    this.title = data.title || "";
    this.statement = data.statement || "";
    this.input = data.input || "";
    this.output = data.output || "";
    this.sampleInputs = data.sampleInputs || [];
    this.notes = data.notes || "";
  }
  title: string;
  statement: string;
  input: string;
  output: string;
  sampleInputs: SampleInput[];
  notes: string;
}

export class SampleInput {
  constructor(data: any = {}) {
    this.input = data.input || "";
    this.output = data.output || "";
  }
  input: string;
  output: string;
}
