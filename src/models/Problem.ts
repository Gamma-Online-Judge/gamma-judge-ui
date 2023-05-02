export class Problem {
  constructor(data: any = {}) {
    const sampleInputs = data.sampleInputs || []
    this.id = data._id || ""
    this.customId = data.customId || ""
    this.title = data.title || "";
    this.statment = data.statment || "";
    this.input = data.input || "";
    this.output = data.output || "";
    this.sampleInputs = sampleInputs.map((sampleInput: any) => new SampleInput(sampleInput))
    this.notes = data.notes || "";
<<<<<<< HEAD
    this.contest = data.contestId || ""
=======
    this.contestId = data.contestId || ""
>>>>>>> cfbec9d215bee51239e67d80f68cf8ee92b4c20f
    this.tags = data.tags || []
    this.tutorial = data.tutorial || ""
    this.timeLimit = data.timeLimit || 0
    this.memoryLimit = data.memoryLimit || 0
  }
  id: string;
  customId: string;
  title: string;
  statment: string;
  input: string;
  output: string;
  sampleInputs: SampleInput[];
  notes: string;
  contestId: string;
  tags: string[];
  tutorial: string;
  timeLimit: number;
  memoryLimit: number;
}

export class SampleInput {
  constructor(data: any = {}) {
    this.input = data.input || "";
    this.output = data.output || ""
  }
  input: string;
  output: string;
}
