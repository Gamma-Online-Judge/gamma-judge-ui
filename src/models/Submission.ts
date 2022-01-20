export class Submission {
  constructor(data: any = {}) {
    this.id = data._id || ""
    this.problemId = data.problemId || ""
    this.userId = data.userId || "";
    this.language = data.language || "";
    this.fileName = data.input || "";
    this.status = data.output || "";
  }
  id: string;
  problemId: string;
  userId: string;
  language: string;
  fileName: string;
  status: string;
}
