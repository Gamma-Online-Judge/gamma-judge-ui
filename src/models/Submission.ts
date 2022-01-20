export class Submission {
  constructor(data: any = {}) {
    this.id = data.id || ""
    this.problemId = data.problemId || ""
    this.userId = data.userId || "";
    this.language = data.language || "";
    this.fileName = data.fileName || "";
    this.status = data.status || "";
  }
  id: string;
  problemId: string;
  userId: string;
  language: string;
  fileName: string;
  status: string;
}
