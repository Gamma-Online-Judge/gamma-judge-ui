import { Submission } from "../models/Submission";
import { api } from "./axiosBase";

export const getSubmissionAsync = async (contestId: string) => {
    const result = await api.get(`/submissions/${contestId}`);
    return new Submission(result.data);
}

export const getAllSubmissionsAsync = async (limit: number, skip: number) => {
    const result = await api.get(`/submissions?limit=${limit}&skip=${skip}`);
    const contestsData = result.data as []
    return contestsData.map(data => new Submission(data))
}

export const submitCodeAsync = async (problemId: string, file: File, language: string, userId: string) => {
    var data = new FormData();
    data.append('Language', language);
    data.append('ProblemId', problemId);
    data.append('Files', file);
    data.append('UserId', userId);
    const result = await api.post(`/submissions`, data);
    return new Submission(result.data);
}

