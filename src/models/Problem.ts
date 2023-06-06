export class Problem {
  constructor(data: any = {}) {
    const sampleInputs = data.sampleInputs || []
    this.id = data._id || ""
    this.customId = data.customId || ""
    this.sampleInputs = sampleInputs.map((sampleInput: any) => new SampleInput(sampleInput))
    this.contestId = data.contestId || ""
    this.tags = data.tags || []
    this.timeLimit = data.timeLimit || 0
    this.memoryLimit = data.memoryLimit || 0
    this.pt_BR = new LanguageProblemData(data.pt_BR);
  }
  id: string;
  customId: string;
  sampleInputs: SampleInput[];
  contestId: string;
  tags: string[];
  timeLimit: number;
  memoryLimit: number;
  pt_BR: LanguageProblemData;
}

export class SampleInput {
  constructor(data: any = {}) {
    this.input = data.input || "";
    this.output = data.output || ""
  }
  input: string;
  output: string;
}

export class LanguageProblemData {
  constructor(data: any = {}) {
    this.title = data.title || "";
    this.statement = data.statement || "";
    this.input = data.input || "";
    this.output = data.output || "";
    this.tutorial = data.tutorial || ""
    this.notes = data.notes || "";
  };
  notes: string;
  tutorial: string;
  title: string;
  statement: string;
  input: string;
  output: string;
}
