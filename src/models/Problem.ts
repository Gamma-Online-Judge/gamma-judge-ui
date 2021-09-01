export class Problem {
  constructor(data: any = {}) {
    this.id = data.id || ""
    this.title = data.title || "";
    this.statement = data.statement || "";
    this.input = data.input || "";
    this.output = data.output || "";
    this.sampleInputs = data.sampleInputs || [];
    this.notes = data.notes || "";
    this.contest = data.contest || ""
    this.tags = data.tags || []
  }
  id: string;
  title: string;
  statement: string;
  input: string;
  output: string;
  sampleInputs: SampleInput[];
  notes: string;
  contest: string;
  tags: string[]
}

export class SampleInput {
  constructor(data: any = {}) {
    this.input = data.input || "";
    this.output = data.output || "";
  }
  input: string;
  output: string;
}
